(()=>{var t={10:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var i=n(537),s=n.n(i),r=n(645),o=n.n(r)()(s());o.push([t.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const a=o},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,s,r){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(i)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);i&&o[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),e.push(d))}},e}},537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",s="minute",r="hour",o="day",a="week",l="month",c="quarter",d="year",u="date",p="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},y={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+v(i,2,"0")+":"+v(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,l),r=n-s<0,o=e.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-o:o-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:d,w:a,d:o,D:u,h:r,m:s,s:i,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},_="en",g={};g[_]=m;var b=function(t){return t instanceof E},C=function t(e,n,i){var s;if(!e)return _;if("string"==typeof e){var r=e.toLowerCase();g[r]&&(s=r),n&&(g[r]=n,s=r);var o=e.split("-");if(!s&&o.length>1)return t(o[0])}else{var a=e.name;g[a]=e,s=a}return!i&&s&&(_=s),s||!i&&_},$=function(t,e){if(b(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new E(n)},w=y;w.l=C,w.i=b,w.w=function(t,e){return $(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var E=function(){function m(t){this.$L=C(t.locale,null,!0),this.parse(t)}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(h);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return w},v.isValid=function(){return!(this.$d.toString()===p)},v.isSame=function(t,e){var n=$(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return $(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<$(t)},v.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,c=!!w.u(e)||e,p=w.p(t),h=function(t,e){var i=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?i:i.endOf(o)},f=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,y=this.$D,_="set"+(this.$u?"UTC":"");switch(p){case d:return c?h(1,0):h(31,11);case l:return c?h(1,v):h(0,v+1);case a:var g=this.$locale().weekStart||0,b=(m<g?m+7:m)-g;return h(c?y-b:y+(6-b),v);case o:case u:return f(_+"Hours",0);case r:return f(_+"Minutes",1);case s:return f(_+"Seconds",2);case i:return f(_+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var a,c=w.p(t),p="set"+(this.$u?"UTC":""),h=(a={},a[o]=p+"Date",a[u]=p+"Date",a[l]=p+"Month",a[d]=p+"FullYear",a[r]=p+"Hours",a[s]=p+"Minutes",a[i]=p+"Seconds",a[n]=p+"Milliseconds",a)[c],f=c===o?this.$D+(e-this.$W):e;if(c===l||c===d){var m=this.clone().set(u,1);m.$d[h](f),m.init(),this.$d=m.set(u,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[w.p(t)]()},v.add=function(n,c){var u,p=this;n=Number(n);var h=w.p(c),f=function(t){var e=$(p);return w.w(e.date(e.date()+Math.round(t*n)),p)};if(h===l)return this.set(l,this.$M+n);if(h===d)return this.set(d,this.$y+n);if(h===o)return f(1);if(h===a)return f(7);var m=(u={},u[s]=t,u[r]=e,u[i]=1e3,u)[h]||1,v=this.$d.getTime()+n*m;return w.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=w.z(this),r=this.$H,o=this.$m,a=this.$M,l=n.weekdays,c=n.months,d=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].slice(0,r)},u=function(t){return w.s(r%12||12,t,"0")},h=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:w.s(a+1,2,"0"),MMM:d(n.monthsShort,a,c,3),MMMM:d(c,a),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,l,2),ddd:d(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:w.s(r,2,"0"),h:u(1),hh:u(2),a:h(r,o,!0),A:h(r,o,!1),m:String(o),mm:w.s(o,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:s};return i.replace(f,(function(t,e){return e||m[t]||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,u,p){var h,f=w.p(u),m=$(n),v=(m.utcOffset()-this.utcOffset())*t,y=this-m,_=w.m(this,m);return _=(h={},h[d]=_/12,h[l]=_,h[c]=_/3,h[a]=(y-v)/6048e5,h[o]=(y-v)/864e5,h[r]=y/e,h[s]=y/t,h[i]=y/1e3,h)[f]||y,p?_:w.a(_)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return g[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=C(t,e,!0);return i&&(n.$L=i),n},v.clone=function(){return w.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),M=E.prototype;return $.prototype=M,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",o],["$M",l],["$y",d],["$D",u]].forEach((function(t){M[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),$.extend=function(t,e){return t.$i||(t(e,E,$),t.$i=!0),$},$.locale=C,$.isDayjs=b,$.unix=function(t){return $(1e3*t)},$.en=g[_],$.Ls=g,$.p={},$}()},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var r={},o=[],a=0;a<t.length;a++){var l=t[a],c=i.base?l[0]+i.base:l[0],d=r[c]||0,u="".concat(c," ").concat(d);r[c]=d+1;var p=n(u),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var f=s(h,i);i.byIndex=a,e.splice(a,0,{identifier:u,updater:f,references:1})}o.push(u)}return o}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var r=i(t=t||[],s=s||{});return function(t){t=t||[];for(var o=0;o<r.length;o++){var a=n(r[o]);e[a].references--}for(var l=i(t,s),c=0;c<r.length;c++){var d=n(r[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=l}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={id:i,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";var t=n(379),e=n.n(t),i=n(795),s=n.n(i),r=n(569),o=n.n(r),a=n(565),l=n.n(a),c=n(216),d=n.n(c),u=n(589),p=n.n(u),h=n(10),f={};f.styleTagTransform=p(),f.setAttributes=l(),f.insert=o().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=d(),e()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const m="shake";class v{#t=null;constructor(){if(new.target===v)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#t||(this.#t=function(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this.template)),this.#t}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#t=null}shake(t){this.element.classList.add(m),setTimeout((()=>{this.element.classList.remove(m),t?.()}),600)}}const y={BEFOREBEGIN:"beforebegin",AFTERBEGIN:"afterbegin",BEFOREEND:"beforeend",AFTEREND:"afterend"};function _(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y.BEFOREEND;if(!(t instanceof v))throw new Error("Can render only components");if(null===e)throw new Error("Container element doesn't exist");e.insertAdjacentElement(n,t.element)}function g(t,e){if(!(t instanceof v&&e instanceof v))throw new Error("Can replace only components");const n=t.element,i=e.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}function b(t){if(null!==t){if(!(t instanceof v))throw new Error("Can remove only components");t.element.remove(),t.removeElement()}}class C extends v{get template(){return'<ul class="trip-events__list"></ul>'}}var $=n(484),w=n.n($);const E=["Amsterdam","Alicante","Minsk","Tashkent","Chamonix","Geneva","Seoul","Sihanoukville","New York"],M=["Check-in","Sightseeing","Restaurant","Taxi","Bus","Train","Ship","Drive","Flight"],T=["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.","Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.","Fusce tristique felis at fermentum pharetra.","Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.","Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum."],S=["Aliquam erat volutpat.","Cras aliquet varius magna.","Phasellus eros mauris.","Fusce tristique felis.","Nullam nunc ex."],k=[{type:"check-in",offers:[{id:1,title:"Add breakfast",price:50}]},{type:"sightseeing",offers:[{id:10,title:"Book tickets",price:40},{id:20,title:"Lunch in city",price:30}]},{type:"restaurant",offers:[{id:100,title:"Brunch",price:20},{id:200,title:"Takeaway lunch",price:12},{id:321,title:"Cooking master class",price:30}]},{type:"taxi",offers:[{id:2341,title:"Order Uber",price:40}]},{type:"bus",offers:[{id:1541,title:"airport-hotel route",price:20},{id:442,title:"City tour",price:10}]},{type:"train",offers:[]},{type:"ship",offers:[]},{type:"drive",offers:[{id:71,title:"Rent a car",price:200},{id:82,title:"Car rental with driver",price:1e3}]},{type:"flight",offers:[{id:51,title:"Add luggage",price:50},{id:442,title:"Switch to comfort",price:80}]}],D={basePrice:"",dateFrom:new Date,dateTo:new Date,destination:"",isFavorite:!1,offers:[],type:"taxi"},A="day",L="time",F="price",x=(t,e)=>{const n=Math.ceil(Math.min(t,e)),i=Math.floor(Math.max(t,e)),s=Math.random()*(i-n+1)+n;return Math.floor(s)},H=(t,e)=>x(t,e),P=t=>t[Math.floor(Math.random()*t.length)],O=(t,e)=>{const n=t.map((t=>t.type)).indexOf(e),i=[];if(-1!==n){const e=t[n].offers;if(e){for(let t=0;t<e.length;t++)i.push(e[t].id.toString());return i}}return i},B=t=>"Escape"===t.key||"Esc"===t.key,I=(t,e)=>{const n=new Date;return t>n?"future":t<=n&&e>=n?"present":"past"},N={everything:t=>t,future:t=>t.filter((t=>"future"===I(t.dateFrom,t.dateTo))),present:t=>t.filter((t=>"present"===I(t.dateFrom,t.dateTo))),past:t=>t.filter((t=>"past"===I(t.dateFrom,t.dateTo)))};function Y(t,e){return t.map((t=>t.id===e.id?e:t))}const R=(t,e)=>{const n=w()(t.dateTo).diff(w()(t.dateFrom));return w()(e.dateTo).diff(w()(e.dateFrom))-n},q=(t,e)=>e.basePrice-t.basePrice,U=(t,e)=>w()(t.dateFrom).diff(w()(e.dateFrom)),W=()=>({id:crypto.randomUUID(),description:P(T),name:P(E),pictures:Array.from({length:H(1,10)},(()=>({src:`https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,description:P(S)})))}),j=()=>{const t=P(M),e=(()=>{const t=w()().add(H(1,15),"day").add(H(1,23),"hour").add(H(1,59),"minute"),e=t.clone().add(x(0,15),"day").add(x(0,23),"hour").add(x(0,59),"minute");return{start:t.toDate(),end:e.toDate()}})(),{id:n}=W();return{id:crypto.randomUUID(),basePrice:H(100,3e3),dateFrom:e.start,dateTo:e.end,destination:n,isFavorite:Math.random()>.5,offers:O(k,t.toLowerCase()),type:t}};console.log(W()),console.log(j());class Z extends v{#e=D;#n=null;#i=null;#s=null;constructor(t){let{point:e=D,formType:n,onSubmit:i,onReset:s}=t;super(),this.#e=e,this.#s=n,this.#n=i,this.#i=s,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#r),this.element.querySelector(".event--edit").addEventListener("submit",this.#o),this.element.querySelector(".event--edit").addEventListener("reset",this.#r)}get template(){return function(t){const{basePrice:e,dateFrom:n,dateTo:i,type:s}=t,r=w()(n).format("DD/MM/YY HH:mm"),o=w()(i).format("DD/MM/YY HH:mm"),{description:a,name:l,pictures:c}=W(),d=l,u=(t=>{const e=[];for(let n=0;n<t.length;n++){const i=t[n];e.push(i)}return e})(c),p=((t,e)=>{const n=t.find((t=>t.type===e));return n?n.offers:[]})(k,s.toLowerCase());return`<li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-1">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/${s.toLowerCase()}.png" alt="Event ${s} icon">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n            <div class="event__type-list">\n              <fieldset class="event__type-group">\n                <legend class="visually-hidden">Event type</legend>\n\n                ${(()=>{let t="";return M.length&&M.forEach((e=>{const n=e===s?"checked":"";e&&(t+=`\n          <div class="event__type-item">\n            <input id="event-type-${e.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e.toLowerCase()}" ${n}>\n            <label class="event__type-label  event__type-label--${e.toLowerCase()}" for="event-type-${e.toLowerCase()}-1">${e}</label>\n          </div>`)})),t})()}\n              </fieldset>\n            </div>\n          </div>\n\n          <div class="event__field-group  event__field-group--destination">\n            <label class="event__label  event__type-output" for="event-destination-1">\n              ${s}\n            </label>\n            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${d}" list="destination-list-1">\n            <datalist id="destination-list-1">\n              <option value="${d}"></option>\n              <option value="${d}"></option>\n              <option value="${d}"></option>\n            </datalist>\n          </div>\n\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-1">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${r}">\n            &mdash;\n            <label class="visually-hidden" for="event-end-time-1">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${o}">\n          </div>\n\n          <div class="event__field-group  event__field-group--price">\n            <label class="event__label" for="event-price-1">\n              <span class="visually-hidden">Price</span>\n              &euro;\n            </label>\n            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${e}">\n          </div>\n          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n          <button class="event__reset-btn" type="reset">Delete</button>\n          <button class="event__rollup-btn" type="button">\n            <span class="visually-hidden">Open event</span>\n          </button>\n        </header>\n        <section class="event__details">\n          <section class="event__section  event__section--offers">\n            <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n            <div class="event__available-offers">\n              ${(()=>{let t="";return p.length&&(t="",p.forEach((e=>{const n=Math.random()>.5?"checked":"";e.title&&e.price&&e.id&&(t+=`\n          <div class="event__offer-selector">\n            <input class="event__offer-checkbox  visually-hidden" id="event-offer-${e.id}" type="checkbox" name="event-offer-${e.id}" ${n}>\n            <label class="event__offer-label" for="event-offer-${e.id}">\n              <span class="event__offer-title">${e.title}</span>\n              &plus;&euro;&nbsp;\n              <span class="event__offer-price">${e.price}</span>\n            </label>\n          </div>`)}))),t})()}\n            </div>\n          </section>\n\n          <section class="event__section  event__section--destination">\n            <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n            <p class="event__destination-description">${d} ${a}</p>\n\n            <div class="event__photos-container">\n              <div class="event__photos-tape">\n                ${(()=>{let t="";return u.length&&u.forEach((e=>{e.src&&e.description&&(t+=`\n        <img class="event__photo" src="${e.src}" alt="${e.description}">`)})),t})()}\n              </div>\n            </div>\n          </section>\n        </section>\n      </form>\n    </li>`}(this.#e,this.#s)}#o=t=>{t.preventDefault(),this.#n(this.#e)};#r=()=>{this.#i()}}class G extends v{get template(){return'\n    <section class="trip-main__trip-info  trip-info">\n      <div class="trip-info__main">\n        <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n        <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>\n      </div>\n\n      <p class="trip-info__cost">\n        Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n      </p>\n    </section>'}}class z extends v{#a=null;#l=null;constructor(t){let{currentSortType:e,onSortTypeChange:n}=t;super(),this.#a=n,this.#l=e,this.element.addEventListener("click",this.#c)}get template(){return this.#l,`<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n      <div class="trip-sort__item  trip-sort__item--day">\n        <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" data-sort-type="${A}" checked>\n        <label class="trip-sort__btn" for="sort-day">Day</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--event">\n        <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n        <label class="trip-sort__btn" for="sort-event">Event</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--time">\n        <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time" data-sort-type="${L}">\n        <label class="trip-sort__btn" for="sort-time">Time</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--price">\n        <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price"" data-sort-type="${F}">\n        <label class="trip-sort__btn" for="sort-price"">Price</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--offer">\n        <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n        <label class="trip-sort__btn" for="sort-offer">Offers</label>\n      </div>\n    </form>`}#c=t=>{"INPUT"===t.target.tagName&&(t.preventDefault(),this.#a(t.target.dataset.sortType))}}class J extends v{#d=null;constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"everything";super(),this.#d=t}get template(){return(t=>{let e="";switch(this.#d){case"past":e="There are no past events now";break;case"present":e="There are no present events now";break;case"future":e="There are no future events now";break;default:e="Click New Event to create your first point"}return`<p class="trip-events__msg">${e}</p>`})()}}class K extends v{#u=null;constructor(t){let{onAddClickHandler:e}=t;super(),this.#u=e,this.element.addEventListener("click",this.#p)}get template(){return'<button class="trip-main__event-add-btn btn btn--big btn--yellow" type="button">New event</button>'}#p=t=>{t.preventDefault(),this.#u()}}class V extends v{#e=null;#h=null;#f=null;constructor(t){let{point:e=j(),onEditClick:n,onFavoriteClick:i}=t;super(),this.#e=e,this.#h=n,this.#f=i,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#m),this.element.querySelector(".event__favorite-btn").addEventListener("click",this.#v)}get template(){return function(t){const{basePrice:e,dateFrom:n,dateTo:i,type:s,isFavorite:r}=t,{name:o}=W(),a=o,l=r?"event__favorite-btn--active":"",c=w()(n).format("MMM D"),d=w()(n).format("YYYY-MM-DD"),u=w()(n).format("HH:mm"),p=w()(n).format("YYYY-MM-DDTHH:mm"),h=w()(i).format("HH:mm"),f=w()(i).format("YYYY-MM-DDTHH:mm"),m=(t=>{const e=[];return 0!==t.days&&(e[0]=String(t.days).padStart(2,"0"),e[0]+="D"),0!==t.hours&&(e[1]=String(t.hours).padStart(2,"0"),e[1]+="H"),0!==t.minutes&&(e[2]=String(t.minutes).padStart(2,"0"),e[2]+="M"),e.join("")})(((t,e)=>{const n=new Date(e-t);return{days:n.getUTCDate()-1,hours:n.getUTCHours(),minutes:n.getUTCMinutes()}})(n,i)),v=((t,e)=>{const n=t.find((t=>t.type===e));return n?n.offers:[]})(k,s.toLowerCase()),y=(_=t.offers,g=v,_.map((t=>g.find((e=>t.toString()===e.id.toString())))));var _,g;return`<li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime="${d}">${c}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${s.toLowerCase()}.png" alt="Event ${s} icon">\n        </div>\n        <h3 class="event__title">${s} ${a}</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="${p}">${u}</time>\n            &mdash;\n            <time class="event__end-time" datetime="${f}">${h}</time>\n          </p>\n          <p class="event__duration">${m}</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${e}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">${y.map((t=>`\n      <li class="event__offer">\n        <span class="event__offer-title">${t.title}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${t.price}</span>\n      </li>`)).join("")}</ul>\n\n        <button class="event__favorite-btn ${l}" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>`}(this.#e)}#m=t=>{t.preventDefault(),this.#h()};#v=t=>{t.preventDefault(),this.#f()}}const X="DEFAULT",Q="EDITING";class tt{#y=null;#_=null;#g=null;#b=null;#C=null;#e=null;#$=null;#w=null;#E=X;constructor(t){let{waypointListContainer:e,onDataChange:n,onModeChange:i}=t;this.#y=e,this.#_=n,this.#g=i}init(t,e,n){this.#e=t,this.#$=e,this.#w=n;const i=this.#b,s=this.#C;this.#b=new V({point:this.#e,destinations:this.#$,offers:this.#w,onEditClick:this.#M,onFavoriteClick:this.#f}),this.#C=new Z({point:this.#e,destinations:this.#$,offers:this.#w,onSubmit:this.#T,onReset:this.#S}),null!==i&&null!==s?(this.#E===X&&g(this.#b,i),this.#E===Q&&g(this.#C,s),b(i),b(s)):_(this.#b,this.#y)}destroy(){b(this.#b),b(this.#C)}resetView(){this.#E!==X&&this.#k()}#D=()=>{g(this.#C,this.#b),this.#g(),this.#E=Q};#k=()=>{g(this.#b,this.#C),this.#E=X};#A=t=>{B&&(t.preventDefault(),this.#k(),document.removeEventListener("keydown",this.#A))};#M=()=>{this.#D(),document.addEventListener("keydown",this.#A)};#S=()=>{this.#k(),document.removeEventListener("keydown",this.#A)};#f=()=>{this.#_({...this.#e,isFavorite:!this.#e.isFavorite})};#T=t=>{this.#_(t),this.#k(),document.removeEventListener("keydown",this.#A)}}class et extends v{#L=null;constructor(t){let{filters:e}=t;super(),this.#L=e}get template(){return function(t){const e=t.map(((t,e)=>function(t,e){let{name:n,isDisabled:i}=t;return`<div class="trip-filters__filter">\n      <input id="filter-${n}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${n}" ${i?"disabled":""} ${e?"checked":""}>\n      <label class="trip-filters__filter-label" for="filter-${n}">${n}</label>\n    </div>`}(t,0===e))).join("");return`<form class="trip-filters" action="#" method="get">\n      ${e}\n      <button class="visually-hidden" type="submit">Accept filter</button>\n    </form>`}(this.#L)}}const nt=document.querySelector(".page-header"),it=nt.querySelector(".trip-controls__filters"),st=nt.querySelector(".trip-main"),rt=document.querySelector(".page-main").querySelector(".trip-events"),ot=new class{#F=(t=>Array.from({length:5},((t,e)=>j(e))))();#w=k;#x=W();get points(){return this.#F}get offers(){return this.#w}get destination(){return this.#x}},at=new class{#H=null;#y=null;#P=null;#O=null;#d=null;#B=null;#l=A;#I=[];#N=new C;#Y=new J;#R=[];#q=new Map;constructor(t){let{headerContainer:e,waypointListContainer:n,pointsModel:i}=t;this.#H=e,this.#y=n,this.#P=i,this.filterType=""}init(){this.#R=[...this.#P.points],this.#I=[...this.#P.points],this.#U(),this.#W()}#g=()=>{this.#q.forEach((t=>t.resetView()))};#j=t=>{this.#R=Y(this.#R,t),this.#I=Y(this.#I,t),this.#q.get(t.id).init(t)};#a=t=>{this.#l!==t&&(this.#Z(t),this.#G(),this.#z())};#Z(t){switch(t){case A:this.#R.sort(U);break;case L:this.#R.sort(R);break;case F:this.#R.sort(q);break;default:this.#R=[...this.#I]}this.#l=t}#J=()=>{this.#B=new z({currentSortortType:this.#l,onSortTypeChange:this.#a}),_(this.#B,this.#y,y.AFTERBEGIN)};#U(){const t=new Z({formType:"add",onSubmit:function(){e(),document.removeEventListener("keydown",n)},onReset:function(){e(),document.removeEventListener("keydown",n)}});function e(){b(t)}function n(t){B(t)&&(t.preventDefault(),e(),document.removeEventListener("keydown",n))}_(new K({onAddClickHandler:()=>{this.#K(t),document.addEventListener("keydown",n),console.log(1)}}),this.#H,y.BEFOREEND)}#K=t=>{_(t,this.#N.element,y.AFTERBEGIN)};#z=(t,e,n)=>{const i=new tt({waypointListContainer:this.#N.element,formType:"add",onDataChange:this.#j,onModeChange:this.#g});i.init(t,e,n),this.#q.set(t?.id,i)};#G(){this.#q.forEach((t=>t.destroy())),this.#q.clear(),b(this.#B)}#V(t){t.forEach((t=>this.#z(t,this.destinations,this.offers)))}#X(){_(this.#Y(this.filterType),this.#y)}#Q(){this.#R.length?(this.#V(this.#R),_(this.#N,this.#y)):this.#X()}#tt(){this.#R.length&&_(new G,this.#H,y.AFTERBEGIN)}#W(){_(this.#N,this.#y),this.#tt(),this.#J(),this.#Q()}}({headerContainer:st,waypointListContainer:rt,pointsModel:ot}),lt=new class extends v{#et=null;#F=null;constructor(t){let{listFiltersContainer:e,pointsModel:n}=t;super(),this.#et=e,this.#F=n.points}init(){const t=(e=this.#F,Object.entries(N).map((t=>{let[n,i]=t;return{name:n,isDisabled:!(i(e).length>0)}})));var e;_(new et({filters:t}),this.#et)}}({listFiltersContainer:it,pointsModel:ot});lt.init(),at.init()})()})();
//# sourceMappingURL=bundle.5f1dc50efbd31293d241.js.map