(()=>{var e,t,r={},n={};function o(e){if(n[e])return n[e].exports;var t=n[e]={id:e,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.exports}o.m=r,o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[])),o.u=e=>e+".bundle.js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="Melody:",o.l=(r,n,a)=>{if(e[r])e[r].push(n);else{var i,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var l=u[s];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+a){i=l;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+a),i.src=r),e[r]=[n];var d=(t,n)=>{i.onerror=i.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),c&&document.head.appendChild(i)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={179:0};o.f.j=(t,r)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((r,o)=>{n=e[t]=[r,o]}));r.push(n[2]=a);var i=o.p+o.u(t),c=new Error;o.l(i,(r=>{if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,n[1](c)}}),"chunk-"+t)}};var t=self.webpackChunkMelody=self.webpackChunkMelody||[],r=t.push.bind(t);t.push=t=>{for(var n,a,[i,c,u]=t,s=0,l=[];s<i.length;s++)a=i[s],o.o(e,a)&&e[a]&&l.push(e[a][0]),e[a]=0;for(n in c)o.o(c,n)&&(o.m[n]=c[n]);for(u&&u(o),r(t);l.length;)l.shift()()}})(),Promise.all([o.e(811),o.e(149)]).then((function(){var e=[o(93),o(503),o(493),o(987),o(491),o(112),o(365)];(function(e,t,r,n,o,a,i){e((function(){const e=a.Transport;window.parent.postMessage("loaded","*");var t=new r(document.body);new n(document.body).onDirection=function(e){t.setDirection(e)};var c=new i;new o((function(e,r){var n=t.select(r);c.play(n,e)})),t.onNote=function(e){c.tap(e)},e.on("stop",(function(){t.select(-1)}));var u=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,s=/Android/.test(navigator.userAgent)&&!window.MSStream;u||s?window.addEventListener("touchstart",(function(){"running"!==a.context.state&&a.context.resume()}),!1):document.documentElement.addEventListener("click",(function(){"running"!==a.context.state&&a.context.resume()}),!1),window.parent.postMessage("ready","*")}))}).apply(null,e)})).catch(o.oe)})();