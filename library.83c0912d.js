var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),(i=r("krGWQ")).refs.btnLibWatched.addEventListener("click",(function(){i.refs.btnLibWatched.classList.add("js-active"),i.refs.btnLibQueue.classList.remove("js-active")})),i.refs.btnLibQueue.addEventListener("click",(function(){i.refs.btnLibQueue.classList.add("js-active"),i.refs.btnLibWatched.classList.remove("js-active")}));var i=r("krGWQ");!function(){if(!localStorage.getItem("DARK"))return;localStorage.getItem("DARK"),i.refs.body.classList.add("color"),i.refs.body.style.backgroundColor="rgba(0, 0, 0, 0.74)"}(),function(){if(!localStorage.getItem("LIGHT"))return;i.refs.body.style.backgroundColor="#FFF",i.refs.body.classList.remove("color"),localStorage.getItem("LIGHT")}();i=r("krGWQ");var o=r("dPQiT"),a=r("dSs1Y"),s=r("2BLwF"),l=r("2nhTy");const c=new(0,s.default),d=JSON.parse(localStorage.getItem("watched")),f=JSON.parse(localStorage.getItem("queue")),u=d.concat(f),g=u.filter(((e,t,n)=>n.indexOf(e)===t)),L={svgColor:"#FF6B08"};const b=Math.round(g.length/20);!function(){if(u)try{a.Loading.pulse(L),g.map((e=>{c.getFilmDetails(e).then((e=>{const t=(0,o.createLibraryMarkup)(e);i.refs.listLib.insertAdjacentHTML("beforeend",t)}))}))}catch(e){console.log(e.message)}finally{a.Loading.remove()}}(),(0,l.default)(1,b),i.refs.btnLibWatched.addEventListener("click",(function(){if(u){i.refs.listLib.innerHTML="";try{a.Loading.pulse(L),d.map((e=>{c.getFilmDetails(e).then((e=>{const t=(0,o.createLibraryMarkup)(e);i.refs.listLib.insertAdjacentHTML("beforeend",t)}))}))}catch(e){console.log(e.message)}finally{a.Loading.remove()}}})),i.refs.btnLibQueue.addEventListener("click",(function(){if(u){i.refs.listLib.innerHTML="";try{a.Loading.pulse(L),f.map((e=>{c.getFilmDetails(e).then((e=>{const t=(0,o.createLibraryMarkup)(e);i.refs.listLib.insertAdjacentHTML("beforeend",t)}))}))}catch(e){console.log(e.message)}finally{a.Loading.remove()}}})),g.length||i.refs.blockEmptyLib.classList.remove("is-hidden");document.querySelector(".pagination").addEventListener("click",(function(e){if("LI"!==e.target.nodeName)return;if("🡸"===e.target.textContent)return;if("🡺"===e.target.textContent)return;if("..."===e.target.textContent)return;let t=e.target.textContent;console.log(t)})),r("l4rFe"),r("dPQiT"),r("9V0Go"),r("jQfNB");
//# sourceMappingURL=library.83c0912d.js.map
