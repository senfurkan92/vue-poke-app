(function(){"use strict";var e={9367:function(e,t,n){var o=n(9242),r=n(7889),i=n(3396),s=n(4870);const a={class:"wrapper","data-theme":"fantasy"};function l(e,t){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",a,[(0,i.WI)(e.$slots,"header",{},void 0,!0),(0,i.WI)(e.$slots,"main",{},void 0,!0),(0,i.WI)(e.$slots,"footer",{},void 0,!0)]),(0,i.WI)(e.$slots,"sidebar",{},void 0,!0)],64)}var c=n(89);const u={},d=(0,c.Z)(u,[["render",l],["__scopeId","data-v-7c6909f0"]]);var f=d,p=n(7139);const h={class:"text-right"},m=(0,i._)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,i._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),v=[m];var g={name:"app-sidebar",props:{position:{type:String,default:"left"},isShow:{type:Boolean,default:!1}},setup(e){const t=e;return(e,n)=>((0,i.wg)(),(0,i.iD)("div",{class:"fixed top-0 left-0 overflow-x-hidden z-50 transition-all bg-slate-700/60",style:(0,p.j5)({width:t.isShow?"100vw":"0vw"})},[(0,i._)("div",{class:(0,p.C_)(["bg-white overflow-y-auto rounded-r-xl",{"right-0":"right"==t.position,"left-0":"left"==t.position}]),style:{width:"clamp(325px, 75% ,600px)",height:"100vh"}},[(0,i._)("div",h,[(0,i._)("button",{class:"btn btn-square btn-ghost hover:bg-red-400 hover:text-white rounded-none rounded-bl-lg rounded-tr-lg",onClick:n[0]||(n[0]=t=>e.$emit("close"))},v)]),(0,i.WI)(e.$slots,"default")],2)],4))}};const b=g;var w=b;const k={class:"flex flex-col items-center"},y=(0,i.Uk)(" Home "),x=(0,i.Uk)(" Pokemons "),_=(0,i.Uk)(" Berries "),E=(0,i.Uk)(" Evolutions ");function O(e,t){const n=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",k,[(0,i.Wm)(n,{to:{name:"home"},class:"pb-3 text-xl hover:text-pink-400 hover:underline transition-all","active-class":"text-violet-600 scale-105"},{default:(0,i.w5)((()=>[y])),_:1}),(0,i.Wm)(n,{to:{name:"pokemons"},class:"pb-3 text-xl hover:text-pink-400 hover:underline transition-all","active-class":"text-violet-600 scale-105"},{default:(0,i.w5)((()=>[x])),_:1}),(0,i.Wm)(n,{to:{name:"berries"},class:"pb-3 text-xl hover:text-pink-400 hover:underline transition-all","active-class":"text-violet-600 scale-105"},{default:(0,i.w5)((()=>[_])),_:1}),(0,i.Wm)(n,{to:{name:"evolutions"},class:"pb-3 text-xl hover:text-pink-400 hover:underline transition-all","active-class":"text-violet-600 scale-105"},{default:(0,i.w5)((()=>[E])),_:1})])}const S={},C=(0,c.Z)(S,[["render",O]]);var j=C;const T={class:"flex border-b shadow sticky top-0 z-30 bg-white"},$={class:"h-100"},A=(0,i._)("div",{class:"text-2xl h-100 self-center px-5"},"Header",-1),P={class:"container mx-auto md:py-10 py-5"},N=(0,i._)("div",{class:"flex border-t shadow"},[(0,i._)("div",{class:"container mx-auto"}," Footer ")],-1);var W={name:"App",setup(e){const t=(0,s.iH)(!1);return(e,n)=>{const o=(0,i.up)("menu-2-icon"),r=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(f,null,{header:(0,i.w5)((()=>[(0,i._)("div",T,[(0,i._)("div",$,[(0,i._)("button",{class:"btn btn-outline border-0 btn-square rounded-none",onClick:n[0]||(n[0]=e=>t.value=!0)},[(0,i.Wm)(o)])]),A])])),main:(0,i.w5)((()=>[(0,i._)("main",P,[(0,i.Wm)(r)])])),footer:(0,i.w5)((()=>[N])),sidebar:(0,i.w5)((()=>[(0,i.Wm)(w,{position:"left",isShow:t.value,onClose:n[1]||(n[1]=e=>t.value=!1)},{default:(0,i.w5)((()=>[(0,i.Wm)(j)])),_:1},8,["isShow"])])),_:1})}}};const B=W;var F=B,I=n(5431);(0,I.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var L=n(678);function M(e,t){return(0,i.wg)(),(0,i.iD)("div",null," Home ")}const D={},H=(0,c.Z)(D,[["render",M]]);var U=H,q=[{path:"/",component:U,alias:["/home"],name:"home"},{path:"/pokemons",component:()=>n.e(776).then(n.bind(n,7776)),alias:["/pokes"],name:"pokemons"},{path:"/pokemons/:id",component:()=>n.e(192).then(n.bind(n,8192)),alias:["/pokes/:id"],name:"pokemons-id"},{path:"/berries",component:()=>n.e(104).then(n.bind(n,8104)),name:"berries"},{path:"/berries/:id",component:()=>n.e(561).then(n.bind(n,9561)),name:"berries-id"},{path:"/evolutions",component:()=>n.e(354).then(n.bind(n,9354)),name:"evolutions"}];const Z=(0,L.p7)({routes:q,history:(0,L.PO)()});var z=Z,K=n(65),R=n(6265),Y=n.n(R),G=Y().create({baseURL:"https://pokeapi.co/api/v2"}),J={namespaced:!0,state(){return{total:-1,list:[],limit:12}},getters:{allFetched(e){return e.total===e.list.length}},mutations:{setTotal(e,t){e.total=t},pushPokemons(e,t){e.list=[...e.list,...t]},setSingleSprite(e,t){const n=e.list.find((e=>e.id===t.id));n.imgSrc=t.sprite}},actions:{async fetchPokemons({state:e,commit:t}){if(e.total!==e.list.length){const n=e.list.length,o=`/pokemon/?limit=${e.limit}&offset=${n}`,r=await G.get(o);t("setTotal",r.data.count);const i=r.data.results.map((e=>({id:Number(e.url.split("/")[6]),name:e.name,url:e.url,imgSrc:""})));t("pushPokemons",i);const s=[];i.forEach((e=>{const t=`/pokemon/${e.id}`;s.push(G.get(t))}));const a=await Y().all(s);a.forEach((e=>{const n={id:e.data.id,sprite:e.data.sprites.front_default};t("setSingleSprite",n)}))}return!0},fetchPokemon(e,t){return G.get(`/pokemon/${t}`)}}},Q={namespaced:!0,state(){return{total:-1,list:[],limit:12}},getters:{allFetched(e){return e.total===e.list.length}},mutations:{setTotal(e,t){e.total=t},pushBerries(e,t){e.list=[...e.list,...t]}},actions:{async fetchBerries({state:e,commit:t}){if(e.total!==e.list.length){const n=e.list.length,o=`/berry/?limit=${e.limit}&offset=${n}`,r=await G.get(o);t("setTotal",r.data.count);const i=r.data.results.map((e=>({id:Number(e.url.split("/")[6]),name:e.name,url:e.url,imgSrc:""})));t("pushBerries",i)}return!0},fetchBerry(e,t){return G.get(`/berry/${t}`)}}};n(6699);function V(e,t,n,o=0){const r={chainOrder:o,name:e.species.name,pokeId:Number(e.species.url.toString().split("/")[6])};e.evolves_to.length>0&&e.evolves_to.forEach((e=>V(e,t,n,o+1)));let i=n.find((e=>e.chainId===t));if(i){const e=i.chainOrders.find((e=>e.no===r.chainOrder));e?e.list.push(r):i.chainOrders.push({no:r.chainOrder,list:[r]})}else i={chainId:t,chainOrders:[{no:r.chainOrder,list:[r]}]},n.push(i)}var X={namespaced:!0,state(){return{total:-1,list:[],limit:12}},getters:{allFetched(e){return e.total===e.list.length},getArrangedEvos(e){const t=[...e.list].filter((e=>null!=e));if(t){const e=[];return t.forEach((t=>{V(t.chain,t.id,e)})),e}return[]}},mutations:{setTotal(e,t){e.total=t},pushEvolutions(e,t){e.list=[...e.list,...t]}},actions:{async fetchEvolutions({state:e,commit:t}){if(e.total!==e.list.length){const o="/evolution-chain/?limit=1&offset=0",r=await G.get(o);t("setTotal",r.data.count);const i=e.list.length,s=Math.min(i+e.limit,e.total),a=[];for(let e=i+1;e<=s;e++){const t=[210,222,226,225,227,231,238,251],n=`/evolution-chain/${t.includes(e)?1:e}`;a.push(G.get(n))}const l=[];try{const e=await Y().all(a);e.forEach((e=>{try{const t={id:e.data.id,chain:e.data.chain};l.push(t)}catch(t){console.log("1. error"),l.push(null)}}))}catch(n){console.log("2. error"),l.push(null)}t("pushEvolutions",l)}return!0},fetchEvolution(e,t){return G.get(`/evolution/${t}`)}}},ee=(0,K.MT)({modules:{pokemons:J,berries:Q,evolutions:X}});const te=(0,o.ri)(F);te.use(z),te.use(ee),te.use(r.ZPm),te.mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var s=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],i=e[u][2];for(var a=!0,l=0;l<o.length;l++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(a=!1,i<s&&(s=i));if(a){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{104:"59c4db74",192:"570be2a6",354:"d7e6626a",561:"9630c96d",776:"b03b61b9"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{104:"0264b5d0",354:"a67fb473",776:"40d1cfd6"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-poke-app:";n.l=function(o,r,i,s){if(e[o])e[o].push(r);else{var a,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){a=d;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=o),e[o]=[r];var f=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)n();else{var s=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=a,r.parentNode.removeChild(r),o(l)}};return r.onerror=r.onload=i,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){r=s[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var s=n.miniCssF(o),a=n.p+s;if(t(s,a))return r();e(o,a,r,i)}))},r={143:0};n.f.miniCss=function(e,t){var n={104:1,354:1,776:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var s=n.p+n.u(t),a=new Error,l=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,r[1](a)}};n.l(s,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,s=o[0],a=o[1],l=o[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(l)var u=l(n)}for(t&&t(o);c<s.length;c++)i=s[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},o=self["webpackChunkvue_poke_app"]=self["webpackChunkvue_poke_app"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9367)}));o=n.O(o)})();
//# sourceMappingURL=app.5ac21c20.js.map