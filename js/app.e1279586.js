(function(){"use strict";var e={4829:function(e,t,n){var r=n(9242),o=(n(7658),n(3396)),a=n(7139),i=n(4870),s=n(8216),u=JSON.parse('{"bussinesCard":{"name":"Яна","description":"Frontend-разработчик","phone":"Телефон"},"aboutMe":{"header":"Обо мне","texts":[{"s":"Быстро и легко учусь.","t":"В начале карьеры освоила основы HTML, CSS и JS за месяц и сделала свой первый проект в агентстве. Кроме того, в дальнейшем приходилось в короткие сроки учиться использовать и внедрять различные библиотеки (PIXI.js, Babylon.js) и работать с незнакомым legacy-кодом."},{"s":"Имею продвинутый уровень владения английским (B2-C1),","t":"подтверждённый международными сертификатами (IELTS, CAE). Свободно говорю, читаю и пишу на английском, в том числе могу работать с технической документацией."},{"s":"Умению мыслить креативно","t":"Всегда стараюсь самостоятельно найти решение даже самых сложных задач. Готова предлагать идеи по улучшению продукта и процессов."},{"s":"Ответственна.","t":"Выполняю задачи в установленные сроки."},{"s":"Открыта новому.","t":"Я с удовольствием изучаю новые технологии и берусь за нетривиальные задачи."}]},"hardSkills":{"header":"Технические навыки","rDesign":"Отзывчивый дизайн","aDesign":"Адаптивный дизайн"},"projects":{"header":"Некоторые из моих проектов","products":"Продукты","games":"Игры","petProjects":"Pet-проекты"},"navigation":{"contactMe":"Визитка","aboutMe":"Обо мне","hardSkills":"Тех. навыки","projects":"Проекты"}}'),c=JSON.parse('{"bussinesCard":{"name":"Iana","description":"Frontend developer","phone":"Phone"},"aboutMe":{"header":"About me","texts":[{"s":"Fast-leaner.","t":"At the beginning of my career, I mastered the basics of HTML, CSS and JavaScript in a monthafter which I was able to make my first project. In addition, in the future I had to learn to use and implement various libraries (PIXI.js, Babylon.js) in a short time and work with unfamiliar legacy code and etc."},{"s":"Advanced level of English (B2-C1),","t":"confirmed by international certificates (IELTS, CAE). I speak English fluently, and, besides, I am capable of reading and discussing technical documentation."},{"s":"Thinking outside the box","t":"I am always ready to look for solutions to problems, event to the most difficult ones, and to propose ideas for improvement."},{"s":"Responsibility.","t":"I complete tasks on time."},{"s":"Open-minded.","t":"I enjoy learning new technologies and taking on non-trivial tasks."}]},"hardSkills":{"header":"Hard Skills","rDesign":"Responsive Design","aDesign":"Adaptive Design"},"projects":{"header":"Some of my projects","products":"Products","games":"Web-games","petProjects":"Pet-projects"},"navigation":{"contactMe":"Contact me","aboutMe":"About me","hardSkills":"Hard skills","projects":"Projects"}}'),l=n(2483);const d={class:"footer"};var f={__name:"App",setup(e){const t=(0,l.tv)(),n=localStorage.getItem("languageDefault")||"ru";let r=(0,i.iH)(n),f=(0,o.Fl)((()=>"ru"===r.value?u:c));function p(){let e="ru"===r.value?"en":"ru";r.value=e,localStorage.setItem("languageDefault",e)}function m(e){t.push(e)}const h=(0,o.Fl)((()=>"ru"===r.value?"EN":"RU"));(0,o.JJ)("translations",f),(0,o.bv)((()=>{let e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`),window.addEventListener("resize",(()=>{e=.01*window.innerHeight,document.documentElement.style.setProperty("--vh",`${e}px`)}))}));const v=(0,o.Fl)((()=>{const e=f.value.navigation;return[{title:e.contactMe,router:"home",url:"/"},{title:e.aboutMe,router:"about-me",url:"/about-me"},{title:e.hardSkills,router:"hard-skills",url:"/hard-skills"},{title:e.projects,router:"projects",url:"/projects"}]}));return(e,t)=>{const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(n),(0,o._)("div",{onClick:p,class:"language-changer"},(0,a.zw)((0,i.SU)(h)),1),(0,o._)("div",d,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,i.SU)(v),(e=>((0,o.wg)(),(0,o.j4)(s.Z,{key:e.router,title:e.title,router:e.router,onClick:t=>m(e.url)},null,8,["title","router","onClick"])))),128))])],64)}}};const p=f;var m=p;const h=e=>((0,o.dD)("data-v-577db954"),e=e(),(0,o.Cn)(),e),v={class:"business-card"},b={class:"business-card__inner"},g={class:"business-card__side business-card__side_front"},_={class:"business-card__h1","data-test":"name"},y={class:"business-card__p business-card__p_front"},k=h((()=>(0,o._)("div",{class:"business-card__side business-card__side_back"},[(0,o._)("p",{class:"business-card__p"},[(0,o._)("strong",null,"E-mail: "),(0,o.Uk)(" nglb.mainpoint@yandex.ru ")]),(0,o._)("p",{class:"business-card__p"},[(0,o._)("strong",null,"Telegram: "),(0,o.Uk)("@YadaYadaYana")])],-1)));var w={__name:"BusinessCard",setup(e){const t=(0,o.f3)("translations");return(e,n)=>((0,o.wg)(),(0,o.iD)("div",v,[(0,o._)("div",b,[(0,o._)("div",g,[(0,o._)("h1",_,(0,a.zw)((0,i.SU)(t).bussinesCard.name),1),(0,o._)("p",y,(0,a.zw)((0,i.SU)(t).bussinesCard.description),1)]),k])]))}},S=n(89);const j=(0,S.Z)(w,[["__scopeId","data-v-577db954"]]);var C=j;const E={class:"home"};var I={__name:"HomePage",setup(e){return(e,t)=>((0,o.wg)(),(0,o.iD)("div",E,[(0,o.Wm)(C)]))}};const P=I;var O=P;const A=[{path:"/",name:"home",component:O},{path:"/about-me",name:"about-me",component:()=>n.e(462).then(n.bind(n,7462))},{path:"/projects",name:"projects",component:()=>n.e(191).then(n.bind(n,1191))},{path:"/hard-skills",name:"hard-skills",component:()=>n.e(166).then(n.bind(n,2166))}],D=(0,l.p7)({history:(0,l.PO)("/personal-website/"),routes:A});var T=D;(0,r.ri)(m).use(T).mount("#app")},8216:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(3396),o=n(7139);const a={for:"dot",class:"label"};function i(e,t,n,i,s,u){return(0,r.wg)(),(0,r.iD)("div",{class:"dot-link",onClick:t[0]||(t[0]=t=>e.$emit("openPage",n.title))},[(0,r._)("div",{class:(0,o.C_)(["dot",{"dot-current":u.currentRouteName===n.router}]),name:"dot"},null,2),(0,r._)("label",a,(0,o.zw)(n.title),1)])}var s={name:"DotLink",props:{title:String,router:String},computed:{currentRouteName(){return this.$route.name}}},u=n(89);const c=(0,u.Z)(s,[["render",i],["__scopeId","data-v-cf0fa56c"]]);var l=c}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{166:"386bdc73",191:"30ced90b",462:"6c300428"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{166:"1e8554a2",191:"e746562d"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="bravo2:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[o];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/personal-website/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,a.parentNode&&a.parentNode.removeChild(a),o(u)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),s=n.p+i;if(t(i,s))return o();e(r,s,null,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={166:1,191:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),s=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],s=r[1],u=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var l=u(n)}for(t&&t(r);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},r=self["webpackChunkbravo2"]=self["webpackChunkbravo2"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4829)}));r=n.O(r)})();
//# sourceMappingURL=app.e1279586.js.map