(()=>{var e,t,r={},o={};function n(e){if(o[e])return o[e].exports;var t=o[e]={id:e,exports:{}};return r[e].call(t.exports,t,t.exports,n),t.exports}n.m=r,n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>e+".bundle.js",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="Chords-Musicbox:",n.l=(r,o,a)=>{if(e[r])e[r].push(o);else{var i,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var s=l[u];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==t+a){i=s;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+a),i.src=r),e[r]=[o];var d=(t,o)=>{i.onerror=i.onload=null,clearTimeout(p);var n=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(o))),t)return t(o)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),c&&document.head.appendChild(i)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={179:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise(((r,n)=>{o=e[t]=[r,n]}));r.push(o[2]=a);var i=n.p+n.u(t),c=new Error;n.l(i,(r=>{if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}}),"chunk-"+t)}};var t=self.webpackChunkChords_Musicbox=self.webpackChunkChords_Musicbox||[],r=t.push.bind(t);t.push=t=>{for(var o,a,[i,c,l]=t,u=0,s=[];u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&s.push(e[a][0]),e[a]=0;for(o in c)n.o(c,o)&&(n.m[o]=c[o]);for(l&&l(n),r(t);s.length;)s.shift()()}})(),Promise.all([n.e(683),n.e(692)]).then((function(){var e=[n(5093),n(9503),n(6259),n(7340),n(6716),n(9313),n(3512),n(3147)];(function(e,t,r,o,n,a,i){var c="en";""!==window.location.search&&(c=window.location.search.substring(4)),i.load(c,(function(){e((function(){var e=document.createElement("DIV");e.id="Container",document.body.appendChild(e);var t=new r(e,"C3","C5"),i=new o(t.delayTime,"C3","G5");i.load((function(){window.parent.postMessage("loaded","*"),a()}));var c=new n(e);t.onNotes=function(e,t,r){i.play(e)},c.onChange=function(e){t.setMode(e)}}))}))}).apply(null,e)})).catch(n.oe)})();