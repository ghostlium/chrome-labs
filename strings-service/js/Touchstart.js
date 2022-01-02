// Perform mobile touchstart operations
(function() {
  window.addEventListener('DOMContentLoaded', function() {
    var ua = navigator.userAgent;
    var isTouch = 'ontouchstart' in document.documentElement;
    var ios = ua.match(/iPhone|iPad|iPod/i);
    var outerDiv = document.createElement('div');
    var innerDiv = document.createElement('div');

    var style = document.createElement('style');
    style.innerText = '#start:active, #start:focus { transform: scale(1.1); };';
    document.head.appendChild(style);

    if (isTouch) {
      outerDiv.style.top = 0;
      outerDiv.style.left = 0;
      outerDiv.style.position = 'absolute';
      outerDiv.style.height = '100%';
      outerDiv.style.width = '100%';
      outerDiv.style.textAlign = 'center';
      outerDiv.style.zIndex = 99999;

      innerDiv.style.borderRadius = '5px';
      innerDiv.style.font = 'normal 4vmin/6vmin Poppins, Helvetica, Arial';
      innerDiv.style.color = 'white';
      innerDiv.style.margin = '0 auto';
      innerDiv.style.zIndex = 999;
      innerDiv.style.textAlign = 'center';
      innerDiv.style.padding = '10px';

      if (ios) {
        innerDiv.style.background = '#707070';
        innerDiv.style.marginTop = '15%';
        innerDiv.style.width = '75%';
        innerDiv.innerText = 'Heads up — if you have your iOS device in Silent Mode, audio playback is affected.';
      } else {
        outerDiv.style.display = 'flex';
        outerDiv.style.alignItems = 'center';
        outerDiv.style.background = '#fff';
        innerDiv.style.padding = '0';
        innerDiv.id = 'start';
        innerDiv.style.width = '5pc';
        innerDiv.style.height = '5pc';
        innerDiv.style.display = 'flex';
        innerDiv.style.alignItems = 'center';
        innerDiv.style.justifyContent = 'center';
        innerDiv.style.lineHeight = '5pc';
        innerDiv.style.backgroundColor = '#fff';
        innerDiv.style.boxShadow = '0 0 10px 0 rgba(0, 0, 0, 0.4)';
        innerDiv.style.borderRadius = '50%';
        innerDiv.style.color = '#646464';
        innerDiv.style.transition = 'transform .05s ease-in';
        innerDiv.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>';
      }

      outerDiv.appendChild(innerDiv);
      if (document.body) {
        document.body.appendChild(outerDiv);
      }
    }

    var start = !ios && isTouch ? document.querySelector('#start') : window;
    var event = !ios && isTouch ? 'touchend' : 'touchstart';

    start.addEventListener(
      event,
      function firstTouch() {
        innerDiv.style.display = 'none';
        outerDiv.style.display = 'none';

        start.removeEventListener(event, firstTouch, false);
      },
      false
    );
  });
})();
