function checkCompatability() {
    function get_browser() {
        var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if(/trident/i.test(M[1])){
            tem=/\brv[ :]+(\d+)/g.exec(ua) || [];
            return {name:'IE',version:(tem[1]||'')};
            }
        if(M[1]==='Chrome'){
            tem=ua.match(/\bOPR|Edge\/(\d+)/)
            if(tem!=null)   {return {name:'Opera', version:tem[1]};}
            }
        M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
        if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
        return {
          name: M[0],
          version: M[1]
        };
     }

    var browser = get_browser(); // browser.name = 'Chrome'
                               // browser.version = '40'

    var version = parseFloat(browser.version)
    if (browser.name === 'Safari' && version < 14) {
        return false;
    }
    return true;

}
var compatible = checkCompatability();

var scriptTag = document.getElementById('bundle');
if (compatible) {
    scriptTag.setAttribute('src', './build/bundle.js');
} else {
    scriptTag.setAttribute('src', './build/Main.js');
}
