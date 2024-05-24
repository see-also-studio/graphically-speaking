/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@barba/core/dist/barba.umd.js":
/*!****************************************************!*\
  !*** ./node_modules/@barba/core/dist/barba.umd.js ***!
  \****************************************************/
/***/ (function(module) {

!function(t,n){ true?module.exports=n():0}(this,(function(){function t(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function n(n,r,e){return r&&t(n.prototype,r),e&&t(n,e),n}function r(){return(r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t}).apply(this,arguments)}function e(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t,n){return(o=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function u(t,n,r){return(u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,r){var e=[null];e.push.apply(e,n);var i=new(Function.bind.apply(t,e));return r&&o(i,r.prototype),i}).apply(null,arguments)}function f(t){var n="function"==typeof Map?new Map:void 0;return(f=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return u(t,arguments,i(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),o(r,t)})(t)}function s(t,n){try{var r=t()}catch(t){return n(t)}return r&&r.then?r.then(void 0,n):r}"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var c,a="2.9.7",h=function(){};!function(t){t[t.off=0]="off",t[t.error=1]="error",t[t.warning=2]="warning",t[t.info=3]="info",t[t.debug=4]="debug"}(c||(c={}));var v=c.off,l=function(){function t(t){this.t=t}t.getLevel=function(){return v},t.setLevel=function(t){return v=c[t]};var n=t.prototype;return n.error=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.error,c.error,n)},n.warn=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.warn,c.warning,n)},n.info=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.info,c.info,n)},n.debug=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.log,c.debug,n)},n.i=function(n,r,e){r<=t.getLevel()&&n.apply(console,["["+this.t+"] "].concat(e))},t}(),d=O,m=E,p=g,w=x,b=T,y="/",P=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function g(t,n){for(var r,e=[],i=0,o=0,u="",f=n&&n.delimiter||y,s=n&&n.whitelist||void 0,c=!1;null!==(r=P.exec(t));){var a=r[0],h=r[1],v=r.index;if(u+=t.slice(o,v),o=v+a.length,h)u+=h[1],c=!0;else{var l="",d=r[2],m=r[3],p=r[4],w=r[5];if(!c&&u.length){var b=u.length-1,g=u[b];(!s||s.indexOf(g)>-1)&&(l=g,u=u.slice(0,b))}u&&(e.push(u),u="",c=!1);var E=m||p,x=l||f;e.push({name:d||i++,prefix:l,delimiter:x,optional:"?"===w||"*"===w,repeat:"+"===w||"*"===w,pattern:E?A(E):"[^"+k(x===f?x:x+f)+"]+?"})}}return(u||o<t.length)&&e.push(u+t.substr(o)),e}function E(t,n){return function(r,e){var i=t.exec(r);if(!i)return!1;for(var o=i[0],u=i.index,f={},s=e&&e.decode||decodeURIComponent,c=1;c<i.length;c++)if(void 0!==i[c]){var a=n[c-1];f[a.name]=a.repeat?i[c].split(a.delimiter).map((function(t){return s(t,a)})):s(i[c],a)}return{path:o,index:u,params:f}}}function x(t,n){for(var r=new Array(t.length),e=0;e<t.length;e++)"object"==typeof t[e]&&(r[e]=new RegExp("^(?:"+t[e].pattern+")$",R(n)));return function(n,e){for(var i="",o=e&&e.encode||encodeURIComponent,u=!e||!1!==e.validate,f=0;f<t.length;f++){var s=t[f];if("string"!=typeof s){var c,a=n?n[s.name]:void 0;if(Array.isArray(a)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but got array');if(0===a.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<a.length;h++){if(c=o(a[h],s),u&&!r[f].test(c))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'"');i+=(0===h?s.prefix:s.delimiter)+c}}else if("string"!=typeof a&&"number"!=typeof a&&"boolean"!=typeof a){if(!s.optional)throw new TypeError('Expected "'+s.name+'" to be '+(s.repeat?"an array":"a string"))}else{if(c=o(String(a),s),u&&!r[f].test(c))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but got "'+c+'"');i+=s.prefix+c}}else i+=s}return i}}function k(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function A(t){return t.replace(/([=!:$/()])/g,"\\$1")}function R(t){return t&&t.sensitive?"":"i"}function T(t,n,r){for(var e=(r=r||{}).strict,i=!1!==r.start,o=!1!==r.end,u=r.delimiter||y,f=[].concat(r.endsWith||[]).map(k).concat("$").join("|"),s=i?"^":"",c=0;c<t.length;c++){var a=t[c];if("string"==typeof a)s+=k(a);else{var h=a.repeat?"(?:"+a.pattern+")(?:"+k(a.delimiter)+"(?:"+a.pattern+"))*":a.pattern;n&&n.push(a),s+=a.optional?a.prefix?"(?:"+k(a.prefix)+"("+h+"))?":"("+h+")?":k(a.prefix)+"("+h+")"}}if(o)e||(s+="(?:"+k(u)+")?"),s+="$"===f?"$":"(?="+f+")";else{var v=t[t.length-1],l="string"==typeof v?v[v.length-1]===u:void 0===v;e||(s+="(?:"+k(u)+"(?="+f+"))?"),l||(s+="(?="+k(u)+"|"+f+")")}return new RegExp(s,R(r))}function O(t,n,r){return t instanceof RegExp?function(t,n){if(!n)return t;var r=t.source.match(/\((?!\?)/g);if(r)for(var e=0;e<r.length;e++)n.push({name:e,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return t}(t,n):Array.isArray(t)?function(t,n,r){for(var e=[],i=0;i<t.length;i++)e.push(O(t[i],n,r).source);return new RegExp("(?:"+e.join("|")+")",R(r))}(t,n,r):function(t,n,r){return T(g(t,r),n,r)}(t,n,r)}d.match=function(t,n){var r=[];return E(O(t,r,n),r)},d.regexpToFunction=m,d.parse=p,d.compile=function(t,n){return x(g(t,n),n)},d.tokensToFunction=w,d.tokensToRegExp=b;var S={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},j=new(function(){function t(){this.o=S,this.u=new DOMParser}var n=t.prototype;return n.toString=function(t){return t.outerHTML},n.toDocument=function(t){return this.u.parseFromString(t,"text/html")},n.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},n.getHtml=function(t){return void 0===t&&(t=document),this.toString(t.documentElement)},n.getWrapper=function(t){return void 0===t&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},n.getContainer=function(t){return void 0===t&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},n.removeContainer=function(t){document.body.contains(t)&&t.parentNode.removeChild(t)},n.addContainer=function(t,n){var r=this.getContainer();r?this.s(t,r):n.appendChild(t)},n.getNamespace=function(t){void 0===t&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},n.getHref=function(t){if(t.tagName&&"a"===t.tagName.toLowerCase()){if("string"==typeof t.href)return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},n.resolveUrl=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var e=n.length;if(0===e)throw new Error("resolveUrl requires at least one argument; got none.");var i=document.createElement("base");if(i.href=arguments[0],1===e)return i.href;var o=document.getElementsByTagName("head")[0];o.insertBefore(i,o.firstChild);for(var u,f=document.createElement("a"),s=1;s<e;s++)f.href=arguments[s],i.href=u=f.href;return o.removeChild(i),u},n.s=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},t}()),M=new(function(){function t(){this.h=[],this.v=-1}var e=t.prototype;return e.init=function(t,n){this.l="barba";var r={ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(r),this.v=0;var e={from:this.l,index:0,states:[].concat(this.h)};window.history&&window.history.replaceState(e,"",t)},e.change=function(t,n,r){if(r&&r.state){var e=r.state,i=e.index;n=this.m(this.v-i),this.replace(e.states),this.v=i}else this.add(t,n);return n},e.add=function(t,n){var r=this.size,e=this.p(n),i={ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(i),this.v=r;var o={from:this.l,index:r,states:[].concat(this.h)};switch(e){case"push":window.history&&window.history.pushState(o,"",t);break;case"replace":window.history&&window.history.replaceState(o,"",t)}},e.update=function(t,n){var e=n||this.v,i=r({},this.get(e),{},t);this.set(e,i)},e.remove=function(t){t?this.h.splice(t,1):this.h.pop(),this.v--},e.clear=function(){this.h=[],this.v=-1},e.replace=function(t){this.h=t},e.get=function(t){return this.h[t]},e.set=function(t,n){return this.h[t]=n},e.p=function(t){var n="push",r=t,e=S.prefix+"-"+S.history;return r.hasAttribute&&r.hasAttribute(e)&&(n=r.getAttribute(e)),n},e.m=function(t){return Math.abs(t)>1?t>0?"forward":"back":0===t?"popstate":t>0?"back":"forward"},n(t,[{key:"current",get:function(){return this.h[this.v]}},{key:"state",get:function(){return this.h[this.h.length-1]}},{key:"previous",get:function(){return this.v<1?null:this.h[this.v-1]}},{key:"size",get:function(){return this.h.length}}]),t}()),L=function(t,n){try{var r=function(){if(!n.next.html)return Promise.resolve(t).then((function(t){var r=n.next;if(t){var e=j.toElement(t);r.namespace=j.getNamespace(e),r.container=j.getContainer(e),r.html=t,M.update({ns:r.namespace});var i=j.toDocument(t);document.title=i.title}}))}();return Promise.resolve(r&&r.then?r.then((function(){})):void 0)}catch(t){return Promise.reject(t)}},$=d,_={__proto__:null,update:L,nextTick:function(){return new Promise((function(t){window.requestAnimationFrame(t)}))},pathToRegexp:$},q=function(){return window.location.origin},B=function(t){return void 0===t&&(t=window.location.href),U(t).port},U=function(t){var n,r=t.match(/:\d+/);if(null===r)/^http/.test(t)&&(n=80),/^https/.test(t)&&(n=443);else{var e=r[0].substring(1);n=parseInt(e,10)}var i,o=t.replace(q(),""),u={},f=o.indexOf("#");f>=0&&(i=o.slice(f+1),o=o.slice(0,f));var s=o.indexOf("?");return s>=0&&(u=D(o.slice(s+1)),o=o.slice(0,s)),{hash:i,path:o,port:n,query:u}},D=function(t){return t.split("&").reduce((function(t,n){var r=n.split("=");return t[r[0]]=r[1],t}),{})},F=function(t){return void 0===t&&(t=window.location.href),t.replace(/(\/#.*|\/|#.*)$/,"")},H={__proto__:null,getHref:function(){return window.location.href},getOrigin:q,getPort:B,getPath:function(t){return void 0===t&&(t=window.location.href),U(t).path},parse:U,parseQuery:D,clean:F};function I(t,n,r){return void 0===n&&(n=2e3),new Promise((function(e,i){var o=new XMLHttpRequest;o.onreadystatechange=function(){if(o.readyState===XMLHttpRequest.DONE)if(200===o.status)e(o.responseText);else if(o.status){var n={status:o.status,statusText:o.statusText};r(t,n),i(n)}},o.ontimeout=function(){var e=new Error("Timeout error ["+n+"]");r(t,e),i(e)},o.onerror=function(){var n=new Error("Fetch error");r(t,n),i(n)},o.open("GET",t),o.timeout=n,o.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),o.setRequestHeader("x-barba","yes"),o.send()}))}var C=function(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then};function N(t,n){return void 0===n&&(n={}),function(){for(var r=arguments.length,e=new Array(r),i=0;i<r;i++)e[i]=arguments[i];var o=!1,u=new Promise((function(r,i){n.async=function(){return o=!0,function(t,n){t?i(t):r(n)}};var u=t.apply(n,e);o||(C(u)?u.then(r,i):r(u))}));return u}}var X=new(function(t){function n(){var n;return(n=t.call(this)||this).logger=new l("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}e(n,t);var r=n.prototype;return r.init=function(){var t=this;this.registered.clear(),this.all.forEach((function(n){t[n]||(t[n]=function(r,e){t.registered.has(n)||t.registered.set(n,new Set),t.registered.get(n).add({ctx:e||{},fn:r})})}))},r.do=function(t){for(var n=this,r=arguments.length,e=new Array(r>1?r-1:0),i=1;i<r;i++)e[i-1]=arguments[i];if(this.registered.has(t)){var o=Promise.resolve();return this.registered.get(t).forEach((function(t){o=o.then((function(){return N(t.fn,t.ctx).apply(void 0,e)}))})),o.catch((function(r){n.logger.debug("Hook error ["+t+"]"),n.logger.error(r)}))}return Promise.resolve()},r.clear=function(){var t=this;this.all.forEach((function(n){delete t[n]})),this.init()},r.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var t=[];this.registered.forEach((function(n,r){return t.push(r)})),this.logger.info("Registered hooks: "+t.join(","))},n}(h)),z=function(){function t(t){if(this.P=[],"boolean"==typeof t)this.g=t;else{var n=Array.isArray(t)?t:[t];this.P=n.map((function(t){return $(t)}))}}return t.prototype.checkHref=function(t){if("boolean"==typeof this.g)return this.g;var n=U(t).path;return this.P.some((function(t){return null!==t.exec(n)}))},t}(),G=function(t){function n(n){var r;return(r=t.call(this,n)||this).k=new Map,r}e(n,t);var i=n.prototype;return i.set=function(t,n,r){return this.k.set(t,{action:r,request:n}),{action:r,request:n}},i.get=function(t){return this.k.get(t)},i.getRequest=function(t){return this.k.get(t).request},i.getAction=function(t){return this.k.get(t).action},i.has=function(t){return!this.checkHref(t)&&this.k.has(t)},i.delete=function(t){return this.k.delete(t)},i.update=function(t,n){var e=r({},this.k.get(t),{},n);return this.k.set(t,e),e},n}(z),Q=function(){return!window.history.pushState},W=function(t){return!t.el||!t.href},J=function(t){var n=t.event;return n.which>1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey},K=function(t){var n=t.el;return n.hasAttribute("target")&&"_blank"===n.target},V=function(t){var n=t.el;return void 0!==n.protocol&&window.location.protocol!==n.protocol||void 0!==n.hostname&&window.location.hostname!==n.hostname},Y=function(t){var n=t.el;return void 0!==n.port&&B()!==B(n.href)},Z=function(t){var n=t.el;return n.getAttribute&&"string"==typeof n.getAttribute("download")},tt=function(t){return t.el.hasAttribute(S.prefix+"-"+S.prevent)},nt=function(t){return Boolean(t.el.closest("["+S.prefix+"-"+S.prevent+'="all"]'))},rt=function(t){var n=t.href;return F(n)===F()&&B(n)===B()},et=function(t){function n(n){var r;return(r=t.call(this,n)||this).suite=[],r.tests=new Map,r.init(),r}e(n,t);var r=n.prototype;return r.init=function(){this.add("pushState",Q),this.add("exists",W),this.add("newTab",J),this.add("blank",K),this.add("corsDomain",V),this.add("corsPort",Y),this.add("download",Z),this.add("preventSelf",tt),this.add("preventAll",nt),this.add("sameUrl",rt,!1)},r.add=function(t,n,r){void 0===r&&(r=!0),this.tests.set(t,n),r&&this.suite.push(t)},r.run=function(t,n,r,e){return this.tests.get(t)({el:n,event:r,href:e})},r.checkLink=function(t,n,r){var e=this;return this.suite.some((function(i){return e.run(i,t,n,r)}))},n}(z),it=function(t){function n(r,e){var i;void 0===e&&(e="Barba error");for(var o=arguments.length,u=new Array(o>2?o-2:0),f=2;f<o;f++)u[f-2]=arguments[f];return(i=t.call.apply(t,[this].concat(u))||this).error=r,i.label=e,Error.captureStackTrace&&Error.captureStackTrace(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(i),n),i.name="BarbaError",i}return e(n,t),n}(f(Error)),ot=function(){function t(t){void 0===t&&(t=[]),this.logger=new l("@barba/core"),this.all=[],this.page=[],this.once=[],this.A=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var n=t.prototype;return n.add=function(t,n){switch(t){case"rule":this.A.splice(n.position||0,0,n.value);break;case"transition":default:this.all.push(n)}this.update()},n.resolve=function(t,n){var r=this;void 0===n&&(n={});var e=n.once?this.once:this.page;e=e.filter(n.self?function(t){return t.name&&"self"===t.name}:function(t){return!t.name||"self"!==t.name});var i=new Map,o=e.find((function(e){var o=!0,u={};return!(!n.self||"self"!==e.name)||(r.A.reverse().forEach((function(n){o&&(o=r.R(e,n,t,u),e.from&&e.to&&(o=r.R(e,n,t,u,"from")&&r.R(e,n,t,u,"to")),e.from&&!e.to&&(o=r.R(e,n,t,u,"from")),!e.from&&e.to&&(o=r.R(e,n,t,u,"to")))})),i.set(e,u),o)})),u=i.get(o),f=[];if(f.push(n.once?"once":"page"),n.self&&f.push("self"),u){var s,c=[o];Object.keys(u).length>0&&c.push(u),(s=this.logger).info.apply(s,["Transition found ["+f.join(",")+"]"].concat(c))}else this.logger.info("No transition found ["+f.join(",")+"]");return o},n.update=function(){var t=this;this.all=this.all.map((function(n){return t.T(n)})).sort((function(t,n){return t.priority-n.priority})).reverse().map((function(t){return delete t.priority,t})),this.page=this.all.filter((function(t){return void 0!==t.leave||void 0!==t.enter})),this.once=this.all.filter((function(t){return void 0!==t.once}))},n.R=function(t,n,r,e,i){var o=!0,u=!1,f=t,s=n.name,c=s,a=s,h=s,v=i?f[i]:f,l="to"===i?r.next:r.current;if(i?v&&v[s]:v[s]){switch(n.type){case"strings":default:var d=Array.isArray(v[c])?v[c]:[v[c]];l[c]&&-1!==d.indexOf(l[c])&&(u=!0),-1===d.indexOf(l[c])&&(o=!1);break;case"object":var m=Array.isArray(v[a])?v[a]:[v[a]];l[a]?(l[a].name&&-1!==m.indexOf(l[a].name)&&(u=!0),-1===m.indexOf(l[a].name)&&(o=!1)):o=!1;break;case"function":v[h](r)?u=!0:o=!1}u&&(i?(e[i]=e[i]||{},e[i][s]=f[i][s]):e[s]=f[s])}return o},n.O=function(t,n,r){var e=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(e+=Math.pow(10,r),t.from&&t.from[n]&&(e+=1),t.to&&t.to[n]&&(e+=2)),e},n.T=function(t){var n=this;t.priority=0;var r=0;return this.A.forEach((function(e,i){r+=n.O(t,e.name,i+1)})),t.priority=r,t},t}(),ut=function(){function t(t){void 0===t&&(t=[]),this.logger=new l("@barba/core"),this.S=!1,this.store=new ot(t)}var r=t.prototype;return r.get=function(t,n){return this.store.resolve(t,n)},r.doOnce=function(t){var n=t.data,r=t.transition;try{var e=function(){i.S=!1},i=this,o=r||{};i.S=!0;var u=s((function(){return Promise.resolve(i.j("beforeOnce",n,o)).then((function(){return Promise.resolve(i.once(n,o)).then((function(){return Promise.resolve(i.j("afterOnce",n,o)).then((function(){}))}))}))}),(function(t){i.S=!1,i.logger.debug("Transition error [before/after/once]"),i.logger.error(t)}));return Promise.resolve(u&&u.then?u.then(e):e())}catch(t){return Promise.reject(t)}},r.doPage=function(t){var n=t.data,r=t.transition,e=t.page,i=t.wrapper;try{var o=function(t){if(u)return t;f.S=!1},u=!1,f=this,c=r||{},a=!0===c.sync||!1;f.S=!0;var h=s((function(){function t(){return Promise.resolve(f.j("before",n,c)).then((function(){var t=!1;function r(r){return t?r:Promise.resolve(f.remove(n)).then((function(){return Promise.resolve(f.j("after",n,c)).then((function(){}))}))}var o=function(){if(a)return s((function(){return Promise.resolve(f.add(n,i)).then((function(){return Promise.resolve(f.j("beforeLeave",n,c)).then((function(){return Promise.resolve(f.j("beforeEnter",n,c)).then((function(){return Promise.resolve(Promise.all([f.leave(n,c),f.enter(n,c)])).then((function(){return Promise.resolve(f.j("afterLeave",n,c)).then((function(){return Promise.resolve(f.j("afterEnter",n,c)).then((function(){}))}))}))}))}))}))}),(function(t){if(f.M(t))throw new it(t,"Transition error [sync]")}));var r=function(r){return t?r:s((function(){var t=function(){if(!1!==o)return Promise.resolve(f.add(n,i)).then((function(){return Promise.resolve(f.j("beforeEnter",n,c)).then((function(){return Promise.resolve(f.enter(n,c,o)).then((function(){return Promise.resolve(f.j("afterEnter",n,c)).then((function(){}))}))}))}))}();if(t&&t.then)return t.then((function(){}))}),(function(t){if(f.M(t))throw new it(t,"Transition error [before/after/enter]")}))},o=!1,u=s((function(){return Promise.resolve(f.j("beforeLeave",n,c)).then((function(){return Promise.resolve(Promise.all([f.leave(n,c),L(e,n)]).then((function(t){return t[0]}))).then((function(t){return o=t,Promise.resolve(f.j("afterLeave",n,c)).then((function(){}))}))}))}),(function(t){if(f.M(t))throw new it(t,"Transition error [before/after/leave]")}));return u&&u.then?u.then(r):r(u)}();return o&&o.then?o.then(r):r(o)}))}var r=function(){if(a)return Promise.resolve(L(e,n)).then((function(){}))}();return r&&r.then?r.then(t):t()}),(function(t){if(f.S=!1,t.name&&"BarbaError"===t.name)throw f.logger.debug(t.label),f.logger.error(t.error),t;throw f.logger.debug("Transition error [page]"),f.logger.error(t),t}));return Promise.resolve(h&&h.then?h.then(o):o(h))}catch(t){return Promise.reject(t)}},r.once=function(t,n){try{return Promise.resolve(X.do("once",t,n)).then((function(){return n.once?N(n.once,n)(t):Promise.resolve()}))}catch(t){return Promise.reject(t)}},r.leave=function(t,n){try{return Promise.resolve(X.do("leave",t,n)).then((function(){return n.leave?N(n.leave,n)(t):Promise.resolve()}))}catch(t){return Promise.reject(t)}},r.enter=function(t,n,r){try{return Promise.resolve(X.do("enter",t,n)).then((function(){return n.enter?N(n.enter,n)(t,r):Promise.resolve()}))}catch(t){return Promise.reject(t)}},r.add=function(t,n){try{return j.addContainer(t.next.container,n),X.do("nextAdded",t),Promise.resolve()}catch(t){return Promise.reject(t)}},r.remove=function(t){try{return j.removeContainer(t.current.container),X.do("currentRemoved",t),Promise.resolve()}catch(t){return Promise.reject(t)}},r.M=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},r.j=function(t,n,r){try{return Promise.resolve(X.do(t,n,r)).then((function(){return r[t]?N(r[t],r)(n):Promise.resolve()}))}catch(t){return Promise.reject(t)}},n(t,[{key:"isRunning",get:function(){return this.S},set:function(t){this.S=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some((function(t){return"self"===t.name}))}},{key:"shouldWait",get:function(){return this.store.all.some((function(t){return t.to&&!t.to.route||t.sync}))}}]),t}(),ft=function(){function t(t){var n=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,0!==t.length&&(t.forEach((function(t){n.byNamespace.set(t.namespace,t)})),this.names.forEach((function(t){X[t](n.L(t))})))}return t.prototype.L=function(t){var n=this;return function(r){var e=t.match(/enter/i)?r.next:r.current,i=n.byNamespace.get(e.namespace);return i&&i[t]?N(i[t],i)(r):Promise.resolve()}},t}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var n=this;do{if(n.matches(t))return n;n=n.parentElement||n.parentNode}while(null!==n&&1===n.nodeType);return null});var st={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}};return new(function(){function t(){this.version=a,this.schemaPage=st,this.Logger=l,this.logger=new l("@barba/core"),this.plugins=[],this.hooks=X,this.dom=j,this.helpers=_,this.history=M,this.request=I,this.url=H}var e=t.prototype;return e.use=function(t,n){var r=this.plugins;r.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):"function"==typeof t.install?(t.install(this,n),r.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var n=void 0===t?{}:t,e=n.transitions,i=void 0===e?[]:e,o=n.views,u=void 0===o?[]:o,f=n.schema,s=void 0===f?S:f,c=n.requestError,a=n.timeout,h=void 0===a?2e3:a,v=n.cacheIgnore,d=void 0!==v&&v,m=n.prefetchIgnore,p=void 0!==m&&m,w=n.preventRunning,b=void 0!==w&&w,y=n.prevent,P=void 0===y?null:y,g=n.debug,E=n.logLevel;if(l.setLevel(!0===(void 0!==g&&g)?"debug":void 0===E?"off":E),this.logger.info(this.version),Object.keys(s).forEach((function(t){S[t]&&(S[t]=s[t])})),this.$=c,this.timeout=h,this.cacheIgnore=d,this.prefetchIgnore=p,this.preventRunning=b,this._=this.dom.getWrapper(),!this._)throw new Error("[@barba/core] No Barba wrapper found");this._.setAttribute("aria-live","polite"),this.q();var x=this.data.current;if(!x.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new G(d),this.prevent=new et(p),this.transitions=new ut(i),this.views=new ft(u),null!==P){if("function"!=typeof P)throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",P)}this.history.init(x.url.href,x.namespace),this.B=this.B.bind(this),this.U=this.U.bind(this),this.D=this.D.bind(this),this.F(),this.plugins.forEach((function(t){return t.init()}));var k=this.data;k.trigger="barba",k.next=k.current,k.current=r({},this.schemaPage),this.hooks.do("ready",k),this.once(k),this.q()},e.destroy=function(){this.q(),this.H(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,n,r){var e;if(void 0===n&&(n="barba"),this.transitions.isRunning)this.force(t);else if(!(e="popstate"===n?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(t,n,r),r&&(r.stopPropagation(),r.preventDefault()),this.page(t,n,e)},e.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then((function(){function r(){return Promise.resolve(n.hooks.do("afterEnter",t)).then((function(){}))}var e=function(){if(n.transitions.hasOnce){var r=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:r,data:t})).then((function(){}))}}();return e&&e.then?e.then(r):r()}))}catch(t){return Promise.reject(t)}},e.page=function(t,n,e){try{var i=function(){var t=o.data;return Promise.resolve(o.hooks.do("page",t)).then((function(){var n=s((function(){var n=o.transitions.get(t,{once:!1,self:e});return Promise.resolve(o.transitions.doPage({data:t,page:u,transition:n,wrapper:o._})).then((function(){o.q()}))}),(function(){0===l.getLevel()&&o.force(t.current.url.href)}));if(n&&n.then)return n.then((function(){}))}))},o=this;o.data.next.url=r({href:t},o.url.parse(t)),o.data.trigger=n;var u=o.cache.has(t)?o.cache.update(t,{action:"click"}).request:o.cache.set(t,o.request(t,o.timeout,o.onRequestError.bind(o,n)),"click").request,f=function(){if(o.transitions.shouldWait)return Promise.resolve(L(u,o.data)).then((function(){}))}();return Promise.resolve(f&&f.then?f.then(i):i())}catch(t){return Promise.reject(t)}},e.onRequestError=function(t){this.transitions.isRunning=!1;for(var n=arguments.length,r=new Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e];var i=r[0],o=r[1],u=this.cache.getAction(i);return this.cache.delete(i),!(this.$&&!1===this.$(t,u,i,o)||("click"===u&&this.force(i),1))},e.prefetch=function(t){var n=this;this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba")).catch((function(t){n.logger.error(t)})),"prefetch")},e.F=function(){!0!==this.prefetchIgnore&&(document.addEventListener("mouseover",this.B),document.addEventListener("touchstart",this.B)),document.addEventListener("click",this.U),window.addEventListener("popstate",this.D)},e.H=function(){!0!==this.prefetchIgnore&&(document.removeEventListener("mouseover",this.B),document.removeEventListener("touchstart",this.B)),document.removeEventListener("click",this.U),window.removeEventListener("popstate",this.D)},e.B=function(t){var n=this,r=this.I(t);if(r){var e=this.dom.getHref(r);this.prevent.checkHref(e)||this.cache.has(e)||this.cache.set(e,this.request(e,this.timeout,this.onRequestError.bind(this,r)).catch((function(t){n.logger.error(t)})),"enter")}},e.U=function(t){var n=this.I(t);if(n)return this.transitions.isRunning&&this.preventRunning?(t.preventDefault(),void t.stopPropagation()):void this.go(this.dom.getHref(n),n,t)},e.D=function(t){this.go(this.url.getHref(),"popstate",t)},e.I=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},e.q=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:r({href:t},this.url.parse(t))};this.C={current:n,next:r({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},n(t,[{key:"data",get:function(){return this.C}},{key:"wrapper",get:function(){return this._}}]),t}())}));
//# sourceMappingURL=barba.umd.js.map


/***/ }),

/***/ "./node_modules/gsap/CSSPlugin.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/CSSPlugin.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSPlugin": () => (/* binding */ CSSPlugin),
/* harmony export */   "_createElement": () => (/* binding */ _createElement),
/* harmony export */   "_getBBox": () => (/* binding */ _getBBox),
/* harmony export */   "checkPrefix": () => (/* binding */ _checkPropPrefix),
/* harmony export */   "default": () => (/* binding */ CSSPlugin)
/* harmony export */ });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
/*!
 * CSSPlugin 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */


var _win,
    _doc,
    _docElement,
    _pluginInitted,
    _tempDiv,
    _tempDivStyler,
    _recentSetterPlugin,
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _transformProps = {},
    _RAD2DEG = 180 / Math.PI,
    _DEG2RAD = Math.PI / 180,
    _atan2 = Math.atan2,
    _bigNum = 1e8,
    _capsExp = /([A-Z])/g,
    _horizontalExp = /(left|right|width|margin|padding|x)/i,
    _complexExp = /[\s,\(]\S/,
    _propertyAliases = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
},
    _renderCSSProp = function _renderCSSProp(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
  return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
  return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
},
    //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
_renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
  var value = data.s + data.c * ratio;
  data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
},
    _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
  return data.set(data.t, data.p, ratio ? data.e : data.b, data);
},
    _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
  return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
},
    _setterCSSStyle = function _setterCSSStyle(target, property, value) {
  return target.style[property] = value;
},
    _setterCSSProp = function _setterCSSProp(target, property, value) {
  return target.style.setProperty(property, value);
},
    _setterTransform = function _setterTransform(target, property, value) {
  return target._gsap[property] = value;
},
    _setterScale = function _setterScale(target, property, value) {
  return target._gsap.scaleX = target._gsap.scaleY = value;
},
    _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache.scaleX = cache.scaleY = value;
  cache.renderTransform(ratio, cache);
},
    _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache[property] = value;
  cache.renderTransform(ratio, cache);
},
    _transformProp = "transform",
    _transformOriginProp = _transformProp + "Origin",
    _supports3D,
    _createElement = function _createElement(type, ns) {
  var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.

  return e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
},
    _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
  var cs = getComputedStyle(target);
  return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
},
    _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
    _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
  var e = element || _tempDiv,
      s = e.style,
      i = 5;

  if (property in s && !preferPrefix) {
    return property;
  }

  property = property.charAt(0).toUpperCase() + property.substr(1);

  while (i-- && !(_prefixes[i] + property in s)) {}

  return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
},
    _initCore = function _initCore() {
  if (_windowExists() && window.document) {
    _win = window;
    _doc = _win.document;
    _docElement = _doc.documentElement;
    _tempDiv = _createElement("div") || {
      style: {}
    };
    _tempDivStyler = _createElement("div");
    _transformProp = _checkPropPrefix(_transformProp);
    _transformOriginProp = _transformProp + "Origin";
    _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.

    _supports3D = !!_checkPropPrefix("perspective");
    _pluginInitted = 1;
  }
},
    _getBBoxHack = function _getBBoxHack(swapIfPossible) {
  //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
  var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      oldParent = this.parentNode,
      oldSibling = this.nextSibling,
      oldCSS = this.style.cssText,
      bbox;

  _docElement.appendChild(svg);

  svg.appendChild(this);
  this.style.display = "block";

  if (swapIfPossible) {
    try {
      bbox = this.getBBox();
      this._gsapBBox = this.getBBox; //store the original

      this.getBBox = _getBBoxHack;
    } catch (e) {}
  } else if (this._gsapBBox) {
    bbox = this._gsapBBox();
  }

  if (oldParent) {
    if (oldSibling) {
      oldParent.insertBefore(this, oldSibling);
    } else {
      oldParent.appendChild(this);
    }
  }

  _docElement.removeChild(svg);

  this.style.cssText = oldCSS;
  return bbox;
},
    _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
  var i = attributesArray.length;

  while (i--) {
    if (target.hasAttribute(attributesArray[i])) {
      return target.getAttribute(attributesArray[i]);
    }
  }
},
    _getBBox = function _getBBox(target) {
  var bounds;

  try {
    bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
  } catch (error) {
    bounds = _getBBoxHack.call(target, true);
  }

  bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.

  return bounds && !bounds.width && !bounds.x && !bounds.y ? {
    x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
    y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : bounds;
},
    _isSVG = function _isSVG(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
},
    //reports if the element is an SVG on which getBBox() actually works
_removeProperty = function _removeProperty(target, property) {
  if (property) {
    var style = target.style;

    if (property in _transformProps && property !== _transformOriginProp) {
      property = _transformProp;
    }

    if (style.removeProperty) {
      if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
        //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
        property = "-" + property;
      }

      style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
    } else {
      //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
      style.removeAttribute(property);
    }
  }
},
    _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
  var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
  plugin._pt = pt;
  pt.b = beginning;
  pt.e = end;

  plugin._props.push(property);

  return pt;
},
    _nonConvertibleUnits = {
  deg: 1,
  rad: 1,
  turn: 1
},
    //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
_convertToUnit = function _convertToUnit(target, property, value, unit) {
  var curValue = parseFloat(value) || 0,
      curUnit = (value + "").trim().substr((curValue + "").length) || "px",
      // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
  style = _tempDiv.style,
      horizontal = _horizontalExp.test(property),
      isRootSVG = target.tagName.toLowerCase() === "svg",
      measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
      amount = 100,
      toPixels = unit === "px",
      toPercent = unit === "%",
      px,
      parent,
      cache,
      isSVG;

  if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
    return curValue;
  }

  curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
  isSVG = target.getCTM && _isSVG(target);

  if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
    px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
    return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPercent ? curValue / px * amount : curValue / 100 * px);
  }

  style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
  parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;

  if (isSVG) {
    parent = (target.ownerSVGElement || {}).parentNode;
  }

  if (!parent || parent === _doc || !parent.appendChild) {
    parent = _doc.body;
  }

  cache = parent._gsap;

  if (cache && toPercent && cache.width && horizontal && cache.time === _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time) {
    return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(curValue / cache.width * amount);
  } else {
    (toPercent || curUnit === "%") && (style.position = _getComputedProperty(target, "position"));
    parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.

    parent.appendChild(_tempDiv);
    px = _tempDiv[measureProperty];
    parent.removeChild(_tempDiv);
    style.position = "absolute";

    if (horizontal && toPercent) {
      cache = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(parent);
      cache.time = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time;
      cache.width = parent[measureProperty];
    }
  }

  return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
},
    _get = function _get(target, property, unit, uncache) {
  var value;
  _pluginInitted || _initCore();

  if (property in _propertyAliases && property !== "transform") {
    property = _propertyAliases[property];

    if (~property.indexOf(",")) {
      property = property.split(",")[0];
    }
  }

  if (_transformProps[property] && property !== "transform") {
    value = _parseTransform(target, uncache);
    value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
  } else {
    value = target.style[property];

    if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
      value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getProperty)(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
    }
  }

  return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
},
    _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
  // note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  if (!start || start === "none") {
    // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://greensock.com/forums/topic/18310-clippath-doesnt-work-on-ios/
    var p = _checkPropPrefix(prop, target, 1),
        s = p && _getComputedProperty(target, p, 1);

    if (s && s !== start) {
      prop = p;
      start = s;
    } else if (prop === "borderColor") {
      start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://greensock.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
    }
  }

  var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, target.style, prop, 0, 1, _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._renderComplexString),
      index = 0,
      matchIndex = 0,
      a,
      result,
      startValues,
      startNum,
      color,
      startValue,
      endValue,
      endNum,
      chunk,
      endUnit,
      startUnit,
      endValues;
  pt.b = start;
  pt.e = end;
  start += ""; // ensure values are strings

  end += "";

  if (end === "auto") {
    target.style[prop] = end;
    end = _getComputedProperty(target, prop) || end;
    target.style[prop] = start;
  }

  a = [start, end];

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorStringFilter)(a); // pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().


  start = a[0];
  end = a[1];
  startValues = start.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];
  endValues = end.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];

  if (endValues.length) {
    while (result = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.exec(end)) {
      endValue = result[0];
      chunk = end.substring(index, result.index);

      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
        color = 1;
      }

      if (endValue !== (startValue = startValues[matchIndex++] || "")) {
        startNum = parseFloat(startValue) || 0;
        startUnit = startValue.substr((startNum + "").length);
        endValue.charAt(1) === "=" && (endValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, endValue) + startUnit);
        endNum = parseFloat(endValue);
        endUnit = endValue.substr((endNum + "").length);
        index = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.lastIndex - endUnit.length;

        if (!endUnit) {
          //if something like "perspective:300" is passed in and we must add a unit to the end
          endUnit = endUnit || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[prop] || startUnit;

          if (index === end.length) {
            end += endUnit;
            pt.e += endUnit;
          }
        }

        if (startUnit !== endUnit) {
          startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
        } // these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.


        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: endNum - startNum,
          m: color && color < 4 || prop === "zIndex" ? Math.round : 0
        };
      }
    }

    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
  } else {
    pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
  }

  _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._relExp.test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _keywordToPercent = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
},
    _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
  var split = value.split(" "),
      x = split[0],
      y = split[1] || "50%";

  if (x === "top" || x === "bottom" || y === "left" || y === "right") {
    //the user provided them in the wrong order, so flip them
    value = x;
    x = y;
    y = value;
  }

  split[0] = _keywordToPercent[x] || x;
  split[1] = _keywordToPercent[y] || y;
  return split.join(" ");
},
    _renderClearProps = function _renderClearProps(ratio, data) {
  if (data.tween && data.tween._time === data.tween._dur) {
    var target = data.t,
        style = target.style,
        props = data.u,
        cache = target._gsap,
        prop,
        clearTransforms,
        i;

    if (props === "all" || props === true) {
      style.cssText = "";
      clearTransforms = 1;
    } else {
      props = props.split(",");
      i = props.length;

      while (--i > -1) {
        prop = props[i];

        if (_transformProps[prop]) {
          clearTransforms = 1;
          prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
        }

        _removeProperty(target, prop);
      }
    }

    if (clearTransforms) {
      _removeProperty(target, _transformProp);

      if (cache) {
        cache.svg && target.removeAttribute("transform");

        _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.


        cache.uncache = 1;
      }
    }
  }
},
    // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
_specialProps = {
  clearProps: function clearProps(plugin, target, property, endValue, tween) {
    if (tween.data !== "isFromStart") {
      var pt = plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
      pt.u = endValue;
      pt.pr = -10;
      pt.tween = tween;

      plugin._props.push(property);

      return 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */

},

/*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */
_identity2DMatrix = [1, 0, 0, 1, 0, 0],
    _rotationalProperties = {},
    _isNullTransform = function _isNullTransform(value) {
  return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
},
    _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
  var matrixString = _getComputedProperty(target, _transformProp);

  return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numExp).map(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round);
},
    _getMatrix = function _getMatrix(target, force2D) {
  var cache = target._gsap || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(target),
      style = target.style,
      matrix = _getComputedTransformMatrixAsArray(target),
      parent,
      nextSibling,
      temp,
      addedToDOM;

  if (cache.svg && target.getAttribute("transform")) {
    temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.

    matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
    return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
  } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
    //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
    temp = style.display;
    style.display = "block";
    parent = target.parentNode;

    if (!parent || !target.offsetParent) {
      // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
      addedToDOM = 1; //flag

      nextSibling = target.nextSibling;

      _docElement.appendChild(target); //we must add it to the DOM in order to get values properly

    }

    matrix = _getComputedTransformMatrixAsArray(target);
    temp ? style.display = temp : _removeProperty(target, "display");

    if (addedToDOM) {
      nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
    }
  }

  return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
},
    _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
  var cache = target._gsap,
      matrix = matrixArray || _getMatrix(target, true),
      xOriginOld = cache.xOrigin || 0,
      yOriginOld = cache.yOrigin || 0,
      xOffsetOld = cache.xOffset || 0,
      yOffsetOld = cache.yOffset || 0,
      a = matrix[0],
      b = matrix[1],
      c = matrix[2],
      d = matrix[3],
      tx = matrix[4],
      ty = matrix[5],
      originSplit = origin.split(" "),
      xOrigin = parseFloat(originSplit[0]) || 0,
      yOrigin = parseFloat(originSplit[1]) || 0,
      bounds,
      determinant,
      x,
      y;

  if (!originIsAbsolute) {
    bounds = _getBBox(target);
    xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
    yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
  } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
    //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
    x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
    y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
    xOrigin = x;
    yOrigin = y;
  }

  if (smooth || smooth !== false && cache.smooth) {
    tx = xOrigin - xOriginOld;
    ty = yOrigin - yOriginOld;
    cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
    cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
  } else {
    cache.xOffset = cache.yOffset = 0;
  }

  cache.xOrigin = xOrigin;
  cache.yOrigin = yOrigin;
  cache.smooth = !!smooth;
  cache.origin = origin;
  cache.originIsAbsolute = !!originIsAbsolute;
  target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).

  if (pluginToAddPropTweensTo) {
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
  }

  target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
},
    _parseTransform = function _parseTransform(target, uncache) {
  var cache = target._gsap || new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.GSCache(target);

  if ("x" in cache && !uncache && !cache.uncache) {
    return cache;
  }

  var style = target.style,
      invertedScaleX = cache.scaleX < 0,
      px = "px",
      deg = "deg",
      origin = _getComputedProperty(target, _transformOriginProp) || "0",
      x,
      y,
      z,
      scaleX,
      scaleY,
      rotation,
      rotationX,
      rotationY,
      skewX,
      skewY,
      perspective,
      xOrigin,
      yOrigin,
      matrix,
      angle,
      cos,
      sin,
      a,
      b,
      c,
      d,
      a12,
      a22,
      t1,
      t2,
      t3,
      a13,
      a23,
      a33,
      a42,
      a43,
      a32;
  x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
  scaleX = scaleY = 1;
  cache.svg = !!(target.getCTM && _isSVG(target));
  matrix = _getMatrix(target, cache.svg);

  if (cache.svg) {
    t1 = (!cache.uncache || origin === "0px 0px") && !uncache && target.getAttribute("data-svg-origin"); // if origin is 0,0 and cache.uncache is true, let the recorded data-svg-origin stay. Otherwise, whenever we set cache.uncache to true, we'd need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.

    _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
  }

  xOrigin = cache.xOrigin || 0;
  yOrigin = cache.yOrigin || 0;

  if (matrix !== _identity2DMatrix) {
    a = matrix[0]; //a11

    b = matrix[1]; //a21

    c = matrix[2]; //a31

    d = matrix[3]; //a41

    x = a12 = matrix[4];
    y = a22 = matrix[5]; //2D matrix

    if (matrix.length === 6) {
      scaleX = Math.sqrt(a * a + b * b);
      scaleY = Math.sqrt(d * d + c * c);
      rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).

      skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
      skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));

      if (cache.svg) {
        x -= xOrigin - (xOrigin * a + yOrigin * c);
        y -= yOrigin - (xOrigin * b + yOrigin * d);
      } //3D matrix

    } else {
      a32 = matrix[6];
      a42 = matrix[7];
      a13 = matrix[8];
      a23 = matrix[9];
      a33 = matrix[10];
      a43 = matrix[11];
      x = matrix[12];
      y = matrix[13];
      z = matrix[14];
      angle = _atan2(a32, a33);
      rotationX = angle * _RAD2DEG; //rotationX

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a12 * cos + a13 * sin;
        t2 = a22 * cos + a23 * sin;
        t3 = a32 * cos + a33 * sin;
        a13 = a12 * -sin + a13 * cos;
        a23 = a22 * -sin + a23 * cos;
        a33 = a32 * -sin + a33 * cos;
        a43 = a42 * -sin + a43 * cos;
        a12 = t1;
        a22 = t2;
        a32 = t3;
      } //rotationY


      angle = _atan2(-c, a33);
      rotationY = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a * cos - a13 * sin;
        t2 = b * cos - a23 * sin;
        t3 = c * cos - a33 * sin;
        a43 = d * sin + a43 * cos;
        a = t1;
        b = t2;
        c = t3;
      } //rotationZ


      angle = _atan2(b, a);
      rotation = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(angle);
        sin = Math.sin(angle);
        t1 = a * cos + b * sin;
        t2 = a12 * cos + a22 * sin;
        b = b * cos - a * sin;
        a22 = a22 * cos - a12 * sin;
        a = t1;
        a12 = t2;
      }

      if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
        //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
        rotationX = rotation = 0;
        rotationY = 180 - rotationY;
      }

      scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a * a + b * b + c * c));
      scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a22 * a22 + a32 * a32));
      angle = _atan2(a12, a22);
      skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
      perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
    }

    if (cache.svg) {
      //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
      t1 = target.getAttribute("transform");
      cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
      t1 && target.setAttribute("transform", t1);
    }
  }

  if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
    if (invertedScaleX) {
      scaleX *= -1;
      skewX += rotation <= 0 ? 180 : -180;
      rotation += rotation <= 0 ? 180 : -180;
    } else {
      scaleY *= -1;
      skewX += skewX <= 0 ? 180 : -180;
    }
  }

  uncache = uncache || cache.uncache;
  cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
  cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
  cache.z = z + px;
  cache.scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleX);
  cache.scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleY);
  cache.rotation = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotation) + deg;
  cache.rotationX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationX) + deg;
  cache.rotationY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationY) + deg;
  cache.skewX = skewX + deg;
  cache.skewY = skewY + deg;
  cache.transformPerspective = perspective + px;

  if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
    style[_transformOriginProp] = _firstTwoOnly(origin);
  }

  cache.xOffset = cache.yOffset = 0;
  cache.force3D = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.force3D;
  cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
  cache.uncache = 0;
  return cache;
},
    _firstTwoOnly = function _firstTwoOnly(value) {
  return (value = value.split(" "))[0] + " " + value[1];
},
    //for handling transformOrigin values, stripping out the 3rd dimension
_addPxTranslate = function _addPxTranslate(target, start, value) {
  var unit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(start);
  return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
},
    _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
  cache.z = "0px";
  cache.rotationY = cache.rotationX = "0deg";
  cache.force3D = 0;

  _renderCSSTransforms(ratio, cache);
},
    _zeroDeg = "0deg",
    _zeroPx = "0px",
    _endParenthesis = ") ",
    _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
  var _ref = cache || this,
      xPercent = _ref.xPercent,
      yPercent = _ref.yPercent,
      x = _ref.x,
      y = _ref.y,
      z = _ref.z,
      rotation = _ref.rotation,
      rotationY = _ref.rotationY,
      rotationX = _ref.rotationX,
      skewX = _ref.skewX,
      skewY = _ref.skewY,
      scaleX = _ref.scaleX,
      scaleY = _ref.scaleY,
      transformPerspective = _ref.transformPerspective,
      force3D = _ref.force3D,
      target = _ref.target,
      zOrigin = _ref.zOrigin,
      transforms = "",
      use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)


  if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
    var angle = parseFloat(rotationY) * _DEG2RAD,
        a13 = Math.sin(angle),
        a33 = Math.cos(angle),
        cos;

    angle = parseFloat(rotationX) * _DEG2RAD;
    cos = Math.cos(angle);
    x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
    y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
    z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
  }

  if (transformPerspective !== _zeroPx) {
    transforms += "perspective(" + transformPerspective + _endParenthesis;
  }

  if (xPercent || yPercent) {
    transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
  }

  if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
    transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
  }

  if (rotation !== _zeroDeg) {
    transforms += "rotate(" + rotation + _endParenthesis;
  }

  if (rotationY !== _zeroDeg) {
    transforms += "rotateY(" + rotationY + _endParenthesis;
  }

  if (rotationX !== _zeroDeg) {
    transforms += "rotateX(" + rotationX + _endParenthesis;
  }

  if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
    transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
  }

  if (scaleX !== 1 || scaleY !== 1) {
    transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
  }

  target.style[_transformProp] = transforms || "translate(0, 0)";
},
    _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
  var _ref2 = cache || this,
      xPercent = _ref2.xPercent,
      yPercent = _ref2.yPercent,
      x = _ref2.x,
      y = _ref2.y,
      rotation = _ref2.rotation,
      skewX = _ref2.skewX,
      skewY = _ref2.skewY,
      scaleX = _ref2.scaleX,
      scaleY = _ref2.scaleY,
      target = _ref2.target,
      xOrigin = _ref2.xOrigin,
      yOrigin = _ref2.yOrigin,
      xOffset = _ref2.xOffset,
      yOffset = _ref2.yOffset,
      forceCSS = _ref2.forceCSS,
      tx = parseFloat(x),
      ty = parseFloat(y),
      a11,
      a21,
      a12,
      a22,
      temp;

  rotation = parseFloat(rotation);
  skewX = parseFloat(skewX);
  skewY = parseFloat(skewY);

  if (skewY) {
    //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
    skewY = parseFloat(skewY);
    skewX += skewY;
    rotation += skewY;
  }

  if (rotation || skewX) {
    rotation *= _DEG2RAD;
    skewX *= _DEG2RAD;
    a11 = Math.cos(rotation) * scaleX;
    a21 = Math.sin(rotation) * scaleX;
    a12 = Math.sin(rotation - skewX) * -scaleY;
    a22 = Math.cos(rotation - skewX) * scaleY;

    if (skewX) {
      skewY *= _DEG2RAD;
      temp = Math.tan(skewX - skewY);
      temp = Math.sqrt(1 + temp * temp);
      a12 *= temp;
      a22 *= temp;

      if (skewY) {
        temp = Math.tan(skewY);
        temp = Math.sqrt(1 + temp * temp);
        a11 *= temp;
        a21 *= temp;
      }
    }

    a11 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a11);
    a21 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a21);
    a12 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a12);
    a22 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a22);
  } else {
    a11 = scaleX;
    a22 = scaleY;
    a21 = a12 = 0;
  }

  if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
    tx = _convertToUnit(target, "x", x, "px");
    ty = _convertToUnit(target, "y", y, "px");
  }

  if (xOrigin || yOrigin || xOffset || yOffset) {
    tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
    ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
  }

  if (xPercent || yPercent) {
    //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
    temp = target.getBBox();
    tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xPercent / 100 * temp.width);
    ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yPercent / 100 * temp.height);
  }

  temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
  target.setAttribute("transform", temp);
  forceCSS && (target.style[_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the  transform attribute changes!)
},
    _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
  var cap = 360,
      isString = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(endValue),
      endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
      change = endNum - startNum,
      finalValue = startNum + change + "deg",
      direction,
      pt;

  if (isString) {
    direction = endValue.split("_")[1];

    if (direction === "short") {
      change %= cap;

      if (change !== change % (cap / 2)) {
        change += change < 0 ? cap : -cap;
      }
    }

    if (direction === "cw" && change < 0) {
      change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
    } else if (direction === "ccw" && change > 0) {
      change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
    }
  }

  plugin._pt = pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
  pt.e = finalValue;
  pt.u = "deg";

  plugin._props.push(property);

  return pt;
},
    _assign = function _assign(target, source) {
  // Internet Explorer doesn't have Object.assign(), so we recreate it here.
  for (var p in source) {
    target[p] = source[p];
  }

  return target;
},
    _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
  //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
  var startCache = _assign({}, target._gsap),
      exclude = "perspective,force3D,transformOrigin,svgOrigin",
      style = target.style,
      endCache,
      p,
      startValue,
      endValue,
      startNum,
      endNum,
      startUnit,
      endUnit;

  if (startCache.svg) {
    startValue = target.getAttribute("transform");
    target.setAttribute("transform", "");
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);

    _removeProperty(target, _transformProp);

    target.setAttribute("transform", startValue);
  } else {
    startValue = getComputedStyle(target)[_transformProp];
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);
    style[_transformProp] = startValue;
  }

  for (p in _transformProps) {
    startValue = startCache[p];
    endValue = endCache[p];

    if (startValue !== endValue && exclude.indexOf(p) < 0) {
      //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
      startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
      endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
      startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
      endNum = parseFloat(endValue);
      plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
      plugin._pt.u = endUnit || 0;

      plugin._props.push(p);
    }
  }

  _assign(endCache, startCache);
}; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.


(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("padding,margin,Width,Radius", function (name, index) {
  var t = "Top",
      r = "Right",
      b = "Bottom",
      l = "Left",
      props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
    return index < 2 ? name + side : "border" + side + name;
  });

  _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
    var a, vars;

    if (arguments.length < 4) {
      // getter, passed target, property, and unit (from _get())
      a = props.map(function (prop) {
        return _get(plugin, prop, property);
      });
      vars = a.join(" ");
      return vars.split(a[0]).length === 5 ? a[0] : vars;
    }

    a = (endValue + "").split(" ");
    vars = {};
    props.forEach(function (prop, i) {
      return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
    });
    plugin.init(target, vars, tween);
  };
});

var CSSPlugin = {
  name: "css",
  register: _initCore,
  targetTest: function targetTest(target) {
    return target.style && target.nodeType;
  },
  init: function init(target, vars, tween, index, targets) {
    var props = this._props,
        style = target.style,
        startAt = tween.vars.startAt,
        startValue,
        endValue,
        endNum,
        startNum,
        type,
        specialProp,
        p,
        startUnit,
        endUnit,
        relative,
        isTransformRelated,
        transformPropTween,
        cache,
        smooth,
        hasPriority;
    _pluginInitted || _initCore();

    for (p in vars) {
      if (p === "autoRound") {
        continue;
      }

      endValue = vars[p];

      if (_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._plugins[p] && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._checkPlugin)(p, vars, tween, index, target, targets)) {
        // plugins
        continue;
      }

      type = typeof endValue;
      specialProp = _specialProps[p];

      if (type === "function") {
        endValue = endValue.call(tween, index, target, targets);
        type = typeof endValue;
      }

      if (type === "string" && ~endValue.indexOf("random(")) {
        endValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(endValue);
      }

      if (specialProp) {
        specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
      } else if (p.substr(0, 2) === "--") {
        //CSS variable
        startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
        endValue += "";
        _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.lastIndex = 0;

        if (!_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.test(startValue)) {
          // colors don't have units
          startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
          endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
        }

        endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
        this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
        props.push(p);
      } else if (type !== "undefined") {
        if (startAt && p in startAt) {
          // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
          startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
          (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(startValue) && ~startValue.indexOf("random(") && (startValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(startValue));
          (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue + "") || (startValue += _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p] || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(_get(target, p)) || ""); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.

          (startValue + "").charAt(1) === "=" && (startValue = _get(target, p)); // can't work with relative values
        } else {
          startValue = _get(target, p);
        }

        startNum = parseFloat(startValue);
        relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
        relative && (endValue = endValue.substr(2));
        endNum = parseFloat(endValue);

        if (p in _propertyAliases) {
          if (p === "autoAlpha") {
            //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
            if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
              //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
              startNum = 0;
            }

            _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
          }

          if (p !== "scale" && p !== "transform") {
            p = _propertyAliases[p];
            ~p.indexOf(",") && (p = p.split(",")[0]);
          }
        }

        isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---

        if (isTransformRelated) {
          if (!transformPropTween) {
            cache = target._gsap;
            cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.

            smooth = vars.smoothOrigin !== false && cache.smooth;
            transformPropTween = this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)

            transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
          }

          if (p === "scale") {
            this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0);
            props.push("scaleY", p);
            p += "X";
          } else if (p === "transformOrigin") {
            endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.

            if (cache.svg) {
              _applySVGOrigin(target, endValue, 0, smooth, 0, this);
            } else {
              endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!

              endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);

              _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
            }

            continue;
          } else if (p === "svgOrigin") {
            _applySVGOrigin(target, endValue, 1, smooth, 0, this);

            continue;
          } else if (p in _rotationalProperties) {
            _addRotationalPropTween(this, cache, p, startNum, relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, relative + endValue) : endValue);

            continue;
          } else if (p === "smoothOrigin") {
            _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);

            continue;
          } else if (p === "force3D") {
            cache[p] = endValue;
            continue;
          } else if (p === "transform") {
            _addRawTransformPTs(this, endValue, target);

            continue;
          }
        } else if (!(p in style)) {
          p = _checkPropPrefix(p) || p;
        }

        if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
          startUnit = (startValue + "").substr((startNum + "").length);
          endNum || (endNum = 0); // protect against NaN

          endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue) || (p in _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units ? _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p] : startUnit);
          startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
          this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
          this._pt.u = endUnit || 0;

          if (startUnit !== endUnit && endUnit !== "%") {
            //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
            this._pt.b = startValue;
            this._pt.r = _renderCSSPropWithBeginning;
          }
        } else if (!(p in style)) {
          if (p in target) {
            //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
            this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
          } else {
            (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._missingPlugin)(p, endValue);

            continue;
          }
        } else {
          _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
        }

        props.push(p);
      }
    }

    hasPriority && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._sortPropTweensByPriority)(this);
  },
  get: _get,
  aliases: _propertyAliases,
  getSetter: function getSetter(target, property, plugin) {
    //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
    var p = _propertyAliases[property];
    p && p.indexOf(",") < 0 && (property = p);
    return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isUndefined)(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getSetter)(target, property);
  },
  core: {
    _removeProperty: _removeProperty,
    _getMatrix: _getMatrix
  }
};
_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.utils.checkPrefix = _checkPropPrefix;

(function (positionAndScale, rotation, others, aliases) {
  var all = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(positionAndScale + "," + rotation + "," + others, function (name) {
    _transformProps[name] = 1;
  });

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(rotation, function (name) {
    _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "deg";
    _rotationalProperties[name] = 1;
  });

  _propertyAliases[all[13]] = positionAndScale + "," + rotation;

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(aliases, function (name) {
    var split = name.split(":");
    _propertyAliases[split[1]] = all[split[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");

(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
  _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "px";
});

_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(CSSPlugin);


/***/ }),

/***/ "./node_modules/gsap/Draggable.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/Draggable.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Draggable": () => (/* binding */ Draggable),
/* harmony export */   "default": () => (/* binding */ Draggable)
/* harmony export */ });
/* harmony import */ var _utils_matrix_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/matrix.js */ "./node_modules/gsap/utils/matrix.js");
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/*!
 * Draggable 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

/* eslint-disable */


var gsap,
    _win,
    _doc,
    _docElement,
    _body,
    _tempDiv,
    _placeholderDiv,
    _coreInitted,
    _checkPrefix,
    _toArray,
    _supportsPassive,
    _isTouchDevice,
    _touchEventLookup,
    _dragCount,
    _isMultiTouching,
    _isAndroid,
    InertiaPlugin,
    _defaultCursor,
    _supportsPointer,
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _getGSAP = function _getGSAP() {
  return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _isObject = function _isObject(value) {
  return typeof value === "object";
},
    _isUndefined = function _isUndefined(value) {
  return typeof value === "undefined";
},
    _emptyFunc = function _emptyFunc() {
  return false;
},
    _transformProp = "transform",
    _transformOriginProp = "transformOrigin",
    _round = function _round(value) {
  return Math.round(value * 10000) / 10000;
},
    _isArray = Array.isArray,
    _createElement = function _createElement(type, ns) {
  var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.

  return e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
},
    _RAD2DEG = 180 / Math.PI,
    _bigNum = 1e20,
    _identityMatrix = new _utils_matrix_js__WEBPACK_IMPORTED_MODULE_0__.Matrix2D(),
    _getTime = Date.now || function () {
  return new Date().getTime();
},
    _renderQueue = [],
    _lookup = {},
    //when a Draggable is created, the target gets a unique _gsDragID property that allows gets associated with the Draggable instance for quick lookups in Draggable.get(). This avoids circular references that could cause gc problems.
_lookupCount = 0,
    _clickableTagExp = /^(?:a|input|textarea|button|select)$/i,
    _lastDragTime = 0,
    _temp1 = {},
    // a simple object we reuse and populate (usually x/y properties) to conserve memory and improve performance.
_windowProxy = {},
    //memory/performance optimization - we reuse this object during autoScroll to store window-related bounds/offsets.
_copy = function _copy(obj, factor) {
  var copy = {},
      p;

  for (p in obj) {
    copy[p] = factor ? obj[p] * factor : obj[p];
  }

  return copy;
},
    _extend = function _extend(obj, defaults) {
  for (var p in defaults) {
    if (!(p in obj)) {
      obj[p] = defaults[p];
    }
  }

  return obj;
},
    _setTouchActionForAllDescendants = function _setTouchActionForAllDescendants(elements, value) {
  var i = elements.length,
      children;

  while (i--) {
    value ? elements[i].style.touchAction = value : elements[i].style.removeProperty("touch-action");
    children = elements[i].children;
    children && children.length && _setTouchActionForAllDescendants(children, value);
  }
},
    _renderQueueTick = function _renderQueueTick() {
  return _renderQueue.forEach(function (func) {
    return func();
  });
},
    _addToRenderQueue = function _addToRenderQueue(func) {
  _renderQueue.push(func);

  if (_renderQueue.length === 1) {
    gsap.ticker.add(_renderQueueTick);
  }
},
    _renderQueueTimeout = function _renderQueueTimeout() {
  return !_renderQueue.length && gsap.ticker.remove(_renderQueueTick);
},
    _removeFromRenderQueue = function _removeFromRenderQueue(func) {
  var i = _renderQueue.length;

  while (i--) {
    if (_renderQueue[i] === func) {
      _renderQueue.splice(i, 1);
    }
  }

  gsap.to(_renderQueueTimeout, {
    overwrite: true,
    delay: 15,
    duration: 0,
    onComplete: _renderQueueTimeout,
    data: "_draggable"
  }); //remove the "tick" listener only after the render queue is empty for 15 seconds (to improve performance). Adding/removing it constantly for every click/touch wouldn't deliver optimal speed, and we also don't want the ticker to keep calling the render method when things are idle for long periods of time (we want to improve battery life on mobile devices).
},
    _setDefaults = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    if (!(p in obj)) {
      obj[p] = defaults[p];
    }
  }

  return obj;
},
    _addListener = function _addListener(element, type, func, capture) {
  if (element.addEventListener) {
    var touchType = _touchEventLookup[type];
    capture = capture || (_supportsPassive ? {
      passive: false
    } : null);
    element.addEventListener(touchType || type, func, capture);
    touchType && type !== touchType && element.addEventListener(type, func, capture); //some browsers actually support both, so must we. But pointer events cover all.
  }
},
    _removeListener = function _removeListener(element, type, func) {
  if (element.removeEventListener) {
    var touchType = _touchEventLookup[type];
    element.removeEventListener(touchType || type, func);
    touchType && type !== touchType && element.removeEventListener(type, func);
  }
},
    _preventDefault = function _preventDefault(event) {
  event.preventDefault && event.preventDefault();
  event.preventManipulation && event.preventManipulation(); //for some Microsoft browsers
},
    _hasTouchID = function _hasTouchID(list, ID) {
  var i = list.length;

  while (i--) {
    if (list[i].identifier === ID) {
      return true;
    }
  }
},
    _onMultiTouchDocumentEnd = function _onMultiTouchDocumentEnd(event) {
  _isMultiTouching = event.touches && _dragCount < event.touches.length;

  _removeListener(event.target, "touchend", _onMultiTouchDocumentEnd);
},
    _onMultiTouchDocument = function _onMultiTouchDocument(event) {
  _isMultiTouching = event.touches && _dragCount < event.touches.length;

  _addListener(event.target, "touchend", _onMultiTouchDocumentEnd);
},
    _getDocScrollTop = function _getDocScrollTop(doc) {
  return _win.pageYOffset || doc.scrollTop || doc.documentElement.scrollTop || doc.body.scrollTop || 0;
},
    _getDocScrollLeft = function _getDocScrollLeft(doc) {
  return _win.pageXOffset || doc.scrollLeft || doc.documentElement.scrollLeft || doc.body.scrollLeft || 0;
},
    _addScrollListener = function _addScrollListener(e, callback) {
  _addListener(e, "scroll", callback);

  if (!_isRoot(e.parentNode)) {
    _addScrollListener(e.parentNode, callback);
  }
},
    _removeScrollListener = function _removeScrollListener(e, callback) {
  _removeListener(e, "scroll", callback);

  if (!_isRoot(e.parentNode)) {
    _removeScrollListener(e.parentNode, callback);
  }
},
    _isRoot = function _isRoot(e) {
  return !!(!e || e === _docElement || e.nodeType === 9 || e === _doc.body || e === _win || !e.nodeType || !e.parentNode);
},
    _getMaxScroll = function _getMaxScroll(element, axis) {
  var dim = axis === "x" ? "Width" : "Height",
      scroll = "scroll" + dim,
      client = "client" + dim;
  return Math.max(0, _isRoot(element) ? Math.max(_docElement[scroll], _body[scroll]) - (_win["inner" + dim] || _docElement[client] || _body[client]) : element[scroll] - element[client]);
},
    _recordMaxScrolls = function _recordMaxScrolls(e, skipCurrent) {
  //records _gsMaxScrollX and _gsMaxScrollY properties for the element and all ancestors up the chain so that we can cap it, otherwise dragging beyond the edges with autoScroll on can endlessly scroll.
  var x = _getMaxScroll(e, "x"),
      y = _getMaxScroll(e, "y");

  if (_isRoot(e)) {
    e = _windowProxy;
  } else {
    _recordMaxScrolls(e.parentNode, skipCurrent);
  }

  e._gsMaxScrollX = x;
  e._gsMaxScrollY = y;

  if (!skipCurrent) {
    e._gsScrollX = e.scrollLeft || 0;
    e._gsScrollY = e.scrollTop || 0;
  }
},
    _setStyle = function _setStyle(element, property, value) {
  var style = element.style;

  if (!style) {
    return;
  }

  if (_isUndefined(style[property])) {
    property = _checkPrefix(property, element) || property;
  }

  if (value == null) {
    style.removeProperty && style.removeProperty(property.replace(/([A-Z])/g, "-$1").toLowerCase());
  } else {
    style[property] = value;
  }
},
    _getComputedStyle = function _getComputedStyle(element) {
  return _win.getComputedStyle(element instanceof Element ? element : element.host || (element.parentNode || {}).host || element);
},
    //the "host" stuff helps to accommodate ShadowDom objects.
_tempRect = {},
    //reuse to reduce garbage collection tasks
_parseRect = function _parseRect(e) {
  //accepts a DOM element, a mouse event, or a rectangle object and returns the corresponding rectangle with left, right, width, height, top, and bottom properties
  if (e === _win) {
    _tempRect.left = _tempRect.top = 0;
    _tempRect.width = _tempRect.right = _docElement.clientWidth || e.innerWidth || _body.clientWidth || 0;
    _tempRect.height = _tempRect.bottom = (e.innerHeight || 0) - 20 < _docElement.clientHeight ? _docElement.clientHeight : e.innerHeight || _body.clientHeight || 0;
    return _tempRect;
  }

  var doc = e.ownerDocument || _doc,
      r = !_isUndefined(e.pageX) ? {
    left: e.pageX - _getDocScrollLeft(doc),
    top: e.pageY - _getDocScrollTop(doc),
    right: e.pageX - _getDocScrollLeft(doc) + 1,
    bottom: e.pageY - _getDocScrollTop(doc) + 1
  } : !e.nodeType && !_isUndefined(e.left) && !_isUndefined(e.top) ? e : _toArray(e)[0].getBoundingClientRect();

  if (_isUndefined(r.right) && !_isUndefined(r.width)) {
    r.right = r.left + r.width;
    r.bottom = r.top + r.height;
  } else if (_isUndefined(r.width)) {
    //some browsers don't include width and height properties. We can't just set them directly on r because some browsers throw errors, so create a new generic object.
    r = {
      width: r.right - r.left,
      height: r.bottom - r.top,
      right: r.right,
      left: r.left,
      bottom: r.bottom,
      top: r.top
    };
  }

  return r;
},
    _dispatchEvent = function _dispatchEvent(target, type, callbackName) {
  var vars = target.vars,
      callback = vars[callbackName],
      listeners = target._listeners[type],
      result;

  if (_isFunction(callback)) {
    result = callback.apply(vars.callbackScope || target, vars[callbackName + "Params"] || [target.pointerEvent]);
  }

  if (listeners && target.dispatchEvent(type) === false) {
    result = false;
  }

  return result;
},
    _getBounds = function _getBounds(target, context) {
  //accepts any of the following: a DOM element, jQuery object, selector text, or an object defining bounds as {top, left, width, height} or {minX, maxX, minY, maxY}. Returns an object with left, top, width, and height properties.
  var e = _toArray(target)[0],
      top,
      left,
      offset;

  if (!e.nodeType && e !== _win) {
    if (!_isUndefined(target.left)) {
      offset = {
        x: 0,
        y: 0
      }; //_getOffsetTransformOrigin(context); //the bounds should be relative to the origin

      return {
        left: target.left - offset.x,
        top: target.top - offset.y,
        width: target.width,
        height: target.height
      };
    }

    left = target.min || target.minX || target.minRotation || 0;
    top = target.min || target.minY || 0;
    return {
      left: left,
      top: top,
      width: (target.max || target.maxX || target.maxRotation || 0) - left,
      height: (target.max || target.maxY || 0) - top
    };
  }

  return _getElementBounds(e, context);
},
    _point1 = {},
    //we reuse to minimize garbage collection tasks.
_getElementBounds = function _getElementBounds(element, context) {
  context = _toArray(context)[0];
  var isSVG = element.getBBox && element.ownerSVGElement,
      doc = element.ownerDocument || _doc,
      left,
      right,
      top,
      bottom,
      matrix,
      p1,
      p2,
      p3,
      p4,
      bbox,
      width,
      height,
      cs,
      contextParent;

  if (element === _win) {
    top = _getDocScrollTop(doc);
    left = _getDocScrollLeft(doc);
    right = left + (doc.documentElement.clientWidth || element.innerWidth || doc.body.clientWidth || 0);
    bottom = top + ((element.innerHeight || 0) - 20 < doc.documentElement.clientHeight ? doc.documentElement.clientHeight : element.innerHeight || doc.body.clientHeight || 0); //some browsers (like Firefox) ignore absolutely positioned elements, and collapse the height of the documentElement, so it could be 8px, for example, if you have just an absolutely positioned div. In that case, we use the innerHeight to resolve this.
  } else if (context === _win || _isUndefined(context)) {
    return element.getBoundingClientRect();
  } else {
    left = top = 0;

    if (isSVG) {
      bbox = element.getBBox();
      width = bbox.width;
      height = bbox.height;
    } else {
      if (element.viewBox && (bbox = element.viewBox.baseVal)) {
        left = bbox.x || 0;
        top = bbox.y || 0;
        width = bbox.width;
        height = bbox.height;
      }

      if (!width) {
        cs = _getComputedStyle(element);
        bbox = cs.boxSizing === "border-box";
        width = (parseFloat(cs.width) || element.clientWidth || 0) + (bbox ? 0 : parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth));
        height = (parseFloat(cs.height) || element.clientHeight || 0) + (bbox ? 0 : parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth));
      }
    }

    right = width;
    bottom = height;
  }

  if (element === context) {
    return {
      left: left,
      top: top,
      width: right - left,
      height: bottom - top
    };
  }

  matrix = (0,_utils_matrix_js__WEBPACK_IMPORTED_MODULE_0__.getGlobalMatrix)(context, true).multiply((0,_utils_matrix_js__WEBPACK_IMPORTED_MODULE_0__.getGlobalMatrix)(element));
  p1 = matrix.apply({
    x: left,
    y: top
  });
  p2 = matrix.apply({
    x: right,
    y: top
  });
  p3 = matrix.apply({
    x: right,
    y: bottom
  });
  p4 = matrix.apply({
    x: left,
    y: bottom
  });
  left = Math.min(p1.x, p2.x, p3.x, p4.x);
  top = Math.min(p1.y, p2.y, p3.y, p4.y);
  contextParent = context.parentNode || {};
  return {
    left: left + (contextParent.scrollLeft || 0),
    top: top + (contextParent.scrollTop || 0),
    width: Math.max(p1.x, p2.x, p3.x, p4.x) - left,
    height: Math.max(p1.y, p2.y, p3.y, p4.y) - top
  };
},
    _parseInertia = function _parseInertia(draggable, snap, max, min, factor, forceZeroVelocity) {
  var vars = {},
      a,
      i,
      l;

  if (snap) {
    if (factor !== 1 && snap instanceof Array) {
      //some data must be altered to make sense, like if the user passes in an array of rotational values in degrees, we must convert it to radians. Or for scrollLeft and scrollTop, we invert the values.
      vars.end = a = [];
      l = snap.length;

      if (_isObject(snap[0])) {
        //if the array is populated with objects, like points ({x:100, y:200}), make copies before multiplying by the factor, otherwise we'll mess up the originals and the user may reuse it elsewhere.
        for (i = 0; i < l; i++) {
          a[i] = _copy(snap[i], factor);
        }
      } else {
        for (i = 0; i < l; i++) {
          a[i] = snap[i] * factor;
        }
      }

      max += 1.1; //allow 1.1 pixels of wiggle room when snapping in order to work around some browser inconsistencies in the way bounds are reported which can make them roughly a pixel off. For example, if "snap:[-$('#menu').width(), 0]" was defined and #menu had a wrapper that was used as the bounds, some browsers would be one pixel off, making the minimum -752 for example when snap was [-753,0], thus instead of snapping to -753, it would snap to 0 since -753 was below the minimum.

      min -= 1.1;
    } else if (_isFunction(snap)) {
      vars.end = function (value) {
        var result = snap.call(draggable, value),
            copy,
            p;

        if (factor !== 1) {
          if (_isObject(result)) {
            copy = {};

            for (p in result) {
              copy[p] = result[p] * factor;
            }

            result = copy;
          } else {
            result *= factor;
          }
        }

        return result; //we need to ensure that we can scope the function call to the Draggable instance itself so that users can access important values like maxX, minX, maxY, minY, x, and y from within that function.
      };
    } else {
      vars.end = snap;
    }
  }

  if (max || max === 0) {
    vars.max = max;
  }

  if (min || min === 0) {
    vars.min = min;
  }

  if (forceZeroVelocity) {
    vars.velocity = 0;
  }

  return vars;
},
    _isClickable = function _isClickable(element) {
  //sometimes it's convenient to mark an element as clickable by adding a data-clickable="true" attribute (in which case we won't preventDefault() the mouse/touch event). This method checks if the element is an <a>, <input>, or <button> or has an onclick or has the data-clickable or contentEditable attribute set to true (or any of its parent elements).
  var data;
  return !element || !element.getAttribute || element === _body ? false : (data = element.getAttribute("data-clickable")) === "true" || data !== "false" && (element.onclick || _clickableTagExp.test(element.nodeName + "") || element.getAttribute("contentEditable") === "true") ? true : _isClickable(element.parentNode);
},
    _setSelectable = function _setSelectable(elements, selectable) {
  var i = elements.length,
      e;

  while (i--) {
    e = elements[i];
    e.ondragstart = e.onselectstart = selectable ? null : _emptyFunc;
    gsap.set(e, {
      lazy: true,
      userSelect: selectable ? "text" : "none"
    });
  }
},
    _isFixed = function _isFixed(element) {
  if (_getComputedStyle(element).position === "fixed") {
    return true;
  }

  element = element.parentNode;

  if (element && element.nodeType === 1) {
    // avoid document fragments which will throw an error.
    return _isFixed(element);
  }
},
    _supports3D,
    _addPaddingBR,
    //The ScrollProxy class wraps an element's contents into another div (we call it "content") that we either add padding when necessary or apply a translate3d() transform in order to overscroll (scroll past the boundaries). This allows us to simply set the scrollTop/scrollLeft (or top/left for easier reverse-axis orientation, which is what we do in Draggable) and it'll do all the work for us. For example, if we tried setting scrollTop to -100 on a normal DOM element, it wouldn't work - it'd look the same as setting it to 0, but if we set scrollTop of a ScrollProxy to -100, it'll give the correct appearance by either setting paddingTop of the wrapper to 100 or applying a 100-pixel translateY.
ScrollProxy = function ScrollProxy(element, vars) {
  element = gsap.utils.toArray(element)[0];
  vars = vars || {};
  var content = document.createElement("div"),
      style = content.style,
      node = element.firstChild,
      offsetTop = 0,
      offsetLeft = 0,
      prevTop = element.scrollTop,
      prevLeft = element.scrollLeft,
      scrollWidth = element.scrollWidth,
      scrollHeight = element.scrollHeight,
      extraPadRight = 0,
      maxLeft = 0,
      maxTop = 0,
      elementWidth,
      elementHeight,
      contentHeight,
      nextNode,
      transformStart,
      transformEnd;

  if (_supports3D && vars.force3D !== false) {
    transformStart = "translate3d(";
    transformEnd = "px,0px)";
  } else if (_transformProp) {
    transformStart = "translate(";
    transformEnd = "px)";
  }

  this.scrollTop = function (value, force) {
    if (!arguments.length) {
      return -this.top();
    }

    this.top(-value, force);
  };

  this.scrollLeft = function (value, force) {
    if (!arguments.length) {
      return -this.left();
    }

    this.left(-value, force);
  };

  this.left = function (value, force) {
    if (!arguments.length) {
      return -(element.scrollLeft + offsetLeft);
    }

    var dif = element.scrollLeft - prevLeft,
        oldOffset = offsetLeft;

    if ((dif > 2 || dif < -2) && !force) {
      //if the user interacts with the scrollbar (or something else scrolls it, like the mouse wheel), we should kill any tweens of the ScrollProxy.
      prevLeft = element.scrollLeft;
      gsap.killTweensOf(this, {
        left: 1,
        scrollLeft: 1
      });
      this.left(-prevLeft);

      if (vars.onKill) {
        vars.onKill();
      }

      return;
    }

    value = -value; //invert because scrolling works in the opposite direction

    if (value < 0) {
      offsetLeft = value - 0.5 | 0;
      value = 0;
    } else if (value > maxLeft) {
      offsetLeft = value - maxLeft | 0;
      value = maxLeft;
    } else {
      offsetLeft = 0;
    }

    if (offsetLeft || oldOffset) {
      if (!this._skip) {
        style[_transformProp] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
      }

      if (offsetLeft + extraPadRight >= 0) {
        style.paddingRight = offsetLeft + extraPadRight + "px";
      }
    }

    element.scrollLeft = value | 0;
    prevLeft = element.scrollLeft; //don't merge this with the line above because some browsers adjust the scrollLeft after it's set, so in order to be 100% accurate in tracking it, we need to ask the browser to report it.
  };

  this.top = function (value, force) {
    if (!arguments.length) {
      return -(element.scrollTop + offsetTop);
    }

    var dif = element.scrollTop - prevTop,
        oldOffset = offsetTop;

    if ((dif > 2 || dif < -2) && !force) {
      //if the user interacts with the scrollbar (or something else scrolls it, like the mouse wheel), we should kill any tweens of the ScrollProxy.
      prevTop = element.scrollTop;
      gsap.killTweensOf(this, {
        top: 1,
        scrollTop: 1
      });
      this.top(-prevTop);

      if (vars.onKill) {
        vars.onKill();
      }

      return;
    }

    value = -value; //invert because scrolling works in the opposite direction

    if (value < 0) {
      offsetTop = value - 0.5 | 0;
      value = 0;
    } else if (value > maxTop) {
      offsetTop = value - maxTop | 0;
      value = maxTop;
    } else {
      offsetTop = 0;
    }

    if (offsetTop || oldOffset) {
      if (!this._skip) {
        style[_transformProp] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
      }
    }

    element.scrollTop = value | 0;
    prevTop = element.scrollTop;
  };

  this.maxScrollTop = function () {
    return maxTop;
  };

  this.maxScrollLeft = function () {
    return maxLeft;
  };

  this.disable = function () {
    node = content.firstChild;

    while (node) {
      nextNode = node.nextSibling;
      element.appendChild(node);
      node = nextNode;
    }

    if (element === content.parentNode) {
      //in case disable() is called when it's already disabled.
      element.removeChild(content);
    }
  };

  this.enable = function () {
    node = element.firstChild;

    if (node === content) {
      return;
    }

    while (node) {
      nextNode = node.nextSibling;
      content.appendChild(node);
      node = nextNode;
    }

    element.appendChild(content);
    this.calibrate();
  };

  this.calibrate = function (force) {
    var widthMatches = element.clientWidth === elementWidth,
        cs,
        x,
        y;
    prevTop = element.scrollTop;
    prevLeft = element.scrollLeft;

    if (widthMatches && element.clientHeight === elementHeight && content.offsetHeight === contentHeight && scrollWidth === element.scrollWidth && scrollHeight === element.scrollHeight && !force) {
      return; //no need to recalculate things if the width and height haven't changed.
    }

    if (offsetTop || offsetLeft) {
      x = this.left();
      y = this.top();
      this.left(-element.scrollLeft);
      this.top(-element.scrollTop);
    }

    cs = _getComputedStyle(element); //first, we need to remove any width constraints to see how the content naturally flows so that we can see if it's wider than the containing element. If so, we've got to record the amount of overage so that we can apply that as padding in order for browsers to correctly handle things. Then we switch back to a width of 100% (without that, some browsers don't flow the content correctly)

    if (!widthMatches || force) {
      style.display = "block";
      style.width = "auto";
      style.paddingRight = "0px";
      extraPadRight = Math.max(0, element.scrollWidth - element.clientWidth); //if the content is wider than the container, we need to add the paddingLeft and paddingRight in order for things to behave correctly.

      if (extraPadRight) {
        extraPadRight += parseFloat(cs.paddingLeft) + (_addPaddingBR ? parseFloat(cs.paddingRight) : 0);
      }
    }

    style.display = "inline-block";
    style.position = "relative";
    style.overflow = "visible";
    style.verticalAlign = "top";
    style.boxSizing = "content-box";
    style.width = "100%";
    style.paddingRight = extraPadRight + "px"; //some browsers neglect to factor in the bottom padding when calculating the scrollHeight, so we need to add that padding to the content when that happens. Allow a 2px margin for error

    if (_addPaddingBR) {
      style.paddingBottom = cs.paddingBottom;
    }

    elementWidth = element.clientWidth;
    elementHeight = element.clientHeight;
    scrollWidth = element.scrollWidth;
    scrollHeight = element.scrollHeight;
    maxLeft = element.scrollWidth - elementWidth;
    maxTop = element.scrollHeight - elementHeight;
    contentHeight = content.offsetHeight;
    style.display = "block";

    if (x || y) {
      this.left(x);
      this.top(y);
    }
  };

  this.content = content;
  this.element = element;
  this._skip = false;
  this.enable();
},
    _initCore = function _initCore(required) {
  if (_windowExists() && document.body) {
    var nav = window && window.navigator;
    _win = window;
    _doc = document;
    _docElement = _doc.documentElement;
    _body = _doc.body;
    _tempDiv = _createElement("div");
    _supportsPointer = !!window.PointerEvent;
    _placeholderDiv = _createElement("div");
    _placeholderDiv.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab";
    _defaultCursor = _placeholderDiv.style.cursor === "grab" ? "grab" : "move";
    _isAndroid = nav && nav.userAgent.toLowerCase().indexOf("android") !== -1; //Android handles touch events in an odd way and it's virtually impossible to "feature test" so we resort to UA sniffing

    _isTouchDevice = "ontouchstart" in _docElement && "orientation" in _win || nav && (nav.MaxTouchPoints > 0 || nav.msMaxTouchPoints > 0);

    _addPaddingBR = function () {
      //this function is in charge of analyzing browser behavior related to padding. It sets the _addPaddingBR to true if the browser doesn't normally factor in the bottom or right padding on the element inside the scrolling area, and it sets _addPaddingLeft to true if it's a browser that requires the extra offset (offsetLeft) to be added to the paddingRight (like Opera).
      var div = _createElement("div"),
          child = _createElement("div"),
          childStyle = child.style,
          parent = _body,
          val;

      childStyle.display = "inline-block";
      childStyle.position = "relative";
      div.style.cssText = child.innerHTML = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden";
      div.appendChild(child);
      parent.appendChild(div);
      val = child.offsetHeight + 18 > div.scrollHeight; //div.scrollHeight should be child.offsetHeight + 20 because of the 10px of padding on each side, but some browsers ignore one side. We allow a 2px margin of error.

      parent.removeChild(div);
      return val;
    }();

    _touchEventLookup = function (types) {
      //we create an object that makes it easy to translate touch event types into their "pointer" counterparts if we're in a browser that uses those instead. Like IE10 uses "MSPointerDown" instead of "touchstart", for example.
      var standard = types.split(","),
          converted = ("onpointerdown" in _tempDiv ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in _tempDiv ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : types).split(","),
          obj = {},
          i = 4;

      while (--i > -1) {
        obj[standard[i]] = converted[i];
        obj[converted[i]] = standard[i];
      } //to avoid problems in iOS 9, test to see if the browser supports the "passive" option on addEventListener().


      try {
        _docElement.addEventListener("test", null, Object.defineProperty({}, "passive", {
          get: function get() {
            _supportsPassive = 1;
          }
        }));
      } catch (e) {}

      return obj;
    }("touchstart,touchmove,touchend,touchcancel");

    _addListener(_doc, "touchcancel", _emptyFunc); //some older Android devices intermittently stop dispatching "touchmove" events if we don't listen for "touchcancel" on the document. Very strange indeed.


    _addListener(_win, "touchmove", _emptyFunc); //works around Safari bugs that still allow the page to scroll even when we preventDefault() on the touchmove event.


    _body && _body.addEventListener("touchstart", _emptyFunc); //works around Safari bug: https://greensock.com/forums/topic/21450-draggable-in-iframe-on-mobile-is-buggy/

    _addListener(_doc, "contextmenu", function () {
      for (var p in _lookup) {
        if (_lookup[p].isPressed) {
          _lookup[p].endDrag();
        }
      }
    });

    gsap = _coreInitted = _getGSAP();
  }

  if (gsap) {
    InertiaPlugin = gsap.plugins.inertia;
    _checkPrefix = gsap.utils.checkPrefix;
    _transformProp = _checkPrefix(_transformProp);
    _transformOriginProp = _checkPrefix(_transformOriginProp);
    _toArray = gsap.utils.toArray;
    _supports3D = !!_checkPrefix("perspective");
  } else if (required) {
    console.warn("Please gsap.registerPlugin(Draggable)");
  }
};

var EventDispatcher = /*#__PURE__*/function () {
  function EventDispatcher(target) {
    this._listeners = {};
    this.target = target || this;
  }

  var _proto = EventDispatcher.prototype;

  _proto.addEventListener = function addEventListener(type, callback) {
    var list = this._listeners[type] || (this._listeners[type] = []);

    if (!~list.indexOf(callback)) {
      list.push(callback);
    }
  };

  _proto.removeEventListener = function removeEventListener(type, callback) {
    var list = this._listeners[type],
        i = list && list.indexOf(callback) || -1;
    i > -1 && list.splice(i, 1);
  };

  _proto.dispatchEvent = function dispatchEvent(type) {
    var _this = this;

    var result;
    (this._listeners[type] || []).forEach(function (callback) {
      return callback.call(_this, {
        type: type,
        target: _this.target
      }) === false && (result = false);
    });
    return result; //if any of the callbacks return false, pass that along.
  };

  return EventDispatcher;
}();

var Draggable = /*#__PURE__*/function (_EventDispatcher) {
  _inheritsLoose(Draggable, _EventDispatcher);

  function Draggable(target, vars) {
    var _this2;

    _this2 = _EventDispatcher.call(this) || this;
    _coreInitted || _initCore(1);
    target = _toArray(target)[0]; //in case the target is a selector object or selector text

    if (!InertiaPlugin) {
      InertiaPlugin = gsap.plugins.inertia;
    }

    _this2.vars = vars = _copy(vars || {});
    _this2.target = target;
    _this2.x = _this2.y = _this2.rotation = 0;
    _this2.dragResistance = parseFloat(vars.dragResistance) || 0;
    _this2.edgeResistance = isNaN(vars.edgeResistance) ? 1 : parseFloat(vars.edgeResistance) || 0;
    _this2.lockAxis = vars.lockAxis;
    _this2.autoScroll = vars.autoScroll || 0;
    _this2.lockedAxis = null;
    _this2.allowEventDefault = !!vars.allowEventDefault;
    gsap.getProperty(target, "x"); // to ensure that transforms are instantiated.

    var type = (vars.type || "x,y").toLowerCase(),
        xyMode = ~type.indexOf("x") || ~type.indexOf("y"),
        rotationMode = type.indexOf("rotation") !== -1,
        xProp = rotationMode ? "rotation" : xyMode ? "x" : "left",
        yProp = xyMode ? "y" : "top",
        allowX = !!(~type.indexOf("x") || ~type.indexOf("left") || type === "scroll"),
        allowY = !!(~type.indexOf("y") || ~type.indexOf("top") || type === "scroll"),
        minimumMovement = vars.minimumMovement || 2,
        self = _assertThisInitialized(_this2),
        triggers = _toArray(vars.trigger || vars.handle || target),
        killProps = {},
        dragEndTime = 0,
        checkAutoScrollBounds = false,
        autoScrollMarginTop = vars.autoScrollMarginTop || 40,
        autoScrollMarginRight = vars.autoScrollMarginRight || 40,
        autoScrollMarginBottom = vars.autoScrollMarginBottom || 40,
        autoScrollMarginLeft = vars.autoScrollMarginLeft || 40,
        isClickable = vars.clickableTest || _isClickable,
        clickTime = 0,
        gsCache = target._gsap || gsap.core.getCache(target),
        isFixed = _isFixed(target),
        getPropAsNum = function getPropAsNum(property, unit) {
      return parseFloat(gsCache.get(target, property, unit));
    },
        ownerDoc = target.ownerDocument || _doc,
        enabled,
        scrollProxy,
        startPointerX,
        startPointerY,
        startElementX,
        startElementY,
        hasBounds,
        hasDragCallback,
        hasMoveCallback,
        maxX,
        minX,
        maxY,
        minY,
        touch,
        touchID,
        rotationOrigin,
        dirty,
        old,
        snapX,
        snapY,
        snapXY,
        isClicking,
        touchEventTarget,
        matrix,
        interrupted,
        allowNativeTouchScrolling,
        touchDragAxis,
        isDispatching,
        clickDispatch,
        trustedClickDispatch,
        isPreventingDefault,
        innerMatrix,
        onContextMenu = function onContextMenu(e) {
      //used to prevent long-touch from triggering a context menu.
      // (self.isPressed && e.which < 2) && self.endDrag() // previously ended drag when context menu was triggered, but instead we should just stop propagation and prevent the default event behavior.
      _preventDefault(e);

      e.stopImmediatePropagation && e.stopImmediatePropagation();
      return false;
    },
        //this method gets called on every tick of TweenLite.ticker which allows us to synchronize the renders to the core engine (which is typically synchronized with the display refresh via requestAnimationFrame). This is an optimization - it's better than applying the values inside the "mousemove" or "touchmove" event handler which may get called many times inbetween refreshes.
    render = function render(suppressEvents) {
      if (self.autoScroll && self.isDragging && (checkAutoScrollBounds || dirty)) {
        var e = target,
            autoScrollFactor = self.autoScroll * 15,
            //multiplying by 15 just gives us a better "feel" speed-wise.
        parent,
            isRoot,
            rect,
            pointerX,
            pointerY,
            changeX,
            changeY,
            gap;
        checkAutoScrollBounds = false;
        _windowProxy.scrollTop = _win.pageYOffset != null ? _win.pageYOffset : ownerDoc.documentElement.scrollTop != null ? ownerDoc.documentElement.scrollTop : ownerDoc.body.scrollTop;
        _windowProxy.scrollLeft = _win.pageXOffset != null ? _win.pageXOffset : ownerDoc.documentElement.scrollLeft != null ? ownerDoc.documentElement.scrollLeft : ownerDoc.body.scrollLeft;
        pointerX = self.pointerX - _windowProxy.scrollLeft;
        pointerY = self.pointerY - _windowProxy.scrollTop;

        while (e && !isRoot) {
          //walk up the chain and sense wherever the pointer is within 40px of an edge that's scrollable.
          isRoot = _isRoot(e.parentNode);
          parent = isRoot ? _windowProxy : e.parentNode;
          rect = isRoot ? {
            bottom: Math.max(_docElement.clientHeight, _win.innerHeight || 0),
            right: Math.max(_docElement.clientWidth, _win.innerWidth || 0),
            left: 0,
            top: 0
          } : parent.getBoundingClientRect();
          changeX = changeY = 0;

          if (allowY) {
            gap = parent._gsMaxScrollY - parent.scrollTop;

            if (gap < 0) {
              changeY = gap;
            } else if (pointerY > rect.bottom - autoScrollMarginBottom && gap) {
              checkAutoScrollBounds = true;
              changeY = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.bottom - pointerY) / autoScrollMarginBottom) | 0);
            } else if (pointerY < rect.top + autoScrollMarginTop && parent.scrollTop) {
              checkAutoScrollBounds = true;
              changeY = -Math.min(parent.scrollTop, autoScrollFactor * (1 - Math.max(0, pointerY - rect.top) / autoScrollMarginTop) | 0);
            }

            if (changeY) {
              parent.scrollTop += changeY;
            }
          }

          if (allowX) {
            gap = parent._gsMaxScrollX - parent.scrollLeft;

            if (gap < 0) {
              changeX = gap;
            } else if (pointerX > rect.right - autoScrollMarginRight && gap) {
              checkAutoScrollBounds = true;
              changeX = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.right - pointerX) / autoScrollMarginRight) | 0);
            } else if (pointerX < rect.left + autoScrollMarginLeft && parent.scrollLeft) {
              checkAutoScrollBounds = true;
              changeX = -Math.min(parent.scrollLeft, autoScrollFactor * (1 - Math.max(0, pointerX - rect.left) / autoScrollMarginLeft) | 0);
            }

            if (changeX) {
              parent.scrollLeft += changeX;
            }
          }

          if (isRoot && (changeX || changeY)) {
            _win.scrollTo(parent.scrollLeft, parent.scrollTop);

            setPointerPosition(self.pointerX + changeX, self.pointerY + changeY);
          }

          e = parent;
        }
      }

      if (dirty) {
        var x = self.x,
            y = self.y;

        if (rotationMode) {
          self.deltaX = x - parseFloat(gsCache.rotation);
          self.rotation = x;
          gsCache.rotation = x + "deg";
          gsCache.renderTransform(1, gsCache);
        } else {
          if (scrollProxy) {
            if (allowY) {
              self.deltaY = y - scrollProxy.top();
              scrollProxy.top(y);
            }

            if (allowX) {
              self.deltaX = x - scrollProxy.left();
              scrollProxy.left(x);
            }
          } else if (xyMode) {
            if (allowY) {
              self.deltaY = y - parseFloat(gsCache.y);
              gsCache.y = y + "px";
            }

            if (allowX) {
              self.deltaX = x - parseFloat(gsCache.x);
              gsCache.x = x + "px";
            }

            gsCache.renderTransform(1, gsCache);
          } else {
            if (allowY) {
              self.deltaY = y - parseFloat(target.style.top || 0);
              target.style.top = y + "px";
            }

            if (allowX) {
              self.deltaX = x - parseFloat(target.style.left || 0);
              target.style.left = x + "px";
            }
          }
        }

        if (hasDragCallback && !suppressEvents && !isDispatching) {
          isDispatching = true; //in case onDrag has an update() call (avoid endless loop)

          if (_dispatchEvent(self, "drag", "onDrag") === false) {
            if (allowX) {
              self.x -= self.deltaX;
            }

            if (allowY) {
              self.y -= self.deltaY;
            }

            render(true);
          }

          isDispatching = false;
        }
      }

      dirty = false;
    },
        //copies the x/y from the element (whether that be transforms, top/left, or ScrollProxy's top/left) to the Draggable's x and y (and rotation if necessary) properties so that they reflect reality and it also (optionally) applies any snapping necessary. This is used by the InertiaPlugin tween in an onUpdate to ensure things are synced and snapped.
    syncXY = function syncXY(skipOnUpdate, skipSnap) {
      var x = self.x,
          y = self.y,
          snappedValue,
          cs;

      if (!target._gsap) {
        //just in case the _gsap cache got wiped, like if the user called clearProps on the transform or something (very rare).
        gsCache = gsap.core.getCache(target);
      }

      gsCache.uncache && gsap.getProperty(target, "x"); // trigger a re-cache

      if (xyMode) {
        self.x = parseFloat(gsCache.x);
        self.y = parseFloat(gsCache.y);
      } else if (rotationMode) {
        self.x = self.rotation = parseFloat(gsCache.rotation);
      } else if (scrollProxy) {
        self.y = scrollProxy.top();
        self.x = scrollProxy.left();
      } else {
        self.y = parseFloat(target.style.top || (cs = _getComputedStyle(target)) && cs.top) || 0;
        self.x = parseFloat(target.style.left || (cs || {}).left) || 0;
      }

      if ((snapX || snapY || snapXY) && !skipSnap && (self.isDragging || self.isThrowing)) {
        if (snapXY) {
          _temp1.x = self.x;
          _temp1.y = self.y;
          snappedValue = snapXY(_temp1);

          if (snappedValue.x !== self.x) {
            self.x = snappedValue.x;
            dirty = true;
          }

          if (snappedValue.y !== self.y) {
            self.y = snappedValue.y;
            dirty = true;
          }
        }

        if (snapX) {
          snappedValue = snapX(self.x);

          if (snappedValue !== self.x) {
            self.x = snappedValue;

            if (rotationMode) {
              self.rotation = snappedValue;
            }

            dirty = true;
          }
        }

        if (snapY) {
          snappedValue = snapY(self.y);

          if (snappedValue !== self.y) {
            self.y = snappedValue;
          }

          dirty = true;
        }
      }

      dirty && render(true);

      if (!skipOnUpdate) {
        self.deltaX = self.x - x;
        self.deltaY = self.y - y;

        _dispatchEvent(self, "throwupdate", "onThrowUpdate");
      }
    },
        buildSnapFunc = function buildSnapFunc(snap, min, max, factor) {
      if (min == null) {
        min = -_bigNum;
      }

      if (max == null) {
        max = _bigNum;
      }

      if (_isFunction(snap)) {
        return function (n) {
          var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance; //if we're tweening, disable the edgeTolerance because it's already factored into the tweening values (we don't want to apply it multiple times)

          return snap.call(self, n > max ? max + (n - max) * edgeTolerance : n < min ? min + (n - min) * edgeTolerance : n) * factor;
        };
      }

      if (_isArray(snap)) {
        return function (n) {
          var i = snap.length,
              closest = 0,
              absDif = _bigNum,
              val,
              dif;

          while (--i > -1) {
            val = snap[i];
            dif = val - n;

            if (dif < 0) {
              dif = -dif;
            }

            if (dif < absDif && val >= min && val <= max) {
              closest = i;
              absDif = dif;
            }
          }

          return snap[closest];
        };
      }

      return isNaN(snap) ? function (n) {
        return n;
      } : function () {
        return snap * factor;
      };
    },
        buildPointSnapFunc = function buildPointSnapFunc(snap, minX, maxX, minY, maxY, radius, factor) {
      radius = radius && radius < _bigNum ? radius * radius : _bigNum; //so we don't have to Math.sqrt() in the functions. Performance optimization.

      if (_isFunction(snap)) {
        return function (point) {
          var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance,
              x = point.x,
              y = point.y,
              result,
              dx,
              dy; //if we're tweening, disable the edgeTolerance because it's already factored into the tweening values (we don't want to apply it multiple times)

          point.x = x = x > maxX ? maxX + (x - maxX) * edgeTolerance : x < minX ? minX + (x - minX) * edgeTolerance : x;
          point.y = y = y > maxY ? maxY + (y - maxY) * edgeTolerance : y < minY ? minY + (y - minY) * edgeTolerance : y;
          result = snap.call(self, point);

          if (result !== point) {
            point.x = result.x;
            point.y = result.y;
          }

          if (factor !== 1) {
            point.x *= factor;
            point.y *= factor;
          }

          if (radius < _bigNum) {
            dx = point.x - x;
            dy = point.y - y;

            if (dx * dx + dy * dy > radius) {
              point.x = x;
              point.y = y;
            }
          }

          return point;
        };
      }

      if (_isArray(snap)) {
        return function (p) {
          var i = snap.length,
              closest = 0,
              minDist = _bigNum,
              x,
              y,
              point,
              dist;

          while (--i > -1) {
            point = snap[i];
            x = point.x - p.x;
            y = point.y - p.y;
            dist = x * x + y * y;

            if (dist < minDist) {
              closest = i;
              minDist = dist;
            }
          }

          return minDist <= radius ? snap[closest] : p;
        };
      }

      return function (n) {
        return n;
      };
    },
        calculateBounds = function calculateBounds() {
      var bounds, targetBounds, snap, snapIsRaw;
      hasBounds = false;

      if (scrollProxy) {
        scrollProxy.calibrate();
        self.minX = minX = -scrollProxy.maxScrollLeft();
        self.minY = minY = -scrollProxy.maxScrollTop();
        self.maxX = maxX = self.maxY = maxY = 0;
        hasBounds = true;
      } else if (!!vars.bounds) {
        bounds = _getBounds(vars.bounds, target.parentNode); //could be a selector/jQuery object or a DOM element or a generic object like {top:0, left:100, width:1000, height:800} or {minX:100, maxX:1100, minY:0, maxY:800}

        if (rotationMode) {
          self.minX = minX = bounds.left;
          self.maxX = maxX = bounds.left + bounds.width;
          self.minY = minY = self.maxY = maxY = 0;
        } else if (!_isUndefined(vars.bounds.maxX) || !_isUndefined(vars.bounds.maxY)) {
          bounds = vars.bounds;
          self.minX = minX = bounds.minX;
          self.minY = minY = bounds.minY;
          self.maxX = maxX = bounds.maxX;
          self.maxY = maxY = bounds.maxY;
        } else {
          targetBounds = _getBounds(target, target.parentNode);
          self.minX = minX = Math.round(getPropAsNum(xProp, "px") + bounds.left - targetBounds.left);
          self.minY = minY = Math.round(getPropAsNum(yProp, "px") + bounds.top - targetBounds.top);
          self.maxX = maxX = Math.round(minX + (bounds.width - targetBounds.width));
          self.maxY = maxY = Math.round(minY + (bounds.height - targetBounds.height));
        }

        if (minX > maxX) {
          self.minX = maxX;
          self.maxX = maxX = minX;
          minX = self.minX;
        }

        if (minY > maxY) {
          self.minY = maxY;
          self.maxY = maxY = minY;
          minY = self.minY;
        }

        if (rotationMode) {
          self.minRotation = minX;
          self.maxRotation = maxX;
        }

        hasBounds = true;
      }

      if (vars.liveSnap) {
        snap = vars.liveSnap === true ? vars.snap || {} : vars.liveSnap;
        snapIsRaw = _isArray(snap) || _isFunction(snap);

        if (rotationMode) {
          snapX = buildSnapFunc(snapIsRaw ? snap : snap.rotation, minX, maxX, 1);
          snapY = null;
        } else {
          if (snap.points) {
            snapXY = buildPointSnapFunc(snapIsRaw ? snap : snap.points, minX, maxX, minY, maxY, snap.radius, scrollProxy ? -1 : 1);
          } else {
            if (allowX) {
              snapX = buildSnapFunc(snapIsRaw ? snap : snap.x || snap.left || snap.scrollLeft, minX, maxX, scrollProxy ? -1 : 1);
            }

            if (allowY) {
              snapY = buildSnapFunc(snapIsRaw ? snap : snap.y || snap.top || snap.scrollTop, minY, maxY, scrollProxy ? -1 : 1);
            }
          }
        }
      }
    },
        onThrowComplete = function onThrowComplete() {
      self.isThrowing = false;

      _dispatchEvent(self, "throwcomplete", "onThrowComplete");
    },
        onThrowInterrupt = function onThrowInterrupt() {
      self.isThrowing = false;
    },
        animate = function animate(inertia, forceZeroVelocity) {
      var snap, snapIsRaw, tween, overshootTolerance;

      if (inertia && InertiaPlugin) {
        if (inertia === true) {
          snap = vars.snap || vars.liveSnap || {};
          snapIsRaw = _isArray(snap) || _isFunction(snap);
          inertia = {
            resistance: (vars.throwResistance || vars.resistance || 1000) / (rotationMode ? 10 : 1)
          };

          if (rotationMode) {
            inertia.rotation = _parseInertia(self, snapIsRaw ? snap : snap.rotation, maxX, minX, 1, forceZeroVelocity);
          } else {
            if (allowX) {
              inertia[xProp] = _parseInertia(self, snapIsRaw ? snap : snap.points || snap.x || snap.left, maxX, minX, scrollProxy ? -1 : 1, forceZeroVelocity || self.lockedAxis === "x");
            }

            if (allowY) {
              inertia[yProp] = _parseInertia(self, snapIsRaw ? snap : snap.points || snap.y || snap.top, maxY, minY, scrollProxy ? -1 : 1, forceZeroVelocity || self.lockedAxis === "y");
            }

            if (snap.points || _isArray(snap) && _isObject(snap[0])) {
              inertia.linkedProps = xProp + "," + yProp;
              inertia.radius = snap.radius; //note: we also disable liveSnapping while throwing if there's a "radius" defined, otherwise it looks weird to have the item thrown past a snapping point but live-snapping mid-tween. We do this by altering the onUpdateParams so that "skipSnap" parameter is true for syncXY.
            }
          }
        }

        self.isThrowing = true;
        overshootTolerance = !isNaN(vars.overshootTolerance) ? vars.overshootTolerance : vars.edgeResistance === 1 ? 0 : 1 - self.edgeResistance + 0.2;

        if (!inertia.duration) {
          inertia.duration = {
            max: Math.max(vars.minDuration || 0, "maxDuration" in vars ? vars.maxDuration : 2),
            min: !isNaN(vars.minDuration) ? vars.minDuration : overshootTolerance === 0 || _isObject(inertia) && inertia.resistance > 1000 ? 0 : 0.5,
            overshoot: overshootTolerance
          };
        }

        self.tween = tween = gsap.to(scrollProxy || target, {
          inertia: inertia,
          data: "_draggable",
          onComplete: onThrowComplete,
          onInterrupt: onThrowInterrupt,
          onUpdate: vars.fastMode ? _dispatchEvent : syncXY,
          onUpdateParams: vars.fastMode ? [self, "onthrowupdate", "onThrowUpdate"] : snap && snap.radius ? [false, true] : []
        });

        if (!vars.fastMode) {
          if (scrollProxy) {
            scrollProxy._skip = true; // Microsoft browsers have a bug that causes them to briefly render the position incorrectly (it flashes to the end state when we seek() the tween even though we jump right back to the current position, and this only seems to happen when we're affecting both top and left), so we set a _suspendTransforms flag to prevent it from actually applying the values in the ScrollProxy.
          }

          tween.render(1e9, true, true); // force to the end. Remember, the duration will likely change upon initting because that's when InertiaPlugin calculates it.

          syncXY(true, true);
          self.endX = self.x;
          self.endY = self.y;

          if (rotationMode) {
            self.endRotation = self.x;
          }

          tween.play(0);
          syncXY(true, true);

          if (scrollProxy) {
            scrollProxy._skip = false; //Microsoft browsers have a bug that causes them to briefly render the position incorrectly (it flashes to the end state when we seek() the tween even though we jump right back to the current position, and this only seems to happen when we're affecting both top and left), so we set a _suspendTransforms flag to prevent it from actually applying the values in the ScrollProxy.
          }
        }
      } else if (hasBounds) {
        self.applyBounds();
      }
    },
        updateMatrix = function updateMatrix(shiftStart) {
      var start = matrix,
          p;
      matrix = (0,_utils_matrix_js__WEBPACK_IMPORTED_MODULE_0__.getGlobalMatrix)(target.parentNode, true);

      if (shiftStart && self.isPressed && !matrix.equals(start || new _utils_matrix_js__WEBPACK_IMPORTED_MODULE_0__.Matrix2D())) {
        //if the matrix changes WHILE the element is pressed, we must adjust the startPointerX and startPointerY accordingly, so we invert the original matrix and figure out where the pointerX and pointerY were in the global space, then apply the new matrix to get the updated coordinates.
        p = start.inverse().apply({
          x: startPointerX,
          y: startPointerY
        });
        matrix.apply(p, p);
        startPointerX = p.x;
        startPointerY = p.y;
      }

      if (matrix.equals(_identityMatrix)) {
        //if there are no transforms, we can optimize performance by not factoring in the matrix
        matrix = null;
      }
    },
        recordStartPositions = function recordStartPositions() {
      var edgeTolerance = 1 - self.edgeResistance,
          offsetX = isFixed ? _getDocScrollLeft(ownerDoc) : 0,
          offsetY = isFixed ? _getDocScrollTop(ownerDoc) : 0,
          parsedOrigin,
          x,
          y;
      updateMatrix(false);
      _point1.x = self.pointerX - offsetX;
      _point1.y = self.pointerY - offsetY;
      matrix && matrix.apply(_point1, _point1);
      startPointerX = _point1.x; //translate to local coordinate system

      startPointerY = _point1.y;

      if (dirty) {
        setPointerPosition(self.pointerX, self.pointerY);
        render(true);
      }

      innerMatrix = (0,_utils_matrix_js__WEBPACK_IMPORTED_MODULE_0__.getGlobalMatrix)(target);

      if (scrollProxy) {
        calculateBounds();
        startElementY = scrollProxy.top();
        startElementX = scrollProxy.left();
      } else {
        //if the element is in the process of tweening, don't force snapping to occur because it could make it jump. Imagine the user throwing, then before it's done, clicking on the element in its inbetween state.
        if (isTweening()) {
          syncXY(true, true);
          calculateBounds();
        } else {
          self.applyBounds();
        }

        if (rotationMode) {
          parsedOrigin = target.ownerSVGElement ? [gsCache.xOrigin - target.getBBox().x, gsCache.yOrigin - target.getBBox().y] : (_getComputedStyle(target)[_transformOriginProp] || "0 0").split(" ");
          rotationOrigin = self.rotationOrigin = (0,_utils_matrix_js__WEBPACK_IMPORTED_MODULE_0__.getGlobalMatrix)(target).apply({
            x: parseFloat(parsedOrigin[0]) || 0,
            y: parseFloat(parsedOrigin[1]) || 0
          });
          syncXY(true, true);
          x = self.pointerX - rotationOrigin.x - offsetX;
          y = rotationOrigin.y - self.pointerY + offsetY;
          startElementX = self.x; //starting rotation (x always refers to rotation in type:"rotation", measured in degrees)

          startElementY = self.y = Math.atan2(y, x) * _RAD2DEG;
        } else {
          //parent = !isFixed && target.parentNode;
          //startScrollTop = parent ? parent.scrollTop || 0 : 0;
          //startScrollLeft = parent ? parent.scrollLeft || 0 : 0;
          startElementY = getPropAsNum(yProp, "px"); //record the starting top and left values so that we can just add the mouse's movement to them later.

          startElementX = getPropAsNum(xProp, "px");
        }
      }

      if (hasBounds && edgeTolerance) {
        if (startElementX > maxX) {
          startElementX = maxX + (startElementX - maxX) / edgeTolerance;
        } else if (startElementX < minX) {
          startElementX = minX - (minX - startElementX) / edgeTolerance;
        }

        if (!rotationMode) {
          if (startElementY > maxY) {
            startElementY = maxY + (startElementY - maxY) / edgeTolerance;
          } else if (startElementY < minY) {
            startElementY = minY - (minY - startElementY) / edgeTolerance;
          }
        }
      }

      self.startX = startElementX = _round(startElementX);
      self.startY = startElementY = _round(startElementY);
    },
        isTweening = function isTweening() {
      return self.tween && self.tween.isActive();
    },
        removePlaceholder = function removePlaceholder() {
      if (_placeholderDiv.parentNode && !isTweening() && !self.isDragging) {
        //_placeholderDiv just props open auto-scrolling containers so they don't collapse as the user drags left/up. We remove it after dragging (and throwing, if necessary) finishes.
        _placeholderDiv.parentNode.removeChild(_placeholderDiv);
      }
    },
        //called when the mouse is pressed (or touch starts)
    onPress = function onPress(e, force) {
      var i;

      if (!enabled || self.isPressed || !e || (e.type === "mousedown" || e.type === "pointerdown") && !force && _getTime() - clickTime < 30 && _touchEventLookup[self.pointerEvent.type]) {
        //when we DON'T preventDefault() in order to accommodate touch-scrolling and the user just taps, many browsers also fire a mousedown/mouseup sequence AFTER the touchstart/touchend sequence, thus it'd result in two quick "click" events being dispatched. This line senses that condition and halts it on the subsequent mousedown.
        isPreventingDefault && e && enabled && _preventDefault(e); // in some browsers, we must listen for multiple event types like touchstart, pointerdown, mousedown. The first time this function is called, we record whether or not we _preventDefault() so that on duplicate calls, we can do the same if necessary.

        return;
      }

      interrupted = isTweening();
      self.pointerEvent = e;

      if (_touchEventLookup[e.type]) {
        //note: on iOS, BOTH touchmove and mousemove are dispatched, but the mousemove has pageY and pageX of 0 which would mess up the calculations and needlessly hurt performance.
        touchEventTarget = ~e.type.indexOf("touch") ? e.currentTarget || e.target : ownerDoc; //pointer-based touches (for Microsoft browsers) don't remain locked to the original target like other browsers, so we must use the document instead. The event type would be "MSPointerDown" or "pointerdown".

        _addListener(touchEventTarget, "touchend", onRelease);

        _addListener(touchEventTarget, "touchmove", onMove); // possible future change if PointerEvents are more standardized: https://developer.mozilla.org/en-US/docs/Web/API/Element/setPointerCapture


        _addListener(touchEventTarget, "touchcancel", onRelease);

        _addListener(ownerDoc, "touchstart", _onMultiTouchDocument);
      } else {
        touchEventTarget = null;

        _addListener(ownerDoc, "mousemove", onMove); //attach these to the document instead of the box itself so that if the user's mouse moves too quickly (and off of the box), things still work.

      }

      touchDragAxis = null;

      if (!_supportsPointer || !touchEventTarget) {
        _addListener(ownerDoc, "mouseup", onRelease);

        e && e.target && _addListener(e.target, "mouseup", onRelease); //we also have to listen directly on the element because some browsers don't bubble up the event to the _doc on elements with contentEditable="true"
      }

      isClicking = isClickable.call(self, e.target) && vars.dragClickables === false && !force;

      if (isClicking) {
        _addListener(e.target, "change", onRelease); //in some browsers, when you mousedown on a <select> element, no mouseup gets dispatched! So we listen for a "change" event instead.


        _dispatchEvent(self, "pressInit", "onPressInit");

        _dispatchEvent(self, "press", "onPress");

        _setSelectable(triggers, true); //accommodates things like inputs and elements with contentEditable="true" (otherwise user couldn't drag to select text)


        isPreventingDefault = false;
        return;
      }

      allowNativeTouchScrolling = !touchEventTarget || allowX === allowY || self.vars.allowNativeTouchScrolling === false || self.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2) ? false : allowX ? "y" : "x"; //note: in Chrome, right-clicking (for a context menu) fires onPress and it doesn't have the event.which set properly, so we must look for event.ctrlKey. If the user wants to allow context menus we should of course sense it here and not allow native touch scrolling.

      isPreventingDefault = !allowNativeTouchScrolling && !self.allowEventDefault;

      if (isPreventingDefault) {
        _preventDefault(e);

        _addListener(_win, "touchforcechange", _preventDefault); //works around safari bug: https://greensock.com/forums/topic/21450-draggable-in-iframe-on-mobile-is-buggy/

      }

      if (e.changedTouches) {
        //touch events store the data slightly differently
        e = touch = e.changedTouches[0];
        touchID = e.identifier;
      } else if (e.pointerId) {
        touchID = e.pointerId; //for some Microsoft browsers
      } else {
        touch = touchID = null;
      }

      _dragCount++;

      _addToRenderQueue(render); //causes the Draggable to render on each "tick" of TweenLite.ticker (performance optimization - updating values in a mousemove can cause them to happen too frequently, like multiple times between frame redraws which is wasteful, and it also prevents values from updating properly in IE8)


      startPointerY = self.pointerY = e.pageY; //record the starting x and y so that we can calculate the movement from the original in _onMouseMove

      startPointerX = self.pointerX = e.pageX;

      _dispatchEvent(self, "pressInit", "onPressInit");

      if (allowNativeTouchScrolling || self.autoScroll) {
        _recordMaxScrolls(target.parentNode);
      }

      if (target.parentNode && self.autoScroll && !scrollProxy && !rotationMode && target.parentNode._gsMaxScrollX && !_placeholderDiv.parentNode && !target.getBBox) {
        //add a placeholder div to prevent the parent container from collapsing when the user drags the element left.
        _placeholderDiv.style.width = target.parentNode.scrollWidth + "px";
        target.parentNode.appendChild(_placeholderDiv);
      }

      recordStartPositions();
      self.tween && self.tween.kill();
      self.isThrowing = false;
      gsap.killTweensOf(scrollProxy || target, killProps, true); //in case the user tries to drag it before the last tween is done.

      scrollProxy && gsap.killTweensOf(target, {
        scrollTo: 1
      }, true); //just in case the original target's scroll position is being tweened somewhere else.

      self.tween = self.lockedAxis = null;

      if (vars.zIndexBoost || !rotationMode && !scrollProxy && vars.zIndexBoost !== false) {
        target.style.zIndex = Draggable.zIndex++;
      }

      self.isPressed = true;
      hasDragCallback = !!(vars.onDrag || self._listeners.drag);
      hasMoveCallback = !!(vars.onMove || self._listeners.move);

      if (vars.cursor !== false || vars.activeCursor) {
        i = triggers.length;

        while (--i > -1) {
          gsap.set(triggers[i], {
            cursor: vars.activeCursor || vars.cursor || (_defaultCursor === "grab" ? "grabbing" : _defaultCursor)
          });
        }
      }

      _dispatchEvent(self, "press", "onPress");
    },
        //called every time the mouse/touch moves
    onMove = function onMove(e) {
      var originalEvent = e,
          touches,
          pointerX,
          pointerY,
          i,
          dx,
          dy;

      if (!enabled || _isMultiTouching || !self.isPressed || !e) {
        isPreventingDefault && e && enabled && _preventDefault(e); // in some browsers, we must listen for multiple event types like touchmove, pointermove, mousemove. The first time this function is called, we record whether or not we _preventDefault() so that on duplicate calls, we can do the same if necessary.

        return;
      }

      self.pointerEvent = e;
      touches = e.changedTouches;

      if (touches) {
        //touch events store the data slightly differently
        e = touches[0];

        if (e !== touch && e.identifier !== touchID) {
          //Usually changedTouches[0] will be what we're looking for, but in case it's not, look through the rest of the array...(and Android browsers don't reuse the event like iOS)
          i = touches.length;

          while (--i > -1 && (e = touches[i]).identifier !== touchID && e.target !== target) {} // Some Android devices dispatch a touchstart AND pointerdown initially, and then only pointermove thus the touchID may not match because it was grabbed from the touchstart event whereas the pointer event is the one that the browser dispatches for move, so if the event target matches this Draggable's target, let it through.


          if (i < 0) {
            return;
          }
        }
      } else if (e.pointerId && touchID && e.pointerId !== touchID) {
        //for some Microsoft browsers, we must attach the listener to the doc rather than the trigger so that when the finger moves outside the bounds of the trigger, things still work. So if the event we're receiving has a pointerId that doesn't match the touchID, ignore it (for multi-touch)
        return;
      }

      if (touchEventTarget && allowNativeTouchScrolling && !touchDragAxis) {
        //Android browsers force us to decide on the first "touchmove" event if we should allow the default (scrolling) behavior or preventDefault(). Otherwise, a "touchcancel" will be fired and then no "touchmove" or "touchend" will fire during the scrolling (no good).
        _point1.x = e.pageX - (isFixed ? _getDocScrollLeft(ownerDoc) : 0);
        _point1.y = e.pageY - (isFixed ? _getDocScrollTop(ownerDoc) : 0);
        matrix && matrix.apply(_point1, _point1);
        pointerX = _point1.x;
        pointerY = _point1.y;
        dx = Math.abs(pointerX - startPointerX);
        dy = Math.abs(pointerY - startPointerY);

        if (dx !== dy && (dx > minimumMovement || dy > minimumMovement) || _isAndroid && allowNativeTouchScrolling === touchDragAxis) {
          touchDragAxis = dx > dy && allowX ? "x" : "y";

          if (allowNativeTouchScrolling && touchDragAxis !== allowNativeTouchScrolling) {
            _addListener(_win, "touchforcechange", _preventDefault); // prevents native touch scrolling from taking over if the user started dragging in the other direction in iOS Safari

          }

          if (self.vars.lockAxisOnTouchScroll !== false && allowX && allowY) {
            self.lockedAxis = touchDragAxis === "x" ? "y" : "x";
            _isFunction(self.vars.onLockAxis) && self.vars.onLockAxis.call(self, originalEvent);
          }

          if (_isAndroid && allowNativeTouchScrolling === touchDragAxis) {
            onRelease(originalEvent);
            return;
          }
        }
      }

      if (!self.allowEventDefault && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling !== touchDragAxis) && originalEvent.cancelable !== false) {
        _preventDefault(originalEvent);

        isPreventingDefault = true;
      } else if (isPreventingDefault) {
        isPreventingDefault = false;
      }

      if (self.autoScroll) {
        checkAutoScrollBounds = true;
      }

      setPointerPosition(e.pageX, e.pageY, hasMoveCallback);
    },
        setPointerPosition = function setPointerPosition(pointerX, pointerY, invokeOnMove) {
      var dragTolerance = 1 - self.dragResistance,
          edgeTolerance = 1 - self.edgeResistance,
          prevPointerX = self.pointerX,
          prevPointerY = self.pointerY,
          prevStartElementY = startElementY,
          prevX = self.x,
          prevY = self.y,
          prevEndX = self.endX,
          prevEndY = self.endY,
          prevEndRotation = self.endRotation,
          prevDirty = dirty,
          xChange,
          yChange,
          x,
          y,
          dif,
          temp;
      self.pointerX = pointerX;
      self.pointerY = pointerY;

      if (isFixed) {
        pointerX -= _getDocScrollLeft(ownerDoc);
        pointerY -= _getDocScrollTop(ownerDoc);
      }

      if (rotationMode) {
        y = Math.atan2(rotationOrigin.y - pointerY, pointerX - rotationOrigin.x) * _RAD2DEG;
        dif = self.y - y;

        if (dif > 180) {
          startElementY -= 360;
          self.y = y;
        } else if (dif < -180) {
          startElementY += 360;
          self.y = y;
        }

        if (self.x !== startElementX || Math.abs(startElementY - y) > minimumMovement) {
          self.y = y;
          x = startElementX + (startElementY - y) * dragTolerance;
        } else {
          x = startElementX;
        }
      } else {
        if (matrix) {
          temp = pointerX * matrix.a + pointerY * matrix.c + matrix.e;
          pointerY = pointerX * matrix.b + pointerY * matrix.d + matrix.f;
          pointerX = temp;
        }

        yChange = pointerY - startPointerY;
        xChange = pointerX - startPointerX;

        if (yChange < minimumMovement && yChange > -minimumMovement) {
          yChange = 0;
        }

        if (xChange < minimumMovement && xChange > -minimumMovement) {
          xChange = 0;
        }

        if ((self.lockAxis || self.lockedAxis) && (xChange || yChange)) {
          temp = self.lockedAxis;

          if (!temp) {
            self.lockedAxis = temp = allowX && Math.abs(xChange) > Math.abs(yChange) ? "y" : allowY ? "x" : null;

            if (temp && _isFunction(self.vars.onLockAxis)) {
              self.vars.onLockAxis.call(self, self.pointerEvent);
            }
          }

          if (temp === "y") {
            yChange = 0;
          } else if (temp === "x") {
            xChange = 0;
          }
        }

        x = _round(startElementX + xChange * dragTolerance);
        y = _round(startElementY + yChange * dragTolerance);
      }

      if ((snapX || snapY || snapXY) && (self.x !== x || self.y !== y && !rotationMode)) {
        if (snapXY) {
          _temp1.x = x;
          _temp1.y = y;
          temp = snapXY(_temp1);
          x = _round(temp.x);
          y = _round(temp.y);
        }

        if (snapX) {
          x = _round(snapX(x));
        }

        if (snapY) {
          y = _round(snapY(y));
        }
      }

      if (hasBounds) {
        if (x > maxX) {
          x = maxX + Math.round((x - maxX) * edgeTolerance);
        } else if (x < minX) {
          x = minX + Math.round((x - minX) * edgeTolerance);
        }

        if (!rotationMode) {
          if (y > maxY) {
            y = Math.round(maxY + (y - maxY) * edgeTolerance);
          } else if (y < minY) {
            y = Math.round(minY + (y - minY) * edgeTolerance);
          }
        }
      }

      if (self.x !== x || self.y !== y && !rotationMode) {
        if (rotationMode) {
          self.endRotation = self.x = self.endX = x;
          dirty = true;
        } else {
          if (allowY) {
            self.y = self.endY = y;
            dirty = true; //a flag that indicates we need to render the target next time the TweenLite.ticker dispatches a "tick" event (typically on a requestAnimationFrame) - this is a performance optimization (we shouldn't render on every move because sometimes many move events can get dispatched between screen refreshes, and that'd be wasteful to render every time)
          }

          if (allowX) {
            self.x = self.endX = x;
            dirty = true;
          }
        }

        if (!invokeOnMove || _dispatchEvent(self, "move", "onMove") !== false) {
          if (!self.isDragging && self.isPressed) {
            self.isDragging = true;

            _dispatchEvent(self, "dragstart", "onDragStart");
          }
        } else {
          //revert because the onMove returned false!
          self.pointerX = prevPointerX;
          self.pointerY = prevPointerY;
          startElementY = prevStartElementY;
          self.x = prevX;
          self.y = prevY;
          self.endX = prevEndX;
          self.endY = prevEndY;
          self.endRotation = prevEndRotation;
          dirty = prevDirty;
        }
      }
    },
        //called when the mouse/touch is released
    onRelease = function onRelease(e, force) {
      if (!enabled || !self.isPressed || e && touchID != null && !force && (e.pointerId && e.pointerId !== touchID && e.target !== target || e.changedTouches && !_hasTouchID(e.changedTouches, touchID))) {
        //for some Microsoft browsers, we must attach the listener to the doc rather than the trigger so that when the finger moves outside the bounds of the trigger, things still work. So if the event we're receiving has a pointerId that doesn't match the touchID, ignore it (for multi-touch)
        isPreventingDefault && e && enabled && _preventDefault(e); // in some browsers, we must listen for multiple event types like touchend, pointerup, mouseup. The first time this function is called, we record whether or not we _preventDefault() so that on duplicate calls, we can do the same if necessary.

        return;
      }

      self.isPressed = false;
      var originalEvent = e,
          wasDragging = self.isDragging,
          isContextMenuRelease = self.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2),
          placeholderDelayedCall = gsap.delayedCall(0.001, removePlaceholder),
          touches,
          i,
          syntheticEvent,
          eventTarget,
          syntheticClick;

      if (touchEventTarget) {
        _removeListener(touchEventTarget, "touchend", onRelease);

        _removeListener(touchEventTarget, "touchmove", onMove);

        _removeListener(touchEventTarget, "touchcancel", onRelease);

        _removeListener(ownerDoc, "touchstart", _onMultiTouchDocument);
      } else {
        _removeListener(ownerDoc, "mousemove", onMove);
      }

      _removeListener(_win, "touchforcechange", _preventDefault);

      if (!_supportsPointer || !touchEventTarget) {
        _removeListener(ownerDoc, "mouseup", onRelease);

        e && e.target && _removeListener(e.target, "mouseup", onRelease);
      }

      dirty = false;

      if (wasDragging) {
        dragEndTime = _lastDragTime = _getTime();
        self.isDragging = false;
      }

      if (isClicking && !isContextMenuRelease) {
        if (e) {
          _removeListener(e.target, "change", onRelease);

          self.pointerEvent = originalEvent;
        }

        _setSelectable(triggers, false);

        _dispatchEvent(self, "release", "onRelease");

        _dispatchEvent(self, "click", "onClick");

        isClicking = false;
        return;
      }

      _removeFromRenderQueue(render);

      i = triggers.length;

      while (--i > -1) {
        _setStyle(triggers[i], "cursor", vars.cursor || (vars.cursor !== false ? _defaultCursor : null));
      }

      _dragCount--;

      if (e) {
        touches = e.changedTouches;

        if (touches) {
          //touch events store the data slightly differently
          e = touches[0];

          if (e !== touch && e.identifier !== touchID) {
            //Usually changedTouches[0] will be what we're looking for, but in case it's not, look through the rest of the array...(and Android browsers don't reuse the event like iOS)
            i = touches.length;

            while (--i > -1 && (e = touches[i]).identifier !== touchID && e.target !== target) {}

            if (i < 0) {
              return;
            }
          }
        }

        self.pointerEvent = originalEvent;
        self.pointerX = e.pageX;
        self.pointerY = e.pageY;
      }

      if (isContextMenuRelease && originalEvent) {
        _preventDefault(originalEvent);

        isPreventingDefault = true;

        _dispatchEvent(self, "release", "onRelease");
      } else if (originalEvent && !wasDragging) {
        isPreventingDefault = false;

        if (interrupted && (vars.snap || vars.bounds)) {
          //otherwise, if the user clicks on the object while it's animating to a snapped position, and then releases without moving 3 pixels, it will just stay there (it should animate/snap)
          animate(vars.inertia || vars.throwProps);
        }

        _dispatchEvent(self, "release", "onRelease");

        if ((!_isAndroid || originalEvent.type !== "touchmove") && originalEvent.type.indexOf("cancel") === -1) {
          //to accommodate native scrolling on Android devices, we have to immediately call onRelease() on the first touchmove event, but that shouldn't trigger a "click".
          _dispatchEvent(self, "click", "onClick");

          if (_getTime() - clickTime < 300) {
            _dispatchEvent(self, "doubleclick", "onDoubleClick");
          }

          eventTarget = originalEvent.target || target; //old IE uses srcElement

          clickTime = _getTime();

          syntheticClick = function syntheticClick() {
            // some browsers (like Firefox) won't trust script-generated clicks, so if the user tries to click on a video to play it, for example, it simply won't work. Since a regular "click" event will most likely be generated anyway (one that has its isTrusted flag set to true), we must slightly delay our script-generated click so that the "real"/trusted one is prioritized. Remember, when there are duplicate events in quick succession, we suppress all but the first one. Some browsers don't even trigger the "real" one at all, so our synthetic one is a safety valve that ensures that no matter what, a click event does get dispatched.
            if (clickTime !== clickDispatch && self.enabled() && !self.isPressed && !originalEvent.defaultPrevented) {
              if (eventTarget.click) {
                //some browsers (like mobile Safari) don't properly trigger the click event
                eventTarget.click();
              } else if (ownerDoc.createEvent) {
                syntheticEvent = ownerDoc.createEvent("MouseEvents");
                syntheticEvent.initMouseEvent("click", true, true, _win, 1, self.pointerEvent.screenX, self.pointerEvent.screenY, self.pointerX, self.pointerY, false, false, false, false, 0, null);
                eventTarget.dispatchEvent(syntheticEvent);
              }
            }
          };

          if (!_isAndroid && !originalEvent.defaultPrevented) {
            //iOS Safari requires the synthetic click to happen immediately or else it simply won't work, but Android doesn't play nice.
            gsap.delayedCall(0.05, syntheticClick); //in addition to the iOS bug workaround, there's a Firefox issue with clicking on things like a video to play, so we must fake a click event in a slightly delayed fashion. Previously, we listened for the "click" event with "capture" false which solved the video-click-to-play issue, but it would allow the "click" event to be dispatched twice like if you were using a jQuery.click() because that was handled in the capture phase, thus we had to switch to the capture phase to avoid the double-dispatching, but do the delayed synthetic click. Don't fire it too fast (like 0.00001) because we want to give the native event a chance to fire first as it's "trusted".
          }
        }
      } else {
        animate(vars.inertia || vars.throwProps); //will skip if inertia/throwProps isn't defined or InertiaPlugin isn't loaded.

        if (!self.allowEventDefault && originalEvent && (vars.dragClickables !== false || !isClickable.call(self, originalEvent.target)) && wasDragging && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling === touchDragAxis) && originalEvent.cancelable !== false) {
          isPreventingDefault = true;

          _preventDefault(originalEvent);
        } else {
          isPreventingDefault = false;
        }

        _dispatchEvent(self, "release", "onRelease");
      }

      isTweening() && placeholderDelayedCall.duration(self.tween.duration()); //sync the timing so that the placeholder DIV gets

      wasDragging && _dispatchEvent(self, "dragend", "onDragEnd");
      return true;
    },
        updateScroll = function updateScroll(e) {
      if (e && self.isDragging && !scrollProxy) {
        var parent = e.target || target.parentNode,
            deltaX = parent.scrollLeft - parent._gsScrollX,
            deltaY = parent.scrollTop - parent._gsScrollY;

        if (deltaX || deltaY) {
          if (matrix) {
            startPointerX -= deltaX * matrix.a + deltaY * matrix.c;
            startPointerY -= deltaY * matrix.d + deltaX * matrix.b;
          } else {
            startPointerX -= deltaX;
            startPointerY -= deltaY;
          }

          parent._gsScrollX += deltaX;
          parent._gsScrollY += deltaY;
          setPointerPosition(self.pointerX, self.pointerY);
        }
      }
    },
        onClick = function onClick(e) {
      //this was a huge pain in the neck to align all the various browsers and their behaviors. Chrome, Firefox, Safari, Opera, Android, and Microsoft Edge all handle events differently! Some will only trigger native behavior (like checkbox toggling) from trusted events. Others don't even support isTrusted, but require 2 events to flow through before triggering native behavior. Edge treats everything as trusted but also mandates that 2 flow through to trigger the correct native behavior.
      var time = _getTime(),
          recentlyClicked = time - clickTime < 100,
          recentlyDragged = time - dragEndTime < 50,
          alreadyDispatched = recentlyClicked && clickDispatch === clickTime,
          defaultPrevented = self.pointerEvent && self.pointerEvent.defaultPrevented,
          alreadyDispatchedTrusted = recentlyClicked && trustedClickDispatch === clickTime,
          trusted = e.isTrusted || e.isTrusted == null && recentlyClicked && alreadyDispatched; //note: Safari doesn't support isTrusted, and it won't properly execute native behavior (like toggling checkboxes) on the first synthetic "click" event - we must wait for the 2nd and treat it as trusted (but stop propagation at that point). Confusing, I know. Don't you love cross-browser compatibility challenges?


      if ((alreadyDispatched || recentlyDragged && self.vars.suppressClickOnDrag !== false) && e.stopImmediatePropagation) {
        e.stopImmediatePropagation();
      }

      if (recentlyClicked && !(self.pointerEvent && self.pointerEvent.defaultPrevented) && (!alreadyDispatched || trusted && !alreadyDispatchedTrusted)) {
        //let the first click pass through unhindered. Let the next one only if it's trusted, then no more (stop quick-succession ones)
        if (trusted && alreadyDispatched) {
          trustedClickDispatch = clickTime;
        }

        clickDispatch = clickTime;
        return;
      }

      if (self.isPressed || recentlyDragged || recentlyClicked) {
        if (!trusted || !e.detail || !recentlyClicked || defaultPrevented) {
          _preventDefault(e);
        }
      }

      if (!recentlyClicked && !recentlyDragged) {
        // for script-triggered event dispatches, like element.click()
        e && e.target && (self.pointerEvent = e);

        _dispatchEvent(self, "click", "onClick");
      }
    },
        localizePoint = function localizePoint(p) {
      return matrix ? {
        x: p.x * matrix.a + p.y * matrix.c + matrix.e,
        y: p.x * matrix.b + p.y * matrix.d + matrix.f
      } : {
        x: p.x,
        y: p.y
      };
    };

    old = Draggable.get(target);
    old && old.kill(); // avoids duplicates (an element can only be controlled by one Draggable)
    //give the user access to start/stop dragging...

    _this2.startDrag = function (event, align) {
      var r1, r2, p1, p2;
      onPress(event || self.pointerEvent, true); //if the pointer isn't on top of the element, adjust things accordingly

      if (align && !self.hitTest(event || self.pointerEvent)) {
        r1 = _parseRect(event || self.pointerEvent);
        r2 = _parseRect(target);
        p1 = localizePoint({
          x: r1.left + r1.width / 2,
          y: r1.top + r1.height / 2
        });
        p2 = localizePoint({
          x: r2.left + r2.width / 2,
          y: r2.top + r2.height / 2
        });
        startPointerX -= p1.x - p2.x;
        startPointerY -= p1.y - p2.y;
      }

      if (!self.isDragging) {
        self.isDragging = true;

        _dispatchEvent(self, "dragstart", "onDragStart");
      }
    };

    _this2.drag = onMove;

    _this2.endDrag = function (e) {
      return onRelease(e || self.pointerEvent, true);
    };

    _this2.timeSinceDrag = function () {
      return self.isDragging ? 0 : (_getTime() - dragEndTime) / 1000;
    };

    _this2.timeSinceClick = function () {
      return (_getTime() - clickTime) / 1000;
    };

    _this2.hitTest = function (target, threshold) {
      return Draggable.hitTest(self.target, target, threshold);
    };

    _this2.getDirection = function (from, diagonalThreshold) {
      //from can be "start" (default), "velocity", or an element
      var mode = from === "velocity" && InertiaPlugin ? from : _isObject(from) && !rotationMode ? "element" : "start",
          xChange,
          yChange,
          ratio,
          direction,
          r1,
          r2;

      if (mode === "element") {
        r1 = _parseRect(self.target);
        r2 = _parseRect(from);
      }

      xChange = mode === "start" ? self.x - startElementX : mode === "velocity" ? InertiaPlugin.getVelocity(target, xProp) : r1.left + r1.width / 2 - (r2.left + r2.width / 2);

      if (rotationMode) {
        return xChange < 0 ? "counter-clockwise" : "clockwise";
      } else {
        diagonalThreshold = diagonalThreshold || 2;
        yChange = mode === "start" ? self.y - startElementY : mode === "velocity" ? InertiaPlugin.getVelocity(target, yProp) : r1.top + r1.height / 2 - (r2.top + r2.height / 2);
        ratio = Math.abs(xChange / yChange);
        direction = ratio < 1 / diagonalThreshold ? "" : xChange < 0 ? "left" : "right";

        if (ratio < diagonalThreshold) {
          if (direction !== "") {
            direction += "-";
          }

          direction += yChange < 0 ? "up" : "down";
        }
      }

      return direction;
    };

    _this2.applyBounds = function (newBounds, sticky) {
      var x, y, forceZeroVelocity, e, parent, isRoot;

      if (newBounds && vars.bounds !== newBounds) {
        vars.bounds = newBounds;
        return self.update(true, sticky);
      }

      syncXY(true);
      calculateBounds();

      if (hasBounds && !isTweening()) {
        x = self.x;
        y = self.y;

        if (x > maxX) {
          x = maxX;
        } else if (x < minX) {
          x = minX;
        }

        if (y > maxY) {
          y = maxY;
        } else if (y < minY) {
          y = minY;
        }

        if (self.x !== x || self.y !== y) {
          forceZeroVelocity = true;
          self.x = self.endX = x;

          if (rotationMode) {
            self.endRotation = x;
          } else {
            self.y = self.endY = y;
          }

          dirty = true;
          render(true);

          if (self.autoScroll && !self.isDragging) {
            _recordMaxScrolls(target.parentNode);

            e = target;
            _windowProxy.scrollTop = _win.pageYOffset != null ? _win.pageYOffset : ownerDoc.documentElement.scrollTop != null ? ownerDoc.documentElement.scrollTop : ownerDoc.body.scrollTop;
            _windowProxy.scrollLeft = _win.pageXOffset != null ? _win.pageXOffset : ownerDoc.documentElement.scrollLeft != null ? ownerDoc.documentElement.scrollLeft : ownerDoc.body.scrollLeft;

            while (e && !isRoot) {
              //walk up the chain and sense wherever the scrollTop/scrollLeft exceeds the maximum.
              isRoot = _isRoot(e.parentNode);
              parent = isRoot ? _windowProxy : e.parentNode;

              if (allowY && parent.scrollTop > parent._gsMaxScrollY) {
                parent.scrollTop = parent._gsMaxScrollY;
              }

              if (allowX && parent.scrollLeft > parent._gsMaxScrollX) {
                parent.scrollLeft = parent._gsMaxScrollX;
              }

              e = parent;
            }
          }
        }

        if (self.isThrowing && (forceZeroVelocity || self.endX > maxX || self.endX < minX || self.endY > maxY || self.endY < minY)) {
          animate(vars.inertia || vars.throwProps, forceZeroVelocity);
        }
      }

      return self;
    };

    _this2.update = function (applyBounds, sticky, ignoreExternalChanges) {
      if (sticky && self.isPressed) {
        // in case the element was repositioned in the document flow, thus its x/y may be identical but its position is actually quite different.
        var m = (0,_utils_matrix_js__WEBPACK_IMPORTED_MODULE_0__.getGlobalMatrix)(target),
            p = innerMatrix.apply({
          x: self.x - startElementX,
          y: self.y - startElementY
        }),
            m2 = (0,_utils_matrix_js__WEBPACK_IMPORTED_MODULE_0__.getGlobalMatrix)(target.parentNode, true);
        m2.apply({
          x: m.e - p.x,
          y: m.f - p.y
        }, p);
        self.x -= p.x - m2.e;
        self.y -= p.y - m2.f;
        render(true);
        recordStartPositions();
      }

      var x = self.x,
          y = self.y;
      updateMatrix(!sticky);

      if (applyBounds) {
        self.applyBounds();
      } else {
        dirty && ignoreExternalChanges && render(true);
        syncXY(true);
      }

      if (sticky) {
        setPointerPosition(self.pointerX, self.pointerY);
        dirty && render(true);
      }

      if (self.isPressed && !sticky && (allowX && Math.abs(x - self.x) > 0.01 || allowY && Math.abs(y - self.y) > 0.01 && !rotationMode)) {
        recordStartPositions();
      }

      if (self.autoScroll) {
        _recordMaxScrolls(target.parentNode, self.isDragging);

        checkAutoScrollBounds = self.isDragging;
        render(true); //in case reparenting occurred.

        _removeScrollListener(target, updateScroll);

        _addScrollListener(target, updateScroll);
      }

      return self;
    };

    _this2.enable = function (type) {
      var setVars = {
        lazy: true
      },
          id,
          i,
          trigger;

      if (vars.cursor !== false) {
        setVars.cursor = vars.cursor || _defaultCursor;
      }

      if (gsap.utils.checkPrefix("touchCallout")) {
        setVars.touchCallout = "none";
      }

      if (type !== "soft") {
        _setTouchActionForAllDescendants(triggers, allowX === allowY ? "none" : vars.allowNativeTouchScrolling && target.scrollHeight === target.clientHeight === (target.scrollWidth === target.clientHeight) || vars.allowEventDefault ? "manipulation" : allowX ? "pan-y" : "pan-x"); // Some browsers like Internet Explorer will fire a pointercancel event when the user attempts to drag when touchAction is "manipulate" because it's perceived as a pan. If the element has scrollable content in only one direction, we should use pan-x or pan-y accordingly so that the pointercancel doesn't prevent dragging.


        i = triggers.length;

        while (--i > -1) {
          trigger = triggers[i];
          _supportsPointer || _addListener(trigger, "mousedown", onPress);

          _addListener(trigger, "touchstart", onPress);

          _addListener(trigger, "click", onClick, true); //note: used to pass true for capture but it prevented click-to-play-video functionality in Firefox.


          gsap.set(trigger, setVars);

          if (trigger.getBBox && trigger.ownerSVGElement) {
            // a bug in chrome doesn't respect touch-action on SVG elements - it only works if we set it on the parent SVG.
            gsap.set(trigger.ownerSVGElement, {
              touchAction: allowX === allowY ? "none" : vars.allowNativeTouchScrolling || vars.allowEventDefault ? "manipulation" : allowX ? "pan-y" : "pan-x"
            });
          }

          vars.allowContextMenu || _addListener(trigger, "contextmenu", onContextMenu);
        }

        _setSelectable(triggers, false);
      }

      _addScrollListener(target, updateScroll);

      enabled = true;

      if (InertiaPlugin && type !== "soft") {
        InertiaPlugin.track(scrollProxy || target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
      }

      target._gsDragID = id = "d" + _lookupCount++;
      _lookup[id] = self;

      if (scrollProxy) {
        scrollProxy.enable();
        scrollProxy.element._gsDragID = id;
      }

      (vars.bounds || rotationMode) && recordStartPositions();
      vars.bounds && self.applyBounds();
      return self;
    };

    _this2.disable = function (type) {
      var dragging = self.isDragging,
          i = triggers.length,
          trigger;

      while (--i > -1) {
        _setStyle(triggers[i], "cursor", null);
      }

      if (type !== "soft") {
        _setTouchActionForAllDescendants(triggers, null);

        i = triggers.length;

        while (--i > -1) {
          trigger = triggers[i];

          _setStyle(trigger, "touchCallout", null);

          _removeListener(trigger, "mousedown", onPress);

          _removeListener(trigger, "touchstart", onPress);

          _removeListener(trigger, "click", onClick);

          _removeListener(trigger, "contextmenu", onContextMenu);
        }

        _setSelectable(triggers, true);

        if (touchEventTarget) {
          _removeListener(touchEventTarget, "touchcancel", onRelease);

          _removeListener(touchEventTarget, "touchend", onRelease);

          _removeListener(touchEventTarget, "touchmove", onMove);
        }

        _removeListener(ownerDoc, "mouseup", onRelease);

        _removeListener(ownerDoc, "mousemove", onMove);
      }

      _removeScrollListener(target, updateScroll);

      enabled = false;
      InertiaPlugin && type !== "soft" && InertiaPlugin.untrack(scrollProxy || target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
      scrollProxy && scrollProxy.disable();

      _removeFromRenderQueue(render);

      self.isDragging = self.isPressed = isClicking = false;
      dragging && _dispatchEvent(self, "dragend", "onDragEnd");
      return self;
    };

    _this2.enabled = function (value, type) {
      return arguments.length ? value ? self.enable(type) : self.disable(type) : enabled;
    };

    _this2.kill = function () {
      self.isThrowing = false;
      self.tween && self.tween.kill();
      self.disable();
      gsap.set(triggers, {
        clearProps: "userSelect"
      });
      delete _lookup[target._gsDragID];
      return self;
    };

    if (~type.indexOf("scroll")) {
      scrollProxy = _this2.scrollProxy = new ScrollProxy(target, _extend({
        onKill: function onKill() {
          //ScrollProxy's onKill() gets called if/when the ScrollProxy senses that the user interacted with the scroll position manually (like using the scrollbar). IE9 doesn't fire the "mouseup" properly when users drag the scrollbar of an element, so this works around that issue.
          self.isPressed && onRelease(null);
        }
      }, vars)); //a bug in many Android devices' stock browser causes scrollTop to get forced back to 0 after it is altered via JS, so we set overflow to "hidden" on mobile/touch devices (they hide the scroll bar anyway). That works around the bug. (This bug is discussed at https://code.google.com/p/android/issues/detail?id=19625)

      target.style.overflowY = allowY && !_isTouchDevice ? "auto" : "hidden";
      target.style.overflowX = allowX && !_isTouchDevice ? "auto" : "hidden";
      target = scrollProxy.content;
    }

    if (rotationMode) {
      killProps.rotation = 1;
    } else {
      if (allowX) {
        killProps[xProp] = 1;
      }

      if (allowY) {
        killProps[yProp] = 1;
      }
    }

    gsCache.force3D = "force3D" in vars ? vars.force3D : true; //otherwise, normal dragging would be in 2D and then as soon as it's released and there's an inertia tween, it'd jump to 3D which can create an initial jump due to the work the browser must to do layerize it.

    _this2.enable();

    return _this2;
  }

  Draggable.register = function register(core) {
    gsap = core;

    _initCore();
  };

  Draggable.create = function create(targets, vars) {
    _coreInitted || _initCore(true);
    return _toArray(targets).map(function (target) {
      return new Draggable(target, vars);
    });
  };

  Draggable.get = function get(target) {
    return _lookup[(_toArray(target)[0] || {})._gsDragID];
  };

  Draggable.timeSinceDrag = function timeSinceDrag() {
    return (_getTime() - _lastDragTime) / 1000;
  };

  Draggable.hitTest = function hitTest(obj1, obj2, threshold) {
    if (obj1 === obj2) {
      return false;
    }

    var r1 = _parseRect(obj1),
        r2 = _parseRect(obj2),
        top = r1.top,
        left = r1.left,
        right = r1.right,
        bottom = r1.bottom,
        width = r1.width,
        height = r1.height,
        isOutside = r2.left > right || r2.right < left || r2.top > bottom || r2.bottom < top,
        overlap,
        area,
        isRatio;

    if (isOutside || !threshold) {
      return !isOutside;
    }

    isRatio = (threshold + "").indexOf("%") !== -1;
    threshold = parseFloat(threshold) || 0;
    overlap = {
      left: Math.max(left, r2.left),
      top: Math.max(top, r2.top)
    };
    overlap.width = Math.min(right, r2.right) - overlap.left;
    overlap.height = Math.min(bottom, r2.bottom) - overlap.top;

    if (overlap.width < 0 || overlap.height < 0) {
      return false;
    }

    if (isRatio) {
      threshold *= 0.01;
      area = overlap.width * overlap.height;
      return area >= width * height * threshold || area >= r2.width * r2.height * threshold;
    }

    return overlap.width > threshold && overlap.height > threshold;
  };

  return Draggable;
}(EventDispatcher);

_setDefaults(Draggable.prototype, {
  pointerX: 0,
  pointerY: 0,
  startX: 0,
  startY: 0,
  deltaX: 0,
  deltaY: 0,
  isDragging: false,
  isPressed: false
});

Draggable.zIndex = 1000;
Draggable.version = "3.10.4";
_getGSAP() && gsap.registerPlugin(Draggable);


/***/ }),

/***/ "./node_modules/gsap/gsap-core.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/gsap-core.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Animation": () => (/* binding */ Animation),
/* harmony export */   "Back": () => (/* binding */ Back),
/* harmony export */   "Bounce": () => (/* binding */ Bounce),
/* harmony export */   "Circ": () => (/* binding */ Circ),
/* harmony export */   "Cubic": () => (/* binding */ Cubic),
/* harmony export */   "Elastic": () => (/* binding */ Elastic),
/* harmony export */   "Expo": () => (/* binding */ Expo),
/* harmony export */   "GSCache": () => (/* binding */ GSCache),
/* harmony export */   "Linear": () => (/* binding */ Linear),
/* harmony export */   "Power0": () => (/* binding */ Power0),
/* harmony export */   "Power1": () => (/* binding */ Power1),
/* harmony export */   "Power2": () => (/* binding */ Power2),
/* harmony export */   "Power3": () => (/* binding */ Power3),
/* harmony export */   "Power4": () => (/* binding */ Power4),
/* harmony export */   "PropTween": () => (/* binding */ PropTween),
/* harmony export */   "Quad": () => (/* binding */ Quad),
/* harmony export */   "Quart": () => (/* binding */ Quart),
/* harmony export */   "Quint": () => (/* binding */ Quint),
/* harmony export */   "Sine": () => (/* binding */ Sine),
/* harmony export */   "SteppedEase": () => (/* binding */ SteppedEase),
/* harmony export */   "Strong": () => (/* binding */ Strong),
/* harmony export */   "Timeline": () => (/* binding */ Timeline),
/* harmony export */   "TimelineLite": () => (/* binding */ Timeline),
/* harmony export */   "TimelineMax": () => (/* binding */ Timeline),
/* harmony export */   "Tween": () => (/* binding */ Tween),
/* harmony export */   "TweenLite": () => (/* binding */ Tween),
/* harmony export */   "TweenMax": () => (/* binding */ Tween),
/* harmony export */   "_checkPlugin": () => (/* binding */ _checkPlugin),
/* harmony export */   "_colorExp": () => (/* binding */ _colorExp),
/* harmony export */   "_colorStringFilter": () => (/* binding */ _colorStringFilter),
/* harmony export */   "_config": () => (/* binding */ _config),
/* harmony export */   "_forEachName": () => (/* binding */ _forEachName),
/* harmony export */   "_getCache": () => (/* binding */ _getCache),
/* harmony export */   "_getProperty": () => (/* binding */ _getProperty),
/* harmony export */   "_getSetter": () => (/* binding */ _getSetter),
/* harmony export */   "_isString": () => (/* binding */ _isString),
/* harmony export */   "_isUndefined": () => (/* binding */ _isUndefined),
/* harmony export */   "_missingPlugin": () => (/* binding */ _missingPlugin),
/* harmony export */   "_numExp": () => (/* binding */ _numExp),
/* harmony export */   "_numWithUnitExp": () => (/* binding */ _numWithUnitExp),
/* harmony export */   "_parseRelative": () => (/* binding */ _parseRelative),
/* harmony export */   "_plugins": () => (/* binding */ _plugins),
/* harmony export */   "_relExp": () => (/* binding */ _relExp),
/* harmony export */   "_removeLinkedListItem": () => (/* binding */ _removeLinkedListItem),
/* harmony export */   "_renderComplexString": () => (/* binding */ _renderComplexString),
/* harmony export */   "_replaceRandom": () => (/* binding */ _replaceRandom),
/* harmony export */   "_round": () => (/* binding */ _round),
/* harmony export */   "_roundModifier": () => (/* binding */ _roundModifier),
/* harmony export */   "_setDefaults": () => (/* binding */ _setDefaults),
/* harmony export */   "_sortPropTweensByPriority": () => (/* binding */ _sortPropTweensByPriority),
/* harmony export */   "_ticker": () => (/* binding */ _ticker),
/* harmony export */   "clamp": () => (/* binding */ clamp),
/* harmony export */   "default": () => (/* binding */ gsap),
/* harmony export */   "distribute": () => (/* binding */ distribute),
/* harmony export */   "getUnit": () => (/* binding */ getUnit),
/* harmony export */   "gsap": () => (/* binding */ gsap),
/* harmony export */   "interpolate": () => (/* binding */ interpolate),
/* harmony export */   "mapRange": () => (/* binding */ mapRange),
/* harmony export */   "normalize": () => (/* binding */ normalize),
/* harmony export */   "pipe": () => (/* binding */ pipe),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "selector": () => (/* binding */ selector),
/* harmony export */   "shuffle": () => (/* binding */ shuffle),
/* harmony export */   "snap": () => (/* binding */ snap),
/* harmony export */   "splitColor": () => (/* binding */ splitColor),
/* harmony export */   "toArray": () => (/* binding */ toArray),
/* harmony export */   "unitize": () => (/* binding */ unitize),
/* harmony export */   "wrap": () => (/* binding */ wrap),
/* harmony export */   "wrapYoyo": () => (/* binding */ wrapYoyo)
/* harmony export */ });
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/*!
 * GSAP 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var _config = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
},
    _defaults = {
  duration: .5,
  overwrite: false,
  delay: 0
},
    _suppressOverwrites,
    _bigNum = 1e8,
    _tinyNum = 1 / _bigNum,
    _2PI = Math.PI * 2,
    _HALF_PI = _2PI / 4,
    _gsID = 0,
    _sqrt = Math.sqrt,
    _cos = Math.cos,
    _sin = Math.sin,
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    _isUndefined = function _isUndefined(value) {
  return typeof value === "undefined";
},
    _isObject = function _isObject(value) {
  return typeof value === "object";
},
    _isNotFalse = function _isNotFalse(value) {
  return value !== false;
},
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _isFuncOrString = function _isFuncOrString(value) {
  return _isFunction(value) || _isString(value);
},
    _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () {},
    // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
_isArray = Array.isArray,
    _strictNumExp = /(?:-?\.?\d|\.)+/gi,
    //only numbers (including negatives and decimals) but NOT relative values.
_numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
_numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
_relExp = /[+-]=-?[.\d]+/,
    _delimitedValueExp = /[^,'"\[\]\s]+/gi,
    // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
_unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    _globalTimeline,
    _win,
    _coreInitted,
    _doc,
    _globals = {},
    _installScope = {},
    _coreReady,
    _install = function _install(scope) {
  return (_installScope = _merge(scope, _globals)) && gsap;
},
    _missingPlugin = function _missingPlugin(property, value) {
  return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
},
    _warn = function _warn(message, suppress) {
  return !suppress && console.warn(message);
},
    _addGlobal = function _addGlobal(name, obj) {
  return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
},
    _emptyFunc = function _emptyFunc() {
  return 0;
},
    _reservedProps = {},
    _lazyTweens = [],
    _lazyLookup = {},
    _lastRenderedFrame,
    _plugins = {},
    _effects = {},
    _nextGCFrame = 30,
    _harnessPlugins = [],
    _callbackNames = "",
    _harness = function _harness(targets) {
  var target = targets[0],
      harnessPlugin,
      i;
  _isObject(target) || _isFunction(target) || (targets = [targets]);

  if (!(harnessPlugin = (target._gsap || {}).harness)) {
    // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
    i = _harnessPlugins.length;

    while (i-- && !_harnessPlugins[i].targetTest(target)) {}

    harnessPlugin = _harnessPlugins[i];
  }

  i = targets.length;

  while (i--) {
    targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
  }

  return targets;
},
    _getCache = function _getCache(target) {
  return target._gsap || _harness(toArray(target))[0]._gsap;
},
    _getProperty = function _getProperty(target, property, v) {
  return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
},
    _forEachName = function _forEachName(names, func) {
  return (names = names.split(",")).forEach(func) || names;
},
    //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
_round = function _round(value) {
  return Math.round(value * 100000) / 100000 || 0;
},
    _roundPrecise = function _roundPrecise(value) {
  return Math.round(value * 10000000) / 10000000 || 0;
},
    // increased precision mostly for timing values.
_parseRelative = function _parseRelative(start, value) {
  var operator = value.charAt(0),
      end = parseFloat(value.substr(2));
  start = parseFloat(start);
  return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
},
    _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
  //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
  var l = toFind.length,
      i = 0;

  for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}

  return i < l;
},
    _lazyRender = function _lazyRender() {
  var l = _lazyTweens.length,
      a = _lazyTweens.slice(0),
      i,
      tween;

  _lazyLookup = {};
  _lazyTweens.length = 0;

  for (i = 0; i < l; i++) {
    tween = a[i];
    tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
  }
},
    _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
  _lazyTweens.length && _lazyRender();
  animation.render(time, suppressEvents, force);
  _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
},
    _numericIfPossible = function _numericIfPossible(value) {
  var n = parseFloat(value);
  return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
},
    _passThrough = function _passThrough(p) {
  return p;
},
    _setDefaults = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }

  return obj;
},
    _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
  return function (obj, defaults) {
    for (var p in defaults) {
      p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
    }
  };
},
    _merge = function _merge(base, toMerge) {
  for (var p in toMerge) {
    base[p] = toMerge[p];
  }

  return base;
},
    _mergeDeep = function _mergeDeep(base, toMerge) {
  for (var p in toMerge) {
    p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
  }

  return base;
},
    _copyExcluding = function _copyExcluding(obj, excluding) {
  var copy = {},
      p;

  for (p in obj) {
    p in excluding || (copy[p] = obj[p]);
  }

  return copy;
},
    _inheritDefaults = function _inheritDefaults(vars) {
  var parent = vars.parent || _globalTimeline,
      func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;

  if (_isNotFalse(vars.inherit)) {
    while (parent) {
      func(vars, parent.vars.defaults);
      parent = parent.parent || parent._dp;
    }
  }

  return vars;
},
    _arraysMatch = function _arraysMatch(a1, a2) {
  var i = a1.length,
      match = i === a2.length;

  while (match && i-- && a1[i] === a2[i]) {}

  return i < 0;
},
    _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = parent[lastProp],
      t;

  if (sortBy) {
    t = child[sortBy];

    while (prev && prev[sortBy] > t) {
      prev = prev._prev;
    }
  }

  if (prev) {
    child._next = prev._next;
    prev._next = child;
  } else {
    child._next = parent[firstProp];
    parent[firstProp] = child;
  }

  if (child._next) {
    child._next._prev = child;
  } else {
    parent[lastProp] = child;
  }

  child._prev = prev;
  child.parent = child._dp = parent;
  return child;
},
    _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = child._prev,
      next = child._next;

  if (prev) {
    prev._next = next;
  } else if (parent[firstProp] === child) {
    parent[firstProp] = next;
  }

  if (next) {
    next._prev = prev;
  } else if (parent[lastProp] === child) {
    parent[lastProp] = prev;
  }

  child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
},
    _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
  child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
  child._act = 0;
},
    _uncache = function _uncache(animation, child) {
  if (animation && (!child || child._end > animation._dur || child._start < 0)) {
    // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
    var a = animation;

    while (a) {
      a._dirty = 1;
      a = a.parent;
    }
  }

  return animation;
},
    _recacheAncestors = function _recacheAncestors(animation) {
  var parent = animation.parent;

  while (parent && parent.parent) {
    //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
    parent._dirty = 1;
    parent.totalDuration();
    parent = parent.parent;
  }

  return animation;
},
    _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
  return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
},
    _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
  return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
},
    // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
_animationCycle = function _animationCycle(tTime, cycleDuration) {
  var whole = Math.floor(tTime /= cycleDuration);
  return tTime && whole === tTime ? whole - 1 : whole;
},
    _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
  return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
},
    _setEnd = function _setEnd(animation) {
  return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
},
    _alignPlayhead = function _alignPlayhead(animation, totalTime) {
  // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
  var parent = animation._dp;

  if (parent && parent.smoothChildTiming && animation._ts) {
    animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));

    _setEnd(animation);

    parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
  }

  return animation;
},

/*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/
_postAddChecks = function _postAddChecks(timeline, child) {
  var t;

  if (child._time || child._initted && !child._dur) {
    //in case, for example, the _start is moved on a tween that has already rendered. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning.
    t = _parentToChildTotalTime(timeline.rawTime(), child);

    if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
      child.render(t, true);
    }
  } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.


  if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
    //in case any of the ancestors had completed but should now be enabled...
    if (timeline._dur < timeline.duration()) {
      t = timeline;

      while (t._dp) {
        t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.

        t = t._dp;
      }
    }

    timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
  }
},
    _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
  child.parent && _removeFromParent(child);
  child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
  child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));

  _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);

  _isFromOrFromStart(child) || (timeline._recent = child);
  skipChecks || _postAddChecks(timeline, child);
  return timeline;
},
    _scrollTrigger = function _scrollTrigger(animation, trigger) {
  return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
},
    _attemptInitTween = function _attemptInitTween(tween, totalTime, force, suppressEvents) {
  _initTween(tween, totalTime);

  if (!tween._initted) {
    return 1;
  }

  if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
    _lazyTweens.push(tween);

    tween._lazy = [totalTime, suppressEvents];
    return 1;
  }
},
    _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
  var parent = _ref.parent;
  return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
},
    // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
_isFromOrFromStart = function _isFromOrFromStart(_ref2) {
  var data = _ref2.data;
  return data === "isFromStart" || data === "isStart";
},
    _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
  var prevRatio = tween.ratio,
      ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1,
      // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
  repeatDelay = tween._rDelay,
      tTime = 0,
      pt,
      iteration,
      prevIteration;

  if (repeatDelay && tween._repeat) {
    // in case there's a zero-duration tween that has a repeat with a repeatDelay
    tTime = _clamp(0, tween._tDur, totalTime);
    iteration = _animationCycle(tTime, repeatDelay);
    tween._yoyo && iteration & 1 && (ratio = 1 - ratio);

    if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
      // if iteration changed
      prevRatio = 1 - ratio;
      tween.vars.repeatRefresh && tween._initted && tween.invalidate();
    }
  }

  if (ratio !== prevRatio || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
    if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) {
      // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
      return;
    }

    prevIteration = tween._zTime;
    tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

    suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.

    tween.ratio = ratio;
    tween._from && (ratio = 1 - ratio);
    tween._time = 0;
    tween._tTime = tTime;
    pt = tween._pt;

    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }

    tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
    tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
    tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");

    if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
      ratio && _removeFromParent(tween, 1);

      if (!suppressEvents) {
        _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);

        tween._prom && tween._prom();
      }
    }
  } else if (!tween._zTime) {
    tween._zTime = totalTime;
  }
},
    _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
  var child;

  if (time > prevTime) {
    child = animation._first;

    while (child && child._start <= time) {
      if (child.data === "isPause" && child._start > prevTime) {
        return child;
      }

      child = child._next;
    }
  } else {
    child = animation._last;

    while (child && child._start >= time) {
      if (child.data === "isPause" && child._start < prevTime) {
        return child;
      }

      child = child._prev;
    }
  }
},
    _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
  var repeat = animation._repeat,
      dur = _roundPrecise(duration) || 0,
      totalProgress = animation._tTime / animation._tDur;
  totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
  animation._dur = dur;
  animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
  totalProgress > 0 && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
  skipUncache || _uncache(animation.parent, animation);
  return animation;
},
    _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
  return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
},
    _zeroPosition = {
  _start: 0,
  endTime: _emptyFunc,
  totalDuration: _emptyFunc
},
    _parsePosition = function _parsePosition(animation, position, percentAnimation) {
  var labels = animation.labels,
      recent = animation._recent || _zeroPosition,
      clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
      //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
  i,
      offset,
      isPercent;

  if (_isString(position) && (isNaN(position) || position in labels)) {
    //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
    offset = position.charAt(0);
    isPercent = position.substr(-1) === "%";
    i = position.indexOf("=");

    if (offset === "<" || offset === ">") {
      i >= 0 && (position = position.replace(/=/, ""));
      return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
    }

    if (i < 0) {
      position in labels || (labels[position] = clippedDuration);
      return labels[position];
    }

    offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));

    if (isPercent && percentAnimation) {
      offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
    }

    return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
  }

  return position == null ? clippedDuration : +position;
},
    _createTweenType = function _createTweenType(type, params, timeline) {
  var isLegacy = _isNumber(params[1]),
      varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
      vars = params[varsIndex],
      irVars,
      parent;

  isLegacy && (vars.duration = params[1]);
  vars.parent = timeline;

  if (type) {
    irVars = vars;
    parent = timeline;

    while (parent && !("immediateRender" in irVars)) {
      // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
      irVars = parent.vars.defaults || {};
      parent = _isNotFalse(parent.vars.inherit) && parent.parent;
    }

    vars.immediateRender = _isNotFalse(irVars.immediateRender);
    type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
  }

  return new Tween(params[0], vars, params[varsIndex + 1]);
},
    _conditionalReturn = function _conditionalReturn(value, func) {
  return value || value === 0 ? func(value) : func;
},
    _clamp = function _clamp(min, max, value) {
  return value < min ? min : value > max ? max : value;
},
    getUnit = function getUnit(value, v) {
  return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
},
    // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
clamp = function clamp(min, max, value) {
  return _conditionalReturn(value, function (v) {
    return _clamp(min, max, v);
  });
},
    _slice = [].slice,
    _isArrayLike = function _isArrayLike(value, nonEmpty) {
  return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
},
    _flatten = function _flatten(ar, leaveStrings, accumulator) {
  if (accumulator === void 0) {
    accumulator = [];
  }

  return ar.forEach(function (value) {
    var _accumulator;

    return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
  }) || accumulator;
},
    //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
toArray = function toArray(value, scope, leaveStrings) {
  return _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
},
    selector = function selector(value) {
  value = toArray(value)[0] || _warn("Invalid scope") || {};
  return function (v) {
    var el = value.current || value.nativeElement || value;
    return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
  };
},
    shuffle = function shuffle(a) {
  return a.sort(function () {
    return .5 - Math.random();
  });
},
    // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = Math.floor(Math.random() * i), v = a[--i], a[i] = a[j], a[j] = v); return a;
//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
distribute = function distribute(v) {
  if (_isFunction(v)) {
    return v;
  }

  var vars = _isObject(v) ? v : {
    each: v
  },
      //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
  ease = _parseEase(vars.ease),
      from = vars.from || 0,
      base = parseFloat(vars.base) || 0,
      cache = {},
      isDecimal = from > 0 && from < 1,
      ratios = isNaN(from) || isDecimal,
      axis = vars.axis,
      ratioX = from,
      ratioY = from;

  if (_isString(from)) {
    ratioX = ratioY = {
      center: .5,
      edges: .5,
      end: 1
    }[from] || 0;
  } else if (!isDecimal && ratios) {
    ratioX = from[0];
    ratioY = from[1];
  }

  return function (i, target, a) {
    var l = (a || vars).length,
        distances = cache[l],
        originX,
        originY,
        x,
        y,
        d,
        j,
        max,
        min,
        wrapAt;

    if (!distances) {
      wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];

      if (!wrapAt) {
        max = -_bigNum;

        while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}

        wrapAt--;
      }

      distances = cache[l] = [];
      originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
      originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
      max = 0;
      min = _bigNum;

      for (j = 0; j < l; j++) {
        x = j % wrapAt - originX;
        y = originY - (j / wrapAt | 0);
        distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
        d > max && (max = d);
        d < min && (min = d);
      }

      from === "random" && shuffle(distances);
      distances.max = max - min;
      distances.min = min;
      distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
      distances.b = l < 0 ? base - l : base;
      distances.u = getUnit(vars.amount || vars.each) || 0; //unit

      ease = ease && l < 0 ? _invertEase(ease) : ease;
    }

    l = (distances[i] - distances.min) / distances.max || 0;
    return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
  };
},
    _roundModifier = function _roundModifier(v) {
  //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
  var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())

  return function (raw) {
    var n = Math.round(parseFloat(raw) / v) * v * p;
    return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
  };
},
    snap = function snap(snapTo, value) {
  var isArray = _isArray(snapTo),
      radius,
      is2D;

  if (!isArray && _isObject(snapTo)) {
    radius = isArray = snapTo.radius || _bigNum;

    if (snapTo.values) {
      snapTo = toArray(snapTo.values);

      if (is2D = !_isNumber(snapTo[0])) {
        radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
      }
    } else {
      snapTo = _roundModifier(snapTo.increment);
    }
  }

  return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
    is2D = snapTo(raw);
    return Math.abs(is2D - raw) <= radius ? is2D : raw;
  } : function (raw) {
    var x = parseFloat(is2D ? raw.x : raw),
        y = parseFloat(is2D ? raw.y : 0),
        min = _bigNum,
        closest = 0,
        i = snapTo.length,
        dx,
        dy;

    while (i--) {
      if (is2D) {
        dx = snapTo[i].x - x;
        dy = snapTo[i].y - y;
        dx = dx * dx + dy * dy;
      } else {
        dx = Math.abs(snapTo[i] - x);
      }

      if (dx < min) {
        min = dx;
        closest = i;
      }
    }

    closest = !radius || min <= radius ? snapTo[closest] : raw;
    return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
  });
},
    random = function random(min, max, roundingIncrement, returnFunction) {
  return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
    return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
  });
},
    pipe = function pipe() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function (value) {
    return functions.reduce(function (v, f) {
      return f(v);
    }, value);
  };
},
    unitize = function unitize(func, unit) {
  return function (value) {
    return func(parseFloat(value)) + (unit || getUnit(value));
  };
},
    normalize = function normalize(min, max, value) {
  return mapRange(min, max, 0, 1, value);
},
    _wrapArray = function _wrapArray(a, wrapper, value) {
  return _conditionalReturn(value, function (index) {
    return a[~~wrapper(index)];
  });
},
    wrap = function wrap(min, max, value) {
  // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
  var range = max - min;
  return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
    return (range + (value - min) % range) % range + min;
  });
},
    wrapYoyo = function wrapYoyo(min, max, value) {
  var range = max - min,
      total = range * 2;
  return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
    value = (total + (value - min) % total) % total || 0;
    return min + (value > range ? total - value : value);
  });
},
    _replaceRandom = function _replaceRandom(value) {
  //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
  var prev = 0,
      s = "",
      i,
      nums,
      end,
      isArray;

  while (~(i = value.indexOf("random(", prev))) {
    end = value.indexOf(")", i);
    isArray = value.charAt(i + 7) === "[";
    nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
    s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
    prev = end + 1;
  }

  return s + value.substr(prev, value.length - prev);
},
    mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
  var inRange = inMax - inMin,
      outRange = outMax - outMin;
  return _conditionalReturn(value, function (value) {
    return outMin + ((value - inMin) / inRange * outRange || 0);
  });
},
    interpolate = function interpolate(start, end, progress, mutate) {
  var func = isNaN(start + end) ? 0 : function (p) {
    return (1 - p) * start + p * end;
  };

  if (!func) {
    var isString = _isString(start),
        master = {},
        p,
        i,
        interpolators,
        l,
        il;

    progress === true && (mutate = 1) && (progress = null);

    if (isString) {
      start = {
        p: start
      };
      end = {
        p: end
      };
    } else if (_isArray(start) && !_isArray(end)) {
      interpolators = [];
      l = start.length;
      il = l - 2;

      for (i = 1; i < l; i++) {
        interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
      }

      l--;

      func = function func(p) {
        p *= l;
        var i = Math.min(il, ~~p);
        return interpolators[i](p - i);
      };

      progress = end;
    } else if (!mutate) {
      start = _merge(_isArray(start) ? [] : {}, start);
    }

    if (!interpolators) {
      for (p in end) {
        _addPropTween.call(master, start, p, "get", end[p]);
      }

      func = function func(p) {
        return _renderPropTweens(p, master) || (isString ? start.p : start);
      };
    }
  }

  return _conditionalReturn(progress, func);
},
    _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
  //used for nextLabel() and previousLabel()
  var labels = timeline.labels,
      min = _bigNum,
      p,
      distance,
      label;

  for (p in labels) {
    distance = labels[p] - fromTime;

    if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
      label = p;
      min = distance;
    }
  }

  return label;
},
    _callback = function _callback(animation, type, executeLazyFirst) {
  var v = animation.vars,
      callback = v[type],
      params,
      scope;

  if (!callback) {
    return;
  }

  params = v[type + "Params"];
  scope = v.callbackScope || animation;
  executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.

  return params ? callback.apply(scope, params) : callback.call(scope);
},
    _interrupt = function _interrupt(animation) {
  _removeFromParent(animation);

  animation.scrollTrigger && animation.scrollTrigger.kill(false);
  animation.progress() < 1 && _callback(animation, "onInterrupt");
  return animation;
},
    _quickTween,
    _createPlugin = function _createPlugin(config) {
  config = !config.name && config["default"] || config; //UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.

  var name = config.name,
      isFunc = _isFunction(config),
      Plugin = name && !isFunc && config.init ? function () {
    this._props = [];
  } : config,
      //in case someone passes in an object that's not a plugin, like CustomEase
  instanceDefaults = {
    init: _emptyFunc,
    render: _renderPropTweens,
    add: _addPropTween,
    kill: _killPropTweensOf,
    modifier: _addPluginModifier,
    rawVars: 0
  },
      statics = {
    targetTest: 0,
    get: 0,
    getSetter: _getSetter,
    aliases: {},
    register: 0
  };

  _wake();

  if (config !== Plugin) {
    if (_plugins[name]) {
      return;
    }

    _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods


    _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods


    _plugins[Plugin.prop = name] = Plugin;

    if (config.targetTest) {
      _harnessPlugins.push(Plugin);

      _reservedProps[name] = 1;
    }

    name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
  }

  _addGlobal(name, Plugin);

  config.register && config.register(gsap, Plugin, PropTween);
},

/*
 * --------------------------------------------------------------------------------------
 * COLORS
 * --------------------------------------------------------------------------------------
 */
_255 = 255,
    _colorLookup = {
  aqua: [0, _255, _255],
  lime: [0, _255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, _255],
  navy: [0, 0, 128],
  white: [_255, _255, _255],
  olive: [128, 128, 0],
  yellow: [_255, _255, 0],
  orange: [_255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [_255, 0, 0],
  pink: [_255, 192, 203],
  cyan: [0, _255, _255],
  transparent: [_255, _255, _255, 0]
},
    // possible future idea to replace the hard-coded color name values - put this in the ticker.wake() where we set the _doc:
// let ctx = _doc.createElement("canvas").getContext("2d");
// _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
_hue = function _hue(h, m1, m2) {
  h += h < 0 ? 1 : h > 1 ? -1 : 0;
  return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
},
    splitColor = function splitColor(v, toHSL, forceAlpha) {
  var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
      r,
      g,
      b,
      h,
      s,
      l,
      max,
      min,
      d,
      wasHSL;

  if (!a) {
    if (v.substr(-1) === ",") {
      //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
      v = v.substr(0, v.length - 1);
    }

    if (_colorLookup[v]) {
      a = _colorLookup[v];
    } else if (v.charAt(0) === "#") {
      if (v.length < 6) {
        //for shorthand like #9F0 or #9F0F (could have alpha)
        r = v.charAt(1);
        g = v.charAt(2);
        b = v.charAt(3);
        v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
      }

      if (v.length === 9) {
        // hex with alpha, like #fd5e53ff
        a = parseInt(v.substr(1, 6), 16);
        return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
      }

      v = parseInt(v.substr(1), 16);
      a = [v >> 16, v >> 8 & _255, v & _255];
    } else if (v.substr(0, 3) === "hsl") {
      a = wasHSL = v.match(_strictNumExp);

      if (!toHSL) {
        h = +a[0] % 360 / 360;
        s = +a[1] / 100;
        l = +a[2] / 100;
        g = l <= .5 ? l * (s + 1) : l + s - l * s;
        r = l * 2 - g;
        a.length > 3 && (a[3] *= 1); //cast as number

        a[0] = _hue(h + 1 / 3, r, g);
        a[1] = _hue(h, r, g);
        a[2] = _hue(h - 1 / 3, r, g);
      } else if (~v.indexOf("=")) {
        //if relative values are found, just return the raw strings with the relative prefixes in place.
        a = v.match(_numExp);
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      }
    } else {
      a = v.match(_strictNumExp) || _colorLookup.transparent;
    }

    a = a.map(Number);
  }

  if (toHSL && !wasHSL) {
    r = a[0] / _255;
    g = a[1] / _255;
    b = a[2] / _255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h *= 60;
    }

    a[0] = ~~(h + .5);
    a[1] = ~~(s * 100 + .5);
    a[2] = ~~(l * 100 + .5);
  }

  forceAlpha && a.length < 4 && (a[3] = 1);
  return a;
},
    _colorOrderData = function _colorOrderData(v) {
  // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
  var values = [],
      c = [],
      i = -1;
  v.split(_colorExp).forEach(function (v) {
    var a = v.match(_numWithUnitExp) || [];
    values.push.apply(values, a);
    c.push(i += a.length + 1);
  });
  values.c = c;
  return values;
},
    _formatColors = function _formatColors(s, toHSL, orderMatchData) {
  var result = "",
      colors = (s + result).match(_colorExp),
      type = toHSL ? "hsla(" : "rgba(",
      i = 0,
      c,
      shell,
      d,
      l;

  if (!colors) {
    return s;
  }

  colors = colors.map(function (color) {
    return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
  });

  if (orderMatchData) {
    d = _colorOrderData(s);
    c = orderMatchData.c;

    if (c.join(result) !== d.c.join(result)) {
      shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
      l = shell.length - 1;

      for (; i < l; i++) {
        result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
      }
    }
  }

  if (!shell) {
    shell = s.split(_colorExp);
    l = shell.length - 1;

    for (; i < l; i++) {
      result += shell[i] + colors[i];
    }
  }

  return result + shell[l];
},
    _colorExp = function () {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
  p;

  for (p in _colorLookup) {
    s += "|" + p + "\\b";
  }

  return new RegExp(s + ")", "gi");
}(),
    _hslExp = /hsl[a]?\(/,
    _colorStringFilter = function _colorStringFilter(a) {
  var combined = a.join(" "),
      toHSL;
  _colorExp.lastIndex = 0;

  if (_colorExp.test(combined)) {
    toHSL = _hslExp.test(combined);
    a[1] = _formatColors(a[1], toHSL);
    a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.

    return true;
  }
},

/*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */
_tickerActive,
    _ticker = function () {
  var _getTime = Date.now,
      _lagThreshold = 500,
      _adjustedLag = 33,
      _startTime = _getTime(),
      _lastUpdate = _startTime,
      _gap = 1000 / 240,
      _nextTime = _gap,
      _listeners = [],
      _id,
      _req,
      _raf,
      _self,
      _delta,
      _i,
      _tick = function _tick(v) {
    var elapsed = _getTime() - _lastUpdate,
        manual = v === true,
        overlap,
        dispatch,
        time,
        frame;

    elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
    _lastUpdate += elapsed;
    time = _lastUpdate - _startTime;
    overlap = time - _nextTime;

    if (overlap > 0 || manual) {
      frame = ++_self.frame;
      _delta = time - _self.time * 1000;
      _self.time = time = time / 1000;
      _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
      dispatch = 1;
    }

    manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.

    if (dispatch) {
      for (_i = 0; _i < _listeners.length; _i++) {
        // use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
        _listeners[_i](time, _delta, frame, v);
      }
    }
  };

  _self = {
    time: 0,
    frame: 0,
    tick: function tick() {
      _tick(true);
    },
    deltaRatio: function deltaRatio(fps) {
      return _delta / (1000 / (fps || 60));
    },
    wake: function wake() {
      if (_coreReady) {
        if (!_coreInitted && _windowExists()) {
          _win = _coreInitted = window;
          _doc = _win.document || {};
          _globals.gsap = gsap;
          (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);

          _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});

          _raf = _win.requestAnimationFrame;
        }

        _id && _self.sleep();

        _req = _raf || function (f) {
          return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
        };

        _tickerActive = 1;

        _tick(2);
      }
    },
    sleep: function sleep() {
      (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
      _tickerActive = 0;
      _req = _emptyFunc;
    },
    lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
      _lagThreshold = threshold || 1 / _tinyNum; //zero should be interpreted as basically unlimited

      _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
    },
    fps: function fps(_fps) {
      _gap = 1000 / (_fps || 240);
      _nextTime = _self.time * 1000 + _gap;
    },
    add: function add(callback, once, prioritize) {
      var func = once ? function (t, d, f, v) {
        callback(t, d, f, v);

        _self.remove(func);
      } : callback;

      _self.remove(callback);

      _listeners[prioritize ? "unshift" : "push"](func);

      _wake();

      return func;
    },
    remove: function remove(callback, i) {
      ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
    },
    _listeners: _listeners
  };
  return _self;
}(),
    _wake = function _wake() {
  return !_tickerActive && _ticker.wake();
},
    //also ensures the core classes are initialized.

/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/
_easeMap = {},
    _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
    _quotesExp = /["']/g,
    _parseObjectInString = function _parseObjectInString(value) {
  //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
  var obj = {},
      split = value.substr(1, value.length - 3).split(":"),
      key = split[0],
      i = 1,
      l = split.length,
      index,
      val,
      parsedVal;

  for (; i < l; i++) {
    val = split[i];
    index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
    parsedVal = val.substr(0, index);
    obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
    key = val.substr(index + 1).trim();
  }

  return obj;
},
    _valueInParentheses = function _valueInParentheses(value) {
  var open = value.indexOf("(") + 1,
      close = value.indexOf(")"),
      nested = value.indexOf("(", open);
  return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
},
    _configEaseFromString = function _configEaseFromString(name) {
  //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
  var split = (name + "").split("("),
      ease = _easeMap[split[0]];
  return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
},
    _invertEase = function _invertEase(ease) {
  return function (p) {
    return 1 - ease(1 - p);
  };
},
    // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
_propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
  var child = timeline._first,
      ease;

  while (child) {
    if (child instanceof Timeline) {
      _propagateYoyoEase(child, isYoyo);
    } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
      if (child.timeline) {
        _propagateYoyoEase(child.timeline, isYoyo);
      } else {
        ease = child._ease;
        child._ease = child._yEase;
        child._yEase = ease;
        child._yoyo = isYoyo;
      }
    }

    child = child._next;
  }
},
    _parseEase = function _parseEase(ease, defaultEase) {
  return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
},
    _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
  if (easeOut === void 0) {
    easeOut = function easeOut(p) {
      return 1 - easeIn(1 - p);
    };
  }

  if (easeInOut === void 0) {
    easeInOut = function easeInOut(p) {
      return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
  }

  var ease = {
    easeIn: easeIn,
    easeOut: easeOut,
    easeInOut: easeInOut
  },
      lowercaseName;

  _forEachName(names, function (name) {
    _easeMap[name] = _globals[name] = ease;
    _easeMap[lowercaseName = name.toLowerCase()] = easeOut;

    for (var p in ease) {
      _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
    }
  });

  return ease;
},
    _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
  return function (p) {
    return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
  };
},
    _configElastic = function _configElastic(type, amplitude, period) {
  var p1 = amplitude >= 1 ? amplitude : 1,
      //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
  p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
      p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
      easeOut = function easeOut(p) {
    return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  p2 = _2PI / p2; //precalculate to optimize

  ease.config = function (amplitude, period) {
    return _configElastic(type, amplitude, period);
  };

  return ease;
},
    _configBack = function _configBack(type, overshoot) {
  if (overshoot === void 0) {
    overshoot = 1.70158;
  }

  var easeOut = function easeOut(p) {
    return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  ease.config = function (overshoot) {
    return _configBack(type, overshoot);
  };

  return ease;
}; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };


_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
  var power = i < 5 ? i + 1 : i;

  _insertEase(name + ",Power" + (power - 1), i ? function (p) {
    return Math.pow(p, power);
  } : function (p) {
    return p;
  }, function (p) {
    return 1 - Math.pow(1 - p, power);
  }, function (p) {
    return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
  });
});

_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;

_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());

(function (n, c) {
  var n1 = 1 / c,
      n2 = 2 * n1,
      n3 = 2.5 * n1,
      easeOut = function easeOut(p) {
    return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
  };

  _insertEase("Bounce", function (p) {
    return 1 - easeOut(1 - p);
  }, easeOut);
})(7.5625, 2.75);

_insertEase("Expo", function (p) {
  return p ? Math.pow(2, 10 * (p - 1)) : 0;
});

_insertEase("Circ", function (p) {
  return -(_sqrt(1 - p * p) - 1);
});

_insertEase("Sine", function (p) {
  return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});

_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());

_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
  config: function config(steps, immediateStart) {
    if (steps === void 0) {
      steps = 1;
    }

    var p1 = 1 / steps,
        p2 = steps + (immediateStart ? 0 : 1),
        p3 = immediateStart ? 1 : 0,
        max = 1 - _tinyNum;
    return function (p) {
      return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
    };
  }
};
_defaults.ease = _easeMap["quad.out"];

_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
  return _callbackNames += name + "," + name + "Params,";
});
/*
 * --------------------------------------------------------------------------------------
 * CACHE
 * --------------------------------------------------------------------------------------
 */


var GSCache = function GSCache(target, harness) {
  this.id = _gsID++;
  target._gsap = this;
  this.target = target;
  this.harness = harness;
  this.get = harness ? harness.get : _getProperty;
  this.set = harness ? harness.getSetter : _getSetter;
};
/*
 * --------------------------------------------------------------------------------------
 * ANIMATION
 * --------------------------------------------------------------------------------------
 */

var Animation = /*#__PURE__*/function () {
  function Animation(vars) {
    this.vars = vars;
    this._delay = +vars.delay || 0;

    if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
      // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
      this._rDelay = vars.repeatDelay || 0;
      this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
    }

    this._ts = 1;

    _setDuration(this, +vars.duration, 1, 1);

    this.data = vars.data;
    _tickerActive || _ticker.wake();
  }

  var _proto = Animation.prototype;

  _proto.delay = function delay(value) {
    if (value || value === 0) {
      this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
      this._delay = value;
      return this;
    }

    return this._delay;
  };

  _proto.duration = function duration(value) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
  };

  _proto.totalDuration = function totalDuration(value) {
    if (!arguments.length) {
      return this._tDur;
    }

    this._dirty = 0;
    return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
  };

  _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
    _wake();

    if (!arguments.length) {
      return this._tTime;
    }

    var parent = this._dp;

    if (parent && parent.smoothChildTiming && this._ts) {
      _alignPlayhead(this, _totalTime);

      !parent._dp || parent.parent || _postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
      //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.

      while (parent && parent.parent) {
        if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
          parent.totalTime(parent._tTime, true);
        }

        parent = parent.parent;
      }

      if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
        //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
        _addToTimeline(this._dp, this, this._start - this._delay);
      }
    }

    if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
      // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
      this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
      //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
      //   this._lock = 1;

      _lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
      //}

    }

    return this;
  };

  _proto.time = function time(value, suppressEvents) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
  };

  _proto.totalProgress = function totalProgress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  };

  _proto.progress = function progress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  };

  _proto.iteration = function iteration(value, suppressEvents) {
    var cycleDuration = this.duration() + this._rDelay;

    return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
  } // potential future addition:
  // isPlayingBackwards() {
  // 	let animation = this,
  // 		orientation = 1; // 1 = forward, -1 = backward
  // 	while (animation) {
  // 		orientation *= animation.reversed() || (animation.repeat() && !(animation.iteration() & 1)) ? -1 : 1;
  // 		animation = animation.parent;
  // 	}
  // 	return orientation < 0;
  // }
  ;

  _proto.timeScale = function timeScale(value) {
    if (!arguments.length) {
      return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
    }

    if (this._rts === value) {
      return this;
    }

    var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
    // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
    //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
    // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.

    this._rts = +value || 0;
    this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.

    this.totalTime(_clamp(-this._delay, this._tDur, tTime), true);

    _setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.


    return _recacheAncestors(this);
  };

  _proto.paused = function paused(value) {
    if (!arguments.length) {
      return this._ps;
    }

    if (this._ps !== value) {
      this._ps = value;

      if (value) {
        this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.

        this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
      } else {
        _wake();

        this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.

        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
      }
    }

    return this;
  };

  _proto.startTime = function startTime(value) {
    if (arguments.length) {
      this._start = value;
      var parent = this.parent || this._dp;
      parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
      return this;
    }

    return this._start;
  };

  _proto.endTime = function endTime(includeRepeats) {
    return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  };

  _proto.rawTime = function rawTime(wrapRepeats) {
    var parent = this.parent || this._dp; // _dp = detached parent

    return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
  };

  _proto.globalTime = function globalTime(rawTime) {
    var animation = this,
        time = arguments.length ? rawTime : animation.rawTime();

    while (animation) {
      time = animation._start + time / (animation._ts || 1);
      animation = animation._dp;
    }

    return time;
  };

  _proto.repeat = function repeat(value) {
    if (arguments.length) {
      this._repeat = value === Infinity ? -2 : value;
      return _onUpdateTotalDuration(this);
    }

    return this._repeat === -2 ? Infinity : this._repeat;
  };

  _proto.repeatDelay = function repeatDelay(value) {
    if (arguments.length) {
      var time = this._time;
      this._rDelay = value;

      _onUpdateTotalDuration(this);

      return time ? this.time(time) : this;
    }

    return this._rDelay;
  };

  _proto.yoyo = function yoyo(value) {
    if (arguments.length) {
      this._yoyo = value;
      return this;
    }

    return this._yoyo;
  };

  _proto.seek = function seek(position, suppressEvents) {
    return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
  };

  _proto.restart = function restart(includeDelay, suppressEvents) {
    return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
  };

  _proto.play = function play(from, suppressEvents) {
    from != null && this.seek(from, suppressEvents);
    return this.reversed(false).paused(false);
  };

  _proto.reverse = function reverse(from, suppressEvents) {
    from != null && this.seek(from || this.totalDuration(), suppressEvents);
    return this.reversed(true).paused(false);
  };

  _proto.pause = function pause(atTime, suppressEvents) {
    atTime != null && this.seek(atTime, suppressEvents);
    return this.paused(true);
  };

  _proto.resume = function resume() {
    return this.paused(false);
  };

  _proto.reversed = function reversed(value) {
    if (arguments.length) {
      !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.

      return this;
    }

    return this._rts < 0;
  };

  _proto.invalidate = function invalidate() {
    this._initted = this._act = 0;
    this._zTime = -_tinyNum;
    return this;
  };

  _proto.isActive = function isActive() {
    var parent = this.parent || this._dp,
        start = this._start,
        rawTime;
    return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
  };

  _proto.eventCallback = function eventCallback(type, callback, params) {
    var vars = this.vars;

    if (arguments.length > 1) {
      if (!callback) {
        delete vars[type];
      } else {
        vars[type] = callback;
        params && (vars[type + "Params"] = params);
        type === "onUpdate" && (this._onUpdate = callback);
      }

      return this;
    }

    return vars[type];
  };

  _proto.then = function then(onFulfilled) {
    var self = this;
    return new Promise(function (resolve) {
      var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
          _resolve = function _resolve() {
        var _then = self.then;
        self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)

        _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
        resolve(f);
        self.then = _then;
      };

      if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
        _resolve();
      } else {
        self._prom = _resolve;
      }
    });
  };

  _proto.kill = function kill() {
    _interrupt(this);
  };

  return Animation;
}();

_setDefaults(Animation.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: false,
  parent: null,
  _initted: false,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -_tinyNum,
  _prom: 0,
  _ps: false,
  _rts: 1
});
/*
 * -------------------------------------------------
 * TIMELINE
 * -------------------------------------------------
 */


var Timeline = /*#__PURE__*/function (_Animation) {
  _inheritsLoose(Timeline, _Animation);

  function Timeline(vars, position) {
    var _this;

    if (vars === void 0) {
      vars = {};
    }

    _this = _Animation.call(this, vars) || this;
    _this.labels = {};
    _this.smoothChildTiming = !!vars.smoothChildTiming;
    _this.autoRemoveChildren = !!vars.autoRemoveChildren;
    _this._sort = _isNotFalse(vars.sortChildren);
    _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
    vars.reversed && _this.reverse();
    vars.paused && _this.paused(true);
    vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
    return _this;
  }

  var _proto2 = Timeline.prototype;

  _proto2.to = function to(targets, vars, position) {
    _createTweenType(0, arguments, this);

    return this;
  };

  _proto2.from = function from(targets, vars, position) {
    _createTweenType(1, arguments, this);

    return this;
  };

  _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
    _createTweenType(2, arguments, this);

    return this;
  };

  _proto2.set = function set(targets, vars, position) {
    vars.duration = 0;
    vars.parent = this;
    _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
    vars.immediateRender = !!vars.immediateRender;
    new Tween(targets, vars, _parsePosition(this, position), 1);
    return this;
  };

  _proto2.call = function call(callback, params, position) {
    return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
  } //ONLY for backward compatibility! Maybe delete?
  ;

  _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.duration = duration;
    vars.stagger = vars.stagger || stagger;
    vars.onComplete = onCompleteAll;
    vars.onCompleteParams = onCompleteAllParams;
    vars.parent = this;
    new Tween(targets, vars, _parsePosition(this, position));
    return this;
  };

  _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.runBackwards = 1;
    _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
    return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
    toVars.startAt = fromVars;
    _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
    return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._dirty ? this.totalDuration() : this._tDur,
        dur = this._dur,
        tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime),
        // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
    crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
        time,
        child,
        next,
        iteration,
        cycleDuration,
        prevPaused,
        pauseTween,
        timeScale,
        prevStart,
        prevIteration,
        yoyo,
        isYoyo;
    this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);

    if (tTime !== this._tTime || force || crossingStart) {
      if (prevTime !== this._time && dur) {
        //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
        tTime += this._time - prevTime;
        totalTime += this._time - prevTime;
      }

      time = tTime;
      prevStart = this._start;
      timeScale = this._ts;
      prevPaused = !timeScale;

      if (crossingStart) {
        dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

        (totalTime || !suppressEvents) && (this._zTime = totalTime);
      }

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        yoyo = this._yoyo;
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);
        !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://greensock.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005

        if (yoyo && iteration & 1) {
          time = dur - time;
          isYoyo = 1;
        }
        /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */


        if (iteration !== prevIteration && !this._lock) {
          var rewinding = yoyo && prevIteration & 1,
              doesWrap = rewinding === (yoyo && iteration & 1);
          iteration < prevIteration && (rewinding = !rewinding);
          prevTime = rewinding ? 0 : dur;
          this._lock = 1;
          this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
          this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.

          !suppressEvents && this.parent && _callback(this, "onRepeat");
          this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);

          if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
            // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
            return this;
          }

          dur = this._dur; // in case the duration changed in the onRepeat

          tDur = this._tDur;

          if (doesWrap) {
            this._lock = 2;
            prevTime = rewinding ? dur : -0.0001;
            this.render(prevTime, true);
            this.vars.repeatRefresh && !isYoyo && this.invalidate();
          }

          this._lock = 0;

          if (!this._ts && !prevPaused) {
            return this;
          } //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.


          _propagateYoyoEase(this, isYoyo);
        }
      }

      if (this._hasPause && !this._forcing && this._lock < 2) {
        pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));

        if (pauseTween) {
          tTime -= time - (time = pauseTween._start);
        }
      }

      this._tTime = tTime;
      this._time = time;
      this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

      if (!this._initted) {
        this._onUpdate = this.vars.onUpdate;
        this._initted = 1;
        this._zTime = totalTime;
        prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
      }

      if (!prevTime && time && !suppressEvents) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      if (time >= prevTime && totalTime >= 0) {
        child = this._first;

        while (child) {
          next = child._next;

          if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      } else {
        child = this._last;
        var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.

        while (child) {
          next = child._prev;

          if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      }

      if (pauseTween && !suppressEvents) {
        this.pause();
        pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;

        if (this._ts) {
          //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
          this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.

          _setEnd(this);

          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
      if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
        // remember, a child's callback may alter this timeline's playhead or timeScale which is why we need to add some of these checks.
        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
          _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto2.add = function add(child, position) {
    var _this2 = this;

    _isNumber(position) || (position = _parsePosition(this, position, child));

    if (!(child instanceof Animation)) {
      if (_isArray(child)) {
        child.forEach(function (obj) {
          return _this2.add(obj, position);
        });
        return this;
      }

      if (_isString(child)) {
        return this.addLabel(child, position);
      }

      if (_isFunction(child)) {
        child = Tween.delayedCall(0, child);
      } else {
        return this;
      }
    }

    return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
  };

  _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
    if (nested === void 0) {
      nested = true;
    }

    if (tweens === void 0) {
      tweens = true;
    }

    if (timelines === void 0) {
      timelines = true;
    }

    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = -_bigNum;
    }

    var a = [],
        child = this._first;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        if (child instanceof Tween) {
          tweens && a.push(child);
        } else {
          timelines && a.push(child);
          nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
        }
      }

      child = child._next;
    }

    return a;
  };

  _proto2.getById = function getById(id) {
    var animations = this.getChildren(1, 1, 1),
        i = animations.length;

    while (i--) {
      if (animations[i].vars.id === id) {
        return animations[i];
      }
    }
  };

  _proto2.remove = function remove(child) {
    if (_isString(child)) {
      return this.removeLabel(child);
    }

    if (_isFunction(child)) {
      return this.killTweensOf(child);
    }

    _removeLinkedListItem(this, child);

    if (child === this._recent) {
      this._recent = this._last;
    }

    return _uncache(this);
  };

  _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
    if (!arguments.length) {
      return this._tTime;
    }

    this._forcing = 1;

    if (!this._dp && this._ts) {
      //special case for the global timeline (or any other that has no parent or detached parent).
      this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
    }

    _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);

    this._forcing = 0;
    return this;
  };

  _proto2.addLabel = function addLabel(label, position) {
    this.labels[label] = _parsePosition(this, position);
    return this;
  };

  _proto2.removeLabel = function removeLabel(label) {
    delete this.labels[label];
    return this;
  };

  _proto2.addPause = function addPause(position, callback, params) {
    var t = Tween.delayedCall(0, callback || _emptyFunc, params);
    t.data = "isPause";
    this._hasPause = 1;
    return _addToTimeline(this, t, _parsePosition(this, position));
  };

  _proto2.removePause = function removePause(position) {
    var child = this._first;
    position = _parsePosition(this, position);

    while (child) {
      if (child._start === position && child.data === "isPause") {
        _removeFromParent(child);
      }

      child = child._next;
    }
  };

  _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    var tweens = this.getTweensOf(targets, onlyActive),
        i = tweens.length;

    while (i--) {
      _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
    }

    return this;
  };

  _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
    var a = [],
        parsedTargets = toArray(targets),
        child = this._first,
        isGlobalTime = _isNumber(onlyActive),
        // a number is interpreted as a global time. If the animation spans
    children;

    while (child) {
      if (child instanceof Tween) {
        if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
          // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
          a.push(child);
        }
      } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
        a.push.apply(a, children);
      }

      child = child._next;
    }

    return a;
  } // potential future feature - targets() on timelines
  // targets() {
  // 	let result = [];
  // 	this.getChildren(true, true, false).forEach(t => result.push(...t.targets()));
  // 	return result.filter((v, i) => result.indexOf(v) === i);
  // }
  ;

  _proto2.tweenTo = function tweenTo(position, vars) {
    vars = vars || {};

    var tl = this,
        endTime = _parsePosition(tl, position),
        _vars = vars,
        startAt = _vars.startAt,
        _onStart = _vars.onStart,
        onStartParams = _vars.onStartParams,
        immediateRender = _vars.immediateRender,
        initted,
        tween = Tween.to(tl, _setDefaults({
      ease: vars.ease || "none",
      lazy: false,
      immediateRender: false,
      time: endTime,
      overwrite: "auto",
      duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
      onStart: function onStart() {
        tl.pause();

        if (!initted) {
          var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
          tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
          initted = 1;
        }

        _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
      }
    }, vars));

    return immediateRender ? tween.render(0) : tween;
  };

  _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
    return this.tweenTo(toPosition, _setDefaults({
      startAt: {
        time: _parsePosition(this, fromPosition)
      }
    }, vars));
  };

  _proto2.recent = function recent() {
    return this._recent;
  };

  _proto2.nextLabel = function nextLabel(afterTime) {
    if (afterTime === void 0) {
      afterTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, afterTime));
  };

  _proto2.previousLabel = function previousLabel(beforeTime) {
    if (beforeTime === void 0) {
      beforeTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
  };

  _proto2.currentLabel = function currentLabel(value) {
    return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
  };

  _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = 0;
    }

    var child = this._first,
        labels = this.labels,
        p;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        child._start += amount;
        child._end += amount;
      }

      child = child._next;
    }

    if (adjustLabels) {
      for (p in labels) {
        if (labels[p] >= ignoreBeforeTime) {
          labels[p] += amount;
        }
      }
    }

    return _uncache(this);
  };

  _proto2.invalidate = function invalidate() {
    var child = this._first;
    this._lock = 0;

    while (child) {
      child.invalidate();
      child = child._next;
    }

    return _Animation.prototype.invalidate.call(this);
  };

  _proto2.clear = function clear(includeLabels) {
    if (includeLabels === void 0) {
      includeLabels = true;
    }

    var child = this._first,
        next;

    while (child) {
      next = child._next;
      this.remove(child);
      child = next;
    }

    this._dp && (this._time = this._tTime = this._pTime = 0);
    includeLabels && (this.labels = {});
    return _uncache(this);
  };

  _proto2.totalDuration = function totalDuration(value) {
    var max = 0,
        self = this,
        child = self._last,
        prevStart = _bigNum,
        prev,
        start,
        parent;

    if (arguments.length) {
      return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
    }

    if (self._dirty) {
      parent = self.parent;

      while (child) {
        prev = child._prev; //record it here in case the tween changes position in the sequence...

        child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.

        start = child._start;

        if (start > prevStart && self._sort && child._ts && !self._lock) {
          //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
          self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().

          _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
        } else {
          prevStart = start;
        }

        if (start < 0 && child._ts) {
          //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
          max -= start;

          if (!parent && !self._dp || parent && parent.smoothChildTiming) {
            self._start += start / self._ts;
            self._time -= start;
            self._tTime -= start;
          }

          self.shiftChildren(-start, false, -1e999);
          prevStart = 0;
        }

        child._end > max && child._ts && (max = child._end);
        child = prev;
      }

      _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);

      self._dirty = 0;
    }

    return self._tDur;
  };

  Timeline.updateRoot = function updateRoot(time) {
    if (_globalTimeline._ts) {
      _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));

      _lastRenderedFrame = _ticker.frame;
    }

    if (_ticker.frame >= _nextGCFrame) {
      _nextGCFrame += _config.autoSleep || 120;
      var child = _globalTimeline._first;
      if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
        while (child && !child._ts) {
          child = child._next;
        }

        child || _ticker.sleep();
      }
    }
  };

  return Timeline;
}(Animation);

_setDefaults(Timeline.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});

var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
  //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
      index = 0,
      matchIndex = 0,
      result,
      startNums,
      color,
      endNum,
      chunk,
      startNum,
      hasRandom,
      a;
  pt.b = start;
  pt.e = end;
  start += ""; //ensure values are strings

  end += "";

  if (hasRandom = ~end.indexOf("random(")) {
    end = _replaceRandom(end);
  }

  if (stringFilter) {
    a = [start, end];
    stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.

    start = a[0];
    end = a[1];
  }

  startNums = start.match(_complexStringNumExp) || [];

  while (result = _complexStringNumExp.exec(end)) {
    endNum = result[0];
    chunk = end.substring(index, result.index);

    if (color) {
      color = (color + 1) % 5;
    } else if (chunk.substr(-5) === "rgba(") {
      color = 1;
    }

    if (endNum !== startNums[matchIndex++]) {
      startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.

      pt._pt = {
        _next: pt._pt,
        p: chunk || matchIndex === 1 ? chunk : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: startNum,
        c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
        m: color && color < 4 ? Math.round : 0
      };
      index = _complexStringNumExp.lastIndex;
    }
  }

  pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)

  pt.fp = funcParam;

  if (_relExp.test(end) || hasRandom) {
    pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
  }

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
  _isFunction(end) && (end = end(index || 0, target, targets));
  var currentValue = target[prop],
      parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
      setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
      pt;

  if (_isString(end)) {
    if (~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }

    if (end.charAt(1) === "=") {
      pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);

      if (pt || pt === 0) {
        // to avoid isNaN, like if someone passes in a value like "!= whatever"
        end = pt;
      }
    }
  }

  if (parsedStart !== end || _forceAllPropTweens) {
    if (!isNaN(parsedStart * end) && end !== "") {
      // fun fact: any number multiplied by "" is evaluated as the number 0!
      pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
      funcParam && (pt.fp = funcParam);
      modifier && pt.modifier(modifier, this, target);
      return this._pt = pt;
    }

    !currentValue && !(prop in target) && _missingPlugin(prop, end);
    return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
  }
},
    //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
_processVars = function _processVars(vars, index, target, targets, tween) {
  _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));

  if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
    return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
  }

  var copy = {},
      p;

  for (p in vars) {
    copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
  }

  return copy;
},
    _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
  var plugin, pt, ptLookup, i;

  if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
    tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);

    if (tween !== _quickTween) {
      ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.

      i = plugin._props.length;

      while (i--) {
        ptLookup[plugin._props[i]] = pt;
      }
    }
  }

  return plugin;
},
    _overwritingTween,
    //store a reference temporarily so we can avoid overwriting itself.
_forceAllPropTweens,
    _initTween = function _initTween(tween, time) {
  var vars = tween.vars,
      ease = vars.ease,
      startAt = vars.startAt,
      immediateRender = vars.immediateRender,
      lazy = vars.lazy,
      onUpdate = vars.onUpdate,
      onUpdateParams = vars.onUpdateParams,
      callbackScope = vars.callbackScope,
      runBackwards = vars.runBackwards,
      yoyoEase = vars.yoyoEase,
      keyframes = vars.keyframes,
      autoRevert = vars.autoRevert,
      dur = tween._dur,
      prevStartAt = tween._startAt,
      targets = tween._targets,
      parent = tween.parent,
      fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets,
      autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites,
      tl = tween.timeline,
      cleanVars,
      i,
      p,
      pt,
      target,
      hasPriority,
      gsData,
      harness,
      plugin,
      ptLookup,
      index,
      harnessVars,
      overwritten;
  tl && (!keyframes || !ease) && (ease = "none");
  tween._ease = _parseEase(ease, _defaults.ease);
  tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;

  if (yoyoEase && tween._yoyo && !tween._repeat) {
    //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
    yoyoEase = tween._yEase;
    tween._yEase = tween._ease;
    tween._ease = yoyoEase;
  }

  tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.

  if (!tl || keyframes && !vars.stagger) {
    //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
    harness = targets[0] ? _getCache(targets[0]).harness : 0;
    harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.

    cleanVars = _copyExcluding(vars, _reservedProps);

    if (prevStartAt) {
      _removeFromParent(prevStartAt.render(-1, true));

      prevStartAt._lazy = 0;
    }

    if (startAt) {
      _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
        data: "isStart",
        overwrite: false,
        parent: parent,
        immediateRender: true,
        lazy: _isNotFalse(lazy),
        startAt: null,
        delay: 0,
        onUpdate: onUpdate,
        onUpdateParams: onUpdateParams,
        callbackScope: callbackScope,
        stagger: 0
      }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);


      time < 0 && !immediateRender && !autoRevert && tween._startAt.render(-1, true); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.

      if (immediateRender) {
        time > 0 && !autoRevert && (tween._startAt = 0); //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in Timeline instances where immediateRender was false or when autoRevert is explicitly set to true.

        if (dur && time <= 0) {
          time && (tween._zTime = time);
          return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
        } // if (time > 0) {
        // 	autoRevert || (tween._startAt = 0); //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in Timeline instances where immediateRender was false or when autoRevert is explicitly set to true.
        // } else if (dur && !(time < 0 && prevStartAt)) {
        // 	time && (tween._zTime = time);
        // 	return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
        // }

      } else if (autoRevert === false) {
        tween._startAt = 0;
      }
    } else if (runBackwards && dur) {
      //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
      if (prevStartAt) {
        !autoRevert && (tween._startAt = 0);
      } else {
        time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0

        p = _setDefaults({
          overwrite: false,
          data: "isFromStart",
          //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
          lazy: immediateRender && _isNotFalse(lazy),
          immediateRender: immediateRender,
          //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
          stagger: 0,
          parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y:gsap.utils.wrap([-100,100])})

        }, cleanVars);
        harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})

        _removeFromParent(tween._startAt = Tween.set(targets, p));

        time < 0 && tween._startAt.render(-1, true); // rare edge case, like if a render is forced in the negative direction of a non-initted from() tween.

        tween._zTime = time;

        if (!immediateRender) {
          _initTween(tween._startAt, _tinyNum); //ensures that the initial values are recorded

        } else if (!time) {
          return;
        }
      }
    }

    tween._pt = tween._ptCache = 0;
    lazy = dur && _isNotFalse(lazy) || lazy && !dur;

    for (i = 0; i < targets.length; i++) {
      target = targets[i];
      gsData = target._gsap || _harness(targets)[i]._gsap;
      tween._ptLookup[i] = ptLookup = {};
      _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)

      index = fullTargets === targets ? i : fullTargets.indexOf(target);

      if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);

        plugin._props.forEach(function (name) {
          ptLookup[name] = pt;
        });

        plugin.priority && (hasPriority = 1);
      }

      if (!harness || harnessVars) {
        for (p in cleanVars) {
          if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
            plugin.priority && (hasPriority = 1);
          } else {
            ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
          }
        }
      }

      tween._op && tween._op[i] && tween.kill(target, tween._op[i]);

      if (autoOverwrite && tween._pt) {
        _overwritingTween = tween;

        _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!


        overwritten = !tween.parent;
        _overwritingTween = 0;
      }

      tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
    }

    hasPriority && _sortPropTweensByPriority(tween);
    tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
  }

  tween._onUpdate = onUpdate;
  tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.

  keyframes && time <= 0 && tl.render(_bigNum, true, true); // if there's a 0% keyframe, it'll render in the "before" state for any staggered/delayed animations thus when the following tween initializes, it'll use the "before" state instead of the "after" state as the initial values.
},
    _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time) {
  var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property],
      pt,
      lookup,
      i;

  if (!ptCache) {
    ptCache = tween._ptCache[property] = [];
    lookup = tween._ptLookup;
    i = tween._targets.length;

    while (i--) {
      pt = lookup[i][property];

      if (pt && pt.d && pt.d._pt) {
        // it's a plugin, so find the nested PropTween
        pt = pt.d._pt;

        while (pt && pt.p !== property) {
          pt = pt._next;
        }
      }

      if (!pt) {
        // there is no PropTween associated with that property, so we must FORCE one to be created and ditch out of this
        // if the tween has other properties that already rendered at new positions, we'd normally have to rewind to put them back like tween.render(0, true) before forcing an _initTween(), but that can create another edge case like tweening a timeline's progress would trigger onUpdates to fire which could move other things around. It's better to just inform users that .resetTo() should ONLY be used for tweens that already have that property. For example, you can't gsap.to(...{ y: 0 }) and then tween.restTo("x", 200) for example.
        _forceAllPropTweens = 1; // otherwise, when we _addPropTween() and it finds no change between the start and end values, it skips creating a PropTween (for efficiency...why tween when there's no difference?) but in this case we NEED that PropTween created so we can edit it.

        tween.vars[property] = "+=0";

        _initTween(tween, time);

        _forceAllPropTweens = 0;
        return 1;
      }

      ptCache.push(pt);
    }
  }

  i = ptCache.length;

  while (i--) {
    pt = ptCache[i];
    pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
    pt.c = value - pt.s;
    pt.e && (pt.e = _round(value) + getUnit(pt.e)); // mainly for CSSPlugin (end value)

    pt.b && (pt.b = pt.s + getUnit(pt.b)); // (beginning value)
  }
},
    _addAliasesToVars = function _addAliasesToVars(targets, vars) {
  var harness = targets[0] ? _getCache(targets[0]).harness : 0,
      propertyAliases = harness && harness.aliases,
      copy,
      p,
      i,
      aliases;

  if (!propertyAliases) {
    return vars;
  }

  copy = _merge({}, vars);

  for (p in propertyAliases) {
    if (p in copy) {
      aliases = propertyAliases[p].split(",");
      i = aliases.length;

      while (i--) {
        copy[aliases[i]] = copy[p];
      }
    }
  }

  return copy;
},
    // parses multiple formats, like {"0%": {x: 100}, {"50%": {x: -20}} and { x: {"0%": 100, "50%": -20} }, and an "ease" can be set on any object. We populate an "allProps" object with an Array for each property, like {x: [{}, {}], y:[{}, {}]} with data for each property tween. The objects have a "t" (time), "v", (value), and "e" (ease) property. This allows us to piece together a timeline later.
_parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
  var ease = obj.ease || easeEach || "power1.inOut",
      p,
      a;

  if (_isArray(obj)) {
    a = allProps[prop] || (allProps[prop] = []); // t = time (out of 100), v = value, e = ease

    obj.forEach(function (value, i) {
      return a.push({
        t: i / (obj.length - 1) * 100,
        v: value,
        e: ease
      });
    });
  } else {
    for (p in obj) {
      a = allProps[p] || (allProps[p] = []);
      p === "ease" || a.push({
        t: parseFloat(prop),
        v: obj[p],
        e: ease
      });
    }
  }
},
    _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
  return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
},
    _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    _staggerPropsToSkip = {};

_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function (name) {
  return _staggerPropsToSkip[name] = 1;
});
/*
 * --------------------------------------------------------------------------------------
 * TWEEN
 * --------------------------------------------------------------------------------------
 */


var Tween = /*#__PURE__*/function (_Animation2) {
  _inheritsLoose(Tween, _Animation2);

  function Tween(targets, vars, position, skipInherit) {
    var _this3;

    if (typeof vars === "number") {
      position.duration = vars;
      vars = position;
      position = null;
    }

    _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
    var _this3$vars = _this3.vars,
        duration = _this3$vars.duration,
        delay = _this3$vars.delay,
        immediateRender = _this3$vars.immediateRender,
        stagger = _this3$vars.stagger,
        overwrite = _this3$vars.overwrite,
        keyframes = _this3$vars.keyframes,
        defaults = _this3$vars.defaults,
        scrollTrigger = _this3$vars.scrollTrigger,
        yoyoEase = _this3$vars.yoyoEase,
        parent = vars.parent || _globalTimeline,
        parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
        tl,
        i,
        copy,
        l,
        p,
        curTarget,
        staggerFunc,
        staggerVarsToMerge;
    _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
    _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property

    _this3._overwrite = overwrite;

    if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
      vars = _this3.vars;
      tl = _this3.timeline = new Timeline({
        data: "nested",
        defaults: defaults || {}
      });
      tl.kill();
      tl.parent = tl._dp = _assertThisInitialized(_this3);
      tl._start = 0;

      if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        l = parsedTargets.length;
        staggerFunc = stagger && distribute(stagger);

        if (_isObject(stagger)) {
          //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
          for (p in stagger) {
            if (~_staggerTweenProps.indexOf(p)) {
              staggerVarsToMerge || (staggerVarsToMerge = {});
              staggerVarsToMerge[p] = stagger[p];
            }
          }
        }

        for (i = 0; i < l; i++) {
          copy = _copyExcluding(vars, _staggerPropsToSkip);
          copy.stagger = 0;
          yoyoEase && (copy.yoyoEase = yoyoEase);
          staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
          curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.

          copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
          copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;

          if (!stagger && l === 1 && copy.delay) {
            // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
            _this3._delay = delay = copy.delay;
            _this3._start += delay;
            copy.delay = 0;
          }

          tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
          tl._ease = _easeMap.none;
        }

        tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
      } else if (keyframes) {
        _inheritDefaults(_setDefaults(tl.vars.defaults, {
          ease: "none"
        }));

        tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
        var time = 0,
            a,
            kf,
            v;

        if (_isArray(keyframes)) {
          keyframes.forEach(function (frame) {
            return tl.to(parsedTargets, frame, ">");
          });
        } else {
          copy = {};

          for (p in keyframes) {
            p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
          }

          for (p in copy) {
            a = copy[p].sort(function (a, b) {
              return a.t - b.t;
            });
            time = 0;

            for (i = 0; i < a.length; i++) {
              kf = a[i];
              v = {
                ease: kf.e,
                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
              };
              v[p] = kf.v;
              tl.to(parsedTargets, v, time);
              time += v.duration;
            }
          }

          tl.duration() < duration && tl.to({}, {
            duration: duration - tl.duration()
          }); // in case keyframes didn't go to 100%
        }
      }

      duration || _this3.duration(duration = tl.duration());
    } else {
      _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
    }

    if (overwrite === true && !_suppressOverwrites) {
      _overwritingTween = _assertThisInitialized(_this3);

      _globalTimeline.killTweensOf(parsedTargets);

      _overwritingTween = 0;
    }

    _addToTimeline(parent, _assertThisInitialized(_this3), position);

    vars.reversed && _this3.reverse();
    vars.paused && _this3.paused(true);

    if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
      _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)

      _this3.render(Math.max(0, -delay)); //in case delay is negative

    }

    scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
    return _this3;
  }

  var _proto3 = Tween.prototype;

  _proto3.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._tDur,
        dur = this._dur,
        tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime,
        time,
        pt,
        iteration,
        cycleDuration,
        prevIteration,
        isYoyo,
        ratio,
        timeline,
        yoyoEase;

    if (!dur) {
      _renderZeroDurationTween(this, totalTime, suppressEvents, force);
    } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== totalTime < 0) {
      //this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
      time = tTime;
      timeline = this.timeline;

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        isYoyo = this._yoyo && iteration & 1;

        if (isYoyo) {
          yoyoEase = this._yEase;
          time = dur - time;
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);

        if (time === prevTime && !force && this._initted) {
          //could be during the repeatDelay part. No need to render and fire callbacks.
          this._tTime = tTime;
          return this;
        }

        if (iteration !== prevIteration) {
          timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality

          if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
            this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.

            this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
          }
        }
      }

      if (!this._initted) {
        if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
          this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.

          return this;
        }

        if (prevTime !== this._time) {
          // rare edge case - during initialization, an onUpdate in the _startAt (.fromTo()) might force this tween to render at a different spot in which case we should ditch this render() call so that it doesn't revert the values.
          return this;
        }

        if (dur !== this._dur) {
          // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._tTime = tTime;
      this._time = time;

      if (!this._act && this._ts) {
        this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

        this._lazy = 0;
      }

      this.ratio = ratio = (yoyoEase || this._ease)(time / dur);

      if (this._from) {
        this.ratio = ratio = 1 - ratio;
      }

      if (time && !prevTime && !suppressEvents) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      pt = this._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }

      timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);

      if (this._onUpdate && !suppressEvents) {
        totalTime < 0 && this._startAt && this._startAt.render(totalTime, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.

        _callback(this, "onUpdate");
      }

      this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");

      if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
        totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
        (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
          // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
          _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto3.targets = function targets() {
    return this._targets;
  };

  _proto3.invalidate = function invalidate() {
    this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0;
    this._ptLookup = [];
    this.timeline && this.timeline.invalidate();
    return _Animation2.prototype.invalidate.call(this);
  };

  _proto3.resetTo = function resetTo(property, value, start, startIsRelative) {
    _tickerActive || _ticker.wake();
    this._ts || this.play();
    var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        ratio;
    this._initted || _initTween(this, time);
    ratio = this._ease(time / this._dur); // don't just get tween.ratio because it may not have rendered yet.
    // possible future addition to allow an object with multiple values to update, like tween.resetTo({x: 100, y: 200}); At this point, it doesn't seem worth the added kb given the fact that most users will likely opt for the convenient gsap.quickTo() way of interacting with this method.
    // if (_isObject(property)) { // performance optimization
    // 	for (p in property) {
    // 		if (_updatePropTweens(this, p, property[p], value ? value[p] : null, start, ratio, time)) {
    // 			return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    // 		}
    // 	}
    // } else {

    if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time)) {
      return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    } //}


    _alignPlayhead(this, 0);

    this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
    return this.render(0);
  };

  _proto3.kill = function kill(targets, vars) {
    if (vars === void 0) {
      vars = "all";
    }

    if (!targets && (!vars || vars === "all")) {
      this._lazy = this._pt = 0;
      return this.parent ? _interrupt(this) : this;
    }

    if (this.timeline) {
      var tDur = this.timeline.totalDuration();
      this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweening, interrupt.

      this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.

      return this;
    }

    var parsedTargets = this._targets,
        killingTargets = targets ? toArray(targets) : parsedTargets,
        propTweenLookup = this._ptLookup,
        firstPT = this._pt,
        overwrittenProps,
        curLookup,
        curOverwriteProps,
        props,
        p,
        pt,
        i;

    if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
      vars === "all" && (this._pt = 0);
      return _interrupt(this);
    }

    overwrittenProps = this._op = this._op || [];

    if (vars !== "all") {
      //so people can pass in a comma-delimited list of property names
      if (_isString(vars)) {
        p = {};

        _forEachName(vars, function (name) {
          return p[name] = 1;
        });

        vars = p;
      }

      vars = _addAliasesToVars(parsedTargets, vars);
    }

    i = parsedTargets.length;

    while (i--) {
      if (~killingTargets.indexOf(parsedTargets[i])) {
        curLookup = propTweenLookup[i];

        if (vars === "all") {
          overwrittenProps[i] = vars;
          props = curLookup;
          curOverwriteProps = {};
        } else {
          curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
          props = vars;
        }

        for (p in props) {
          pt = curLookup && curLookup[p];

          if (pt) {
            if (!("kill" in pt.d) || pt.d.kill(p) === true) {
              _removeLinkedListItem(this, pt, "_pt");
            }

            delete curLookup[p];
          }

          if (curOverwriteProps !== "all") {
            curOverwriteProps[p] = 1;
          }
        }
      }
    }

    this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.

    return this;
  };

  Tween.to = function to(targets, vars) {
    return new Tween(targets, vars, arguments[2]);
  };

  Tween.from = function from(targets, vars) {
    return _createTweenType(1, arguments);
  };

  Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
    return new Tween(callback, 0, {
      immediateRender: false,
      lazy: false,
      overwrite: false,
      delay: delay,
      onComplete: callback,
      onReverseComplete: callback,
      onCompleteParams: params,
      onReverseCompleteParams: params,
      callbackScope: scope
    });
  };

  Tween.fromTo = function fromTo(targets, fromVars, toVars) {
    return _createTweenType(2, arguments);
  };

  Tween.set = function set(targets, vars) {
    vars.duration = 0;
    vars.repeatDelay || (vars.repeat = 0);
    return new Tween(targets, vars);
  };

  Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    return _globalTimeline.killTweensOf(targets, props, onlyActive);
  };

  return Tween;
}(Animation);

_setDefaults(Tween.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.


_forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
  Tween[name] = function () {
    var tl = new Timeline(),
        params = _slice.call(arguments, 0);

    params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
    return tl[name].apply(tl, params);
  };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */


var _setterPlain = function _setterPlain(target, property, value) {
  return target[property] = value;
},
    _setterFunc = function _setterFunc(target, property, value) {
  return target[property](value);
},
    _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
  return target[property](data.fp, value);
},
    _setterAttribute = function _setterAttribute(target, property, value) {
  return target.setAttribute(property, value);
},
    _getSetter = function _getSetter(target, property) {
  return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
},
    _renderPlain = function _renderPlain(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
},
    _renderBoolean = function _renderBoolean(ratio, data) {
  return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
},
    _renderComplexString = function _renderComplexString(ratio, data) {
  var pt = data._pt,
      s = "";

  if (!ratio && data.b) {
    //b = beginning string
    s = data.b;
  } else if (ratio === 1 && data.e) {
    //e = ending string
    s = data.e;
  } else {
    while (pt) {
      s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.

      pt = pt._next;
    }

    s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
  }

  data.set(data.t, data.p, s, data);
},
    _renderPropTweens = function _renderPropTweens(ratio, data) {
  var pt = data._pt;

  while (pt) {
    pt.r(ratio, pt.d);
    pt = pt._next;
  }
},
    _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
  var pt = this._pt,
      next;

  while (pt) {
    next = pt._next;
    pt.p === property && pt.modifier(modifier, tween, target);
    pt = next;
  }
},
    _killPropTweensOf = function _killPropTweensOf(property) {
  var pt = this._pt,
      hasNonDependentRemaining,
      next;

  while (pt) {
    next = pt._next;

    if (pt.p === property && !pt.op || pt.op === property) {
      _removeLinkedListItem(this, pt, "_pt");
    } else if (!pt.dep) {
      hasNonDependentRemaining = 1;
    }

    pt = next;
  }

  return !hasNonDependentRemaining;
},
    _setterWithModifier = function _setterWithModifier(target, property, value, data) {
  data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
},
    _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
  var pt = parent._pt,
      next,
      pt2,
      first,
      last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)

  while (pt) {
    next = pt._next;
    pt2 = first;

    while (pt2 && pt2.pr > pt.pr) {
      pt2 = pt2._next;
    }

    if (pt._prev = pt2 ? pt2._prev : last) {
      pt._prev._next = pt;
    } else {
      first = pt;
    }

    if (pt._next = pt2) {
      pt2._prev = pt;
    } else {
      last = pt;
    }

    pt = next;
  }

  parent._pt = first;
}; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)


var PropTween = /*#__PURE__*/function () {
  function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
    this.t = target;
    this.s = start;
    this.c = change;
    this.p = prop;
    this.r = renderer || _renderPlain;
    this.d = data || this;
    this.set = setter || _setterPlain;
    this.pr = priority || 0;
    this._next = next;

    if (next) {
      next._prev = this;
    }
  }

  var _proto4 = PropTween.prototype;

  _proto4.modifier = function modifier(func, tween, target) {
    this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)

    this.set = _setterWithModifier;
    this.m = func;
    this.mt = target; //modifier target

    this.tween = tween;
  };

  return PropTween;
}(); //Initialization tasks

_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
  return _reservedProps[name] = 1;
});

_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
  sortChildren: false,
  defaults: _defaults,
  autoRemoveChildren: true,
  id: "root",
  smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */

var _gsap = {
  registerPlugin: function registerPlugin() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    args.forEach(function (config) {
      return _createPlugin(config);
    });
  },
  timeline: function timeline(vars) {
    return new Timeline(vars);
  },
  getTweensOf: function getTweensOf(targets, onlyActive) {
    return _globalTimeline.getTweensOf(targets, onlyActive);
  },
  getProperty: function getProperty(target, property, unit, uncache) {
    _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in

    var getter = _getCache(target || {}).get,
        format = unit ? _passThrough : _numericIfPossible;

    unit === "native" && (unit = "");
    return !target ? target : !property ? function (property, unit, uncache) {
      return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
  },
  quickSetter: function quickSetter(target, property, unit) {
    target = toArray(target);

    if (target.length > 1) {
      var setters = target.map(function (t) {
        return gsap.quickSetter(t, property, unit);
      }),
          l = setters.length;
      return function (value) {
        var i = l;

        while (i--) {
          setters[i](value);
        }
      };
    }

    target = target[0] || {};

    var Plugin = _plugins[property],
        cache = _getCache(target),
        p = cache.harness && (cache.harness.aliases || {})[property] || property,
        // in case it's an alias, like "rotate" for "rotation".
    setter = Plugin ? function (value) {
      var p = new Plugin();
      _quickTween._pt = 0;
      p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
      p.render(1, p);
      _quickTween._pt && _renderPropTweens(1, _quickTween);
    } : cache.set(target, p);

    return Plugin ? setter : function (value) {
      return setter(target, p, unit ? value + unit : value, cache, 1);
    };
  },
  quickTo: function quickTo(target, property, vars) {
    var _merge2;

    var tween = gsap.to(target, _merge((_merge2 = {}, _merge2[property] = "+=0.1", _merge2.paused = true, _merge2), vars || {})),
        func = function func(value, start, startIsRelative) {
      return tween.resetTo(property, value, start, startIsRelative);
    };

    func.tween = tween;
    return func;
  },
  isTweening: function isTweening(targets) {
    return _globalTimeline.getTweensOf(targets, true).length > 0;
  },
  defaults: function defaults(value) {
    value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
    return _mergeDeep(_defaults, value || {});
  },
  config: function config(value) {
    return _mergeDeep(_config, value || {});
  },
  registerEffect: function registerEffect(_ref3) {
    var name = _ref3.name,
        effect = _ref3.effect,
        plugins = _ref3.plugins,
        defaults = _ref3.defaults,
        extendTimeline = _ref3.extendTimeline;
    (plugins || "").split(",").forEach(function (pluginName) {
      return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
    });

    _effects[name] = function (targets, vars, tl) {
      return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
    };

    if (extendTimeline) {
      Timeline.prototype[name] = function (targets, vars, position) {
        return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
      };
    }
  },
  registerEase: function registerEase(name, ease) {
    _easeMap[name] = _parseEase(ease);
  },
  parseEase: function parseEase(ease, defaultEase) {
    return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
  },
  getById: function getById(id) {
    return _globalTimeline.getById(id);
  },
  exportRoot: function exportRoot(vars, includeDelayedCalls) {
    if (vars === void 0) {
      vars = {};
    }

    var tl = new Timeline(vars),
        child,
        next;
    tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);

    _globalTimeline.remove(tl);

    tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).

    tl._time = tl._tTime = _globalTimeline._time;
    child = _globalTimeline._first;

    while (child) {
      next = child._next;

      if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
        _addToTimeline(tl, child, child._start - child._delay);
      }

      child = next;
    }

    _addToTimeline(_globalTimeline, tl, 0);

    return tl;
  },
  utils: {
    wrap: wrap,
    wrapYoyo: wrapYoyo,
    distribute: distribute,
    random: random,
    snap: snap,
    normalize: normalize,
    getUnit: getUnit,
    clamp: clamp,
    splitColor: splitColor,
    toArray: toArray,
    selector: selector,
    mapRange: mapRange,
    pipe: pipe,
    unitize: unitize,
    interpolate: interpolate,
    shuffle: shuffle
  },
  install: _install,
  effects: _effects,
  ticker: _ticker,
  updateRoot: Timeline.updateRoot,
  plugins: _plugins,
  globalTimeline: _globalTimeline,
  core: {
    PropTween: PropTween,
    globals: _addGlobal,
    Tween: Tween,
    Timeline: Timeline,
    Animation: Animation,
    getCache: _getCache,
    _removeLinkedListItem: _removeLinkedListItem,
    suppressOverwrites: function suppressOverwrites(value) {
      return _suppressOverwrites = value;
    }
  }
};

_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
  return _gsap[name] = Tween[name];
});

_ticker.add(Timeline.updateRoot);

_quickTween = _gsap.to({}, {
  duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------

var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
  var pt = plugin._pt;

  while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
    pt = pt._next;
  }

  return pt;
},
    _addModifiers = function _addModifiers(tween, modifiers) {
  var targets = tween._targets,
      p,
      i,
      pt;

  for (p in modifiers) {
    i = targets.length;

    while (i--) {
      pt = tween._ptLookup[i][p];

      if (pt && (pt = pt.d)) {
        if (pt._pt) {
          // is a plugin
          pt = _getPluginPropTween(pt, p);
        }

        pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
      }
    }
  }
},
    _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
  return {
    name: name,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function init(target, vars, tween) {
      tween._onInit = function (tween) {
        var temp, p;

        if (_isString(vars)) {
          temp = {};

          _forEachName(vars, function (name) {
            return temp[name] = 1;
          }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.


          vars = temp;
        }

        if (modifier) {
          temp = {};

          for (p in vars) {
            temp[p] = modifier(vars[p]);
          }

          vars = temp;
        }

        _addModifiers(tween, vars);
      };
    }
  };
}; //register core plugins


var gsap = _gsap.registerPlugin({
  name: "attr",
  init: function init(target, vars, tween, index, targets) {
    var p, pt;

    for (p in vars) {
      pt = this.add(target, "setAttribute", (target.getAttribute(p) || 0) + "", vars[p], index, targets, 0, 0, p);
      pt && (pt.op = p);

      this._props.push(p);
    }
  }
}, {
  name: "endArray",
  init: function init(target, value) {
    var i = value.length;

    while (i--) {
      this.add(target, i, target[i] || 0, value[i]);
    }
  }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.

Tween.version = Timeline.version = gsap.version = "3.10.4";
_coreReady = 1;
_windowExists() && _wake();
var Power0 = _easeMap.Power0,
    Power1 = _easeMap.Power1,
    Power2 = _easeMap.Power2,
    Power3 = _easeMap.Power3,
    Power4 = _easeMap.Power4,
    Linear = _easeMap.Linear,
    Quad = _easeMap.Quad,
    Cubic = _easeMap.Cubic,
    Quart = _easeMap.Quart,
    Quint = _easeMap.Quint,
    Strong = _easeMap.Strong,
    Elastic = _easeMap.Elastic,
    Back = _easeMap.Back,
    SteppedEase = _easeMap.SteppedEase,
    Bounce = _easeMap.Bounce,
    Sine = _easeMap.Sine,
    Expo = _easeMap.Expo,
    Circ = _easeMap.Circ;

 //export some internal methods/orojects for use in CSSPlugin so that we can externalize that file and allow custom builds that exclude it.



/***/ }),

/***/ "./node_modules/gsap/index.js":
/*!************************************!*\
  !*** ./node_modules/gsap/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Back": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Back),
/* harmony export */   "Bounce": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Bounce),
/* harmony export */   "CSSPlugin": () => (/* reexport safe */ _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin),
/* harmony export */   "Circ": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Circ),
/* harmony export */   "Cubic": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Cubic),
/* harmony export */   "Elastic": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Elastic),
/* harmony export */   "Expo": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Expo),
/* harmony export */   "Linear": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Linear),
/* harmony export */   "Power0": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power0),
/* harmony export */   "Power1": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power1),
/* harmony export */   "Power2": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power2),
/* harmony export */   "Power3": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power3),
/* harmony export */   "Power4": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power4),
/* harmony export */   "Quad": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quad),
/* harmony export */   "Quart": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quart),
/* harmony export */   "Quint": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quint),
/* harmony export */   "Sine": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Sine),
/* harmony export */   "SteppedEase": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.SteppedEase),
/* harmony export */   "Strong": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Strong),
/* harmony export */   "TimelineLite": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineLite),
/* harmony export */   "TimelineMax": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineMax),
/* harmony export */   "TweenLite": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TweenLite),
/* harmony export */   "TweenMax": () => (/* binding */ TweenMaxWithCSS),
/* harmony export */   "default": () => (/* binding */ gsapWithCSS),
/* harmony export */   "gsap": () => (/* binding */ gsapWithCSS)
/* harmony export */ });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
/* harmony import */ var _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSPlugin.js */ "./node_modules/gsap/CSSPlugin.js");


var gsapWithCSS = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(_CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin) || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap,
    // to protect from tree shaking
TweenMaxWithCSS = gsapWithCSS.core.Tween;


/***/ }),

/***/ "./node_modules/gsap/utils/matrix.js":
/*!*******************************************!*\
  !*** ./node_modules/gsap/utils/matrix.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Matrix2D": () => (/* binding */ Matrix2D),
/* harmony export */   "_getCTM": () => (/* binding */ _getCTM),
/* harmony export */   "_getDocScrollLeft": () => (/* binding */ _getDocScrollLeft),
/* harmony export */   "_getDocScrollTop": () => (/* binding */ _getDocScrollTop),
/* harmony export */   "_isFixed": () => (/* binding */ _isFixed),
/* harmony export */   "_setDoc": () => (/* binding */ _setDoc),
/* harmony export */   "getGlobalMatrix": () => (/* binding */ getGlobalMatrix)
/* harmony export */ });
/*!
 * matrix 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var _doc,
    _win,
    _docElement,
    _body,
    _divContainer,
    _svgContainer,
    _identityMatrix,
    _gEl,
    _transformProp = "transform",
    _transformOriginProp = _transformProp + "Origin",
    _hasOffsetBug,
    _setDoc = function _setDoc(element) {
  var doc = element.ownerDocument || element;

  if (!(_transformProp in element.style) && "msTransform" in element.style) {
    //to improve compatibility with old Microsoft browsers
    _transformProp = "msTransform";
    _transformOriginProp = _transformProp + "Origin";
  }

  while (doc.parentNode && (doc = doc.parentNode)) {}

  _win = window;
  _identityMatrix = new Matrix2D();

  if (doc) {
    _doc = doc;
    _docElement = doc.documentElement;
    _body = doc.body;
    _gEl = _doc.createElementNS("http://www.w3.org/2000/svg", "g"); // prevent any existing CSS from transforming it

    _gEl.style.transform = "none"; // now test for the offset reporting bug. Use feature detection instead of browser sniffing to make things more bulletproof and future-proof. Hopefully Safari will fix their bug soon but it's 2020 and it's still not fixed.

    var d1 = doc.createElement("div"),
        d2 = doc.createElement("div");

    _body.appendChild(d1);

    d1.appendChild(d2);
    d1.style.position = "static";
    d1.style[_transformProp] = "translate3d(0,0,1px)";
    _hasOffsetBug = d2.offsetParent !== d1;

    _body.removeChild(d1);
  }

  return doc;
},
    _forceNonZeroScale = function _forceNonZeroScale(e) {
  // walks up the element's ancestors and finds any that had their scale set to 0 via GSAP, and changes them to 0.0001 to ensure that measurements work. Firefox has a bug that causes it to incorrectly report getBoundingClientRect() when scale is 0.
  var a, cache;

  while (e && e !== _body) {
    cache = e._gsap;
    cache && cache.uncache && cache.get(e, "x"); // force re-parsing of transforms if necessary

    if (cache && !cache.scaleX && !cache.scaleY && cache.renderTransform) {
      cache.scaleX = cache.scaleY = 1e-4;
      cache.renderTransform(1, cache);
      a ? a.push(cache) : a = [cache];
    }

    e = e.parentNode;
  }

  return a;
},
    // possible future addition: pass an element to _forceDisplay() and it'll walk up all its ancestors and make sure anything with display: none is set to display: block, and if there's no parentNode, it'll add it to the body. It returns an Array that you can then feed to _revertDisplay() to have it revert all the changes it made.
// _forceDisplay = e => {
// 	let a = [],
// 		parent;
// 	while (e && e !== _body) {
// 		parent = e.parentNode;
// 		(_win.getComputedStyle(e).display === "none" || !parent) && a.push(e, e.style.display, parent) && (e.style.display = "block");
// 		parent || _body.appendChild(e);
// 		e = parent;
// 	}
// 	return a;
// },
// _revertDisplay = a => {
// 	for (let i = 0; i < a.length; i+=3) {
// 		a[i+1] ? (a[i].style.display = a[i+1]) : a[i].style.removeProperty("display");
// 		a[i+2] || a[i].parentNode.removeChild(a[i]);
// 	}
// },
_svgTemps = [],
    //we create 3 elements for SVG, and 3 for other DOM elements and cache them for performance reasons. They get nested in _divContainer and _svgContainer so that just one element is added to the DOM on each successive attempt. Again, performance is key.
_divTemps = [],
    _getDocScrollTop = function _getDocScrollTop() {
  return _win.pageYOffset || _doc.scrollTop || _docElement.scrollTop || _body.scrollTop || 0;
},
    _getDocScrollLeft = function _getDocScrollLeft() {
  return _win.pageXOffset || _doc.scrollLeft || _docElement.scrollLeft || _body.scrollLeft || 0;
},
    _svgOwner = function _svgOwner(element) {
  return element.ownerSVGElement || ((element.tagName + "").toLowerCase() === "svg" ? element : null);
},
    _isFixed = function _isFixed(element) {
  if (_win.getComputedStyle(element).position === "fixed") {
    return true;
  }

  element = element.parentNode;

  if (element && element.nodeType === 1) {
    // avoid document fragments which will throw an error.
    return _isFixed(element);
  }
},
    _createSibling = function _createSibling(element, i) {
  if (element.parentNode && (_doc || _setDoc(element))) {
    var svg = _svgOwner(element),
        ns = svg ? svg.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
        type = svg ? i ? "rect" : "g" : "div",
        x = i !== 2 ? 0 : 100,
        y = i === 3 ? 100 : 0,
        css = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
        e = _doc.createElementNS ? _doc.createElementNS(ns.replace(/^https/, "http"), type) : _doc.createElement(type);

    if (i) {
      if (!svg) {
        if (!_divContainer) {
          _divContainer = _createSibling(element);
          _divContainer.style.cssText = css;
        }

        e.style.cssText = css + "width:0.1px;height:0.1px;top:" + y + "px;left:" + x + "px";

        _divContainer.appendChild(e);
      } else {
        _svgContainer || (_svgContainer = _createSibling(element));
        e.setAttribute("width", 0.01);
        e.setAttribute("height", 0.01);
        e.setAttribute("transform", "translate(" + x + "," + y + ")");

        _svgContainer.appendChild(e);
      }
    }

    return e;
  }

  throw "Need document and parent.";
},
    _consolidate = function _consolidate(m) {
  // replaces SVGTransformList.consolidate() because a bug in Firefox causes it to break pointer events. See https://greensock.com/forums/topic/23248-touch-is-not-working-on-draggable-in-firefox-windows-v324/?tab=comments#comment-109800
  var c = new Matrix2D(),
      i = 0;

  for (; i < m.numberOfItems; i++) {
    c.multiply(m.getItem(i).matrix);
  }

  return c;
},
    _getCTM = function _getCTM(svg) {
  var m = svg.getCTM(),
      transform;

  if (!m) {
    // Firefox returns null for getCTM() on root <svg> elements, so this is a workaround using a <g> that we temporarily append.
    transform = svg.style[_transformProp];
    svg.style[_transformProp] = "none"; // a bug in Firefox causes css transforms to contaminate the getCTM()

    svg.appendChild(_gEl);
    m = _gEl.getCTM();
    svg.removeChild(_gEl);
    transform ? svg.style[_transformProp] = transform : svg.style.removeProperty(_transformProp.replace(/([A-Z])/g, "-$1").toLowerCase());
  }

  return m || _identityMatrix.clone(); // Firefox will still return null if the <svg> has a width/height of 0 in the browser.
},
    _placeSiblings = function _placeSiblings(element, adjustGOffset) {
  var svg = _svgOwner(element),
      isRootSVG = element === svg,
      siblings = svg ? _svgTemps : _divTemps,
      parent = element.parentNode,
      container,
      m,
      b,
      x,
      y,
      cs;

  if (element === _win) {
    return element;
  }

  siblings.length || siblings.push(_createSibling(element, 1), _createSibling(element, 2), _createSibling(element, 3));
  container = svg ? _svgContainer : _divContainer;

  if (svg) {
    if (isRootSVG) {
      b = _getCTM(element);
      x = -b.e / b.a;
      y = -b.f / b.d;
      m = _identityMatrix;
    } else if (element.getBBox) {
      b = element.getBBox();
      m = element.transform ? element.transform.baseVal : {}; // IE11 doesn't follow the spec.

      m = !m.numberOfItems ? _identityMatrix : m.numberOfItems > 1 ? _consolidate(m) : m.getItem(0).matrix; // don't call m.consolidate().matrix because a bug in Firefox makes pointer events not work when consolidate() is called on the same tick as getBoundingClientRect()! See https://greensock.com/forums/topic/23248-touch-is-not-working-on-draggable-in-firefox-windows-v324/?tab=comments#comment-109800

      x = m.a * b.x + m.c * b.y;
      y = m.b * b.x + m.d * b.y;
    } else {
      // may be a <mask> which has no getBBox() so just use defaults instead of throwing errors.
      m = new Matrix2D();
      x = y = 0;
    }

    if (adjustGOffset && element.tagName.toLowerCase() === "g") {
      x = y = 0;
    }

    (isRootSVG ? svg : parent).appendChild(container);
    container.setAttribute("transform", "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + (m.e + x) + "," + (m.f + y) + ")");
  } else {
    x = y = 0;

    if (_hasOffsetBug) {
      // some browsers (like Safari) have a bug that causes them to misreport offset values. When an ancestor element has a transform applied, it's supposed to treat it as if it's position: relative (new context). Safari botches this, so we need to find the closest ancestor (between the element and its offsetParent) that has a transform applied and if one is found, grab its offsetTop/Left and subtract them to compensate.
      m = element.offsetParent;
      b = element;

      while (b && (b = b.parentNode) && b !== m && b.parentNode) {
        if ((_win.getComputedStyle(b)[_transformProp] + "").length > 4) {
          x = b.offsetLeft;
          y = b.offsetTop;
          b = 0;
        }
      }
    }

    cs = _win.getComputedStyle(element);

    if (cs.position !== "absolute" && cs.position !== "fixed") {
      m = element.offsetParent;

      while (parent && parent !== m) {
        // if there's an ancestor element between the element and its offsetParent that's scrolled, we must factor that in.
        x += parent.scrollLeft || 0;
        y += parent.scrollTop || 0;
        parent = parent.parentNode;
      }
    }

    b = container.style;
    b.top = element.offsetTop - y + "px";
    b.left = element.offsetLeft - x + "px";
    b[_transformProp] = cs[_transformProp];
    b[_transformOriginProp] = cs[_transformOriginProp]; // b.border = m.border;
    // b.borderLeftStyle = m.borderLeftStyle;
    // b.borderTopStyle = m.borderTopStyle;
    // b.borderLeftWidth = m.borderLeftWidth;
    // b.borderTopWidth = m.borderTopWidth;

    b.position = cs.position === "fixed" ? "fixed" : "absolute";
    element.parentNode.appendChild(container);
  }

  return container;
},
    _setMatrix = function _setMatrix(m, a, b, c, d, e, f) {
  m.a = a;
  m.b = b;
  m.c = c;
  m.d = d;
  m.e = e;
  m.f = f;
  return m;
};

var Matrix2D = /*#__PURE__*/function () {
  function Matrix2D(a, b, c, d, e, f) {
    if (a === void 0) {
      a = 1;
    }

    if (b === void 0) {
      b = 0;
    }

    if (c === void 0) {
      c = 0;
    }

    if (d === void 0) {
      d = 1;
    }

    if (e === void 0) {
      e = 0;
    }

    if (f === void 0) {
      f = 0;
    }

    _setMatrix(this, a, b, c, d, e, f);
  }

  var _proto = Matrix2D.prototype;

  _proto.inverse = function inverse() {
    var a = this.a,
        b = this.b,
        c = this.c,
        d = this.d,
        e = this.e,
        f = this.f,
        determinant = a * d - b * c || 1e-10;
    return _setMatrix(this, d / determinant, -b / determinant, -c / determinant, a / determinant, (c * f - d * e) / determinant, -(a * f - b * e) / determinant);
  };

  _proto.multiply = function multiply(matrix) {
    var a = this.a,
        b = this.b,
        c = this.c,
        d = this.d,
        e = this.e,
        f = this.f,
        a2 = matrix.a,
        b2 = matrix.c,
        c2 = matrix.b,
        d2 = matrix.d,
        e2 = matrix.e,
        f2 = matrix.f;
    return _setMatrix(this, a2 * a + c2 * c, a2 * b + c2 * d, b2 * a + d2 * c, b2 * b + d2 * d, e + e2 * a + f2 * c, f + e2 * b + f2 * d);
  };

  _proto.clone = function clone() {
    return new Matrix2D(this.a, this.b, this.c, this.d, this.e, this.f);
  };

  _proto.equals = function equals(matrix) {
    var a = this.a,
        b = this.b,
        c = this.c,
        d = this.d,
        e = this.e,
        f = this.f;
    return a === matrix.a && b === matrix.b && c === matrix.c && d === matrix.d && e === matrix.e && f === matrix.f;
  };

  _proto.apply = function apply(point, decoratee) {
    if (decoratee === void 0) {
      decoratee = {};
    }

    var x = point.x,
        y = point.y,
        a = this.a,
        b = this.b,
        c = this.c,
        d = this.d,
        e = this.e,
        f = this.f;
    decoratee.x = x * a + y * c + e || 0;
    decoratee.y = x * b + y * d + f || 0;
    return decoratee;
  };

  return Matrix2D;
}(); // Feed in an element and it'll return a 2D matrix (optionally inverted) so that you can translate between coordinate spaces.
// Inverting lets you translate a global point into a local coordinate space. No inverting lets you go the other way.
// We needed this to work around various browser bugs, like Firefox doesn't accurately report getScreenCTM() when there
// are transforms applied to ancestor elements.
// The matrix math to convert any x/y coordinate is as follows, which is wrapped in a convenient apply() method of Matrix2D above:
//     tx = m.a * x + m.c * y + m.e
//     ty = m.b * x + m.d * y + m.f

function getGlobalMatrix(element, inverse, adjustGOffset, includeScrollInFixed) {
  // adjustGOffset is typically used only when grabbing an element's PARENT's global matrix, and it ignores the x/y offset of any SVG <g> elements because they behave in a special way.
  if (!element || !element.parentNode || (_doc || _setDoc(element)).documentElement === element) {
    return new Matrix2D();
  }

  var zeroScales = _forceNonZeroScale(element),
      svg = _svgOwner(element),
      temps = svg ? _svgTemps : _divTemps,
      container = _placeSiblings(element, adjustGOffset),
      b1 = temps[0].getBoundingClientRect(),
      b2 = temps[1].getBoundingClientRect(),
      b3 = temps[2].getBoundingClientRect(),
      parent = container.parentNode,
      isFixed = !includeScrollInFixed && _isFixed(element),
      m = new Matrix2D((b2.left - b1.left) / 100, (b2.top - b1.top) / 100, (b3.left - b1.left) / 100, (b3.top - b1.top) / 100, b1.left + (isFixed ? 0 : _getDocScrollLeft()), b1.top + (isFixed ? 0 : _getDocScrollTop()));

  parent.removeChild(container);

  if (zeroScales) {
    b1 = zeroScales.length;

    while (b1--) {
      b2 = zeroScales[b1];
      b2.scaleX = b2.scaleY = 0;
      b2.renderTransform(1, b2);
    }
  }

  return inverse ? m.inverse() : m;
}
 // export function getMatrix(element) {
// 	_doc || _setDoc(element);
// 	let m = (_win.getComputedStyle(element)[_transformProp] + "").substr(7).match(/[-.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g),
// 		is2D = m && m.length === 6;
// 	return !m || m.length < 6 ? new Matrix2D() : new Matrix2D(+m[0], +m[1], +m[is2D ? 2 : 4], +m[is2D ? 3 : 5], +m[is2D ? 4 : 12], +m[is2D ? 5 : 13]);
// }

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scripts/components/clock.js":
/*!*****************************************!*\
  !*** ./src/scripts/components/clock.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalogueClock": () => (/* binding */ AnalogueClock)
/* harmony export */ });
class AnalogueClock {
  constructor(el, smooth = false,) {
    this.el = el;
    this.smooth = smooth;
    this.secondsHand = this.el.querySelector('.analogue-clock__hand-seconds');
    this.minutesHand = this.el.querySelector('.analogue-clock__hand-minutes');
    this.hoursHand = this.el.querySelector('.analogue-clock__hand-hours');
    this.secondsHandRotations = 0;
    this.timeZone = 'Europe/London';
    this.currentTime = this.getCurrentTime();

    this.setHands(this.getCurrentTime());

    setTimeout(() => { this.setTransition(); }, 50);
    setInterval(() => { this.setHands(this.getCurrentTime()); }, 1000);
  }

  init() {
    // create elements inside this.el;
  }

  getCurrentTime() {
    const time = new Date();
    const hour = Number(time.toLocaleString([], {
      timeZone: this.timeZone,
      hour: 'numeric',
    }));
    const minute = Number(time.toLocaleString([], {
      timeZone: this.timeZone,
      minute: 'numeric',
    }));
    const second = Number(time.toLocaleString([], {
      timeZone: this.timeZone, 
      second: 'numeric',
    }));

    return {
      hours: hour,
      minutes: minute,
      seconds: second,
    }
  }

  setHands(time) {
    let secondsDeg = time.seconds * 6;
    const minutesDeg = time.minutes * 6 + (secondsDeg / 60);
    const hoursDeg = time.hours * 30 + (minutesDeg / 12);

    if (secondsDeg === 0) {
      this.secondsHandRotations++;
    }

    secondsDeg = secondsDeg + (this.secondsHandRotations * 360);

    this.secondsHand.style.setProperty('transform', 'rotate(' + secondsDeg + 'deg)');
    this.minutesHand.style.setProperty('transform', 'rotate(' + minutesDeg + 'deg)');
    this.hoursHand.style.setProperty('transform', 'rotate(' + hoursDeg + 'deg)');
  }

  setTransition() {
    if (this.smooth) {
      this.secondsHand.style.setProperty('transition-timing-function', 'linear');
      this.secondsHand.style.setProperty('transition-duration', '995ms');
    } else {
      this.secondsHand.style.setProperty('transition-duration', '150ms');
    }
  }
}


/***/ }),

/***/ "./src/scripts/components/graphicallySpeakingPlayer.js":
/*!*************************************************************!*\
  !*** ./src/scripts/components/graphicallySpeakingPlayer.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphicallySpeakingPlayer": () => (/* binding */ GraphicallySpeakingPlayer)
/* harmony export */ });
class GraphicallySpeakingPlayer {
  constructor(el) {
    this.el = el;
    this.audioPlayer = this.el.querySelector('audio');
    this.playing;
    this.controls = this.el.querySelector('.player__controls');
    this.info1 = this.el.querySelector('.player__info1');
    this.info2 = this.el.querySelector('.player__info2');
    this.intermissionButton = document.body.querySelector('.intermission-button');

    this.updatePlayingStatus();
    //this.controls.addEventListener('click', () => this.toggle());
    this.audioPlayer.addEventListener('ended', () => this.ended());
    this.el.addEventListener('click', () => this.toggle());
  }

  toggle() {
    if (this.audioPlayer.paused) {
      this.audioPlayer.play();
    } else {
      this.audioPlayer.pause();
    }

    this.updatePlayingStatus();
  }

  ended() {
    console.log('audio ended');
    if (this.audioPlayer.getAttribute('src') !== '/assets/intermission.mp3') {
      console.log('Go to intermission');
      this.audioPlayer.setAttribute('src', '/assets/intermission.mp3');
      this.audioPlayer.play();
      this.updatePlayerInfo('Now playing', 'Intermission');
    }

    this.updatePlayingStatus();
  }

  updatePlayingStatus() {
    this.playing = !this.audioPlayer.paused;
    this.el.classList.toggle('playing', this.playing);
    this.el.classList.toggle('paused', !this.playing);

    const intermissionPlaying = this.playing && this.audioPlayer.getAttribute('src') === '/assets/intermission.mp3' ? true: false;
    this.intermissionButton.classList.toggle('playing', intermissionPlaying);
    
    console.log((this.playing ? 'Playing' : 'Paused') + ', ' + this.audioPlayer.getAttribute('src'));
  }

  playAudio(src, info1, info2) {
    if (src === this.audioPlayer.getAttribute('src')) {
      this.toggle();
    } else {
      this.audioPlayer.setAttribute('src', src);
      this.audioPlayer.play();
      this.updatePlayerInfo(info1, info2);
      this.updatePlayingStatus();
    }
  }

  updatePlayerInfo(info1, info2) {
    this.info1.innerText = info1;
    this.info2.innerText = info2;
  }
}


/***/ }),

/***/ "./src/scripts/components/marquee.js":
/*!*******************************************!*\
  !*** ./src/scripts/components/marquee.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "marquee": () => (/* binding */ marquee)
/* harmony export */ });
function marquee(el, settings) {
  const speed = settings.speed || 10;
  const reverse = settings.reverse || false;
  const startPaused = settings.startPaused || false;
  let contentEl = el.querySelector('.marquee__wrapper');
  const contentBackup = contentEl.innerHTML;
  let windowWidth = window.innerWidth;
  contentEl.style.setProperty('.animation-play-state', 'paused');
  init();
  window.addEventListener('resize', function() {
    if (windowWidth !== window.innerWidth) {
      recalc();
      windowWidth = window.innerWidth;
    }
  });
  window.addEventListener('load', recalc);

  function init() {
    if (reverse) {
      el.classList.add('marquee--reverse');
    }

    if (startPaused) {
      el.classList.add('marquee--paused');
    }

    recalc();
  }

  function recalc() {
    const outerWidth = el.offsetWidth;
    const innerWidth = contentEl.offsetWidth; /* calling offsetWidth triggers reflow */
    const clones = Math.ceil(outerWidth / innerWidth);
    const duration = innerWidth / speed;

    el.querySelectorAll('.clone').forEach(function(el) {
      el.remove();
    });

    const tempContent = contentEl.cloneNode(true);
    contentEl.remove();
    contentEl = el.appendChild(tempContent);

    for (let i = 0; i < clones; i++) {
      const clone = contentEl.cloneNode(true);
      clone.classList.add('clone');
      contentEl.after(clone);
    }

    el.style.setProperty('--duration', duration + 's');
  }

  function updateContent(content = contentBackup) {
    contentEl.innerHTML = content;
    recalc();
  }

  return {
    updateContent,
  }
}


/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _barba_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @barba/core */ "./node_modules/@barba/core/dist/barba.umd.js");
/* harmony import */ var _barba_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_barba_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_marquee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/marquee */ "./src/scripts/components/marquee.js");
/* harmony import */ var _components_graphicallySpeakingPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/graphicallySpeakingPlayer */ "./src/scripts/components/graphicallySpeakingPlayer.js");
/* harmony import */ var _components_clock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/clock */ "./src/scripts/components/clock.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_Draggable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap/Draggable */ "./node_modules/gsap/Draggable.js");
/* harmony import */ var _modules_randomArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/randomArray */ "./src/scripts/modules/randomArray.js");
/* harmony import */ var _modules_objectScatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/objectScatter */ "./src/scripts/modules/objectScatter.js");


 






gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.registerPlugin(gsap_Draggable__WEBPACK_IMPORTED_MODULE_7__.Draggable);

_barba_core__WEBPACK_IMPORTED_MODULE_0___default().init({
  timeout: 5000,
  transitions: [
    {
      name: 'self',
      sync: true,
    },
  ],
  views: [
    {
      namespace: 'home',
      afterEnter(data) {
        console.log('home, afterEnter');
        if (data.current.container) {
          data.current.container.remove();
        }
        pageChange();
      },
    },
    {
      namespace: 'people',
      afterEnter(data) {
        console.log('people, afterEnter');
        if (data.current.container) {
          data.current.container.remove();
        }
        pageChange();
      },
    },
  ],
});

const player = document.querySelector('#player');
const graphicallySpeakingPlayer = new _components_graphicallySpeakingPlayer__WEBPACK_IMPORTED_MODULE_2__.GraphicallySpeakingPlayer(player);

function pageChange() {
  // Add event listener for audio links
  document.querySelectorAll('#content__wrapper .audio-link').forEach(el => {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      const el = e.currentTarget;
      const audioSrc = el.getAttribute('href');
      const info1 = 'Now playing';
      const info2 = el.getAttribute('data-name');
      graphicallySpeakingPlayer.playAudio(audioSrc, info1, info2);
    });
  });

  // Run shapes
  const linesContainer = document.querySelector('.lines');
  const lines = linesContainer.children;

  // Shuffle and remove all but first 3 lines
  if (lines.length > 3) {
    console.log('run line shuffle');
    for (let i = lines.length; i >= 0; i--) {
      linesContainer.appendChild(lines[Math.random() * i | 0]);
    }
  
    for (let i = lines.length; i > 3; i--) {
      linesContainer.removeChild(linesContainer.lastChild);
    }
  }

  const randXSpread = (0,_modules_randomArray__WEBPACK_IMPORTED_MODULE_4__.randomArray)(0, 2);
  const randYSpread = (0,_modules_randomArray__WEBPACK_IMPORTED_MODULE_4__.randomArray)(0, 2);

  [...lines].forEach((line, i) => {
    const handle = line.querySelectorAll('svg > *');

    line.style.setProperty('--left', (randXSpread[i % 3] * (20+20)) + (Math.floor(Math.random() * 21)));
    line.style.setProperty('--top', (randYSpread[i % 3] * (20+20)) + (Math.floor(Math.random() * 21)));
    
    gsap_Draggable__WEBPACK_IMPORTED_MODULE_7__.Draggable.create(line, {
      bounds: '#site-content',
      trigger: handle,
      edgeResistance: 0.5,
      inertia: true,
      zIndexBoost: true,
    });
  });
}

document.querySelectorAll('.marquee').forEach((el) => {
  (0,_components_marquee__WEBPACK_IMPORTED_MODULE_1__.marquee)(el, 
    {
      speed: 70,
    }
  );
});

document.querySelectorAll('.analogue-clock').forEach(el => {
  new _components_clock__WEBPACK_IMPORTED_MODULE_3__.AnalogueClock(el);
});

document.querySelector('.wavy-text').childNodes.forEach(function(el, i) {
  el.style.setProperty('animation-delay', -160 * i + 'ms');
});

document.querySelector('.intermission-button').addEventListener('click', function() {
  graphicallySpeakingPlayer.playAudio('/assets/intermission.mp3', 'Now playing', 'Intermission');
});

document.querySelectorAll('.object-scatter').forEach(function(el) {
  el.addEventListener('click', function(event) {
    event.preventDefault();
    const targetSelector = event.target.getAttribute('data-object-scatter-target');
    const targetEl = document.querySelector(targetSelector);
    (0,_modules_objectScatter__WEBPACK_IMPORTED_MODULE_5__.objectScatter)(targetEl);
  });
});


/***/ }),

/***/ "./src/scripts/modules/objectScatter.js":
/*!**********************************************!*\
  !*** ./src/scripts/modules/objectScatter.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "objectScatter": () => (/* binding */ objectScatter)
/* harmony export */ });
/* harmony import */ var _randomFromRange__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./randomFromRange */ "./src/scripts/modules/randomFromRange.js");
/* harmony import */ var _randomArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./randomArray */ "./src/scripts/modules/randomArray.js");



function objectScatter(el) {
  el.addEventListener('click', imageRemove);
  el.addEventListener('wheel', imageRemove, { passive: true });
  el.setAttribute('active', 'active');
  const items = el.children;
  const zonesX = (0,_randomArray__WEBPACK_IMPORTED_MODULE_1__.randomArray)(1, items.length);
  const zonesY = (0,_randomArray__WEBPACK_IMPORTED_MODULE_1__.randomArray)(1, items.length);
  const interval = 100 / items.length;
  const delay = (0,_randomArray__WEBPACK_IMPORTED_MODULE_1__.randomArray)(0, items.length - 1);

  [...items].forEach(function(item, i, arr) {
    const random = {
      left: (0,_randomFromRange__WEBPACK_IMPORTED_MODULE_0__.randomFromRange)(zonesX[i] * interval - ((interval / 4) * 3), zonesX[i] * interval - interval / 4),
      top: (0,_randomFromRange__WEBPACK_IMPORTED_MODULE_0__.randomFromRange)(zonesY[i] * interval - ((interval / 4) * 3), zonesY[i] * interval - interval / 4),
      delay: delay[i],
    };
    const styles = '--random-top: ' + random.top + '; ' +
                   '--random-left: ' + random.left + ';' +
                   '--delay: ' + random.delay * 100 + ';';

    item.style.cssText = styles;

    const image = item;
    if (!image.src) {
      if (image.hasAttribute('data-srcset')) {
        image.srcset = image.getAttribute('data-srcset');
      }

      if (image.hasAttribute('data-src')) {
        image.src = image.getAttribute('data-src');
      }
    }
  });
}

function imageRemove(event) {
  const el = event.currentTarget;
  el.removeAttribute('active');
}


/***/ }),

/***/ "./src/scripts/modules/randomArray.js":
/*!********************************************!*\
  !*** ./src/scripts/modules/randomArray.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "randomArray": () => (/* binding */ randomArray)
/* harmony export */ });
// return a randomly sorted array containing numbers between min and max
function randomArray(min, max) {
  const array = [];
  for (let i = min; i <= max; i++) {
    array.push(i);
  }
  let j, z;
  for (let i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    z = array[i];
    array[i] = array[j];
    array[j] = z;
  }
  return array;
}


/***/ }),

/***/ "./src/scripts/modules/randomFromRange.js":
/*!************************************************!*\
  !*** ./src/scripts/modules/randomFromRange.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "randomFromRange": () => (/* binding */ randomFromRange)
/* harmony export */ });
// return random number between min and max
function randomFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/main.js */ "./src/scripts/main.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxlQUFlLEtBQW9ELG9CQUFvQixDQUFxRSxDQUFDLGtCQUFrQixnQkFBZ0IsWUFBWSxXQUFXLEtBQUssV0FBVywrR0FBK0csa0JBQWtCLHVDQUF1QyxhQUFhLG9DQUFvQyxZQUFZLG1CQUFtQixLQUFLLG1CQUFtQixzRUFBc0UsU0FBUyx3QkFBd0IsZ0JBQWdCLCtFQUErRSxjQUFjLGlFQUFpRSw2Q0FBNkMsS0FBSyxnQkFBZ0IsOENBQThDLHVCQUF1QixPQUFPLGtCQUFrQixvQkFBb0IsNERBQTRELG1DQUFtQyxxQ0FBcUMsSUFBSSwyRUFBMkUsT0FBTyxTQUFTLFVBQVUscUNBQXFDLGFBQWEsa0JBQWtCLG9DQUFvQyw2QkFBNkIsd0JBQXdCLGNBQWMsNENBQTRDLHFCQUFxQiw4RUFBOEUsa0dBQWtHLGVBQWUsNEJBQTRCLFdBQVcsYUFBYSwwQ0FBMEMsOENBQThDLGFBQWEsbURBQW1ELFNBQVMsS0FBSyxnQkFBZ0IsSUFBSSxVQUFVLFNBQVMsWUFBWSxvQ0FBb0MscU1BQXFNLCtCQUErQixhQUFhLHVHQUF1RyxTQUFTLEdBQUcseUJBQXlCLGNBQWMsU0FBUyxzQkFBc0IsU0FBUyx3QkFBd0IsZUFBZSxrQkFBa0IsMEJBQTBCLDhDQUE4QyxJQUFJLHNCQUFzQixnQ0FBZ0MsbUJBQW1CLDhDQUE4QyxJQUFJLHNCQUFzQixpQ0FBaUMsbUJBQW1CLDhDQUE4QyxJQUFJLHNCQUFzQiw4QkFBOEIsb0JBQW9CLDhDQUE4QyxJQUFJLHNCQUFzQiw4QkFBOEIscUJBQXFCLDhEQUE4RCxHQUFHLDJKQUEySixnQkFBZ0IsOEVBQThFLHFCQUFxQixFQUFFLDRCQUE0QiwrQ0FBK0MsS0FBSyxxQ0FBcUMsaUJBQWlCLHdCQUF3Qiw0Q0FBNEMseUJBQXlCLGtCQUFrQixRQUFRLDRIQUE0SCxHQUFHLCtDQUErQyxnQkFBZ0IscUJBQXFCLGdCQUFnQixlQUFlLDZCQUE2Qix1Q0FBdUMsV0FBVyxzQkFBc0IsYUFBYSw0REFBNEQsY0FBYyxhQUFhLE9BQU8sMEJBQTBCLGdCQUFnQixrQ0FBa0MsV0FBVyw0RUFBNEUscUJBQXFCLHlFQUF5RSxXQUFXLEtBQUssV0FBVyx1QkFBdUIsMkJBQTJCLHFCQUFxQix1RkFBdUYsaUJBQWlCLHVCQUF1Qiw2REFBNkQsWUFBWSxXQUFXLEtBQUssMEdBQTBHLG1DQUFtQyxxRUFBcUUsb0dBQW9HLEtBQUssNEhBQTRILGVBQWUsVUFBVSxVQUFVLGNBQWMsK0JBQStCLHNCQUFzQixjQUFjLHdDQUF3QyxjQUFjLDZCQUE2QixrQkFBa0Isa0JBQWtCLDhIQUE4SCxXQUFXLEtBQUssV0FBVyw4QkFBOEIsS0FBSyxxRkFBcUYsb0dBQW9HLHdEQUF3RCxLQUFLLHNFQUFzRSw4REFBOEQsMEJBQTBCLGtCQUFrQix5Q0FBeUMsZUFBZSxrQ0FBa0MsaUJBQWlCLFdBQVcsWUFBWSxxRUFBcUUsRUFBRSxTQUFTLHVDQUF1QyxpQkFBaUIsV0FBVywrQkFBK0IsOENBQThDLHdCQUF3QixxQkFBcUIsUUFBUSxzQkFBc0IsU0FBUyxxQkFBcUIsd0RBQXdELG1CQUFtQix5Q0FBeUMsT0FBTyxzSEFBc0gsa0JBQWtCLGFBQWEsOEJBQThCLGtCQUFrQiw4QkFBOEIsbUJBQW1CLDBCQUEwQiw2Q0FBNkMseUJBQXlCLG9DQUFvQyx1QkFBdUIsdUJBQXVCLGlFQUFpRSwwQkFBMEIsNEZBQTRGLDRCQUE0Qiw4RkFBOEYsK0JBQStCLHVEQUF1RCw4QkFBOEIsMEJBQTBCLCtCQUErQiw0QkFBNEIseUJBQXlCLGtFQUFrRSxpRUFBaUUsdUJBQXVCLDZDQUE2Qyx5Q0FBeUMsMkRBQTJELDBDQUEwQyxZQUFZLHlCQUF5Qiw4Q0FBOEMsSUFBSSxzQkFBc0IsZUFBZSxxRUFBcUUsWUFBWSxxQ0FBcUMsMkNBQTJDLCtDQUErQywrQkFBK0IsNENBQTRDLElBQUksd0NBQXdDLDBCQUEwQixtQkFBbUIsMkNBQTJDLEdBQUcscUJBQXFCLGFBQWEsb0JBQW9CLGtCQUFrQiw0QkFBNEIsZUFBZSxPQUFPLGFBQWEsa0NBQWtDLFFBQVEsd0JBQXdCLE9BQU8sOENBQThDLG9EQUFvRCwwQkFBMEIsZUFBZSx3QkFBd0IsbURBQW1ELG1CQUFtQixTQUFTLHFCQUFxQiwrQkFBK0IsaUJBQWlCLGtDQUFrQyxRQUFRLHdCQUF3QixPQUFPLDhDQUE4QyxVQUFVLDREQUE0RCxNQUFNLG1FQUFtRSx3QkFBd0Isc0JBQXNCLGVBQWUsSUFBSSxjQUFjLHNCQUFzQiwyQ0FBMkMsb0JBQW9CLG9CQUFvQix1QkFBdUIsU0FBUyxtQkFBbUIsaUJBQWlCLHFCQUFxQixtQkFBbUIsaUJBQWlCLDBDQUEwQyxrRUFBa0UsaUJBQWlCLGdGQUFnRixPQUFPLDZCQUE2Qix1QkFBdUIsRUFBRSwyQkFBMkIsZ0NBQWdDLEVBQUUsOEJBQThCLHVDQUF1QyxFQUFFLDBCQUEwQixzQkFBc0IsS0FBSyxvQkFBb0IsSUFBSSxpQkFBaUIsNERBQTRELGFBQWEsTUFBTSxxQkFBcUIsK0VBQStFLGVBQWUsRUFBRSxzQkFBc0Isd0JBQXdCLEdBQUcsR0FBRyxxREFBcUQsV0FBVyxTQUFTLDBCQUEwQixRQUFRLDRDQUE0QyxnQ0FBZ0MsZ0NBQWdDLEdBQUcsZ0JBQWdCLGNBQWMsOEJBQThCLGVBQWUsc0RBQXNELGVBQWUsd0JBQXdCLDhEQUE4RCxLQUFLLHdCQUF3QixpQkFBaUIsOEJBQThCLGtCQUFrQixzQ0FBc0MscUJBQXFCLGlEQUFpRCw4QkFBOEIsZUFBZSwwQ0FBMEMsbUJBQW1CLHNCQUFzQixJQUFJLEVBQUUsZUFBZSw0RUFBNEUsSUFBSSxrQ0FBa0MsNEJBQTRCLDJDQUEyQyxzREFBc0QsK0JBQStCLGtCQUFrQixzREFBc0QseUJBQXlCLGdDQUFnQywwRUFBMEUsa0JBQWtCLE9BQU8seUNBQXlDLGFBQWEsd0JBQXdCLHlDQUF5QyxZQUFZLHNCQUFzQiwrQkFBK0IsWUFBWSx5SkFBeUosR0FBRyxrQkFBa0Isa0ZBQWtGLGdCQUFnQix3QkFBd0IsYUFBYSw4Q0FBOEMsSUFBSSxzQkFBc0Isc0NBQXNDLG1CQUFtQiwwQkFBMEIsY0FBYyxtQkFBbUIsMkJBQTJCLEdBQUcsVUFBVSxzQkFBc0IsYUFBYSxNQUFNLHlTQUF5UyxPQUFPLGtCQUFrQix5QkFBeUIsV0FBVyxzREFBc0QsMEJBQTBCLDBFQUEwRSxTQUFTLE1BQU0sRUFBRSxFQUFFLEdBQUcsa0JBQWtCLDZEQUE2RCxJQUFJLHdCQUF3QiwyQkFBMkIsd0JBQXdCLG1EQUFtRCxxQkFBcUIscUNBQXFDLEdBQUcsd0JBQXdCLHVEQUF1RCxHQUFHLHlCQUF5QixvQkFBb0IsV0FBVyw4QkFBOEIsWUFBWSxlQUFlLG1CQUFtQix5REFBeUQsU0FBUyx1Q0FBdUMsaUJBQWlCLHNEQUFzRCxHQUFHLGtCQUFrQixjQUFjLDBDQUEwQyxLQUFLLDZCQUE2QiwwQkFBMEIsWUFBWSxJQUFJLHlDQUF5QywwQ0FBMEMsZ0JBQWdCLGdDQUFnQyx3QkFBd0IsR0FBRyxHQUFHLGlCQUFpQixjQUFjLE1BQU0sMkNBQTJDLE9BQU8sa0JBQWtCLDZCQUE2QixxQkFBcUIsbUJBQW1CLEdBQUcsb0JBQW9CLG1CQUFtQixxQkFBcUIsMEJBQTBCLDZCQUE2Qix5QkFBeUIsNEJBQTRCLG1CQUFtQix3Q0FBd0Msc0JBQXNCLHdCQUF3Qix3QkFBd0IsVUFBVSxpQkFBaUIsSUFBSSx5QkFBeUIsR0FBRyxpQkFBaUIsZ0NBQWdDLGVBQWUscUJBQXFCLGVBQWUsY0FBYyw2REFBNkQsZUFBZSxXQUFXLHFEQUFxRCxlQUFlLFdBQVcsOEhBQThILGVBQWUsV0FBVyx3Q0FBd0MsZUFBZSxXQUFXLG1FQUFtRSxnQkFBZ0IsaURBQWlELGdCQUFnQixtRUFBbUUsZ0JBQWdCLGFBQWEsOEJBQThCLGdCQUFnQixjQUFjLE1BQU0sbUVBQW1FLE9BQU8sa0JBQWtCLHlCQUF5Qiw0T0FBNE8sdUJBQXVCLDZEQUE2RCx5QkFBeUIsMEJBQTBCLG9CQUFvQixFQUFFLDZCQUE2QixXQUFXLG9DQUFvQyxzQkFBc0IsR0FBRyxHQUFHLG1CQUFtQixnQkFBZ0IsTUFBTSw4QkFBOEIsc0RBQXNELElBQUksd0JBQXdCLGdJQUFnSSxvR0FBb0csU0FBUyw2QkFBNkIsZ0JBQWdCLHlCQUF5QixjQUFjLG1HQUFtRyxnQ0FBZ0MsRUFBRSw4QkFBOEIsaURBQWlELGtCQUFrQiwyQkFBMkIsVUFBVSxrREFBa0QsTUFBTSwwQ0FBMEMsY0FBYyx5QkFBeUIsV0FBVyxpQkFBaUIsRUFBRSxpQ0FBaUMsOEJBQThCLCtCQUErQixhQUFhLCtCQUErQixFQUFFLG9DQUFvQyxjQUFjLHVFQUF1RSx5SkFBeUosaUJBQWlCLG1CQUFtQiwwREFBMEQsWUFBWSxrSEFBa0gsK0RBQStELFNBQVMscUJBQXFCLFdBQVcsbUNBQW1DLGNBQWMsdUJBQXVCLDZCQUE2Qiw4QkFBOEIsMkJBQTJCLDBDQUEwQywwQ0FBMEMsMENBQTBDLHVCQUF1QixHQUFHLHlCQUF5Qiw4RUFBOEUsbUJBQW1CLGVBQWUsNERBQTRELGdFQUFnRSxNQUFNLG1EQUFtRCwyRkFBMkYsTUFBTSxpQ0FBaUMsb0JBQW9CLDZCQUE2QixTQUFTLHFCQUFxQixRQUFRLHNIQUFzSCxpQkFBaUIsV0FBVyxhQUFhLFFBQVEscUNBQXFDLHFCQUFxQixrQkFBa0IsR0FBRyxpQkFBaUIsY0FBYyxtRkFBbUYsa0JBQWtCLDJCQUEyQiwrQkFBK0Isc0JBQXNCLDRCQUE0QixJQUFJLGlCQUFpQixPQUFPLGdCQUFnQixPQUFPLG9CQUFvQiwrREFBK0QscURBQXFELCtEQUErRCxHQUFHLEdBQUcsR0FBRyxlQUFlLGdGQUFnRixHQUFHLGdEQUFnRCxTQUFTLDBCQUEwQixzQkFBc0IsaURBQWlELElBQUksa0JBQWtCLGNBQWMsT0FBTyxvQkFBb0IsbUJBQW1CLE9BQU8sb0JBQW9CLGFBQWEsMkRBQTJELFNBQVMsY0FBYyx5REFBeUQsMkRBQTJELEdBQUcsR0FBRyxpQkFBaUIsMEJBQTBCLG9EQUFvRCxnRUFBZ0UsZ0VBQWdFLGtGQUFrRiwrREFBK0QsZ0VBQWdFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLGVBQWUsb0RBQW9ELEdBQUcsa0JBQWtCLHlCQUF5QixpQkFBaUIsOERBQThELGdFQUFnRSx3REFBd0QsZ0VBQWdFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyx3Q0FBd0MsR0FBRyxlQUFlLGtFQUFrRSxHQUFHLHNCQUFzQixnRUFBZ0UsNEVBQTRFLFlBQVksc0JBQXNCLG9FQUFvRSxHQUFHLEdBQUcsR0FBRyxlQUFlLGtFQUFrRSxHQUFHLGdDQUFnQyxHQUFHLGdDQUFnQyxHQUFHLGlCQUFpQixzREFBc0QsR0FBRyxHQUFHLCtCQUErQixlQUFlLGdHQUFnRyxvRUFBb0UsR0FBRyxpREFBaUQsU0FBUywwQkFBMEIsc0JBQXNCLElBQUksMERBQTBELCtDQUErQyxHQUFHLFNBQVMsMEJBQTBCLHVCQUF1QixJQUFJLDJEQUEyRCxpREFBaUQsR0FBRyxTQUFTLDBCQUEwQix5QkFBeUIsSUFBSSwyREFBMkQsbURBQW1ELEdBQUcsU0FBUywwQkFBMEIscUJBQXFCLElBQUksZ0ZBQWdGLFNBQVMsMEJBQTBCLHNCQUFzQixJQUFJLHlGQUF5RixTQUFTLDBCQUEwQixpQkFBaUIsd0VBQXdFLHFCQUFxQixJQUFJLHFEQUFxRCwyQ0FBMkMsR0FBRyxTQUFTLDBCQUEwQixPQUFPLCtCQUErQixjQUFjLGlCQUFpQixVQUFVLEVBQUUsNkJBQTZCLGlDQUFpQyxFQUFFLDZCQUE2Qix3Q0FBd0Msc0JBQXNCLElBQUksRUFBRSxnQ0FBZ0Msd0NBQXdDLGlDQUFpQyxJQUFJLEtBQUssaUJBQWlCLGNBQWMsV0FBVyxrSUFBa0ksaUNBQWlDLG1DQUFtQyxhQUFhLElBQUksaUNBQWlDLFdBQVcsbUJBQW1CLDBFQUEwRSwrQ0FBK0MsR0FBRyxHQUFHLHNNQUFzTSxXQUFXLEdBQUcseUJBQXlCLGdDQUFnQyxnQ0FBZ0MsWUFBWSxFQUFFLFFBQVEseUNBQXlDLDZDQUE2QyxzQkFBc0IsYUFBYSxpTEFBaUwsa0JBQWtCLDJCQUEyQixtQkFBbUIsdU1BQXVNLG9CQUFvQixtQkFBbUIsMFNBQTBTLGtJQUFrSSxrQkFBa0IsdUxBQXVMLG1EQUFtRCx3QkFBd0IsMEVBQTBFLHdHQUF3RyxzRkFBc0Ysb0NBQW9DLGdLQUFnSyxnQkFBZ0IsR0FBRyxnQkFBZ0IsaURBQWlELGlFQUFpRSxzQkFBc0IsMEVBQTBFLHFCQUFxQiwwQkFBMEIsc0JBQXNCLE1BQU0sb0VBQW9FLHNSQUFzUixvQkFBb0IsSUFBSSxXQUFXLHFFQUFxRSxhQUFhLHFFQUFxRSxHQUFHLGlCQUFpQiwwQkFBMEIsMkJBQTJCLFFBQVEsRUFBRSw2Q0FBNkMsb0JBQW9CLHFCQUFxQixJQUFJLEdBQUcsK0JBQStCLEdBQUcsU0FBUywwQkFBMEIsd0JBQXdCLElBQUksaUJBQWlCLGFBQWEsOERBQThELG9CQUFvQiwyQkFBMkIsZUFBZSxFQUFFLDZDQUE2Qyx1Q0FBdUMsb0JBQW9CLE1BQU0sR0FBRyxjQUFjLDhDQUE4QyxHQUFHLHdDQUF3QyxHQUFHLEdBQUcsUUFBUSxtQkFBbUIsT0FBTyxrQ0FBa0MsdUNBQXVDLGVBQWUsd0dBQXdHLGtGQUFrRixHQUFHLEdBQUcsZ0RBQWdELFNBQVMsMEJBQTBCLDhCQUE4Qiw4QkFBOEIsc0RBQXNELElBQUksd0JBQXdCLDRDQUE0Qyw0RkFBNEYsd0JBQXdCLFdBQVcsMkhBQTJILGtCQUFrQixlQUFlLGdCQUFnQiw4TUFBOE0sZ0JBQWdCLDBOQUEwTixpQkFBaUIsdUJBQXVCLE1BQU0sMEJBQTBCLGdKQUFnSixrQkFBa0IsYUFBYSxpQkFBaUIsZ0JBQWdCLGdKQUFnSixpQkFBaUIseUNBQXlDLGlCQUFpQixtQkFBbUIsd0JBQXdCLGdCQUFnQixnRUFBZ0UsZ0JBQWdCLDRCQUE0QixtR0FBbUcsT0FBTyxxQkFBcUIsUUFBUSxtQkFBbUIsaUNBQWlDLGtDQUFrQyxPQUFPLDBCQUEwQixlQUFlLEVBQUUsNkJBQTZCLGVBQWUsS0FBSyxJQUFJO0FBQ2x5NEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUV3Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEpBQTBKOztBQUUxSixpREFBaUQ7QUFDakQsQ0FBQztBQUNEO0FBQ0E7QUFDQSx3T0FBd087QUFDeE8sQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsY0FBYyxrQkFBa0IsWUFBWTs7QUFFekY7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUNBQXFDOztBQUVyQztBQUNBLE1BQU07QUFDTixJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0I7QUFDL0IsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsOEhBQThIOztBQUU5SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsZUFBZSxvREFBUztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcscURBQU07QUFDakI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsd0VBQXdFLHVEQUFZO0FBQ3BGLFdBQVcscURBQU07QUFDakIsSUFBSTtBQUNKO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMsd0RBQVM7QUFDdkIsbUJBQW1CLHVEQUFZO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLHFEQUFNO0FBQ2YsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBLHNJQUFzSSwyREFBWSx3REFBd0Q7QUFDMU07QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLDhEQUE4RDtBQUM5RDtBQUNBOztBQUVBLGVBQWUsb0RBQVMscUNBQXFDLCtEQUFvQjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7O0FBRWY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxFQUFFLGlFQUFrQixLQUFLOzs7QUFHekI7QUFDQTtBQUNBLDRCQUE0QiwwREFBZTtBQUMzQyx3QkFBd0IsMERBQWU7O0FBRXZDO0FBQ0Esb0JBQW9CLCtEQUFvQjtBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsNkRBQWM7QUFDaEU7QUFDQTtBQUNBLGdCQUFnQixvRUFBeUI7O0FBRXpDO0FBQ0E7QUFDQSwrQkFBK0Isd0RBQWE7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7OztBQUdWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVFQUF1RTtBQUN2RSxJQUFJO0FBQ0o7QUFDQTs7QUFFQSxFQUFFLHVEQUFZLHFCQUFxQjs7QUFFbkMsaUJBQWlCOztBQUVqQjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9DQUFvQzs7O0FBR3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG9EQUFTO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixZQUFZLHlRQUF5UTtBQUNyUixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsNkJBQTZCO0FBQzdCO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUEsMkZBQTJGLGtEQUFPLE1BQU0saURBQU07QUFDOUcsQ0FBQztBQUNEO0FBQ0EsOEJBQThCLHdEQUFTO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBEQUEwRDs7QUFFMUQ7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7O0FBRXRCOztBQUVBLHVDQUF1Qzs7QUFFdkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDs7QUFFbEQ7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esa0NBQWtDLGtEQUFPOztBQUV6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlHQUF5Rzs7QUFFekc7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1COztBQUVuQixtQkFBbUI7O0FBRW5CLG1CQUFtQjs7QUFFbkIsbUJBQW1COztBQUVuQjtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVIsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7OztBQUdSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROzs7QUFHUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxxREFBTTtBQUNyQixlQUFlLHFEQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIscURBQU07QUFDdkIsaUJBQWlCLHFEQUFNO0FBQ3ZCLG1CQUFtQixxREFBTTtBQUN6QixvQkFBb0IscURBQU07QUFDMUIsb0JBQW9CLHFEQUFNO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsMERBQWU7QUFDakM7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLGFBQWEsc0RBQU87QUFDcEIsU0FBUyxxREFBTTtBQUNmLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RTs7O0FBRzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVUscURBQU07QUFDaEIsVUFBVSxxREFBTTtBQUNoQixVQUFVLHFEQUFNO0FBQ2hCLFVBQVUscURBQU07QUFDaEIsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUyxxREFBTTtBQUNmLFNBQVMscURBQU07QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHFEQUFNO0FBQ2YsU0FBUyxxREFBTTtBQUNmOztBQUVBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQsQ0FBQztBQUNEO0FBQ0E7QUFDQSxpQkFBaUIsd0RBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLG9EQUFTO0FBQ2pDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixzREFBTztBQUN6QixnQkFBZ0Isc0RBQU87QUFDdkI7QUFDQTtBQUNBLHVCQUF1QixvREFBUztBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOzs7QUFHSCwyREFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFVBQVUsbURBQVEsT0FBTywyREFBWTtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQiw2REFBYztBQUNqQzs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOERBQW1COztBQUUzQixhQUFhLHlEQUFjO0FBQzNCO0FBQ0Esc0JBQXNCLHNEQUFPO0FBQzdCLG9CQUFvQixzREFBTztBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsVUFBVSx3REFBUyxnRUFBZ0UsNkRBQWM7QUFDakcsVUFBVSxzREFBTyxvQ0FBb0Msd0RBQWEsT0FBTyxzREFBTywwQkFBMEIsMkRBQTJELFNBQVM7O0FBRTlLLGlGQUFpRjtBQUNqRixVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbURBQW1EOztBQUVuRDtBQUNBO0FBQ0E7QUFDQSwyR0FBMkcsa0NBQWtDLDZCQUE2Qjs7QUFFMUs7QUFDQSxnREFBZ0Qsb0RBQVMsOEVBQThFOztBQUV2SSx3Q0FBd0M7QUFDeEM7O0FBRUE7QUFDQSwyQkFBMkIsb0RBQVMsc0RBQXNELDZEQUFjO0FBQ3hHO0FBQ0E7QUFDQSxZQUFZO0FBQ1osZ0VBQWdFOztBQUVoRTtBQUNBO0FBQ0EsY0FBYztBQUNkLGlFQUFpRTs7QUFFakU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFlBQVk7QUFDWix5RUFBeUUsNkRBQWM7O0FBRXZGO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7O0FBRWxDLG9CQUFvQixzREFBTyxvQkFBb0Isd0RBQWEsR0FBRyx3REFBYTtBQUM1RTtBQUNBLHlCQUF5QixvREFBUyx3RUFBd0UsNkRBQWM7QUFDeEg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osWUFBWSw2REFBYzs7QUFFMUI7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsd0VBQXlCO0FBQzVDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4UEFBOFAscUdBQXFHLDJEQUFZLHVGQUF1Rix5REFBVTtBQUNoZCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFzQjs7QUFFdEI7QUFDQSxZQUFZLDJEQUFZO0FBQ3hCO0FBQ0EsR0FBRzs7QUFFSCxFQUFFLDJEQUFZO0FBQ2QsSUFBSSx3REFBYTtBQUNqQjtBQUNBLEdBQUc7O0FBRUg7O0FBRUEsRUFBRSwyREFBWTtBQUNkO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCwyREFBWTtBQUNaLEVBQUUsd0RBQWE7QUFDZixDQUFDOztBQUVELDhEQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbjRDbkIsd0NBQXdDLHVCQUF1Qix5RkFBeUY7O0FBRXhKLGdEQUFnRCwwREFBMEQsMkNBQTJDOztBQUVySjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDOEQ7O0FBRTlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLDBKQUEwSjs7QUFFMUosaURBQWlEO0FBQ2pELENBQUM7QUFDRDtBQUNBO0FBQ0EsMEJBQTBCLHNEQUFRO0FBQ2xDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHO0FBQ04sQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0Esc0ZBQXNGO0FBQ3RGO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsNERBQTREO0FBQzVELENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLCtHQUErRztBQUMvRyxDQUFDO0FBQ0Q7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBLGdIQUFnSCwwQkFBMEIsSUFBSSx1QkFBdUI7QUFDcks7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsc0NBQXNDOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0QsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0xBQWdMO0FBQ2hMLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxpRUFBZSx5QkFBeUIsaUVBQWU7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdFQUFnRSxhQUFhO0FBQzdFLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQSxRQUFRO0FBQ1Isb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBOztBQUVBLGtCQUFrQjs7QUFFbEI7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0RBQXdEOztBQUV4RDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLDBEQUEwRDtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FB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Q0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdHQUFnRzs7O0FBR2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFFQUFxRTs7QUFFckU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FOztBQUVuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0RBQXdEOztBQUV4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBLFFBQVE7QUFDUixrREFBa0Q7O0FBRWxEO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhFQUE4RTs7QUFFOUU7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnR0FBZ0c7OztBQUdoRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0EsaURBQWlEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFF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O0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSwySUFBMkk7QUFDM0k7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxlQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsbURBQW1EO0FBQ25ELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbURBQW1EOztBQUVuRDtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDO0FBQ2pDO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlFQUFpRTs7QUFFakUsc0VBQXNFOztBQUV0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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O0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkZBQTJGO0FBQzNGLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJOztBQUVKLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxvRUFBb0U7QUFDcEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUMsMkJBQTJCO0FBQzNCOztBQUVBLHlEQUF5RDtBQUN6RDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd01BQXdNO0FBQ3hNOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDBHQUEwRztBQUMxRyxzR0FBc0c7QUFDdEc7QUFDQTs7QUFFQTtBQUNBLGdFQUFnRTs7QUFFaEU7O0FBRUEsbUJBQW1COzs7QUFHbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkVBQTZFOztBQUU3RSxrQ0FBa0M7QUFDbEMsUUFBUTtBQUNSOztBQUVBLDhCQUE4Qjs7QUFFOUIsK01BQStNO0FBQy9NO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQzs7QUFFMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEZBQTRGOztBQUU1RjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdFQUFnRTtBQUNoRTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCOztBQUU1QiwrQ0FBK0M7O0FBRS9DOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEI7O0FBRTFCO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlOztBQUVmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DOztBQUVuQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBLDZEQUE2RDs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxRUFBcUU7O0FBRXJFOztBQUVBO0FBQ0EsY0FBYztBQUNkOztBQUVBLGlCQUFpQjs7QUFFakI7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrRUFBa0U7O0FBRWxFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEM7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCw2TkFBNk47O0FBRTlROztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sY0FBYyxtRkFBbUYsSUFBSSxVQUFVLFFBQVE7OztBQUc5SCxzRkFBc0Y7O0FBRXRGO0FBQ0EseURBQXlEOztBQUV6RDtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFVBQVU7QUFDVixnREFBZ0Q7QUFDaEQsYUFBYTtBQUNiO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUVBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUiwyQ0FBMkM7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBLG9YQUFvWCx5Q0FBeUM7QUFDN1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5SEFBeUgsOEJBQThCOztBQUV2SixTQUFTO0FBQ1Qsd0RBQXdELG1EQUFtRCxPQUFPOztBQUVsSDs7QUFFQSxxREFBcUQ7O0FBRXJEOztBQUVBO0FBQ0EsZ0RBQWdEOztBQUVoRCxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxnQkFBZ0Isb0JBQW9CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRTs7QUFFckU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsZ0ZBQWdGOzs7QUFHaEY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMkM7QUFDM0M7O0FBRUE7QUFDQSw4REFBOEQ7O0FBRTlELDREQUE0RDtBQUM1RCxDQUFDO0FBQ0Q7QUFDQSxvRUFBb0U7QUFDcEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtZUFBbWUsTUFBTTtBQUN6ZSxpQ0FBaUM7O0FBRWpDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7O0FBRXBELDJDQUEyQztBQUMzQztBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNELHNDQUFzQyxPQUFPLE9BQU8sR0FBRyxRQUFRLFNBQVMsTUFBTSxJQUFJLHdCQUF3QixrSEFBa0gsTUFBTSxJQUFJLFFBQVEsSUFBSSxHQUFHO0FBQ3JQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR087QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7O0FBRTNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qzs7QUFFeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9FQUFvRTtBQUNwRSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUEsd0JBQXdCLGNBQWM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOENBQThDO0FBQzlDO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTiwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUM7O0FBRWpDLDBDQUEwQzs7QUFFMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxREFBcUQ7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJFQUEyRTs7QUFFM0U7QUFDQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkI7O0FBRTNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCOztBQUV2QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3RkFBd0Y7O0FBRXhGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLCtIQUErSDs7QUFFL0g7QUFDQSw0SEFBNEgsWUFBWTtBQUN4STs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDLHVHQUF1RyxlQUFlLEdBQUc7QUFDekgsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSx3RUFBd0U7QUFDeEU7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxvRUFBb0U7QUFDcEUsTUFBTTs7O0FBR047O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0SUFBNEk7O0FBRTVJLGlJQUFpSTs7QUFFakk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0RBQStEOztBQUUvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsR0FBRztBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLDZHQUE2Rzs7QUFFN0c7QUFDQTs7QUFFQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7O0FBRVo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOzs7QUFHSTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUNBQXVDOztBQUV2QztBQUNBO0FBQ0Esc0JBQXNCOztBQUV0QjtBQUNBOztBQUVBO0FBQ0EsQ0FBQyxJQUFJOztBQUVMO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUM7QUFDdkMsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsOERBQThEOztBQUU5RCw0R0FBNEc7O0FBRTVHO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyxJQUFJO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUMyRSxDQUFDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25hQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHVCQUF1Qix1QkFBdUI7QUFDOUMsd0JBQXdCLHVDQUF1QztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFD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V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjJCO0FBQ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFwaGljYWxseS1zcGVha2luZy8uL25vZGVfbW9kdWxlcy9AYmFyYmEvY29yZS9kaXN0L2JhcmJhLnVtZC5qcyIsIndlYnBhY2s6Ly9ncmFwaGljYWxseS1zcGVha2luZy8uL25vZGVfbW9kdWxlcy9nc2FwL0NTU1BsdWdpbi5qcyIsIndlYnBhY2s6Ly9ncmFwaGljYWxseS1zcGVha2luZy8uL25vZGVfbW9kdWxlcy9nc2FwL0RyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly9ncmFwaGljYWxseS1zcGVha2luZy8uL25vZGVfbW9kdWxlcy9nc2FwL2dzYXAtY29yZS5qcyIsIndlYnBhY2s6Ly9ncmFwaGljYWxseS1zcGVha2luZy8uL25vZGVfbW9kdWxlcy9nc2FwL2luZGV4LmpzIiwid2VicGFjazovL2dyYXBoaWNhbGx5LXNwZWFraW5nLy4vbm9kZV9tb2R1bGVzL2dzYXAvdXRpbHMvbWF0cml4LmpzIiwid2VicGFjazovL2dyYXBoaWNhbGx5LXNwZWFraW5nLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vZ3JhcGhpY2FsbHktc3BlYWtpbmcvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2Nsb2NrLmpzIiwid2VicGFjazovL2dyYXBoaWNhbGx5LXNwZWFraW5nLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9ncmFwaGljYWxseVNwZWFraW5nUGxheWVyLmpzIiwid2VicGFjazovL2dyYXBoaWNhbGx5LXNwZWFraW5nLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9tYXJxdWVlLmpzIiwid2VicGFjazovL2dyYXBoaWNhbGx5LXNwZWFraW5nLy4vc3JjL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly9ncmFwaGljYWxseS1zcGVha2luZy8uL3NyYy9zY3JpcHRzL21vZHVsZXMvb2JqZWN0U2NhdHRlci5qcyIsIndlYnBhY2s6Ly9ncmFwaGljYWxseS1zcGVha2luZy8uL3NyYy9zY3JpcHRzL21vZHVsZXMvcmFuZG9tQXJyYXkuanMiLCJ3ZWJwYWNrOi8vZ3JhcGhpY2FsbHktc3BlYWtpbmcvLi9zcmMvc2NyaXB0cy9tb2R1bGVzL3JhbmRvbUZyb21SYW5nZS5qcyIsIndlYnBhY2s6Ly9ncmFwaGljYWxseS1zcGVha2luZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ncmFwaGljYWxseS1zcGVha2luZy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ncmFwaGljYWxseS1zcGVha2luZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ3JhcGhpY2FsbHktc3BlYWtpbmcvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ncmFwaGljYWxseS1zcGVha2luZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dyYXBoaWNhbGx5LXNwZWFraW5nLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbih0LG4pe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPW4oKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKG4pOih0PXR8fHNlbGYpLmJhcmJhPW4oKX0odGhpcywoZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsbil7Zm9yKHZhciByPTA7cjxuLmxlbmd0aDtyKyspe3ZhciBlPW5bcl07ZS5lbnVtZXJhYmxlPWUuZW51bWVyYWJsZXx8ITEsZS5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gZSYmKGUud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUua2V5LGUpfX1mdW5jdGlvbiBuKG4scixlKXtyZXR1cm4gciYmdChuLnByb3RvdHlwZSxyKSxlJiZ0KG4sZSksbn1mdW5jdGlvbiByKCl7cmV0dXJuKHI9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyl7dmFyIHI9YXJndW1lbnRzW25dO2Zvcih2YXIgZSBpbiByKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyLGUpJiYodFtlXT1yW2VdKX1yZXR1cm4gdH0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBlKHQsbil7dC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShuLnByb3RvdHlwZSksdC5wcm90b3R5cGUuY29uc3RydWN0b3I9dCx0Ll9fcHJvdG9fXz1ufWZ1bmN0aW9uIGkodCl7cmV0dXJuKGk9T2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5nZXRQcm90b3R5cGVPZjpmdW5jdGlvbih0KXtyZXR1cm4gdC5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZih0KX0pKHQpfWZ1bmN0aW9uIG8odCxuKXtyZXR1cm4obz1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fGZ1bmN0aW9uKHQsbil7cmV0dXJuIHQuX19wcm90b19fPW4sdH0pKHQsbil9ZnVuY3Rpb24gdSh0LG4scil7cmV0dXJuKHU9ZnVuY3Rpb24oKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgUmVmbGVjdHx8IVJlZmxlY3QuY29uc3RydWN0KXJldHVybiExO2lmKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pcmV0dXJuITE7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgUHJveHkpcmV0dXJuITA7dHJ5e3JldHVybiBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsW10sKGZ1bmN0aW9uKCl7fSkpKSwhMH1jYXRjaCh0KXtyZXR1cm4hMX19KCk/UmVmbGVjdC5jb25zdHJ1Y3Q6ZnVuY3Rpb24odCxuLHIpe3ZhciBlPVtudWxsXTtlLnB1c2guYXBwbHkoZSxuKTt2YXIgaT1uZXcoRnVuY3Rpb24uYmluZC5hcHBseSh0LGUpKTtyZXR1cm4gciYmbyhpLHIucHJvdG90eXBlKSxpfSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfWZ1bmN0aW9uIGYodCl7dmFyIG49XCJmdW5jdGlvblwiPT10eXBlb2YgTWFwP25ldyBNYXA6dm9pZCAwO3JldHVybihmPWZ1bmN0aW9uKHQpe2lmKG51bGw9PT10fHwtMT09PUZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwodCkuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIikpcmV0dXJuIHQ7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7aWYodm9pZCAwIT09bil7aWYobi5oYXModCkpcmV0dXJuIG4uZ2V0KHQpO24uc2V0KHQscil9ZnVuY3Rpb24gcigpe3JldHVybiB1KHQsYXJndW1lbnRzLGkodGhpcykuY29uc3RydWN0b3IpfXJldHVybiByLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHQucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6cixlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSxvKHIsdCl9KSh0KX1mdW5jdGlvbiBzKHQsbil7dHJ5e3ZhciByPXQoKX1jYXRjaCh0KXtyZXR1cm4gbih0KX1yZXR1cm4gciYmci50aGVuP3IudGhlbih2b2lkIDAsbik6cn1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiYoU3ltYm9sLml0ZXJhdG9yfHwoU3ltYm9sLml0ZXJhdG9yPVN5bWJvbChcIlN5bWJvbC5pdGVyYXRvclwiKSkpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJihTeW1ib2wuYXN5bmNJdGVyYXRvcnx8KFN5bWJvbC5hc3luY0l0ZXJhdG9yPVN5bWJvbChcIlN5bWJvbC5hc3luY0l0ZXJhdG9yXCIpKSk7dmFyIGMsYT1cIjIuOS43XCIsaD1mdW5jdGlvbigpe307IWZ1bmN0aW9uKHQpe3RbdC5vZmY9MF09XCJvZmZcIix0W3QuZXJyb3I9MV09XCJlcnJvclwiLHRbdC53YXJuaW5nPTJdPVwid2FybmluZ1wiLHRbdC5pbmZvPTNdPVwiaW5mb1wiLHRbdC5kZWJ1Zz00XT1cImRlYnVnXCJ9KGN8fChjPXt9KSk7dmFyIHY9Yy5vZmYsbD1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7dGhpcy50PXR9dC5nZXRMZXZlbD1mdW5jdGlvbigpe3JldHVybiB2fSx0LnNldExldmVsPWZ1bmN0aW9uKHQpe3JldHVybiB2PWNbdF19O3ZhciBuPXQucHJvdG90eXBlO3JldHVybiBuLmVycm9yPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodCkscj0wO3I8dDtyKyspbltyXT1hcmd1bWVudHNbcl07dGhpcy5pKGNvbnNvbGUuZXJyb3IsYy5lcnJvcixuKX0sbi53YXJuPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodCkscj0wO3I8dDtyKyspbltyXT1hcmd1bWVudHNbcl07dGhpcy5pKGNvbnNvbGUud2FybixjLndhcm5pbmcsbil9LG4uaW5mbz1mdW5jdGlvbigpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQpLHI9MDtyPHQ7cisrKW5bcl09YXJndW1lbnRzW3JdO3RoaXMuaShjb25zb2xlLmluZm8sYy5pbmZvLG4pfSxuLmRlYnVnPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodCkscj0wO3I8dDtyKyspbltyXT1hcmd1bWVudHNbcl07dGhpcy5pKGNvbnNvbGUubG9nLGMuZGVidWcsbil9LG4uaT1mdW5jdGlvbihuLHIsZSl7cjw9dC5nZXRMZXZlbCgpJiZuLmFwcGx5KGNvbnNvbGUsW1wiW1wiK3RoaXMudCtcIl0gXCJdLmNvbmNhdChlKSl9LHR9KCksZD1PLG09RSxwPWcsdz14LGI9VCx5PVwiL1wiLFA9bmV3IFJlZ0V4cChbXCIoXFxcXFxcXFwuKVwiLFwiKD86XFxcXDooXFxcXHcrKSg/OlxcXFwoKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKCldKSspXFxcXCkpP3xcXFxcKCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpXSkrKVxcXFwpKShbKyo/XSk/XCJdLmpvaW4oXCJ8XCIpLFwiZ1wiKTtmdW5jdGlvbiBnKHQsbil7Zm9yKHZhciByLGU9W10saT0wLG89MCx1PVwiXCIsZj1uJiZuLmRlbGltaXRlcnx8eSxzPW4mJm4ud2hpdGVsaXN0fHx2b2lkIDAsYz0hMTtudWxsIT09KHI9UC5leGVjKHQpKTspe3ZhciBhPXJbMF0saD1yWzFdLHY9ci5pbmRleDtpZih1Kz10LnNsaWNlKG8sdiksbz12K2EubGVuZ3RoLGgpdSs9aFsxXSxjPSEwO2Vsc2V7dmFyIGw9XCJcIixkPXJbMl0sbT1yWzNdLHA9cls0XSx3PXJbNV07aWYoIWMmJnUubGVuZ3RoKXt2YXIgYj11Lmxlbmd0aC0xLGc9dVtiXTsoIXN8fHMuaW5kZXhPZihnKT4tMSkmJihsPWcsdT11LnNsaWNlKDAsYikpfXUmJihlLnB1c2godSksdT1cIlwiLGM9ITEpO3ZhciBFPW18fHAseD1sfHxmO2UucHVzaCh7bmFtZTpkfHxpKysscHJlZml4OmwsZGVsaW1pdGVyOngsb3B0aW9uYWw6XCI/XCI9PT13fHxcIipcIj09PXcscmVwZWF0OlwiK1wiPT09d3x8XCIqXCI9PT13LHBhdHRlcm46RT9BKEUpOlwiW15cIitrKHg9PT1mP3g6eCtmKStcIl0rP1wifSl9fXJldHVybih1fHxvPHQubGVuZ3RoKSYmZS5wdXNoKHUrdC5zdWJzdHIobykpLGV9ZnVuY3Rpb24gRSh0LG4pe3JldHVybiBmdW5jdGlvbihyLGUpe3ZhciBpPXQuZXhlYyhyKTtpZighaSlyZXR1cm4hMTtmb3IodmFyIG89aVswXSx1PWkuaW5kZXgsZj17fSxzPWUmJmUuZGVjb2RlfHxkZWNvZGVVUklDb21wb25lbnQsYz0xO2M8aS5sZW5ndGg7YysrKWlmKHZvaWQgMCE9PWlbY10pe3ZhciBhPW5bYy0xXTtmW2EubmFtZV09YS5yZXBlYXQ/aVtjXS5zcGxpdChhLmRlbGltaXRlcikubWFwKChmdW5jdGlvbih0KXtyZXR1cm4gcyh0LGEpfSkpOnMoaVtjXSxhKX1yZXR1cm57cGF0aDpvLGluZGV4OnUscGFyYW1zOmZ9fX1mdW5jdGlvbiB4KHQsbil7Zm9yKHZhciByPW5ldyBBcnJheSh0Lmxlbmd0aCksZT0wO2U8dC5sZW5ndGg7ZSsrKVwib2JqZWN0XCI9PXR5cGVvZiB0W2VdJiYocltlXT1uZXcgUmVnRXhwKFwiXig/OlwiK3RbZV0ucGF0dGVybitcIikkXCIsUihuKSkpO3JldHVybiBmdW5jdGlvbihuLGUpe2Zvcih2YXIgaT1cIlwiLG89ZSYmZS5lbmNvZGV8fGVuY29kZVVSSUNvbXBvbmVudCx1PSFlfHwhMSE9PWUudmFsaWRhdGUsZj0wO2Y8dC5sZW5ndGg7ZisrKXt2YXIgcz10W2ZdO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBzKXt2YXIgYyxhPW4/bltzLm5hbWVdOnZvaWQgMDtpZihBcnJheS5pc0FycmF5KGEpKXtpZighcy5yZXBlYXQpdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInK3MubmFtZSsnXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhcnJheScpO2lmKDA9PT1hLmxlbmd0aCl7aWYocy5vcHRpb25hbCljb250aW51ZTt0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicrcy5uYW1lKydcIiB0byBub3QgYmUgZW1wdHknKX1mb3IodmFyIGg9MDtoPGEubGVuZ3RoO2grKyl7aWYoYz1vKGFbaF0scyksdSYmIXJbZl0udGVzdChjKSl0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhbGwgXCInK3MubmFtZSsnXCIgdG8gbWF0Y2ggXCInK3MucGF0dGVybisnXCInKTtpKz0oMD09PWg/cy5wcmVmaXg6cy5kZWxpbWl0ZXIpK2N9fWVsc2UgaWYoXCJzdHJpbmdcIiE9dHlwZW9mIGEmJlwibnVtYmVyXCIhPXR5cGVvZiBhJiZcImJvb2xlYW5cIiE9dHlwZW9mIGEpe2lmKCFzLm9wdGlvbmFsKXRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJytzLm5hbWUrJ1wiIHRvIGJlICcrKHMucmVwZWF0P1wiYW4gYXJyYXlcIjpcImEgc3RyaW5nXCIpKX1lbHNle2lmKGM9byhTdHJpbmcoYSkscyksdSYmIXJbZl0udGVzdChjKSl0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicrcy5uYW1lKydcIiB0byBtYXRjaCBcIicrcy5wYXR0ZXJuKydcIiwgYnV0IGdvdCBcIicrYysnXCInKTtpKz1zLnByZWZpeCtjfX1lbHNlIGkrPXN9cmV0dXJuIGl9fWZ1bmN0aW9uIGsodCl7cmV0dXJuIHQucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csXCJcXFxcJDFcIil9ZnVuY3Rpb24gQSh0KXtyZXR1cm4gdC5yZXBsYWNlKC8oWz0hOiQvKCldKS9nLFwiXFxcXCQxXCIpfWZ1bmN0aW9uIFIodCl7cmV0dXJuIHQmJnQuc2Vuc2l0aXZlP1wiXCI6XCJpXCJ9ZnVuY3Rpb24gVCh0LG4scil7Zm9yKHZhciBlPShyPXJ8fHt9KS5zdHJpY3QsaT0hMSE9PXIuc3RhcnQsbz0hMSE9PXIuZW5kLHU9ci5kZWxpbWl0ZXJ8fHksZj1bXS5jb25jYXQoci5lbmRzV2l0aHx8W10pLm1hcChrKS5jb25jYXQoXCIkXCIpLmpvaW4oXCJ8XCIpLHM9aT9cIl5cIjpcIlwiLGM9MDtjPHQubGVuZ3RoO2MrKyl7dmFyIGE9dFtjXTtpZihcInN0cmluZ1wiPT10eXBlb2YgYSlzKz1rKGEpO2Vsc2V7dmFyIGg9YS5yZXBlYXQ/XCIoPzpcIithLnBhdHRlcm4rXCIpKD86XCIrayhhLmRlbGltaXRlcikrXCIoPzpcIithLnBhdHRlcm4rXCIpKSpcIjphLnBhdHRlcm47biYmbi5wdXNoKGEpLHMrPWEub3B0aW9uYWw/YS5wcmVmaXg/XCIoPzpcIitrKGEucHJlZml4KStcIihcIitoK1wiKSk/XCI6XCIoXCIraCtcIik/XCI6ayhhLnByZWZpeCkrXCIoXCIraCtcIilcIn19aWYobyllfHwocys9XCIoPzpcIitrKHUpK1wiKT9cIikscys9XCIkXCI9PT1mP1wiJFwiOlwiKD89XCIrZitcIilcIjtlbHNle3ZhciB2PXRbdC5sZW5ndGgtMV0sbD1cInN0cmluZ1wiPT10eXBlb2Ygdj92W3YubGVuZ3RoLTFdPT09dTp2b2lkIDA9PT12O2V8fChzKz1cIig/OlwiK2sodSkrXCIoPz1cIitmK1wiKSk/XCIpLGx8fChzKz1cIig/PVwiK2sodSkrXCJ8XCIrZitcIilcIil9cmV0dXJuIG5ldyBSZWdFeHAocyxSKHIpKX1mdW5jdGlvbiBPKHQsbixyKXtyZXR1cm4gdCBpbnN0YW5jZW9mIFJlZ0V4cD9mdW5jdGlvbih0LG4pe2lmKCFuKXJldHVybiB0O3ZhciByPXQuc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO2lmKHIpZm9yKHZhciBlPTA7ZTxyLmxlbmd0aDtlKyspbi5wdXNoKHtuYW1lOmUscHJlZml4Om51bGwsZGVsaW1pdGVyOm51bGwsb3B0aW9uYWw6ITEscmVwZWF0OiExLHBhdHRlcm46bnVsbH0pO3JldHVybiB0fSh0LG4pOkFycmF5LmlzQXJyYXkodCk/ZnVuY3Rpb24odCxuLHIpe2Zvcih2YXIgZT1bXSxpPTA7aTx0Lmxlbmd0aDtpKyspZS5wdXNoKE8odFtpXSxuLHIpLnNvdXJjZSk7cmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIitlLmpvaW4oXCJ8XCIpK1wiKVwiLFIocikpfSh0LG4scik6ZnVuY3Rpb24odCxuLHIpe3JldHVybiBUKGcodCxyKSxuLHIpfSh0LG4scil9ZC5tYXRjaD1mdW5jdGlvbih0LG4pe3ZhciByPVtdO3JldHVybiBFKE8odCxyLG4pLHIpfSxkLnJlZ2V4cFRvRnVuY3Rpb249bSxkLnBhcnNlPXAsZC5jb21waWxlPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHgoZyh0LG4pLG4pfSxkLnRva2Vuc1RvRnVuY3Rpb249dyxkLnRva2Vuc1RvUmVnRXhwPWI7dmFyIFM9e2NvbnRhaW5lcjpcImNvbnRhaW5lclwiLGhpc3Rvcnk6XCJoaXN0b3J5XCIsbmFtZXNwYWNlOlwibmFtZXNwYWNlXCIscHJlZml4OlwiZGF0YS1iYXJiYVwiLHByZXZlbnQ6XCJwcmV2ZW50XCIsd3JhcHBlcjpcIndyYXBwZXJcIn0saj1uZXcoZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7dGhpcy5vPVMsdGhpcy51PW5ldyBET01QYXJzZXJ9dmFyIG49dC5wcm90b3R5cGU7cmV0dXJuIG4udG9TdHJpbmc9ZnVuY3Rpb24odCl7cmV0dXJuIHQub3V0ZXJIVE1MfSxuLnRvRG9jdW1lbnQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudS5wYXJzZUZyb21TdHJpbmcodCxcInRleHQvaHRtbFwiKX0sbi50b0VsZW1lbnQ9ZnVuY3Rpb24odCl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gbi5pbm5lckhUTUw9dCxufSxuLmdldEh0bWw9ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PWRvY3VtZW50KSx0aGlzLnRvU3RyaW5nKHQuZG9jdW1lbnRFbGVtZW50KX0sbi5nZXRXcmFwcGVyPWZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10JiYodD1kb2N1bWVudCksdC5xdWVyeVNlbGVjdG9yKFwiW1wiK3RoaXMuby5wcmVmaXgrJz1cIicrdGhpcy5vLndyYXBwZXIrJ1wiXScpfSxuLmdldENvbnRhaW5lcj1mdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dCYmKHQ9ZG9jdW1lbnQpLHQucXVlcnlTZWxlY3RvcihcIltcIit0aGlzLm8ucHJlZml4Kyc9XCInK3RoaXMuby5jb250YWluZXIrJ1wiXScpfSxuLnJlbW92ZUNvbnRhaW5lcj1mdW5jdGlvbih0KXtkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHQpJiZ0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodCl9LG4uYWRkQ29udGFpbmVyPWZ1bmN0aW9uKHQsbil7dmFyIHI9dGhpcy5nZXRDb250YWluZXIoKTtyP3RoaXMucyh0LHIpOm4uYXBwZW5kQ2hpbGQodCl9LG4uZ2V0TmFtZXNwYWNlPWZ1bmN0aW9uKHQpe3ZvaWQgMD09PXQmJih0PWRvY3VtZW50KTt2YXIgbj10LnF1ZXJ5U2VsZWN0b3IoXCJbXCIrdGhpcy5vLnByZWZpeCtcIi1cIit0aGlzLm8ubmFtZXNwYWNlK1wiXVwiKTtyZXR1cm4gbj9uLmdldEF0dHJpYnV0ZSh0aGlzLm8ucHJlZml4K1wiLVwiK3RoaXMuby5uYW1lc3BhY2UpOm51bGx9LG4uZ2V0SHJlZj1mdW5jdGlvbih0KXtpZih0LnRhZ05hbWUmJlwiYVwiPT09dC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0LmhyZWYpcmV0dXJuIHQuaHJlZjt2YXIgbj10LmdldEF0dHJpYnV0ZShcImhyZWZcIil8fHQuZ2V0QXR0cmlidXRlKFwieGxpbms6aHJlZlwiKTtpZihuKXJldHVybiB0aGlzLnJlc29sdmVVcmwobi5iYXNlVmFsfHxuKX1yZXR1cm4gbnVsbH0sbi5yZXNvbHZlVXJsPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodCkscj0wO3I8dDtyKyspbltyXT1hcmd1bWVudHNbcl07dmFyIGU9bi5sZW5ndGg7aWYoMD09PWUpdGhyb3cgbmV3IEVycm9yKFwicmVzb2x2ZVVybCByZXF1aXJlcyBhdCBsZWFzdCBvbmUgYXJndW1lbnQ7IGdvdCBub25lLlwiKTt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYmFzZVwiKTtpZihpLmhyZWY9YXJndW1lbnRzWzBdLDE9PT1lKXJldHVybiBpLmhyZWY7dmFyIG89ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO28uaW5zZXJ0QmVmb3JlKGksby5maXJzdENoaWxkKTtmb3IodmFyIHUsZj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKSxzPTE7czxlO3MrKylmLmhyZWY9YXJndW1lbnRzW3NdLGkuaHJlZj11PWYuaHJlZjtyZXR1cm4gby5yZW1vdmVDaGlsZChpKSx1fSxuLnM9ZnVuY3Rpb24odCxuKXtuLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsbi5uZXh0U2libGluZyl9LHR9KCkpLE09bmV3KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe3RoaXMuaD1bXSx0aGlzLnY9LTF9dmFyIGU9dC5wcm90b3R5cGU7cmV0dXJuIGUuaW5pdD1mdW5jdGlvbih0LG4pe3RoaXMubD1cImJhcmJhXCI7dmFyIHI9e25zOm4sc2Nyb2xsOnt4OndpbmRvdy5zY3JvbGxYLHk6d2luZG93LnNjcm9sbFl9LHVybDp0fTt0aGlzLmgucHVzaChyKSx0aGlzLnY9MDt2YXIgZT17ZnJvbTp0aGlzLmwsaW5kZXg6MCxzdGF0ZXM6W10uY29uY2F0KHRoaXMuaCl9O3dpbmRvdy5oaXN0b3J5JiZ3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoZSxcIlwiLHQpfSxlLmNoYW5nZT1mdW5jdGlvbih0LG4scil7aWYociYmci5zdGF0ZSl7dmFyIGU9ci5zdGF0ZSxpPWUuaW5kZXg7bj10aGlzLm0odGhpcy52LWkpLHRoaXMucmVwbGFjZShlLnN0YXRlcyksdGhpcy52PWl9ZWxzZSB0aGlzLmFkZCh0LG4pO3JldHVybiBufSxlLmFkZD1mdW5jdGlvbih0LG4pe3ZhciByPXRoaXMuc2l6ZSxlPXRoaXMucChuKSxpPXtuczpcInRtcFwiLHNjcm9sbDp7eDp3aW5kb3cuc2Nyb2xsWCx5OndpbmRvdy5zY3JvbGxZfSx1cmw6dH07dGhpcy5oLnB1c2goaSksdGhpcy52PXI7dmFyIG89e2Zyb206dGhpcy5sLGluZGV4OnIsc3RhdGVzOltdLmNvbmNhdCh0aGlzLmgpfTtzd2l0Y2goZSl7Y2FzZVwicHVzaFwiOndpbmRvdy5oaXN0b3J5JiZ3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobyxcIlwiLHQpO2JyZWFrO2Nhc2VcInJlcGxhY2VcIjp3aW5kb3cuaGlzdG9yeSYmd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG8sXCJcIix0KX19LGUudXBkYXRlPWZ1bmN0aW9uKHQsbil7dmFyIGU9bnx8dGhpcy52LGk9cih7fSx0aGlzLmdldChlKSx7fSx0KTt0aGlzLnNldChlLGkpfSxlLnJlbW92ZT1mdW5jdGlvbih0KXt0P3RoaXMuaC5zcGxpY2UodCwxKTp0aGlzLmgucG9wKCksdGhpcy52LS19LGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLmg9W10sdGhpcy52PS0xfSxlLnJlcGxhY2U9ZnVuY3Rpb24odCl7dGhpcy5oPXR9LGUuZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmhbdF19LGUuc2V0PWZ1bmN0aW9uKHQsbil7cmV0dXJuIHRoaXMuaFt0XT1ufSxlLnA9ZnVuY3Rpb24odCl7dmFyIG49XCJwdXNoXCIscj10LGU9Uy5wcmVmaXgrXCItXCIrUy5oaXN0b3J5O3JldHVybiByLmhhc0F0dHJpYnV0ZSYmci5oYXNBdHRyaWJ1dGUoZSkmJihuPXIuZ2V0QXR0cmlidXRlKGUpKSxufSxlLm09ZnVuY3Rpb24odCl7cmV0dXJuIE1hdGguYWJzKHQpPjE/dD4wP1wiZm9yd2FyZFwiOlwiYmFja1wiOjA9PT10P1wicG9wc3RhdGVcIjp0PjA/XCJiYWNrXCI6XCJmb3J3YXJkXCJ9LG4odCxbe2tleTpcImN1cnJlbnRcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5oW3RoaXMudl19fSx7a2V5Olwic3RhdGVcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5oW3RoaXMuaC5sZW5ndGgtMV19fSx7a2V5OlwicHJldmlvdXNcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52PDE/bnVsbDp0aGlzLmhbdGhpcy52LTFdfX0se2tleTpcInNpemVcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5oLmxlbmd0aH19XSksdH0oKSksTD1mdW5jdGlvbih0LG4pe3RyeXt2YXIgcj1mdW5jdGlvbigpe2lmKCFuLm5leHQuaHRtbClyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHQpLnRoZW4oKGZ1bmN0aW9uKHQpe3ZhciByPW4ubmV4dDtpZih0KXt2YXIgZT1qLnRvRWxlbWVudCh0KTtyLm5hbWVzcGFjZT1qLmdldE5hbWVzcGFjZShlKSxyLmNvbnRhaW5lcj1qLmdldENvbnRhaW5lcihlKSxyLmh0bWw9dCxNLnVwZGF0ZSh7bnM6ci5uYW1lc3BhY2V9KTt2YXIgaT1qLnRvRG9jdW1lbnQodCk7ZG9jdW1lbnQudGl0bGU9aS50aXRsZX19KSl9KCk7cmV0dXJuIFByb21pc2UucmVzb2x2ZShyJiZyLnRoZW4/ci50aGVuKChmdW5jdGlvbigpe30pKTp2b2lkIDApfWNhdGNoKHQpe3JldHVybiBQcm9taXNlLnJlamVjdCh0KX19LCQ9ZCxfPXtfX3Byb3RvX186bnVsbCx1cGRhdGU6TCxuZXh0VGljazpmdW5jdGlvbigpe3JldHVybiBuZXcgUHJvbWlzZSgoZnVuY3Rpb24odCl7d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0KX0pKX0scGF0aFRvUmVnZXhwOiR9LHE9ZnVuY3Rpb24oKXtyZXR1cm4gd2luZG93LmxvY2F0aW9uLm9yaWdpbn0sQj1mdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dCYmKHQ9d2luZG93LmxvY2F0aW9uLmhyZWYpLFUodCkucG9ydH0sVT1mdW5jdGlvbih0KXt2YXIgbixyPXQubWF0Y2goLzpcXGQrLyk7aWYobnVsbD09PXIpL15odHRwLy50ZXN0KHQpJiYobj04MCksL15odHRwcy8udGVzdCh0KSYmKG49NDQzKTtlbHNle3ZhciBlPXJbMF0uc3Vic3RyaW5nKDEpO249cGFyc2VJbnQoZSwxMCl9dmFyIGksbz10LnJlcGxhY2UocSgpLFwiXCIpLHU9e30sZj1vLmluZGV4T2YoXCIjXCIpO2Y+PTAmJihpPW8uc2xpY2UoZisxKSxvPW8uc2xpY2UoMCxmKSk7dmFyIHM9by5pbmRleE9mKFwiP1wiKTtyZXR1cm4gcz49MCYmKHU9RChvLnNsaWNlKHMrMSkpLG89by5zbGljZSgwLHMpKSx7aGFzaDppLHBhdGg6byxwb3J0Om4scXVlcnk6dX19LEQ9ZnVuY3Rpb24odCl7cmV0dXJuIHQuc3BsaXQoXCImXCIpLnJlZHVjZSgoZnVuY3Rpb24odCxuKXt2YXIgcj1uLnNwbGl0KFwiPVwiKTtyZXR1cm4gdFtyWzBdXT1yWzFdLHR9KSx7fSl9LEY9ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PXdpbmRvdy5sb2NhdGlvbi5ocmVmKSx0LnJlcGxhY2UoLyhcXC8jLip8XFwvfCMuKikkLyxcIlwiKX0sSD17X19wcm90b19fOm51bGwsZ2V0SHJlZjpmdW5jdGlvbigpe3JldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZn0sZ2V0T3JpZ2luOnEsZ2V0UG9ydDpCLGdldFBhdGg6ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PXdpbmRvdy5sb2NhdGlvbi5ocmVmKSxVKHQpLnBhdGh9LHBhcnNlOlUscGFyc2VRdWVyeTpELGNsZWFuOkZ9O2Z1bmN0aW9uIEkodCxuLHIpe3JldHVybiB2b2lkIDA9PT1uJiYobj0yZTMpLG5ldyBQcm9taXNlKChmdW5jdGlvbihlLGkpe3ZhciBvPW5ldyBYTUxIdHRwUmVxdWVzdDtvLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2lmKG8ucmVhZHlTdGF0ZT09PVhNTEh0dHBSZXF1ZXN0LkRPTkUpaWYoMjAwPT09by5zdGF0dXMpZShvLnJlc3BvbnNlVGV4dCk7ZWxzZSBpZihvLnN0YXR1cyl7dmFyIG49e3N0YXR1czpvLnN0YXR1cyxzdGF0dXNUZXh0Om8uc3RhdHVzVGV4dH07cih0LG4pLGkobil9fSxvLm9udGltZW91dD1mdW5jdGlvbigpe3ZhciBlPW5ldyBFcnJvcihcIlRpbWVvdXQgZXJyb3IgW1wiK24rXCJdXCIpO3IodCxlKSxpKGUpfSxvLm9uZXJyb3I9ZnVuY3Rpb24oKXt2YXIgbj1uZXcgRXJyb3IoXCJGZXRjaCBlcnJvclwiKTtyKHQsbiksaShuKX0sby5vcGVuKFwiR0VUXCIsdCksby50aW1lb3V0PW4sby5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsXCJ0ZXh0L2h0bWwsYXBwbGljYXRpb24veGh0bWwreG1sLGFwcGxpY2F0aW9uL3htbFwiKSxvLnNldFJlcXVlc3RIZWFkZXIoXCJ4LWJhcmJhXCIsXCJ5ZXNcIiksby5zZW5kKCl9KSl9dmFyIEM9ZnVuY3Rpb24odCl7cmV0dXJuISF0JiYoXCJvYmplY3RcIj09dHlwZW9mIHR8fFwiZnVuY3Rpb25cIj09dHlwZW9mIHQpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LnRoZW59O2Z1bmN0aW9uIE4odCxuKXtyZXR1cm4gdm9pZCAwPT09biYmKG49e30pLGZ1bmN0aW9uKCl7Zm9yKHZhciByPWFyZ3VtZW50cy5sZW5ndGgsZT1uZXcgQXJyYXkociksaT0wO2k8cjtpKyspZVtpXT1hcmd1bWVudHNbaV07dmFyIG89ITEsdT1uZXcgUHJvbWlzZSgoZnVuY3Rpb24ocixpKXtuLmFzeW5jPWZ1bmN0aW9uKCl7cmV0dXJuIG89ITAsZnVuY3Rpb24odCxuKXt0P2kodCk6cihuKX19O3ZhciB1PXQuYXBwbHkobixlKTtvfHwoQyh1KT91LnRoZW4ocixpKTpyKHUpKX0pKTtyZXR1cm4gdX19dmFyIFg9bmV3KGZ1bmN0aW9uKHQpe2Z1bmN0aW9uIG4oKXt2YXIgbjtyZXR1cm4obj10LmNhbGwodGhpcyl8fHRoaXMpLmxvZ2dlcj1uZXcgbChcIkBiYXJiYS9jb3JlXCIpLG4uYWxsPVtcInJlYWR5XCIsXCJwYWdlXCIsXCJyZXNldFwiLFwiY3VycmVudEFkZGVkXCIsXCJjdXJyZW50UmVtb3ZlZFwiLFwibmV4dEFkZGVkXCIsXCJuZXh0UmVtb3ZlZFwiLFwiYmVmb3JlT25jZVwiLFwib25jZVwiLFwiYWZ0ZXJPbmNlXCIsXCJiZWZvcmVcIixcImJlZm9yZUxlYXZlXCIsXCJsZWF2ZVwiLFwiYWZ0ZXJMZWF2ZVwiLFwiYmVmb3JlRW50ZXJcIixcImVudGVyXCIsXCJhZnRlckVudGVyXCIsXCJhZnRlclwiXSxuLnJlZ2lzdGVyZWQ9bmV3IE1hcCxuLmluaXQoKSxufWUobix0KTt2YXIgcj1uLnByb3RvdHlwZTtyZXR1cm4gci5pbml0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0aGlzLnJlZ2lzdGVyZWQuY2xlYXIoKSx0aGlzLmFsbC5mb3JFYWNoKChmdW5jdGlvbihuKXt0W25dfHwodFtuXT1mdW5jdGlvbihyLGUpe3QucmVnaXN0ZXJlZC5oYXMobil8fHQucmVnaXN0ZXJlZC5zZXQobixuZXcgU2V0KSx0LnJlZ2lzdGVyZWQuZ2V0KG4pLmFkZCh7Y3R4OmV8fHt9LGZuOnJ9KX0pfSkpfSxyLmRvPWZ1bmN0aW9uKHQpe2Zvcih2YXIgbj10aGlzLHI9YXJndW1lbnRzLmxlbmd0aCxlPW5ldyBBcnJheShyPjE/ci0xOjApLGk9MTtpPHI7aSsrKWVbaS0xXT1hcmd1bWVudHNbaV07aWYodGhpcy5yZWdpc3RlcmVkLmhhcyh0KSl7dmFyIG89UHJvbWlzZS5yZXNvbHZlKCk7cmV0dXJuIHRoaXMucmVnaXN0ZXJlZC5nZXQodCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7bz1vLnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIE4odC5mbix0LmN0eCkuYXBwbHkodm9pZCAwLGUpfSkpfSkpLG8uY2F0Y2goKGZ1bmN0aW9uKHIpe24ubG9nZ2VyLmRlYnVnKFwiSG9vayBlcnJvciBbXCIrdCtcIl1cIiksbi5sb2dnZXIuZXJyb3Iocil9KSl9cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpfSxyLmNsZWFyPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0aGlzLmFsbC5mb3JFYWNoKChmdW5jdGlvbihuKXtkZWxldGUgdFtuXX0pKSx0aGlzLmluaXQoKX0sci5oZWxwPWZ1bmN0aW9uKCl7dGhpcy5sb2dnZXIuaW5mbyhcIkF2YWlsYWJsZSBob29rczogXCIrdGhpcy5hbGwuam9pbihcIixcIikpO3ZhciB0PVtdO3RoaXMucmVnaXN0ZXJlZC5mb3JFYWNoKChmdW5jdGlvbihuLHIpe3JldHVybiB0LnB1c2gocil9KSksdGhpcy5sb2dnZXIuaW5mbyhcIlJlZ2lzdGVyZWQgaG9va3M6IFwiK3Quam9pbihcIixcIikpfSxufShoKSksej1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7aWYodGhpcy5QPVtdLFwiYm9vbGVhblwiPT10eXBlb2YgdCl0aGlzLmc9dDtlbHNle3ZhciBuPUFycmF5LmlzQXJyYXkodCk/dDpbdF07dGhpcy5QPW4ubWFwKChmdW5jdGlvbih0KXtyZXR1cm4gJCh0KX0pKX19cmV0dXJuIHQucHJvdG90eXBlLmNoZWNrSHJlZj1mdW5jdGlvbih0KXtpZihcImJvb2xlYW5cIj09dHlwZW9mIHRoaXMuZylyZXR1cm4gdGhpcy5nO3ZhciBuPVUodCkucGF0aDtyZXR1cm4gdGhpcy5QLnNvbWUoKGZ1bmN0aW9uKHQpe3JldHVybiBudWxsIT09dC5leGVjKG4pfSkpfSx0fSgpLEc9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gbihuKXt2YXIgcjtyZXR1cm4ocj10LmNhbGwodGhpcyxuKXx8dGhpcykuaz1uZXcgTWFwLHJ9ZShuLHQpO3ZhciBpPW4ucHJvdG90eXBlO3JldHVybiBpLnNldD1mdW5jdGlvbih0LG4scil7cmV0dXJuIHRoaXMuay5zZXQodCx7YWN0aW9uOnIscmVxdWVzdDpufSkse2FjdGlvbjpyLHJlcXVlc3Q6bn19LGkuZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmsuZ2V0KHQpfSxpLmdldFJlcXVlc3Q9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuay5nZXQodCkucmVxdWVzdH0saS5nZXRBY3Rpb249ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuay5nZXQodCkuYWN0aW9ufSxpLmhhcz1mdW5jdGlvbih0KXtyZXR1cm4hdGhpcy5jaGVja0hyZWYodCkmJnRoaXMuay5oYXModCl9LGkuZGVsZXRlPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmsuZGVsZXRlKHQpfSxpLnVwZGF0ZT1mdW5jdGlvbih0LG4pe3ZhciBlPXIoe30sdGhpcy5rLmdldCh0KSx7fSxuKTtyZXR1cm4gdGhpcy5rLnNldCh0LGUpLGV9LG59KHopLFE9ZnVuY3Rpb24oKXtyZXR1cm4hd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlfSxXPWZ1bmN0aW9uKHQpe3JldHVybiF0LmVsfHwhdC5ocmVmfSxKPWZ1bmN0aW9uKHQpe3ZhciBuPXQuZXZlbnQ7cmV0dXJuIG4ud2hpY2g+MXx8bi5tZXRhS2V5fHxuLmN0cmxLZXl8fG4uc2hpZnRLZXl8fG4uYWx0S2V5fSxLPWZ1bmN0aW9uKHQpe3ZhciBuPXQuZWw7cmV0dXJuIG4uaGFzQXR0cmlidXRlKFwidGFyZ2V0XCIpJiZcIl9ibGFua1wiPT09bi50YXJnZXR9LFY9ZnVuY3Rpb24odCl7dmFyIG49dC5lbDtyZXR1cm4gdm9pZCAwIT09bi5wcm90b2NvbCYmd2luZG93LmxvY2F0aW9uLnByb3RvY29sIT09bi5wcm90b2NvbHx8dm9pZCAwIT09bi5ob3N0bmFtZSYmd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lIT09bi5ob3N0bmFtZX0sWT1mdW5jdGlvbih0KXt2YXIgbj10LmVsO3JldHVybiB2b2lkIDAhPT1uLnBvcnQmJkIoKSE9PUIobi5ocmVmKX0sWj1mdW5jdGlvbih0KXt2YXIgbj10LmVsO3JldHVybiBuLmdldEF0dHJpYnV0ZSYmXCJzdHJpbmdcIj09dHlwZW9mIG4uZ2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIil9LHR0PWZ1bmN0aW9uKHQpe3JldHVybiB0LmVsLmhhc0F0dHJpYnV0ZShTLnByZWZpeCtcIi1cIitTLnByZXZlbnQpfSxudD1mdW5jdGlvbih0KXtyZXR1cm4gQm9vbGVhbih0LmVsLmNsb3Nlc3QoXCJbXCIrUy5wcmVmaXgrXCItXCIrUy5wcmV2ZW50Kyc9XCJhbGxcIl0nKSl9LHJ0PWZ1bmN0aW9uKHQpe3ZhciBuPXQuaHJlZjtyZXR1cm4gRihuKT09PUYoKSYmQihuKT09PUIoKX0sZXQ9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gbihuKXt2YXIgcjtyZXR1cm4ocj10LmNhbGwodGhpcyxuKXx8dGhpcykuc3VpdGU9W10sci50ZXN0cz1uZXcgTWFwLHIuaW5pdCgpLHJ9ZShuLHQpO3ZhciByPW4ucHJvdG90eXBlO3JldHVybiByLmluaXQ9ZnVuY3Rpb24oKXt0aGlzLmFkZChcInB1c2hTdGF0ZVwiLFEpLHRoaXMuYWRkKFwiZXhpc3RzXCIsVyksdGhpcy5hZGQoXCJuZXdUYWJcIixKKSx0aGlzLmFkZChcImJsYW5rXCIsSyksdGhpcy5hZGQoXCJjb3JzRG9tYWluXCIsViksdGhpcy5hZGQoXCJjb3JzUG9ydFwiLFkpLHRoaXMuYWRkKFwiZG93bmxvYWRcIixaKSx0aGlzLmFkZChcInByZXZlbnRTZWxmXCIsdHQpLHRoaXMuYWRkKFwicHJldmVudEFsbFwiLG50KSx0aGlzLmFkZChcInNhbWVVcmxcIixydCwhMSl9LHIuYWRkPWZ1bmN0aW9uKHQsbixyKXt2b2lkIDA9PT1yJiYocj0hMCksdGhpcy50ZXN0cy5zZXQodCxuKSxyJiZ0aGlzLnN1aXRlLnB1c2godCl9LHIucnVuPWZ1bmN0aW9uKHQsbixyLGUpe3JldHVybiB0aGlzLnRlc3RzLmdldCh0KSh7ZWw6bixldmVudDpyLGhyZWY6ZX0pfSxyLmNoZWNrTGluaz1mdW5jdGlvbih0LG4scil7dmFyIGU9dGhpcztyZXR1cm4gdGhpcy5zdWl0ZS5zb21lKChmdW5jdGlvbihpKXtyZXR1cm4gZS5ydW4oaSx0LG4scil9KSl9LG59KHopLGl0PWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIG4ocixlKXt2YXIgaTt2b2lkIDA9PT1lJiYoZT1cIkJhcmJhIGVycm9yXCIpO2Zvcih2YXIgbz1hcmd1bWVudHMubGVuZ3RoLHU9bmV3IEFycmF5KG8+Mj9vLTI6MCksZj0yO2Y8bztmKyspdVtmLTJdPWFyZ3VtZW50c1tmXTtyZXR1cm4oaT10LmNhbGwuYXBwbHkodCxbdGhpc10uY29uY2F0KHUpKXx8dGhpcykuZXJyb3I9cixpLmxhYmVsPWUsRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UmJkVycm9yLmNhcHR1cmVTdGFja1RyYWNlKGZ1bmN0aW9uKHQpe2lmKHZvaWQgMD09PXQpdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO3JldHVybiB0fShpKSxuKSxpLm5hbWU9XCJCYXJiYUVycm9yXCIsaX1yZXR1cm4gZShuLHQpLG59KGYoRXJyb3IpKSxvdD1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7dm9pZCAwPT09dCYmKHQ9W10pLHRoaXMubG9nZ2VyPW5ldyBsKFwiQGJhcmJhL2NvcmVcIiksdGhpcy5hbGw9W10sdGhpcy5wYWdlPVtdLHRoaXMub25jZT1bXSx0aGlzLkE9W3tuYW1lOlwibmFtZXNwYWNlXCIsdHlwZTpcInN0cmluZ3NcIn0se25hbWU6XCJjdXN0b21cIix0eXBlOlwiZnVuY3Rpb25cIn1dLHQmJih0aGlzLmFsbD10aGlzLmFsbC5jb25jYXQodCkpLHRoaXMudXBkYXRlKCl9dmFyIG49dC5wcm90b3R5cGU7cmV0dXJuIG4uYWRkPWZ1bmN0aW9uKHQsbil7c3dpdGNoKHQpe2Nhc2VcInJ1bGVcIjp0aGlzLkEuc3BsaWNlKG4ucG9zaXRpb258fDAsMCxuLnZhbHVlKTticmVhaztjYXNlXCJ0cmFuc2l0aW9uXCI6ZGVmYXVsdDp0aGlzLmFsbC5wdXNoKG4pfXRoaXMudXBkYXRlKCl9LG4ucmVzb2x2ZT1mdW5jdGlvbih0LG4pe3ZhciByPXRoaXM7dm9pZCAwPT09biYmKG49e30pO3ZhciBlPW4ub25jZT90aGlzLm9uY2U6dGhpcy5wYWdlO2U9ZS5maWx0ZXIobi5zZWxmP2Z1bmN0aW9uKHQpe3JldHVybiB0Lm5hbWUmJlwic2VsZlwiPT09dC5uYW1lfTpmdW5jdGlvbih0KXtyZXR1cm4hdC5uYW1lfHxcInNlbGZcIiE9PXQubmFtZX0pO3ZhciBpPW5ldyBNYXAsbz1lLmZpbmQoKGZ1bmN0aW9uKGUpe3ZhciBvPSEwLHU9e307cmV0dXJuISghbi5zZWxmfHxcInNlbGZcIiE9PWUubmFtZSl8fChyLkEucmV2ZXJzZSgpLmZvckVhY2goKGZ1bmN0aW9uKG4pe28mJihvPXIuUihlLG4sdCx1KSxlLmZyb20mJmUudG8mJihvPXIuUihlLG4sdCx1LFwiZnJvbVwiKSYmci5SKGUsbix0LHUsXCJ0b1wiKSksZS5mcm9tJiYhZS50byYmKG89ci5SKGUsbix0LHUsXCJmcm9tXCIpKSwhZS5mcm9tJiZlLnRvJiYobz1yLlIoZSxuLHQsdSxcInRvXCIpKSl9KSksaS5zZXQoZSx1KSxvKX0pKSx1PWkuZ2V0KG8pLGY9W107aWYoZi5wdXNoKG4ub25jZT9cIm9uY2VcIjpcInBhZ2VcIiksbi5zZWxmJiZmLnB1c2goXCJzZWxmXCIpLHUpe3ZhciBzLGM9W29dO09iamVjdC5rZXlzKHUpLmxlbmd0aD4wJiZjLnB1c2godSksKHM9dGhpcy5sb2dnZXIpLmluZm8uYXBwbHkocyxbXCJUcmFuc2l0aW9uIGZvdW5kIFtcIitmLmpvaW4oXCIsXCIpK1wiXVwiXS5jb25jYXQoYykpfWVsc2UgdGhpcy5sb2dnZXIuaW5mbyhcIk5vIHRyYW5zaXRpb24gZm91bmQgW1wiK2Yuam9pbihcIixcIikrXCJdXCIpO3JldHVybiBvfSxuLnVwZGF0ZT1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5hbGw9dGhpcy5hbGwubWFwKChmdW5jdGlvbihuKXtyZXR1cm4gdC5UKG4pfSkpLnNvcnQoKGZ1bmN0aW9uKHQsbil7cmV0dXJuIHQucHJpb3JpdHktbi5wcmlvcml0eX0pKS5yZXZlcnNlKCkubWFwKChmdW5jdGlvbih0KXtyZXR1cm4gZGVsZXRlIHQucHJpb3JpdHksdH0pKSx0aGlzLnBhZ2U9dGhpcy5hbGwuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwIT09dC5sZWF2ZXx8dm9pZCAwIT09dC5lbnRlcn0pKSx0aGlzLm9uY2U9dGhpcy5hbGwuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwIT09dC5vbmNlfSkpfSxuLlI9ZnVuY3Rpb24odCxuLHIsZSxpKXt2YXIgbz0hMCx1PSExLGY9dCxzPW4ubmFtZSxjPXMsYT1zLGg9cyx2PWk/ZltpXTpmLGw9XCJ0b1wiPT09aT9yLm5leHQ6ci5jdXJyZW50O2lmKGk/diYmdltzXTp2W3NdKXtzd2l0Y2gobi50eXBlKXtjYXNlXCJzdHJpbmdzXCI6ZGVmYXVsdDp2YXIgZD1BcnJheS5pc0FycmF5KHZbY10pP3ZbY106W3ZbY11dO2xbY10mJi0xIT09ZC5pbmRleE9mKGxbY10pJiYodT0hMCksLTE9PT1kLmluZGV4T2YobFtjXSkmJihvPSExKTticmVhaztjYXNlXCJvYmplY3RcIjp2YXIgbT1BcnJheS5pc0FycmF5KHZbYV0pP3ZbYV06W3ZbYV1dO2xbYV0/KGxbYV0ubmFtZSYmLTEhPT1tLmluZGV4T2YobFthXS5uYW1lKSYmKHU9ITApLC0xPT09bS5pbmRleE9mKGxbYV0ubmFtZSkmJihvPSExKSk6bz0hMTticmVhaztjYXNlXCJmdW5jdGlvblwiOnZbaF0ocik/dT0hMDpvPSExfXUmJihpPyhlW2ldPWVbaV18fHt9LGVbaV1bc109ZltpXVtzXSk6ZVtzXT1mW3NdKX1yZXR1cm4gb30sbi5PPWZ1bmN0aW9uKHQsbixyKXt2YXIgZT0wO3JldHVybih0W25dfHx0LmZyb20mJnQuZnJvbVtuXXx8dC50byYmdC50b1tuXSkmJihlKz1NYXRoLnBvdygxMCxyKSx0LmZyb20mJnQuZnJvbVtuXSYmKGUrPTEpLHQudG8mJnQudG9bbl0mJihlKz0yKSksZX0sbi5UPWZ1bmN0aW9uKHQpe3ZhciBuPXRoaXM7dC5wcmlvcml0eT0wO3ZhciByPTA7cmV0dXJuIHRoaXMuQS5mb3JFYWNoKChmdW5jdGlvbihlLGkpe3IrPW4uTyh0LGUubmFtZSxpKzEpfSkpLHQucHJpb3JpdHk9cix0fSx0fSgpLHV0PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXt2b2lkIDA9PT10JiYodD1bXSksdGhpcy5sb2dnZXI9bmV3IGwoXCJAYmFyYmEvY29yZVwiKSx0aGlzLlM9ITEsdGhpcy5zdG9yZT1uZXcgb3QodCl9dmFyIHI9dC5wcm90b3R5cGU7cmV0dXJuIHIuZ2V0PWZ1bmN0aW9uKHQsbil7cmV0dXJuIHRoaXMuc3RvcmUucmVzb2x2ZSh0LG4pfSxyLmRvT25jZT1mdW5jdGlvbih0KXt2YXIgbj10LmRhdGEscj10LnRyYW5zaXRpb247dHJ5e3ZhciBlPWZ1bmN0aW9uKCl7aS5TPSExfSxpPXRoaXMsbz1yfHx7fTtpLlM9ITA7dmFyIHU9cygoZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGkuaihcImJlZm9yZU9uY2VcIixuLG8pKS50aGVuKChmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUoaS5vbmNlKG4sbykpLnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShpLmooXCJhZnRlck9uY2VcIixuLG8pKS50aGVuKChmdW5jdGlvbigpe30pKX0pKX0pKX0pLChmdW5jdGlvbih0KXtpLlM9ITEsaS5sb2dnZXIuZGVidWcoXCJUcmFuc2l0aW9uIGVycm9yIFtiZWZvcmUvYWZ0ZXIvb25jZV1cIiksaS5sb2dnZXIuZXJyb3IodCl9KSk7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh1JiZ1LnRoZW4/dS50aGVuKGUpOmUoKSl9Y2F0Y2godCl7cmV0dXJuIFByb21pc2UucmVqZWN0KHQpfX0sci5kb1BhZ2U9ZnVuY3Rpb24odCl7dmFyIG49dC5kYXRhLHI9dC50cmFuc2l0aW9uLGU9dC5wYWdlLGk9dC53cmFwcGVyO3RyeXt2YXIgbz1mdW5jdGlvbih0KXtpZih1KXJldHVybiB0O2YuUz0hMX0sdT0hMSxmPXRoaXMsYz1yfHx7fSxhPSEwPT09Yy5zeW5jfHwhMTtmLlM9ITA7dmFyIGg9cygoZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShmLmooXCJiZWZvcmVcIixuLGMpKS50aGVuKChmdW5jdGlvbigpe3ZhciB0PSExO2Z1bmN0aW9uIHIocil7cmV0dXJuIHQ/cjpQcm9taXNlLnJlc29sdmUoZi5yZW1vdmUobikpLnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShmLmooXCJhZnRlclwiLG4sYykpLnRoZW4oKGZ1bmN0aW9uKCl7fSkpfSkpfXZhciBvPWZ1bmN0aW9uKCl7aWYoYSlyZXR1cm4gcygoZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGYuYWRkKG4saSkpLnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShmLmooXCJiZWZvcmVMZWF2ZVwiLG4sYykpLnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShmLmooXCJiZWZvcmVFbnRlclwiLG4sYykpLnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShQcm9taXNlLmFsbChbZi5sZWF2ZShuLGMpLGYuZW50ZXIobixjKV0pKS50aGVuKChmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUoZi5qKFwiYWZ0ZXJMZWF2ZVwiLG4sYykpLnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShmLmooXCJhZnRlckVudGVyXCIsbixjKSkudGhlbigoZnVuY3Rpb24oKXt9KSl9KSl9KSl9KSl9KSl9KSl9KSwoZnVuY3Rpb24odCl7aWYoZi5NKHQpKXRocm93IG5ldyBpdCh0LFwiVHJhbnNpdGlvbiBlcnJvciBbc3luY11cIil9KSk7dmFyIHI9ZnVuY3Rpb24ocil7cmV0dXJuIHQ/cjpzKChmdW5jdGlvbigpe3ZhciB0PWZ1bmN0aW9uKCl7aWYoITEhPT1vKXJldHVybiBQcm9taXNlLnJlc29sdmUoZi5hZGQobixpKSkudGhlbigoZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGYuaihcImJlZm9yZUVudGVyXCIsbixjKSkudGhlbigoZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGYuZW50ZXIobixjLG8pKS50aGVuKChmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUoZi5qKFwiYWZ0ZXJFbnRlclwiLG4sYykpLnRoZW4oKGZ1bmN0aW9uKCl7fSkpfSkpfSkpfSkpfSgpO2lmKHQmJnQudGhlbilyZXR1cm4gdC50aGVuKChmdW5jdGlvbigpe30pKX0pLChmdW5jdGlvbih0KXtpZihmLk0odCkpdGhyb3cgbmV3IGl0KHQsXCJUcmFuc2l0aW9uIGVycm9yIFtiZWZvcmUvYWZ0ZXIvZW50ZXJdXCIpfSkpfSxvPSExLHU9cygoZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGYuaihcImJlZm9yZUxlYXZlXCIsbixjKSkudGhlbigoZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFByb21pc2UuYWxsKFtmLmxlYXZlKG4sYyksTChlLG4pXSkudGhlbigoZnVuY3Rpb24odCl7cmV0dXJuIHRbMF19KSkpLnRoZW4oKGZ1bmN0aW9uKHQpe3JldHVybiBvPXQsUHJvbWlzZS5yZXNvbHZlKGYuaihcImFmdGVyTGVhdmVcIixuLGMpKS50aGVuKChmdW5jdGlvbigpe30pKX0pKX0pKX0pLChmdW5jdGlvbih0KXtpZihmLk0odCkpdGhyb3cgbmV3IGl0KHQsXCJUcmFuc2l0aW9uIGVycm9yIFtiZWZvcmUvYWZ0ZXIvbGVhdmVdXCIpfSkpO3JldHVybiB1JiZ1LnRoZW4/dS50aGVuKHIpOnIodSl9KCk7cmV0dXJuIG8mJm8udGhlbj9vLnRoZW4ocik6cihvKX0pKX12YXIgcj1mdW5jdGlvbigpe2lmKGEpcmV0dXJuIFByb21pc2UucmVzb2x2ZShMKGUsbikpLnRoZW4oKGZ1bmN0aW9uKCl7fSkpfSgpO3JldHVybiByJiZyLnRoZW4/ci50aGVuKHQpOnQoKX0pLChmdW5jdGlvbih0KXtpZihmLlM9ITEsdC5uYW1lJiZcIkJhcmJhRXJyb3JcIj09PXQubmFtZSl0aHJvdyBmLmxvZ2dlci5kZWJ1Zyh0LmxhYmVsKSxmLmxvZ2dlci5lcnJvcih0LmVycm9yKSx0O3Rocm93IGYubG9nZ2VyLmRlYnVnKFwiVHJhbnNpdGlvbiBlcnJvciBbcGFnZV1cIiksZi5sb2dnZXIuZXJyb3IodCksdH0pKTtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGgmJmgudGhlbj9oLnRoZW4obyk6byhoKSl9Y2F0Y2godCl7cmV0dXJuIFByb21pc2UucmVqZWN0KHQpfX0sci5vbmNlPWZ1bmN0aW9uKHQsbil7dHJ5e3JldHVybiBQcm9taXNlLnJlc29sdmUoWC5kbyhcIm9uY2VcIix0LG4pKS50aGVuKChmdW5jdGlvbigpe3JldHVybiBuLm9uY2U/TihuLm9uY2UsbikodCk6UHJvbWlzZS5yZXNvbHZlKCl9KSl9Y2F0Y2godCl7cmV0dXJuIFByb21pc2UucmVqZWN0KHQpfX0sci5sZWF2ZT1mdW5jdGlvbih0LG4pe3RyeXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFguZG8oXCJsZWF2ZVwiLHQsbikpLnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIG4ubGVhdmU/TihuLmxlYXZlLG4pKHQpOlByb21pc2UucmVzb2x2ZSgpfSkpfWNhdGNoKHQpe3JldHVybiBQcm9taXNlLnJlamVjdCh0KX19LHIuZW50ZXI9ZnVuY3Rpb24odCxuLHIpe3RyeXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFguZG8oXCJlbnRlclwiLHQsbikpLnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIG4uZW50ZXI/TihuLmVudGVyLG4pKHQscik6UHJvbWlzZS5yZXNvbHZlKCl9KSl9Y2F0Y2godCl7cmV0dXJuIFByb21pc2UucmVqZWN0KHQpfX0sci5hZGQ9ZnVuY3Rpb24odCxuKXt0cnl7cmV0dXJuIGouYWRkQ29udGFpbmVyKHQubmV4dC5jb250YWluZXIsbiksWC5kbyhcIm5leHRBZGRlZFwiLHQpLFByb21pc2UucmVzb2x2ZSgpfWNhdGNoKHQpe3JldHVybiBQcm9taXNlLnJlamVjdCh0KX19LHIucmVtb3ZlPWZ1bmN0aW9uKHQpe3RyeXtyZXR1cm4gai5yZW1vdmVDb250YWluZXIodC5jdXJyZW50LmNvbnRhaW5lciksWC5kbyhcImN1cnJlbnRSZW1vdmVkXCIsdCksUHJvbWlzZS5yZXNvbHZlKCl9Y2F0Y2godCl7cmV0dXJuIFByb21pc2UucmVqZWN0KHQpfX0sci5NPWZ1bmN0aW9uKHQpe3JldHVybiB0Lm1lc3NhZ2U/IS9UaW1lb3V0IGVycm9yfEZldGNoIGVycm9yLy50ZXN0KHQubWVzc2FnZSk6IXQuc3RhdHVzfSxyLmo9ZnVuY3Rpb24odCxuLHIpe3RyeXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFguZG8odCxuLHIpKS50aGVuKChmdW5jdGlvbigpe3JldHVybiByW3RdP04oclt0XSxyKShuKTpQcm9taXNlLnJlc29sdmUoKX0pKX1jYXRjaCh0KXtyZXR1cm4gUHJvbWlzZS5yZWplY3QodCl9fSxuKHQsW3trZXk6XCJpc1J1bm5pbmdcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5TfSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy5TPXR9fSx7a2V5OlwiaGFzT25jZVwiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnN0b3JlLm9uY2UubGVuZ3RoPjB9fSx7a2V5OlwiaGFzU2VsZlwiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnN0b3JlLmFsbC5zb21lKChmdW5jdGlvbih0KXtyZXR1cm5cInNlbGZcIj09PXQubmFtZX0pKX19LHtrZXk6XCJzaG91bGRXYWl0XCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc3RvcmUuYWxsLnNvbWUoKGZ1bmN0aW9uKHQpe3JldHVybiB0LnRvJiYhdC50by5yb3V0ZXx8dC5zeW5jfSkpfX1dKSx0fSgpLGZ0PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXt2YXIgbj10aGlzO3RoaXMubmFtZXM9W1wiYmVmb3JlTGVhdmVcIixcImFmdGVyTGVhdmVcIixcImJlZm9yZUVudGVyXCIsXCJhZnRlckVudGVyXCJdLHRoaXMuYnlOYW1lc3BhY2U9bmV3IE1hcCwwIT09dC5sZW5ndGgmJih0LmZvckVhY2goKGZ1bmN0aW9uKHQpe24uYnlOYW1lc3BhY2Uuc2V0KHQubmFtZXNwYWNlLHQpfSkpLHRoaXMubmFtZXMuZm9yRWFjaCgoZnVuY3Rpb24odCl7WFt0XShuLkwodCkpfSkpKX1yZXR1cm4gdC5wcm90b3R5cGUuTD1mdW5jdGlvbih0KXt2YXIgbj10aGlzO3JldHVybiBmdW5jdGlvbihyKXt2YXIgZT10Lm1hdGNoKC9lbnRlci9pKT9yLm5leHQ6ci5jdXJyZW50LGk9bi5ieU5hbWVzcGFjZS5nZXQoZS5uYW1lc3BhY2UpO3JldHVybiBpJiZpW3RdP04oaVt0XSxpKShyKTpQcm9taXNlLnJlc29sdmUoKX19LHR9KCk7RWxlbWVudC5wcm90b3R5cGUubWF0Y2hlc3x8KEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXM9RWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3J8fEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvciksRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdHx8KEVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3Q9ZnVuY3Rpb24odCl7dmFyIG49dGhpcztkb3tpZihuLm1hdGNoZXModCkpcmV0dXJuIG47bj1uLnBhcmVudEVsZW1lbnR8fG4ucGFyZW50Tm9kZX13aGlsZShudWxsIT09biYmMT09PW4ubm9kZVR5cGUpO3JldHVybiBudWxsfSk7dmFyIHN0PXtjb250YWluZXI6bnVsbCxodG1sOlwiXCIsbmFtZXNwYWNlOlwiXCIsdXJsOntoYXNoOlwiXCIsaHJlZjpcIlwiLHBhdGg6XCJcIixwb3J0Om51bGwscXVlcnk6e319fTtyZXR1cm4gbmV3KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe3RoaXMudmVyc2lvbj1hLHRoaXMuc2NoZW1hUGFnZT1zdCx0aGlzLkxvZ2dlcj1sLHRoaXMubG9nZ2VyPW5ldyBsKFwiQGJhcmJhL2NvcmVcIiksdGhpcy5wbHVnaW5zPVtdLHRoaXMuaG9va3M9WCx0aGlzLmRvbT1qLHRoaXMuaGVscGVycz1fLHRoaXMuaGlzdG9yeT1NLHRoaXMucmVxdWVzdD1JLHRoaXMudXJsPUh9dmFyIGU9dC5wcm90b3R5cGU7cmV0dXJuIGUudXNlPWZ1bmN0aW9uKHQsbil7dmFyIHI9dGhpcy5wbHVnaW5zO3IuaW5kZXhPZih0KT4tMT90aGlzLmxvZ2dlci53YXJuKFwiUGx1Z2luIFtcIit0Lm5hbWUrXCJdIGFscmVhZHkgaW5zdGFsbGVkLlwiKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0Lmluc3RhbGw/KHQuaW5zdGFsbCh0aGlzLG4pLHIucHVzaCh0KSk6dGhpcy5sb2dnZXIud2FybihcIlBsdWdpbiBbXCIrdC5uYW1lKyddIGhhcyBubyBcImluc3RhbGxcIiBtZXRob2QuJyl9LGUuaW5pdD1mdW5jdGlvbih0KXt2YXIgbj12b2lkIDA9PT10P3t9OnQsZT1uLnRyYW5zaXRpb25zLGk9dm9pZCAwPT09ZT9bXTplLG89bi52aWV3cyx1PXZvaWQgMD09PW8/W106byxmPW4uc2NoZW1hLHM9dm9pZCAwPT09Zj9TOmYsYz1uLnJlcXVlc3RFcnJvcixhPW4udGltZW91dCxoPXZvaWQgMD09PWE/MmUzOmEsdj1uLmNhY2hlSWdub3JlLGQ9dm9pZCAwIT09diYmdixtPW4ucHJlZmV0Y2hJZ25vcmUscD12b2lkIDAhPT1tJiZtLHc9bi5wcmV2ZW50UnVubmluZyxiPXZvaWQgMCE9PXcmJncseT1uLnByZXZlbnQsUD12b2lkIDA9PT15P251bGw6eSxnPW4uZGVidWcsRT1uLmxvZ0xldmVsO2lmKGwuc2V0TGV2ZWwoITA9PT0odm9pZCAwIT09ZyYmZyk/XCJkZWJ1Z1wiOnZvaWQgMD09PUU/XCJvZmZcIjpFKSx0aGlzLmxvZ2dlci5pbmZvKHRoaXMudmVyc2lvbiksT2JqZWN0LmtleXMocykuZm9yRWFjaCgoZnVuY3Rpb24odCl7U1t0XSYmKFNbdF09c1t0XSl9KSksdGhpcy4kPWMsdGhpcy50aW1lb3V0PWgsdGhpcy5jYWNoZUlnbm9yZT1kLHRoaXMucHJlZmV0Y2hJZ25vcmU9cCx0aGlzLnByZXZlbnRSdW5uaW5nPWIsdGhpcy5fPXRoaXMuZG9tLmdldFdyYXBwZXIoKSwhdGhpcy5fKXRocm93IG5ldyBFcnJvcihcIltAYmFyYmEvY29yZV0gTm8gQmFyYmEgd3JhcHBlciBmb3VuZFwiKTt0aGlzLl8uc2V0QXR0cmlidXRlKFwiYXJpYS1saXZlXCIsXCJwb2xpdGVcIiksdGhpcy5xKCk7dmFyIHg9dGhpcy5kYXRhLmN1cnJlbnQ7aWYoIXguY29udGFpbmVyKXRocm93IG5ldyBFcnJvcihcIltAYmFyYmEvY29yZV0gTm8gQmFyYmEgY29udGFpbmVyIGZvdW5kXCIpO2lmKHRoaXMuY2FjaGU9bmV3IEcoZCksdGhpcy5wcmV2ZW50PW5ldyBldChwKSx0aGlzLnRyYW5zaXRpb25zPW5ldyB1dChpKSx0aGlzLnZpZXdzPW5ldyBmdCh1KSxudWxsIT09UCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgUCl0aHJvdyBuZXcgRXJyb3IoXCJbQGJhcmJhL2NvcmVdIFByZXZlbnQgc2hvdWxkIGJlIGEgZnVuY3Rpb25cIik7dGhpcy5wcmV2ZW50LmFkZChcInByZXZlbnRDdXN0b21cIixQKX10aGlzLmhpc3RvcnkuaW5pdCh4LnVybC5ocmVmLHgubmFtZXNwYWNlKSx0aGlzLkI9dGhpcy5CLmJpbmQodGhpcyksdGhpcy5VPXRoaXMuVS5iaW5kKHRoaXMpLHRoaXMuRD10aGlzLkQuYmluZCh0aGlzKSx0aGlzLkYoKSx0aGlzLnBsdWdpbnMuZm9yRWFjaCgoZnVuY3Rpb24odCl7cmV0dXJuIHQuaW5pdCgpfSkpO3ZhciBrPXRoaXMuZGF0YTtrLnRyaWdnZXI9XCJiYXJiYVwiLGsubmV4dD1rLmN1cnJlbnQsay5jdXJyZW50PXIoe30sdGhpcy5zY2hlbWFQYWdlKSx0aGlzLmhvb2tzLmRvKFwicmVhZHlcIixrKSx0aGlzLm9uY2UoayksdGhpcy5xKCl9LGUuZGVzdHJveT1mdW5jdGlvbigpe3RoaXMucSgpLHRoaXMuSCgpLHRoaXMuaGlzdG9yeS5jbGVhcigpLHRoaXMuaG9va3MuY2xlYXIoKSx0aGlzLnBsdWdpbnM9W119LGUuZm9yY2U9ZnVuY3Rpb24odCl7d2luZG93LmxvY2F0aW9uLmFzc2lnbih0KX0sZS5nbz1mdW5jdGlvbih0LG4scil7dmFyIGU7aWYodm9pZCAwPT09biYmKG49XCJiYXJiYVwiKSx0aGlzLnRyYW5zaXRpb25zLmlzUnVubmluZyl0aGlzLmZvcmNlKHQpO2Vsc2UgaWYoIShlPVwicG9wc3RhdGVcIj09PW4/dGhpcy5oaXN0b3J5LmN1cnJlbnQmJnRoaXMudXJsLmdldFBhdGgodGhpcy5oaXN0b3J5LmN1cnJlbnQudXJsKT09PXRoaXMudXJsLmdldFBhdGgodCk6dGhpcy5wcmV2ZW50LnJ1bihcInNhbWVVcmxcIixudWxsLG51bGwsdCkpfHx0aGlzLnRyYW5zaXRpb25zLmhhc1NlbGYpcmV0dXJuIG49dGhpcy5oaXN0b3J5LmNoYW5nZSh0LG4sciksciYmKHIuc3RvcFByb3BhZ2F0aW9uKCksci5wcmV2ZW50RGVmYXVsdCgpKSx0aGlzLnBhZ2UodCxuLGUpfSxlLm9uY2U9ZnVuY3Rpb24odCl7dHJ5e3ZhciBuPXRoaXM7cmV0dXJuIFByb21pc2UucmVzb2x2ZShuLmhvb2tzLmRvKFwiYmVmb3JlRW50ZXJcIix0KSkudGhlbigoZnVuY3Rpb24oKXtmdW5jdGlvbiByKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShuLmhvb2tzLmRvKFwiYWZ0ZXJFbnRlclwiLHQpKS50aGVuKChmdW5jdGlvbigpe30pKX12YXIgZT1mdW5jdGlvbigpe2lmKG4udHJhbnNpdGlvbnMuaGFzT25jZSl7dmFyIHI9bi50cmFuc2l0aW9ucy5nZXQodCx7b25jZTohMH0pO3JldHVybiBQcm9taXNlLnJlc29sdmUobi50cmFuc2l0aW9ucy5kb09uY2Uoe3RyYW5zaXRpb246cixkYXRhOnR9KSkudGhlbigoZnVuY3Rpb24oKXt9KSl9fSgpO3JldHVybiBlJiZlLnRoZW4/ZS50aGVuKHIpOnIoKX0pKX1jYXRjaCh0KXtyZXR1cm4gUHJvbWlzZS5yZWplY3QodCl9fSxlLnBhZ2U9ZnVuY3Rpb24odCxuLGUpe3RyeXt2YXIgaT1mdW5jdGlvbigpe3ZhciB0PW8uZGF0YTtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG8uaG9va3MuZG8oXCJwYWdlXCIsdCkpLnRoZW4oKGZ1bmN0aW9uKCl7dmFyIG49cygoZnVuY3Rpb24oKXt2YXIgbj1vLnRyYW5zaXRpb25zLmdldCh0LHtvbmNlOiExLHNlbGY6ZX0pO3JldHVybiBQcm9taXNlLnJlc29sdmUoby50cmFuc2l0aW9ucy5kb1BhZ2Uoe2RhdGE6dCxwYWdlOnUsdHJhbnNpdGlvbjpuLHdyYXBwZXI6by5ffSkpLnRoZW4oKGZ1bmN0aW9uKCl7by5xKCl9KSl9KSwoZnVuY3Rpb24oKXswPT09bC5nZXRMZXZlbCgpJiZvLmZvcmNlKHQuY3VycmVudC51cmwuaHJlZil9KSk7aWYobiYmbi50aGVuKXJldHVybiBuLnRoZW4oKGZ1bmN0aW9uKCl7fSkpfSkpfSxvPXRoaXM7by5kYXRhLm5leHQudXJsPXIoe2hyZWY6dH0sby51cmwucGFyc2UodCkpLG8uZGF0YS50cmlnZ2VyPW47dmFyIHU9by5jYWNoZS5oYXModCk/by5jYWNoZS51cGRhdGUodCx7YWN0aW9uOlwiY2xpY2tcIn0pLnJlcXVlc3Q6by5jYWNoZS5zZXQodCxvLnJlcXVlc3QodCxvLnRpbWVvdXQsby5vblJlcXVlc3RFcnJvci5iaW5kKG8sbikpLFwiY2xpY2tcIikucmVxdWVzdCxmPWZ1bmN0aW9uKCl7aWYoby50cmFuc2l0aW9ucy5zaG91bGRXYWl0KXJldHVybiBQcm9taXNlLnJlc29sdmUoTCh1LG8uZGF0YSkpLnRoZW4oKGZ1bmN0aW9uKCl7fSkpfSgpO3JldHVybiBQcm9taXNlLnJlc29sdmUoZiYmZi50aGVuP2YudGhlbihpKTppKCkpfWNhdGNoKHQpe3JldHVybiBQcm9taXNlLnJlamVjdCh0KX19LGUub25SZXF1ZXN0RXJyb3I9ZnVuY3Rpb24odCl7dGhpcy50cmFuc2l0aW9ucy5pc1J1bm5pbmc9ITE7Zm9yKHZhciBuPWFyZ3VtZW50cy5sZW5ndGgscj1uZXcgQXJyYXkobj4xP24tMTowKSxlPTE7ZTxuO2UrKylyW2UtMV09YXJndW1lbnRzW2VdO3ZhciBpPXJbMF0sbz1yWzFdLHU9dGhpcy5jYWNoZS5nZXRBY3Rpb24oaSk7cmV0dXJuIHRoaXMuY2FjaGUuZGVsZXRlKGkpLCEodGhpcy4kJiYhMT09PXRoaXMuJCh0LHUsaSxvKXx8KFwiY2xpY2tcIj09PXUmJnRoaXMuZm9yY2UoaSksMSkpfSxlLnByZWZldGNoPWZ1bmN0aW9uKHQpe3ZhciBuPXRoaXM7dGhpcy5jYWNoZS5oYXModCl8fHRoaXMuY2FjaGUuc2V0KHQsdGhpcy5yZXF1ZXN0KHQsdGhpcy50aW1lb3V0LHRoaXMub25SZXF1ZXN0RXJyb3IuYmluZCh0aGlzLFwiYmFyYmFcIikpLmNhdGNoKChmdW5jdGlvbih0KXtuLmxvZ2dlci5lcnJvcih0KX0pKSxcInByZWZldGNoXCIpfSxlLkY9ZnVuY3Rpb24oKXshMCE9PXRoaXMucHJlZmV0Y2hJZ25vcmUmJihkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsdGhpcy5CKSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLHRoaXMuQikpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuVSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLHRoaXMuRCl9LGUuSD1mdW5jdGlvbigpeyEwIT09dGhpcy5wcmVmZXRjaElnbm9yZSYmKGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIix0aGlzLkIpLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdGhpcy5CKSksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5VKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsdGhpcy5EKX0sZS5CPWZ1bmN0aW9uKHQpe3ZhciBuPXRoaXMscj10aGlzLkkodCk7aWYocil7dmFyIGU9dGhpcy5kb20uZ2V0SHJlZihyKTt0aGlzLnByZXZlbnQuY2hlY2tIcmVmKGUpfHx0aGlzLmNhY2hlLmhhcyhlKXx8dGhpcy5jYWNoZS5zZXQoZSx0aGlzLnJlcXVlc3QoZSx0aGlzLnRpbWVvdXQsdGhpcy5vblJlcXVlc3RFcnJvci5iaW5kKHRoaXMscikpLmNhdGNoKChmdW5jdGlvbih0KXtuLmxvZ2dlci5lcnJvcih0KX0pKSxcImVudGVyXCIpfX0sZS5VPWZ1bmN0aW9uKHQpe3ZhciBuPXRoaXMuSSh0KTtpZihuKXJldHVybiB0aGlzLnRyYW5zaXRpb25zLmlzUnVubmluZyYmdGhpcy5wcmV2ZW50UnVubmluZz8odC5wcmV2ZW50RGVmYXVsdCgpLHZvaWQgdC5zdG9wUHJvcGFnYXRpb24oKSk6dm9pZCB0aGlzLmdvKHRoaXMuZG9tLmdldEhyZWYobiksbix0KX0sZS5EPWZ1bmN0aW9uKHQpe3RoaXMuZ28odGhpcy51cmwuZ2V0SHJlZigpLFwicG9wc3RhdGVcIix0KX0sZS5JPWZ1bmN0aW9uKHQpe2Zvcih2YXIgbj10LnRhcmdldDtuJiYhdGhpcy5kb20uZ2V0SHJlZihuKTspbj1uLnBhcmVudE5vZGU7aWYobiYmIXRoaXMucHJldmVudC5jaGVja0xpbmsobix0LHRoaXMuZG9tLmdldEhyZWYobikpKXJldHVybiBufSxlLnE9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnVybC5nZXRIcmVmKCksbj17Y29udGFpbmVyOnRoaXMuZG9tLmdldENvbnRhaW5lcigpLGh0bWw6dGhpcy5kb20uZ2V0SHRtbCgpLG5hbWVzcGFjZTp0aGlzLmRvbS5nZXROYW1lc3BhY2UoKSx1cmw6cih7aHJlZjp0fSx0aGlzLnVybC5wYXJzZSh0KSl9O3RoaXMuQz17Y3VycmVudDpuLG5leHQ6cih7fSx0aGlzLnNjaGVtYVBhZ2UpLHRyaWdnZXI6dm9pZCAwfSx0aGlzLmhvb2tzLmRvKFwicmVzZXRcIix0aGlzLmRhdGEpfSxuKHQsW3trZXk6XCJkYXRhXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuQ319LHtrZXk6XCJ3cmFwcGVyXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX319XSksdH0oKSl9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYXJiYS51bWQuanMubWFwXG4iLCIvKiFcbiAqIENTU1BsdWdpbiAzLjEwLjRcbiAqIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbVxuICpcbiAqIENvcHlyaWdodCAyMDA4LTIwMjIsIEdyZWVuU29jay4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFN1YmplY3QgdG8gdGhlIHRlcm1zIGF0IGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9zdGFuZGFyZC1saWNlbnNlIG9yIGZvclxuICogQ2x1YiBHcmVlblNvY2sgbWVtYmVycywgdGhlIGFncmVlbWVudCBpc3N1ZWQgd2l0aCB0aGF0IG1lbWJlcnNoaXAuXG4gKiBAYXV0aG9yOiBKYWNrIERveWxlLCBqYWNrQGdyZWVuc29jay5jb21cbiovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBnc2FwLCBfZ2V0UHJvcGVydHksIF9udW1FeHAsIF9udW1XaXRoVW5pdEV4cCwgZ2V0VW5pdCwgX2lzU3RyaW5nLCBfaXNVbmRlZmluZWQsIF9yZW5kZXJDb21wbGV4U3RyaW5nLCBfcmVsRXhwLCBfZm9yRWFjaE5hbWUsIF9zb3J0UHJvcFR3ZWVuc0J5UHJpb3JpdHksIF9jb2xvclN0cmluZ0ZpbHRlciwgX2NoZWNrUGx1Z2luLCBfcmVwbGFjZVJhbmRvbSwgX3BsdWdpbnMsIEdTQ2FjaGUsIFByb3BUd2VlbiwgX2NvbmZpZywgX3RpY2tlciwgX3JvdW5kLCBfbWlzc2luZ1BsdWdpbiwgX2dldFNldHRlciwgX2dldENhY2hlLCBfY29sb3JFeHAsIF9wYXJzZVJlbGF0aXZlLCBfc2V0RGVmYXVsdHMsIF9yZW1vdmVMaW5rZWRMaXN0SXRlbSAvL2ZvciB0aGUgY29tbWVudGVkLW91dCBjbGFzc05hbWUgZmVhdHVyZS5cbn0gZnJvbSBcIi4vZ3NhcC1jb3JlLmpzXCI7XG5cbnZhciBfd2luLFxuICAgIF9kb2MsXG4gICAgX2RvY0VsZW1lbnQsXG4gICAgX3BsdWdpbkluaXR0ZWQsXG4gICAgX3RlbXBEaXYsXG4gICAgX3RlbXBEaXZTdHlsZXIsXG4gICAgX3JlY2VudFNldHRlclBsdWdpbixcbiAgICBfd2luZG93RXhpc3RzID0gZnVuY3Rpb24gX3dpbmRvd0V4aXN0cygpIHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCI7XG59LFxuICAgIF90cmFuc2Zvcm1Qcm9wcyA9IHt9LFxuICAgIF9SQUQyREVHID0gMTgwIC8gTWF0aC5QSSxcbiAgICBfREVHMlJBRCA9IE1hdGguUEkgLyAxODAsXG4gICAgX2F0YW4yID0gTWF0aC5hdGFuMixcbiAgICBfYmlnTnVtID0gMWU4LFxuICAgIF9jYXBzRXhwID0gLyhbQS1aXSkvZyxcbiAgICBfaG9yaXpvbnRhbEV4cCA9IC8obGVmdHxyaWdodHx3aWR0aHxtYXJnaW58cGFkZGluZ3x4KS9pLFxuICAgIF9jb21wbGV4RXhwID0gL1tcXHMsXFwoXVxcUy8sXG4gICAgX3Byb3BlcnR5QWxpYXNlcyA9IHtcbiAgYXV0b0FscGhhOiBcIm9wYWNpdHksdmlzaWJpbGl0eVwiLFxuICBzY2FsZTogXCJzY2FsZVgsc2NhbGVZXCIsXG4gIGFscGhhOiBcIm9wYWNpdHlcIlxufSxcbiAgICBfcmVuZGVyQ1NTUHJvcCA9IGZ1bmN0aW9uIF9yZW5kZXJDU1NQcm9wKHJhdGlvLCBkYXRhKSB7XG4gIHJldHVybiBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgTWF0aC5yb3VuZCgoZGF0YS5zICsgZGF0YS5jICogcmF0aW8pICogMTAwMDApIC8gMTAwMDAgKyBkYXRhLnUsIGRhdGEpO1xufSxcbiAgICBfcmVuZGVyUHJvcFdpdGhFbmQgPSBmdW5jdGlvbiBfcmVuZGVyUHJvcFdpdGhFbmQocmF0aW8sIGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCByYXRpbyA9PT0gMSA/IGRhdGEuZSA6IE1hdGgucm91bmQoKGRhdGEucyArIGRhdGEuYyAqIHJhdGlvKSAqIDEwMDAwKSAvIDEwMDAwICsgZGF0YS51LCBkYXRhKTtcbn0sXG4gICAgX3JlbmRlckNTU1Byb3BXaXRoQmVnaW5uaW5nID0gZnVuY3Rpb24gX3JlbmRlckNTU1Byb3BXaXRoQmVnaW5uaW5nKHJhdGlvLCBkYXRhKSB7XG4gIHJldHVybiBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgcmF0aW8gPyBNYXRoLnJvdW5kKChkYXRhLnMgKyBkYXRhLmMgKiByYXRpbykgKiAxMDAwMCkgLyAxMDAwMCArIGRhdGEudSA6IGRhdGEuYiwgZGF0YSk7XG59LFxuICAgIC8vaWYgdW5pdHMgY2hhbmdlLCB3ZSBuZWVkIGEgd2F5IHRvIHJlbmRlciB0aGUgb3JpZ2luYWwgdW5pdC92YWx1ZSB3aGVuIHRoZSB0d2VlbiBnb2VzIGFsbCB0aGUgd2F5IGJhY2sgdG8gdGhlIGJlZ2lubmluZyAocmF0aW86MClcbl9yZW5kZXJSb3VuZGVkQ1NTUHJvcCA9IGZ1bmN0aW9uIF9yZW5kZXJSb3VuZGVkQ1NTUHJvcChyYXRpbywgZGF0YSkge1xuICB2YXIgdmFsdWUgPSBkYXRhLnMgKyBkYXRhLmMgKiByYXRpbztcbiAgZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsIH5+KHZhbHVlICsgKHZhbHVlIDwgMCA/IC0uNSA6IC41KSkgKyBkYXRhLnUsIGRhdGEpO1xufSxcbiAgICBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZSA9IGZ1bmN0aW9uIF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlKHJhdGlvLCBkYXRhKSB7XG4gIHJldHVybiBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgcmF0aW8gPyBkYXRhLmUgOiBkYXRhLmIsIGRhdGEpO1xufSxcbiAgICBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZU9ubHlBdEVuZCA9IGZ1bmN0aW9uIF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlT25seUF0RW5kKHJhdGlvLCBkYXRhKSB7XG4gIHJldHVybiBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgcmF0aW8gIT09IDEgPyBkYXRhLmIgOiBkYXRhLmUsIGRhdGEpO1xufSxcbiAgICBfc2V0dGVyQ1NTU3R5bGUgPSBmdW5jdGlvbiBfc2V0dGVyQ1NTU3R5bGUodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgcmV0dXJuIHRhcmdldC5zdHlsZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbn0sXG4gICAgX3NldHRlckNTU1Byb3AgPSBmdW5jdGlvbiBfc2V0dGVyQ1NTUHJvcCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICByZXR1cm4gdGFyZ2V0LnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSk7XG59LFxuICAgIF9zZXR0ZXJUcmFuc2Zvcm0gPSBmdW5jdGlvbiBfc2V0dGVyVHJhbnNmb3JtKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gIHJldHVybiB0YXJnZXQuX2dzYXBbcHJvcGVydHldID0gdmFsdWU7XG59LFxuICAgIF9zZXR0ZXJTY2FsZSA9IGZ1bmN0aW9uIF9zZXR0ZXJTY2FsZSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICByZXR1cm4gdGFyZ2V0Ll9nc2FwLnNjYWxlWCA9IHRhcmdldC5fZ3NhcC5zY2FsZVkgPSB2YWx1ZTtcbn0sXG4gICAgX3NldHRlclNjYWxlV2l0aFJlbmRlciA9IGZ1bmN0aW9uIF9zZXR0ZXJTY2FsZVdpdGhSZW5kZXIodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIGRhdGEsIHJhdGlvKSB7XG4gIHZhciBjYWNoZSA9IHRhcmdldC5fZ3NhcDtcbiAgY2FjaGUuc2NhbGVYID0gY2FjaGUuc2NhbGVZID0gdmFsdWU7XG4gIGNhY2hlLnJlbmRlclRyYW5zZm9ybShyYXRpbywgY2FjaGUpO1xufSxcbiAgICBfc2V0dGVyVHJhbnNmb3JtV2l0aFJlbmRlciA9IGZ1bmN0aW9uIF9zZXR0ZXJUcmFuc2Zvcm1XaXRoUmVuZGVyKHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCBkYXRhLCByYXRpbykge1xuICB2YXIgY2FjaGUgPSB0YXJnZXQuX2dzYXA7XG4gIGNhY2hlW3Byb3BlcnR5XSA9IHZhbHVlO1xuICBjYWNoZS5yZW5kZXJUcmFuc2Zvcm0ocmF0aW8sIGNhY2hlKTtcbn0sXG4gICAgX3RyYW5zZm9ybVByb3AgPSBcInRyYW5zZm9ybVwiLFxuICAgIF90cmFuc2Zvcm1PcmlnaW5Qcm9wID0gX3RyYW5zZm9ybVByb3AgKyBcIk9yaWdpblwiLFxuICAgIF9zdXBwb3J0czNELFxuICAgIF9jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gX2NyZWF0ZUVsZW1lbnQodHlwZSwgbnMpIHtcbiAgdmFyIGUgPSBfZG9jLmNyZWF0ZUVsZW1lbnROUyA/IF9kb2MuY3JlYXRlRWxlbWVudE5TKChucyB8fCBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIikucmVwbGFjZSgvXmh0dHBzLywgXCJodHRwXCIpLCB0eXBlKSA6IF9kb2MuY3JlYXRlRWxlbWVudCh0eXBlKTsgLy9zb21lIHNlcnZlcnMgc3dhcCBpbiBodHRwcyBmb3IgaHR0cCBpbiB0aGUgbmFtZXNwYWNlIHdoaWNoIGNhbiBicmVhayB0aGluZ3MsIG1ha2luZyBcInN0eWxlXCIgaW5hY2Nlc3NpYmxlLlxuXG4gIHJldHVybiBlLnN0eWxlID8gZSA6IF9kb2MuY3JlYXRlRWxlbWVudCh0eXBlKTsgLy9zb21lIGVudmlyb25tZW50cyB3b24ndCBhbGxvdyBhY2Nlc3MgdG8gdGhlIGVsZW1lbnQncyBzdHlsZSB3aGVuIGNyZWF0ZWQgd2l0aCBhIG5hbWVzcGFjZSBpbiB3aGljaCBjYXNlIHdlIGRlZmF1bHQgdG8gdGhlIHN0YW5kYXJkIGNyZWF0ZUVsZW1lbnQoKSB0byB3b3JrIGFyb3VuZCB0aGUgaXNzdWUuIEFsc28gbm90ZSB0aGF0IHdoZW4gR1NBUCBpcyBlbWJlZGRlZCBkaXJlY3RseSBpbnNpZGUgYW4gU1ZHIGZpbGUsIGNyZWF0ZUVsZW1lbnQoKSB3b24ndCBhbGxvdyBhY2Nlc3MgdG8gdGhlIHN0eWxlIG9iamVjdCBpbiBGaXJlZm94IChzZWUgaHR0cHM6Ly9ncmVlbnNvY2suY29tL2ZvcnVtcy90b3BpYy8yMDIxNS1wcm9ibGVtLXVzaW5nLXR3ZWVubWF4LWluLXN0YW5kYWxvbmUtc2VsZi1jb250YWluaW5nLXN2Zy1maWxlLWVyci1jYW5ub3Qtc2V0LXByb3BlcnR5LWNzc3RleHQtb2YtdW5kZWZpbmVkLykuXG59LFxuICAgIF9nZXRDb21wdXRlZFByb3BlcnR5ID0gZnVuY3Rpb24gX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgc2tpcFByZWZpeEZhbGxiYWNrKSB7XG4gIHZhciBjcyA9IGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KTtcbiAgcmV0dXJuIGNzW3Byb3BlcnR5XSB8fCBjcy5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5LnJlcGxhY2UoX2NhcHNFeHAsIFwiLSQxXCIpLnRvTG93ZXJDYXNlKCkpIHx8IGNzLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHkpIHx8ICFza2lwUHJlZml4RmFsbGJhY2sgJiYgX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBfY2hlY2tQcm9wUHJlZml4KHByb3BlcnR5KSB8fCBwcm9wZXJ0eSwgMSkgfHwgXCJcIjsgLy9jc3MgdmFyaWFibGVzIG1heSBub3QgbmVlZCBjYXBzIHN3YXBwZWQgb3V0IGZvciBkYXNoZXMgYW5kIGxvd2VyY2FzZS5cbn0sXG4gICAgX3ByZWZpeGVzID0gXCJPLE1veixtcyxNcyxXZWJraXRcIi5zcGxpdChcIixcIiksXG4gICAgX2NoZWNrUHJvcFByZWZpeCA9IGZ1bmN0aW9uIF9jaGVja1Byb3BQcmVmaXgocHJvcGVydHksIGVsZW1lbnQsIHByZWZlclByZWZpeCkge1xuICB2YXIgZSA9IGVsZW1lbnQgfHwgX3RlbXBEaXYsXG4gICAgICBzID0gZS5zdHlsZSxcbiAgICAgIGkgPSA1O1xuXG4gIGlmIChwcm9wZXJ0eSBpbiBzICYmICFwcmVmZXJQcmVmaXgpIHtcbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH1cblxuICBwcm9wZXJ0eSA9IHByb3BlcnR5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcGVydHkuc3Vic3RyKDEpO1xuXG4gIHdoaWxlIChpLS0gJiYgIShfcHJlZml4ZXNbaV0gKyBwcm9wZXJ0eSBpbiBzKSkge31cblxuICByZXR1cm4gaSA8IDAgPyBudWxsIDogKGkgPT09IDMgPyBcIm1zXCIgOiBpID49IDAgPyBfcHJlZml4ZXNbaV0gOiBcIlwiKSArIHByb3BlcnR5O1xufSxcbiAgICBfaW5pdENvcmUgPSBmdW5jdGlvbiBfaW5pdENvcmUoKSB7XG4gIGlmIChfd2luZG93RXhpc3RzKCkgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgX3dpbiA9IHdpbmRvdztcbiAgICBfZG9jID0gX3dpbi5kb2N1bWVudDtcbiAgICBfZG9jRWxlbWVudCA9IF9kb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgIF90ZW1wRGl2ID0gX2NyZWF0ZUVsZW1lbnQoXCJkaXZcIikgfHwge1xuICAgICAgc3R5bGU6IHt9XG4gICAgfTtcbiAgICBfdGVtcERpdlN0eWxlciA9IF9jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIF90cmFuc2Zvcm1Qcm9wID0gX2NoZWNrUHJvcFByZWZpeChfdHJhbnNmb3JtUHJvcCk7XG4gICAgX3RyYW5zZm9ybU9yaWdpblByb3AgPSBfdHJhbnNmb3JtUHJvcCArIFwiT3JpZ2luXCI7XG4gICAgX3RlbXBEaXYuc3R5bGUuY3NzVGV4dCA9IFwiYm9yZGVyLXdpZHRoOjA7bGluZS1oZWlnaHQ6MDtwb3NpdGlvbjphYnNvbHV0ZTtwYWRkaW5nOjBcIjsgLy9tYWtlIHN1cmUgdG8gb3ZlcnJpZGUgY2VydGFpbiBwcm9wZXJ0aWVzIHRoYXQgbWF5IGNvbnRhbWluYXRlIG1lYXN1cmVtZW50cywgaW4gY2FzZSB0aGUgdXNlciBoYXMgb3ZlcnJlYWNoaW5nIHN0eWxlIHNoZWV0cy5cblxuICAgIF9zdXBwb3J0czNEID0gISFfY2hlY2tQcm9wUHJlZml4KFwicGVyc3BlY3RpdmVcIik7XG4gICAgX3BsdWdpbkluaXR0ZWQgPSAxO1xuICB9XG59LFxuICAgIF9nZXRCQm94SGFjayA9IGZ1bmN0aW9uIF9nZXRCQm94SGFjayhzd2FwSWZQb3NzaWJsZSkge1xuICAvL3dvcmtzIGFyb3VuZCBpc3N1ZXMgaW4gc29tZSBicm93c2VycyAobGlrZSBGaXJlZm94KSB0aGF0IGRvbid0IGNvcnJlY3RseSByZXBvcnQgZ2V0QkJveCgpIG9uIFNWRyBlbGVtZW50cyBpbnNpZGUgYSA8ZGVmcz4gZWxlbWVudCBhbmQvb3IgPG1hc2s+LiBXZSB0cnkgY3JlYXRpbmcgYW4gU1ZHLCBhZGRpbmcgaXQgdG8gdGhlIGRvY3VtZW50RWxlbWVudCBhbmQgdG9zcyB0aGUgZWxlbWVudCBpbiB0aGVyZSBzbyB0aGF0IGl0J3MgZGVmaW5pdGVseSBwYXJ0IG9mIHRoZSByZW5kZXJpbmcgdHJlZSwgdGhlbiBncmFiIHRoZSBiYm94IGFuZCBpZiBpdCB3b3Jrcywgd2UgYWN0dWFsbHkgc3dhcCBvdXQgdGhlIG9yaWdpbmFsIGdldEJCb3goKSBtZXRob2QgZm9yIG91ciBvd24gdGhhdCBkb2VzIHRoZXNlIGV4dHJhIHN0ZXBzIHdoZW5ldmVyIGdldEJCb3ggaXMgbmVlZGVkLiBUaGlzIGhlbHBzIGVuc3VyZSB0aGF0IHBlcmZvcm1hbmNlIGlzIG9wdGltYWwgKG9ubHkgZG8gYWxsIHRoZXNlIGV4dHJhIHN0ZXBzIHdoZW4gYWJzb2x1dGVseSBuZWNlc3NhcnkuLi5tb3N0IGVsZW1lbnRzIGRvbid0IG5lZWQgaXQpLlxuICB2YXIgc3ZnID0gX2NyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgdGhpcy5vd25lclNWR0VsZW1lbnQgJiYgdGhpcy5vd25lclNWR0VsZW1lbnQuZ2V0QXR0cmlidXRlKFwieG1sbnNcIikgfHwgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiKSxcbiAgICAgIG9sZFBhcmVudCA9IHRoaXMucGFyZW50Tm9kZSxcbiAgICAgIG9sZFNpYmxpbmcgPSB0aGlzLm5leHRTaWJsaW5nLFxuICAgICAgb2xkQ1NTID0gdGhpcy5zdHlsZS5jc3NUZXh0LFxuICAgICAgYmJveDtcblxuICBfZG9jRWxlbWVudC5hcHBlbmRDaGlsZChzdmcpO1xuXG4gIHN2Zy5hcHBlbmRDaGlsZCh0aGlzKTtcbiAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gIGlmIChzd2FwSWZQb3NzaWJsZSkge1xuICAgIHRyeSB7XG4gICAgICBiYm94ID0gdGhpcy5nZXRCQm94KCk7XG4gICAgICB0aGlzLl9nc2FwQkJveCA9IHRoaXMuZ2V0QkJveDsgLy9zdG9yZSB0aGUgb3JpZ2luYWxcblxuICAgICAgdGhpcy5nZXRCQm94ID0gX2dldEJCb3hIYWNrO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH0gZWxzZSBpZiAodGhpcy5fZ3NhcEJCb3gpIHtcbiAgICBiYm94ID0gdGhpcy5fZ3NhcEJCb3goKTtcbiAgfVxuXG4gIGlmIChvbGRQYXJlbnQpIHtcbiAgICBpZiAob2xkU2libGluZykge1xuICAgICAgb2xkUGFyZW50Lmluc2VydEJlZm9yZSh0aGlzLCBvbGRTaWJsaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2xkUGFyZW50LmFwcGVuZENoaWxkKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIF9kb2NFbGVtZW50LnJlbW92ZUNoaWxkKHN2Zyk7XG5cbiAgdGhpcy5zdHlsZS5jc3NUZXh0ID0gb2xkQ1NTO1xuICByZXR1cm4gYmJveDtcbn0sXG4gICAgX2dldEF0dHJpYnV0ZUZhbGxiYWNrcyA9IGZ1bmN0aW9uIF9nZXRBdHRyaWJ1dGVGYWxsYmFja3ModGFyZ2V0LCBhdHRyaWJ1dGVzQXJyYXkpIHtcbiAgdmFyIGkgPSBhdHRyaWJ1dGVzQXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlIChpLS0pIHtcbiAgICBpZiAodGFyZ2V0Lmhhc0F0dHJpYnV0ZShhdHRyaWJ1dGVzQXJyYXlbaV0pKSB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVzQXJyYXlbaV0pO1xuICAgIH1cbiAgfVxufSxcbiAgICBfZ2V0QkJveCA9IGZ1bmN0aW9uIF9nZXRCQm94KHRhcmdldCkge1xuICB2YXIgYm91bmRzO1xuXG4gIHRyeSB7XG4gICAgYm91bmRzID0gdGFyZ2V0LmdldEJCb3goKTsgLy9GaXJlZm94IHRocm93cyBlcnJvcnMgaWYgeW91IHRyeSBjYWxsaW5nIGdldEJCb3goKSBvbiBhbiBTVkcgZWxlbWVudCB0aGF0J3Mgbm90IHJlbmRlcmVkIChsaWtlIGluIGEgPHN5bWJvbD4gb3IgPGRlZnM+KS4gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NjEyMTE4XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgYm91bmRzID0gX2dldEJCb3hIYWNrLmNhbGwodGFyZ2V0LCB0cnVlKTtcbiAgfVxuXG4gIGJvdW5kcyAmJiAoYm91bmRzLndpZHRoIHx8IGJvdW5kcy5oZWlnaHQpIHx8IHRhcmdldC5nZXRCQm94ID09PSBfZ2V0QkJveEhhY2sgfHwgKGJvdW5kcyA9IF9nZXRCQm94SGFjay5jYWxsKHRhcmdldCwgdHJ1ZSkpOyAvL3NvbWUgYnJvd3NlcnMgKGxpa2UgRmlyZWZveCkgbWlzcmVwb3J0IHRoZSBib3VuZHMgaWYgdGhlIGVsZW1lbnQgaGFzIHplcm8gd2lkdGggYW5kIGhlaWdodCAoaXQganVzdCBhc3N1bWVzIGl0J3MgYXQgeDowLCB5OjApLCB0aHVzIHdlIG5lZWQgdG8gbWFudWFsbHkgZ3JhYiB0aGUgcG9zaXRpb24gaW4gdGhhdCBjYXNlLlxuXG4gIHJldHVybiBib3VuZHMgJiYgIWJvdW5kcy53aWR0aCAmJiAhYm91bmRzLnggJiYgIWJvdW5kcy55ID8ge1xuICAgIHg6ICtfZ2V0QXR0cmlidXRlRmFsbGJhY2tzKHRhcmdldCwgW1wieFwiLCBcImN4XCIsIFwieDFcIl0pIHx8IDAsXG4gICAgeTogK19nZXRBdHRyaWJ1dGVGYWxsYmFja3ModGFyZ2V0LCBbXCJ5XCIsIFwiY3lcIiwgXCJ5MVwiXSkgfHwgMCxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDBcbiAgfSA6IGJvdW5kcztcbn0sXG4gICAgX2lzU1ZHID0gZnVuY3Rpb24gX2lzU1ZHKGUpIHtcbiAgcmV0dXJuICEhKGUuZ2V0Q1RNICYmICghZS5wYXJlbnROb2RlIHx8IGUub3duZXJTVkdFbGVtZW50KSAmJiBfZ2V0QkJveChlKSk7XG59LFxuICAgIC8vcmVwb3J0cyBpZiB0aGUgZWxlbWVudCBpcyBhbiBTVkcgb24gd2hpY2ggZ2V0QkJveCgpIGFjdHVhbGx5IHdvcmtzXG5fcmVtb3ZlUHJvcGVydHkgPSBmdW5jdGlvbiBfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSkge1xuICBpZiAocHJvcGVydHkpIHtcbiAgICB2YXIgc3R5bGUgPSB0YXJnZXQuc3R5bGU7XG5cbiAgICBpZiAocHJvcGVydHkgaW4gX3RyYW5zZm9ybVByb3BzICYmIHByb3BlcnR5ICE9PSBfdHJhbnNmb3JtT3JpZ2luUHJvcCkge1xuICAgICAgcHJvcGVydHkgPSBfdHJhbnNmb3JtUHJvcDtcbiAgICB9XG5cbiAgICBpZiAoc3R5bGUucmVtb3ZlUHJvcGVydHkpIHtcbiAgICAgIGlmIChwcm9wZXJ0eS5zdWJzdHIoMCwgMikgPT09IFwibXNcIiB8fCBwcm9wZXJ0eS5zdWJzdHIoMCwgNikgPT09IFwid2Via2l0XCIpIHtcbiAgICAgICAgLy9NaWNyb3NvZnQgYW5kIHNvbWUgV2Via2l0IGJyb3dzZXJzIGRvbid0IGNvbmZvcm0gdG8gdGhlIHN0YW5kYXJkIG9mIGNhcGl0YWxpemluZyB0aGUgZmlyc3QgcHJlZml4IGNoYXJhY3Rlciwgc28gd2UgYWRqdXN0IHNvIHRoYXQgd2hlbiB3ZSBwcmVmaXggdGhlIGNhcHMgd2l0aCBhIGRhc2gsIGl0J3MgY29ycmVjdCAob3RoZXJ3aXNlIGl0J2QgYmUgXCJtcy10cmFuc2Zvcm1cIiBpbnN0ZWFkIG9mIFwiLW1zLXRyYW5zZm9ybVwiIGZvciBJRTksIGZvciBleGFtcGxlKVxuICAgICAgICBwcm9wZXJ0eSA9IFwiLVwiICsgcHJvcGVydHk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlLnJlbW92ZVByb3BlcnR5KHByb3BlcnR5LnJlcGxhY2UoX2NhcHNFeHAsIFwiLSQxXCIpLnRvTG93ZXJDYXNlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvL25vdGU6IG9sZCB2ZXJzaW9ucyBvZiBJRSB1c2UgXCJyZW1vdmVBdHRyaWJ1dGUoKVwiIGluc3RlYWQgb2YgXCJyZW1vdmVQcm9wZXJ0eSgpXCJcbiAgICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShwcm9wZXJ0eSk7XG4gICAgfVxuICB9XG59LFxuICAgIF9hZGROb25Ud2VlbmluZ1BUID0gZnVuY3Rpb24gX2FkZE5vblR3ZWVuaW5nUFQocGx1Z2luLCB0YXJnZXQsIHByb3BlcnR5LCBiZWdpbm5pbmcsIGVuZCwgb25seVNldEF0RW5kKSB7XG4gIHZhciBwdCA9IG5ldyBQcm9wVHdlZW4ocGx1Z2luLl9wdCwgdGFyZ2V0LCBwcm9wZXJ0eSwgMCwgMSwgb25seVNldEF0RW5kID8gX3JlbmRlck5vblR3ZWVuaW5nVmFsdWVPbmx5QXRFbmQgOiBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZSk7XG4gIHBsdWdpbi5fcHQgPSBwdDtcbiAgcHQuYiA9IGJlZ2lubmluZztcbiAgcHQuZSA9IGVuZDtcblxuICBwbHVnaW4uX3Byb3BzLnB1c2gocHJvcGVydHkpO1xuXG4gIHJldHVybiBwdDtcbn0sXG4gICAgX25vbkNvbnZlcnRpYmxlVW5pdHMgPSB7XG4gIGRlZzogMSxcbiAgcmFkOiAxLFxuICB0dXJuOiAxXG59LFxuICAgIC8vdGFrZXMgYSBzaW5nbGUgdmFsdWUgbGlrZSAyMHB4IGFuZCBjb252ZXJ0cyBpdCB0byB0aGUgdW5pdCBzcGVjaWZpZWQsIGxpa2UgXCIlXCIsIHJldHVybmluZyBvbmx5IHRoZSBudW1lcmljIGFtb3VudC5cbl9jb252ZXJ0VG9Vbml0ID0gZnVuY3Rpb24gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHVuaXQpIHtcbiAgdmFyIGN1clZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSkgfHwgMCxcbiAgICAgIGN1clVuaXQgPSAodmFsdWUgKyBcIlwiKS50cmltKCkuc3Vic3RyKChjdXJWYWx1ZSArIFwiXCIpLmxlbmd0aCkgfHwgXCJweFwiLFxuICAgICAgLy8gc29tZSBicm93c2VycyBsZWF2ZSBleHRyYSB3aGl0ZXNwYWNlIGF0IHRoZSBiZWdpbm5pbmcgb2YgQ1NTIHZhcmlhYmxlcywgaGVuY2UgdGhlIG5lZWQgdG8gdHJpbSgpXG4gIHN0eWxlID0gX3RlbXBEaXYuc3R5bGUsXG4gICAgICBob3Jpem9udGFsID0gX2hvcml6b250YWxFeHAudGVzdChwcm9wZXJ0eSksXG4gICAgICBpc1Jvb3RTVkcgPSB0YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInN2Z1wiLFxuICAgICAgbWVhc3VyZVByb3BlcnR5ID0gKGlzUm9vdFNWRyA/IFwiY2xpZW50XCIgOiBcIm9mZnNldFwiKSArIChob3Jpem9udGFsID8gXCJXaWR0aFwiIDogXCJIZWlnaHRcIiksXG4gICAgICBhbW91bnQgPSAxMDAsXG4gICAgICB0b1BpeGVscyA9IHVuaXQgPT09IFwicHhcIixcbiAgICAgIHRvUGVyY2VudCA9IHVuaXQgPT09IFwiJVwiLFxuICAgICAgcHgsXG4gICAgICBwYXJlbnQsXG4gICAgICBjYWNoZSxcbiAgICAgIGlzU1ZHO1xuXG4gIGlmICh1bml0ID09PSBjdXJVbml0IHx8ICFjdXJWYWx1ZSB8fCBfbm9uQ29udmVydGlibGVVbml0c1t1bml0XSB8fCBfbm9uQ29udmVydGlibGVVbml0c1tjdXJVbml0XSkge1xuICAgIHJldHVybiBjdXJWYWx1ZTtcbiAgfVxuXG4gIGN1clVuaXQgIT09IFwicHhcIiAmJiAhdG9QaXhlbHMgJiYgKGN1clZhbHVlID0gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIFwicHhcIikpO1xuICBpc1NWRyA9IHRhcmdldC5nZXRDVE0gJiYgX2lzU1ZHKHRhcmdldCk7XG5cbiAgaWYgKCh0b1BlcmNlbnQgfHwgY3VyVW5pdCA9PT0gXCIlXCIpICYmIChfdHJhbnNmb3JtUHJvcHNbcHJvcGVydHldIHx8IH5wcm9wZXJ0eS5pbmRleE9mKFwiYWRpdXNcIikpKSB7XG4gICAgcHggPSBpc1NWRyA/IHRhcmdldC5nZXRCQm94KClbaG9yaXpvbnRhbCA/IFwid2lkdGhcIiA6IFwiaGVpZ2h0XCJdIDogdGFyZ2V0W21lYXN1cmVQcm9wZXJ0eV07XG4gICAgcmV0dXJuIF9yb3VuZCh0b1BlcmNlbnQgPyBjdXJWYWx1ZSAvIHB4ICogYW1vdW50IDogY3VyVmFsdWUgLyAxMDAgKiBweCk7XG4gIH1cblxuICBzdHlsZVtob3Jpem9udGFsID8gXCJ3aWR0aFwiIDogXCJoZWlnaHRcIl0gPSBhbW91bnQgKyAodG9QaXhlbHMgPyBjdXJVbml0IDogdW5pdCk7XG4gIHBhcmVudCA9IH5wcm9wZXJ0eS5pbmRleE9mKFwiYWRpdXNcIikgfHwgdW5pdCA9PT0gXCJlbVwiICYmIHRhcmdldC5hcHBlbmRDaGlsZCAmJiAhaXNSb290U1ZHID8gdGFyZ2V0IDogdGFyZ2V0LnBhcmVudE5vZGU7XG5cbiAgaWYgKGlzU1ZHKSB7XG4gICAgcGFyZW50ID0gKHRhcmdldC5vd25lclNWR0VsZW1lbnQgfHwge30pLnBhcmVudE5vZGU7XG4gIH1cblxuICBpZiAoIXBhcmVudCB8fCBwYXJlbnQgPT09IF9kb2MgfHwgIXBhcmVudC5hcHBlbmRDaGlsZCkge1xuICAgIHBhcmVudCA9IF9kb2MuYm9keTtcbiAgfVxuXG4gIGNhY2hlID0gcGFyZW50Ll9nc2FwO1xuXG4gIGlmIChjYWNoZSAmJiB0b1BlcmNlbnQgJiYgY2FjaGUud2lkdGggJiYgaG9yaXpvbnRhbCAmJiBjYWNoZS50aW1lID09PSBfdGlja2VyLnRpbWUpIHtcbiAgICByZXR1cm4gX3JvdW5kKGN1clZhbHVlIC8gY2FjaGUud2lkdGggKiBhbW91bnQpO1xuICB9IGVsc2Uge1xuICAgICh0b1BlcmNlbnQgfHwgY3VyVW5pdCA9PT0gXCIlXCIpICYmIChzdHlsZS5wb3NpdGlvbiA9IF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgXCJwb3NpdGlvblwiKSk7XG4gICAgcGFyZW50ID09PSB0YXJnZXQgJiYgKHN0eWxlLnBvc2l0aW9uID0gXCJzdGF0aWNcIik7IC8vIGxpa2UgZm9yIGJvcmRlclJhZGl1cywgaWYgaXQncyBhICUgd2UgbXVzdCBoYXZlIGl0IHJlbGF0aXZlIHRvIHRoZSB0YXJnZXQgaXRzZWxmIGJ1dCB0aGF0IG1heSBub3QgaGF2ZSBwb3NpdGlvbjogcmVsYXRpdmUgb3IgcG9zaXRpb246IGFic29sdXRlIGluIHdoaWNoIGNhc2UgaXQnZCBnbyB1cCB0aGUgY2hhaW4gdW50aWwgaXQgZmluZHMgaXRzIG9mZnNldFBhcmVudCAoYmFkKS4gcG9zaXRpb246IHN0YXRpYyBwcm90ZWN0cyBhZ2FpbnN0IHRoYXQuXG5cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoX3RlbXBEaXYpO1xuICAgIHB4ID0gX3RlbXBEaXZbbWVhc3VyZVByb3BlcnR5XTtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoX3RlbXBEaXYpO1xuICAgIHN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXG4gICAgaWYgKGhvcml6b250YWwgJiYgdG9QZXJjZW50KSB7XG4gICAgICBjYWNoZSA9IF9nZXRDYWNoZShwYXJlbnQpO1xuICAgICAgY2FjaGUudGltZSA9IF90aWNrZXIudGltZTtcbiAgICAgIGNhY2hlLndpZHRoID0gcGFyZW50W21lYXN1cmVQcm9wZXJ0eV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9yb3VuZCh0b1BpeGVscyA/IHB4ICogY3VyVmFsdWUgLyBhbW91bnQgOiBweCAmJiBjdXJWYWx1ZSA/IGFtb3VudCAvIHB4ICogY3VyVmFsdWUgOiAwKTtcbn0sXG4gICAgX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdW5pdCwgdW5jYWNoZSkge1xuICB2YXIgdmFsdWU7XG4gIF9wbHVnaW5Jbml0dGVkIHx8IF9pbml0Q29yZSgpO1xuXG4gIGlmIChwcm9wZXJ0eSBpbiBfcHJvcGVydHlBbGlhc2VzICYmIHByb3BlcnR5ICE9PSBcInRyYW5zZm9ybVwiKSB7XG4gICAgcHJvcGVydHkgPSBfcHJvcGVydHlBbGlhc2VzW3Byb3BlcnR5XTtcblxuICAgIGlmICh+cHJvcGVydHkuaW5kZXhPZihcIixcIikpIHtcbiAgICAgIHByb3BlcnR5ID0gcHJvcGVydHkuc3BsaXQoXCIsXCIpWzBdO1xuICAgIH1cbiAgfVxuXG4gIGlmIChfdHJhbnNmb3JtUHJvcHNbcHJvcGVydHldICYmIHByb3BlcnR5ICE9PSBcInRyYW5zZm9ybVwiKSB7XG4gICAgdmFsdWUgPSBfcGFyc2VUcmFuc2Zvcm0odGFyZ2V0LCB1bmNhY2hlKTtcbiAgICB2YWx1ZSA9IHByb3BlcnR5ICE9PSBcInRyYW5zZm9ybU9yaWdpblwiID8gdmFsdWVbcHJvcGVydHldIDogdmFsdWUuc3ZnID8gdmFsdWUub3JpZ2luIDogX2ZpcnN0VHdvT25seShfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIF90cmFuc2Zvcm1PcmlnaW5Qcm9wKSkgKyBcIiBcIiArIHZhbHVlLnpPcmlnaW4gKyBcInB4XCI7XG4gIH0gZWxzZSB7XG4gICAgdmFsdWUgPSB0YXJnZXQuc3R5bGVbcHJvcGVydHldO1xuXG4gICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZSA9PT0gXCJhdXRvXCIgfHwgdW5jYWNoZSB8fCB+KHZhbHVlICsgXCJcIikuaW5kZXhPZihcImNhbGMoXCIpKSB7XG4gICAgICB2YWx1ZSA9IF9zcGVjaWFsUHJvcHNbcHJvcGVydHldICYmIF9zcGVjaWFsUHJvcHNbcHJvcGVydHldKHRhcmdldCwgcHJvcGVydHksIHVuaXQpIHx8IF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgcHJvcGVydHkpIHx8IF9nZXRQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5KSB8fCAocHJvcGVydHkgPT09IFwib3BhY2l0eVwiID8gMSA6IDApOyAvLyBub3RlOiBzb21lIGJyb3dzZXJzLCBsaWtlIEZpcmVmb3gsIGRvbid0IHJlcG9ydCBib3JkZXJSYWRpdXMgY29ycmVjdGx5ISBJbnN0ZWFkLCBpdCBvbmx5IHJlcG9ydHMgZXZlcnkgY29ybmVyIGxpa2UgIGJvcmRlclRvcExlZnRSYWRpdXNcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pdCAmJiAhfih2YWx1ZSArIFwiXCIpLnRyaW0oKS5pbmRleE9mKFwiIFwiKSA/IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCB1bml0KSArIHVuaXQgOiB2YWx1ZTtcbn0sXG4gICAgX3R3ZWVuQ29tcGxleENTU1N0cmluZyA9IGZ1bmN0aW9uIF90d2VlbkNvbXBsZXhDU1NTdHJpbmcodGFyZ2V0LCBwcm9wLCBzdGFydCwgZW5kKSB7XG4gIC8vIG5vdGU6IHdlIGNhbGwgX3R3ZWVuQ29tcGxleENTU1N0cmluZy5jYWxsKHBsdWdpbkluc3RhbmNlLi4uKSB0byBlbnN1cmUgdGhhdCBpdCdzIHNjb3BlZCBwcm9wZXJseS4gV2UgbWF5IGNhbGwgaXQgZnJvbSB3aXRoaW4gYSBwbHVnaW4gdG9vLCB0aHVzIFwidGhpc1wiIHdvdWxkIHJlZmVyIHRvIHRoZSBwbHVnaW4uXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPT09IFwibm9uZVwiKSB7XG4gICAgLy8gc29tZSBicm93c2VycyBsaWtlIFNhZmFyaSBhY3R1YWxseSBQUkVGRVIgdGhlIHByZWZpeGVkIHByb3BlcnR5IGFuZCBtaXMtcmVwb3J0IHRoZSB1bnByZWZpeGVkIHZhbHVlIGxpa2UgY2xpcFBhdGggKEJVRykuIEluIG90aGVyIHdvcmRzLCBldmVuIHRob3VnaCBjbGlwUGF0aCBleGlzdHMgaW4gdGhlIHN0eWxlIChcImNsaXBQYXRoXCIgaW4gdGFyZ2V0LnN0eWxlKSBhbmQgaXQncyBzZXQgaW4gdGhlIENTUyBwcm9wZXJseSAoYWxvbmcgd2l0aCAtd2Via2l0LWNsaXAtcGF0aCksIFNhZmFyaSByZXBvcnRzIGNsaXBQYXRoIGFzIFwibm9uZVwiIHdoZXJlYXMgV2Via2l0Q2xpcFBhdGggcmVwb3J0cyBhY2N1cmF0ZWx5IGxpa2UgXCJlbGxpcHNlKDEwMCUgMCUgYXQgNTAlIDAlKVwiLCBzbyBpbiB0aGlzIGNhc2Ugd2UgbXVzdCBTV0lUQ0ggdG8gdXNpbmcgdGhlIHByZWZpeGVkIHByb3BlcnR5IGluc3RlYWQuIFNlZSBodHRwczovL2dyZWVuc29jay5jb20vZm9ydW1zL3RvcGljLzE4MzEwLWNsaXBwYXRoLWRvZXNudC13b3JrLW9uLWlvcy9cbiAgICB2YXIgcCA9IF9jaGVja1Byb3BQcmVmaXgocHJvcCwgdGFyZ2V0LCAxKSxcbiAgICAgICAgcyA9IHAgJiYgX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBwLCAxKTtcblxuICAgIGlmIChzICYmIHMgIT09IHN0YXJ0KSB7XG4gICAgICBwcm9wID0gcDtcbiAgICAgIHN0YXJ0ID0gcztcbiAgICB9IGVsc2UgaWYgKHByb3AgPT09IFwiYm9yZGVyQ29sb3JcIikge1xuICAgICAgc3RhcnQgPSBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIFwiYm9yZGVyVG9wQ29sb3JcIik7IC8vIEZpcmVmb3ggYnVnOiBhbHdheXMgcmVwb3J0cyBcImJvcmRlckNvbG9yXCIgYXMgXCJcIiwgc28gd2UgbXVzdCBmYWxsIGJhY2sgdG8gYm9yZGVyVG9wQ29sb3IuIFNlZSBodHRwczovL2dyZWVuc29jay5jb20vZm9ydW1zL3RvcGljLzI0NTgzLWhvdy10by1yZXR1cm4tY29sb3JzLXRoYXQtaS1oYWQtYWZ0ZXItcmV2ZXJzZS9cbiAgICB9XG4gIH1cblxuICB2YXIgcHQgPSBuZXcgUHJvcFR3ZWVuKHRoaXMuX3B0LCB0YXJnZXQuc3R5bGUsIHByb3AsIDAsIDEsIF9yZW5kZXJDb21wbGV4U3RyaW5nKSxcbiAgICAgIGluZGV4ID0gMCxcbiAgICAgIG1hdGNoSW5kZXggPSAwLFxuICAgICAgYSxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHN0YXJ0VmFsdWVzLFxuICAgICAgc3RhcnROdW0sXG4gICAgICBjb2xvcixcbiAgICAgIHN0YXJ0VmFsdWUsXG4gICAgICBlbmRWYWx1ZSxcbiAgICAgIGVuZE51bSxcbiAgICAgIGNodW5rLFxuICAgICAgZW5kVW5pdCxcbiAgICAgIHN0YXJ0VW5pdCxcbiAgICAgIGVuZFZhbHVlcztcbiAgcHQuYiA9IHN0YXJ0O1xuICBwdC5lID0gZW5kO1xuICBzdGFydCArPSBcIlwiOyAvLyBlbnN1cmUgdmFsdWVzIGFyZSBzdHJpbmdzXG5cbiAgZW5kICs9IFwiXCI7XG5cbiAgaWYgKGVuZCA9PT0gXCJhdXRvXCIpIHtcbiAgICB0YXJnZXQuc3R5bGVbcHJvcF0gPSBlbmQ7XG4gICAgZW5kID0gX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBwcm9wKSB8fCBlbmQ7XG4gICAgdGFyZ2V0LnN0eWxlW3Byb3BdID0gc3RhcnQ7XG4gIH1cblxuICBhID0gW3N0YXJ0LCBlbmRdO1xuXG4gIF9jb2xvclN0cmluZ0ZpbHRlcihhKTsgLy8gcGFzcyBhbiBhcnJheSB3aXRoIHRoZSBzdGFydGluZyBhbmQgZW5kaW5nIHZhbHVlcyBhbmQgbGV0IHRoZSBmaWx0ZXIgZG8gd2hhdGV2ZXIgaXQgbmVlZHMgdG8gdGhlIHZhbHVlcy4gSWYgY29sb3JzIGFyZSBmb3VuZCwgaXQgcmV0dXJucyB0cnVlIGFuZCB0aGVuIHdlIG11c3QgbWF0Y2ggd2hlcmUgdGhlIGNvbG9yIHNob3dzIHVwIG9yZGVyLXdpc2UgYmVjYXVzZSBmb3IgdGhpbmdzIGxpa2UgYm94U2hhZG93LCBzb21ldGltZXMgdGhlIGJyb3dzZXIgcHJvdmlkZXMgdGhlIGNvbXB1dGVkIHZhbHVlcyB3aXRoIHRoZSBjb2xvciBGSVJTVCwgYnV0IHRoZSB1c2VyIHByb3ZpZGVzIGl0IHdpdGggdGhlIGNvbG9yIExBU1QsIHNvIGZsaXAgdGhlbSBpZiBuZWNlc3NhcnkuIFNhbWUgZm9yIGRyb3Atc2hhZG93KCkuXG5cblxuICBzdGFydCA9IGFbMF07XG4gIGVuZCA9IGFbMV07XG4gIHN0YXJ0VmFsdWVzID0gc3RhcnQubWF0Y2goX251bVdpdGhVbml0RXhwKSB8fCBbXTtcbiAgZW5kVmFsdWVzID0gZW5kLm1hdGNoKF9udW1XaXRoVW5pdEV4cCkgfHwgW107XG5cbiAgaWYgKGVuZFZhbHVlcy5sZW5ndGgpIHtcbiAgICB3aGlsZSAocmVzdWx0ID0gX251bVdpdGhVbml0RXhwLmV4ZWMoZW5kKSkge1xuICAgICAgZW5kVmFsdWUgPSByZXN1bHRbMF07XG4gICAgICBjaHVuayA9IGVuZC5zdWJzdHJpbmcoaW5kZXgsIHJlc3VsdC5pbmRleCk7XG5cbiAgICAgIGlmIChjb2xvcikge1xuICAgICAgICBjb2xvciA9IChjb2xvciArIDEpICUgNTtcbiAgICAgIH0gZWxzZSBpZiAoY2h1bmsuc3Vic3RyKC01KSA9PT0gXCJyZ2JhKFwiIHx8IGNodW5rLnN1YnN0cigtNSkgPT09IFwiaHNsYShcIikge1xuICAgICAgICBjb2xvciA9IDE7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmRWYWx1ZSAhPT0gKHN0YXJ0VmFsdWUgPSBzdGFydFZhbHVlc1ttYXRjaEluZGV4KytdIHx8IFwiXCIpKSB7XG4gICAgICAgIHN0YXJ0TnVtID0gcGFyc2VGbG9hdChzdGFydFZhbHVlKSB8fCAwO1xuICAgICAgICBzdGFydFVuaXQgPSBzdGFydFZhbHVlLnN1YnN0cigoc3RhcnROdW0gKyBcIlwiKS5sZW5ndGgpO1xuICAgICAgICBlbmRWYWx1ZS5jaGFyQXQoMSkgPT09IFwiPVwiICYmIChlbmRWYWx1ZSA9IF9wYXJzZVJlbGF0aXZlKHN0YXJ0TnVtLCBlbmRWYWx1ZSkgKyBzdGFydFVuaXQpO1xuICAgICAgICBlbmROdW0gPSBwYXJzZUZsb2F0KGVuZFZhbHVlKTtcbiAgICAgICAgZW5kVW5pdCA9IGVuZFZhbHVlLnN1YnN0cigoZW5kTnVtICsgXCJcIikubGVuZ3RoKTtcbiAgICAgICAgaW5kZXggPSBfbnVtV2l0aFVuaXRFeHAubGFzdEluZGV4IC0gZW5kVW5pdC5sZW5ndGg7XG5cbiAgICAgICAgaWYgKCFlbmRVbml0KSB7XG4gICAgICAgICAgLy9pZiBzb21ldGhpbmcgbGlrZSBcInBlcnNwZWN0aXZlOjMwMFwiIGlzIHBhc3NlZCBpbiBhbmQgd2UgbXVzdCBhZGQgYSB1bml0IHRvIHRoZSBlbmRcbiAgICAgICAgICBlbmRVbml0ID0gZW5kVW5pdCB8fCBfY29uZmlnLnVuaXRzW3Byb3BdIHx8IHN0YXJ0VW5pdDtcblxuICAgICAgICAgIGlmIChpbmRleCA9PT0gZW5kLmxlbmd0aCkge1xuICAgICAgICAgICAgZW5kICs9IGVuZFVuaXQ7XG4gICAgICAgICAgICBwdC5lICs9IGVuZFVuaXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXJ0VW5pdCAhPT0gZW5kVW5pdCkge1xuICAgICAgICAgIHN0YXJ0TnVtID0gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBwcm9wLCBzdGFydFZhbHVlLCBlbmRVbml0KSB8fCAwO1xuICAgICAgICB9IC8vIHRoZXNlIG5lc3RlZCBQcm9wVHdlZW5zIGFyZSBoYW5kbGVkIGluIGEgc3BlY2lhbCB3YXkgLSB3ZSdsbCBuZXZlciBhY3R1YWxseSBjYWxsIGEgcmVuZGVyIG9yIHNldHRlciBtZXRob2Qgb24gdGhlbS4gV2UnbGwganVzdCBsb29wIHRocm91Z2ggdGhlbSBpbiB0aGUgcGFyZW50IGNvbXBsZXggc3RyaW5nIFByb3BUd2VlbidzIHJlbmRlciBtZXRob2QuXG5cblxuICAgICAgICBwdC5fcHQgPSB7XG4gICAgICAgICAgX25leHQ6IHB0Ll9wdCxcbiAgICAgICAgICBwOiBjaHVuayB8fCBtYXRjaEluZGV4ID09PSAxID8gY2h1bmsgOiBcIixcIixcbiAgICAgICAgICAvL25vdGU6IFNWRyBzcGVjIGFsbG93cyBvbWlzc2lvbiBvZiBjb21tYS9zcGFjZSB3aGVuIGEgbmVnYXRpdmUgc2lnbiBpcyB3ZWRnZWQgYmV0d2VlbiB0d28gbnVtYmVycywgbGlrZSAyLjUtNS4zIGluc3RlYWQgb2YgMi41LC01LjMgYnV0IHdoZW4gdHdlZW5pbmcsIHRoZSBuZWdhdGl2ZSB2YWx1ZSBtYXkgc3dpdGNoIHRvIHBvc2l0aXZlLCBzbyB3ZSBpbnNlcnQgdGhlIGNvbW1hIGp1c3QgaW4gY2FzZS5cbiAgICAgICAgICBzOiBzdGFydE51bSxcbiAgICAgICAgICBjOiBlbmROdW0gLSBzdGFydE51bSxcbiAgICAgICAgICBtOiBjb2xvciAmJiBjb2xvciA8IDQgfHwgcHJvcCA9PT0gXCJ6SW5kZXhcIiA/IE1hdGgucm91bmQgOiAwXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHQuYyA9IGluZGV4IDwgZW5kLmxlbmd0aCA/IGVuZC5zdWJzdHJpbmcoaW5kZXgsIGVuZC5sZW5ndGgpIDogXCJcIjsgLy93ZSB1c2UgdGhlIFwiY1wiIG9mIHRoZSBQcm9wVHdlZW4gdG8gc3RvcmUgdGhlIGZpbmFsIHBhcnQgb2YgdGhlIHN0cmluZyAoYWZ0ZXIgdGhlIGxhc3QgbnVtYmVyKVxuICB9IGVsc2Uge1xuICAgIHB0LnIgPSBwcm9wID09PSBcImRpc3BsYXlcIiAmJiBlbmQgPT09IFwibm9uZVwiID8gX3JlbmRlck5vblR3ZWVuaW5nVmFsdWVPbmx5QXRFbmQgOiBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZTtcbiAgfVxuXG4gIF9yZWxFeHAudGVzdChlbmQpICYmIChwdC5lID0gMCk7IC8vaWYgdGhlIGVuZCBzdHJpbmcgY29udGFpbnMgcmVsYXRpdmUgdmFsdWVzIG9yIGR5bmFtaWMgcmFuZG9tKC4uLikgdmFsdWVzLCBkZWxldGUgdGhlIGVuZCBpdCBzbyB0aGF0IG9uIHRoZSBmaW5hbCByZW5kZXIgd2UgZG9uJ3QgYWN0dWFsbHkgc2V0IGl0IHRvIHRoZSBzdHJpbmcgd2l0aCArPSBvciAtPSBjaGFyYWN0ZXJzIChmb3JjZXMgaXQgdG8gdXNlIHRoZSBjYWxjdWxhdGVkIHZhbHVlKS5cblxuICB0aGlzLl9wdCA9IHB0OyAvL3N0YXJ0IHRoZSBsaW5rZWQgbGlzdCB3aXRoIHRoaXMgbmV3IFByb3BUd2Vlbi4gUmVtZW1iZXIsIHdlIGNhbGwgX3R3ZWVuQ29tcGxleENTU1N0cmluZy5jYWxsKHBsdWdpbkluc3RhbmNlLi4uKSB0byBlbnN1cmUgdGhhdCBpdCdzIHNjb3BlZCBwcm9wZXJseS4gV2UgbWF5IGNhbGwgaXQgZnJvbSB3aXRoaW4gYW5vdGhlciBwbHVnaW4gdG9vLCB0aHVzIFwidGhpc1wiIHdvdWxkIHJlZmVyIHRvIHRoZSBwbHVnaW4uXG5cbiAgcmV0dXJuIHB0O1xufSxcbiAgICBfa2V5d29yZFRvUGVyY2VudCA9IHtcbiAgdG9wOiBcIjAlXCIsXG4gIGJvdHRvbTogXCIxMDAlXCIsXG4gIGxlZnQ6IFwiMCVcIixcbiAgcmlnaHQ6IFwiMTAwJVwiLFxuICBjZW50ZXI6IFwiNTAlXCJcbn0sXG4gICAgX2NvbnZlcnRLZXl3b3Jkc1RvUGVyY2VudGFnZXMgPSBmdW5jdGlvbiBfY29udmVydEtleXdvcmRzVG9QZXJjZW50YWdlcyh2YWx1ZSkge1xuICB2YXIgc3BsaXQgPSB2YWx1ZS5zcGxpdChcIiBcIiksXG4gICAgICB4ID0gc3BsaXRbMF0sXG4gICAgICB5ID0gc3BsaXRbMV0gfHwgXCI1MCVcIjtcblxuICBpZiAoeCA9PT0gXCJ0b3BcIiB8fCB4ID09PSBcImJvdHRvbVwiIHx8IHkgPT09IFwibGVmdFwiIHx8IHkgPT09IFwicmlnaHRcIikge1xuICAgIC8vdGhlIHVzZXIgcHJvdmlkZWQgdGhlbSBpbiB0aGUgd3Jvbmcgb3JkZXIsIHNvIGZsaXAgdGhlbVxuICAgIHZhbHVlID0geDtcbiAgICB4ID0geTtcbiAgICB5ID0gdmFsdWU7XG4gIH1cblxuICBzcGxpdFswXSA9IF9rZXl3b3JkVG9QZXJjZW50W3hdIHx8IHg7XG4gIHNwbGl0WzFdID0gX2tleXdvcmRUb1BlcmNlbnRbeV0gfHwgeTtcbiAgcmV0dXJuIHNwbGl0LmpvaW4oXCIgXCIpO1xufSxcbiAgICBfcmVuZGVyQ2xlYXJQcm9wcyA9IGZ1bmN0aW9uIF9yZW5kZXJDbGVhclByb3BzKHJhdGlvLCBkYXRhKSB7XG4gIGlmIChkYXRhLnR3ZWVuICYmIGRhdGEudHdlZW4uX3RpbWUgPT09IGRhdGEudHdlZW4uX2R1cikge1xuICAgIHZhciB0YXJnZXQgPSBkYXRhLnQsXG4gICAgICAgIHN0eWxlID0gdGFyZ2V0LnN0eWxlLFxuICAgICAgICBwcm9wcyA9IGRhdGEudSxcbiAgICAgICAgY2FjaGUgPSB0YXJnZXQuX2dzYXAsXG4gICAgICAgIHByb3AsXG4gICAgICAgIGNsZWFyVHJhbnNmb3JtcyxcbiAgICAgICAgaTtcblxuICAgIGlmIChwcm9wcyA9PT0gXCJhbGxcIiB8fCBwcm9wcyA9PT0gdHJ1ZSkge1xuICAgICAgc3R5bGUuY3NzVGV4dCA9IFwiXCI7XG4gICAgICBjbGVhclRyYW5zZm9ybXMgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wcyA9IHByb3BzLnNwbGl0KFwiLFwiKTtcbiAgICAgIGkgPSBwcm9wcy5sZW5ndGg7XG5cbiAgICAgIHdoaWxlICgtLWkgPiAtMSkge1xuICAgICAgICBwcm9wID0gcHJvcHNbaV07XG5cbiAgICAgICAgaWYgKF90cmFuc2Zvcm1Qcm9wc1twcm9wXSkge1xuICAgICAgICAgIGNsZWFyVHJhbnNmb3JtcyA9IDE7XG4gICAgICAgICAgcHJvcCA9IHByb3AgPT09IFwidHJhbnNmb3JtT3JpZ2luXCIgPyBfdHJhbnNmb3JtT3JpZ2luUHJvcCA6IF90cmFuc2Zvcm1Qcm9wO1xuICAgICAgICB9XG5cbiAgICAgICAgX3JlbW92ZVByb3BlcnR5KHRhcmdldCwgcHJvcCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNsZWFyVHJhbnNmb3Jtcykge1xuICAgICAgX3JlbW92ZVByb3BlcnR5KHRhcmdldCwgX3RyYW5zZm9ybVByb3ApO1xuXG4gICAgICBpZiAoY2FjaGUpIHtcbiAgICAgICAgY2FjaGUuc3ZnICYmIHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIik7XG5cbiAgICAgICAgX3BhcnNlVHJhbnNmb3JtKHRhcmdldCwgMSk7IC8vIGZvcmNlIGFsbCB0aGUgY2FjaGVkIHZhbHVlcyBiYWNrIHRvIFwibm9ybWFsXCIvaWRlbnRpdHksIG90aGVyd2lzZSBpZiB0aGVyZSdzIGFub3RoZXIgdHdlZW4gdGhhdCdzIGFscmVhZHkgc2V0IHRvIHJlbmRlciB0cmFuc2Zvcm1zIG9uIHRoaXMgZWxlbWVudCwgaXQgY291bGQgZGlzcGxheSB0aGUgd3JvbmcgdmFsdWVzLlxuXG5cbiAgICAgICAgY2FjaGUudW5jYWNoZSA9IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG59LFxuICAgIC8vIG5vdGU6IHNwZWNpYWxQcm9wcyBzaG91bGQgcmV0dXJuIDEgaWYgKGFuZCBvbmx5IGlmKSB0aGV5IGhhdmUgYSBub24temVybyBwcmlvcml0eS4gSXQgaW5kaWNhdGVzIHdlIG5lZWQgdG8gc29ydCB0aGUgbGlua2VkIGxpc3QuXG5fc3BlY2lhbFByb3BzID0ge1xuICBjbGVhclByb3BzOiBmdW5jdGlvbiBjbGVhclByb3BzKHBsdWdpbiwgdGFyZ2V0LCBwcm9wZXJ0eSwgZW5kVmFsdWUsIHR3ZWVuKSB7XG4gICAgaWYgKHR3ZWVuLmRhdGEgIT09IFwiaXNGcm9tU3RhcnRcIikge1xuICAgICAgdmFyIHB0ID0gcGx1Z2luLl9wdCA9IG5ldyBQcm9wVHdlZW4ocGx1Z2luLl9wdCwgdGFyZ2V0LCBwcm9wZXJ0eSwgMCwgMCwgX3JlbmRlckNsZWFyUHJvcHMpO1xuICAgICAgcHQudSA9IGVuZFZhbHVlO1xuICAgICAgcHQucHIgPSAtMTA7XG4gICAgICBwdC50d2VlbiA9IHR3ZWVuO1xuXG4gICAgICBwbHVnaW4uX3Byb3BzLnB1c2gocHJvcGVydHkpO1xuXG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gIH1cbiAgLyogY2xhc3NOYW1lIGZlYXR1cmUgKGFib3V0IDAuNGtiIGd6aXBwZWQpLlxuICAsIGNsYXNzTmFtZShwbHVnaW4sIHRhcmdldCwgcHJvcGVydHksIGVuZFZhbHVlLCB0d2Vlbikge1xuICBcdGxldCBfcmVuZGVyQ2xhc3NOYW1lID0gKHJhdGlvLCBkYXRhKSA9PiB7XG4gIFx0XHRcdGRhdGEuY3NzLnJlbmRlcihyYXRpbywgZGF0YS5jc3MpO1xuICBcdFx0XHRpZiAoIXJhdGlvIHx8IHJhdGlvID09PSAxKSB7XG4gIFx0XHRcdFx0bGV0IGlubGluZSA9IGRhdGEucm12LFxuICBcdFx0XHRcdFx0dGFyZ2V0ID0gZGF0YS50LFxuICBcdFx0XHRcdFx0cDtcbiAgXHRcdFx0XHR0YXJnZXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgcmF0aW8gPyBkYXRhLmUgOiBkYXRhLmIpO1xuICBcdFx0XHRcdGZvciAocCBpbiBpbmxpbmUpIHtcbiAgXHRcdFx0XHRcdF9yZW1vdmVQcm9wZXJ0eSh0YXJnZXQsIHApO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuICBcdFx0fSxcbiAgXHRcdF9nZXRBbGxTdHlsZXMgPSAodGFyZ2V0KSA9PiB7XG4gIFx0XHRcdGxldCBzdHlsZXMgPSB7fSxcbiAgXHRcdFx0XHRjb21wdXRlZCA9IGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KSxcbiAgXHRcdFx0XHRwO1xuICBcdFx0XHRmb3IgKHAgaW4gY29tcHV0ZWQpIHtcbiAgXHRcdFx0XHRpZiAoaXNOYU4ocCkgJiYgcCAhPT0gXCJjc3NUZXh0XCIgJiYgcCAhPT0gXCJsZW5ndGhcIikge1xuICBcdFx0XHRcdFx0c3R5bGVzW3BdID0gY29tcHV0ZWRbcF07XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG4gIFx0XHRcdF9zZXREZWZhdWx0cyhzdHlsZXMsIF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIDEpKTtcbiAgXHRcdFx0cmV0dXJuIHN0eWxlcztcbiAgXHRcdH0sXG4gIFx0XHRzdGFydENsYXNzTGlzdCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSxcbiAgXHRcdHN0eWxlID0gdGFyZ2V0LnN0eWxlLFxuICBcdFx0Y3NzVGV4dCA9IHN0eWxlLmNzc1RleHQsXG4gIFx0XHRjYWNoZSA9IHRhcmdldC5fZ3NhcCxcbiAgXHRcdGNsYXNzUFQgPSBjYWNoZS5jbGFzc1BULFxuICBcdFx0aW5saW5lVG9SZW1vdmVBdEVuZCA9IHt9LFxuICBcdFx0ZGF0YSA9IHt0OnRhcmdldCwgcGx1Z2luOnBsdWdpbiwgcm12OmlubGluZVRvUmVtb3ZlQXRFbmQsIGI6c3RhcnRDbGFzc0xpc3QsIGU6KGVuZFZhbHVlLmNoYXJBdCgxKSAhPT0gXCI9XCIpID8gZW5kVmFsdWUgOiBzdGFydENsYXNzTGlzdC5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoPzpcXFxcc3xeKVwiICsgZW5kVmFsdWUuc3Vic3RyKDIpICsgXCIoPyFbXFxcXHctXSlcIiksIFwiXCIpICsgKChlbmRWYWx1ZS5jaGFyQXQoMCkgPT09IFwiK1wiKSA/IFwiIFwiICsgZW5kVmFsdWUuc3Vic3RyKDIpIDogXCJcIil9LFxuICBcdFx0Y2hhbmdpbmdWYXJzID0ge30sXG4gIFx0XHRzdGFydFZhcnMgPSBfZ2V0QWxsU3R5bGVzKHRhcmdldCksXG4gIFx0XHR0cmFuc2Zvcm1SZWxhdGVkID0gLyh0cmFuc2Zvcm18cGVyc3BlY3RpdmUpL2ksXG4gIFx0XHRlbmRWYXJzLCBwO1xuICBcdGlmIChjbGFzc1BUKSB7XG4gIFx0XHRjbGFzc1BULnIoMSwgY2xhc3NQVC5kKTtcbiAgXHRcdF9yZW1vdmVMaW5rZWRMaXN0SXRlbShjbGFzc1BULmQucGx1Z2luLCBjbGFzc1BULCBcIl9wdFwiKTtcbiAgXHR9XG4gIFx0dGFyZ2V0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGRhdGEuZSk7XG4gIFx0ZW5kVmFycyA9IF9nZXRBbGxTdHlsZXModGFyZ2V0LCB0cnVlKTtcbiAgXHR0YXJnZXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgc3RhcnRDbGFzc0xpc3QpO1xuICBcdGZvciAocCBpbiBlbmRWYXJzKSB7XG4gIFx0XHRpZiAoZW5kVmFyc1twXSAhPT0gc3RhcnRWYXJzW3BdICYmICF0cmFuc2Zvcm1SZWxhdGVkLnRlc3QocCkpIHtcbiAgXHRcdFx0Y2hhbmdpbmdWYXJzW3BdID0gZW5kVmFyc1twXTtcbiAgXHRcdFx0aWYgKCFzdHlsZVtwXSAmJiBzdHlsZVtwXSAhPT0gXCIwXCIpIHtcbiAgXHRcdFx0XHRpbmxpbmVUb1JlbW92ZUF0RW5kW3BdID0gMTtcbiAgXHRcdFx0fVxuICBcdFx0fVxuICBcdH1cbiAgXHRjYWNoZS5jbGFzc1BUID0gcGx1Z2luLl9wdCA9IG5ldyBQcm9wVHdlZW4ocGx1Z2luLl9wdCwgdGFyZ2V0LCBcImNsYXNzTmFtZVwiLCAwLCAwLCBfcmVuZGVyQ2xhc3NOYW1lLCBkYXRhLCAwLCAtMTEpO1xuICBcdGlmIChzdHlsZS5jc3NUZXh0ICE9PSBjc3NUZXh0KSB7IC8vb25seSBhcHBseSBpZiB0aGluZ3MgY2hhbmdlLiBPdGhlcndpc2UsIGluIGNhc2VzIGxpa2UgYSBiYWNrZ3JvdW5kLWltYWdlIHRoYXQncyBwdWxsZWQgZHluYW1pY2FsbHksIGl0IGNvdWxkIGNhdXNlIGEgcmVmcmVzaC4gU2VlIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9mb3J1bXMvdG9waWMvMjAzNjgtcG9zc2libGUtZ3NhcC1idWctc3dpdGNoaW5nLWNsYXNzbmFtZXMtaW4tY2hyb21lLy5cbiAgXHRcdHN0eWxlLmNzc1RleHQgPSBjc3NUZXh0OyAvL3dlIHJlY29yZGVkIGNzc1RleHQgYmVmb3JlIHdlIHN3YXBwZWQgY2xhc3NlcyBhbmQgcmFuIF9nZXRBbGxTdHlsZXMoKSBiZWNhdXNlIGluIGNhc2VzIHdoZW4gYSBjbGFzc05hbWUgdHdlZW4gaXMgb3ZlcndyaXR0ZW4sIHdlIHJlbW92ZSBhbGwgdGhlIHJlbGF0ZWQgdHdlZW5pbmcgcHJvcGVydGllcyBmcm9tIHRoYXQgY2xhc3MgY2hhbmdlIChvdGhlcndpc2UgY2xhc3Mtc3BlY2lmaWMgc3R1ZmYgY2FuJ3Qgb3ZlcnJpZGUgcHJvcGVydGllcyB3ZSd2ZSBkaXJlY3RseSBzZXQgb24gdGhlIHRhcmdldCdzIHN0eWxlIG9iamVjdCBkdWUgdG8gc3BlY2lmaWNpdHkpLlxuICBcdH1cbiAgXHRfcGFyc2VUcmFuc2Zvcm0odGFyZ2V0LCB0cnVlKTsgLy90byBjbGVhciB0aGUgY2FjaGluZyBvZiB0cmFuc2Zvcm1zXG4gIFx0ZGF0YS5jc3MgPSBuZXcgZ3NhcC5wbHVnaW5zLmNzcygpO1xuICBcdGRhdGEuY3NzLmluaXQodGFyZ2V0LCBjaGFuZ2luZ1ZhcnMsIHR3ZWVuKTtcbiAgXHRwbHVnaW4uX3Byb3BzLnB1c2goLi4uZGF0YS5jc3MuX3Byb3BzKTtcbiAgXHRyZXR1cm4gMTtcbiAgfVxuICAqL1xuXG59LFxuXG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFRSQU5TRk9STVNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbl9pZGVudGl0eTJETWF0cml4ID0gWzEsIDAsIDAsIDEsIDAsIDBdLFxuICAgIF9yb3RhdGlvbmFsUHJvcGVydGllcyA9IHt9LFxuICAgIF9pc051bGxUcmFuc2Zvcm0gPSBmdW5jdGlvbiBfaXNOdWxsVHJhbnNmb3JtKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gXCJtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMClcIiB8fCB2YWx1ZSA9PT0gXCJub25lXCIgfHwgIXZhbHVlO1xufSxcbiAgICBfZ2V0Q29tcHV0ZWRUcmFuc2Zvcm1NYXRyaXhBc0FycmF5ID0gZnVuY3Rpb24gX2dldENvbXB1dGVkVHJhbnNmb3JtTWF0cml4QXNBcnJheSh0YXJnZXQpIHtcbiAgdmFyIG1hdHJpeFN0cmluZyA9IF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgX3RyYW5zZm9ybVByb3ApO1xuXG4gIHJldHVybiBfaXNOdWxsVHJhbnNmb3JtKG1hdHJpeFN0cmluZykgPyBfaWRlbnRpdHkyRE1hdHJpeCA6IG1hdHJpeFN0cmluZy5zdWJzdHIoNykubWF0Y2goX251bUV4cCkubWFwKF9yb3VuZCk7XG59LFxuICAgIF9nZXRNYXRyaXggPSBmdW5jdGlvbiBfZ2V0TWF0cml4KHRhcmdldCwgZm9yY2UyRCkge1xuICB2YXIgY2FjaGUgPSB0YXJnZXQuX2dzYXAgfHwgX2dldENhY2hlKHRhcmdldCksXG4gICAgICBzdHlsZSA9IHRhcmdldC5zdHlsZSxcbiAgICAgIG1hdHJpeCA9IF9nZXRDb21wdXRlZFRyYW5zZm9ybU1hdHJpeEFzQXJyYXkodGFyZ2V0KSxcbiAgICAgIHBhcmVudCxcbiAgICAgIG5leHRTaWJsaW5nLFxuICAgICAgdGVtcCxcbiAgICAgIGFkZGVkVG9ET007XG5cbiAgaWYgKGNhY2hlLnN2ZyAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIpKSB7XG4gICAgdGVtcCA9IHRhcmdldC50cmFuc2Zvcm0uYmFzZVZhbC5jb25zb2xpZGF0ZSgpLm1hdHJpeDsgLy9lbnN1cmVzIHRoYXQgZXZlbiBjb21wbGV4IHZhbHVlcyBsaWtlIFwidHJhbnNsYXRlKDUwLDYwKSByb3RhdGUoMTM1LDAsMClcIiBhcmUgcGFyc2VkIGJlY2F1c2UgaXQgbWFzaGVzIGl0IGludG8gYSBtYXRyaXguXG5cbiAgICBtYXRyaXggPSBbdGVtcC5hLCB0ZW1wLmIsIHRlbXAuYywgdGVtcC5kLCB0ZW1wLmUsIHRlbXAuZl07XG4gICAgcmV0dXJuIG1hdHJpeC5qb2luKFwiLFwiKSA9PT0gXCIxLDAsMCwxLDAsMFwiID8gX2lkZW50aXR5MkRNYXRyaXggOiBtYXRyaXg7XG4gIH0gZWxzZSBpZiAobWF0cml4ID09PSBfaWRlbnRpdHkyRE1hdHJpeCAmJiAhdGFyZ2V0Lm9mZnNldFBhcmVudCAmJiB0YXJnZXQgIT09IF9kb2NFbGVtZW50ICYmICFjYWNoZS5zdmcpIHtcbiAgICAvL25vdGU6IGlmIG9mZnNldFBhcmVudCBpcyBudWxsLCB0aGF0IG1lYW5zIHRoZSBlbGVtZW50IGlzbid0IGluIHRoZSBub3JtYWwgZG9jdW1lbnQgZmxvdywgbGlrZSBpZiBpdCBoYXMgZGlzcGxheTpub25lIG9yIG9uZSBvZiBpdHMgYW5jZXN0b3JzIGhhcyBkaXNwbGF5Om5vbmUpLiBGaXJlZm94IHJldHVybnMgbnVsbCBmb3IgZ2V0Q29tcHV0ZWRTdHlsZSgpIGlmIHRoZSBlbGVtZW50IGlzIGluIGFuIGlmcmFtZSB0aGF0IGhhcyBkaXNwbGF5Om5vbmUuIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTU0ODM5N1xuICAgIC8vYnJvd3NlcnMgZG9uJ3QgcmVwb3J0IHRyYW5zZm9ybXMgYWNjdXJhdGVseSB1bmxlc3MgdGhlIGVsZW1lbnQgaXMgaW4gdGhlIERPTSBhbmQgaGFzIGEgZGlzcGxheSB2YWx1ZSB0aGF0J3Mgbm90IFwibm9uZVwiLiBGaXJlZm94IGFuZCBNaWNyb3NvZnQgYnJvd3NlcnMgaGF2ZSBhIHBhcnRpYWwgYnVnIHdoZXJlIHRoZXknbGwgcmVwb3J0IHRyYW5zZm9ybXMgZXZlbiBpZiBkaXNwbGF5Om5vbmUgQlVUIG5vdCBhbnkgcGVyY2VudGFnZS1iYXNlZCB2YWx1ZXMgbGlrZSB0cmFuc2xhdGUoLTUwJSwgOHB4KSB3aWxsIGJlIHJlcG9ydGVkIGFzIGlmIGl0J3MgdHJhbnNsYXRlKDAsIDhweCkuXG4gICAgdGVtcCA9IHN0eWxlLmRpc3BsYXk7XG4gICAgc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZTtcblxuICAgIGlmICghcGFyZW50IHx8ICF0YXJnZXQub2Zmc2V0UGFyZW50KSB7XG4gICAgICAvLyBub3RlOiBpbiAzLjMuMCB3ZSBzd2l0Y2hlZCB0YXJnZXQub2Zmc2V0UGFyZW50IHRvIF9kb2MuYm9keS5jb250YWlucyh0YXJnZXQpIHRvIGF2b2lkIFtzb21ldGltZXMgdW5uZWNlc3NhcnldIE11dGF0aW9uT2JzZXJ2ZXIgY2FsbHMgYnV0IHRoYXQgd2Fzbid0IGFkZXF1YXRlIGJlY2F1c2UgdGhlcmUgYXJlIGVkZ2UgY2FzZXMgd2hlcmUgbmVzdGVkIHBvc2l0aW9uOiBmaXhlZCBlbGVtZW50cyBuZWVkIHRvIGdldCByZXBhcmVudGVkIHRvIGFjY3VyYXRlbHkgc2Vuc2UgdHJhbnNmb3Jtcy4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmVlbnNvY2svR1NBUC9pc3N1ZXMvMzg4IGFuZCBodHRwczovL2dpdGh1Yi5jb20vZ3JlZW5zb2NrL0dTQVAvaXNzdWVzLzM3NVxuICAgICAgYWRkZWRUb0RPTSA9IDE7IC8vZmxhZ1xuXG4gICAgICBuZXh0U2libGluZyA9IHRhcmdldC5uZXh0U2libGluZztcblxuICAgICAgX2RvY0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFyZ2V0KTsgLy93ZSBtdXN0IGFkZCBpdCB0byB0aGUgRE9NIGluIG9yZGVyIHRvIGdldCB2YWx1ZXMgcHJvcGVybHlcblxuICAgIH1cblxuICAgIG1hdHJpeCA9IF9nZXRDb21wdXRlZFRyYW5zZm9ybU1hdHJpeEFzQXJyYXkodGFyZ2V0KTtcbiAgICB0ZW1wID8gc3R5bGUuZGlzcGxheSA9IHRlbXAgOiBfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBcImRpc3BsYXlcIik7XG5cbiAgICBpZiAoYWRkZWRUb0RPTSkge1xuICAgICAgbmV4dFNpYmxpbmcgPyBwYXJlbnQuaW5zZXJ0QmVmb3JlKHRhcmdldCwgbmV4dFNpYmxpbmcpIDogcGFyZW50ID8gcGFyZW50LmFwcGVuZENoaWxkKHRhcmdldCkgOiBfZG9jRWxlbWVudC5yZW1vdmVDaGlsZCh0YXJnZXQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JjZTJEICYmIG1hdHJpeC5sZW5ndGggPiA2ID8gW21hdHJpeFswXSwgbWF0cml4WzFdLCBtYXRyaXhbNF0sIG1hdHJpeFs1XSwgbWF0cml4WzEyXSwgbWF0cml4WzEzXV0gOiBtYXRyaXg7XG59LFxuICAgIF9hcHBseVNWR09yaWdpbiA9IGZ1bmN0aW9uIF9hcHBseVNWR09yaWdpbih0YXJnZXQsIG9yaWdpbiwgb3JpZ2luSXNBYnNvbHV0ZSwgc21vb3RoLCBtYXRyaXhBcnJheSwgcGx1Z2luVG9BZGRQcm9wVHdlZW5zVG8pIHtcbiAgdmFyIGNhY2hlID0gdGFyZ2V0Ll9nc2FwLFxuICAgICAgbWF0cml4ID0gbWF0cml4QXJyYXkgfHwgX2dldE1hdHJpeCh0YXJnZXQsIHRydWUpLFxuICAgICAgeE9yaWdpbk9sZCA9IGNhY2hlLnhPcmlnaW4gfHwgMCxcbiAgICAgIHlPcmlnaW5PbGQgPSBjYWNoZS55T3JpZ2luIHx8IDAsXG4gICAgICB4T2Zmc2V0T2xkID0gY2FjaGUueE9mZnNldCB8fCAwLFxuICAgICAgeU9mZnNldE9sZCA9IGNhY2hlLnlPZmZzZXQgfHwgMCxcbiAgICAgIGEgPSBtYXRyaXhbMF0sXG4gICAgICBiID0gbWF0cml4WzFdLFxuICAgICAgYyA9IG1hdHJpeFsyXSxcbiAgICAgIGQgPSBtYXRyaXhbM10sXG4gICAgICB0eCA9IG1hdHJpeFs0XSxcbiAgICAgIHR5ID0gbWF0cml4WzVdLFxuICAgICAgb3JpZ2luU3BsaXQgPSBvcmlnaW4uc3BsaXQoXCIgXCIpLFxuICAgICAgeE9yaWdpbiA9IHBhcnNlRmxvYXQob3JpZ2luU3BsaXRbMF0pIHx8IDAsXG4gICAgICB5T3JpZ2luID0gcGFyc2VGbG9hdChvcmlnaW5TcGxpdFsxXSkgfHwgMCxcbiAgICAgIGJvdW5kcyxcbiAgICAgIGRldGVybWluYW50LFxuICAgICAgeCxcbiAgICAgIHk7XG5cbiAgaWYgKCFvcmlnaW5Jc0Fic29sdXRlKSB7XG4gICAgYm91bmRzID0gX2dldEJCb3godGFyZ2V0KTtcbiAgICB4T3JpZ2luID0gYm91bmRzLnggKyAofm9yaWdpblNwbGl0WzBdLmluZGV4T2YoXCIlXCIpID8geE9yaWdpbiAvIDEwMCAqIGJvdW5kcy53aWR0aCA6IHhPcmlnaW4pO1xuICAgIHlPcmlnaW4gPSBib3VuZHMueSArICh+KG9yaWdpblNwbGl0WzFdIHx8IG9yaWdpblNwbGl0WzBdKS5pbmRleE9mKFwiJVwiKSA/IHlPcmlnaW4gLyAxMDAgKiBib3VuZHMuaGVpZ2h0IDogeU9yaWdpbik7XG4gIH0gZWxzZSBpZiAobWF0cml4ICE9PSBfaWRlbnRpdHkyRE1hdHJpeCAmJiAoZGV0ZXJtaW5hbnQgPSBhICogZCAtIGIgKiBjKSkge1xuICAgIC8vaWYgaXQncyB6ZXJvIChsaWtlIGlmIHNjYWxlWCBhbmQgc2NhbGVZIGFyZSB6ZXJvKSwgc2tpcCBpdCB0byBhdm9pZCBlcnJvcnMgd2l0aCBkaXZpZGluZyBieSB6ZXJvLlxuICAgIHggPSB4T3JpZ2luICogKGQgLyBkZXRlcm1pbmFudCkgKyB5T3JpZ2luICogKC1jIC8gZGV0ZXJtaW5hbnQpICsgKGMgKiB0eSAtIGQgKiB0eCkgLyBkZXRlcm1pbmFudDtcbiAgICB5ID0geE9yaWdpbiAqICgtYiAvIGRldGVybWluYW50KSArIHlPcmlnaW4gKiAoYSAvIGRldGVybWluYW50KSAtIChhICogdHkgLSBiICogdHgpIC8gZGV0ZXJtaW5hbnQ7XG4gICAgeE9yaWdpbiA9IHg7XG4gICAgeU9yaWdpbiA9IHk7XG4gIH1cblxuICBpZiAoc21vb3RoIHx8IHNtb290aCAhPT0gZmFsc2UgJiYgY2FjaGUuc21vb3RoKSB7XG4gICAgdHggPSB4T3JpZ2luIC0geE9yaWdpbk9sZDtcbiAgICB0eSA9IHlPcmlnaW4gLSB5T3JpZ2luT2xkO1xuICAgIGNhY2hlLnhPZmZzZXQgPSB4T2Zmc2V0T2xkICsgKHR4ICogYSArIHR5ICogYykgLSB0eDtcbiAgICBjYWNoZS55T2Zmc2V0ID0geU9mZnNldE9sZCArICh0eCAqIGIgKyB0eSAqIGQpIC0gdHk7XG4gIH0gZWxzZSB7XG4gICAgY2FjaGUueE9mZnNldCA9IGNhY2hlLnlPZmZzZXQgPSAwO1xuICB9XG5cbiAgY2FjaGUueE9yaWdpbiA9IHhPcmlnaW47XG4gIGNhY2hlLnlPcmlnaW4gPSB5T3JpZ2luO1xuICBjYWNoZS5zbW9vdGggPSAhIXNtb290aDtcbiAgY2FjaGUub3JpZ2luID0gb3JpZ2luO1xuICBjYWNoZS5vcmlnaW5Jc0Fic29sdXRlID0gISFvcmlnaW5Jc0Fic29sdXRlO1xuICB0YXJnZXQuc3R5bGVbX3RyYW5zZm9ybU9yaWdpblByb3BdID0gXCIwcHggMHB4XCI7IC8vb3RoZXJ3aXNlLCBpZiBzb21lb25lIHNldHMgIGFuIG9yaWdpbiB2aWEgQ1NTLCBpdCB3aWxsIGxpa2VseSBpbnRlcmZlcmUgd2l0aCB0aGUgU1ZHIHRyYW5zZm9ybSBhdHRyaWJ1dGUgb25lcyAoYmVjYXVzZSByZW1lbWJlciwgd2UncmUgYmFraW5nIHRoZSBvcmlnaW4gaW50byB0aGUgbWF0cml4KCkgdmFsdWUpLlxuXG4gIGlmIChwbHVnaW5Ub0FkZFByb3BUd2VlbnNUbykge1xuICAgIF9hZGROb25Ud2VlbmluZ1BUKHBsdWdpblRvQWRkUHJvcFR3ZWVuc1RvLCBjYWNoZSwgXCJ4T3JpZ2luXCIsIHhPcmlnaW5PbGQsIHhPcmlnaW4pO1xuXG4gICAgX2FkZE5vblR3ZWVuaW5nUFQocGx1Z2luVG9BZGRQcm9wVHdlZW5zVG8sIGNhY2hlLCBcInlPcmlnaW5cIiwgeU9yaWdpbk9sZCwgeU9yaWdpbik7XG5cbiAgICBfYWRkTm9uVHdlZW5pbmdQVChwbHVnaW5Ub0FkZFByb3BUd2VlbnNUbywgY2FjaGUsIFwieE9mZnNldFwiLCB4T2Zmc2V0T2xkLCBjYWNoZS54T2Zmc2V0KTtcblxuICAgIF9hZGROb25Ud2VlbmluZ1BUKHBsdWdpblRvQWRkUHJvcFR3ZWVuc1RvLCBjYWNoZSwgXCJ5T2Zmc2V0XCIsIHlPZmZzZXRPbGQsIGNhY2hlLnlPZmZzZXQpO1xuICB9XG5cbiAgdGFyZ2V0LnNldEF0dHJpYnV0ZShcImRhdGEtc3ZnLW9yaWdpblwiLCB4T3JpZ2luICsgXCIgXCIgKyB5T3JpZ2luKTtcbn0sXG4gICAgX3BhcnNlVHJhbnNmb3JtID0gZnVuY3Rpb24gX3BhcnNlVHJhbnNmb3JtKHRhcmdldCwgdW5jYWNoZSkge1xuICB2YXIgY2FjaGUgPSB0YXJnZXQuX2dzYXAgfHwgbmV3IEdTQ2FjaGUodGFyZ2V0KTtcblxuICBpZiAoXCJ4XCIgaW4gY2FjaGUgJiYgIXVuY2FjaGUgJiYgIWNhY2hlLnVuY2FjaGUpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH1cblxuICB2YXIgc3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gICAgICBpbnZlcnRlZFNjYWxlWCA9IGNhY2hlLnNjYWxlWCA8IDAsXG4gICAgICBweCA9IFwicHhcIixcbiAgICAgIGRlZyA9IFwiZGVnXCIsXG4gICAgICBvcmlnaW4gPSBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIF90cmFuc2Zvcm1PcmlnaW5Qcm9wKSB8fCBcIjBcIixcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgeixcbiAgICAgIHNjYWxlWCxcbiAgICAgIHNjYWxlWSxcbiAgICAgIHJvdGF0aW9uLFxuICAgICAgcm90YXRpb25YLFxuICAgICAgcm90YXRpb25ZLFxuICAgICAgc2tld1gsXG4gICAgICBza2V3WSxcbiAgICAgIHBlcnNwZWN0aXZlLFxuICAgICAgeE9yaWdpbixcbiAgICAgIHlPcmlnaW4sXG4gICAgICBtYXRyaXgsXG4gICAgICBhbmdsZSxcbiAgICAgIGNvcyxcbiAgICAgIHNpbixcbiAgICAgIGEsXG4gICAgICBiLFxuICAgICAgYyxcbiAgICAgIGQsXG4gICAgICBhMTIsXG4gICAgICBhMjIsXG4gICAgICB0MSxcbiAgICAgIHQyLFxuICAgICAgdDMsXG4gICAgICBhMTMsXG4gICAgICBhMjMsXG4gICAgICBhMzMsXG4gICAgICBhNDIsXG4gICAgICBhNDMsXG4gICAgICBhMzI7XG4gIHggPSB5ID0geiA9IHJvdGF0aW9uID0gcm90YXRpb25YID0gcm90YXRpb25ZID0gc2tld1ggPSBza2V3WSA9IHBlcnNwZWN0aXZlID0gMDtcbiAgc2NhbGVYID0gc2NhbGVZID0gMTtcbiAgY2FjaGUuc3ZnID0gISEodGFyZ2V0LmdldENUTSAmJiBfaXNTVkcodGFyZ2V0KSk7XG4gIG1hdHJpeCA9IF9nZXRNYXRyaXgodGFyZ2V0LCBjYWNoZS5zdmcpO1xuXG4gIGlmIChjYWNoZS5zdmcpIHtcbiAgICB0MSA9ICghY2FjaGUudW5jYWNoZSB8fCBvcmlnaW4gPT09IFwiMHB4IDBweFwiKSAmJiAhdW5jYWNoZSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdmctb3JpZ2luXCIpOyAvLyBpZiBvcmlnaW4gaXMgMCwwIGFuZCBjYWNoZS51bmNhY2hlIGlzIHRydWUsIGxldCB0aGUgcmVjb3JkZWQgZGF0YS1zdmctb3JpZ2luIHN0YXkuIE90aGVyd2lzZSwgd2hlbmV2ZXIgd2Ugc2V0IGNhY2hlLnVuY2FjaGUgdG8gdHJ1ZSwgd2UnZCBuZWVkIHRvIHNldCBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IChjYWNoZS54T3JpZ2luIC0gYmJveC54KSArIFwicHggXCIgKyAoY2FjaGUueU9yaWdpbiAtIGJib3gueSkgKyBcInB4XCIuIFJlbWVtYmVyLCB0byB3b3JrIGFyb3VuZCBicm93c2VyIGluY29uc2lzdGVuY2llcyB3ZSBhbHdheXMgZm9yY2UgU1ZHIGVsZW1lbnRzJyB0cmFuc2Zvcm1PcmlnaW4gdG8gMCwwIGFuZCBvZmZzZXQgdGhlIHRyYW5zbGF0aW9uIGFjY29yZGluZ2x5LlxuXG4gICAgX2FwcGx5U1ZHT3JpZ2luKHRhcmdldCwgdDEgfHwgb3JpZ2luLCAhIXQxIHx8IGNhY2hlLm9yaWdpbklzQWJzb2x1dGUsIGNhY2hlLnNtb290aCAhPT0gZmFsc2UsIG1hdHJpeCk7XG4gIH1cblxuICB4T3JpZ2luID0gY2FjaGUueE9yaWdpbiB8fCAwO1xuICB5T3JpZ2luID0gY2FjaGUueU9yaWdpbiB8fCAwO1xuXG4gIGlmIChtYXRyaXggIT09IF9pZGVudGl0eTJETWF0cml4KSB7XG4gICAgYSA9IG1hdHJpeFswXTsgLy9hMTFcblxuICAgIGIgPSBtYXRyaXhbMV07IC8vYTIxXG5cbiAgICBjID0gbWF0cml4WzJdOyAvL2EzMVxuXG4gICAgZCA9IG1hdHJpeFszXTsgLy9hNDFcblxuICAgIHggPSBhMTIgPSBtYXRyaXhbNF07XG4gICAgeSA9IGEyMiA9IG1hdHJpeFs1XTsgLy8yRCBtYXRyaXhcblxuICAgIGlmIChtYXRyaXgubGVuZ3RoID09PSA2KSB7XG4gICAgICBzY2FsZVggPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG4gICAgICBzY2FsZVkgPSBNYXRoLnNxcnQoZCAqIGQgKyBjICogYyk7XG4gICAgICByb3RhdGlvbiA9IGEgfHwgYiA/IF9hdGFuMihiLCBhKSAqIF9SQUQyREVHIDogMDsgLy9ub3RlOiBpZiBzY2FsZVggaXMgMCwgd2UgY2Fubm90IGFjY3VyYXRlbHkgbWVhc3VyZSByb3RhdGlvbi4gU2FtZSBmb3Igc2tld1ggd2l0aCBhIHNjYWxlWSBvZiAwLiBUaGVyZWZvcmUsIHdlIGRlZmF1bHQgdG8gdGhlIHByZXZpb3VzbHkgcmVjb3JkZWQgdmFsdWUgKG9yIHplcm8gaWYgdGhhdCBkb2Vzbid0IGV4aXN0KS5cblxuICAgICAgc2tld1ggPSBjIHx8IGQgPyBfYXRhbjIoYywgZCkgKiBfUkFEMkRFRyArIHJvdGF0aW9uIDogMDtcbiAgICAgIHNrZXdYICYmIChzY2FsZVkgKj0gTWF0aC5hYnMoTWF0aC5jb3Moc2tld1ggKiBfREVHMlJBRCkpKTtcblxuICAgICAgaWYgKGNhY2hlLnN2Zykge1xuICAgICAgICB4IC09IHhPcmlnaW4gLSAoeE9yaWdpbiAqIGEgKyB5T3JpZ2luICogYyk7XG4gICAgICAgIHkgLT0geU9yaWdpbiAtICh4T3JpZ2luICogYiArIHlPcmlnaW4gKiBkKTtcbiAgICAgIH0gLy8zRCBtYXRyaXhcblxuICAgIH0gZWxzZSB7XG4gICAgICBhMzIgPSBtYXRyaXhbNl07XG4gICAgICBhNDIgPSBtYXRyaXhbN107XG4gICAgICBhMTMgPSBtYXRyaXhbOF07XG4gICAgICBhMjMgPSBtYXRyaXhbOV07XG4gICAgICBhMzMgPSBtYXRyaXhbMTBdO1xuICAgICAgYTQzID0gbWF0cml4WzExXTtcbiAgICAgIHggPSBtYXRyaXhbMTJdO1xuICAgICAgeSA9IG1hdHJpeFsxM107XG4gICAgICB6ID0gbWF0cml4WzE0XTtcbiAgICAgIGFuZ2xlID0gX2F0YW4yKGEzMiwgYTMzKTtcbiAgICAgIHJvdGF0aW9uWCA9IGFuZ2xlICogX1JBRDJERUc7IC8vcm90YXRpb25YXG5cbiAgICAgIGlmIChhbmdsZSkge1xuICAgICAgICBjb3MgPSBNYXRoLmNvcygtYW5nbGUpO1xuICAgICAgICBzaW4gPSBNYXRoLnNpbigtYW5nbGUpO1xuICAgICAgICB0MSA9IGExMiAqIGNvcyArIGExMyAqIHNpbjtcbiAgICAgICAgdDIgPSBhMjIgKiBjb3MgKyBhMjMgKiBzaW47XG4gICAgICAgIHQzID0gYTMyICogY29zICsgYTMzICogc2luO1xuICAgICAgICBhMTMgPSBhMTIgKiAtc2luICsgYTEzICogY29zO1xuICAgICAgICBhMjMgPSBhMjIgKiAtc2luICsgYTIzICogY29zO1xuICAgICAgICBhMzMgPSBhMzIgKiAtc2luICsgYTMzICogY29zO1xuICAgICAgICBhNDMgPSBhNDIgKiAtc2luICsgYTQzICogY29zO1xuICAgICAgICBhMTIgPSB0MTtcbiAgICAgICAgYTIyID0gdDI7XG4gICAgICAgIGEzMiA9IHQzO1xuICAgICAgfSAvL3JvdGF0aW9uWVxuXG5cbiAgICAgIGFuZ2xlID0gX2F0YW4yKC1jLCBhMzMpO1xuICAgICAgcm90YXRpb25ZID0gYW5nbGUgKiBfUkFEMkRFRztcblxuICAgICAgaWYgKGFuZ2xlKSB7XG4gICAgICAgIGNvcyA9IE1hdGguY29zKC1hbmdsZSk7XG4gICAgICAgIHNpbiA9IE1hdGguc2luKC1hbmdsZSk7XG4gICAgICAgIHQxID0gYSAqIGNvcyAtIGExMyAqIHNpbjtcbiAgICAgICAgdDIgPSBiICogY29zIC0gYTIzICogc2luO1xuICAgICAgICB0MyA9IGMgKiBjb3MgLSBhMzMgKiBzaW47XG4gICAgICAgIGE0MyA9IGQgKiBzaW4gKyBhNDMgKiBjb3M7XG4gICAgICAgIGEgPSB0MTtcbiAgICAgICAgYiA9IHQyO1xuICAgICAgICBjID0gdDM7XG4gICAgICB9IC8vcm90YXRpb25aXG5cblxuICAgICAgYW5nbGUgPSBfYXRhbjIoYiwgYSk7XG4gICAgICByb3RhdGlvbiA9IGFuZ2xlICogX1JBRDJERUc7XG5cbiAgICAgIGlmIChhbmdsZSkge1xuICAgICAgICBjb3MgPSBNYXRoLmNvcyhhbmdsZSk7XG4gICAgICAgIHNpbiA9IE1hdGguc2luKGFuZ2xlKTtcbiAgICAgICAgdDEgPSBhICogY29zICsgYiAqIHNpbjtcbiAgICAgICAgdDIgPSBhMTIgKiBjb3MgKyBhMjIgKiBzaW47XG4gICAgICAgIGIgPSBiICogY29zIC0gYSAqIHNpbjtcbiAgICAgICAgYTIyID0gYTIyICogY29zIC0gYTEyICogc2luO1xuICAgICAgICBhID0gdDE7XG4gICAgICAgIGExMiA9IHQyO1xuICAgICAgfVxuXG4gICAgICBpZiAocm90YXRpb25YICYmIE1hdGguYWJzKHJvdGF0aW9uWCkgKyBNYXRoLmFicyhyb3RhdGlvbikgPiAzNTkuOSkge1xuICAgICAgICAvL3doZW4gcm90YXRpb25ZIGlzIHNldCwgaXQgd2lsbCBvZnRlbiBiZSBwYXJzZWQgYXMgMTgwIGRlZ3JlZXMgZGlmZmVyZW50IHRoYW4gaXQgc2hvdWxkIGJlLCBhbmQgcm90YXRpb25YIGFuZCByb3RhdGlvbiBib3RoIGJlaW5nIDE4MCAoaXQgbG9va3MgdGhlIHNhbWUpLCBzbyB3ZSBhZGp1c3QgZm9yIHRoYXQgaGVyZS5cbiAgICAgICAgcm90YXRpb25YID0gcm90YXRpb24gPSAwO1xuICAgICAgICByb3RhdGlvblkgPSAxODAgLSByb3RhdGlvblk7XG4gICAgICB9XG5cbiAgICAgIHNjYWxlWCA9IF9yb3VuZChNYXRoLnNxcnQoYSAqIGEgKyBiICogYiArIGMgKiBjKSk7XG4gICAgICBzY2FsZVkgPSBfcm91bmQoTWF0aC5zcXJ0KGEyMiAqIGEyMiArIGEzMiAqIGEzMikpO1xuICAgICAgYW5nbGUgPSBfYXRhbjIoYTEyLCBhMjIpO1xuICAgICAgc2tld1ggPSBNYXRoLmFicyhhbmdsZSkgPiAwLjAwMDIgPyBhbmdsZSAqIF9SQUQyREVHIDogMDtcbiAgICAgIHBlcnNwZWN0aXZlID0gYTQzID8gMSAvIChhNDMgPCAwID8gLWE0MyA6IGE0MykgOiAwO1xuICAgIH1cblxuICAgIGlmIChjYWNoZS5zdmcpIHtcbiAgICAgIC8vc2Vuc2UgaWYgdGhlcmUgYXJlIENTUyB0cmFuc2Zvcm1zIGFwcGxpZWQgb24gYW4gU1ZHIGVsZW1lbnQgaW4gd2hpY2ggY2FzZSB3ZSBtdXN0IG92ZXJ3cml0ZSB0aGVtIHdoZW4gcmVuZGVyaW5nLiBUaGUgdHJhbnNmb3JtIGF0dHJpYnV0ZSBpcyBtb3JlIHJlbGlhYmxlIGNyb3NzLWJyb3dzZXIsIGJ1dCB3ZSBjYW4ndCBqdXN0IHJlbW92ZSB0aGUgQ1NTIG9uZXMgYmVjYXVzZSB0aGV5IG1heSBiZSBhcHBsaWVkIGluIGEgQ1NTIHJ1bGUgc29tZXdoZXJlIChub3QganVzdCBpbmxpbmUpLlxuICAgICAgdDEgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIpO1xuICAgICAgY2FjaGUuZm9yY2VDU1MgPSB0YXJnZXQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwiXCIpIHx8ICFfaXNOdWxsVHJhbnNmb3JtKF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgX3RyYW5zZm9ybVByb3ApKTtcbiAgICAgIHQxICYmIHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgdDEpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChNYXRoLmFicyhza2V3WCkgPiA5MCAmJiBNYXRoLmFicyhza2V3WCkgPCAyNzApIHtcbiAgICBpZiAoaW52ZXJ0ZWRTY2FsZVgpIHtcbiAgICAgIHNjYWxlWCAqPSAtMTtcbiAgICAgIHNrZXdYICs9IHJvdGF0aW9uIDw9IDAgPyAxODAgOiAtMTgwO1xuICAgICAgcm90YXRpb24gKz0gcm90YXRpb24gPD0gMCA/IDE4MCA6IC0xODA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjYWxlWSAqPSAtMTtcbiAgICAgIHNrZXdYICs9IHNrZXdYIDw9IDAgPyAxODAgOiAtMTgwO1xuICAgIH1cbiAgfVxuXG4gIHVuY2FjaGUgPSB1bmNhY2hlIHx8IGNhY2hlLnVuY2FjaGU7XG4gIGNhY2hlLnggPSB4IC0gKChjYWNoZS54UGVyY2VudCA9IHggJiYgKCF1bmNhY2hlICYmIGNhY2hlLnhQZXJjZW50IHx8IChNYXRoLnJvdW5kKHRhcmdldC5vZmZzZXRXaWR0aCAvIDIpID09PSBNYXRoLnJvdW5kKC14KSA/IC01MCA6IDApKSkgPyB0YXJnZXQub2Zmc2V0V2lkdGggKiBjYWNoZS54UGVyY2VudCAvIDEwMCA6IDApICsgcHg7XG4gIGNhY2hlLnkgPSB5IC0gKChjYWNoZS55UGVyY2VudCA9IHkgJiYgKCF1bmNhY2hlICYmIGNhY2hlLnlQZXJjZW50IHx8IChNYXRoLnJvdW5kKHRhcmdldC5vZmZzZXRIZWlnaHQgLyAyKSA9PT0gTWF0aC5yb3VuZCgteSkgPyAtNTAgOiAwKSkpID8gdGFyZ2V0Lm9mZnNldEhlaWdodCAqIGNhY2hlLnlQZXJjZW50IC8gMTAwIDogMCkgKyBweDtcbiAgY2FjaGUueiA9IHogKyBweDtcbiAgY2FjaGUuc2NhbGVYID0gX3JvdW5kKHNjYWxlWCk7XG4gIGNhY2hlLnNjYWxlWSA9IF9yb3VuZChzY2FsZVkpO1xuICBjYWNoZS5yb3RhdGlvbiA9IF9yb3VuZChyb3RhdGlvbikgKyBkZWc7XG4gIGNhY2hlLnJvdGF0aW9uWCA9IF9yb3VuZChyb3RhdGlvblgpICsgZGVnO1xuICBjYWNoZS5yb3RhdGlvblkgPSBfcm91bmQocm90YXRpb25ZKSArIGRlZztcbiAgY2FjaGUuc2tld1ggPSBza2V3WCArIGRlZztcbiAgY2FjaGUuc2tld1kgPSBza2V3WSArIGRlZztcbiAgY2FjaGUudHJhbnNmb3JtUGVyc3BlY3RpdmUgPSBwZXJzcGVjdGl2ZSArIHB4O1xuXG4gIGlmIChjYWNoZS56T3JpZ2luID0gcGFyc2VGbG9hdChvcmlnaW4uc3BsaXQoXCIgXCIpWzJdKSB8fCAwKSB7XG4gICAgc3R5bGVbX3RyYW5zZm9ybU9yaWdpblByb3BdID0gX2ZpcnN0VHdvT25seShvcmlnaW4pO1xuICB9XG5cbiAgY2FjaGUueE9mZnNldCA9IGNhY2hlLnlPZmZzZXQgPSAwO1xuICBjYWNoZS5mb3JjZTNEID0gX2NvbmZpZy5mb3JjZTNEO1xuICBjYWNoZS5yZW5kZXJUcmFuc2Zvcm0gPSBjYWNoZS5zdmcgPyBfcmVuZGVyU1ZHVHJhbnNmb3JtcyA6IF9zdXBwb3J0czNEID8gX3JlbmRlckNTU1RyYW5zZm9ybXMgOiBfcmVuZGVyTm9uM0RUcmFuc2Zvcm1zO1xuICBjYWNoZS51bmNhY2hlID0gMDtcbiAgcmV0dXJuIGNhY2hlO1xufSxcbiAgICBfZmlyc3RUd29Pbmx5ID0gZnVuY3Rpb24gX2ZpcnN0VHdvT25seSh2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlID0gdmFsdWUuc3BsaXQoXCIgXCIpKVswXSArIFwiIFwiICsgdmFsdWVbMV07XG59LFxuICAgIC8vZm9yIGhhbmRsaW5nIHRyYW5zZm9ybU9yaWdpbiB2YWx1ZXMsIHN0cmlwcGluZyBvdXQgdGhlIDNyZCBkaW1lbnNpb25cbl9hZGRQeFRyYW5zbGF0ZSA9IGZ1bmN0aW9uIF9hZGRQeFRyYW5zbGF0ZSh0YXJnZXQsIHN0YXJ0LCB2YWx1ZSkge1xuICB2YXIgdW5pdCA9IGdldFVuaXQoc3RhcnQpO1xuICByZXR1cm4gX3JvdW5kKHBhcnNlRmxvYXQoc3RhcnQpICsgcGFyc2VGbG9hdChfY29udmVydFRvVW5pdCh0YXJnZXQsIFwieFwiLCB2YWx1ZSArIFwicHhcIiwgdW5pdCkpKSArIHVuaXQ7XG59LFxuICAgIF9yZW5kZXJOb24zRFRyYW5zZm9ybXMgPSBmdW5jdGlvbiBfcmVuZGVyTm9uM0RUcmFuc2Zvcm1zKHJhdGlvLCBjYWNoZSkge1xuICBjYWNoZS56ID0gXCIwcHhcIjtcbiAgY2FjaGUucm90YXRpb25ZID0gY2FjaGUucm90YXRpb25YID0gXCIwZGVnXCI7XG4gIGNhY2hlLmZvcmNlM0QgPSAwO1xuXG4gIF9yZW5kZXJDU1NUcmFuc2Zvcm1zKHJhdGlvLCBjYWNoZSk7XG59LFxuICAgIF96ZXJvRGVnID0gXCIwZGVnXCIsXG4gICAgX3plcm9QeCA9IFwiMHB4XCIsXG4gICAgX2VuZFBhcmVudGhlc2lzID0gXCIpIFwiLFxuICAgIF9yZW5kZXJDU1NUcmFuc2Zvcm1zID0gZnVuY3Rpb24gX3JlbmRlckNTU1RyYW5zZm9ybXMocmF0aW8sIGNhY2hlKSB7XG4gIHZhciBfcmVmID0gY2FjaGUgfHwgdGhpcyxcbiAgICAgIHhQZXJjZW50ID0gX3JlZi54UGVyY2VudCxcbiAgICAgIHlQZXJjZW50ID0gX3JlZi55UGVyY2VudCxcbiAgICAgIHggPSBfcmVmLngsXG4gICAgICB5ID0gX3JlZi55LFxuICAgICAgeiA9IF9yZWYueixcbiAgICAgIHJvdGF0aW9uID0gX3JlZi5yb3RhdGlvbixcbiAgICAgIHJvdGF0aW9uWSA9IF9yZWYucm90YXRpb25ZLFxuICAgICAgcm90YXRpb25YID0gX3JlZi5yb3RhdGlvblgsXG4gICAgICBza2V3WCA9IF9yZWYuc2tld1gsXG4gICAgICBza2V3WSA9IF9yZWYuc2tld1ksXG4gICAgICBzY2FsZVggPSBfcmVmLnNjYWxlWCxcbiAgICAgIHNjYWxlWSA9IF9yZWYuc2NhbGVZLFxuICAgICAgdHJhbnNmb3JtUGVyc3BlY3RpdmUgPSBfcmVmLnRyYW5zZm9ybVBlcnNwZWN0aXZlLFxuICAgICAgZm9yY2UzRCA9IF9yZWYuZm9yY2UzRCxcbiAgICAgIHRhcmdldCA9IF9yZWYudGFyZ2V0LFxuICAgICAgek9yaWdpbiA9IF9yZWYuek9yaWdpbixcbiAgICAgIHRyYW5zZm9ybXMgPSBcIlwiLFxuICAgICAgdXNlM0QgPSBmb3JjZTNEID09PSBcImF1dG9cIiAmJiByYXRpbyAmJiByYXRpbyAhPT0gMSB8fCBmb3JjZTNEID09PSB0cnVlOyAvLyBTYWZhcmkgaGFzIGEgYnVnIHRoYXQgY2F1c2VzIGl0IG5vdCB0byByZW5kZXIgM0QgdHJhbnNmb3JtLW9yaWdpbiB2YWx1ZXMgcHJvcGVybHksIHNvIHdlIGZvcmNlIHRoZSB6IG9yaWdpbiB0byAwLCByZWNvcmQgaXQgaW4gdGhlIGNhY2hlLCBhbmQgdGhlbiBkbyB0aGUgbWF0aCBoZXJlIHRvIG9mZnNldCB0aGUgdHJhbnNsYXRlIHZhbHVlcyBhY2NvcmRpbmdseSAoYmFzaWNhbGx5IGRvIHRoZSAzRCB0cmFuc2Zvcm0tb3JpZ2luIHBhcnQgbWFudWFsbHkpXG5cblxuICBpZiAoek9yaWdpbiAmJiAocm90YXRpb25YICE9PSBfemVyb0RlZyB8fCByb3RhdGlvblkgIT09IF96ZXJvRGVnKSkge1xuICAgIHZhciBhbmdsZSA9IHBhcnNlRmxvYXQocm90YXRpb25ZKSAqIF9ERUcyUkFELFxuICAgICAgICBhMTMgPSBNYXRoLnNpbihhbmdsZSksXG4gICAgICAgIGEzMyA9IE1hdGguY29zKGFuZ2xlKSxcbiAgICAgICAgY29zO1xuXG4gICAgYW5nbGUgPSBwYXJzZUZsb2F0KHJvdGF0aW9uWCkgKiBfREVHMlJBRDtcbiAgICBjb3MgPSBNYXRoLmNvcyhhbmdsZSk7XG4gICAgeCA9IF9hZGRQeFRyYW5zbGF0ZSh0YXJnZXQsIHgsIGExMyAqIGNvcyAqIC16T3JpZ2luKTtcbiAgICB5ID0gX2FkZFB4VHJhbnNsYXRlKHRhcmdldCwgeSwgLU1hdGguc2luKGFuZ2xlKSAqIC16T3JpZ2luKTtcbiAgICB6ID0gX2FkZFB4VHJhbnNsYXRlKHRhcmdldCwgeiwgYTMzICogY29zICogLXpPcmlnaW4gKyB6T3JpZ2luKTtcbiAgfVxuXG4gIGlmICh0cmFuc2Zvcm1QZXJzcGVjdGl2ZSAhPT0gX3plcm9QeCkge1xuICAgIHRyYW5zZm9ybXMgKz0gXCJwZXJzcGVjdGl2ZShcIiArIHRyYW5zZm9ybVBlcnNwZWN0aXZlICsgX2VuZFBhcmVudGhlc2lzO1xuICB9XG5cbiAgaWYgKHhQZXJjZW50IHx8IHlQZXJjZW50KSB7XG4gICAgdHJhbnNmb3JtcyArPSBcInRyYW5zbGF0ZShcIiArIHhQZXJjZW50ICsgXCIlLCBcIiArIHlQZXJjZW50ICsgXCIlKSBcIjtcbiAgfVxuXG4gIGlmICh1c2UzRCB8fCB4ICE9PSBfemVyb1B4IHx8IHkgIT09IF96ZXJvUHggfHwgeiAhPT0gX3plcm9QeCkge1xuICAgIHRyYW5zZm9ybXMgKz0geiAhPT0gX3plcm9QeCB8fCB1c2UzRCA/IFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCIsIFwiICsgeSArIFwiLCBcIiArIHogKyBcIikgXCIgOiBcInRyYW5zbGF0ZShcIiArIHggKyBcIiwgXCIgKyB5ICsgX2VuZFBhcmVudGhlc2lzO1xuICB9XG5cbiAgaWYgKHJvdGF0aW9uICE9PSBfemVyb0RlZykge1xuICAgIHRyYW5zZm9ybXMgKz0gXCJyb3RhdGUoXCIgKyByb3RhdGlvbiArIF9lbmRQYXJlbnRoZXNpcztcbiAgfVxuXG4gIGlmIChyb3RhdGlvblkgIT09IF96ZXJvRGVnKSB7XG4gICAgdHJhbnNmb3JtcyArPSBcInJvdGF0ZVkoXCIgKyByb3RhdGlvblkgKyBfZW5kUGFyZW50aGVzaXM7XG4gIH1cblxuICBpZiAocm90YXRpb25YICE9PSBfemVyb0RlZykge1xuICAgIHRyYW5zZm9ybXMgKz0gXCJyb3RhdGVYKFwiICsgcm90YXRpb25YICsgX2VuZFBhcmVudGhlc2lzO1xuICB9XG5cbiAgaWYgKHNrZXdYICE9PSBfemVyb0RlZyB8fCBza2V3WSAhPT0gX3plcm9EZWcpIHtcbiAgICB0cmFuc2Zvcm1zICs9IFwic2tldyhcIiArIHNrZXdYICsgXCIsIFwiICsgc2tld1kgKyBfZW5kUGFyZW50aGVzaXM7XG4gIH1cblxuICBpZiAoc2NhbGVYICE9PSAxIHx8IHNjYWxlWSAhPT0gMSkge1xuICAgIHRyYW5zZm9ybXMgKz0gXCJzY2FsZShcIiArIHNjYWxlWCArIFwiLCBcIiArIHNjYWxlWSArIF9lbmRQYXJlbnRoZXNpcztcbiAgfVxuXG4gIHRhcmdldC5zdHlsZVtfdHJhbnNmb3JtUHJvcF0gPSB0cmFuc2Zvcm1zIHx8IFwidHJhbnNsYXRlKDAsIDApXCI7XG59LFxuICAgIF9yZW5kZXJTVkdUcmFuc2Zvcm1zID0gZnVuY3Rpb24gX3JlbmRlclNWR1RyYW5zZm9ybXMocmF0aW8sIGNhY2hlKSB7XG4gIHZhciBfcmVmMiA9IGNhY2hlIHx8IHRoaXMsXG4gICAgICB4UGVyY2VudCA9IF9yZWYyLnhQZXJjZW50LFxuICAgICAgeVBlcmNlbnQgPSBfcmVmMi55UGVyY2VudCxcbiAgICAgIHggPSBfcmVmMi54LFxuICAgICAgeSA9IF9yZWYyLnksXG4gICAgICByb3RhdGlvbiA9IF9yZWYyLnJvdGF0aW9uLFxuICAgICAgc2tld1ggPSBfcmVmMi5za2V3WCxcbiAgICAgIHNrZXdZID0gX3JlZjIuc2tld1ksXG4gICAgICBzY2FsZVggPSBfcmVmMi5zY2FsZVgsXG4gICAgICBzY2FsZVkgPSBfcmVmMi5zY2FsZVksXG4gICAgICB0YXJnZXQgPSBfcmVmMi50YXJnZXQsXG4gICAgICB4T3JpZ2luID0gX3JlZjIueE9yaWdpbixcbiAgICAgIHlPcmlnaW4gPSBfcmVmMi55T3JpZ2luLFxuICAgICAgeE9mZnNldCA9IF9yZWYyLnhPZmZzZXQsXG4gICAgICB5T2Zmc2V0ID0gX3JlZjIueU9mZnNldCxcbiAgICAgIGZvcmNlQ1NTID0gX3JlZjIuZm9yY2VDU1MsXG4gICAgICB0eCA9IHBhcnNlRmxvYXQoeCksXG4gICAgICB0eSA9IHBhcnNlRmxvYXQoeSksXG4gICAgICBhMTEsXG4gICAgICBhMjEsXG4gICAgICBhMTIsXG4gICAgICBhMjIsXG4gICAgICB0ZW1wO1xuXG4gIHJvdGF0aW9uID0gcGFyc2VGbG9hdChyb3RhdGlvbik7XG4gIHNrZXdYID0gcGFyc2VGbG9hdChza2V3WCk7XG4gIHNrZXdZID0gcGFyc2VGbG9hdChza2V3WSk7XG5cbiAgaWYgKHNrZXdZKSB7XG4gICAgLy9mb3IgcGVyZm9ybWFuY2UgcmVhc29ucywgd2UgY29tYmluZSBhbGwgc2tld2luZyBpbnRvIHRoZSBza2V3WCBhbmQgcm90YXRpb24gdmFsdWVzLiBSZW1lbWJlciwgYSBza2V3WSBvZiAxMCBkZWdyZWVzIGxvb2tzIHRoZSBzYW1lIGFzIGEgcm90YXRpb24gb2YgMTAgZGVncmVlcyBwbHVzIGEgc2tld1ggb2YgMTAgZGVncmVlcy5cbiAgICBza2V3WSA9IHBhcnNlRmxvYXQoc2tld1kpO1xuICAgIHNrZXdYICs9IHNrZXdZO1xuICAgIHJvdGF0aW9uICs9IHNrZXdZO1xuICB9XG5cbiAgaWYgKHJvdGF0aW9uIHx8IHNrZXdYKSB7XG4gICAgcm90YXRpb24gKj0gX0RFRzJSQUQ7XG4gICAgc2tld1ggKj0gX0RFRzJSQUQ7XG4gICAgYTExID0gTWF0aC5jb3Mocm90YXRpb24pICogc2NhbGVYO1xuICAgIGEyMSA9IE1hdGguc2luKHJvdGF0aW9uKSAqIHNjYWxlWDtcbiAgICBhMTIgPSBNYXRoLnNpbihyb3RhdGlvbiAtIHNrZXdYKSAqIC1zY2FsZVk7XG4gICAgYTIyID0gTWF0aC5jb3Mocm90YXRpb24gLSBza2V3WCkgKiBzY2FsZVk7XG5cbiAgICBpZiAoc2tld1gpIHtcbiAgICAgIHNrZXdZICo9IF9ERUcyUkFEO1xuICAgICAgdGVtcCA9IE1hdGgudGFuKHNrZXdYIC0gc2tld1kpO1xuICAgICAgdGVtcCA9IE1hdGguc3FydCgxICsgdGVtcCAqIHRlbXApO1xuICAgICAgYTEyICo9IHRlbXA7XG4gICAgICBhMjIgKj0gdGVtcDtcblxuICAgICAgaWYgKHNrZXdZKSB7XG4gICAgICAgIHRlbXAgPSBNYXRoLnRhbihza2V3WSk7XG4gICAgICAgIHRlbXAgPSBNYXRoLnNxcnQoMSArIHRlbXAgKiB0ZW1wKTtcbiAgICAgICAgYTExICo9IHRlbXA7XG4gICAgICAgIGEyMSAqPSB0ZW1wO1xuICAgICAgfVxuICAgIH1cblxuICAgIGExMSA9IF9yb3VuZChhMTEpO1xuICAgIGEyMSA9IF9yb3VuZChhMjEpO1xuICAgIGExMiA9IF9yb3VuZChhMTIpO1xuICAgIGEyMiA9IF9yb3VuZChhMjIpO1xuICB9IGVsc2Uge1xuICAgIGExMSA9IHNjYWxlWDtcbiAgICBhMjIgPSBzY2FsZVk7XG4gICAgYTIxID0gYTEyID0gMDtcbiAgfVxuXG4gIGlmICh0eCAmJiAhfih4ICsgXCJcIikuaW5kZXhPZihcInB4XCIpIHx8IHR5ICYmICF+KHkgKyBcIlwiKS5pbmRleE9mKFwicHhcIikpIHtcbiAgICB0eCA9IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgXCJ4XCIsIHgsIFwicHhcIik7XG4gICAgdHkgPSBfY29udmVydFRvVW5pdCh0YXJnZXQsIFwieVwiLCB5LCBcInB4XCIpO1xuICB9XG5cbiAgaWYgKHhPcmlnaW4gfHwgeU9yaWdpbiB8fCB4T2Zmc2V0IHx8IHlPZmZzZXQpIHtcbiAgICB0eCA9IF9yb3VuZCh0eCArIHhPcmlnaW4gLSAoeE9yaWdpbiAqIGExMSArIHlPcmlnaW4gKiBhMTIpICsgeE9mZnNldCk7XG4gICAgdHkgPSBfcm91bmQodHkgKyB5T3JpZ2luIC0gKHhPcmlnaW4gKiBhMjEgKyB5T3JpZ2luICogYTIyKSArIHlPZmZzZXQpO1xuICB9XG5cbiAgaWYgKHhQZXJjZW50IHx8IHlQZXJjZW50KSB7XG4gICAgLy9UaGUgU1ZHIHNwZWMgZG9lc24ndCBzdXBwb3J0IHBlcmNlbnRhZ2UtYmFzZWQgdHJhbnNsYXRpb24gaW4gdGhlIFwidHJhbnNmb3JtXCIgYXR0cmlidXRlLCBzbyB3ZSBtZXJnZSBpdCBpbnRvIHRoZSB0cmFuc2xhdGlvbiB0byBzaW11bGF0ZSBpdC5cbiAgICB0ZW1wID0gdGFyZ2V0LmdldEJCb3goKTtcbiAgICB0eCA9IF9yb3VuZCh0eCArIHhQZXJjZW50IC8gMTAwICogdGVtcC53aWR0aCk7XG4gICAgdHkgPSBfcm91bmQodHkgKyB5UGVyY2VudCAvIDEwMCAqIHRlbXAuaGVpZ2h0KTtcbiAgfVxuXG4gIHRlbXAgPSBcIm1hdHJpeChcIiArIGExMSArIFwiLFwiICsgYTIxICsgXCIsXCIgKyBhMTIgKyBcIixcIiArIGEyMiArIFwiLFwiICsgdHggKyBcIixcIiArIHR5ICsgXCIpXCI7XG4gIHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgdGVtcCk7XG4gIGZvcmNlQ1NTICYmICh0YXJnZXQuc3R5bGVbX3RyYW5zZm9ybVByb3BdID0gdGVtcCk7IC8vc29tZSBicm93c2VycyBwcmlvcml0aXplIENTUyB0cmFuc2Zvcm1zIG92ZXIgdGhlIHRyYW5zZm9ybSBhdHRyaWJ1dGUuIFdoZW4gd2Ugc2Vuc2UgdGhhdCB0aGUgdXNlciBoYXMgQ1NTIHRyYW5zZm9ybXMgYXBwbGllZCwgd2UgbXVzdCBvdmVyd3JpdGUgdGhlbSB0aGlzIHdheSAob3RoZXJ3aXNlIHNvbWUgYnJvd3NlciBzaW1wbHkgd29uJ3QgcmVuZGVyIHRoZSAgdHJhbnNmb3JtIGF0dHJpYnV0ZSBjaGFuZ2VzISlcbn0sXG4gICAgX2FkZFJvdGF0aW9uYWxQcm9wVHdlZW4gPSBmdW5jdGlvbiBfYWRkUm90YXRpb25hbFByb3BUd2VlbihwbHVnaW4sIHRhcmdldCwgcHJvcGVydHksIHN0YXJ0TnVtLCBlbmRWYWx1ZSkge1xuICB2YXIgY2FwID0gMzYwLFxuICAgICAgaXNTdHJpbmcgPSBfaXNTdHJpbmcoZW5kVmFsdWUpLFxuICAgICAgZW5kTnVtID0gcGFyc2VGbG9hdChlbmRWYWx1ZSkgKiAoaXNTdHJpbmcgJiYgfmVuZFZhbHVlLmluZGV4T2YoXCJyYWRcIikgPyBfUkFEMkRFRyA6IDEpLFxuICAgICAgY2hhbmdlID0gZW5kTnVtIC0gc3RhcnROdW0sXG4gICAgICBmaW5hbFZhbHVlID0gc3RhcnROdW0gKyBjaGFuZ2UgKyBcImRlZ1wiLFxuICAgICAgZGlyZWN0aW9uLFxuICAgICAgcHQ7XG5cbiAgaWYgKGlzU3RyaW5nKSB7XG4gICAgZGlyZWN0aW9uID0gZW5kVmFsdWUuc3BsaXQoXCJfXCIpWzFdO1xuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJzaG9ydFwiKSB7XG4gICAgICBjaGFuZ2UgJT0gY2FwO1xuXG4gICAgICBpZiAoY2hhbmdlICE9PSBjaGFuZ2UgJSAoY2FwIC8gMikpIHtcbiAgICAgICAgY2hhbmdlICs9IGNoYW5nZSA8IDAgPyBjYXAgOiAtY2FwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwiY3dcIiAmJiBjaGFuZ2UgPCAwKSB7XG4gICAgICBjaGFuZ2UgPSAoY2hhbmdlICsgY2FwICogX2JpZ051bSkgJSBjYXAgLSB+fihjaGFuZ2UgLyBjYXApICogY2FwO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcImNjd1wiICYmIGNoYW5nZSA+IDApIHtcbiAgICAgIGNoYW5nZSA9IChjaGFuZ2UgLSBjYXAgKiBfYmlnTnVtKSAlIGNhcCAtIH5+KGNoYW5nZSAvIGNhcCkgKiBjYXA7XG4gICAgfVxuICB9XG5cbiAgcGx1Z2luLl9wdCA9IHB0ID0gbmV3IFByb3BUd2VlbihwbHVnaW4uX3B0LCB0YXJnZXQsIHByb3BlcnR5LCBzdGFydE51bSwgY2hhbmdlLCBfcmVuZGVyUHJvcFdpdGhFbmQpO1xuICBwdC5lID0gZmluYWxWYWx1ZTtcbiAgcHQudSA9IFwiZGVnXCI7XG5cbiAgcGx1Z2luLl9wcm9wcy5wdXNoKHByb3BlcnR5KTtcblxuICByZXR1cm4gcHQ7XG59LFxuICAgIF9hc3NpZ24gPSBmdW5jdGlvbiBfYXNzaWduKHRhcmdldCwgc291cmNlKSB7XG4gIC8vIEludGVybmV0IEV4cGxvcmVyIGRvZXNuJ3QgaGF2ZSBPYmplY3QuYXNzaWduKCksIHNvIHdlIHJlY3JlYXRlIGl0IGhlcmUuXG4gIGZvciAodmFyIHAgaW4gc291cmNlKSB7XG4gICAgdGFyZ2V0W3BdID0gc291cmNlW3BdO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0sXG4gICAgX2FkZFJhd1RyYW5zZm9ybVBUcyA9IGZ1bmN0aW9uIF9hZGRSYXdUcmFuc2Zvcm1QVHMocGx1Z2luLCB0cmFuc2Zvcm1zLCB0YXJnZXQpIHtcbiAgLy9mb3IgaGFuZGxpbmcgY2FzZXMgd2hlcmUgc29tZW9uZSBwYXNzZXMgaW4gYSB3aG9sZSB0cmFuc2Zvcm0gc3RyaW5nLCBsaWtlIHRyYW5zZm9ybTogXCJzY2FsZSgyLCAzKSByb3RhdGUoMjBkZWcpIHRyYW5zbGF0ZVkoMzBlbSlcIlxuICB2YXIgc3RhcnRDYWNoZSA9IF9hc3NpZ24oe30sIHRhcmdldC5fZ3NhcCksXG4gICAgICBleGNsdWRlID0gXCJwZXJzcGVjdGl2ZSxmb3JjZTNELHRyYW5zZm9ybU9yaWdpbixzdmdPcmlnaW5cIixcbiAgICAgIHN0eWxlID0gdGFyZ2V0LnN0eWxlLFxuICAgICAgZW5kQ2FjaGUsXG4gICAgICBwLFxuICAgICAgc3RhcnRWYWx1ZSxcbiAgICAgIGVuZFZhbHVlLFxuICAgICAgc3RhcnROdW0sXG4gICAgICBlbmROdW0sXG4gICAgICBzdGFydFVuaXQsXG4gICAgICBlbmRVbml0O1xuXG4gIGlmIChzdGFydENhY2hlLnN2Zykge1xuICAgIHN0YXJ0VmFsdWUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIpO1xuICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJcIik7XG4gICAgc3R5bGVbX3RyYW5zZm9ybVByb3BdID0gdHJhbnNmb3JtcztcbiAgICBlbmRDYWNoZSA9IF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIDEpO1xuXG4gICAgX3JlbW92ZVByb3BlcnR5KHRhcmdldCwgX3RyYW5zZm9ybVByb3ApO1xuXG4gICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBzdGFydFZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdGFydFZhbHVlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpW190cmFuc2Zvcm1Qcm9wXTtcbiAgICBzdHlsZVtfdHJhbnNmb3JtUHJvcF0gPSB0cmFuc2Zvcm1zO1xuICAgIGVuZENhY2hlID0gX3BhcnNlVHJhbnNmb3JtKHRhcmdldCwgMSk7XG4gICAgc3R5bGVbX3RyYW5zZm9ybVByb3BdID0gc3RhcnRWYWx1ZTtcbiAgfVxuXG4gIGZvciAocCBpbiBfdHJhbnNmb3JtUHJvcHMpIHtcbiAgICBzdGFydFZhbHVlID0gc3RhcnRDYWNoZVtwXTtcbiAgICBlbmRWYWx1ZSA9IGVuZENhY2hlW3BdO1xuXG4gICAgaWYgKHN0YXJ0VmFsdWUgIT09IGVuZFZhbHVlICYmIGV4Y2x1ZGUuaW5kZXhPZihwKSA8IDApIHtcbiAgICAgIC8vdHdlZW5pbmcgdG8gbm8gcGVyc3BlY3RpdmUgZ2l2ZXMgdmVyeSB1bmludHVpdGl2ZSByZXN1bHRzIC0ganVzdCBrZWVwIHRoZSBzYW1lIHBlcnNwZWN0aXZlIGluIHRoYXQgY2FzZS5cbiAgICAgIHN0YXJ0VW5pdCA9IGdldFVuaXQoc3RhcnRWYWx1ZSk7XG4gICAgICBlbmRVbml0ID0gZ2V0VW5pdChlbmRWYWx1ZSk7XG4gICAgICBzdGFydE51bSA9IHN0YXJ0VW5pdCAhPT0gZW5kVW5pdCA/IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcCwgc3RhcnRWYWx1ZSwgZW5kVW5pdCkgOiBwYXJzZUZsb2F0KHN0YXJ0VmFsdWUpO1xuICAgICAgZW5kTnVtID0gcGFyc2VGbG9hdChlbmRWYWx1ZSk7XG4gICAgICBwbHVnaW4uX3B0ID0gbmV3IFByb3BUd2VlbihwbHVnaW4uX3B0LCBlbmRDYWNoZSwgcCwgc3RhcnROdW0sIGVuZE51bSAtIHN0YXJ0TnVtLCBfcmVuZGVyQ1NTUHJvcCk7XG4gICAgICBwbHVnaW4uX3B0LnUgPSBlbmRVbml0IHx8IDA7XG5cbiAgICAgIHBsdWdpbi5fcHJvcHMucHVzaChwKTtcbiAgICB9XG4gIH1cblxuICBfYXNzaWduKGVuZENhY2hlLCBzdGFydENhY2hlKTtcbn07IC8vIGhhbmRsZSBzcGxpdHRpbmcgYXBhcnQgcGFkZGluZywgbWFyZ2luLCBib3JkZXJXaWR0aCwgYW5kIGJvcmRlclJhZGl1cyBpbnRvIHRoZWlyIDQgY29tcG9uZW50cy4gRmlyZWZveCwgZm9yIGV4YW1wbGUsIHdvbid0IHJlcG9ydCBib3JkZXJSYWRpdXMgY29ycmVjdGx5IC0gaXQgd2lsbCBvbmx5IGRvIGJvcmRlclRvcExlZnRSYWRpdXMgYW5kIHRoZSBvdGhlciBjb3JuZXJzLiBXZSBhbHNvIHdhbnQgdG8gaGFuZGxlIHBhZGRpbmdUb3AsIG1hcmdpbkxlZnQsIGJvcmRlclJpZ2h0V2lkdGgsIGV0Yy5cblxuXG5fZm9yRWFjaE5hbWUoXCJwYWRkaW5nLG1hcmdpbixXaWR0aCxSYWRpdXNcIiwgZnVuY3Rpb24gKG5hbWUsIGluZGV4KSB7XG4gIHZhciB0ID0gXCJUb3BcIixcbiAgICAgIHIgPSBcIlJpZ2h0XCIsXG4gICAgICBiID0gXCJCb3R0b21cIixcbiAgICAgIGwgPSBcIkxlZnRcIixcbiAgICAgIHByb3BzID0gKGluZGV4IDwgMyA/IFt0LCByLCBiLCBsXSA6IFt0ICsgbCwgdCArIHIsIGIgKyByLCBiICsgbF0pLm1hcChmdW5jdGlvbiAoc2lkZSkge1xuICAgIHJldHVybiBpbmRleCA8IDIgPyBuYW1lICsgc2lkZSA6IFwiYm9yZGVyXCIgKyBzaWRlICsgbmFtZTtcbiAgfSk7XG5cbiAgX3NwZWNpYWxQcm9wc1tpbmRleCA+IDEgPyBcImJvcmRlclwiICsgbmFtZSA6IG5hbWVdID0gZnVuY3Rpb24gKHBsdWdpbiwgdGFyZ2V0LCBwcm9wZXJ0eSwgZW5kVmFsdWUsIHR3ZWVuKSB7XG4gICAgdmFyIGEsIHZhcnM7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDQpIHtcbiAgICAgIC8vIGdldHRlciwgcGFzc2VkIHRhcmdldCwgcHJvcGVydHksIGFuZCB1bml0IChmcm9tIF9nZXQoKSlcbiAgICAgIGEgPSBwcm9wcy5tYXAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgcmV0dXJuIF9nZXQocGx1Z2luLCBwcm9wLCBwcm9wZXJ0eSk7XG4gICAgICB9KTtcbiAgICAgIHZhcnMgPSBhLmpvaW4oXCIgXCIpO1xuICAgICAgcmV0dXJuIHZhcnMuc3BsaXQoYVswXSkubGVuZ3RoID09PSA1ID8gYVswXSA6IHZhcnM7XG4gICAgfVxuXG4gICAgYSA9IChlbmRWYWx1ZSArIFwiXCIpLnNwbGl0KFwiIFwiKTtcbiAgICB2YXJzID0ge307XG4gICAgcHJvcHMuZm9yRWFjaChmdW5jdGlvbiAocHJvcCwgaSkge1xuICAgICAgcmV0dXJuIHZhcnNbcHJvcF0gPSBhW2ldID0gYVtpXSB8fCBhWyhpIC0gMSkgLyAyIHwgMF07XG4gICAgfSk7XG4gICAgcGx1Z2luLmluaXQodGFyZ2V0LCB2YXJzLCB0d2Vlbik7XG4gIH07XG59KTtcblxuZXhwb3J0IHZhciBDU1NQbHVnaW4gPSB7XG4gIG5hbWU6IFwiY3NzXCIsXG4gIHJlZ2lzdGVyOiBfaW5pdENvcmUsXG4gIHRhcmdldFRlc3Q6IGZ1bmN0aW9uIHRhcmdldFRlc3QodGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRhcmdldC5zdHlsZSAmJiB0YXJnZXQubm9kZVR5cGU7XG4gIH0sXG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQodGFyZ2V0LCB2YXJzLCB0d2VlbiwgaW5kZXgsIHRhcmdldHMpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLl9wcm9wcyxcbiAgICAgICAgc3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gICAgICAgIHN0YXJ0QXQgPSB0d2Vlbi52YXJzLnN0YXJ0QXQsXG4gICAgICAgIHN0YXJ0VmFsdWUsXG4gICAgICAgIGVuZFZhbHVlLFxuICAgICAgICBlbmROdW0sXG4gICAgICAgIHN0YXJ0TnVtLFxuICAgICAgICB0eXBlLFxuICAgICAgICBzcGVjaWFsUHJvcCxcbiAgICAgICAgcCxcbiAgICAgICAgc3RhcnRVbml0LFxuICAgICAgICBlbmRVbml0LFxuICAgICAgICByZWxhdGl2ZSxcbiAgICAgICAgaXNUcmFuc2Zvcm1SZWxhdGVkLFxuICAgICAgICB0cmFuc2Zvcm1Qcm9wVHdlZW4sXG4gICAgICAgIGNhY2hlLFxuICAgICAgICBzbW9vdGgsXG4gICAgICAgIGhhc1ByaW9yaXR5O1xuICAgIF9wbHVnaW5Jbml0dGVkIHx8IF9pbml0Q29yZSgpO1xuXG4gICAgZm9yIChwIGluIHZhcnMpIHtcbiAgICAgIGlmIChwID09PSBcImF1dG9Sb3VuZFwiKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBlbmRWYWx1ZSA9IHZhcnNbcF07XG5cbiAgICAgIGlmIChfcGx1Z2luc1twXSAmJiBfY2hlY2tQbHVnaW4ocCwgdmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpKSB7XG4gICAgICAgIC8vIHBsdWdpbnNcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHR5cGUgPSB0eXBlb2YgZW5kVmFsdWU7XG4gICAgICBzcGVjaWFsUHJvcCA9IF9zcGVjaWFsUHJvcHNbcF07XG5cbiAgICAgIGlmICh0eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZW5kVmFsdWUgPSBlbmRWYWx1ZS5jYWxsKHR3ZWVuLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzKTtcbiAgICAgICAgdHlwZSA9IHR5cGVvZiBlbmRWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGUgPT09IFwic3RyaW5nXCIgJiYgfmVuZFZhbHVlLmluZGV4T2YoXCJyYW5kb20oXCIpKSB7XG4gICAgICAgIGVuZFZhbHVlID0gX3JlcGxhY2VSYW5kb20oZW5kVmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3BlY2lhbFByb3ApIHtcbiAgICAgICAgc3BlY2lhbFByb3AodGhpcywgdGFyZ2V0LCBwLCBlbmRWYWx1ZSwgdHdlZW4pICYmIChoYXNQcmlvcml0eSA9IDEpO1xuICAgICAgfSBlbHNlIGlmIChwLnN1YnN0cigwLCAyKSA9PT0gXCItLVwiKSB7XG4gICAgICAgIC8vQ1NTIHZhcmlhYmxlXG4gICAgICAgIHN0YXJ0VmFsdWUgPSAoZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLmdldFByb3BlcnR5VmFsdWUocCkgKyBcIlwiKS50cmltKCk7XG4gICAgICAgIGVuZFZhbHVlICs9IFwiXCI7XG4gICAgICAgIF9jb2xvckV4cC5sYXN0SW5kZXggPSAwO1xuXG4gICAgICAgIGlmICghX2NvbG9yRXhwLnRlc3Qoc3RhcnRWYWx1ZSkpIHtcbiAgICAgICAgICAvLyBjb2xvcnMgZG9uJ3QgaGF2ZSB1bml0c1xuICAgICAgICAgIHN0YXJ0VW5pdCA9IGdldFVuaXQoc3RhcnRWYWx1ZSk7XG4gICAgICAgICAgZW5kVW5pdCA9IGdldFVuaXQoZW5kVmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZW5kVW5pdCA/IHN0YXJ0VW5pdCAhPT0gZW5kVW5pdCAmJiAoc3RhcnRWYWx1ZSA9IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcCwgc3RhcnRWYWx1ZSwgZW5kVW5pdCkgKyBlbmRVbml0KSA6IHN0YXJ0VW5pdCAmJiAoZW5kVmFsdWUgKz0gc3RhcnRVbml0KTtcbiAgICAgICAgdGhpcy5hZGQoc3R5bGUsIFwic2V0UHJvcGVydHlcIiwgc3RhcnRWYWx1ZSwgZW5kVmFsdWUsIGluZGV4LCB0YXJnZXRzLCAwLCAwLCBwKTtcbiAgICAgICAgcHJvcHMucHVzaChwKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAoc3RhcnRBdCAmJiBwIGluIHN0YXJ0QXQpIHtcbiAgICAgICAgICAvLyBpbiBjYXNlIHNvbWVvbmUgaGFyZC1jb2RlcyBhIGNvbXBsZXggdmFsdWUgYXMgdGhlIHN0YXJ0LCBsaWtlIHRvcDogXCJjYWxjKDJ2aCAvIDIpXCIuIFdpdGhvdXQgdGhpcywgaXQnZCB1c2UgdGhlIGNvbXB1dGVkIHZhbHVlIChhbHdheXMgaW4gcHgpXG4gICAgICAgICAgc3RhcnRWYWx1ZSA9IHR5cGVvZiBzdGFydEF0W3BdID09PSBcImZ1bmN0aW9uXCIgPyBzdGFydEF0W3BdLmNhbGwodHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpIDogc3RhcnRBdFtwXTtcbiAgICAgICAgICBfaXNTdHJpbmcoc3RhcnRWYWx1ZSkgJiYgfnN0YXJ0VmFsdWUuaW5kZXhPZihcInJhbmRvbShcIikgJiYgKHN0YXJ0VmFsdWUgPSBfcmVwbGFjZVJhbmRvbShzdGFydFZhbHVlKSk7XG4gICAgICAgICAgZ2V0VW5pdChzdGFydFZhbHVlICsgXCJcIikgfHwgKHN0YXJ0VmFsdWUgKz0gX2NvbmZpZy51bml0c1twXSB8fCBnZXRVbml0KF9nZXQodGFyZ2V0LCBwKSkgfHwgXCJcIik7IC8vIGZvciBjYXNlcyB3aGVuIHNvbWVvbmUgcGFzc2VzIGluIGEgdW5pdGxlc3MgdmFsdWUgbGlrZSB7eDogMTAwfTsgaWYgd2UgdHJ5IHNldHRpbmcgdHJhbnNsYXRlKDEwMCwgMHB4KSBpdCB3b24ndCB3b3JrLlxuXG4gICAgICAgICAgKHN0YXJ0VmFsdWUgKyBcIlwiKS5jaGFyQXQoMSkgPT09IFwiPVwiICYmIChzdGFydFZhbHVlID0gX2dldCh0YXJnZXQsIHApKTsgLy8gY2FuJ3Qgd29yayB3aXRoIHJlbGF0aXZlIHZhbHVlc1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXJ0VmFsdWUgPSBfZ2V0KHRhcmdldCwgcCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGFydE51bSA9IHBhcnNlRmxvYXQoc3RhcnRWYWx1ZSk7XG4gICAgICAgIHJlbGF0aXZlID0gdHlwZSA9PT0gXCJzdHJpbmdcIiAmJiBlbmRWYWx1ZS5jaGFyQXQoMSkgPT09IFwiPVwiICYmIGVuZFZhbHVlLnN1YnN0cigwLCAyKTtcbiAgICAgICAgcmVsYXRpdmUgJiYgKGVuZFZhbHVlID0gZW5kVmFsdWUuc3Vic3RyKDIpKTtcbiAgICAgICAgZW5kTnVtID0gcGFyc2VGbG9hdChlbmRWYWx1ZSk7XG5cbiAgICAgICAgaWYgKHAgaW4gX3Byb3BlcnR5QWxpYXNlcykge1xuICAgICAgICAgIGlmIChwID09PSBcImF1dG9BbHBoYVwiKSB7XG4gICAgICAgICAgICAvL3NwZWNpYWwgY2FzZSB3aGVyZSB3ZSBjb250cm9sIHRoZSB2aXNpYmlsaXR5IGFsb25nIHdpdGggb3BhY2l0eS4gV2Ugc3RpbGwgYWxsb3cgdGhlIG9wYWNpdHkgdmFsdWUgdG8gcGFzcyB0aHJvdWdoIGFuZCBnZXQgdHdlZW5lZC5cbiAgICAgICAgICAgIGlmIChzdGFydE51bSA9PT0gMSAmJiBfZ2V0KHRhcmdldCwgXCJ2aXNpYmlsaXR5XCIpID09PSBcImhpZGRlblwiICYmIGVuZE51bSkge1xuICAgICAgICAgICAgICAvL2lmIHZpc2liaWxpdHkgaXMgaW5pdGlhbGx5IHNldCB0byBcImhpZGRlblwiLCB3ZSBzaG91bGQgaW50ZXJwcmV0IHRoYXQgYXMgaW50ZW50IHRvIG1ha2Ugb3BhY2l0eSAwIChhIGNvbnZlbmllbmNlKVxuICAgICAgICAgICAgICBzdGFydE51bSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9hZGROb25Ud2VlbmluZ1BUKHRoaXMsIHN0eWxlLCBcInZpc2liaWxpdHlcIiwgc3RhcnROdW0gPyBcImluaGVyaXRcIiA6IFwiaGlkZGVuXCIsIGVuZE51bSA/IFwiaW5oZXJpdFwiIDogXCJoaWRkZW5cIiwgIWVuZE51bSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHAgIT09IFwic2NhbGVcIiAmJiBwICE9PSBcInRyYW5zZm9ybVwiKSB7XG4gICAgICAgICAgICBwID0gX3Byb3BlcnR5QWxpYXNlc1twXTtcbiAgICAgICAgICAgIH5wLmluZGV4T2YoXCIsXCIpICYmIChwID0gcC5zcGxpdChcIixcIilbMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlzVHJhbnNmb3JtUmVsYXRlZCA9IHAgaW4gX3RyYW5zZm9ybVByb3BzOyAvLy0tLSBUUkFOU0ZPUk0tUkVMQVRFRCAtLS1cblxuICAgICAgICBpZiAoaXNUcmFuc2Zvcm1SZWxhdGVkKSB7XG4gICAgICAgICAgaWYgKCF0cmFuc2Zvcm1Qcm9wVHdlZW4pIHtcbiAgICAgICAgICAgIGNhY2hlID0gdGFyZ2V0Ll9nc2FwO1xuICAgICAgICAgICAgY2FjaGUucmVuZGVyVHJhbnNmb3JtICYmICF2YXJzLnBhcnNlVHJhbnNmb3JtIHx8IF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIHZhcnMucGFyc2VUcmFuc2Zvcm0pOyAvLyBpZiwgZm9yIGV4YW1wbGUsIGdzYXAuc2V0KC4uLiB7dHJhbnNmb3JtOlwidHJhbnNsYXRlWCg1MHZ3KVwifSksIHRoZSBfZ2V0KCkgY2FsbCBkb2Vzbid0IHBhcnNlIHRoZSB0cmFuc2Zvcm0sIHRodXMgY2FjaGUucmVuZGVyVHJhbnNmb3JtIHdvbid0IGJlIHNldCB5ZXQgc28gZm9yY2UgdGhlIHBhcnNpbmcgb2YgdGhlIHRyYW5zZm9ybSBoZXJlLlxuXG4gICAgICAgICAgICBzbW9vdGggPSB2YXJzLnNtb290aE9yaWdpbiAhPT0gZmFsc2UgJiYgY2FjaGUuc21vb3RoO1xuICAgICAgICAgICAgdHJhbnNmb3JtUHJvcFR3ZWVuID0gdGhpcy5fcHQgPSBuZXcgUHJvcFR3ZWVuKHRoaXMuX3B0LCBzdHlsZSwgX3RyYW5zZm9ybVByb3AsIDAsIDEsIGNhY2hlLnJlbmRlclRyYW5zZm9ybSwgY2FjaGUsIDAsIC0xKTsgLy90aGUgZmlyc3QgdGltZSB0aHJvdWdoLCBjcmVhdGUgdGhlIHJlbmRlcmluZyBQcm9wVHdlZW4gc28gdGhhdCBpdCBydW5zIExBU1QgKGluIHRoZSBsaW5rZWQgbGlzdCwgd2Uga2VlcCBhZGRpbmcgdG8gdGhlIGJlZ2lubmluZylcblxuICAgICAgICAgICAgdHJhbnNmb3JtUHJvcFR3ZWVuLmRlcCA9IDE7IC8vZmxhZyBpdCBhcyBkZXBlbmRlbnQgc28gdGhhdCBpZiB0aGluZ3MgZ2V0IGtpbGxlZC9vdmVyd3JpdHRlbiBhbmQgdGhpcyBpcyB0aGUgb25seSBQcm9wVHdlZW4gbGVmdCwgd2UgY2FuIHNhZmVseSBraWxsIHRoZSB3aG9sZSB0d2Vlbi5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocCA9PT0gXCJzY2FsZVwiKSB7XG4gICAgICAgICAgICB0aGlzLl9wdCA9IG5ldyBQcm9wVHdlZW4odGhpcy5fcHQsIGNhY2hlLCBcInNjYWxlWVwiLCBjYWNoZS5zY2FsZVksIChyZWxhdGl2ZSA/IF9wYXJzZVJlbGF0aXZlKGNhY2hlLnNjYWxlWSwgcmVsYXRpdmUgKyBlbmROdW0pIDogZW5kTnVtKSAtIGNhY2hlLnNjYWxlWSB8fCAwKTtcbiAgICAgICAgICAgIHByb3BzLnB1c2goXCJzY2FsZVlcIiwgcCk7XG4gICAgICAgICAgICBwICs9IFwiWFwiO1xuICAgICAgICAgIH0gZWxzZSBpZiAocCA9PT0gXCJ0cmFuc2Zvcm1PcmlnaW5cIikge1xuICAgICAgICAgICAgZW5kVmFsdWUgPSBfY29udmVydEtleXdvcmRzVG9QZXJjZW50YWdlcyhlbmRWYWx1ZSk7IC8vaW4gY2FzZSBzb21ldGhpbmcgbGlrZSBcImxlZnQgdG9wXCIgb3IgXCJib3R0b20gcmlnaHRcIiBpcyBwYXNzZWQgaW4uIENvbnZlcnQgdG8gcGVyY2VudGFnZXMuXG5cbiAgICAgICAgICAgIGlmIChjYWNoZS5zdmcpIHtcbiAgICAgICAgICAgICAgX2FwcGx5U1ZHT3JpZ2luKHRhcmdldCwgZW5kVmFsdWUsIDAsIHNtb290aCwgMCwgdGhpcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbmRVbml0ID0gcGFyc2VGbG9hdChlbmRWYWx1ZS5zcGxpdChcIiBcIilbMl0pIHx8IDA7IC8vaGFuZGxlIHRoZSB6T3JpZ2luIHNlcGFyYXRlbHkhXG5cbiAgICAgICAgICAgICAgZW5kVW5pdCAhPT0gY2FjaGUuek9yaWdpbiAmJiBfYWRkTm9uVHdlZW5pbmdQVCh0aGlzLCBjYWNoZSwgXCJ6T3JpZ2luXCIsIGNhY2hlLnpPcmlnaW4sIGVuZFVuaXQpO1xuXG4gICAgICAgICAgICAgIF9hZGROb25Ud2VlbmluZ1BUKHRoaXMsIHN0eWxlLCBwLCBfZmlyc3RUd29Pbmx5KHN0YXJ0VmFsdWUpLCBfZmlyc3RUd29Pbmx5KGVuZFZhbHVlKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAocCA9PT0gXCJzdmdPcmlnaW5cIikge1xuICAgICAgICAgICAgX2FwcGx5U1ZHT3JpZ2luKHRhcmdldCwgZW5kVmFsdWUsIDEsIHNtb290aCwgMCwgdGhpcyk7XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAocCBpbiBfcm90YXRpb25hbFByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIF9hZGRSb3RhdGlvbmFsUHJvcFR3ZWVuKHRoaXMsIGNhY2hlLCBwLCBzdGFydE51bSwgcmVsYXRpdmUgPyBfcGFyc2VSZWxhdGl2ZShzdGFydE51bSwgcmVsYXRpdmUgKyBlbmRWYWx1ZSkgOiBlbmRWYWx1ZSk7XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAocCA9PT0gXCJzbW9vdGhPcmlnaW5cIikge1xuICAgICAgICAgICAgX2FkZE5vblR3ZWVuaW5nUFQodGhpcywgY2FjaGUsIFwic21vb3RoXCIsIGNhY2hlLnNtb290aCwgZW5kVmFsdWUpO1xuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHAgPT09IFwiZm9yY2UzRFwiKSB7XG4gICAgICAgICAgICBjYWNoZVtwXSA9IGVuZFZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChwID09PSBcInRyYW5zZm9ybVwiKSB7XG4gICAgICAgICAgICBfYWRkUmF3VHJhbnNmb3JtUFRzKHRoaXMsIGVuZFZhbHVlLCB0YXJnZXQpO1xuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIShwIGluIHN0eWxlKSkge1xuICAgICAgICAgIHAgPSBfY2hlY2tQcm9wUHJlZml4KHApIHx8IHA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNUcmFuc2Zvcm1SZWxhdGVkIHx8IChlbmROdW0gfHwgZW5kTnVtID09PSAwKSAmJiAoc3RhcnROdW0gfHwgc3RhcnROdW0gPT09IDApICYmICFfY29tcGxleEV4cC50ZXN0KGVuZFZhbHVlKSAmJiBwIGluIHN0eWxlKSB7XG4gICAgICAgICAgc3RhcnRVbml0ID0gKHN0YXJ0VmFsdWUgKyBcIlwiKS5zdWJzdHIoKHN0YXJ0TnVtICsgXCJcIikubGVuZ3RoKTtcbiAgICAgICAgICBlbmROdW0gfHwgKGVuZE51bSA9IDApOyAvLyBwcm90ZWN0IGFnYWluc3QgTmFOXG5cbiAgICAgICAgICBlbmRVbml0ID0gZ2V0VW5pdChlbmRWYWx1ZSkgfHwgKHAgaW4gX2NvbmZpZy51bml0cyA/IF9jb25maWcudW5pdHNbcF0gOiBzdGFydFVuaXQpO1xuICAgICAgICAgIHN0YXJ0VW5pdCAhPT0gZW5kVW5pdCAmJiAoc3RhcnROdW0gPSBfY29udmVydFRvVW5pdCh0YXJnZXQsIHAsIHN0YXJ0VmFsdWUsIGVuZFVuaXQpKTtcbiAgICAgICAgICB0aGlzLl9wdCA9IG5ldyBQcm9wVHdlZW4odGhpcy5fcHQsIGlzVHJhbnNmb3JtUmVsYXRlZCA/IGNhY2hlIDogc3R5bGUsIHAsIHN0YXJ0TnVtLCAocmVsYXRpdmUgPyBfcGFyc2VSZWxhdGl2ZShzdGFydE51bSwgcmVsYXRpdmUgKyBlbmROdW0pIDogZW5kTnVtKSAtIHN0YXJ0TnVtLCAhaXNUcmFuc2Zvcm1SZWxhdGVkICYmIChlbmRVbml0ID09PSBcInB4XCIgfHwgcCA9PT0gXCJ6SW5kZXhcIikgJiYgdmFycy5hdXRvUm91bmQgIT09IGZhbHNlID8gX3JlbmRlclJvdW5kZWRDU1NQcm9wIDogX3JlbmRlckNTU1Byb3ApO1xuICAgICAgICAgIHRoaXMuX3B0LnUgPSBlbmRVbml0IHx8IDA7XG5cbiAgICAgICAgICBpZiAoc3RhcnRVbml0ICE9PSBlbmRVbml0ICYmIGVuZFVuaXQgIT09IFwiJVwiKSB7XG4gICAgICAgICAgICAvL3doZW4gdGhlIHR3ZWVuIGdvZXMgYWxsIHRoZSB3YXkgYmFjayB0byB0aGUgYmVnaW5uaW5nLCB3ZSBuZWVkIHRvIHJldmVydCBpdCB0byB0aGUgT0xEL09SSUdJTkFMIHZhbHVlICh3aXRoIHRob3NlIHVuaXRzKS4gV2UgcmVjb3JkIHRoYXQgYXMgYSBcImJcIiAoYmVnaW5uaW5nKSBwcm9wZXJ0eSBhbmQgcG9pbnQgdG8gYSByZW5kZXIgbWV0aG9kIHRoYXQgaGFuZGxlcyB0aGF0LiAocGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uKVxuICAgICAgICAgICAgdGhpcy5fcHQuYiA9IHN0YXJ0VmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9wdC5yID0gX3JlbmRlckNTU1Byb3BXaXRoQmVnaW5uaW5nO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghKHAgaW4gc3R5bGUpKSB7XG4gICAgICAgICAgaWYgKHAgaW4gdGFyZ2V0KSB7XG4gICAgICAgICAgICAvL21heWJlIGl0J3Mgbm90IGEgc3R5bGUgLSBpdCBjb3VsZCBiZSBhIHByb3BlcnR5IGFkZGVkIGRpcmVjdGx5IHRvIGFuIGVsZW1lbnQgaW4gd2hpY2ggY2FzZSB3ZSdsbCB0cnkgdG8gYW5pbWF0ZSB0aGF0LlxuICAgICAgICAgICAgdGhpcy5hZGQodGFyZ2V0LCBwLCBzdGFydFZhbHVlIHx8IHRhcmdldFtwXSwgcmVsYXRpdmUgPyByZWxhdGl2ZSArIGVuZFZhbHVlIDogZW5kVmFsdWUsIGluZGV4LCB0YXJnZXRzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX21pc3NpbmdQbHVnaW4ocCwgZW5kVmFsdWUpO1xuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3R3ZWVuQ29tcGxleENTU1N0cmluZy5jYWxsKHRoaXMsIHRhcmdldCwgcCwgc3RhcnRWYWx1ZSwgcmVsYXRpdmUgPyByZWxhdGl2ZSArIGVuZFZhbHVlIDogZW5kVmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvcHMucHVzaChwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNQcmlvcml0eSAmJiBfc29ydFByb3BUd2VlbnNCeVByaW9yaXR5KHRoaXMpO1xuICB9LFxuICBnZXQ6IF9nZXQsXG4gIGFsaWFzZXM6IF9wcm9wZXJ0eUFsaWFzZXMsXG4gIGdldFNldHRlcjogZnVuY3Rpb24gZ2V0U2V0dGVyKHRhcmdldCwgcHJvcGVydHksIHBsdWdpbikge1xuICAgIC8vcmV0dXJucyBhIHNldHRlciBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgdGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUgYW5kIGFwcGxpZXMgaXQgYWNjb3JkaW5nbHkuIFJlbWVtYmVyLCBwcm9wZXJ0aWVzIGxpa2UgXCJ4XCIgYXJlbid0IGFzIHNpbXBsZSBhcyB0YXJnZXQuc3R5bGUucHJvcGVydHkgPSB2YWx1ZSBiZWNhdXNlIHRoZXkndmUgZ290IHRvIGJlIGFwcGxpZWQgdG8gYSBwcm94eSBvYmplY3QgYW5kIHRoZW4gbWVyZ2VkIGludG8gYSB0cmFuc2Zvcm0gc3RyaW5nIGluIGEgcmVuZGVyZXIuXG4gICAgdmFyIHAgPSBfcHJvcGVydHlBbGlhc2VzW3Byb3BlcnR5XTtcbiAgICBwICYmIHAuaW5kZXhPZihcIixcIikgPCAwICYmIChwcm9wZXJ0eSA9IHApO1xuICAgIHJldHVybiBwcm9wZXJ0eSBpbiBfdHJhbnNmb3JtUHJvcHMgJiYgcHJvcGVydHkgIT09IF90cmFuc2Zvcm1PcmlnaW5Qcm9wICYmICh0YXJnZXQuX2dzYXAueCB8fCBfZ2V0KHRhcmdldCwgXCJ4XCIpKSA/IHBsdWdpbiAmJiBfcmVjZW50U2V0dGVyUGx1Z2luID09PSBwbHVnaW4gPyBwcm9wZXJ0eSA9PT0gXCJzY2FsZVwiID8gX3NldHRlclNjYWxlIDogX3NldHRlclRyYW5zZm9ybSA6IChfcmVjZW50U2V0dGVyUGx1Z2luID0gcGx1Z2luIHx8IHt9KSAmJiAocHJvcGVydHkgPT09IFwic2NhbGVcIiA/IF9zZXR0ZXJTY2FsZVdpdGhSZW5kZXIgOiBfc2V0dGVyVHJhbnNmb3JtV2l0aFJlbmRlcikgOiB0YXJnZXQuc3R5bGUgJiYgIV9pc1VuZGVmaW5lZCh0YXJnZXQuc3R5bGVbcHJvcGVydHldKSA/IF9zZXR0ZXJDU1NTdHlsZSA6IH5wcm9wZXJ0eS5pbmRleE9mKFwiLVwiKSA/IF9zZXR0ZXJDU1NQcm9wIDogX2dldFNldHRlcih0YXJnZXQsIHByb3BlcnR5KTtcbiAgfSxcbiAgY29yZToge1xuICAgIF9yZW1vdmVQcm9wZXJ0eTogX3JlbW92ZVByb3BlcnR5LFxuICAgIF9nZXRNYXRyaXg6IF9nZXRNYXRyaXhcbiAgfVxufTtcbmdzYXAudXRpbHMuY2hlY2tQcmVmaXggPSBfY2hlY2tQcm9wUHJlZml4O1xuXG4oZnVuY3Rpb24gKHBvc2l0aW9uQW5kU2NhbGUsIHJvdGF0aW9uLCBvdGhlcnMsIGFsaWFzZXMpIHtcbiAgdmFyIGFsbCA9IF9mb3JFYWNoTmFtZShwb3NpdGlvbkFuZFNjYWxlICsgXCIsXCIgKyByb3RhdGlvbiArIFwiLFwiICsgb3RoZXJzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgIF90cmFuc2Zvcm1Qcm9wc1tuYW1lXSA9IDE7XG4gIH0pO1xuXG4gIF9mb3JFYWNoTmFtZShyb3RhdGlvbiwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBfY29uZmlnLnVuaXRzW25hbWVdID0gXCJkZWdcIjtcbiAgICBfcm90YXRpb25hbFByb3BlcnRpZXNbbmFtZV0gPSAxO1xuICB9KTtcblxuICBfcHJvcGVydHlBbGlhc2VzW2FsbFsxM11dID0gcG9zaXRpb25BbmRTY2FsZSArIFwiLFwiICsgcm90YXRpb247XG5cbiAgX2ZvckVhY2hOYW1lKGFsaWFzZXMsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIHNwbGl0ID0gbmFtZS5zcGxpdChcIjpcIik7XG4gICAgX3Byb3BlcnR5QWxpYXNlc1tzcGxpdFsxXV0gPSBhbGxbc3BsaXRbMF1dO1xuICB9KTtcbn0pKFwieCx5LHosc2NhbGUsc2NhbGVYLHNjYWxlWSx4UGVyY2VudCx5UGVyY2VudFwiLCBcInJvdGF0aW9uLHJvdGF0aW9uWCxyb3RhdGlvblksc2tld1gsc2tld1lcIiwgXCJ0cmFuc2Zvcm0sdHJhbnNmb3JtT3JpZ2luLHN2Z09yaWdpbixmb3JjZTNELHNtb290aE9yaWdpbix0cmFuc2Zvcm1QZXJzcGVjdGl2ZVwiLCBcIjA6dHJhbnNsYXRlWCwxOnRyYW5zbGF0ZVksMjp0cmFuc2xhdGVaLDg6cm90YXRlLDg6cm90YXRpb25aLDg6cm90YXRlWiw5OnJvdGF0ZVgsMTA6cm90YXRlWVwiKTtcblxuX2ZvckVhY2hOYW1lKFwieCx5LHosdG9wLHJpZ2h0LGJvdHRvbSxsZWZ0LHdpZHRoLGhlaWdodCxmb250U2l6ZSxwYWRkaW5nLG1hcmdpbixwZXJzcGVjdGl2ZVwiLCBmdW5jdGlvbiAobmFtZSkge1xuICBfY29uZmlnLnVuaXRzW25hbWVdID0gXCJweFwiO1xufSk7XG5cbmdzYXAucmVnaXN0ZXJQbHVnaW4oQ1NTUGx1Z2luKTtcbmV4cG9ydCB7IENTU1BsdWdpbiBhcyBkZWZhdWx0LCBfZ2V0QkJveCwgX2NyZWF0ZUVsZW1lbnQsIF9jaGVja1Byb3BQcmVmaXggYXMgY2hlY2tQcmVmaXggfTsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qIVxuICogRHJhZ2dhYmxlIDMuMTAuNFxuICogaHR0cHM6Ly9ncmVlbnNvY2suY29tXG4gKlxuICogQGxpY2Vuc2UgQ29weXJpZ2h0IDIwMDgtMjAyMiwgR3JlZW5Tb2NrLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogU3ViamVjdCB0byB0aGUgdGVybXMgYXQgaHR0cHM6Ly9ncmVlbnNvY2suY29tL3N0YW5kYXJkLWxpY2Vuc2Ugb3IgZm9yXG4gKiBDbHViIEdyZWVuU29jayBtZW1iZXJzLCB0aGUgYWdyZWVtZW50IGlzc3VlZCB3aXRoIHRoYXQgbWVtYmVyc2hpcC5cbiAqIEBhdXRob3I6IEphY2sgRG95bGUsIGphY2tAZ3JlZW5zb2NrLmNvbVxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBnZXRHbG9iYWxNYXRyaXgsIE1hdHJpeDJEIH0gZnJvbSBcIi4vdXRpbHMvbWF0cml4LmpzXCI7XG5cbnZhciBnc2FwLFxuICAgIF93aW4sXG4gICAgX2RvYyxcbiAgICBfZG9jRWxlbWVudCxcbiAgICBfYm9keSxcbiAgICBfdGVtcERpdixcbiAgICBfcGxhY2Vob2xkZXJEaXYsXG4gICAgX2NvcmVJbml0dGVkLFxuICAgIF9jaGVja1ByZWZpeCxcbiAgICBfdG9BcnJheSxcbiAgICBfc3VwcG9ydHNQYXNzaXZlLFxuICAgIF9pc1RvdWNoRGV2aWNlLFxuICAgIF90b3VjaEV2ZW50TG9va3VwLFxuICAgIF9kcmFnQ291bnQsXG4gICAgX2lzTXVsdGlUb3VjaGluZyxcbiAgICBfaXNBbmRyb2lkLFxuICAgIEluZXJ0aWFQbHVnaW4sXG4gICAgX2RlZmF1bHRDdXJzb3IsXG4gICAgX3N1cHBvcnRzUG9pbnRlcixcbiAgICBfd2luZG93RXhpc3RzID0gZnVuY3Rpb24gX3dpbmRvd0V4aXN0cygpIHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCI7XG59LFxuICAgIF9nZXRHU0FQID0gZnVuY3Rpb24gX2dldEdTQVAoKSB7XG4gIHJldHVybiBnc2FwIHx8IF93aW5kb3dFeGlzdHMoKSAmJiAoZ3NhcCA9IHdpbmRvdy5nc2FwKSAmJiBnc2FwLnJlZ2lzdGVyUGx1Z2luICYmIGdzYXA7XG59LFxuICAgIF9pc0Z1bmN0aW9uID0gZnVuY3Rpb24gX2lzRnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiO1xufSxcbiAgICBfaXNPYmplY3QgPSBmdW5jdGlvbiBfaXNPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIjtcbn0sXG4gICAgX2lzVW5kZWZpbmVkID0gZnVuY3Rpb24gX2lzVW5kZWZpbmVkKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCI7XG59LFxuICAgIF9lbXB0eUZ1bmMgPSBmdW5jdGlvbiBfZW1wdHlGdW5jKCkge1xuICByZXR1cm4gZmFsc2U7XG59LFxuICAgIF90cmFuc2Zvcm1Qcm9wID0gXCJ0cmFuc2Zvcm1cIixcbiAgICBfdHJhbnNmb3JtT3JpZ2luUHJvcCA9IFwidHJhbnNmb3JtT3JpZ2luXCIsXG4gICAgX3JvdW5kID0gZnVuY3Rpb24gX3JvdW5kKHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlICogMTAwMDApIC8gMTAwMDA7XG59LFxuICAgIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheSxcbiAgICBfY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uIF9jcmVhdGVFbGVtZW50KHR5cGUsIG5zKSB7XG4gIHZhciBlID0gX2RvYy5jcmVhdGVFbGVtZW50TlMgPyBfZG9jLmNyZWF0ZUVsZW1lbnROUygobnMgfHwgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIpLnJlcGxhY2UoL15odHRwcy8sIFwiaHR0cFwiKSwgdHlwZSkgOiBfZG9jLmNyZWF0ZUVsZW1lbnQodHlwZSk7IC8vc29tZSBzZXJ2ZXJzIHN3YXAgaW4gaHR0cHMgZm9yIGh0dHAgaW4gdGhlIG5hbWVzcGFjZSB3aGljaCBjYW4gYnJlYWsgdGhpbmdzLCBtYWtpbmcgXCJzdHlsZVwiIGluYWNjZXNzaWJsZS5cblxuICByZXR1cm4gZS5zdHlsZSA/IGUgOiBfZG9jLmNyZWF0ZUVsZW1lbnQodHlwZSk7IC8vc29tZSBlbnZpcm9ubWVudHMgd29uJ3QgYWxsb3cgYWNjZXNzIHRvIHRoZSBlbGVtZW50J3Mgc3R5bGUgd2hlbiBjcmVhdGVkIHdpdGggYSBuYW1lc3BhY2UgaW4gd2hpY2ggY2FzZSB3ZSBkZWZhdWx0IHRvIHRoZSBzdGFuZGFyZCBjcmVhdGVFbGVtZW50KCkgdG8gd29yayBhcm91bmQgdGhlIGlzc3VlLiBBbHNvIG5vdGUgdGhhdCB3aGVuIEdTQVAgaXMgZW1iZWRkZWQgZGlyZWN0bHkgaW5zaWRlIGFuIFNWRyBmaWxlLCBjcmVhdGVFbGVtZW50KCkgd29uJ3QgYWxsb3cgYWNjZXNzIHRvIHRoZSBzdHlsZSBvYmplY3QgaW4gRmlyZWZveCAoc2VlIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9mb3J1bXMvdG9waWMvMjAyMTUtcHJvYmxlbS11c2luZy10d2Vlbm1heC1pbi1zdGFuZGFsb25lLXNlbGYtY29udGFpbmluZy1zdmctZmlsZS1lcnItY2Fubm90LXNldC1wcm9wZXJ0eS1jc3N0ZXh0LW9mLXVuZGVmaW5lZC8pLlxufSxcbiAgICBfUkFEMkRFRyA9IDE4MCAvIE1hdGguUEksXG4gICAgX2JpZ051bSA9IDFlMjAsXG4gICAgX2lkZW50aXR5TWF0cml4ID0gbmV3IE1hdHJpeDJEKCksXG4gICAgX2dldFRpbWUgPSBEYXRlLm5vdyB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn0sXG4gICAgX3JlbmRlclF1ZXVlID0gW10sXG4gICAgX2xvb2t1cCA9IHt9LFxuICAgIC8vd2hlbiBhIERyYWdnYWJsZSBpcyBjcmVhdGVkLCB0aGUgdGFyZ2V0IGdldHMgYSB1bmlxdWUgX2dzRHJhZ0lEIHByb3BlcnR5IHRoYXQgYWxsb3dzIGdldHMgYXNzb2NpYXRlZCB3aXRoIHRoZSBEcmFnZ2FibGUgaW5zdGFuY2UgZm9yIHF1aWNrIGxvb2t1cHMgaW4gRHJhZ2dhYmxlLmdldCgpLiBUaGlzIGF2b2lkcyBjaXJjdWxhciByZWZlcmVuY2VzIHRoYXQgY291bGQgY2F1c2UgZ2MgcHJvYmxlbXMuXG5fbG9va3VwQ291bnQgPSAwLFxuICAgIF9jbGlja2FibGVUYWdFeHAgPSAvXig/OmF8aW5wdXR8dGV4dGFyZWF8YnV0dG9ufHNlbGVjdCkkL2ksXG4gICAgX2xhc3REcmFnVGltZSA9IDAsXG4gICAgX3RlbXAxID0ge30sXG4gICAgLy8gYSBzaW1wbGUgb2JqZWN0IHdlIHJldXNlIGFuZCBwb3B1bGF0ZSAodXN1YWxseSB4L3kgcHJvcGVydGllcykgdG8gY29uc2VydmUgbWVtb3J5IGFuZCBpbXByb3ZlIHBlcmZvcm1hbmNlLlxuX3dpbmRvd1Byb3h5ID0ge30sXG4gICAgLy9tZW1vcnkvcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uIC0gd2UgcmV1c2UgdGhpcyBvYmplY3QgZHVyaW5nIGF1dG9TY3JvbGwgdG8gc3RvcmUgd2luZG93LXJlbGF0ZWQgYm91bmRzL29mZnNldHMuXG5fY29weSA9IGZ1bmN0aW9uIF9jb3B5KG9iaiwgZmFjdG9yKSB7XG4gIHZhciBjb3B5ID0ge30sXG4gICAgICBwO1xuXG4gIGZvciAocCBpbiBvYmopIHtcbiAgICBjb3B5W3BdID0gZmFjdG9yID8gb2JqW3BdICogZmFjdG9yIDogb2JqW3BdO1xuICB9XG5cbiAgcmV0dXJuIGNvcHk7XG59LFxuICAgIF9leHRlbmQgPSBmdW5jdGlvbiBfZXh0ZW5kKG9iaiwgZGVmYXVsdHMpIHtcbiAgZm9yICh2YXIgcCBpbiBkZWZhdWx0cykge1xuICAgIGlmICghKHAgaW4gb2JqKSkge1xuICAgICAgb2JqW3BdID0gZGVmYXVsdHNbcF07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0sXG4gICAgX3NldFRvdWNoQWN0aW9uRm9yQWxsRGVzY2VuZGFudHMgPSBmdW5jdGlvbiBfc2V0VG91Y2hBY3Rpb25Gb3JBbGxEZXNjZW5kYW50cyhlbGVtZW50cywgdmFsdWUpIHtcbiAgdmFyIGkgPSBlbGVtZW50cy5sZW5ndGgsXG4gICAgICBjaGlsZHJlbjtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgdmFsdWUgPyBlbGVtZW50c1tpXS5zdHlsZS50b3VjaEFjdGlvbiA9IHZhbHVlIDogZWxlbWVudHNbaV0uc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0b3VjaC1hY3Rpb25cIik7XG4gICAgY2hpbGRyZW4gPSBlbGVtZW50c1tpXS5jaGlsZHJlbjtcbiAgICBjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGggJiYgX3NldFRvdWNoQWN0aW9uRm9yQWxsRGVzY2VuZGFudHMoY2hpbGRyZW4sIHZhbHVlKTtcbiAgfVxufSxcbiAgICBfcmVuZGVyUXVldWVUaWNrID0gZnVuY3Rpb24gX3JlbmRlclF1ZXVlVGljaygpIHtcbiAgcmV0dXJuIF9yZW5kZXJRdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uIChmdW5jKSB7XG4gICAgcmV0dXJuIGZ1bmMoKTtcbiAgfSk7XG59LFxuICAgIF9hZGRUb1JlbmRlclF1ZXVlID0gZnVuY3Rpb24gX2FkZFRvUmVuZGVyUXVldWUoZnVuYykge1xuICBfcmVuZGVyUXVldWUucHVzaChmdW5jKTtcblxuICBpZiAoX3JlbmRlclF1ZXVlLmxlbmd0aCA9PT0gMSkge1xuICAgIGdzYXAudGlja2VyLmFkZChfcmVuZGVyUXVldWVUaWNrKTtcbiAgfVxufSxcbiAgICBfcmVuZGVyUXVldWVUaW1lb3V0ID0gZnVuY3Rpb24gX3JlbmRlclF1ZXVlVGltZW91dCgpIHtcbiAgcmV0dXJuICFfcmVuZGVyUXVldWUubGVuZ3RoICYmIGdzYXAudGlja2VyLnJlbW92ZShfcmVuZGVyUXVldWVUaWNrKTtcbn0sXG4gICAgX3JlbW92ZUZyb21SZW5kZXJRdWV1ZSA9IGZ1bmN0aW9uIF9yZW1vdmVGcm9tUmVuZGVyUXVldWUoZnVuYykge1xuICB2YXIgaSA9IF9yZW5kZXJRdWV1ZS5sZW5ndGg7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIGlmIChfcmVuZGVyUXVldWVbaV0gPT09IGZ1bmMpIHtcbiAgICAgIF9yZW5kZXJRdWV1ZS5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG5cbiAgZ3NhcC50byhfcmVuZGVyUXVldWVUaW1lb3V0LCB7XG4gICAgb3ZlcndyaXRlOiB0cnVlLFxuICAgIGRlbGF5OiAxNSxcbiAgICBkdXJhdGlvbjogMCxcbiAgICBvbkNvbXBsZXRlOiBfcmVuZGVyUXVldWVUaW1lb3V0LFxuICAgIGRhdGE6IFwiX2RyYWdnYWJsZVwiXG4gIH0pOyAvL3JlbW92ZSB0aGUgXCJ0aWNrXCIgbGlzdGVuZXIgb25seSBhZnRlciB0aGUgcmVuZGVyIHF1ZXVlIGlzIGVtcHR5IGZvciAxNSBzZWNvbmRzICh0byBpbXByb3ZlIHBlcmZvcm1hbmNlKS4gQWRkaW5nL3JlbW92aW5nIGl0IGNvbnN0YW50bHkgZm9yIGV2ZXJ5IGNsaWNrL3RvdWNoIHdvdWxkbid0IGRlbGl2ZXIgb3B0aW1hbCBzcGVlZCwgYW5kIHdlIGFsc28gZG9uJ3Qgd2FudCB0aGUgdGlja2VyIHRvIGtlZXAgY2FsbGluZyB0aGUgcmVuZGVyIG1ldGhvZCB3aGVuIHRoaW5ncyBhcmUgaWRsZSBmb3IgbG9uZyBwZXJpb2RzIG9mIHRpbWUgKHdlIHdhbnQgdG8gaW1wcm92ZSBiYXR0ZXJ5IGxpZmUgb24gbW9iaWxlIGRldmljZXMpLlxufSxcbiAgICBfc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiBfc2V0RGVmYXVsdHMob2JqLCBkZWZhdWx0cykge1xuICBmb3IgKHZhciBwIGluIGRlZmF1bHRzKSB7XG4gICAgaWYgKCEocCBpbiBvYmopKSB7XG4gICAgICBvYmpbcF0gPSBkZWZhdWx0c1twXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSxcbiAgICBfYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBfYWRkTGlzdGVuZXIoZWxlbWVudCwgdHlwZSwgZnVuYywgY2FwdHVyZSkge1xuICBpZiAoZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgdmFyIHRvdWNoVHlwZSA9IF90b3VjaEV2ZW50TG9va3VwW3R5cGVdO1xuICAgIGNhcHR1cmUgPSBjYXB0dXJlIHx8IChfc3VwcG9ydHNQYXNzaXZlID8ge1xuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9IDogbnVsbCk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoVHlwZSB8fCB0eXBlLCBmdW5jLCBjYXB0dXJlKTtcbiAgICB0b3VjaFR5cGUgJiYgdHlwZSAhPT0gdG91Y2hUeXBlICYmIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmdW5jLCBjYXB0dXJlKTsgLy9zb21lIGJyb3dzZXJzIGFjdHVhbGx5IHN1cHBvcnQgYm90aCwgc28gbXVzdCB3ZS4gQnV0IHBvaW50ZXIgZXZlbnRzIGNvdmVyIGFsbC5cbiAgfVxufSxcbiAgICBfcmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiBfcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgdHlwZSwgZnVuYykge1xuICBpZiAoZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgdmFyIHRvdWNoVHlwZSA9IF90b3VjaEV2ZW50TG9va3VwW3R5cGVdO1xuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaFR5cGUgfHwgdHlwZSwgZnVuYyk7XG4gICAgdG91Y2hUeXBlICYmIHR5cGUgIT09IHRvdWNoVHlwZSAmJiBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZnVuYyk7XG4gIH1cbn0sXG4gICAgX3ByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24gX3ByZXZlbnREZWZhdWx0KGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0ICYmIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGV2ZW50LnByZXZlbnRNYW5pcHVsYXRpb24gJiYgZXZlbnQucHJldmVudE1hbmlwdWxhdGlvbigpOyAvL2ZvciBzb21lIE1pY3Jvc29mdCBicm93c2Vyc1xufSxcbiAgICBfaGFzVG91Y2hJRCA9IGZ1bmN0aW9uIF9oYXNUb3VjaElEKGxpc3QsIElEKSB7XG4gIHZhciBpID0gbGlzdC5sZW5ndGg7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIGlmIChsaXN0W2ldLmlkZW50aWZpZXIgPT09IElEKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn0sXG4gICAgX29uTXVsdGlUb3VjaERvY3VtZW50RW5kID0gZnVuY3Rpb24gX29uTXVsdGlUb3VjaERvY3VtZW50RW5kKGV2ZW50KSB7XG4gIF9pc011bHRpVG91Y2hpbmcgPSBldmVudC50b3VjaGVzICYmIF9kcmFnQ291bnQgPCBldmVudC50b3VjaGVzLmxlbmd0aDtcblxuICBfcmVtb3ZlTGlzdGVuZXIoZXZlbnQudGFyZ2V0LCBcInRvdWNoZW5kXCIsIF9vbk11bHRpVG91Y2hEb2N1bWVudEVuZCk7XG59LFxuICAgIF9vbk11bHRpVG91Y2hEb2N1bWVudCA9IGZ1bmN0aW9uIF9vbk11bHRpVG91Y2hEb2N1bWVudChldmVudCkge1xuICBfaXNNdWx0aVRvdWNoaW5nID0gZXZlbnQudG91Y2hlcyAmJiBfZHJhZ0NvdW50IDwgZXZlbnQudG91Y2hlcy5sZW5ndGg7XG5cbiAgX2FkZExpc3RlbmVyKGV2ZW50LnRhcmdldCwgXCJ0b3VjaGVuZFwiLCBfb25NdWx0aVRvdWNoRG9jdW1lbnRFbmQpO1xufSxcbiAgICBfZ2V0RG9jU2Nyb2xsVG9wID0gZnVuY3Rpb24gX2dldERvY1Njcm9sbFRvcChkb2MpIHtcbiAgcmV0dXJuIF93aW4ucGFnZVlPZmZzZXQgfHwgZG9jLnNjcm9sbFRvcCB8fCBkb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2MuYm9keS5zY3JvbGxUb3AgfHwgMDtcbn0sXG4gICAgX2dldERvY1Njcm9sbExlZnQgPSBmdW5jdGlvbiBfZ2V0RG9jU2Nyb2xsTGVmdChkb2MpIHtcbiAgcmV0dXJuIF93aW4ucGFnZVhPZmZzZXQgfHwgZG9jLnNjcm9sbExlZnQgfHwgZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvYy5ib2R5LnNjcm9sbExlZnQgfHwgMDtcbn0sXG4gICAgX2FkZFNjcm9sbExpc3RlbmVyID0gZnVuY3Rpb24gX2FkZFNjcm9sbExpc3RlbmVyKGUsIGNhbGxiYWNrKSB7XG4gIF9hZGRMaXN0ZW5lcihlLCBcInNjcm9sbFwiLCBjYWxsYmFjayk7XG5cbiAgaWYgKCFfaXNSb290KGUucGFyZW50Tm9kZSkpIHtcbiAgICBfYWRkU2Nyb2xsTGlzdGVuZXIoZS5wYXJlbnROb2RlLCBjYWxsYmFjayk7XG4gIH1cbn0sXG4gICAgX3JlbW92ZVNjcm9sbExpc3RlbmVyID0gZnVuY3Rpb24gX3JlbW92ZVNjcm9sbExpc3RlbmVyKGUsIGNhbGxiYWNrKSB7XG4gIF9yZW1vdmVMaXN0ZW5lcihlLCBcInNjcm9sbFwiLCBjYWxsYmFjayk7XG5cbiAgaWYgKCFfaXNSb290KGUucGFyZW50Tm9kZSkpIHtcbiAgICBfcmVtb3ZlU2Nyb2xsTGlzdGVuZXIoZS5wYXJlbnROb2RlLCBjYWxsYmFjayk7XG4gIH1cbn0sXG4gICAgX2lzUm9vdCA9IGZ1bmN0aW9uIF9pc1Jvb3QoZSkge1xuICByZXR1cm4gISEoIWUgfHwgZSA9PT0gX2RvY0VsZW1lbnQgfHwgZS5ub2RlVHlwZSA9PT0gOSB8fCBlID09PSBfZG9jLmJvZHkgfHwgZSA9PT0gX3dpbiB8fCAhZS5ub2RlVHlwZSB8fCAhZS5wYXJlbnROb2RlKTtcbn0sXG4gICAgX2dldE1heFNjcm9sbCA9IGZ1bmN0aW9uIF9nZXRNYXhTY3JvbGwoZWxlbWVudCwgYXhpcykge1xuICB2YXIgZGltID0gYXhpcyA9PT0gXCJ4XCIgPyBcIldpZHRoXCIgOiBcIkhlaWdodFwiLFxuICAgICAgc2Nyb2xsID0gXCJzY3JvbGxcIiArIGRpbSxcbiAgICAgIGNsaWVudCA9IFwiY2xpZW50XCIgKyBkaW07XG4gIHJldHVybiBNYXRoLm1heCgwLCBfaXNSb290KGVsZW1lbnQpID8gTWF0aC5tYXgoX2RvY0VsZW1lbnRbc2Nyb2xsXSwgX2JvZHlbc2Nyb2xsXSkgLSAoX3dpbltcImlubmVyXCIgKyBkaW1dIHx8IF9kb2NFbGVtZW50W2NsaWVudF0gfHwgX2JvZHlbY2xpZW50XSkgOiBlbGVtZW50W3Njcm9sbF0gLSBlbGVtZW50W2NsaWVudF0pO1xufSxcbiAgICBfcmVjb3JkTWF4U2Nyb2xscyA9IGZ1bmN0aW9uIF9yZWNvcmRNYXhTY3JvbGxzKGUsIHNraXBDdXJyZW50KSB7XG4gIC8vcmVjb3JkcyBfZ3NNYXhTY3JvbGxYIGFuZCBfZ3NNYXhTY3JvbGxZIHByb3BlcnRpZXMgZm9yIHRoZSBlbGVtZW50IGFuZCBhbGwgYW5jZXN0b3JzIHVwIHRoZSBjaGFpbiBzbyB0aGF0IHdlIGNhbiBjYXAgaXQsIG90aGVyd2lzZSBkcmFnZ2luZyBiZXlvbmQgdGhlIGVkZ2VzIHdpdGggYXV0b1Njcm9sbCBvbiBjYW4gZW5kbGVzc2x5IHNjcm9sbC5cbiAgdmFyIHggPSBfZ2V0TWF4U2Nyb2xsKGUsIFwieFwiKSxcbiAgICAgIHkgPSBfZ2V0TWF4U2Nyb2xsKGUsIFwieVwiKTtcblxuICBpZiAoX2lzUm9vdChlKSkge1xuICAgIGUgPSBfd2luZG93UHJveHk7XG4gIH0gZWxzZSB7XG4gICAgX3JlY29yZE1heFNjcm9sbHMoZS5wYXJlbnROb2RlLCBza2lwQ3VycmVudCk7XG4gIH1cblxuICBlLl9nc01heFNjcm9sbFggPSB4O1xuICBlLl9nc01heFNjcm9sbFkgPSB5O1xuXG4gIGlmICghc2tpcEN1cnJlbnQpIHtcbiAgICBlLl9nc1Njcm9sbFggPSBlLnNjcm9sbExlZnQgfHwgMDtcbiAgICBlLl9nc1Njcm9sbFkgPSBlLnNjcm9sbFRvcCB8fCAwO1xuICB9XG59LFxuICAgIF9zZXRTdHlsZSA9IGZ1bmN0aW9uIF9zZXRTdHlsZShlbGVtZW50LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgdmFyIHN0eWxlID0gZWxlbWVudC5zdHlsZTtcblxuICBpZiAoIXN0eWxlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKF9pc1VuZGVmaW5lZChzdHlsZVtwcm9wZXJ0eV0pKSB7XG4gICAgcHJvcGVydHkgPSBfY2hlY2tQcmVmaXgocHJvcGVydHksIGVsZW1lbnQpIHx8IHByb3BlcnR5O1xuICB9XG5cbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICBzdHlsZS5yZW1vdmVQcm9wZXJ0eSAmJiBzdHlsZS5yZW1vdmVQcm9wZXJ0eShwcm9wZXJ0eS5yZXBsYWNlKC8oW0EtWl0pL2csIFwiLSQxXCIpLnRvTG93ZXJDYXNlKCkpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlW3Byb3BlcnR5XSA9IHZhbHVlO1xuICB9XG59LFxuICAgIF9nZXRDb21wdXRlZFN0eWxlID0gZnVuY3Rpb24gX2dldENvbXB1dGVkU3R5bGUoZWxlbWVudCkge1xuICByZXR1cm4gX3dpbi5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50ID8gZWxlbWVudCA6IGVsZW1lbnQuaG9zdCB8fCAoZWxlbWVudC5wYXJlbnROb2RlIHx8IHt9KS5ob3N0IHx8IGVsZW1lbnQpO1xufSxcbiAgICAvL3RoZSBcImhvc3RcIiBzdHVmZiBoZWxwcyB0byBhY2NvbW1vZGF0ZSBTaGFkb3dEb20gb2JqZWN0cy5cbl90ZW1wUmVjdCA9IHt9LFxuICAgIC8vcmV1c2UgdG8gcmVkdWNlIGdhcmJhZ2UgY29sbGVjdGlvbiB0YXNrc1xuX3BhcnNlUmVjdCA9IGZ1bmN0aW9uIF9wYXJzZVJlY3QoZSkge1xuICAvL2FjY2VwdHMgYSBET00gZWxlbWVudCwgYSBtb3VzZSBldmVudCwgb3IgYSByZWN0YW5nbGUgb2JqZWN0IGFuZCByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIHJlY3RhbmdsZSB3aXRoIGxlZnQsIHJpZ2h0LCB3aWR0aCwgaGVpZ2h0LCB0b3AsIGFuZCBib3R0b20gcHJvcGVydGllc1xuICBpZiAoZSA9PT0gX3dpbikge1xuICAgIF90ZW1wUmVjdC5sZWZ0ID0gX3RlbXBSZWN0LnRvcCA9IDA7XG4gICAgX3RlbXBSZWN0LndpZHRoID0gX3RlbXBSZWN0LnJpZ2h0ID0gX2RvY0VsZW1lbnQuY2xpZW50V2lkdGggfHwgZS5pbm5lcldpZHRoIHx8IF9ib2R5LmNsaWVudFdpZHRoIHx8IDA7XG4gICAgX3RlbXBSZWN0LmhlaWdodCA9IF90ZW1wUmVjdC5ib3R0b20gPSAoZS5pbm5lckhlaWdodCB8fCAwKSAtIDIwIDwgX2RvY0VsZW1lbnQuY2xpZW50SGVpZ2h0ID8gX2RvY0VsZW1lbnQuY2xpZW50SGVpZ2h0IDogZS5pbm5lckhlaWdodCB8fCBfYm9keS5jbGllbnRIZWlnaHQgfHwgMDtcbiAgICByZXR1cm4gX3RlbXBSZWN0O1xuICB9XG5cbiAgdmFyIGRvYyA9IGUub3duZXJEb2N1bWVudCB8fCBfZG9jLFxuICAgICAgciA9ICFfaXNVbmRlZmluZWQoZS5wYWdlWCkgPyB7XG4gICAgbGVmdDogZS5wYWdlWCAtIF9nZXREb2NTY3JvbGxMZWZ0KGRvYyksXG4gICAgdG9wOiBlLnBhZ2VZIC0gX2dldERvY1Njcm9sbFRvcChkb2MpLFxuICAgIHJpZ2h0OiBlLnBhZ2VYIC0gX2dldERvY1Njcm9sbExlZnQoZG9jKSArIDEsXG4gICAgYm90dG9tOiBlLnBhZ2VZIC0gX2dldERvY1Njcm9sbFRvcChkb2MpICsgMVxuICB9IDogIWUubm9kZVR5cGUgJiYgIV9pc1VuZGVmaW5lZChlLmxlZnQpICYmICFfaXNVbmRlZmluZWQoZS50b3ApID8gZSA6IF90b0FycmF5KGUpWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gIGlmIChfaXNVbmRlZmluZWQoci5yaWdodCkgJiYgIV9pc1VuZGVmaW5lZChyLndpZHRoKSkge1xuICAgIHIucmlnaHQgPSByLmxlZnQgKyByLndpZHRoO1xuICAgIHIuYm90dG9tID0gci50b3AgKyByLmhlaWdodDtcbiAgfSBlbHNlIGlmIChfaXNVbmRlZmluZWQoci53aWR0aCkpIHtcbiAgICAvL3NvbWUgYnJvd3NlcnMgZG9uJ3QgaW5jbHVkZSB3aWR0aCBhbmQgaGVpZ2h0IHByb3BlcnRpZXMuIFdlIGNhbid0IGp1c3Qgc2V0IHRoZW0gZGlyZWN0bHkgb24gciBiZWNhdXNlIHNvbWUgYnJvd3NlcnMgdGhyb3cgZXJyb3JzLCBzbyBjcmVhdGUgYSBuZXcgZ2VuZXJpYyBvYmplY3QuXG4gICAgciA9IHtcbiAgICAgIHdpZHRoOiByLnJpZ2h0IC0gci5sZWZ0LFxuICAgICAgaGVpZ2h0OiByLmJvdHRvbSAtIHIudG9wLFxuICAgICAgcmlnaHQ6IHIucmlnaHQsXG4gICAgICBsZWZ0OiByLmxlZnQsXG4gICAgICBib3R0b206IHIuYm90dG9tLFxuICAgICAgdG9wOiByLnRvcFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gcjtcbn0sXG4gICAgX2Rpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiBfZGlzcGF0Y2hFdmVudCh0YXJnZXQsIHR5cGUsIGNhbGxiYWNrTmFtZSkge1xuICB2YXIgdmFycyA9IHRhcmdldC52YXJzLFxuICAgICAgY2FsbGJhY2sgPSB2YXJzW2NhbGxiYWNrTmFtZV0sXG4gICAgICBsaXN0ZW5lcnMgPSB0YXJnZXQuX2xpc3RlbmVyc1t0eXBlXSxcbiAgICAgIHJlc3VsdDtcblxuICBpZiAoX2lzRnVuY3Rpb24oY2FsbGJhY2spKSB7XG4gICAgcmVzdWx0ID0gY2FsbGJhY2suYXBwbHkodmFycy5jYWxsYmFja1Njb3BlIHx8IHRhcmdldCwgdmFyc1tjYWxsYmFja05hbWUgKyBcIlBhcmFtc1wiXSB8fCBbdGFyZ2V0LnBvaW50ZXJFdmVudF0pO1xuICB9XG5cbiAgaWYgKGxpc3RlbmVycyAmJiB0YXJnZXQuZGlzcGF0Y2hFdmVudCh0eXBlKSA9PT0gZmFsc2UpIHtcbiAgICByZXN1bHQgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59LFxuICAgIF9nZXRCb3VuZHMgPSBmdW5jdGlvbiBfZ2V0Qm91bmRzKHRhcmdldCwgY29udGV4dCkge1xuICAvL2FjY2VwdHMgYW55IG9mIHRoZSBmb2xsb3dpbmc6IGEgRE9NIGVsZW1lbnQsIGpRdWVyeSBvYmplY3QsIHNlbGVjdG9yIHRleHQsIG9yIGFuIG9iamVjdCBkZWZpbmluZyBib3VuZHMgYXMge3RvcCwgbGVmdCwgd2lkdGgsIGhlaWdodH0gb3Ige21pblgsIG1heFgsIG1pblksIG1heFl9LiBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIGxlZnQsIHRvcCwgd2lkdGgsIGFuZCBoZWlnaHQgcHJvcGVydGllcy5cbiAgdmFyIGUgPSBfdG9BcnJheSh0YXJnZXQpWzBdLFxuICAgICAgdG9wLFxuICAgICAgbGVmdCxcbiAgICAgIG9mZnNldDtcblxuICBpZiAoIWUubm9kZVR5cGUgJiYgZSAhPT0gX3dpbikge1xuICAgIGlmICghX2lzVW5kZWZpbmVkKHRhcmdldC5sZWZ0KSkge1xuICAgICAgb2Zmc2V0ID0ge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwXG4gICAgICB9OyAvL19nZXRPZmZzZXRUcmFuc2Zvcm1PcmlnaW4oY29udGV4dCk7IC8vdGhlIGJvdW5kcyBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIG9yaWdpblxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiB0YXJnZXQubGVmdCAtIG9mZnNldC54LFxuICAgICAgICB0b3A6IHRhcmdldC50b3AgLSBvZmZzZXQueSxcbiAgICAgICAgd2lkdGg6IHRhcmdldC53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0YXJnZXQuaGVpZ2h0XG4gICAgICB9O1xuICAgIH1cblxuICAgIGxlZnQgPSB0YXJnZXQubWluIHx8IHRhcmdldC5taW5YIHx8IHRhcmdldC5taW5Sb3RhdGlvbiB8fCAwO1xuICAgIHRvcCA9IHRhcmdldC5taW4gfHwgdGFyZ2V0Lm1pblkgfHwgMDtcbiAgICByZXR1cm4ge1xuICAgICAgbGVmdDogbGVmdCxcbiAgICAgIHRvcDogdG9wLFxuICAgICAgd2lkdGg6ICh0YXJnZXQubWF4IHx8IHRhcmdldC5tYXhYIHx8IHRhcmdldC5tYXhSb3RhdGlvbiB8fCAwKSAtIGxlZnQsXG4gICAgICBoZWlnaHQ6ICh0YXJnZXQubWF4IHx8IHRhcmdldC5tYXhZIHx8IDApIC0gdG9wXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfZ2V0RWxlbWVudEJvdW5kcyhlLCBjb250ZXh0KTtcbn0sXG4gICAgX3BvaW50MSA9IHt9LFxuICAgIC8vd2UgcmV1c2UgdG8gbWluaW1pemUgZ2FyYmFnZSBjb2xsZWN0aW9uIHRhc2tzLlxuX2dldEVsZW1lbnRCb3VuZHMgPSBmdW5jdGlvbiBfZ2V0RWxlbWVudEJvdW5kcyhlbGVtZW50LCBjb250ZXh0KSB7XG4gIGNvbnRleHQgPSBfdG9BcnJheShjb250ZXh0KVswXTtcbiAgdmFyIGlzU1ZHID0gZWxlbWVudC5nZXRCQm94ICYmIGVsZW1lbnQub3duZXJTVkdFbGVtZW50LFxuICAgICAgZG9jID0gZWxlbWVudC5vd25lckRvY3VtZW50IHx8IF9kb2MsXG4gICAgICBsZWZ0LFxuICAgICAgcmlnaHQsXG4gICAgICB0b3AsXG4gICAgICBib3R0b20sXG4gICAgICBtYXRyaXgsXG4gICAgICBwMSxcbiAgICAgIHAyLFxuICAgICAgcDMsXG4gICAgICBwNCxcbiAgICAgIGJib3gsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIGNzLFxuICAgICAgY29udGV4dFBhcmVudDtcblxuICBpZiAoZWxlbWVudCA9PT0gX3dpbikge1xuICAgIHRvcCA9IF9nZXREb2NTY3JvbGxUb3AoZG9jKTtcbiAgICBsZWZ0ID0gX2dldERvY1Njcm9sbExlZnQoZG9jKTtcbiAgICByaWdodCA9IGxlZnQgKyAoZG9jLmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCBlbGVtZW50LmlubmVyV2lkdGggfHwgZG9jLmJvZHkuY2xpZW50V2lkdGggfHwgMCk7XG4gICAgYm90dG9tID0gdG9wICsgKChlbGVtZW50LmlubmVySGVpZ2h0IHx8IDApIC0gMjAgPCBkb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA/IGRvYy5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IDogZWxlbWVudC5pbm5lckhlaWdodCB8fCBkb2MuYm9keS5jbGllbnRIZWlnaHQgfHwgMCk7IC8vc29tZSBicm93c2VycyAobGlrZSBGaXJlZm94KSBpZ25vcmUgYWJzb2x1dGVseSBwb3NpdGlvbmVkIGVsZW1lbnRzLCBhbmQgY29sbGFwc2UgdGhlIGhlaWdodCBvZiB0aGUgZG9jdW1lbnRFbGVtZW50LCBzbyBpdCBjb3VsZCBiZSA4cHgsIGZvciBleGFtcGxlLCBpZiB5b3UgaGF2ZSBqdXN0IGFuIGFic29sdXRlbHkgcG9zaXRpb25lZCBkaXYuIEluIHRoYXQgY2FzZSwgd2UgdXNlIHRoZSBpbm5lckhlaWdodCB0byByZXNvbHZlIHRoaXMuXG4gIH0gZWxzZSBpZiAoY29udGV4dCA9PT0gX3dpbiB8fCBfaXNVbmRlZmluZWQoY29udGV4dCkpIHtcbiAgICByZXR1cm4gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfSBlbHNlIHtcbiAgICBsZWZ0ID0gdG9wID0gMDtcblxuICAgIGlmIChpc1NWRykge1xuICAgICAgYmJveCA9IGVsZW1lbnQuZ2V0QkJveCgpO1xuICAgICAgd2lkdGggPSBiYm94LndpZHRoO1xuICAgICAgaGVpZ2h0ID0gYmJveC5oZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChlbGVtZW50LnZpZXdCb3ggJiYgKGJib3ggPSBlbGVtZW50LnZpZXdCb3guYmFzZVZhbCkpIHtcbiAgICAgICAgbGVmdCA9IGJib3gueCB8fCAwO1xuICAgICAgICB0b3AgPSBiYm94LnkgfHwgMDtcbiAgICAgICAgd2lkdGggPSBiYm94LndpZHRoO1xuICAgICAgICBoZWlnaHQgPSBiYm94LmhlaWdodDtcbiAgICAgIH1cblxuICAgICAgaWYgKCF3aWR0aCkge1xuICAgICAgICBjcyA9IF9nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgICAgICBiYm94ID0gY3MuYm94U2l6aW5nID09PSBcImJvcmRlci1ib3hcIjtcbiAgICAgICAgd2lkdGggPSAocGFyc2VGbG9hdChjcy53aWR0aCkgfHwgZWxlbWVudC5jbGllbnRXaWR0aCB8fCAwKSArIChiYm94ID8gMCA6IHBhcnNlRmxvYXQoY3MuYm9yZGVyTGVmdFdpZHRoKSArIHBhcnNlRmxvYXQoY3MuYm9yZGVyUmlnaHRXaWR0aCkpO1xuICAgICAgICBoZWlnaHQgPSAocGFyc2VGbG9hdChjcy5oZWlnaHQpIHx8IGVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IDApICsgKGJib3ggPyAwIDogcGFyc2VGbG9hdChjcy5ib3JkZXJUb3BXaWR0aCkgKyBwYXJzZUZsb2F0KGNzLmJvcmRlckJvdHRvbVdpZHRoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmlnaHQgPSB3aWR0aDtcbiAgICBib3R0b20gPSBoZWlnaHQ7XG4gIH1cblxuICBpZiAoZWxlbWVudCA9PT0gY29udGV4dCkge1xuICAgIHJldHVybiB7XG4gICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgdG9wOiB0b3AsXG4gICAgICB3aWR0aDogcmlnaHQgLSBsZWZ0LFxuICAgICAgaGVpZ2h0OiBib3R0b20gLSB0b3BcbiAgICB9O1xuICB9XG5cbiAgbWF0cml4ID0gZ2V0R2xvYmFsTWF0cml4KGNvbnRleHQsIHRydWUpLm11bHRpcGx5KGdldEdsb2JhbE1hdHJpeChlbGVtZW50KSk7XG4gIHAxID0gbWF0cml4LmFwcGx5KHtcbiAgICB4OiBsZWZ0LFxuICAgIHk6IHRvcFxuICB9KTtcbiAgcDIgPSBtYXRyaXguYXBwbHkoe1xuICAgIHg6IHJpZ2h0LFxuICAgIHk6IHRvcFxuICB9KTtcbiAgcDMgPSBtYXRyaXguYXBwbHkoe1xuICAgIHg6IHJpZ2h0LFxuICAgIHk6IGJvdHRvbVxuICB9KTtcbiAgcDQgPSBtYXRyaXguYXBwbHkoe1xuICAgIHg6IGxlZnQsXG4gICAgeTogYm90dG9tXG4gIH0pO1xuICBsZWZ0ID0gTWF0aC5taW4ocDEueCwgcDIueCwgcDMueCwgcDQueCk7XG4gIHRvcCA9IE1hdGgubWluKHAxLnksIHAyLnksIHAzLnksIHA0LnkpO1xuICBjb250ZXh0UGFyZW50ID0gY29udGV4dC5wYXJlbnROb2RlIHx8IHt9O1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IGxlZnQgKyAoY29udGV4dFBhcmVudC5zY3JvbGxMZWZ0IHx8IDApLFxuICAgIHRvcDogdG9wICsgKGNvbnRleHRQYXJlbnQuc2Nyb2xsVG9wIHx8IDApLFxuICAgIHdpZHRoOiBNYXRoLm1heChwMS54LCBwMi54LCBwMy54LCBwNC54KSAtIGxlZnQsXG4gICAgaGVpZ2h0OiBNYXRoLm1heChwMS55LCBwMi55LCBwMy55LCBwNC55KSAtIHRvcFxuICB9O1xufSxcbiAgICBfcGFyc2VJbmVydGlhID0gZnVuY3Rpb24gX3BhcnNlSW5lcnRpYShkcmFnZ2FibGUsIHNuYXAsIG1heCwgbWluLCBmYWN0b3IsIGZvcmNlWmVyb1ZlbG9jaXR5KSB7XG4gIHZhciB2YXJzID0ge30sXG4gICAgICBhLFxuICAgICAgaSxcbiAgICAgIGw7XG5cbiAgaWYgKHNuYXApIHtcbiAgICBpZiAoZmFjdG9yICE9PSAxICYmIHNuYXAgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgLy9zb21lIGRhdGEgbXVzdCBiZSBhbHRlcmVkIHRvIG1ha2Ugc2Vuc2UsIGxpa2UgaWYgdGhlIHVzZXIgcGFzc2VzIGluIGFuIGFycmF5IG9mIHJvdGF0aW9uYWwgdmFsdWVzIGluIGRlZ3JlZXMsIHdlIG11c3QgY29udmVydCBpdCB0byByYWRpYW5zLiBPciBmb3Igc2Nyb2xsTGVmdCBhbmQgc2Nyb2xsVG9wLCB3ZSBpbnZlcnQgdGhlIHZhbHVlcy5cbiAgICAgIHZhcnMuZW5kID0gYSA9IFtdO1xuICAgICAgbCA9IHNuYXAubGVuZ3RoO1xuXG4gICAgICBpZiAoX2lzT2JqZWN0KHNuYXBbMF0pKSB7XG4gICAgICAgIC8vaWYgdGhlIGFycmF5IGlzIHBvcHVsYXRlZCB3aXRoIG9iamVjdHMsIGxpa2UgcG9pbnRzICh7eDoxMDAsIHk6MjAwfSksIG1ha2UgY29waWVzIGJlZm9yZSBtdWx0aXBseWluZyBieSB0aGUgZmFjdG9yLCBvdGhlcndpc2Ugd2UnbGwgbWVzcyB1cCB0aGUgb3JpZ2luYWxzIGFuZCB0aGUgdXNlciBtYXkgcmV1c2UgaXQgZWxzZXdoZXJlLlxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgYVtpXSA9IF9jb3B5KHNuYXBbaV0sIGZhY3Rvcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBhW2ldID0gc25hcFtpXSAqIGZhY3RvcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtYXggKz0gMS4xOyAvL2FsbG93IDEuMSBwaXhlbHMgb2Ygd2lnZ2xlIHJvb20gd2hlbiBzbmFwcGluZyBpbiBvcmRlciB0byB3b3JrIGFyb3VuZCBzb21lIGJyb3dzZXIgaW5jb25zaXN0ZW5jaWVzIGluIHRoZSB3YXkgYm91bmRzIGFyZSByZXBvcnRlZCB3aGljaCBjYW4gbWFrZSB0aGVtIHJvdWdobHkgYSBwaXhlbCBvZmYuIEZvciBleGFtcGxlLCBpZiBcInNuYXA6Wy0kKCcjbWVudScpLndpZHRoKCksIDBdXCIgd2FzIGRlZmluZWQgYW5kICNtZW51IGhhZCBhIHdyYXBwZXIgdGhhdCB3YXMgdXNlZCBhcyB0aGUgYm91bmRzLCBzb21lIGJyb3dzZXJzIHdvdWxkIGJlIG9uZSBwaXhlbCBvZmYsIG1ha2luZyB0aGUgbWluaW11bSAtNzUyIGZvciBleGFtcGxlIHdoZW4gc25hcCB3YXMgWy03NTMsMF0sIHRodXMgaW5zdGVhZCBvZiBzbmFwcGluZyB0byAtNzUzLCBpdCB3b3VsZCBzbmFwIHRvIDAgc2luY2UgLTc1MyB3YXMgYmVsb3cgdGhlIG1pbmltdW0uXG5cbiAgICAgIG1pbiAtPSAxLjE7XG4gICAgfSBlbHNlIGlmIChfaXNGdW5jdGlvbihzbmFwKSkge1xuICAgICAgdmFycy5lbmQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHNuYXAuY2FsbChkcmFnZ2FibGUsIHZhbHVlKSxcbiAgICAgICAgICAgIGNvcHksXG4gICAgICAgICAgICBwO1xuXG4gICAgICAgIGlmIChmYWN0b3IgIT09IDEpIHtcbiAgICAgICAgICBpZiAoX2lzT2JqZWN0KHJlc3VsdCkpIHtcbiAgICAgICAgICAgIGNvcHkgPSB7fTtcblxuICAgICAgICAgICAgZm9yIChwIGluIHJlc3VsdCkge1xuICAgICAgICAgICAgICBjb3B5W3BdID0gcmVzdWx0W3BdICogZmFjdG9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHQgPSBjb3B5O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKj0gZmFjdG9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7IC8vd2UgbmVlZCB0byBlbnN1cmUgdGhhdCB3ZSBjYW4gc2NvcGUgdGhlIGZ1bmN0aW9uIGNhbGwgdG8gdGhlIERyYWdnYWJsZSBpbnN0YW5jZSBpdHNlbGYgc28gdGhhdCB1c2VycyBjYW4gYWNjZXNzIGltcG9ydGFudCB2YWx1ZXMgbGlrZSBtYXhYLCBtaW5YLCBtYXhZLCBtaW5ZLCB4LCBhbmQgeSBmcm9tIHdpdGhpbiB0aGF0IGZ1bmN0aW9uLlxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFycy5lbmQgPSBzbmFwO1xuICAgIH1cbiAgfVxuXG4gIGlmIChtYXggfHwgbWF4ID09PSAwKSB7XG4gICAgdmFycy5tYXggPSBtYXg7XG4gIH1cblxuICBpZiAobWluIHx8IG1pbiA9PT0gMCkge1xuICAgIHZhcnMubWluID0gbWluO1xuICB9XG5cbiAgaWYgKGZvcmNlWmVyb1ZlbG9jaXR5KSB7XG4gICAgdmFycy52ZWxvY2l0eSA9IDA7XG4gIH1cblxuICByZXR1cm4gdmFycztcbn0sXG4gICAgX2lzQ2xpY2thYmxlID0gZnVuY3Rpb24gX2lzQ2xpY2thYmxlKGVsZW1lbnQpIHtcbiAgLy9zb21ldGltZXMgaXQncyBjb252ZW5pZW50IHRvIG1hcmsgYW4gZWxlbWVudCBhcyBjbGlja2FibGUgYnkgYWRkaW5nIGEgZGF0YS1jbGlja2FibGU9XCJ0cnVlXCIgYXR0cmlidXRlIChpbiB3aGljaCBjYXNlIHdlIHdvbid0IHByZXZlbnREZWZhdWx0KCkgdGhlIG1vdXNlL3RvdWNoIGV2ZW50KS4gVGhpcyBtZXRob2QgY2hlY2tzIGlmIHRoZSBlbGVtZW50IGlzIGFuIDxhPiwgPGlucHV0Piwgb3IgPGJ1dHRvbj4gb3IgaGFzIGFuIG9uY2xpY2sgb3IgaGFzIHRoZSBkYXRhLWNsaWNrYWJsZSBvciBjb250ZW50RWRpdGFibGUgYXR0cmlidXRlIHNldCB0byB0cnVlIChvciBhbnkgb2YgaXRzIHBhcmVudCBlbGVtZW50cykuXG4gIHZhciBkYXRhO1xuICByZXR1cm4gIWVsZW1lbnQgfHwgIWVsZW1lbnQuZ2V0QXR0cmlidXRlIHx8IGVsZW1lbnQgPT09IF9ib2R5ID8gZmFsc2UgOiAoZGF0YSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jbGlja2FibGVcIikpID09PSBcInRydWVcIiB8fCBkYXRhICE9PSBcImZhbHNlXCIgJiYgKGVsZW1lbnQub25jbGljayB8fCBfY2xpY2thYmxlVGFnRXhwLnRlc3QoZWxlbWVudC5ub2RlTmFtZSArIFwiXCIpIHx8IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiY29udGVudEVkaXRhYmxlXCIpID09PSBcInRydWVcIikgPyB0cnVlIDogX2lzQ2xpY2thYmxlKGVsZW1lbnQucGFyZW50Tm9kZSk7XG59LFxuICAgIF9zZXRTZWxlY3RhYmxlID0gZnVuY3Rpb24gX3NldFNlbGVjdGFibGUoZWxlbWVudHMsIHNlbGVjdGFibGUpIHtcbiAgdmFyIGkgPSBlbGVtZW50cy5sZW5ndGgsXG4gICAgICBlO1xuXG4gIHdoaWxlIChpLS0pIHtcbiAgICBlID0gZWxlbWVudHNbaV07XG4gICAgZS5vbmRyYWdzdGFydCA9IGUub25zZWxlY3RzdGFydCA9IHNlbGVjdGFibGUgPyBudWxsIDogX2VtcHR5RnVuYztcbiAgICBnc2FwLnNldChlLCB7XG4gICAgICBsYXp5OiB0cnVlLFxuICAgICAgdXNlclNlbGVjdDogc2VsZWN0YWJsZSA/IFwidGV4dFwiIDogXCJub25lXCJcbiAgICB9KTtcbiAgfVxufSxcbiAgICBfaXNGaXhlZCA9IGZ1bmN0aW9uIF9pc0ZpeGVkKGVsZW1lbnQpIHtcbiAgaWYgKF9nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uID09PSBcImZpeGVkXCIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG5cbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlVHlwZSA9PT0gMSkge1xuICAgIC8vIGF2b2lkIGRvY3VtZW50IGZyYWdtZW50cyB3aGljaCB3aWxsIHRocm93IGFuIGVycm9yLlxuICAgIHJldHVybiBfaXNGaXhlZChlbGVtZW50KTtcbiAgfVxufSxcbiAgICBfc3VwcG9ydHMzRCxcbiAgICBfYWRkUGFkZGluZ0JSLFxuICAgIC8vVGhlIFNjcm9sbFByb3h5IGNsYXNzIHdyYXBzIGFuIGVsZW1lbnQncyBjb250ZW50cyBpbnRvIGFub3RoZXIgZGl2ICh3ZSBjYWxsIGl0IFwiY29udGVudFwiKSB0aGF0IHdlIGVpdGhlciBhZGQgcGFkZGluZyB3aGVuIG5lY2Vzc2FyeSBvciBhcHBseSBhIHRyYW5zbGF0ZTNkKCkgdHJhbnNmb3JtIGluIG9yZGVyIHRvIG92ZXJzY3JvbGwgKHNjcm9sbCBwYXN0IHRoZSBib3VuZGFyaWVzKS4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IHNldCB0aGUgc2Nyb2xsVG9wL3Njcm9sbExlZnQgKG9yIHRvcC9sZWZ0IGZvciBlYXNpZXIgcmV2ZXJzZS1heGlzIG9yaWVudGF0aW9uLCB3aGljaCBpcyB3aGF0IHdlIGRvIGluIERyYWdnYWJsZSkgYW5kIGl0J2xsIGRvIGFsbCB0aGUgd29yayBmb3IgdXMuIEZvciBleGFtcGxlLCBpZiB3ZSB0cmllZCBzZXR0aW5nIHNjcm9sbFRvcCB0byAtMTAwIG9uIGEgbm9ybWFsIERPTSBlbGVtZW50LCBpdCB3b3VsZG4ndCB3b3JrIC0gaXQnZCBsb29rIHRoZSBzYW1lIGFzIHNldHRpbmcgaXQgdG8gMCwgYnV0IGlmIHdlIHNldCBzY3JvbGxUb3Agb2YgYSBTY3JvbGxQcm94eSB0byAtMTAwLCBpdCdsbCBnaXZlIHRoZSBjb3JyZWN0IGFwcGVhcmFuY2UgYnkgZWl0aGVyIHNldHRpbmcgcGFkZGluZ1RvcCBvZiB0aGUgd3JhcHBlciB0byAxMDAgb3IgYXBwbHlpbmcgYSAxMDAtcGl4ZWwgdHJhbnNsYXRlWS5cblNjcm9sbFByb3h5ID0gZnVuY3Rpb24gU2Nyb2xsUHJveHkoZWxlbWVudCwgdmFycykge1xuICBlbGVtZW50ID0gZ3NhcC51dGlscy50b0FycmF5KGVsZW1lbnQpWzBdO1xuICB2YXJzID0gdmFycyB8fCB7fTtcbiAgdmFyIGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgICAgc3R5bGUgPSBjb250ZW50LnN0eWxlLFxuICAgICAgbm9kZSA9IGVsZW1lbnQuZmlyc3RDaGlsZCxcbiAgICAgIG9mZnNldFRvcCA9IDAsXG4gICAgICBvZmZzZXRMZWZ0ID0gMCxcbiAgICAgIHByZXZUb3AgPSBlbGVtZW50LnNjcm9sbFRvcCxcbiAgICAgIHByZXZMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgICAgc2Nyb2xsV2lkdGggPSBlbGVtZW50LnNjcm9sbFdpZHRoLFxuICAgICAgc2Nyb2xsSGVpZ2h0ID0gZWxlbWVudC5zY3JvbGxIZWlnaHQsXG4gICAgICBleHRyYVBhZFJpZ2h0ID0gMCxcbiAgICAgIG1heExlZnQgPSAwLFxuICAgICAgbWF4VG9wID0gMCxcbiAgICAgIGVsZW1lbnRXaWR0aCxcbiAgICAgIGVsZW1lbnRIZWlnaHQsXG4gICAgICBjb250ZW50SGVpZ2h0LFxuICAgICAgbmV4dE5vZGUsXG4gICAgICB0cmFuc2Zvcm1TdGFydCxcbiAgICAgIHRyYW5zZm9ybUVuZDtcblxuICBpZiAoX3N1cHBvcnRzM0QgJiYgdmFycy5mb3JjZTNEICE9PSBmYWxzZSkge1xuICAgIHRyYW5zZm9ybVN0YXJ0ID0gXCJ0cmFuc2xhdGUzZChcIjtcbiAgICB0cmFuc2Zvcm1FbmQgPSBcInB4LDBweClcIjtcbiAgfSBlbHNlIGlmIChfdHJhbnNmb3JtUHJvcCkge1xuICAgIHRyYW5zZm9ybVN0YXJ0ID0gXCJ0cmFuc2xhdGUoXCI7XG4gICAgdHJhbnNmb3JtRW5kID0gXCJweClcIjtcbiAgfVxuXG4gIHRoaXMuc2Nyb2xsVG9wID0gZnVuY3Rpb24gKHZhbHVlLCBmb3JjZSkge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIC10aGlzLnRvcCgpO1xuICAgIH1cblxuICAgIHRoaXMudG9wKC12YWx1ZSwgZm9yY2UpO1xuICB9O1xuXG4gIHRoaXMuc2Nyb2xsTGVmdCA9IGZ1bmN0aW9uICh2YWx1ZSwgZm9yY2UpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAtdGhpcy5sZWZ0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5sZWZ0KC12YWx1ZSwgZm9yY2UpO1xuICB9O1xuXG4gIHRoaXMubGVmdCA9IGZ1bmN0aW9uICh2YWx1ZSwgZm9yY2UpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAtKGVsZW1lbnQuc2Nyb2xsTGVmdCArIG9mZnNldExlZnQpO1xuICAgIH1cblxuICAgIHZhciBkaWYgPSBlbGVtZW50LnNjcm9sbExlZnQgLSBwcmV2TGVmdCxcbiAgICAgICAgb2xkT2Zmc2V0ID0gb2Zmc2V0TGVmdDtcblxuICAgIGlmICgoZGlmID4gMiB8fCBkaWYgPCAtMikgJiYgIWZvcmNlKSB7XG4gICAgICAvL2lmIHRoZSB1c2VyIGludGVyYWN0cyB3aXRoIHRoZSBzY3JvbGxiYXIgKG9yIHNvbWV0aGluZyBlbHNlIHNjcm9sbHMgaXQsIGxpa2UgdGhlIG1vdXNlIHdoZWVsKSwgd2Ugc2hvdWxkIGtpbGwgYW55IHR3ZWVucyBvZiB0aGUgU2Nyb2xsUHJveHkuXG4gICAgICBwcmV2TGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICAgIGdzYXAua2lsbFR3ZWVuc09mKHRoaXMsIHtcbiAgICAgICAgbGVmdDogMSxcbiAgICAgICAgc2Nyb2xsTGVmdDogMVxuICAgICAgfSk7XG4gICAgICB0aGlzLmxlZnQoLXByZXZMZWZ0KTtcblxuICAgICAgaWYgKHZhcnMub25LaWxsKSB7XG4gICAgICAgIHZhcnMub25LaWxsKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YWx1ZSA9IC12YWx1ZTsgLy9pbnZlcnQgYmVjYXVzZSBzY3JvbGxpbmcgd29ya3MgaW4gdGhlIG9wcG9zaXRlIGRpcmVjdGlvblxuXG4gICAgaWYgKHZhbHVlIDwgMCkge1xuICAgICAgb2Zmc2V0TGVmdCA9IHZhbHVlIC0gMC41IHwgMDtcbiAgICAgIHZhbHVlID0gMDtcbiAgICB9IGVsc2UgaWYgKHZhbHVlID4gbWF4TGVmdCkge1xuICAgICAgb2Zmc2V0TGVmdCA9IHZhbHVlIC0gbWF4TGVmdCB8IDA7XG4gICAgICB2YWx1ZSA9IG1heExlZnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9mZnNldExlZnQgPSAwO1xuICAgIH1cblxuICAgIGlmIChvZmZzZXRMZWZ0IHx8IG9sZE9mZnNldCkge1xuICAgICAgaWYgKCF0aGlzLl9za2lwKSB7XG4gICAgICAgIHN0eWxlW190cmFuc2Zvcm1Qcm9wXSA9IHRyYW5zZm9ybVN0YXJ0ICsgLW9mZnNldExlZnQgKyBcInB4LFwiICsgLW9mZnNldFRvcCArIHRyYW5zZm9ybUVuZDtcbiAgICAgIH1cblxuICAgICAgaWYgKG9mZnNldExlZnQgKyBleHRyYVBhZFJpZ2h0ID49IDApIHtcbiAgICAgICAgc3R5bGUucGFkZGluZ1JpZ2h0ID0gb2Zmc2V0TGVmdCArIGV4dHJhUGFkUmlnaHQgKyBcInB4XCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gdmFsdWUgfCAwO1xuICAgIHByZXZMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0OyAvL2Rvbid0IG1lcmdlIHRoaXMgd2l0aCB0aGUgbGluZSBhYm92ZSBiZWNhdXNlIHNvbWUgYnJvd3NlcnMgYWRqdXN0IHRoZSBzY3JvbGxMZWZ0IGFmdGVyIGl0J3Mgc2V0LCBzbyBpbiBvcmRlciB0byBiZSAxMDAlIGFjY3VyYXRlIGluIHRyYWNraW5nIGl0LCB3ZSBuZWVkIHRvIGFzayB0aGUgYnJvd3NlciB0byByZXBvcnQgaXQuXG4gIH07XG5cbiAgdGhpcy50b3AgPSBmdW5jdGlvbiAodmFsdWUsIGZvcmNlKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gLShlbGVtZW50LnNjcm9sbFRvcCArIG9mZnNldFRvcCk7XG4gICAgfVxuXG4gICAgdmFyIGRpZiA9IGVsZW1lbnQuc2Nyb2xsVG9wIC0gcHJldlRvcCxcbiAgICAgICAgb2xkT2Zmc2V0ID0gb2Zmc2V0VG9wO1xuXG4gICAgaWYgKChkaWYgPiAyIHx8IGRpZiA8IC0yKSAmJiAhZm9yY2UpIHtcbiAgICAgIC8vaWYgdGhlIHVzZXIgaW50ZXJhY3RzIHdpdGggdGhlIHNjcm9sbGJhciAob3Igc29tZXRoaW5nIGVsc2Ugc2Nyb2xscyBpdCwgbGlrZSB0aGUgbW91c2Ugd2hlZWwpLCB3ZSBzaG91bGQga2lsbCBhbnkgdHdlZW5zIG9mIHRoZSBTY3JvbGxQcm94eS5cbiAgICAgIHByZXZUb3AgPSBlbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIGdzYXAua2lsbFR3ZWVuc09mKHRoaXMsIHtcbiAgICAgICAgdG9wOiAxLFxuICAgICAgICBzY3JvbGxUb3A6IDFcbiAgICAgIH0pO1xuICAgICAgdGhpcy50b3AoLXByZXZUb3ApO1xuXG4gICAgICBpZiAodmFycy5vbktpbGwpIHtcbiAgICAgICAgdmFycy5vbktpbGwoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhbHVlID0gLXZhbHVlOyAvL2ludmVydCBiZWNhdXNlIHNjcm9sbGluZyB3b3JrcyBpbiB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uXG5cbiAgICBpZiAodmFsdWUgPCAwKSB7XG4gICAgICBvZmZzZXRUb3AgPSB2YWx1ZSAtIDAuNSB8IDA7XG4gICAgICB2YWx1ZSA9IDA7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA+IG1heFRvcCkge1xuICAgICAgb2Zmc2V0VG9wID0gdmFsdWUgLSBtYXhUb3AgfCAwO1xuICAgICAgdmFsdWUgPSBtYXhUb3A7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9mZnNldFRvcCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKG9mZnNldFRvcCB8fCBvbGRPZmZzZXQpIHtcbiAgICAgIGlmICghdGhpcy5fc2tpcCkge1xuICAgICAgICBzdHlsZVtfdHJhbnNmb3JtUHJvcF0gPSB0cmFuc2Zvcm1TdGFydCArIC1vZmZzZXRMZWZ0ICsgXCJweCxcIiArIC1vZmZzZXRUb3AgKyB0cmFuc2Zvcm1FbmQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZWxlbWVudC5zY3JvbGxUb3AgPSB2YWx1ZSB8IDA7XG4gICAgcHJldlRvcCA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xuICB9O1xuXG4gIHRoaXMubWF4U2Nyb2xsVG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBtYXhUb3A7XG4gIH07XG5cbiAgdGhpcy5tYXhTY3JvbGxMZWZ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBtYXhMZWZ0O1xuICB9O1xuXG4gIHRoaXMuZGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBub2RlID0gY29udGVudC5maXJzdENoaWxkO1xuXG4gICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgIG5leHROb2RlID0gbm9kZS5uZXh0U2libGluZztcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICBub2RlID0gbmV4dE5vZGU7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQgPT09IGNvbnRlbnQucGFyZW50Tm9kZSkge1xuICAgICAgLy9pbiBjYXNlIGRpc2FibGUoKSBpcyBjYWxsZWQgd2hlbiBpdCdzIGFscmVhZHkgZGlzYWJsZWQuXG4gICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLmVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBub2RlID0gZWxlbWVudC5maXJzdENoaWxkO1xuXG4gICAgaWYgKG5vZGUgPT09IGNvbnRlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aGlsZSAobm9kZSkge1xuICAgICAgbmV4dE5vZGUgPSBub2RlLm5leHRTaWJsaW5nO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgIG5vZGUgPSBuZXh0Tm9kZTtcbiAgICB9XG5cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIHRoaXMuY2FsaWJyYXRlKCk7XG4gIH07XG5cbiAgdGhpcy5jYWxpYnJhdGUgPSBmdW5jdGlvbiAoZm9yY2UpIHtcbiAgICB2YXIgd2lkdGhNYXRjaGVzID0gZWxlbWVudC5jbGllbnRXaWR0aCA9PT0gZWxlbWVudFdpZHRoLFxuICAgICAgICBjcyxcbiAgICAgICAgeCxcbiAgICAgICAgeTtcbiAgICBwcmV2VG9wID0gZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgcHJldkxlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7XG5cbiAgICBpZiAod2lkdGhNYXRjaGVzICYmIGVsZW1lbnQuY2xpZW50SGVpZ2h0ID09PSBlbGVtZW50SGVpZ2h0ICYmIGNvbnRlbnQub2Zmc2V0SGVpZ2h0ID09PSBjb250ZW50SGVpZ2h0ICYmIHNjcm9sbFdpZHRoID09PSBlbGVtZW50LnNjcm9sbFdpZHRoICYmIHNjcm9sbEhlaWdodCA9PT0gZWxlbWVudC5zY3JvbGxIZWlnaHQgJiYgIWZvcmNlKSB7XG4gICAgICByZXR1cm47IC8vbm8gbmVlZCB0byByZWNhbGN1bGF0ZSB0aGluZ3MgaWYgdGhlIHdpZHRoIGFuZCBoZWlnaHQgaGF2ZW4ndCBjaGFuZ2VkLlxuICAgIH1cblxuICAgIGlmIChvZmZzZXRUb3AgfHwgb2Zmc2V0TGVmdCkge1xuICAgICAgeCA9IHRoaXMubGVmdCgpO1xuICAgICAgeSA9IHRoaXMudG9wKCk7XG4gICAgICB0aGlzLmxlZnQoLWVsZW1lbnQuc2Nyb2xsTGVmdCk7XG4gICAgICB0aGlzLnRvcCgtZWxlbWVudC5zY3JvbGxUb3ApO1xuICAgIH1cblxuICAgIGNzID0gX2dldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7IC8vZmlyc3QsIHdlIG5lZWQgdG8gcmVtb3ZlIGFueSB3aWR0aCBjb25zdHJhaW50cyB0byBzZWUgaG93IHRoZSBjb250ZW50IG5hdHVyYWxseSBmbG93cyBzbyB0aGF0IHdlIGNhbiBzZWUgaWYgaXQncyB3aWRlciB0aGFuIHRoZSBjb250YWluaW5nIGVsZW1lbnQuIElmIHNvLCB3ZSd2ZSBnb3QgdG8gcmVjb3JkIHRoZSBhbW91bnQgb2Ygb3ZlcmFnZSBzbyB0aGF0IHdlIGNhbiBhcHBseSB0aGF0IGFzIHBhZGRpbmcgaW4gb3JkZXIgZm9yIGJyb3dzZXJzIHRvIGNvcnJlY3RseSBoYW5kbGUgdGhpbmdzLiBUaGVuIHdlIHN3aXRjaCBiYWNrIHRvIGEgd2lkdGggb2YgMTAwJSAod2l0aG91dCB0aGF0LCBzb21lIGJyb3dzZXJzIGRvbid0IGZsb3cgdGhlIGNvbnRlbnQgY29ycmVjdGx5KVxuXG4gICAgaWYgKCF3aWR0aE1hdGNoZXMgfHwgZm9yY2UpIHtcbiAgICAgIHN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICBzdHlsZS53aWR0aCA9IFwiYXV0b1wiO1xuICAgICAgc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCIwcHhcIjtcbiAgICAgIGV4dHJhUGFkUmlnaHQgPSBNYXRoLm1heCgwLCBlbGVtZW50LnNjcm9sbFdpZHRoIC0gZWxlbWVudC5jbGllbnRXaWR0aCk7IC8vaWYgdGhlIGNvbnRlbnQgaXMgd2lkZXIgdGhhbiB0aGUgY29udGFpbmVyLCB3ZSBuZWVkIHRvIGFkZCB0aGUgcGFkZGluZ0xlZnQgYW5kIHBhZGRpbmdSaWdodCBpbiBvcmRlciBmb3IgdGhpbmdzIHRvIGJlaGF2ZSBjb3JyZWN0bHkuXG5cbiAgICAgIGlmIChleHRyYVBhZFJpZ2h0KSB7XG4gICAgICAgIGV4dHJhUGFkUmlnaHQgKz0gcGFyc2VGbG9hdChjcy5wYWRkaW5nTGVmdCkgKyAoX2FkZFBhZGRpbmdCUiA/IHBhcnNlRmxvYXQoY3MucGFkZGluZ1JpZ2h0KSA6IDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgIHN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgIHN0eWxlLm92ZXJmbG93ID0gXCJ2aXNpYmxlXCI7XG4gICAgc3R5bGUudmVydGljYWxBbGlnbiA9IFwidG9wXCI7XG4gICAgc3R5bGUuYm94U2l6aW5nID0gXCJjb250ZW50LWJveFwiO1xuICAgIHN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgc3R5bGUucGFkZGluZ1JpZ2h0ID0gZXh0cmFQYWRSaWdodCArIFwicHhcIjsgLy9zb21lIGJyb3dzZXJzIG5lZ2xlY3QgdG8gZmFjdG9yIGluIHRoZSBib3R0b20gcGFkZGluZyB3aGVuIGNhbGN1bGF0aW5nIHRoZSBzY3JvbGxIZWlnaHQsIHNvIHdlIG5lZWQgdG8gYWRkIHRoYXQgcGFkZGluZyB0byB0aGUgY29udGVudCB3aGVuIHRoYXQgaGFwcGVucy4gQWxsb3cgYSAycHggbWFyZ2luIGZvciBlcnJvclxuXG4gICAgaWYgKF9hZGRQYWRkaW5nQlIpIHtcbiAgICAgIHN0eWxlLnBhZGRpbmdCb3R0b20gPSBjcy5wYWRkaW5nQm90dG9tO1xuICAgIH1cblxuICAgIGVsZW1lbnRXaWR0aCA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgZWxlbWVudEhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIHNjcm9sbFdpZHRoID0gZWxlbWVudC5zY3JvbGxXaWR0aDtcbiAgICBzY3JvbGxIZWlnaHQgPSBlbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgICBtYXhMZWZ0ID0gZWxlbWVudC5zY3JvbGxXaWR0aCAtIGVsZW1lbnRXaWR0aDtcbiAgICBtYXhUb3AgPSBlbGVtZW50LnNjcm9sbEhlaWdodCAtIGVsZW1lbnRIZWlnaHQ7XG4gICAgY29udGVudEhlaWdodCA9IGNvbnRlbnQub2Zmc2V0SGVpZ2h0O1xuICAgIHN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICBpZiAoeCB8fCB5KSB7XG4gICAgICB0aGlzLmxlZnQoeCk7XG4gICAgICB0aGlzLnRvcCh5KTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgdGhpcy5fc2tpcCA9IGZhbHNlO1xuICB0aGlzLmVuYWJsZSgpO1xufSxcbiAgICBfaW5pdENvcmUgPSBmdW5jdGlvbiBfaW5pdENvcmUocmVxdWlyZWQpIHtcbiAgaWYgKF93aW5kb3dFeGlzdHMoKSAmJiBkb2N1bWVudC5ib2R5KSB7XG4gICAgdmFyIG5hdiA9IHdpbmRvdyAmJiB3aW5kb3cubmF2aWdhdG9yO1xuICAgIF93aW4gPSB3aW5kb3c7XG4gICAgX2RvYyA9IGRvY3VtZW50O1xuICAgIF9kb2NFbGVtZW50ID0gX2RvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgX2JvZHkgPSBfZG9jLmJvZHk7XG4gICAgX3RlbXBEaXYgPSBfY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBfc3VwcG9ydHNQb2ludGVyID0gISF3aW5kb3cuUG9pbnRlckV2ZW50O1xuICAgIF9wbGFjZWhvbGRlckRpdiA9IF9jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIF9wbGFjZWhvbGRlckRpdi5zdHlsZS5jc3NUZXh0ID0gXCJ2aXNpYmlsaXR5OmhpZGRlbjtoZWlnaHQ6MXB4O3RvcDotMXB4O3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246cmVsYXRpdmU7Y2xlYXI6Ym90aDtjdXJzb3I6Z3JhYlwiO1xuICAgIF9kZWZhdWx0Q3Vyc29yID0gX3BsYWNlaG9sZGVyRGl2LnN0eWxlLmN1cnNvciA9PT0gXCJncmFiXCIgPyBcImdyYWJcIiA6IFwibW92ZVwiO1xuICAgIF9pc0FuZHJvaWQgPSBuYXYgJiYgbmF2LnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJhbmRyb2lkXCIpICE9PSAtMTsgLy9BbmRyb2lkIGhhbmRsZXMgdG91Y2ggZXZlbnRzIGluIGFuIG9kZCB3YXkgYW5kIGl0J3MgdmlydHVhbGx5IGltcG9zc2libGUgdG8gXCJmZWF0dXJlIHRlc3RcIiBzbyB3ZSByZXNvcnQgdG8gVUEgc25pZmZpbmdcblxuICAgIF9pc1RvdWNoRGV2aWNlID0gXCJvbnRvdWNoc3RhcnRcIiBpbiBfZG9jRWxlbWVudCAmJiBcIm9yaWVudGF0aW9uXCIgaW4gX3dpbiB8fCBuYXYgJiYgKG5hdi5NYXhUb3VjaFBvaW50cyA+IDAgfHwgbmF2Lm1zTWF4VG91Y2hQb2ludHMgPiAwKTtcblxuICAgIF9hZGRQYWRkaW5nQlIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvL3RoaXMgZnVuY3Rpb24gaXMgaW4gY2hhcmdlIG9mIGFuYWx5emluZyBicm93c2VyIGJlaGF2aW9yIHJlbGF0ZWQgdG8gcGFkZGluZy4gSXQgc2V0cyB0aGUgX2FkZFBhZGRpbmdCUiB0byB0cnVlIGlmIHRoZSBicm93c2VyIGRvZXNuJ3Qgbm9ybWFsbHkgZmFjdG9yIGluIHRoZSBib3R0b20gb3IgcmlnaHQgcGFkZGluZyBvbiB0aGUgZWxlbWVudCBpbnNpZGUgdGhlIHNjcm9sbGluZyBhcmVhLCBhbmQgaXQgc2V0cyBfYWRkUGFkZGluZ0xlZnQgdG8gdHJ1ZSBpZiBpdCdzIGEgYnJvd3NlciB0aGF0IHJlcXVpcmVzIHRoZSBleHRyYSBvZmZzZXQgKG9mZnNldExlZnQpIHRvIGJlIGFkZGVkIHRvIHRoZSBwYWRkaW5nUmlnaHQgKGxpa2UgT3BlcmEpLlxuICAgICAgdmFyIGRpdiA9IF9jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgICAgICAgIGNoaWxkID0gX2NyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgICAgICAgY2hpbGRTdHlsZSA9IGNoaWxkLnN0eWxlLFxuICAgICAgICAgIHBhcmVudCA9IF9ib2R5LFxuICAgICAgICAgIHZhbDtcblxuICAgICAgY2hpbGRTdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICAgIGNoaWxkU3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgICBkaXYuc3R5bGUuY3NzVGV4dCA9IGNoaWxkLmlubmVySFRNTCA9IFwid2lkdGg6OTBweDtoZWlnaHQ6NDBweDtwYWRkaW5nOjEwcHg7b3ZlcmZsb3c6YXV0bzt2aXNpYmlsaXR5OmhpZGRlblwiO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgdmFsID0gY2hpbGQub2Zmc2V0SGVpZ2h0ICsgMTggPiBkaXYuc2Nyb2xsSGVpZ2h0OyAvL2Rpdi5zY3JvbGxIZWlnaHQgc2hvdWxkIGJlIGNoaWxkLm9mZnNldEhlaWdodCArIDIwIGJlY2F1c2Ugb2YgdGhlIDEwcHggb2YgcGFkZGluZyBvbiBlYWNoIHNpZGUsIGJ1dCBzb21lIGJyb3dzZXJzIGlnbm9yZSBvbmUgc2lkZS4gV2UgYWxsb3cgYSAycHggbWFyZ2luIG9mIGVycm9yLlxuXG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfSgpO1xuXG4gICAgX3RvdWNoRXZlbnRMb29rdXAgPSBmdW5jdGlvbiAodHlwZXMpIHtcbiAgICAgIC8vd2UgY3JlYXRlIGFuIG9iamVjdCB0aGF0IG1ha2VzIGl0IGVhc3kgdG8gdHJhbnNsYXRlIHRvdWNoIGV2ZW50IHR5cGVzIGludG8gdGhlaXIgXCJwb2ludGVyXCIgY291bnRlcnBhcnRzIGlmIHdlJ3JlIGluIGEgYnJvd3NlciB0aGF0IHVzZXMgdGhvc2UgaW5zdGVhZC4gTGlrZSBJRTEwIHVzZXMgXCJNU1BvaW50ZXJEb3duXCIgaW5zdGVhZCBvZiBcInRvdWNoc3RhcnRcIiwgZm9yIGV4YW1wbGUuXG4gICAgICB2YXIgc3RhbmRhcmQgPSB0eXBlcy5zcGxpdChcIixcIiksXG4gICAgICAgICAgY29udmVydGVkID0gKFwib25wb2ludGVyZG93blwiIGluIF90ZW1wRGl2ID8gXCJwb2ludGVyZG93bixwb2ludGVybW92ZSxwb2ludGVydXAscG9pbnRlcmNhbmNlbFwiIDogXCJvbm1zcG9pbnRlcmRvd25cIiBpbiBfdGVtcERpdiA/IFwiTVNQb2ludGVyRG93bixNU1BvaW50ZXJNb3ZlLE1TUG9pbnRlclVwLE1TUG9pbnRlckNhbmNlbFwiIDogdHlwZXMpLnNwbGl0KFwiLFwiKSxcbiAgICAgICAgICBvYmogPSB7fSxcbiAgICAgICAgICBpID0gNDtcblxuICAgICAgd2hpbGUgKC0taSA+IC0xKSB7XG4gICAgICAgIG9ialtzdGFuZGFyZFtpXV0gPSBjb252ZXJ0ZWRbaV07XG4gICAgICAgIG9ialtjb252ZXJ0ZWRbaV1dID0gc3RhbmRhcmRbaV07XG4gICAgICB9IC8vdG8gYXZvaWQgcHJvYmxlbXMgaW4gaU9TIDksIHRlc3QgdG8gc2VlIGlmIHRoZSBicm93c2VyIHN1cHBvcnRzIHRoZSBcInBhc3NpdmVcIiBvcHRpb24gb24gYWRkRXZlbnRMaXN0ZW5lcigpLlxuXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIF9kb2NFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsIG51bGwsIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgXCJwYXNzaXZlXCIsIHtcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIF9zdXBwb3J0c1Bhc3NpdmUgPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9KFwidG91Y2hzdGFydCx0b3VjaG1vdmUsdG91Y2hlbmQsdG91Y2hjYW5jZWxcIik7XG5cbiAgICBfYWRkTGlzdGVuZXIoX2RvYywgXCJ0b3VjaGNhbmNlbFwiLCBfZW1wdHlGdW5jKTsgLy9zb21lIG9sZGVyIEFuZHJvaWQgZGV2aWNlcyBpbnRlcm1pdHRlbnRseSBzdG9wIGRpc3BhdGNoaW5nIFwidG91Y2htb3ZlXCIgZXZlbnRzIGlmIHdlIGRvbid0IGxpc3RlbiBmb3IgXCJ0b3VjaGNhbmNlbFwiIG9uIHRoZSBkb2N1bWVudC4gVmVyeSBzdHJhbmdlIGluZGVlZC5cblxuXG4gICAgX2FkZExpc3RlbmVyKF93aW4sIFwidG91Y2htb3ZlXCIsIF9lbXB0eUZ1bmMpOyAvL3dvcmtzIGFyb3VuZCBTYWZhcmkgYnVncyB0aGF0IHN0aWxsIGFsbG93IHRoZSBwYWdlIHRvIHNjcm9sbCBldmVuIHdoZW4gd2UgcHJldmVudERlZmF1bHQoKSBvbiB0aGUgdG91Y2htb3ZlIGV2ZW50LlxuXG5cbiAgICBfYm9keSAmJiBfYm9keS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBfZW1wdHlGdW5jKTsgLy93b3JrcyBhcm91bmQgU2FmYXJpIGJ1ZzogaHR0cHM6Ly9ncmVlbnNvY2suY29tL2ZvcnVtcy90b3BpYy8yMTQ1MC1kcmFnZ2FibGUtaW4taWZyYW1lLW9uLW1vYmlsZS1pcy1idWdneS9cblxuICAgIF9hZGRMaXN0ZW5lcihfZG9jLCBcImNvbnRleHRtZW51XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIHAgaW4gX2xvb2t1cCkge1xuICAgICAgICBpZiAoX2xvb2t1cFtwXS5pc1ByZXNzZWQpIHtcbiAgICAgICAgICBfbG9va3VwW3BdLmVuZERyYWcoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZ3NhcCA9IF9jb3JlSW5pdHRlZCA9IF9nZXRHU0FQKCk7XG4gIH1cblxuICBpZiAoZ3NhcCkge1xuICAgIEluZXJ0aWFQbHVnaW4gPSBnc2FwLnBsdWdpbnMuaW5lcnRpYTtcbiAgICBfY2hlY2tQcmVmaXggPSBnc2FwLnV0aWxzLmNoZWNrUHJlZml4O1xuICAgIF90cmFuc2Zvcm1Qcm9wID0gX2NoZWNrUHJlZml4KF90cmFuc2Zvcm1Qcm9wKTtcbiAgICBfdHJhbnNmb3JtT3JpZ2luUHJvcCA9IF9jaGVja1ByZWZpeChfdHJhbnNmb3JtT3JpZ2luUHJvcCk7XG4gICAgX3RvQXJyYXkgPSBnc2FwLnV0aWxzLnRvQXJyYXk7XG4gICAgX3N1cHBvcnRzM0QgPSAhIV9jaGVja1ByZWZpeChcInBlcnNwZWN0aXZlXCIpO1xuICB9IGVsc2UgaWYgKHJlcXVpcmVkKSB7XG4gICAgY29uc29sZS53YXJuKFwiUGxlYXNlIGdzYXAucmVnaXN0ZXJQbHVnaW4oRHJhZ2dhYmxlKVwiKTtcbiAgfVxufTtcblxudmFyIEV2ZW50RGlzcGF0Y2hlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEV2ZW50RGlzcGF0Y2hlcih0YXJnZXQpIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB7fTtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldCB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGxpc3QgPSB0aGlzLl9saXN0ZW5lcnNbdHlwZV0gfHwgKHRoaXMuX2xpc3RlbmVyc1t0eXBlXSA9IFtdKTtcblxuICAgIGlmICghfmxpc3QuaW5kZXhPZihjYWxsYmFjaykpIHtcbiAgICAgIGxpc3QucHVzaChjYWxsYmFjayk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaykge1xuICAgIHZhciBsaXN0ID0gdGhpcy5fbGlzdGVuZXJzW3R5cGVdLFxuICAgICAgICBpID0gbGlzdCAmJiBsaXN0LmluZGV4T2YoY2FsbGJhY2spIHx8IC0xO1xuICAgIGkgPiAtMSAmJiBsaXN0LnNwbGljZShpLCAxKTtcbiAgfTtcblxuICBfcHJvdG8uZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQodHlwZSkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgcmVzdWx0O1xuICAgICh0aGlzLl9saXN0ZW5lcnNbdHlwZV0gfHwgW10pLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2suY2FsbChfdGhpcywge1xuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICB0YXJnZXQ6IF90aGlzLnRhcmdldFxuICAgICAgfSkgPT09IGZhbHNlICYmIChyZXN1bHQgPSBmYWxzZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDsgLy9pZiBhbnkgb2YgdGhlIGNhbGxiYWNrcyByZXR1cm4gZmFsc2UsIHBhc3MgdGhhdCBhbG9uZy5cbiAgfTtcblxuICByZXR1cm4gRXZlbnREaXNwYXRjaGVyO1xufSgpO1xuXG5leHBvcnQgdmFyIERyYWdnYWJsZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0V2ZW50RGlzcGF0Y2hlcikge1xuICBfaW5oZXJpdHNMb29zZShEcmFnZ2FibGUsIF9FdmVudERpc3BhdGNoZXIpO1xuXG4gIGZ1bmN0aW9uIERyYWdnYWJsZSh0YXJnZXQsIHZhcnMpIHtcbiAgICB2YXIgX3RoaXMyO1xuXG4gICAgX3RoaXMyID0gX0V2ZW50RGlzcGF0Y2hlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgX2NvcmVJbml0dGVkIHx8IF9pbml0Q29yZSgxKTtcbiAgICB0YXJnZXQgPSBfdG9BcnJheSh0YXJnZXQpWzBdOyAvL2luIGNhc2UgdGhlIHRhcmdldCBpcyBhIHNlbGVjdG9yIG9iamVjdCBvciBzZWxlY3RvciB0ZXh0XG5cbiAgICBpZiAoIUluZXJ0aWFQbHVnaW4pIHtcbiAgICAgIEluZXJ0aWFQbHVnaW4gPSBnc2FwLnBsdWdpbnMuaW5lcnRpYTtcbiAgICB9XG5cbiAgICBfdGhpczIudmFycyA9IHZhcnMgPSBfY29weSh2YXJzIHx8IHt9KTtcbiAgICBfdGhpczIudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIF90aGlzMi54ID0gX3RoaXMyLnkgPSBfdGhpczIucm90YXRpb24gPSAwO1xuICAgIF90aGlzMi5kcmFnUmVzaXN0YW5jZSA9IHBhcnNlRmxvYXQodmFycy5kcmFnUmVzaXN0YW5jZSkgfHwgMDtcbiAgICBfdGhpczIuZWRnZVJlc2lzdGFuY2UgPSBpc05hTih2YXJzLmVkZ2VSZXNpc3RhbmNlKSA/IDEgOiBwYXJzZUZsb2F0KHZhcnMuZWRnZVJlc2lzdGFuY2UpIHx8IDA7XG4gICAgX3RoaXMyLmxvY2tBeGlzID0gdmFycy5sb2NrQXhpcztcbiAgICBfdGhpczIuYXV0b1Njcm9sbCA9IHZhcnMuYXV0b1Njcm9sbCB8fCAwO1xuICAgIF90aGlzMi5sb2NrZWRBeGlzID0gbnVsbDtcbiAgICBfdGhpczIuYWxsb3dFdmVudERlZmF1bHQgPSAhIXZhcnMuYWxsb3dFdmVudERlZmF1bHQ7XG4gICAgZ3NhcC5nZXRQcm9wZXJ0eSh0YXJnZXQsIFwieFwiKTsgLy8gdG8gZW5zdXJlIHRoYXQgdHJhbnNmb3JtcyBhcmUgaW5zdGFudGlhdGVkLlxuXG4gICAgdmFyIHR5cGUgPSAodmFycy50eXBlIHx8IFwieCx5XCIpLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIHh5TW9kZSA9IH50eXBlLmluZGV4T2YoXCJ4XCIpIHx8IH50eXBlLmluZGV4T2YoXCJ5XCIpLFxuICAgICAgICByb3RhdGlvbk1vZGUgPSB0eXBlLmluZGV4T2YoXCJyb3RhdGlvblwiKSAhPT0gLTEsXG4gICAgICAgIHhQcm9wID0gcm90YXRpb25Nb2RlID8gXCJyb3RhdGlvblwiIDogeHlNb2RlID8gXCJ4XCIgOiBcImxlZnRcIixcbiAgICAgICAgeVByb3AgPSB4eU1vZGUgPyBcInlcIiA6IFwidG9wXCIsXG4gICAgICAgIGFsbG93WCA9ICEhKH50eXBlLmluZGV4T2YoXCJ4XCIpIHx8IH50eXBlLmluZGV4T2YoXCJsZWZ0XCIpIHx8IHR5cGUgPT09IFwic2Nyb2xsXCIpLFxuICAgICAgICBhbGxvd1kgPSAhISh+dHlwZS5pbmRleE9mKFwieVwiKSB8fCB+dHlwZS5pbmRleE9mKFwidG9wXCIpIHx8IHR5cGUgPT09IFwic2Nyb2xsXCIpLFxuICAgICAgICBtaW5pbXVtTW92ZW1lbnQgPSB2YXJzLm1pbmltdW1Nb3ZlbWVudCB8fCAyLFxuICAgICAgICBzZWxmID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczIpLFxuICAgICAgICB0cmlnZ2VycyA9IF90b0FycmF5KHZhcnMudHJpZ2dlciB8fCB2YXJzLmhhbmRsZSB8fCB0YXJnZXQpLFxuICAgICAgICBraWxsUHJvcHMgPSB7fSxcbiAgICAgICAgZHJhZ0VuZFRpbWUgPSAwLFxuICAgICAgICBjaGVja0F1dG9TY3JvbGxCb3VuZHMgPSBmYWxzZSxcbiAgICAgICAgYXV0b1Njcm9sbE1hcmdpblRvcCA9IHZhcnMuYXV0b1Njcm9sbE1hcmdpblRvcCB8fCA0MCxcbiAgICAgICAgYXV0b1Njcm9sbE1hcmdpblJpZ2h0ID0gdmFycy5hdXRvU2Nyb2xsTWFyZ2luUmlnaHQgfHwgNDAsXG4gICAgICAgIGF1dG9TY3JvbGxNYXJnaW5Cb3R0b20gPSB2YXJzLmF1dG9TY3JvbGxNYXJnaW5Cb3R0b20gfHwgNDAsXG4gICAgICAgIGF1dG9TY3JvbGxNYXJnaW5MZWZ0ID0gdmFycy5hdXRvU2Nyb2xsTWFyZ2luTGVmdCB8fCA0MCxcbiAgICAgICAgaXNDbGlja2FibGUgPSB2YXJzLmNsaWNrYWJsZVRlc3QgfHwgX2lzQ2xpY2thYmxlLFxuICAgICAgICBjbGlja1RpbWUgPSAwLFxuICAgICAgICBnc0NhY2hlID0gdGFyZ2V0Ll9nc2FwIHx8IGdzYXAuY29yZS5nZXRDYWNoZSh0YXJnZXQpLFxuICAgICAgICBpc0ZpeGVkID0gX2lzRml4ZWQodGFyZ2V0KSxcbiAgICAgICAgZ2V0UHJvcEFzTnVtID0gZnVuY3Rpb24gZ2V0UHJvcEFzTnVtKHByb3BlcnR5LCB1bml0KSB7XG4gICAgICByZXR1cm4gcGFyc2VGbG9hdChnc0NhY2hlLmdldCh0YXJnZXQsIHByb3BlcnR5LCB1bml0KSk7XG4gICAgfSxcbiAgICAgICAgb3duZXJEb2MgPSB0YXJnZXQub3duZXJEb2N1bWVudCB8fCBfZG9jLFxuICAgICAgICBlbmFibGVkLFxuICAgICAgICBzY3JvbGxQcm94eSxcbiAgICAgICAgc3RhcnRQb2ludGVyWCxcbiAgICAgICAgc3RhcnRQb2ludGVyWSxcbiAgICAgICAgc3RhcnRFbGVtZW50WCxcbiAgICAgICAgc3RhcnRFbGVtZW50WSxcbiAgICAgICAgaGFzQm91bmRzLFxuICAgICAgICBoYXNEcmFnQ2FsbGJhY2ssXG4gICAgICAgIGhhc01vdmVDYWxsYmFjayxcbiAgICAgICAgbWF4WCxcbiAgICAgICAgbWluWCxcbiAgICAgICAgbWF4WSxcbiAgICAgICAgbWluWSxcbiAgICAgICAgdG91Y2gsXG4gICAgICAgIHRvdWNoSUQsXG4gICAgICAgIHJvdGF0aW9uT3JpZ2luLFxuICAgICAgICBkaXJ0eSxcbiAgICAgICAgb2xkLFxuICAgICAgICBzbmFwWCxcbiAgICAgICAgc25hcFksXG4gICAgICAgIHNuYXBYWSxcbiAgICAgICAgaXNDbGlja2luZyxcbiAgICAgICAgdG91Y2hFdmVudFRhcmdldCxcbiAgICAgICAgbWF0cml4LFxuICAgICAgICBpbnRlcnJ1cHRlZCxcbiAgICAgICAgYWxsb3dOYXRpdmVUb3VjaFNjcm9sbGluZyxcbiAgICAgICAgdG91Y2hEcmFnQXhpcyxcbiAgICAgICAgaXNEaXNwYXRjaGluZyxcbiAgICAgICAgY2xpY2tEaXNwYXRjaCxcbiAgICAgICAgdHJ1c3RlZENsaWNrRGlzcGF0Y2gsXG4gICAgICAgIGlzUHJldmVudGluZ0RlZmF1bHQsXG4gICAgICAgIGlubmVyTWF0cml4LFxuICAgICAgICBvbkNvbnRleHRNZW51ID0gZnVuY3Rpb24gb25Db250ZXh0TWVudShlKSB7XG4gICAgICAvL3VzZWQgdG8gcHJldmVudCBsb25nLXRvdWNoIGZyb20gdHJpZ2dlcmluZyBhIGNvbnRleHQgbWVudS5cbiAgICAgIC8vIChzZWxmLmlzUHJlc3NlZCAmJiBlLndoaWNoIDwgMikgJiYgc2VsZi5lbmREcmFnKCkgLy8gcHJldmlvdXNseSBlbmRlZCBkcmFnIHdoZW4gY29udGV4dCBtZW51IHdhcyB0cmlnZ2VyZWQsIGJ1dCBpbnN0ZWFkIHdlIHNob3VsZCBqdXN0IHN0b3AgcHJvcGFnYXRpb24gYW5kIHByZXZlbnQgdGhlIGRlZmF1bHQgZXZlbnQgYmVoYXZpb3IuXG4gICAgICBfcHJldmVudERlZmF1bHQoZSk7XG5cbiAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uICYmIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICAgICAgLy90aGlzIG1ldGhvZCBnZXRzIGNhbGxlZCBvbiBldmVyeSB0aWNrIG9mIFR3ZWVuTGl0ZS50aWNrZXIgd2hpY2ggYWxsb3dzIHVzIHRvIHN5bmNocm9uaXplIHRoZSByZW5kZXJzIHRvIHRoZSBjb3JlIGVuZ2luZSAod2hpY2ggaXMgdHlwaWNhbGx5IHN5bmNocm9uaXplZCB3aXRoIHRoZSBkaXNwbGF5IHJlZnJlc2ggdmlhIHJlcXVlc3RBbmltYXRpb25GcmFtZSkuIFRoaXMgaXMgYW4gb3B0aW1pemF0aW9uIC0gaXQncyBiZXR0ZXIgdGhhbiBhcHBseWluZyB0aGUgdmFsdWVzIGluc2lkZSB0aGUgXCJtb3VzZW1vdmVcIiBvciBcInRvdWNobW92ZVwiIGV2ZW50IGhhbmRsZXIgd2hpY2ggbWF5IGdldCBjYWxsZWQgbWFueSB0aW1lcyBpbmJldHdlZW4gcmVmcmVzaGVzLlxuICAgIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihzdXBwcmVzc0V2ZW50cykge1xuICAgICAgaWYgKHNlbGYuYXV0b1Njcm9sbCAmJiBzZWxmLmlzRHJhZ2dpbmcgJiYgKGNoZWNrQXV0b1Njcm9sbEJvdW5kcyB8fCBkaXJ0eSkpIHtcbiAgICAgICAgdmFyIGUgPSB0YXJnZXQsXG4gICAgICAgICAgICBhdXRvU2Nyb2xsRmFjdG9yID0gc2VsZi5hdXRvU2Nyb2xsICogMTUsXG4gICAgICAgICAgICAvL211bHRpcGx5aW5nIGJ5IDE1IGp1c3QgZ2l2ZXMgdXMgYSBiZXR0ZXIgXCJmZWVsXCIgc3BlZWQtd2lzZS5cbiAgICAgICAgcGFyZW50LFxuICAgICAgICAgICAgaXNSb290LFxuICAgICAgICAgICAgcmVjdCxcbiAgICAgICAgICAgIHBvaW50ZXJYLFxuICAgICAgICAgICAgcG9pbnRlclksXG4gICAgICAgICAgICBjaGFuZ2VYLFxuICAgICAgICAgICAgY2hhbmdlWSxcbiAgICAgICAgICAgIGdhcDtcbiAgICAgICAgY2hlY2tBdXRvU2Nyb2xsQm91bmRzID0gZmFsc2U7XG4gICAgICAgIF93aW5kb3dQcm94eS5zY3JvbGxUb3AgPSBfd2luLnBhZ2VZT2Zmc2V0ICE9IG51bGwgPyBfd2luLnBhZ2VZT2Zmc2V0IDogb3duZXJEb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCAhPSBudWxsID8gb3duZXJEb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA6IG93bmVyRG9jLmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgICBfd2luZG93UHJveHkuc2Nyb2xsTGVmdCA9IF93aW4ucGFnZVhPZmZzZXQgIT0gbnVsbCA/IF93aW4ucGFnZVhPZmZzZXQgOiBvd25lckRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCAhPSBudWxsID8gb3duZXJEb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgOiBvd25lckRvYy5ib2R5LnNjcm9sbExlZnQ7XG4gICAgICAgIHBvaW50ZXJYID0gc2VsZi5wb2ludGVyWCAtIF93aW5kb3dQcm94eS5zY3JvbGxMZWZ0O1xuICAgICAgICBwb2ludGVyWSA9IHNlbGYucG9pbnRlclkgLSBfd2luZG93UHJveHkuc2Nyb2xsVG9wO1xuXG4gICAgICAgIHdoaWxlIChlICYmICFpc1Jvb3QpIHtcbiAgICAgICAgICAvL3dhbGsgdXAgdGhlIGNoYWluIGFuZCBzZW5zZSB3aGVyZXZlciB0aGUgcG9pbnRlciBpcyB3aXRoaW4gNDBweCBvZiBhbiBlZGdlIHRoYXQncyBzY3JvbGxhYmxlLlxuICAgICAgICAgIGlzUm9vdCA9IF9pc1Jvb3QoZS5wYXJlbnROb2RlKTtcbiAgICAgICAgICBwYXJlbnQgPSBpc1Jvb3QgPyBfd2luZG93UHJveHkgOiBlLnBhcmVudE5vZGU7XG4gICAgICAgICAgcmVjdCA9IGlzUm9vdCA/IHtcbiAgICAgICAgICAgIGJvdHRvbTogTWF0aC5tYXgoX2RvY0VsZW1lbnQuY2xpZW50SGVpZ2h0LCBfd2luLmlubmVySGVpZ2h0IHx8IDApLFxuICAgICAgICAgICAgcmlnaHQ6IE1hdGgubWF4KF9kb2NFbGVtZW50LmNsaWVudFdpZHRoLCBfd2luLmlubmVyV2lkdGggfHwgMCksXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwXG4gICAgICAgICAgfSA6IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBjaGFuZ2VYID0gY2hhbmdlWSA9IDA7XG5cbiAgICAgICAgICBpZiAoYWxsb3dZKSB7XG4gICAgICAgICAgICBnYXAgPSBwYXJlbnQuX2dzTWF4U2Nyb2xsWSAtIHBhcmVudC5zY3JvbGxUb3A7XG5cbiAgICAgICAgICAgIGlmIChnYXAgPCAwKSB7XG4gICAgICAgICAgICAgIGNoYW5nZVkgPSBnYXA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBvaW50ZXJZID4gcmVjdC5ib3R0b20gLSBhdXRvU2Nyb2xsTWFyZ2luQm90dG9tICYmIGdhcCkge1xuICAgICAgICAgICAgICBjaGVja0F1dG9TY3JvbGxCb3VuZHMgPSB0cnVlO1xuICAgICAgICAgICAgICBjaGFuZ2VZID0gTWF0aC5taW4oZ2FwLCBhdXRvU2Nyb2xsRmFjdG9yICogKDEgLSBNYXRoLm1heCgwLCByZWN0LmJvdHRvbSAtIHBvaW50ZXJZKSAvIGF1dG9TY3JvbGxNYXJnaW5Cb3R0b20pIHwgMCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBvaW50ZXJZIDwgcmVjdC50b3AgKyBhdXRvU2Nyb2xsTWFyZ2luVG9wICYmIHBhcmVudC5zY3JvbGxUb3ApIHtcbiAgICAgICAgICAgICAgY2hlY2tBdXRvU2Nyb2xsQm91bmRzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgY2hhbmdlWSA9IC1NYXRoLm1pbihwYXJlbnQuc2Nyb2xsVG9wLCBhdXRvU2Nyb2xsRmFjdG9yICogKDEgLSBNYXRoLm1heCgwLCBwb2ludGVyWSAtIHJlY3QudG9wKSAvIGF1dG9TY3JvbGxNYXJnaW5Ub3ApIHwgMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjaGFuZ2VZKSB7XG4gICAgICAgICAgICAgIHBhcmVudC5zY3JvbGxUb3AgKz0gY2hhbmdlWTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYWxsb3dYKSB7XG4gICAgICAgICAgICBnYXAgPSBwYXJlbnQuX2dzTWF4U2Nyb2xsWCAtIHBhcmVudC5zY3JvbGxMZWZ0O1xuXG4gICAgICAgICAgICBpZiAoZ2FwIDwgMCkge1xuICAgICAgICAgICAgICBjaGFuZ2VYID0gZ2FwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwb2ludGVyWCA+IHJlY3QucmlnaHQgLSBhdXRvU2Nyb2xsTWFyZ2luUmlnaHQgJiYgZ2FwKSB7XG4gICAgICAgICAgICAgIGNoZWNrQXV0b1Njcm9sbEJvdW5kcyA9IHRydWU7XG4gICAgICAgICAgICAgIGNoYW5nZVggPSBNYXRoLm1pbihnYXAsIGF1dG9TY3JvbGxGYWN0b3IgKiAoMSAtIE1hdGgubWF4KDAsIHJlY3QucmlnaHQgLSBwb2ludGVyWCkgLyBhdXRvU2Nyb2xsTWFyZ2luUmlnaHQpIHwgMCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBvaW50ZXJYIDwgcmVjdC5sZWZ0ICsgYXV0b1Njcm9sbE1hcmdpbkxlZnQgJiYgcGFyZW50LnNjcm9sbExlZnQpIHtcbiAgICAgICAgICAgICAgY2hlY2tBdXRvU2Nyb2xsQm91bmRzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgY2hhbmdlWCA9IC1NYXRoLm1pbihwYXJlbnQuc2Nyb2xsTGVmdCwgYXV0b1Njcm9sbEZhY3RvciAqICgxIC0gTWF0aC5tYXgoMCwgcG9pbnRlclggLSByZWN0LmxlZnQpIC8gYXV0b1Njcm9sbE1hcmdpbkxlZnQpIHwgMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjaGFuZ2VYKSB7XG4gICAgICAgICAgICAgIHBhcmVudC5zY3JvbGxMZWZ0ICs9IGNoYW5nZVg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGlzUm9vdCAmJiAoY2hhbmdlWCB8fCBjaGFuZ2VZKSkge1xuICAgICAgICAgICAgX3dpbi5zY3JvbGxUbyhwYXJlbnQuc2Nyb2xsTGVmdCwgcGFyZW50LnNjcm9sbFRvcCk7XG5cbiAgICAgICAgICAgIHNldFBvaW50ZXJQb3NpdGlvbihzZWxmLnBvaW50ZXJYICsgY2hhbmdlWCwgc2VsZi5wb2ludGVyWSArIGNoYW5nZVkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGUgPSBwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpcnR5KSB7XG4gICAgICAgIHZhciB4ID0gc2VsZi54LFxuICAgICAgICAgICAgeSA9IHNlbGYueTtcblxuICAgICAgICBpZiAocm90YXRpb25Nb2RlKSB7XG4gICAgICAgICAgc2VsZi5kZWx0YVggPSB4IC0gcGFyc2VGbG9hdChnc0NhY2hlLnJvdGF0aW9uKTtcbiAgICAgICAgICBzZWxmLnJvdGF0aW9uID0geDtcbiAgICAgICAgICBnc0NhY2hlLnJvdGF0aW9uID0geCArIFwiZGVnXCI7XG4gICAgICAgICAgZ3NDYWNoZS5yZW5kZXJUcmFuc2Zvcm0oMSwgZ3NDYWNoZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHNjcm9sbFByb3h5KSB7XG4gICAgICAgICAgICBpZiAoYWxsb3dZKSB7XG4gICAgICAgICAgICAgIHNlbGYuZGVsdGFZID0geSAtIHNjcm9sbFByb3h5LnRvcCgpO1xuICAgICAgICAgICAgICBzY3JvbGxQcm94eS50b3AoeSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhbGxvd1gpIHtcbiAgICAgICAgICAgICAgc2VsZi5kZWx0YVggPSB4IC0gc2Nyb2xsUHJveHkubGVmdCgpO1xuICAgICAgICAgICAgICBzY3JvbGxQcm94eS5sZWZ0KHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoeHlNb2RlKSB7XG4gICAgICAgICAgICBpZiAoYWxsb3dZKSB7XG4gICAgICAgICAgICAgIHNlbGYuZGVsdGFZID0geSAtIHBhcnNlRmxvYXQoZ3NDYWNoZS55KTtcbiAgICAgICAgICAgICAgZ3NDYWNoZS55ID0geSArIFwicHhcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFsbG93WCkge1xuICAgICAgICAgICAgICBzZWxmLmRlbHRhWCA9IHggLSBwYXJzZUZsb2F0KGdzQ2FjaGUueCk7XG4gICAgICAgICAgICAgIGdzQ2FjaGUueCA9IHggKyBcInB4XCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGdzQ2FjaGUucmVuZGVyVHJhbnNmb3JtKDEsIGdzQ2FjaGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYWxsb3dZKSB7XG4gICAgICAgICAgICAgIHNlbGYuZGVsdGFZID0geSAtIHBhcnNlRmxvYXQodGFyZ2V0LnN0eWxlLnRvcCB8fCAwKTtcbiAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLnRvcCA9IHkgKyBcInB4XCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhbGxvd1gpIHtcbiAgICAgICAgICAgICAgc2VsZi5kZWx0YVggPSB4IC0gcGFyc2VGbG9hdCh0YXJnZXQuc3R5bGUubGVmdCB8fCAwKTtcbiAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLmxlZnQgPSB4ICsgXCJweFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNEcmFnQ2FsbGJhY2sgJiYgIXN1cHByZXNzRXZlbnRzICYmICFpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICAgICAgaXNEaXNwYXRjaGluZyA9IHRydWU7IC8vaW4gY2FzZSBvbkRyYWcgaGFzIGFuIHVwZGF0ZSgpIGNhbGwgKGF2b2lkIGVuZGxlc3MgbG9vcClcblxuICAgICAgICAgIGlmIChfZGlzcGF0Y2hFdmVudChzZWxmLCBcImRyYWdcIiwgXCJvbkRyYWdcIikgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoYWxsb3dYKSB7XG4gICAgICAgICAgICAgIHNlbGYueCAtPSBzZWxmLmRlbHRhWDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFsbG93WSkge1xuICAgICAgICAgICAgICBzZWxmLnkgLT0gc2VsZi5kZWx0YVk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlbmRlcih0cnVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZGlydHkgPSBmYWxzZTtcbiAgICB9LFxuICAgICAgICAvL2NvcGllcyB0aGUgeC95IGZyb20gdGhlIGVsZW1lbnQgKHdoZXRoZXIgdGhhdCBiZSB0cmFuc2Zvcm1zLCB0b3AvbGVmdCwgb3IgU2Nyb2xsUHJveHkncyB0b3AvbGVmdCkgdG8gdGhlIERyYWdnYWJsZSdzIHggYW5kIHkgKGFuZCByb3RhdGlvbiBpZiBuZWNlc3NhcnkpIHByb3BlcnRpZXMgc28gdGhhdCB0aGV5IHJlZmxlY3QgcmVhbGl0eSBhbmQgaXQgYWxzbyAob3B0aW9uYWxseSkgYXBwbGllcyBhbnkgc25hcHBpbmcgbmVjZXNzYXJ5LiBUaGlzIGlzIHVzZWQgYnkgdGhlIEluZXJ0aWFQbHVnaW4gdHdlZW4gaW4gYW4gb25VcGRhdGUgdG8gZW5zdXJlIHRoaW5ncyBhcmUgc3luY2VkIGFuZCBzbmFwcGVkLlxuICAgIHN5bmNYWSA9IGZ1bmN0aW9uIHN5bmNYWShza2lwT25VcGRhdGUsIHNraXBTbmFwKSB7XG4gICAgICB2YXIgeCA9IHNlbGYueCxcbiAgICAgICAgICB5ID0gc2VsZi55LFxuICAgICAgICAgIHNuYXBwZWRWYWx1ZSxcbiAgICAgICAgICBjcztcblxuICAgICAgaWYgKCF0YXJnZXQuX2dzYXApIHtcbiAgICAgICAgLy9qdXN0IGluIGNhc2UgdGhlIF9nc2FwIGNhY2hlIGdvdCB3aXBlZCwgbGlrZSBpZiB0aGUgdXNlciBjYWxsZWQgY2xlYXJQcm9wcyBvbiB0aGUgdHJhbnNmb3JtIG9yIHNvbWV0aGluZyAodmVyeSByYXJlKS5cbiAgICAgICAgZ3NDYWNoZSA9IGdzYXAuY29yZS5nZXRDYWNoZSh0YXJnZXQpO1xuICAgICAgfVxuXG4gICAgICBnc0NhY2hlLnVuY2FjaGUgJiYgZ3NhcC5nZXRQcm9wZXJ0eSh0YXJnZXQsIFwieFwiKTsgLy8gdHJpZ2dlciBhIHJlLWNhY2hlXG5cbiAgICAgIGlmICh4eU1vZGUpIHtcbiAgICAgICAgc2VsZi54ID0gcGFyc2VGbG9hdChnc0NhY2hlLngpO1xuICAgICAgICBzZWxmLnkgPSBwYXJzZUZsb2F0KGdzQ2FjaGUueSk7XG4gICAgICB9IGVsc2UgaWYgKHJvdGF0aW9uTW9kZSkge1xuICAgICAgICBzZWxmLnggPSBzZWxmLnJvdGF0aW9uID0gcGFyc2VGbG9hdChnc0NhY2hlLnJvdGF0aW9uKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Nyb2xsUHJveHkpIHtcbiAgICAgICAgc2VsZi55ID0gc2Nyb2xsUHJveHkudG9wKCk7XG4gICAgICAgIHNlbGYueCA9IHNjcm9sbFByb3h5LmxlZnQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYueSA9IHBhcnNlRmxvYXQodGFyZ2V0LnN0eWxlLnRvcCB8fCAoY3MgPSBfZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpKSAmJiBjcy50b3ApIHx8IDA7XG4gICAgICAgIHNlbGYueCA9IHBhcnNlRmxvYXQodGFyZ2V0LnN0eWxlLmxlZnQgfHwgKGNzIHx8IHt9KS5sZWZ0KSB8fCAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoKHNuYXBYIHx8IHNuYXBZIHx8IHNuYXBYWSkgJiYgIXNraXBTbmFwICYmIChzZWxmLmlzRHJhZ2dpbmcgfHwgc2VsZi5pc1Rocm93aW5nKSkge1xuICAgICAgICBpZiAoc25hcFhZKSB7XG4gICAgICAgICAgX3RlbXAxLnggPSBzZWxmLng7XG4gICAgICAgICAgX3RlbXAxLnkgPSBzZWxmLnk7XG4gICAgICAgICAgc25hcHBlZFZhbHVlID0gc25hcFhZKF90ZW1wMSk7XG5cbiAgICAgICAgICBpZiAoc25hcHBlZFZhbHVlLnggIT09IHNlbGYueCkge1xuICAgICAgICAgICAgc2VsZi54ID0gc25hcHBlZFZhbHVlLng7XG4gICAgICAgICAgICBkaXJ0eSA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNuYXBwZWRWYWx1ZS55ICE9PSBzZWxmLnkpIHtcbiAgICAgICAgICAgIHNlbGYueSA9IHNuYXBwZWRWYWx1ZS55O1xuICAgICAgICAgICAgZGlydHkgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzbmFwWCkge1xuICAgICAgICAgIHNuYXBwZWRWYWx1ZSA9IHNuYXBYKHNlbGYueCk7XG5cbiAgICAgICAgICBpZiAoc25hcHBlZFZhbHVlICE9PSBzZWxmLngpIHtcbiAgICAgICAgICAgIHNlbGYueCA9IHNuYXBwZWRWYWx1ZTtcblxuICAgICAgICAgICAgaWYgKHJvdGF0aW9uTW9kZSkge1xuICAgICAgICAgICAgICBzZWxmLnJvdGF0aW9uID0gc25hcHBlZFZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkaXJ0eSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNuYXBZKSB7XG4gICAgICAgICAgc25hcHBlZFZhbHVlID0gc25hcFkoc2VsZi55KTtcblxuICAgICAgICAgIGlmIChzbmFwcGVkVmFsdWUgIT09IHNlbGYueSkge1xuICAgICAgICAgICAgc2VsZi55ID0gc25hcHBlZFZhbHVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkaXJ0eSAmJiByZW5kZXIodHJ1ZSk7XG5cbiAgICAgIGlmICghc2tpcE9uVXBkYXRlKSB7XG4gICAgICAgIHNlbGYuZGVsdGFYID0gc2VsZi54IC0geDtcbiAgICAgICAgc2VsZi5kZWx0YVkgPSBzZWxmLnkgLSB5O1xuXG4gICAgICAgIF9kaXNwYXRjaEV2ZW50KHNlbGYsIFwidGhyb3d1cGRhdGVcIiwgXCJvblRocm93VXBkYXRlXCIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgICAgIGJ1aWxkU25hcEZ1bmMgPSBmdW5jdGlvbiBidWlsZFNuYXBGdW5jKHNuYXAsIG1pbiwgbWF4LCBmYWN0b3IpIHtcbiAgICAgIGlmIChtaW4gPT0gbnVsbCkge1xuICAgICAgICBtaW4gPSAtX2JpZ051bTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1heCA9PSBudWxsKSB7XG4gICAgICAgIG1heCA9IF9iaWdOdW07XG4gICAgICB9XG5cbiAgICAgIGlmIChfaXNGdW5jdGlvbihzbmFwKSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICB2YXIgZWRnZVRvbGVyYW5jZSA9ICFzZWxmLmlzUHJlc3NlZCA/IDEgOiAxIC0gc2VsZi5lZGdlUmVzaXN0YW5jZTsgLy9pZiB3ZSdyZSB0d2VlbmluZywgZGlzYWJsZSB0aGUgZWRnZVRvbGVyYW5jZSBiZWNhdXNlIGl0J3MgYWxyZWFkeSBmYWN0b3JlZCBpbnRvIHRoZSB0d2VlbmluZyB2YWx1ZXMgKHdlIGRvbid0IHdhbnQgdG8gYXBwbHkgaXQgbXVsdGlwbGUgdGltZXMpXG5cbiAgICAgICAgICByZXR1cm4gc25hcC5jYWxsKHNlbGYsIG4gPiBtYXggPyBtYXggKyAobiAtIG1heCkgKiBlZGdlVG9sZXJhbmNlIDogbiA8IG1pbiA/IG1pbiArIChuIC0gbWluKSAqIGVkZ2VUb2xlcmFuY2UgOiBuKSAqIGZhY3RvcjtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKF9pc0FycmF5KHNuYXApKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAobikge1xuICAgICAgICAgIHZhciBpID0gc25hcC5sZW5ndGgsXG4gICAgICAgICAgICAgIGNsb3Nlc3QgPSAwLFxuICAgICAgICAgICAgICBhYnNEaWYgPSBfYmlnTnVtLFxuICAgICAgICAgICAgICB2YWwsXG4gICAgICAgICAgICAgIGRpZjtcblxuICAgICAgICAgIHdoaWxlICgtLWkgPiAtMSkge1xuICAgICAgICAgICAgdmFsID0gc25hcFtpXTtcbiAgICAgICAgICAgIGRpZiA9IHZhbCAtIG47XG5cbiAgICAgICAgICAgIGlmIChkaWYgPCAwKSB7XG4gICAgICAgICAgICAgIGRpZiA9IC1kaWY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkaWYgPCBhYnNEaWYgJiYgdmFsID49IG1pbiAmJiB2YWwgPD0gbWF4KSB7XG4gICAgICAgICAgICAgIGNsb3Nlc3QgPSBpO1xuICAgICAgICAgICAgICBhYnNEaWYgPSBkaWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHNuYXBbY2xvc2VzdF07XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpc05hTihzbmFwKSA/IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHJldHVybiBuO1xuICAgICAgfSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNuYXAgKiBmYWN0b3I7XG4gICAgICB9O1xuICAgIH0sXG4gICAgICAgIGJ1aWxkUG9pbnRTbmFwRnVuYyA9IGZ1bmN0aW9uIGJ1aWxkUG9pbnRTbmFwRnVuYyhzbmFwLCBtaW5YLCBtYXhYLCBtaW5ZLCBtYXhZLCByYWRpdXMsIGZhY3Rvcikge1xuICAgICAgcmFkaXVzID0gcmFkaXVzICYmIHJhZGl1cyA8IF9iaWdOdW0gPyByYWRpdXMgKiByYWRpdXMgOiBfYmlnTnVtOyAvL3NvIHdlIGRvbid0IGhhdmUgdG8gTWF0aC5zcXJ0KCkgaW4gdGhlIGZ1bmN0aW9ucy4gUGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uLlxuXG4gICAgICBpZiAoX2lzRnVuY3Rpb24oc25hcCkpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwb2ludCkge1xuICAgICAgICAgIHZhciBlZGdlVG9sZXJhbmNlID0gIXNlbGYuaXNQcmVzc2VkID8gMSA6IDEgLSBzZWxmLmVkZ2VSZXNpc3RhbmNlLFxuICAgICAgICAgICAgICB4ID0gcG9pbnQueCxcbiAgICAgICAgICAgICAgeSA9IHBvaW50LnksXG4gICAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgICAgZHgsXG4gICAgICAgICAgICAgIGR5OyAvL2lmIHdlJ3JlIHR3ZWVuaW5nLCBkaXNhYmxlIHRoZSBlZGdlVG9sZXJhbmNlIGJlY2F1c2UgaXQncyBhbHJlYWR5IGZhY3RvcmVkIGludG8gdGhlIHR3ZWVuaW5nIHZhbHVlcyAod2UgZG9uJ3Qgd2FudCB0byBhcHBseSBpdCBtdWx0aXBsZSB0aW1lcylcblxuICAgICAgICAgIHBvaW50LnggPSB4ID0geCA+IG1heFggPyBtYXhYICsgKHggLSBtYXhYKSAqIGVkZ2VUb2xlcmFuY2UgOiB4IDwgbWluWCA/IG1pblggKyAoeCAtIG1pblgpICogZWRnZVRvbGVyYW5jZSA6IHg7XG4gICAgICAgICAgcG9pbnQueSA9IHkgPSB5ID4gbWF4WSA/IG1heFkgKyAoeSAtIG1heFkpICogZWRnZVRvbGVyYW5jZSA6IHkgPCBtaW5ZID8gbWluWSArICh5IC0gbWluWSkgKiBlZGdlVG9sZXJhbmNlIDogeTtcbiAgICAgICAgICByZXN1bHQgPSBzbmFwLmNhbGwoc2VsZiwgcG9pbnQpO1xuXG4gICAgICAgICAgaWYgKHJlc3VsdCAhPT0gcG9pbnQpIHtcbiAgICAgICAgICAgIHBvaW50LnggPSByZXN1bHQueDtcbiAgICAgICAgICAgIHBvaW50LnkgPSByZXN1bHQueTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZmFjdG9yICE9PSAxKSB7XG4gICAgICAgICAgICBwb2ludC54ICo9IGZhY3RvcjtcbiAgICAgICAgICAgIHBvaW50LnkgKj0gZmFjdG9yO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChyYWRpdXMgPCBfYmlnTnVtKSB7XG4gICAgICAgICAgICBkeCA9IHBvaW50LnggLSB4O1xuICAgICAgICAgICAgZHkgPSBwb2ludC55IC0geTtcblxuICAgICAgICAgICAgaWYgKGR4ICogZHggKyBkeSAqIGR5ID4gcmFkaXVzKSB7XG4gICAgICAgICAgICAgIHBvaW50LnggPSB4O1xuICAgICAgICAgICAgICBwb2ludC55ID0geTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcG9pbnQ7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChfaXNBcnJheShzbmFwKSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICB2YXIgaSA9IHNuYXAubGVuZ3RoLFxuICAgICAgICAgICAgICBjbG9zZXN0ID0gMCxcbiAgICAgICAgICAgICAgbWluRGlzdCA9IF9iaWdOdW0sXG4gICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgIHksXG4gICAgICAgICAgICAgIHBvaW50LFxuICAgICAgICAgICAgICBkaXN0O1xuXG4gICAgICAgICAgd2hpbGUgKC0taSA+IC0xKSB7XG4gICAgICAgICAgICBwb2ludCA9IHNuYXBbaV07XG4gICAgICAgICAgICB4ID0gcG9pbnQueCAtIHAueDtcbiAgICAgICAgICAgIHkgPSBwb2ludC55IC0gcC55O1xuICAgICAgICAgICAgZGlzdCA9IHggKiB4ICsgeSAqIHk7XG5cbiAgICAgICAgICAgIGlmIChkaXN0IDwgbWluRGlzdCkge1xuICAgICAgICAgICAgICBjbG9zZXN0ID0gaTtcbiAgICAgICAgICAgICAgbWluRGlzdCA9IGRpc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG1pbkRpc3QgPD0gcmFkaXVzID8gc25hcFtjbG9zZXN0XSA6IHA7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAobikge1xuICAgICAgICByZXR1cm4gbjtcbiAgICAgIH07XG4gICAgfSxcbiAgICAgICAgY2FsY3VsYXRlQm91bmRzID0gZnVuY3Rpb24gY2FsY3VsYXRlQm91bmRzKCkge1xuICAgICAgdmFyIGJvdW5kcywgdGFyZ2V0Qm91bmRzLCBzbmFwLCBzbmFwSXNSYXc7XG4gICAgICBoYXNCb3VuZHMgPSBmYWxzZTtcblxuICAgICAgaWYgKHNjcm9sbFByb3h5KSB7XG4gICAgICAgIHNjcm9sbFByb3h5LmNhbGlicmF0ZSgpO1xuICAgICAgICBzZWxmLm1pblggPSBtaW5YID0gLXNjcm9sbFByb3h5Lm1heFNjcm9sbExlZnQoKTtcbiAgICAgICAgc2VsZi5taW5ZID0gbWluWSA9IC1zY3JvbGxQcm94eS5tYXhTY3JvbGxUb3AoKTtcbiAgICAgICAgc2VsZi5tYXhYID0gbWF4WCA9IHNlbGYubWF4WSA9IG1heFkgPSAwO1xuICAgICAgICBoYXNCb3VuZHMgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICghIXZhcnMuYm91bmRzKSB7XG4gICAgICAgIGJvdW5kcyA9IF9nZXRCb3VuZHModmFycy5ib3VuZHMsIHRhcmdldC5wYXJlbnROb2RlKTsgLy9jb3VsZCBiZSBhIHNlbGVjdG9yL2pRdWVyeSBvYmplY3Qgb3IgYSBET00gZWxlbWVudCBvciBhIGdlbmVyaWMgb2JqZWN0IGxpa2Uge3RvcDowLCBsZWZ0OjEwMCwgd2lkdGg6MTAwMCwgaGVpZ2h0OjgwMH0gb3Ige21pblg6MTAwLCBtYXhYOjExMDAsIG1pblk6MCwgbWF4WTo4MDB9XG5cbiAgICAgICAgaWYgKHJvdGF0aW9uTW9kZSkge1xuICAgICAgICAgIHNlbGYubWluWCA9IG1pblggPSBib3VuZHMubGVmdDtcbiAgICAgICAgICBzZWxmLm1heFggPSBtYXhYID0gYm91bmRzLmxlZnQgKyBib3VuZHMud2lkdGg7XG4gICAgICAgICAgc2VsZi5taW5ZID0gbWluWSA9IHNlbGYubWF4WSA9IG1heFkgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKCFfaXNVbmRlZmluZWQodmFycy5ib3VuZHMubWF4WCkgfHwgIV9pc1VuZGVmaW5lZCh2YXJzLmJvdW5kcy5tYXhZKSkge1xuICAgICAgICAgIGJvdW5kcyA9IHZhcnMuYm91bmRzO1xuICAgICAgICAgIHNlbGYubWluWCA9IG1pblggPSBib3VuZHMubWluWDtcbiAgICAgICAgICBzZWxmLm1pblkgPSBtaW5ZID0gYm91bmRzLm1pblk7XG4gICAgICAgICAgc2VsZi5tYXhYID0gbWF4WCA9IGJvdW5kcy5tYXhYO1xuICAgICAgICAgIHNlbGYubWF4WSA9IG1heFkgPSBib3VuZHMubWF4WTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRCb3VuZHMgPSBfZ2V0Qm91bmRzKHRhcmdldCwgdGFyZ2V0LnBhcmVudE5vZGUpO1xuICAgICAgICAgIHNlbGYubWluWCA9IG1pblggPSBNYXRoLnJvdW5kKGdldFByb3BBc051bSh4UHJvcCwgXCJweFwiKSArIGJvdW5kcy5sZWZ0IC0gdGFyZ2V0Qm91bmRzLmxlZnQpO1xuICAgICAgICAgIHNlbGYubWluWSA9IG1pblkgPSBNYXRoLnJvdW5kKGdldFByb3BBc051bSh5UHJvcCwgXCJweFwiKSArIGJvdW5kcy50b3AgLSB0YXJnZXRCb3VuZHMudG9wKTtcbiAgICAgICAgICBzZWxmLm1heFggPSBtYXhYID0gTWF0aC5yb3VuZChtaW5YICsgKGJvdW5kcy53aWR0aCAtIHRhcmdldEJvdW5kcy53aWR0aCkpO1xuICAgICAgICAgIHNlbGYubWF4WSA9IG1heFkgPSBNYXRoLnJvdW5kKG1pblkgKyAoYm91bmRzLmhlaWdodCAtIHRhcmdldEJvdW5kcy5oZWlnaHQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtaW5YID4gbWF4WCkge1xuICAgICAgICAgIHNlbGYubWluWCA9IG1heFg7XG4gICAgICAgICAgc2VsZi5tYXhYID0gbWF4WCA9IG1pblg7XG4gICAgICAgICAgbWluWCA9IHNlbGYubWluWDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtaW5ZID4gbWF4WSkge1xuICAgICAgICAgIHNlbGYubWluWSA9IG1heFk7XG4gICAgICAgICAgc2VsZi5tYXhZID0gbWF4WSA9IG1pblk7XG4gICAgICAgICAgbWluWSA9IHNlbGYubWluWTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyb3RhdGlvbk1vZGUpIHtcbiAgICAgICAgICBzZWxmLm1pblJvdGF0aW9uID0gbWluWDtcbiAgICAgICAgICBzZWxmLm1heFJvdGF0aW9uID0gbWF4WDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhc0JvdW5kcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YXJzLmxpdmVTbmFwKSB7XG4gICAgICAgIHNuYXAgPSB2YXJzLmxpdmVTbmFwID09PSB0cnVlID8gdmFycy5zbmFwIHx8IHt9IDogdmFycy5saXZlU25hcDtcbiAgICAgICAgc25hcElzUmF3ID0gX2lzQXJyYXkoc25hcCkgfHwgX2lzRnVuY3Rpb24oc25hcCk7XG5cbiAgICAgICAgaWYgKHJvdGF0aW9uTW9kZSkge1xuICAgICAgICAgIHNuYXBYID0gYnVpbGRTbmFwRnVuYyhzbmFwSXNSYXcgPyBzbmFwIDogc25hcC5yb3RhdGlvbiwgbWluWCwgbWF4WCwgMSk7XG4gICAgICAgICAgc25hcFkgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChzbmFwLnBvaW50cykge1xuICAgICAgICAgICAgc25hcFhZID0gYnVpbGRQb2ludFNuYXBGdW5jKHNuYXBJc1JhdyA/IHNuYXAgOiBzbmFwLnBvaW50cywgbWluWCwgbWF4WCwgbWluWSwgbWF4WSwgc25hcC5yYWRpdXMsIHNjcm9sbFByb3h5ID8gLTEgOiAxKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGFsbG93WCkge1xuICAgICAgICAgICAgICBzbmFwWCA9IGJ1aWxkU25hcEZ1bmMoc25hcElzUmF3ID8gc25hcCA6IHNuYXAueCB8fCBzbmFwLmxlZnQgfHwgc25hcC5zY3JvbGxMZWZ0LCBtaW5YLCBtYXhYLCBzY3JvbGxQcm94eSA/IC0xIDogMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhbGxvd1kpIHtcbiAgICAgICAgICAgICAgc25hcFkgPSBidWlsZFNuYXBGdW5jKHNuYXBJc1JhdyA/IHNuYXAgOiBzbmFwLnkgfHwgc25hcC50b3AgfHwgc25hcC5zY3JvbGxUb3AsIG1pblksIG1heFksIHNjcm9sbFByb3h5ID8gLTEgOiAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgICAgICBvblRocm93Q29tcGxldGUgPSBmdW5jdGlvbiBvblRocm93Q29tcGxldGUoKSB7XG4gICAgICBzZWxmLmlzVGhyb3dpbmcgPSBmYWxzZTtcblxuICAgICAgX2Rpc3BhdGNoRXZlbnQoc2VsZiwgXCJ0aHJvd2NvbXBsZXRlXCIsIFwib25UaHJvd0NvbXBsZXRlXCIpO1xuICAgIH0sXG4gICAgICAgIG9uVGhyb3dJbnRlcnJ1cHQgPSBmdW5jdGlvbiBvblRocm93SW50ZXJydXB0KCkge1xuICAgICAgc2VsZi5pc1Rocm93aW5nID0gZmFsc2U7XG4gICAgfSxcbiAgICAgICAgYW5pbWF0ZSA9IGZ1bmN0aW9uIGFuaW1hdGUoaW5lcnRpYSwgZm9yY2VaZXJvVmVsb2NpdHkpIHtcbiAgICAgIHZhciBzbmFwLCBzbmFwSXNSYXcsIHR3ZWVuLCBvdmVyc2hvb3RUb2xlcmFuY2U7XG5cbiAgICAgIGlmIChpbmVydGlhICYmIEluZXJ0aWFQbHVnaW4pIHtcbiAgICAgICAgaWYgKGluZXJ0aWEgPT09IHRydWUpIHtcbiAgICAgICAgICBzbmFwID0gdmFycy5zbmFwIHx8IHZhcnMubGl2ZVNuYXAgfHwge307XG4gICAgICAgICAgc25hcElzUmF3ID0gX2lzQXJyYXkoc25hcCkgfHwgX2lzRnVuY3Rpb24oc25hcCk7XG4gICAgICAgICAgaW5lcnRpYSA9IHtcbiAgICAgICAgICAgIHJlc2lzdGFuY2U6ICh2YXJzLnRocm93UmVzaXN0YW5jZSB8fCB2YXJzLnJlc2lzdGFuY2UgfHwgMTAwMCkgLyAocm90YXRpb25Nb2RlID8gMTAgOiAxKVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAocm90YXRpb25Nb2RlKSB7XG4gICAgICAgICAgICBpbmVydGlhLnJvdGF0aW9uID0gX3BhcnNlSW5lcnRpYShzZWxmLCBzbmFwSXNSYXcgPyBzbmFwIDogc25hcC5yb3RhdGlvbiwgbWF4WCwgbWluWCwgMSwgZm9yY2VaZXJvVmVsb2NpdHkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYWxsb3dYKSB7XG4gICAgICAgICAgICAgIGluZXJ0aWFbeFByb3BdID0gX3BhcnNlSW5lcnRpYShzZWxmLCBzbmFwSXNSYXcgPyBzbmFwIDogc25hcC5wb2ludHMgfHwgc25hcC54IHx8IHNuYXAubGVmdCwgbWF4WCwgbWluWCwgc2Nyb2xsUHJveHkgPyAtMSA6IDEsIGZvcmNlWmVyb1ZlbG9jaXR5IHx8IHNlbGYubG9ja2VkQXhpcyA9PT0gXCJ4XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWxsb3dZKSB7XG4gICAgICAgICAgICAgIGluZXJ0aWFbeVByb3BdID0gX3BhcnNlSW5lcnRpYShzZWxmLCBzbmFwSXNSYXcgPyBzbmFwIDogc25hcC5wb2ludHMgfHwgc25hcC55IHx8IHNuYXAudG9wLCBtYXhZLCBtaW5ZLCBzY3JvbGxQcm94eSA/IC0xIDogMSwgZm9yY2VaZXJvVmVsb2NpdHkgfHwgc2VsZi5sb2NrZWRBeGlzID09PSBcInlcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzbmFwLnBvaW50cyB8fCBfaXNBcnJheShzbmFwKSAmJiBfaXNPYmplY3Qoc25hcFswXSkpIHtcbiAgICAgICAgICAgICAgaW5lcnRpYS5saW5rZWRQcm9wcyA9IHhQcm9wICsgXCIsXCIgKyB5UHJvcDtcbiAgICAgICAgICAgICAgaW5lcnRpYS5yYWRpdXMgPSBzbmFwLnJhZGl1czsgLy9ub3RlOiB3ZSBhbHNvIGRpc2FibGUgbGl2ZVNuYXBwaW5nIHdoaWxlIHRocm93aW5nIGlmIHRoZXJlJ3MgYSBcInJhZGl1c1wiIGRlZmluZWQsIG90aGVyd2lzZSBpdCBsb29rcyB3ZWlyZCB0byBoYXZlIHRoZSBpdGVtIHRocm93biBwYXN0IGEgc25hcHBpbmcgcG9pbnQgYnV0IGxpdmUtc25hcHBpbmcgbWlkLXR3ZWVuLiBXZSBkbyB0aGlzIGJ5IGFsdGVyaW5nIHRoZSBvblVwZGF0ZVBhcmFtcyBzbyB0aGF0IFwic2tpcFNuYXBcIiBwYXJhbWV0ZXIgaXMgdHJ1ZSBmb3Igc3luY1hZLlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuaXNUaHJvd2luZyA9IHRydWU7XG4gICAgICAgIG92ZXJzaG9vdFRvbGVyYW5jZSA9ICFpc05hTih2YXJzLm92ZXJzaG9vdFRvbGVyYW5jZSkgPyB2YXJzLm92ZXJzaG9vdFRvbGVyYW5jZSA6IHZhcnMuZWRnZVJlc2lzdGFuY2UgPT09IDEgPyAwIDogMSAtIHNlbGYuZWRnZVJlc2lzdGFuY2UgKyAwLjI7XG5cbiAgICAgICAgaWYgKCFpbmVydGlhLmR1cmF0aW9uKSB7XG4gICAgICAgICAgaW5lcnRpYS5kdXJhdGlvbiA9IHtcbiAgICAgICAgICAgIG1heDogTWF0aC5tYXgodmFycy5taW5EdXJhdGlvbiB8fCAwLCBcIm1heER1cmF0aW9uXCIgaW4gdmFycyA/IHZhcnMubWF4RHVyYXRpb24gOiAyKSxcbiAgICAgICAgICAgIG1pbjogIWlzTmFOKHZhcnMubWluRHVyYXRpb24pID8gdmFycy5taW5EdXJhdGlvbiA6IG92ZXJzaG9vdFRvbGVyYW5jZSA9PT0gMCB8fCBfaXNPYmplY3QoaW5lcnRpYSkgJiYgaW5lcnRpYS5yZXNpc3RhbmNlID4gMTAwMCA/IDAgOiAwLjUsXG4gICAgICAgICAgICBvdmVyc2hvb3Q6IG92ZXJzaG9vdFRvbGVyYW5jZVxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLnR3ZWVuID0gdHdlZW4gPSBnc2FwLnRvKHNjcm9sbFByb3h5IHx8IHRhcmdldCwge1xuICAgICAgICAgIGluZXJ0aWE6IGluZXJ0aWEsXG4gICAgICAgICAgZGF0YTogXCJfZHJhZ2dhYmxlXCIsXG4gICAgICAgICAgb25Db21wbGV0ZTogb25UaHJvd0NvbXBsZXRlLFxuICAgICAgICAgIG9uSW50ZXJydXB0OiBvblRocm93SW50ZXJydXB0LFxuICAgICAgICAgIG9uVXBkYXRlOiB2YXJzLmZhc3RNb2RlID8gX2Rpc3BhdGNoRXZlbnQgOiBzeW5jWFksXG4gICAgICAgICAgb25VcGRhdGVQYXJhbXM6IHZhcnMuZmFzdE1vZGUgPyBbc2VsZiwgXCJvbnRocm93dXBkYXRlXCIsIFwib25UaHJvd1VwZGF0ZVwiXSA6IHNuYXAgJiYgc25hcC5yYWRpdXMgPyBbZmFsc2UsIHRydWVdIDogW11cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCF2YXJzLmZhc3RNb2RlKSB7XG4gICAgICAgICAgaWYgKHNjcm9sbFByb3h5KSB7XG4gICAgICAgICAgICBzY3JvbGxQcm94eS5fc2tpcCA9IHRydWU7IC8vIE1pY3Jvc29mdCBicm93c2VycyBoYXZlIGEgYnVnIHRoYXQgY2F1c2VzIHRoZW0gdG8gYnJpZWZseSByZW5kZXIgdGhlIHBvc2l0aW9uIGluY29ycmVjdGx5IChpdCBmbGFzaGVzIHRvIHRoZSBlbmQgc3RhdGUgd2hlbiB3ZSBzZWVrKCkgdGhlIHR3ZWVuIGV2ZW4gdGhvdWdoIHdlIGp1bXAgcmlnaHQgYmFjayB0byB0aGUgY3VycmVudCBwb3NpdGlvbiwgYW5kIHRoaXMgb25seSBzZWVtcyB0byBoYXBwZW4gd2hlbiB3ZSdyZSBhZmZlY3RpbmcgYm90aCB0b3AgYW5kIGxlZnQpLCBzbyB3ZSBzZXQgYSBfc3VzcGVuZFRyYW5zZm9ybXMgZmxhZyB0byBwcmV2ZW50IGl0IGZyb20gYWN0dWFsbHkgYXBwbHlpbmcgdGhlIHZhbHVlcyBpbiB0aGUgU2Nyb2xsUHJveHkuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdHdlZW4ucmVuZGVyKDFlOSwgdHJ1ZSwgdHJ1ZSk7IC8vIGZvcmNlIHRvIHRoZSBlbmQuIFJlbWVtYmVyLCB0aGUgZHVyYXRpb24gd2lsbCBsaWtlbHkgY2hhbmdlIHVwb24gaW5pdHRpbmcgYmVjYXVzZSB0aGF0J3Mgd2hlbiBJbmVydGlhUGx1Z2luIGNhbGN1bGF0ZXMgaXQuXG5cbiAgICAgICAgICBzeW5jWFkodHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgc2VsZi5lbmRYID0gc2VsZi54O1xuICAgICAgICAgIHNlbGYuZW5kWSA9IHNlbGYueTtcblxuICAgICAgICAgIGlmIChyb3RhdGlvbk1vZGUpIHtcbiAgICAgICAgICAgIHNlbGYuZW5kUm90YXRpb24gPSBzZWxmLng7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdHdlZW4ucGxheSgwKTtcbiAgICAgICAgICBzeW5jWFkodHJ1ZSwgdHJ1ZSk7XG5cbiAgICAgICAgICBpZiAoc2Nyb2xsUHJveHkpIHtcbiAgICAgICAgICAgIHNjcm9sbFByb3h5Ll9za2lwID0gZmFsc2U7IC8vTWljcm9zb2Z0IGJyb3dzZXJzIGhhdmUgYSBidWcgdGhhdCBjYXVzZXMgdGhlbSB0byBicmllZmx5IHJlbmRlciB0aGUgcG9zaXRpb24gaW5jb3JyZWN0bHkgKGl0IGZsYXNoZXMgdG8gdGhlIGVuZCBzdGF0ZSB3aGVuIHdlIHNlZWsoKSB0aGUgdHdlZW4gZXZlbiB0aG91Z2ggd2UganVtcCByaWdodCBiYWNrIHRvIHRoZSBjdXJyZW50IHBvc2l0aW9uLCBhbmQgdGhpcyBvbmx5IHNlZW1zIHRvIGhhcHBlbiB3aGVuIHdlJ3JlIGFmZmVjdGluZyBib3RoIHRvcCBhbmQgbGVmdCksIHNvIHdlIHNldCBhIF9zdXNwZW5kVHJhbnNmb3JtcyBmbGFnIHRvIHByZXZlbnQgaXQgZnJvbSBhY3R1YWxseSBhcHBseWluZyB0aGUgdmFsdWVzIGluIHRoZSBTY3JvbGxQcm94eS5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaGFzQm91bmRzKSB7XG4gICAgICAgIHNlbGYuYXBwbHlCb3VuZHMoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgICAgICB1cGRhdGVNYXRyaXggPSBmdW5jdGlvbiB1cGRhdGVNYXRyaXgoc2hpZnRTdGFydCkge1xuICAgICAgdmFyIHN0YXJ0ID0gbWF0cml4LFxuICAgICAgICAgIHA7XG4gICAgICBtYXRyaXggPSBnZXRHbG9iYWxNYXRyaXgodGFyZ2V0LnBhcmVudE5vZGUsIHRydWUpO1xuXG4gICAgICBpZiAoc2hpZnRTdGFydCAmJiBzZWxmLmlzUHJlc3NlZCAmJiAhbWF0cml4LmVxdWFscyhzdGFydCB8fCBuZXcgTWF0cml4MkQoKSkpIHtcbiAgICAgICAgLy9pZiB0aGUgbWF0cml4IGNoYW5nZXMgV0hJTEUgdGhlIGVsZW1lbnQgaXMgcHJlc3NlZCwgd2UgbXVzdCBhZGp1c3QgdGhlIHN0YXJ0UG9pbnRlclggYW5kIHN0YXJ0UG9pbnRlclkgYWNjb3JkaW5nbHksIHNvIHdlIGludmVydCB0aGUgb3JpZ2luYWwgbWF0cml4IGFuZCBmaWd1cmUgb3V0IHdoZXJlIHRoZSBwb2ludGVyWCBhbmQgcG9pbnRlclkgd2VyZSBpbiB0aGUgZ2xvYmFsIHNwYWNlLCB0aGVuIGFwcGx5IHRoZSBuZXcgbWF0cml4IHRvIGdldCB0aGUgdXBkYXRlZCBjb29yZGluYXRlcy5cbiAgICAgICAgcCA9IHN0YXJ0LmludmVyc2UoKS5hcHBseSh7XG4gICAgICAgICAgeDogc3RhcnRQb2ludGVyWCxcbiAgICAgICAgICB5OiBzdGFydFBvaW50ZXJZXG4gICAgICAgIH0pO1xuICAgICAgICBtYXRyaXguYXBwbHkocCwgcCk7XG4gICAgICAgIHN0YXJ0UG9pbnRlclggPSBwLng7XG4gICAgICAgIHN0YXJ0UG9pbnRlclkgPSBwLnk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXRyaXguZXF1YWxzKF9pZGVudGl0eU1hdHJpeCkpIHtcbiAgICAgICAgLy9pZiB0aGVyZSBhcmUgbm8gdHJhbnNmb3Jtcywgd2UgY2FuIG9wdGltaXplIHBlcmZvcm1hbmNlIGJ5IG5vdCBmYWN0b3JpbmcgaW4gdGhlIG1hdHJpeFxuICAgICAgICBtYXRyaXggPSBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gICAgICAgIHJlY29yZFN0YXJ0UG9zaXRpb25zID0gZnVuY3Rpb24gcmVjb3JkU3RhcnRQb3NpdGlvbnMoKSB7XG4gICAgICB2YXIgZWRnZVRvbGVyYW5jZSA9IDEgLSBzZWxmLmVkZ2VSZXNpc3RhbmNlLFxuICAgICAgICAgIG9mZnNldFggPSBpc0ZpeGVkID8gX2dldERvY1Njcm9sbExlZnQob3duZXJEb2MpIDogMCxcbiAgICAgICAgICBvZmZzZXRZID0gaXNGaXhlZCA/IF9nZXREb2NTY3JvbGxUb3Aob3duZXJEb2MpIDogMCxcbiAgICAgICAgICBwYXJzZWRPcmlnaW4sXG4gICAgICAgICAgeCxcbiAgICAgICAgICB5O1xuICAgICAgdXBkYXRlTWF0cml4KGZhbHNlKTtcbiAgICAgIF9wb2ludDEueCA9IHNlbGYucG9pbnRlclggLSBvZmZzZXRYO1xuICAgICAgX3BvaW50MS55ID0gc2VsZi5wb2ludGVyWSAtIG9mZnNldFk7XG4gICAgICBtYXRyaXggJiYgbWF0cml4LmFwcGx5KF9wb2ludDEsIF9wb2ludDEpO1xuICAgICAgc3RhcnRQb2ludGVyWCA9IF9wb2ludDEueDsgLy90cmFuc2xhdGUgdG8gbG9jYWwgY29vcmRpbmF0ZSBzeXN0ZW1cblxuICAgICAgc3RhcnRQb2ludGVyWSA9IF9wb2ludDEueTtcblxuICAgICAgaWYgKGRpcnR5KSB7XG4gICAgICAgIHNldFBvaW50ZXJQb3NpdGlvbihzZWxmLnBvaW50ZXJYLCBzZWxmLnBvaW50ZXJZKTtcbiAgICAgICAgcmVuZGVyKHRydWUpO1xuICAgICAgfVxuXG4gICAgICBpbm5lck1hdHJpeCA9IGdldEdsb2JhbE1hdHJpeCh0YXJnZXQpO1xuXG4gICAgICBpZiAoc2Nyb2xsUHJveHkpIHtcbiAgICAgICAgY2FsY3VsYXRlQm91bmRzKCk7XG4gICAgICAgIHN0YXJ0RWxlbWVudFkgPSBzY3JvbGxQcm94eS50b3AoKTtcbiAgICAgICAgc3RhcnRFbGVtZW50WCA9IHNjcm9sbFByb3h5LmxlZnQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vaWYgdGhlIGVsZW1lbnQgaXMgaW4gdGhlIHByb2Nlc3Mgb2YgdHdlZW5pbmcsIGRvbid0IGZvcmNlIHNuYXBwaW5nIHRvIG9jY3VyIGJlY2F1c2UgaXQgY291bGQgbWFrZSBpdCBqdW1wLiBJbWFnaW5lIHRoZSB1c2VyIHRocm93aW5nLCB0aGVuIGJlZm9yZSBpdCdzIGRvbmUsIGNsaWNraW5nIG9uIHRoZSBlbGVtZW50IGluIGl0cyBpbmJldHdlZW4gc3RhdGUuXG4gICAgICAgIGlmIChpc1R3ZWVuaW5nKCkpIHtcbiAgICAgICAgICBzeW5jWFkodHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgY2FsY3VsYXRlQm91bmRzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5hcHBseUJvdW5kcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJvdGF0aW9uTW9kZSkge1xuICAgICAgICAgIHBhcnNlZE9yaWdpbiA9IHRhcmdldC5vd25lclNWR0VsZW1lbnQgPyBbZ3NDYWNoZS54T3JpZ2luIC0gdGFyZ2V0LmdldEJCb3goKS54LCBnc0NhY2hlLnlPcmlnaW4gLSB0YXJnZXQuZ2V0QkJveCgpLnldIDogKF9nZXRDb21wdXRlZFN0eWxlKHRhcmdldClbX3RyYW5zZm9ybU9yaWdpblByb3BdIHx8IFwiMCAwXCIpLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgICByb3RhdGlvbk9yaWdpbiA9IHNlbGYucm90YXRpb25PcmlnaW4gPSBnZXRHbG9iYWxNYXRyaXgodGFyZ2V0KS5hcHBseSh7XG4gICAgICAgICAgICB4OiBwYXJzZUZsb2F0KHBhcnNlZE9yaWdpblswXSkgfHwgMCxcbiAgICAgICAgICAgIHk6IHBhcnNlRmxvYXQocGFyc2VkT3JpZ2luWzFdKSB8fCAwXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc3luY1hZKHRydWUsIHRydWUpO1xuICAgICAgICAgIHggPSBzZWxmLnBvaW50ZXJYIC0gcm90YXRpb25PcmlnaW4ueCAtIG9mZnNldFg7XG4gICAgICAgICAgeSA9IHJvdGF0aW9uT3JpZ2luLnkgLSBzZWxmLnBvaW50ZXJZICsgb2Zmc2V0WTtcbiAgICAgICAgICBzdGFydEVsZW1lbnRYID0gc2VsZi54OyAvL3N0YXJ0aW5nIHJvdGF0aW9uICh4IGFsd2F5cyByZWZlcnMgdG8gcm90YXRpb24gaW4gdHlwZTpcInJvdGF0aW9uXCIsIG1lYXN1cmVkIGluIGRlZ3JlZXMpXG5cbiAgICAgICAgICBzdGFydEVsZW1lbnRZID0gc2VsZi55ID0gTWF0aC5hdGFuMih5LCB4KSAqIF9SQUQyREVHO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vcGFyZW50ID0gIWlzRml4ZWQgJiYgdGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgICAgLy9zdGFydFNjcm9sbFRvcCA9IHBhcmVudCA/IHBhcmVudC5zY3JvbGxUb3AgfHwgMCA6IDA7XG4gICAgICAgICAgLy9zdGFydFNjcm9sbExlZnQgPSBwYXJlbnQgPyBwYXJlbnQuc2Nyb2xsTGVmdCB8fCAwIDogMDtcbiAgICAgICAgICBzdGFydEVsZW1lbnRZID0gZ2V0UHJvcEFzTnVtKHlQcm9wLCBcInB4XCIpOyAvL3JlY29yZCB0aGUgc3RhcnRpbmcgdG9wIGFuZCBsZWZ0IHZhbHVlcyBzbyB0aGF0IHdlIGNhbiBqdXN0IGFkZCB0aGUgbW91c2UncyBtb3ZlbWVudCB0byB0aGVtIGxhdGVyLlxuXG4gICAgICAgICAgc3RhcnRFbGVtZW50WCA9IGdldFByb3BBc051bSh4UHJvcCwgXCJweFwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaGFzQm91bmRzICYmIGVkZ2VUb2xlcmFuY2UpIHtcbiAgICAgICAgaWYgKHN0YXJ0RWxlbWVudFggPiBtYXhYKSB7XG4gICAgICAgICAgc3RhcnRFbGVtZW50WCA9IG1heFggKyAoc3RhcnRFbGVtZW50WCAtIG1heFgpIC8gZWRnZVRvbGVyYW5jZTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGFydEVsZW1lbnRYIDwgbWluWCkge1xuICAgICAgICAgIHN0YXJ0RWxlbWVudFggPSBtaW5YIC0gKG1pblggLSBzdGFydEVsZW1lbnRYKSAvIGVkZ2VUb2xlcmFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJvdGF0aW9uTW9kZSkge1xuICAgICAgICAgIGlmIChzdGFydEVsZW1lbnRZID4gbWF4WSkge1xuICAgICAgICAgICAgc3RhcnRFbGVtZW50WSA9IG1heFkgKyAoc3RhcnRFbGVtZW50WSAtIG1heFkpIC8gZWRnZVRvbGVyYW5jZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0YXJ0RWxlbWVudFkgPCBtaW5ZKSB7XG4gICAgICAgICAgICBzdGFydEVsZW1lbnRZID0gbWluWSAtIChtaW5ZIC0gc3RhcnRFbGVtZW50WSkgLyBlZGdlVG9sZXJhbmNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzZWxmLnN0YXJ0WCA9IHN0YXJ0RWxlbWVudFggPSBfcm91bmQoc3RhcnRFbGVtZW50WCk7XG4gICAgICBzZWxmLnN0YXJ0WSA9IHN0YXJ0RWxlbWVudFkgPSBfcm91bmQoc3RhcnRFbGVtZW50WSk7XG4gICAgfSxcbiAgICAgICAgaXNUd2VlbmluZyA9IGZ1bmN0aW9uIGlzVHdlZW5pbmcoKSB7XG4gICAgICByZXR1cm4gc2VsZi50d2VlbiAmJiBzZWxmLnR3ZWVuLmlzQWN0aXZlKCk7XG4gICAgfSxcbiAgICAgICAgcmVtb3ZlUGxhY2Vob2xkZXIgPSBmdW5jdGlvbiByZW1vdmVQbGFjZWhvbGRlcigpIHtcbiAgICAgIGlmIChfcGxhY2Vob2xkZXJEaXYucGFyZW50Tm9kZSAmJiAhaXNUd2VlbmluZygpICYmICFzZWxmLmlzRHJhZ2dpbmcpIHtcbiAgICAgICAgLy9fcGxhY2Vob2xkZXJEaXYganVzdCBwcm9wcyBvcGVuIGF1dG8tc2Nyb2xsaW5nIGNvbnRhaW5lcnMgc28gdGhleSBkb24ndCBjb2xsYXBzZSBhcyB0aGUgdXNlciBkcmFncyBsZWZ0L3VwLiBXZSByZW1vdmUgaXQgYWZ0ZXIgZHJhZ2dpbmcgKGFuZCB0aHJvd2luZywgaWYgbmVjZXNzYXJ5KSBmaW5pc2hlcy5cbiAgICAgICAgX3BsYWNlaG9sZGVyRGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoX3BsYWNlaG9sZGVyRGl2KTtcbiAgICAgIH1cbiAgICB9LFxuICAgICAgICAvL2NhbGxlZCB3aGVuIHRoZSBtb3VzZSBpcyBwcmVzc2VkIChvciB0b3VjaCBzdGFydHMpXG4gICAgb25QcmVzcyA9IGZ1bmN0aW9uIG9uUHJlc3MoZSwgZm9yY2UpIHtcbiAgICAgIHZhciBpO1xuXG4gICAgICBpZiAoIWVuYWJsZWQgfHwgc2VsZi5pc1ByZXNzZWQgfHwgIWUgfHwgKGUudHlwZSA9PT0gXCJtb3VzZWRvd25cIiB8fCBlLnR5cGUgPT09IFwicG9pbnRlcmRvd25cIikgJiYgIWZvcmNlICYmIF9nZXRUaW1lKCkgLSBjbGlja1RpbWUgPCAzMCAmJiBfdG91Y2hFdmVudExvb2t1cFtzZWxmLnBvaW50ZXJFdmVudC50eXBlXSkge1xuICAgICAgICAvL3doZW4gd2UgRE9OJ1QgcHJldmVudERlZmF1bHQoKSBpbiBvcmRlciB0byBhY2NvbW1vZGF0ZSB0b3VjaC1zY3JvbGxpbmcgYW5kIHRoZSB1c2VyIGp1c3QgdGFwcywgbWFueSBicm93c2VycyBhbHNvIGZpcmUgYSBtb3VzZWRvd24vbW91c2V1cCBzZXF1ZW5jZSBBRlRFUiB0aGUgdG91Y2hzdGFydC90b3VjaGVuZCBzZXF1ZW5jZSwgdGh1cyBpdCdkIHJlc3VsdCBpbiB0d28gcXVpY2sgXCJjbGlja1wiIGV2ZW50cyBiZWluZyBkaXNwYXRjaGVkLiBUaGlzIGxpbmUgc2Vuc2VzIHRoYXQgY29uZGl0aW9uIGFuZCBoYWx0cyBpdCBvbiB0aGUgc3Vic2VxdWVudCBtb3VzZWRvd24uXG4gICAgICAgIGlzUHJldmVudGluZ0RlZmF1bHQgJiYgZSAmJiBlbmFibGVkICYmIF9wcmV2ZW50RGVmYXVsdChlKTsgLy8gaW4gc29tZSBicm93c2Vycywgd2UgbXVzdCBsaXN0ZW4gZm9yIG11bHRpcGxlIGV2ZW50IHR5cGVzIGxpa2UgdG91Y2hzdGFydCwgcG9pbnRlcmRvd24sIG1vdXNlZG93bi4gVGhlIGZpcnN0IHRpbWUgdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQsIHdlIHJlY29yZCB3aGV0aGVyIG9yIG5vdCB3ZSBfcHJldmVudERlZmF1bHQoKSBzbyB0aGF0IG9uIGR1cGxpY2F0ZSBjYWxscywgd2UgY2FuIGRvIHRoZSBzYW1lIGlmIG5lY2Vzc2FyeS5cblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGludGVycnVwdGVkID0gaXNUd2VlbmluZygpO1xuICAgICAgc2VsZi5wb2ludGVyRXZlbnQgPSBlO1xuXG4gICAgICBpZiAoX3RvdWNoRXZlbnRMb29rdXBbZS50eXBlXSkge1xuICAgICAgICAvL25vdGU6IG9uIGlPUywgQk9USCB0b3VjaG1vdmUgYW5kIG1vdXNlbW92ZSBhcmUgZGlzcGF0Y2hlZCwgYnV0IHRoZSBtb3VzZW1vdmUgaGFzIHBhZ2VZIGFuZCBwYWdlWCBvZiAwIHdoaWNoIHdvdWxkIG1lc3MgdXAgdGhlIGNhbGN1bGF0aW9ucyBhbmQgbmVlZGxlc3NseSBodXJ0IHBlcmZvcm1hbmNlLlxuICAgICAgICB0b3VjaEV2ZW50VGFyZ2V0ID0gfmUudHlwZS5pbmRleE9mKFwidG91Y2hcIikgPyBlLmN1cnJlbnRUYXJnZXQgfHwgZS50YXJnZXQgOiBvd25lckRvYzsgLy9wb2ludGVyLWJhc2VkIHRvdWNoZXMgKGZvciBNaWNyb3NvZnQgYnJvd3NlcnMpIGRvbid0IHJlbWFpbiBsb2NrZWQgdG8gdGhlIG9yaWdpbmFsIHRhcmdldCBsaWtlIG90aGVyIGJyb3dzZXJzLCBzbyB3ZSBtdXN0IHVzZSB0aGUgZG9jdW1lbnQgaW5zdGVhZC4gVGhlIGV2ZW50IHR5cGUgd291bGQgYmUgXCJNU1BvaW50ZXJEb3duXCIgb3IgXCJwb2ludGVyZG93blwiLlxuXG4gICAgICAgIF9hZGRMaXN0ZW5lcih0b3VjaEV2ZW50VGFyZ2V0LCBcInRvdWNoZW5kXCIsIG9uUmVsZWFzZSk7XG5cbiAgICAgICAgX2FkZExpc3RlbmVyKHRvdWNoRXZlbnRUYXJnZXQsIFwidG91Y2htb3ZlXCIsIG9uTW92ZSk7IC8vIHBvc3NpYmxlIGZ1dHVyZSBjaGFuZ2UgaWYgUG9pbnRlckV2ZW50cyBhcmUgbW9yZSBzdGFuZGFyZGl6ZWQ6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50L3NldFBvaW50ZXJDYXB0dXJlXG5cblxuICAgICAgICBfYWRkTGlzdGVuZXIodG91Y2hFdmVudFRhcmdldCwgXCJ0b3VjaGNhbmNlbFwiLCBvblJlbGVhc2UpO1xuXG4gICAgICAgIF9hZGRMaXN0ZW5lcihvd25lckRvYywgXCJ0b3VjaHN0YXJ0XCIsIF9vbk11bHRpVG91Y2hEb2N1bWVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b3VjaEV2ZW50VGFyZ2V0ID0gbnVsbDtcblxuICAgICAgICBfYWRkTGlzdGVuZXIob3duZXJEb2MsIFwibW91c2Vtb3ZlXCIsIG9uTW92ZSk7IC8vYXR0YWNoIHRoZXNlIHRvIHRoZSBkb2N1bWVudCBpbnN0ZWFkIG9mIHRoZSBib3ggaXRzZWxmIHNvIHRoYXQgaWYgdGhlIHVzZXIncyBtb3VzZSBtb3ZlcyB0b28gcXVpY2tseSAoYW5kIG9mZiBvZiB0aGUgYm94KSwgdGhpbmdzIHN0aWxsIHdvcmsuXG5cbiAgICAgIH1cblxuICAgICAgdG91Y2hEcmFnQXhpcyA9IG51bGw7XG5cbiAgICAgIGlmICghX3N1cHBvcnRzUG9pbnRlciB8fCAhdG91Y2hFdmVudFRhcmdldCkge1xuICAgICAgICBfYWRkTGlzdGVuZXIob3duZXJEb2MsIFwibW91c2V1cFwiLCBvblJlbGVhc2UpO1xuXG4gICAgICAgIGUgJiYgZS50YXJnZXQgJiYgX2FkZExpc3RlbmVyKGUudGFyZ2V0LCBcIm1vdXNldXBcIiwgb25SZWxlYXNlKTsgLy93ZSBhbHNvIGhhdmUgdG8gbGlzdGVuIGRpcmVjdGx5IG9uIHRoZSBlbGVtZW50IGJlY2F1c2Ugc29tZSBicm93c2VycyBkb24ndCBidWJibGUgdXAgdGhlIGV2ZW50IHRvIHRoZSBfZG9jIG9uIGVsZW1lbnRzIHdpdGggY29udGVudEVkaXRhYmxlPVwidHJ1ZVwiXG4gICAgICB9XG5cbiAgICAgIGlzQ2xpY2tpbmcgPSBpc0NsaWNrYWJsZS5jYWxsKHNlbGYsIGUudGFyZ2V0KSAmJiB2YXJzLmRyYWdDbGlja2FibGVzID09PSBmYWxzZSAmJiAhZm9yY2U7XG5cbiAgICAgIGlmIChpc0NsaWNraW5nKSB7XG4gICAgICAgIF9hZGRMaXN0ZW5lcihlLnRhcmdldCwgXCJjaGFuZ2VcIiwgb25SZWxlYXNlKTsgLy9pbiBzb21lIGJyb3dzZXJzLCB3aGVuIHlvdSBtb3VzZWRvd24gb24gYSA8c2VsZWN0PiBlbGVtZW50LCBubyBtb3VzZXVwIGdldHMgZGlzcGF0Y2hlZCEgU28gd2UgbGlzdGVuIGZvciBhIFwiY2hhbmdlXCIgZXZlbnQgaW5zdGVhZC5cblxuXG4gICAgICAgIF9kaXNwYXRjaEV2ZW50KHNlbGYsIFwicHJlc3NJbml0XCIsIFwib25QcmVzc0luaXRcIik7XG5cbiAgICAgICAgX2Rpc3BhdGNoRXZlbnQoc2VsZiwgXCJwcmVzc1wiLCBcIm9uUHJlc3NcIik7XG5cbiAgICAgICAgX3NldFNlbGVjdGFibGUodHJpZ2dlcnMsIHRydWUpOyAvL2FjY29tbW9kYXRlcyB0aGluZ3MgbGlrZSBpbnB1dHMgYW5kIGVsZW1lbnRzIHdpdGggY29udGVudEVkaXRhYmxlPVwidHJ1ZVwiIChvdGhlcndpc2UgdXNlciBjb3VsZG4ndCBkcmFnIHRvIHNlbGVjdCB0ZXh0KVxuXG5cbiAgICAgICAgaXNQcmV2ZW50aW5nRGVmYXVsdCA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFsbG93TmF0aXZlVG91Y2hTY3JvbGxpbmcgPSAhdG91Y2hFdmVudFRhcmdldCB8fCBhbGxvd1ggPT09IGFsbG93WSB8fCBzZWxmLnZhcnMuYWxsb3dOYXRpdmVUb3VjaFNjcm9sbGluZyA9PT0gZmFsc2UgfHwgc2VsZi52YXJzLmFsbG93Q29udGV4dE1lbnUgJiYgZSAmJiAoZS5jdHJsS2V5IHx8IGUud2hpY2ggPiAyKSA/IGZhbHNlIDogYWxsb3dYID8gXCJ5XCIgOiBcInhcIjsgLy9ub3RlOiBpbiBDaHJvbWUsIHJpZ2h0LWNsaWNraW5nIChmb3IgYSBjb250ZXh0IG1lbnUpIGZpcmVzIG9uUHJlc3MgYW5kIGl0IGRvZXNuJ3QgaGF2ZSB0aGUgZXZlbnQud2hpY2ggc2V0IHByb3Blcmx5LCBzbyB3ZSBtdXN0IGxvb2sgZm9yIGV2ZW50LmN0cmxLZXkuIElmIHRoZSB1c2VyIHdhbnRzIHRvIGFsbG93IGNvbnRleHQgbWVudXMgd2Ugc2hvdWxkIG9mIGNvdXJzZSBzZW5zZSBpdCBoZXJlIGFuZCBub3QgYWxsb3cgbmF0aXZlIHRvdWNoIHNjcm9sbGluZy5cblxuICAgICAgaXNQcmV2ZW50aW5nRGVmYXVsdCA9ICFhbGxvd05hdGl2ZVRvdWNoU2Nyb2xsaW5nICYmICFzZWxmLmFsbG93RXZlbnREZWZhdWx0O1xuXG4gICAgICBpZiAoaXNQcmV2ZW50aW5nRGVmYXVsdCkge1xuICAgICAgICBfcHJldmVudERlZmF1bHQoZSk7XG5cbiAgICAgICAgX2FkZExpc3RlbmVyKF93aW4sIFwidG91Y2hmb3JjZWNoYW5nZVwiLCBfcHJldmVudERlZmF1bHQpOyAvL3dvcmtzIGFyb3VuZCBzYWZhcmkgYnVnOiBodHRwczovL2dyZWVuc29jay5jb20vZm9ydW1zL3RvcGljLzIxNDUwLWRyYWdnYWJsZS1pbi1pZnJhbWUtb24tbW9iaWxlLWlzLWJ1Z2d5L1xuXG4gICAgICB9XG5cbiAgICAgIGlmIChlLmNoYW5nZWRUb3VjaGVzKSB7XG4gICAgICAgIC8vdG91Y2ggZXZlbnRzIHN0b3JlIHRoZSBkYXRhIHNsaWdodGx5IGRpZmZlcmVudGx5XG4gICAgICAgIGUgPSB0b3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgIHRvdWNoSUQgPSBlLmlkZW50aWZpZXI7XG4gICAgICB9IGVsc2UgaWYgKGUucG9pbnRlcklkKSB7XG4gICAgICAgIHRvdWNoSUQgPSBlLnBvaW50ZXJJZDsgLy9mb3Igc29tZSBNaWNyb3NvZnQgYnJvd3NlcnNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvdWNoID0gdG91Y2hJRCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIF9kcmFnQ291bnQrKztcblxuICAgICAgX2FkZFRvUmVuZGVyUXVldWUocmVuZGVyKTsgLy9jYXVzZXMgdGhlIERyYWdnYWJsZSB0byByZW5kZXIgb24gZWFjaCBcInRpY2tcIiBvZiBUd2VlbkxpdGUudGlja2VyIChwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24gLSB1cGRhdGluZyB2YWx1ZXMgaW4gYSBtb3VzZW1vdmUgY2FuIGNhdXNlIHRoZW0gdG8gaGFwcGVuIHRvbyBmcmVxdWVudGx5LCBsaWtlIG11bHRpcGxlIHRpbWVzIGJldHdlZW4gZnJhbWUgcmVkcmF3cyB3aGljaCBpcyB3YXN0ZWZ1bCwgYW5kIGl0IGFsc28gcHJldmVudHMgdmFsdWVzIGZyb20gdXBkYXRpbmcgcHJvcGVybHkgaW4gSUU4KVxuXG5cbiAgICAgIHN0YXJ0UG9pbnRlclkgPSBzZWxmLnBvaW50ZXJZID0gZS5wYWdlWTsgLy9yZWNvcmQgdGhlIHN0YXJ0aW5nIHggYW5kIHkgc28gdGhhdCB3ZSBjYW4gY2FsY3VsYXRlIHRoZSBtb3ZlbWVudCBmcm9tIHRoZSBvcmlnaW5hbCBpbiBfb25Nb3VzZU1vdmVcblxuICAgICAgc3RhcnRQb2ludGVyWCA9IHNlbGYucG9pbnRlclggPSBlLnBhZ2VYO1xuXG4gICAgICBfZGlzcGF0Y2hFdmVudChzZWxmLCBcInByZXNzSW5pdFwiLCBcIm9uUHJlc3NJbml0XCIpO1xuXG4gICAgICBpZiAoYWxsb3dOYXRpdmVUb3VjaFNjcm9sbGluZyB8fCBzZWxmLmF1dG9TY3JvbGwpIHtcbiAgICAgICAgX3JlY29yZE1heFNjcm9sbHModGFyZ2V0LnBhcmVudE5vZGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0LnBhcmVudE5vZGUgJiYgc2VsZi5hdXRvU2Nyb2xsICYmICFzY3JvbGxQcm94eSAmJiAhcm90YXRpb25Nb2RlICYmIHRhcmdldC5wYXJlbnROb2RlLl9nc01heFNjcm9sbFggJiYgIV9wbGFjZWhvbGRlckRpdi5wYXJlbnROb2RlICYmICF0YXJnZXQuZ2V0QkJveCkge1xuICAgICAgICAvL2FkZCBhIHBsYWNlaG9sZGVyIGRpdiB0byBwcmV2ZW50IHRoZSBwYXJlbnQgY29udGFpbmVyIGZyb20gY29sbGFwc2luZyB3aGVuIHRoZSB1c2VyIGRyYWdzIHRoZSBlbGVtZW50IGxlZnQuXG4gICAgICAgIF9wbGFjZWhvbGRlckRpdi5zdHlsZS53aWR0aCA9IHRhcmdldC5wYXJlbnROb2RlLnNjcm9sbFdpZHRoICsgXCJweFwiO1xuICAgICAgICB0YXJnZXQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChfcGxhY2Vob2xkZXJEaXYpO1xuICAgICAgfVxuXG4gICAgICByZWNvcmRTdGFydFBvc2l0aW9ucygpO1xuICAgICAgc2VsZi50d2VlbiAmJiBzZWxmLnR3ZWVuLmtpbGwoKTtcbiAgICAgIHNlbGYuaXNUaHJvd2luZyA9IGZhbHNlO1xuICAgICAgZ3NhcC5raWxsVHdlZW5zT2Yoc2Nyb2xsUHJveHkgfHwgdGFyZ2V0LCBraWxsUHJvcHMsIHRydWUpOyAvL2luIGNhc2UgdGhlIHVzZXIgdHJpZXMgdG8gZHJhZyBpdCBiZWZvcmUgdGhlIGxhc3QgdHdlZW4gaXMgZG9uZS5cblxuICAgICAgc2Nyb2xsUHJveHkgJiYgZ3NhcC5raWxsVHdlZW5zT2YodGFyZ2V0LCB7XG4gICAgICAgIHNjcm9sbFRvOiAxXG4gICAgICB9LCB0cnVlKTsgLy9qdXN0IGluIGNhc2UgdGhlIG9yaWdpbmFsIHRhcmdldCdzIHNjcm9sbCBwb3NpdGlvbiBpcyBiZWluZyB0d2VlbmVkIHNvbWV3aGVyZSBlbHNlLlxuXG4gICAgICBzZWxmLnR3ZWVuID0gc2VsZi5sb2NrZWRBeGlzID0gbnVsbDtcblxuICAgICAgaWYgKHZhcnMuekluZGV4Qm9vc3QgfHwgIXJvdGF0aW9uTW9kZSAmJiAhc2Nyb2xsUHJveHkgJiYgdmFycy56SW5kZXhCb29zdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnpJbmRleCA9IERyYWdnYWJsZS56SW5kZXgrKztcbiAgICAgIH1cblxuICAgICAgc2VsZi5pc1ByZXNzZWQgPSB0cnVlO1xuICAgICAgaGFzRHJhZ0NhbGxiYWNrID0gISEodmFycy5vbkRyYWcgfHwgc2VsZi5fbGlzdGVuZXJzLmRyYWcpO1xuICAgICAgaGFzTW92ZUNhbGxiYWNrID0gISEodmFycy5vbk1vdmUgfHwgc2VsZi5fbGlzdGVuZXJzLm1vdmUpO1xuXG4gICAgICBpZiAodmFycy5jdXJzb3IgIT09IGZhbHNlIHx8IHZhcnMuYWN0aXZlQ3Vyc29yKSB7XG4gICAgICAgIGkgPSB0cmlnZ2Vycy5sZW5ndGg7XG5cbiAgICAgICAgd2hpbGUgKC0taSA+IC0xKSB7XG4gICAgICAgICAgZ3NhcC5zZXQodHJpZ2dlcnNbaV0sIHtcbiAgICAgICAgICAgIGN1cnNvcjogdmFycy5hY3RpdmVDdXJzb3IgfHwgdmFycy5jdXJzb3IgfHwgKF9kZWZhdWx0Q3Vyc29yID09PSBcImdyYWJcIiA/IFwiZ3JhYmJpbmdcIiA6IF9kZWZhdWx0Q3Vyc29yKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF9kaXNwYXRjaEV2ZW50KHNlbGYsIFwicHJlc3NcIiwgXCJvblByZXNzXCIpO1xuICAgIH0sXG4gICAgICAgIC8vY2FsbGVkIGV2ZXJ5IHRpbWUgdGhlIG1vdXNlL3RvdWNoIG1vdmVzXG4gICAgb25Nb3ZlID0gZnVuY3Rpb24gb25Nb3ZlKGUpIHtcbiAgICAgIHZhciBvcmlnaW5hbEV2ZW50ID0gZSxcbiAgICAgICAgICB0b3VjaGVzLFxuICAgICAgICAgIHBvaW50ZXJYLFxuICAgICAgICAgIHBvaW50ZXJZLFxuICAgICAgICAgIGksXG4gICAgICAgICAgZHgsXG4gICAgICAgICAgZHk7XG5cbiAgICAgIGlmICghZW5hYmxlZCB8fCBfaXNNdWx0aVRvdWNoaW5nIHx8ICFzZWxmLmlzUHJlc3NlZCB8fCAhZSkge1xuICAgICAgICBpc1ByZXZlbnRpbmdEZWZhdWx0ICYmIGUgJiYgZW5hYmxlZCAmJiBfcHJldmVudERlZmF1bHQoZSk7IC8vIGluIHNvbWUgYnJvd3NlcnMsIHdlIG11c3QgbGlzdGVuIGZvciBtdWx0aXBsZSBldmVudCB0eXBlcyBsaWtlIHRvdWNobW92ZSwgcG9pbnRlcm1vdmUsIG1vdXNlbW92ZS4gVGhlIGZpcnN0IHRpbWUgdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQsIHdlIHJlY29yZCB3aGV0aGVyIG9yIG5vdCB3ZSBfcHJldmVudERlZmF1bHQoKSBzbyB0aGF0IG9uIGR1cGxpY2F0ZSBjYWxscywgd2UgY2FuIGRvIHRoZSBzYW1lIGlmIG5lY2Vzc2FyeS5cblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYucG9pbnRlckV2ZW50ID0gZTtcbiAgICAgIHRvdWNoZXMgPSBlLmNoYW5nZWRUb3VjaGVzO1xuXG4gICAgICBpZiAodG91Y2hlcykge1xuICAgICAgICAvL3RvdWNoIGV2ZW50cyBzdG9yZSB0aGUgZGF0YSBzbGlnaHRseSBkaWZmZXJlbnRseVxuICAgICAgICBlID0gdG91Y2hlc1swXTtcblxuICAgICAgICBpZiAoZSAhPT0gdG91Y2ggJiYgZS5pZGVudGlmaWVyICE9PSB0b3VjaElEKSB7XG4gICAgICAgICAgLy9Vc3VhbGx5IGNoYW5nZWRUb3VjaGVzWzBdIHdpbGwgYmUgd2hhdCB3ZSdyZSBsb29raW5nIGZvciwgYnV0IGluIGNhc2UgaXQncyBub3QsIGxvb2sgdGhyb3VnaCB0aGUgcmVzdCBvZiB0aGUgYXJyYXkuLi4oYW5kIEFuZHJvaWQgYnJvd3NlcnMgZG9uJ3QgcmV1c2UgdGhlIGV2ZW50IGxpa2UgaU9TKVxuICAgICAgICAgIGkgPSB0b3VjaGVzLmxlbmd0aDtcblxuICAgICAgICAgIHdoaWxlICgtLWkgPiAtMSAmJiAoZSA9IHRvdWNoZXNbaV0pLmlkZW50aWZpZXIgIT09IHRvdWNoSUQgJiYgZS50YXJnZXQgIT09IHRhcmdldCkge30gLy8gU29tZSBBbmRyb2lkIGRldmljZXMgZGlzcGF0Y2ggYSB0b3VjaHN0YXJ0IEFORCBwb2ludGVyZG93biBpbml0aWFsbHksIGFuZCB0aGVuIG9ubHkgcG9pbnRlcm1vdmUgdGh1cyB0aGUgdG91Y2hJRCBtYXkgbm90IG1hdGNoIGJlY2F1c2UgaXQgd2FzIGdyYWJiZWQgZnJvbSB0aGUgdG91Y2hzdGFydCBldmVudCB3aGVyZWFzIHRoZSBwb2ludGVyIGV2ZW50IGlzIHRoZSBvbmUgdGhhdCB0aGUgYnJvd3NlciBkaXNwYXRjaGVzIGZvciBtb3ZlLCBzbyBpZiB0aGUgZXZlbnQgdGFyZ2V0IG1hdGNoZXMgdGhpcyBEcmFnZ2FibGUncyB0YXJnZXQsIGxldCBpdCB0aHJvdWdoLlxuXG5cbiAgICAgICAgICBpZiAoaSA8IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZS5wb2ludGVySWQgJiYgdG91Y2hJRCAmJiBlLnBvaW50ZXJJZCAhPT0gdG91Y2hJRCkge1xuICAgICAgICAvL2ZvciBzb21lIE1pY3Jvc29mdCBicm93c2Vycywgd2UgbXVzdCBhdHRhY2ggdGhlIGxpc3RlbmVyIHRvIHRoZSBkb2MgcmF0aGVyIHRoYW4gdGhlIHRyaWdnZXIgc28gdGhhdCB3aGVuIHRoZSBmaW5nZXIgbW92ZXMgb3V0c2lkZSB0aGUgYm91bmRzIG9mIHRoZSB0cmlnZ2VyLCB0aGluZ3Mgc3RpbGwgd29yay4gU28gaWYgdGhlIGV2ZW50IHdlJ3JlIHJlY2VpdmluZyBoYXMgYSBwb2ludGVySWQgdGhhdCBkb2Vzbid0IG1hdGNoIHRoZSB0b3VjaElELCBpZ25vcmUgaXQgKGZvciBtdWx0aS10b3VjaClcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodG91Y2hFdmVudFRhcmdldCAmJiBhbGxvd05hdGl2ZVRvdWNoU2Nyb2xsaW5nICYmICF0b3VjaERyYWdBeGlzKSB7XG4gICAgICAgIC8vQW5kcm9pZCBicm93c2VycyBmb3JjZSB1cyB0byBkZWNpZGUgb24gdGhlIGZpcnN0IFwidG91Y2htb3ZlXCIgZXZlbnQgaWYgd2Ugc2hvdWxkIGFsbG93IHRoZSBkZWZhdWx0IChzY3JvbGxpbmcpIGJlaGF2aW9yIG9yIHByZXZlbnREZWZhdWx0KCkuIE90aGVyd2lzZSwgYSBcInRvdWNoY2FuY2VsXCIgd2lsbCBiZSBmaXJlZCBhbmQgdGhlbiBubyBcInRvdWNobW92ZVwiIG9yIFwidG91Y2hlbmRcIiB3aWxsIGZpcmUgZHVyaW5nIHRoZSBzY3JvbGxpbmcgKG5vIGdvb2QpLlxuICAgICAgICBfcG9pbnQxLnggPSBlLnBhZ2VYIC0gKGlzRml4ZWQgPyBfZ2V0RG9jU2Nyb2xsTGVmdChvd25lckRvYykgOiAwKTtcbiAgICAgICAgX3BvaW50MS55ID0gZS5wYWdlWSAtIChpc0ZpeGVkID8gX2dldERvY1Njcm9sbFRvcChvd25lckRvYykgOiAwKTtcbiAgICAgICAgbWF0cml4ICYmIG1hdHJpeC5hcHBseShfcG9pbnQxLCBfcG9pbnQxKTtcbiAgICAgICAgcG9pbnRlclggPSBfcG9pbnQxLng7XG4gICAgICAgIHBvaW50ZXJZID0gX3BvaW50MS55O1xuICAgICAgICBkeCA9IE1hdGguYWJzKHBvaW50ZXJYIC0gc3RhcnRQb2ludGVyWCk7XG4gICAgICAgIGR5ID0gTWF0aC5hYnMocG9pbnRlclkgLSBzdGFydFBvaW50ZXJZKTtcblxuICAgICAgICBpZiAoZHggIT09IGR5ICYmIChkeCA+IG1pbmltdW1Nb3ZlbWVudCB8fCBkeSA+IG1pbmltdW1Nb3ZlbWVudCkgfHwgX2lzQW5kcm9pZCAmJiBhbGxvd05hdGl2ZVRvdWNoU2Nyb2xsaW5nID09PSB0b3VjaERyYWdBeGlzKSB7XG4gICAgICAgICAgdG91Y2hEcmFnQXhpcyA9IGR4ID4gZHkgJiYgYWxsb3dYID8gXCJ4XCIgOiBcInlcIjtcblxuICAgICAgICAgIGlmIChhbGxvd05hdGl2ZVRvdWNoU2Nyb2xsaW5nICYmIHRvdWNoRHJhZ0F4aXMgIT09IGFsbG93TmF0aXZlVG91Y2hTY3JvbGxpbmcpIHtcbiAgICAgICAgICAgIF9hZGRMaXN0ZW5lcihfd2luLCBcInRvdWNoZm9yY2VjaGFuZ2VcIiwgX3ByZXZlbnREZWZhdWx0KTsgLy8gcHJldmVudHMgbmF0aXZlIHRvdWNoIHNjcm9sbGluZyBmcm9tIHRha2luZyBvdmVyIGlmIHRoZSB1c2VyIHN0YXJ0ZWQgZHJhZ2dpbmcgaW4gdGhlIG90aGVyIGRpcmVjdGlvbiBpbiBpT1MgU2FmYXJpXG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2VsZi52YXJzLmxvY2tBeGlzT25Ub3VjaFNjcm9sbCAhPT0gZmFsc2UgJiYgYWxsb3dYICYmIGFsbG93WSkge1xuICAgICAgICAgICAgc2VsZi5sb2NrZWRBeGlzID0gdG91Y2hEcmFnQXhpcyA9PT0gXCJ4XCIgPyBcInlcIiA6IFwieFwiO1xuICAgICAgICAgICAgX2lzRnVuY3Rpb24oc2VsZi52YXJzLm9uTG9ja0F4aXMpICYmIHNlbGYudmFycy5vbkxvY2tBeGlzLmNhbGwoc2VsZiwgb3JpZ2luYWxFdmVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKF9pc0FuZHJvaWQgJiYgYWxsb3dOYXRpdmVUb3VjaFNjcm9sbGluZyA9PT0gdG91Y2hEcmFnQXhpcykge1xuICAgICAgICAgICAgb25SZWxlYXNlKG9yaWdpbmFsRXZlbnQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXNlbGYuYWxsb3dFdmVudERlZmF1bHQgJiYgKCFhbGxvd05hdGl2ZVRvdWNoU2Nyb2xsaW5nIHx8IHRvdWNoRHJhZ0F4aXMgJiYgYWxsb3dOYXRpdmVUb3VjaFNjcm9sbGluZyAhPT0gdG91Y2hEcmFnQXhpcykgJiYgb3JpZ2luYWxFdmVudC5jYW5jZWxhYmxlICE9PSBmYWxzZSkge1xuICAgICAgICBfcHJldmVudERlZmF1bHQob3JpZ2luYWxFdmVudCk7XG5cbiAgICAgICAgaXNQcmV2ZW50aW5nRGVmYXVsdCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGlzUHJldmVudGluZ0RlZmF1bHQpIHtcbiAgICAgICAgaXNQcmV2ZW50aW5nRGVmYXVsdCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZi5hdXRvU2Nyb2xsKSB7XG4gICAgICAgIGNoZWNrQXV0b1Njcm9sbEJvdW5kcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHNldFBvaW50ZXJQb3NpdGlvbihlLnBhZ2VYLCBlLnBhZ2VZLCBoYXNNb3ZlQ2FsbGJhY2spO1xuICAgIH0sXG4gICAgICAgIHNldFBvaW50ZXJQb3NpdGlvbiA9IGZ1bmN0aW9uIHNldFBvaW50ZXJQb3NpdGlvbihwb2ludGVyWCwgcG9pbnRlclksIGludm9rZU9uTW92ZSkge1xuICAgICAgdmFyIGRyYWdUb2xlcmFuY2UgPSAxIC0gc2VsZi5kcmFnUmVzaXN0YW5jZSxcbiAgICAgICAgICBlZGdlVG9sZXJhbmNlID0gMSAtIHNlbGYuZWRnZVJlc2lzdGFuY2UsXG4gICAgICAgICAgcHJldlBvaW50ZXJYID0gc2VsZi5wb2ludGVyWCxcbiAgICAgICAgICBwcmV2UG9pbnRlclkgPSBzZWxmLnBvaW50ZXJZLFxuICAgICAgICAgIHByZXZTdGFydEVsZW1lbnRZID0gc3RhcnRFbGVtZW50WSxcbiAgICAgICAgICBwcmV2WCA9IHNlbGYueCxcbiAgICAgICAgICBwcmV2WSA9IHNlbGYueSxcbiAgICAgICAgICBwcmV2RW5kWCA9IHNlbGYuZW5kWCxcbiAgICAgICAgICBwcmV2RW5kWSA9IHNlbGYuZW5kWSxcbiAgICAgICAgICBwcmV2RW5kUm90YXRpb24gPSBzZWxmLmVuZFJvdGF0aW9uLFxuICAgICAgICAgIHByZXZEaXJ0eSA9IGRpcnR5LFxuICAgICAgICAgIHhDaGFuZ2UsXG4gICAgICAgICAgeUNoYW5nZSxcbiAgICAgICAgICB4LFxuICAgICAgICAgIHksXG4gICAgICAgICAgZGlmLFxuICAgICAgICAgIHRlbXA7XG4gICAgICBzZWxmLnBvaW50ZXJYID0gcG9pbnRlclg7XG4gICAgICBzZWxmLnBvaW50ZXJZID0gcG9pbnRlclk7XG5cbiAgICAgIGlmIChpc0ZpeGVkKSB7XG4gICAgICAgIHBvaW50ZXJYIC09IF9nZXREb2NTY3JvbGxMZWZ0KG93bmVyRG9jKTtcbiAgICAgICAgcG9pbnRlclkgLT0gX2dldERvY1Njcm9sbFRvcChvd25lckRvYyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyb3RhdGlvbk1vZGUpIHtcbiAgICAgICAgeSA9IE1hdGguYXRhbjIocm90YXRpb25PcmlnaW4ueSAtIHBvaW50ZXJZLCBwb2ludGVyWCAtIHJvdGF0aW9uT3JpZ2luLngpICogX1JBRDJERUc7XG4gICAgICAgIGRpZiA9IHNlbGYueSAtIHk7XG5cbiAgICAgICAgaWYgKGRpZiA+IDE4MCkge1xuICAgICAgICAgIHN0YXJ0RWxlbWVudFkgLT0gMzYwO1xuICAgICAgICAgIHNlbGYueSA9IHk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGlmIDwgLTE4MCkge1xuICAgICAgICAgIHN0YXJ0RWxlbWVudFkgKz0gMzYwO1xuICAgICAgICAgIHNlbGYueSA9IHk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZi54ICE9PSBzdGFydEVsZW1lbnRYIHx8IE1hdGguYWJzKHN0YXJ0RWxlbWVudFkgLSB5KSA+IG1pbmltdW1Nb3ZlbWVudCkge1xuICAgICAgICAgIHNlbGYueSA9IHk7XG4gICAgICAgICAgeCA9IHN0YXJ0RWxlbWVudFggKyAoc3RhcnRFbGVtZW50WSAtIHkpICogZHJhZ1RvbGVyYW5jZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB4ID0gc3RhcnRFbGVtZW50WDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG1hdHJpeCkge1xuICAgICAgICAgIHRlbXAgPSBwb2ludGVyWCAqIG1hdHJpeC5hICsgcG9pbnRlclkgKiBtYXRyaXguYyArIG1hdHJpeC5lO1xuICAgICAgICAgIHBvaW50ZXJZID0gcG9pbnRlclggKiBtYXRyaXguYiArIHBvaW50ZXJZICogbWF0cml4LmQgKyBtYXRyaXguZjtcbiAgICAgICAgICBwb2ludGVyWCA9IHRlbXA7XG4gICAgICAgIH1cblxuICAgICAgICB5Q2hhbmdlID0gcG9pbnRlclkgLSBzdGFydFBvaW50ZXJZO1xuICAgICAgICB4Q2hhbmdlID0gcG9pbnRlclggLSBzdGFydFBvaW50ZXJYO1xuXG4gICAgICAgIGlmICh5Q2hhbmdlIDwgbWluaW11bU1vdmVtZW50ICYmIHlDaGFuZ2UgPiAtbWluaW11bU1vdmVtZW50KSB7XG4gICAgICAgICAgeUNoYW5nZSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoeENoYW5nZSA8IG1pbmltdW1Nb3ZlbWVudCAmJiB4Q2hhbmdlID4gLW1pbmltdW1Nb3ZlbWVudCkge1xuICAgICAgICAgIHhDaGFuZ2UgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKChzZWxmLmxvY2tBeGlzIHx8IHNlbGYubG9ja2VkQXhpcykgJiYgKHhDaGFuZ2UgfHwgeUNoYW5nZSkpIHtcbiAgICAgICAgICB0ZW1wID0gc2VsZi5sb2NrZWRBeGlzO1xuXG4gICAgICAgICAgaWYgKCF0ZW1wKSB7XG4gICAgICAgICAgICBzZWxmLmxvY2tlZEF4aXMgPSB0ZW1wID0gYWxsb3dYICYmIE1hdGguYWJzKHhDaGFuZ2UpID4gTWF0aC5hYnMoeUNoYW5nZSkgPyBcInlcIiA6IGFsbG93WSA/IFwieFwiIDogbnVsbDtcblxuICAgICAgICAgICAgaWYgKHRlbXAgJiYgX2lzRnVuY3Rpb24oc2VsZi52YXJzLm9uTG9ja0F4aXMpKSB7XG4gICAgICAgICAgICAgIHNlbGYudmFycy5vbkxvY2tBeGlzLmNhbGwoc2VsZiwgc2VsZi5wb2ludGVyRXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0ZW1wID09PSBcInlcIikge1xuICAgICAgICAgICAgeUNoYW5nZSA9IDA7XG4gICAgICAgICAgfSBlbHNlIGlmICh0ZW1wID09PSBcInhcIikge1xuICAgICAgICAgICAgeENoYW5nZSA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgeCA9IF9yb3VuZChzdGFydEVsZW1lbnRYICsgeENoYW5nZSAqIGRyYWdUb2xlcmFuY2UpO1xuICAgICAgICB5ID0gX3JvdW5kKHN0YXJ0RWxlbWVudFkgKyB5Q2hhbmdlICogZHJhZ1RvbGVyYW5jZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICgoc25hcFggfHwgc25hcFkgfHwgc25hcFhZKSAmJiAoc2VsZi54ICE9PSB4IHx8IHNlbGYueSAhPT0geSAmJiAhcm90YXRpb25Nb2RlKSkge1xuICAgICAgICBpZiAoc25hcFhZKSB7XG4gICAgICAgICAgX3RlbXAxLnggPSB4O1xuICAgICAgICAgIF90ZW1wMS55ID0geTtcbiAgICAgICAgICB0ZW1wID0gc25hcFhZKF90ZW1wMSk7XG4gICAgICAgICAgeCA9IF9yb3VuZCh0ZW1wLngpO1xuICAgICAgICAgIHkgPSBfcm91bmQodGVtcC55KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzbmFwWCkge1xuICAgICAgICAgIHggPSBfcm91bmQoc25hcFgoeCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNuYXBZKSB7XG4gICAgICAgICAgeSA9IF9yb3VuZChzbmFwWSh5KSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGhhc0JvdW5kcykge1xuICAgICAgICBpZiAoeCA+IG1heFgpIHtcbiAgICAgICAgICB4ID0gbWF4WCArIE1hdGgucm91bmQoKHggLSBtYXhYKSAqIGVkZ2VUb2xlcmFuY2UpO1xuICAgICAgICB9IGVsc2UgaWYgKHggPCBtaW5YKSB7XG4gICAgICAgICAgeCA9IG1pblggKyBNYXRoLnJvdW5kKCh4IC0gbWluWCkgKiBlZGdlVG9sZXJhbmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcm90YXRpb25Nb2RlKSB7XG4gICAgICAgICAgaWYgKHkgPiBtYXhZKSB7XG4gICAgICAgICAgICB5ID0gTWF0aC5yb3VuZChtYXhZICsgKHkgLSBtYXhZKSAqIGVkZ2VUb2xlcmFuY2UpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoeSA8IG1pblkpIHtcbiAgICAgICAgICAgIHkgPSBNYXRoLnJvdW5kKG1pblkgKyAoeSAtIG1pblkpICogZWRnZVRvbGVyYW5jZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxmLnggIT09IHggfHwgc2VsZi55ICE9PSB5ICYmICFyb3RhdGlvbk1vZGUpIHtcbiAgICAgICAgaWYgKHJvdGF0aW9uTW9kZSkge1xuICAgICAgICAgIHNlbGYuZW5kUm90YXRpb24gPSBzZWxmLnggPSBzZWxmLmVuZFggPSB4O1xuICAgICAgICAgIGRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoYWxsb3dZKSB7XG4gICAgICAgICAgICBzZWxmLnkgPSBzZWxmLmVuZFkgPSB5O1xuICAgICAgICAgICAgZGlydHkgPSB0cnVlOyAvL2EgZmxhZyB0aGF0IGluZGljYXRlcyB3ZSBuZWVkIHRvIHJlbmRlciB0aGUgdGFyZ2V0IG5leHQgdGltZSB0aGUgVHdlZW5MaXRlLnRpY2tlciBkaXNwYXRjaGVzIGEgXCJ0aWNrXCIgZXZlbnQgKHR5cGljYWxseSBvbiBhIHJlcXVlc3RBbmltYXRpb25GcmFtZSkgLSB0aGlzIGlzIGEgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uICh3ZSBzaG91bGRuJ3QgcmVuZGVyIG9uIGV2ZXJ5IG1vdmUgYmVjYXVzZSBzb21ldGltZXMgbWFueSBtb3ZlIGV2ZW50cyBjYW4gZ2V0IGRpc3BhdGNoZWQgYmV0d2VlbiBzY3JlZW4gcmVmcmVzaGVzLCBhbmQgdGhhdCdkIGJlIHdhc3RlZnVsIHRvIHJlbmRlciBldmVyeSB0aW1lKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChhbGxvd1gpIHtcbiAgICAgICAgICAgIHNlbGYueCA9IHNlbGYuZW5kWCA9IHg7XG4gICAgICAgICAgICBkaXJ0eSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpbnZva2VPbk1vdmUgfHwgX2Rpc3BhdGNoRXZlbnQoc2VsZiwgXCJtb3ZlXCIsIFwib25Nb3ZlXCIpICE9PSBmYWxzZSkge1xuICAgICAgICAgIGlmICghc2VsZi5pc0RyYWdnaW5nICYmIHNlbGYuaXNQcmVzc2VkKSB7XG4gICAgICAgICAgICBzZWxmLmlzRHJhZ2dpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICBfZGlzcGF0Y2hFdmVudChzZWxmLCBcImRyYWdzdGFydFwiLCBcIm9uRHJhZ1N0YXJ0XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvL3JldmVydCBiZWNhdXNlIHRoZSBvbk1vdmUgcmV0dXJuZWQgZmFsc2UhXG4gICAgICAgICAgc2VsZi5wb2ludGVyWCA9IHByZXZQb2ludGVyWDtcbiAgICAgICAgICBzZWxmLnBvaW50ZXJZID0gcHJldlBvaW50ZXJZO1xuICAgICAgICAgIHN0YXJ0RWxlbWVudFkgPSBwcmV2U3RhcnRFbGVtZW50WTtcbiAgICAgICAgICBzZWxmLnggPSBwcmV2WDtcbiAgICAgICAgICBzZWxmLnkgPSBwcmV2WTtcbiAgICAgICAgICBzZWxmLmVuZFggPSBwcmV2RW5kWDtcbiAgICAgICAgICBzZWxmLmVuZFkgPSBwcmV2RW5kWTtcbiAgICAgICAgICBzZWxmLmVuZFJvdGF0aW9uID0gcHJldkVuZFJvdGF0aW9uO1xuICAgICAgICAgIGRpcnR5ID0gcHJldkRpcnR5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICAgICAgLy9jYWxsZWQgd2hlbiB0aGUgbW91c2UvdG91Y2ggaXMgcmVsZWFzZWRcbiAgICBvblJlbGVhc2UgPSBmdW5jdGlvbiBvblJlbGVhc2UoZSwgZm9yY2UpIHtcbiAgICAgIGlmICghZW5hYmxlZCB8fCAhc2VsZi5pc1ByZXNzZWQgfHwgZSAmJiB0b3VjaElEICE9IG51bGwgJiYgIWZvcmNlICYmIChlLnBvaW50ZXJJZCAmJiBlLnBvaW50ZXJJZCAhPT0gdG91Y2hJRCAmJiBlLnRhcmdldCAhPT0gdGFyZ2V0IHx8IGUuY2hhbmdlZFRvdWNoZXMgJiYgIV9oYXNUb3VjaElEKGUuY2hhbmdlZFRvdWNoZXMsIHRvdWNoSUQpKSkge1xuICAgICAgICAvL2ZvciBzb21lIE1pY3Jvc29mdCBicm93c2Vycywgd2UgbXVzdCBhdHRhY2ggdGhlIGxpc3RlbmVyIHRvIHRoZSBkb2MgcmF0aGVyIHRoYW4gdGhlIHRyaWdnZXIgc28gdGhhdCB3aGVuIHRoZSBmaW5nZXIgbW92ZXMgb3V0c2lkZSB0aGUgYm91bmRzIG9mIHRoZSB0cmlnZ2VyLCB0aGluZ3Mgc3RpbGwgd29yay4gU28gaWYgdGhlIGV2ZW50IHdlJ3JlIHJlY2VpdmluZyBoYXMgYSBwb2ludGVySWQgdGhhdCBkb2Vzbid0IG1hdGNoIHRoZSB0b3VjaElELCBpZ25vcmUgaXQgKGZvciBtdWx0aS10b3VjaClcbiAgICAgICAgaXNQcmV2ZW50aW5nRGVmYXVsdCAmJiBlICYmIGVuYWJsZWQgJiYgX3ByZXZlbnREZWZhdWx0KGUpOyAvLyBpbiBzb21lIGJyb3dzZXJzLCB3ZSBtdXN0IGxpc3RlbiBmb3IgbXVsdGlwbGUgZXZlbnQgdHlwZXMgbGlrZSB0b3VjaGVuZCwgcG9pbnRlcnVwLCBtb3VzZXVwLiBUaGUgZmlyc3QgdGltZSB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCwgd2UgcmVjb3JkIHdoZXRoZXIgb3Igbm90IHdlIF9wcmV2ZW50RGVmYXVsdCgpIHNvIHRoYXQgb24gZHVwbGljYXRlIGNhbGxzLCB3ZSBjYW4gZG8gdGhlIHNhbWUgaWYgbmVjZXNzYXJ5LlxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi5pc1ByZXNzZWQgPSBmYWxzZTtcbiAgICAgIHZhciBvcmlnaW5hbEV2ZW50ID0gZSxcbiAgICAgICAgICB3YXNEcmFnZ2luZyA9IHNlbGYuaXNEcmFnZ2luZyxcbiAgICAgICAgICBpc0NvbnRleHRNZW51UmVsZWFzZSA9IHNlbGYudmFycy5hbGxvd0NvbnRleHRNZW51ICYmIGUgJiYgKGUuY3RybEtleSB8fCBlLndoaWNoID4gMiksXG4gICAgICAgICAgcGxhY2Vob2xkZXJEZWxheWVkQ2FsbCA9IGdzYXAuZGVsYXllZENhbGwoMC4wMDEsIHJlbW92ZVBsYWNlaG9sZGVyKSxcbiAgICAgICAgICB0b3VjaGVzLFxuICAgICAgICAgIGksXG4gICAgICAgICAgc3ludGhldGljRXZlbnQsXG4gICAgICAgICAgZXZlbnRUYXJnZXQsXG4gICAgICAgICAgc3ludGhldGljQ2xpY2s7XG5cbiAgICAgIGlmICh0b3VjaEV2ZW50VGFyZ2V0KSB7XG4gICAgICAgIF9yZW1vdmVMaXN0ZW5lcih0b3VjaEV2ZW50VGFyZ2V0LCBcInRvdWNoZW5kXCIsIG9uUmVsZWFzZSk7XG5cbiAgICAgICAgX3JlbW92ZUxpc3RlbmVyKHRvdWNoRXZlbnRUYXJnZXQsIFwidG91Y2htb3ZlXCIsIG9uTW92ZSk7XG5cbiAgICAgICAgX3JlbW92ZUxpc3RlbmVyKHRvdWNoRXZlbnRUYXJnZXQsIFwidG91Y2hjYW5jZWxcIiwgb25SZWxlYXNlKTtcblxuICAgICAgICBfcmVtb3ZlTGlzdGVuZXIob3duZXJEb2MsIFwidG91Y2hzdGFydFwiLCBfb25NdWx0aVRvdWNoRG9jdW1lbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3JlbW92ZUxpc3RlbmVyKG93bmVyRG9jLCBcIm1vdXNlbW92ZVwiLCBvbk1vdmUpO1xuICAgICAgfVxuXG4gICAgICBfcmVtb3ZlTGlzdGVuZXIoX3dpbiwgXCJ0b3VjaGZvcmNlY2hhbmdlXCIsIF9wcmV2ZW50RGVmYXVsdCk7XG5cbiAgICAgIGlmICghX3N1cHBvcnRzUG9pbnRlciB8fCAhdG91Y2hFdmVudFRhcmdldCkge1xuICAgICAgICBfcmVtb3ZlTGlzdGVuZXIob3duZXJEb2MsIFwibW91c2V1cFwiLCBvblJlbGVhc2UpO1xuXG4gICAgICAgIGUgJiYgZS50YXJnZXQgJiYgX3JlbW92ZUxpc3RlbmVyKGUudGFyZ2V0LCBcIm1vdXNldXBcIiwgb25SZWxlYXNlKTtcbiAgICAgIH1cblxuICAgICAgZGlydHkgPSBmYWxzZTtcblxuICAgICAgaWYgKHdhc0RyYWdnaW5nKSB7XG4gICAgICAgIGRyYWdFbmRUaW1lID0gX2xhc3REcmFnVGltZSA9IF9nZXRUaW1lKCk7XG4gICAgICAgIHNlbGYuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNDbGlja2luZyAmJiAhaXNDb250ZXh0TWVudVJlbGVhc2UpIHtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICBfcmVtb3ZlTGlzdGVuZXIoZS50YXJnZXQsIFwiY2hhbmdlXCIsIG9uUmVsZWFzZSk7XG5cbiAgICAgICAgICBzZWxmLnBvaW50ZXJFdmVudCA9IG9yaWdpbmFsRXZlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBfc2V0U2VsZWN0YWJsZSh0cmlnZ2VycywgZmFsc2UpO1xuXG4gICAgICAgIF9kaXNwYXRjaEV2ZW50KHNlbGYsIFwicmVsZWFzZVwiLCBcIm9uUmVsZWFzZVwiKTtcblxuICAgICAgICBfZGlzcGF0Y2hFdmVudChzZWxmLCBcImNsaWNrXCIsIFwib25DbGlja1wiKTtcblxuICAgICAgICBpc0NsaWNraW5nID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3JlbW92ZUZyb21SZW5kZXJRdWV1ZShyZW5kZXIpO1xuXG4gICAgICBpID0gdHJpZ2dlcnMubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAoLS1pID4gLTEpIHtcbiAgICAgICAgX3NldFN0eWxlKHRyaWdnZXJzW2ldLCBcImN1cnNvclwiLCB2YXJzLmN1cnNvciB8fCAodmFycy5jdXJzb3IgIT09IGZhbHNlID8gX2RlZmF1bHRDdXJzb3IgOiBudWxsKSk7XG4gICAgICB9XG5cbiAgICAgIF9kcmFnQ291bnQtLTtcblxuICAgICAgaWYgKGUpIHtcbiAgICAgICAgdG91Y2hlcyA9IGUuY2hhbmdlZFRvdWNoZXM7XG5cbiAgICAgICAgaWYgKHRvdWNoZXMpIHtcbiAgICAgICAgICAvL3RvdWNoIGV2ZW50cyBzdG9yZSB0aGUgZGF0YSBzbGlnaHRseSBkaWZmZXJlbnRseVxuICAgICAgICAgIGUgPSB0b3VjaGVzWzBdO1xuXG4gICAgICAgICAgaWYgKGUgIT09IHRvdWNoICYmIGUuaWRlbnRpZmllciAhPT0gdG91Y2hJRCkge1xuICAgICAgICAgICAgLy9Vc3VhbGx5IGNoYW5nZWRUb3VjaGVzWzBdIHdpbGwgYmUgd2hhdCB3ZSdyZSBsb29raW5nIGZvciwgYnV0IGluIGNhc2UgaXQncyBub3QsIGxvb2sgdGhyb3VnaCB0aGUgcmVzdCBvZiB0aGUgYXJyYXkuLi4oYW5kIEFuZHJvaWQgYnJvd3NlcnMgZG9uJ3QgcmV1c2UgdGhlIGV2ZW50IGxpa2UgaU9TKVxuICAgICAgICAgICAgaSA9IHRvdWNoZXMubGVuZ3RoO1xuXG4gICAgICAgICAgICB3aGlsZSAoLS1pID4gLTEgJiYgKGUgPSB0b3VjaGVzW2ldKS5pZGVudGlmaWVyICE9PSB0b3VjaElEICYmIGUudGFyZ2V0ICE9PSB0YXJnZXQpIHt9XG5cbiAgICAgICAgICAgIGlmIChpIDwgMCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5wb2ludGVyRXZlbnQgPSBvcmlnaW5hbEV2ZW50O1xuICAgICAgICBzZWxmLnBvaW50ZXJYID0gZS5wYWdlWDtcbiAgICAgICAgc2VsZi5wb2ludGVyWSA9IGUucGFnZVk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0NvbnRleHRNZW51UmVsZWFzZSAmJiBvcmlnaW5hbEV2ZW50KSB7XG4gICAgICAgIF9wcmV2ZW50RGVmYXVsdChvcmlnaW5hbEV2ZW50KTtcblxuICAgICAgICBpc1ByZXZlbnRpbmdEZWZhdWx0ID0gdHJ1ZTtcblxuICAgICAgICBfZGlzcGF0Y2hFdmVudChzZWxmLCBcInJlbGVhc2VcIiwgXCJvblJlbGVhc2VcIik7XG4gICAgICB9IGVsc2UgaWYgKG9yaWdpbmFsRXZlbnQgJiYgIXdhc0RyYWdnaW5nKSB7XG4gICAgICAgIGlzUHJldmVudGluZ0RlZmF1bHQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoaW50ZXJydXB0ZWQgJiYgKHZhcnMuc25hcCB8fCB2YXJzLmJvdW5kcykpIHtcbiAgICAgICAgICAvL290aGVyd2lzZSwgaWYgdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBvYmplY3Qgd2hpbGUgaXQncyBhbmltYXRpbmcgdG8gYSBzbmFwcGVkIHBvc2l0aW9uLCBhbmQgdGhlbiByZWxlYXNlcyB3aXRob3V0IG1vdmluZyAzIHBpeGVscywgaXQgd2lsbCBqdXN0IHN0YXkgdGhlcmUgKGl0IHNob3VsZCBhbmltYXRlL3NuYXApXG4gICAgICAgICAgYW5pbWF0ZSh2YXJzLmluZXJ0aWEgfHwgdmFycy50aHJvd1Byb3BzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9kaXNwYXRjaEV2ZW50KHNlbGYsIFwicmVsZWFzZVwiLCBcIm9uUmVsZWFzZVwiKTtcblxuICAgICAgICBpZiAoKCFfaXNBbmRyb2lkIHx8IG9yaWdpbmFsRXZlbnQudHlwZSAhPT0gXCJ0b3VjaG1vdmVcIikgJiYgb3JpZ2luYWxFdmVudC50eXBlLmluZGV4T2YoXCJjYW5jZWxcIikgPT09IC0xKSB7XG4gICAgICAgICAgLy90byBhY2NvbW1vZGF0ZSBuYXRpdmUgc2Nyb2xsaW5nIG9uIEFuZHJvaWQgZGV2aWNlcywgd2UgaGF2ZSB0byBpbW1lZGlhdGVseSBjYWxsIG9uUmVsZWFzZSgpIG9uIHRoZSBmaXJzdCB0b3VjaG1vdmUgZXZlbnQsIGJ1dCB0aGF0IHNob3VsZG4ndCB0cmlnZ2VyIGEgXCJjbGlja1wiLlxuICAgICAgICAgIF9kaXNwYXRjaEV2ZW50KHNlbGYsIFwiY2xpY2tcIiwgXCJvbkNsaWNrXCIpO1xuXG4gICAgICAgICAgaWYgKF9nZXRUaW1lKCkgLSBjbGlja1RpbWUgPCAzMDApIHtcbiAgICAgICAgICAgIF9kaXNwYXRjaEV2ZW50KHNlbGYsIFwiZG91YmxlY2xpY2tcIiwgXCJvbkRvdWJsZUNsaWNrXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGV2ZW50VGFyZ2V0ID0gb3JpZ2luYWxFdmVudC50YXJnZXQgfHwgdGFyZ2V0OyAvL29sZCBJRSB1c2VzIHNyY0VsZW1lbnRcblxuICAgICAgICAgIGNsaWNrVGltZSA9IF9nZXRUaW1lKCk7XG5cbiAgICAgICAgICBzeW50aGV0aWNDbGljayA9IGZ1bmN0aW9uIHN5bnRoZXRpY0NsaWNrKCkge1xuICAgICAgICAgICAgLy8gc29tZSBicm93c2VycyAobGlrZSBGaXJlZm94KSB3b24ndCB0cnVzdCBzY3JpcHQtZ2VuZXJhdGVkIGNsaWNrcywgc28gaWYgdGhlIHVzZXIgdHJpZXMgdG8gY2xpY2sgb24gYSB2aWRlbyB0byBwbGF5IGl0LCBmb3IgZXhhbXBsZSwgaXQgc2ltcGx5IHdvbid0IHdvcmsuIFNpbmNlIGEgcmVndWxhciBcImNsaWNrXCIgZXZlbnQgd2lsbCBtb3N0IGxpa2VseSBiZSBnZW5lcmF0ZWQgYW55d2F5IChvbmUgdGhhdCBoYXMgaXRzIGlzVHJ1c3RlZCBmbGFnIHNldCB0byB0cnVlKSwgd2UgbXVzdCBzbGlnaHRseSBkZWxheSBvdXIgc2NyaXB0LWdlbmVyYXRlZCBjbGljayBzbyB0aGF0IHRoZSBcInJlYWxcIi90cnVzdGVkIG9uZSBpcyBwcmlvcml0aXplZC4gUmVtZW1iZXIsIHdoZW4gdGhlcmUgYXJlIGR1cGxpY2F0ZSBldmVudHMgaW4gcXVpY2sgc3VjY2Vzc2lvbiwgd2Ugc3VwcHJlc3MgYWxsIGJ1dCB0aGUgZmlyc3Qgb25lLiBTb21lIGJyb3dzZXJzIGRvbid0IGV2ZW4gdHJpZ2dlciB0aGUgXCJyZWFsXCIgb25lIGF0IGFsbCwgc28gb3VyIHN5bnRoZXRpYyBvbmUgaXMgYSBzYWZldHkgdmFsdmUgdGhhdCBlbnN1cmVzIHRoYXQgbm8gbWF0dGVyIHdoYXQsIGEgY2xpY2sgZXZlbnQgZG9lcyBnZXQgZGlzcGF0Y2hlZC5cbiAgICAgICAgICAgIGlmIChjbGlja1RpbWUgIT09IGNsaWNrRGlzcGF0Y2ggJiYgc2VsZi5lbmFibGVkKCkgJiYgIXNlbGYuaXNQcmVzc2VkICYmICFvcmlnaW5hbEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgaWYgKGV2ZW50VGFyZ2V0LmNsaWNrKSB7XG4gICAgICAgICAgICAgICAgLy9zb21lIGJyb3dzZXJzIChsaWtlIG1vYmlsZSBTYWZhcmkpIGRvbid0IHByb3Blcmx5IHRyaWdnZXIgdGhlIGNsaWNrIGV2ZW50XG4gICAgICAgICAgICAgICAgZXZlbnRUYXJnZXQuY2xpY2soKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChvd25lckRvYy5jcmVhdGVFdmVudCkge1xuICAgICAgICAgICAgICAgIHN5bnRoZXRpY0V2ZW50ID0gb3duZXJEb2MuY3JlYXRlRXZlbnQoXCJNb3VzZUV2ZW50c1wiKTtcbiAgICAgICAgICAgICAgICBzeW50aGV0aWNFdmVudC5pbml0TW91c2VFdmVudChcImNsaWNrXCIsIHRydWUsIHRydWUsIF93aW4sIDEsIHNlbGYucG9pbnRlckV2ZW50LnNjcmVlblgsIHNlbGYucG9pbnRlckV2ZW50LnNjcmVlblksIHNlbGYucG9pbnRlclgsIHNlbGYucG9pbnRlclksIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCAwLCBudWxsKTtcbiAgICAgICAgICAgICAgICBldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50KHN5bnRoZXRpY0V2ZW50KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAoIV9pc0FuZHJvaWQgJiYgIW9yaWdpbmFsRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgLy9pT1MgU2FmYXJpIHJlcXVpcmVzIHRoZSBzeW50aGV0aWMgY2xpY2sgdG8gaGFwcGVuIGltbWVkaWF0ZWx5IG9yIGVsc2UgaXQgc2ltcGx5IHdvbid0IHdvcmssIGJ1dCBBbmRyb2lkIGRvZXNuJ3QgcGxheSBuaWNlLlxuICAgICAgICAgICAgZ3NhcC5kZWxheWVkQ2FsbCgwLjA1LCBzeW50aGV0aWNDbGljayk7IC8vaW4gYWRkaXRpb24gdG8gdGhlIGlPUyBidWcgd29ya2Fyb3VuZCwgdGhlcmUncyBhIEZpcmVmb3ggaXNzdWUgd2l0aCBjbGlja2luZyBvbiB0aGluZ3MgbGlrZSBhIHZpZGVvIHRvIHBsYXksIHNvIHdlIG11c3QgZmFrZSBhIGNsaWNrIGV2ZW50IGluIGEgc2xpZ2h0bHkgZGVsYXllZCBmYXNoaW9uLiBQcmV2aW91c2x5LCB3ZSBsaXN0ZW5lZCBmb3IgdGhlIFwiY2xpY2tcIiBldmVudCB3aXRoIFwiY2FwdHVyZVwiIGZhbHNlIHdoaWNoIHNvbHZlZCB0aGUgdmlkZW8tY2xpY2stdG8tcGxheSBpc3N1ZSwgYnV0IGl0IHdvdWxkIGFsbG93IHRoZSBcImNsaWNrXCIgZXZlbnQgdG8gYmUgZGlzcGF0Y2hlZCB0d2ljZSBsaWtlIGlmIHlvdSB3ZXJlIHVzaW5nIGEgalF1ZXJ5LmNsaWNrKCkgYmVjYXVzZSB0aGF0IHdhcyBoYW5kbGVkIGluIHRoZSBjYXB0dXJlIHBoYXNlLCB0aHVzIHdlIGhhZCB0byBzd2l0Y2ggdG8gdGhlIGNhcHR1cmUgcGhhc2UgdG8gYXZvaWQgdGhlIGRvdWJsZS1kaXNwYXRjaGluZywgYnV0IGRvIHRoZSBkZWxheWVkIHN5bnRoZXRpYyBjbGljay4gRG9uJ3QgZmlyZSBpdCB0b28gZmFzdCAobGlrZSAwLjAwMDAxKSBiZWNhdXNlIHdlIHdhbnQgdG8gZ2l2ZSB0aGUgbmF0aXZlIGV2ZW50IGEgY2hhbmNlIHRvIGZpcmUgZmlyc3QgYXMgaXQncyBcInRydXN0ZWRcIi5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFuaW1hdGUodmFycy5pbmVydGlhIHx8IHZhcnMudGhyb3dQcm9wcyk7IC8vd2lsbCBza2lwIGlmIGluZXJ0aWEvdGhyb3dQcm9wcyBpc24ndCBkZWZpbmVkIG9yIEluZXJ0aWFQbHVnaW4gaXNuJ3QgbG9hZGVkLlxuXG4gICAgICAgIGlmICghc2VsZi5hbGxvd0V2ZW50RGVmYXVsdCAmJiBvcmlnaW5hbEV2ZW50ICYmICh2YXJzLmRyYWdDbGlja2FibGVzICE9PSBmYWxzZSB8fCAhaXNDbGlja2FibGUuY2FsbChzZWxmLCBvcmlnaW5hbEV2ZW50LnRhcmdldCkpICYmIHdhc0RyYWdnaW5nICYmICghYWxsb3dOYXRpdmVUb3VjaFNjcm9sbGluZyB8fCB0b3VjaERyYWdBeGlzICYmIGFsbG93TmF0aXZlVG91Y2hTY3JvbGxpbmcgPT09IHRvdWNoRHJhZ0F4aXMpICYmIG9yaWdpbmFsRXZlbnQuY2FuY2VsYWJsZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICBpc1ByZXZlbnRpbmdEZWZhdWx0ID0gdHJ1ZTtcblxuICAgICAgICAgIF9wcmV2ZW50RGVmYXVsdChvcmlnaW5hbEV2ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpc1ByZXZlbnRpbmdEZWZhdWx0ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfZGlzcGF0Y2hFdmVudChzZWxmLCBcInJlbGVhc2VcIiwgXCJvblJlbGVhc2VcIik7XG4gICAgICB9XG5cbiAgICAgIGlzVHdlZW5pbmcoKSAmJiBwbGFjZWhvbGRlckRlbGF5ZWRDYWxsLmR1cmF0aW9uKHNlbGYudHdlZW4uZHVyYXRpb24oKSk7IC8vc3luYyB0aGUgdGltaW5nIHNvIHRoYXQgdGhlIHBsYWNlaG9sZGVyIERJViBnZXRzXG5cbiAgICAgIHdhc0RyYWdnaW5nICYmIF9kaXNwYXRjaEV2ZW50KHNlbGYsIFwiZHJhZ2VuZFwiLCBcIm9uRHJhZ0VuZFwiKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgICAgIHVwZGF0ZVNjcm9sbCA9IGZ1bmN0aW9uIHVwZGF0ZVNjcm9sbChlKSB7XG4gICAgICBpZiAoZSAmJiBzZWxmLmlzRHJhZ2dpbmcgJiYgIXNjcm9sbFByb3h5KSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSBlLnRhcmdldCB8fCB0YXJnZXQucGFyZW50Tm9kZSxcbiAgICAgICAgICAgIGRlbHRhWCA9IHBhcmVudC5zY3JvbGxMZWZ0IC0gcGFyZW50Ll9nc1Njcm9sbFgsXG4gICAgICAgICAgICBkZWx0YVkgPSBwYXJlbnQuc2Nyb2xsVG9wIC0gcGFyZW50Ll9nc1Njcm9sbFk7XG5cbiAgICAgICAgaWYgKGRlbHRhWCB8fCBkZWx0YVkpIHtcbiAgICAgICAgICBpZiAobWF0cml4KSB7XG4gICAgICAgICAgICBzdGFydFBvaW50ZXJYIC09IGRlbHRhWCAqIG1hdHJpeC5hICsgZGVsdGFZICogbWF0cml4LmM7XG4gICAgICAgICAgICBzdGFydFBvaW50ZXJZIC09IGRlbHRhWSAqIG1hdHJpeC5kICsgZGVsdGFYICogbWF0cml4LmI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXJ0UG9pbnRlclggLT0gZGVsdGFYO1xuICAgICAgICAgICAgc3RhcnRQb2ludGVyWSAtPSBkZWx0YVk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGFyZW50Ll9nc1Njcm9sbFggKz0gZGVsdGFYO1xuICAgICAgICAgIHBhcmVudC5fZ3NTY3JvbGxZICs9IGRlbHRhWTtcbiAgICAgICAgICBzZXRQb2ludGVyUG9zaXRpb24oc2VsZi5wb2ludGVyWCwgc2VsZi5wb2ludGVyWSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgICAgICBvbkNsaWNrID0gZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAvL3RoaXMgd2FzIGEgaHVnZSBwYWluIGluIHRoZSBuZWNrIHRvIGFsaWduIGFsbCB0aGUgdmFyaW91cyBicm93c2VycyBhbmQgdGhlaXIgYmVoYXZpb3JzLiBDaHJvbWUsIEZpcmVmb3gsIFNhZmFyaSwgT3BlcmEsIEFuZHJvaWQsIGFuZCBNaWNyb3NvZnQgRWRnZSBhbGwgaGFuZGxlIGV2ZW50cyBkaWZmZXJlbnRseSEgU29tZSB3aWxsIG9ubHkgdHJpZ2dlciBuYXRpdmUgYmVoYXZpb3IgKGxpa2UgY2hlY2tib3ggdG9nZ2xpbmcpIGZyb20gdHJ1c3RlZCBldmVudHMuIE90aGVycyBkb24ndCBldmVuIHN1cHBvcnQgaXNUcnVzdGVkLCBidXQgcmVxdWlyZSAyIGV2ZW50cyB0byBmbG93IHRocm91Z2ggYmVmb3JlIHRyaWdnZXJpbmcgbmF0aXZlIGJlaGF2aW9yLiBFZGdlIHRyZWF0cyBldmVyeXRoaW5nIGFzIHRydXN0ZWQgYnV0IGFsc28gbWFuZGF0ZXMgdGhhdCAyIGZsb3cgdGhyb3VnaCB0byB0cmlnZ2VyIHRoZSBjb3JyZWN0IG5hdGl2ZSBiZWhhdmlvci5cbiAgICAgIHZhciB0aW1lID0gX2dldFRpbWUoKSxcbiAgICAgICAgICByZWNlbnRseUNsaWNrZWQgPSB0aW1lIC0gY2xpY2tUaW1lIDwgMTAwLFxuICAgICAgICAgIHJlY2VudGx5RHJhZ2dlZCA9IHRpbWUgLSBkcmFnRW5kVGltZSA8IDUwLFxuICAgICAgICAgIGFscmVhZHlEaXNwYXRjaGVkID0gcmVjZW50bHlDbGlja2VkICYmIGNsaWNrRGlzcGF0Y2ggPT09IGNsaWNrVGltZSxcbiAgICAgICAgICBkZWZhdWx0UHJldmVudGVkID0gc2VsZi5wb2ludGVyRXZlbnQgJiYgc2VsZi5wb2ludGVyRXZlbnQuZGVmYXVsdFByZXZlbnRlZCxcbiAgICAgICAgICBhbHJlYWR5RGlzcGF0Y2hlZFRydXN0ZWQgPSByZWNlbnRseUNsaWNrZWQgJiYgdHJ1c3RlZENsaWNrRGlzcGF0Y2ggPT09IGNsaWNrVGltZSxcbiAgICAgICAgICB0cnVzdGVkID0gZS5pc1RydXN0ZWQgfHwgZS5pc1RydXN0ZWQgPT0gbnVsbCAmJiByZWNlbnRseUNsaWNrZWQgJiYgYWxyZWFkeURpc3BhdGNoZWQ7IC8vbm90ZTogU2FmYXJpIGRvZXNuJ3Qgc3VwcG9ydCBpc1RydXN0ZWQsIGFuZCBpdCB3b24ndCBwcm9wZXJseSBleGVjdXRlIG5hdGl2ZSBiZWhhdmlvciAobGlrZSB0b2dnbGluZyBjaGVja2JveGVzKSBvbiB0aGUgZmlyc3Qgc3ludGhldGljIFwiY2xpY2tcIiBldmVudCAtIHdlIG11c3Qgd2FpdCBmb3IgdGhlIDJuZCBhbmQgdHJlYXQgaXQgYXMgdHJ1c3RlZCAoYnV0IHN0b3AgcHJvcGFnYXRpb24gYXQgdGhhdCBwb2ludCkuIENvbmZ1c2luZywgSSBrbm93LiBEb24ndCB5b3UgbG92ZSBjcm9zcy1icm93c2VyIGNvbXBhdGliaWxpdHkgY2hhbGxlbmdlcz9cblxuXG4gICAgICBpZiAoKGFscmVhZHlEaXNwYXRjaGVkIHx8IHJlY2VudGx5RHJhZ2dlZCAmJiBzZWxmLnZhcnMuc3VwcHJlc3NDbGlja09uRHJhZyAhPT0gZmFsc2UpICYmIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKSB7XG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNlbnRseUNsaWNrZWQgJiYgIShzZWxmLnBvaW50ZXJFdmVudCAmJiBzZWxmLnBvaW50ZXJFdmVudC5kZWZhdWx0UHJldmVudGVkKSAmJiAoIWFscmVhZHlEaXNwYXRjaGVkIHx8IHRydXN0ZWQgJiYgIWFscmVhZHlEaXNwYXRjaGVkVHJ1c3RlZCkpIHtcbiAgICAgICAgLy9sZXQgdGhlIGZpcnN0IGNsaWNrIHBhc3MgdGhyb3VnaCB1bmhpbmRlcmVkLiBMZXQgdGhlIG5leHQgb25lIG9ubHkgaWYgaXQncyB0cnVzdGVkLCB0aGVuIG5vIG1vcmUgKHN0b3AgcXVpY2stc3VjY2Vzc2lvbiBvbmVzKVxuICAgICAgICBpZiAodHJ1c3RlZCAmJiBhbHJlYWR5RGlzcGF0Y2hlZCkge1xuICAgICAgICAgIHRydXN0ZWRDbGlja0Rpc3BhdGNoID0gY2xpY2tUaW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgY2xpY2tEaXNwYXRjaCA9IGNsaWNrVGltZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZi5pc1ByZXNzZWQgfHwgcmVjZW50bHlEcmFnZ2VkIHx8IHJlY2VudGx5Q2xpY2tlZCkge1xuICAgICAgICBpZiAoIXRydXN0ZWQgfHwgIWUuZGV0YWlsIHx8ICFyZWNlbnRseUNsaWNrZWQgfHwgZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgIF9wcmV2ZW50RGVmYXVsdChlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXJlY2VudGx5Q2xpY2tlZCAmJiAhcmVjZW50bHlEcmFnZ2VkKSB7XG4gICAgICAgIC8vIGZvciBzY3JpcHQtdHJpZ2dlcmVkIGV2ZW50IGRpc3BhdGNoZXMsIGxpa2UgZWxlbWVudC5jbGljaygpXG4gICAgICAgIGUgJiYgZS50YXJnZXQgJiYgKHNlbGYucG9pbnRlckV2ZW50ID0gZSk7XG5cbiAgICAgICAgX2Rpc3BhdGNoRXZlbnQoc2VsZiwgXCJjbGlja1wiLCBcIm9uQ2xpY2tcIik7XG4gICAgICB9XG4gICAgfSxcbiAgICAgICAgbG9jYWxpemVQb2ludCA9IGZ1bmN0aW9uIGxvY2FsaXplUG9pbnQocCkge1xuICAgICAgcmV0dXJuIG1hdHJpeCA/IHtcbiAgICAgICAgeDogcC54ICogbWF0cml4LmEgKyBwLnkgKiBtYXRyaXguYyArIG1hdHJpeC5lLFxuICAgICAgICB5OiBwLnggKiBtYXRyaXguYiArIHAueSAqIG1hdHJpeC5kICsgbWF0cml4LmZcbiAgICAgIH0gOiB7XG4gICAgICAgIHg6IHAueCxcbiAgICAgICAgeTogcC55XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBvbGQgPSBEcmFnZ2FibGUuZ2V0KHRhcmdldCk7XG4gICAgb2xkICYmIG9sZC5raWxsKCk7IC8vIGF2b2lkcyBkdXBsaWNhdGVzIChhbiBlbGVtZW50IGNhbiBvbmx5IGJlIGNvbnRyb2xsZWQgYnkgb25lIERyYWdnYWJsZSlcbiAgICAvL2dpdmUgdGhlIHVzZXIgYWNjZXNzIHRvIHN0YXJ0L3N0b3AgZHJhZ2dpbmcuLi5cblxuICAgIF90aGlzMi5zdGFydERyYWcgPSBmdW5jdGlvbiAoZXZlbnQsIGFsaWduKSB7XG4gICAgICB2YXIgcjEsIHIyLCBwMSwgcDI7XG4gICAgICBvblByZXNzKGV2ZW50IHx8IHNlbGYucG9pbnRlckV2ZW50LCB0cnVlKTsgLy9pZiB0aGUgcG9pbnRlciBpc24ndCBvbiB0b3Agb2YgdGhlIGVsZW1lbnQsIGFkanVzdCB0aGluZ3MgYWNjb3JkaW5nbHlcblxuICAgICAgaWYgKGFsaWduICYmICFzZWxmLmhpdFRlc3QoZXZlbnQgfHwgc2VsZi5wb2ludGVyRXZlbnQpKSB7XG4gICAgICAgIHIxID0gX3BhcnNlUmVjdChldmVudCB8fCBzZWxmLnBvaW50ZXJFdmVudCk7XG4gICAgICAgIHIyID0gX3BhcnNlUmVjdCh0YXJnZXQpO1xuICAgICAgICBwMSA9IGxvY2FsaXplUG9pbnQoe1xuICAgICAgICAgIHg6IHIxLmxlZnQgKyByMS53aWR0aCAvIDIsXG4gICAgICAgICAgeTogcjEudG9wICsgcjEuaGVpZ2h0IC8gMlxuICAgICAgICB9KTtcbiAgICAgICAgcDIgPSBsb2NhbGl6ZVBvaW50KHtcbiAgICAgICAgICB4OiByMi5sZWZ0ICsgcjIud2lkdGggLyAyLFxuICAgICAgICAgIHk6IHIyLnRvcCArIHIyLmhlaWdodCAvIDJcbiAgICAgICAgfSk7XG4gICAgICAgIHN0YXJ0UG9pbnRlclggLT0gcDEueCAtIHAyLng7XG4gICAgICAgIHN0YXJ0UG9pbnRlclkgLT0gcDEueSAtIHAyLnk7XG4gICAgICB9XG5cbiAgICAgIGlmICghc2VsZi5pc0RyYWdnaW5nKSB7XG4gICAgICAgIHNlbGYuaXNEcmFnZ2luZyA9IHRydWU7XG5cbiAgICAgICAgX2Rpc3BhdGNoRXZlbnQoc2VsZiwgXCJkcmFnc3RhcnRcIiwgXCJvbkRyYWdTdGFydFwiKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMyLmRyYWcgPSBvbk1vdmU7XG5cbiAgICBfdGhpczIuZW5kRHJhZyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gb25SZWxlYXNlKGUgfHwgc2VsZi5wb2ludGVyRXZlbnQsIHRydWUpO1xuICAgIH07XG5cbiAgICBfdGhpczIudGltZVNpbmNlRHJhZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBzZWxmLmlzRHJhZ2dpbmcgPyAwIDogKF9nZXRUaW1lKCkgLSBkcmFnRW5kVGltZSkgLyAxMDAwO1xuICAgIH07XG5cbiAgICBfdGhpczIudGltZVNpbmNlQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gKF9nZXRUaW1lKCkgLSBjbGlja1RpbWUpIC8gMTAwMDtcbiAgICB9O1xuXG4gICAgX3RoaXMyLmhpdFRlc3QgPSBmdW5jdGlvbiAodGFyZ2V0LCB0aHJlc2hvbGQpIHtcbiAgICAgIHJldHVybiBEcmFnZ2FibGUuaGl0VGVzdChzZWxmLnRhcmdldCwgdGFyZ2V0LCB0aHJlc2hvbGQpO1xuICAgIH07XG5cbiAgICBfdGhpczIuZ2V0RGlyZWN0aW9uID0gZnVuY3Rpb24gKGZyb20sIGRpYWdvbmFsVGhyZXNob2xkKSB7XG4gICAgICAvL2Zyb20gY2FuIGJlIFwic3RhcnRcIiAoZGVmYXVsdCksIFwidmVsb2NpdHlcIiwgb3IgYW4gZWxlbWVudFxuICAgICAgdmFyIG1vZGUgPSBmcm9tID09PSBcInZlbG9jaXR5XCIgJiYgSW5lcnRpYVBsdWdpbiA/IGZyb20gOiBfaXNPYmplY3QoZnJvbSkgJiYgIXJvdGF0aW9uTW9kZSA/IFwiZWxlbWVudFwiIDogXCJzdGFydFwiLFxuICAgICAgICAgIHhDaGFuZ2UsXG4gICAgICAgICAgeUNoYW5nZSxcbiAgICAgICAgICByYXRpbyxcbiAgICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgICAgcjEsXG4gICAgICAgICAgcjI7XG5cbiAgICAgIGlmIChtb2RlID09PSBcImVsZW1lbnRcIikge1xuICAgICAgICByMSA9IF9wYXJzZVJlY3Qoc2VsZi50YXJnZXQpO1xuICAgICAgICByMiA9IF9wYXJzZVJlY3QoZnJvbSk7XG4gICAgICB9XG5cbiAgICAgIHhDaGFuZ2UgPSBtb2RlID09PSBcInN0YXJ0XCIgPyBzZWxmLnggLSBzdGFydEVsZW1lbnRYIDogbW9kZSA9PT0gXCJ2ZWxvY2l0eVwiID8gSW5lcnRpYVBsdWdpbi5nZXRWZWxvY2l0eSh0YXJnZXQsIHhQcm9wKSA6IHIxLmxlZnQgKyByMS53aWR0aCAvIDIgLSAocjIubGVmdCArIHIyLndpZHRoIC8gMik7XG5cbiAgICAgIGlmIChyb3RhdGlvbk1vZGUpIHtcbiAgICAgICAgcmV0dXJuIHhDaGFuZ2UgPCAwID8gXCJjb3VudGVyLWNsb2Nrd2lzZVwiIDogXCJjbG9ja3dpc2VcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpYWdvbmFsVGhyZXNob2xkID0gZGlhZ29uYWxUaHJlc2hvbGQgfHwgMjtcbiAgICAgICAgeUNoYW5nZSA9IG1vZGUgPT09IFwic3RhcnRcIiA/IHNlbGYueSAtIHN0YXJ0RWxlbWVudFkgOiBtb2RlID09PSBcInZlbG9jaXR5XCIgPyBJbmVydGlhUGx1Z2luLmdldFZlbG9jaXR5KHRhcmdldCwgeVByb3ApIDogcjEudG9wICsgcjEuaGVpZ2h0IC8gMiAtIChyMi50b3AgKyByMi5oZWlnaHQgLyAyKTtcbiAgICAgICAgcmF0aW8gPSBNYXRoLmFicyh4Q2hhbmdlIC8geUNoYW5nZSk7XG4gICAgICAgIGRpcmVjdGlvbiA9IHJhdGlvIDwgMSAvIGRpYWdvbmFsVGhyZXNob2xkID8gXCJcIiA6IHhDaGFuZ2UgPCAwID8gXCJsZWZ0XCIgOiBcInJpZ2h0XCI7XG5cbiAgICAgICAgaWYgKHJhdGlvIDwgZGlhZ29uYWxUaHJlc2hvbGQpIHtcbiAgICAgICAgICBpZiAoZGlyZWN0aW9uICE9PSBcIlwiKSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gKz0gXCItXCI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlyZWN0aW9uICs9IHlDaGFuZ2UgPCAwID8gXCJ1cFwiIDogXCJkb3duXCI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgICB9O1xuXG4gICAgX3RoaXMyLmFwcGx5Qm91bmRzID0gZnVuY3Rpb24gKG5ld0JvdW5kcywgc3RpY2t5KSB7XG4gICAgICB2YXIgeCwgeSwgZm9yY2VaZXJvVmVsb2NpdHksIGUsIHBhcmVudCwgaXNSb290O1xuXG4gICAgICBpZiAobmV3Qm91bmRzICYmIHZhcnMuYm91bmRzICE9PSBuZXdCb3VuZHMpIHtcbiAgICAgICAgdmFycy5ib3VuZHMgPSBuZXdCb3VuZHM7XG4gICAgICAgIHJldHVybiBzZWxmLnVwZGF0ZSh0cnVlLCBzdGlja3kpO1xuICAgICAgfVxuXG4gICAgICBzeW5jWFkodHJ1ZSk7XG4gICAgICBjYWxjdWxhdGVCb3VuZHMoKTtcblxuICAgICAgaWYgKGhhc0JvdW5kcyAmJiAhaXNUd2VlbmluZygpKSB7XG4gICAgICAgIHggPSBzZWxmLng7XG4gICAgICAgIHkgPSBzZWxmLnk7XG5cbiAgICAgICAgaWYgKHggPiBtYXhYKSB7XG4gICAgICAgICAgeCA9IG1heFg7XG4gICAgICAgIH0gZWxzZSBpZiAoeCA8IG1pblgpIHtcbiAgICAgICAgICB4ID0gbWluWDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh5ID4gbWF4WSkge1xuICAgICAgICAgIHkgPSBtYXhZO1xuICAgICAgICB9IGVsc2UgaWYgKHkgPCBtaW5ZKSB7XG4gICAgICAgICAgeSA9IG1pblk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZi54ICE9PSB4IHx8IHNlbGYueSAhPT0geSkge1xuICAgICAgICAgIGZvcmNlWmVyb1ZlbG9jaXR5ID0gdHJ1ZTtcbiAgICAgICAgICBzZWxmLnggPSBzZWxmLmVuZFggPSB4O1xuXG4gICAgICAgICAgaWYgKHJvdGF0aW9uTW9kZSkge1xuICAgICAgICAgICAgc2VsZi5lbmRSb3RhdGlvbiA9IHg7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYueSA9IHNlbGYuZW5kWSA9IHk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlydHkgPSB0cnVlO1xuICAgICAgICAgIHJlbmRlcih0cnVlKTtcblxuICAgICAgICAgIGlmIChzZWxmLmF1dG9TY3JvbGwgJiYgIXNlbGYuaXNEcmFnZ2luZykge1xuICAgICAgICAgICAgX3JlY29yZE1heFNjcm9sbHModGFyZ2V0LnBhcmVudE5vZGUpO1xuXG4gICAgICAgICAgICBlID0gdGFyZ2V0O1xuICAgICAgICAgICAgX3dpbmRvd1Byb3h5LnNjcm9sbFRvcCA9IF93aW4ucGFnZVlPZmZzZXQgIT0gbnVsbCA/IF93aW4ucGFnZVlPZmZzZXQgOiBvd25lckRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wICE9IG51bGwgPyBvd25lckRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIDogb3duZXJEb2MuYm9keS5zY3JvbGxUb3A7XG4gICAgICAgICAgICBfd2luZG93UHJveHkuc2Nyb2xsTGVmdCA9IF93aW4ucGFnZVhPZmZzZXQgIT0gbnVsbCA/IF93aW4ucGFnZVhPZmZzZXQgOiBvd25lckRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCAhPSBudWxsID8gb3duZXJEb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgOiBvd25lckRvYy5ib2R5LnNjcm9sbExlZnQ7XG5cbiAgICAgICAgICAgIHdoaWxlIChlICYmICFpc1Jvb3QpIHtcbiAgICAgICAgICAgICAgLy93YWxrIHVwIHRoZSBjaGFpbiBhbmQgc2Vuc2Ugd2hlcmV2ZXIgdGhlIHNjcm9sbFRvcC9zY3JvbGxMZWZ0IGV4Y2VlZHMgdGhlIG1heGltdW0uXG4gICAgICAgICAgICAgIGlzUm9vdCA9IF9pc1Jvb3QoZS5wYXJlbnROb2RlKTtcbiAgICAgICAgICAgICAgcGFyZW50ID0gaXNSb290ID8gX3dpbmRvd1Byb3h5IDogZS5wYXJlbnROb2RlO1xuXG4gICAgICAgICAgICAgIGlmIChhbGxvd1kgJiYgcGFyZW50LnNjcm9sbFRvcCA+IHBhcmVudC5fZ3NNYXhTY3JvbGxZKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50LnNjcm9sbFRvcCA9IHBhcmVudC5fZ3NNYXhTY3JvbGxZO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGFsbG93WCAmJiBwYXJlbnQuc2Nyb2xsTGVmdCA+IHBhcmVudC5fZ3NNYXhTY3JvbGxYKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50LnNjcm9sbExlZnQgPSBwYXJlbnQuX2dzTWF4U2Nyb2xsWDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGUgPSBwYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGYuaXNUaHJvd2luZyAmJiAoZm9yY2VaZXJvVmVsb2NpdHkgfHwgc2VsZi5lbmRYID4gbWF4WCB8fCBzZWxmLmVuZFggPCBtaW5YIHx8IHNlbGYuZW5kWSA+IG1heFkgfHwgc2VsZi5lbmRZIDwgbWluWSkpIHtcbiAgICAgICAgICBhbmltYXRlKHZhcnMuaW5lcnRpYSB8fCB2YXJzLnRocm93UHJvcHMsIGZvcmNlWmVyb1ZlbG9jaXR5KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9O1xuXG4gICAgX3RoaXMyLnVwZGF0ZSA9IGZ1bmN0aW9uIChhcHBseUJvdW5kcywgc3RpY2t5LCBpZ25vcmVFeHRlcm5hbENoYW5nZXMpIHtcbiAgICAgIGlmIChzdGlja3kgJiYgc2VsZi5pc1ByZXNzZWQpIHtcbiAgICAgICAgLy8gaW4gY2FzZSB0aGUgZWxlbWVudCB3YXMgcmVwb3NpdGlvbmVkIGluIHRoZSBkb2N1bWVudCBmbG93LCB0aHVzIGl0cyB4L3kgbWF5IGJlIGlkZW50aWNhbCBidXQgaXRzIHBvc2l0aW9uIGlzIGFjdHVhbGx5IHF1aXRlIGRpZmZlcmVudC5cbiAgICAgICAgdmFyIG0gPSBnZXRHbG9iYWxNYXRyaXgodGFyZ2V0KSxcbiAgICAgICAgICAgIHAgPSBpbm5lck1hdHJpeC5hcHBseSh7XG4gICAgICAgICAgeDogc2VsZi54IC0gc3RhcnRFbGVtZW50WCxcbiAgICAgICAgICB5OiBzZWxmLnkgLSBzdGFydEVsZW1lbnRZXG4gICAgICAgIH0pLFxuICAgICAgICAgICAgbTIgPSBnZXRHbG9iYWxNYXRyaXgodGFyZ2V0LnBhcmVudE5vZGUsIHRydWUpO1xuICAgICAgICBtMi5hcHBseSh7XG4gICAgICAgICAgeDogbS5lIC0gcC54LFxuICAgICAgICAgIHk6IG0uZiAtIHAueVxuICAgICAgICB9LCBwKTtcbiAgICAgICAgc2VsZi54IC09IHAueCAtIG0yLmU7XG4gICAgICAgIHNlbGYueSAtPSBwLnkgLSBtMi5mO1xuICAgICAgICByZW5kZXIodHJ1ZSk7XG4gICAgICAgIHJlY29yZFN0YXJ0UG9zaXRpb25zKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciB4ID0gc2VsZi54LFxuICAgICAgICAgIHkgPSBzZWxmLnk7XG4gICAgICB1cGRhdGVNYXRyaXgoIXN0aWNreSk7XG5cbiAgICAgIGlmIChhcHBseUJvdW5kcykge1xuICAgICAgICBzZWxmLmFwcGx5Qm91bmRzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXJ0eSAmJiBpZ25vcmVFeHRlcm5hbENoYW5nZXMgJiYgcmVuZGVyKHRydWUpO1xuICAgICAgICBzeW5jWFkodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGlja3kpIHtcbiAgICAgICAgc2V0UG9pbnRlclBvc2l0aW9uKHNlbGYucG9pbnRlclgsIHNlbGYucG9pbnRlclkpO1xuICAgICAgICBkaXJ0eSAmJiByZW5kZXIodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxmLmlzUHJlc3NlZCAmJiAhc3RpY2t5ICYmIChhbGxvd1ggJiYgTWF0aC5hYnMoeCAtIHNlbGYueCkgPiAwLjAxIHx8IGFsbG93WSAmJiBNYXRoLmFicyh5IC0gc2VsZi55KSA+IDAuMDEgJiYgIXJvdGF0aW9uTW9kZSkpIHtcbiAgICAgICAgcmVjb3JkU3RhcnRQb3NpdGlvbnMoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGYuYXV0b1Njcm9sbCkge1xuICAgICAgICBfcmVjb3JkTWF4U2Nyb2xscyh0YXJnZXQucGFyZW50Tm9kZSwgc2VsZi5pc0RyYWdnaW5nKTtcblxuICAgICAgICBjaGVja0F1dG9TY3JvbGxCb3VuZHMgPSBzZWxmLmlzRHJhZ2dpbmc7XG4gICAgICAgIHJlbmRlcih0cnVlKTsgLy9pbiBjYXNlIHJlcGFyZW50aW5nIG9jY3VycmVkLlxuXG4gICAgICAgIF9yZW1vdmVTY3JvbGxMaXN0ZW5lcih0YXJnZXQsIHVwZGF0ZVNjcm9sbCk7XG5cbiAgICAgICAgX2FkZFNjcm9sbExpc3RlbmVyKHRhcmdldCwgdXBkYXRlU2Nyb2xsKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfTtcblxuICAgIF90aGlzMi5lbmFibGUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgdmFyIHNldFZhcnMgPSB7XG4gICAgICAgIGxhenk6IHRydWVcbiAgICAgIH0sXG4gICAgICAgICAgaWQsXG4gICAgICAgICAgaSxcbiAgICAgICAgICB0cmlnZ2VyO1xuXG4gICAgICBpZiAodmFycy5jdXJzb3IgIT09IGZhbHNlKSB7XG4gICAgICAgIHNldFZhcnMuY3Vyc29yID0gdmFycy5jdXJzb3IgfHwgX2RlZmF1bHRDdXJzb3I7XG4gICAgICB9XG5cbiAgICAgIGlmIChnc2FwLnV0aWxzLmNoZWNrUHJlZml4KFwidG91Y2hDYWxsb3V0XCIpKSB7XG4gICAgICAgIHNldFZhcnMudG91Y2hDYWxsb3V0ID0gXCJub25lXCI7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlICE9PSBcInNvZnRcIikge1xuICAgICAgICBfc2V0VG91Y2hBY3Rpb25Gb3JBbGxEZXNjZW5kYW50cyh0cmlnZ2VycywgYWxsb3dYID09PSBhbGxvd1kgPyBcIm5vbmVcIiA6IHZhcnMuYWxsb3dOYXRpdmVUb3VjaFNjcm9sbGluZyAmJiB0YXJnZXQuc2Nyb2xsSGVpZ2h0ID09PSB0YXJnZXQuY2xpZW50SGVpZ2h0ID09PSAodGFyZ2V0LnNjcm9sbFdpZHRoID09PSB0YXJnZXQuY2xpZW50SGVpZ2h0KSB8fCB2YXJzLmFsbG93RXZlbnREZWZhdWx0ID8gXCJtYW5pcHVsYXRpb25cIiA6IGFsbG93WCA/IFwicGFuLXlcIiA6IFwicGFuLXhcIik7IC8vIFNvbWUgYnJvd3NlcnMgbGlrZSBJbnRlcm5ldCBFeHBsb3JlciB3aWxsIGZpcmUgYSBwb2ludGVyY2FuY2VsIGV2ZW50IHdoZW4gdGhlIHVzZXIgYXR0ZW1wdHMgdG8gZHJhZyB3aGVuIHRvdWNoQWN0aW9uIGlzIFwibWFuaXB1bGF0ZVwiIGJlY2F1c2UgaXQncyBwZXJjZWl2ZWQgYXMgYSBwYW4uIElmIHRoZSBlbGVtZW50IGhhcyBzY3JvbGxhYmxlIGNvbnRlbnQgaW4gb25seSBvbmUgZGlyZWN0aW9uLCB3ZSBzaG91bGQgdXNlIHBhbi14IG9yIHBhbi15IGFjY29yZGluZ2x5IHNvIHRoYXQgdGhlIHBvaW50ZXJjYW5jZWwgZG9lc24ndCBwcmV2ZW50IGRyYWdnaW5nLlxuXG5cbiAgICAgICAgaSA9IHRyaWdnZXJzLmxlbmd0aDtcblxuICAgICAgICB3aGlsZSAoLS1pID4gLTEpIHtcbiAgICAgICAgICB0cmlnZ2VyID0gdHJpZ2dlcnNbaV07XG4gICAgICAgICAgX3N1cHBvcnRzUG9pbnRlciB8fCBfYWRkTGlzdGVuZXIodHJpZ2dlciwgXCJtb3VzZWRvd25cIiwgb25QcmVzcyk7XG5cbiAgICAgICAgICBfYWRkTGlzdGVuZXIodHJpZ2dlciwgXCJ0b3VjaHN0YXJ0XCIsIG9uUHJlc3MpO1xuXG4gICAgICAgICAgX2FkZExpc3RlbmVyKHRyaWdnZXIsIFwiY2xpY2tcIiwgb25DbGljaywgdHJ1ZSk7IC8vbm90ZTogdXNlZCB0byBwYXNzIHRydWUgZm9yIGNhcHR1cmUgYnV0IGl0IHByZXZlbnRlZCBjbGljay10by1wbGF5LXZpZGVvIGZ1bmN0aW9uYWxpdHkgaW4gRmlyZWZveC5cblxuXG4gICAgICAgICAgZ3NhcC5zZXQodHJpZ2dlciwgc2V0VmFycyk7XG5cbiAgICAgICAgICBpZiAodHJpZ2dlci5nZXRCQm94ICYmIHRyaWdnZXIub3duZXJTVkdFbGVtZW50KSB7XG4gICAgICAgICAgICAvLyBhIGJ1ZyBpbiBjaHJvbWUgZG9lc24ndCByZXNwZWN0IHRvdWNoLWFjdGlvbiBvbiBTVkcgZWxlbWVudHMgLSBpdCBvbmx5IHdvcmtzIGlmIHdlIHNldCBpdCBvbiB0aGUgcGFyZW50IFNWRy5cbiAgICAgICAgICAgIGdzYXAuc2V0KHRyaWdnZXIub3duZXJTVkdFbGVtZW50LCB7XG4gICAgICAgICAgICAgIHRvdWNoQWN0aW9uOiBhbGxvd1ggPT09IGFsbG93WSA/IFwibm9uZVwiIDogdmFycy5hbGxvd05hdGl2ZVRvdWNoU2Nyb2xsaW5nIHx8IHZhcnMuYWxsb3dFdmVudERlZmF1bHQgPyBcIm1hbmlwdWxhdGlvblwiIDogYWxsb3dYID8gXCJwYW4teVwiIDogXCJwYW4teFwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXJzLmFsbG93Q29udGV4dE1lbnUgfHwgX2FkZExpc3RlbmVyKHRyaWdnZXIsIFwiY29udGV4dG1lbnVcIiwgb25Db250ZXh0TWVudSk7XG4gICAgICAgIH1cblxuICAgICAgICBfc2V0U2VsZWN0YWJsZSh0cmlnZ2VycywgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICBfYWRkU2Nyb2xsTGlzdGVuZXIodGFyZ2V0LCB1cGRhdGVTY3JvbGwpO1xuXG4gICAgICBlbmFibGVkID0gdHJ1ZTtcblxuICAgICAgaWYgKEluZXJ0aWFQbHVnaW4gJiYgdHlwZSAhPT0gXCJzb2Z0XCIpIHtcbiAgICAgICAgSW5lcnRpYVBsdWdpbi50cmFjayhzY3JvbGxQcm94eSB8fCB0YXJnZXQsIHh5TW9kZSA/IFwieCx5XCIgOiByb3RhdGlvbk1vZGUgPyBcInJvdGF0aW9uXCIgOiBcInRvcCxsZWZ0XCIpO1xuICAgICAgfVxuXG4gICAgICB0YXJnZXQuX2dzRHJhZ0lEID0gaWQgPSBcImRcIiArIF9sb29rdXBDb3VudCsrO1xuICAgICAgX2xvb2t1cFtpZF0gPSBzZWxmO1xuXG4gICAgICBpZiAoc2Nyb2xsUHJveHkpIHtcbiAgICAgICAgc2Nyb2xsUHJveHkuZW5hYmxlKCk7XG4gICAgICAgIHNjcm9sbFByb3h5LmVsZW1lbnQuX2dzRHJhZ0lEID0gaWQ7XG4gICAgICB9XG5cbiAgICAgICh2YXJzLmJvdW5kcyB8fCByb3RhdGlvbk1vZGUpICYmIHJlY29yZFN0YXJ0UG9zaXRpb25zKCk7XG4gICAgICB2YXJzLmJvdW5kcyAmJiBzZWxmLmFwcGx5Qm91bmRzKCk7XG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9O1xuXG4gICAgX3RoaXMyLmRpc2FibGUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgdmFyIGRyYWdnaW5nID0gc2VsZi5pc0RyYWdnaW5nLFxuICAgICAgICAgIGkgPSB0cmlnZ2Vycy5sZW5ndGgsXG4gICAgICAgICAgdHJpZ2dlcjtcblxuICAgICAgd2hpbGUgKC0taSA+IC0xKSB7XG4gICAgICAgIF9zZXRTdHlsZSh0cmlnZ2Vyc1tpXSwgXCJjdXJzb3JcIiwgbnVsbCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlICE9PSBcInNvZnRcIikge1xuICAgICAgICBfc2V0VG91Y2hBY3Rpb25Gb3JBbGxEZXNjZW5kYW50cyh0cmlnZ2VycywgbnVsbCk7XG5cbiAgICAgICAgaSA9IHRyaWdnZXJzLmxlbmd0aDtcblxuICAgICAgICB3aGlsZSAoLS1pID4gLTEpIHtcbiAgICAgICAgICB0cmlnZ2VyID0gdHJpZ2dlcnNbaV07XG5cbiAgICAgICAgICBfc2V0U3R5bGUodHJpZ2dlciwgXCJ0b3VjaENhbGxvdXRcIiwgbnVsbCk7XG5cbiAgICAgICAgICBfcmVtb3ZlTGlzdGVuZXIodHJpZ2dlciwgXCJtb3VzZWRvd25cIiwgb25QcmVzcyk7XG5cbiAgICAgICAgICBfcmVtb3ZlTGlzdGVuZXIodHJpZ2dlciwgXCJ0b3VjaHN0YXJ0XCIsIG9uUHJlc3MpO1xuXG4gICAgICAgICAgX3JlbW92ZUxpc3RlbmVyKHRyaWdnZXIsIFwiY2xpY2tcIiwgb25DbGljayk7XG5cbiAgICAgICAgICBfcmVtb3ZlTGlzdGVuZXIodHJpZ2dlciwgXCJjb250ZXh0bWVudVwiLCBvbkNvbnRleHRNZW51KTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9zZXRTZWxlY3RhYmxlKHRyaWdnZXJzLCB0cnVlKTtcblxuICAgICAgICBpZiAodG91Y2hFdmVudFRhcmdldCkge1xuICAgICAgICAgIF9yZW1vdmVMaXN0ZW5lcih0b3VjaEV2ZW50VGFyZ2V0LCBcInRvdWNoY2FuY2VsXCIsIG9uUmVsZWFzZSk7XG5cbiAgICAgICAgICBfcmVtb3ZlTGlzdGVuZXIodG91Y2hFdmVudFRhcmdldCwgXCJ0b3VjaGVuZFwiLCBvblJlbGVhc2UpO1xuXG4gICAgICAgICAgX3JlbW92ZUxpc3RlbmVyKHRvdWNoRXZlbnRUYXJnZXQsIFwidG91Y2htb3ZlXCIsIG9uTW92ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBfcmVtb3ZlTGlzdGVuZXIob3duZXJEb2MsIFwibW91c2V1cFwiLCBvblJlbGVhc2UpO1xuXG4gICAgICAgIF9yZW1vdmVMaXN0ZW5lcihvd25lckRvYywgXCJtb3VzZW1vdmVcIiwgb25Nb3ZlKTtcbiAgICAgIH1cblxuICAgICAgX3JlbW92ZVNjcm9sbExpc3RlbmVyKHRhcmdldCwgdXBkYXRlU2Nyb2xsKTtcblxuICAgICAgZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgSW5lcnRpYVBsdWdpbiAmJiB0eXBlICE9PSBcInNvZnRcIiAmJiBJbmVydGlhUGx1Z2luLnVudHJhY2soc2Nyb2xsUHJveHkgfHwgdGFyZ2V0LCB4eU1vZGUgPyBcIngseVwiIDogcm90YXRpb25Nb2RlID8gXCJyb3RhdGlvblwiIDogXCJ0b3AsbGVmdFwiKTtcbiAgICAgIHNjcm9sbFByb3h5ICYmIHNjcm9sbFByb3h5LmRpc2FibGUoKTtcblxuICAgICAgX3JlbW92ZUZyb21SZW5kZXJRdWV1ZShyZW5kZXIpO1xuXG4gICAgICBzZWxmLmlzRHJhZ2dpbmcgPSBzZWxmLmlzUHJlc3NlZCA9IGlzQ2xpY2tpbmcgPSBmYWxzZTtcbiAgICAgIGRyYWdnaW5nICYmIF9kaXNwYXRjaEV2ZW50KHNlbGYsIFwiZHJhZ2VuZFwiLCBcIm9uRHJhZ0VuZFwiKTtcbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH07XG5cbiAgICBfdGhpczIuZW5hYmxlZCA9IGZ1bmN0aW9uICh2YWx1ZSwgdHlwZSkge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyB2YWx1ZSA/IHNlbGYuZW5hYmxlKHR5cGUpIDogc2VsZi5kaXNhYmxlKHR5cGUpIDogZW5hYmxlZDtcbiAgICB9O1xuXG4gICAgX3RoaXMyLmtpbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLmlzVGhyb3dpbmcgPSBmYWxzZTtcbiAgICAgIHNlbGYudHdlZW4gJiYgc2VsZi50d2Vlbi5raWxsKCk7XG4gICAgICBzZWxmLmRpc2FibGUoKTtcbiAgICAgIGdzYXAuc2V0KHRyaWdnZXJzLCB7XG4gICAgICAgIGNsZWFyUHJvcHM6IFwidXNlclNlbGVjdFwiXG4gICAgICB9KTtcbiAgICAgIGRlbGV0ZSBfbG9va3VwW3RhcmdldC5fZ3NEcmFnSURdO1xuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfTtcblxuICAgIGlmICh+dHlwZS5pbmRleE9mKFwic2Nyb2xsXCIpKSB7XG4gICAgICBzY3JvbGxQcm94eSA9IF90aGlzMi5zY3JvbGxQcm94eSA9IG5ldyBTY3JvbGxQcm94eSh0YXJnZXQsIF9leHRlbmQoe1xuICAgICAgICBvbktpbGw6IGZ1bmN0aW9uIG9uS2lsbCgpIHtcbiAgICAgICAgICAvL1Njcm9sbFByb3h5J3Mgb25LaWxsKCkgZ2V0cyBjYWxsZWQgaWYvd2hlbiB0aGUgU2Nyb2xsUHJveHkgc2Vuc2VzIHRoYXQgdGhlIHVzZXIgaW50ZXJhY3RlZCB3aXRoIHRoZSBzY3JvbGwgcG9zaXRpb24gbWFudWFsbHkgKGxpa2UgdXNpbmcgdGhlIHNjcm9sbGJhcikuIElFOSBkb2Vzbid0IGZpcmUgdGhlIFwibW91c2V1cFwiIHByb3Blcmx5IHdoZW4gdXNlcnMgZHJhZyB0aGUgc2Nyb2xsYmFyIG9mIGFuIGVsZW1lbnQsIHNvIHRoaXMgd29ya3MgYXJvdW5kIHRoYXQgaXNzdWUuXG4gICAgICAgICAgc2VsZi5pc1ByZXNzZWQgJiYgb25SZWxlYXNlKG51bGwpO1xuICAgICAgICB9XG4gICAgICB9LCB2YXJzKSk7IC8vYSBidWcgaW4gbWFueSBBbmRyb2lkIGRldmljZXMnIHN0b2NrIGJyb3dzZXIgY2F1c2VzIHNjcm9sbFRvcCB0byBnZXQgZm9yY2VkIGJhY2sgdG8gMCBhZnRlciBpdCBpcyBhbHRlcmVkIHZpYSBKUywgc28gd2Ugc2V0IG92ZXJmbG93IHRvIFwiaGlkZGVuXCIgb24gbW9iaWxlL3RvdWNoIGRldmljZXMgKHRoZXkgaGlkZSB0aGUgc2Nyb2xsIGJhciBhbnl3YXkpLiBUaGF0IHdvcmtzIGFyb3VuZCB0aGUgYnVnLiAoVGhpcyBidWcgaXMgZGlzY3Vzc2VkIGF0IGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvYW5kcm9pZC9pc3N1ZXMvZGV0YWlsP2lkPTE5NjI1KVxuXG4gICAgICB0YXJnZXQuc3R5bGUub3ZlcmZsb3dZID0gYWxsb3dZICYmICFfaXNUb3VjaERldmljZSA/IFwiYXV0b1wiIDogXCJoaWRkZW5cIjtcbiAgICAgIHRhcmdldC5zdHlsZS5vdmVyZmxvd1ggPSBhbGxvd1ggJiYgIV9pc1RvdWNoRGV2aWNlID8gXCJhdXRvXCIgOiBcImhpZGRlblwiO1xuICAgICAgdGFyZ2V0ID0gc2Nyb2xsUHJveHkuY29udGVudDtcbiAgICB9XG5cbiAgICBpZiAocm90YXRpb25Nb2RlKSB7XG4gICAgICBraWxsUHJvcHMucm90YXRpb24gPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoYWxsb3dYKSB7XG4gICAgICAgIGtpbGxQcm9wc1t4UHJvcF0gPSAxO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWxsb3dZKSB7XG4gICAgICAgIGtpbGxQcm9wc1t5UHJvcF0gPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdzQ2FjaGUuZm9yY2UzRCA9IFwiZm9yY2UzRFwiIGluIHZhcnMgPyB2YXJzLmZvcmNlM0QgOiB0cnVlOyAvL290aGVyd2lzZSwgbm9ybWFsIGRyYWdnaW5nIHdvdWxkIGJlIGluIDJEIGFuZCB0aGVuIGFzIHNvb24gYXMgaXQncyByZWxlYXNlZCBhbmQgdGhlcmUncyBhbiBpbmVydGlhIHR3ZWVuLCBpdCdkIGp1bXAgdG8gM0Qgd2hpY2ggY2FuIGNyZWF0ZSBhbiBpbml0aWFsIGp1bXAgZHVlIHRvIHRoZSB3b3JrIHRoZSBicm93c2VyIG11c3QgdG8gZG8gbGF5ZXJpemUgaXQuXG5cbiAgICBfdGhpczIuZW5hYmxlKCk7XG5cbiAgICByZXR1cm4gX3RoaXMyO1xuICB9XG5cbiAgRHJhZ2dhYmxlLnJlZ2lzdGVyID0gZnVuY3Rpb24gcmVnaXN0ZXIoY29yZSkge1xuICAgIGdzYXAgPSBjb3JlO1xuXG4gICAgX2luaXRDb3JlKCk7XG4gIH07XG5cbiAgRHJhZ2dhYmxlLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZSh0YXJnZXRzLCB2YXJzKSB7XG4gICAgX2NvcmVJbml0dGVkIHx8IF9pbml0Q29yZSh0cnVlKTtcbiAgICByZXR1cm4gX3RvQXJyYXkodGFyZ2V0cykubWFwKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKHRhcmdldCwgdmFycyk7XG4gICAgfSk7XG4gIH07XG5cbiAgRHJhZ2dhYmxlLmdldCA9IGZ1bmN0aW9uIGdldCh0YXJnZXQpIHtcbiAgICByZXR1cm4gX2xvb2t1cFsoX3RvQXJyYXkodGFyZ2V0KVswXSB8fCB7fSkuX2dzRHJhZ0lEXTtcbiAgfTtcblxuICBEcmFnZ2FibGUudGltZVNpbmNlRHJhZyA9IGZ1bmN0aW9uIHRpbWVTaW5jZURyYWcoKSB7XG4gICAgcmV0dXJuIChfZ2V0VGltZSgpIC0gX2xhc3REcmFnVGltZSkgLyAxMDAwO1xuICB9O1xuXG4gIERyYWdnYWJsZS5oaXRUZXN0ID0gZnVuY3Rpb24gaGl0VGVzdChvYmoxLCBvYmoyLCB0aHJlc2hvbGQpIHtcbiAgICBpZiAob2JqMSA9PT0gb2JqMikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciByMSA9IF9wYXJzZVJlY3Qob2JqMSksXG4gICAgICAgIHIyID0gX3BhcnNlUmVjdChvYmoyKSxcbiAgICAgICAgdG9wID0gcjEudG9wLFxuICAgICAgICBsZWZ0ID0gcjEubGVmdCxcbiAgICAgICAgcmlnaHQgPSByMS5yaWdodCxcbiAgICAgICAgYm90dG9tID0gcjEuYm90dG9tLFxuICAgICAgICB3aWR0aCA9IHIxLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSByMS5oZWlnaHQsXG4gICAgICAgIGlzT3V0c2lkZSA9IHIyLmxlZnQgPiByaWdodCB8fCByMi5yaWdodCA8IGxlZnQgfHwgcjIudG9wID4gYm90dG9tIHx8IHIyLmJvdHRvbSA8IHRvcCxcbiAgICAgICAgb3ZlcmxhcCxcbiAgICAgICAgYXJlYSxcbiAgICAgICAgaXNSYXRpbztcblxuICAgIGlmIChpc091dHNpZGUgfHwgIXRocmVzaG9sZCkge1xuICAgICAgcmV0dXJuICFpc091dHNpZGU7XG4gICAgfVxuXG4gICAgaXNSYXRpbyA9ICh0aHJlc2hvbGQgKyBcIlwiKS5pbmRleE9mKFwiJVwiKSAhPT0gLTE7XG4gICAgdGhyZXNob2xkID0gcGFyc2VGbG9hdCh0aHJlc2hvbGQpIHx8IDA7XG4gICAgb3ZlcmxhcCA9IHtcbiAgICAgIGxlZnQ6IE1hdGgubWF4KGxlZnQsIHIyLmxlZnQpLFxuICAgICAgdG9wOiBNYXRoLm1heCh0b3AsIHIyLnRvcClcbiAgICB9O1xuICAgIG92ZXJsYXAud2lkdGggPSBNYXRoLm1pbihyaWdodCwgcjIucmlnaHQpIC0gb3ZlcmxhcC5sZWZ0O1xuICAgIG92ZXJsYXAuaGVpZ2h0ID0gTWF0aC5taW4oYm90dG9tLCByMi5ib3R0b20pIC0gb3ZlcmxhcC50b3A7XG5cbiAgICBpZiAob3ZlcmxhcC53aWR0aCA8IDAgfHwgb3ZlcmxhcC5oZWlnaHQgPCAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGlzUmF0aW8pIHtcbiAgICAgIHRocmVzaG9sZCAqPSAwLjAxO1xuICAgICAgYXJlYSA9IG92ZXJsYXAud2lkdGggKiBvdmVybGFwLmhlaWdodDtcbiAgICAgIHJldHVybiBhcmVhID49IHdpZHRoICogaGVpZ2h0ICogdGhyZXNob2xkIHx8IGFyZWEgPj0gcjIud2lkdGggKiByMi5oZWlnaHQgKiB0aHJlc2hvbGQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG92ZXJsYXAud2lkdGggPiB0aHJlc2hvbGQgJiYgb3ZlcmxhcC5oZWlnaHQgPiB0aHJlc2hvbGQ7XG4gIH07XG5cbiAgcmV0dXJuIERyYWdnYWJsZTtcbn0oRXZlbnREaXNwYXRjaGVyKTtcblxuX3NldERlZmF1bHRzKERyYWdnYWJsZS5wcm90b3R5cGUsIHtcbiAgcG9pbnRlclg6IDAsXG4gIHBvaW50ZXJZOiAwLFxuICBzdGFydFg6IDAsXG4gIHN0YXJ0WTogMCxcbiAgZGVsdGFYOiAwLFxuICBkZWx0YVk6IDAsXG4gIGlzRHJhZ2dpbmc6IGZhbHNlLFxuICBpc1ByZXNzZWQ6IGZhbHNlXG59KTtcblxuRHJhZ2dhYmxlLnpJbmRleCA9IDEwMDA7XG5EcmFnZ2FibGUudmVyc2lvbiA9IFwiMy4xMC40XCI7XG5fZ2V0R1NBUCgpICYmIGdzYXAucmVnaXN0ZXJQbHVnaW4oRHJhZ2dhYmxlKTtcbmV4cG9ydCB7IERyYWdnYWJsZSBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKiFcbiAqIEdTQVAgMy4xMC40XG4gKiBodHRwczovL2dyZWVuc29jay5jb21cbiAqXG4gKiBAbGljZW5zZSBDb3B5cmlnaHQgMjAwOC0yMDIyLCBHcmVlblNvY2suIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBTdWJqZWN0IHRvIHRoZSB0ZXJtcyBhdCBodHRwczovL2dyZWVuc29jay5jb20vc3RhbmRhcmQtbGljZW5zZSBvciBmb3JcbiAqIENsdWIgR3JlZW5Tb2NrIG1lbWJlcnMsIHRoZSBhZ3JlZW1lbnQgaXNzdWVkIHdpdGggdGhhdCBtZW1iZXJzaGlwLlxuICogQGF1dGhvcjogSmFjayBEb3lsZSwgamFja0BncmVlbnNvY2suY29tXG4qL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xudmFyIF9jb25maWcgPSB7XG4gIGF1dG9TbGVlcDogMTIwLFxuICBmb3JjZTNEOiBcImF1dG9cIixcbiAgbnVsbFRhcmdldFdhcm46IDEsXG4gIHVuaXRzOiB7XG4gICAgbGluZUhlaWdodDogXCJcIlxuICB9XG59LFxuICAgIF9kZWZhdWx0cyA9IHtcbiAgZHVyYXRpb246IC41LFxuICBvdmVyd3JpdGU6IGZhbHNlLFxuICBkZWxheTogMFxufSxcbiAgICBfc3VwcHJlc3NPdmVyd3JpdGVzLFxuICAgIF9iaWdOdW0gPSAxZTgsXG4gICAgX3RpbnlOdW0gPSAxIC8gX2JpZ051bSxcbiAgICBfMlBJID0gTWF0aC5QSSAqIDIsXG4gICAgX0hBTEZfUEkgPSBfMlBJIC8gNCxcbiAgICBfZ3NJRCA9IDAsXG4gICAgX3NxcnQgPSBNYXRoLnNxcnQsXG4gICAgX2NvcyA9IE1hdGguY29zLFxuICAgIF9zaW4gPSBNYXRoLnNpbixcbiAgICBfaXNTdHJpbmcgPSBmdW5jdGlvbiBfaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIjtcbn0sXG4gICAgX2lzRnVuY3Rpb24gPSBmdW5jdGlvbiBfaXNGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCI7XG59LFxuICAgIF9pc051bWJlciA9IGZ1bmN0aW9uIF9pc051bWJlcih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiO1xufSxcbiAgICBfaXNVbmRlZmluZWQgPSBmdW5jdGlvbiBfaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIjtcbn0sXG4gICAgX2lzT2JqZWN0ID0gZnVuY3Rpb24gX2lzT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCI7XG59LFxuICAgIF9pc05vdEZhbHNlID0gZnVuY3Rpb24gX2lzTm90RmFsc2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSBmYWxzZTtcbn0sXG4gICAgX3dpbmRvd0V4aXN0cyA9IGZ1bmN0aW9uIF93aW5kb3dFeGlzdHMoKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiO1xufSxcbiAgICBfaXNGdW5jT3JTdHJpbmcgPSBmdW5jdGlvbiBfaXNGdW5jT3JTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIF9pc0Z1bmN0aW9uKHZhbHVlKSB8fCBfaXNTdHJpbmcodmFsdWUpO1xufSxcbiAgICBfaXNUeXBlZEFycmF5ID0gdHlwZW9mIEFycmF5QnVmZmVyID09PSBcImZ1bmN0aW9uXCIgJiYgQXJyYXlCdWZmZXIuaXNWaWV3IHx8IGZ1bmN0aW9uICgpIHt9LFxuICAgIC8vIG5vdGU6IElFMTAgaGFzIEFycmF5QnVmZmVyLCBidXQgTk9UIEFycmF5QnVmZmVyLmlzVmlldygpLlxuX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5LFxuICAgIF9zdHJpY3ROdW1FeHAgPSAvKD86LT9cXC4/XFxkfFxcLikrL2dpLFxuICAgIC8vb25seSBudW1iZXJzIChpbmNsdWRpbmcgbmVnYXRpdmVzIGFuZCBkZWNpbWFscykgYnV0IE5PVCByZWxhdGl2ZSB2YWx1ZXMuXG5fbnVtRXhwID0gL1stKz0uXSpcXGQrWy5lXFwtK10qXFxkKltlXFwtK10qXFxkKi9nLFxuICAgIC8vZmluZHMgYW55IG51bWJlcnMsIGluY2x1ZGluZyBvbmVzIHRoYXQgc3RhcnQgd2l0aCArPSBvciAtPSwgbmVnYXRpdmUgbnVtYmVycywgYW5kIG9uZXMgaW4gc2NpZW50aWZpYyBub3RhdGlvbiBsaWtlIDFlLTguXG5fbnVtV2l0aFVuaXRFeHAgPSAvWy0rPS5dKlxcZCtbLmUtXSpcXGQqW2EteiVdKi9nLFxuICAgIF9jb21wbGV4U3RyaW5nTnVtRXhwID0gL1stKz0uXSpcXGQrXFwuP1xcZCooPzplLXxlXFwrKT9cXGQqL2dpLFxuICAgIC8vZHVwbGljYXRlIHNvIHRoYXQgd2hpbGUgd2UncmUgbG9vcGluZyB0aHJvdWdoIG1hdGNoZXMgZnJvbSBleGVjKCksIGl0IGRvZXNuJ3QgY29udGFtaW5hdGUgdGhlIGxhc3RJbmRleCBvZiBfbnVtRXhwIHdoaWNoIHdlIHVzZSB0byBzZWFyY2ggZm9yIGNvbG9ycyB0b28uXG5fcmVsRXhwID0gL1srLV09LT9bLlxcZF0rLyxcbiAgICBfZGVsaW1pdGVkVmFsdWVFeHAgPSAvW14sJ1wiXFxbXFxdXFxzXSsvZ2ksXG4gICAgLy8gcHJldmlvdXNseSAvWyNcXC0rLl0qXFxiW2EtelxcZFxcLT0rJS5dKy9naSBidXQgZGlkbid0IGNhdGNoIHNwZWNpYWwgY2hhcmFjdGVycy5cbl91bml0RXhwID0gL15bK1xcLT1lXFxzXFxkXSpcXGQrWy5cXGRdKihbYS16XSp8JSlcXHMqJC9pLFxuICAgIF9nbG9iYWxUaW1lbGluZSxcbiAgICBfd2luLFxuICAgIF9jb3JlSW5pdHRlZCxcbiAgICBfZG9jLFxuICAgIF9nbG9iYWxzID0ge30sXG4gICAgX2luc3RhbGxTY29wZSA9IHt9LFxuICAgIF9jb3JlUmVhZHksXG4gICAgX2luc3RhbGwgPSBmdW5jdGlvbiBfaW5zdGFsbChzY29wZSkge1xuICByZXR1cm4gKF9pbnN0YWxsU2NvcGUgPSBfbWVyZ2Uoc2NvcGUsIF9nbG9iYWxzKSkgJiYgZ3NhcDtcbn0sXG4gICAgX21pc3NpbmdQbHVnaW4gPSBmdW5jdGlvbiBfbWlzc2luZ1BsdWdpbihwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgcmV0dXJuIGNvbnNvbGUud2FybihcIkludmFsaWQgcHJvcGVydHlcIiwgcHJvcGVydHksIFwic2V0IHRvXCIsIHZhbHVlLCBcIk1pc3NpbmcgcGx1Z2luPyBnc2FwLnJlZ2lzdGVyUGx1Z2luKClcIik7XG59LFxuICAgIF93YXJuID0gZnVuY3Rpb24gX3dhcm4obWVzc2FnZSwgc3VwcHJlc3MpIHtcbiAgcmV0dXJuICFzdXBwcmVzcyAmJiBjb25zb2xlLndhcm4obWVzc2FnZSk7XG59LFxuICAgIF9hZGRHbG9iYWwgPSBmdW5jdGlvbiBfYWRkR2xvYmFsKG5hbWUsIG9iaikge1xuICByZXR1cm4gbmFtZSAmJiAoX2dsb2JhbHNbbmFtZV0gPSBvYmopICYmIF9pbnN0YWxsU2NvcGUgJiYgKF9pbnN0YWxsU2NvcGVbbmFtZV0gPSBvYmopIHx8IF9nbG9iYWxzO1xufSxcbiAgICBfZW1wdHlGdW5jID0gZnVuY3Rpb24gX2VtcHR5RnVuYygpIHtcbiAgcmV0dXJuIDA7XG59LFxuICAgIF9yZXNlcnZlZFByb3BzID0ge30sXG4gICAgX2xhenlUd2VlbnMgPSBbXSxcbiAgICBfbGF6eUxvb2t1cCA9IHt9LFxuICAgIF9sYXN0UmVuZGVyZWRGcmFtZSxcbiAgICBfcGx1Z2lucyA9IHt9LFxuICAgIF9lZmZlY3RzID0ge30sXG4gICAgX25leHRHQ0ZyYW1lID0gMzAsXG4gICAgX2hhcm5lc3NQbHVnaW5zID0gW10sXG4gICAgX2NhbGxiYWNrTmFtZXMgPSBcIlwiLFxuICAgIF9oYXJuZXNzID0gZnVuY3Rpb24gX2hhcm5lc3ModGFyZ2V0cykge1xuICB2YXIgdGFyZ2V0ID0gdGFyZ2V0c1swXSxcbiAgICAgIGhhcm5lc3NQbHVnaW4sXG4gICAgICBpO1xuICBfaXNPYmplY3QodGFyZ2V0KSB8fCBfaXNGdW5jdGlvbih0YXJnZXQpIHx8ICh0YXJnZXRzID0gW3RhcmdldHNdKTtcblxuICBpZiAoIShoYXJuZXNzUGx1Z2luID0gKHRhcmdldC5fZ3NhcCB8fCB7fSkuaGFybmVzcykpIHtcbiAgICAvLyBmaW5kIHRoZSBmaXJzdCB0YXJnZXQgd2l0aCBhIGhhcm5lc3MuIFdlIGFzc3VtZSB0YXJnZXRzIHBhc3NlZCBpbnRvIGFuIGFuaW1hdGlvbiB3aWxsIGJlIG9mIHNpbWlsYXIgdHlwZSwgbWVhbmluZyB0aGUgc2FtZSBraW5kIG9mIGhhcm5lc3MgY2FuIGJlIHVzZWQgZm9yIHRoZW0gYWxsIChwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24pXG4gICAgaSA9IF9oYXJuZXNzUGx1Z2lucy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tICYmICFfaGFybmVzc1BsdWdpbnNbaV0udGFyZ2V0VGVzdCh0YXJnZXQpKSB7fVxuXG4gICAgaGFybmVzc1BsdWdpbiA9IF9oYXJuZXNzUGx1Z2luc1tpXTtcbiAgfVxuXG4gIGkgPSB0YXJnZXRzLmxlbmd0aDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgdGFyZ2V0c1tpXSAmJiAodGFyZ2V0c1tpXS5fZ3NhcCB8fCAodGFyZ2V0c1tpXS5fZ3NhcCA9IG5ldyBHU0NhY2hlKHRhcmdldHNbaV0sIGhhcm5lc3NQbHVnaW4pKSkgfHwgdGFyZ2V0cy5zcGxpY2UoaSwgMSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0cztcbn0sXG4gICAgX2dldENhY2hlID0gZnVuY3Rpb24gX2dldENhY2hlKHRhcmdldCkge1xuICByZXR1cm4gdGFyZ2V0Ll9nc2FwIHx8IF9oYXJuZXNzKHRvQXJyYXkodGFyZ2V0KSlbMF0uX2dzYXA7XG59LFxuICAgIF9nZXRQcm9wZXJ0eSA9IGZ1bmN0aW9uIF9nZXRQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCB2KSB7XG4gIHJldHVybiAodiA9IHRhcmdldFtwcm9wZXJ0eV0pICYmIF9pc0Z1bmN0aW9uKHYpID8gdGFyZ2V0W3Byb3BlcnR5XSgpIDogX2lzVW5kZWZpbmVkKHYpICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZShwcm9wZXJ0eSkgfHwgdjtcbn0sXG4gICAgX2ZvckVhY2hOYW1lID0gZnVuY3Rpb24gX2ZvckVhY2hOYW1lKG5hbWVzLCBmdW5jKSB7XG4gIHJldHVybiAobmFtZXMgPSBuYW1lcy5zcGxpdChcIixcIikpLmZvckVhY2goZnVuYykgfHwgbmFtZXM7XG59LFxuICAgIC8vc3BsaXQgYSBjb21tYS1kZWxpbWl0ZWQgbGlzdCBvZiBuYW1lcyBpbnRvIGFuIGFycmF5LCB0aGVuIHJ1biBhIGZvckVhY2goKSBmdW5jdGlvbiBhbmQgcmV0dXJuIHRoZSBzcGxpdCBhcnJheSAodGhpcyBpcyBqdXN0IGEgd2F5IHRvIGNvbnNvbGlkYXRlL3Nob3J0ZW4gc29tZSBjb2RlKS5cbl9yb3VuZCA9IGZ1bmN0aW9uIF9yb3VuZCh2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMDAwMCkgLyAxMDAwMDAgfHwgMDtcbn0sXG4gICAgX3JvdW5kUHJlY2lzZSA9IGZ1bmN0aW9uIF9yb3VuZFByZWNpc2UodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiAxMDAwMDAwMCkgLyAxMDAwMDAwMCB8fCAwO1xufSxcbiAgICAvLyBpbmNyZWFzZWQgcHJlY2lzaW9uIG1vc3RseSBmb3IgdGltaW5nIHZhbHVlcy5cbl9wYXJzZVJlbGF0aXZlID0gZnVuY3Rpb24gX3BhcnNlUmVsYXRpdmUoc3RhcnQsIHZhbHVlKSB7XG4gIHZhciBvcGVyYXRvciA9IHZhbHVlLmNoYXJBdCgwKSxcbiAgICAgIGVuZCA9IHBhcnNlRmxvYXQodmFsdWUuc3Vic3RyKDIpKTtcbiAgc3RhcnQgPSBwYXJzZUZsb2F0KHN0YXJ0KTtcbiAgcmV0dXJuIG9wZXJhdG9yID09PSBcIitcIiA/IHN0YXJ0ICsgZW5kIDogb3BlcmF0b3IgPT09IFwiLVwiID8gc3RhcnQgLSBlbmQgOiBvcGVyYXRvciA9PT0gXCIqXCIgPyBzdGFydCAqIGVuZCA6IHN0YXJ0IC8gZW5kO1xufSxcbiAgICBfYXJyYXlDb250YWluc0FueSA9IGZ1bmN0aW9uIF9hcnJheUNvbnRhaW5zQW55KHRvU2VhcmNoLCB0b0ZpbmQpIHtcbiAgLy9zZWFyY2hlcyBvbmUgYXJyYXkgdG8gZmluZCBtYXRjaGVzIGZvciBhbnkgb2YgdGhlIGl0ZW1zIGluIHRoZSB0b0ZpbmQgYXJyYXkuIEFzIHNvb24gYXMgb25lIGlzIGZvdW5kLCBpdCByZXR1cm5zIHRydWUuIEl0IGRvZXMgTk9UIHJldHVybiBhbGwgdGhlIG1hdGNoZXM7IGl0J3Mgc2ltcGx5IGEgYm9vbGVhbiBzZWFyY2guXG4gIHZhciBsID0gdG9GaW5kLmxlbmd0aCxcbiAgICAgIGkgPSAwO1xuXG4gIGZvciAoOyB0b1NlYXJjaC5pbmRleE9mKHRvRmluZFtpXSkgPCAwICYmICsraSA8IGw7KSB7fVxuXG4gIHJldHVybiBpIDwgbDtcbn0sXG4gICAgX2xhenlSZW5kZXIgPSBmdW5jdGlvbiBfbGF6eVJlbmRlcigpIHtcbiAgdmFyIGwgPSBfbGF6eVR3ZWVucy5sZW5ndGgsXG4gICAgICBhID0gX2xhenlUd2VlbnMuc2xpY2UoMCksXG4gICAgICBpLFxuICAgICAgdHdlZW47XG5cbiAgX2xhenlMb29rdXAgPSB7fTtcbiAgX2xhenlUd2VlbnMubGVuZ3RoID0gMDtcblxuICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgdHdlZW4gPSBhW2ldO1xuICAgIHR3ZWVuICYmIHR3ZWVuLl9sYXp5ICYmICh0d2Vlbi5yZW5kZXIodHdlZW4uX2xhenlbMF0sIHR3ZWVuLl9sYXp5WzFdLCB0cnVlKS5fbGF6eSA9IDApO1xuICB9XG59LFxuICAgIF9sYXp5U2FmZVJlbmRlciA9IGZ1bmN0aW9uIF9sYXp5U2FmZVJlbmRlcihhbmltYXRpb24sIHRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSkge1xuICBfbGF6eVR3ZWVucy5sZW5ndGggJiYgX2xhenlSZW5kZXIoKTtcbiAgYW5pbWF0aW9uLnJlbmRlcih0aW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuICBfbGF6eVR3ZWVucy5sZW5ndGggJiYgX2xhenlSZW5kZXIoKTsgLy9pbiBjYXNlIHJlbmRlcmluZyBjYXVzZWQgYW55IHR3ZWVucyB0byBsYXp5LWluaXQsIHdlIHNob3VsZCByZW5kZXIgdGhlbSBiZWNhdXNlIHR5cGljYWxseSB3aGVuIHNvbWVvbmUgY2FsbHMgc2VlaygpIG9yIHRpbWUoKSBvciBwcm9ncmVzcygpLCB0aGV5IGV4cGVjdCBhbiBpbW1lZGlhdGUgcmVuZGVyLlxufSxcbiAgICBfbnVtZXJpY0lmUG9zc2libGUgPSBmdW5jdGlvbiBfbnVtZXJpY0lmUG9zc2libGUodmFsdWUpIHtcbiAgdmFyIG4gPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgcmV0dXJuIChuIHx8IG4gPT09IDApICYmICh2YWx1ZSArIFwiXCIpLm1hdGNoKF9kZWxpbWl0ZWRWYWx1ZUV4cCkubGVuZ3RoIDwgMiA/IG4gOiBfaXNTdHJpbmcodmFsdWUpID8gdmFsdWUudHJpbSgpIDogdmFsdWU7XG59LFxuICAgIF9wYXNzVGhyb3VnaCA9IGZ1bmN0aW9uIF9wYXNzVGhyb3VnaChwKSB7XG4gIHJldHVybiBwO1xufSxcbiAgICBfc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiBfc2V0RGVmYXVsdHMob2JqLCBkZWZhdWx0cykge1xuICBmb3IgKHZhciBwIGluIGRlZmF1bHRzKSB7XG4gICAgcCBpbiBvYmogfHwgKG9ialtwXSA9IGRlZmF1bHRzW3BdKTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59LFxuICAgIF9zZXRLZXlmcmFtZURlZmF1bHRzID0gZnVuY3Rpb24gX3NldEtleWZyYW1lRGVmYXVsdHMoZXhjbHVkZUR1cmF0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiAob2JqLCBkZWZhdWx0cykge1xuICAgIGZvciAodmFyIHAgaW4gZGVmYXVsdHMpIHtcbiAgICAgIHAgaW4gb2JqIHx8IHAgPT09IFwiZHVyYXRpb25cIiAmJiBleGNsdWRlRHVyYXRpb24gfHwgcCA9PT0gXCJlYXNlXCIgfHwgKG9ialtwXSA9IGRlZmF1bHRzW3BdKTtcbiAgICB9XG4gIH07XG59LFxuICAgIF9tZXJnZSA9IGZ1bmN0aW9uIF9tZXJnZShiYXNlLCB0b01lcmdlKSB7XG4gIGZvciAodmFyIHAgaW4gdG9NZXJnZSkge1xuICAgIGJhc2VbcF0gPSB0b01lcmdlW3BdO1xuICB9XG5cbiAgcmV0dXJuIGJhc2U7XG59LFxuICAgIF9tZXJnZURlZXAgPSBmdW5jdGlvbiBfbWVyZ2VEZWVwKGJhc2UsIHRvTWVyZ2UpIHtcbiAgZm9yICh2YXIgcCBpbiB0b01lcmdlKSB7XG4gICAgcCAhPT0gXCJfX3Byb3RvX19cIiAmJiBwICE9PSBcImNvbnN0cnVjdG9yXCIgJiYgcCAhPT0gXCJwcm90b3R5cGVcIiAmJiAoYmFzZVtwXSA9IF9pc09iamVjdCh0b01lcmdlW3BdKSA/IF9tZXJnZURlZXAoYmFzZVtwXSB8fCAoYmFzZVtwXSA9IHt9KSwgdG9NZXJnZVtwXSkgOiB0b01lcmdlW3BdKTtcbiAgfVxuXG4gIHJldHVybiBiYXNlO1xufSxcbiAgICBfY29weUV4Y2x1ZGluZyA9IGZ1bmN0aW9uIF9jb3B5RXhjbHVkaW5nKG9iaiwgZXhjbHVkaW5nKSB7XG4gIHZhciBjb3B5ID0ge30sXG4gICAgICBwO1xuXG4gIGZvciAocCBpbiBvYmopIHtcbiAgICBwIGluIGV4Y2x1ZGluZyB8fCAoY29weVtwXSA9IG9ialtwXSk7XG4gIH1cblxuICByZXR1cm4gY29weTtcbn0sXG4gICAgX2luaGVyaXREZWZhdWx0cyA9IGZ1bmN0aW9uIF9pbmhlcml0RGVmYXVsdHModmFycykge1xuICB2YXIgcGFyZW50ID0gdmFycy5wYXJlbnQgfHwgX2dsb2JhbFRpbWVsaW5lLFxuICAgICAgZnVuYyA9IHZhcnMua2V5ZnJhbWVzID8gX3NldEtleWZyYW1lRGVmYXVsdHMoX2lzQXJyYXkodmFycy5rZXlmcmFtZXMpKSA6IF9zZXREZWZhdWx0cztcblxuICBpZiAoX2lzTm90RmFsc2UodmFycy5pbmhlcml0KSkge1xuICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgIGZ1bmModmFycywgcGFyZW50LnZhcnMuZGVmYXVsdHMpO1xuICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudCB8fCBwYXJlbnQuX2RwO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YXJzO1xufSxcbiAgICBfYXJyYXlzTWF0Y2ggPSBmdW5jdGlvbiBfYXJyYXlzTWF0Y2goYTEsIGEyKSB7XG4gIHZhciBpID0gYTEubGVuZ3RoLFxuICAgICAgbWF0Y2ggPSBpID09PSBhMi5sZW5ndGg7XG5cbiAgd2hpbGUgKG1hdGNoICYmIGktLSAmJiBhMVtpXSA9PT0gYTJbaV0pIHt9XG5cbiAgcmV0dXJuIGkgPCAwO1xufSxcbiAgICBfYWRkTGlua2VkTGlzdEl0ZW0gPSBmdW5jdGlvbiBfYWRkTGlua2VkTGlzdEl0ZW0ocGFyZW50LCBjaGlsZCwgZmlyc3RQcm9wLCBsYXN0UHJvcCwgc29ydEJ5KSB7XG4gIGlmIChmaXJzdFByb3AgPT09IHZvaWQgMCkge1xuICAgIGZpcnN0UHJvcCA9IFwiX2ZpcnN0XCI7XG4gIH1cblxuICBpZiAobGFzdFByb3AgPT09IHZvaWQgMCkge1xuICAgIGxhc3RQcm9wID0gXCJfbGFzdFwiO1xuICB9XG5cbiAgdmFyIHByZXYgPSBwYXJlbnRbbGFzdFByb3BdLFxuICAgICAgdDtcblxuICBpZiAoc29ydEJ5KSB7XG4gICAgdCA9IGNoaWxkW3NvcnRCeV07XG5cbiAgICB3aGlsZSAocHJldiAmJiBwcmV2W3NvcnRCeV0gPiB0KSB7XG4gICAgICBwcmV2ID0gcHJldi5fcHJldjtcbiAgICB9XG4gIH1cblxuICBpZiAocHJldikge1xuICAgIGNoaWxkLl9uZXh0ID0gcHJldi5fbmV4dDtcbiAgICBwcmV2Ll9uZXh0ID0gY2hpbGQ7XG4gIH0gZWxzZSB7XG4gICAgY2hpbGQuX25leHQgPSBwYXJlbnRbZmlyc3RQcm9wXTtcbiAgICBwYXJlbnRbZmlyc3RQcm9wXSA9IGNoaWxkO1xuICB9XG5cbiAgaWYgKGNoaWxkLl9uZXh0KSB7XG4gICAgY2hpbGQuX25leHQuX3ByZXYgPSBjaGlsZDtcbiAgfSBlbHNlIHtcbiAgICBwYXJlbnRbbGFzdFByb3BdID0gY2hpbGQ7XG4gIH1cblxuICBjaGlsZC5fcHJldiA9IHByZXY7XG4gIGNoaWxkLnBhcmVudCA9IGNoaWxkLl9kcCA9IHBhcmVudDtcbiAgcmV0dXJuIGNoaWxkO1xufSxcbiAgICBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0gPSBmdW5jdGlvbiBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0ocGFyZW50LCBjaGlsZCwgZmlyc3RQcm9wLCBsYXN0UHJvcCkge1xuICBpZiAoZmlyc3RQcm9wID09PSB2b2lkIDApIHtcbiAgICBmaXJzdFByb3AgPSBcIl9maXJzdFwiO1xuICB9XG5cbiAgaWYgKGxhc3RQcm9wID09PSB2b2lkIDApIHtcbiAgICBsYXN0UHJvcCA9IFwiX2xhc3RcIjtcbiAgfVxuXG4gIHZhciBwcmV2ID0gY2hpbGQuX3ByZXYsXG4gICAgICBuZXh0ID0gY2hpbGQuX25leHQ7XG5cbiAgaWYgKHByZXYpIHtcbiAgICBwcmV2Ll9uZXh0ID0gbmV4dDtcbiAgfSBlbHNlIGlmIChwYXJlbnRbZmlyc3RQcm9wXSA9PT0gY2hpbGQpIHtcbiAgICBwYXJlbnRbZmlyc3RQcm9wXSA9IG5leHQ7XG4gIH1cblxuICBpZiAobmV4dCkge1xuICAgIG5leHQuX3ByZXYgPSBwcmV2O1xuICB9IGVsc2UgaWYgKHBhcmVudFtsYXN0UHJvcF0gPT09IGNoaWxkKSB7XG4gICAgcGFyZW50W2xhc3RQcm9wXSA9IHByZXY7XG4gIH1cblxuICBjaGlsZC5fbmV4dCA9IGNoaWxkLl9wcmV2ID0gY2hpbGQucGFyZW50ID0gbnVsbDsgLy8gZG9uJ3QgZGVsZXRlIHRoZSBfZHAganVzdCBzbyB3ZSBjYW4gcmV2ZXJ0IGlmIG5lY2Vzc2FyeS4gQnV0IHBhcmVudCBzaG91bGQgYmUgbnVsbCB0byBpbmRpY2F0ZSB0aGUgaXRlbSBpc24ndCBpbiBhIGxpbmtlZCBsaXN0LlxufSxcbiAgICBfcmVtb3ZlRnJvbVBhcmVudCA9IGZ1bmN0aW9uIF9yZW1vdmVGcm9tUGFyZW50KGNoaWxkLCBvbmx5SWZQYXJlbnRIYXNBdXRvUmVtb3ZlKSB7XG4gIGNoaWxkLnBhcmVudCAmJiAoIW9ubHlJZlBhcmVudEhhc0F1dG9SZW1vdmUgfHwgY2hpbGQucGFyZW50LmF1dG9SZW1vdmVDaGlsZHJlbikgJiYgY2hpbGQucGFyZW50LnJlbW92ZShjaGlsZCk7XG4gIGNoaWxkLl9hY3QgPSAwO1xufSxcbiAgICBfdW5jYWNoZSA9IGZ1bmN0aW9uIF91bmNhY2hlKGFuaW1hdGlvbiwgY2hpbGQpIHtcbiAgaWYgKGFuaW1hdGlvbiAmJiAoIWNoaWxkIHx8IGNoaWxkLl9lbmQgPiBhbmltYXRpb24uX2R1ciB8fCBjaGlsZC5fc3RhcnQgPCAwKSkge1xuICAgIC8vIHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbjogaWYgYSBjaGlsZCBhbmltYXRpb24gaXMgcGFzc2VkIGluIHdlIHNob3VsZCBvbmx5IHVuY2FjaGUgaWYgdGhhdCBjaGlsZCBFWFRFTkRTIHRoZSBhbmltYXRpb24gKGl0cyBlbmQgdGltZSBpcyBiZXlvbmQgdGhlIGVuZClcbiAgICB2YXIgYSA9IGFuaW1hdGlvbjtcblxuICAgIHdoaWxlIChhKSB7XG4gICAgICBhLl9kaXJ0eSA9IDE7XG4gICAgICBhID0gYS5wYXJlbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFuaW1hdGlvbjtcbn0sXG4gICAgX3JlY2FjaGVBbmNlc3RvcnMgPSBmdW5jdGlvbiBfcmVjYWNoZUFuY2VzdG9ycyhhbmltYXRpb24pIHtcbiAgdmFyIHBhcmVudCA9IGFuaW1hdGlvbi5wYXJlbnQ7XG5cbiAgd2hpbGUgKHBhcmVudCAmJiBwYXJlbnQucGFyZW50KSB7XG4gICAgLy9zb21ldGltZXMgd2UgbXVzdCBmb3JjZSBhIHJlLXNvcnQgb2YgYWxsIGNoaWxkcmVuIGFuZCB1cGRhdGUgdGhlIGR1cmF0aW9uL3RvdGFsRHVyYXRpb24gb2YgYWxsIGFuY2VzdG9yIHRpbWVsaW5lcyBpbW1lZGlhdGVseSBpbiBjYXNlLCBmb3IgZXhhbXBsZSwgaW4gdGhlIG1pZGRsZSBvZiBhIHJlbmRlciBsb29wLCBvbmUgdHdlZW4gYWx0ZXJzIGFub3RoZXIgdHdlZW4ncyB0aW1lU2NhbGUgd2hpY2ggc2hvdmVzIGl0cyBzdGFydFRpbWUgYmVmb3JlIDAsIGZvcmNpbmcgdGhlIHBhcmVudCB0aW1lbGluZSB0byBzaGlmdCBhcm91bmQgYW5kIHNoaWZ0Q2hpbGRyZW4oKSB3aGljaCBjb3VsZCBhZmZlY3QgdGhhdCBuZXh0IHR3ZWVuJ3MgcmVuZGVyIChzdGFydFRpbWUpLiBEb2Vzbid0IG1hdHRlciBmb3IgdGhlIHJvb3QgdGltZWxpbmUgdGhvdWdoLlxuICAgIHBhcmVudC5fZGlydHkgPSAxO1xuICAgIHBhcmVudC50b3RhbER1cmF0aW9uKCk7XG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgfVxuXG4gIHJldHVybiBhbmltYXRpb247XG59LFxuICAgIF9oYXNOb1BhdXNlZEFuY2VzdG9ycyA9IGZ1bmN0aW9uIF9oYXNOb1BhdXNlZEFuY2VzdG9ycyhhbmltYXRpb24pIHtcbiAgcmV0dXJuICFhbmltYXRpb24gfHwgYW5pbWF0aW9uLl90cyAmJiBfaGFzTm9QYXVzZWRBbmNlc3RvcnMoYW5pbWF0aW9uLnBhcmVudCk7XG59LFxuICAgIF9lbGFwc2VkQ3ljbGVEdXJhdGlvbiA9IGZ1bmN0aW9uIF9lbGFwc2VkQ3ljbGVEdXJhdGlvbihhbmltYXRpb24pIHtcbiAgcmV0dXJuIGFuaW1hdGlvbi5fcmVwZWF0ID8gX2FuaW1hdGlvbkN5Y2xlKGFuaW1hdGlvbi5fdFRpbWUsIGFuaW1hdGlvbiA9IGFuaW1hdGlvbi5kdXJhdGlvbigpICsgYW5pbWF0aW9uLl9yRGVsYXkpICogYW5pbWF0aW9uIDogMDtcbn0sXG4gICAgLy8gZmVlZCBpbiB0aGUgdG90YWxUaW1lIGFuZCBjeWNsZUR1cmF0aW9uIGFuZCBpdCdsbCByZXR1cm4gdGhlIGN5Y2xlIChpdGVyYXRpb24gbWludXMgMSkgYW5kIGlmIHRoZSBwbGF5aGVhZCBpcyBleGFjdGx5IGF0IHRoZSB2ZXJ5IEVORCwgaXQgd2lsbCBOT1QgYnVtcCB1cCB0byB0aGUgbmV4dCBjeWNsZS5cbl9hbmltYXRpb25DeWNsZSA9IGZ1bmN0aW9uIF9hbmltYXRpb25DeWNsZSh0VGltZSwgY3ljbGVEdXJhdGlvbikge1xuICB2YXIgd2hvbGUgPSBNYXRoLmZsb29yKHRUaW1lIC89IGN5Y2xlRHVyYXRpb24pO1xuICByZXR1cm4gdFRpbWUgJiYgd2hvbGUgPT09IHRUaW1lID8gd2hvbGUgLSAxIDogd2hvbGU7XG59LFxuICAgIF9wYXJlbnRUb0NoaWxkVG90YWxUaW1lID0gZnVuY3Rpb24gX3BhcmVudFRvQ2hpbGRUb3RhbFRpbWUocGFyZW50VGltZSwgY2hpbGQpIHtcbiAgcmV0dXJuIChwYXJlbnRUaW1lIC0gY2hpbGQuX3N0YXJ0KSAqIGNoaWxkLl90cyArIChjaGlsZC5fdHMgPj0gMCA/IDAgOiBjaGlsZC5fZGlydHkgPyBjaGlsZC50b3RhbER1cmF0aW9uKCkgOiBjaGlsZC5fdER1cik7XG59LFxuICAgIF9zZXRFbmQgPSBmdW5jdGlvbiBfc2V0RW5kKGFuaW1hdGlvbikge1xuICByZXR1cm4gYW5pbWF0aW9uLl9lbmQgPSBfcm91bmRQcmVjaXNlKGFuaW1hdGlvbi5fc3RhcnQgKyAoYW5pbWF0aW9uLl90RHVyIC8gTWF0aC5hYnMoYW5pbWF0aW9uLl90cyB8fCBhbmltYXRpb24uX3J0cyB8fCBfdGlueU51bSkgfHwgMCkpO1xufSxcbiAgICBfYWxpZ25QbGF5aGVhZCA9IGZ1bmN0aW9uIF9hbGlnblBsYXloZWFkKGFuaW1hdGlvbiwgdG90YWxUaW1lKSB7XG4gIC8vIGFkanVzdHMgdGhlIGFuaW1hdGlvbidzIF9zdGFydCBhbmQgX2VuZCBhY2NvcmRpbmcgdG8gdGhlIHByb3ZpZGVkIHRvdGFsVGltZSAob25seSBpZiB0aGUgcGFyZW50J3Mgc21vb3RoQ2hpbGRUaW1pbmcgaXMgdHJ1ZSBhbmQgdGhlIGFuaW1hdGlvbiBpc24ndCBwYXVzZWQpLiBJdCBkb2Vzbid0IGRvIGFueSByZW5kZXJpbmcgb3IgZm9yY2luZyB0aGluZ3MgYmFjayBpbnRvIHBhcmVudCB0aW1lbGluZXMsIGV0Yy4gLSB0aGF0J3Mgd2hhdCB0b3RhbFRpbWUoKSBpcyBmb3IuXG4gIHZhciBwYXJlbnQgPSBhbmltYXRpb24uX2RwO1xuXG4gIGlmIChwYXJlbnQgJiYgcGFyZW50LnNtb290aENoaWxkVGltaW5nICYmIGFuaW1hdGlvbi5fdHMpIHtcbiAgICBhbmltYXRpb24uX3N0YXJ0ID0gX3JvdW5kUHJlY2lzZShwYXJlbnQuX3RpbWUgLSAoYW5pbWF0aW9uLl90cyA+IDAgPyB0b3RhbFRpbWUgLyBhbmltYXRpb24uX3RzIDogKChhbmltYXRpb24uX2RpcnR5ID8gYW5pbWF0aW9uLnRvdGFsRHVyYXRpb24oKSA6IGFuaW1hdGlvbi5fdER1cikgLSB0b3RhbFRpbWUpIC8gLWFuaW1hdGlvbi5fdHMpKTtcblxuICAgIF9zZXRFbmQoYW5pbWF0aW9uKTtcblxuICAgIHBhcmVudC5fZGlydHkgfHwgX3VuY2FjaGUocGFyZW50LCBhbmltYXRpb24pOyAvL2ZvciBwZXJmb3JtYW5jZSBpbXByb3ZlbWVudC4gSWYgdGhlIHBhcmVudCdzIGNhY2hlIGlzIGFscmVhZHkgZGlydHksIGl0IGFscmVhZHkgdG9vayBjYXJlIG9mIG1hcmtpbmcgdGhlIGFuY2VzdG9ycyBhcyBkaXJ0eSB0b28sIHNvIHNraXAgdGhlIGZ1bmN0aW9uIGNhbGwgaGVyZS5cbiAgfVxuXG4gIHJldHVybiBhbmltYXRpb247XG59LFxuXG4vKlxuX3RvdGFsVGltZVRvVGltZSA9IChjbGFtcGVkVG90YWxUaW1lLCBkdXJhdGlvbiwgcmVwZWF0LCByZXBlYXREZWxheSwgeW95bykgPT4ge1xuXHRsZXQgY3ljbGVEdXJhdGlvbiA9IGR1cmF0aW9uICsgcmVwZWF0RGVsYXksXG5cdFx0dGltZSA9IF9yb3VuZChjbGFtcGVkVG90YWxUaW1lICUgY3ljbGVEdXJhdGlvbik7XG5cdGlmICh0aW1lID4gZHVyYXRpb24pIHtcblx0XHR0aW1lID0gZHVyYXRpb247XG5cdH1cblx0cmV0dXJuICh5b3lvICYmICh+fihjbGFtcGVkVG90YWxUaW1lIC8gY3ljbGVEdXJhdGlvbikgJiAxKSkgPyBkdXJhdGlvbiAtIHRpbWUgOiB0aW1lO1xufSxcbiovXG5fcG9zdEFkZENoZWNrcyA9IGZ1bmN0aW9uIF9wb3N0QWRkQ2hlY2tzKHRpbWVsaW5lLCBjaGlsZCkge1xuICB2YXIgdDtcblxuICBpZiAoY2hpbGQuX3RpbWUgfHwgY2hpbGQuX2luaXR0ZWQgJiYgIWNoaWxkLl9kdXIpIHtcbiAgICAvL2luIGNhc2UsIGZvciBleGFtcGxlLCB0aGUgX3N0YXJ0IGlzIG1vdmVkIG9uIGEgdHdlZW4gdGhhdCBoYXMgYWxyZWFkeSByZW5kZXJlZC4gSW1hZ2luZSBpdCdzIGF0IGl0cyBlbmQgc3RhdGUsIHRoZW4gdGhlIHN0YXJ0VGltZSBpcyBtb3ZlZCBXQVkgbGF0ZXIgKGFmdGVyIHRoZSBlbmQgb2YgdGhpcyB0aW1lbGluZSksIGl0IHNob3VsZCByZW5kZXIgYXQgaXRzIGJlZ2lubmluZy5cbiAgICB0ID0gX3BhcmVudFRvQ2hpbGRUb3RhbFRpbWUodGltZWxpbmUucmF3VGltZSgpLCBjaGlsZCk7XG5cbiAgICBpZiAoIWNoaWxkLl9kdXIgfHwgX2NsYW1wKDAsIGNoaWxkLnRvdGFsRHVyYXRpb24oKSwgdCkgLSBjaGlsZC5fdFRpbWUgPiBfdGlueU51bSkge1xuICAgICAgY2hpbGQucmVuZGVyKHQsIHRydWUpO1xuICAgIH1cbiAgfSAvL2lmIHRoZSB0aW1lbGluZSBoYXMgYWxyZWFkeSBlbmRlZCBidXQgdGhlIGluc2VydGVkIHR3ZWVuL3RpbWVsaW5lIGV4dGVuZHMgdGhlIGR1cmF0aW9uLCB3ZSBzaG91bGQgZW5hYmxlIHRoaXMgdGltZWxpbmUgYWdhaW4gc28gdGhhdCBpdCByZW5kZXJzIHByb3Blcmx5LiBXZSBzaG91bGQgYWxzbyBhbGlnbiB0aGUgcGxheWhlYWQgd2l0aCB0aGUgcGFyZW50IHRpbWVsaW5lJ3Mgd2hlbiBhcHByb3ByaWF0ZS5cblxuXG4gIGlmIChfdW5jYWNoZSh0aW1lbGluZSwgY2hpbGQpLl9kcCAmJiB0aW1lbGluZS5faW5pdHRlZCAmJiB0aW1lbGluZS5fdGltZSA+PSB0aW1lbGluZS5fZHVyICYmIHRpbWVsaW5lLl90cykge1xuICAgIC8vaW4gY2FzZSBhbnkgb2YgdGhlIGFuY2VzdG9ycyBoYWQgY29tcGxldGVkIGJ1dCBzaG91bGQgbm93IGJlIGVuYWJsZWQuLi5cbiAgICBpZiAodGltZWxpbmUuX2R1ciA8IHRpbWVsaW5lLmR1cmF0aW9uKCkpIHtcbiAgICAgIHQgPSB0aW1lbGluZTtcblxuICAgICAgd2hpbGUgKHQuX2RwKSB7XG4gICAgICAgIHQucmF3VGltZSgpID49IDAgJiYgdC50b3RhbFRpbWUodC5fdFRpbWUpOyAvL21vdmVzIHRoZSB0aW1lbGluZSAoc2hpZnRzIGl0cyBzdGFydFRpbWUpIGlmIG5lY2Vzc2FyeSwgYW5kIGFsc28gZW5hYmxlcyBpdC4gSWYgaXQncyBjdXJyZW50bHkgemVybywgdGhvdWdoLCBpdCBtYXkgbm90IGJlIHNjaGVkdWxlZCB0byByZW5kZXIgdW50aWwgbGF0ZXIgc28gdGhlcmUncyBubyBuZWVkIHRvIGZvcmNlIGl0IHRvIGFsaWduIHdpdGggdGhlIGN1cnJlbnQgcGxheWhlYWQgcG9zaXRpb24uIE9ubHkgbW92ZSB0byBjYXRjaCB1cCB3aXRoIHRoZSBwbGF5aGVhZC5cblxuICAgICAgICB0ID0gdC5fZHA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGltZWxpbmUuX3pUaW1lID0gLV90aW55TnVtOyAvLyBoZWxwcyBlbnN1cmUgdGhhdCB0aGUgbmV4dCByZW5kZXIoKSB3aWxsIGJlIGZvcmNlZCAoY3Jvc3NpbmdTdGFydCA9IHRydWUgaW4gcmVuZGVyKCkpLCBldmVuIGlmIHRoZSBkdXJhdGlvbiBoYXNuJ3QgY2hhbmdlZCAod2UncmUgYWRkaW5nIGEgY2hpbGQgd2hpY2ggd291bGQgbmVlZCB0byBnZXQgcmVuZGVyZWQpLiBEZWZpbml0ZWx5IGFuIGVkZ2UgY2FzZS4gTm90ZTogd2UgTVVTVCBkbyB0aGlzIEFGVEVSIHRoZSBsb29wIGFib3ZlIHdoZXJlIHRoZSB0b3RhbFRpbWUoKSBtaWdodCB0cmlnZ2VyIGEgcmVuZGVyKCkgYmVjYXVzZSB0aGlzIF9hZGRUb1RpbWVsaW5lKCkgbWV0aG9kIGdldHMgY2FsbGVkIGZyb20gdGhlIEFuaW1hdGlvbiBjb25zdHJ1Y3RvciwgQkVGT1JFIHR3ZWVucyBldmVuIHJlY29yZCB0aGVpciB0YXJnZXRzLCBldGMuIHNvIHdlIHdvdWxkbid0IHdhbnQgdGhpbmdzIHRvIGdldCB0cmlnZ2VyZWQgaW4gdGhlIHdyb25nIG9yZGVyLlxuICB9XG59LFxuICAgIF9hZGRUb1RpbWVsaW5lID0gZnVuY3Rpb24gX2FkZFRvVGltZWxpbmUodGltZWxpbmUsIGNoaWxkLCBwb3NpdGlvbiwgc2tpcENoZWNrcykge1xuICBjaGlsZC5wYXJlbnQgJiYgX3JlbW92ZUZyb21QYXJlbnQoY2hpbGQpO1xuICBjaGlsZC5fc3RhcnQgPSBfcm91bmRQcmVjaXNlKChfaXNOdW1iZXIocG9zaXRpb24pID8gcG9zaXRpb24gOiBwb3NpdGlvbiB8fCB0aW1lbGluZSAhPT0gX2dsb2JhbFRpbWVsaW5lID8gX3BhcnNlUG9zaXRpb24odGltZWxpbmUsIHBvc2l0aW9uLCBjaGlsZCkgOiB0aW1lbGluZS5fdGltZSkgKyBjaGlsZC5fZGVsYXkpO1xuICBjaGlsZC5fZW5kID0gX3JvdW5kUHJlY2lzZShjaGlsZC5fc3RhcnQgKyAoY2hpbGQudG90YWxEdXJhdGlvbigpIC8gTWF0aC5hYnMoY2hpbGQudGltZVNjYWxlKCkpIHx8IDApKTtcblxuICBfYWRkTGlua2VkTGlzdEl0ZW0odGltZWxpbmUsIGNoaWxkLCBcIl9maXJzdFwiLCBcIl9sYXN0XCIsIHRpbWVsaW5lLl9zb3J0ID8gXCJfc3RhcnRcIiA6IDApO1xuXG4gIF9pc0Zyb21PckZyb21TdGFydChjaGlsZCkgfHwgKHRpbWVsaW5lLl9yZWNlbnQgPSBjaGlsZCk7XG4gIHNraXBDaGVja3MgfHwgX3Bvc3RBZGRDaGVja3ModGltZWxpbmUsIGNoaWxkKTtcbiAgcmV0dXJuIHRpbWVsaW5lO1xufSxcbiAgICBfc2Nyb2xsVHJpZ2dlciA9IGZ1bmN0aW9uIF9zY3JvbGxUcmlnZ2VyKGFuaW1hdGlvbiwgdHJpZ2dlcikge1xuICByZXR1cm4gKF9nbG9iYWxzLlNjcm9sbFRyaWdnZXIgfHwgX21pc3NpbmdQbHVnaW4oXCJzY3JvbGxUcmlnZ2VyXCIsIHRyaWdnZXIpKSAmJiBfZ2xvYmFscy5TY3JvbGxUcmlnZ2VyLmNyZWF0ZSh0cmlnZ2VyLCBhbmltYXRpb24pO1xufSxcbiAgICBfYXR0ZW1wdEluaXRUd2VlbiA9IGZ1bmN0aW9uIF9hdHRlbXB0SW5pdFR3ZWVuKHR3ZWVuLCB0b3RhbFRpbWUsIGZvcmNlLCBzdXBwcmVzc0V2ZW50cykge1xuICBfaW5pdFR3ZWVuKHR3ZWVuLCB0b3RhbFRpbWUpO1xuXG4gIGlmICghdHdlZW4uX2luaXR0ZWQpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIGlmICghZm9yY2UgJiYgdHdlZW4uX3B0ICYmICh0d2Vlbi5fZHVyICYmIHR3ZWVuLnZhcnMubGF6eSAhPT0gZmFsc2UgfHwgIXR3ZWVuLl9kdXIgJiYgdHdlZW4udmFycy5sYXp5KSAmJiBfbGFzdFJlbmRlcmVkRnJhbWUgIT09IF90aWNrZXIuZnJhbWUpIHtcbiAgICBfbGF6eVR3ZWVucy5wdXNoKHR3ZWVuKTtcblxuICAgIHR3ZWVuLl9sYXp5ID0gW3RvdGFsVGltZSwgc3VwcHJlc3NFdmVudHNdO1xuICAgIHJldHVybiAxO1xuICB9XG59LFxuICAgIF9wYXJlbnRQbGF5aGVhZElzQmVmb3JlU3RhcnQgPSBmdW5jdGlvbiBfcGFyZW50UGxheWhlYWRJc0JlZm9yZVN0YXJ0KF9yZWYpIHtcbiAgdmFyIHBhcmVudCA9IF9yZWYucGFyZW50O1xuICByZXR1cm4gcGFyZW50ICYmIHBhcmVudC5fdHMgJiYgcGFyZW50Ll9pbml0dGVkICYmICFwYXJlbnQuX2xvY2sgJiYgKHBhcmVudC5yYXdUaW1lKCkgPCAwIHx8IF9wYXJlbnRQbGF5aGVhZElzQmVmb3JlU3RhcnQocGFyZW50KSk7XG59LFxuICAgIC8vIGNoZWNrIHBhcmVudCdzIF9sb2NrIGJlY2F1c2Ugd2hlbiBhIHRpbWVsaW5lIHJlcGVhdHMveW95b3MgYW5kIGRvZXMgaXRzIGFydGlmaWNpYWwgd3JhcHBpbmcsIHdlIHNob3VsZG4ndCBmb3JjZSB0aGUgcmF0aW8gYmFjayB0byAwXG5faXNGcm9tT3JGcm9tU3RhcnQgPSBmdW5jdGlvbiBfaXNGcm9tT3JGcm9tU3RhcnQoX3JlZjIpIHtcbiAgdmFyIGRhdGEgPSBfcmVmMi5kYXRhO1xuICByZXR1cm4gZGF0YSA9PT0gXCJpc0Zyb21TdGFydFwiIHx8IGRhdGEgPT09IFwiaXNTdGFydFwiO1xufSxcbiAgICBfcmVuZGVyWmVyb0R1cmF0aW9uVHdlZW4gPSBmdW5jdGlvbiBfcmVuZGVyWmVyb0R1cmF0aW9uVHdlZW4odHdlZW4sIHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB7XG4gIHZhciBwcmV2UmF0aW8gPSB0d2Vlbi5yYXRpbyxcbiAgICAgIHJhdGlvID0gdG90YWxUaW1lIDwgMCB8fCAhdG90YWxUaW1lICYmICghdHdlZW4uX3N0YXJ0ICYmIF9wYXJlbnRQbGF5aGVhZElzQmVmb3JlU3RhcnQodHdlZW4pICYmICEoIXR3ZWVuLl9pbml0dGVkICYmIF9pc0Zyb21PckZyb21TdGFydCh0d2VlbikpIHx8ICh0d2Vlbi5fdHMgPCAwIHx8IHR3ZWVuLl9kcC5fdHMgPCAwKSAmJiAhX2lzRnJvbU9yRnJvbVN0YXJ0KHR3ZWVuKSkgPyAwIDogMSxcbiAgICAgIC8vIGlmIHRoZSB0d2VlbiBvciBpdHMgcGFyZW50IGlzIHJldmVyc2VkIGFuZCB0aGUgdG90YWxUaW1lIGlzIDAsIHdlIHNob3VsZCBnbyB0byBhIHJhdGlvIG9mIDAuIEVkZ2UgY2FzZTogaWYgYSBmcm9tKCkgb3IgZnJvbVRvKCkgc3RhZ2dlciB0d2VlbiBpcyBwbGFjZWQgbGF0ZXIgaW4gYSB0aW1lbGluZSwgdGhlIFwic3RhcnRBdFwiIHplcm8tZHVyYXRpb24gdHdlZW4gY291bGQgaW5pdGlhbGx5IHJlbmRlciBhdCBhIHRpbWUgd2hlbiB0aGUgcGFyZW50IHRpbWVsaW5lJ3MgcGxheWhlYWQgaXMgdGVjaG5pY2FsbHkgQkVGT1JFIHdoZXJlIHRoaXMgdHdlZW4gaXMsIHNvIG1ha2Ugc3VyZSB0aGF0IGFueSBcImZyb21cIiBhbmQgXCJmcm9tVG9cIiBzdGFydEF0IHR3ZWVucyBhcmUgcmVuZGVyZWQgdGhlIGZpcnN0IHRpbWUgYXQgYSByYXRpbyBvZiAxLlxuICByZXBlYXREZWxheSA9IHR3ZWVuLl9yRGVsYXksXG4gICAgICB0VGltZSA9IDAsXG4gICAgICBwdCxcbiAgICAgIGl0ZXJhdGlvbixcbiAgICAgIHByZXZJdGVyYXRpb247XG5cbiAgaWYgKHJlcGVhdERlbGF5ICYmIHR3ZWVuLl9yZXBlYXQpIHtcbiAgICAvLyBpbiBjYXNlIHRoZXJlJ3MgYSB6ZXJvLWR1cmF0aW9uIHR3ZWVuIHRoYXQgaGFzIGEgcmVwZWF0IHdpdGggYSByZXBlYXREZWxheVxuICAgIHRUaW1lID0gX2NsYW1wKDAsIHR3ZWVuLl90RHVyLCB0b3RhbFRpbWUpO1xuICAgIGl0ZXJhdGlvbiA9IF9hbmltYXRpb25DeWNsZSh0VGltZSwgcmVwZWF0RGVsYXkpO1xuICAgIHR3ZWVuLl95b3lvICYmIGl0ZXJhdGlvbiAmIDEgJiYgKHJhdGlvID0gMSAtIHJhdGlvKTtcblxuICAgIGlmIChpdGVyYXRpb24gIT09IF9hbmltYXRpb25DeWNsZSh0d2Vlbi5fdFRpbWUsIHJlcGVhdERlbGF5KSkge1xuICAgICAgLy8gaWYgaXRlcmF0aW9uIGNoYW5nZWRcbiAgICAgIHByZXZSYXRpbyA9IDEgLSByYXRpbztcbiAgICAgIHR3ZWVuLnZhcnMucmVwZWF0UmVmcmVzaCAmJiB0d2Vlbi5faW5pdHRlZCAmJiB0d2Vlbi5pbnZhbGlkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHJhdGlvICE9PSBwcmV2UmF0aW8gfHwgZm9yY2UgfHwgdHdlZW4uX3pUaW1lID09PSBfdGlueU51bSB8fCAhdG90YWxUaW1lICYmIHR3ZWVuLl96VGltZSkge1xuICAgIGlmICghdHdlZW4uX2luaXR0ZWQgJiYgX2F0dGVtcHRJbml0VHdlZW4odHdlZW4sIHRvdGFsVGltZSwgZm9yY2UsIHN1cHByZXNzRXZlbnRzKSkge1xuICAgICAgLy8gaWYgd2UgcmVuZGVyIHRoZSB2ZXJ5IGJlZ2lubmluZyAodGltZSA9PSAwKSBvZiBhIGZyb21UbygpLCB3ZSBtdXN0IGZvcmNlIHRoZSByZW5kZXIgKG5vcm1hbCB0d2VlbnMgd291bGRuJ3QgbmVlZCB0byByZW5kZXIgYXQgYSB0aW1lIG9mIDAgd2hlbiB0aGUgcHJldlRpbWUgd2FzIGFsc28gMCkuIFRoaXMgaXMgYWxzbyBtYW5kYXRvcnkgdG8gbWFrZSBzdXJlIG92ZXJ3cml0aW5nIGtpY2tzIGluIGltbWVkaWF0ZWx5LlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHByZXZJdGVyYXRpb24gPSB0d2Vlbi5felRpbWU7XG4gICAgdHdlZW4uX3pUaW1lID0gdG90YWxUaW1lIHx8IChzdXBwcmVzc0V2ZW50cyA/IF90aW55TnVtIDogMCk7IC8vIHdoZW4gdGhlIHBsYXloZWFkIGFycml2ZXMgYXQgRVhBQ1RMWSB0aW1lIDAgKHJpZ2h0IG9uIHRvcCkgb2YgYSB6ZXJvLWR1cmF0aW9uIHR3ZWVuLCB3ZSBuZWVkIHRvIGRpc2Nlcm4gaWYgZXZlbnRzIGFyZSBzdXBwcmVzc2VkIHNvIHRoYXQgd2hlbiB0aGUgcGxheWhlYWQgbW92ZXMgYWdhaW4gKG5leHQgdGltZSksIGl0J2xsIHRyaWdnZXIgdGhlIGNhbGxiYWNrLiBJZiBldmVudHMgYXJlIE5PVCBzdXBwcmVzc2VkLCBvYnZpb3VzbHkgdGhlIGNhbGxiYWNrIHdvdWxkIGJlIHRyaWdnZXJlZCBpbiB0aGlzIHJlbmRlci4gQmFzaWNhbGx5LCB0aGUgY2FsbGJhY2sgc2hvdWxkIGZpcmUgZWl0aGVyIHdoZW4gdGhlIHBsYXloZWFkIEFSUklWRVMgb3IgTEVBVkVTIHRoaXMgZXhhY3Qgc3BvdCwgbm90IGJvdGguIEltYWdpbmUgZG9pbmcgYSB0aW1lbGluZS5zZWVrKDApIGFuZCB0aGVyZSdzIGEgY2FsbGJhY2sgdGhhdCBzaXRzIGF0IDAuIFNpbmNlIGV2ZW50cyBhcmUgc3VwcHJlc3NlZCBvbiB0aGF0IHNlZWsoKSBieSBkZWZhdWx0LCBub3RoaW5nIHdpbGwgZmlyZSwgYnV0IHdoZW4gdGhlIHBsYXloZWFkIG1vdmVzIG9mZiBvZiB0aGF0IHBvc2l0aW9uLCB0aGUgY2FsbGJhY2sgc2hvdWxkIGZpcmUuIFRoaXMgYmVoYXZpb3IgaXMgd2hhdCBwZW9wbGUgaW50dWl0aXZlbHkgZXhwZWN0LlxuXG4gICAgc3VwcHJlc3NFdmVudHMgfHwgKHN1cHByZXNzRXZlbnRzID0gdG90YWxUaW1lICYmICFwcmV2SXRlcmF0aW9uKTsgLy8gaWYgaXQgd2FzIHJlbmRlcmVkIHByZXZpb3VzbHkgYXQgZXhhY3RseSAwIChfelRpbWUpIGFuZCBub3cgdGhlIHBsYXloZWFkIGlzIG1vdmluZyBhd2F5LCBET04nVCBmaXJlIGNhbGxiYWNrcyBvdGhlcndpc2UgdGhleSdsbCBzZWVtIGxpa2UgZHVwbGljYXRlcy5cblxuICAgIHR3ZWVuLnJhdGlvID0gcmF0aW87XG4gICAgdHdlZW4uX2Zyb20gJiYgKHJhdGlvID0gMSAtIHJhdGlvKTtcbiAgICB0d2Vlbi5fdGltZSA9IDA7XG4gICAgdHdlZW4uX3RUaW1lID0gdFRpbWU7XG4gICAgcHQgPSB0d2Vlbi5fcHQ7XG5cbiAgICB3aGlsZSAocHQpIHtcbiAgICAgIHB0LnIocmF0aW8sIHB0LmQpO1xuICAgICAgcHQgPSBwdC5fbmV4dDtcbiAgICB9XG5cbiAgICB0d2Vlbi5fc3RhcnRBdCAmJiB0b3RhbFRpbWUgPCAwICYmIHR3ZWVuLl9zdGFydEF0LnJlbmRlcih0b3RhbFRpbWUsIHRydWUsIHRydWUpO1xuICAgIHR3ZWVuLl9vblVwZGF0ZSAmJiAhc3VwcHJlc3NFdmVudHMgJiYgX2NhbGxiYWNrKHR3ZWVuLCBcIm9uVXBkYXRlXCIpO1xuICAgIHRUaW1lICYmIHR3ZWVuLl9yZXBlYXQgJiYgIXN1cHByZXNzRXZlbnRzICYmIHR3ZWVuLnBhcmVudCAmJiBfY2FsbGJhY2sodHdlZW4sIFwib25SZXBlYXRcIik7XG5cbiAgICBpZiAoKHRvdGFsVGltZSA+PSB0d2Vlbi5fdER1ciB8fCB0b3RhbFRpbWUgPCAwKSAmJiB0d2Vlbi5yYXRpbyA9PT0gcmF0aW8pIHtcbiAgICAgIHJhdGlvICYmIF9yZW1vdmVGcm9tUGFyZW50KHR3ZWVuLCAxKTtcblxuICAgICAgaWYgKCFzdXBwcmVzc0V2ZW50cykge1xuICAgICAgICBfY2FsbGJhY2sodHdlZW4sIHJhdGlvID8gXCJvbkNvbXBsZXRlXCIgOiBcIm9uUmV2ZXJzZUNvbXBsZXRlXCIsIHRydWUpO1xuXG4gICAgICAgIHR3ZWVuLl9wcm9tICYmIHR3ZWVuLl9wcm9tKCk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKCF0d2Vlbi5felRpbWUpIHtcbiAgICB0d2Vlbi5felRpbWUgPSB0b3RhbFRpbWU7XG4gIH1cbn0sXG4gICAgX2ZpbmROZXh0UGF1c2VUd2VlbiA9IGZ1bmN0aW9uIF9maW5kTmV4dFBhdXNlVHdlZW4oYW5pbWF0aW9uLCBwcmV2VGltZSwgdGltZSkge1xuICB2YXIgY2hpbGQ7XG5cbiAgaWYgKHRpbWUgPiBwcmV2VGltZSkge1xuICAgIGNoaWxkID0gYW5pbWF0aW9uLl9maXJzdDtcblxuICAgIHdoaWxlIChjaGlsZCAmJiBjaGlsZC5fc3RhcnQgPD0gdGltZSkge1xuICAgICAgaWYgKGNoaWxkLmRhdGEgPT09IFwiaXNQYXVzZVwiICYmIGNoaWxkLl9zdGFydCA+IHByZXZUaW1lKSB7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgIH1cblxuICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY2hpbGQgPSBhbmltYXRpb24uX2xhc3Q7XG5cbiAgICB3aGlsZSAoY2hpbGQgJiYgY2hpbGQuX3N0YXJ0ID49IHRpbWUpIHtcbiAgICAgIGlmIChjaGlsZC5kYXRhID09PSBcImlzUGF1c2VcIiAmJiBjaGlsZC5fc3RhcnQgPCBwcmV2VGltZSkge1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkID0gY2hpbGQuX3ByZXY7XG4gICAgfVxuICB9XG59LFxuICAgIF9zZXREdXJhdGlvbiA9IGZ1bmN0aW9uIF9zZXREdXJhdGlvbihhbmltYXRpb24sIGR1cmF0aW9uLCBza2lwVW5jYWNoZSwgbGVhdmVQbGF5aGVhZCkge1xuICB2YXIgcmVwZWF0ID0gYW5pbWF0aW9uLl9yZXBlYXQsXG4gICAgICBkdXIgPSBfcm91bmRQcmVjaXNlKGR1cmF0aW9uKSB8fCAwLFxuICAgICAgdG90YWxQcm9ncmVzcyA9IGFuaW1hdGlvbi5fdFRpbWUgLyBhbmltYXRpb24uX3REdXI7XG4gIHRvdGFsUHJvZ3Jlc3MgJiYgIWxlYXZlUGxheWhlYWQgJiYgKGFuaW1hdGlvbi5fdGltZSAqPSBkdXIgLyBhbmltYXRpb24uX2R1cik7XG4gIGFuaW1hdGlvbi5fZHVyID0gZHVyO1xuICBhbmltYXRpb24uX3REdXIgPSAhcmVwZWF0ID8gZHVyIDogcmVwZWF0IDwgMCA/IDFlMTAgOiBfcm91bmRQcmVjaXNlKGR1ciAqIChyZXBlYXQgKyAxKSArIGFuaW1hdGlvbi5fckRlbGF5ICogcmVwZWF0KTtcbiAgdG90YWxQcm9ncmVzcyA+IDAgJiYgIWxlYXZlUGxheWhlYWQgPyBfYWxpZ25QbGF5aGVhZChhbmltYXRpb24sIGFuaW1hdGlvbi5fdFRpbWUgPSBhbmltYXRpb24uX3REdXIgKiB0b3RhbFByb2dyZXNzKSA6IGFuaW1hdGlvbi5wYXJlbnQgJiYgX3NldEVuZChhbmltYXRpb24pO1xuICBza2lwVW5jYWNoZSB8fCBfdW5jYWNoZShhbmltYXRpb24ucGFyZW50LCBhbmltYXRpb24pO1xuICByZXR1cm4gYW5pbWF0aW9uO1xufSxcbiAgICBfb25VcGRhdGVUb3RhbER1cmF0aW9uID0gZnVuY3Rpb24gX29uVXBkYXRlVG90YWxEdXJhdGlvbihhbmltYXRpb24pIHtcbiAgcmV0dXJuIGFuaW1hdGlvbiBpbnN0YW5jZW9mIFRpbWVsaW5lID8gX3VuY2FjaGUoYW5pbWF0aW9uKSA6IF9zZXREdXJhdGlvbihhbmltYXRpb24sIGFuaW1hdGlvbi5fZHVyKTtcbn0sXG4gICAgX3plcm9Qb3NpdGlvbiA9IHtcbiAgX3N0YXJ0OiAwLFxuICBlbmRUaW1lOiBfZW1wdHlGdW5jLFxuICB0b3RhbER1cmF0aW9uOiBfZW1wdHlGdW5jXG59LFxuICAgIF9wYXJzZVBvc2l0aW9uID0gZnVuY3Rpb24gX3BhcnNlUG9zaXRpb24oYW5pbWF0aW9uLCBwb3NpdGlvbiwgcGVyY2VudEFuaW1hdGlvbikge1xuICB2YXIgbGFiZWxzID0gYW5pbWF0aW9uLmxhYmVscyxcbiAgICAgIHJlY2VudCA9IGFuaW1hdGlvbi5fcmVjZW50IHx8IF96ZXJvUG9zaXRpb24sXG4gICAgICBjbGlwcGVkRHVyYXRpb24gPSBhbmltYXRpb24uZHVyYXRpb24oKSA+PSBfYmlnTnVtID8gcmVjZW50LmVuZFRpbWUoZmFsc2UpIDogYW5pbWF0aW9uLl9kdXIsXG4gICAgICAvL2luIGNhc2UgdGhlcmUncyBhIGNoaWxkIHRoYXQgaW5maW5pdGVseSByZXBlYXRzLCB1c2VycyBhbG1vc3QgbmV2ZXIgaW50ZW5kIGZvciB0aGUgaW5zZXJ0aW9uIHBvaW50IG9mIGEgbmV3IGNoaWxkIHRvIGJlIGJhc2VkIG9uIGEgU1VQRVIgbG9uZyB2YWx1ZSBsaWtlIHRoYXQgc28gd2UgY2xpcCBpdCBhbmQgYXNzdW1lIHRoZSBtb3N0IHJlY2VudGx5LWFkZGVkIGNoaWxkJ3MgZW5kVGltZSBzaG91bGQgYmUgdXNlZCBpbnN0ZWFkLlxuICBpLFxuICAgICAgb2Zmc2V0LFxuICAgICAgaXNQZXJjZW50O1xuXG4gIGlmIChfaXNTdHJpbmcocG9zaXRpb24pICYmIChpc05hTihwb3NpdGlvbikgfHwgcG9zaXRpb24gaW4gbGFiZWxzKSkge1xuICAgIC8vaWYgdGhlIHN0cmluZyBpcyBhIG51bWJlciBsaWtlIFwiMVwiLCBjaGVjayB0byBzZWUgaWYgdGhlcmUncyBhIGxhYmVsIHdpdGggdGhhdCBuYW1lLCBvdGhlcndpc2UgaW50ZXJwcmV0IGl0IGFzIGEgbnVtYmVyIChhYnNvbHV0ZSB2YWx1ZSkuXG4gICAgb2Zmc2V0ID0gcG9zaXRpb24uY2hhckF0KDApO1xuICAgIGlzUGVyY2VudCA9IHBvc2l0aW9uLnN1YnN0cigtMSkgPT09IFwiJVwiO1xuICAgIGkgPSBwb3NpdGlvbi5pbmRleE9mKFwiPVwiKTtcblxuICAgIGlmIChvZmZzZXQgPT09IFwiPFwiIHx8IG9mZnNldCA9PT0gXCI+XCIpIHtcbiAgICAgIGkgPj0gMCAmJiAocG9zaXRpb24gPSBwb3NpdGlvbi5yZXBsYWNlKC89LywgXCJcIikpO1xuICAgICAgcmV0dXJuIChvZmZzZXQgPT09IFwiPFwiID8gcmVjZW50Ll9zdGFydCA6IHJlY2VudC5lbmRUaW1lKHJlY2VudC5fcmVwZWF0ID49IDApKSArIChwYXJzZUZsb2F0KHBvc2l0aW9uLnN1YnN0cigxKSkgfHwgMCkgKiAoaXNQZXJjZW50ID8gKGkgPCAwID8gcmVjZW50IDogcGVyY2VudEFuaW1hdGlvbikudG90YWxEdXJhdGlvbigpIC8gMTAwIDogMSk7XG4gICAgfVxuXG4gICAgaWYgKGkgPCAwKSB7XG4gICAgICBwb3NpdGlvbiBpbiBsYWJlbHMgfHwgKGxhYmVsc1twb3NpdGlvbl0gPSBjbGlwcGVkRHVyYXRpb24pO1xuICAgICAgcmV0dXJuIGxhYmVsc1twb3NpdGlvbl07XG4gICAgfVxuXG4gICAgb2Zmc2V0ID0gcGFyc2VGbG9hdChwb3NpdGlvbi5jaGFyQXQoaSAtIDEpICsgcG9zaXRpb24uc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoaXNQZXJjZW50ICYmIHBlcmNlbnRBbmltYXRpb24pIHtcbiAgICAgIG9mZnNldCA9IG9mZnNldCAvIDEwMCAqIChfaXNBcnJheShwZXJjZW50QW5pbWF0aW9uKSA/IHBlcmNlbnRBbmltYXRpb25bMF0gOiBwZXJjZW50QW5pbWF0aW9uKS50b3RhbER1cmF0aW9uKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGkgPiAxID8gX3BhcnNlUG9zaXRpb24oYW5pbWF0aW9uLCBwb3NpdGlvbi5zdWJzdHIoMCwgaSAtIDEpLCBwZXJjZW50QW5pbWF0aW9uKSArIG9mZnNldCA6IGNsaXBwZWREdXJhdGlvbiArIG9mZnNldDtcbiAgfVxuXG4gIHJldHVybiBwb3NpdGlvbiA9PSBudWxsID8gY2xpcHBlZER1cmF0aW9uIDogK3Bvc2l0aW9uO1xufSxcbiAgICBfY3JlYXRlVHdlZW5UeXBlID0gZnVuY3Rpb24gX2NyZWF0ZVR3ZWVuVHlwZSh0eXBlLCBwYXJhbXMsIHRpbWVsaW5lKSB7XG4gIHZhciBpc0xlZ2FjeSA9IF9pc051bWJlcihwYXJhbXNbMV0pLFxuICAgICAgdmFyc0luZGV4ID0gKGlzTGVnYWN5ID8gMiA6IDEpICsgKHR5cGUgPCAyID8gMCA6IDEpLFxuICAgICAgdmFycyA9IHBhcmFtc1t2YXJzSW5kZXhdLFxuICAgICAgaXJWYXJzLFxuICAgICAgcGFyZW50O1xuXG4gIGlzTGVnYWN5ICYmICh2YXJzLmR1cmF0aW9uID0gcGFyYW1zWzFdKTtcbiAgdmFycy5wYXJlbnQgPSB0aW1lbGluZTtcblxuICBpZiAodHlwZSkge1xuICAgIGlyVmFycyA9IHZhcnM7XG4gICAgcGFyZW50ID0gdGltZWxpbmU7XG5cbiAgICB3aGlsZSAocGFyZW50ICYmICEoXCJpbW1lZGlhdGVSZW5kZXJcIiBpbiBpclZhcnMpKSB7XG4gICAgICAvLyBpbmhlcml0YW5jZSBoYXNuJ3QgaGFwcGVuZWQgeWV0LCBidXQgc29tZW9uZSBtYXkgaGF2ZSBzZXQgYSBkZWZhdWx0IGluIGFuIGFuY2VzdG9yIHRpbWVsaW5lLiBXZSBjb3VsZCBkbyB2YXJzLmltbWVkaWF0ZVJlbmRlciA9IF9pc05vdEZhbHNlKF9pbmhlcml0RGVmYXVsdHModmFycykuaW1tZWRpYXRlUmVuZGVyKSBidXQgdGhhdCdkIGV4YWN0IGEgc2xpZ2h0IHBlcmZvcm1hbmNlIHBlbmFsdHkgYmVjYXVzZSBfaW5oZXJpdERlZmF1bHRzKCkgYWxzbyBydW5zIGluIHRoZSBUd2VlbiBjb25zdHJ1Y3Rvci4gV2UncmUgcGF5aW5nIGEgc21hbGwga2IgcHJpY2UgaGVyZSB0byBnYWluIHNwZWVkLlxuICAgICAgaXJWYXJzID0gcGFyZW50LnZhcnMuZGVmYXVsdHMgfHwge307XG4gICAgICBwYXJlbnQgPSBfaXNOb3RGYWxzZShwYXJlbnQudmFycy5pbmhlcml0KSAmJiBwYXJlbnQucGFyZW50O1xuICAgIH1cblxuICAgIHZhcnMuaW1tZWRpYXRlUmVuZGVyID0gX2lzTm90RmFsc2UoaXJWYXJzLmltbWVkaWF0ZVJlbmRlcik7XG4gICAgdHlwZSA8IDIgPyB2YXJzLnJ1bkJhY2t3YXJkcyA9IDEgOiB2YXJzLnN0YXJ0QXQgPSBwYXJhbXNbdmFyc0luZGV4IC0gMV07IC8vIFwiZnJvbVwiIHZhcnNcbiAgfVxuXG4gIHJldHVybiBuZXcgVHdlZW4ocGFyYW1zWzBdLCB2YXJzLCBwYXJhbXNbdmFyc0luZGV4ICsgMV0pO1xufSxcbiAgICBfY29uZGl0aW9uYWxSZXR1cm4gPSBmdW5jdGlvbiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsIGZ1bmMpIHtcbiAgcmV0dXJuIHZhbHVlIHx8IHZhbHVlID09PSAwID8gZnVuYyh2YWx1ZSkgOiBmdW5jO1xufSxcbiAgICBfY2xhbXAgPSBmdW5jdGlvbiBfY2xhbXAobWluLCBtYXgsIHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA8IG1pbiA/IG1pbiA6IHZhbHVlID4gbWF4ID8gbWF4IDogdmFsdWU7XG59LFxuICAgIGdldFVuaXQgPSBmdW5jdGlvbiBnZXRVbml0KHZhbHVlLCB2KSB7XG4gIHJldHVybiAhX2lzU3RyaW5nKHZhbHVlKSB8fCAhKHYgPSBfdW5pdEV4cC5leGVjKHZhbHVlKSkgPyBcIlwiIDogdlsxXTtcbn0sXG4gICAgLy8gbm90ZTogcHJvdGVjdCBhZ2FpbnN0IHBhZGRlZCBudW1iZXJzIGFzIHN0cmluZ3MsIGxpa2UgXCIxMDAuMTAwXCIuIFRoYXQgc2hvdWxkbid0IHJldHVybiBcIjAwXCIgYXMgdGhlIHVuaXQuIElmIGl0J3MgbnVtZXJpYywgcmV0dXJuIG5vIHVuaXQuXG5jbGFtcCA9IGZ1bmN0aW9uIGNsYW1wKG1pbiwgbWF4LCB2YWx1ZSkge1xuICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBfY2xhbXAobWluLCBtYXgsIHYpO1xuICB9KTtcbn0sXG4gICAgX3NsaWNlID0gW10uc2xpY2UsXG4gICAgX2lzQXJyYXlMaWtlID0gZnVuY3Rpb24gX2lzQXJyYXlMaWtlKHZhbHVlLCBub25FbXB0eSkge1xuICByZXR1cm4gdmFsdWUgJiYgX2lzT2JqZWN0KHZhbHVlKSAmJiBcImxlbmd0aFwiIGluIHZhbHVlICYmICghbm9uRW1wdHkgJiYgIXZhbHVlLmxlbmd0aCB8fCB2YWx1ZS5sZW5ndGggLSAxIGluIHZhbHVlICYmIF9pc09iamVjdCh2YWx1ZVswXSkpICYmICF2YWx1ZS5ub2RlVHlwZSAmJiB2YWx1ZSAhPT0gX3dpbjtcbn0sXG4gICAgX2ZsYXR0ZW4gPSBmdW5jdGlvbiBfZmxhdHRlbihhciwgbGVhdmVTdHJpbmdzLCBhY2N1bXVsYXRvcikge1xuICBpZiAoYWNjdW11bGF0b3IgPT09IHZvaWQgMCkge1xuICAgIGFjY3VtdWxhdG9yID0gW107XG4gIH1cblxuICByZXR1cm4gYXIuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgX2FjY3VtdWxhdG9yO1xuXG4gICAgcmV0dXJuIF9pc1N0cmluZyh2YWx1ZSkgJiYgIWxlYXZlU3RyaW5ncyB8fCBfaXNBcnJheUxpa2UodmFsdWUsIDEpID8gKF9hY2N1bXVsYXRvciA9IGFjY3VtdWxhdG9yKS5wdXNoLmFwcGx5KF9hY2N1bXVsYXRvciwgdG9BcnJheSh2YWx1ZSkpIDogYWNjdW11bGF0b3IucHVzaCh2YWx1ZSk7XG4gIH0pIHx8IGFjY3VtdWxhdG9yO1xufSxcbiAgICAvL3Rha2VzIGFueSB2YWx1ZSBhbmQgcmV0dXJucyBhbiBhcnJheS4gSWYgaXQncyBhIHN0cmluZyAoYW5kIGxlYXZlU3RyaW5ncyBpc24ndCB0cnVlKSwgaXQnbGwgdXNlIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoKSBhbmQgY29udmVydCB0aGF0IHRvIGFuIGFycmF5LiBJdCdsbCBhbHNvIGFjY2VwdCBpdGVyYWJsZXMgbGlrZSBqUXVlcnkgb2JqZWN0cy5cbnRvQXJyYXkgPSBmdW5jdGlvbiB0b0FycmF5KHZhbHVlLCBzY29wZSwgbGVhdmVTdHJpbmdzKSB7XG4gIHJldHVybiBfaXNTdHJpbmcodmFsdWUpICYmICFsZWF2ZVN0cmluZ3MgJiYgKF9jb3JlSW5pdHRlZCB8fCAhX3dha2UoKSkgPyBfc2xpY2UuY2FsbCgoc2NvcGUgfHwgX2RvYykucXVlcnlTZWxlY3RvckFsbCh2YWx1ZSksIDApIDogX2lzQXJyYXkodmFsdWUpID8gX2ZsYXR0ZW4odmFsdWUsIGxlYXZlU3RyaW5ncykgOiBfaXNBcnJheUxpa2UodmFsdWUpID8gX3NsaWNlLmNhbGwodmFsdWUsIDApIDogdmFsdWUgPyBbdmFsdWVdIDogW107XG59LFxuICAgIHNlbGVjdG9yID0gZnVuY3Rpb24gc2VsZWN0b3IodmFsdWUpIHtcbiAgdmFsdWUgPSB0b0FycmF5KHZhbHVlKVswXSB8fCBfd2FybihcIkludmFsaWQgc2NvcGVcIikgfHwge307XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHZhciBlbCA9IHZhbHVlLmN1cnJlbnQgfHwgdmFsdWUubmF0aXZlRWxlbWVudCB8fCB2YWx1ZTtcbiAgICByZXR1cm4gdG9BcnJheSh2LCBlbC5xdWVyeVNlbGVjdG9yQWxsID8gZWwgOiBlbCA9PT0gdmFsdWUgPyBfd2FybihcIkludmFsaWQgc2NvcGVcIikgfHwgX2RvYy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpIDogdmFsdWUpO1xuICB9O1xufSxcbiAgICBzaHVmZmxlID0gZnVuY3Rpb24gc2h1ZmZsZShhKSB7XG4gIHJldHVybiBhLnNvcnQoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAuNSAtIE1hdGgucmFuZG9tKCk7XG4gIH0pO1xufSxcbiAgICAvLyBhbHRlcm5hdGl2ZSB0aGF0J3MgYSBiaXQgZmFzdGVyIGFuZCBtb3JlIHJlbGlhYmx5IGRpdmVyc2UgYnV0IGJpZ2dlcjogICBmb3IgKGxldCBqLCB2LCBpID0gYS5sZW5ndGg7IGk7IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKSwgdiA9IGFbLS1pXSwgYVtpXSA9IGFbal0sIGFbal0gPSB2KTsgcmV0dXJuIGE7XG4vL2ZvciBkaXN0cmlidXRpbmcgdmFsdWVzIGFjcm9zcyBhbiBhcnJheS4gQ2FuIGFjY2VwdCBhIG51bWJlciwgYSBmdW5jdGlvbiBvciAobW9zdCBjb21tb25seSkgYSBmdW5jdGlvbiB3aGljaCBjYW4gY29udGFpbiB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6IHtiYXNlLCBhbW91bnQsIGZyb20sIGVhc2UsIGdyaWQsIGF4aXMsIGxlbmd0aCwgZWFjaH0uIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGV4cGVjdHMgdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOiBpbmRleCwgdGFyZ2V0LCBhcnJheS4gUmVjb2duaXplcyB0aGUgZm9sbG93aW5nXG5kaXN0cmlidXRlID0gZnVuY3Rpb24gZGlzdHJpYnV0ZSh2KSB7XG4gIGlmIChfaXNGdW5jdGlvbih2KSkge1xuICAgIHJldHVybiB2O1xuICB9XG5cbiAgdmFyIHZhcnMgPSBfaXNPYmplY3QodikgPyB2IDoge1xuICAgIGVhY2g6IHZcbiAgfSxcbiAgICAgIC8vbjoxIGlzIGp1c3QgdG8gaW5kaWNhdGUgdiB3YXMgYSBudW1iZXI7IHdlIGxldmVyYWdlIHRoYXQgbGF0ZXIgdG8gc2V0IHYgYWNjb3JkaW5nIHRvIHRoZSBsZW5ndGggd2UgZ2V0LiBJZiBhIG51bWJlciBpcyBwYXNzZWQgaW4sIHdlIHRyZWF0IGl0IGxpa2UgdGhlIG9sZCBzdGFnZ2VyIHZhbHVlIHdoZXJlIDAuMSwgZm9yIGV4YW1wbGUsIHdvdWxkIG1lYW4gdGhhdCB0aGluZ3Mgd291bGQgYmUgZGlzdHJpYnV0ZWQgd2l0aCAwLjEgYmV0d2VlbiBlYWNoIGVsZW1lbnQgaW4gdGhlIGFycmF5IHJhdGhlciB0aGFuIGEgdG90YWwgXCJhbW91bnRcIiB0aGF0J3MgY2h1bmtlZCBvdXQgYW1vbmcgdGhlbSBhbGwuXG4gIGVhc2UgPSBfcGFyc2VFYXNlKHZhcnMuZWFzZSksXG4gICAgICBmcm9tID0gdmFycy5mcm9tIHx8IDAsXG4gICAgICBiYXNlID0gcGFyc2VGbG9hdCh2YXJzLmJhc2UpIHx8IDAsXG4gICAgICBjYWNoZSA9IHt9LFxuICAgICAgaXNEZWNpbWFsID0gZnJvbSA+IDAgJiYgZnJvbSA8IDEsXG4gICAgICByYXRpb3MgPSBpc05hTihmcm9tKSB8fCBpc0RlY2ltYWwsXG4gICAgICBheGlzID0gdmFycy5heGlzLFxuICAgICAgcmF0aW9YID0gZnJvbSxcbiAgICAgIHJhdGlvWSA9IGZyb207XG5cbiAgaWYgKF9pc1N0cmluZyhmcm9tKSkge1xuICAgIHJhdGlvWCA9IHJhdGlvWSA9IHtcbiAgICAgIGNlbnRlcjogLjUsXG4gICAgICBlZGdlczogLjUsXG4gICAgICBlbmQ6IDFcbiAgICB9W2Zyb21dIHx8IDA7XG4gIH0gZWxzZSBpZiAoIWlzRGVjaW1hbCAmJiByYXRpb3MpIHtcbiAgICByYXRpb1ggPSBmcm9tWzBdO1xuICAgIHJhdGlvWSA9IGZyb21bMV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGksIHRhcmdldCwgYSkge1xuICAgIHZhciBsID0gKGEgfHwgdmFycykubGVuZ3RoLFxuICAgICAgICBkaXN0YW5jZXMgPSBjYWNoZVtsXSxcbiAgICAgICAgb3JpZ2luWCxcbiAgICAgICAgb3JpZ2luWSxcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgICAgZCxcbiAgICAgICAgaixcbiAgICAgICAgbWF4LFxuICAgICAgICBtaW4sXG4gICAgICAgIHdyYXBBdDtcblxuICAgIGlmICghZGlzdGFuY2VzKSB7XG4gICAgICB3cmFwQXQgPSB2YXJzLmdyaWQgPT09IFwiYXV0b1wiID8gMCA6ICh2YXJzLmdyaWQgfHwgWzEsIF9iaWdOdW1dKVsxXTtcblxuICAgICAgaWYgKCF3cmFwQXQpIHtcbiAgICAgICAgbWF4ID0gLV9iaWdOdW07XG5cbiAgICAgICAgd2hpbGUgKG1heCA8IChtYXggPSBhW3dyYXBBdCsrXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KSAmJiB3cmFwQXQgPCBsKSB7fVxuXG4gICAgICAgIHdyYXBBdC0tO1xuICAgICAgfVxuXG4gICAgICBkaXN0YW5jZXMgPSBjYWNoZVtsXSA9IFtdO1xuICAgICAgb3JpZ2luWCA9IHJhdGlvcyA/IE1hdGgubWluKHdyYXBBdCwgbCkgKiByYXRpb1ggLSAuNSA6IGZyb20gJSB3cmFwQXQ7XG4gICAgICBvcmlnaW5ZID0gd3JhcEF0ID09PSBfYmlnTnVtID8gMCA6IHJhdGlvcyA/IGwgKiByYXRpb1kgLyB3cmFwQXQgLSAuNSA6IGZyb20gLyB3cmFwQXQgfCAwO1xuICAgICAgbWF4ID0gMDtcbiAgICAgIG1pbiA9IF9iaWdOdW07XG5cbiAgICAgIGZvciAoaiA9IDA7IGogPCBsOyBqKyspIHtcbiAgICAgICAgeCA9IGogJSB3cmFwQXQgLSBvcmlnaW5YO1xuICAgICAgICB5ID0gb3JpZ2luWSAtIChqIC8gd3JhcEF0IHwgMCk7XG4gICAgICAgIGRpc3RhbmNlc1tqXSA9IGQgPSAhYXhpcyA/IF9zcXJ0KHggKiB4ICsgeSAqIHkpIDogTWF0aC5hYnMoYXhpcyA9PT0gXCJ5XCIgPyB5IDogeCk7XG4gICAgICAgIGQgPiBtYXggJiYgKG1heCA9IGQpO1xuICAgICAgICBkIDwgbWluICYmIChtaW4gPSBkKTtcbiAgICAgIH1cblxuICAgICAgZnJvbSA9PT0gXCJyYW5kb21cIiAmJiBzaHVmZmxlKGRpc3RhbmNlcyk7XG4gICAgICBkaXN0YW5jZXMubWF4ID0gbWF4IC0gbWluO1xuICAgICAgZGlzdGFuY2VzLm1pbiA9IG1pbjtcbiAgICAgIGRpc3RhbmNlcy52ID0gbCA9IChwYXJzZUZsb2F0KHZhcnMuYW1vdW50KSB8fCBwYXJzZUZsb2F0KHZhcnMuZWFjaCkgKiAod3JhcEF0ID4gbCA/IGwgLSAxIDogIWF4aXMgPyBNYXRoLm1heCh3cmFwQXQsIGwgLyB3cmFwQXQpIDogYXhpcyA9PT0gXCJ5XCIgPyBsIC8gd3JhcEF0IDogd3JhcEF0KSB8fCAwKSAqIChmcm9tID09PSBcImVkZ2VzXCIgPyAtMSA6IDEpO1xuICAgICAgZGlzdGFuY2VzLmIgPSBsIDwgMCA/IGJhc2UgLSBsIDogYmFzZTtcbiAgICAgIGRpc3RhbmNlcy51ID0gZ2V0VW5pdCh2YXJzLmFtb3VudCB8fCB2YXJzLmVhY2gpIHx8IDA7IC8vdW5pdFxuXG4gICAgICBlYXNlID0gZWFzZSAmJiBsIDwgMCA/IF9pbnZlcnRFYXNlKGVhc2UpIDogZWFzZTtcbiAgICB9XG5cbiAgICBsID0gKGRpc3RhbmNlc1tpXSAtIGRpc3RhbmNlcy5taW4pIC8gZGlzdGFuY2VzLm1heCB8fCAwO1xuICAgIHJldHVybiBfcm91bmRQcmVjaXNlKGRpc3RhbmNlcy5iICsgKGVhc2UgPyBlYXNlKGwpIDogbCkgKiBkaXN0YW5jZXMudikgKyBkaXN0YW5jZXMudTsgLy9yb3VuZCBpbiBvcmRlciB0byB3b3JrIGFyb3VuZCBmbG9hdGluZyBwb2ludCBlcnJvcnNcbiAgfTtcbn0sXG4gICAgX3JvdW5kTW9kaWZpZXIgPSBmdW5jdGlvbiBfcm91bmRNb2RpZmllcih2KSB7XG4gIC8vcGFzcyBpbiAwLjEgZ2V0IGEgZnVuY3Rpb24gdGhhdCdsbCByb3VuZCB0byB0aGUgbmVhcmVzdCB0ZW50aCwgb3IgNSB0byByb3VuZCB0byB0aGUgY2xvc2VzdCA1LCBvciAwLjAwMSB0byB0aGUgY2xvc2VzdCAxMDAwdGgsIGV0Yy5cbiAgdmFyIHAgPSBNYXRoLnBvdygxMCwgKCh2ICsgXCJcIikuc3BsaXQoXCIuXCIpWzFdIHx8IFwiXCIpLmxlbmd0aCk7IC8vdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgbWF0aCBlcnJvcnMgKGxpa2UgMjQgKiAwLjEgPT0gMi40MDAwMDAwMDAwMDAwMDA0KSwgd2UgY2hvcCBvZmYgYXQgYSBzcGVjaWZpYyBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMgKG11Y2ggZmFzdGVyIHRoYW4gdG9GaXhlZCgpKVxuXG4gIHJldHVybiBmdW5jdGlvbiAocmF3KSB7XG4gICAgdmFyIG4gPSBNYXRoLnJvdW5kKHBhcnNlRmxvYXQocmF3KSAvIHYpICogdiAqIHA7XG4gICAgcmV0dXJuIChuIC0gbiAlIDEpIC8gcCArIChfaXNOdW1iZXIocmF3KSA/IDAgOiBnZXRVbml0KHJhdykpOyAvLyBuIC0gbiAlIDEgcmVwbGFjZXMgTWF0aC5mbG9vcigpIGluIG9yZGVyIHRvIGhhbmRsZSBuZWdhdGl2ZSB2YWx1ZXMgcHJvcGVybHkuIEZvciBleGFtcGxlLCBNYXRoLmZsb29yKC0xNTAuMDAwMDAwMDAwMDAwMDMpIGlzIDE1MSFcbiAgfTtcbn0sXG4gICAgc25hcCA9IGZ1bmN0aW9uIHNuYXAoc25hcFRvLCB2YWx1ZSkge1xuICB2YXIgaXNBcnJheSA9IF9pc0FycmF5KHNuYXBUbyksXG4gICAgICByYWRpdXMsXG4gICAgICBpczJEO1xuXG4gIGlmICghaXNBcnJheSAmJiBfaXNPYmplY3Qoc25hcFRvKSkge1xuICAgIHJhZGl1cyA9IGlzQXJyYXkgPSBzbmFwVG8ucmFkaXVzIHx8IF9iaWdOdW07XG5cbiAgICBpZiAoc25hcFRvLnZhbHVlcykge1xuICAgICAgc25hcFRvID0gdG9BcnJheShzbmFwVG8udmFsdWVzKTtcblxuICAgICAgaWYgKGlzMkQgPSAhX2lzTnVtYmVyKHNuYXBUb1swXSkpIHtcbiAgICAgICAgcmFkaXVzICo9IHJhZGl1czsgLy9wZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24gc28gd2UgZG9uJ3QgaGF2ZSB0byBNYXRoLnNxcnQoKSBpbiB0aGUgbG9vcC5cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc25hcFRvID0gX3JvdW5kTW9kaWZpZXIoc25hcFRvLmluY3JlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9jb25kaXRpb25hbFJldHVybih2YWx1ZSwgIWlzQXJyYXkgPyBfcm91bmRNb2RpZmllcihzbmFwVG8pIDogX2lzRnVuY3Rpb24oc25hcFRvKSA/IGZ1bmN0aW9uIChyYXcpIHtcbiAgICBpczJEID0gc25hcFRvKHJhdyk7XG4gICAgcmV0dXJuIE1hdGguYWJzKGlzMkQgLSByYXcpIDw9IHJhZGl1cyA/IGlzMkQgOiByYXc7XG4gIH0gOiBmdW5jdGlvbiAocmF3KSB7XG4gICAgdmFyIHggPSBwYXJzZUZsb2F0KGlzMkQgPyByYXcueCA6IHJhdyksXG4gICAgICAgIHkgPSBwYXJzZUZsb2F0KGlzMkQgPyByYXcueSA6IDApLFxuICAgICAgICBtaW4gPSBfYmlnTnVtLFxuICAgICAgICBjbG9zZXN0ID0gMCxcbiAgICAgICAgaSA9IHNuYXBUby5sZW5ndGgsXG4gICAgICAgIGR4LFxuICAgICAgICBkeTtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGlmIChpczJEKSB7XG4gICAgICAgIGR4ID0gc25hcFRvW2ldLnggLSB4O1xuICAgICAgICBkeSA9IHNuYXBUb1tpXS55IC0geTtcbiAgICAgICAgZHggPSBkeCAqIGR4ICsgZHkgKiBkeTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGR4ID0gTWF0aC5hYnMoc25hcFRvW2ldIC0geCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkeCA8IG1pbikge1xuICAgICAgICBtaW4gPSBkeDtcbiAgICAgICAgY2xvc2VzdCA9IGk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2xvc2VzdCA9ICFyYWRpdXMgfHwgbWluIDw9IHJhZGl1cyA/IHNuYXBUb1tjbG9zZXN0XSA6IHJhdztcbiAgICByZXR1cm4gaXMyRCB8fCBjbG9zZXN0ID09PSByYXcgfHwgX2lzTnVtYmVyKHJhdykgPyBjbG9zZXN0IDogY2xvc2VzdCArIGdldFVuaXQocmF3KTtcbiAgfSk7XG59LFxuICAgIHJhbmRvbSA9IGZ1bmN0aW9uIHJhbmRvbShtaW4sIG1heCwgcm91bmRpbmdJbmNyZW1lbnQsIHJldHVybkZ1bmN0aW9uKSB7XG4gIHJldHVybiBfY29uZGl0aW9uYWxSZXR1cm4oX2lzQXJyYXkobWluKSA/ICFtYXggOiByb3VuZGluZ0luY3JlbWVudCA9PT0gdHJ1ZSA/ICEhKHJvdW5kaW5nSW5jcmVtZW50ID0gMCkgOiAhcmV0dXJuRnVuY3Rpb24sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2lzQXJyYXkobWluKSA/IG1pblt+fihNYXRoLnJhbmRvbSgpICogbWluLmxlbmd0aCldIDogKHJvdW5kaW5nSW5jcmVtZW50ID0gcm91bmRpbmdJbmNyZW1lbnQgfHwgMWUtNSkgJiYgKHJldHVybkZ1bmN0aW9uID0gcm91bmRpbmdJbmNyZW1lbnQgPCAxID8gTWF0aC5wb3coMTAsIChyb3VuZGluZ0luY3JlbWVudCArIFwiXCIpLmxlbmd0aCAtIDIpIDogMSkgJiYgTWF0aC5mbG9vcihNYXRoLnJvdW5kKChtaW4gLSByb3VuZGluZ0luY3JlbWVudCAvIDIgKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIHJvdW5kaW5nSW5jcmVtZW50ICogLjk5KSkgLyByb3VuZGluZ0luY3JlbWVudCkgKiByb3VuZGluZ0luY3JlbWVudCAqIHJldHVybkZ1bmN0aW9uKSAvIHJldHVybkZ1bmN0aW9uO1xuICB9KTtcbn0sXG4gICAgcGlwZSA9IGZ1bmN0aW9uIHBpcGUoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmdW5jdGlvbnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZnVuY3Rpb25zW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbnMucmVkdWNlKGZ1bmN0aW9uICh2LCBmKSB7XG4gICAgICByZXR1cm4gZih2KTtcbiAgICB9LCB2YWx1ZSk7XG4gIH07XG59LFxuICAgIHVuaXRpemUgPSBmdW5jdGlvbiB1bml0aXplKGZ1bmMsIHVuaXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHBhcnNlRmxvYXQodmFsdWUpKSArICh1bml0IHx8IGdldFVuaXQodmFsdWUpKTtcbiAgfTtcbn0sXG4gICAgbm9ybWFsaXplID0gZnVuY3Rpb24gbm9ybWFsaXplKG1pbiwgbWF4LCB2YWx1ZSkge1xuICByZXR1cm4gbWFwUmFuZ2UobWluLCBtYXgsIDAsIDEsIHZhbHVlKTtcbn0sXG4gICAgX3dyYXBBcnJheSA9IGZ1bmN0aW9uIF93cmFwQXJyYXkoYSwgd3JhcHBlciwgdmFsdWUpIHtcbiAgcmV0dXJuIF9jb25kaXRpb25hbFJldHVybih2YWx1ZSwgZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgcmV0dXJuIGFbfn53cmFwcGVyKGluZGV4KV07XG4gIH0pO1xufSxcbiAgICB3cmFwID0gZnVuY3Rpb24gd3JhcChtaW4sIG1heCwgdmFsdWUpIHtcbiAgLy8gTk9URTogd3JhcCgpIENBTk5PVCBiZSBhbiBhcnJvdyBmdW5jdGlvbiEgQSB2ZXJ5IG9kZCBjb21waWxpbmcgYnVnIGNhdXNlcyBwcm9ibGVtcyAodW5yZWxhdGVkIHRvIEdTQVApLlxuICB2YXIgcmFuZ2UgPSBtYXggLSBtaW47XG4gIHJldHVybiBfaXNBcnJheShtaW4pID8gX3dyYXBBcnJheShtaW4sIHdyYXAoMCwgbWluLmxlbmd0aCksIG1heCkgOiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAocmFuZ2UgKyAodmFsdWUgLSBtaW4pICUgcmFuZ2UpICUgcmFuZ2UgKyBtaW47XG4gIH0pO1xufSxcbiAgICB3cmFwWW95byA9IGZ1bmN0aW9uIHdyYXBZb3lvKG1pbiwgbWF4LCB2YWx1ZSkge1xuICB2YXIgcmFuZ2UgPSBtYXggLSBtaW4sXG4gICAgICB0b3RhbCA9IHJhbmdlICogMjtcbiAgcmV0dXJuIF9pc0FycmF5KG1pbikgPyBfd3JhcEFycmF5KG1pbiwgd3JhcFlveW8oMCwgbWluLmxlbmd0aCAtIDEpLCBtYXgpIDogX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YWx1ZSA9ICh0b3RhbCArICh2YWx1ZSAtIG1pbikgJSB0b3RhbCkgJSB0b3RhbCB8fCAwO1xuICAgIHJldHVybiBtaW4gKyAodmFsdWUgPiByYW5nZSA/IHRvdGFsIC0gdmFsdWUgOiB2YWx1ZSk7XG4gIH0pO1xufSxcbiAgICBfcmVwbGFjZVJhbmRvbSA9IGZ1bmN0aW9uIF9yZXBsYWNlUmFuZG9tKHZhbHVlKSB7XG4gIC8vcmVwbGFjZXMgYWxsIG9jY3VycmVuY2VzIG9mIHJhbmRvbSguLi4pIGluIGEgc3RyaW5nIHdpdGggdGhlIGNhbGN1bGF0ZWQgcmFuZG9tIHZhbHVlLiBjYW4gYmUgYSByYW5nZSBsaWtlIHJhbmRvbSgtMTAwLCAxMDAsIDUpIG9yIGFuIGFycmF5IGxpa2UgcmFuZG9tKFswLCAxMDAsIDUwMF0pXG4gIHZhciBwcmV2ID0gMCxcbiAgICAgIHMgPSBcIlwiLFxuICAgICAgaSxcbiAgICAgIG51bXMsXG4gICAgICBlbmQsXG4gICAgICBpc0FycmF5O1xuXG4gIHdoaWxlICh+KGkgPSB2YWx1ZS5pbmRleE9mKFwicmFuZG9tKFwiLCBwcmV2KSkpIHtcbiAgICBlbmQgPSB2YWx1ZS5pbmRleE9mKFwiKVwiLCBpKTtcbiAgICBpc0FycmF5ID0gdmFsdWUuY2hhckF0KGkgKyA3KSA9PT0gXCJbXCI7XG4gICAgbnVtcyA9IHZhbHVlLnN1YnN0cihpICsgNywgZW5kIC0gaSAtIDcpLm1hdGNoKGlzQXJyYXkgPyBfZGVsaW1pdGVkVmFsdWVFeHAgOiBfc3RyaWN0TnVtRXhwKTtcbiAgICBzICs9IHZhbHVlLnN1YnN0cihwcmV2LCBpIC0gcHJldikgKyByYW5kb20oaXNBcnJheSA/IG51bXMgOiArbnVtc1swXSwgaXNBcnJheSA/IDAgOiArbnVtc1sxXSwgK251bXNbMl0gfHwgMWUtNSk7XG4gICAgcHJldiA9IGVuZCArIDE7XG4gIH1cblxuICByZXR1cm4gcyArIHZhbHVlLnN1YnN0cihwcmV2LCB2YWx1ZS5sZW5ndGggLSBwcmV2KTtcbn0sXG4gICAgbWFwUmFuZ2UgPSBmdW5jdGlvbiBtYXBSYW5nZShpbk1pbiwgaW5NYXgsIG91dE1pbiwgb3V0TWF4LCB2YWx1ZSkge1xuICB2YXIgaW5SYW5nZSA9IGluTWF4IC0gaW5NaW4sXG4gICAgICBvdXRSYW5nZSA9IG91dE1heCAtIG91dE1pbjtcbiAgcmV0dXJuIF9jb25kaXRpb25hbFJldHVybih2YWx1ZSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIG91dE1pbiArICgodmFsdWUgLSBpbk1pbikgLyBpblJhbmdlICogb3V0UmFuZ2UgfHwgMCk7XG4gIH0pO1xufSxcbiAgICBpbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uIGludGVycG9sYXRlKHN0YXJ0LCBlbmQsIHByb2dyZXNzLCBtdXRhdGUpIHtcbiAgdmFyIGZ1bmMgPSBpc05hTihzdGFydCArIGVuZCkgPyAwIDogZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gKDEgLSBwKSAqIHN0YXJ0ICsgcCAqIGVuZDtcbiAgfTtcblxuICBpZiAoIWZ1bmMpIHtcbiAgICB2YXIgaXNTdHJpbmcgPSBfaXNTdHJpbmcoc3RhcnQpLFxuICAgICAgICBtYXN0ZXIgPSB7fSxcbiAgICAgICAgcCxcbiAgICAgICAgaSxcbiAgICAgICAgaW50ZXJwb2xhdG9ycyxcbiAgICAgICAgbCxcbiAgICAgICAgaWw7XG5cbiAgICBwcm9ncmVzcyA9PT0gdHJ1ZSAmJiAobXV0YXRlID0gMSkgJiYgKHByb2dyZXNzID0gbnVsbCk7XG5cbiAgICBpZiAoaXNTdHJpbmcpIHtcbiAgICAgIHN0YXJ0ID0ge1xuICAgICAgICBwOiBzdGFydFxuICAgICAgfTtcbiAgICAgIGVuZCA9IHtcbiAgICAgICAgcDogZW5kXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoX2lzQXJyYXkoc3RhcnQpICYmICFfaXNBcnJheShlbmQpKSB7XG4gICAgICBpbnRlcnBvbGF0b3JzID0gW107XG4gICAgICBsID0gc3RhcnQubGVuZ3RoO1xuICAgICAgaWwgPSBsIC0gMjtcblxuICAgICAgZm9yIChpID0gMTsgaSA8IGw7IGkrKykge1xuICAgICAgICBpbnRlcnBvbGF0b3JzLnB1c2goaW50ZXJwb2xhdGUoc3RhcnRbaSAtIDFdLCBzdGFydFtpXSkpOyAvL2J1aWxkIHRoZSBpbnRlcnBvbGF0b3JzIHVwIGZyb250IGFzIGEgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uIHNvIHRoYXQgd2hlbiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIG1hbnkgdGltZXMsIGl0IGNhbiBqdXN0IHJldXNlIHRoZW0uXG4gICAgICB9XG5cbiAgICAgIGwtLTtcblxuICAgICAgZnVuYyA9IGZ1bmN0aW9uIGZ1bmMocCkge1xuICAgICAgICBwICo9IGw7XG4gICAgICAgIHZhciBpID0gTWF0aC5taW4oaWwsIH5+cCk7XG4gICAgICAgIHJldHVybiBpbnRlcnBvbGF0b3JzW2ldKHAgLSBpKTtcbiAgICAgIH07XG5cbiAgICAgIHByb2dyZXNzID0gZW5kO1xuICAgIH0gZWxzZSBpZiAoIW11dGF0ZSkge1xuICAgICAgc3RhcnQgPSBfbWVyZ2UoX2lzQXJyYXkoc3RhcnQpID8gW10gOiB7fSwgc3RhcnQpO1xuICAgIH1cblxuICAgIGlmICghaW50ZXJwb2xhdG9ycykge1xuICAgICAgZm9yIChwIGluIGVuZCkge1xuICAgICAgICBfYWRkUHJvcFR3ZWVuLmNhbGwobWFzdGVyLCBzdGFydCwgcCwgXCJnZXRcIiwgZW5kW3BdKTtcbiAgICAgIH1cblxuICAgICAgZnVuYyA9IGZ1bmN0aW9uIGZ1bmMocCkge1xuICAgICAgICByZXR1cm4gX3JlbmRlclByb3BUd2VlbnMocCwgbWFzdGVyKSB8fCAoaXNTdHJpbmcgPyBzdGFydC5wIDogc3RhcnQpO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKHByb2dyZXNzLCBmdW5jKTtcbn0sXG4gICAgX2dldExhYmVsSW5EaXJlY3Rpb24gPSBmdW5jdGlvbiBfZ2V0TGFiZWxJbkRpcmVjdGlvbih0aW1lbGluZSwgZnJvbVRpbWUsIGJhY2t3YXJkKSB7XG4gIC8vdXNlZCBmb3IgbmV4dExhYmVsKCkgYW5kIHByZXZpb3VzTGFiZWwoKVxuICB2YXIgbGFiZWxzID0gdGltZWxpbmUubGFiZWxzLFxuICAgICAgbWluID0gX2JpZ051bSxcbiAgICAgIHAsXG4gICAgICBkaXN0YW5jZSxcbiAgICAgIGxhYmVsO1xuXG4gIGZvciAocCBpbiBsYWJlbHMpIHtcbiAgICBkaXN0YW5jZSA9IGxhYmVsc1twXSAtIGZyb21UaW1lO1xuXG4gICAgaWYgKGRpc3RhbmNlIDwgMCA9PT0gISFiYWNrd2FyZCAmJiBkaXN0YW5jZSAmJiBtaW4gPiAoZGlzdGFuY2UgPSBNYXRoLmFicyhkaXN0YW5jZSkpKSB7XG4gICAgICBsYWJlbCA9IHA7XG4gICAgICBtaW4gPSBkaXN0YW5jZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbGFiZWw7XG59LFxuICAgIF9jYWxsYmFjayA9IGZ1bmN0aW9uIF9jYWxsYmFjayhhbmltYXRpb24sIHR5cGUsIGV4ZWN1dGVMYXp5Rmlyc3QpIHtcbiAgdmFyIHYgPSBhbmltYXRpb24udmFycyxcbiAgICAgIGNhbGxiYWNrID0gdlt0eXBlXSxcbiAgICAgIHBhcmFtcyxcbiAgICAgIHNjb3BlO1xuXG4gIGlmICghY2FsbGJhY2spIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBwYXJhbXMgPSB2W3R5cGUgKyBcIlBhcmFtc1wiXTtcbiAgc2NvcGUgPSB2LmNhbGxiYWNrU2NvcGUgfHwgYW5pbWF0aW9uO1xuICBleGVjdXRlTGF6eUZpcnN0ICYmIF9sYXp5VHdlZW5zLmxlbmd0aCAmJiBfbGF6eVJlbmRlcigpOyAvL2luIGNhc2UgcmVuZGVyaW5nIGNhdXNlZCBhbnkgdHdlZW5zIHRvIGxhenktaW5pdCwgd2Ugc2hvdWxkIHJlbmRlciB0aGVtIGJlY2F1c2UgdHlwaWNhbGx5IHdoZW4gYSB0aW1lbGluZSBmaW5pc2hlcywgdXNlcnMgZXhwZWN0IHRoaW5ncyB0byBoYXZlIHJlbmRlcmVkIGZ1bGx5LiBJbWFnaW5lIGFuIG9uVXBkYXRlIG9uIGEgdGltZWxpbmUgdGhhdCByZXBvcnRzL2NoZWNrcyB0d2VlbmVkIHZhbHVlcy5cblxuICByZXR1cm4gcGFyYW1zID8gY2FsbGJhY2suYXBwbHkoc2NvcGUsIHBhcmFtcykgOiBjYWxsYmFjay5jYWxsKHNjb3BlKTtcbn0sXG4gICAgX2ludGVycnVwdCA9IGZ1bmN0aW9uIF9pbnRlcnJ1cHQoYW5pbWF0aW9uKSB7XG4gIF9yZW1vdmVGcm9tUGFyZW50KGFuaW1hdGlvbik7XG5cbiAgYW5pbWF0aW9uLnNjcm9sbFRyaWdnZXIgJiYgYW5pbWF0aW9uLnNjcm9sbFRyaWdnZXIua2lsbChmYWxzZSk7XG4gIGFuaW1hdGlvbi5wcm9ncmVzcygpIDwgMSAmJiBfY2FsbGJhY2soYW5pbWF0aW9uLCBcIm9uSW50ZXJydXB0XCIpO1xuICByZXR1cm4gYW5pbWF0aW9uO1xufSxcbiAgICBfcXVpY2tUd2VlbixcbiAgICBfY3JlYXRlUGx1Z2luID0gZnVuY3Rpb24gX2NyZWF0ZVBsdWdpbihjb25maWcpIHtcbiAgY29uZmlnID0gIWNvbmZpZy5uYW1lICYmIGNvbmZpZ1tcImRlZmF1bHRcIl0gfHwgY29uZmlnOyAvL1VNRCBwYWNrYWdpbmcgd3JhcHMgdGhpbmdzIG9kZGx5LCBzbyBmb3IgZXhhbXBsZSBNb3Rpb25QYXRoSGVscGVyIGJlY29tZXMge01vdGlvblBhdGhIZWxwZXI6TW90aW9uUGF0aEhlbHBlciwgZGVmYXVsdDpNb3Rpb25QYXRoSGVscGVyfS5cblxuICB2YXIgbmFtZSA9IGNvbmZpZy5uYW1lLFxuICAgICAgaXNGdW5jID0gX2lzRnVuY3Rpb24oY29uZmlnKSxcbiAgICAgIFBsdWdpbiA9IG5hbWUgJiYgIWlzRnVuYyAmJiBjb25maWcuaW5pdCA/IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9wcm9wcyA9IFtdO1xuICB9IDogY29uZmlnLFxuICAgICAgLy9pbiBjYXNlIHNvbWVvbmUgcGFzc2VzIGluIGFuIG9iamVjdCB0aGF0J3Mgbm90IGEgcGx1Z2luLCBsaWtlIEN1c3RvbUVhc2VcbiAgaW5zdGFuY2VEZWZhdWx0cyA9IHtcbiAgICBpbml0OiBfZW1wdHlGdW5jLFxuICAgIHJlbmRlcjogX3JlbmRlclByb3BUd2VlbnMsXG4gICAgYWRkOiBfYWRkUHJvcFR3ZWVuLFxuICAgIGtpbGw6IF9raWxsUHJvcFR3ZWVuc09mLFxuICAgIG1vZGlmaWVyOiBfYWRkUGx1Z2luTW9kaWZpZXIsXG4gICAgcmF3VmFyczogMFxuICB9LFxuICAgICAgc3RhdGljcyA9IHtcbiAgICB0YXJnZXRUZXN0OiAwLFxuICAgIGdldDogMCxcbiAgICBnZXRTZXR0ZXI6IF9nZXRTZXR0ZXIsXG4gICAgYWxpYXNlczoge30sXG4gICAgcmVnaXN0ZXI6IDBcbiAgfTtcblxuICBfd2FrZSgpO1xuXG4gIGlmIChjb25maWcgIT09IFBsdWdpbikge1xuICAgIGlmIChfcGx1Z2luc1tuYW1lXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIF9zZXREZWZhdWx0cyhQbHVnaW4sIF9zZXREZWZhdWx0cyhfY29weUV4Y2x1ZGluZyhjb25maWcsIGluc3RhbmNlRGVmYXVsdHMpLCBzdGF0aWNzKSk7IC8vc3RhdGljIG1ldGhvZHNcblxuXG4gICAgX21lcmdlKFBsdWdpbi5wcm90b3R5cGUsIF9tZXJnZShpbnN0YW5jZURlZmF1bHRzLCBfY29weUV4Y2x1ZGluZyhjb25maWcsIHN0YXRpY3MpKSk7IC8vaW5zdGFuY2UgbWV0aG9kc1xuXG5cbiAgICBfcGx1Z2luc1tQbHVnaW4ucHJvcCA9IG5hbWVdID0gUGx1Z2luO1xuXG4gICAgaWYgKGNvbmZpZy50YXJnZXRUZXN0KSB7XG4gICAgICBfaGFybmVzc1BsdWdpbnMucHVzaChQbHVnaW4pO1xuXG4gICAgICBfcmVzZXJ2ZWRQcm9wc1tuYW1lXSA9IDE7XG4gICAgfVxuXG4gICAgbmFtZSA9IChuYW1lID09PSBcImNzc1wiID8gXCJDU1NcIiA6IG5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnN1YnN0cigxKSkgKyBcIlBsdWdpblwiOyAvL2ZvciB0aGUgZ2xvYmFsIG5hbWUuIFwibW90aW9uUGF0aFwiIHNob3VsZCBiZWNvbWUgTW90aW9uUGF0aFBsdWdpblxuICB9XG5cbiAgX2FkZEdsb2JhbChuYW1lLCBQbHVnaW4pO1xuXG4gIGNvbmZpZy5yZWdpc3RlciAmJiBjb25maWcucmVnaXN0ZXIoZ3NhcCwgUGx1Z2luLCBQcm9wVHdlZW4pO1xufSxcblxuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDT0xPUlNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbl8yNTUgPSAyNTUsXG4gICAgX2NvbG9yTG9va3VwID0ge1xuICBhcXVhOiBbMCwgXzI1NSwgXzI1NV0sXG4gIGxpbWU6IFswLCBfMjU1LCAwXSxcbiAgc2lsdmVyOiBbMTkyLCAxOTIsIDE5Ml0sXG4gIGJsYWNrOiBbMCwgMCwgMF0sXG4gIG1hcm9vbjogWzEyOCwgMCwgMF0sXG4gIHRlYWw6IFswLCAxMjgsIDEyOF0sXG4gIGJsdWU6IFswLCAwLCBfMjU1XSxcbiAgbmF2eTogWzAsIDAsIDEyOF0sXG4gIHdoaXRlOiBbXzI1NSwgXzI1NSwgXzI1NV0sXG4gIG9saXZlOiBbMTI4LCAxMjgsIDBdLFxuICB5ZWxsb3c6IFtfMjU1LCBfMjU1LCAwXSxcbiAgb3JhbmdlOiBbXzI1NSwgMTY1LCAwXSxcbiAgZ3JheTogWzEyOCwgMTI4LCAxMjhdLFxuICBwdXJwbGU6IFsxMjgsIDAsIDEyOF0sXG4gIGdyZWVuOiBbMCwgMTI4LCAwXSxcbiAgcmVkOiBbXzI1NSwgMCwgMF0sXG4gIHBpbms6IFtfMjU1LCAxOTIsIDIwM10sXG4gIGN5YW46IFswLCBfMjU1LCBfMjU1XSxcbiAgdHJhbnNwYXJlbnQ6IFtfMjU1LCBfMjU1LCBfMjU1LCAwXVxufSxcbiAgICAvLyBwb3NzaWJsZSBmdXR1cmUgaWRlYSB0byByZXBsYWNlIHRoZSBoYXJkLWNvZGVkIGNvbG9yIG5hbWUgdmFsdWVzIC0gcHV0IHRoaXMgaW4gdGhlIHRpY2tlci53YWtlKCkgd2hlcmUgd2Ugc2V0IHRoZSBfZG9jOlxuLy8gbGV0IGN0eCA9IF9kb2MuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKS5nZXRDb250ZXh0KFwiMmRcIik7XG4vLyBfZm9yRWFjaE5hbWUoXCJhcXVhLGxpbWUsc2lsdmVyLGJsYWNrLG1hcm9vbix0ZWFsLGJsdWUsbmF2eSx3aGl0ZSxvbGl2ZSx5ZWxsb3csb3JhbmdlLGdyYXkscHVycGxlLGdyZWVuLHJlZCxwaW5rLGN5YW5cIiwgY29sb3IgPT4ge2N0eC5maWxsU3R5bGUgPSBjb2xvcjsgX2NvbG9yTG9va3VwW2NvbG9yXSA9IHNwbGl0Q29sb3IoY3R4LmZpbGxTdHlsZSl9KTtcbl9odWUgPSBmdW5jdGlvbiBfaHVlKGgsIG0xLCBtMikge1xuICBoICs9IGggPCAwID8gMSA6IGggPiAxID8gLTEgOiAwO1xuICByZXR1cm4gKGggKiA2IDwgMSA/IG0xICsgKG0yIC0gbTEpICogaCAqIDYgOiBoIDwgLjUgPyBtMiA6IGggKiAzIDwgMiA/IG0xICsgKG0yIC0gbTEpICogKDIgLyAzIC0gaCkgKiA2IDogbTEpICogXzI1NSArIC41IHwgMDtcbn0sXG4gICAgc3BsaXRDb2xvciA9IGZ1bmN0aW9uIHNwbGl0Q29sb3IodiwgdG9IU0wsIGZvcmNlQWxwaGEpIHtcbiAgdmFyIGEgPSAhdiA/IF9jb2xvckxvb2t1cC5ibGFjayA6IF9pc051bWJlcih2KSA/IFt2ID4+IDE2LCB2ID4+IDggJiBfMjU1LCB2ICYgXzI1NV0gOiAwLFxuICAgICAgcixcbiAgICAgIGcsXG4gICAgICBiLFxuICAgICAgaCxcbiAgICAgIHMsXG4gICAgICBsLFxuICAgICAgbWF4LFxuICAgICAgbWluLFxuICAgICAgZCxcbiAgICAgIHdhc0hTTDtcblxuICBpZiAoIWEpIHtcbiAgICBpZiAodi5zdWJzdHIoLTEpID09PSBcIixcIikge1xuICAgICAgLy9zb21ldGltZXMgYSB0cmFpbGluZyBjb21tYSBpcyBpbmNsdWRlZCBhbmQgd2Ugc2hvdWxkIGNob3AgaXQgb2ZmICh0eXBpY2FsbHkgZnJvbSBhIGNvbW1hLWRlbGltaXRlZCBsaXN0IG9mIHZhbHVlcyBsaWtlIGEgdGV4dFNoYWRvdzpcIjJweCAycHggMnB4IGJsdWUsIDVweCA1cHggNXB4IHJnYigyNTUsMCwwKVwiIC0gaW4gdGhpcyBleGFtcGxlIFwiYmx1ZSxcIiBoYXMgYSB0cmFpbGluZyBjb21tYS4gV2UgY291bGQgc3RyaXAgaXQgb3V0IGluc2lkZSBwYXJzZUNvbXBsZXgoKSBidXQgd2UnZCBuZWVkIHRvIGRvIGl0IHRvIHRoZSBiZWdpbm5pbmcgYW5kIGVuZGluZyB2YWx1ZXMgcGx1cyBpdCB3b3VsZG4ndCBwcm92aWRlIHByb3RlY3Rpb24gZnJvbSBvdGhlciBwb3RlbnRpYWwgc2NlbmFyaW9zIGxpa2UgaWYgdGhlIHVzZXIgcGFzc2VzIGluIGEgc2ltaWxhciB2YWx1ZS5cbiAgICAgIHYgPSB2LnN1YnN0cigwLCB2Lmxlbmd0aCAtIDEpO1xuICAgIH1cblxuICAgIGlmIChfY29sb3JMb29rdXBbdl0pIHtcbiAgICAgIGEgPSBfY29sb3JMb29rdXBbdl07XG4gICAgfSBlbHNlIGlmICh2LmNoYXJBdCgwKSA9PT0gXCIjXCIpIHtcbiAgICAgIGlmICh2Lmxlbmd0aCA8IDYpIHtcbiAgICAgICAgLy9mb3Igc2hvcnRoYW5kIGxpa2UgIzlGMCBvciAjOUYwRiAoY291bGQgaGF2ZSBhbHBoYSlcbiAgICAgICAgciA9IHYuY2hhckF0KDEpO1xuICAgICAgICBnID0gdi5jaGFyQXQoMik7XG4gICAgICAgIGIgPSB2LmNoYXJBdCgzKTtcbiAgICAgICAgdiA9IFwiI1wiICsgciArIHIgKyBnICsgZyArIGIgKyBiICsgKHYubGVuZ3RoID09PSA1ID8gdi5jaGFyQXQoNCkgKyB2LmNoYXJBdCg0KSA6IFwiXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAodi5sZW5ndGggPT09IDkpIHtcbiAgICAgICAgLy8gaGV4IHdpdGggYWxwaGEsIGxpa2UgI2ZkNWU1M2ZmXG4gICAgICAgIGEgPSBwYXJzZUludCh2LnN1YnN0cigxLCA2KSwgMTYpO1xuICAgICAgICByZXR1cm4gW2EgPj4gMTYsIGEgPj4gOCAmIF8yNTUsIGEgJiBfMjU1LCBwYXJzZUludCh2LnN1YnN0cig3KSwgMTYpIC8gMjU1XTtcbiAgICAgIH1cblxuICAgICAgdiA9IHBhcnNlSW50KHYuc3Vic3RyKDEpLCAxNik7XG4gICAgICBhID0gW3YgPj4gMTYsIHYgPj4gOCAmIF8yNTUsIHYgJiBfMjU1XTtcbiAgICB9IGVsc2UgaWYgKHYuc3Vic3RyKDAsIDMpID09PSBcImhzbFwiKSB7XG4gICAgICBhID0gd2FzSFNMID0gdi5tYXRjaChfc3RyaWN0TnVtRXhwKTtcblxuICAgICAgaWYgKCF0b0hTTCkge1xuICAgICAgICBoID0gK2FbMF0gJSAzNjAgLyAzNjA7XG4gICAgICAgIHMgPSArYVsxXSAvIDEwMDtcbiAgICAgICAgbCA9ICthWzJdIC8gMTAwO1xuICAgICAgICBnID0gbCA8PSAuNSA/IGwgKiAocyArIDEpIDogbCArIHMgLSBsICogcztcbiAgICAgICAgciA9IGwgKiAyIC0gZztcbiAgICAgICAgYS5sZW5ndGggPiAzICYmIChhWzNdICo9IDEpOyAvL2Nhc3QgYXMgbnVtYmVyXG5cbiAgICAgICAgYVswXSA9IF9odWUoaCArIDEgLyAzLCByLCBnKTtcbiAgICAgICAgYVsxXSA9IF9odWUoaCwgciwgZyk7XG4gICAgICAgIGFbMl0gPSBfaHVlKGggLSAxIC8gMywgciwgZyk7XG4gICAgICB9IGVsc2UgaWYgKH52LmluZGV4T2YoXCI9XCIpKSB7XG4gICAgICAgIC8vaWYgcmVsYXRpdmUgdmFsdWVzIGFyZSBmb3VuZCwganVzdCByZXR1cm4gdGhlIHJhdyBzdHJpbmdzIHdpdGggdGhlIHJlbGF0aXZlIHByZWZpeGVzIGluIHBsYWNlLlxuICAgICAgICBhID0gdi5tYXRjaChfbnVtRXhwKTtcbiAgICAgICAgZm9yY2VBbHBoYSAmJiBhLmxlbmd0aCA8IDQgJiYgKGFbM10gPSAxKTtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGEgPSB2Lm1hdGNoKF9zdHJpY3ROdW1FeHApIHx8IF9jb2xvckxvb2t1cC50cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICBhID0gYS5tYXAoTnVtYmVyKTtcbiAgfVxuXG4gIGlmICh0b0hTTCAmJiAhd2FzSFNMKSB7XG4gICAgciA9IGFbMF0gLyBfMjU1O1xuICAgIGcgPSBhWzFdIC8gXzI1NTtcbiAgICBiID0gYVsyXSAvIF8yNTU7XG4gICAgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG4gICAgbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gICAgbCA9IChtYXggKyBtaW4pIC8gMjtcblxuICAgIGlmIChtYXggPT09IG1pbikge1xuICAgICAgaCA9IHMgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBkID0gbWF4IC0gbWluO1xuICAgICAgcyA9IGwgPiAwLjUgPyBkIC8gKDIgLSBtYXggLSBtaW4pIDogZCAvIChtYXggKyBtaW4pO1xuICAgICAgaCA9IG1heCA9PT0gciA/IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApIDogbWF4ID09PSBnID8gKGIgLSByKSAvIGQgKyAyIDogKHIgLSBnKSAvIGQgKyA0O1xuICAgICAgaCAqPSA2MDtcbiAgICB9XG5cbiAgICBhWzBdID0gfn4oaCArIC41KTtcbiAgICBhWzFdID0gfn4ocyAqIDEwMCArIC41KTtcbiAgICBhWzJdID0gfn4obCAqIDEwMCArIC41KTtcbiAgfVxuXG4gIGZvcmNlQWxwaGEgJiYgYS5sZW5ndGggPCA0ICYmIChhWzNdID0gMSk7XG4gIHJldHVybiBhO1xufSxcbiAgICBfY29sb3JPcmRlckRhdGEgPSBmdW5jdGlvbiBfY29sb3JPcmRlckRhdGEodikge1xuICAvLyBzdHJpcHMgb3V0IHRoZSBjb2xvcnMgZnJvbSB0aGUgc3RyaW5nLCBmaW5kcyBhbGwgdGhlIG51bWVyaWMgc2xvdHMgKHdpdGggdW5pdHMpIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIHRob3NlLiBUaGUgQXJyYXkgYWxzbyBoYXMgYSBcImNcIiBwcm9wZXJ0eSB3aGljaCBpcyBhbiBBcnJheSBvZiB0aGUgaW5kZXggdmFsdWVzIHdoZXJlIHRoZSBjb2xvcnMgYmVsb25nLiBUaGlzIGlzIHRvIGhlbHAgd29yayBhcm91bmQgaXNzdWVzIHdoZXJlIHRoZXJlJ3MgYSBtaXMtbWF0Y2hlZCBvcmRlciBvZiBjb2xvci9udW1lcmljIGRhdGEgbGlrZSBkcm9wLXNoYWRvdygjZjAwIDBweCAxcHggMnB4KSBhbmQgZHJvcC1zaGFkb3coMHggMXB4IDJweCAjZjAwKS4gVGhpcyBpcyBiYXNpY2FsbHkgYSBoZWxwZXIgZnVuY3Rpb24gdXNlZCBpbiBfZm9ybWF0Q29sb3JzKClcbiAgdmFyIHZhbHVlcyA9IFtdLFxuICAgICAgYyA9IFtdLFxuICAgICAgaSA9IC0xO1xuICB2LnNwbGl0KF9jb2xvckV4cCkuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgIHZhciBhID0gdi5tYXRjaChfbnVtV2l0aFVuaXRFeHApIHx8IFtdO1xuICAgIHZhbHVlcy5wdXNoLmFwcGx5KHZhbHVlcywgYSk7XG4gICAgYy5wdXNoKGkgKz0gYS5sZW5ndGggKyAxKTtcbiAgfSk7XG4gIHZhbHVlcy5jID0gYztcbiAgcmV0dXJuIHZhbHVlcztcbn0sXG4gICAgX2Zvcm1hdENvbG9ycyA9IGZ1bmN0aW9uIF9mb3JtYXRDb2xvcnMocywgdG9IU0wsIG9yZGVyTWF0Y2hEYXRhKSB7XG4gIHZhciByZXN1bHQgPSBcIlwiLFxuICAgICAgY29sb3JzID0gKHMgKyByZXN1bHQpLm1hdGNoKF9jb2xvckV4cCksXG4gICAgICB0eXBlID0gdG9IU0wgPyBcImhzbGEoXCIgOiBcInJnYmEoXCIsXG4gICAgICBpID0gMCxcbiAgICAgIGMsXG4gICAgICBzaGVsbCxcbiAgICAgIGQsXG4gICAgICBsO1xuXG4gIGlmICghY29sb3JzKSB7XG4gICAgcmV0dXJuIHM7XG4gIH1cblxuICBjb2xvcnMgPSBjb2xvcnMubWFwKGZ1bmN0aW9uIChjb2xvcikge1xuICAgIHJldHVybiAoY29sb3IgPSBzcGxpdENvbG9yKGNvbG9yLCB0b0hTTCwgMSkpICYmIHR5cGUgKyAodG9IU0wgPyBjb2xvclswXSArIFwiLFwiICsgY29sb3JbMV0gKyBcIiUsXCIgKyBjb2xvclsyXSArIFwiJSxcIiArIGNvbG9yWzNdIDogY29sb3Iuam9pbihcIixcIikpICsgXCIpXCI7XG4gIH0pO1xuXG4gIGlmIChvcmRlck1hdGNoRGF0YSkge1xuICAgIGQgPSBfY29sb3JPcmRlckRhdGEocyk7XG4gICAgYyA9IG9yZGVyTWF0Y2hEYXRhLmM7XG5cbiAgICBpZiAoYy5qb2luKHJlc3VsdCkgIT09IGQuYy5qb2luKHJlc3VsdCkpIHtcbiAgICAgIHNoZWxsID0gcy5yZXBsYWNlKF9jb2xvckV4cCwgXCIxXCIpLnNwbGl0KF9udW1XaXRoVW5pdEV4cCk7XG4gICAgICBsID0gc2hlbGwubGVuZ3RoIC0gMTtcblxuICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ICs9IHNoZWxsW2ldICsgKH5jLmluZGV4T2YoaSkgPyBjb2xvcnMuc2hpZnQoKSB8fCB0eXBlICsgXCIwLDAsMCwwKVwiIDogKGQubGVuZ3RoID8gZCA6IGNvbG9ycy5sZW5ndGggPyBjb2xvcnMgOiBvcmRlck1hdGNoRGF0YSkuc2hpZnQoKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKCFzaGVsbCkge1xuICAgIHNoZWxsID0gcy5zcGxpdChfY29sb3JFeHApO1xuICAgIGwgPSBzaGVsbC5sZW5ndGggLSAxO1xuXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHJlc3VsdCArPSBzaGVsbFtpXSArIGNvbG9yc1tpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0ICsgc2hlbGxbbF07XG59LFxuICAgIF9jb2xvckV4cCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHMgPSBcIig/OlxcXFxiKD86KD86cmdifHJnYmF8aHNsfGhzbGEpXFxcXCguKz9cXFxcKSl8XFxcXEIjKD86WzAtOWEtZl17Myw0fSl7MSwyfVxcXFxiXCIsXG4gICAgICAvL3dlJ2xsIGR5bmFtaWNhbGx5IGJ1aWxkIHRoaXMgUmVndWxhciBFeHByZXNzaW9uIHRvIGNvbnNlcnZlIGZpbGUgc2l6ZS4gQWZ0ZXIgYnVpbGRpbmcgaXQsIGl0IHdpbGwgYmUgYWJsZSB0byBmaW5kIHJnYigpLCByZ2JhKCksICMgKGhleGFkZWNpbWFsKSwgYW5kIG5hbWVkIGNvbG9yIHZhbHVlcyBsaWtlIHJlZCwgYmx1ZSwgcHVycGxlLCBldGMuLFxuICBwO1xuXG4gIGZvciAocCBpbiBfY29sb3JMb29rdXApIHtcbiAgICBzICs9IFwifFwiICsgcCArIFwiXFxcXGJcIjtcbiAgfVxuXG4gIHJldHVybiBuZXcgUmVnRXhwKHMgKyBcIilcIiwgXCJnaVwiKTtcbn0oKSxcbiAgICBfaHNsRXhwID0gL2hzbFthXT9cXCgvLFxuICAgIF9jb2xvclN0cmluZ0ZpbHRlciA9IGZ1bmN0aW9uIF9jb2xvclN0cmluZ0ZpbHRlcihhKSB7XG4gIHZhciBjb21iaW5lZCA9IGEuam9pbihcIiBcIiksXG4gICAgICB0b0hTTDtcbiAgX2NvbG9yRXhwLmxhc3RJbmRleCA9IDA7XG5cbiAgaWYgKF9jb2xvckV4cC50ZXN0KGNvbWJpbmVkKSkge1xuICAgIHRvSFNMID0gX2hzbEV4cC50ZXN0KGNvbWJpbmVkKTtcbiAgICBhWzFdID0gX2Zvcm1hdENvbG9ycyhhWzFdLCB0b0hTTCk7XG4gICAgYVswXSA9IF9mb3JtYXRDb2xvcnMoYVswXSwgdG9IU0wsIF9jb2xvck9yZGVyRGF0YShhWzFdKSk7IC8vIG1ha2Ugc3VyZSB0aGUgb3JkZXIgb2YgbnVtYmVycy9jb2xvcnMgbWF0Y2ggd2l0aCB0aGUgRU5EIHZhbHVlLlxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0sXG5cbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVElDS0VSXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5fdGlja2VyQWN0aXZlLFxuICAgIF90aWNrZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfZ2V0VGltZSA9IERhdGUubm93LFxuICAgICAgX2xhZ1RocmVzaG9sZCA9IDUwMCxcbiAgICAgIF9hZGp1c3RlZExhZyA9IDMzLFxuICAgICAgX3N0YXJ0VGltZSA9IF9nZXRUaW1lKCksXG4gICAgICBfbGFzdFVwZGF0ZSA9IF9zdGFydFRpbWUsXG4gICAgICBfZ2FwID0gMTAwMCAvIDI0MCxcbiAgICAgIF9uZXh0VGltZSA9IF9nYXAsXG4gICAgICBfbGlzdGVuZXJzID0gW10sXG4gICAgICBfaWQsXG4gICAgICBfcmVxLFxuICAgICAgX3JhZixcbiAgICAgIF9zZWxmLFxuICAgICAgX2RlbHRhLFxuICAgICAgX2ksXG4gICAgICBfdGljayA9IGZ1bmN0aW9uIF90aWNrKHYpIHtcbiAgICB2YXIgZWxhcHNlZCA9IF9nZXRUaW1lKCkgLSBfbGFzdFVwZGF0ZSxcbiAgICAgICAgbWFudWFsID0gdiA9PT0gdHJ1ZSxcbiAgICAgICAgb3ZlcmxhcCxcbiAgICAgICAgZGlzcGF0Y2gsXG4gICAgICAgIHRpbWUsXG4gICAgICAgIGZyYW1lO1xuXG4gICAgZWxhcHNlZCA+IF9sYWdUaHJlc2hvbGQgJiYgKF9zdGFydFRpbWUgKz0gZWxhcHNlZCAtIF9hZGp1c3RlZExhZyk7XG4gICAgX2xhc3RVcGRhdGUgKz0gZWxhcHNlZDtcbiAgICB0aW1lID0gX2xhc3RVcGRhdGUgLSBfc3RhcnRUaW1lO1xuICAgIG92ZXJsYXAgPSB0aW1lIC0gX25leHRUaW1lO1xuXG4gICAgaWYgKG92ZXJsYXAgPiAwIHx8IG1hbnVhbCkge1xuICAgICAgZnJhbWUgPSArK19zZWxmLmZyYW1lO1xuICAgICAgX2RlbHRhID0gdGltZSAtIF9zZWxmLnRpbWUgKiAxMDAwO1xuICAgICAgX3NlbGYudGltZSA9IHRpbWUgPSB0aW1lIC8gMTAwMDtcbiAgICAgIF9uZXh0VGltZSArPSBvdmVybGFwICsgKG92ZXJsYXAgPj0gX2dhcCA/IDQgOiBfZ2FwIC0gb3ZlcmxhcCk7XG4gICAgICBkaXNwYXRjaCA9IDE7XG4gICAgfVxuXG4gICAgbWFudWFsIHx8IChfaWQgPSBfcmVxKF90aWNrKSk7IC8vbWFrZSBzdXJlIHRoZSByZXF1ZXN0IGlzIG1hZGUgYmVmb3JlIHdlIGRpc3BhdGNoIHRoZSBcInRpY2tcIiBldmVudCBzbyB0aGF0IHRpbWluZyBpcyBtYWludGFpbmVkLiBPdGhlcndpc2UsIGlmIHByb2Nlc3NpbmcgdGhlIFwidGlja1wiIHJlcXVpcmVzIGEgYnVuY2ggb2YgdGltZSAobGlrZSAxNW1zKSBhbmQgd2UncmUgdXNpbmcgYSBzZXRUaW1lb3V0KCkgdGhhdCdzIGJhc2VkIG9uIDE2LjdtcywgaXQnZCB0ZWNobmljYWxseSB0YWtlIDMxLjdtcyBiZXR3ZWVuIGZyYW1lcyBvdGhlcndpc2UuXG5cbiAgICBpZiAoZGlzcGF0Y2gpIHtcbiAgICAgIGZvciAoX2kgPSAwOyBfaSA8IF9saXN0ZW5lcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIC8vIHVzZSBfaSBhbmQgY2hlY2sgX2xpc3RlbmVycy5sZW5ndGggaW5zdGVhZCBvZiBhIHZhcmlhYmxlIGJlY2F1c2UgYSBsaXN0ZW5lciBjb3VsZCBnZXQgcmVtb3ZlZCBkdXJpbmcgdGhlIGxvb3AsIGFuZCBpZiB0aGF0IGhhcHBlbnMgdG8gYW4gZWxlbWVudCBsZXNzIHRoYW4gdGhlIGN1cnJlbnQgaW5kZXgsIGl0J2QgdGhyb3cgdGhpbmdzIG9mZiBpbiB0aGUgbG9vcC5cbiAgICAgICAgX2xpc3RlbmVyc1tfaV0odGltZSwgX2RlbHRhLCBmcmFtZSwgdik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9zZWxmID0ge1xuICAgIHRpbWU6IDAsXG4gICAgZnJhbWU6IDAsXG4gICAgdGljazogZnVuY3Rpb24gdGljaygpIHtcbiAgICAgIF90aWNrKHRydWUpO1xuICAgIH0sXG4gICAgZGVsdGFSYXRpbzogZnVuY3Rpb24gZGVsdGFSYXRpbyhmcHMpIHtcbiAgICAgIHJldHVybiBfZGVsdGEgLyAoMTAwMCAvIChmcHMgfHwgNjApKTtcbiAgICB9LFxuICAgIHdha2U6IGZ1bmN0aW9uIHdha2UoKSB7XG4gICAgICBpZiAoX2NvcmVSZWFkeSkge1xuICAgICAgICBpZiAoIV9jb3JlSW5pdHRlZCAmJiBfd2luZG93RXhpc3RzKCkpIHtcbiAgICAgICAgICBfd2luID0gX2NvcmVJbml0dGVkID0gd2luZG93O1xuICAgICAgICAgIF9kb2MgPSBfd2luLmRvY3VtZW50IHx8IHt9O1xuICAgICAgICAgIF9nbG9iYWxzLmdzYXAgPSBnc2FwO1xuICAgICAgICAgIChfd2luLmdzYXBWZXJzaW9ucyB8fCAoX3dpbi5nc2FwVmVyc2lvbnMgPSBbXSkpLnB1c2goZ3NhcC52ZXJzaW9uKTtcblxuICAgICAgICAgIF9pbnN0YWxsKF9pbnN0YWxsU2NvcGUgfHwgX3dpbi5HcmVlblNvY2tHbG9iYWxzIHx8ICFfd2luLmdzYXAgJiYgX3dpbiB8fCB7fSk7XG5cbiAgICAgICAgICBfcmFmID0gX3dpbi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG4gICAgICAgIH1cblxuICAgICAgICBfaWQgJiYgX3NlbGYuc2xlZXAoKTtcblxuICAgICAgICBfcmVxID0gX3JhZiB8fCBmdW5jdGlvbiAoZikge1xuICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGYsIF9uZXh0VGltZSAtIF9zZWxmLnRpbWUgKiAxMDAwICsgMSB8IDApO1xuICAgICAgICB9O1xuXG4gICAgICAgIF90aWNrZXJBY3RpdmUgPSAxO1xuXG4gICAgICAgIF90aWNrKDIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2xlZXA6IGZ1bmN0aW9uIHNsZWVwKCkge1xuICAgICAgKF9yYWYgPyBfd2luLmNhbmNlbEFuaW1hdGlvbkZyYW1lIDogY2xlYXJUaW1lb3V0KShfaWQpO1xuICAgICAgX3RpY2tlckFjdGl2ZSA9IDA7XG4gICAgICBfcmVxID0gX2VtcHR5RnVuYztcbiAgICB9LFxuICAgIGxhZ1Ntb290aGluZzogZnVuY3Rpb24gbGFnU21vb3RoaW5nKHRocmVzaG9sZCwgYWRqdXN0ZWRMYWcpIHtcbiAgICAgIF9sYWdUaHJlc2hvbGQgPSB0aHJlc2hvbGQgfHwgMSAvIF90aW55TnVtOyAvL3plcm8gc2hvdWxkIGJlIGludGVycHJldGVkIGFzIGJhc2ljYWxseSB1bmxpbWl0ZWRcblxuICAgICAgX2FkanVzdGVkTGFnID0gTWF0aC5taW4oYWRqdXN0ZWRMYWcsIF9sYWdUaHJlc2hvbGQsIDApO1xuICAgIH0sXG4gICAgZnBzOiBmdW5jdGlvbiBmcHMoX2Zwcykge1xuICAgICAgX2dhcCA9IDEwMDAgLyAoX2ZwcyB8fCAyNDApO1xuICAgICAgX25leHRUaW1lID0gX3NlbGYudGltZSAqIDEwMDAgKyBfZ2FwO1xuICAgIH0sXG4gICAgYWRkOiBmdW5jdGlvbiBhZGQoY2FsbGJhY2ssIG9uY2UsIHByaW9yaXRpemUpIHtcbiAgICAgIHZhciBmdW5jID0gb25jZSA/IGZ1bmN0aW9uICh0LCBkLCBmLCB2KSB7XG4gICAgICAgIGNhbGxiYWNrKHQsIGQsIGYsIHYpO1xuXG4gICAgICAgIF9zZWxmLnJlbW92ZShmdW5jKTtcbiAgICAgIH0gOiBjYWxsYmFjaztcblxuICAgICAgX3NlbGYucmVtb3ZlKGNhbGxiYWNrKTtcblxuICAgICAgX2xpc3RlbmVyc1twcmlvcml0aXplID8gXCJ1bnNoaWZ0XCIgOiBcInB1c2hcIl0oZnVuYyk7XG5cbiAgICAgIF93YWtlKCk7XG5cbiAgICAgIHJldHVybiBmdW5jO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoY2FsbGJhY2ssIGkpIHtcbiAgICAgIH4oaSA9IF9saXN0ZW5lcnMuaW5kZXhPZihjYWxsYmFjaykpICYmIF9saXN0ZW5lcnMuc3BsaWNlKGksIDEpICYmIF9pID49IGkgJiYgX2ktLTtcbiAgICB9LFxuICAgIF9saXN0ZW5lcnM6IF9saXN0ZW5lcnNcbiAgfTtcbiAgcmV0dXJuIF9zZWxmO1xufSgpLFxuICAgIF93YWtlID0gZnVuY3Rpb24gX3dha2UoKSB7XG4gIHJldHVybiAhX3RpY2tlckFjdGl2ZSAmJiBfdGlja2VyLndha2UoKTtcbn0sXG4gICAgLy9hbHNvIGVuc3VyZXMgdGhlIGNvcmUgY2xhc3NlcyBhcmUgaW5pdGlhbGl6ZWQuXG5cbi8qXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiogRUFTSU5HXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5fZWFzZU1hcCA9IHt9LFxuICAgIF9jdXN0b21FYXNlRXhwID0gL15bXFxkLlxcLU1dW1xcZC5cXC0sXFxzXS8sXG4gICAgX3F1b3Rlc0V4cCA9IC9bXCInXS9nLFxuICAgIF9wYXJzZU9iamVjdEluU3RyaW5nID0gZnVuY3Rpb24gX3BhcnNlT2JqZWN0SW5TdHJpbmcodmFsdWUpIHtcbiAgLy90YWtlcyBhIHN0cmluZyBsaWtlIFwie3dpZ2dsZXM6MTAsIHR5cGU6YW50aWNpcGF0ZX0pXCIgYW5kIHR1cm5zIGl0IGludG8gYSByZWFsIG9iamVjdC4gTm90aWNlIGl0IGVuZHMgaW4gXCIpXCIgYW5kIGluY2x1ZGVzIHRoZSB7fSB3cmFwcGVycy4gVGhpcyBpcyBiZWNhdXNlIHdlIG9ubHkgdXNlIHRoaXMgZnVuY3Rpb24gZm9yIHBhcnNpbmcgZWFzZSBjb25maWdzIGFuZCBwcmlvcml0aXplZCBvcHRpbWl6YXRpb24gcmF0aGVyIHRoYW4gcmV1c2FiaWxpdHkuXG4gIHZhciBvYmogPSB7fSxcbiAgICAgIHNwbGl0ID0gdmFsdWUuc3Vic3RyKDEsIHZhbHVlLmxlbmd0aCAtIDMpLnNwbGl0KFwiOlwiKSxcbiAgICAgIGtleSA9IHNwbGl0WzBdLFxuICAgICAgaSA9IDEsXG4gICAgICBsID0gc3BsaXQubGVuZ3RoLFxuICAgICAgaW5kZXgsXG4gICAgICB2YWwsXG4gICAgICBwYXJzZWRWYWw7XG5cbiAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICB2YWwgPSBzcGxpdFtpXTtcbiAgICBpbmRleCA9IGkgIT09IGwgLSAxID8gdmFsLmxhc3RJbmRleE9mKFwiLFwiKSA6IHZhbC5sZW5ndGg7XG4gICAgcGFyc2VkVmFsID0gdmFsLnN1YnN0cigwLCBpbmRleCk7XG4gICAgb2JqW2tleV0gPSBpc05hTihwYXJzZWRWYWwpID8gcGFyc2VkVmFsLnJlcGxhY2UoX3F1b3Rlc0V4cCwgXCJcIikudHJpbSgpIDogK3BhcnNlZFZhbDtcbiAgICBrZXkgPSB2YWwuc3Vic3RyKGluZGV4ICsgMSkudHJpbSgpO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0sXG4gICAgX3ZhbHVlSW5QYXJlbnRoZXNlcyA9IGZ1bmN0aW9uIF92YWx1ZUluUGFyZW50aGVzZXModmFsdWUpIHtcbiAgdmFyIG9wZW4gPSB2YWx1ZS5pbmRleE9mKFwiKFwiKSArIDEsXG4gICAgICBjbG9zZSA9IHZhbHVlLmluZGV4T2YoXCIpXCIpLFxuICAgICAgbmVzdGVkID0gdmFsdWUuaW5kZXhPZihcIihcIiwgb3Blbik7XG4gIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcob3Blbiwgfm5lc3RlZCAmJiBuZXN0ZWQgPCBjbG9zZSA/IHZhbHVlLmluZGV4T2YoXCIpXCIsIGNsb3NlICsgMSkgOiBjbG9zZSk7XG59LFxuICAgIF9jb25maWdFYXNlRnJvbVN0cmluZyA9IGZ1bmN0aW9uIF9jb25maWdFYXNlRnJvbVN0cmluZyhuYW1lKSB7XG4gIC8vbmFtZSBjYW4gYmUgYSBzdHJpbmcgbGlrZSBcImVsYXN0aWMub3V0KDEsMC41KVwiLCBhbmQgcGFzcyBpbiBfZWFzZU1hcCBhcyBvYmogYW5kIGl0J2xsIHBhcnNlIGl0IG91dCBhbmQgY2FsbCB0aGUgYWN0dWFsIGZ1bmN0aW9uIGxpa2UgX2Vhc2VNYXAuRWxhc3RpYy5lYXNlT3V0LmNvbmZpZygxLDAuNSkuIEl0IHdpbGwgYWxzbyBwYXJzZSBjdXN0b20gZWFzZSBzdHJpbmdzIGFzIGxvbmcgYXMgQ3VzdG9tRWFzZSBpcyBsb2FkZWQgYW5kIHJlZ2lzdGVyZWQgKGludGVybmFsbHkgYXMgX2Vhc2VNYXAuX0NFKS5cbiAgdmFyIHNwbGl0ID0gKG5hbWUgKyBcIlwiKS5zcGxpdChcIihcIiksXG4gICAgICBlYXNlID0gX2Vhc2VNYXBbc3BsaXRbMF1dO1xuICByZXR1cm4gZWFzZSAmJiBzcGxpdC5sZW5ndGggPiAxICYmIGVhc2UuY29uZmlnID8gZWFzZS5jb25maWcuYXBwbHkobnVsbCwgfm5hbWUuaW5kZXhPZihcIntcIikgPyBbX3BhcnNlT2JqZWN0SW5TdHJpbmcoc3BsaXRbMV0pXSA6IF92YWx1ZUluUGFyZW50aGVzZXMobmFtZSkuc3BsaXQoXCIsXCIpLm1hcChfbnVtZXJpY0lmUG9zc2libGUpKSA6IF9lYXNlTWFwLl9DRSAmJiBfY3VzdG9tRWFzZUV4cC50ZXN0KG5hbWUpID8gX2Vhc2VNYXAuX0NFKFwiXCIsIG5hbWUpIDogZWFzZTtcbn0sXG4gICAgX2ludmVydEVhc2UgPSBmdW5jdGlvbiBfaW52ZXJ0RWFzZShlYXNlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAxIC0gZWFzZSgxIC0gcCk7XG4gIH07XG59LFxuICAgIC8vIGFsbG93IHlveW9FYXNlIHRvIGJlIHNldCBpbiBjaGlsZHJlbiBhbmQgaGF2ZSB0aG9zZSBhZmZlY3RlZCB3aGVuIHRoZSBwYXJlbnQvYW5jZXN0b3IgdGltZWxpbmUgeW95b3MuXG5fcHJvcGFnYXRlWW95b0Vhc2UgPSBmdW5jdGlvbiBfcHJvcGFnYXRlWW95b0Vhc2UodGltZWxpbmUsIGlzWW95bykge1xuICB2YXIgY2hpbGQgPSB0aW1lbGluZS5fZmlyc3QsXG4gICAgICBlYXNlO1xuXG4gIHdoaWxlIChjaGlsZCkge1xuICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFRpbWVsaW5lKSB7XG4gICAgICBfcHJvcGFnYXRlWW95b0Vhc2UoY2hpbGQsIGlzWW95byk7XG4gICAgfSBlbHNlIGlmIChjaGlsZC52YXJzLnlveW9FYXNlICYmICghY2hpbGQuX3lveW8gfHwgIWNoaWxkLl9yZXBlYXQpICYmIGNoaWxkLl95b3lvICE9PSBpc1lveW8pIHtcbiAgICAgIGlmIChjaGlsZC50aW1lbGluZSkge1xuICAgICAgICBfcHJvcGFnYXRlWW95b0Vhc2UoY2hpbGQudGltZWxpbmUsIGlzWW95byk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlYXNlID0gY2hpbGQuX2Vhc2U7XG4gICAgICAgIGNoaWxkLl9lYXNlID0gY2hpbGQuX3lFYXNlO1xuICAgICAgICBjaGlsZC5feUVhc2UgPSBlYXNlO1xuICAgICAgICBjaGlsZC5feW95byA9IGlzWW95bztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICB9XG59LFxuICAgIF9wYXJzZUVhc2UgPSBmdW5jdGlvbiBfcGFyc2VFYXNlKGVhc2UsIGRlZmF1bHRFYXNlKSB7XG4gIHJldHVybiAhZWFzZSA/IGRlZmF1bHRFYXNlIDogKF9pc0Z1bmN0aW9uKGVhc2UpID8gZWFzZSA6IF9lYXNlTWFwW2Vhc2VdIHx8IF9jb25maWdFYXNlRnJvbVN0cmluZyhlYXNlKSkgfHwgZGVmYXVsdEVhc2U7XG59LFxuICAgIF9pbnNlcnRFYXNlID0gZnVuY3Rpb24gX2luc2VydEVhc2UobmFtZXMsIGVhc2VJbiwgZWFzZU91dCwgZWFzZUluT3V0KSB7XG4gIGlmIChlYXNlT3V0ID09PSB2b2lkIDApIHtcbiAgICBlYXNlT3V0ID0gZnVuY3Rpb24gZWFzZU91dChwKSB7XG4gICAgICByZXR1cm4gMSAtIGVhc2VJbigxIC0gcCk7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChlYXNlSW5PdXQgPT09IHZvaWQgMCkge1xuICAgIGVhc2VJbk91dCA9IGZ1bmN0aW9uIGVhc2VJbk91dChwKSB7XG4gICAgICByZXR1cm4gcCA8IC41ID8gZWFzZUluKHAgKiAyKSAvIDIgOiAxIC0gZWFzZUluKCgxIC0gcCkgKiAyKSAvIDI7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBlYXNlID0ge1xuICAgIGVhc2VJbjogZWFzZUluLFxuICAgIGVhc2VPdXQ6IGVhc2VPdXQsXG4gICAgZWFzZUluT3V0OiBlYXNlSW5PdXRcbiAgfSxcbiAgICAgIGxvd2VyY2FzZU5hbWU7XG5cbiAgX2ZvckVhY2hOYW1lKG5hbWVzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgIF9lYXNlTWFwW25hbWVdID0gX2dsb2JhbHNbbmFtZV0gPSBlYXNlO1xuICAgIF9lYXNlTWFwW2xvd2VyY2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCldID0gZWFzZU91dDtcblxuICAgIGZvciAodmFyIHAgaW4gZWFzZSkge1xuICAgICAgX2Vhc2VNYXBbbG93ZXJjYXNlTmFtZSArIChwID09PSBcImVhc2VJblwiID8gXCIuaW5cIiA6IHAgPT09IFwiZWFzZU91dFwiID8gXCIub3V0XCIgOiBcIi5pbk91dFwiKV0gPSBfZWFzZU1hcFtuYW1lICsgXCIuXCIgKyBwXSA9IGVhc2VbcF07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWFzZTtcbn0sXG4gICAgX2Vhc2VJbk91dEZyb21PdXQgPSBmdW5jdGlvbiBfZWFzZUluT3V0RnJvbU91dChlYXNlT3V0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBwIDwgLjUgPyAoMSAtIGVhc2VPdXQoMSAtIHAgKiAyKSkgLyAyIDogLjUgKyBlYXNlT3V0KChwIC0gLjUpICogMikgLyAyO1xuICB9O1xufSxcbiAgICBfY29uZmlnRWxhc3RpYyA9IGZ1bmN0aW9uIF9jb25maWdFbGFzdGljKHR5cGUsIGFtcGxpdHVkZSwgcGVyaW9kKSB7XG4gIHZhciBwMSA9IGFtcGxpdHVkZSA+PSAxID8gYW1wbGl0dWRlIDogMSxcbiAgICAgIC8vbm90ZTogaWYgYW1wbGl0dWRlIGlzIDwgMSwgd2Ugc2ltcGx5IGFkanVzdCB0aGUgcGVyaW9kIGZvciBhIG1vcmUgbmF0dXJhbCBmZWVsLiBPdGhlcndpc2UgdGhlIG1hdGggZG9lc24ndCB3b3JrIHJpZ2h0IGFuZCB0aGUgY3VydmUgc3RhcnRzIGF0IDEuXG4gIHAyID0gKHBlcmlvZCB8fCAodHlwZSA/IC4zIDogLjQ1KSkgLyAoYW1wbGl0dWRlIDwgMSA/IGFtcGxpdHVkZSA6IDEpLFxuICAgICAgcDMgPSBwMiAvIF8yUEkgKiAoTWF0aC5hc2luKDEgLyBwMSkgfHwgMCksXG4gICAgICBlYXNlT3V0ID0gZnVuY3Rpb24gZWFzZU91dChwKSB7XG4gICAgcmV0dXJuIHAgPT09IDEgPyAxIDogcDEgKiBNYXRoLnBvdygyLCAtMTAgKiBwKSAqIF9zaW4oKHAgLSBwMykgKiBwMikgKyAxO1xuICB9LFxuICAgICAgZWFzZSA9IHR5cGUgPT09IFwib3V0XCIgPyBlYXNlT3V0IDogdHlwZSA9PT0gXCJpblwiID8gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gMSAtIGVhc2VPdXQoMSAtIHApO1xuICB9IDogX2Vhc2VJbk91dEZyb21PdXQoZWFzZU91dCk7XG5cbiAgcDIgPSBfMlBJIC8gcDI7IC8vcHJlY2FsY3VsYXRlIHRvIG9wdGltaXplXG5cbiAgZWFzZS5jb25maWcgPSBmdW5jdGlvbiAoYW1wbGl0dWRlLCBwZXJpb2QpIHtcbiAgICByZXR1cm4gX2NvbmZpZ0VsYXN0aWModHlwZSwgYW1wbGl0dWRlLCBwZXJpb2QpO1xuICB9O1xuXG4gIHJldHVybiBlYXNlO1xufSxcbiAgICBfY29uZmlnQmFjayA9IGZ1bmN0aW9uIF9jb25maWdCYWNrKHR5cGUsIG92ZXJzaG9vdCkge1xuICBpZiAob3ZlcnNob290ID09PSB2b2lkIDApIHtcbiAgICBvdmVyc2hvb3QgPSAxLjcwMTU4O1xuICB9XG5cbiAgdmFyIGVhc2VPdXQgPSBmdW5jdGlvbiBlYXNlT3V0KHApIHtcbiAgICByZXR1cm4gcCA/IC0tcCAqIHAgKiAoKG92ZXJzaG9vdCArIDEpICogcCArIG92ZXJzaG9vdCkgKyAxIDogMDtcbiAgfSxcbiAgICAgIGVhc2UgPSB0eXBlID09PSBcIm91dFwiID8gZWFzZU91dCA6IHR5cGUgPT09IFwiaW5cIiA/IGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIDEgLSBlYXNlT3V0KDEgLSBwKTtcbiAgfSA6IF9lYXNlSW5PdXRGcm9tT3V0KGVhc2VPdXQpO1xuXG4gIGVhc2UuY29uZmlnID0gZnVuY3Rpb24gKG92ZXJzaG9vdCkge1xuICAgIHJldHVybiBfY29uZmlnQmFjayh0eXBlLCBvdmVyc2hvb3QpO1xuICB9O1xuXG4gIHJldHVybiBlYXNlO1xufTsgLy8gYSBjaGVhcGVyIChrYiBhbmQgY3B1KSBidXQgbW9yZSBtaWxkIHdheSB0byBnZXQgYSBwYXJhbWV0ZXJpemVkIHdlaWdodGVkIGVhc2UgYnkgZmVlZGluZyBpbiBhIHZhbHVlIGJldHdlZW4gLTEgKGVhc2VJbikgYW5kIDEgKGVhc2VPdXQpIHdoZXJlIDAgaXMgbGluZWFyLlxuLy8gX3dlaWdodGVkRWFzZSA9IHJhdGlvID0+IHtcbi8vIFx0bGV0IHkgPSAwLjUgKyByYXRpbyAvIDI7XG4vLyBcdHJldHVybiBwID0+ICgyICogKDEgLSBwKSAqIHAgKiB5ICsgcCAqIHApO1xuLy8gfSxcbi8vIGEgc3Ryb25nZXIgKGJ1dCBtb3JlIGV4cGVuc2l2ZSBrYi9jcHUpIHBhcmFtZXRlcml6ZWQgd2VpZ2h0ZWQgZWFzZSB0aGF0IGxldHMgeW91IGZlZWQgaW4gYSB2YWx1ZSBiZXR3ZWVuIC0xIChlYXNlSW4pIGFuZCAxIChlYXNlT3V0KSB3aGVyZSAwIGlzIGxpbmVhci5cbi8vIF93ZWlnaHRlZEVhc2VTdHJvbmcgPSByYXRpbyA9PiB7XG4vLyBcdHJhdGlvID0gLjUgKyByYXRpbyAvIDI7XG4vLyBcdGxldCBvID0gMSAvIDMgKiAocmF0aW8gPCAuNSA/IHJhdGlvIDogMSAtIHJhdGlvKSxcbi8vIFx0XHRiID0gcmF0aW8gLSBvLFxuLy8gXHRcdGMgPSByYXRpbyArIG87XG4vLyBcdHJldHVybiBwID0+IHAgPT09IDEgPyBwIDogMyAqIGIgKiAoMSAtIHApICogKDEgLSBwKSAqIHAgKyAzICogYyAqICgxIC0gcCkgKiBwICogcCArIHAgKiBwICogcDtcbi8vIH07XG5cblxuX2ZvckVhY2hOYW1lKFwiTGluZWFyLFF1YWQsQ3ViaWMsUXVhcnQsUXVpbnQsU3Ryb25nXCIsIGZ1bmN0aW9uIChuYW1lLCBpKSB7XG4gIHZhciBwb3dlciA9IGkgPCA1ID8gaSArIDEgOiBpO1xuXG4gIF9pbnNlcnRFYXNlKG5hbWUgKyBcIixQb3dlclwiICsgKHBvd2VyIC0gMSksIGkgPyBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBNYXRoLnBvdyhwLCBwb3dlcik7XG4gIH0gOiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBwO1xuICB9LCBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAxIC0gTWF0aC5wb3coMSAtIHAsIHBvd2VyKTtcbiAgfSwgZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcCA8IC41ID8gTWF0aC5wb3cocCAqIDIsIHBvd2VyKSAvIDIgOiAxIC0gTWF0aC5wb3coKDEgLSBwKSAqIDIsIHBvd2VyKSAvIDI7XG4gIH0pO1xufSk7XG5cbl9lYXNlTWFwLkxpbmVhci5lYXNlTm9uZSA9IF9lYXNlTWFwLm5vbmUgPSBfZWFzZU1hcC5MaW5lYXIuZWFzZUluO1xuXG5faW5zZXJ0RWFzZShcIkVsYXN0aWNcIiwgX2NvbmZpZ0VsYXN0aWMoXCJpblwiKSwgX2NvbmZpZ0VsYXN0aWMoXCJvdXRcIiksIF9jb25maWdFbGFzdGljKCkpO1xuXG4oZnVuY3Rpb24gKG4sIGMpIHtcbiAgdmFyIG4xID0gMSAvIGMsXG4gICAgICBuMiA9IDIgKiBuMSxcbiAgICAgIG4zID0gMi41ICogbjEsXG4gICAgICBlYXNlT3V0ID0gZnVuY3Rpb24gZWFzZU91dChwKSB7XG4gICAgcmV0dXJuIHAgPCBuMSA/IG4gKiBwICogcCA6IHAgPCBuMiA/IG4gKiBNYXRoLnBvdyhwIC0gMS41IC8gYywgMikgKyAuNzUgOiBwIDwgbjMgPyBuICogKHAgLT0gMi4yNSAvIGMpICogcCArIC45Mzc1IDogbiAqIE1hdGgucG93KHAgLSAyLjYyNSAvIGMsIDIpICsgLjk4NDM3NTtcbiAgfTtcblxuICBfaW5zZXJ0RWFzZShcIkJvdW5jZVwiLCBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAxIC0gZWFzZU91dCgxIC0gcCk7XG4gIH0sIGVhc2VPdXQpO1xufSkoNy41NjI1LCAyLjc1KTtcblxuX2luc2VydEVhc2UoXCJFeHBvXCIsIGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiBwID8gTWF0aC5wb3coMiwgMTAgKiAocCAtIDEpKSA6IDA7XG59KTtcblxuX2luc2VydEVhc2UoXCJDaXJjXCIsIGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiAtKF9zcXJ0KDEgLSBwICogcCkgLSAxKTtcbn0pO1xuXG5faW5zZXJ0RWFzZShcIlNpbmVcIiwgZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIHAgPT09IDEgPyAxIDogLV9jb3MocCAqIF9IQUxGX1BJKSArIDE7XG59KTtcblxuX2luc2VydEVhc2UoXCJCYWNrXCIsIF9jb25maWdCYWNrKFwiaW5cIiksIF9jb25maWdCYWNrKFwib3V0XCIpLCBfY29uZmlnQmFjaygpKTtcblxuX2Vhc2VNYXAuU3RlcHBlZEVhc2UgPSBfZWFzZU1hcC5zdGVwcyA9IF9nbG9iYWxzLlN0ZXBwZWRFYXNlID0ge1xuICBjb25maWc6IGZ1bmN0aW9uIGNvbmZpZyhzdGVwcywgaW1tZWRpYXRlU3RhcnQpIHtcbiAgICBpZiAoc3RlcHMgPT09IHZvaWQgMCkge1xuICAgICAgc3RlcHMgPSAxO1xuICAgIH1cblxuICAgIHZhciBwMSA9IDEgLyBzdGVwcyxcbiAgICAgICAgcDIgPSBzdGVwcyArIChpbW1lZGlhdGVTdGFydCA/IDAgOiAxKSxcbiAgICAgICAgcDMgPSBpbW1lZGlhdGVTdGFydCA/IDEgOiAwLFxuICAgICAgICBtYXggPSAxIC0gX3RpbnlOdW07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gKChwMiAqIF9jbGFtcCgwLCBtYXgsIHApIHwgMCkgKyBwMykgKiBwMTtcbiAgICB9O1xuICB9XG59O1xuX2RlZmF1bHRzLmVhc2UgPSBfZWFzZU1hcFtcInF1YWQub3V0XCJdO1xuXG5fZm9yRWFjaE5hbWUoXCJvbkNvbXBsZXRlLG9uVXBkYXRlLG9uU3RhcnQsb25SZXBlYXQsb25SZXZlcnNlQ29tcGxldGUsb25JbnRlcnJ1cHRcIiwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIF9jYWxsYmFja05hbWVzICs9IG5hbWUgKyBcIixcIiArIG5hbWUgKyBcIlBhcmFtcyxcIjtcbn0pO1xuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDQUNIRVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5cbmV4cG9ydCB2YXIgR1NDYWNoZSA9IGZ1bmN0aW9uIEdTQ2FjaGUodGFyZ2V0LCBoYXJuZXNzKSB7XG4gIHRoaXMuaWQgPSBfZ3NJRCsrO1xuICB0YXJnZXQuX2dzYXAgPSB0aGlzO1xuICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgdGhpcy5oYXJuZXNzID0gaGFybmVzcztcbiAgdGhpcy5nZXQgPSBoYXJuZXNzID8gaGFybmVzcy5nZXQgOiBfZ2V0UHJvcGVydHk7XG4gIHRoaXMuc2V0ID0gaGFybmVzcyA/IGhhcm5lc3MuZ2V0U2V0dGVyIDogX2dldFNldHRlcjtcbn07XG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEFOSU1BVElPTlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5leHBvcnQgdmFyIEFuaW1hdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEFuaW1hdGlvbih2YXJzKSB7XG4gICAgdGhpcy52YXJzID0gdmFycztcbiAgICB0aGlzLl9kZWxheSA9ICt2YXJzLmRlbGF5IHx8IDA7XG5cbiAgICBpZiAodGhpcy5fcmVwZWF0ID0gdmFycy5yZXBlYXQgPT09IEluZmluaXR5ID8gLTIgOiB2YXJzLnJlcGVhdCB8fCAwKSB7XG4gICAgICAvLyBUT0RPOiByZXBlYXQ6IEluZmluaXR5IG9uIGEgdGltZWxpbmUncyBjaGlsZHJlbiBtdXN0IGZsYWcgdGhhdCB0aW1lbGluZSBpbnRlcm5hbGx5IGFuZCBhZmZlY3QgaXRzIHRvdGFsRHVyYXRpb24sIG90aGVyd2lzZSBpdCdsbCBzdG9wIGluIHRoZSBuZWdhdGl2ZSBkaXJlY3Rpb24gd2hlbiByZWFjaGluZyB0aGUgc3RhcnQuXG4gICAgICB0aGlzLl9yRGVsYXkgPSB2YXJzLnJlcGVhdERlbGF5IHx8IDA7XG4gICAgICB0aGlzLl95b3lvID0gISF2YXJzLnlveW8gfHwgISF2YXJzLnlveW9FYXNlO1xuICAgIH1cblxuICAgIHRoaXMuX3RzID0gMTtcblxuICAgIF9zZXREdXJhdGlvbih0aGlzLCArdmFycy5kdXJhdGlvbiwgMSwgMSk7XG5cbiAgICB0aGlzLmRhdGEgPSB2YXJzLmRhdGE7XG4gICAgX3RpY2tlckFjdGl2ZSB8fCBfdGlja2VyLndha2UoKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBBbmltYXRpb24ucHJvdG90eXBlO1xuXG4gIF9wcm90by5kZWxheSA9IGZ1bmN0aW9uIGRlbGF5KHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlIHx8IHZhbHVlID09PSAwKSB7XG4gICAgICB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5zbW9vdGhDaGlsZFRpbWluZyAmJiB0aGlzLnN0YXJ0VGltZSh0aGlzLl9zdGFydCArIHZhbHVlIC0gdGhpcy5fZGVsYXkpO1xuICAgICAgdGhpcy5fZGVsYXkgPSB2YWx1ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9kZWxheTtcbiAgfTtcblxuICBfcHJvdG8uZHVyYXRpb24gPSBmdW5jdGlvbiBkdXJhdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy50b3RhbER1cmF0aW9uKHRoaXMuX3JlcGVhdCA+IDAgPyB2YWx1ZSArICh2YWx1ZSArIHRoaXMuX3JEZWxheSkgKiB0aGlzLl9yZXBlYXQgOiB2YWx1ZSkgOiB0aGlzLnRvdGFsRHVyYXRpb24oKSAmJiB0aGlzLl9kdXI7XG4gIH07XG5cbiAgX3Byb3RvLnRvdGFsRHVyYXRpb24gPSBmdW5jdGlvbiB0b3RhbER1cmF0aW9uKHZhbHVlKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdER1cjtcbiAgICB9XG5cbiAgICB0aGlzLl9kaXJ0eSA9IDA7XG4gICAgcmV0dXJuIF9zZXREdXJhdGlvbih0aGlzLCB0aGlzLl9yZXBlYXQgPCAwID8gdmFsdWUgOiAodmFsdWUgLSB0aGlzLl9yZXBlYXQgKiB0aGlzLl9yRGVsYXkpIC8gKHRoaXMuX3JlcGVhdCArIDEpKTtcbiAgfTtcblxuICBfcHJvdG8udG90YWxUaW1lID0gZnVuY3Rpb24gdG90YWxUaW1lKF90b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgX3dha2UoKTtcblxuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RUaW1lO1xuICAgIH1cblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLl9kcDtcblxuICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LnNtb290aENoaWxkVGltaW5nICYmIHRoaXMuX3RzKSB7XG4gICAgICBfYWxpZ25QbGF5aGVhZCh0aGlzLCBfdG90YWxUaW1lKTtcblxuICAgICAgIXBhcmVudC5fZHAgfHwgcGFyZW50LnBhcmVudCB8fCBfcG9zdEFkZENoZWNrcyhwYXJlbnQsIHRoaXMpOyAvLyBlZGdlIGNhc2U6IGlmIHRoaXMgaXMgYSBjaGlsZCBvZiBhIHRpbWVsaW5lIHRoYXQgYWxyZWFkeSBjb21wbGV0ZWQsIGZvciBleGFtcGxlLCB3ZSBtdXN0IHJlLWFjdGl2YXRlIHRoZSBwYXJlbnQuXG4gICAgICAvL2luIGNhc2UgYW55IG9mIHRoZSBhbmNlc3RvciB0aW1lbGluZXMgaGFkIGNvbXBsZXRlZCBidXQgc2hvdWxkIG5vdyBiZSBlbmFibGVkLCB3ZSBzaG91bGQgcmVzZXQgdGhlaXIgdG90YWxUaW1lKCkgd2hpY2ggd2lsbCBhbHNvIGVuc3VyZSB0aGF0IHRoZXkncmUgbGluZWQgdXAgcHJvcGVybHkgYW5kIGVuYWJsZWQuIFNraXAgZm9yIGFuaW1hdGlvbnMgdGhhdCBhcmUgb24gdGhlIHJvb3QgKHdhc3RlZnVsKS4gRXhhbXBsZTogYSBUaW1lbGluZUxpdGUuZXhwb3J0Um9vdCgpIGlzIHBlcmZvcm1lZCB3aGVuIHRoZXJlJ3MgYSBwYXVzZWQgdHdlZW4gb24gdGhlIHJvb3QsIHRoZSBleHBvcnQgd2lsbCBub3QgY29tcGxldGUgdW50aWwgdGhhdCB0d2VlbiBpcyB1bnBhdXNlZCwgYnV0IGltYWdpbmUgYSBjaGlsZCBnZXRzIHJlc3RhcnRlZCBsYXRlciwgYWZ0ZXIgYWxsIFt1bnBhdXNlZF0gdHdlZW5zIGhhdmUgY29tcGxldGVkLiBUaGUgc3RhcnQgb2YgdGhhdCBjaGlsZCB3b3VsZCBnZXQgcHVzaGVkIG91dCwgYnV0IG9uZSBvZiB0aGUgYW5jZXN0b3JzIG1heSBoYXZlIGNvbXBsZXRlZC5cblxuICAgICAgd2hpbGUgKHBhcmVudCAmJiBwYXJlbnQucGFyZW50KSB7XG4gICAgICAgIGlmIChwYXJlbnQucGFyZW50Ll90aW1lICE9PSBwYXJlbnQuX3N0YXJ0ICsgKHBhcmVudC5fdHMgPj0gMCA/IHBhcmVudC5fdFRpbWUgLyBwYXJlbnQuX3RzIDogKHBhcmVudC50b3RhbER1cmF0aW9uKCkgLSBwYXJlbnQuX3RUaW1lKSAvIC1wYXJlbnQuX3RzKSkge1xuICAgICAgICAgIHBhcmVudC50b3RhbFRpbWUocGFyZW50Ll90VGltZSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMucGFyZW50ICYmIHRoaXMuX2RwLmF1dG9SZW1vdmVDaGlsZHJlbiAmJiAodGhpcy5fdHMgPiAwICYmIF90b3RhbFRpbWUgPCB0aGlzLl90RHVyIHx8IHRoaXMuX3RzIDwgMCAmJiBfdG90YWxUaW1lID4gMCB8fCAhdGhpcy5fdER1ciAmJiAhX3RvdGFsVGltZSkpIHtcbiAgICAgICAgLy9pZiB0aGUgYW5pbWF0aW9uIGRvZXNuJ3QgaGF2ZSBhIHBhcmVudCwgcHV0IGl0IGJhY2sgaW50byBpdHMgbGFzdCBwYXJlbnQgKHJlY29yZGVkIGFzIF9kcCBmb3IgZXhhY3RseSBjYXNlcyBsaWtlIHRoaXMpLiBMaW1pdCB0byBwYXJlbnRzIHdpdGggYXV0b1JlbW92ZUNoaWxkcmVuIChsaWtlIGdsb2JhbFRpbWVsaW5lKSBzbyB0aGF0IGlmIHRoZSB1c2VyIG1hbnVhbGx5IHJlbW92ZXMgYW4gYW5pbWF0aW9uIGZyb20gYSB0aW1lbGluZSBhbmQgdGhlbiBhbHRlcnMgaXRzIHBsYXloZWFkLCBpdCBkb2Vzbid0IGdldCBhZGRlZCBiYWNrIGluLlxuICAgICAgICBfYWRkVG9UaW1lbGluZSh0aGlzLl9kcCwgdGhpcywgdGhpcy5fc3RhcnQgLSB0aGlzLl9kZWxheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3RUaW1lICE9PSBfdG90YWxUaW1lIHx8ICF0aGlzLl9kdXIgJiYgIXN1cHByZXNzRXZlbnRzIHx8IHRoaXMuX2luaXR0ZWQgJiYgTWF0aC5hYnModGhpcy5felRpbWUpID09PSBfdGlueU51bSB8fCAhX3RvdGFsVGltZSAmJiAhdGhpcy5faW5pdHRlZCAmJiAodGhpcy5hZGQgfHwgdGhpcy5fcHRMb29rdXApKSB7XG4gICAgICAvLyBjaGVjayBmb3IgX3B0TG9va3VwIG9uIGEgVHdlZW4gaW5zdGFuY2UgdG8gZW5zdXJlIGl0IGhhcyBhY3R1YWxseSBmaW5pc2hlZCBiZWluZyBpbnN0YW50aWF0ZWQsIG90aGVyd2lzZSBpZiB0aGlzLnJldmVyc2UoKSBnZXRzIGNhbGxlZCBpbiB0aGUgQW5pbWF0aW9uIGNvbnN0cnVjdG9yLCBpdCBjb3VsZCB0cmlnZ2VyIGEgcmVuZGVyKCkgaGVyZSBldmVuIHRob3VnaCB0aGUgX3RhcmdldHMgd2VyZW4ndCBwb3B1bGF0ZWQsIHRodXMgd2hlbiBfaW5pdCgpIGlzIGNhbGxlZCB0aGVyZSB3b24ndCBiZSBhbnkgUHJvcFR3ZWVucyAoaXQnbGwgYWN0IGxpa2UgdGhlIHR3ZWVuIGlzIG5vbi1mdW5jdGlvbmFsKVxuICAgICAgdGhpcy5fdHMgfHwgKHRoaXMuX3BUaW1lID0gX3RvdGFsVGltZSk7IC8vIG90aGVyd2lzZSwgaWYgYW4gYW5pbWF0aW9uIGlzIHBhdXNlZCwgdGhlbiB0aGUgcGxheWhlYWQgaXMgbW92ZWQgYmFjayB0byB6ZXJvLCB0aGVuIHJlc3VtZWQsIGl0J2QgcmV2ZXJ0IGJhY2sgdG8gdGhlIG9yaWdpbmFsIHRpbWUgYXQgdGhlIHBhdXNlXG4gICAgICAvL2lmICghdGhpcy5fbG9jaykgeyAvLyBhdm9pZCBlbmRsZXNzIHJlY3Vyc2lvbiAobm90IHN1cmUgd2UgbmVlZCB0aGlzIHlldCBvciBpZiBpdCdzIHdvcnRoIHRoZSBwZXJmb3JtYW5jZSBoaXQpXG4gICAgICAvLyAgIHRoaXMuX2xvY2sgPSAxO1xuXG4gICAgICBfbGF6eVNhZmVSZW5kZXIodGhpcywgX3RvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMpOyAvLyAgIHRoaXMuX2xvY2sgPSAwO1xuICAgICAgLy99XG5cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8udGltZSA9IGZ1bmN0aW9uIHRpbWUodmFsdWUsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLnRvdGFsVGltZShNYXRoLm1pbih0aGlzLnRvdGFsRHVyYXRpb24oKSwgdmFsdWUgKyBfZWxhcHNlZEN5Y2xlRHVyYXRpb24odGhpcykpICUgKHRoaXMuX2R1ciArIHRoaXMuX3JEZWxheSkgfHwgKHZhbHVlID8gdGhpcy5fZHVyIDogMCksIHN1cHByZXNzRXZlbnRzKSA6IHRoaXMuX3RpbWU7IC8vIG5vdGU6IGlmIHRoZSBtb2R1bHVzIHJlc3VsdHMgaW4gMCwgdGhlIHBsYXloZWFkIGNvdWxkIGJlIGV4YWN0bHkgYXQgdGhlIGVuZCBvciB0aGUgYmVnaW5uaW5nLCBhbmQgd2UgYWx3YXlzIGRlZmVyIHRvIHRoZSBFTkQgd2l0aCBhIG5vbi16ZXJvIHZhbHVlLCBvdGhlcndpc2UgaWYgeW91IHNldCB0aGUgdGltZSgpIHRvIHRoZSB2ZXJ5IGVuZCAoZHVyYXRpb24oKSksIGl0IHdvdWxkIHJlbmRlciBhdCB0aGUgU1RBUlQhXG4gIH07XG5cbiAgX3Byb3RvLnRvdGFsUHJvZ3Jlc3MgPSBmdW5jdGlvbiB0b3RhbFByb2dyZXNzKHZhbHVlLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy50b3RhbFRpbWUodGhpcy50b3RhbER1cmF0aW9uKCkgKiB2YWx1ZSwgc3VwcHJlc3NFdmVudHMpIDogdGhpcy50b3RhbER1cmF0aW9uKCkgPyBNYXRoLm1pbigxLCB0aGlzLl90VGltZSAvIHRoaXMuX3REdXIpIDogdGhpcy5yYXRpbztcbiAgfTtcblxuICBfcHJvdG8ucHJvZ3Jlc3MgPSBmdW5jdGlvbiBwcm9ncmVzcyh2YWx1ZSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMudG90YWxUaW1lKHRoaXMuZHVyYXRpb24oKSAqICh0aGlzLl95b3lvICYmICEodGhpcy5pdGVyYXRpb24oKSAmIDEpID8gMSAtIHZhbHVlIDogdmFsdWUpICsgX2VsYXBzZWRDeWNsZUR1cmF0aW9uKHRoaXMpLCBzdXBwcmVzc0V2ZW50cykgOiB0aGlzLmR1cmF0aW9uKCkgPyBNYXRoLm1pbigxLCB0aGlzLl90aW1lIC8gdGhpcy5fZHVyKSA6IHRoaXMucmF0aW87XG4gIH07XG5cbiAgX3Byb3RvLml0ZXJhdGlvbiA9IGZ1bmN0aW9uIGl0ZXJhdGlvbih2YWx1ZSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICB2YXIgY3ljbGVEdXJhdGlvbiA9IHRoaXMuZHVyYXRpb24oKSArIHRoaXMuX3JEZWxheTtcblxuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy50b3RhbFRpbWUodGhpcy5fdGltZSArICh2YWx1ZSAtIDEpICogY3ljbGVEdXJhdGlvbiwgc3VwcHJlc3NFdmVudHMpIDogdGhpcy5fcmVwZWF0ID8gX2FuaW1hdGlvbkN5Y2xlKHRoaXMuX3RUaW1lLCBjeWNsZUR1cmF0aW9uKSArIDEgOiAxO1xuICB9IC8vIHBvdGVudGlhbCBmdXR1cmUgYWRkaXRpb246XG4gIC8vIGlzUGxheWluZ0JhY2t3YXJkcygpIHtcbiAgLy8gXHRsZXQgYW5pbWF0aW9uID0gdGhpcyxcbiAgLy8gXHRcdG9yaWVudGF0aW9uID0gMTsgLy8gMSA9IGZvcndhcmQsIC0xID0gYmFja3dhcmRcbiAgLy8gXHR3aGlsZSAoYW5pbWF0aW9uKSB7XG4gIC8vIFx0XHRvcmllbnRhdGlvbiAqPSBhbmltYXRpb24ucmV2ZXJzZWQoKSB8fCAoYW5pbWF0aW9uLnJlcGVhdCgpICYmICEoYW5pbWF0aW9uLml0ZXJhdGlvbigpICYgMSkpID8gLTEgOiAxO1xuICAvLyBcdFx0YW5pbWF0aW9uID0gYW5pbWF0aW9uLnBhcmVudDtcbiAgLy8gXHR9XG4gIC8vIFx0cmV0dXJuIG9yaWVudGF0aW9uIDwgMDtcbiAgLy8gfVxuICA7XG5cbiAgX3Byb3RvLnRpbWVTY2FsZSA9IGZ1bmN0aW9uIHRpbWVTY2FsZSh2YWx1ZSkge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3J0cyA9PT0gLV90aW55TnVtID8gMCA6IHRoaXMuX3J0czsgLy8gcmVjb3JkZWQgdGltZVNjYWxlLiBTcGVjaWFsIGNhc2U6IGlmIHNvbWVvbmUgY2FsbHMgcmV2ZXJzZSgpIG9uIGFuIGFuaW1hdGlvbiB3aXRoIHRpbWVTY2FsZSBvZiAwLCB3ZSBhc3NpZ24gaXQgLV90aW55TnVtIHRvIHJlbWVtYmVyIGl0J3MgcmV2ZXJzZWQuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3J0cyA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHZhciB0VGltZSA9IHRoaXMucGFyZW50ICYmIHRoaXMuX3RzID8gX3BhcmVudFRvQ2hpbGRUb3RhbFRpbWUodGhpcy5wYXJlbnQuX3RpbWUsIHRoaXMpIDogdGhpcy5fdFRpbWU7IC8vIG1ha2Ugc3VyZSB0byBkbyB0aGUgcGFyZW50VG9DaGlsZFRvdGFsVGltZSgpIEJFRk9SRSBzZXR0aW5nIHRoZSBuZXcgX3RzIGJlY2F1c2UgdGhlIG9sZCBvbmUgbXVzdCBiZSB1c2VkIGluIHRoYXQgY2FsY3VsYXRpb24uXG4gICAgLy8gZnV0dXJlIGFkZGl0aW9uPyBVcCBzaWRlOiBmYXN0IGFuZCBtaW5pbWFsIGZpbGUgc2l6ZS4gRG93biBzaWRlOiBvbmx5IHdvcmtzIG9uIHRoaXMgYW5pbWF0aW9uOyBpZiBhIHRpbWVsaW5lIGlzIHJldmVyc2VkLCBmb3IgZXhhbXBsZSwgaXRzIGNoaWxkcmVucycgb25SZXZlcnNlIHdvdWxkbid0IGdldCBjYWxsZWQuXG4gICAgLy8oK3ZhbHVlIDwgMCAmJiB0aGlzLl9ydHMgPj0gMCkgJiYgX2NhbGxiYWNrKHRoaXMsIFwib25SZXZlcnNlXCIsIHRydWUpO1xuICAgIC8vIHByaW9yaXRpemUgcmVuZGVyaW5nIHdoZXJlIHRoZSBwYXJlbnQncyBwbGF5aGVhZCBsaW5lcyB1cCBpbnN0ZWFkIG9mIHRoaXMuX3RUaW1lIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgYSB0d2VlbiB0aGF0J3MgYW5pbWF0aW5nIGFub3RoZXIgdHdlZW4ncyB0aW1lU2NhbGUgaW4gdGhlIHNhbWUgcmVuZGVyaW5nIGxvb3AgKHNhbWUgcGFyZW50KSwgdGh1cyBpZiB0aGUgdGltZVNjYWxlIHR3ZWVuIHJlbmRlcnMgZmlyc3QsIGl0IHdvdWxkIGFsdGVyIF9zdGFydCBCRUZPUkUgX3RUaW1lIHdhcyBzZXQgb24gdGhhdCB0aWNrIChpbiB0aGUgcmVuZGVyaW5nIGxvb3ApLCBlZmZlY3RpdmVseSBmcmVlemluZyBpdCB1bnRpbCB0aGUgdGltZVNjYWxlIHR3ZWVuIGZpbmlzaGVzLlxuXG4gICAgdGhpcy5fcnRzID0gK3ZhbHVlIHx8IDA7XG4gICAgdGhpcy5fdHMgPSB0aGlzLl9wcyB8fCB2YWx1ZSA9PT0gLV90aW55TnVtID8gMCA6IHRoaXMuX3J0czsgLy8gX3RzIGlzIHRoZSBmdW5jdGlvbmFsIHRpbWVTY2FsZSB3aGljaCB3b3VsZCBiZSAwIGlmIHRoZSBhbmltYXRpb24gaXMgcGF1c2VkLlxuXG4gICAgdGhpcy50b3RhbFRpbWUoX2NsYW1wKC10aGlzLl9kZWxheSwgdGhpcy5fdER1ciwgdFRpbWUpLCB0cnVlKTtcblxuICAgIF9zZXRFbmQodGhpcyk7IC8vIGlmIHBhcmVudC5zbW9vdGhDaGlsZFRpbWluZyB3YXMgZmFsc2UsIHRoZSBlbmQgdGltZSBkaWRuJ3QgZ2V0IHVwZGF0ZWQgaW4gdGhlIF9hbGlnblBsYXloZWFkKCkgbWV0aG9kLCBzbyBkbyBpdCBoZXJlLlxuXG5cbiAgICByZXR1cm4gX3JlY2FjaGVBbmNlc3RvcnModGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvLnBhdXNlZCA9IGZ1bmN0aW9uIHBhdXNlZCh2YWx1ZSkge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3BzO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9wcyAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX3BzID0gdmFsdWU7XG5cbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9wVGltZSA9IHRoaXMuX3RUaW1lIHx8IE1hdGgubWF4KC10aGlzLl9kZWxheSwgdGhpcy5yYXdUaW1lKCkpOyAvLyBpZiB0aGUgcGF1c2Ugb2NjdXJzIGR1cmluZyB0aGUgZGVsYXkgcGhhc2UsIG1ha2Ugc3VyZSB0aGF0J3MgZmFjdG9yZWQgaW4gd2hlbiByZXN1bWluZy5cblxuICAgICAgICB0aGlzLl90cyA9IHRoaXMuX2FjdCA9IDA7IC8vIF90cyBpcyB0aGUgZnVuY3Rpb25hbCB0aW1lU2NhbGUsIHNvIGEgcGF1c2VkIHR3ZWVuIHdvdWxkIGVmZmVjdGl2ZWx5IGhhdmUgYSB0aW1lU2NhbGUgb2YgMC4gV2UgcmVjb3JkIHRoZSBcInJlYWxcIiB0aW1lU2NhbGUgYXMgX3J0cyAocmVjb3JkZWQgdGltZSBzY2FsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF93YWtlKCk7XG5cbiAgICAgICAgdGhpcy5fdHMgPSB0aGlzLl9ydHM7IC8vb25seSBkZWZlciB0byBfcFRpbWUgKHBhdXNlVGltZSkgaWYgdFRpbWUgaXMgemVyby4gUmVtZW1iZXIsIHNvbWVvbmUgY291bGQgcGF1c2UoKSBhbiBhbmltYXRpb24sIHRoZW4gc2NydWIgdGhlIHBsYXloZWFkIGFuZCByZXN1bWUoKS4gSWYgdGhlIHBhcmVudCBkb2Vzbid0IGhhdmUgc21vb3RoQ2hpbGRUaW1pbmcsIHdlIHJlbmRlciBhdCB0aGUgcmF3VGltZSgpIGJlY2F1c2UgdGhlIHN0YXJ0VGltZSB3b24ndCBnZXQgdXBkYXRlZC5cblxuICAgICAgICB0aGlzLnRvdGFsVGltZSh0aGlzLnBhcmVudCAmJiAhdGhpcy5wYXJlbnQuc21vb3RoQ2hpbGRUaW1pbmcgPyB0aGlzLnJhd1RpbWUoKSA6IHRoaXMuX3RUaW1lIHx8IHRoaXMuX3BUaW1lLCB0aGlzLnByb2dyZXNzKCkgPT09IDEgJiYgTWF0aC5hYnModGhpcy5felRpbWUpICE9PSBfdGlueU51bSAmJiAodGhpcy5fdFRpbWUgLT0gX3RpbnlOdW0pKTsgLy8gZWRnZSBjYXNlOiBhbmltYXRpb24ucHJvZ3Jlc3MoMSkucGF1c2UoKS5wbGF5KCkgd291bGRuJ3QgcmVuZGVyIGFnYWluIGJlY2F1c2UgdGhlIHBsYXloZWFkIGlzIGFscmVhZHkgYXQgdGhlIGVuZCwgYnV0IHRoZSBjYWxsIHRvIHRvdGFsVGltZSgpIGJlbG93IHdpbGwgYWRkIGl0IGJhY2sgdG8gaXRzIHBhcmVudC4uLmFuZCBub3QgcmVtb3ZlIGl0IGFnYWluIChzaW5jZSByZW1vdmluZyBvbmx5IGhhcHBlbnMgdXBvbiByZW5kZXJpbmcgYXQgYSBuZXcgdGltZSkuIE9mZnNldHRpbmcgdGhlIF90VGltZSBzbGlnaHRseSBpcyBkb25lIHNpbXBseSB0byBjYXVzZSB0aGUgZmluYWwgcmVuZGVyIGluIHRvdGFsVGltZSgpIHRoYXQnbGwgcG9wIGl0IG9mZiBpdHMgdGltZWxpbmUgKGlmIGF1dG9SZW1vdmVDaGlsZHJlbiBpcyB0cnVlLCBvZiBjb3Vyc2UpLiBDaGVjayB0byBtYWtlIHN1cmUgX3pUaW1lIGlzbid0IC1fdGlueU51bSB0byBhdm9pZCBhbiBlZGdlIGNhc2Ugd2hlcmUgdGhlIHBsYXloZWFkIGlzIHB1c2hlZCB0byB0aGUgZW5kIGJ1dCBJTlNJREUgYSB0d2Vlbi9jYWxsYmFjaywgdGhlIHRpbWVsaW5lIGl0c2VsZiBpcyBwYXVzZWQgdGh1cyBoYWx0aW5nIHJlbmRlcmluZyBhbmQgbGVhdmluZyBhIGZldyB1bnJlbmRlcmVkLiBXaGVuIHJlc3VtaW5nLCBpdCB3b3VsZG4ndCByZW5kZXIgdGhvc2Ugb3RoZXJ3aXNlLlxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5zdGFydFRpbWUgPSBmdW5jdGlvbiBzdGFydFRpbWUodmFsdWUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fc3RhcnQgPSB2YWx1ZTtcbiAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudCB8fCB0aGlzLl9kcDtcbiAgICAgIHBhcmVudCAmJiAocGFyZW50Ll9zb3J0IHx8ICF0aGlzLnBhcmVudCkgJiYgX2FkZFRvVGltZWxpbmUocGFyZW50LCB0aGlzLCB2YWx1ZSAtIHRoaXMuX2RlbGF5KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9zdGFydDtcbiAgfTtcblxuICBfcHJvdG8uZW5kVGltZSA9IGZ1bmN0aW9uIGVuZFRpbWUoaW5jbHVkZVJlcGVhdHMpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnQgKyAoX2lzTm90RmFsc2UoaW5jbHVkZVJlcGVhdHMpID8gdGhpcy50b3RhbER1cmF0aW9uKCkgOiB0aGlzLmR1cmF0aW9uKCkpIC8gTWF0aC5hYnModGhpcy5fdHMgfHwgMSk7XG4gIH07XG5cbiAgX3Byb3RvLnJhd1RpbWUgPSBmdW5jdGlvbiByYXdUaW1lKHdyYXBSZXBlYXRzKSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50IHx8IHRoaXMuX2RwOyAvLyBfZHAgPSBkZXRhY2hlZCBwYXJlbnRcblxuICAgIHJldHVybiAhcGFyZW50ID8gdGhpcy5fdFRpbWUgOiB3cmFwUmVwZWF0cyAmJiAoIXRoaXMuX3RzIHx8IHRoaXMuX3JlcGVhdCAmJiB0aGlzLl90aW1lICYmIHRoaXMudG90YWxQcm9ncmVzcygpIDwgMSkgPyB0aGlzLl90VGltZSAlICh0aGlzLl9kdXIgKyB0aGlzLl9yRGVsYXkpIDogIXRoaXMuX3RzID8gdGhpcy5fdFRpbWUgOiBfcGFyZW50VG9DaGlsZFRvdGFsVGltZShwYXJlbnQucmF3VGltZSh3cmFwUmVwZWF0cyksIHRoaXMpO1xuICB9O1xuXG4gIF9wcm90by5nbG9iYWxUaW1lID0gZnVuY3Rpb24gZ2xvYmFsVGltZShyYXdUaW1lKSB7XG4gICAgdmFyIGFuaW1hdGlvbiA9IHRoaXMsXG4gICAgICAgIHRpbWUgPSBhcmd1bWVudHMubGVuZ3RoID8gcmF3VGltZSA6IGFuaW1hdGlvbi5yYXdUaW1lKCk7XG5cbiAgICB3aGlsZSAoYW5pbWF0aW9uKSB7XG4gICAgICB0aW1lID0gYW5pbWF0aW9uLl9zdGFydCArIHRpbWUgLyAoYW5pbWF0aW9uLl90cyB8fCAxKTtcbiAgICAgIGFuaW1hdGlvbiA9IGFuaW1hdGlvbi5fZHA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRpbWU7XG4gIH07XG5cbiAgX3Byb3RvLnJlcGVhdCA9IGZ1bmN0aW9uIHJlcGVhdCh2YWx1ZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9yZXBlYXQgPSB2YWx1ZSA9PT0gSW5maW5pdHkgPyAtMiA6IHZhbHVlO1xuICAgICAgcmV0dXJuIF9vblVwZGF0ZVRvdGFsRHVyYXRpb24odGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3JlcGVhdCA9PT0gLTIgPyBJbmZpbml0eSA6IHRoaXMuX3JlcGVhdDtcbiAgfTtcblxuICBfcHJvdG8ucmVwZWF0RGVsYXkgPSBmdW5jdGlvbiByZXBlYXREZWxheSh2YWx1ZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICB2YXIgdGltZSA9IHRoaXMuX3RpbWU7XG4gICAgICB0aGlzLl9yRGVsYXkgPSB2YWx1ZTtcblxuICAgICAgX29uVXBkYXRlVG90YWxEdXJhdGlvbih0aGlzKTtcblxuICAgICAgcmV0dXJuIHRpbWUgPyB0aGlzLnRpbWUodGltZSkgOiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9yRGVsYXk7XG4gIH07XG5cbiAgX3Byb3RvLnlveW8gPSBmdW5jdGlvbiB5b3lvKHZhbHVlKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3lveW8gPSB2YWx1ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl95b3lvO1xuICB9O1xuXG4gIF9wcm90by5zZWVrID0gZnVuY3Rpb24gc2Vlayhwb3NpdGlvbiwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICByZXR1cm4gdGhpcy50b3RhbFRpbWUoX3BhcnNlUG9zaXRpb24odGhpcywgcG9zaXRpb24pLCBfaXNOb3RGYWxzZShzdXBwcmVzc0V2ZW50cykpO1xuICB9O1xuXG4gIF9wcm90by5yZXN0YXJ0ID0gZnVuY3Rpb24gcmVzdGFydChpbmNsdWRlRGVsYXksIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgcmV0dXJuIHRoaXMucGxheSgpLnRvdGFsVGltZShpbmNsdWRlRGVsYXkgPyAtdGhpcy5fZGVsYXkgOiAwLCBfaXNOb3RGYWxzZShzdXBwcmVzc0V2ZW50cykpO1xuICB9O1xuXG4gIF9wcm90by5wbGF5ID0gZnVuY3Rpb24gcGxheShmcm9tLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIGZyb20gIT0gbnVsbCAmJiB0aGlzLnNlZWsoZnJvbSwgc3VwcHJlc3NFdmVudHMpO1xuICAgIHJldHVybiB0aGlzLnJldmVyc2VkKGZhbHNlKS5wYXVzZWQoZmFsc2UpO1xuICB9O1xuXG4gIF9wcm90by5yZXZlcnNlID0gZnVuY3Rpb24gcmV2ZXJzZShmcm9tLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIGZyb20gIT0gbnVsbCAmJiB0aGlzLnNlZWsoZnJvbSB8fCB0aGlzLnRvdGFsRHVyYXRpb24oKSwgc3VwcHJlc3NFdmVudHMpO1xuICAgIHJldHVybiB0aGlzLnJldmVyc2VkKHRydWUpLnBhdXNlZChmYWxzZSk7XG4gIH07XG5cbiAgX3Byb3RvLnBhdXNlID0gZnVuY3Rpb24gcGF1c2UoYXRUaW1lLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIGF0VGltZSAhPSBudWxsICYmIHRoaXMuc2VlayhhdFRpbWUsIHN1cHByZXNzRXZlbnRzKTtcbiAgICByZXR1cm4gdGhpcy5wYXVzZWQodHJ1ZSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlc3VtZSA9IGZ1bmN0aW9uIHJlc3VtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXVzZWQoZmFsc2UpO1xuICB9O1xuXG4gIF9wcm90by5yZXZlcnNlZCA9IGZ1bmN0aW9uIHJldmVyc2VkKHZhbHVlKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICEhdmFsdWUgIT09IHRoaXMucmV2ZXJzZWQoKSAmJiB0aGlzLnRpbWVTY2FsZSgtdGhpcy5fcnRzIHx8ICh2YWx1ZSA/IC1fdGlueU51bSA6IDApKTsgLy8gaW4gY2FzZSB0aW1lU2NhbGUgaXMgemVybywgcmV2ZXJzaW5nIHdvdWxkIGhhdmUgbm8gZWZmZWN0IHNvIHdlIHVzZSBfdGlueU51bS5cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3J0cyA8IDA7XG4gIH07XG5cbiAgX3Byb3RvLmludmFsaWRhdGUgPSBmdW5jdGlvbiBpbnZhbGlkYXRlKCkge1xuICAgIHRoaXMuX2luaXR0ZWQgPSB0aGlzLl9hY3QgPSAwO1xuICAgIHRoaXMuX3pUaW1lID0gLV90aW55TnVtO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5pc0FjdGl2ZSA9IGZ1bmN0aW9uIGlzQWN0aXZlKCkge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudCB8fCB0aGlzLl9kcCxcbiAgICAgICAgc3RhcnQgPSB0aGlzLl9zdGFydCxcbiAgICAgICAgcmF3VGltZTtcbiAgICByZXR1cm4gISEoIXBhcmVudCB8fCB0aGlzLl90cyAmJiB0aGlzLl9pbml0dGVkICYmIHBhcmVudC5pc0FjdGl2ZSgpICYmIChyYXdUaW1lID0gcGFyZW50LnJhd1RpbWUodHJ1ZSkpID49IHN0YXJ0ICYmIHJhd1RpbWUgPCB0aGlzLmVuZFRpbWUodHJ1ZSkgLSBfdGlueU51bSk7XG4gIH07XG5cbiAgX3Byb3RvLmV2ZW50Q2FsbGJhY2sgPSBmdW5jdGlvbiBldmVudENhbGxiYWNrKHR5cGUsIGNhbGxiYWNrLCBwYXJhbXMpIHtcbiAgICB2YXIgdmFycyA9IHRoaXMudmFycztcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICBkZWxldGUgdmFyc1t0eXBlXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhcnNbdHlwZV0gPSBjYWxsYmFjaztcbiAgICAgICAgcGFyYW1zICYmICh2YXJzW3R5cGUgKyBcIlBhcmFtc1wiXSA9IHBhcmFtcyk7XG4gICAgICAgIHR5cGUgPT09IFwib25VcGRhdGVcIiAmJiAodGhpcy5fb25VcGRhdGUgPSBjYWxsYmFjayk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJzW3R5cGVdO1xuICB9O1xuXG4gIF9wcm90by50aGVuID0gZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIHZhciBmID0gX2lzRnVuY3Rpb24ob25GdWxmaWxsZWQpID8gb25GdWxmaWxsZWQgOiBfcGFzc1Rocm91Z2gsXG4gICAgICAgICAgX3Jlc29sdmUgPSBmdW5jdGlvbiBfcmVzb2x2ZSgpIHtcbiAgICAgICAgdmFyIF90aGVuID0gc2VsZi50aGVuO1xuICAgICAgICBzZWxmLnRoZW4gPSBudWxsOyAvLyB0ZW1wb3JhcmlseSBudWxsIHRoZSB0aGVuKCkgbWV0aG9kIHRvIGF2b2lkIGFuIGluZmluaXRlIGxvb3AgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vZ3JlZW5zb2NrL0dTQVAvaXNzdWVzLzMyMilcblxuICAgICAgICBfaXNGdW5jdGlvbihmKSAmJiAoZiA9IGYoc2VsZikpICYmIChmLnRoZW4gfHwgZiA9PT0gc2VsZikgJiYgKHNlbGYudGhlbiA9IF90aGVuKTtcbiAgICAgICAgcmVzb2x2ZShmKTtcbiAgICAgICAgc2VsZi50aGVuID0gX3RoZW47XG4gICAgICB9O1xuXG4gICAgICBpZiAoc2VsZi5faW5pdHRlZCAmJiBzZWxmLnRvdGFsUHJvZ3Jlc3MoKSA9PT0gMSAmJiBzZWxmLl90cyA+PSAwIHx8ICFzZWxmLl90VGltZSAmJiBzZWxmLl90cyA8IDApIHtcbiAgICAgICAgX3Jlc29sdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuX3Byb20gPSBfcmVzb2x2ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ua2lsbCA9IGZ1bmN0aW9uIGtpbGwoKSB7XG4gICAgX2ludGVycnVwdCh0aGlzKTtcbiAgfTtcblxuICByZXR1cm4gQW5pbWF0aW9uO1xufSgpO1xuXG5fc2V0RGVmYXVsdHMoQW5pbWF0aW9uLnByb3RvdHlwZSwge1xuICBfdGltZTogMCxcbiAgX3N0YXJ0OiAwLFxuICBfZW5kOiAwLFxuICBfdFRpbWU6IDAsXG4gIF90RHVyOiAwLFxuICBfZGlydHk6IDAsXG4gIF9yZXBlYXQ6IDAsXG4gIF95b3lvOiBmYWxzZSxcbiAgcGFyZW50OiBudWxsLFxuICBfaW5pdHRlZDogZmFsc2UsXG4gIF9yRGVsYXk6IDAsXG4gIF90czogMSxcbiAgX2RwOiAwLFxuICByYXRpbzogMCxcbiAgX3pUaW1lOiAtX3RpbnlOdW0sXG4gIF9wcm9tOiAwLFxuICBfcHM6IGZhbHNlLFxuICBfcnRzOiAxXG59KTtcbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBUSU1FTElORVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cblxuZXhwb3J0IHZhciBUaW1lbGluZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0FuaW1hdGlvbikge1xuICBfaW5oZXJpdHNMb29zZShUaW1lbGluZSwgX0FuaW1hdGlvbik7XG5cbiAgZnVuY3Rpb24gVGltZWxpbmUodmFycywgcG9zaXRpb24pIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBpZiAodmFycyA9PT0gdm9pZCAwKSB7XG4gICAgICB2YXJzID0ge307XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfQW5pbWF0aW9uLmNhbGwodGhpcywgdmFycykgfHwgdGhpcztcbiAgICBfdGhpcy5sYWJlbHMgPSB7fTtcbiAgICBfdGhpcy5zbW9vdGhDaGlsZFRpbWluZyA9ICEhdmFycy5zbW9vdGhDaGlsZFRpbWluZztcbiAgICBfdGhpcy5hdXRvUmVtb3ZlQ2hpbGRyZW4gPSAhIXZhcnMuYXV0b1JlbW92ZUNoaWxkcmVuO1xuICAgIF90aGlzLl9zb3J0ID0gX2lzTm90RmFsc2UodmFycy5zb3J0Q2hpbGRyZW4pO1xuICAgIF9nbG9iYWxUaW1lbGluZSAmJiBfYWRkVG9UaW1lbGluZSh2YXJzLnBhcmVudCB8fCBfZ2xvYmFsVGltZWxpbmUsIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBwb3NpdGlvbik7XG4gICAgdmFycy5yZXZlcnNlZCAmJiBfdGhpcy5yZXZlcnNlKCk7XG4gICAgdmFycy5wYXVzZWQgJiYgX3RoaXMucGF1c2VkKHRydWUpO1xuICAgIHZhcnMuc2Nyb2xsVHJpZ2dlciAmJiBfc2Nyb2xsVHJpZ2dlcihfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgdmFycy5zY3JvbGxUcmlnZ2VyKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvMiA9IFRpbWVsaW5lLnByb3RvdHlwZTtcblxuICBfcHJvdG8yLnRvID0gZnVuY3Rpb24gdG8odGFyZ2V0cywgdmFycywgcG9zaXRpb24pIHtcbiAgICBfY3JlYXRlVHdlZW5UeXBlKDAsIGFyZ3VtZW50cywgdGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLmZyb20gPSBmdW5jdGlvbiBmcm9tKHRhcmdldHMsIHZhcnMsIHBvc2l0aW9uKSB7XG4gICAgX2NyZWF0ZVR3ZWVuVHlwZSgxLCBhcmd1bWVudHMsIHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5mcm9tVG8gPSBmdW5jdGlvbiBmcm9tVG8odGFyZ2V0cywgZnJvbVZhcnMsIHRvVmFycywgcG9zaXRpb24pIHtcbiAgICBfY3JlYXRlVHdlZW5UeXBlKDIsIGFyZ3VtZW50cywgdGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLnNldCA9IGZ1bmN0aW9uIHNldCh0YXJnZXRzLCB2YXJzLCBwb3NpdGlvbikge1xuICAgIHZhcnMuZHVyYXRpb24gPSAwO1xuICAgIHZhcnMucGFyZW50ID0gdGhpcztcbiAgICBfaW5oZXJpdERlZmF1bHRzKHZhcnMpLnJlcGVhdERlbGF5IHx8ICh2YXJzLnJlcGVhdCA9IDApO1xuICAgIHZhcnMuaW1tZWRpYXRlUmVuZGVyID0gISF2YXJzLmltbWVkaWF0ZVJlbmRlcjtcbiAgICBuZXcgVHdlZW4odGFyZ2V0cywgdmFycywgX3BhcnNlUG9zaXRpb24odGhpcywgcG9zaXRpb24pLCAxKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLmNhbGwgPSBmdW5jdGlvbiBjYWxsKGNhbGxiYWNrLCBwYXJhbXMsIHBvc2l0aW9uKSB7XG4gICAgcmV0dXJuIF9hZGRUb1RpbWVsaW5lKHRoaXMsIFR3ZWVuLmRlbGF5ZWRDYWxsKDAsIGNhbGxiYWNrLCBwYXJhbXMpLCBwb3NpdGlvbik7XG4gIH0gLy9PTkxZIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5ISBNYXliZSBkZWxldGU/XG4gIDtcblxuICBfcHJvdG8yLnN0YWdnZXJUbyA9IGZ1bmN0aW9uIHN0YWdnZXJUbyh0YXJnZXRzLCBkdXJhdGlvbiwgdmFycywgc3RhZ2dlciwgcG9zaXRpb24sIG9uQ29tcGxldGVBbGwsIG9uQ29tcGxldGVBbGxQYXJhbXMpIHtcbiAgICB2YXJzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgdmFycy5zdGFnZ2VyID0gdmFycy5zdGFnZ2VyIHx8IHN0YWdnZXI7XG4gICAgdmFycy5vbkNvbXBsZXRlID0gb25Db21wbGV0ZUFsbDtcbiAgICB2YXJzLm9uQ29tcGxldGVQYXJhbXMgPSBvbkNvbXBsZXRlQWxsUGFyYW1zO1xuICAgIHZhcnMucGFyZW50ID0gdGhpcztcbiAgICBuZXcgVHdlZW4odGFyZ2V0cywgdmFycywgX3BhcnNlUG9zaXRpb24odGhpcywgcG9zaXRpb24pKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLnN0YWdnZXJGcm9tID0gZnVuY3Rpb24gc3RhZ2dlckZyb20odGFyZ2V0cywgZHVyYXRpb24sIHZhcnMsIHN0YWdnZXIsIHBvc2l0aW9uLCBvbkNvbXBsZXRlQWxsLCBvbkNvbXBsZXRlQWxsUGFyYW1zKSB7XG4gICAgdmFycy5ydW5CYWNrd2FyZHMgPSAxO1xuICAgIF9pbmhlcml0RGVmYXVsdHModmFycykuaW1tZWRpYXRlUmVuZGVyID0gX2lzTm90RmFsc2UodmFycy5pbW1lZGlhdGVSZW5kZXIpO1xuICAgIHJldHVybiB0aGlzLnN0YWdnZXJUbyh0YXJnZXRzLCBkdXJhdGlvbiwgdmFycywgc3RhZ2dlciwgcG9zaXRpb24sIG9uQ29tcGxldGVBbGwsIG9uQ29tcGxldGVBbGxQYXJhbXMpO1xuICB9O1xuXG4gIF9wcm90bzIuc3RhZ2dlckZyb21UbyA9IGZ1bmN0aW9uIHN0YWdnZXJGcm9tVG8odGFyZ2V0cywgZHVyYXRpb24sIGZyb21WYXJzLCB0b1ZhcnMsIHN0YWdnZXIsIHBvc2l0aW9uLCBvbkNvbXBsZXRlQWxsLCBvbkNvbXBsZXRlQWxsUGFyYW1zKSB7XG4gICAgdG9WYXJzLnN0YXJ0QXQgPSBmcm9tVmFycztcbiAgICBfaW5oZXJpdERlZmF1bHRzKHRvVmFycykuaW1tZWRpYXRlUmVuZGVyID0gX2lzTm90RmFsc2UodG9WYXJzLmltbWVkaWF0ZVJlbmRlcik7XG4gICAgcmV0dXJuIHRoaXMuc3RhZ2dlclRvKHRhcmdldHMsIGR1cmF0aW9uLCB0b1ZhcnMsIHN0YWdnZXIsIHBvc2l0aW9uLCBvbkNvbXBsZXRlQWxsLCBvbkNvbXBsZXRlQWxsUGFyYW1zKTtcbiAgfTtcblxuICBfcHJvdG8yLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcih0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSkge1xuICAgIHZhciBwcmV2VGltZSA9IHRoaXMuX3RpbWUsXG4gICAgICAgIHREdXIgPSB0aGlzLl9kaXJ0eSA/IHRoaXMudG90YWxEdXJhdGlvbigpIDogdGhpcy5fdER1cixcbiAgICAgICAgZHVyID0gdGhpcy5fZHVyLFxuICAgICAgICB0VGltZSA9IHRvdGFsVGltZSA8PSAwID8gMCA6IF9yb3VuZFByZWNpc2UodG90YWxUaW1lKSxcbiAgICAgICAgLy8gaWYgYSBwYXVzZWQgdGltZWxpbmUgaXMgcmVzdW1lZCAob3IgaXRzIF9zdGFydCBpcyB1cGRhdGVkIGZvciBhbm90aGVyIHJlYXNvbi4uLndoaWNoIHJvdW5kcyBpdCksIHRoYXQgY291bGQgcmVzdWx0IGluIHRoZSBwbGF5aGVhZCBzaGlmdGluZyBhICoqdGlueSoqIGFtb3VudCBhbmQgYSB6ZXJvLWR1cmF0aW9uIGNoaWxkIGF0IHRoYXQgc3BvdCBtYXkgZ2V0IHJlbmRlcmVkIGF0IGEgZGlmZmVyZW50IHJhdGlvLCBsaWtlIGl0cyB0b3RhbFRpbWUgaW4gcmVuZGVyKCkgbWF5IGJlIDFlLTE3IGluc3RlYWQgb2YgMCwgZm9yIGV4YW1wbGUuXG4gICAgY3Jvc3NpbmdTdGFydCA9IHRoaXMuX3pUaW1lIDwgMCAhPT0gdG90YWxUaW1lIDwgMCAmJiAodGhpcy5faW5pdHRlZCB8fCAhZHVyKSxcbiAgICAgICAgdGltZSxcbiAgICAgICAgY2hpbGQsXG4gICAgICAgIG5leHQsXG4gICAgICAgIGl0ZXJhdGlvbixcbiAgICAgICAgY3ljbGVEdXJhdGlvbixcbiAgICAgICAgcHJldlBhdXNlZCxcbiAgICAgICAgcGF1c2VUd2VlbixcbiAgICAgICAgdGltZVNjYWxlLFxuICAgICAgICBwcmV2U3RhcnQsXG4gICAgICAgIHByZXZJdGVyYXRpb24sXG4gICAgICAgIHlveW8sXG4gICAgICAgIGlzWW95bztcbiAgICB0aGlzICE9PSBfZ2xvYmFsVGltZWxpbmUgJiYgdFRpbWUgPiB0RHVyICYmIHRvdGFsVGltZSA+PSAwICYmICh0VGltZSA9IHREdXIpO1xuXG4gICAgaWYgKHRUaW1lICE9PSB0aGlzLl90VGltZSB8fCBmb3JjZSB8fCBjcm9zc2luZ1N0YXJ0KSB7XG4gICAgICBpZiAocHJldlRpbWUgIT09IHRoaXMuX3RpbWUgJiYgZHVyKSB7XG4gICAgICAgIC8vaWYgdG90YWxEdXJhdGlvbigpIGZpbmRzIGEgY2hpbGQgd2l0aCBhIG5lZ2F0aXZlIHN0YXJ0VGltZSBhbmQgc21vb3RoQ2hpbGRUaW1pbmcgaXMgdHJ1ZSwgdGhpbmdzIGdldCBzaGlmdGVkIGFyb3VuZCBpbnRlcm5hbGx5IHNvIHdlIG5lZWQgdG8gYWRqdXN0IHRoZSB0aW1lIGFjY29yZGluZ2x5LiBGb3IgZXhhbXBsZSwgaWYgYSB0d2VlbiBzdGFydHMgYXQgLTMwIHdlIG11c3Qgc2hpZnQgRVZFUllUSElORyBmb3J3YXJkIDMwIHNlY29uZHMgYW5kIG1vdmUgdGhpcyB0aW1lbGluZSdzIHN0YXJ0VGltZSBiYWNrd2FyZCBieSAzMCBzZWNvbmRzIHNvIHRoYXQgdGhpbmdzIGFsaWduIHdpdGggdGhlIHBsYXloZWFkIChubyBqdW1wKS5cbiAgICAgICAgdFRpbWUgKz0gdGhpcy5fdGltZSAtIHByZXZUaW1lO1xuICAgICAgICB0b3RhbFRpbWUgKz0gdGhpcy5fdGltZSAtIHByZXZUaW1lO1xuICAgICAgfVxuXG4gICAgICB0aW1lID0gdFRpbWU7XG4gICAgICBwcmV2U3RhcnQgPSB0aGlzLl9zdGFydDtcbiAgICAgIHRpbWVTY2FsZSA9IHRoaXMuX3RzO1xuICAgICAgcHJldlBhdXNlZCA9ICF0aW1lU2NhbGU7XG5cbiAgICAgIGlmIChjcm9zc2luZ1N0YXJ0KSB7XG4gICAgICAgIGR1ciB8fCAocHJldlRpbWUgPSB0aGlzLl96VGltZSk7IC8vd2hlbiB0aGUgcGxheWhlYWQgYXJyaXZlcyBhdCBFWEFDVExZIHRpbWUgMCAocmlnaHQgb24gdG9wKSBvZiBhIHplcm8tZHVyYXRpb24gdGltZWxpbmUsIHdlIG5lZWQgdG8gZGlzY2VybiBpZiBldmVudHMgYXJlIHN1cHByZXNzZWQgc28gdGhhdCB3aGVuIHRoZSBwbGF5aGVhZCBtb3ZlcyBhZ2FpbiAobmV4dCB0aW1lKSwgaXQnbGwgdHJpZ2dlciB0aGUgY2FsbGJhY2suIElmIGV2ZW50cyBhcmUgTk9UIHN1cHByZXNzZWQsIG9idmlvdXNseSB0aGUgY2FsbGJhY2sgd291bGQgYmUgdHJpZ2dlcmVkIGluIHRoaXMgcmVuZGVyLiBCYXNpY2FsbHksIHRoZSBjYWxsYmFjayBzaG91bGQgZmlyZSBlaXRoZXIgd2hlbiB0aGUgcGxheWhlYWQgQVJSSVZFUyBvciBMRUFWRVMgdGhpcyBleGFjdCBzcG90LCBub3QgYm90aC4gSW1hZ2luZSBkb2luZyBhIHRpbWVsaW5lLnNlZWsoMCkgYW5kIHRoZXJlJ3MgYSBjYWxsYmFjayB0aGF0IHNpdHMgYXQgMC4gU2luY2UgZXZlbnRzIGFyZSBzdXBwcmVzc2VkIG9uIHRoYXQgc2VlaygpIGJ5IGRlZmF1bHQsIG5vdGhpbmcgd2lsbCBmaXJlLCBidXQgd2hlbiB0aGUgcGxheWhlYWQgbW92ZXMgb2ZmIG9mIHRoYXQgcG9zaXRpb24sIHRoZSBjYWxsYmFjayBzaG91bGQgZmlyZS4gVGhpcyBiZWhhdmlvciBpcyB3aGF0IHBlb3BsZSBpbnR1aXRpdmVseSBleHBlY3QuXG5cbiAgICAgICAgKHRvdGFsVGltZSB8fCAhc3VwcHJlc3NFdmVudHMpICYmICh0aGlzLl96VGltZSA9IHRvdGFsVGltZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9yZXBlYXQpIHtcbiAgICAgICAgLy9hZGp1c3QgdGhlIHRpbWUgZm9yIHJlcGVhdHMgYW5kIHlveW9zXG4gICAgICAgIHlveW8gPSB0aGlzLl95b3lvO1xuICAgICAgICBjeWNsZUR1cmF0aW9uID0gZHVyICsgdGhpcy5fckRlbGF5O1xuXG4gICAgICAgIGlmICh0aGlzLl9yZXBlYXQgPCAtMSAmJiB0b3RhbFRpbWUgPCAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudG90YWxUaW1lKGN5Y2xlRHVyYXRpb24gKiAxMDAgKyB0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aW1lID0gX3JvdW5kUHJlY2lzZSh0VGltZSAlIGN5Y2xlRHVyYXRpb24pOyAvL3JvdW5kIHRvIGF2b2lkIGZsb2F0aW5nIHBvaW50IGVycm9ycy4gKDQgJSAwLjggc2hvdWxkIGJlIDAgYnV0IHNvbWUgYnJvd3NlcnMgcmVwb3J0IGl0IGFzIDAuNzk5OTk5OTkhKVxuXG4gICAgICAgIGlmICh0VGltZSA9PT0gdER1cikge1xuICAgICAgICAgIC8vIHRoZSB0RHVyID09PSB0VGltZSBpcyBmb3IgZWRnZSBjYXNlcyB3aGVyZSB0aGVyZSdzIGEgbGVuZ3RoeSBkZWNpbWFsIG9uIHRoZSBkdXJhdGlvbiBhbmQgaXQgbWF5IHJlYWNoIHRoZSB2ZXJ5IGVuZCBidXQgdGhlIHRpbWUgaXMgcmVuZGVyZWQgYXMgbm90LXF1aXRlLXRoZXJlIChyZW1lbWJlciwgdER1ciBpcyByb3VuZGVkIHRvIDQgZGVjaW1hbHMgd2hlcmVhcyBkdXIgaXNuJ3QpXG4gICAgICAgICAgaXRlcmF0aW9uID0gdGhpcy5fcmVwZWF0O1xuICAgICAgICAgIHRpbWUgPSBkdXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlcmF0aW9uID0gfn4odFRpbWUgLyBjeWNsZUR1cmF0aW9uKTtcblxuICAgICAgICAgIGlmIChpdGVyYXRpb24gJiYgaXRlcmF0aW9uID09PSB0VGltZSAvIGN5Y2xlRHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRpbWUgPSBkdXI7XG4gICAgICAgICAgICBpdGVyYXRpb24tLTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aW1lID4gZHVyICYmICh0aW1lID0gZHVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByZXZJdGVyYXRpb24gPSBfYW5pbWF0aW9uQ3ljbGUodGhpcy5fdFRpbWUsIGN5Y2xlRHVyYXRpb24pO1xuICAgICAgICAhcHJldlRpbWUgJiYgdGhpcy5fdFRpbWUgJiYgcHJldkl0ZXJhdGlvbiAhPT0gaXRlcmF0aW9uICYmIChwcmV2SXRlcmF0aW9uID0gaXRlcmF0aW9uKTsgLy8gZWRnZSBjYXNlIC0gaWYgc29tZW9uZSBkb2VzIGFkZFBhdXNlKCkgYXQgdGhlIHZlcnkgYmVnaW5uaW5nIG9mIGEgcmVwZWF0aW5nIHRpbWVsaW5lLCB0aGF0IHBhdXNlIGlzIHRlY2huaWNhbGx5IGF0IHRoZSBzYW1lIHNwb3QgYXMgdGhlIGVuZCB3aGljaCBjYXVzZXMgdGhpcy5fdGltZSB0byBnZXQgc2V0IHRvIDAgd2hlbiB0aGUgdG90YWxUaW1lIHdvdWxkIG5vcm1hbGx5IHBsYWNlIHRoZSBwbGF5aGVhZCBhdCB0aGUgZW5kLiBTZWUgaHR0cHM6Ly9ncmVlbnNvY2suY29tL2ZvcnVtcy90b3BpYy8yMzgyMy1jbG9zaW5nLW5hdi1hbmltYXRpb24tbm90LXdvcmtpbmctb24taWUtYW5kLWlwaG9uZS02LW1heWJlLW90aGVyLW9sZGVyLWJyb3dzZXIvP3RhYj1jb21tZW50cyNjb21tZW50LTExMzAwNVxuXG4gICAgICAgIGlmICh5b3lvICYmIGl0ZXJhdGlvbiAmIDEpIHtcbiAgICAgICAgICB0aW1lID0gZHVyIC0gdGltZTtcbiAgICAgICAgICBpc1lveW8gPSAxO1xuICAgICAgICB9XG4gICAgICAgIC8qXG4gICAgICAgIG1ha2Ugc3VyZSBjaGlsZHJlbiBhdCB0aGUgZW5kL2JlZ2lubmluZyBvZiB0aGUgdGltZWxpbmUgYXJlIHJlbmRlcmVkIHByb3Blcmx5LiBJZiwgZm9yIGV4YW1wbGUsXG4gICAgICAgIGEgMy1zZWNvbmQgbG9uZyB0aW1lbGluZSByZW5kZXJlZCBhdCAyLjkgc2Vjb25kcyBwcmV2aW91c2x5LCBhbmQgbm93IHJlbmRlcnMgYXQgMy4yIHNlY29uZHMgKHdoaWNoXG4gICAgICAgIHdvdWxkIGdldCB0cmFuc2xhdGVkIHRvIDIuOCBzZWNvbmRzIGlmIHRoZSB0aW1lbGluZSB5b3lvcyBvciAwLjIgc2Vjb25kcyBpZiBpdCBqdXN0IHJlcGVhdHMpLCB0aGVyZVxuICAgICAgICBjb3VsZCBiZSBhIGNhbGxiYWNrIG9yIGEgc2hvcnQgdHdlZW4gdGhhdCdzIGF0IDIuOTUgb3IgMyBzZWNvbmRzIGluIHdoaWNoIHdvdWxkbid0IHJlbmRlci4gU29cbiAgICAgICAgd2UgbmVlZCB0byBwdXNoIHRoZSB0aW1lbGluZSB0byB0aGUgZW5kIChhbmQvb3IgYmVnaW5uaW5nIGRlcGVuZGluZyBvbiBpdHMgeW95byB2YWx1ZSkuIEFsc28gd2UgbXVzdFxuICAgICAgICBlbnN1cmUgdGhhdCB6ZXJvLWR1cmF0aW9uIHR3ZWVucyBhdCB0aGUgdmVyeSBiZWdpbm5pbmcgb3IgZW5kIG9mIHRoZSBUaW1lbGluZSB3b3JrLlxuICAgICAgICAqL1xuXG5cbiAgICAgICAgaWYgKGl0ZXJhdGlvbiAhPT0gcHJldkl0ZXJhdGlvbiAmJiAhdGhpcy5fbG9jaykge1xuICAgICAgICAgIHZhciByZXdpbmRpbmcgPSB5b3lvICYmIHByZXZJdGVyYXRpb24gJiAxLFxuICAgICAgICAgICAgICBkb2VzV3JhcCA9IHJld2luZGluZyA9PT0gKHlveW8gJiYgaXRlcmF0aW9uICYgMSk7XG4gICAgICAgICAgaXRlcmF0aW9uIDwgcHJldkl0ZXJhdGlvbiAmJiAocmV3aW5kaW5nID0gIXJld2luZGluZyk7XG4gICAgICAgICAgcHJldlRpbWUgPSByZXdpbmRpbmcgPyAwIDogZHVyO1xuICAgICAgICAgIHRoaXMuX2xvY2sgPSAxO1xuICAgICAgICAgIHRoaXMucmVuZGVyKHByZXZUaW1lIHx8IChpc1lveW8gPyAwIDogX3JvdW5kUHJlY2lzZShpdGVyYXRpb24gKiBjeWNsZUR1cmF0aW9uKSksIHN1cHByZXNzRXZlbnRzLCAhZHVyKS5fbG9jayA9IDA7XG4gICAgICAgICAgdGhpcy5fdFRpbWUgPSB0VGltZTsgLy8gaWYgYSB1c2VyIGdldHMgdGhlIGl0ZXJhdGlvbigpIGluc2lkZSB0aGUgb25SZXBlYXQsIGZvciBleGFtcGxlLCBpdCBzaG91bGQgYmUgYWNjdXJhdGUuXG5cbiAgICAgICAgICAhc3VwcHJlc3NFdmVudHMgJiYgdGhpcy5wYXJlbnQgJiYgX2NhbGxiYWNrKHRoaXMsIFwib25SZXBlYXRcIik7XG4gICAgICAgICAgdGhpcy52YXJzLnJlcGVhdFJlZnJlc2ggJiYgIWlzWW95byAmJiAodGhpcy5pbnZhbGlkYXRlKCkuX2xvY2sgPSAxKTtcblxuICAgICAgICAgIGlmIChwcmV2VGltZSAmJiBwcmV2VGltZSAhPT0gdGhpcy5fdGltZSB8fCBwcmV2UGF1c2VkICE9PSAhdGhpcy5fdHMgfHwgdGhpcy52YXJzLm9uUmVwZWF0ICYmICF0aGlzLnBhcmVudCAmJiAhdGhpcy5fYWN0KSB7XG4gICAgICAgICAgICAvLyBpZiBwcmV2VGltZSBpcyAwIGFuZCB3ZSByZW5kZXIgYXQgdGhlIHZlcnkgZW5kLCBfdGltZSB3aWxsIGJlIHRoZSBlbmQsIHRodXMgd29uJ3QgbWF0Y2guIFNvIGluIHRoaXMgZWRnZSBjYXNlLCBwcmV2VGltZSB3b24ndCBtYXRjaCBfdGltZSBidXQgdGhhdCdzIG9rYXkuIElmIGl0IGdldHMga2lsbGVkIGluIHRoZSBvblJlcGVhdCwgZWplY3QgYXMgd2VsbC5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGR1ciA9IHRoaXMuX2R1cjsgLy8gaW4gY2FzZSB0aGUgZHVyYXRpb24gY2hhbmdlZCBpbiB0aGUgb25SZXBlYXRcblxuICAgICAgICAgIHREdXIgPSB0aGlzLl90RHVyO1xuXG4gICAgICAgICAgaWYgKGRvZXNXcmFwKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2NrID0gMjtcbiAgICAgICAgICAgIHByZXZUaW1lID0gcmV3aW5kaW5nID8gZHVyIDogLTAuMDAwMTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKHByZXZUaW1lLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMudmFycy5yZXBlYXRSZWZyZXNoICYmICFpc1lveW8gJiYgdGhpcy5pbnZhbGlkYXRlKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fbG9jayA9IDA7XG5cbiAgICAgICAgICBpZiAoIXRoaXMuX3RzICYmICFwcmV2UGF1c2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICB9IC8vaW4gb3JkZXIgZm9yIHlveW9FYXNlIHRvIHdvcmsgcHJvcGVybHkgd2hlbiB0aGVyZSdzIGEgc3RhZ2dlciwgd2UgbXVzdCBzd2FwIG91dCB0aGUgZWFzZSBpbiBlYWNoIHN1Yi10d2Vlbi5cblxuXG4gICAgICAgICAgX3Byb3BhZ2F0ZVlveW9FYXNlKHRoaXMsIGlzWW95byk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2hhc1BhdXNlICYmICF0aGlzLl9mb3JjaW5nICYmIHRoaXMuX2xvY2sgPCAyKSB7XG4gICAgICAgIHBhdXNlVHdlZW4gPSBfZmluZE5leHRQYXVzZVR3ZWVuKHRoaXMsIF9yb3VuZFByZWNpc2UocHJldlRpbWUpLCBfcm91bmRQcmVjaXNlKHRpbWUpKTtcblxuICAgICAgICBpZiAocGF1c2VUd2Vlbikge1xuICAgICAgICAgIHRUaW1lIC09IHRpbWUgLSAodGltZSA9IHBhdXNlVHdlZW4uX3N0YXJ0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl90VGltZSA9IHRUaW1lO1xuICAgICAgdGhpcy5fdGltZSA9IHRpbWU7XG4gICAgICB0aGlzLl9hY3QgPSAhdGltZVNjYWxlOyAvL2FzIGxvbmcgYXMgaXQncyBub3QgcGF1c2VkLCBmb3JjZSBpdCB0byBiZSBhY3RpdmUgc28gdGhhdCBpZiB0aGUgdXNlciByZW5kZXJzIGluZGVwZW5kZW50IG9mIHRoZSBwYXJlbnQgdGltZWxpbmUsIGl0J2xsIGJlIGZvcmNlZCB0byByZS1yZW5kZXIgb24gdGhlIG5leHQgdGljay5cblxuICAgICAgaWYgKCF0aGlzLl9pbml0dGVkKSB7XG4gICAgICAgIHRoaXMuX29uVXBkYXRlID0gdGhpcy52YXJzLm9uVXBkYXRlO1xuICAgICAgICB0aGlzLl9pbml0dGVkID0gMTtcbiAgICAgICAgdGhpcy5felRpbWUgPSB0b3RhbFRpbWU7XG4gICAgICAgIHByZXZUaW1lID0gMDsgLy8gdXBvbiBpbml0LCB0aGUgcGxheWhlYWQgc2hvdWxkIGFsd2F5cyBnbyBmb3J3YXJkOyBzb21lb25lIGNvdWxkIGludmFsaWRhdGUoKSBhIGNvbXBsZXRlZCB0aW1lbGluZSBhbmQgdGhlbiBpZiB0aGV5IHJlc3RhcnQoKSwgdGhhdCB3b3VsZCBtYWtlIGNoaWxkIHR3ZWVucyByZW5kZXIgaW4gcmV2ZXJzZSBvcmRlciB3aGljaCBjb3VsZCBsb2NrIGluIHRoZSB3cm9uZyBzdGFydGluZyB2YWx1ZXMgaWYgdGhleSBidWlsZCBvbiBlYWNoIG90aGVyLCBsaWtlIHRsLnRvKG9iaiwge3g6IDEwMH0pLnRvKG9iaiwge3g6IDB9KS5cbiAgICAgIH1cblxuICAgICAgaWYgKCFwcmV2VGltZSAmJiB0aW1lICYmICFzdXBwcmVzc0V2ZW50cykge1xuICAgICAgICBfY2FsbGJhY2sodGhpcywgXCJvblN0YXJ0XCIpO1xuXG4gICAgICAgIGlmICh0aGlzLl90VGltZSAhPT0gdFRpbWUpIHtcbiAgICAgICAgICAvLyBpbiBjYXNlIHRoZSBvblN0YXJ0IHRyaWdnZXJlZCBhIHJlbmRlciBhdCBhIGRpZmZlcmVudCBzcG90LCBlamVjdC4gTGlrZSBpZiBzb21lb25lIGRpZCBhbmltYXRpb24ucGF1c2UoMC41KSBvciBzb21ldGhpbmcgaW5zaWRlIHRoZSBvblN0YXJ0LlxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aW1lID49IHByZXZUaW1lICYmIHRvdGFsVGltZSA+PSAwKSB7XG4gICAgICAgIGNoaWxkID0gdGhpcy5fZmlyc3Q7XG5cbiAgICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgICAgbmV4dCA9IGNoaWxkLl9uZXh0O1xuXG4gICAgICAgICAgaWYgKChjaGlsZC5fYWN0IHx8IHRpbWUgPj0gY2hpbGQuX3N0YXJ0KSAmJiBjaGlsZC5fdHMgJiYgcGF1c2VUd2VlbiAhPT0gY2hpbGQpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5wYXJlbnQgIT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgLy8gYW4gZXh0cmVtZSBlZGdlIGNhc2UgLSB0aGUgY2hpbGQncyByZW5kZXIgY291bGQgZG8gc29tZXRoaW5nIGxpa2Uga2lsbCgpIHRoZSBcIm5leHRcIiBvbmUgaW4gdGhlIGxpbmtlZCBsaXN0LCBvciByZXBhcmVudCBpdC4gSW4gdGhhdCBjYXNlIHdlIG11c3QgcmUtaW5pdGlhdGUgdGhlIHdob2xlIHJlbmRlciB0byBiZSBzYWZlLlxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGlsZC5yZW5kZXIoY2hpbGQuX3RzID4gMCA/ICh0aW1lIC0gY2hpbGQuX3N0YXJ0KSAqIGNoaWxkLl90cyA6IChjaGlsZC5fZGlydHkgPyBjaGlsZC50b3RhbER1cmF0aW9uKCkgOiBjaGlsZC5fdER1cikgKyAodGltZSAtIGNoaWxkLl9zdGFydCkgKiBjaGlsZC5fdHMsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG5cbiAgICAgICAgICAgIGlmICh0aW1lICE9PSB0aGlzLl90aW1lIHx8ICF0aGlzLl90cyAmJiAhcHJldlBhdXNlZCkge1xuICAgICAgICAgICAgICAvL2luIGNhc2UgYSB0d2VlbiBwYXVzZXMgb3Igc2Vla3MgdGhlIHRpbWVsaW5lIHdoZW4gcmVuZGVyaW5nLCBsaWtlIGluc2lkZSBvZiBhbiBvblVwZGF0ZS9vbkNvbXBsZXRlXG4gICAgICAgICAgICAgIHBhdXNlVHdlZW4gPSAwO1xuICAgICAgICAgICAgICBuZXh0ICYmICh0VGltZSArPSB0aGlzLl96VGltZSA9IC1fdGlueU51bSk7IC8vIGl0IGRpZG4ndCBmaW5pc2ggcmVuZGVyaW5nLCBzbyBmbGFnIHpUaW1lIGFzIG5lZ2F0aXZlIHNvIHRoYXQgc28gdGhhdCB0aGUgbmV4dCB0aW1lIHJlbmRlcigpIGlzIGNhbGxlZCBpdCdsbCBiZSBmb3JjZWQgKHRvIHJlbmRlciBhbnkgcmVtYWluaW5nIGNoaWxkcmVuKVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNoaWxkID0gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSB0aGlzLl9sYXN0O1xuICAgICAgICB2YXIgYWRqdXN0ZWRUaW1lID0gdG90YWxUaW1lIDwgMCA/IHRvdGFsVGltZSA6IHRpbWU7IC8vd2hlbiB0aGUgcGxheWhlYWQgZ29lcyBiYWNrd2FyZCBiZXlvbmQgdGhlIHN0YXJ0IG9mIHRoaXMgdGltZWxpbmUsIHdlIG11c3QgcGFzcyB0aGF0IGluZm9ybWF0aW9uIGRvd24gdG8gdGhlIGNoaWxkIGFuaW1hdGlvbnMgc28gdGhhdCB6ZXJvLWR1cmF0aW9uIHR3ZWVucyBrbm93IHdoZXRoZXIgdG8gcmVuZGVyIHRoZWlyIHN0YXJ0aW5nIG9yIGVuZGluZyB2YWx1ZXMuXG5cbiAgICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgICAgbmV4dCA9IGNoaWxkLl9wcmV2O1xuXG4gICAgICAgICAgaWYgKChjaGlsZC5fYWN0IHx8IGFkanVzdGVkVGltZSA8PSBjaGlsZC5fZW5kKSAmJiBjaGlsZC5fdHMgJiYgcGF1c2VUd2VlbiAhPT0gY2hpbGQpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5wYXJlbnQgIT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgLy8gYW4gZXh0cmVtZSBlZGdlIGNhc2UgLSB0aGUgY2hpbGQncyByZW5kZXIgY291bGQgZG8gc29tZXRoaW5nIGxpa2Uga2lsbCgpIHRoZSBcIm5leHRcIiBvbmUgaW4gdGhlIGxpbmtlZCBsaXN0LCBvciByZXBhcmVudCBpdC4gSW4gdGhhdCBjYXNlIHdlIG11c3QgcmUtaW5pdGlhdGUgdGhlIHdob2xlIHJlbmRlciB0byBiZSBzYWZlLlxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGlsZC5yZW5kZXIoY2hpbGQuX3RzID4gMCA/IChhZGp1c3RlZFRpbWUgLSBjaGlsZC5fc3RhcnQpICogY2hpbGQuX3RzIDogKGNoaWxkLl9kaXJ0eSA/IGNoaWxkLnRvdGFsRHVyYXRpb24oKSA6IGNoaWxkLl90RHVyKSArIChhZGp1c3RlZFRpbWUgLSBjaGlsZC5fc3RhcnQpICogY2hpbGQuX3RzLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuXG4gICAgICAgICAgICBpZiAodGltZSAhPT0gdGhpcy5fdGltZSB8fCAhdGhpcy5fdHMgJiYgIXByZXZQYXVzZWQpIHtcbiAgICAgICAgICAgICAgLy9pbiBjYXNlIGEgdHdlZW4gcGF1c2VzIG9yIHNlZWtzIHRoZSB0aW1lbGluZSB3aGVuIHJlbmRlcmluZywgbGlrZSBpbnNpZGUgb2YgYW4gb25VcGRhdGUvb25Db21wbGV0ZVxuICAgICAgICAgICAgICBwYXVzZVR3ZWVuID0gMDtcbiAgICAgICAgICAgICAgbmV4dCAmJiAodFRpbWUgKz0gdGhpcy5felRpbWUgPSBhZGp1c3RlZFRpbWUgPyAtX3RpbnlOdW0gOiBfdGlueU51bSk7IC8vIGl0IGRpZG4ndCBmaW5pc2ggcmVuZGVyaW5nLCBzbyBhZGp1c3QgelRpbWUgc28gdGhhdCBzbyB0aGF0IHRoZSBuZXh0IHRpbWUgcmVuZGVyKCkgaXMgY2FsbGVkIGl0J2xsIGJlIGZvcmNlZCAodG8gcmVuZGVyIGFueSByZW1haW5pbmcgY2hpbGRyZW4pXG5cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2hpbGQgPSBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXVzZVR3ZWVuICYmICFzdXBwcmVzc0V2ZW50cykge1xuICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgIHBhdXNlVHdlZW4ucmVuZGVyKHRpbWUgPj0gcHJldlRpbWUgPyAwIDogLV90aW55TnVtKS5felRpbWUgPSB0aW1lID49IHByZXZUaW1lID8gMSA6IC0xO1xuXG4gICAgICAgIGlmICh0aGlzLl90cykge1xuICAgICAgICAgIC8vdGhlIGNhbGxiYWNrIHJlc3VtZWQgcGxheWJhY2shIFNvIHNpbmNlIHdlIG1heSBoYXZlIGhlbGQgYmFjayB0aGUgcGxheWhlYWQgZHVlIHRvIHdoZXJlIHRoZSBwYXVzZSBpcyBwb3NpdGlvbmVkLCBnbyBhaGVhZCBhbmQganVtcCB0byB3aGVyZSBpdCdzIFNVUFBPU0VEIHRvIGJlIChpZiBubyBwYXVzZSBoYXBwZW5lZCkuXG4gICAgICAgICAgdGhpcy5fc3RhcnQgPSBwcmV2U3RhcnQ7IC8vaWYgdGhlIHBhdXNlIHdhcyBhdCBhbiBlYXJsaWVyIHRpbWUgYW5kIHRoZSB1c2VyIHJlc3VtZWQgaW4gdGhlIGNhbGxiYWNrLCBpdCBjb3VsZCByZXBvc2l0aW9uIHRoZSB0aW1lbGluZSAoY2hhbmdpbmcgaXRzIHN0YXJ0VGltZSksIHRocm93aW5nIHRoaW5ncyBvZmYgc2xpZ2h0bHksIHNvIHdlIG1ha2Ugc3VyZSB0aGUgX3N0YXJ0IGRvZXNuJ3Qgc2hpZnQuXG5cbiAgICAgICAgICBfc2V0RW5kKHRoaXMpO1xuXG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9vblVwZGF0ZSAmJiAhc3VwcHJlc3NFdmVudHMgJiYgX2NhbGxiYWNrKHRoaXMsIFwib25VcGRhdGVcIiwgdHJ1ZSk7XG4gICAgICBpZiAodFRpbWUgPT09IHREdXIgJiYgdGhpcy5fdFRpbWUgPj0gdGhpcy50b3RhbER1cmF0aW9uKCkgfHwgIXRUaW1lICYmIHByZXZUaW1lKSBpZiAocHJldlN0YXJ0ID09PSB0aGlzLl9zdGFydCB8fCBNYXRoLmFicyh0aW1lU2NhbGUpICE9PSBNYXRoLmFicyh0aGlzLl90cykpIGlmICghdGhpcy5fbG9jaykge1xuICAgICAgICAvLyByZW1lbWJlciwgYSBjaGlsZCdzIGNhbGxiYWNrIG1heSBhbHRlciB0aGlzIHRpbWVsaW5lJ3MgcGxheWhlYWQgb3IgdGltZVNjYWxlIHdoaWNoIGlzIHdoeSB3ZSBuZWVkIHRvIGFkZCBzb21lIG9mIHRoZXNlIGNoZWNrcy5cbiAgICAgICAgKHRvdGFsVGltZSB8fCAhZHVyKSAmJiAodFRpbWUgPT09IHREdXIgJiYgdGhpcy5fdHMgPiAwIHx8ICF0VGltZSAmJiB0aGlzLl90cyA8IDApICYmIF9yZW1vdmVGcm9tUGFyZW50KHRoaXMsIDEpOyAvLyBkb24ndCByZW1vdmUgaWYgdGhlIHRpbWVsaW5lIGlzIHJldmVyc2VkIGFuZCB0aGUgcGxheWhlYWQgaXNuJ3QgYXQgMCwgb3RoZXJ3aXNlIHRsLnByb2dyZXNzKDEpLnJldmVyc2UoKSB3b24ndCB3b3JrLiBPbmx5IHJlbW92ZSBpZiB0aGUgcGxheWhlYWQgaXMgYXQgdGhlIGVuZCBhbmQgdGltZVNjYWxlIGlzIHBvc2l0aXZlLCBvciBpZiB0aGUgcGxheWhlYWQgaXMgYXQgMCBhbmQgdGhlIHRpbWVTY2FsZSBpcyBuZWdhdGl2ZS5cblxuICAgICAgICBpZiAoIXN1cHByZXNzRXZlbnRzICYmICEodG90YWxUaW1lIDwgMCAmJiAhcHJldlRpbWUpICYmICh0VGltZSB8fCBwcmV2VGltZSB8fCAhdER1cikpIHtcbiAgICAgICAgICBfY2FsbGJhY2sodGhpcywgdFRpbWUgPT09IHREdXIgJiYgdG90YWxUaW1lID49IDAgPyBcIm9uQ29tcGxldGVcIiA6IFwib25SZXZlcnNlQ29tcGxldGVcIiwgdHJ1ZSk7XG5cbiAgICAgICAgICB0aGlzLl9wcm9tICYmICEodFRpbWUgPCB0RHVyICYmIHRoaXMudGltZVNjYWxlKCkgPiAwKSAmJiB0aGlzLl9wcm9tKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLmFkZCA9IGZ1bmN0aW9uIGFkZChjaGlsZCwgcG9zaXRpb24pIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIF9pc051bWJlcihwb3NpdGlvbikgfHwgKHBvc2l0aW9uID0gX3BhcnNlUG9zaXRpb24odGhpcywgcG9zaXRpb24sIGNoaWxkKSk7XG5cbiAgICBpZiAoIShjaGlsZCBpbnN0YW5jZW9mIEFuaW1hdGlvbikpIHtcbiAgICAgIGlmIChfaXNBcnJheShjaGlsZCkpIHtcbiAgICAgICAgY2hpbGQuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5hZGQob2JqLCBwb3NpdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgaWYgKF9pc1N0cmluZyhjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkTGFiZWwoY2hpbGQsIHBvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgaWYgKF9pc0Z1bmN0aW9uKGNoaWxkKSkge1xuICAgICAgICBjaGlsZCA9IFR3ZWVuLmRlbGF5ZWRDYWxsKDAsIGNoaWxkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzICE9PSBjaGlsZCA/IF9hZGRUb1RpbWVsaW5lKHRoaXMsIGNoaWxkLCBwb3NpdGlvbikgOiB0aGlzOyAvL2Rvbid0IGFsbG93IGEgdGltZWxpbmUgdG8gYmUgYWRkZWQgdG8gaXRzZWxmIGFzIGEgY2hpbGQhXG4gIH07XG5cbiAgX3Byb3RvMi5nZXRDaGlsZHJlbiA9IGZ1bmN0aW9uIGdldENoaWxkcmVuKG5lc3RlZCwgdHdlZW5zLCB0aW1lbGluZXMsIGlnbm9yZUJlZm9yZVRpbWUpIHtcbiAgICBpZiAobmVzdGVkID09PSB2b2lkIDApIHtcbiAgICAgIG5lc3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHR3ZWVucyA9PT0gdm9pZCAwKSB7XG4gICAgICB0d2VlbnMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aW1lbGluZXMgPT09IHZvaWQgMCkge1xuICAgICAgdGltZWxpbmVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaWdub3JlQmVmb3JlVGltZSA9PT0gdm9pZCAwKSB7XG4gICAgICBpZ25vcmVCZWZvcmVUaW1lID0gLV9iaWdOdW07XG4gICAgfVxuXG4gICAgdmFyIGEgPSBbXSxcbiAgICAgICAgY2hpbGQgPSB0aGlzLl9maXJzdDtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgaWYgKGNoaWxkLl9zdGFydCA+PSBpZ25vcmVCZWZvcmVUaW1lKSB7XG4gICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFR3ZWVuKSB7XG4gICAgICAgICAgdHdlZW5zICYmIGEucHVzaChjaGlsZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGltZWxpbmVzICYmIGEucHVzaChjaGlsZCk7XG4gICAgICAgICAgbmVzdGVkICYmIGEucHVzaC5hcHBseShhLCBjaGlsZC5nZXRDaGlsZHJlbih0cnVlLCB0d2VlbnMsIHRpbWVsaW5lcykpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG4gIH07XG5cbiAgX3Byb3RvMi5nZXRCeUlkID0gZnVuY3Rpb24gZ2V0QnlJZChpZCkge1xuICAgIHZhciBhbmltYXRpb25zID0gdGhpcy5nZXRDaGlsZHJlbigxLCAxLCAxKSxcbiAgICAgICAgaSA9IGFuaW1hdGlvbnMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgaWYgKGFuaW1hdGlvbnNbaV0udmFycy5pZCA9PT0gaWQpIHtcbiAgICAgICAgcmV0dXJuIGFuaW1hdGlvbnNbaV07XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90bzIucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKGNoaWxkKSB7XG4gICAgaWYgKF9pc1N0cmluZyhjaGlsZCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbW92ZUxhYmVsKGNoaWxkKTtcbiAgICB9XG5cbiAgICBpZiAoX2lzRnVuY3Rpb24oY2hpbGQpKSB7XG4gICAgICByZXR1cm4gdGhpcy5raWxsVHdlZW5zT2YoY2hpbGQpO1xuICAgIH1cblxuICAgIF9yZW1vdmVMaW5rZWRMaXN0SXRlbSh0aGlzLCBjaGlsZCk7XG5cbiAgICBpZiAoY2hpbGQgPT09IHRoaXMuX3JlY2VudCkge1xuICAgICAgdGhpcy5fcmVjZW50ID0gdGhpcy5fbGFzdDtcbiAgICB9XG5cbiAgICByZXR1cm4gX3VuY2FjaGUodGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvMi50b3RhbFRpbWUgPSBmdW5jdGlvbiB0b3RhbFRpbWUoX3RvdGFsVGltZTIsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdFRpbWU7XG4gICAgfVxuXG4gICAgdGhpcy5fZm9yY2luZyA9IDE7XG5cbiAgICBpZiAoIXRoaXMuX2RwICYmIHRoaXMuX3RzKSB7XG4gICAgICAvL3NwZWNpYWwgY2FzZSBmb3IgdGhlIGdsb2JhbCB0aW1lbGluZSAob3IgYW55IG90aGVyIHRoYXQgaGFzIG5vIHBhcmVudCBvciBkZXRhY2hlZCBwYXJlbnQpLlxuICAgICAgdGhpcy5fc3RhcnQgPSBfcm91bmRQcmVjaXNlKF90aWNrZXIudGltZSAtICh0aGlzLl90cyA+IDAgPyBfdG90YWxUaW1lMiAvIHRoaXMuX3RzIDogKHRoaXMudG90YWxEdXJhdGlvbigpIC0gX3RvdGFsVGltZTIpIC8gLXRoaXMuX3RzKSk7XG4gICAgfVxuXG4gICAgX0FuaW1hdGlvbi5wcm90b3R5cGUudG90YWxUaW1lLmNhbGwodGhpcywgX3RvdGFsVGltZTIsIHN1cHByZXNzRXZlbnRzKTtcblxuICAgIHRoaXMuX2ZvcmNpbmcgPSAwO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuYWRkTGFiZWwgPSBmdW5jdGlvbiBhZGRMYWJlbChsYWJlbCwgcG9zaXRpb24pIHtcbiAgICB0aGlzLmxhYmVsc1tsYWJlbF0gPSBfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5yZW1vdmVMYWJlbCA9IGZ1bmN0aW9uIHJlbW92ZUxhYmVsKGxhYmVsKSB7XG4gICAgZGVsZXRlIHRoaXMubGFiZWxzW2xhYmVsXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLmFkZFBhdXNlID0gZnVuY3Rpb24gYWRkUGF1c2UocG9zaXRpb24sIGNhbGxiYWNrLCBwYXJhbXMpIHtcbiAgICB2YXIgdCA9IFR3ZWVuLmRlbGF5ZWRDYWxsKDAsIGNhbGxiYWNrIHx8IF9lbXB0eUZ1bmMsIHBhcmFtcyk7XG4gICAgdC5kYXRhID0gXCJpc1BhdXNlXCI7XG4gICAgdGhpcy5faGFzUGF1c2UgPSAxO1xuICAgIHJldHVybiBfYWRkVG9UaW1lbGluZSh0aGlzLCB0LCBfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbikpO1xuICB9O1xuXG4gIF9wcm90bzIucmVtb3ZlUGF1c2UgPSBmdW5jdGlvbiByZW1vdmVQYXVzZShwb3NpdGlvbikge1xuICAgIHZhciBjaGlsZCA9IHRoaXMuX2ZpcnN0O1xuICAgIHBvc2l0aW9uID0gX3BhcnNlUG9zaXRpb24odGhpcywgcG9zaXRpb24pO1xuXG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICBpZiAoY2hpbGQuX3N0YXJ0ID09PSBwb3NpdGlvbiAmJiBjaGlsZC5kYXRhID09PSBcImlzUGF1c2VcIikge1xuICAgICAgICBfcmVtb3ZlRnJvbVBhcmVudChjaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90bzIua2lsbFR3ZWVuc09mID0gZnVuY3Rpb24ga2lsbFR3ZWVuc09mKHRhcmdldHMsIHByb3BzLCBvbmx5QWN0aXZlKSB7XG4gICAgdmFyIHR3ZWVucyA9IHRoaXMuZ2V0VHdlZW5zT2YodGFyZ2V0cywgb25seUFjdGl2ZSksXG4gICAgICAgIGkgPSB0d2VlbnMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgX292ZXJ3cml0aW5nVHdlZW4gIT09IHR3ZWVuc1tpXSAmJiB0d2VlbnNbaV0ua2lsbCh0YXJnZXRzLCBwcm9wcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5nZXRUd2VlbnNPZiA9IGZ1bmN0aW9uIGdldFR3ZWVuc09mKHRhcmdldHMsIG9ubHlBY3RpdmUpIHtcbiAgICB2YXIgYSA9IFtdLFxuICAgICAgICBwYXJzZWRUYXJnZXRzID0gdG9BcnJheSh0YXJnZXRzKSxcbiAgICAgICAgY2hpbGQgPSB0aGlzLl9maXJzdCxcbiAgICAgICAgaXNHbG9iYWxUaW1lID0gX2lzTnVtYmVyKG9ubHlBY3RpdmUpLFxuICAgICAgICAvLyBhIG51bWJlciBpcyBpbnRlcnByZXRlZCBhcyBhIGdsb2JhbCB0aW1lLiBJZiB0aGUgYW5pbWF0aW9uIHNwYW5zXG4gICAgY2hpbGRyZW47XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFR3ZWVuKSB7XG4gICAgICAgIGlmIChfYXJyYXlDb250YWluc0FueShjaGlsZC5fdGFyZ2V0cywgcGFyc2VkVGFyZ2V0cykgJiYgKGlzR2xvYmFsVGltZSA/ICghX292ZXJ3cml0aW5nVHdlZW4gfHwgY2hpbGQuX2luaXR0ZWQgJiYgY2hpbGQuX3RzKSAmJiBjaGlsZC5nbG9iYWxUaW1lKDApIDw9IG9ubHlBY3RpdmUgJiYgY2hpbGQuZ2xvYmFsVGltZShjaGlsZC50b3RhbER1cmF0aW9uKCkpID4gb25seUFjdGl2ZSA6ICFvbmx5QWN0aXZlIHx8IGNoaWxkLmlzQWN0aXZlKCkpKSB7XG4gICAgICAgICAgLy8gbm90ZTogaWYgdGhpcyBpcyBmb3Igb3ZlcndyaXRpbmcsIGl0IHNob3VsZCBvbmx5IGJlIGZvciB0d2VlbnMgdGhhdCBhcmVuJ3QgcGF1c2VkIGFuZCBhcmUgaW5pdHRlZC5cbiAgICAgICAgICBhLnB1c2goY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKChjaGlsZHJlbiA9IGNoaWxkLmdldFR3ZWVuc09mKHBhcnNlZFRhcmdldHMsIG9ubHlBY3RpdmUpKS5sZW5ndGgpIHtcbiAgICAgICAgYS5wdXNoLmFwcGx5KGEsIGNoaWxkcmVuKTtcbiAgICAgIH1cblxuICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbiAgfSAvLyBwb3RlbnRpYWwgZnV0dXJlIGZlYXR1cmUgLSB0YXJnZXRzKCkgb24gdGltZWxpbmVzXG4gIC8vIHRhcmdldHMoKSB7XG4gIC8vIFx0bGV0IHJlc3VsdCA9IFtdO1xuICAvLyBcdHRoaXMuZ2V0Q2hpbGRyZW4odHJ1ZSwgdHJ1ZSwgZmFsc2UpLmZvckVhY2godCA9PiByZXN1bHQucHVzaCguLi50LnRhcmdldHMoKSkpO1xuICAvLyBcdHJldHVybiByZXN1bHQuZmlsdGVyKCh2LCBpKSA9PiByZXN1bHQuaW5kZXhPZih2KSA9PT0gaSk7XG4gIC8vIH1cbiAgO1xuXG4gIF9wcm90bzIudHdlZW5UbyA9IGZ1bmN0aW9uIHR3ZWVuVG8ocG9zaXRpb24sIHZhcnMpIHtcbiAgICB2YXJzID0gdmFycyB8fCB7fTtcblxuICAgIHZhciB0bCA9IHRoaXMsXG4gICAgICAgIGVuZFRpbWUgPSBfcGFyc2VQb3NpdGlvbih0bCwgcG9zaXRpb24pLFxuICAgICAgICBfdmFycyA9IHZhcnMsXG4gICAgICAgIHN0YXJ0QXQgPSBfdmFycy5zdGFydEF0LFxuICAgICAgICBfb25TdGFydCA9IF92YXJzLm9uU3RhcnQsXG4gICAgICAgIG9uU3RhcnRQYXJhbXMgPSBfdmFycy5vblN0YXJ0UGFyYW1zLFxuICAgICAgICBpbW1lZGlhdGVSZW5kZXIgPSBfdmFycy5pbW1lZGlhdGVSZW5kZXIsXG4gICAgICAgIGluaXR0ZWQsXG4gICAgICAgIHR3ZWVuID0gVHdlZW4udG8odGwsIF9zZXREZWZhdWx0cyh7XG4gICAgICBlYXNlOiB2YXJzLmVhc2UgfHwgXCJub25lXCIsXG4gICAgICBsYXp5OiBmYWxzZSxcbiAgICAgIGltbWVkaWF0ZVJlbmRlcjogZmFsc2UsXG4gICAgICB0aW1lOiBlbmRUaW1lLFxuICAgICAgb3ZlcndyaXRlOiBcImF1dG9cIixcbiAgICAgIGR1cmF0aW9uOiB2YXJzLmR1cmF0aW9uIHx8IE1hdGguYWJzKChlbmRUaW1lIC0gKHN0YXJ0QXQgJiYgXCJ0aW1lXCIgaW4gc3RhcnRBdCA/IHN0YXJ0QXQudGltZSA6IHRsLl90aW1lKSkgLyB0bC50aW1lU2NhbGUoKSkgfHwgX3RpbnlOdW0sXG4gICAgICBvblN0YXJ0OiBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgICAgICB0bC5wYXVzZSgpO1xuXG4gICAgICAgIGlmICghaW5pdHRlZCkge1xuICAgICAgICAgIHZhciBkdXJhdGlvbiA9IHZhcnMuZHVyYXRpb24gfHwgTWF0aC5hYnMoKGVuZFRpbWUgLSAoc3RhcnRBdCAmJiBcInRpbWVcIiBpbiBzdGFydEF0ID8gc3RhcnRBdC50aW1lIDogdGwuX3RpbWUpKSAvIHRsLnRpbWVTY2FsZSgpKTtcbiAgICAgICAgICB0d2Vlbi5fZHVyICE9PSBkdXJhdGlvbiAmJiBfc2V0RHVyYXRpb24odHdlZW4sIGR1cmF0aW9uLCAwLCAxKS5yZW5kZXIodHdlZW4uX3RpbWUsIHRydWUsIHRydWUpO1xuICAgICAgICAgIGluaXR0ZWQgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgX29uU3RhcnQgJiYgX29uU3RhcnQuYXBwbHkodHdlZW4sIG9uU3RhcnRQYXJhbXMgfHwgW10pOyAvL2luIGNhc2UgdGhlIHVzZXIgaGFkIGFuIG9uU3RhcnQgaW4gdGhlIHZhcnMgLSB3ZSBkb24ndCB3YW50IHRvIG92ZXJ3cml0ZSBpdC5cbiAgICAgIH1cbiAgICB9LCB2YXJzKSk7XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlUmVuZGVyID8gdHdlZW4ucmVuZGVyKDApIDogdHdlZW47XG4gIH07XG5cbiAgX3Byb3RvMi50d2VlbkZyb21UbyA9IGZ1bmN0aW9uIHR3ZWVuRnJvbVRvKGZyb21Qb3NpdGlvbiwgdG9Qb3NpdGlvbiwgdmFycykge1xuICAgIHJldHVybiB0aGlzLnR3ZWVuVG8odG9Qb3NpdGlvbiwgX3NldERlZmF1bHRzKHtcbiAgICAgIHN0YXJ0QXQ6IHtcbiAgICAgICAgdGltZTogX3BhcnNlUG9zaXRpb24odGhpcywgZnJvbVBvc2l0aW9uKVxuICAgICAgfVxuICAgIH0sIHZhcnMpKTtcbiAgfTtcblxuICBfcHJvdG8yLnJlY2VudCA9IGZ1bmN0aW9uIHJlY2VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVjZW50O1xuICB9O1xuXG4gIF9wcm90bzIubmV4dExhYmVsID0gZnVuY3Rpb24gbmV4dExhYmVsKGFmdGVyVGltZSkge1xuICAgIGlmIChhZnRlclRpbWUgPT09IHZvaWQgMCkge1xuICAgICAgYWZ0ZXJUaW1lID0gdGhpcy5fdGltZTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2dldExhYmVsSW5EaXJlY3Rpb24odGhpcywgX3BhcnNlUG9zaXRpb24odGhpcywgYWZ0ZXJUaW1lKSk7XG4gIH07XG5cbiAgX3Byb3RvMi5wcmV2aW91c0xhYmVsID0gZnVuY3Rpb24gcHJldmlvdXNMYWJlbChiZWZvcmVUaW1lKSB7XG4gICAgaWYgKGJlZm9yZVRpbWUgPT09IHZvaWQgMCkge1xuICAgICAgYmVmb3JlVGltZSA9IHRoaXMuX3RpbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9nZXRMYWJlbEluRGlyZWN0aW9uKHRoaXMsIF9wYXJzZVBvc2l0aW9uKHRoaXMsIGJlZm9yZVRpbWUpLCAxKTtcbiAgfTtcblxuICBfcHJvdG8yLmN1cnJlbnRMYWJlbCA9IGZ1bmN0aW9uIGN1cnJlbnRMYWJlbCh2YWx1ZSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy5zZWVrKHZhbHVlLCB0cnVlKSA6IHRoaXMucHJldmlvdXNMYWJlbCh0aGlzLl90aW1lICsgX3RpbnlOdW0pO1xuICB9O1xuXG4gIF9wcm90bzIuc2hpZnRDaGlsZHJlbiA9IGZ1bmN0aW9uIHNoaWZ0Q2hpbGRyZW4oYW1vdW50LCBhZGp1c3RMYWJlbHMsIGlnbm9yZUJlZm9yZVRpbWUpIHtcbiAgICBpZiAoaWdub3JlQmVmb3JlVGltZSA9PT0gdm9pZCAwKSB7XG4gICAgICBpZ25vcmVCZWZvcmVUaW1lID0gMDtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGQgPSB0aGlzLl9maXJzdCxcbiAgICAgICAgbGFiZWxzID0gdGhpcy5sYWJlbHMsXG4gICAgICAgIHA7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIGlmIChjaGlsZC5fc3RhcnQgPj0gaWdub3JlQmVmb3JlVGltZSkge1xuICAgICAgICBjaGlsZC5fc3RhcnQgKz0gYW1vdW50O1xuICAgICAgICBjaGlsZC5fZW5kICs9IGFtb3VudDtcbiAgICAgIH1cblxuICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICB9XG5cbiAgICBpZiAoYWRqdXN0TGFiZWxzKSB7XG4gICAgICBmb3IgKHAgaW4gbGFiZWxzKSB7XG4gICAgICAgIGlmIChsYWJlbHNbcF0gPj0gaWdub3JlQmVmb3JlVGltZSkge1xuICAgICAgICAgIGxhYmVsc1twXSArPSBhbW91bnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX3VuY2FjaGUodGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvMi5pbnZhbGlkYXRlID0gZnVuY3Rpb24gaW52YWxpZGF0ZSgpIHtcbiAgICB2YXIgY2hpbGQgPSB0aGlzLl9maXJzdDtcbiAgICB0aGlzLl9sb2NrID0gMDtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgY2hpbGQuaW52YWxpZGF0ZSgpO1xuICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gX0FuaW1hdGlvbi5wcm90b3R5cGUuaW52YWxpZGF0ZS5jYWxsKHRoaXMpO1xuICB9O1xuXG4gIF9wcm90bzIuY2xlYXIgPSBmdW5jdGlvbiBjbGVhcihpbmNsdWRlTGFiZWxzKSB7XG4gICAgaWYgKGluY2x1ZGVMYWJlbHMgPT09IHZvaWQgMCkge1xuICAgICAgaW5jbHVkZUxhYmVscyA9IHRydWU7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkID0gdGhpcy5fZmlyc3QsXG4gICAgICAgIG5leHQ7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIG5leHQgPSBjaGlsZC5fbmV4dDtcbiAgICAgIHRoaXMucmVtb3ZlKGNoaWxkKTtcbiAgICAgIGNoaWxkID0gbmV4dDtcbiAgICB9XG5cbiAgICB0aGlzLl9kcCAmJiAodGhpcy5fdGltZSA9IHRoaXMuX3RUaW1lID0gdGhpcy5fcFRpbWUgPSAwKTtcbiAgICBpbmNsdWRlTGFiZWxzICYmICh0aGlzLmxhYmVscyA9IHt9KTtcbiAgICByZXR1cm4gX3VuY2FjaGUodGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvMi50b3RhbER1cmF0aW9uID0gZnVuY3Rpb24gdG90YWxEdXJhdGlvbih2YWx1ZSkge1xuICAgIHZhciBtYXggPSAwLFxuICAgICAgICBzZWxmID0gdGhpcyxcbiAgICAgICAgY2hpbGQgPSBzZWxmLl9sYXN0LFxuICAgICAgICBwcmV2U3RhcnQgPSBfYmlnTnVtLFxuICAgICAgICBwcmV2LFxuICAgICAgICBzdGFydCxcbiAgICAgICAgcGFyZW50O1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBzZWxmLnRpbWVTY2FsZSgoc2VsZi5fcmVwZWF0IDwgMCA/IHNlbGYuZHVyYXRpb24oKSA6IHNlbGYudG90YWxEdXJhdGlvbigpKSAvIChzZWxmLnJldmVyc2VkKCkgPyAtdmFsdWUgOiB2YWx1ZSkpO1xuICAgIH1cblxuICAgIGlmIChzZWxmLl9kaXJ0eSkge1xuICAgICAgcGFyZW50ID0gc2VsZi5wYXJlbnQ7XG5cbiAgICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICBwcmV2ID0gY2hpbGQuX3ByZXY7IC8vcmVjb3JkIGl0IGhlcmUgaW4gY2FzZSB0aGUgdHdlZW4gY2hhbmdlcyBwb3NpdGlvbiBpbiB0aGUgc2VxdWVuY2UuLi5cblxuICAgICAgICBjaGlsZC5fZGlydHkgJiYgY2hpbGQudG90YWxEdXJhdGlvbigpOyAvL2NvdWxkIGNoYW5nZSB0aGUgdHdlZW4uX3N0YXJ0VGltZSwgc28gbWFrZSBzdXJlIHRoZSBhbmltYXRpb24ncyBjYWNoZSBpcyBjbGVhbiBiZWZvcmUgYW5hbHl6aW5nIGl0LlxuXG4gICAgICAgIHN0YXJ0ID0gY2hpbGQuX3N0YXJ0O1xuXG4gICAgICAgIGlmIChzdGFydCA+IHByZXZTdGFydCAmJiBzZWxmLl9zb3J0ICYmIGNoaWxkLl90cyAmJiAhc2VsZi5fbG9jaykge1xuICAgICAgICAgIC8vaW4gY2FzZSBvbmUgb2YgdGhlIHR3ZWVucyBzaGlmdGVkIG91dCBvZiBvcmRlciwgaXQgbmVlZHMgdG8gYmUgcmUtaW5zZXJ0ZWQgaW50byB0aGUgY29ycmVjdCBwb3NpdGlvbiBpbiB0aGUgc2VxdWVuY2VcbiAgICAgICAgICBzZWxmLl9sb2NrID0gMTsgLy9wcmV2ZW50IGVuZGxlc3MgcmVjdXJzaXZlIGNhbGxzIC0gdGhlcmUgYXJlIG1ldGhvZHMgdGhhdCBnZXQgdHJpZ2dlcmVkIHRoYXQgY2hlY2sgZHVyYXRpb24vdG90YWxEdXJhdGlvbiB3aGVuIHdlIGFkZCgpLlxuXG4gICAgICAgICAgX2FkZFRvVGltZWxpbmUoc2VsZiwgY2hpbGQsIHN0YXJ0IC0gY2hpbGQuX2RlbGF5LCAxKS5fbG9jayA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJldlN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhcnQgPCAwICYmIGNoaWxkLl90cykge1xuICAgICAgICAgIC8vY2hpbGRyZW4gYXJlbid0IGFsbG93ZWQgdG8gaGF2ZSBuZWdhdGl2ZSBzdGFydFRpbWVzIHVubGVzcyBzbW9vdGhDaGlsZFRpbWluZyBpcyB0cnVlLCBzbyBhZGp1c3QgaGVyZSBpZiBvbmUgaXMgZm91bmQuXG4gICAgICAgICAgbWF4IC09IHN0YXJ0O1xuXG4gICAgICAgICAgaWYgKCFwYXJlbnQgJiYgIXNlbGYuX2RwIHx8IHBhcmVudCAmJiBwYXJlbnQuc21vb3RoQ2hpbGRUaW1pbmcpIHtcbiAgICAgICAgICAgIHNlbGYuX3N0YXJ0ICs9IHN0YXJ0IC8gc2VsZi5fdHM7XG4gICAgICAgICAgICBzZWxmLl90aW1lIC09IHN0YXJ0O1xuICAgICAgICAgICAgc2VsZi5fdFRpbWUgLT0gc3RhcnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VsZi5zaGlmdENoaWxkcmVuKC1zdGFydCwgZmFsc2UsIC0xZTk5OSk7XG4gICAgICAgICAgcHJldlN0YXJ0ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkLl9lbmQgPiBtYXggJiYgY2hpbGQuX3RzICYmIChtYXggPSBjaGlsZC5fZW5kKTtcbiAgICAgICAgY2hpbGQgPSBwcmV2O1xuICAgICAgfVxuXG4gICAgICBfc2V0RHVyYXRpb24oc2VsZiwgc2VsZiA9PT0gX2dsb2JhbFRpbWVsaW5lICYmIHNlbGYuX3RpbWUgPiBtYXggPyBzZWxmLl90aW1lIDogbWF4LCAxLCAxKTtcblxuICAgICAgc2VsZi5fZGlydHkgPSAwO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxmLl90RHVyO1xuICB9O1xuXG4gIFRpbWVsaW5lLnVwZGF0ZVJvb3QgPSBmdW5jdGlvbiB1cGRhdGVSb290KHRpbWUpIHtcbiAgICBpZiAoX2dsb2JhbFRpbWVsaW5lLl90cykge1xuICAgICAgX2xhenlTYWZlUmVuZGVyKF9nbG9iYWxUaW1lbGluZSwgX3BhcmVudFRvQ2hpbGRUb3RhbFRpbWUodGltZSwgX2dsb2JhbFRpbWVsaW5lKSk7XG5cbiAgICAgIF9sYXN0UmVuZGVyZWRGcmFtZSA9IF90aWNrZXIuZnJhbWU7XG4gICAgfVxuXG4gICAgaWYgKF90aWNrZXIuZnJhbWUgPj0gX25leHRHQ0ZyYW1lKSB7XG4gICAgICBfbmV4dEdDRnJhbWUgKz0gX2NvbmZpZy5hdXRvU2xlZXAgfHwgMTIwO1xuICAgICAgdmFyIGNoaWxkID0gX2dsb2JhbFRpbWVsaW5lLl9maXJzdDtcbiAgICAgIGlmICghY2hpbGQgfHwgIWNoaWxkLl90cykgaWYgKF9jb25maWcuYXV0b1NsZWVwICYmIF90aWNrZXIuX2xpc3RlbmVycy5sZW5ndGggPCAyKSB7XG4gICAgICAgIHdoaWxlIChjaGlsZCAmJiAhY2hpbGQuX3RzKSB7XG4gICAgICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkIHx8IF90aWNrZXIuc2xlZXAoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFRpbWVsaW5lO1xufShBbmltYXRpb24pO1xuXG5fc2V0RGVmYXVsdHMoVGltZWxpbmUucHJvdG90eXBlLCB7XG4gIF9sb2NrOiAwLFxuICBfaGFzUGF1c2U6IDAsXG4gIF9mb3JjaW5nOiAwXG59KTtcblxudmFyIF9hZGRDb21wbGV4U3RyaW5nUHJvcFR3ZWVuID0gZnVuY3Rpb24gX2FkZENvbXBsZXhTdHJpbmdQcm9wVHdlZW4odGFyZ2V0LCBwcm9wLCBzdGFydCwgZW5kLCBzZXR0ZXIsIHN0cmluZ0ZpbHRlciwgZnVuY1BhcmFtKSB7XG4gIC8vbm90ZTogd2UgY2FsbCBfYWRkQ29tcGxleFN0cmluZ1Byb3BUd2Vlbi5jYWxsKHR3ZWVuSW5zdGFuY2UuLi4pIHRvIGVuc3VyZSB0aGF0IGl0J3Mgc2NvcGVkIHByb3Blcmx5LiBXZSBtYXkgY2FsbCBpdCBmcm9tIHdpdGhpbiBhIHBsdWdpbiB0b28sIHRodXMgXCJ0aGlzXCIgd291bGQgcmVmZXIgdG8gdGhlIHBsdWdpbi5cbiAgdmFyIHB0ID0gbmV3IFByb3BUd2Vlbih0aGlzLl9wdCwgdGFyZ2V0LCBwcm9wLCAwLCAxLCBfcmVuZGVyQ29tcGxleFN0cmluZywgbnVsbCwgc2V0dGVyKSxcbiAgICAgIGluZGV4ID0gMCxcbiAgICAgIG1hdGNoSW5kZXggPSAwLFxuICAgICAgcmVzdWx0LFxuICAgICAgc3RhcnROdW1zLFxuICAgICAgY29sb3IsXG4gICAgICBlbmROdW0sXG4gICAgICBjaHVuayxcbiAgICAgIHN0YXJ0TnVtLFxuICAgICAgaGFzUmFuZG9tLFxuICAgICAgYTtcbiAgcHQuYiA9IHN0YXJ0O1xuICBwdC5lID0gZW5kO1xuICBzdGFydCArPSBcIlwiOyAvL2Vuc3VyZSB2YWx1ZXMgYXJlIHN0cmluZ3NcblxuICBlbmQgKz0gXCJcIjtcblxuICBpZiAoaGFzUmFuZG9tID0gfmVuZC5pbmRleE9mKFwicmFuZG9tKFwiKSkge1xuICAgIGVuZCA9IF9yZXBsYWNlUmFuZG9tKGVuZCk7XG4gIH1cblxuICBpZiAoc3RyaW5nRmlsdGVyKSB7XG4gICAgYSA9IFtzdGFydCwgZW5kXTtcbiAgICBzdHJpbmdGaWx0ZXIoYSwgdGFyZ2V0LCBwcm9wKTsgLy9wYXNzIGFuIGFycmF5IHdpdGggdGhlIHN0YXJ0aW5nIGFuZCBlbmRpbmcgdmFsdWVzIGFuZCBsZXQgdGhlIGZpbHRlciBkbyB3aGF0ZXZlciBpdCBuZWVkcyB0byB0aGUgdmFsdWVzLlxuXG4gICAgc3RhcnQgPSBhWzBdO1xuICAgIGVuZCA9IGFbMV07XG4gIH1cblxuICBzdGFydE51bXMgPSBzdGFydC5tYXRjaChfY29tcGxleFN0cmluZ051bUV4cCkgfHwgW107XG5cbiAgd2hpbGUgKHJlc3VsdCA9IF9jb21wbGV4U3RyaW5nTnVtRXhwLmV4ZWMoZW5kKSkge1xuICAgIGVuZE51bSA9IHJlc3VsdFswXTtcbiAgICBjaHVuayA9IGVuZC5zdWJzdHJpbmcoaW5kZXgsIHJlc3VsdC5pbmRleCk7XG5cbiAgICBpZiAoY29sb3IpIHtcbiAgICAgIGNvbG9yID0gKGNvbG9yICsgMSkgJSA1O1xuICAgIH0gZWxzZSBpZiAoY2h1bmsuc3Vic3RyKC01KSA9PT0gXCJyZ2JhKFwiKSB7XG4gICAgICBjb2xvciA9IDE7XG4gICAgfVxuXG4gICAgaWYgKGVuZE51bSAhPT0gc3RhcnROdW1zW21hdGNoSW5kZXgrK10pIHtcbiAgICAgIHN0YXJ0TnVtID0gcGFyc2VGbG9hdChzdGFydE51bXNbbWF0Y2hJbmRleCAtIDFdKSB8fCAwOyAvL3RoZXNlIG5lc3RlZCBQcm9wVHdlZW5zIGFyZSBoYW5kbGVkIGluIGEgc3BlY2lhbCB3YXkgLSB3ZSdsbCBuZXZlciBhY3R1YWxseSBjYWxsIGEgcmVuZGVyIG9yIHNldHRlciBtZXRob2Qgb24gdGhlbS4gV2UnbGwganVzdCBsb29wIHRocm91Z2ggdGhlbSBpbiB0aGUgcGFyZW50IGNvbXBsZXggc3RyaW5nIFByb3BUd2VlbidzIHJlbmRlciBtZXRob2QuXG5cbiAgICAgIHB0Ll9wdCA9IHtcbiAgICAgICAgX25leHQ6IHB0Ll9wdCxcbiAgICAgICAgcDogY2h1bmsgfHwgbWF0Y2hJbmRleCA9PT0gMSA/IGNodW5rIDogXCIsXCIsXG4gICAgICAgIC8vbm90ZTogU1ZHIHNwZWMgYWxsb3dzIG9taXNzaW9uIG9mIGNvbW1hL3NwYWNlIHdoZW4gYSBuZWdhdGl2ZSBzaWduIGlzIHdlZGdlZCBiZXR3ZWVuIHR3byBudW1iZXJzLCBsaWtlIDIuNS01LjMgaW5zdGVhZCBvZiAyLjUsLTUuMyBidXQgd2hlbiB0d2VlbmluZywgdGhlIG5lZ2F0aXZlIHZhbHVlIG1heSBzd2l0Y2ggdG8gcG9zaXRpdmUsIHNvIHdlIGluc2VydCB0aGUgY29tbWEganVzdCBpbiBjYXNlLlxuICAgICAgICBzOiBzdGFydE51bSxcbiAgICAgICAgYzogZW5kTnVtLmNoYXJBdCgxKSA9PT0gXCI9XCIgPyBfcGFyc2VSZWxhdGl2ZShzdGFydE51bSwgZW5kTnVtKSAtIHN0YXJ0TnVtIDogcGFyc2VGbG9hdChlbmROdW0pIC0gc3RhcnROdW0sXG4gICAgICAgIG06IGNvbG9yICYmIGNvbG9yIDwgNCA/IE1hdGgucm91bmQgOiAwXG4gICAgICB9O1xuICAgICAgaW5kZXggPSBfY29tcGxleFN0cmluZ051bUV4cC5sYXN0SW5kZXg7XG4gICAgfVxuICB9XG5cbiAgcHQuYyA9IGluZGV4IDwgZW5kLmxlbmd0aCA/IGVuZC5zdWJzdHJpbmcoaW5kZXgsIGVuZC5sZW5ndGgpIDogXCJcIjsgLy93ZSB1c2UgdGhlIFwiY1wiIG9mIHRoZSBQcm9wVHdlZW4gdG8gc3RvcmUgdGhlIGZpbmFsIHBhcnQgb2YgdGhlIHN0cmluZyAoYWZ0ZXIgdGhlIGxhc3QgbnVtYmVyKVxuXG4gIHB0LmZwID0gZnVuY1BhcmFtO1xuXG4gIGlmIChfcmVsRXhwLnRlc3QoZW5kKSB8fCBoYXNSYW5kb20pIHtcbiAgICBwdC5lID0gMDsgLy9pZiB0aGUgZW5kIHN0cmluZyBjb250YWlucyByZWxhdGl2ZSB2YWx1ZXMgb3IgZHluYW1pYyByYW5kb20oLi4uKSB2YWx1ZXMsIGRlbGV0ZSB0aGUgZW5kIGl0IHNvIHRoYXQgb24gdGhlIGZpbmFsIHJlbmRlciB3ZSBkb24ndCBhY3R1YWxseSBzZXQgaXQgdG8gdGhlIHN0cmluZyB3aXRoICs9IG9yIC09IGNoYXJhY3RlcnMgKGZvcmNlcyBpdCB0byB1c2UgdGhlIGNhbGN1bGF0ZWQgdmFsdWUpLlxuICB9XG5cbiAgdGhpcy5fcHQgPSBwdDsgLy9zdGFydCB0aGUgbGlua2VkIGxpc3Qgd2l0aCB0aGlzIG5ldyBQcm9wVHdlZW4uIFJlbWVtYmVyLCB3ZSBjYWxsIF9hZGRDb21wbGV4U3RyaW5nUHJvcFR3ZWVuLmNhbGwodHdlZW5JbnN0YW5jZS4uLikgdG8gZW5zdXJlIHRoYXQgaXQncyBzY29wZWQgcHJvcGVybHkuIFdlIG1heSBjYWxsIGl0IGZyb20gd2l0aGluIGEgcGx1Z2luIHRvbywgdGh1cyBcInRoaXNcIiB3b3VsZCByZWZlciB0byB0aGUgcGx1Z2luLlxuXG4gIHJldHVybiBwdDtcbn0sXG4gICAgX2FkZFByb3BUd2VlbiA9IGZ1bmN0aW9uIF9hZGRQcm9wVHdlZW4odGFyZ2V0LCBwcm9wLCBzdGFydCwgZW5kLCBpbmRleCwgdGFyZ2V0cywgbW9kaWZpZXIsIHN0cmluZ0ZpbHRlciwgZnVuY1BhcmFtKSB7XG4gIF9pc0Z1bmN0aW9uKGVuZCkgJiYgKGVuZCA9IGVuZChpbmRleCB8fCAwLCB0YXJnZXQsIHRhcmdldHMpKTtcbiAgdmFyIGN1cnJlbnRWYWx1ZSA9IHRhcmdldFtwcm9wXSxcbiAgICAgIHBhcnNlZFN0YXJ0ID0gc3RhcnQgIT09IFwiZ2V0XCIgPyBzdGFydCA6ICFfaXNGdW5jdGlvbihjdXJyZW50VmFsdWUpID8gY3VycmVudFZhbHVlIDogZnVuY1BhcmFtID8gdGFyZ2V0W3Byb3AuaW5kZXhPZihcInNldFwiKSB8fCAhX2lzRnVuY3Rpb24odGFyZ2V0W1wiZ2V0XCIgKyBwcm9wLnN1YnN0cigzKV0pID8gcHJvcCA6IFwiZ2V0XCIgKyBwcm9wLnN1YnN0cigzKV0oZnVuY1BhcmFtKSA6IHRhcmdldFtwcm9wXSgpLFxuICAgICAgc2V0dGVyID0gIV9pc0Z1bmN0aW9uKGN1cnJlbnRWYWx1ZSkgPyBfc2V0dGVyUGxhaW4gOiBmdW5jUGFyYW0gPyBfc2V0dGVyRnVuY1dpdGhQYXJhbSA6IF9zZXR0ZXJGdW5jLFxuICAgICAgcHQ7XG5cbiAgaWYgKF9pc1N0cmluZyhlbmQpKSB7XG4gICAgaWYgKH5lbmQuaW5kZXhPZihcInJhbmRvbShcIikpIHtcbiAgICAgIGVuZCA9IF9yZXBsYWNlUmFuZG9tKGVuZCk7XG4gICAgfVxuXG4gICAgaWYgKGVuZC5jaGFyQXQoMSkgPT09IFwiPVwiKSB7XG4gICAgICBwdCA9IF9wYXJzZVJlbGF0aXZlKHBhcnNlZFN0YXJ0LCBlbmQpICsgKGdldFVuaXQocGFyc2VkU3RhcnQpIHx8IDApO1xuXG4gICAgICBpZiAocHQgfHwgcHQgPT09IDApIHtcbiAgICAgICAgLy8gdG8gYXZvaWQgaXNOYU4sIGxpa2UgaWYgc29tZW9uZSBwYXNzZXMgaW4gYSB2YWx1ZSBsaWtlIFwiIT0gd2hhdGV2ZXJcIlxuICAgICAgICBlbmQgPSBwdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAocGFyc2VkU3RhcnQgIT09IGVuZCB8fCBfZm9yY2VBbGxQcm9wVHdlZW5zKSB7XG4gICAgaWYgKCFpc05hTihwYXJzZWRTdGFydCAqIGVuZCkgJiYgZW5kICE9PSBcIlwiKSB7XG4gICAgICAvLyBmdW4gZmFjdDogYW55IG51bWJlciBtdWx0aXBsaWVkIGJ5IFwiXCIgaXMgZXZhbHVhdGVkIGFzIHRoZSBudW1iZXIgMCFcbiAgICAgIHB0ID0gbmV3IFByb3BUd2Vlbih0aGlzLl9wdCwgdGFyZ2V0LCBwcm9wLCArcGFyc2VkU3RhcnQgfHwgMCwgZW5kIC0gKHBhcnNlZFN0YXJ0IHx8IDApLCB0eXBlb2YgY3VycmVudFZhbHVlID09PSBcImJvb2xlYW5cIiA/IF9yZW5kZXJCb29sZWFuIDogX3JlbmRlclBsYWluLCAwLCBzZXR0ZXIpO1xuICAgICAgZnVuY1BhcmFtICYmIChwdC5mcCA9IGZ1bmNQYXJhbSk7XG4gICAgICBtb2RpZmllciAmJiBwdC5tb2RpZmllcihtb2RpZmllciwgdGhpcywgdGFyZ2V0KTtcbiAgICAgIHJldHVybiB0aGlzLl9wdCA9IHB0O1xuICAgIH1cblxuICAgICFjdXJyZW50VmFsdWUgJiYgIShwcm9wIGluIHRhcmdldCkgJiYgX21pc3NpbmdQbHVnaW4ocHJvcCwgZW5kKTtcbiAgICByZXR1cm4gX2FkZENvbXBsZXhTdHJpbmdQcm9wVHdlZW4uY2FsbCh0aGlzLCB0YXJnZXQsIHByb3AsIHBhcnNlZFN0YXJ0LCBlbmQsIHNldHRlciwgc3RyaW5nRmlsdGVyIHx8IF9jb25maWcuc3RyaW5nRmlsdGVyLCBmdW5jUGFyYW0pO1xuICB9XG59LFxuICAgIC8vY3JlYXRlcyBhIGNvcHkgb2YgdGhlIHZhcnMgb2JqZWN0IGFuZCBwcm9jZXNzZXMgYW55IGZ1bmN0aW9uLWJhc2VkIHZhbHVlcyAocHV0dGluZyB0aGUgcmVzdWx0aW5nIHZhbHVlcyBkaXJlY3RseSBpbnRvIHRoZSBjb3B5KSBhcyB3ZWxsIGFzIHN0cmluZ3Mgd2l0aCBcInJhbmRvbSgpXCIgaW4gdGhlbS4gSXQgZG9lcyBOT1QgcHJvY2VzcyByZWxhdGl2ZSB2YWx1ZXMuXG5fcHJvY2Vzc1ZhcnMgPSBmdW5jdGlvbiBfcHJvY2Vzc1ZhcnModmFycywgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cywgdHdlZW4pIHtcbiAgX2lzRnVuY3Rpb24odmFycykgJiYgKHZhcnMgPSBfcGFyc2VGdW5jT3JTdHJpbmcodmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpKTtcblxuICBpZiAoIV9pc09iamVjdCh2YXJzKSB8fCB2YXJzLnN0eWxlICYmIHZhcnMubm9kZVR5cGUgfHwgX2lzQXJyYXkodmFycykgfHwgX2lzVHlwZWRBcnJheSh2YXJzKSkge1xuICAgIHJldHVybiBfaXNTdHJpbmcodmFycykgPyBfcGFyc2VGdW5jT3JTdHJpbmcodmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpIDogdmFycztcbiAgfVxuXG4gIHZhciBjb3B5ID0ge30sXG4gICAgICBwO1xuXG4gIGZvciAocCBpbiB2YXJzKSB7XG4gICAgY29weVtwXSA9IF9wYXJzZUZ1bmNPclN0cmluZyh2YXJzW3BdLCB0d2VlbiwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cyk7XG4gIH1cblxuICByZXR1cm4gY29weTtcbn0sXG4gICAgX2NoZWNrUGx1Z2luID0gZnVuY3Rpb24gX2NoZWNrUGx1Z2luKHByb3BlcnR5LCB2YXJzLCB0d2VlbiwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cykge1xuICB2YXIgcGx1Z2luLCBwdCwgcHRMb29rdXAsIGk7XG5cbiAgaWYgKF9wbHVnaW5zW3Byb3BlcnR5XSAmJiAocGx1Z2luID0gbmV3IF9wbHVnaW5zW3Byb3BlcnR5XSgpKS5pbml0KHRhcmdldCwgcGx1Z2luLnJhd1ZhcnMgPyB2YXJzW3Byb3BlcnR5XSA6IF9wcm9jZXNzVmFycyh2YXJzW3Byb3BlcnR5XSwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cywgdHdlZW4pLCB0d2VlbiwgaW5kZXgsIHRhcmdldHMpICE9PSBmYWxzZSkge1xuICAgIHR3ZWVuLl9wdCA9IHB0ID0gbmV3IFByb3BUd2Vlbih0d2Vlbi5fcHQsIHRhcmdldCwgcHJvcGVydHksIDAsIDEsIHBsdWdpbi5yZW5kZXIsIHBsdWdpbiwgMCwgcGx1Z2luLnByaW9yaXR5KTtcblxuICAgIGlmICh0d2VlbiAhPT0gX3F1aWNrVHdlZW4pIHtcbiAgICAgIHB0TG9va3VwID0gdHdlZW4uX3B0TG9va3VwW3R3ZWVuLl90YXJnZXRzLmluZGV4T2YodGFyZ2V0KV07IC8vbm90ZTogd2UgY2FuJ3QgdXNlIHR3ZWVuLl9wdExvb2t1cFtpbmRleF0gYmVjYXVzZSBmb3Igc3RhZ2dlcmVkIHR3ZWVucywgdGhlIGluZGV4IGZyb20gdGhlIGZ1bGxUYXJnZXRzIGFycmF5IHdvbid0IG1hdGNoIHdoYXQgaXQgaXMgaW4gZWFjaCBpbmRpdmlkdWFsIHR3ZWVuIHRoYXQgc3Bhd25zIGZyb20gdGhlIHN0YWdnZXIuXG5cbiAgICAgIGkgPSBwbHVnaW4uX3Byb3BzLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBwdExvb2t1cFtwbHVnaW4uX3Byb3BzW2ldXSA9IHB0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwbHVnaW47XG59LFxuICAgIF9vdmVyd3JpdGluZ1R3ZWVuLFxuICAgIC8vc3RvcmUgYSByZWZlcmVuY2UgdGVtcG9yYXJpbHkgc28gd2UgY2FuIGF2b2lkIG92ZXJ3cml0aW5nIGl0c2VsZi5cbl9mb3JjZUFsbFByb3BUd2VlbnMsXG4gICAgX2luaXRUd2VlbiA9IGZ1bmN0aW9uIF9pbml0VHdlZW4odHdlZW4sIHRpbWUpIHtcbiAgdmFyIHZhcnMgPSB0d2Vlbi52YXJzLFxuICAgICAgZWFzZSA9IHZhcnMuZWFzZSxcbiAgICAgIHN0YXJ0QXQgPSB2YXJzLnN0YXJ0QXQsXG4gICAgICBpbW1lZGlhdGVSZW5kZXIgPSB2YXJzLmltbWVkaWF0ZVJlbmRlcixcbiAgICAgIGxhenkgPSB2YXJzLmxhenksXG4gICAgICBvblVwZGF0ZSA9IHZhcnMub25VcGRhdGUsXG4gICAgICBvblVwZGF0ZVBhcmFtcyA9IHZhcnMub25VcGRhdGVQYXJhbXMsXG4gICAgICBjYWxsYmFja1Njb3BlID0gdmFycy5jYWxsYmFja1Njb3BlLFxuICAgICAgcnVuQmFja3dhcmRzID0gdmFycy5ydW5CYWNrd2FyZHMsXG4gICAgICB5b3lvRWFzZSA9IHZhcnMueW95b0Vhc2UsXG4gICAgICBrZXlmcmFtZXMgPSB2YXJzLmtleWZyYW1lcyxcbiAgICAgIGF1dG9SZXZlcnQgPSB2YXJzLmF1dG9SZXZlcnQsXG4gICAgICBkdXIgPSB0d2Vlbi5fZHVyLFxuICAgICAgcHJldlN0YXJ0QXQgPSB0d2Vlbi5fc3RhcnRBdCxcbiAgICAgIHRhcmdldHMgPSB0d2Vlbi5fdGFyZ2V0cyxcbiAgICAgIHBhcmVudCA9IHR3ZWVuLnBhcmVudCxcbiAgICAgIGZ1bGxUYXJnZXRzID0gcGFyZW50ICYmIHBhcmVudC5kYXRhID09PSBcIm5lc3RlZFwiID8gcGFyZW50LnBhcmVudC5fdGFyZ2V0cyA6IHRhcmdldHMsXG4gICAgICBhdXRvT3ZlcndyaXRlID0gdHdlZW4uX292ZXJ3cml0ZSA9PT0gXCJhdXRvXCIgJiYgIV9zdXBwcmVzc092ZXJ3cml0ZXMsXG4gICAgICB0bCA9IHR3ZWVuLnRpbWVsaW5lLFxuICAgICAgY2xlYW5WYXJzLFxuICAgICAgaSxcbiAgICAgIHAsXG4gICAgICBwdCxcbiAgICAgIHRhcmdldCxcbiAgICAgIGhhc1ByaW9yaXR5LFxuICAgICAgZ3NEYXRhLFxuICAgICAgaGFybmVzcyxcbiAgICAgIHBsdWdpbixcbiAgICAgIHB0TG9va3VwLFxuICAgICAgaW5kZXgsXG4gICAgICBoYXJuZXNzVmFycyxcbiAgICAgIG92ZXJ3cml0dGVuO1xuICB0bCAmJiAoIWtleWZyYW1lcyB8fCAhZWFzZSkgJiYgKGVhc2UgPSBcIm5vbmVcIik7XG4gIHR3ZWVuLl9lYXNlID0gX3BhcnNlRWFzZShlYXNlLCBfZGVmYXVsdHMuZWFzZSk7XG4gIHR3ZWVuLl95RWFzZSA9IHlveW9FYXNlID8gX2ludmVydEVhc2UoX3BhcnNlRWFzZSh5b3lvRWFzZSA9PT0gdHJ1ZSA/IGVhc2UgOiB5b3lvRWFzZSwgX2RlZmF1bHRzLmVhc2UpKSA6IDA7XG5cbiAgaWYgKHlveW9FYXNlICYmIHR3ZWVuLl95b3lvICYmICF0d2Vlbi5fcmVwZWF0KSB7XG4gICAgLy90aGVyZSBtdXN0IGhhdmUgYmVlbiBhIHBhcmVudCB0aW1lbGluZSB3aXRoIHlveW86dHJ1ZSB0aGF0IGlzIGN1cnJlbnRseSBpbiBpdHMgeW95byBwaGFzZSwgc28gZmxpcCB0aGUgZWFzZXMuXG4gICAgeW95b0Vhc2UgPSB0d2Vlbi5feUVhc2U7XG4gICAgdHdlZW4uX3lFYXNlID0gdHdlZW4uX2Vhc2U7XG4gICAgdHdlZW4uX2Vhc2UgPSB5b3lvRWFzZTtcbiAgfVxuXG4gIHR3ZWVuLl9mcm9tID0gIXRsICYmICEhdmFycy5ydW5CYWNrd2FyZHM7IC8vbmVzdGVkIHRpbWVsaW5lcyBzaG91bGQgbmV2ZXIgcnVuIGJhY2t3YXJkcyAtIHRoZSBiYWNrd2FyZHMtbmVzcyBpcyBpbiB0aGUgY2hpbGQgdHdlZW5zLlxuXG4gIGlmICghdGwgfHwga2V5ZnJhbWVzICYmICF2YXJzLnN0YWdnZXIpIHtcbiAgICAvL2lmIHRoZXJlJ3MgYW4gaW50ZXJuYWwgdGltZWxpbmUsIHNraXAgYWxsIHRoZSBwYXJzaW5nIGJlY2F1c2Ugd2UgcGFzc2VkIHRoYXQgdGFzayBkb3duIHRoZSBjaGFpbi5cbiAgICBoYXJuZXNzID0gdGFyZ2V0c1swXSA/IF9nZXRDYWNoZSh0YXJnZXRzWzBdKS5oYXJuZXNzIDogMDtcbiAgICBoYXJuZXNzVmFycyA9IGhhcm5lc3MgJiYgdmFyc1toYXJuZXNzLnByb3BdOyAvL3NvbWVvbmUgbWF5IG5lZWQgdG8gc3BlY2lmeSBDU1Mtc3BlY2lmaWMgdmFsdWVzIEFORCBub24tQ1NTIHZhbHVlcywgbGlrZSBpZiB0aGUgZWxlbWVudCBoYXMgYW4gXCJ4XCIgcHJvcGVydHkgcGx1cyBpdCdzIGEgc3RhbmRhcmQgRE9NIGVsZW1lbnQuIFdlIGFsbG93IHBlb3BsZSB0byBkaXN0aW5ndWlzaCBieSB3cmFwcGluZyBwbHVnaW4tc3BlY2lmaWMgc3R1ZmYgaW4gYSBjc3M6e30gb2JqZWN0IGZvciBleGFtcGxlLlxuXG4gICAgY2xlYW5WYXJzID0gX2NvcHlFeGNsdWRpbmcodmFycywgX3Jlc2VydmVkUHJvcHMpO1xuXG4gICAgaWYgKHByZXZTdGFydEF0KSB7XG4gICAgICBfcmVtb3ZlRnJvbVBhcmVudChwcmV2U3RhcnRBdC5yZW5kZXIoLTEsIHRydWUpKTtcblxuICAgICAgcHJldlN0YXJ0QXQuX2xhenkgPSAwO1xuICAgIH1cblxuICAgIGlmIChzdGFydEF0KSB7XG4gICAgICBfcmVtb3ZlRnJvbVBhcmVudCh0d2Vlbi5fc3RhcnRBdCA9IFR3ZWVuLnNldCh0YXJnZXRzLCBfc2V0RGVmYXVsdHMoe1xuICAgICAgICBkYXRhOiBcImlzU3RhcnRcIixcbiAgICAgICAgb3ZlcndyaXRlOiBmYWxzZSxcbiAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgIGltbWVkaWF0ZVJlbmRlcjogdHJ1ZSxcbiAgICAgICAgbGF6eTogX2lzTm90RmFsc2UobGF6eSksXG4gICAgICAgIHN0YXJ0QXQ6IG51bGwsXG4gICAgICAgIGRlbGF5OiAwLFxuICAgICAgICBvblVwZGF0ZTogb25VcGRhdGUsXG4gICAgICAgIG9uVXBkYXRlUGFyYW1zOiBvblVwZGF0ZVBhcmFtcyxcbiAgICAgICAgY2FsbGJhY2tTY29wZTogY2FsbGJhY2tTY29wZSxcbiAgICAgICAgc3RhZ2dlcjogMFxuICAgICAgfSwgc3RhcnRBdCkpKTsgLy9jb3B5IHRoZSBwcm9wZXJ0aWVzL3ZhbHVlcyBpbnRvIGEgbmV3IG9iamVjdCB0byBhdm9pZCBjb2xsaXNpb25zLCBsaWtlIHZhciB0byA9IHt4OjB9LCBmcm9tID0ge3g6NTAwfTsgdGltZWxpbmUuZnJvbVRvKGUsIGZyb20sIHRvKS5mcm9tVG8oZSwgdG8sIGZyb20pO1xuXG5cbiAgICAgIHRpbWUgPCAwICYmICFpbW1lZGlhdGVSZW5kZXIgJiYgIWF1dG9SZXZlcnQgJiYgdHdlZW4uX3N0YXJ0QXQucmVuZGVyKC0xLCB0cnVlKTsgLy8gcmFyZSBlZGdlIGNhc2UsIGxpa2UgaWYgYSByZW5kZXIgaXMgZm9yY2VkIGluIHRoZSBuZWdhdGl2ZSBkaXJlY3Rpb24gb2YgYSBub24taW5pdHRlZCB0d2Vlbi5cblxuICAgICAgaWYgKGltbWVkaWF0ZVJlbmRlcikge1xuICAgICAgICB0aW1lID4gMCAmJiAhYXV0b1JldmVydCAmJiAodHdlZW4uX3N0YXJ0QXQgPSAwKTsgLy90d2VlbnMgdGhhdCByZW5kZXIgaW1tZWRpYXRlbHkgKGxpa2UgbW9zdCBmcm9tKCkgYW5kIGZyb21UbygpIHR3ZWVucykgc2hvdWxkbid0IHJldmVydCB3aGVuIHRoZWlyIHBhcmVudCB0aW1lbGluZSdzIHBsYXloZWFkIGdvZXMgYmFja3dhcmQgcGFzdCB0aGUgc3RhcnRUaW1lIGJlY2F1c2UgdGhlIGluaXRpYWwgcmVuZGVyIGNvdWxkIGhhdmUgaGFwcGVuZWQgYW55dGltZSBhbmQgaXQgc2hvdWxkbid0IGJlIGRpcmVjdGx5IGNvcnJlbGF0ZWQgdG8gdGhpcyB0d2VlbidzIHN0YXJ0VGltZS4gSW1hZ2luZSBzZXR0aW5nIHVwIGEgY29tcGxleCBhbmltYXRpb24gd2hlcmUgdGhlIGJlZ2lubmluZyBzdGF0ZXMgb2YgdmFyaW91cyBvYmplY3RzIGFyZSByZW5kZXJlZCBpbW1lZGlhdGVseSBidXQgdGhlIHR3ZWVuIGRvZXNuJ3QgaGFwcGVuIGZvciBxdWl0ZSBzb21lIHRpbWUgLSBpZiB3ZSByZXZlcnQgdG8gdGhlIHN0YXJ0aW5nIHZhbHVlcyBhcyBzb29uIGFzIHRoZSBwbGF5aGVhZCBnb2VzIGJhY2t3YXJkIHBhc3QgdGhlIHR3ZWVuJ3Mgc3RhcnRUaW1lLCBpdCB3aWxsIHRocm93IHRoaW5ncyBvZmYgdmlzdWFsbHkuIFJldmVyc2lvbiBzaG91bGQgb25seSBoYXBwZW4gaW4gVGltZWxpbmUgaW5zdGFuY2VzIHdoZXJlIGltbWVkaWF0ZVJlbmRlciB3YXMgZmFsc2Ugb3Igd2hlbiBhdXRvUmV2ZXJ0IGlzIGV4cGxpY2l0bHkgc2V0IHRvIHRydWUuXG5cbiAgICAgICAgaWYgKGR1ciAmJiB0aW1lIDw9IDApIHtcbiAgICAgICAgICB0aW1lICYmICh0d2Vlbi5felRpbWUgPSB0aW1lKTtcbiAgICAgICAgICByZXR1cm47IC8vd2Ugc2tpcCBpbml0aWFsaXphdGlvbiBoZXJlIHNvIHRoYXQgb3ZlcndyaXRpbmcgZG9lc24ndCBvY2N1ciB1bnRpbCB0aGUgdHdlZW4gYWN0dWFsbHkgYmVnaW5zLiBPdGhlcndpc2UsIGlmIHlvdSBjcmVhdGUgc2V2ZXJhbCBpbW1lZGlhdGVSZW5kZXI6dHJ1ZSB0d2VlbnMgb2YgdGhlIHNhbWUgdGFyZ2V0L3Byb3BlcnRpZXMgdG8gZHJvcCBpbnRvIGEgVGltZWxpbmUsIHRoZSBsYXN0IG9uZSBjcmVhdGVkIHdvdWxkIG92ZXJ3cml0ZSB0aGUgZmlyc3Qgb25lcyBiZWNhdXNlIHRoZXkgZGlkbid0IGdldCBwbGFjZWQgaW50byB0aGUgdGltZWxpbmUgeWV0IGJlZm9yZSB0aGUgZmlyc3QgcmVuZGVyIG9jY3VycyBhbmQga2lja3MgaW4gb3ZlcndyaXRpbmcuXG4gICAgICAgIH0gLy8gaWYgKHRpbWUgPiAwKSB7XG4gICAgICAgIC8vIFx0YXV0b1JldmVydCB8fCAodHdlZW4uX3N0YXJ0QXQgPSAwKTsgLy90d2VlbnMgdGhhdCByZW5kZXIgaW1tZWRpYXRlbHkgKGxpa2UgbW9zdCBmcm9tKCkgYW5kIGZyb21UbygpIHR3ZWVucykgc2hvdWxkbid0IHJldmVydCB3aGVuIHRoZWlyIHBhcmVudCB0aW1lbGluZSdzIHBsYXloZWFkIGdvZXMgYmFja3dhcmQgcGFzdCB0aGUgc3RhcnRUaW1lIGJlY2F1c2UgdGhlIGluaXRpYWwgcmVuZGVyIGNvdWxkIGhhdmUgaGFwcGVuZWQgYW55dGltZSBhbmQgaXQgc2hvdWxkbid0IGJlIGRpcmVjdGx5IGNvcnJlbGF0ZWQgdG8gdGhpcyB0d2VlbidzIHN0YXJ0VGltZS4gSW1hZ2luZSBzZXR0aW5nIHVwIGEgY29tcGxleCBhbmltYXRpb24gd2hlcmUgdGhlIGJlZ2lubmluZyBzdGF0ZXMgb2YgdmFyaW91cyBvYmplY3RzIGFyZSByZW5kZXJlZCBpbW1lZGlhdGVseSBidXQgdGhlIHR3ZWVuIGRvZXNuJ3QgaGFwcGVuIGZvciBxdWl0ZSBzb21lIHRpbWUgLSBpZiB3ZSByZXZlcnQgdG8gdGhlIHN0YXJ0aW5nIHZhbHVlcyBhcyBzb29uIGFzIHRoZSBwbGF5aGVhZCBnb2VzIGJhY2t3YXJkIHBhc3QgdGhlIHR3ZWVuJ3Mgc3RhcnRUaW1lLCBpdCB3aWxsIHRocm93IHRoaW5ncyBvZmYgdmlzdWFsbHkuIFJldmVyc2lvbiBzaG91bGQgb25seSBoYXBwZW4gaW4gVGltZWxpbmUgaW5zdGFuY2VzIHdoZXJlIGltbWVkaWF0ZVJlbmRlciB3YXMgZmFsc2Ugb3Igd2hlbiBhdXRvUmV2ZXJ0IGlzIGV4cGxpY2l0bHkgc2V0IHRvIHRydWUuXG4gICAgICAgIC8vIH0gZWxzZSBpZiAoZHVyICYmICEodGltZSA8IDAgJiYgcHJldlN0YXJ0QXQpKSB7XG4gICAgICAgIC8vIFx0dGltZSAmJiAodHdlZW4uX3pUaW1lID0gdGltZSk7XG4gICAgICAgIC8vIFx0cmV0dXJuOyAvL3dlIHNraXAgaW5pdGlhbGl6YXRpb24gaGVyZSBzbyB0aGF0IG92ZXJ3cml0aW5nIGRvZXNuJ3Qgb2NjdXIgdW50aWwgdGhlIHR3ZWVuIGFjdHVhbGx5IGJlZ2lucy4gT3RoZXJ3aXNlLCBpZiB5b3UgY3JlYXRlIHNldmVyYWwgaW1tZWRpYXRlUmVuZGVyOnRydWUgdHdlZW5zIG9mIHRoZSBzYW1lIHRhcmdldC9wcm9wZXJ0aWVzIHRvIGRyb3AgaW50byBhIFRpbWVsaW5lLCB0aGUgbGFzdCBvbmUgY3JlYXRlZCB3b3VsZCBvdmVyd3JpdGUgdGhlIGZpcnN0IG9uZXMgYmVjYXVzZSB0aGV5IGRpZG4ndCBnZXQgcGxhY2VkIGludG8gdGhlIHRpbWVsaW5lIHlldCBiZWZvcmUgdGhlIGZpcnN0IHJlbmRlciBvY2N1cnMgYW5kIGtpY2tzIGluIG92ZXJ3cml0aW5nLlxuICAgICAgICAvLyB9XG5cbiAgICAgIH0gZWxzZSBpZiAoYXV0b1JldmVydCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdHdlZW4uX3N0YXJ0QXQgPSAwO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocnVuQmFja3dhcmRzICYmIGR1cikge1xuICAgICAgLy9mcm9tKCkgdHdlZW5zIG11c3QgYmUgaGFuZGxlZCB1bmlxdWVseTogdGhlaXIgYmVnaW5uaW5nIHZhbHVlcyBtdXN0IGJlIHJlbmRlcmVkIGJ1dCB3ZSBkb24ndCB3YW50IG92ZXJ3cml0aW5nIHRvIG9jY3VyIHlldCAod2hlbiB0aW1lIGlzIHN0aWxsIDApLiBXYWl0IHVudGlsIHRoZSB0d2VlbiBhY3R1YWxseSBiZWdpbnMgYmVmb3JlIGRvaW5nIGFsbCB0aGUgcm91dGluZXMgbGlrZSBvdmVyd3JpdGluZy4gQXQgdGhhdCB0aW1lLCB3ZSBzaG91bGQgcmVuZGVyIGF0IHRoZSBFTkQgb2YgdGhlIHR3ZWVuIHRvIGVuc3VyZSB0aGF0IHRoaW5ncyBpbml0aWFsaXplIGNvcnJlY3RseSAocmVtZW1iZXIsIGZyb20oKSB0d2VlbnMgZ28gYmFja3dhcmRzKVxuICAgICAgaWYgKHByZXZTdGFydEF0KSB7XG4gICAgICAgICFhdXRvUmV2ZXJ0ICYmICh0d2Vlbi5fc3RhcnRBdCA9IDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGltZSAmJiAoaW1tZWRpYXRlUmVuZGVyID0gZmFsc2UpOyAvL2luIHJhcmUgY2FzZXMgKGxpa2UgaWYgYSBmcm9tKCkgdHdlZW4gcnVucyBhbmQgdGhlbiBpcyBpbnZhbGlkYXRlKCktZWQpLCBpbW1lZGlhdGVSZW5kZXIgY291bGQgYmUgdHJ1ZSBidXQgdGhlIGluaXRpYWwgZm9yY2VkLXJlbmRlciBnZXRzIHNraXBwZWQsIHNvIHRoZXJlJ3Mgbm8gbmVlZCB0byBmb3JjZSB0aGUgcmVuZGVyIGluIHRoaXMgY29udGV4dCB3aGVuIHRoZSBfdGltZSBpcyBncmVhdGVyIHRoYW4gMFxuXG4gICAgICAgIHAgPSBfc2V0RGVmYXVsdHMoe1xuICAgICAgICAgIG92ZXJ3cml0ZTogZmFsc2UsXG4gICAgICAgICAgZGF0YTogXCJpc0Zyb21TdGFydFwiLFxuICAgICAgICAgIC8vd2UgdGFnIHRoZSB0d2VlbiB3aXRoIGFzIFwiaXNGcm9tU3RhcnRcIiBzbyB0aGF0IGlmIFtpbnNpZGUgYSBwbHVnaW5dIHdlIG5lZWQgdG8gb25seSBkbyBzb21ldGhpbmcgYXQgdGhlIHZlcnkgRU5EIG9mIGEgdHdlZW4sIHdlIGhhdmUgYSB3YXkgb2YgaWRlbnRpZnlpbmcgdGhpcyB0d2VlbiBhcyBtZXJlbHkgdGhlIG9uZSB0aGF0J3Mgc2V0dGluZyB0aGUgYmVnaW5uaW5nIHZhbHVlcyBmb3IgYSBcImZyb20oKVwiIHR3ZWVuLiBGb3IgZXhhbXBsZSwgY2xlYXJQcm9wcyBpbiBDU1NQbHVnaW4gc2hvdWxkIG9ubHkgZ2V0IGFwcGxpZWQgYXQgdGhlIHZlcnkgRU5EIG9mIGEgdHdlZW4gYW5kIHdpdGhvdXQgdGhpcyB0YWcsIGZyb20oLi4ue2hlaWdodDoxMDAsIGNsZWFyUHJvcHM6XCJoZWlnaHRcIiwgZGVsYXk6MX0pIHdvdWxkIHdpcGUgdGhlIGhlaWdodCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSB0d2VlbiBhbmQgYWZ0ZXIgMSBzZWNvbmQsIGl0J2Qga2ljayBiYWNrIGluLlxuICAgICAgICAgIGxhenk6IGltbWVkaWF0ZVJlbmRlciAmJiBfaXNOb3RGYWxzZShsYXp5KSxcbiAgICAgICAgICBpbW1lZGlhdGVSZW5kZXI6IGltbWVkaWF0ZVJlbmRlcixcbiAgICAgICAgICAvL3plcm8tZHVyYXRpb24gdHdlZW5zIHJlbmRlciBpbW1lZGlhdGVseSBieSBkZWZhdWx0LCBidXQgaWYgd2UncmUgbm90IHNwZWNpZmljYWxseSBpbnN0cnVjdGVkIHRvIHJlbmRlciB0aGlzIHR3ZWVuIGltbWVkaWF0ZWx5LCB3ZSBzaG91bGQgc2tpcCB0aGlzIGFuZCBtZXJlbHkgX2luaXQoKSB0byByZWNvcmQgdGhlIHN0YXJ0aW5nIHZhbHVlcyAocmVuZGVyaW5nIHRoZW0gaW1tZWRpYXRlbHkgd291bGQgcHVzaCB0aGVtIHRvIGNvbXBsZXRpb24gd2hpY2ggaXMgd2FzdGVmdWwgaW4gdGhhdCBjYXNlIC0gd2UnZCBoYXZlIHRvIHJlbmRlcigtMSkgaW1tZWRpYXRlbHkgYWZ0ZXIpXG4gICAgICAgICAgc3RhZ2dlcjogMCxcbiAgICAgICAgICBwYXJlbnQ6IHBhcmVudCAvL2Vuc3VyZXMgdGhhdCBuZXN0ZWQgdHdlZW5zIHRoYXQgaGFkIGEgc3RhZ2dlciBhcmUgaGFuZGxlZCBwcm9wZXJseSwgbGlrZSBnc2FwLmZyb20oXCIuY2xhc3NcIiwge3k6Z3NhcC51dGlscy53cmFwKFstMTAwLDEwMF0pfSlcblxuICAgICAgICB9LCBjbGVhblZhcnMpO1xuICAgICAgICBoYXJuZXNzVmFycyAmJiAocFtoYXJuZXNzLnByb3BdID0gaGFybmVzc1ZhcnMpOyAvLyBpbiBjYXNlIHNvbWVvbmUgZG9lcyBzb21ldGhpbmcgbGlrZSAuZnJvbSguLi4sIHtjc3M6e319KVxuXG4gICAgICAgIF9yZW1vdmVGcm9tUGFyZW50KHR3ZWVuLl9zdGFydEF0ID0gVHdlZW4uc2V0KHRhcmdldHMsIHApKTtcblxuICAgICAgICB0aW1lIDwgMCAmJiB0d2Vlbi5fc3RhcnRBdC5yZW5kZXIoLTEsIHRydWUpOyAvLyByYXJlIGVkZ2UgY2FzZSwgbGlrZSBpZiBhIHJlbmRlciBpcyBmb3JjZWQgaW4gdGhlIG5lZ2F0aXZlIGRpcmVjdGlvbiBvZiBhIG5vbi1pbml0dGVkIGZyb20oKSB0d2Vlbi5cblxuICAgICAgICB0d2Vlbi5felRpbWUgPSB0aW1lO1xuXG4gICAgICAgIGlmICghaW1tZWRpYXRlUmVuZGVyKSB7XG4gICAgICAgICAgX2luaXRUd2Vlbih0d2Vlbi5fc3RhcnRBdCwgX3RpbnlOdW0pOyAvL2Vuc3VyZXMgdGhhdCB0aGUgaW5pdGlhbCB2YWx1ZXMgYXJlIHJlY29yZGVkXG5cbiAgICAgICAgfSBlbHNlIGlmICghdGltZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHR3ZWVuLl9wdCA9IHR3ZWVuLl9wdENhY2hlID0gMDtcbiAgICBsYXp5ID0gZHVyICYmIF9pc05vdEZhbHNlKGxhenkpIHx8IGxhenkgJiYgIWR1cjtcblxuICAgIGZvciAoaSA9IDA7IGkgPCB0YXJnZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0YXJnZXQgPSB0YXJnZXRzW2ldO1xuICAgICAgZ3NEYXRhID0gdGFyZ2V0Ll9nc2FwIHx8IF9oYXJuZXNzKHRhcmdldHMpW2ldLl9nc2FwO1xuICAgICAgdHdlZW4uX3B0TG9va3VwW2ldID0gcHRMb29rdXAgPSB7fTtcbiAgICAgIF9sYXp5TG9va3VwW2dzRGF0YS5pZF0gJiYgX2xhenlUd2VlbnMubGVuZ3RoICYmIF9sYXp5UmVuZGVyKCk7IC8vaWYgb3RoZXIgdHdlZW5zIG9mIHRoZSBzYW1lIHRhcmdldCBoYXZlIHJlY2VudGx5IGluaXR0ZWQgYnV0IGhhdmVuJ3QgcmVuZGVyZWQgeWV0LCB3ZSd2ZSBnb3QgdG8gZm9yY2UgdGhlIHJlbmRlciBzbyB0aGF0IHRoZSBzdGFydGluZyB2YWx1ZXMgYXJlIGNvcnJlY3QgKGltYWdpbmUgcG9wdWxhdGluZyBhIHRpbWVsaW5lIHdpdGggYSBidW5jaCBvZiBzZXF1ZW50aWFsIHR3ZWVucyBhbmQgdGhlbiBqdW1waW5nIHRvIHRoZSBlbmQpXG5cbiAgICAgIGluZGV4ID0gZnVsbFRhcmdldHMgPT09IHRhcmdldHMgPyBpIDogZnVsbFRhcmdldHMuaW5kZXhPZih0YXJnZXQpO1xuXG4gICAgICBpZiAoaGFybmVzcyAmJiAocGx1Z2luID0gbmV3IGhhcm5lc3MoKSkuaW5pdCh0YXJnZXQsIGhhcm5lc3NWYXJzIHx8IGNsZWFuVmFycywgdHdlZW4sIGluZGV4LCBmdWxsVGFyZ2V0cykgIT09IGZhbHNlKSB7XG4gICAgICAgIHR3ZWVuLl9wdCA9IHB0ID0gbmV3IFByb3BUd2Vlbih0d2Vlbi5fcHQsIHRhcmdldCwgcGx1Z2luLm5hbWUsIDAsIDEsIHBsdWdpbi5yZW5kZXIsIHBsdWdpbiwgMCwgcGx1Z2luLnByaW9yaXR5KTtcblxuICAgICAgICBwbHVnaW4uX3Byb3BzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICBwdExvb2t1cFtuYW1lXSA9IHB0O1xuICAgICAgICB9KTtcblxuICAgICAgICBwbHVnaW4ucHJpb3JpdHkgJiYgKGhhc1ByaW9yaXR5ID0gMSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghaGFybmVzcyB8fCBoYXJuZXNzVmFycykge1xuICAgICAgICBmb3IgKHAgaW4gY2xlYW5WYXJzKSB7XG4gICAgICAgICAgaWYgKF9wbHVnaW5zW3BdICYmIChwbHVnaW4gPSBfY2hlY2tQbHVnaW4ocCwgY2xlYW5WYXJzLCB0d2VlbiwgaW5kZXgsIHRhcmdldCwgZnVsbFRhcmdldHMpKSkge1xuICAgICAgICAgICAgcGx1Z2luLnByaW9yaXR5ICYmIChoYXNQcmlvcml0eSA9IDEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwdExvb2t1cFtwXSA9IHB0ID0gX2FkZFByb3BUd2Vlbi5jYWxsKHR3ZWVuLCB0YXJnZXQsIHAsIFwiZ2V0XCIsIGNsZWFuVmFyc1twXSwgaW5kZXgsIGZ1bGxUYXJnZXRzLCAwLCB2YXJzLnN0cmluZ0ZpbHRlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHR3ZWVuLl9vcCAmJiB0d2Vlbi5fb3BbaV0gJiYgdHdlZW4ua2lsbCh0YXJnZXQsIHR3ZWVuLl9vcFtpXSk7XG5cbiAgICAgIGlmIChhdXRvT3ZlcndyaXRlICYmIHR3ZWVuLl9wdCkge1xuICAgICAgICBfb3ZlcndyaXRpbmdUd2VlbiA9IHR3ZWVuO1xuXG4gICAgICAgIF9nbG9iYWxUaW1lbGluZS5raWxsVHdlZW5zT2YodGFyZ2V0LCBwdExvb2t1cCwgdHdlZW4uZ2xvYmFsVGltZSh0aW1lKSk7IC8vIG1ha2Ugc3VyZSB0aGUgb3ZlcndyaXRpbmcgZG9lc24ndCBvdmVyd3JpdGUgVEhJUyB0d2VlbiEhIVxuXG5cbiAgICAgICAgb3ZlcndyaXR0ZW4gPSAhdHdlZW4ucGFyZW50O1xuICAgICAgICBfb3ZlcndyaXRpbmdUd2VlbiA9IDA7XG4gICAgICB9XG5cbiAgICAgIHR3ZWVuLl9wdCAmJiBsYXp5ICYmIChfbGF6eUxvb2t1cFtnc0RhdGEuaWRdID0gMSk7XG4gICAgfVxuXG4gICAgaGFzUHJpb3JpdHkgJiYgX3NvcnRQcm9wVHdlZW5zQnlQcmlvcml0eSh0d2Vlbik7XG4gICAgdHdlZW4uX29uSW5pdCAmJiB0d2Vlbi5fb25Jbml0KHR3ZWVuKTsgLy9wbHVnaW5zIGxpa2UgUm91bmRQcm9wcyBtdXN0IHdhaXQgdW50aWwgQUxMIG9mIHRoZSBQcm9wVHdlZW5zIGFyZSBpbnN0YW50aWF0ZWQuIEluIHRoZSBwbHVnaW4ncyBpbml0KCkgZnVuY3Rpb24sIGl0IHNldHMgdGhlIF9vbkluaXQgb24gdGhlIHR3ZWVuIGluc3RhbmNlLiBNYXkgbm90IGJlIHByZXR0eS9pbnR1aXRpdmUsIGJ1dCBpdCdzIGZhc3QgYW5kIGtlZXBzIGZpbGUgc2l6ZSBkb3duLlxuICB9XG5cbiAgdHdlZW4uX29uVXBkYXRlID0gb25VcGRhdGU7XG4gIHR3ZWVuLl9pbml0dGVkID0gKCF0d2Vlbi5fb3AgfHwgdHdlZW4uX3B0KSAmJiAhb3ZlcndyaXR0ZW47IC8vIGlmIG92ZXJ3cml0dGVuUHJvcHMgcmVzdWx0ZWQgaW4gdGhlIGVudGlyZSB0d2VlbiBiZWluZyBraWxsZWQsIGRvIE5PVCBmbGFnIGl0IGFzIGluaXR0ZWQgb3IgZWxzZSBpdCBtYXkgcmVuZGVyIGZvciBvbmUgdGljay5cblxuICBrZXlmcmFtZXMgJiYgdGltZSA8PSAwICYmIHRsLnJlbmRlcihfYmlnTnVtLCB0cnVlLCB0cnVlKTsgLy8gaWYgdGhlcmUncyBhIDAlIGtleWZyYW1lLCBpdCdsbCByZW5kZXIgaW4gdGhlIFwiYmVmb3JlXCIgc3RhdGUgZm9yIGFueSBzdGFnZ2VyZWQvZGVsYXllZCBhbmltYXRpb25zIHRodXMgd2hlbiB0aGUgZm9sbG93aW5nIHR3ZWVuIGluaXRpYWxpemVzLCBpdCdsbCB1c2UgdGhlIFwiYmVmb3JlXCIgc3RhdGUgaW5zdGVhZCBvZiB0aGUgXCJhZnRlclwiIHN0YXRlIGFzIHRoZSBpbml0aWFsIHZhbHVlcy5cbn0sXG4gICAgX3VwZGF0ZVByb3BUd2VlbnMgPSBmdW5jdGlvbiBfdXBkYXRlUHJvcFR3ZWVucyh0d2VlbiwgcHJvcGVydHksIHZhbHVlLCBzdGFydCwgc3RhcnRJc1JlbGF0aXZlLCByYXRpbywgdGltZSkge1xuICB2YXIgcHRDYWNoZSA9ICh0d2Vlbi5fcHQgJiYgdHdlZW4uX3B0Q2FjaGUgfHwgKHR3ZWVuLl9wdENhY2hlID0ge30pKVtwcm9wZXJ0eV0sXG4gICAgICBwdCxcbiAgICAgIGxvb2t1cCxcbiAgICAgIGk7XG5cbiAgaWYgKCFwdENhY2hlKSB7XG4gICAgcHRDYWNoZSA9IHR3ZWVuLl9wdENhY2hlW3Byb3BlcnR5XSA9IFtdO1xuICAgIGxvb2t1cCA9IHR3ZWVuLl9wdExvb2t1cDtcbiAgICBpID0gdHdlZW4uX3RhcmdldHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgcHQgPSBsb29rdXBbaV1bcHJvcGVydHldO1xuXG4gICAgICBpZiAocHQgJiYgcHQuZCAmJiBwdC5kLl9wdCkge1xuICAgICAgICAvLyBpdCdzIGEgcGx1Z2luLCBzbyBmaW5kIHRoZSBuZXN0ZWQgUHJvcFR3ZWVuXG4gICAgICAgIHB0ID0gcHQuZC5fcHQ7XG5cbiAgICAgICAgd2hpbGUgKHB0ICYmIHB0LnAgIT09IHByb3BlcnR5KSB7XG4gICAgICAgICAgcHQgPSBwdC5fbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXB0KSB7XG4gICAgICAgIC8vIHRoZXJlIGlzIG5vIFByb3BUd2VlbiBhc3NvY2lhdGVkIHdpdGggdGhhdCBwcm9wZXJ0eSwgc28gd2UgbXVzdCBGT1JDRSBvbmUgdG8gYmUgY3JlYXRlZCBhbmQgZGl0Y2ggb3V0IG9mIHRoaXNcbiAgICAgICAgLy8gaWYgdGhlIHR3ZWVuIGhhcyBvdGhlciBwcm9wZXJ0aWVzIHRoYXQgYWxyZWFkeSByZW5kZXJlZCBhdCBuZXcgcG9zaXRpb25zLCB3ZSdkIG5vcm1hbGx5IGhhdmUgdG8gcmV3aW5kIHRvIHB1dCB0aGVtIGJhY2sgbGlrZSB0d2Vlbi5yZW5kZXIoMCwgdHJ1ZSkgYmVmb3JlIGZvcmNpbmcgYW4gX2luaXRUd2VlbigpLCBidXQgdGhhdCBjYW4gY3JlYXRlIGFub3RoZXIgZWRnZSBjYXNlIGxpa2UgdHdlZW5pbmcgYSB0aW1lbGluZSdzIHByb2dyZXNzIHdvdWxkIHRyaWdnZXIgb25VcGRhdGVzIHRvIGZpcmUgd2hpY2ggY291bGQgbW92ZSBvdGhlciB0aGluZ3MgYXJvdW5kLiBJdCdzIGJldHRlciB0byBqdXN0IGluZm9ybSB1c2VycyB0aGF0IC5yZXNldFRvKCkgc2hvdWxkIE9OTFkgYmUgdXNlZCBmb3IgdHdlZW5zIHRoYXQgYWxyZWFkeSBoYXZlIHRoYXQgcHJvcGVydHkuIEZvciBleGFtcGxlLCB5b3UgY2FuJ3QgZ3NhcC50byguLi57IHk6IDAgfSkgYW5kIHRoZW4gdHdlZW4ucmVzdFRvKFwieFwiLCAyMDApIGZvciBleGFtcGxlLlxuICAgICAgICBfZm9yY2VBbGxQcm9wVHdlZW5zID0gMTsgLy8gb3RoZXJ3aXNlLCB3aGVuIHdlIF9hZGRQcm9wVHdlZW4oKSBhbmQgaXQgZmluZHMgbm8gY2hhbmdlIGJldHdlZW4gdGhlIHN0YXJ0IGFuZCBlbmQgdmFsdWVzLCBpdCBza2lwcyBjcmVhdGluZyBhIFByb3BUd2VlbiAoZm9yIGVmZmljaWVuY3kuLi53aHkgdHdlZW4gd2hlbiB0aGVyZSdzIG5vIGRpZmZlcmVuY2U/KSBidXQgaW4gdGhpcyBjYXNlIHdlIE5FRUQgdGhhdCBQcm9wVHdlZW4gY3JlYXRlZCBzbyB3ZSBjYW4gZWRpdCBpdC5cblxuICAgICAgICB0d2Vlbi52YXJzW3Byb3BlcnR5XSA9IFwiKz0wXCI7XG5cbiAgICAgICAgX2luaXRUd2Vlbih0d2VlbiwgdGltZSk7XG5cbiAgICAgICAgX2ZvcmNlQWxsUHJvcFR3ZWVucyA9IDA7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuXG4gICAgICBwdENhY2hlLnB1c2gocHQpO1xuICAgIH1cbiAgfVxuXG4gIGkgPSBwdENhY2hlLmxlbmd0aDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgcHQgPSBwdENhY2hlW2ldO1xuICAgIHB0LnMgPSAoc3RhcnQgfHwgc3RhcnQgPT09IDApICYmICFzdGFydElzUmVsYXRpdmUgPyBzdGFydCA6IHB0LnMgKyAoc3RhcnQgfHwgMCkgKyByYXRpbyAqIHB0LmM7XG4gICAgcHQuYyA9IHZhbHVlIC0gcHQucztcbiAgICBwdC5lICYmIChwdC5lID0gX3JvdW5kKHZhbHVlKSArIGdldFVuaXQocHQuZSkpOyAvLyBtYWlubHkgZm9yIENTU1BsdWdpbiAoZW5kIHZhbHVlKVxuXG4gICAgcHQuYiAmJiAocHQuYiA9IHB0LnMgKyBnZXRVbml0KHB0LmIpKTsgLy8gKGJlZ2lubmluZyB2YWx1ZSlcbiAgfVxufSxcbiAgICBfYWRkQWxpYXNlc1RvVmFycyA9IGZ1bmN0aW9uIF9hZGRBbGlhc2VzVG9WYXJzKHRhcmdldHMsIHZhcnMpIHtcbiAgdmFyIGhhcm5lc3MgPSB0YXJnZXRzWzBdID8gX2dldENhY2hlKHRhcmdldHNbMF0pLmhhcm5lc3MgOiAwLFxuICAgICAgcHJvcGVydHlBbGlhc2VzID0gaGFybmVzcyAmJiBoYXJuZXNzLmFsaWFzZXMsXG4gICAgICBjb3B5LFxuICAgICAgcCxcbiAgICAgIGksXG4gICAgICBhbGlhc2VzO1xuXG4gIGlmICghcHJvcGVydHlBbGlhc2VzKSB7XG4gICAgcmV0dXJuIHZhcnM7XG4gIH1cblxuICBjb3B5ID0gX21lcmdlKHt9LCB2YXJzKTtcblxuICBmb3IgKHAgaW4gcHJvcGVydHlBbGlhc2VzKSB7XG4gICAgaWYgKHAgaW4gY29weSkge1xuICAgICAgYWxpYXNlcyA9IHByb3BlcnR5QWxpYXNlc1twXS5zcGxpdChcIixcIik7XG4gICAgICBpID0gYWxpYXNlcy5sZW5ndGg7XG5cbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgY29weVthbGlhc2VzW2ldXSA9IGNvcHlbcF07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvcHk7XG59LFxuICAgIC8vIHBhcnNlcyBtdWx0aXBsZSBmb3JtYXRzLCBsaWtlIHtcIjAlXCI6IHt4OiAxMDB9LCB7XCI1MCVcIjoge3g6IC0yMH19IGFuZCB7IHg6IHtcIjAlXCI6IDEwMCwgXCI1MCVcIjogLTIwfSB9LCBhbmQgYW4gXCJlYXNlXCIgY2FuIGJlIHNldCBvbiBhbnkgb2JqZWN0LiBXZSBwb3B1bGF0ZSBhbiBcImFsbFByb3BzXCIgb2JqZWN0IHdpdGggYW4gQXJyYXkgZm9yIGVhY2ggcHJvcGVydHksIGxpa2Uge3g6IFt7fSwge31dLCB5Olt7fSwge31dfSB3aXRoIGRhdGEgZm9yIGVhY2ggcHJvcGVydHkgdHdlZW4uIFRoZSBvYmplY3RzIGhhdmUgYSBcInRcIiAodGltZSksIFwidlwiLCAodmFsdWUpLCBhbmQgXCJlXCIgKGVhc2UpIHByb3BlcnR5LiBUaGlzIGFsbG93cyB1cyB0byBwaWVjZSB0b2dldGhlciBhIHRpbWVsaW5lIGxhdGVyLlxuX3BhcnNlS2V5ZnJhbWUgPSBmdW5jdGlvbiBfcGFyc2VLZXlmcmFtZShwcm9wLCBvYmosIGFsbFByb3BzLCBlYXNlRWFjaCkge1xuICB2YXIgZWFzZSA9IG9iai5lYXNlIHx8IGVhc2VFYWNoIHx8IFwicG93ZXIxLmluT3V0XCIsXG4gICAgICBwLFxuICAgICAgYTtcblxuICBpZiAoX2lzQXJyYXkob2JqKSkge1xuICAgIGEgPSBhbGxQcm9wc1twcm9wXSB8fCAoYWxsUHJvcHNbcHJvcF0gPSBbXSk7IC8vIHQgPSB0aW1lIChvdXQgb2YgMTAwKSwgdiA9IHZhbHVlLCBlID0gZWFzZVxuXG4gICAgb2JqLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBpKSB7XG4gICAgICByZXR1cm4gYS5wdXNoKHtcbiAgICAgICAgdDogaSAvIChvYmoubGVuZ3RoIC0gMSkgKiAxMDAsXG4gICAgICAgIHY6IHZhbHVlLFxuICAgICAgICBlOiBlYXNlXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKHAgaW4gb2JqKSB7XG4gICAgICBhID0gYWxsUHJvcHNbcF0gfHwgKGFsbFByb3BzW3BdID0gW10pO1xuICAgICAgcCA9PT0gXCJlYXNlXCIgfHwgYS5wdXNoKHtcbiAgICAgICAgdDogcGFyc2VGbG9hdChwcm9wKSxcbiAgICAgICAgdjogb2JqW3BdLFxuICAgICAgICBlOiBlYXNlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0sXG4gICAgX3BhcnNlRnVuY09yU3RyaW5nID0gZnVuY3Rpb24gX3BhcnNlRnVuY09yU3RyaW5nKHZhbHVlLCB0d2VlbiwgaSwgdGFyZ2V0LCB0YXJnZXRzKSB7XG4gIHJldHVybiBfaXNGdW5jdGlvbih2YWx1ZSkgPyB2YWx1ZS5jYWxsKHR3ZWVuLCBpLCB0YXJnZXQsIHRhcmdldHMpIDogX2lzU3RyaW5nKHZhbHVlKSAmJiB+dmFsdWUuaW5kZXhPZihcInJhbmRvbShcIikgPyBfcmVwbGFjZVJhbmRvbSh2YWx1ZSkgOiB2YWx1ZTtcbn0sXG4gICAgX3N0YWdnZXJUd2VlblByb3BzID0gX2NhbGxiYWNrTmFtZXMgKyBcInJlcGVhdCxyZXBlYXREZWxheSx5b3lvLHJlcGVhdFJlZnJlc2gseW95b0Vhc2UsYXV0b1JldmVydFwiLFxuICAgIF9zdGFnZ2VyUHJvcHNUb1NraXAgPSB7fTtcblxuX2ZvckVhY2hOYW1lKF9zdGFnZ2VyVHdlZW5Qcm9wcyArIFwiLGlkLHN0YWdnZXIsZGVsYXksZHVyYXRpb24scGF1c2VkLHNjcm9sbFRyaWdnZXJcIiwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIF9zdGFnZ2VyUHJvcHNUb1NraXBbbmFtZV0gPSAxO1xufSk7XG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFRXRUVOXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cblxuZXhwb3J0IHZhciBUd2VlbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0FuaW1hdGlvbjIpIHtcbiAgX2luaGVyaXRzTG9vc2UoVHdlZW4sIF9BbmltYXRpb24yKTtcblxuICBmdW5jdGlvbiBUd2Vlbih0YXJnZXRzLCB2YXJzLCBwb3NpdGlvbiwgc2tpcEluaGVyaXQpIHtcbiAgICB2YXIgX3RoaXMzO1xuXG4gICAgaWYgKHR5cGVvZiB2YXJzID09PSBcIm51bWJlclwiKSB7XG4gICAgICBwb3NpdGlvbi5kdXJhdGlvbiA9IHZhcnM7XG4gICAgICB2YXJzID0gcG9zaXRpb247XG4gICAgICBwb3NpdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgX3RoaXMzID0gX0FuaW1hdGlvbjIuY2FsbCh0aGlzLCBza2lwSW5oZXJpdCA/IHZhcnMgOiBfaW5oZXJpdERlZmF1bHRzKHZhcnMpKSB8fCB0aGlzO1xuICAgIHZhciBfdGhpczMkdmFycyA9IF90aGlzMy52YXJzLFxuICAgICAgICBkdXJhdGlvbiA9IF90aGlzMyR2YXJzLmR1cmF0aW9uLFxuICAgICAgICBkZWxheSA9IF90aGlzMyR2YXJzLmRlbGF5LFxuICAgICAgICBpbW1lZGlhdGVSZW5kZXIgPSBfdGhpczMkdmFycy5pbW1lZGlhdGVSZW5kZXIsXG4gICAgICAgIHN0YWdnZXIgPSBfdGhpczMkdmFycy5zdGFnZ2VyLFxuICAgICAgICBvdmVyd3JpdGUgPSBfdGhpczMkdmFycy5vdmVyd3JpdGUsXG4gICAgICAgIGtleWZyYW1lcyA9IF90aGlzMyR2YXJzLmtleWZyYW1lcyxcbiAgICAgICAgZGVmYXVsdHMgPSBfdGhpczMkdmFycy5kZWZhdWx0cyxcbiAgICAgICAgc2Nyb2xsVHJpZ2dlciA9IF90aGlzMyR2YXJzLnNjcm9sbFRyaWdnZXIsXG4gICAgICAgIHlveW9FYXNlID0gX3RoaXMzJHZhcnMueW95b0Vhc2UsXG4gICAgICAgIHBhcmVudCA9IHZhcnMucGFyZW50IHx8IF9nbG9iYWxUaW1lbGluZSxcbiAgICAgICAgcGFyc2VkVGFyZ2V0cyA9IChfaXNBcnJheSh0YXJnZXRzKSB8fCBfaXNUeXBlZEFycmF5KHRhcmdldHMpID8gX2lzTnVtYmVyKHRhcmdldHNbMF0pIDogXCJsZW5ndGhcIiBpbiB2YXJzKSA/IFt0YXJnZXRzXSA6IHRvQXJyYXkodGFyZ2V0cyksXG4gICAgICAgIHRsLFxuICAgICAgICBpLFxuICAgICAgICBjb3B5LFxuICAgICAgICBsLFxuICAgICAgICBwLFxuICAgICAgICBjdXJUYXJnZXQsXG4gICAgICAgIHN0YWdnZXJGdW5jLFxuICAgICAgICBzdGFnZ2VyVmFyc1RvTWVyZ2U7XG4gICAgX3RoaXMzLl90YXJnZXRzID0gcGFyc2VkVGFyZ2V0cy5sZW5ndGggPyBfaGFybmVzcyhwYXJzZWRUYXJnZXRzKSA6IF93YXJuKFwiR1NBUCB0YXJnZXQgXCIgKyB0YXJnZXRzICsgXCIgbm90IGZvdW5kLiBodHRwczovL2dyZWVuc29jay5jb21cIiwgIV9jb25maWcubnVsbFRhcmdldFdhcm4pIHx8IFtdO1xuICAgIF90aGlzMy5fcHRMb29rdXAgPSBbXTsgLy9Qcm9wVHdlZW4gbG9va3VwLiBBbiBhcnJheSBjb250YWluaW5nIGFuIG9iamVjdCBmb3IgZWFjaCB0YXJnZXQsIGhhdmluZyBrZXlzIGZvciBlYWNoIHR3ZWVuaW5nIHByb3BlcnR5XG5cbiAgICBfdGhpczMuX292ZXJ3cml0ZSA9IG92ZXJ3cml0ZTtcblxuICAgIGlmIChrZXlmcmFtZXMgfHwgc3RhZ2dlciB8fCBfaXNGdW5jT3JTdHJpbmcoZHVyYXRpb24pIHx8IF9pc0Z1bmNPclN0cmluZyhkZWxheSkpIHtcbiAgICAgIHZhcnMgPSBfdGhpczMudmFycztcbiAgICAgIHRsID0gX3RoaXMzLnRpbWVsaW5lID0gbmV3IFRpbWVsaW5lKHtcbiAgICAgICAgZGF0YTogXCJuZXN0ZWRcIixcbiAgICAgICAgZGVmYXVsdHM6IGRlZmF1bHRzIHx8IHt9XG4gICAgICB9KTtcbiAgICAgIHRsLmtpbGwoKTtcbiAgICAgIHRsLnBhcmVudCA9IHRsLl9kcCA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKTtcbiAgICAgIHRsLl9zdGFydCA9IDA7XG5cbiAgICAgIGlmIChzdGFnZ2VyIHx8IF9pc0Z1bmNPclN0cmluZyhkdXJhdGlvbikgfHwgX2lzRnVuY09yU3RyaW5nKGRlbGF5KSkge1xuICAgICAgICBsID0gcGFyc2VkVGFyZ2V0cy5sZW5ndGg7XG4gICAgICAgIHN0YWdnZXJGdW5jID0gc3RhZ2dlciAmJiBkaXN0cmlidXRlKHN0YWdnZXIpO1xuXG4gICAgICAgIGlmIChfaXNPYmplY3Qoc3RhZ2dlcikpIHtcbiAgICAgICAgICAvL3VzZXJzIGNhbiBwYXNzIGluIGNhbGxiYWNrcyBsaWtlIG9uU3RhcnQvb25Db21wbGV0ZSBpbiB0aGUgc3RhZ2dlciBvYmplY3QuIFRoZXNlIHNob3VsZCBmaXJlIHdpdGggZWFjaCBpbmRpdmlkdWFsIHR3ZWVuLlxuICAgICAgICAgIGZvciAocCBpbiBzdGFnZ2VyKSB7XG4gICAgICAgICAgICBpZiAofl9zdGFnZ2VyVHdlZW5Qcm9wcy5pbmRleE9mKHApKSB7XG4gICAgICAgICAgICAgIHN0YWdnZXJWYXJzVG9NZXJnZSB8fCAoc3RhZ2dlclZhcnNUb01lcmdlID0ge30pO1xuICAgICAgICAgICAgICBzdGFnZ2VyVmFyc1RvTWVyZ2VbcF0gPSBzdGFnZ2VyW3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBjb3B5ID0gX2NvcHlFeGNsdWRpbmcodmFycywgX3N0YWdnZXJQcm9wc1RvU2tpcCk7XG4gICAgICAgICAgY29weS5zdGFnZ2VyID0gMDtcbiAgICAgICAgICB5b3lvRWFzZSAmJiAoY29weS55b3lvRWFzZSA9IHlveW9FYXNlKTtcbiAgICAgICAgICBzdGFnZ2VyVmFyc1RvTWVyZ2UgJiYgX21lcmdlKGNvcHksIHN0YWdnZXJWYXJzVG9NZXJnZSk7XG4gICAgICAgICAgY3VyVGFyZ2V0ID0gcGFyc2VkVGFyZ2V0c1tpXTsgLy9kb24ndCBqdXN0IGNvcHkgZHVyYXRpb24gb3IgZGVsYXkgYmVjYXVzZSBpZiB0aGV5J3JlIGEgc3RyaW5nIG9yIGZ1bmN0aW9uLCB3ZSdkIGVuZCB1cCBpbiBhbiBpbmZpbml0ZSBsb29wIGJlY2F1c2UgX2lzRnVuY09yU3RyaW5nKCkgd291bGQgZXZhbHVhdGUgYXMgdHJ1ZSBpbiB0aGUgY2hpbGQgdHdlZW5zLCBlbnRlcmluZyB0aGlzIGxvb3AsIGV0Yy4gU28gd2UgcGFyc2UgdGhlIHZhbHVlIHN0cmFpZ2h0IGZyb20gdmFycyBhbmQgZGVmYXVsdCB0byAwLlxuXG4gICAgICAgICAgY29weS5kdXJhdGlvbiA9ICtfcGFyc2VGdW5jT3JTdHJpbmcoZHVyYXRpb24sIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKSwgaSwgY3VyVGFyZ2V0LCBwYXJzZWRUYXJnZXRzKTtcbiAgICAgICAgICBjb3B5LmRlbGF5ID0gKCtfcGFyc2VGdW5jT3JTdHJpbmcoZGVsYXksIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKSwgaSwgY3VyVGFyZ2V0LCBwYXJzZWRUYXJnZXRzKSB8fCAwKSAtIF90aGlzMy5fZGVsYXk7XG5cbiAgICAgICAgICBpZiAoIXN0YWdnZXIgJiYgbCA9PT0gMSAmJiBjb3B5LmRlbGF5KSB7XG4gICAgICAgICAgICAvLyBpZiBzb21lb25lIGRvZXMgZGVsYXk6XCJyYW5kb20oMSwgNSlcIiwgcmVwZWF0Oi0xLCBmb3IgZXhhbXBsZSwgdGhlIGRlbGF5IHNob3VsZG4ndCBiZSBpbnNpZGUgdGhlIHJlcGVhdC5cbiAgICAgICAgICAgIF90aGlzMy5fZGVsYXkgPSBkZWxheSA9IGNvcHkuZGVsYXk7XG4gICAgICAgICAgICBfdGhpczMuX3N0YXJ0ICs9IGRlbGF5O1xuICAgICAgICAgICAgY29weS5kZWxheSA9IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGwudG8oY3VyVGFyZ2V0LCBjb3B5LCBzdGFnZ2VyRnVuYyA/IHN0YWdnZXJGdW5jKGksIGN1clRhcmdldCwgcGFyc2VkVGFyZ2V0cykgOiAwKTtcbiAgICAgICAgICB0bC5fZWFzZSA9IF9lYXNlTWFwLm5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICB0bC5kdXJhdGlvbigpID8gZHVyYXRpb24gPSBkZWxheSA9IDAgOiBfdGhpczMudGltZWxpbmUgPSAwOyAvLyBpZiB0aGUgdGltZWxpbmUncyBkdXJhdGlvbiBpcyAwLCB3ZSBkb24ndCBuZWVkIGEgdGltZWxpbmUgaW50ZXJuYWxseSFcbiAgICAgIH0gZWxzZSBpZiAoa2V5ZnJhbWVzKSB7XG4gICAgICAgIF9pbmhlcml0RGVmYXVsdHMoX3NldERlZmF1bHRzKHRsLnZhcnMuZGVmYXVsdHMsIHtcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIlxuICAgICAgICB9KSk7XG5cbiAgICAgICAgdGwuX2Vhc2UgPSBfcGFyc2VFYXNlKGtleWZyYW1lcy5lYXNlIHx8IHZhcnMuZWFzZSB8fCBcIm5vbmVcIik7XG4gICAgICAgIHZhciB0aW1lID0gMCxcbiAgICAgICAgICAgIGEsXG4gICAgICAgICAgICBrZixcbiAgICAgICAgICAgIHY7XG5cbiAgICAgICAgaWYgKF9pc0FycmF5KGtleWZyYW1lcykpIHtcbiAgICAgICAgICBrZXlmcmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoZnJhbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0bC50byhwYXJzZWRUYXJnZXRzLCBmcmFtZSwgXCI+XCIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvcHkgPSB7fTtcblxuICAgICAgICAgIGZvciAocCBpbiBrZXlmcmFtZXMpIHtcbiAgICAgICAgICAgIHAgPT09IFwiZWFzZVwiIHx8IHAgPT09IFwiZWFzZUVhY2hcIiB8fCBfcGFyc2VLZXlmcmFtZShwLCBrZXlmcmFtZXNbcF0sIGNvcHksIGtleWZyYW1lcy5lYXNlRWFjaCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9yIChwIGluIGNvcHkpIHtcbiAgICAgICAgICAgIGEgPSBjb3B5W3BdLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGEudCAtIGIudDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGltZSA9IDA7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGtmID0gYVtpXTtcbiAgICAgICAgICAgICAgdiA9IHtcbiAgICAgICAgICAgICAgICBlYXNlOiBrZi5lLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAoa2YudCAtIChpID8gYVtpIC0gMV0udCA6IDApKSAvIDEwMCAqIGR1cmF0aW9uXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIHZbcF0gPSBrZi52O1xuICAgICAgICAgICAgICB0bC50byhwYXJzZWRUYXJnZXRzLCB2LCB0aW1lKTtcbiAgICAgICAgICAgICAgdGltZSArPSB2LmR1cmF0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRsLmR1cmF0aW9uKCkgPCBkdXJhdGlvbiAmJiB0bC50byh7fSwge1xuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uIC0gdGwuZHVyYXRpb24oKVxuICAgICAgICAgIH0pOyAvLyBpbiBjYXNlIGtleWZyYW1lcyBkaWRuJ3QgZ28gdG8gMTAwJVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGR1cmF0aW9uIHx8IF90aGlzMy5kdXJhdGlvbihkdXJhdGlvbiA9IHRsLmR1cmF0aW9uKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfdGhpczMudGltZWxpbmUgPSAwOyAvL3NwZWVkIG9wdGltaXphdGlvbiwgZmFzdGVyIGxvb2t1cHMgKG5vIGdvaW5nIHVwIHRoZSBwcm90b3R5cGUgY2hhaW4pXG4gICAgfVxuXG4gICAgaWYgKG92ZXJ3cml0ZSA9PT0gdHJ1ZSAmJiAhX3N1cHByZXNzT3ZlcndyaXRlcykge1xuICAgICAgX292ZXJ3cml0aW5nVHdlZW4gPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMyk7XG5cbiAgICAgIF9nbG9iYWxUaW1lbGluZS5raWxsVHdlZW5zT2YocGFyc2VkVGFyZ2V0cyk7XG5cbiAgICAgIF9vdmVyd3JpdGluZ1R3ZWVuID0gMDtcbiAgICB9XG5cbiAgICBfYWRkVG9UaW1lbGluZShwYXJlbnQsIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKSwgcG9zaXRpb24pO1xuXG4gICAgdmFycy5yZXZlcnNlZCAmJiBfdGhpczMucmV2ZXJzZSgpO1xuICAgIHZhcnMucGF1c2VkICYmIF90aGlzMy5wYXVzZWQodHJ1ZSk7XG5cbiAgICBpZiAoaW1tZWRpYXRlUmVuZGVyIHx8ICFkdXJhdGlvbiAmJiAha2V5ZnJhbWVzICYmIF90aGlzMy5fc3RhcnQgPT09IF9yb3VuZFByZWNpc2UocGFyZW50Ll90aW1lKSAmJiBfaXNOb3RGYWxzZShpbW1lZGlhdGVSZW5kZXIpICYmIF9oYXNOb1BhdXNlZEFuY2VzdG9ycyhfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMykpICYmIHBhcmVudC5kYXRhICE9PSBcIm5lc3RlZFwiKSB7XG4gICAgICBfdGhpczMuX3RUaW1lID0gLV90aW55TnVtOyAvL2ZvcmNlcyBhIHJlbmRlciB3aXRob3V0IGhhdmluZyB0byBzZXQgdGhlIHJlbmRlcigpIFwiZm9yY2VcIiBwYXJhbWV0ZXIgdG8gdHJ1ZSBiZWNhdXNlIHdlIHdhbnQgdG8gYWxsb3cgbGF6eWluZyBieSBkZWZhdWx0ICh1c2luZyB0aGUgXCJmb3JjZVwiIHBhcmFtZXRlciBhbHdheXMgZm9yY2VzIGFuIGltbWVkaWF0ZSBmdWxsIHJlbmRlcilcblxuICAgICAgX3RoaXMzLnJlbmRlcihNYXRoLm1heCgwLCAtZGVsYXkpKTsgLy9pbiBjYXNlIGRlbGF5IGlzIG5lZ2F0aXZlXG5cbiAgICB9XG5cbiAgICBzY3JvbGxUcmlnZ2VyICYmIF9zY3JvbGxUcmlnZ2VyKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKSwgc2Nyb2xsVHJpZ2dlcik7XG4gICAgcmV0dXJuIF90aGlzMztcbiAgfVxuXG4gIHZhciBfcHJvdG8zID0gVHdlZW4ucHJvdG90eXBlO1xuXG4gIF9wcm90bzMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB7XG4gICAgdmFyIHByZXZUaW1lID0gdGhpcy5fdGltZSxcbiAgICAgICAgdER1ciA9IHRoaXMuX3REdXIsXG4gICAgICAgIGR1ciA9IHRoaXMuX2R1cixcbiAgICAgICAgdFRpbWUgPSB0b3RhbFRpbWUgPiB0RHVyIC0gX3RpbnlOdW0gJiYgdG90YWxUaW1lID49IDAgPyB0RHVyIDogdG90YWxUaW1lIDwgX3RpbnlOdW0gPyAwIDogdG90YWxUaW1lLFxuICAgICAgICB0aW1lLFxuICAgICAgICBwdCxcbiAgICAgICAgaXRlcmF0aW9uLFxuICAgICAgICBjeWNsZUR1cmF0aW9uLFxuICAgICAgICBwcmV2SXRlcmF0aW9uLFxuICAgICAgICBpc1lveW8sXG4gICAgICAgIHJhdGlvLFxuICAgICAgICB0aW1lbGluZSxcbiAgICAgICAgeW95b0Vhc2U7XG5cbiAgICBpZiAoIWR1cikge1xuICAgICAgX3JlbmRlclplcm9EdXJhdGlvblR3ZWVuKHRoaXMsIHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgICB9IGVsc2UgaWYgKHRUaW1lICE9PSB0aGlzLl90VGltZSB8fCAhdG90YWxUaW1lIHx8IGZvcmNlIHx8ICF0aGlzLl9pbml0dGVkICYmIHRoaXMuX3RUaW1lIHx8IHRoaXMuX3N0YXJ0QXQgJiYgdGhpcy5felRpbWUgPCAwICE9PSB0b3RhbFRpbWUgPCAwKSB7XG4gICAgICAvL3RoaXMgc2Vuc2VzIGlmIHdlJ3JlIGNyb3NzaW5nIG92ZXIgdGhlIHN0YXJ0IHRpbWUsIGluIHdoaWNoIGNhc2Ugd2UgbXVzdCByZWNvcmQgX3pUaW1lIGFuZCBmb3JjZSB0aGUgcmVuZGVyLCBidXQgd2UgZG8gaXQgaW4gdGhpcyBsZW5ndGh5IGNvbmRpdGlvbmFsIHdheSBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucyAodXN1YWxseSB3ZSBjYW4gc2tpcCB0aGUgY2FsY3VsYXRpb25zKTogdGhpcy5faW5pdHRlZCAmJiAodGhpcy5felRpbWUgPCAwKSAhPT0gKHRvdGFsVGltZSA8IDApXG4gICAgICB0aW1lID0gdFRpbWU7XG4gICAgICB0aW1lbGluZSA9IHRoaXMudGltZWxpbmU7XG5cbiAgICAgIGlmICh0aGlzLl9yZXBlYXQpIHtcbiAgICAgICAgLy9hZGp1c3QgdGhlIHRpbWUgZm9yIHJlcGVhdHMgYW5kIHlveW9zXG4gICAgICAgIGN5Y2xlRHVyYXRpb24gPSBkdXIgKyB0aGlzLl9yRGVsYXk7XG5cbiAgICAgICAgaWYgKHRoaXMuX3JlcGVhdCA8IC0xICYmIHRvdGFsVGltZSA8IDApIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy50b3RhbFRpbWUoY3ljbGVEdXJhdGlvbiAqIDEwMCArIHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRpbWUgPSBfcm91bmRQcmVjaXNlKHRUaW1lICUgY3ljbGVEdXJhdGlvbik7IC8vcm91bmQgdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgZXJyb3JzLiAoNCAlIDAuOCBzaG91bGQgYmUgMCBidXQgc29tZSBicm93c2VycyByZXBvcnQgaXQgYXMgMC43OTk5OTk5OSEpXG5cbiAgICAgICAgaWYgKHRUaW1lID09PSB0RHVyKSB7XG4gICAgICAgICAgLy8gdGhlIHREdXIgPT09IHRUaW1lIGlzIGZvciBlZGdlIGNhc2VzIHdoZXJlIHRoZXJlJ3MgYSBsZW5ndGh5IGRlY2ltYWwgb24gdGhlIGR1cmF0aW9uIGFuZCBpdCBtYXkgcmVhY2ggdGhlIHZlcnkgZW5kIGJ1dCB0aGUgdGltZSBpcyByZW5kZXJlZCBhcyBub3QtcXVpdGUtdGhlcmUgKHJlbWVtYmVyLCB0RHVyIGlzIHJvdW5kZWQgdG8gNCBkZWNpbWFscyB3aGVyZWFzIGR1ciBpc24ndClcbiAgICAgICAgICBpdGVyYXRpb24gPSB0aGlzLl9yZXBlYXQ7XG4gICAgICAgICAgdGltZSA9IGR1cjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVyYXRpb24gPSB+fih0VGltZSAvIGN5Y2xlRHVyYXRpb24pO1xuXG4gICAgICAgICAgaWYgKGl0ZXJhdGlvbiAmJiBpdGVyYXRpb24gPT09IHRUaW1lIC8gY3ljbGVEdXJhdGlvbikge1xuICAgICAgICAgICAgdGltZSA9IGR1cjtcbiAgICAgICAgICAgIGl0ZXJhdGlvbi0tO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRpbWUgPiBkdXIgJiYgKHRpbWUgPSBkdXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaXNZb3lvID0gdGhpcy5feW95byAmJiBpdGVyYXRpb24gJiAxO1xuXG4gICAgICAgIGlmIChpc1lveW8pIHtcbiAgICAgICAgICB5b3lvRWFzZSA9IHRoaXMuX3lFYXNlO1xuICAgICAgICAgIHRpbWUgPSBkdXIgLSB0aW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJldkl0ZXJhdGlvbiA9IF9hbmltYXRpb25DeWNsZSh0aGlzLl90VGltZSwgY3ljbGVEdXJhdGlvbik7XG5cbiAgICAgICAgaWYgKHRpbWUgPT09IHByZXZUaW1lICYmICFmb3JjZSAmJiB0aGlzLl9pbml0dGVkKSB7XG4gICAgICAgICAgLy9jb3VsZCBiZSBkdXJpbmcgdGhlIHJlcGVhdERlbGF5IHBhcnQuIE5vIG5lZWQgdG8gcmVuZGVyIGFuZCBmaXJlIGNhbGxiYWNrcy5cbiAgICAgICAgICB0aGlzLl90VGltZSA9IHRUaW1lO1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGl0ZXJhdGlvbiAhPT0gcHJldkl0ZXJhdGlvbikge1xuICAgICAgICAgIHRpbWVsaW5lICYmIHRoaXMuX3lFYXNlICYmIF9wcm9wYWdhdGVZb3lvRWFzZSh0aW1lbGluZSwgaXNZb3lvKTsgLy9yZXBlYXRSZWZyZXNoIGZ1bmN0aW9uYWxpdHlcblxuICAgICAgICAgIGlmICh0aGlzLnZhcnMucmVwZWF0UmVmcmVzaCAmJiAhaXNZb3lvICYmICF0aGlzLl9sb2NrKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2NrID0gZm9yY2UgPSAxOyAvL2ZvcmNlLCBvdGhlcndpc2UgaWYgbGF6eSBpcyB0cnVlLCB0aGUgX2F0dGVtcHRJbml0VHdlZW4oKSB3aWxsIHJldHVybiBhbmQgd2UnbGwganVtcCBvdXQgYW5kIGdldCBjYXVnaHQgYm91bmNpbmcgb24gZWFjaCB0aWNrLlxuXG4gICAgICAgICAgICB0aGlzLnJlbmRlcihfcm91bmRQcmVjaXNlKGN5Y2xlRHVyYXRpb24gKiBpdGVyYXRpb24pLCB0cnVlKS5pbnZhbGlkYXRlKCkuX2xvY2sgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuX2luaXR0ZWQpIHtcbiAgICAgICAgaWYgKF9hdHRlbXB0SW5pdFR3ZWVuKHRoaXMsIHRvdGFsVGltZSA8IDAgPyB0b3RhbFRpbWUgOiB0aW1lLCBmb3JjZSwgc3VwcHJlc3NFdmVudHMpKSB7XG4gICAgICAgICAgdGhpcy5fdFRpbWUgPSAwOyAvLyBpbiBjb25zdHJ1Y3RvciBpZiBpbW1lZGlhdGVSZW5kZXIgaXMgdHJ1ZSwgd2Ugc2V0IF90VGltZSB0byAtX3RpbnlOdW0gdG8gaGF2ZSB0aGUgcGxheWhlYWQgY3Jvc3MgdGhlIHN0YXJ0aW5nIHBvaW50IGJ1dCB3ZSBjYW4ndCBsZWF2ZSBfdFRpbWUgYXMgYSBuZWdhdGl2ZSBudW1iZXIuXG5cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmV2VGltZSAhPT0gdGhpcy5fdGltZSkge1xuICAgICAgICAgIC8vIHJhcmUgZWRnZSBjYXNlIC0gZHVyaW5nIGluaXRpYWxpemF0aW9uLCBhbiBvblVwZGF0ZSBpbiB0aGUgX3N0YXJ0QXQgKC5mcm9tVG8oKSkgbWlnaHQgZm9yY2UgdGhpcyB0d2VlbiB0byByZW5kZXIgYXQgYSBkaWZmZXJlbnQgc3BvdCBpbiB3aGljaCBjYXNlIHdlIHNob3VsZCBkaXRjaCB0aGlzIHJlbmRlcigpIGNhbGwgc28gdGhhdCBpdCBkb2Vzbid0IHJldmVydCB0aGUgdmFsdWVzLlxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGR1ciAhPT0gdGhpcy5fZHVyKSB7XG4gICAgICAgICAgLy8gd2hpbGUgaW5pdHRpbmcsIGEgcGx1Z2luIGxpa2UgSW5lcnRpYVBsdWdpbiBtaWdodCBhbHRlciB0aGUgZHVyYXRpb24sIHNvIHJlcnVuIGZyb20gdGhlIHN0YXJ0IHRvIGVuc3VyZSBldmVyeXRoaW5nIHJlbmRlcnMgYXMgaXQgc2hvdWxkLlxuICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fdFRpbWUgPSB0VGltZTtcbiAgICAgIHRoaXMuX3RpbWUgPSB0aW1lO1xuXG4gICAgICBpZiAoIXRoaXMuX2FjdCAmJiB0aGlzLl90cykge1xuICAgICAgICB0aGlzLl9hY3QgPSAxOyAvL2FzIGxvbmcgYXMgaXQncyBub3QgcGF1c2VkLCBmb3JjZSBpdCB0byBiZSBhY3RpdmUgc28gdGhhdCBpZiB0aGUgdXNlciByZW5kZXJzIGluZGVwZW5kZW50IG9mIHRoZSBwYXJlbnQgdGltZWxpbmUsIGl0J2xsIGJlIGZvcmNlZCB0byByZS1yZW5kZXIgb24gdGhlIG5leHQgdGljay5cblxuICAgICAgICB0aGlzLl9sYXp5ID0gMDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yYXRpbyA9IHJhdGlvID0gKHlveW9FYXNlIHx8IHRoaXMuX2Vhc2UpKHRpbWUgLyBkdXIpO1xuXG4gICAgICBpZiAodGhpcy5fZnJvbSkge1xuICAgICAgICB0aGlzLnJhdGlvID0gcmF0aW8gPSAxIC0gcmF0aW87XG4gICAgICB9XG5cbiAgICAgIGlmICh0aW1lICYmICFwcmV2VGltZSAmJiAhc3VwcHJlc3NFdmVudHMpIHtcbiAgICAgICAgX2NhbGxiYWNrKHRoaXMsIFwib25TdGFydFwiKTtcblxuICAgICAgICBpZiAodGhpcy5fdFRpbWUgIT09IHRUaW1lKSB7XG4gICAgICAgICAgLy8gaW4gY2FzZSB0aGUgb25TdGFydCB0cmlnZ2VyZWQgYSByZW5kZXIgYXQgYSBkaWZmZXJlbnQgc3BvdCwgZWplY3QuIExpa2UgaWYgc29tZW9uZSBkaWQgYW5pbWF0aW9uLnBhdXNlKDAuNSkgb3Igc29tZXRoaW5nIGluc2lkZSB0aGUgb25TdGFydC5cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwdCA9IHRoaXMuX3B0O1xuXG4gICAgICB3aGlsZSAocHQpIHtcbiAgICAgICAgcHQucihyYXRpbywgcHQuZCk7XG4gICAgICAgIHB0ID0gcHQuX25leHQ7XG4gICAgICB9XG5cbiAgICAgIHRpbWVsaW5lICYmIHRpbWVsaW5lLnJlbmRlcih0b3RhbFRpbWUgPCAwID8gdG90YWxUaW1lIDogIXRpbWUgJiYgaXNZb3lvID8gLV90aW55TnVtIDogdGltZWxpbmUuX2R1ciAqIHRpbWVsaW5lLl9lYXNlKHRpbWUgLyB0aGlzLl9kdXIpLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpIHx8IHRoaXMuX3N0YXJ0QXQgJiYgKHRoaXMuX3pUaW1lID0gdG90YWxUaW1lKTtcblxuICAgICAgaWYgKHRoaXMuX29uVXBkYXRlICYmICFzdXBwcmVzc0V2ZW50cykge1xuICAgICAgICB0b3RhbFRpbWUgPCAwICYmIHRoaXMuX3N0YXJ0QXQgJiYgdGhpcy5fc3RhcnRBdC5yZW5kZXIodG90YWxUaW1lLCB0cnVlLCBmb3JjZSk7IC8vbm90ZTogZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMsIHdlIHR1Y2sgdGhpcyBjb25kaXRpb25hbCBsb2dpYyBpbnNpZGUgbGVzcyB0cmF2ZWxlZCBhcmVhcyAobW9zdCB0d2VlbnMgZG9uJ3QgaGF2ZSBhbiBvblVwZGF0ZSkuIFdlJ2QganVzdCBoYXZlIGl0IGF0IHRoZSBlbmQgYmVmb3JlIHRoZSBvbkNvbXBsZXRlLCBidXQgdGhlIHZhbHVlcyBzaG91bGQgYmUgdXBkYXRlZCBiZWZvcmUgYW55IG9uVXBkYXRlIGlzIGNhbGxlZCwgc28gd2UgQUxTTyBwdXQgaXQgaGVyZSBhbmQgdGhlbiBpZiBpdCdzIG5vdCBjYWxsZWQsIHdlIGRvIHNvIGxhdGVyIG5lYXIgdGhlIG9uQ29tcGxldGUuXG5cbiAgICAgICAgX2NhbGxiYWNrKHRoaXMsIFwib25VcGRhdGVcIik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3JlcGVhdCAmJiBpdGVyYXRpb24gIT09IHByZXZJdGVyYXRpb24gJiYgdGhpcy52YXJzLm9uUmVwZWF0ICYmICFzdXBwcmVzc0V2ZW50cyAmJiB0aGlzLnBhcmVudCAmJiBfY2FsbGJhY2sodGhpcywgXCJvblJlcGVhdFwiKTtcblxuICAgICAgaWYgKCh0VGltZSA9PT0gdGhpcy5fdER1ciB8fCAhdFRpbWUpICYmIHRoaXMuX3RUaW1lID09PSB0VGltZSkge1xuICAgICAgICB0b3RhbFRpbWUgPCAwICYmIHRoaXMuX3N0YXJ0QXQgJiYgIXRoaXMuX29uVXBkYXRlICYmIHRoaXMuX3N0YXJ0QXQucmVuZGVyKHRvdGFsVGltZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICh0b3RhbFRpbWUgfHwgIWR1cikgJiYgKHRUaW1lID09PSB0aGlzLl90RHVyICYmIHRoaXMuX3RzID4gMCB8fCAhdFRpbWUgJiYgdGhpcy5fdHMgPCAwKSAmJiBfcmVtb3ZlRnJvbVBhcmVudCh0aGlzLCAxKTsgLy8gZG9uJ3QgcmVtb3ZlIGlmIHdlJ3JlIHJlbmRlcmluZyBhdCBleGFjdGx5IGEgdGltZSBvZiAwLCBhcyB0aGVyZSBjb3VsZCBiZSBhdXRvUmV2ZXJ0IHZhbHVlcyB0aGF0IHNob3VsZCBnZXQgc2V0IG9uIHRoZSBuZXh0IHRpY2sgKGlmIHRoZSBwbGF5aGVhZCBnb2VzIGJhY2t3YXJkIGJleW9uZCB0aGUgc3RhcnRUaW1lLCBuZWdhdGl2ZSB0b3RhbFRpbWUpLiBEb24ndCByZW1vdmUgaWYgdGhlIHRpbWVsaW5lIGlzIHJldmVyc2VkIGFuZCB0aGUgcGxheWhlYWQgaXNuJ3QgYXQgMCwgb3RoZXJ3aXNlIHRsLnByb2dyZXNzKDEpLnJldmVyc2UoKSB3b24ndCB3b3JrLiBPbmx5IHJlbW92ZSBpZiB0aGUgcGxheWhlYWQgaXMgYXQgdGhlIGVuZCBhbmQgdGltZVNjYWxlIGlzIHBvc2l0aXZlLCBvciBpZiB0aGUgcGxheWhlYWQgaXMgYXQgMCBhbmQgdGhlIHRpbWVTY2FsZSBpcyBuZWdhdGl2ZS5cblxuICAgICAgICBpZiAoIXN1cHByZXNzRXZlbnRzICYmICEodG90YWxUaW1lIDwgMCAmJiAhcHJldlRpbWUpICYmICh0VGltZSB8fCBwcmV2VGltZSkpIHtcbiAgICAgICAgICAvLyBpZiBwcmV2VGltZSBhbmQgdFRpbWUgYXJlIHplcm8sIHdlIHNob3VsZG4ndCBmaXJlIHRoZSBvblJldmVyc2VDb21wbGV0ZS4gVGhpcyBjb3VsZCBoYXBwZW4gaWYgeW91IGdzYXAudG8oLi4uIHtwYXVzZWQ6dHJ1ZX0pLnBsYXkoKTtcbiAgICAgICAgICBfY2FsbGJhY2sodGhpcywgdFRpbWUgPT09IHREdXIgPyBcIm9uQ29tcGxldGVcIiA6IFwib25SZXZlcnNlQ29tcGxldGVcIiwgdHJ1ZSk7XG5cbiAgICAgICAgICB0aGlzLl9wcm9tICYmICEodFRpbWUgPCB0RHVyICYmIHRoaXMudGltZVNjYWxlKCkgPiAwKSAmJiB0aGlzLl9wcm9tKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8zLnRhcmdldHMgPSBmdW5jdGlvbiB0YXJnZXRzKCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXRzO1xuICB9O1xuXG4gIF9wcm90bzMuaW52YWxpZGF0ZSA9IGZ1bmN0aW9uIGludmFsaWRhdGUoKSB7XG4gICAgdGhpcy5fcHQgPSB0aGlzLl9vcCA9IHRoaXMuX3N0YXJ0QXQgPSB0aGlzLl9vblVwZGF0ZSA9IHRoaXMuX2xhenkgPSB0aGlzLnJhdGlvID0gMDtcbiAgICB0aGlzLl9wdExvb2t1cCA9IFtdO1xuICAgIHRoaXMudGltZWxpbmUgJiYgdGhpcy50aW1lbGluZS5pbnZhbGlkYXRlKCk7XG4gICAgcmV0dXJuIF9BbmltYXRpb24yLnByb3RvdHlwZS5pbnZhbGlkYXRlLmNhbGwodGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvMy5yZXNldFRvID0gZnVuY3Rpb24gcmVzZXRUbyhwcm9wZXJ0eSwgdmFsdWUsIHN0YXJ0LCBzdGFydElzUmVsYXRpdmUpIHtcbiAgICBfdGlja2VyQWN0aXZlIHx8IF90aWNrZXIud2FrZSgpO1xuICAgIHRoaXMuX3RzIHx8IHRoaXMucGxheSgpO1xuICAgIHZhciB0aW1lID0gTWF0aC5taW4odGhpcy5fZHVyLCAodGhpcy5fZHAuX3RpbWUgLSB0aGlzLl9zdGFydCkgKiB0aGlzLl90cyksXG4gICAgICAgIHJhdGlvO1xuICAgIHRoaXMuX2luaXR0ZWQgfHwgX2luaXRUd2Vlbih0aGlzLCB0aW1lKTtcbiAgICByYXRpbyA9IHRoaXMuX2Vhc2UodGltZSAvIHRoaXMuX2R1cik7IC8vIGRvbid0IGp1c3QgZ2V0IHR3ZWVuLnJhdGlvIGJlY2F1c2UgaXQgbWF5IG5vdCBoYXZlIHJlbmRlcmVkIHlldC5cbiAgICAvLyBwb3NzaWJsZSBmdXR1cmUgYWRkaXRpb24gdG8gYWxsb3cgYW4gb2JqZWN0IHdpdGggbXVsdGlwbGUgdmFsdWVzIHRvIHVwZGF0ZSwgbGlrZSB0d2Vlbi5yZXNldFRvKHt4OiAxMDAsIHk6IDIwMH0pOyBBdCB0aGlzIHBvaW50LCBpdCBkb2Vzbid0IHNlZW0gd29ydGggdGhlIGFkZGVkIGtiIGdpdmVuIHRoZSBmYWN0IHRoYXQgbW9zdCB1c2VycyB3aWxsIGxpa2VseSBvcHQgZm9yIHRoZSBjb252ZW5pZW50IGdzYXAucXVpY2tUbygpIHdheSBvZiBpbnRlcmFjdGluZyB3aXRoIHRoaXMgbWV0aG9kLlxuICAgIC8vIGlmIChfaXNPYmplY3QocHJvcGVydHkpKSB7IC8vIHBlcmZvcm1hbmNlIG9wdGltaXphdGlvblxuICAgIC8vIFx0Zm9yIChwIGluIHByb3BlcnR5KSB7XG4gICAgLy8gXHRcdGlmIChfdXBkYXRlUHJvcFR3ZWVucyh0aGlzLCBwLCBwcm9wZXJ0eVtwXSwgdmFsdWUgPyB2YWx1ZVtwXSA6IG51bGwsIHN0YXJ0LCByYXRpbywgdGltZSkpIHtcbiAgICAvLyBcdFx0XHRyZXR1cm4gdGhpcy5yZXNldFRvKHByb3BlcnR5LCB2YWx1ZSwgc3RhcnQsIHN0YXJ0SXNSZWxhdGl2ZSk7IC8vIGlmIGEgUHJvcFR3ZWVuIHdhc24ndCBmb3VuZCBmb3IgdGhlIHByb3BlcnR5LCBpdCdsbCBnZXQgZm9yY2VkIHdpdGggYSByZS1pbml0aWFsaXphdGlvbiBzbyB3ZSBuZWVkIHRvIGp1bXAgb3V0IGFuZCBzdGFydCBvdmVyIGFnYWluLlxuICAgIC8vIFx0XHR9XG4gICAgLy8gXHR9XG4gICAgLy8gfSBlbHNlIHtcblxuICAgIGlmIChfdXBkYXRlUHJvcFR3ZWVucyh0aGlzLCBwcm9wZXJ0eSwgdmFsdWUsIHN0YXJ0LCBzdGFydElzUmVsYXRpdmUsIHJhdGlvLCB0aW1lKSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzZXRUbyhwcm9wZXJ0eSwgdmFsdWUsIHN0YXJ0LCBzdGFydElzUmVsYXRpdmUpOyAvLyBpZiBhIFByb3BUd2VlbiB3YXNuJ3QgZm91bmQgZm9yIHRoZSBwcm9wZXJ0eSwgaXQnbGwgZ2V0IGZvcmNlZCB3aXRoIGEgcmUtaW5pdGlhbGl6YXRpb24gc28gd2UgbmVlZCB0byBqdW1wIG91dCBhbmQgc3RhcnQgb3ZlciBhZ2Fpbi5cbiAgICB9IC8vfVxuXG5cbiAgICBfYWxpZ25QbGF5aGVhZCh0aGlzLCAwKTtcblxuICAgIHRoaXMucGFyZW50IHx8IF9hZGRMaW5rZWRMaXN0SXRlbSh0aGlzLl9kcCwgdGhpcywgXCJfZmlyc3RcIiwgXCJfbGFzdFwiLCB0aGlzLl9kcC5fc29ydCA/IFwiX3N0YXJ0XCIgOiAwKTtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXIoMCk7XG4gIH07XG5cbiAgX3Byb3RvMy5raWxsID0gZnVuY3Rpb24ga2lsbCh0YXJnZXRzLCB2YXJzKSB7XG4gICAgaWYgKHZhcnMgPT09IHZvaWQgMCkge1xuICAgICAgdmFycyA9IFwiYWxsXCI7XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXRzICYmICghdmFycyB8fCB2YXJzID09PSBcImFsbFwiKSkge1xuICAgICAgdGhpcy5fbGF6eSA9IHRoaXMuX3B0ID0gMDtcbiAgICAgIHJldHVybiB0aGlzLnBhcmVudCA/IF9pbnRlcnJ1cHQodGhpcykgOiB0aGlzO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRpbWVsaW5lKSB7XG4gICAgICB2YXIgdER1ciA9IHRoaXMudGltZWxpbmUudG90YWxEdXJhdGlvbigpO1xuICAgICAgdGhpcy50aW1lbGluZS5raWxsVHdlZW5zT2YodGFyZ2V0cywgdmFycywgX292ZXJ3cml0aW5nVHdlZW4gJiYgX292ZXJ3cml0aW5nVHdlZW4udmFycy5vdmVyd3JpdGUgIT09IHRydWUpLl9maXJzdCB8fCBfaW50ZXJydXB0KHRoaXMpOyAvLyBpZiBub3RoaW5nIGlzIGxlZnQgdHdlZW5pbmcsIGludGVycnVwdC5cblxuICAgICAgdGhpcy5wYXJlbnQgJiYgdER1ciAhPT0gdGhpcy50aW1lbGluZS50b3RhbER1cmF0aW9uKCkgJiYgX3NldER1cmF0aW9uKHRoaXMsIHRoaXMuX2R1ciAqIHRoaXMudGltZWxpbmUuX3REdXIgLyB0RHVyLCAwLCAxKTsgLy8gaWYgYSBuZXN0ZWQgdHdlZW4gaXMga2lsbGVkIHRoYXQgY2hhbmdlcyB0aGUgZHVyYXRpb24sIGl0IHNob3VsZCBhZmZlY3QgdGhpcyB0d2VlbidzIGR1cmF0aW9uLiBXZSBtdXN0IHVzZSB0aGUgcmF0aW8sIHRob3VnaCwgYmVjYXVzZSBzb21ldGltZXMgdGhlIGludGVybmFsIHRpbWVsaW5lIGlzIHN0cmV0Y2hlZCBsaWtlIGZvciBrZXlmcmFtZXMgd2hlcmUgdGhleSBkb24ndCBhbGwgYWRkIHVwIHRvIHdoYXRldmVyIHRoZSBwYXJlbnQgdHdlZW4ncyBkdXJhdGlvbiB3YXMgc2V0IHRvLlxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB2YXIgcGFyc2VkVGFyZ2V0cyA9IHRoaXMuX3RhcmdldHMsXG4gICAgICAgIGtpbGxpbmdUYXJnZXRzID0gdGFyZ2V0cyA/IHRvQXJyYXkodGFyZ2V0cykgOiBwYXJzZWRUYXJnZXRzLFxuICAgICAgICBwcm9wVHdlZW5Mb29rdXAgPSB0aGlzLl9wdExvb2t1cCxcbiAgICAgICAgZmlyc3RQVCA9IHRoaXMuX3B0LFxuICAgICAgICBvdmVyd3JpdHRlblByb3BzLFxuICAgICAgICBjdXJMb29rdXAsXG4gICAgICAgIGN1ck92ZXJ3cml0ZVByb3BzLFxuICAgICAgICBwcm9wcyxcbiAgICAgICAgcCxcbiAgICAgICAgcHQsXG4gICAgICAgIGk7XG5cbiAgICBpZiAoKCF2YXJzIHx8IHZhcnMgPT09IFwiYWxsXCIpICYmIF9hcnJheXNNYXRjaChwYXJzZWRUYXJnZXRzLCBraWxsaW5nVGFyZ2V0cykpIHtcbiAgICAgIHZhcnMgPT09IFwiYWxsXCIgJiYgKHRoaXMuX3B0ID0gMCk7XG4gICAgICByZXR1cm4gX2ludGVycnVwdCh0aGlzKTtcbiAgICB9XG5cbiAgICBvdmVyd3JpdHRlblByb3BzID0gdGhpcy5fb3AgPSB0aGlzLl9vcCB8fCBbXTtcblxuICAgIGlmICh2YXJzICE9PSBcImFsbFwiKSB7XG4gICAgICAvL3NvIHBlb3BsZSBjYW4gcGFzcyBpbiBhIGNvbW1hLWRlbGltaXRlZCBsaXN0IG9mIHByb3BlcnR5IG5hbWVzXG4gICAgICBpZiAoX2lzU3RyaW5nKHZhcnMpKSB7XG4gICAgICAgIHAgPSB7fTtcblxuICAgICAgICBfZm9yRWFjaE5hbWUodmFycywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gcFtuYW1lXSA9IDE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhcnMgPSBwO1xuICAgICAgfVxuXG4gICAgICB2YXJzID0gX2FkZEFsaWFzZXNUb1ZhcnMocGFyc2VkVGFyZ2V0cywgdmFycyk7XG4gICAgfVxuXG4gICAgaSA9IHBhcnNlZFRhcmdldHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgaWYgKH5raWxsaW5nVGFyZ2V0cy5pbmRleE9mKHBhcnNlZFRhcmdldHNbaV0pKSB7XG4gICAgICAgIGN1ckxvb2t1cCA9IHByb3BUd2Vlbkxvb2t1cFtpXTtcblxuICAgICAgICBpZiAodmFycyA9PT0gXCJhbGxcIikge1xuICAgICAgICAgIG92ZXJ3cml0dGVuUHJvcHNbaV0gPSB2YXJzO1xuICAgICAgICAgIHByb3BzID0gY3VyTG9va3VwO1xuICAgICAgICAgIGN1ck92ZXJ3cml0ZVByb3BzID0ge307XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VyT3ZlcndyaXRlUHJvcHMgPSBvdmVyd3JpdHRlblByb3BzW2ldID0gb3ZlcndyaXR0ZW5Qcm9wc1tpXSB8fCB7fTtcbiAgICAgICAgICBwcm9wcyA9IHZhcnM7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHAgaW4gcHJvcHMpIHtcbiAgICAgICAgICBwdCA9IGN1ckxvb2t1cCAmJiBjdXJMb29rdXBbcF07XG5cbiAgICAgICAgICBpZiAocHQpIHtcbiAgICAgICAgICAgIGlmICghKFwia2lsbFwiIGluIHB0LmQpIHx8IHB0LmQua2lsbChwKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0odGhpcywgcHQsIFwiX3B0XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWxldGUgY3VyTG9va3VwW3BdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjdXJPdmVyd3JpdGVQcm9wcyAhPT0gXCJhbGxcIikge1xuICAgICAgICAgICAgY3VyT3ZlcndyaXRlUHJvcHNbcF0gPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2luaXR0ZWQgJiYgIXRoaXMuX3B0ICYmIGZpcnN0UFQgJiYgX2ludGVycnVwdCh0aGlzKTsgLy9pZiBhbGwgdHdlZW5pbmcgcHJvcGVydGllcyBhcmUga2lsbGVkLCBraWxsIHRoZSB0d2Vlbi4gV2l0aG91dCB0aGlzIGxpbmUsIGlmIHRoZXJlJ3MgYSB0d2VlbiB3aXRoIG11bHRpcGxlIHRhcmdldHMgYW5kIHRoZW4geW91IGtpbGxUd2VlbnNPZigpIGVhY2ggdGFyZ2V0IGluZGl2aWR1YWxseSwgdGhlIHR3ZWVuIHdvdWxkIHRlY2huaWNhbGx5IHN0aWxsIHJlbWFpbiBhY3RpdmUgYW5kIGZpcmUgaXRzIG9uQ29tcGxldGUgZXZlbiB0aG91Z2ggdGhlcmUgYXJlbid0IGFueSBtb3JlIHByb3BlcnRpZXMgdHdlZW5pbmcuXG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBUd2Vlbi50byA9IGZ1bmN0aW9uIHRvKHRhcmdldHMsIHZhcnMpIHtcbiAgICByZXR1cm4gbmV3IFR3ZWVuKHRhcmdldHMsIHZhcnMsIGFyZ3VtZW50c1syXSk7XG4gIH07XG5cbiAgVHdlZW4uZnJvbSA9IGZ1bmN0aW9uIGZyb20odGFyZ2V0cywgdmFycykge1xuICAgIHJldHVybiBfY3JlYXRlVHdlZW5UeXBlKDEsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgVHdlZW4uZGVsYXllZENhbGwgPSBmdW5jdGlvbiBkZWxheWVkQ2FsbChkZWxheSwgY2FsbGJhY2ssIHBhcmFtcywgc2NvcGUpIHtcbiAgICByZXR1cm4gbmV3IFR3ZWVuKGNhbGxiYWNrLCAwLCB7XG4gICAgICBpbW1lZGlhdGVSZW5kZXI6IGZhbHNlLFxuICAgICAgbGF6eTogZmFsc2UsXG4gICAgICBvdmVyd3JpdGU6IGZhbHNlLFxuICAgICAgZGVsYXk6IGRlbGF5LFxuICAgICAgb25Db21wbGV0ZTogY2FsbGJhY2ssXG4gICAgICBvblJldmVyc2VDb21wbGV0ZTogY2FsbGJhY2ssXG4gICAgICBvbkNvbXBsZXRlUGFyYW1zOiBwYXJhbXMsXG4gICAgICBvblJldmVyc2VDb21wbGV0ZVBhcmFtczogcGFyYW1zLFxuICAgICAgY2FsbGJhY2tTY29wZTogc2NvcGVcbiAgICB9KTtcbiAgfTtcblxuICBUd2Vlbi5mcm9tVG8gPSBmdW5jdGlvbiBmcm9tVG8odGFyZ2V0cywgZnJvbVZhcnMsIHRvVmFycykge1xuICAgIHJldHVybiBfY3JlYXRlVHdlZW5UeXBlKDIsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgVHdlZW4uc2V0ID0gZnVuY3Rpb24gc2V0KHRhcmdldHMsIHZhcnMpIHtcbiAgICB2YXJzLmR1cmF0aW9uID0gMDtcbiAgICB2YXJzLnJlcGVhdERlbGF5IHx8ICh2YXJzLnJlcGVhdCA9IDApO1xuICAgIHJldHVybiBuZXcgVHdlZW4odGFyZ2V0cywgdmFycyk7XG4gIH07XG5cbiAgVHdlZW4ua2lsbFR3ZWVuc09mID0gZnVuY3Rpb24ga2lsbFR3ZWVuc09mKHRhcmdldHMsIHByb3BzLCBvbmx5QWN0aXZlKSB7XG4gICAgcmV0dXJuIF9nbG9iYWxUaW1lbGluZS5raWxsVHdlZW5zT2YodGFyZ2V0cywgcHJvcHMsIG9ubHlBY3RpdmUpO1xuICB9O1xuXG4gIHJldHVybiBUd2Vlbjtcbn0oQW5pbWF0aW9uKTtcblxuX3NldERlZmF1bHRzKFR3ZWVuLnByb3RvdHlwZSwge1xuICBfdGFyZ2V0czogW10sXG4gIF9sYXp5OiAwLFxuICBfc3RhcnRBdDogMCxcbiAgX29wOiAwLFxuICBfb25Jbml0OiAwXG59KTsgLy9hZGQgdGhlIHBlcnRpbmVudCB0aW1lbGluZSBtZXRob2RzIHRvIFR3ZWVuIGluc3RhbmNlcyBzbyB0aGF0IHVzZXJzIGNhbiBjaGFpbiBjb252ZW5pZW50bHkgYW5kIGNyZWF0ZSBhIHRpbWVsaW5lIGF1dG9tYXRpY2FsbHkuIChyZW1vdmVkIGR1ZSB0byBjb25jZXJucyB0aGF0IGl0J2QgdWx0aW1hdGVseSBhZGQgdG8gbW9yZSBjb25mdXNpb24gZXNwZWNpYWxseSBmb3IgYmVnaW5uZXJzKVxuLy8gX2ZvckVhY2hOYW1lKFwidG8sZnJvbSxmcm9tVG8sc2V0LGNhbGwsYWRkLGFkZExhYmVsLGFkZFBhdXNlXCIsIG5hbWUgPT4ge1xuLy8gXHRUd2Vlbi5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbi8vIFx0XHRsZXQgdGwgPSBuZXcgVGltZWxpbmUoKTtcbi8vIFx0XHRyZXR1cm4gX2FkZFRvVGltZWxpbmUodGwsIHRoaXMpW25hbWVdLmFwcGx5KHRsLCB0b0FycmF5KGFyZ3VtZW50cykpO1xuLy8gXHR9XG4vLyB9KTtcbi8vZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkuIExldmVyYWdlIHRoZSB0aW1lbGluZSBjYWxscy5cblxuXG5fZm9yRWFjaE5hbWUoXCJzdGFnZ2VyVG8sc3RhZ2dlckZyb20sc3RhZ2dlckZyb21Ub1wiLCBmdW5jdGlvbiAobmFtZSkge1xuICBUd2VlbltuYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmUoKSxcbiAgICAgICAgcGFyYW1zID0gX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcblxuICAgIHBhcmFtcy5zcGxpY2UobmFtZSA9PT0gXCJzdGFnZ2VyRnJvbVRvXCIgPyA1IDogNCwgMCwgMCk7XG4gICAgcmV0dXJuIHRsW25hbWVdLmFwcGx5KHRsLCBwYXJhbXMpO1xuICB9O1xufSk7XG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBST1BUV0VFTlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5cbnZhciBfc2V0dGVyUGxhaW4gPSBmdW5jdGlvbiBfc2V0dGVyUGxhaW4odGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgcmV0dXJuIHRhcmdldFtwcm9wZXJ0eV0gPSB2YWx1ZTtcbn0sXG4gICAgX3NldHRlckZ1bmMgPSBmdW5jdGlvbiBfc2V0dGVyRnVuYyh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICByZXR1cm4gdGFyZ2V0W3Byb3BlcnR5XSh2YWx1ZSk7XG59LFxuICAgIF9zZXR0ZXJGdW5jV2l0aFBhcmFtID0gZnVuY3Rpb24gX3NldHRlckZ1bmNXaXRoUGFyYW0odGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIGRhdGEpIHtcbiAgcmV0dXJuIHRhcmdldFtwcm9wZXJ0eV0oZGF0YS5mcCwgdmFsdWUpO1xufSxcbiAgICBfc2V0dGVyQXR0cmlidXRlID0gZnVuY3Rpb24gX3NldHRlckF0dHJpYnV0ZSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICByZXR1cm4gdGFyZ2V0LnNldEF0dHJpYnV0ZShwcm9wZXJ0eSwgdmFsdWUpO1xufSxcbiAgICBfZ2V0U2V0dGVyID0gZnVuY3Rpb24gX2dldFNldHRlcih0YXJnZXQsIHByb3BlcnR5KSB7XG4gIHJldHVybiBfaXNGdW5jdGlvbih0YXJnZXRbcHJvcGVydHldKSA/IF9zZXR0ZXJGdW5jIDogX2lzVW5kZWZpbmVkKHRhcmdldFtwcm9wZXJ0eV0pICYmIHRhcmdldC5zZXRBdHRyaWJ1dGUgPyBfc2V0dGVyQXR0cmlidXRlIDogX3NldHRlclBsYWluO1xufSxcbiAgICBfcmVuZGVyUGxhaW4gPSBmdW5jdGlvbiBfcmVuZGVyUGxhaW4ocmF0aW8sIGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCBNYXRoLnJvdW5kKChkYXRhLnMgKyBkYXRhLmMgKiByYXRpbykgKiAxMDAwMDAwKSAvIDEwMDAwMDAsIGRhdGEpO1xufSxcbiAgICBfcmVuZGVyQm9vbGVhbiA9IGZ1bmN0aW9uIF9yZW5kZXJCb29sZWFuKHJhdGlvLCBkYXRhKSB7XG4gIHJldHVybiBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgISEoZGF0YS5zICsgZGF0YS5jICogcmF0aW8pLCBkYXRhKTtcbn0sXG4gICAgX3JlbmRlckNvbXBsZXhTdHJpbmcgPSBmdW5jdGlvbiBfcmVuZGVyQ29tcGxleFN0cmluZyhyYXRpbywgZGF0YSkge1xuICB2YXIgcHQgPSBkYXRhLl9wdCxcbiAgICAgIHMgPSBcIlwiO1xuXG4gIGlmICghcmF0aW8gJiYgZGF0YS5iKSB7XG4gICAgLy9iID0gYmVnaW5uaW5nIHN0cmluZ1xuICAgIHMgPSBkYXRhLmI7XG4gIH0gZWxzZSBpZiAocmF0aW8gPT09IDEgJiYgZGF0YS5lKSB7XG4gICAgLy9lID0gZW5kaW5nIHN0cmluZ1xuICAgIHMgPSBkYXRhLmU7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHB0KSB7XG4gICAgICBzID0gcHQucCArIChwdC5tID8gcHQubShwdC5zICsgcHQuYyAqIHJhdGlvKSA6IE1hdGgucm91bmQoKHB0LnMgKyBwdC5jICogcmF0aW8pICogMTAwMDApIC8gMTAwMDApICsgczsgLy93ZSB1c2UgdGhlIFwicFwiIHByb3BlcnR5IGZvciB0aGUgdGV4dCBpbmJldHdlZW4gKGxpa2UgYSBzdWZmaXgpLiBBbmQgaW4gdGhlIGNvbnRleHQgb2YgYSBjb21wbGV4IHN0cmluZywgdGhlIG1vZGlmaWVyIChtKSBpcyB0eXBpY2FsbHkganVzdCBNYXRoLnJvdW5kKCksIGxpa2UgZm9yIFJHQiBjb2xvcnMuXG5cbiAgICAgIHB0ID0gcHQuX25leHQ7XG4gICAgfVxuXG4gICAgcyArPSBkYXRhLmM7IC8vd2UgdXNlIHRoZSBcImNcIiBvZiB0aGUgUHJvcFR3ZWVuIHRvIHN0b3JlIHRoZSBmaW5hbCBjaHVuayBvZiBub24tbnVtZXJpYyB0ZXh0LlxuICB9XG5cbiAgZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsIHMsIGRhdGEpO1xufSxcbiAgICBfcmVuZGVyUHJvcFR3ZWVucyA9IGZ1bmN0aW9uIF9yZW5kZXJQcm9wVHdlZW5zKHJhdGlvLCBkYXRhKSB7XG4gIHZhciBwdCA9IGRhdGEuX3B0O1xuXG4gIHdoaWxlIChwdCkge1xuICAgIHB0LnIocmF0aW8sIHB0LmQpO1xuICAgIHB0ID0gcHQuX25leHQ7XG4gIH1cbn0sXG4gICAgX2FkZFBsdWdpbk1vZGlmaWVyID0gZnVuY3Rpb24gX2FkZFBsdWdpbk1vZGlmaWVyKG1vZGlmaWVyLCB0d2VlbiwgdGFyZ2V0LCBwcm9wZXJ0eSkge1xuICB2YXIgcHQgPSB0aGlzLl9wdCxcbiAgICAgIG5leHQ7XG5cbiAgd2hpbGUgKHB0KSB7XG4gICAgbmV4dCA9IHB0Ll9uZXh0O1xuICAgIHB0LnAgPT09IHByb3BlcnR5ICYmIHB0Lm1vZGlmaWVyKG1vZGlmaWVyLCB0d2VlbiwgdGFyZ2V0KTtcbiAgICBwdCA9IG5leHQ7XG4gIH1cbn0sXG4gICAgX2tpbGxQcm9wVHdlZW5zT2YgPSBmdW5jdGlvbiBfa2lsbFByb3BUd2VlbnNPZihwcm9wZXJ0eSkge1xuICB2YXIgcHQgPSB0aGlzLl9wdCxcbiAgICAgIGhhc05vbkRlcGVuZGVudFJlbWFpbmluZyxcbiAgICAgIG5leHQ7XG5cbiAgd2hpbGUgKHB0KSB7XG4gICAgbmV4dCA9IHB0Ll9uZXh0O1xuXG4gICAgaWYgKHB0LnAgPT09IHByb3BlcnR5ICYmICFwdC5vcCB8fCBwdC5vcCA9PT0gcHJvcGVydHkpIHtcbiAgICAgIF9yZW1vdmVMaW5rZWRMaXN0SXRlbSh0aGlzLCBwdCwgXCJfcHRcIik7XG4gICAgfSBlbHNlIGlmICghcHQuZGVwKSB7XG4gICAgICBoYXNOb25EZXBlbmRlbnRSZW1haW5pbmcgPSAxO1xuICAgIH1cblxuICAgIHB0ID0gbmV4dDtcbiAgfVxuXG4gIHJldHVybiAhaGFzTm9uRGVwZW5kZW50UmVtYWluaW5nO1xufSxcbiAgICBfc2V0dGVyV2l0aE1vZGlmaWVyID0gZnVuY3Rpb24gX3NldHRlcldpdGhNb2RpZmllcih0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgZGF0YSkge1xuICBkYXRhLm1TZXQodGFyZ2V0LCBwcm9wZXJ0eSwgZGF0YS5tLmNhbGwoZGF0YS50d2VlbiwgdmFsdWUsIGRhdGEubXQpLCBkYXRhKTtcbn0sXG4gICAgX3NvcnRQcm9wVHdlZW5zQnlQcmlvcml0eSA9IGZ1bmN0aW9uIF9zb3J0UHJvcFR3ZWVuc0J5UHJpb3JpdHkocGFyZW50KSB7XG4gIHZhciBwdCA9IHBhcmVudC5fcHQsXG4gICAgICBuZXh0LFxuICAgICAgcHQyLFxuICAgICAgZmlyc3QsXG4gICAgICBsYXN0OyAvL3NvcnRzIHRoZSBQcm9wVHdlZW4gbGlua2VkIGxpc3QgaW4gb3JkZXIgb2YgcHJpb3JpdHkgYmVjYXVzZSBzb21lIHBsdWdpbnMgbmVlZCB0byBkbyB0aGVpciB3b3JrIGFmdGVyIEFMTCBvZiB0aGUgUHJvcFR3ZWVucyB3ZXJlIGNyZWF0ZWQgKGxpa2UgUm91bmRQcm9wc1BsdWdpbiBhbmQgTW9kaWZpZXJzUGx1Z2luKVxuXG4gIHdoaWxlIChwdCkge1xuICAgIG5leHQgPSBwdC5fbmV4dDtcbiAgICBwdDIgPSBmaXJzdDtcblxuICAgIHdoaWxlIChwdDIgJiYgcHQyLnByID4gcHQucHIpIHtcbiAgICAgIHB0MiA9IHB0Mi5fbmV4dDtcbiAgICB9XG5cbiAgICBpZiAocHQuX3ByZXYgPSBwdDIgPyBwdDIuX3ByZXYgOiBsYXN0KSB7XG4gICAgICBwdC5fcHJldi5fbmV4dCA9IHB0O1xuICAgIH0gZWxzZSB7XG4gICAgICBmaXJzdCA9IHB0O1xuICAgIH1cblxuICAgIGlmIChwdC5fbmV4dCA9IHB0Mikge1xuICAgICAgcHQyLl9wcmV2ID0gcHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhc3QgPSBwdDtcbiAgICB9XG5cbiAgICBwdCA9IG5leHQ7XG4gIH1cblxuICBwYXJlbnQuX3B0ID0gZmlyc3Q7XG59OyAvL1Byb3BUd2VlbiBrZXk6IHQgPSB0YXJnZXQsIHAgPSBwcm9wLCByID0gcmVuZGVyZXIsIGQgPSBkYXRhLCBzID0gc3RhcnQsIGMgPSBjaGFuZ2UsIG9wID0gb3ZlcndyaXRlUHJvcGVydHkgKE9OTFkgcG9wdWxhdGVkIHdoZW4gaXQncyBkaWZmZXJlbnQgdGhhbiBwKSwgcHIgPSBwcmlvcml0eSwgX25leHQvX3ByZXYgZm9yIHRoZSBsaW5rZWQgbGlzdCBzaWJsaW5ncywgc2V0ID0gc2V0dGVyLCBtID0gbW9kaWZpZXIsIG1TZXQgPSBtb2RpZmllclNldHRlciAodGhlIG9yaWdpbmFsIHNldHRlciwgYmVmb3JlIGEgbW9kaWZpZXIgd2FzIGFkZGVkKVxuXG5cbmV4cG9ydCB2YXIgUHJvcFR3ZWVuID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUHJvcFR3ZWVuKG5leHQsIHRhcmdldCwgcHJvcCwgc3RhcnQsIGNoYW5nZSwgcmVuZGVyZXIsIGRhdGEsIHNldHRlciwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnQgPSB0YXJnZXQ7XG4gICAgdGhpcy5zID0gc3RhcnQ7XG4gICAgdGhpcy5jID0gY2hhbmdlO1xuICAgIHRoaXMucCA9IHByb3A7XG4gICAgdGhpcy5yID0gcmVuZGVyZXIgfHwgX3JlbmRlclBsYWluO1xuICAgIHRoaXMuZCA9IGRhdGEgfHwgdGhpcztcbiAgICB0aGlzLnNldCA9IHNldHRlciB8fCBfc2V0dGVyUGxhaW47XG4gICAgdGhpcy5wciA9IHByaW9yaXR5IHx8IDA7XG4gICAgdGhpcy5fbmV4dCA9IG5leHQ7XG5cbiAgICBpZiAobmV4dCkge1xuICAgICAgbmV4dC5fcHJldiA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgdmFyIF9wcm90bzQgPSBQcm9wVHdlZW4ucHJvdG90eXBlO1xuXG4gIF9wcm90bzQubW9kaWZpZXIgPSBmdW5jdGlvbiBtb2RpZmllcihmdW5jLCB0d2VlbiwgdGFyZ2V0KSB7XG4gICAgdGhpcy5tU2V0ID0gdGhpcy5tU2V0IHx8IHRoaXMuc2V0OyAvL2luIGNhc2UgaXQgd2FzIGFscmVhZHkgc2V0IChhIFByb3BUd2VlbiBjYW4gb25seSBoYXZlIG9uZSBtb2RpZmllcilcblxuICAgIHRoaXMuc2V0ID0gX3NldHRlcldpdGhNb2RpZmllcjtcbiAgICB0aGlzLm0gPSBmdW5jO1xuICAgIHRoaXMubXQgPSB0YXJnZXQ7IC8vbW9kaWZpZXIgdGFyZ2V0XG5cbiAgICB0aGlzLnR3ZWVuID0gdHdlZW47XG4gIH07XG5cbiAgcmV0dXJuIFByb3BUd2Vlbjtcbn0oKTsgLy9Jbml0aWFsaXphdGlvbiB0YXNrc1xuXG5fZm9yRWFjaE5hbWUoX2NhbGxiYWNrTmFtZXMgKyBcInBhcmVudCxkdXJhdGlvbixlYXNlLGRlbGF5LG92ZXJ3cml0ZSxydW5CYWNrd2FyZHMsc3RhcnRBdCx5b3lvLGltbWVkaWF0ZVJlbmRlcixyZXBlYXQscmVwZWF0RGVsYXksZGF0YSxwYXVzZWQscmV2ZXJzZWQsbGF6eSxjYWxsYmFja1Njb3BlLHN0cmluZ0ZpbHRlcixpZCx5b3lvRWFzZSxzdGFnZ2VyLGluaGVyaXQscmVwZWF0UmVmcmVzaCxrZXlmcmFtZXMsYXV0b1JldmVydCxzY3JvbGxUcmlnZ2VyXCIsIGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBfcmVzZXJ2ZWRQcm9wc1tuYW1lXSA9IDE7XG59KTtcblxuX2dsb2JhbHMuVHdlZW5NYXggPSBfZ2xvYmFscy5Ud2VlbkxpdGUgPSBUd2Vlbjtcbl9nbG9iYWxzLlRpbWVsaW5lTGl0ZSA9IF9nbG9iYWxzLlRpbWVsaW5lTWF4ID0gVGltZWxpbmU7XG5fZ2xvYmFsVGltZWxpbmUgPSBuZXcgVGltZWxpbmUoe1xuICBzb3J0Q2hpbGRyZW46IGZhbHNlLFxuICBkZWZhdWx0czogX2RlZmF1bHRzLFxuICBhdXRvUmVtb3ZlQ2hpbGRyZW46IHRydWUsXG4gIGlkOiBcInJvb3RcIixcbiAgc21vb3RoQ2hpbGRUaW1pbmc6IHRydWVcbn0pO1xuX2NvbmZpZy5zdHJpbmdGaWx0ZXIgPSBfY29sb3JTdHJpbmdGaWx0ZXI7XG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEdTQVBcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxudmFyIF9nc2FwID0ge1xuICByZWdpc3RlclBsdWdpbjogZnVuY3Rpb24gcmVnaXN0ZXJQbHVnaW4oKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgYXJncy5mb3JFYWNoKGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgIHJldHVybiBfY3JlYXRlUGx1Z2luKGNvbmZpZyk7XG4gICAgfSk7XG4gIH0sXG4gIHRpbWVsaW5lOiBmdW5jdGlvbiB0aW1lbGluZSh2YXJzKSB7XG4gICAgcmV0dXJuIG5ldyBUaW1lbGluZSh2YXJzKTtcbiAgfSxcbiAgZ2V0VHdlZW5zT2Y6IGZ1bmN0aW9uIGdldFR3ZWVuc09mKHRhcmdldHMsIG9ubHlBY3RpdmUpIHtcbiAgICByZXR1cm4gX2dsb2JhbFRpbWVsaW5lLmdldFR3ZWVuc09mKHRhcmdldHMsIG9ubHlBY3RpdmUpO1xuICB9LFxuICBnZXRQcm9wZXJ0eTogZnVuY3Rpb24gZ2V0UHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgdW5pdCwgdW5jYWNoZSkge1xuICAgIF9pc1N0cmluZyh0YXJnZXQpICYmICh0YXJnZXQgPSB0b0FycmF5KHRhcmdldClbMF0pOyAvL2luIGNhc2Ugc2VsZWN0b3IgdGV4dCBvciBhbiBhcnJheSBpcyBwYXNzZWQgaW5cblxuICAgIHZhciBnZXR0ZXIgPSBfZ2V0Q2FjaGUodGFyZ2V0IHx8IHt9KS5nZXQsXG4gICAgICAgIGZvcm1hdCA9IHVuaXQgPyBfcGFzc1Rocm91Z2ggOiBfbnVtZXJpY0lmUG9zc2libGU7XG5cbiAgICB1bml0ID09PSBcIm5hdGl2ZVwiICYmICh1bml0ID0gXCJcIik7XG4gICAgcmV0dXJuICF0YXJnZXQgPyB0YXJnZXQgOiAhcHJvcGVydHkgPyBmdW5jdGlvbiAocHJvcGVydHksIHVuaXQsIHVuY2FjaGUpIHtcbiAgICAgIHJldHVybiBmb3JtYXQoKF9wbHVnaW5zW3Byb3BlcnR5XSAmJiBfcGx1Z2luc1twcm9wZXJ0eV0uZ2V0IHx8IGdldHRlcikodGFyZ2V0LCBwcm9wZXJ0eSwgdW5pdCwgdW5jYWNoZSkpO1xuICAgIH0gOiBmb3JtYXQoKF9wbHVnaW5zW3Byb3BlcnR5XSAmJiBfcGx1Z2luc1twcm9wZXJ0eV0uZ2V0IHx8IGdldHRlcikodGFyZ2V0LCBwcm9wZXJ0eSwgdW5pdCwgdW5jYWNoZSkpO1xuICB9LFxuICBxdWlja1NldHRlcjogZnVuY3Rpb24gcXVpY2tTZXR0ZXIodGFyZ2V0LCBwcm9wZXJ0eSwgdW5pdCkge1xuICAgIHRhcmdldCA9IHRvQXJyYXkodGFyZ2V0KTtcblxuICAgIGlmICh0YXJnZXQubGVuZ3RoID4gMSkge1xuICAgICAgdmFyIHNldHRlcnMgPSB0YXJnZXQubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBnc2FwLnF1aWNrU2V0dGVyKHQsIHByb3BlcnR5LCB1bml0KTtcbiAgICAgIH0pLFxuICAgICAgICAgIGwgPSBzZXR0ZXJzLmxlbmd0aDtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGkgPSBsO1xuXG4gICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICBzZXR0ZXJzW2ldKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICB0YXJnZXQgPSB0YXJnZXRbMF0gfHwge307XG5cbiAgICB2YXIgUGx1Z2luID0gX3BsdWdpbnNbcHJvcGVydHldLFxuICAgICAgICBjYWNoZSA9IF9nZXRDYWNoZSh0YXJnZXQpLFxuICAgICAgICBwID0gY2FjaGUuaGFybmVzcyAmJiAoY2FjaGUuaGFybmVzcy5hbGlhc2VzIHx8IHt9KVtwcm9wZXJ0eV0gfHwgcHJvcGVydHksXG4gICAgICAgIC8vIGluIGNhc2UgaXQncyBhbiBhbGlhcywgbGlrZSBcInJvdGF0ZVwiIGZvciBcInJvdGF0aW9uXCIuXG4gICAgc2V0dGVyID0gUGx1Z2luID8gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB2YXIgcCA9IG5ldyBQbHVnaW4oKTtcbiAgICAgIF9xdWlja1R3ZWVuLl9wdCA9IDA7XG4gICAgICBwLmluaXQodGFyZ2V0LCB1bml0ID8gdmFsdWUgKyB1bml0IDogdmFsdWUsIF9xdWlja1R3ZWVuLCAwLCBbdGFyZ2V0XSk7XG4gICAgICBwLnJlbmRlcigxLCBwKTtcbiAgICAgIF9xdWlja1R3ZWVuLl9wdCAmJiBfcmVuZGVyUHJvcFR3ZWVucygxLCBfcXVpY2tUd2Vlbik7XG4gICAgfSA6IGNhY2hlLnNldCh0YXJnZXQsIHApO1xuXG4gICAgcmV0dXJuIFBsdWdpbiA/IHNldHRlciA6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHNldHRlcih0YXJnZXQsIHAsIHVuaXQgPyB2YWx1ZSArIHVuaXQgOiB2YWx1ZSwgY2FjaGUsIDEpO1xuICAgIH07XG4gIH0sXG4gIHF1aWNrVG86IGZ1bmN0aW9uIHF1aWNrVG8odGFyZ2V0LCBwcm9wZXJ0eSwgdmFycykge1xuICAgIHZhciBfbWVyZ2UyO1xuXG4gICAgdmFyIHR3ZWVuID0gZ3NhcC50byh0YXJnZXQsIF9tZXJnZSgoX21lcmdlMiA9IHt9LCBfbWVyZ2UyW3Byb3BlcnR5XSA9IFwiKz0wLjFcIiwgX21lcmdlMi5wYXVzZWQgPSB0cnVlLCBfbWVyZ2UyKSwgdmFycyB8fCB7fSkpLFxuICAgICAgICBmdW5jID0gZnVuY3Rpb24gZnVuYyh2YWx1ZSwgc3RhcnQsIHN0YXJ0SXNSZWxhdGl2ZSkge1xuICAgICAgcmV0dXJuIHR3ZWVuLnJlc2V0VG8ocHJvcGVydHksIHZhbHVlLCBzdGFydCwgc3RhcnRJc1JlbGF0aXZlKTtcbiAgICB9O1xuXG4gICAgZnVuYy50d2VlbiA9IHR3ZWVuO1xuICAgIHJldHVybiBmdW5jO1xuICB9LFxuICBpc1R3ZWVuaW5nOiBmdW5jdGlvbiBpc1R3ZWVuaW5nKHRhcmdldHMpIHtcbiAgICByZXR1cm4gX2dsb2JhbFRpbWVsaW5lLmdldFR3ZWVuc09mKHRhcmdldHMsIHRydWUpLmxlbmd0aCA+IDA7XG4gIH0sXG4gIGRlZmF1bHRzOiBmdW5jdGlvbiBkZWZhdWx0cyh2YWx1ZSkge1xuICAgIHZhbHVlICYmIHZhbHVlLmVhc2UgJiYgKHZhbHVlLmVhc2UgPSBfcGFyc2VFYXNlKHZhbHVlLmVhc2UsIF9kZWZhdWx0cy5lYXNlKSk7XG4gICAgcmV0dXJuIF9tZXJnZURlZXAoX2RlZmF1bHRzLCB2YWx1ZSB8fCB7fSk7XG4gIH0sXG4gIGNvbmZpZzogZnVuY3Rpb24gY29uZmlnKHZhbHVlKSB7XG4gICAgcmV0dXJuIF9tZXJnZURlZXAoX2NvbmZpZywgdmFsdWUgfHwge30pO1xuICB9LFxuICByZWdpc3RlckVmZmVjdDogZnVuY3Rpb24gcmVnaXN0ZXJFZmZlY3QoX3JlZjMpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYzLm5hbWUsXG4gICAgICAgIGVmZmVjdCA9IF9yZWYzLmVmZmVjdCxcbiAgICAgICAgcGx1Z2lucyA9IF9yZWYzLnBsdWdpbnMsXG4gICAgICAgIGRlZmF1bHRzID0gX3JlZjMuZGVmYXVsdHMsXG4gICAgICAgIGV4dGVuZFRpbWVsaW5lID0gX3JlZjMuZXh0ZW5kVGltZWxpbmU7XG4gICAgKHBsdWdpbnMgfHwgXCJcIikuc3BsaXQoXCIsXCIpLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbk5hbWUpIHtcbiAgICAgIHJldHVybiBwbHVnaW5OYW1lICYmICFfcGx1Z2luc1twbHVnaW5OYW1lXSAmJiAhX2dsb2JhbHNbcGx1Z2luTmFtZV0gJiYgX3dhcm4obmFtZSArIFwiIGVmZmVjdCByZXF1aXJlcyBcIiArIHBsdWdpbk5hbWUgKyBcIiBwbHVnaW4uXCIpO1xuICAgIH0pO1xuXG4gICAgX2VmZmVjdHNbbmFtZV0gPSBmdW5jdGlvbiAodGFyZ2V0cywgdmFycywgdGwpIHtcbiAgICAgIHJldHVybiBlZmZlY3QodG9BcnJheSh0YXJnZXRzKSwgX3NldERlZmF1bHRzKHZhcnMgfHwge30sIGRlZmF1bHRzKSwgdGwpO1xuICAgIH07XG5cbiAgICBpZiAoZXh0ZW5kVGltZWxpbmUpIHtcbiAgICAgIFRpbWVsaW5lLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uICh0YXJnZXRzLCB2YXJzLCBwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGQoX2VmZmVjdHNbbmFtZV0odGFyZ2V0cywgX2lzT2JqZWN0KHZhcnMpID8gdmFycyA6IChwb3NpdGlvbiA9IHZhcnMpICYmIHt9LCB0aGlzKSwgcG9zaXRpb24pO1xuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHJlZ2lzdGVyRWFzZTogZnVuY3Rpb24gcmVnaXN0ZXJFYXNlKG5hbWUsIGVhc2UpIHtcbiAgICBfZWFzZU1hcFtuYW1lXSA9IF9wYXJzZUVhc2UoZWFzZSk7XG4gIH0sXG4gIHBhcnNlRWFzZTogZnVuY3Rpb24gcGFyc2VFYXNlKGVhc2UsIGRlZmF1bHRFYXNlKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyBfcGFyc2VFYXNlKGVhc2UsIGRlZmF1bHRFYXNlKSA6IF9lYXNlTWFwO1xuICB9LFxuICBnZXRCeUlkOiBmdW5jdGlvbiBnZXRCeUlkKGlkKSB7XG4gICAgcmV0dXJuIF9nbG9iYWxUaW1lbGluZS5nZXRCeUlkKGlkKTtcbiAgfSxcbiAgZXhwb3J0Um9vdDogZnVuY3Rpb24gZXhwb3J0Um9vdCh2YXJzLCBpbmNsdWRlRGVsYXllZENhbGxzKSB7XG4gICAgaWYgKHZhcnMgPT09IHZvaWQgMCkge1xuICAgICAgdmFycyA9IHt9O1xuICAgIH1cblxuICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZSh2YXJzKSxcbiAgICAgICAgY2hpbGQsXG4gICAgICAgIG5leHQ7XG4gICAgdGwuc21vb3RoQ2hpbGRUaW1pbmcgPSBfaXNOb3RGYWxzZSh2YXJzLnNtb290aENoaWxkVGltaW5nKTtcblxuICAgIF9nbG9iYWxUaW1lbGluZS5yZW1vdmUodGwpO1xuXG4gICAgdGwuX2RwID0gMDsgLy9vdGhlcndpc2UgaXQnbGwgZ2V0IHJlLWFjdGl2YXRlZCB3aGVuIGFkZGluZyBjaGlsZHJlbiBhbmQgYmUgcmUtaW50cm9kdWNlZCBpbnRvIF9nbG9iYWxUaW1lbGluZSdzIGxpbmtlZCBsaXN0ICh0aGVuIGFkZGVkIHRvIGl0c2VsZikuXG5cbiAgICB0bC5fdGltZSA9IHRsLl90VGltZSA9IF9nbG9iYWxUaW1lbGluZS5fdGltZTtcbiAgICBjaGlsZCA9IF9nbG9iYWxUaW1lbGluZS5fZmlyc3Q7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIG5leHQgPSBjaGlsZC5fbmV4dDtcblxuICAgICAgaWYgKGluY2x1ZGVEZWxheWVkQ2FsbHMgfHwgISghY2hpbGQuX2R1ciAmJiBjaGlsZCBpbnN0YW5jZW9mIFR3ZWVuICYmIGNoaWxkLnZhcnMub25Db21wbGV0ZSA9PT0gY2hpbGQuX3RhcmdldHNbMF0pKSB7XG4gICAgICAgIF9hZGRUb1RpbWVsaW5lKHRsLCBjaGlsZCwgY2hpbGQuX3N0YXJ0IC0gY2hpbGQuX2RlbGF5KTtcbiAgICAgIH1cblxuICAgICAgY2hpbGQgPSBuZXh0O1xuICAgIH1cblxuICAgIF9hZGRUb1RpbWVsaW5lKF9nbG9iYWxUaW1lbGluZSwgdGwsIDApO1xuXG4gICAgcmV0dXJuIHRsO1xuICB9LFxuICB1dGlsczoge1xuICAgIHdyYXA6IHdyYXAsXG4gICAgd3JhcFlveW86IHdyYXBZb3lvLFxuICAgIGRpc3RyaWJ1dGU6IGRpc3RyaWJ1dGUsXG4gICAgcmFuZG9tOiByYW5kb20sXG4gICAgc25hcDogc25hcCxcbiAgICBub3JtYWxpemU6IG5vcm1hbGl6ZSxcbiAgICBnZXRVbml0OiBnZXRVbml0LFxuICAgIGNsYW1wOiBjbGFtcCxcbiAgICBzcGxpdENvbG9yOiBzcGxpdENvbG9yLFxuICAgIHRvQXJyYXk6IHRvQXJyYXksXG4gICAgc2VsZWN0b3I6IHNlbGVjdG9yLFxuICAgIG1hcFJhbmdlOiBtYXBSYW5nZSxcbiAgICBwaXBlOiBwaXBlLFxuICAgIHVuaXRpemU6IHVuaXRpemUsXG4gICAgaW50ZXJwb2xhdGU6IGludGVycG9sYXRlLFxuICAgIHNodWZmbGU6IHNodWZmbGVcbiAgfSxcbiAgaW5zdGFsbDogX2luc3RhbGwsXG4gIGVmZmVjdHM6IF9lZmZlY3RzLFxuICB0aWNrZXI6IF90aWNrZXIsXG4gIHVwZGF0ZVJvb3Q6IFRpbWVsaW5lLnVwZGF0ZVJvb3QsXG4gIHBsdWdpbnM6IF9wbHVnaW5zLFxuICBnbG9iYWxUaW1lbGluZTogX2dsb2JhbFRpbWVsaW5lLFxuICBjb3JlOiB7XG4gICAgUHJvcFR3ZWVuOiBQcm9wVHdlZW4sXG4gICAgZ2xvYmFsczogX2FkZEdsb2JhbCxcbiAgICBUd2VlbjogVHdlZW4sXG4gICAgVGltZWxpbmU6IFRpbWVsaW5lLFxuICAgIEFuaW1hdGlvbjogQW5pbWF0aW9uLFxuICAgIGdldENhY2hlOiBfZ2V0Q2FjaGUsXG4gICAgX3JlbW92ZUxpbmtlZExpc3RJdGVtOiBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0sXG4gICAgc3VwcHJlc3NPdmVyd3JpdGVzOiBmdW5jdGlvbiBzdXBwcmVzc092ZXJ3cml0ZXModmFsdWUpIHtcbiAgICAgIHJldHVybiBfc3VwcHJlc3NPdmVyd3JpdGVzID0gdmFsdWU7XG4gICAgfVxuICB9XG59O1xuXG5fZm9yRWFjaE5hbWUoXCJ0byxmcm9tLGZyb21UbyxkZWxheWVkQ2FsbCxzZXQsa2lsbFR3ZWVuc09mXCIsIGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBfZ3NhcFtuYW1lXSA9IFR3ZWVuW25hbWVdO1xufSk7XG5cbl90aWNrZXIuYWRkKFRpbWVsaW5lLnVwZGF0ZVJvb3QpO1xuXG5fcXVpY2tUd2VlbiA9IF9nc2FwLnRvKHt9LCB7XG4gIGR1cmF0aW9uOiAwXG59KTsgLy8gLS0tLSBFWFRSQSBQTFVHSU5TIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnZhciBfZ2V0UGx1Z2luUHJvcFR3ZWVuID0gZnVuY3Rpb24gX2dldFBsdWdpblByb3BUd2VlbihwbHVnaW4sIHByb3ApIHtcbiAgdmFyIHB0ID0gcGx1Z2luLl9wdDtcblxuICB3aGlsZSAocHQgJiYgcHQucCAhPT0gcHJvcCAmJiBwdC5vcCAhPT0gcHJvcCAmJiBwdC5mcCAhPT0gcHJvcCkge1xuICAgIHB0ID0gcHQuX25leHQ7XG4gIH1cblxuICByZXR1cm4gcHQ7XG59LFxuICAgIF9hZGRNb2RpZmllcnMgPSBmdW5jdGlvbiBfYWRkTW9kaWZpZXJzKHR3ZWVuLCBtb2RpZmllcnMpIHtcbiAgdmFyIHRhcmdldHMgPSB0d2Vlbi5fdGFyZ2V0cyxcbiAgICAgIHAsXG4gICAgICBpLFxuICAgICAgcHQ7XG5cbiAgZm9yIChwIGluIG1vZGlmaWVycykge1xuICAgIGkgPSB0YXJnZXRzLmxlbmd0aDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHB0ID0gdHdlZW4uX3B0TG9va3VwW2ldW3BdO1xuXG4gICAgICBpZiAocHQgJiYgKHB0ID0gcHQuZCkpIHtcbiAgICAgICAgaWYgKHB0Ll9wdCkge1xuICAgICAgICAgIC8vIGlzIGEgcGx1Z2luXG4gICAgICAgICAgcHQgPSBfZ2V0UGx1Z2luUHJvcFR3ZWVuKHB0LCBwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB0ICYmIHB0Lm1vZGlmaWVyICYmIHB0Lm1vZGlmaWVyKG1vZGlmaWVyc1twXSwgdHdlZW4sIHRhcmdldHNbaV0sIHApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSxcbiAgICBfYnVpbGRNb2RpZmllclBsdWdpbiA9IGZ1bmN0aW9uIF9idWlsZE1vZGlmaWVyUGx1Z2luKG5hbWUsIG1vZGlmaWVyKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICByYXdWYXJzOiAxLFxuICAgIC8vZG9uJ3QgcHJlLXByb2Nlc3MgZnVuY3Rpb24tYmFzZWQgdmFsdWVzIG9yIFwicmFuZG9tKClcIiBzdHJpbmdzLlxuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQodGFyZ2V0LCB2YXJzLCB0d2Vlbikge1xuICAgICAgdHdlZW4uX29uSW5pdCA9IGZ1bmN0aW9uICh0d2Vlbikge1xuICAgICAgICB2YXIgdGVtcCwgcDtcblxuICAgICAgICBpZiAoX2lzU3RyaW5nKHZhcnMpKSB7XG4gICAgICAgICAgdGVtcCA9IHt9O1xuXG4gICAgICAgICAgX2ZvckVhY2hOYW1lKHZhcnMsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGVtcFtuYW1lXSA9IDE7XG4gICAgICAgICAgfSk7IC8vaWYgdGhlIHVzZXIgcGFzc2VzIGluIGEgY29tbWEtZGVsaW1pdGVkIGxpc3Qgb2YgcHJvcGVydHkgbmFtZXMgdG8gcm91bmRQcm9wcywgbGlrZSBcIngseVwiLCB3ZSByb3VuZCB0byB3aG9sZSBudW1iZXJzLlxuXG5cbiAgICAgICAgICB2YXJzID0gdGVtcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb2RpZmllcikge1xuICAgICAgICAgIHRlbXAgPSB7fTtcblxuICAgICAgICAgIGZvciAocCBpbiB2YXJzKSB7XG4gICAgICAgICAgICB0ZW1wW3BdID0gbW9kaWZpZXIodmFyc1twXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFycyA9IHRlbXA7XG4gICAgICAgIH1cblxuICAgICAgICBfYWRkTW9kaWZpZXJzKHR3ZWVuLCB2YXJzKTtcbiAgICAgIH07XG4gICAgfVxuICB9O1xufTsgLy9yZWdpc3RlciBjb3JlIHBsdWdpbnNcblxuXG5leHBvcnQgdmFyIGdzYXAgPSBfZ3NhcC5yZWdpc3RlclBsdWdpbih7XG4gIG5hbWU6IFwiYXR0clwiLFxuICBpbml0OiBmdW5jdGlvbiBpbml0KHRhcmdldCwgdmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXRzKSB7XG4gICAgdmFyIHAsIHB0O1xuXG4gICAgZm9yIChwIGluIHZhcnMpIHtcbiAgICAgIHB0ID0gdGhpcy5hZGQodGFyZ2V0LCBcInNldEF0dHJpYnV0ZVwiLCAodGFyZ2V0LmdldEF0dHJpYnV0ZShwKSB8fCAwKSArIFwiXCIsIHZhcnNbcF0sIGluZGV4LCB0YXJnZXRzLCAwLCAwLCBwKTtcbiAgICAgIHB0ICYmIChwdC5vcCA9IHApO1xuXG4gICAgICB0aGlzLl9wcm9wcy5wdXNoKHApO1xuICAgIH1cbiAgfVxufSwge1xuICBuYW1lOiBcImVuZEFycmF5XCIsXG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQodGFyZ2V0LCB2YWx1ZSkge1xuICAgIHZhciBpID0gdmFsdWUubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdGhpcy5hZGQodGFyZ2V0LCBpLCB0YXJnZXRbaV0gfHwgMCwgdmFsdWVbaV0pO1xuICAgIH1cbiAgfVxufSwgX2J1aWxkTW9kaWZpZXJQbHVnaW4oXCJyb3VuZFByb3BzXCIsIF9yb3VuZE1vZGlmaWVyKSwgX2J1aWxkTW9kaWZpZXJQbHVnaW4oXCJtb2RpZmllcnNcIiksIF9idWlsZE1vZGlmaWVyUGx1Z2luKFwic25hcFwiLCBzbmFwKSkgfHwgX2dzYXA7IC8vdG8gcHJldmVudCB0aGUgY29yZSBwbHVnaW5zIGZyb20gYmVpbmcgZHJvcHBlZCB2aWEgYWdncmVzc2l2ZSB0cmVlIHNoYWtpbmcsIHdlIG11c3QgaW5jbHVkZSB0aGVtIGluIHRoZSB2YXJpYWJsZSBkZWNsYXJhdGlvbiBpbiB0aGlzIHdheS5cblxuVHdlZW4udmVyc2lvbiA9IFRpbWVsaW5lLnZlcnNpb24gPSBnc2FwLnZlcnNpb24gPSBcIjMuMTAuNFwiO1xuX2NvcmVSZWFkeSA9IDE7XG5fd2luZG93RXhpc3RzKCkgJiYgX3dha2UoKTtcbnZhciBQb3dlcjAgPSBfZWFzZU1hcC5Qb3dlcjAsXG4gICAgUG93ZXIxID0gX2Vhc2VNYXAuUG93ZXIxLFxuICAgIFBvd2VyMiA9IF9lYXNlTWFwLlBvd2VyMixcbiAgICBQb3dlcjMgPSBfZWFzZU1hcC5Qb3dlcjMsXG4gICAgUG93ZXI0ID0gX2Vhc2VNYXAuUG93ZXI0LFxuICAgIExpbmVhciA9IF9lYXNlTWFwLkxpbmVhcixcbiAgICBRdWFkID0gX2Vhc2VNYXAuUXVhZCxcbiAgICBDdWJpYyA9IF9lYXNlTWFwLkN1YmljLFxuICAgIFF1YXJ0ID0gX2Vhc2VNYXAuUXVhcnQsXG4gICAgUXVpbnQgPSBfZWFzZU1hcC5RdWludCxcbiAgICBTdHJvbmcgPSBfZWFzZU1hcC5TdHJvbmcsXG4gICAgRWxhc3RpYyA9IF9lYXNlTWFwLkVsYXN0aWMsXG4gICAgQmFjayA9IF9lYXNlTWFwLkJhY2ssXG4gICAgU3RlcHBlZEVhc2UgPSBfZWFzZU1hcC5TdGVwcGVkRWFzZSxcbiAgICBCb3VuY2UgPSBfZWFzZU1hcC5Cb3VuY2UsXG4gICAgU2luZSA9IF9lYXNlTWFwLlNpbmUsXG4gICAgRXhwbyA9IF9lYXNlTWFwLkV4cG8sXG4gICAgQ2lyYyA9IF9lYXNlTWFwLkNpcmM7XG5leHBvcnQgeyBQb3dlcjAsIFBvd2VyMSwgUG93ZXIyLCBQb3dlcjMsIFBvd2VyNCwgTGluZWFyLCBRdWFkLCBDdWJpYywgUXVhcnQsIFF1aW50LCBTdHJvbmcsIEVsYXN0aWMsIEJhY2ssIFN0ZXBwZWRFYXNlLCBCb3VuY2UsIFNpbmUsIEV4cG8sIENpcmMgfTtcbmV4cG9ydCB7IFR3ZWVuIGFzIFR3ZWVuTWF4LCBUd2VlbiBhcyBUd2VlbkxpdGUsIFRpbWVsaW5lIGFzIFRpbWVsaW5lTWF4LCBUaW1lbGluZSBhcyBUaW1lbGluZUxpdGUsIGdzYXAgYXMgZGVmYXVsdCwgd3JhcCwgd3JhcFlveW8sIGRpc3RyaWJ1dGUsIHJhbmRvbSwgc25hcCwgbm9ybWFsaXplLCBnZXRVbml0LCBjbGFtcCwgc3BsaXRDb2xvciwgdG9BcnJheSwgc2VsZWN0b3IsIG1hcFJhbmdlLCBwaXBlLCB1bml0aXplLCBpbnRlcnBvbGF0ZSwgc2h1ZmZsZSB9OyAvL2V4cG9ydCBzb21lIGludGVybmFsIG1ldGhvZHMvb3JvamVjdHMgZm9yIHVzZSBpbiBDU1NQbHVnaW4gc28gdGhhdCB3ZSBjYW4gZXh0ZXJuYWxpemUgdGhhdCBmaWxlIGFuZCBhbGxvdyBjdXN0b20gYnVpbGRzIHRoYXQgZXhjbHVkZSBpdC5cblxuZXhwb3J0IHsgX2dldFByb3BlcnR5LCBfbnVtRXhwLCBfbnVtV2l0aFVuaXRFeHAsIF9pc1N0cmluZywgX2lzVW5kZWZpbmVkLCBfcmVuZGVyQ29tcGxleFN0cmluZywgX3JlbEV4cCwgX3NldERlZmF1bHRzLCBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0sIF9mb3JFYWNoTmFtZSwgX3NvcnRQcm9wVHdlZW5zQnlQcmlvcml0eSwgX2NvbG9yU3RyaW5nRmlsdGVyLCBfcmVwbGFjZVJhbmRvbSwgX2NoZWNrUGx1Z2luLCBfcGx1Z2lucywgX3RpY2tlciwgX2NvbmZpZywgX3JvdW5kTW9kaWZpZXIsIF9yb3VuZCwgX21pc3NpbmdQbHVnaW4sIF9nZXRTZXR0ZXIsIF9nZXRDYWNoZSwgX2NvbG9yRXhwLCBfcGFyc2VSZWxhdGl2ZSB9OyIsImltcG9ydCB7IGdzYXAsIFBvd2VyMCwgUG93ZXIxLCBQb3dlcjIsIFBvd2VyMywgUG93ZXI0LCBMaW5lYXIsIFF1YWQsIEN1YmljLCBRdWFydCwgUXVpbnQsIFN0cm9uZywgRWxhc3RpYywgQmFjaywgU3RlcHBlZEVhc2UsIEJvdW5jZSwgU2luZSwgRXhwbywgQ2lyYywgVHdlZW5MaXRlLCBUaW1lbGluZUxpdGUsIFRpbWVsaW5lTWF4IH0gZnJvbSBcIi4vZ3NhcC1jb3JlLmpzXCI7XG5pbXBvcnQgeyBDU1NQbHVnaW4gfSBmcm9tIFwiLi9DU1NQbHVnaW4uanNcIjtcbnZhciBnc2FwV2l0aENTUyA9IGdzYXAucmVnaXN0ZXJQbHVnaW4oQ1NTUGx1Z2luKSB8fCBnc2FwLFxuICAgIC8vIHRvIHByb3RlY3QgZnJvbSB0cmVlIHNoYWtpbmdcblR3ZWVuTWF4V2l0aENTUyA9IGdzYXBXaXRoQ1NTLmNvcmUuVHdlZW47XG5leHBvcnQgeyBnc2FwV2l0aENTUyBhcyBnc2FwLCBnc2FwV2l0aENTUyBhcyBkZWZhdWx0LCBDU1NQbHVnaW4sIFR3ZWVuTWF4V2l0aENTUyBhcyBUd2Vlbk1heCwgVHdlZW5MaXRlLCBUaW1lbGluZU1heCwgVGltZWxpbmVMaXRlLCBQb3dlcjAsIFBvd2VyMSwgUG93ZXIyLCBQb3dlcjMsIFBvd2VyNCwgTGluZWFyLCBRdWFkLCBDdWJpYywgUXVhcnQsIFF1aW50LCBTdHJvbmcsIEVsYXN0aWMsIEJhY2ssIFN0ZXBwZWRFYXNlLCBCb3VuY2UsIFNpbmUsIEV4cG8sIENpcmMgfTsiLCIvKiFcbiAqIG1hdHJpeCAzLjEwLjRcbiAqIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbVxuICpcbiAqIENvcHlyaWdodCAyMDA4LTIwMjIsIEdyZWVuU29jay4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFN1YmplY3QgdG8gdGhlIHRlcm1zIGF0IGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9zdGFuZGFyZC1saWNlbnNlIG9yIGZvclxuICogQ2x1YiBHcmVlblNvY2sgbWVtYmVycywgdGhlIGFncmVlbWVudCBpc3N1ZWQgd2l0aCB0aGF0IG1lbWJlcnNoaXAuXG4gKiBAYXV0aG9yOiBKYWNrIERveWxlLCBqYWNrQGdyZWVuc29jay5jb21cbiovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG52YXIgX2RvYyxcbiAgICBfd2luLFxuICAgIF9kb2NFbGVtZW50LFxuICAgIF9ib2R5LFxuICAgIF9kaXZDb250YWluZXIsXG4gICAgX3N2Z0NvbnRhaW5lcixcbiAgICBfaWRlbnRpdHlNYXRyaXgsXG4gICAgX2dFbCxcbiAgICBfdHJhbnNmb3JtUHJvcCA9IFwidHJhbnNmb3JtXCIsXG4gICAgX3RyYW5zZm9ybU9yaWdpblByb3AgPSBfdHJhbnNmb3JtUHJvcCArIFwiT3JpZ2luXCIsXG4gICAgX2hhc09mZnNldEJ1ZyxcbiAgICBfc2V0RG9jID0gZnVuY3Rpb24gX3NldERvYyhlbGVtZW50KSB7XG4gIHZhciBkb2MgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQgfHwgZWxlbWVudDtcblxuICBpZiAoIShfdHJhbnNmb3JtUHJvcCBpbiBlbGVtZW50LnN0eWxlKSAmJiBcIm1zVHJhbnNmb3JtXCIgaW4gZWxlbWVudC5zdHlsZSkge1xuICAgIC8vdG8gaW1wcm92ZSBjb21wYXRpYmlsaXR5IHdpdGggb2xkIE1pY3Jvc29mdCBicm93c2Vyc1xuICAgIF90cmFuc2Zvcm1Qcm9wID0gXCJtc1RyYW5zZm9ybVwiO1xuICAgIF90cmFuc2Zvcm1PcmlnaW5Qcm9wID0gX3RyYW5zZm9ybVByb3AgKyBcIk9yaWdpblwiO1xuICB9XG5cbiAgd2hpbGUgKGRvYy5wYXJlbnROb2RlICYmIChkb2MgPSBkb2MucGFyZW50Tm9kZSkpIHt9XG5cbiAgX3dpbiA9IHdpbmRvdztcbiAgX2lkZW50aXR5TWF0cml4ID0gbmV3IE1hdHJpeDJEKCk7XG5cbiAgaWYgKGRvYykge1xuICAgIF9kb2MgPSBkb2M7XG4gICAgX2RvY0VsZW1lbnQgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgIF9ib2R5ID0gZG9jLmJvZHk7XG4gICAgX2dFbCA9IF9kb2MuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJnXCIpOyAvLyBwcmV2ZW50IGFueSBleGlzdGluZyBDU1MgZnJvbSB0cmFuc2Zvcm1pbmcgaXRcblxuICAgIF9nRWwuc3R5bGUudHJhbnNmb3JtID0gXCJub25lXCI7IC8vIG5vdyB0ZXN0IGZvciB0aGUgb2Zmc2V0IHJlcG9ydGluZyBidWcuIFVzZSBmZWF0dXJlIGRldGVjdGlvbiBpbnN0ZWFkIG9mIGJyb3dzZXIgc25pZmZpbmcgdG8gbWFrZSB0aGluZ3MgbW9yZSBidWxsZXRwcm9vZiBhbmQgZnV0dXJlLXByb29mLiBIb3BlZnVsbHkgU2FmYXJpIHdpbGwgZml4IHRoZWlyIGJ1ZyBzb29uIGJ1dCBpdCdzIDIwMjAgYW5kIGl0J3Mgc3RpbGwgbm90IGZpeGVkLlxuXG4gICAgdmFyIGQxID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgICAgIGQyID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBfYm9keS5hcHBlbmRDaGlsZChkMSk7XG5cbiAgICBkMS5hcHBlbmRDaGlsZChkMik7XG4gICAgZDEuc3R5bGUucG9zaXRpb24gPSBcInN0YXRpY1wiO1xuICAgIGQxLnN0eWxlW190cmFuc2Zvcm1Qcm9wXSA9IFwidHJhbnNsYXRlM2QoMCwwLDFweClcIjtcbiAgICBfaGFzT2Zmc2V0QnVnID0gZDIub2Zmc2V0UGFyZW50ICE9PSBkMTtcblxuICAgIF9ib2R5LnJlbW92ZUNoaWxkKGQxKTtcbiAgfVxuXG4gIHJldHVybiBkb2M7XG59LFxuICAgIF9mb3JjZU5vblplcm9TY2FsZSA9IGZ1bmN0aW9uIF9mb3JjZU5vblplcm9TY2FsZShlKSB7XG4gIC8vIHdhbGtzIHVwIHRoZSBlbGVtZW50J3MgYW5jZXN0b3JzIGFuZCBmaW5kcyBhbnkgdGhhdCBoYWQgdGhlaXIgc2NhbGUgc2V0IHRvIDAgdmlhIEdTQVAsIGFuZCBjaGFuZ2VzIHRoZW0gdG8gMC4wMDAxIHRvIGVuc3VyZSB0aGF0IG1lYXN1cmVtZW50cyB3b3JrLiBGaXJlZm94IGhhcyBhIGJ1ZyB0aGF0IGNhdXNlcyBpdCB0byBpbmNvcnJlY3RseSByZXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgd2hlbiBzY2FsZSBpcyAwLlxuICB2YXIgYSwgY2FjaGU7XG5cbiAgd2hpbGUgKGUgJiYgZSAhPT0gX2JvZHkpIHtcbiAgICBjYWNoZSA9IGUuX2dzYXA7XG4gICAgY2FjaGUgJiYgY2FjaGUudW5jYWNoZSAmJiBjYWNoZS5nZXQoZSwgXCJ4XCIpOyAvLyBmb3JjZSByZS1wYXJzaW5nIG9mIHRyYW5zZm9ybXMgaWYgbmVjZXNzYXJ5XG5cbiAgICBpZiAoY2FjaGUgJiYgIWNhY2hlLnNjYWxlWCAmJiAhY2FjaGUuc2NhbGVZICYmIGNhY2hlLnJlbmRlclRyYW5zZm9ybSkge1xuICAgICAgY2FjaGUuc2NhbGVYID0gY2FjaGUuc2NhbGVZID0gMWUtNDtcbiAgICAgIGNhY2hlLnJlbmRlclRyYW5zZm9ybSgxLCBjYWNoZSk7XG4gICAgICBhID8gYS5wdXNoKGNhY2hlKSA6IGEgPSBbY2FjaGVdO1xuICAgIH1cblxuICAgIGUgPSBlLnBhcmVudE5vZGU7XG4gIH1cblxuICByZXR1cm4gYTtcbn0sXG4gICAgLy8gcG9zc2libGUgZnV0dXJlIGFkZGl0aW9uOiBwYXNzIGFuIGVsZW1lbnQgdG8gX2ZvcmNlRGlzcGxheSgpIGFuZCBpdCdsbCB3YWxrIHVwIGFsbCBpdHMgYW5jZXN0b3JzIGFuZCBtYWtlIHN1cmUgYW55dGhpbmcgd2l0aCBkaXNwbGF5OiBub25lIGlzIHNldCB0byBkaXNwbGF5OiBibG9jaywgYW5kIGlmIHRoZXJlJ3Mgbm8gcGFyZW50Tm9kZSwgaXQnbGwgYWRkIGl0IHRvIHRoZSBib2R5LiBJdCByZXR1cm5zIGFuIEFycmF5IHRoYXQgeW91IGNhbiB0aGVuIGZlZWQgdG8gX3JldmVydERpc3BsYXkoKSB0byBoYXZlIGl0IHJldmVydCBhbGwgdGhlIGNoYW5nZXMgaXQgbWFkZS5cbi8vIF9mb3JjZURpc3BsYXkgPSBlID0+IHtcbi8vIFx0bGV0IGEgPSBbXSxcbi8vIFx0XHRwYXJlbnQ7XG4vLyBcdHdoaWxlIChlICYmIGUgIT09IF9ib2R5KSB7XG4vLyBcdFx0cGFyZW50ID0gZS5wYXJlbnROb2RlO1xuLy8gXHRcdChfd2luLmdldENvbXB1dGVkU3R5bGUoZSkuZGlzcGxheSA9PT0gXCJub25lXCIgfHwgIXBhcmVudCkgJiYgYS5wdXNoKGUsIGUuc3R5bGUuZGlzcGxheSwgcGFyZW50KSAmJiAoZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiKTtcbi8vIFx0XHRwYXJlbnQgfHwgX2JvZHkuYXBwZW5kQ2hpbGQoZSk7XG4vLyBcdFx0ZSA9IHBhcmVudDtcbi8vIFx0fVxuLy8gXHRyZXR1cm4gYTtcbi8vIH0sXG4vLyBfcmV2ZXJ0RGlzcGxheSA9IGEgPT4ge1xuLy8gXHRmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKz0zKSB7XG4vLyBcdFx0YVtpKzFdID8gKGFbaV0uc3R5bGUuZGlzcGxheSA9IGFbaSsxXSkgOiBhW2ldLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiZGlzcGxheVwiKTtcbi8vIFx0XHRhW2krMl0gfHwgYVtpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGFbaV0pO1xuLy8gXHR9XG4vLyB9LFxuX3N2Z1RlbXBzID0gW10sXG4gICAgLy93ZSBjcmVhdGUgMyBlbGVtZW50cyBmb3IgU1ZHLCBhbmQgMyBmb3Igb3RoZXIgRE9NIGVsZW1lbnRzIGFuZCBjYWNoZSB0aGVtIGZvciBwZXJmb3JtYW5jZSByZWFzb25zLiBUaGV5IGdldCBuZXN0ZWQgaW4gX2RpdkNvbnRhaW5lciBhbmQgX3N2Z0NvbnRhaW5lciBzbyB0aGF0IGp1c3Qgb25lIGVsZW1lbnQgaXMgYWRkZWQgdG8gdGhlIERPTSBvbiBlYWNoIHN1Y2Nlc3NpdmUgYXR0ZW1wdC4gQWdhaW4sIHBlcmZvcm1hbmNlIGlzIGtleS5cbl9kaXZUZW1wcyA9IFtdLFxuICAgIF9nZXREb2NTY3JvbGxUb3AgPSBmdW5jdGlvbiBfZ2V0RG9jU2Nyb2xsVG9wKCkge1xuICByZXR1cm4gX3dpbi5wYWdlWU9mZnNldCB8fCBfZG9jLnNjcm9sbFRvcCB8fCBfZG9jRWxlbWVudC5zY3JvbGxUb3AgfHwgX2JvZHkuc2Nyb2xsVG9wIHx8IDA7XG59LFxuICAgIF9nZXREb2NTY3JvbGxMZWZ0ID0gZnVuY3Rpb24gX2dldERvY1Njcm9sbExlZnQoKSB7XG4gIHJldHVybiBfd2luLnBhZ2VYT2Zmc2V0IHx8IF9kb2Muc2Nyb2xsTGVmdCB8fCBfZG9jRWxlbWVudC5zY3JvbGxMZWZ0IHx8IF9ib2R5LnNjcm9sbExlZnQgfHwgMDtcbn0sXG4gICAgX3N2Z093bmVyID0gZnVuY3Rpb24gX3N2Z093bmVyKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQub3duZXJTVkdFbGVtZW50IHx8ICgoZWxlbWVudC50YWdOYW1lICsgXCJcIikudG9Mb3dlckNhc2UoKSA9PT0gXCJzdmdcIiA/IGVsZW1lbnQgOiBudWxsKTtcbn0sXG4gICAgX2lzRml4ZWQgPSBmdW5jdGlvbiBfaXNGaXhlZChlbGVtZW50KSB7XG4gIGlmIChfd2luLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gPT09IFwiZml4ZWRcIikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcblxuICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Lm5vZGVUeXBlID09PSAxKSB7XG4gICAgLy8gYXZvaWQgZG9jdW1lbnQgZnJhZ21lbnRzIHdoaWNoIHdpbGwgdGhyb3cgYW4gZXJyb3IuXG4gICAgcmV0dXJuIF9pc0ZpeGVkKGVsZW1lbnQpO1xuICB9XG59LFxuICAgIF9jcmVhdGVTaWJsaW5nID0gZnVuY3Rpb24gX2NyZWF0ZVNpYmxpbmcoZWxlbWVudCwgaSkge1xuICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmIChfZG9jIHx8IF9zZXREb2MoZWxlbWVudCkpKSB7XG4gICAgdmFyIHN2ZyA9IF9zdmdPd25lcihlbGVtZW50KSxcbiAgICAgICAgbnMgPSBzdmcgPyBzdmcuZ2V0QXR0cmlidXRlKFwieG1sbnNcIikgfHwgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIDogXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIsXG4gICAgICAgIHR5cGUgPSBzdmcgPyBpID8gXCJyZWN0XCIgOiBcImdcIiA6IFwiZGl2XCIsXG4gICAgICAgIHggPSBpICE9PSAyID8gMCA6IDEwMCxcbiAgICAgICAgeSA9IGkgPT09IDMgPyAxMDAgOiAwLFxuICAgICAgICBjc3MgPSBcInBvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6YmxvY2s7cG9pbnRlci1ldmVudHM6bm9uZTttYXJnaW46MDtwYWRkaW5nOjA7XCIsXG4gICAgICAgIGUgPSBfZG9jLmNyZWF0ZUVsZW1lbnROUyA/IF9kb2MuY3JlYXRlRWxlbWVudE5TKG5zLnJlcGxhY2UoL15odHRwcy8sIFwiaHR0cFwiKSwgdHlwZSkgOiBfZG9jLmNyZWF0ZUVsZW1lbnQodHlwZSk7XG5cbiAgICBpZiAoaSkge1xuICAgICAgaWYgKCFzdmcpIHtcbiAgICAgICAgaWYgKCFfZGl2Q29udGFpbmVyKSB7XG4gICAgICAgICAgX2RpdkNvbnRhaW5lciA9IF9jcmVhdGVTaWJsaW5nKGVsZW1lbnQpO1xuICAgICAgICAgIF9kaXZDb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGNzcztcbiAgICAgICAgfVxuXG4gICAgICAgIGUuc3R5bGUuY3NzVGV4dCA9IGNzcyArIFwid2lkdGg6MC4xcHg7aGVpZ2h0OjAuMXB4O3RvcDpcIiArIHkgKyBcInB4O2xlZnQ6XCIgKyB4ICsgXCJweFwiO1xuXG4gICAgICAgIF9kaXZDb250YWluZXIuYXBwZW5kQ2hpbGQoZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfc3ZnQ29udGFpbmVyIHx8IChfc3ZnQ29udGFpbmVyID0gX2NyZWF0ZVNpYmxpbmcoZWxlbWVudCkpO1xuICAgICAgICBlLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIDAuMDEpO1xuICAgICAgICBlLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCAwLjAxKTtcbiAgICAgICAgZS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsXCIgKyB5ICsgXCIpXCIpO1xuXG4gICAgICAgIF9zdmdDb250YWluZXIuYXBwZW5kQ2hpbGQoZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGU7XG4gIH1cblxuICB0aHJvdyBcIk5lZWQgZG9jdW1lbnQgYW5kIHBhcmVudC5cIjtcbn0sXG4gICAgX2NvbnNvbGlkYXRlID0gZnVuY3Rpb24gX2NvbnNvbGlkYXRlKG0pIHtcbiAgLy8gcmVwbGFjZXMgU1ZHVHJhbnNmb3JtTGlzdC5jb25zb2xpZGF0ZSgpIGJlY2F1c2UgYSBidWcgaW4gRmlyZWZveCBjYXVzZXMgaXQgdG8gYnJlYWsgcG9pbnRlciBldmVudHMuIFNlZSBodHRwczovL2dyZWVuc29jay5jb20vZm9ydW1zL3RvcGljLzIzMjQ4LXRvdWNoLWlzLW5vdC13b3JraW5nLW9uLWRyYWdnYWJsZS1pbi1maXJlZm94LXdpbmRvd3MtdjMyNC8/dGFiPWNvbW1lbnRzI2NvbW1lbnQtMTA5ODAwXG4gIHZhciBjID0gbmV3IE1hdHJpeDJEKCksXG4gICAgICBpID0gMDtcblxuICBmb3IgKDsgaSA8IG0ubnVtYmVyT2ZJdGVtczsgaSsrKSB7XG4gICAgYy5tdWx0aXBseShtLmdldEl0ZW0oaSkubWF0cml4KTtcbiAgfVxuXG4gIHJldHVybiBjO1xufSxcbiAgICBfZ2V0Q1RNID0gZnVuY3Rpb24gX2dldENUTShzdmcpIHtcbiAgdmFyIG0gPSBzdmcuZ2V0Q1RNKCksXG4gICAgICB0cmFuc2Zvcm07XG5cbiAgaWYgKCFtKSB7XG4gICAgLy8gRmlyZWZveCByZXR1cm5zIG51bGwgZm9yIGdldENUTSgpIG9uIHJvb3QgPHN2Zz4gZWxlbWVudHMsIHNvIHRoaXMgaXMgYSB3b3JrYXJvdW5kIHVzaW5nIGEgPGc+IHRoYXQgd2UgdGVtcG9yYXJpbHkgYXBwZW5kLlxuICAgIHRyYW5zZm9ybSA9IHN2Zy5zdHlsZVtfdHJhbnNmb3JtUHJvcF07XG4gICAgc3ZnLnN0eWxlW190cmFuc2Zvcm1Qcm9wXSA9IFwibm9uZVwiOyAvLyBhIGJ1ZyBpbiBGaXJlZm94IGNhdXNlcyBjc3MgdHJhbnNmb3JtcyB0byBjb250YW1pbmF0ZSB0aGUgZ2V0Q1RNKClcblxuICAgIHN2Zy5hcHBlbmRDaGlsZChfZ0VsKTtcbiAgICBtID0gX2dFbC5nZXRDVE0oKTtcbiAgICBzdmcucmVtb3ZlQ2hpbGQoX2dFbCk7XG4gICAgdHJhbnNmb3JtID8gc3ZnLnN0eWxlW190cmFuc2Zvcm1Qcm9wXSA9IHRyYW5zZm9ybSA6IHN2Zy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShfdHJhbnNmb3JtUHJvcC5yZXBsYWNlKC8oW0EtWl0pL2csIFwiLSQxXCIpLnRvTG93ZXJDYXNlKCkpO1xuICB9XG5cbiAgcmV0dXJuIG0gfHwgX2lkZW50aXR5TWF0cml4LmNsb25lKCk7IC8vIEZpcmVmb3ggd2lsbCBzdGlsbCByZXR1cm4gbnVsbCBpZiB0aGUgPHN2Zz4gaGFzIGEgd2lkdGgvaGVpZ2h0IG9mIDAgaW4gdGhlIGJyb3dzZXIuXG59LFxuICAgIF9wbGFjZVNpYmxpbmdzID0gZnVuY3Rpb24gX3BsYWNlU2libGluZ3MoZWxlbWVudCwgYWRqdXN0R09mZnNldCkge1xuICB2YXIgc3ZnID0gX3N2Z093bmVyKGVsZW1lbnQpLFxuICAgICAgaXNSb290U1ZHID0gZWxlbWVudCA9PT0gc3ZnLFxuICAgICAgc2libGluZ3MgPSBzdmcgPyBfc3ZnVGVtcHMgOiBfZGl2VGVtcHMsXG4gICAgICBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICBjb250YWluZXIsXG4gICAgICBtLFxuICAgICAgYixcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgY3M7XG5cbiAgaWYgKGVsZW1lbnQgPT09IF93aW4pIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHNpYmxpbmdzLmxlbmd0aCB8fCBzaWJsaW5ncy5wdXNoKF9jcmVhdGVTaWJsaW5nKGVsZW1lbnQsIDEpLCBfY3JlYXRlU2libGluZyhlbGVtZW50LCAyKSwgX2NyZWF0ZVNpYmxpbmcoZWxlbWVudCwgMykpO1xuICBjb250YWluZXIgPSBzdmcgPyBfc3ZnQ29udGFpbmVyIDogX2RpdkNvbnRhaW5lcjtcblxuICBpZiAoc3ZnKSB7XG4gICAgaWYgKGlzUm9vdFNWRykge1xuICAgICAgYiA9IF9nZXRDVE0oZWxlbWVudCk7XG4gICAgICB4ID0gLWIuZSAvIGIuYTtcbiAgICAgIHkgPSAtYi5mIC8gYi5kO1xuICAgICAgbSA9IF9pZGVudGl0eU1hdHJpeDtcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQuZ2V0QkJveCkge1xuICAgICAgYiA9IGVsZW1lbnQuZ2V0QkJveCgpO1xuICAgICAgbSA9IGVsZW1lbnQudHJhbnNmb3JtID8gZWxlbWVudC50cmFuc2Zvcm0uYmFzZVZhbCA6IHt9OyAvLyBJRTExIGRvZXNuJ3QgZm9sbG93IHRoZSBzcGVjLlxuXG4gICAgICBtID0gIW0ubnVtYmVyT2ZJdGVtcyA/IF9pZGVudGl0eU1hdHJpeCA6IG0ubnVtYmVyT2ZJdGVtcyA+IDEgPyBfY29uc29saWRhdGUobSkgOiBtLmdldEl0ZW0oMCkubWF0cml4OyAvLyBkb24ndCBjYWxsIG0uY29uc29saWRhdGUoKS5tYXRyaXggYmVjYXVzZSBhIGJ1ZyBpbiBGaXJlZm94IG1ha2VzIHBvaW50ZXIgZXZlbnRzIG5vdCB3b3JrIHdoZW4gY29uc29saWRhdGUoKSBpcyBjYWxsZWQgb24gdGhlIHNhbWUgdGljayBhcyBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKSEgU2VlIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9mb3J1bXMvdG9waWMvMjMyNDgtdG91Y2gtaXMtbm90LXdvcmtpbmctb24tZHJhZ2dhYmxlLWluLWZpcmVmb3gtd2luZG93cy12MzI0Lz90YWI9Y29tbWVudHMjY29tbWVudC0xMDk4MDBcblxuICAgICAgeCA9IG0uYSAqIGIueCArIG0uYyAqIGIueTtcbiAgICAgIHkgPSBtLmIgKiBiLnggKyBtLmQgKiBiLnk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG1heSBiZSBhIDxtYXNrPiB3aGljaCBoYXMgbm8gZ2V0QkJveCgpIHNvIGp1c3QgdXNlIGRlZmF1bHRzIGluc3RlYWQgb2YgdGhyb3dpbmcgZXJyb3JzLlxuICAgICAgbSA9IG5ldyBNYXRyaXgyRCgpO1xuICAgICAgeCA9IHkgPSAwO1xuICAgIH1cblxuICAgIGlmIChhZGp1c3RHT2Zmc2V0ICYmIGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImdcIikge1xuICAgICAgeCA9IHkgPSAwO1xuICAgIH1cblxuICAgIChpc1Jvb3RTVkcgPyBzdmcgOiBwYXJlbnQpLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcIm1hdHJpeChcIiArIG0uYSArIFwiLFwiICsgbS5iICsgXCIsXCIgKyBtLmMgKyBcIixcIiArIG0uZCArIFwiLFwiICsgKG0uZSArIHgpICsgXCIsXCIgKyAobS5mICsgeSkgKyBcIilcIik7XG4gIH0gZWxzZSB7XG4gICAgeCA9IHkgPSAwO1xuXG4gICAgaWYgKF9oYXNPZmZzZXRCdWcpIHtcbiAgICAgIC8vIHNvbWUgYnJvd3NlcnMgKGxpa2UgU2FmYXJpKSBoYXZlIGEgYnVnIHRoYXQgY2F1c2VzIHRoZW0gdG8gbWlzcmVwb3J0IG9mZnNldCB2YWx1ZXMuIFdoZW4gYW4gYW5jZXN0b3IgZWxlbWVudCBoYXMgYSB0cmFuc2Zvcm0gYXBwbGllZCwgaXQncyBzdXBwb3NlZCB0byB0cmVhdCBpdCBhcyBpZiBpdCdzIHBvc2l0aW9uOiByZWxhdGl2ZSAobmV3IGNvbnRleHQpLiBTYWZhcmkgYm90Y2hlcyB0aGlzLCBzbyB3ZSBuZWVkIHRvIGZpbmQgdGhlIGNsb3Nlc3QgYW5jZXN0b3IgKGJldHdlZW4gdGhlIGVsZW1lbnQgYW5kIGl0cyBvZmZzZXRQYXJlbnQpIHRoYXQgaGFzIGEgdHJhbnNmb3JtIGFwcGxpZWQgYW5kIGlmIG9uZSBpcyBmb3VuZCwgZ3JhYiBpdHMgb2Zmc2V0VG9wL0xlZnQgYW5kIHN1YnRyYWN0IHRoZW0gdG8gY29tcGVuc2F0ZS5cbiAgICAgIG0gPSBlbGVtZW50Lm9mZnNldFBhcmVudDtcbiAgICAgIGIgPSBlbGVtZW50O1xuXG4gICAgICB3aGlsZSAoYiAmJiAoYiA9IGIucGFyZW50Tm9kZSkgJiYgYiAhPT0gbSAmJiBiLnBhcmVudE5vZGUpIHtcbiAgICAgICAgaWYgKChfd2luLmdldENvbXB1dGVkU3R5bGUoYilbX3RyYW5zZm9ybVByb3BdICsgXCJcIikubGVuZ3RoID4gNCkge1xuICAgICAgICAgIHggPSBiLm9mZnNldExlZnQ7XG4gICAgICAgICAgeSA9IGIub2Zmc2V0VG9wO1xuICAgICAgICAgIGIgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY3MgPSBfd2luLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG5cbiAgICBpZiAoY3MucG9zaXRpb24gIT09IFwiYWJzb2x1dGVcIiAmJiBjcy5wb3NpdGlvbiAhPT0gXCJmaXhlZFwiKSB7XG4gICAgICBtID0gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG5cbiAgICAgIHdoaWxlIChwYXJlbnQgJiYgcGFyZW50ICE9PSBtKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlJ3MgYW4gYW5jZXN0b3IgZWxlbWVudCBiZXR3ZWVuIHRoZSBlbGVtZW50IGFuZCBpdHMgb2Zmc2V0UGFyZW50IHRoYXQncyBzY3JvbGxlZCwgd2UgbXVzdCBmYWN0b3IgdGhhdCBpbi5cbiAgICAgICAgeCArPSBwYXJlbnQuc2Nyb2xsTGVmdCB8fCAwO1xuICAgICAgICB5ICs9IHBhcmVudC5zY3JvbGxUb3AgfHwgMDtcbiAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYiA9IGNvbnRhaW5lci5zdHlsZTtcbiAgICBiLnRvcCA9IGVsZW1lbnQub2Zmc2V0VG9wIC0geSArIFwicHhcIjtcbiAgICBiLmxlZnQgPSBlbGVtZW50Lm9mZnNldExlZnQgLSB4ICsgXCJweFwiO1xuICAgIGJbX3RyYW5zZm9ybVByb3BdID0gY3NbX3RyYW5zZm9ybVByb3BdO1xuICAgIGJbX3RyYW5zZm9ybU9yaWdpblByb3BdID0gY3NbX3RyYW5zZm9ybU9yaWdpblByb3BdOyAvLyBiLmJvcmRlciA9IG0uYm9yZGVyO1xuICAgIC8vIGIuYm9yZGVyTGVmdFN0eWxlID0gbS5ib3JkZXJMZWZ0U3R5bGU7XG4gICAgLy8gYi5ib3JkZXJUb3BTdHlsZSA9IG0uYm9yZGVyVG9wU3R5bGU7XG4gICAgLy8gYi5ib3JkZXJMZWZ0V2lkdGggPSBtLmJvcmRlckxlZnRXaWR0aDtcbiAgICAvLyBiLmJvcmRlclRvcFdpZHRoID0gbS5ib3JkZXJUb3BXaWR0aDtcblxuICAgIGIucG9zaXRpb24gPSBjcy5wb3NpdGlvbiA9PT0gXCJmaXhlZFwiID8gXCJmaXhlZFwiIDogXCJhYnNvbHV0ZVwiO1xuICAgIGVsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn0sXG4gICAgX3NldE1hdHJpeCA9IGZ1bmN0aW9uIF9zZXRNYXRyaXgobSwgYSwgYiwgYywgZCwgZSwgZikge1xuICBtLmEgPSBhO1xuICBtLmIgPSBiO1xuICBtLmMgPSBjO1xuICBtLmQgPSBkO1xuICBtLmUgPSBlO1xuICBtLmYgPSBmO1xuICByZXR1cm4gbTtcbn07XG5cbmV4cG9ydCB2YXIgTWF0cml4MkQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNYXRyaXgyRChhLCBiLCBjLCBkLCBlLCBmKSB7XG4gICAgaWYgKGEgPT09IHZvaWQgMCkge1xuICAgICAgYSA9IDE7XG4gICAgfVxuXG4gICAgaWYgKGIgPT09IHZvaWQgMCkge1xuICAgICAgYiA9IDA7XG4gICAgfVxuXG4gICAgaWYgKGMgPT09IHZvaWQgMCkge1xuICAgICAgYyA9IDA7XG4gICAgfVxuXG4gICAgaWYgKGQgPT09IHZvaWQgMCkge1xuICAgICAgZCA9IDE7XG4gICAgfVxuXG4gICAgaWYgKGUgPT09IHZvaWQgMCkge1xuICAgICAgZSA9IDA7XG4gICAgfVxuXG4gICAgaWYgKGYgPT09IHZvaWQgMCkge1xuICAgICAgZiA9IDA7XG4gICAgfVxuXG4gICAgX3NldE1hdHJpeCh0aGlzLCBhLCBiLCBjLCBkLCBlLCBmKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBNYXRyaXgyRC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmludmVyc2UgPSBmdW5jdGlvbiBpbnZlcnNlKCkge1xuICAgIHZhciBhID0gdGhpcy5hLFxuICAgICAgICBiID0gdGhpcy5iLFxuICAgICAgICBjID0gdGhpcy5jLFxuICAgICAgICBkID0gdGhpcy5kLFxuICAgICAgICBlID0gdGhpcy5lLFxuICAgICAgICBmID0gdGhpcy5mLFxuICAgICAgICBkZXRlcm1pbmFudCA9IGEgKiBkIC0gYiAqIGMgfHwgMWUtMTA7XG4gICAgcmV0dXJuIF9zZXRNYXRyaXgodGhpcywgZCAvIGRldGVybWluYW50LCAtYiAvIGRldGVybWluYW50LCAtYyAvIGRldGVybWluYW50LCBhIC8gZGV0ZXJtaW5hbnQsIChjICogZiAtIGQgKiBlKSAvIGRldGVybWluYW50LCAtKGEgKiBmIC0gYiAqIGUpIC8gZGV0ZXJtaW5hbnQpO1xuICB9O1xuXG4gIF9wcm90by5tdWx0aXBseSA9IGZ1bmN0aW9uIG11bHRpcGx5KG1hdHJpeCkge1xuICAgIHZhciBhID0gdGhpcy5hLFxuICAgICAgICBiID0gdGhpcy5iLFxuICAgICAgICBjID0gdGhpcy5jLFxuICAgICAgICBkID0gdGhpcy5kLFxuICAgICAgICBlID0gdGhpcy5lLFxuICAgICAgICBmID0gdGhpcy5mLFxuICAgICAgICBhMiA9IG1hdHJpeC5hLFxuICAgICAgICBiMiA9IG1hdHJpeC5jLFxuICAgICAgICBjMiA9IG1hdHJpeC5iLFxuICAgICAgICBkMiA9IG1hdHJpeC5kLFxuICAgICAgICBlMiA9IG1hdHJpeC5lLFxuICAgICAgICBmMiA9IG1hdHJpeC5mO1xuICAgIHJldHVybiBfc2V0TWF0cml4KHRoaXMsIGEyICogYSArIGMyICogYywgYTIgKiBiICsgYzIgKiBkLCBiMiAqIGEgKyBkMiAqIGMsIGIyICogYiArIGQyICogZCwgZSArIGUyICogYSArIGYyICogYywgZiArIGUyICogYiArIGYyICogZCk7XG4gIH07XG5cbiAgX3Byb3RvLmNsb25lID0gZnVuY3Rpb24gY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBNYXRyaXgyRCh0aGlzLmEsIHRoaXMuYiwgdGhpcy5jLCB0aGlzLmQsIHRoaXMuZSwgdGhpcy5mKTtcbiAgfTtcblxuICBfcHJvdG8uZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzKG1hdHJpeCkge1xuICAgIHZhciBhID0gdGhpcy5hLFxuICAgICAgICBiID0gdGhpcy5iLFxuICAgICAgICBjID0gdGhpcy5jLFxuICAgICAgICBkID0gdGhpcy5kLFxuICAgICAgICBlID0gdGhpcy5lLFxuICAgICAgICBmID0gdGhpcy5mO1xuICAgIHJldHVybiBhID09PSBtYXRyaXguYSAmJiBiID09PSBtYXRyaXguYiAmJiBjID09PSBtYXRyaXguYyAmJiBkID09PSBtYXRyaXguZCAmJiBlID09PSBtYXRyaXguZSAmJiBmID09PSBtYXRyaXguZjtcbiAgfTtcblxuICBfcHJvdG8uYXBwbHkgPSBmdW5jdGlvbiBhcHBseShwb2ludCwgZGVjb3JhdGVlKSB7XG4gICAgaWYgKGRlY29yYXRlZSA9PT0gdm9pZCAwKSB7XG4gICAgICBkZWNvcmF0ZWUgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgeCA9IHBvaW50LngsXG4gICAgICAgIHkgPSBwb2ludC55LFxuICAgICAgICBhID0gdGhpcy5hLFxuICAgICAgICBiID0gdGhpcy5iLFxuICAgICAgICBjID0gdGhpcy5jLFxuICAgICAgICBkID0gdGhpcy5kLFxuICAgICAgICBlID0gdGhpcy5lLFxuICAgICAgICBmID0gdGhpcy5mO1xuICAgIGRlY29yYXRlZS54ID0geCAqIGEgKyB5ICogYyArIGUgfHwgMDtcbiAgICBkZWNvcmF0ZWUueSA9IHggKiBiICsgeSAqIGQgKyBmIHx8IDA7XG4gICAgcmV0dXJuIGRlY29yYXRlZTtcbiAgfTtcblxuICByZXR1cm4gTWF0cml4MkQ7XG59KCk7IC8vIEZlZWQgaW4gYW4gZWxlbWVudCBhbmQgaXQnbGwgcmV0dXJuIGEgMkQgbWF0cml4IChvcHRpb25hbGx5IGludmVydGVkKSBzbyB0aGF0IHlvdSBjYW4gdHJhbnNsYXRlIGJldHdlZW4gY29vcmRpbmF0ZSBzcGFjZXMuXG4vLyBJbnZlcnRpbmcgbGV0cyB5b3UgdHJhbnNsYXRlIGEgZ2xvYmFsIHBvaW50IGludG8gYSBsb2NhbCBjb29yZGluYXRlIHNwYWNlLiBObyBpbnZlcnRpbmcgbGV0cyB5b3UgZ28gdGhlIG90aGVyIHdheS5cbi8vIFdlIG5lZWRlZCB0aGlzIHRvIHdvcmsgYXJvdW5kIHZhcmlvdXMgYnJvd3NlciBidWdzLCBsaWtlIEZpcmVmb3ggZG9lc24ndCBhY2N1cmF0ZWx5IHJlcG9ydCBnZXRTY3JlZW5DVE0oKSB3aGVuIHRoZXJlXG4vLyBhcmUgdHJhbnNmb3JtcyBhcHBsaWVkIHRvIGFuY2VzdG9yIGVsZW1lbnRzLlxuLy8gVGhlIG1hdHJpeCBtYXRoIHRvIGNvbnZlcnQgYW55IHgveSBjb29yZGluYXRlIGlzIGFzIGZvbGxvd3MsIHdoaWNoIGlzIHdyYXBwZWQgaW4gYSBjb252ZW5pZW50IGFwcGx5KCkgbWV0aG9kIG9mIE1hdHJpeDJEIGFib3ZlOlxuLy8gICAgIHR4ID0gbS5hICogeCArIG0uYyAqIHkgKyBtLmVcbi8vICAgICB0eSA9IG0uYiAqIHggKyBtLmQgKiB5ICsgbS5mXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRHbG9iYWxNYXRyaXgoZWxlbWVudCwgaW52ZXJzZSwgYWRqdXN0R09mZnNldCwgaW5jbHVkZVNjcm9sbEluRml4ZWQpIHtcbiAgLy8gYWRqdXN0R09mZnNldCBpcyB0eXBpY2FsbHkgdXNlZCBvbmx5IHdoZW4gZ3JhYmJpbmcgYW4gZWxlbWVudCdzIFBBUkVOVCdzIGdsb2JhbCBtYXRyaXgsIGFuZCBpdCBpZ25vcmVzIHRoZSB4L3kgb2Zmc2V0IG9mIGFueSBTVkcgPGc+IGVsZW1lbnRzIGJlY2F1c2UgdGhleSBiZWhhdmUgaW4gYSBzcGVjaWFsIHdheS5cbiAgaWYgKCFlbGVtZW50IHx8ICFlbGVtZW50LnBhcmVudE5vZGUgfHwgKF9kb2MgfHwgX3NldERvYyhlbGVtZW50KSkuZG9jdW1lbnRFbGVtZW50ID09PSBlbGVtZW50KSB7XG4gICAgcmV0dXJuIG5ldyBNYXRyaXgyRCgpO1xuICB9XG5cbiAgdmFyIHplcm9TY2FsZXMgPSBfZm9yY2VOb25aZXJvU2NhbGUoZWxlbWVudCksXG4gICAgICBzdmcgPSBfc3ZnT3duZXIoZWxlbWVudCksXG4gICAgICB0ZW1wcyA9IHN2ZyA/IF9zdmdUZW1wcyA6IF9kaXZUZW1wcyxcbiAgICAgIGNvbnRhaW5lciA9IF9wbGFjZVNpYmxpbmdzKGVsZW1lbnQsIGFkanVzdEdPZmZzZXQpLFxuICAgICAgYjEgPSB0ZW1wc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIGIyID0gdGVtcHNbMV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBiMyA9IHRlbXBzWzJdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgcGFyZW50ID0gY29udGFpbmVyLnBhcmVudE5vZGUsXG4gICAgICBpc0ZpeGVkID0gIWluY2x1ZGVTY3JvbGxJbkZpeGVkICYmIF9pc0ZpeGVkKGVsZW1lbnQpLFxuICAgICAgbSA9IG5ldyBNYXRyaXgyRCgoYjIubGVmdCAtIGIxLmxlZnQpIC8gMTAwLCAoYjIudG9wIC0gYjEudG9wKSAvIDEwMCwgKGIzLmxlZnQgLSBiMS5sZWZ0KSAvIDEwMCwgKGIzLnRvcCAtIGIxLnRvcCkgLyAxMDAsIGIxLmxlZnQgKyAoaXNGaXhlZCA/IDAgOiBfZ2V0RG9jU2Nyb2xsTGVmdCgpKSwgYjEudG9wICsgKGlzRml4ZWQgPyAwIDogX2dldERvY1Njcm9sbFRvcCgpKSk7XG5cbiAgcGFyZW50LnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG5cbiAgaWYgKHplcm9TY2FsZXMpIHtcbiAgICBiMSA9IHplcm9TY2FsZXMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGIxLS0pIHtcbiAgICAgIGIyID0gemVyb1NjYWxlc1tiMV07XG4gICAgICBiMi5zY2FsZVggPSBiMi5zY2FsZVkgPSAwO1xuICAgICAgYjIucmVuZGVyVHJhbnNmb3JtKDEsIGIyKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW52ZXJzZSA/IG0uaW52ZXJzZSgpIDogbTtcbn1cbmV4cG9ydCB7IF9nZXREb2NTY3JvbGxUb3AsIF9nZXREb2NTY3JvbGxMZWZ0LCBfc2V0RG9jLCBfaXNGaXhlZCwgX2dldENUTSB9OyAvLyBleHBvcnQgZnVuY3Rpb24gZ2V0TWF0cml4KGVsZW1lbnQpIHtcbi8vIFx0X2RvYyB8fCBfc2V0RG9jKGVsZW1lbnQpO1xuLy8gXHRsZXQgbSA9IChfd2luLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbX3RyYW5zZm9ybVByb3BdICsgXCJcIikuc3Vic3RyKDcpLm1hdGNoKC9bLS5dKlxcZCtbLmVcXC0rXSpcXGQqW2VcXC1cXCtdKlxcZCovZyksXG4vLyBcdFx0aXMyRCA9IG0gJiYgbS5sZW5ndGggPT09IDY7XG4vLyBcdHJldHVybiAhbSB8fCBtLmxlbmd0aCA8IDYgPyBuZXcgTWF0cml4MkQoKSA6IG5ldyBNYXRyaXgyRCgrbVswXSwgK21bMV0sICttW2lzMkQgPyAyIDogNF0sICttW2lzMkQgPyAzIDogNV0sICttW2lzMkQgPyA0IDogMTJdLCArbVtpczJEID8gNSA6IDEzXSk7XG4vLyB9IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGNsYXNzIEFuYWxvZ3VlQ2xvY2sge1xuICBjb25zdHJ1Y3RvcihlbCwgc21vb3RoID0gZmFsc2UsKSB7XG4gICAgdGhpcy5lbCA9IGVsO1xuICAgIHRoaXMuc21vb3RoID0gc21vb3RoO1xuICAgIHRoaXMuc2Vjb25kc0hhbmQgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy5hbmFsb2d1ZS1jbG9ja19faGFuZC1zZWNvbmRzJyk7XG4gICAgdGhpcy5taW51dGVzSGFuZCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignLmFuYWxvZ3VlLWNsb2NrX19oYW5kLW1pbnV0ZXMnKTtcbiAgICB0aGlzLmhvdXJzSGFuZCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignLmFuYWxvZ3VlLWNsb2NrX19oYW5kLWhvdXJzJyk7XG4gICAgdGhpcy5zZWNvbmRzSGFuZFJvdGF0aW9ucyA9IDA7XG4gICAgdGhpcy50aW1lWm9uZSA9ICdFdXJvcGUvTG9uZG9uJztcbiAgICB0aGlzLmN1cnJlbnRUaW1lID0gdGhpcy5nZXRDdXJyZW50VGltZSgpO1xuXG4gICAgdGhpcy5zZXRIYW5kcyh0aGlzLmdldEN1cnJlbnRUaW1lKCkpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuc2V0VHJhbnNpdGlvbigpOyB9LCA1MCk7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4geyB0aGlzLnNldEhhbmRzKHRoaXMuZ2V0Q3VycmVudFRpbWUoKSk7IH0sIDEwMDApO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICAvLyBjcmVhdGUgZWxlbWVudHMgaW5zaWRlIHRoaXMuZWw7XG4gIH1cblxuICBnZXRDdXJyZW50VGltZSgpIHtcbiAgICBjb25zdCB0aW1lID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBob3VyID0gTnVtYmVyKHRpbWUudG9Mb2NhbGVTdHJpbmcoW10sIHtcbiAgICAgIHRpbWVab25lOiB0aGlzLnRpbWVab25lLFxuICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgIH0pKTtcbiAgICBjb25zdCBtaW51dGUgPSBOdW1iZXIodGltZS50b0xvY2FsZVN0cmluZyhbXSwge1xuICAgICAgdGltZVpvbmU6IHRoaXMudGltZVpvbmUsXG4gICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICB9KSk7XG4gICAgY29uc3Qgc2Vjb25kID0gTnVtYmVyKHRpbWUudG9Mb2NhbGVTdHJpbmcoW10sIHtcbiAgICAgIHRpbWVab25lOiB0aGlzLnRpbWVab25lLCBcbiAgICAgIHNlY29uZDogJ251bWVyaWMnLFxuICAgIH0pKTtcblxuICAgIHJldHVybiB7XG4gICAgICBob3VyczogaG91cixcbiAgICAgIG1pbnV0ZXM6IG1pbnV0ZSxcbiAgICAgIHNlY29uZHM6IHNlY29uZCxcbiAgICB9XG4gIH1cblxuICBzZXRIYW5kcyh0aW1lKSB7XG4gICAgbGV0IHNlY29uZHNEZWcgPSB0aW1lLnNlY29uZHMgKiA2O1xuICAgIGNvbnN0IG1pbnV0ZXNEZWcgPSB0aW1lLm1pbnV0ZXMgKiA2ICsgKHNlY29uZHNEZWcgLyA2MCk7XG4gICAgY29uc3QgaG91cnNEZWcgPSB0aW1lLmhvdXJzICogMzAgKyAobWludXRlc0RlZyAvIDEyKTtcblxuICAgIGlmIChzZWNvbmRzRGVnID09PSAwKSB7XG4gICAgICB0aGlzLnNlY29uZHNIYW5kUm90YXRpb25zKys7XG4gICAgfVxuXG4gICAgc2Vjb25kc0RlZyA9IHNlY29uZHNEZWcgKyAodGhpcy5zZWNvbmRzSGFuZFJvdGF0aW9ucyAqIDM2MCk7XG5cbiAgICB0aGlzLnNlY29uZHNIYW5kLnN0eWxlLnNldFByb3BlcnR5KCd0cmFuc2Zvcm0nLCAncm90YXRlKCcgKyBzZWNvbmRzRGVnICsgJ2RlZyknKTtcbiAgICB0aGlzLm1pbnV0ZXNIYW5kLnN0eWxlLnNldFByb3BlcnR5KCd0cmFuc2Zvcm0nLCAncm90YXRlKCcgKyBtaW51dGVzRGVnICsgJ2RlZyknKTtcbiAgICB0aGlzLmhvdXJzSGFuZC5zdHlsZS5zZXRQcm9wZXJ0eSgndHJhbnNmb3JtJywgJ3JvdGF0ZSgnICsgaG91cnNEZWcgKyAnZGVnKScpO1xuICB9XG5cbiAgc2V0VHJhbnNpdGlvbigpIHtcbiAgICBpZiAodGhpcy5zbW9vdGgpIHtcbiAgICAgIHRoaXMuc2Vjb25kc0hhbmQuc3R5bGUuc2V0UHJvcGVydHkoJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJywgJ2xpbmVhcicpO1xuICAgICAgdGhpcy5zZWNvbmRzSGFuZC5zdHlsZS5zZXRQcm9wZXJ0eSgndHJhbnNpdGlvbi1kdXJhdGlvbicsICc5OTVtcycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlY29uZHNIYW5kLnN0eWxlLnNldFByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJywgJzE1MG1zJyk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgR3JhcGhpY2FsbHlTcGVha2luZ1BsYXllciB7XG4gIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgdGhpcy5lbCA9IGVsO1xuICAgIHRoaXMuYXVkaW9QbGF5ZXIgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2F1ZGlvJyk7XG4gICAgdGhpcy5wbGF5aW5nO1xuICAgIHRoaXMuY29udHJvbHMgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJfX2NvbnRyb2xzJyk7XG4gICAgdGhpcy5pbmZvMSA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignLnBsYXllcl9faW5mbzEnKTtcbiAgICB0aGlzLmluZm8yID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcucGxheWVyX19pbmZvMicpO1xuICAgIHRoaXMuaW50ZXJtaXNzaW9uQnV0dG9uID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcuaW50ZXJtaXNzaW9uLWJ1dHRvbicpO1xuXG4gICAgdGhpcy51cGRhdGVQbGF5aW5nU3RhdHVzKCk7XG4gICAgLy90aGlzLmNvbnRyb2xzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy50b2dnbGUoKSk7XG4gICAgdGhpcy5hdWRpb1BsYXllci5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsICgpID0+IHRoaXMuZW5kZWQoKSk7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMudG9nZ2xlKCkpO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLmF1ZGlvUGxheWVyLnBhdXNlZCkge1xuICAgICAgdGhpcy5hdWRpb1BsYXllci5wbGF5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXVkaW9QbGF5ZXIucGF1c2UoKTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVBsYXlpbmdTdGF0dXMoKTtcbiAgfVxuXG4gIGVuZGVkKCkge1xuICAgIGNvbnNvbGUubG9nKCdhdWRpbyBlbmRlZCcpO1xuICAgIGlmICh0aGlzLmF1ZGlvUGxheWVyLmdldEF0dHJpYnV0ZSgnc3JjJykgIT09ICcvYXNzZXRzL2ludGVybWlzc2lvbi5tcDMnKSB7XG4gICAgICBjb25zb2xlLmxvZygnR28gdG8gaW50ZXJtaXNzaW9uJyk7XG4gICAgICB0aGlzLmF1ZGlvUGxheWVyLnNldEF0dHJpYnV0ZSgnc3JjJywgJy9hc3NldHMvaW50ZXJtaXNzaW9uLm1wMycpO1xuICAgICAgdGhpcy5hdWRpb1BsYXllci5wbGF5KCk7XG4gICAgICB0aGlzLnVwZGF0ZVBsYXllckluZm8oJ05vdyBwbGF5aW5nJywgJ0ludGVybWlzc2lvbicpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlUGxheWluZ1N0YXR1cygpO1xuICB9XG5cbiAgdXBkYXRlUGxheWluZ1N0YXR1cygpIHtcbiAgICB0aGlzLnBsYXlpbmcgPSAhdGhpcy5hdWRpb1BsYXllci5wYXVzZWQ7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QudG9nZ2xlKCdwbGF5aW5nJywgdGhpcy5wbGF5aW5nKTtcbiAgICB0aGlzLmVsLmNsYXNzTGlzdC50b2dnbGUoJ3BhdXNlZCcsICF0aGlzLnBsYXlpbmcpO1xuXG4gICAgY29uc3QgaW50ZXJtaXNzaW9uUGxheWluZyA9IHRoaXMucGxheWluZyAmJiB0aGlzLmF1ZGlvUGxheWVyLmdldEF0dHJpYnV0ZSgnc3JjJykgPT09ICcvYXNzZXRzL2ludGVybWlzc2lvbi5tcDMnID8gdHJ1ZTogZmFsc2U7XG4gICAgdGhpcy5pbnRlcm1pc3Npb25CdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgncGxheWluZycsIGludGVybWlzc2lvblBsYXlpbmcpO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKCh0aGlzLnBsYXlpbmcgPyAnUGxheWluZycgOiAnUGF1c2VkJykgKyAnLCAnICsgdGhpcy5hdWRpb1BsYXllci5nZXRBdHRyaWJ1dGUoJ3NyYycpKTtcbiAgfVxuXG4gIHBsYXlBdWRpbyhzcmMsIGluZm8xLCBpbmZvMikge1xuICAgIGlmIChzcmMgPT09IHRoaXMuYXVkaW9QbGF5ZXIuZ2V0QXR0cmlidXRlKCdzcmMnKSkge1xuICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdWRpb1BsYXllci5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNyYyk7XG4gICAgICB0aGlzLmF1ZGlvUGxheWVyLnBsYXkoKTtcbiAgICAgIHRoaXMudXBkYXRlUGxheWVySW5mbyhpbmZvMSwgaW5mbzIpO1xuICAgICAgdGhpcy51cGRhdGVQbGF5aW5nU3RhdHVzKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlUGxheWVySW5mbyhpbmZvMSwgaW5mbzIpIHtcbiAgICB0aGlzLmluZm8xLmlubmVyVGV4dCA9IGluZm8xO1xuICAgIHRoaXMuaW5mbzIuaW5uZXJUZXh0ID0gaW5mbzI7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBtYXJxdWVlKGVsLCBzZXR0aW5ncykge1xuICBjb25zdCBzcGVlZCA9IHNldHRpbmdzLnNwZWVkIHx8IDEwO1xuICBjb25zdCByZXZlcnNlID0gc2V0dGluZ3MucmV2ZXJzZSB8fCBmYWxzZTtcbiAgY29uc3Qgc3RhcnRQYXVzZWQgPSBzZXR0aW5ncy5zdGFydFBhdXNlZCB8fCBmYWxzZTtcbiAgbGV0IGNvbnRlbnRFbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5tYXJxdWVlX193cmFwcGVyJyk7XG4gIGNvbnN0IGNvbnRlbnRCYWNrdXAgPSBjb250ZW50RWwuaW5uZXJIVE1MO1xuICBsZXQgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgY29udGVudEVsLnN0eWxlLnNldFByb3BlcnR5KCcuYW5pbWF0aW9uLXBsYXktc3RhdGUnLCAncGF1c2VkJyk7XG4gIGluaXQoKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgIGlmICh3aW5kb3dXaWR0aCAhPT0gd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgIHJlY2FsYygpO1xuICAgICAgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB9XG4gIH0pO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHJlY2FsYyk7XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBpZiAocmV2ZXJzZSkge1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnbWFycXVlZS0tcmV2ZXJzZScpO1xuICAgIH1cblxuICAgIGlmIChzdGFydFBhdXNlZCkge1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnbWFycXVlZS0tcGF1c2VkJyk7XG4gICAgfVxuXG4gICAgcmVjYWxjKCk7XG4gIH1cblxuICBmdW5jdGlvbiByZWNhbGMoKSB7XG4gICAgY29uc3Qgb3V0ZXJXaWR0aCA9IGVsLm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IGlubmVyV2lkdGggPSBjb250ZW50RWwub2Zmc2V0V2lkdGg7IC8qIGNhbGxpbmcgb2Zmc2V0V2lkdGggdHJpZ2dlcnMgcmVmbG93ICovXG4gICAgY29uc3QgY2xvbmVzID0gTWF0aC5jZWlsKG91dGVyV2lkdGggLyBpbm5lcldpZHRoKTtcbiAgICBjb25zdCBkdXJhdGlvbiA9IGlubmVyV2lkdGggLyBzcGVlZDtcblxuICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbG9uZScpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgIGVsLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdGVtcENvbnRlbnQgPSBjb250ZW50RWwuY2xvbmVOb2RlKHRydWUpO1xuICAgIGNvbnRlbnRFbC5yZW1vdmUoKTtcbiAgICBjb250ZW50RWwgPSBlbC5hcHBlbmRDaGlsZCh0ZW1wQ29udGVudCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsb25lczsgaSsrKSB7XG4gICAgICBjb25zdCBjbG9uZSA9IGNvbnRlbnRFbC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICBjbG9uZS5jbGFzc0xpc3QuYWRkKCdjbG9uZScpO1xuICAgICAgY29udGVudEVsLmFmdGVyKGNsb25lKTtcbiAgICB9XG5cbiAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1kdXJhdGlvbicsIGR1cmF0aW9uICsgJ3MnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUNvbnRlbnQoY29udGVudCA9IGNvbnRlbnRCYWNrdXApIHtcbiAgICBjb250ZW50RWwuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICByZWNhbGMoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdXBkYXRlQ29udGVudCxcbiAgfVxufVxuIiwiaW1wb3J0IGJhcmJhIGZyb20gJ0BiYXJiYS9jb3JlJztcbmltcG9ydCB7IG1hcnF1ZWUgfSBmcm9tICcuL2NvbXBvbmVudHMvbWFycXVlZSc7XG5pbXBvcnQgeyBHcmFwaGljYWxseVNwZWFraW5nUGxheWVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2dyYXBoaWNhbGx5U3BlYWtpbmdQbGF5ZXInOyBcbmltcG9ydCB7IEFuYWxvZ3VlQ2xvY2sgfSBmcm9tICcuL2NvbXBvbmVudHMvY2xvY2snO1xuaW1wb3J0IHsgZ3NhcCB9IGZyb20gJ2dzYXAnO1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnZ3NhcC9EcmFnZ2FibGUnO1xuaW1wb3J0IHsgcmFuZG9tQXJyYXkgfSBmcm9tICcuL21vZHVsZXMvcmFuZG9tQXJyYXknO1xuaW1wb3J0IHsgb2JqZWN0U2NhdHRlciB9IGZyb20gJy4vbW9kdWxlcy9vYmplY3RTY2F0dGVyJztcblxuZ3NhcC5yZWdpc3RlclBsdWdpbihEcmFnZ2FibGUpO1xuXG5iYXJiYS5pbml0KHtcbiAgdGltZW91dDogNTAwMCxcbiAgdHJhbnNpdGlvbnM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnc2VsZicsXG4gICAgICBzeW5jOiB0cnVlLFxuICAgIH0sXG4gIF0sXG4gIHZpZXdzOiBbXG4gICAge1xuICAgICAgbmFtZXNwYWNlOiAnaG9tZScsXG4gICAgICBhZnRlckVudGVyKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hvbWUsIGFmdGVyRW50ZXInKTtcbiAgICAgICAgaWYgKGRhdGEuY3VycmVudC5jb250YWluZXIpIHtcbiAgICAgICAgICBkYXRhLmN1cnJlbnQuY29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHBhZ2VDaGFuZ2UoKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lc3BhY2U6ICdwZW9wbGUnLFxuICAgICAgYWZ0ZXJFbnRlcihkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwZW9wbGUsIGFmdGVyRW50ZXInKTtcbiAgICAgICAgaWYgKGRhdGEuY3VycmVudC5jb250YWluZXIpIHtcbiAgICAgICAgICBkYXRhLmN1cnJlbnQuY29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHBhZ2VDaGFuZ2UoKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbn0pO1xuXG5jb25zdCBwbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyJyk7XG5jb25zdCBncmFwaGljYWxseVNwZWFraW5nUGxheWVyID0gbmV3IEdyYXBoaWNhbGx5U3BlYWtpbmdQbGF5ZXIocGxheWVyKTtcblxuZnVuY3Rpb24gcGFnZUNoYW5nZSgpIHtcbiAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIGZvciBhdWRpbyBsaW5rc1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY29udGVudF9fd3JhcHBlciAuYXVkaW8tbGluaycpLmZvckVhY2goZWwgPT4ge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZWwgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjb25zdCBhdWRpb1NyYyA9IGVsLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgY29uc3QgaW5mbzEgPSAnTm93IHBsYXlpbmcnO1xuICAgICAgY29uc3QgaW5mbzIgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xuICAgICAgZ3JhcGhpY2FsbHlTcGVha2luZ1BsYXllci5wbGF5QXVkaW8oYXVkaW9TcmMsIGluZm8xLCBpbmZvMik7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIFJ1biBzaGFwZXNcbiAgY29uc3QgbGluZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGluZXMnKTtcbiAgY29uc3QgbGluZXMgPSBsaW5lc0NvbnRhaW5lci5jaGlsZHJlbjtcblxuICAvLyBTaHVmZmxlIGFuZCByZW1vdmUgYWxsIGJ1dCBmaXJzdCAzIGxpbmVzXG4gIGlmIChsaW5lcy5sZW5ndGggPiAzKSB7XG4gICAgY29uc29sZS5sb2coJ3J1biBsaW5lIHNodWZmbGUnKTtcbiAgICBmb3IgKGxldCBpID0gbGluZXMubGVuZ3RoOyBpID49IDA7IGktLSkge1xuICAgICAgbGluZXNDb250YWluZXIuYXBwZW5kQ2hpbGQobGluZXNbTWF0aC5yYW5kb20oKSAqIGkgfCAwXSk7XG4gICAgfVxuICBcbiAgICBmb3IgKGxldCBpID0gbGluZXMubGVuZ3RoOyBpID4gMzsgaS0tKSB7XG4gICAgICBsaW5lc0NvbnRhaW5lci5yZW1vdmVDaGlsZChsaW5lc0NvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJhbmRYU3ByZWFkID0gcmFuZG9tQXJyYXkoMCwgMik7XG4gIGNvbnN0IHJhbmRZU3ByZWFkID0gcmFuZG9tQXJyYXkoMCwgMik7XG5cbiAgWy4uLmxpbmVzXS5mb3JFYWNoKChsaW5lLCBpKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlID0gbGluZS5xdWVyeVNlbGVjdG9yQWxsKCdzdmcgPiAqJyk7XG5cbiAgICBsaW5lLnN0eWxlLnNldFByb3BlcnR5KCctLWxlZnQnLCAocmFuZFhTcHJlYWRbaSAlIDNdICogKDIwKzIwKSkgKyAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjEpKSk7XG4gICAgbGluZS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS10b3AnLCAocmFuZFlTcHJlYWRbaSAlIDNdICogKDIwKzIwKSkgKyAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjEpKSk7XG4gICAgXG4gICAgRHJhZ2dhYmxlLmNyZWF0ZShsaW5lLCB7XG4gICAgICBib3VuZHM6ICcjc2l0ZS1jb250ZW50JyxcbiAgICAgIHRyaWdnZXI6IGhhbmRsZSxcbiAgICAgIGVkZ2VSZXNpc3RhbmNlOiAwLjUsXG4gICAgICBpbmVydGlhOiB0cnVlLFxuICAgICAgekluZGV4Qm9vc3Q6IHRydWUsXG4gICAgfSk7XG4gIH0pO1xufVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFycXVlZScpLmZvckVhY2goKGVsKSA9PiB7XG4gIG1hcnF1ZWUoZWwsIFxuICAgIHtcbiAgICAgIHNwZWVkOiA3MCxcbiAgICB9XG4gICk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFuYWxvZ3VlLWNsb2NrJykuZm9yRWFjaChlbCA9PiB7XG4gIG5ldyBBbmFsb2d1ZUNsb2NrKGVsKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2F2eS10ZXh0JykuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKGVsLCBpKSB7XG4gIGVsLnN0eWxlLnNldFByb3BlcnR5KCdhbmltYXRpb24tZGVsYXknLCAtMTYwICogaSArICdtcycpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnRlcm1pc3Npb24tYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgZ3JhcGhpY2FsbHlTcGVha2luZ1BsYXllci5wbGF5QXVkaW8oJy9hc3NldHMvaW50ZXJtaXNzaW9uLm1wMycsICdOb3cgcGxheWluZycsICdJbnRlcm1pc3Npb24nKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub2JqZWN0LXNjYXR0ZXInKS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRhcmdldFNlbGVjdG9yID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1vYmplY3Qtc2NhdHRlci10YXJnZXQnKTtcbiAgICBjb25zdCB0YXJnZXRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0U2VsZWN0b3IpO1xuICAgIG9iamVjdFNjYXR0ZXIodGFyZ2V0RWwpO1xuICB9KTtcbn0pO1xuIiwiaW1wb3J0IHsgcmFuZG9tRnJvbVJhbmdlIH0gZnJvbSBcIi4vcmFuZG9tRnJvbVJhbmdlXCI7XG5pbXBvcnQgeyByYW5kb21BcnJheSB9IGZyb20gXCIuL3JhbmRvbUFycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RTY2F0dGVyKGVsKSB7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW1hZ2VSZW1vdmUpO1xuICBlbC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGltYWdlUmVtb3ZlLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gIGVsLnNldEF0dHJpYnV0ZSgnYWN0aXZlJywgJ2FjdGl2ZScpO1xuICBjb25zdCBpdGVtcyA9IGVsLmNoaWxkcmVuO1xuICBjb25zdCB6b25lc1ggPSByYW5kb21BcnJheSgxLCBpdGVtcy5sZW5ndGgpO1xuICBjb25zdCB6b25lc1kgPSByYW5kb21BcnJheSgxLCBpdGVtcy5sZW5ndGgpO1xuICBjb25zdCBpbnRlcnZhbCA9IDEwMCAvIGl0ZW1zLmxlbmd0aDtcbiAgY29uc3QgZGVsYXkgPSByYW5kb21BcnJheSgwLCBpdGVtcy5sZW5ndGggLSAxKTtcblxuICBbLi4uaXRlbXNdLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaSwgYXJyKSB7XG4gICAgY29uc3QgcmFuZG9tID0ge1xuICAgICAgbGVmdDogcmFuZG9tRnJvbVJhbmdlKHpvbmVzWFtpXSAqIGludGVydmFsIC0gKChpbnRlcnZhbCAvIDQpICogMyksIHpvbmVzWFtpXSAqIGludGVydmFsIC0gaW50ZXJ2YWwgLyA0KSxcbiAgICAgIHRvcDogcmFuZG9tRnJvbVJhbmdlKHpvbmVzWVtpXSAqIGludGVydmFsIC0gKChpbnRlcnZhbCAvIDQpICogMyksIHpvbmVzWVtpXSAqIGludGVydmFsIC0gaW50ZXJ2YWwgLyA0KSxcbiAgICAgIGRlbGF5OiBkZWxheVtpXSxcbiAgICB9O1xuICAgIGNvbnN0IHN0eWxlcyA9ICctLXJhbmRvbS10b3A6ICcgKyByYW5kb20udG9wICsgJzsgJyArXG4gICAgICAgICAgICAgICAgICAgJy0tcmFuZG9tLWxlZnQ6ICcgKyByYW5kb20ubGVmdCArICc7JyArXG4gICAgICAgICAgICAgICAgICAgJy0tZGVsYXk6ICcgKyByYW5kb20uZGVsYXkgKiAxMDAgKyAnOyc7XG5cbiAgICBpdGVtLnN0eWxlLmNzc1RleHQgPSBzdHlsZXM7XG5cbiAgICBjb25zdCBpbWFnZSA9IGl0ZW07XG4gICAgaWYgKCFpbWFnZS5zcmMpIHtcbiAgICAgIGlmIChpbWFnZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtc3Jjc2V0JykpIHtcbiAgICAgICAgaW1hZ2Uuc3Jjc2V0ID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLXNyY3NldCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW1hZ2UuaGFzQXR0cmlidXRlKCdkYXRhLXNyYycpKSB7XG4gICAgICAgIGltYWdlLnNyYyA9IGltYWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpbWFnZVJlbW92ZShldmVudCkge1xuICBjb25zdCBlbCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gIGVsLnJlbW92ZUF0dHJpYnV0ZSgnYWN0aXZlJyk7XG59XG4iLCIvLyByZXR1cm4gYSByYW5kb21seSBzb3J0ZWQgYXJyYXkgY29udGFpbmluZyBudW1iZXJzIGJldHdlZW4gbWluIGFuZCBtYXhcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21BcnJheShtaW4sIG1heCkge1xuICBjb25zdCBhcnJheSA9IFtdO1xuICBmb3IgKGxldCBpID0gbWluOyBpIDw9IG1heDsgaSsrKSB7XG4gICAgYXJyYXkucHVzaChpKTtcbiAgfVxuICBsZXQgaiwgejtcbiAgZm9yIChsZXQgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgeiA9IGFycmF5W2ldO1xuICAgIGFycmF5W2ldID0gYXJyYXlbal07XG4gICAgYXJyYXlbal0gPSB6O1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cbiIsIi8vIHJldHVybiByYW5kb20gbnVtYmVyIGJldHdlZW4gbWluIGFuZCBtYXhcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21Gcm9tUmFuZ2UobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3NjcmlwdHMvbWFpbi5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzL21haW4uc2Nzcyc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=