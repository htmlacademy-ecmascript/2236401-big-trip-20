(()=>{var e={484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",s="minute",a="hour",r="day",l="week",o="month",u="quarter",c="year",p="date",d="Invalid Date",v=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,_={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},h=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},m={s:h,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+h(i,2,"0")+":"+h(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,o),a=n-s<0,r=t.clone().add(i+(a?-1:1),o);return+(-(i+(n-s)/(a?s-r:r-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:o,y:c,w:l,d:r,D:p,h:a,m:s,s:i,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",b={};b[y]=_;var g=function(e){return e instanceof S},$=function e(t,n,i){var s;if(!t)return y;if("string"==typeof t){var a=t.toLowerCase();b[a]&&(s=a),n&&(b[a]=n,s=a);var r=t.split("-");if(!s&&r.length>1)return e(r[0])}else{var l=t.name;b[l]=t,s=l}return!i&&s&&(y=s),s||!i&&y},M=function(e,t){if(g(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new S(n)},w=m;w.l=$,w.i=g,w.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var S=function(){function _(e){this.$L=$(e.locale,null,!0),this.parse(e)}var h=_.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(v);if(i){var s=i[2]-1||0,a=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return w},h.isValid=function(){return!(this.$d.toString()===d)},h.isSame=function(e,t){var n=M(e);return this.startOf(t)<=n&&n<=this.endOf(t)},h.isAfter=function(e,t){return M(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<M(e)},h.$g=function(e,t,n){return w.u(e)?this[t]:this.set(n,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,t){var n=this,u=!!w.u(t)||t,d=w.p(e),v=function(e,t){var i=w.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return u?i:i.endOf(r)},f=function(e,t){return w.w(n.toDate()[e].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},_=this.$W,h=this.$M,m=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case c:return u?v(1,0):v(31,11);case o:return u?v(1,h):v(0,h+1);case l:var b=this.$locale().weekStart||0,g=(_<b?_+7:_)-b;return v(u?m-g:m+(6-g),h);case r:case p:return f(y+"Hours",0);case a:return f(y+"Minutes",1);case s:return f(y+"Seconds",2);case i:return f(y+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(e,t){var l,u=w.p(e),d="set"+(this.$u?"UTC":""),v=(l={},l[r]=d+"Date",l[p]=d+"Date",l[o]=d+"Month",l[c]=d+"FullYear",l[a]=d+"Hours",l[s]=d+"Minutes",l[i]=d+"Seconds",l[n]=d+"Milliseconds",l)[u],f=u===r?this.$D+(t-this.$W):t;if(u===o||u===c){var _=this.clone().set(p,1);_.$d[v](f),_.init(),this.$d=_.set(p,Math.min(this.$D,_.daysInMonth())).$d}else v&&this.$d[v](f);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[w.p(e)]()},h.add=function(n,u){var p,d=this;n=Number(n);var v=w.p(u),f=function(e){var t=M(d);return w.w(t.date(t.date()+Math.round(e*n)),d)};if(v===o)return this.set(o,this.$M+n);if(v===c)return this.set(c,this.$y+n);if(v===r)return f(1);if(v===l)return f(7);var _=(p={},p[s]=e,p[a]=t,p[i]=1e3,p)[v]||1,h=this.$d.getTime()+n*_;return w.w(h,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=w.z(this),a=this.$H,r=this.$m,l=this.$M,o=n.weekdays,u=n.months,c=function(e,n,s,a){return e&&(e[n]||e(t,i))||s[n].slice(0,a)},p=function(e){return w.s(a%12||12,e,"0")},v=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},_={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:w.s(l+1,2,"0"),MMM:c(n.monthsShort,l,u,3),MMMM:c(u,l),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,o,2),ddd:c(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(a),HH:w.s(a,2,"0"),h:p(1),hh:p(2),a:v(a,r,!0),A:v(a,r,!1),m:String(r),mm:w.s(r,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:s};return i.replace(f,(function(e,t){return t||_[e]||s.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(n,p,d){var v,f=w.p(p),_=M(n),h=(_.utcOffset()-this.utcOffset())*e,m=this-_,y=w.m(this,_);return y=(v={},v[c]=y/12,v[o]=y,v[u]=y/3,v[l]=(m-h)/6048e5,v[r]=(m-h)/864e5,v[a]=m/t,v[s]=m/e,v[i]=m/1e3,v)[f]||m,d?y:w.a(y)},h.daysInMonth=function(){return this.endOf(o).$D},h.$locale=function(){return b[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=$(e,t,!0);return i&&(n.$L=i),n},h.clone=function(){return w.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},_}(),x=S.prototype;return M.prototype=x,[["$ms",n],["$s",i],["$m",s],["$H",a],["$W",r],["$M",o],["$y",c],["$D",p]].forEach((function(e){x[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),M.extend=function(e,t){return e.$i||(e(t,S,M),e.$i=!0),M},M.locale=$,M.isDayjs=g,M.unix=function(e){return M(1e3*e)},M.en=b[y],M.Ls=b,M.p={},M}()}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var a=t[i]={exports:{}};return e[i].call(a.exports,a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function t(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"beforeend";t.insertAdjacentElement(n,e.getElement())}class i{getTemplate(){return'<ul class="trip-events__list"></ul>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class s{getTemplate(){return'<li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime="2019-03-18">MAR 18</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">Taxi Amsterdam</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>\n            &mdash;\n            <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>\n          </p>\n          <p class="event__duration">30M</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">20</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n          <li class="event__offer">\n            <span class="event__offer-title">Order Uber</span>\n            &plus;&euro;&nbsp;\n            <span class="event__offer-price">20</span>\n          </li>\n        </ul>\n        <button class="event__favorite-btn event__favorite-btn--active" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class a{getTemplate(){return'<form class="event event--edit" action="#" method="post">\n      <header class="event__header">\n        <div class="event__type-wrapper">\n          <label class="event__type  event__type-btn" for="event-type-toggle-1">\n            <span class="visually-hidden">Choose event type</span>\n            <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n          </label>\n          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n          <div class="event__type-list">\n            <fieldset class="event__type-group">\n              <legend class="visually-hidden">Event type</legend>\n\n              <div class="event__type-item">\n                <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">\n                <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">\n                <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">\n                <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">\n                <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">\n                <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>\n                <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">\n                <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">\n                <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">\n                <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>\n              </div>\n            </fieldset>\n          </div>\n        </div>\n\n        <div class="event__field-group  event__field-group--destination">\n          <label class="event__label  event__type-output" for="event-destination-1">\n            Flight\n          </label>\n          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva" list="destination-list-1">\n          <datalist id="destination-list-1">\n            <option value="Amsterdam"></option>\n            <option value="Geneva"></option>\n            <option value="Chamonix"></option>\n          </datalist>\n        </div>\n\n        <div class="event__field-group  event__field-group--time">\n          <label class="visually-hidden" for="event-start-time-1">From</label>\n          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="19/03/19 00:00">\n          &mdash;\n          <label class="visually-hidden" for="event-end-time-1">To</label>\n          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="19/03/19 00:00">\n        </div>\n\n        <div class="event__field-group  event__field-group--price">\n          <label class="event__label" for="event-price-1">\n            <span class="visually-hidden">Price</span>\n            &euro;\n          </label>\n          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">\n        </div>\n\n        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n        <button class="event__reset-btn" type="reset">Cancel</button>\n      </header>\n      <section class="event__details">\n        <section class="event__section  event__section--offers">\n          <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n          <div class="event__available-offers">\n            <div class="event__offer-selector">\n              <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>\n              <label class="event__offer-label" for="event-offer-luggage-1">\n                <span class="event__offer-title">Add luggage</span>\n                &plus;&euro;&nbsp;\n                <span class="event__offer-price">30</span>\n              </label>\n            </div>\n\n            <div class="event__offer-selector">\n              <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" checked>\n              <label class="event__offer-label" for="event-offer-comfort-1">\n                <span class="event__offer-title">Switch to comfort class</span>\n                &plus;&euro;&nbsp;\n                <span class="event__offer-price">100</span>\n              </label>\n            </div>\n\n            <div class="event__offer-selector">\n              <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal">\n              <label class="event__offer-label" for="event-offer-meal-1">\n                <span class="event__offer-title">Add meal</span>\n                &plus;&euro;&nbsp;\n                <span class="event__offer-price">15</span>\n              </label>\n            </div>\n\n            <div class="event__offer-selector">\n              <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats">\n              <label class="event__offer-label" for="event-offer-seats-1">\n                <span class="event__offer-title">Choose seats</span>\n                &plus;&euro;&nbsp;\n                <span class="event__offer-price">5</span>\n              </label>\n            </div>\n\n            <div class="event__offer-selector">\n              <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">\n              <label class="event__offer-label" for="event-offer-train-1">\n                <span class="event__offer-title">Travel by train</span>\n                &plus;&euro;&nbsp;\n                <span class="event__offer-price">40</span>\n              </label>\n            </div>\n          </div>\n        </section>\n\n        <section class="event__section  event__section--destination">\n          <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n          <p class="event__destination-description">Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>\n\n          <div class="event__photos-container">\n            <div class="event__photos-tape">\n              <img class="event__photo" src="img/photos/1.jpg" alt="Event photo">\n              <img class="event__photo" src="img/photos/2.jpg" alt="Event photo">\n              <img class="event__photo" src="img/photos/3.jpg" alt="Event photo">\n              <img class="event__photo" src="img/photos/4.jpg" alt="Event photo">\n              <img class="event__photo" src="img/photos/5.jpg" alt="Event photo">\n            </div>\n          </div>\n        </section>\n      </section>\n    </form>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}var r=n(484),l=n.n(r);const o=(e,t)=>{const n=Math.ceil(Math.min(e,t)),i=Math.floor(Math.max(e,t)),s=Math.random()*(i-n+1)+n;return Math.floor(s)},u=(e,t)=>o(e,t),c=e=>e[Math.floor(Math.random()*e.length)],p=(e,t)=>{const n=e.map((e=>e.type)).indexOf(t),i=[];if(-1!==n){const t=e[n].offers;if(t){for(let e=0;e<t.length;e++)i.push(t[e].id.toString());return i}}return null},d=["Amsterdam","Alicante","Minsk","Tashkent","Chamonix","Geneva","Seoul","Sihanoukville","New York"],v=["Check-in","Sightseeing","Restaurant","Taxi","Bus","Train","Ship","Drive","Flight"],f=["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.","Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.","Fusce tristique felis at fermentum pharetra.","Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.","Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum."],_=["Aliquam erat volutpat.","Cras aliquet varius magna.","Phasellus eros mauris.","Fusce tristique felis.","Nullam nunc ex."],h=[{type:"check-in",offers:[{id:1,title:"Add breakfast",price:50}]},{type:"sightseeing",offers:[{id:10,title:"Book tickets",price:40},{id:20,title:"Lunch in city",price:30}]},{type:"restaurant",offers:[{id:100,title:"Brunch",price:20},{id:200,title:"Takeaway lunch",price:12},{id:321,title:"Cooking master class",price:30}]},{type:"taxi",offers:[{id:2341,title:"Order Uber",price:40}]},{type:"bus",offers:[{id:1541,title:"airport-hotel route",price:20},{id:442,title:"City tour",price:10}]},{type:"train",offers:[]},{type:"ship",offers:[]},{type:"drive",offers:[{id:71,title:"Rent a car",price:200},{id:82,title:"Car rental with driver",price:1e3}]},{type:"flight",offers:[{id:51,title:"Add luggage",price:50},{id:442,title:"Switch to comfort",price:80}]}],m=((e,t)=>{const n=[];return function(){let e=o(1,10);if(n.length>=10)return null;for(;n.includes(e);)e=o(1,10);return n.push(e),e}})(),y=()=>({id:m().toString(),description:c(f),name:c(d),pictures:Array.from({length:u(1,10)},(()=>({src:`https://loremflickr.com/248/152?random=${u(1,50)}`,description:c(_)})))});console.log(y()),console.log((()=>{const e=c(v),t=(()=>{const e=l()().add(u(1,30),"day").add(u(1,23),"hour").add(u(1,59),"minute"),t=e.clone().add(o(0,30),"day").add(o(0,23),"hour").add(o(0,59),"minute");return{start:e.toDate(),end:t.toDate()}})(),n=y();return{basePrice:u(100,2e3),dateFrom:t.start,dateTo:t.end,destination:n.id,isFavorite:Math.random()>.5,offers:p(h,e.toLowerCase()),type:e}})());const b=document.querySelector(".page-header").querySelector(".trip-controls__filters"),g=document.querySelector(".page-main").querySelector(".trip-events"),$=new class{waypointListComponent=new i;constructor(e){let{waypointListContainer:t,pointsModel:n}=e;this.waypointListContainer=t,this.pointsModel=n}init(){this.listPoints=[...this.pointsModel.getPoints()],t(this.waypointListComponent,this.waypointListContainer),t(new a(c(this.listPoints)),this.waypointListComponent.getElement());for(let e=0;e<this.listPoints.length;e++)t(new s({point:this.listPoints[e]}),this.waypointListComponent.getElement())}}({waypointListContainer:g});t(new class{getTemplate(){return'<form class="trip-filters" action="#" method="get">\n      <div class="trip-filters__filter">\n      <input id="filter-everything"\n      class="trip-filters__filter-input visually-hidden"\n      type="radio"\n      name="trip-filter"\n      value="everything"/>\n      <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future" />\n      <label class="trip-filters__filter-label" for="filter-future">Future</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present" />\n      <label class="trip-filters__filter-label" for="filter-present">Present</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked />\n      <label class="trip-filters__filter-label" for="filter-past">Past</label>\n    </div>\n      <button class="visually-hidden" type="submit">Accept filter</button>\n    </form>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}},b),t(new class{getTemplate(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n      <div class="trip-sort__item  trip-sort__item--day">\n      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n      <label class="trip-sort__btn" for="sort-day">Day</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--event">\n      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n      <label class="trip-sort__btn" for="sort-event">Event</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--time">\n      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n      <label class="trip-sort__btn" for="sort-time">Time</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--price">\n      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>\n      <label class="trip-sort__btn" for="sort-price">Price</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--offer">\n      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n      <label class="trip-sort__btn" for="sort-offer">Offers</label>\n    </div>\n    </form>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}},g),$.init()})()})();
//# sourceMappingURL=bundle.567ad093a2d7324a12eb.js.map