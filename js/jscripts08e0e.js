$j = jQuery.noConflict();
 
function trim(a) {
    return a.replace(/^\s+/gi, "").replace(/\s+$/gi, "")
}

function moretime() {
    try {
        id && clearTimeout(id)
    } catch(a) {}
}
function onout() {
    id = setTimeout("hidediv()", 500)
}
function hidediv() {
    $j("#profile").hide()
}


function createCookie(a, b, c) {
    var e = "";
    c ? (e = new Date, e.setTime(e.getTime() + 864E5 * c), e = "; expires=" + e.toGMTString()) : e = "";
    c = window.location.toString();
    c = -1 < c.indexOf(".sd") ? c.match(/(\..+\.sd)/i)[0] : ".software.informer.com";
    document.cookie = a + "=" + b + e + "; path=/; domain=" + c;
    
}
function setCookie(a, b, c, e) {
    var f = "";
    e = e || location.host;
    c && (f = new Date, f.setTime(f.getTime() + c), f = "; expires=" + f.toGMTString());
    document.cookie = a + "=" + b + f + "; path=/; domain=" + e
}
function readCookie(a) {
    a += "=";
    for (var b = document.cookie.split(";"), c = 0; c < b.length; c++) {
        for (var e = b[c];
        " " == e.charAt(0);) e = e.substring(1, e.length);
        if (0 == e.indexOf(a)) return e.substring(a.length, e.length)
    }
    return null
}

function tlang(a) {
    return "undefined" === typeof $lang[a] ? a: $lang[a]
};