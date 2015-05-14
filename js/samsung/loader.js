(function () {
    var a = false;
    var d = (new Date()).getTime();
    window._AFRootPath = a ? "af" : "$MANAGER_WIDGET/Common/af";
    var b = navigator.userAgent.toLowerCase().indexOf("applewebkit") >= 0;
    var e = {
        files: [window._AFRootPath + (a ? "/2.0.0/deviceapis.js" : "/../webapi/1.0/deviceapis.js"), window._AFRootPath + (a ? "/2.0.0/serviceapis.js" : "/../webapi/1.0/serviceapis.js"), window._AFRootPath + "/2.0.0/extlib/jquery.js"],
        next: {
            files: [],
            next: {
                files: [window._AFRootPath + "/2.0.0/extlib/jquery.json-2.2.min.js", window._AFRootPath + "/2.0.0/extlib/jquery.tmpl.js"],
                next: {files: [window._AFRootPath + (a ? "/2.0.0/sf.js" : "/2.0.0/sf.min.js")]}
            }
        }
    };
    if (!b) {
        e.next.files.push(window._AFRootPath + "/2.0.0/extlib/jquery.maple.patch.js")
    }
    function c(k) {
        var h = 0;
        var g = 0;
        if (k) {
            if (k.files && k.files.length) {
                var o = (new Date()).getTime();
                for (var j = 0; j < k.files.length; j++) {
                    var f = k.files[j];
                    alert("################## LOAD (" + (j + 1) + "/" + k.files.length + "): " + f);
                    var l = document.getElementsByTagName("head")[0];
                    var m = document.createElement("script");
                    m.type = "text/javascript";
                    m.src = f + (a ? "?t=" + (new Date()).getTime() : "");
                    m.onload = function () {
                        var i = (new Date()).getTime() - o;
                        alert("################## LOADED: " + this.src + " : " + i + "ms");
                        h++;
                        n()
                    };
                    l.appendChild(m);
                    g++
                }
            } else {
                n()
            }
        }
        function n() {
            if (g == h) {
                if (k && k.next) {
                    alert("################## GOES NEXT");
                    c(k.next)
                } else {
                    alert("################## LOADER OPERATION ENDED: " + ((new Date()).getTime() - d) + "ms")
                }
            }
        }
    }

    c(e)
})();