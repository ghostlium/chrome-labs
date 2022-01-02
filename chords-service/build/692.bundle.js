(self.webpackChunkChords_Musicbox=self.webpackChunkChords_Musicbox||[]).push([[692],{9313:(t,e,i)=>{var s,o;s=[i(8394),i(6985)],void 0===(o=function(t,e){return function(){var t=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,i=/Android/.test(navigator.userAgent)&&!window.MSStream;t||i?window.addEventListener("touchstart",(function(){"running"!==e.context.state&&e.context.resume()}),!1):document.documentElement.addEventListener("click",(function(){"running"!==e.context.state&&e.context.resume()}),!1),window.parent.postMessage("ready","*")}}.apply(e,s))||(t.exports=o)},3147:()=>{!function(){var t=navigator.userAgent,e="ontouchstart"in document.documentElement,i=t.match(/iPhone|iPad|iPod/i),s=document.createElement("div"),o=document.createElement("div"),n=document.createElement("style");n.innerText="#start:active, #start:focus { transform: scale(1.1); };",document.head.appendChild(n),e&&(s.style.top=0,s.style.left=0,s.style.position="absolute",s.style.height="100%",s.style.width="100%",s.style.textAlign="center",s.style.zIndex=99999,o.style.borderRadius="5px",o.style.font="normal 4vmin/6vmin Poppins, Helvetica, Arial",o.style.color="white",o.style.margin="0 auto",o.style.zIndex=999,o.style.textAlign="center",o.style.padding="10px",i?(o.style.background="#707070",o.style.marginTop="15%",o.style.width="75%",o.innerText="Heads up - if you have your iOS device in Silent Mode, audio playback is affected."):(s.style.display="flex",s.style.alignItems="center",s.style.background="#fff",o.style.padding="0",o.id="start",o.style.width="5pc",o.style.height="5pc",o.style.display="flex",o.style.alignItems="center",o.style.justifyContent="center",o.style.lineHeight="5pc",o.style.backgroundColor="#fff",o.style.boxShadow="0 0 10px 0 rgba(0, 0, 0, 0.4)",o.style.borderRadius="50%",o.style.color="#646464",o.style.transition="transform .05s ease-in",o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>'),s.appendChild(o),document.body.appendChild(s));var h=!i&&e?document.querySelector("#start"):window,r=!i&&e?"touchend":"touchstart";h.addEventListener(r,(function t(){o.style.display="none",s.style.display="none",h.removeEventListener(r,t,!1)}),!1)}()},3512:(t,e,i)=>{var s;void 0===(s=function(){var t=null,e=0;return{load:function(i,s){var o=new XMLHttpRequest;o.open("GET","https://gweb-musiclab-site.appspot.com/static/locales/"+i+"/locale-music-lab.json"),o.onreadystatechange=function(){if(4===o.readyState)if(200===o.status){var i=JSON.parse(o.responseText);t=i,s()}else e<3&&(e++,this.load("en",s))}.bind(this),o.send(null)},localize:function(e){return t&&t[e]?t[e].message:e},localizeChord:function(e,i){var s,o=e+"_"+((s=i).charAt(0).toUpperCase()+s.substr(1))+"_Chord";return t&&t[o]?t[o].message:e+"  "+i+" chord"}}}.call(e,i,e,t))||(t.exports=s)},5392:(t,e,i)=>{var s;void 0===(s=function(){return{charcoal:"rgb(50,51,52)",lightGrey:"rgb(223,224,225)",grey:"rgb(204, 204, 204)",orange:"#FFB729",blue:"rgb(22, 168, 240)",lightBlue:"rgb(131, 211, 248)",C:"#4e61d8","C#":"#8064c6",Db:"#8064c6",D:"#a542b1","D#":"#ed3883",Eb:"#ed3883",E:"#f75839",F:"#f7943d","F#":"#f6be37",Gb:"#f6be37",G:"#d1c12e","G#":"#95c631",Ab:"#95c631",A:"#4bb250","A#":"#45b5a1",Bb:"#45b5a1",B:"#4598b6"}}.call(e,i,e,t))||(t.exports=s)},6259:(t,e,i)=>{var s,o;s=[i(9696),i(5079),i(6153),i(6985)],void 0===(o=function(t,e,i,s){var o=function(e,i,o){this.element=document.createElement("DIV"),this.element.id="Piano",e.appendChild(this.element),this.piano=new t(this.element,i,o),this.piano.setHighlightColor("#ffb729"),this.piano.onkeydown=this.clicked.bind(this),this.piano.oncontextstart=function(){s.start()},this.onNotes=function(){},this.selected=[],this.mode="major",this.key=null,this.timeouts={},window.addEventListener("resize",function(){this.piano._resize()}.bind(this))};return o.prototype.delayTime=.05,o.prototype.clicked=function(t){s.start(),this.setChord(t)},o.prototype.setChord=function(t){this.clearTimeouts();var e=i.note(t);this.key=e;var s=e.chord(this.mode).notes();this.unselectAll();for(var o=[],n=0;n<s.length;n++){chordNote=s[n];var h=chordNote.midi(),r=i.note.fromMIDI(h).scientific();this.piano.keyDown(r),o.push(r),this.triggerNote(r,this.delayTime*(n+1))}this.onNotes(o,this.key.name()+this.key.accidental(),this.mode)},o.prototype.triggerNote=function(t,e){this.timeouts[t]=setTimeout(function(){this.piano.highlight(t,"#996e19","#996e19"),this.timeouts[t]=setTimeout(function(){this.piano.keyDown(t)}.bind(this),1200*this.delayTime)}.bind(this),1e3*e)},o.prototype.clearTimeouts=function(){for(var t in this.timeouts)clearTimeout(this.timeouts[t]);this.timeouts={}},o.prototype.setMode=function(t){this.mode=t,this.key&&this.setChord(this.key.scientific())},o.prototype.unselectAll=function(){this.piano.unselectAll()},o}.apply(e,s))||(t.exports=o)},6716:(t,e,i)=>{var s,o;s=[i(4478),i(5859),i(3512)],void 0===(o=function(t,e,i){var s=function(t){this.element=document.createElement("DIV"),this.element.id="ToggleContainer",t.appendChild(this.element),this.toggle=new e(this.element,i.localize("Chords_UI_Minor"),i.localize("Chords_UI_Major"),!0),this.toggle.onchange=this.toggled.bind(this),this.onChange=function(){}};return s.prototype.toggled=function(t){this.onChange(t?"major":"minor")},s}.apply(e,s))||(t.exports=o)},5859:(t,e,i)=>{var s,o;s=[i(9582)],void 0===(o=function(t,e){var i=function(t,e,i,s){this._value=!1,this._container=document.createElement("div"),this._container.classList.add("Toggle"),t.appendChild(this._container),this._slider=document.createElement("div"),this._slider.id="Slider",this._container.appendChild(this._slider),this._sliderRailing=document.createElement("div"),this._sliderRailing.id="Rail",this._slider.appendChild(this._sliderRailing),this._sliderHandle=document.createElement("div"),this._sliderHandle.id="Handle",this._slider.appendChild(this._sliderHandle),this._slider.addEventListener("mousedown",this._change.bind(this)),this._slider.addEventListener("touchstart",this._change.bind(this)),this._leftLabel=document.createElement("div"),this._leftLabel.id="Left",this._leftLabel.classList.add("Label"),this._leftLabel.textContent=e||"",this._leftLabel.addEventListener("mousedown",this._setFalse.bind(this)),this._leftLabel.addEventListener("touchstart",this._setFalse.bind(this)),this._container.appendChild(this._leftLabel),this._rightLabel=document.createElement("div"),this._rightLabel.id="Right",this._rightLabel.classList.add("Label"),this._rightLabel.textContent=i||"",this._rightLabel.addEventListener("mousedown",this._setTrue.bind(this)),this._rightLabel.addEventListener("touchstart",this._setTrue.bind(this)),this._container.appendChild(this._rightLabel),this.onchange=function(){},this.setValue(s||!1)};return i.prototype._change=function(t){t.preventDefault(),this._value=!this._value,this._update(),this.onchange(this.getValue())},i.prototype._update=function(){this.getValue()?(this._rightLabel.classList.add("Selected"),this._leftLabel.classList.remove("Selected"),this._slider.classList.add("Right")):(this._rightLabel.classList.remove("Selected"),this._leftLabel.classList.add("Selected"),this._slider.classList.remove("Right"))},i.prototype.setValue=function(t){this._value=t,this._update()},i.prototype._setFalse=function(t){t.preventDefault(),this._value=!1,this._update(),this.onchange(this.getValue())},i.prototype._setTrue=function(t){t.preventDefault(),this._value=!0,this._update(),this.onchange(this.getValue())},i.prototype.getValue=function(){return this._value},i}.apply(e,s))||(t.exports=o)},2640:(t,e,i)=>{var s,o;s=[i(5392)],void 0===(o=function(t){"use strict";var e=function(t,e){this.note=t,this._offset=e,this.isSharp=-1!==this.note.indexOf("#"),this._isHighlighted=!1,this._highlightColor="",this.setHighlightColor("rainbow"),this._computeBoundingBox()};return e.prototype._computeBoundingBox=function(){var t=this.isSharp?.6:1,e=this.isSharp?.7:1,i=this.isSharp?(1-e)/2:0;return[this._offset+i,0,e,t]},e.prototype._getNoteName=function(){var t=this.note.split(/(-?\d+)/);if(3===t.length)return t[0].toUpperCase()},e.prototype.highlight=function(t){return this._isHighlighted=!0,this._highlightColor=t,this},e.prototype.unhighlight=function(){return this._isHighlighted=!1,this},e.prototype.setHighlightColor=function(e){return this._highlightColor="rainbow"===e?t[this._getNoteName()]:e,this},e.prototype.setStartNote=function(t){this._startNote=t,this._computeBoundingBox()},e.prototype.setEndNote=function(t){this._endNote=t,this._computeBoundingBox()},e.prototype.testCollision=function(t,e){var i=this._computeBoundingBox();if(i[0]<=t&&i[0]+i[2]>=t&&i[1]<=e&&i[3]>=e)return!0},e.prototype.draw=function(e,i,s){e.beginPath(),this._isHighlighted?e.fillStyle=this._highlightColor:e.fillStyle=this.isSharp?t.charcoal:"white";var o=this._computeBoundingBox();return o[0]=Math.round(i*o[0]),o[2]=Math.round(i*o[2]),o[1]=Math.round(s*o[1]),o[3]=Math.round(s*o[3]),e.rect.apply(e,o),e.fill(),this.isSharp||this._isHighlighted||e.stroke(),this},e}.apply(e,s))||(t.exports=o)},7016:(t,e,i)=>{var s;void 0===(s=function(){var t=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];return{getNotes:function(e,i){var s=parseInt(e.split(/(-?\d+)/)[1]),o=e.split(/(-?\d+)/)[0];o=t.indexOf(o);var n=parseInt(i.split(/(-?\d+)/)[1]),h=i.split(/(-?\d+)/)[0];h=t.indexOf(h);for(var r=o,a=s,l=[];r!==h||a!==n;)l.push(t[r]+a),++r>=t.length&&(r=0,a++);return l},getDistanceBetween:function(t,e){for(var i=this.getNotes(t,e),s=0,o=0;o<i.length;o++){var n=i[o];"E"!==n[0]&&"B"!==n[0]||"#"===n[1]?s+=.5:s+=1}return s}}}.call(e,i,e,t))||(t.exports=s)},9696:(t,e,i)=>{var s,o;s=[i(2640),i(6893),i(7016),i(5392)],void 0===(o=function(t,e,i,s){var o={"C#":"Db","D#":"Eb","F#":"Gb","G#":"Ab","A#":"Bb"},n=function(t,e,i){this._canvas=document.createElement("canvas"),this._canvas.id="PianoKeyboard",t.appendChild(this._canvas),this._context=this._canvas.getContext("2d"),this._container=t,this._startNote=e||"C4",this._endNote=i||"C6",this._notes=[],this._noteNames={},this._isMouseDown=!1,this._touchDragged=!1,this._contextStarted=!1,this._highlightedKeys=[],this._highlightColor="#FFB729",window.addEventListener("resize",this._resize.bind(this)),this._canvas.addEventListener("mousedown",this._mouseDown.bind(this)),this._canvas.addEventListener("mousemove",this._mouseMove.bind(this)),this._canvas.addEventListener("mouseup",this._mouseUp.bind(this)),this._canvas.addEventListener("mouseleave",this._mouseLeave.bind(this)),this._canvas.addEventListener("touchstart",this._touchStart.bind(this)),this._canvas.addEventListener("touchend",this._touchEnd.bind(this)),this._canvas.addEventListener("touchmove",this._touchMove.bind(this)),this._makeKeys(),this._resize(),this.onkeydown=function(){},this.onkeyup=function(){},this.oncontextstart=function(){}};return n.prototype._resize=function(){this._context.canvas.width=2*this._container.clientWidth,this._context.canvas.height=2*this._container.clientHeight,this.draw()},n.prototype.draw=function(){var t=this._context.canvas.width,e=this._context.canvas.height;this._context.lineWidth=2,this._context.clearRect(0,0,t,e),this._context.strokeStyle=s.lightGrey;for(var o,n=t/i.getDistanceBetween(this._startNote,this._endNote),h=0;h<this._keys.length;h++)(o=this._keys[h]).isSharp||o.draw(this._context,n,e);for(var r=0;r<this._keys.length;r++)(o=this._keys[r]).isSharp&&o.draw(this._context,n,e);return this._context.beginPath(),this._context.lineWidth=4,this._context.rect(0,0,t,e),this._context.stroke(),this},n.prototype._getCollision=function(t,e){var s,o,n=i.getDistanceBetween(this._startNote,this._endNote);t=2*t/(this._context.canvas.width/n),e=2*e/this._context.canvas.height;for(var h=0;h<this._keys.length;h++)if((s=this._keys[h]).isSharp&&s.testCollision(t,e)){o=s;break}if(!o)for(var r=0;r<this._keys.length;r++)if(!(s=this._keys[r]).isSharp&&s.testCollision(t,e)){o=s;break}return o},n.prototype._makeKeys=function(){this._notes=i.getNotes(this._startNote,this._endNote),this._keys=[];for(var e=0;e<this._notes.length;e++){var s=this._notes[e],n=new t(s,i.getDistanceBetween(this._startNote,s));this._noteNames[s]=n;var h=s.substr(0,2);if(o.hasOwnProperty(h)){var r=s.substr(2);this._noteNames[o[h]+r]=n}this._keys.push(n)}return this},n.prototype._mouseDown=function(t){t.preventDefault();var e=this._getCollision(t.offsetX,t.offsetY);this._isMouseDown=!0,e&&(this._highlightedKeys.push(e),this.onkeydown(e.note))},n.prototype._mouseUp=function(t){t.preventDefault();var e=this._getCollision(t.offsetX,t.offsetY);this._isMouseDown=!1,e&&(this._highlightedKeys.splice(this._highlightedKeys.indexOf(e),1),this.onkeyup(e.note))},n.prototype._mouseLeave=function(t){t.preventDefault(),this._isMouseDown=!1;for(var e=0;e<this._highlightedKeys.length;e++)this.onkeyup(this._highlightedKeys[e].note);this._highlightedKeys=[]},n.prototype._mouseMove=function(t){if(this._isMouseDown){t.preventDefault();var e=this._getCollision(t.offsetX,t.offsetY);if(-1===this._highlightedKeys.indexOf(e)){for(var i=0;i<this._highlightedKeys.length;i++)this.onkeyup(this._highlightedKeys[i].note);this._highlightedKeys=[],e&&(this._highlightedKeys.push(e),this.onkeydown(e.note))}}},n.prototype._touchStart=function(t){t.preventDefault();for(var e=this._container.getBoundingClientRect(),i=t.changedTouches,s=0;s<i.length;s++){var o=i[s],n=this._getCollision(o.clientX-e.left,o.clientY-e.top);n&&(this._highlightedKeys.push(n),this.onkeydown(n.note))}this._touchDragged=!1},n.prototype._touchEnd=function(t){t.preventDefault();for(var e=this._container.getBoundingClientRect(),i=t.changedTouches,s=0;s<i.length;s++){var o=i[s],n=this._getCollision(o.clientX-e.left,o.clientY-e.top);n&&(this._highlightedKeys.splice(this._highlightedKeys.indexOf(n),1),this.onkeyup(n.note))}this._touchDragged||this._contextStarted||(this._contextStarted=!0,this.oncontextstart())},n.prototype._touchMove=function(t){t.preventDefault();for(var e=this._container.getBoundingClientRect(),i=t.changedTouches,s=0;s<i.length;s++){var o=i[s],n=this._getCollision(o.clientX-e.left,o.clientY-e.top);if(-1===this._highlightedKeys.indexOf(n)){for(var h=0;h<this._highlightedKeys.length;h++)this.onkeyup(this._highlightedKeys[h].note);this._highlightedKeys=[],n&&(this._highlightedKeys.push(n),this.onkeydown(n.note))}}this._touchDragged=!0},n.prototype.setHighlightColor=function(t){return this._highlightColor=t,this._keys.forEach((function(e){e.setHighlightColor(t)})),this.draw(),this},n.prototype.setStartNote=function(t){return this._startNote=t,this._makeKeys(),this.draw(),this},n.prototype.setEndNote=function(t){return this._endNote=t,this._makeKeys(),this.draw(),this},n.prototype.keyDown=function(t){if(Array.isArray(t))for(var e=0;e<t.length;e++)this.keyDown(t[e]);else this._noteNames.hasOwnProperty(t)&&this._noteNames[t].highlight(this._highlightColor);this.draw()},n.prototype.highlight=function(t,e,i){if(Array.isArray(t))for(var o=0;o<t.length;o++)this.highlight(t[o]);else this._noteNames.hasOwnProperty(t)&&(this._noteNames[t].isSharp?this._noteNames[t].highlight(i||s.lightGrey):this._noteNames[t].highlight(e||"black"));this.draw()},n.prototype.keyUp=function(t){if(Array.isArray(t))for(var e=0;e<t.length;e++)this.keyUp(t[e]);else this._noteNames.hasOwnProperty(t)&&this._noteNames[t].unhighlight();this.draw()},n.prototype.unselectAll=function(){for(var t=0;t<this._keys.length;t++)this._keys[t].unhighlight();this.draw()},n}.apply(e,s))||(t.exports=o)},7340:(t,e,i)=>{var s,o;s=[i(6985),i(7365)],void 0===(o=function(t,e){const i=t.Sequence,s=t.Transport;var o=function(t,s,o){this.delayTime=t,this._notes=[],this.seq=new i(this._tick.bind(this),[1/0,0,1,2],t).start(0),this.seq.loop=!1,this.player=new e("https://gweb-musiclab-site.appspot.com/static/sound/piano",s,o,3)};return o.prototype.stop=function(){s.stop()},o.prototype.play=function(t){"started"===s.state&&(s.ticks=0),this._notes=t,s.start()},o.prototype.load=function(t){this.player.load(),this.player.onload=t},o.prototype._tick=function(t,e){this._notes.length>e&&this.player.triggerAttackRelease(this._notes[e],2.5*this.delayTime,t)},o}.apply(e,s))||(t.exports=o)},1860:(t,e,i)=>{var s;void 0===(s=function(){var t=["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"],e={Db:"C#",Eb:"D#",Gb:"F#",Ab:"G#",Bb:"A#"},i=/(-?\d+)/;return{getNotes:function(e,s){var o=parseInt(e.split(i)[1]),n=e.split(i)[0];n=t.indexOf(n);var h=parseInt(s.split(i)[1]),r=s.split(i)[0];r=t.indexOf(r);for(var a=n,l=o,d=[];a!==r||l!==h;)d.push(t[a]+l),++a>=t.length&&(a=0,l++);return d},getRespelling:function(t){var s=t.split(i)[0],o=parseInt(t.split(i)[1]);return e.hasOwnProperty(s)?e[s]+o.toString():null}}}.call(e,i,e,t))||(t.exports=s)},7365:(t,e,i)=>{var s,o;s=[i(6985),i(1860)],void 0===(o=function(t,e){t.Players,t.Buffer;var i=function(t,e,i,s){this._instrumentFolder=t,this._lowestNote=e,this._highestNote=i,this._stepSize=s||4,this._loadCount=0,this._notes={},this._buffers={},this._releaseTime=.5,this.loaded=!0,this.onload=function(){}};return i.prototype.load=function(){this._sampler=new t.Sampler({urls:{Bb3:"Bb3.mp3",Eb3:"Eb3.mp3",F4:"F4.mp3",C5:"C5.mp3"},baseUrl:this._instrumentFolder+"/"}).toDestination()},i.prototype._loadedBuffer=function(){this.loaded=!0,this.onload()},i.prototype.triggerAttackRelease=function(t,e,i){this._sampler.triggerAttackRelease([t],.5)},i.prototype.triggerAttack=function(t,e){this._notes[t]},i.prototype.triggerRelease=function(t,e){var i=this._notes[t];this._sampler.stop(i.buffer,e)},i.prototype.releaseAll=function(){this._sampler.stopAll()},i.prototype.dispose=function(){for(var t in this.releaseAll(),this._buffers)this._buffers[t].dispose();this._buffers=null,this._notes=null},i}.apply(e,s))||(t.exports=o)},508:(t,e,i)=>{(t.exports=i(9252)()).push([t.id,"#PianoKeyboard{width:100%;height:100%;position:relative;cursor:pointer}",""])},9171:(t,e,i)=>{(t.exports=i(9252)()).push([t.id,"body,html,#Container{width:100%;height:100%;top:0px;left:0px;margin:0px;overflow:hidden;-webkit-touch-callout:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}body #Container,html #Container,#Container #Container{align-items:center;display:flex;flex-direction:column;justify-content:center;position:absolute}body #iOSTap,html #iOSTap,#Container #iOSTap{width:100%;height:100%;top:0px;left:0px;position:absolute;background-color:#fff;z-index:100000}",""])},8006:(t,e,i)=>{(t.exports=i(9252)()).push([t.id,"#Piano{position:relative;width:100%;min-width:300px;max-width:400px;height:120px}",""])},2718:(t,e,i)=>{(t.exports=i(9252)()).push([t.id,"#ToggleContainer{margin-top:20vh;position:relative}#ToggleContainer .Label{font-weight:400}",""])},7218:(t,e,i)=>{(t.exports=i(9252)()).push([t.id,'.Toggle #Left{right:50%;margin-right:45px;text-align:right}.Toggle #Right{left:50%;margin-left:45px;text-align:left}.Toggle .Label{cursor:pointer;position:absolute;top:50%;font-family:"Poppins",sans-serif;font-weight:300;color:#afafaf;font-size:20px;line-height:20px;margin-top:-10px;transition:color .1s}.Toggle .Label.Selected{color:#1eaaf1}.Toggle #Slider{position:absolute;left:50%;top:50%;width:50px;height:30px;margin-left:-25px;margin-top:-15px;cursor:pointer}.Toggle #Slider #Rail,.Toggle #Slider #Handle{pointer-events:none}.Toggle #Slider #Rail{position:absolute;top:50%;width:100%;height:20px;margin-top:-10px;border-radius:10px !important;background-color:#8ed3f7;background-color:#8ed3f7;border-top-left-radius:10px;border-bottom-left-radius:10px}.Toggle #Slider #Handle{position:absolute;margin-top:-15px;top:50%;height:30px;width:30px;border-radius:15px;background-color:#1eaaf1;transition:left .1s,margin-left .1s;margin-left:0px;left:0px;box-shadow:0 0px 2px #afafaf}.Toggle #Slider.Right #Handle{left:100%;margin-left:-30px}',""])},6893:(t,e,i)=>{var s=i(508);"string"==typeof s&&(s=[[t.id,s,""]]);i(6723)(s,{hmr:!0,transform:void 0}),s.locals&&(t.exports=s.locals)},9503:(t,e,i)=>{var s=i(9171);"string"==typeof s&&(s=[[t.id,s,""]]);i(6723)(s,{hmr:!0,transform:void 0}),s.locals&&(t.exports=s.locals)},5079:(t,e,i)=>{var s=i(8006);"string"==typeof s&&(s=[[t.id,s,""]]);i(6723)(s,{hmr:!0,transform:void 0}),s.locals&&(t.exports=s.locals)},4478:(t,e,i)=>{var s=i(2718);"string"==typeof s&&(s=[[t.id,s,""]]);i(6723)(s,{hmr:!0,transform:void 0}),s.locals&&(t.exports=s.locals)},9582:(t,e,i)=>{var s=i(7218);"string"==typeof s&&(s=[[t.id,s,""]]);i(6723)(s,{hmr:!0,transform:void 0}),s.locals&&(t.exports=s.locals)}}]);