alert("navigator.userAgent: " + navigator.userAgent);
if (navigator.userAgent.toLowerCase().indexOf("applewebkit") >= 0 && navigator.userAgent.toLowerCase().indexOf("maple") >= 0) {
    window._browser = "tv_webkit";
    var year = navigator.userAgent.match(/maple([0-9]{4})/i);
    if (year && year.length >= 2 && year[1] > 2012) {
        window._browser += year[1]
    }
} else {
    if (navigator.userAgent.toLowerCase().indexOf("chrome/") >= 0) {
        window._browser = "chrome"
    } else {
        if (navigator.userAgent.toLowerCase().indexOf("safari/") >= 0 && !window.curWidget) {
            window._browser = "safari"
        } else {
            if (navigator.userAgent.toLowerCase().indexOf("msie") >= 0) {
                window._browser = "internetexplorer"
            } else {
                if (navigator.userAgent.toLowerCase().indexOf("maple") >= 0) {
                    window._browser = "tv_maple";
                    var temp = navigator.userAgent.toLowerCase().indexOf("maple");
                    var maplever = parseInt(navigator.userAgent.substr(temp + 5), 10);
                    if (maplever == 5) {
                        window._browser += "2010"
                    } else {
                        if (maplever == 6) {
                            window._browser += "2011"
                        }
                    }
                }
            }
        }
    }
}
alert("Detected Browser : " + window._browser);
if (window._browser == "chrome" || window._browser == "safari" || window._browser == "internetexplorer") {
    (function () {
        alert("[AF] PC Mode");
        if (window.location.search.indexOf("modelid") < 0) {
            var url = document.location.href;
            url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
            window.location.href = url + "?country=US&language=1&lang=en&modelid=Valencia&server=operation&firmware=T-SPHAKRC-1000&remocon=2_35_259_0&area=USA&product=0&mgrver=3.000";
            return
        }
        window.curWidget = {
            id: "1234567", width: 1280, height: 720, setPreference: function (key, value) {
                return null
            }
        };
        if (!window.console) {
            console = {}
        }
        console.log = console.log || function () {
        };
        console.warn = console.warn || function () {
        };
        console.error = console.error || function () {
        };
        console.info = console.info || function () {
        };
        var alertCount = 0;
        window.alert = function (message) {
            console.log(message)
        };
        window.FileSystem = function () {
            this.storage = window.localStorage || null;
            var storage = {};
            if (!this.storage) {
                this.storage = {
                    getItem: function (key) {
                        return storage[key] || null
                    }, setItem: function (key, value) {
                        storage[key] = value
                    }, removeItem: function (key, value) {
                        delete storage[key]
                    }, clear: function (key, value) {
                        storage = {}
                    }
                }
            }
            var oFile = {};
            var oCommonFile = {};
            this.openFile = function (path, mode) {
                return new FilePointer(path)
            };
            this.openCommonFile = function (path, mode) {
                alert("[FS] openCommonFile(" + path + "," + mode + ")");
                return new CommonFilePointer(path)
            };
            this.isValidCommonPath = function (path) {
                alert("[FS] isValidCommonPath(" + path + ")");
                var pathObj = null;
                try {
                    pathObj = eval("oCommonFile." + path.replace("/", "."))
                } catch (e) {
                    alert("\tEXCEPTION: " + e)
                }
                return pathObj ? 1 : 0
            };
            this.closeFile = function (fp) {
                alert("[FS] closeFile(" + fp + ")")
            };
            function FilePointer(path) {
                this.readAll = function () {
                    var text = $.ajax({url: path, async: false}).responseText;
                    alert("[FilePointer] readAll(" + path + ") returns : " + text);
                    return text
                };
                this.toString = function () {
                    return "[Object FilePointer]"
                }
            }

            function CommonFilePointer(path) {
                this.readAll = function () {
                    return oCommonFile[path]
                };
                this.toString = function () {
                    return "[Object CommonFilePointer]"
                }
            }
        }
    })()
}
var sf = sf || {};
sf.version = "2.0.0";
sf.revision = "1217";
alert("############# Samsung TV Apps Framework : " + sf.version + "." + sf.revision + " 201309171520 #############");
(function (e) {
    if (e.core) {
        return
    }
    var h = window._AFRootPath || "$MANAGER_WIDGET/Common/af";

    function k(n, m) {
        alert("inArray(" + n + ", " + m + ")");
        for (var l = 0; l < m.length; l++) {
            if (m[l] == n) {
                return true
            }
        }
        return false
    }

    e.core = {
        _afPath: {
            root: h,
            core: h + "/" + e.version,
            resources: h + "/res",
            images: h + "/res",
            lang: h + "/res/lang"
        },
        exit: function (l) {
            l = (l === undefined) ? false : l;
            alert("[AF core] sf.core.exit(" + l + ")");
            if (!l) {
                curWidget.setPreference("return", "true")
            } else {
                curWidget.setPreference("exit", "true")
            }
        },
        version: function () {
            alert("[AF core] AF Version: " + e.version);
            return e.version
        },
        loadJS: function (n, p) {
            alert("[AF core] sf.core.loadJS()");
            if (!(n instanceof Array)) {
                n = [n]
            }
            var l = [];
            for (var m = 0; m < n.length; m++) {
                if (n[m] != "") {
                    l.push(n[m])
                }
            }
            n = l;
            new o(n, p);
            function o(q, y) {
                alert("[AF core] jsLoader() : " + q.length + " files: " + q);
                var s = 0, x = null, r = null, w = document.getElementsByTagName("head")[0];
                for (var u = 0, v = q.length; u < v; u++) {
                    r = q[u];
                    if (r.indexOf("/mtd_down") == 0) {
                        r = b + ((r.charAt(0) != "/") ? "/" : "") + r
                    }
                    x = document.createElement("script");
                    x.type = "text/javascript";
                    x.src = r + "?t=" + (new Date()).getTime();
                    x.onload = t;
                    w.appendChild(x)
                }
                if (!q || !q.length) {
                    setTimeout(function () {
                        if (y && y instanceof Function) {
                            y()
                        }
                    }, 10)
                }
                function t() {
                    alert("[AF core] jsLoader (" + (s + 1) + "/" + q.length + ")");
                    s++;
                    if (s >= q.length) {
                        if (typeof y == "function") {
                            y()
                        }
                    }
                }
            }
        },
        loadCSS: function (l, m) {
            alert("[AF core] sf.core.loadCSS() : " + l);
            if (!(l instanceof Array)) {
                l = new Array(l)
            }
            var r = l.length;
            var t = (new Date()).getTime();
            for (var n = 0; n < l.length; n++) {
                var o = l[n];
                if (o.indexOf("/mtd_down") == 0) {
                    o = b + ((o.charAt(0) != "/") ? "/" : "") + o
                }
                var s = document.createElement("link");
                s.type = "text/css";
                s.rel = "stylesheet";
                s.href = o + "?t=" + (new Date()).getTime();
                if (m && m instanceof Function) {
                    (function (w) {
                        var y = o;
                        var u = null, v = null;
                        var x = 0;
                        u = setInterval(function () {
                            if (p(w) || x > 20) {
                                alert("[AF core] " + y + " loaded" + (x > 20 ? " with failure" : ""));
                                clearInterval(u);
                                clearTimeout(v);
                                r--;
                                if (r <= 0) {
                                    alert("######## All CSSs Loaded : " + ((new Date()).getTime() - t) + "ms ########");
                                    if (m && m instanceof Function) {
                                        m()
                                    }
                                    m = null
                                }
                            } else {
                                x++
                            }
                        }, 100)
                    })(s)
                }
                document.getElementsByTagName("head")[0].appendChild(s)
            }
            if (!l || !l.length) {
                setTimeout(function () {
                    if (m && m instanceof Function) {
                        m()
                    }
                }, 10)
            }
            var q = null;
            cssRules = null;
            function p(u) {
                if (!q) {
                    q = "sheet";
                    cssRules = "cssRules";
                    if (!(q in u)) {
                        q = "styleSheet";
                        if (!(q in u)) {
                            q = null
                        }
                    }
                    if (u[q] && !(cssRules in u[q])) {
                        cssRules = "rules"
                    }
                    alert("Property for sheet : " + q + ", rules : " + cssRules)
                }
                return (s[q] && u[q][cssRules] && u[q][cssRules].length) ? true : false
            }
        },
        readFile: function (o) {
            alert("[AF core] sf.core.readFile(" + o + ")");
            var m = "";
            if (FileSystem) {
                var l = new FileSystem();
                var n = l.openFile(o, "r");
                if (n) {
                    m = n.readAll();
                    l.closeFile(n)
                } else {
                    alert("[AF core] File open failed.")
                }
                return m
            } else {
                alert("[AF core] FileSystem is not supported!!!")
            }
            return m
        },
        getEnvValue: function (l) {
            var n = null;
            if (!a) {
                a = d()
            }
            if (l && typeof l === "string") {
                n = a[l]
            }
            var m = n;
            if (l == "id" || l == "pw") {
                m = "******"
            }
            alert("[AF core] getEnvValue(" + l + ") returns " + m);
            return n
        },
        _changeSource: function () {
            alert("[AF core] sf.core._changeSource() does nothing");
            return;
            var l = new FileSystem();
            var o = "WidgetMgr/Widget2Widget.txt";
            if (l.isValidCommonPath(o) != 0) {
                alert("File is existed.. skip setOnFullScreen()");
                var n = l.openCommonFile(o, "r");
                if (n) {
                    var m = n.readAll();
                    m = parseInt(m);
                    alert("prevSource : " + m);
                    l.closeFile(n)
                }
            } else {
                var p = e.core.plugin("TVMW");
                f = p.GetSource();
                if (e.core.PL_TVMW_SOURCE_MEDIA == f) {
                    return
                } else {
                    f = p.GetSource();
                    p.SetMediaSource()
                }
            }
        },
        _restoreSource: function () {
            alert("[AF core] sf.core._restoreSource() does nothing");
            return;
            var l = new FileSystem();
            var m = "WidgetMgr/Widget2Widget.txt";
            if (l.isValidCommonPath(m) != 0) {
                alert("File is existed.. skip setOffFullScreen()")
            } else {
                if (f != null) {
                    var n = e.core.plugin("TVMW");
                    n.SetSource(f);
                    f = null
                }
            }
        },
        plugin: function (m, l) {
            m = m.toUpperCase();
            var p = null;
            if (k(m, j) != -1) {
                p = this._getPlugin(m);
                if (!p) {
                    var s = l && l["z-index"] ? "z-index:" + l["z-index"] + ";" : "";
                    var n = '<OBJECT id="' + g + m + '" classid="clsid:SAMSUNG-INFOLINK-' + m + '" style="position:absolute;visibility:hidden;display:block;width:0px;height:0px;' + s + '"></OBJECT>';
                    if (l && l.container) {
                        var q = document.getElementById(l.container);
                        if (q) {
                            q.innerHTML += n
                        } else {
                            alert("[AF core] cannot get " + l.container + " element.")
                        }
                    } else {
                        var o = document.createElement("div");
                        o.id = "_pluginObjectContainer_" + m;
                        o.style.position = "absolute";
                        o.style.left = "0px";
                        o.style.top = "0px";
                        o.style.display = "block";
                        o.innerHTML = n;
                        r().appendChild(o)
                    }
                    p = document.getElementById(g + m)
                }
            } else {
                alert("[AF core] Cannot find the plugin : " + m)
            }
            alert("[AF core] sf.core.plugin(" + m + ") returns " + p);
            return p;
            function r() {
                var t = document.getElementById("_pluginObjectContainer_");
                if (!t) {
                    var u = document.createElement("div");
                    u.id = "_pluginObjectContainer_";
                    u.style.position = "absolute";
                    u.style.left = "0px";
                    u.style.top = "0px";
                    u.style.display = "block";
                    document.body.appendChild(u);
                    t = document.getElementById("_pluginObjectContainer_")
                }
                return t
            }
        },
        _getPlugin: function (l) {
            return document.getElementById(g + l)
        },
        sefplugin: function (m, l) {
            var p = null;
            if (true) {
                p = this._getSEFPlugin(m);
                if (!p) {
                    var s = l && l["z-index"] ? "z-index:" + l["z-index"] + ";" : "";
                    var n = '<OBJECT id="' + c + m + '" classid="clsid:SAMSUNG-INFOLINK-SEF" style="position:absolute;visibility:hidden;display:block;width:0px;height:0px;' + s + '"></OBJECT>';
                    if (l && l.container) {
                        var q = document.getElementById(l.container);
                        if (q) {
                            q.innerHTML += n
                        } else {
                            alert("[AF core] cannot get " + l.container + " element.")
                        }
                    } else {
                        var o = document.createElement("div");
                        o.id = "_sefObjectContainer_" + m;
                        o.style.position = "absolute";
                        o.style.left = "0px";
                        o.style.top = "0px";
                        o.style.display = "block";
                        r().appendChild(o);
                        document.getElementById("_sefObjectContainer_" + m).innerHTML = n
                    }
                    document.getElementById(c + m).Open(m, "1.000", m);
                    p = this._getSEFPlugin(m)
                }
            } else {
                alert("[AF core] Cannot find the SEF plugin : " + m)
            }
            alert("[AF core] sf.core.sefplugin(" + m + ") returns " + p);
            return p;
            function r() {
                var t = document.getElementById("_sefObjectContainer_");
                if (!t) {
                    var u = document.createElement("div");
                    u.id = "_sefObjectContainer_";
                    u.style.position = "absolute";
                    u.style.left = "0px";
                    u.style.top = "0px";
                    document.body.appendChild(u);
                    t = document.getElementById("_sefObjectContainer_")
                }
                return t
            }
        },
        _getSEFPlugin: function (l) {
            return document.getElementById(c + l)
        },
        mapAliasedKeys: function (l) {
            switch (l) {
                case e.key.PANEL_VOL_DOWN:
                    l = e.key.LEFT;
                    break;
                case e.key.PANEL_VOL_UP:
                    l = e.key.RIGHT;
                    break;
                case e.key.WHEELUP:
                case e.key.PANEL_CH_UP:
                    l = e.key.UP;
                    break;
                case e.key.WHEELDOWN:
                case e.key.PANEL_CH_DOWN:
                    l = e.key.DOWN;
                    break;
                case e.key.PANEL_ENTER:
                case e.key.PANEL_SOURCE:
                    l = e.key.ENTER;
                    break;
                case e.key.PANEL_MENU:
                    l = e.key.RETURN;
                    break
            }
            return l
        },
        PL_AUDIO_OUTPUT_DEVICE_EXTERNAL: 3,
        PL_AUDIO_VOLUME_KEY_UP: 0,
        PL_AUDIO_VOLUME_KEY_DOWN: 1,
        PL_AUDIO_OUTPUT_DEVICE_RECEIVER: 4,
        PLR_FALSE: 0,
        PLR_TRUE: 1,
        PL_AUDIO_MUTE_OFF: 1,
        PL_AUDIO_MUTE_ON: 0,
        PL_TV_PRODUCT_TYPE_TV: 0,
        PL_TV_PRODUCT_TYPE_MONITOR: 1,
        PL_TV_PRODUCT_TYPE_BD: 2,
        PL_CMN_INFO_VERSION: 0,
        PL_NNAVI_STATE_BANNER_NONE: 0,
        PL_NNAVI_STATE_BANNER_VOL: 1,
        PL_NNAVI_STATE_BANNER_VOL_CH: 2,
        PL_PRFID_AUTO_PROTECTION_TIME: 13,
        EVENT_TO_DEVICE_SCREEN_SAVER_ON: 3,
        EVENT_TO_DEVICE_SCREEN_SAVER_OFF: 4,
        EVENT_TO_DEVICE_HIDE_TOOLS: 6,
        PICTURE_SETTING: 1,
        SOUND_SETTING: 0,
        MANAGER_EVT_RETURN_WIDGETID: "100",
        MANAGER_EVT_RETURN_TO_WIDGET: "101",
        MANAGER_EVT_GET_SNS_LIST: "32",
        MANAGER_EVT_GET_APP_ALL_LIST: "36",
        MANAGER_EVT_GET_APP_PATH: "33",
        MANAGER_EVT_MOVE_APP_INFO: "34",
        MANAGER_EVT_RUN_START_CHECK: "200",
        MANAGER_EVT_RUN_DISCONNECT_CEC: "201",
        MANAGER_EVT_RUN_UPDATE: "202",
        PL_DTVAPP_TOOL: 18,
        PL_TVMW_SOURCE_MEDIA: 43
    };
    var b = "file://localhost";
    var f = null;
    var g = "_plugin_id_";
    var j = ["TV", "TVMW", "NNAVI", "AUDIO", "APPCOMMON", "FRONTPANEL", "IMAGEVIEWER", "PLAYER", "STORAGE", "NETWORK", "DOWNLOAD", "SCREEN", "TIME", "VIDEO", "WINDOW"];
    var c = "_sef_id_";
    var a = null;

    function d() {
        alert("[AF core] parseInfo()");
        var s = window.location.search;
        var q = /(\w*=[\w!@#\$%\*\^\(\)\-\+\|\.=\ \']*)/g;
        var r = {};
        for (var p = 0, n = s.match(q), m = n.length, o; p < m; p++) {
            o = n[p].split("=");
            r[o[0]] = decodeURIComponent(o[1])
        }
        return r
    }
})(sf);
(function (b) {
    var d = null;
    var e = "_sfdata.json";
    var a = curWidget.id;
    var c = false;
    b.core.localData = function (g, j) {
        if (!c) {
            h()
        }
        if (j !== undefined) {
            return k(g, j)
        } else {
            return f(g)
        }
        function f(l) {
            l = (l !== undefined) ? l : 0;
            var m = (d) ? d[l] : null;
            alert("[AF core] sf.core.localData.get(" + l + ") returns : " + m);
            return m
        }

        function k(l, m) {
            if (d == null) {
                d = {}
            }
            alert("[AF core] sf.core.localData.set(" + l + "," + m + ")");
            d[l] = m;
            return m
        }

        function h() {
            alert("[AF core] sf.core.localData._load()");
            c = true;
            var l = new FileSystem();
            if (l.isValidCommonPath(a) != 1) {
                alert("[AF core] directory is not found : " + a);
                d = null;
                return
            }
            var n = l.openCommonFile(a + "/" + e, "r");
            if (!n) {
                alert("[AF core] file is not found : " + e);
                d = null;
                return
            }
            var m = n.readAll();
            alert("[AF core] loaded App data : " + m);
            d = (m == "") ? {} : $.parseJSON(m);
            l.closeFile(n)
        }
    };
    b.core._saveLocalData = function () {
        alert("[AF core] sf.core._saveLocalData()");
        var f = new FileSystem();
        if (f.isValidCommonPath(a) != 1) {
            alert("[AF core] create data directory..");
            f.createCommonDir(a)
        }
        if (d && d != "") {
            var h = f.openCommonFile(a + "/" + e, "w");
            if (!h) {
                alert("[AF core] cannot open App data file..");
                return
            }
            var g = $.toJSON(d);
            alert("[AF core] save App data : " + g);
            h.writeAll(g);
            f.closeFile(h)
        } else {
            alert("[AF core] no need to save file.")
        }
    }
})(sf);
(function (sf) {
    var conf = null;

    function parseJSON(text) {
        if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
            return eval("(" + text + ")")
        }
        return null
    }

    sf.core.getAppConf = function (key) {
        if (!conf) {
            sf.core._readAppConf()
        }
        if (!conf) {
            return null
        }
        if (key) {
            alert("[AF core] getConf(" + key + ") returns " + conf[key]);
            return conf[key]
        } else {
            return conf
        }
    };
    sf.core._readAppConf = function () {
        alert("[AF core] readConf()");
        try {
            var filePath = "app.json";
            conf = parseJSON(sf.core.readFile(filePath))
        } catch (e) {
            alert("[AF core] " + e.toString())
        }
    }
})(sf);
(function (b) {
    var a = {};
    b.core.setWMEventListener = function (c, d) {
        alert("[AF core] setWMEventListener(" + c + ")");
        if (typeof d == "function") {
            a[c] = d
        } else {
            alert("[AF core] second param must be a function.")
        }
    };
    b.core.registerEventListener = function () {
        alert("[AF core] registerEventListener()");
        curWidget.onWidgetEvent = function (c) {
            alert("[AF core] !!! curWidget.onWidgetEvent !!!");
            alert("[AF core] !!! type : " + c.type);
            var d = a[c.type];
            if (typeof d == "function") {
                d(c.data || null)
            } else {
                alert("[AF core] no event handler binded on this event : " + c.type)
            }
        }
    }
})(sf);
(function (l) {
    var b = null;
    var g = null;
    var p = null;
    var j = l.core.getEnvValue("product");
    var c = l.core.getEnvValue("modelid");
    l.env = {
        PRODUCTTYPE_TV: 0,
        PRODUCTTYPE_MONITOR: 1,
        PRODUCTTYPE_BD: 2,
        getProductType: function () {
            alert("[AF env] getProductType() : " + j);
            return j
        },
        getModelID: function () {
            alert("[AF env] getModelID() : " + c);
            return c
        },
        SUPPORT3D_FIRMWARE_UPDATE_NEEDED: -1,
        SUPPORT3D_NOTSUPPORTED: 0,
        SUPPORT3D_SUPPORTED: 1,
        get3DSupported: function () {
            alert("[AF env] get3DSupported():");
            var u = l.core.plugin("SCREEN");
            var q = this.getFirmwareVer();
            var s = this.getProductType();
            var t = this.getModelID();
            try {
                if (u && u.Flag3DEffectSupport() == 1) {
                    alert("\t3D Supported device");
                    if (q.year == 2010) {
                        alert("\t2010 device : Supported");
                        return l.env.SUPPORT3D_SUPPORTED
                    } else {
                        if (q.year == 2011) {
                            alert("\t2011 device");
                            if (s == 2) {
                                if (u && u.Flag3DTVConnect() == 1) {
                                    alert("\tBD-Flag3DTVConnect: true");
                                    retValue = l.env.SUPPORT3D_SUPPORTED
                                } else {
                                    alert("\tBD-Flag3DTVConnect: false - This method can not guarantee the supporting 3D in this case. TV connected to this BD Player may support 3D.");
                                    retValue = l.env.SUPPORT3D_NOTSUPPORTED
                                }
                            } else {
                                if (t.indexOf("X6") >= 0) {
                                    alert("\tX6 device");
                                    if (q.num < 1003) {
                                        retValue = l.env.SUPPORT3D_FIRMWARE_UPDATE_NEEDED;
                                        alert("\tFirmware update needed(lower than 1003)")
                                    } else {
                                        retValue = l.env.SUPPORT3D_SUPPORTED;
                                        alert("\tSupported device")
                                    }
                                } else {
                                    alert("\tNot X6 device");
                                    if (q.num < 1001) {
                                        retValue = l.env.SUPPORT3D_FIRMWARE_UPDATE_NEEDED;
                                        alert("\tFirmware Update Needed(lower than 1001)")
                                    } else {
                                        retValue = l.env.SUPPORT3D_SUPPORTED;
                                        alert("\tSupported Device")
                                    }
                                }
                            }
                        } else {
                            if (q.year > 2011) {
                                alert("\tSupported Device (2012 or later)");
                                retValue = l.env.SUPPORT3D_SUPPORTED
                            }
                        }
                    }
                    return retValue
                } else {
                    alert("\tNot Suppported device");
                    return l.env.SUPPORT3D_NOTSUPPORTED
                }
            } catch (r) {
                alert("EXCEPTION: " + r)
            }
        },
        getFirmwareVer: function () {
            if (!b || !g || !p) {
                b = l.core.plugin("NNAVI").GetFirmware();
                var q = b.split("-");
                if (q.length == 3) {
                    g = parseInt(q[1].replace("INFOLINK", ""), 10);
                    p = parseInt(q[2], 10)
                }
            }
            alert("[AF env] getFirmwareVer() : " + b);
            return {version: b, year: g, num: p}
        },
    };
    var k = window._browser;
    l.env.getBrowser = function () {
        return k
    };
    var e = parseInt(curWidget.height, 10);
    if (e == 540 || e == 720 || e == 1080) {
        e += "p"
    } else {
        e = "540p"
    }
    l.env.getResolution = function () {
        alert("[AF env] getResolution: " + e);
        return e
    };
    l.env.getScreenSize = function () {
        if (curWidget && curWidget.width && curWidget.height) {
            alert("[AF env] getScreenSize: " + curWidget.width + "x" + curWidget.height);
            return {width: curWidget.width, height: curWidget.height}
        } else {
            var r = $(window).width();
            var q = $(window).height();
            alert("[AF env] getScreenSize: " + r + "x" + q);
            return {width: r, height: q}
        }
    };
    alert("[AF Core] Resolution: " + l.env.getResolution() + " - " + l.env.getScreenSize().width + "x" + l.env.getScreenSize().height);
    l.env.getLanguageCode = function () {
        var q = l.core.getEnvValue("lang");
        alert("[AF env] getLanguageCode: " + q);
        return q
    };
    l.env.getCountryCode = function () {
        var q = l.core.getEnvValue("country");
        alert("[AF env] getCountryCode: " + q);
        return q
    };
    var f = null;
    l.env.getAppVersion = function () {
        alert("[AF env] getAppVersion()");
        if (!f) {
            f = h("ver")
        }
        alert("\tenvAppVersion : " + f);
        return f || null
    };
    var a = null;
    l.env.getMouseEventAvailable = function () {
        alert("[AF env] getMouseEventAvailable()");
        var r = null;
        var q = null;
        if (a === null) {
            r = h("mouse");
            if (r) {
                r = r.toUpperCase()
            }
            q = l.env.getBrowser();
            a = false;
            if (r && r == "Y" && q && q == "tv_webkit") {
                a = true
            }
        }
        return a
    };
    var o = null;
    l.env.getVoiceRecogAvailable = function () {
        if (o === null) {
            o = (deviceapis.recognition.IsRecognitionAppAvailable() && deviceapis.recognition.IsVoiceRecognitionEnabled()) ? true : false
        }
        return o
    };
    var n = null;
    l.env.getGestureRecogAvailable = function () {
        if (n === null) {
            n = (deviceapis.recognition.IsRecognitionAppAvailable() && deviceapis.recognition.IsGestureRecognitionEnabled()) ? true : false
        }
        return n
    };
    l.env.getPopupOpacity = function () {
        alert("[AF env] getPopupOpacity()");
        var q = l.env.getFirmwareVer();
        if (q && q.year < 2012) {
            return 0.8
        }
        var s = 0.8;
        try {
            s = deviceapis.application.getPopupOpacity()
        } catch (r) {
            s = 0.8
        }
        alert("returns " + s);
        if (s < 0 && s > 1) {
            s = 0.8
        }
        return s || 0.8
    };
    l.env.TARGETLOCATION_UNKNOWN = 0;
    l.env.TARGETLOCATION_KOR = 1;
    l.env.TARGETLOCATION_USA = 2;
    l.env.TARGETLOCATION_BRA = 3;
    l.env.TARGETLOCATION_PANEURO = 4;
    l.env.TARGETLOCATION_CHI = 5;
    l.env.TARGETLOCATION_HKG = 6;
    l.env.TARGETLOCATION_ARB = 7;
    l.env.TARGETLOCATION_PANNORDIG = 8;
    l.env.TARGETLOCATION_SOUTHEASTASIA = 9;
    l.env.TARGETLOCATION_ASIA_ATV = 10;
    l.env.TARGETLOCATION_ASIA_DTV = 11;
    l.env.TARGETLOCATION_TW = 12;
    l.env.TARGETLOCATION_NORTHAFRICA = 13;
    l.env.TARGETLOCATION_EA_DTV = 14;
    l.env.TARGETLOCATION_CIS = 15;
    l.env.TARGETLOCATION_PHI = 16;
    l.env.TARGETLOCATION_S_AFR_DTV = 17;
    l.env.getTargetLocation = function () {
        alert("[AF env] getTargetLocation()");
        var q = l.core.plugin("TV");
        var r = l.env.TARGETLOCATION_UNKNOWN;
        if (q) {
            r = q.GetTargetLocation()
        }
        alert("\treturns : " + r);
        return r
    };
    var d = null;

    function h(u) {
        alert("getConfigXMLValue(" + u + ")");
        if (!d) {
            try {
                d = null;
                if (window.DOMParser) {
                    alert("Use DOMParser");
                    var q = l.core.readFile("config.xml");
                    if (!q) {
                        alert("Fail to read config.xml");
                        return null
                    }
                    var v = new DOMParser();
                    d = v.parseFromString(q, "text/xml")
                } else {
                    if (window.XMLHttpRequest) {
                        alert("Use XHR");
                        var r = new XMLHttpRequest();
                        r.open("GET", "config.xml", false);
                        r.send();
                        d = r.responseXML
                    } else {
                        alert("CANNOT use DOMParser and XHR. Fail to get config.");
                        return null
                    }
                }
            } catch (t) {
                alert("EXCEPTION1 (getConfigXMLValue) : " + t);
                d = null;
                return null
            }
        }
        try {
            var s = d.getElementsByTagName(u);
            if (s && s.length) {
                if (s[0].textContent) {
                    alert("Returns " + s[0].textContent);
                    return s[0].textContent
                } else {
                    if (s[0].firstChild && s[0].firstChild.nodeValue) {
                        alert("Returns " + s[0].firstChild.nodeValue);
                        return s[0].firstChild.nodeValue
                    }
                }
            } else {
                alert("Can't find the tag. Returns null");
                return null
            }
        } catch (t) {
            alert("EXCEPTION2 (getConfigXMLValue) : " + t);
            return null
        }
    }

    var m;
    l.env.getCSS3Supported = function () {
        if (m === undefined) {
            if (window._browser.indexOf("tv_webkit") == 0) {
                if (window._browser > "tv_webkit2012") {
                    m = {transform3d: true, boxShadow: true}
                } else {
                    m = {transform3d: false, boxShadow: true}
                }
            } else {
                if (window._browser == "chrome" || window._browser == "safari") {
                    m = {transform3d: true, boxShadow: true}
                } else {
                    if (window._browser == "tv_maple2011" || window._browser == "tv_maple2010") {
                        m = null
                    } else {
                        m = null
                    }
                }
            }
        }
        return m || null
    };
    l.env.get3DTransformSupported = function () {
        var q = l.env.getCSS3Supported();
        return (q && q.transform3d) ? true : false
    }
})(sf);
(function (a) {
    var b = {
        sso: {
            js: ["$MANAGER_WIDGET/Common/Util/Include.js", "$MANAGER_WIDGET/Common/API/Widget.js", "$MANAGER_WIDGET/Common/API/TVKeyValue.js", "$MANAGER_WIDGET/Common/API/Plugin.js", "$MANAGER_WIDGET/Common/Util/sha1.js", "$MANAGER_WIDGET/Common/service.sso.js"],
            css: []
        },
        ime: {
            js: ["$MANAGER_WIDGET/Common/Define.js"],
            css: [],
            afterload: {js: ["$MANAGER_WIDGET/Common/IME_XT9/ime.js"]}
        }
    };
    if (window._browser == "tv_maple2010") {
        b.ime.afterload.js = ["$MANAGER_WIDGET/Common/IME/ime2.js"]
    }
    var c = false;
    a.core.init = function () {
        if (c) {
            return
        }
        c = true;
        alert("[AF Core] init()");
        var o = a.core.getAppConf();
        var k = a.core.getAppConf("theme");
        a.core._afPath.images = a.core._afPath.resources + "/images/" + k + "/" + a.env.getResolution();
        var r = [];
        var s = [];
        var f = a.env.getLanguageCode();
        alert("[AF core] lang before : " + f);
        if (o && o.languages && o.languages.length) {
            if (!a.util.inArray(f, o.languages)) {
                f = o.languages[0] || "en"
            }
        }
        alert("[AF core] lang after : " + f);
        r.push(a.core._afPath.lang + "/" + f + ".js");
        alert("[AF ui] load base theme.");
        s.push(a.core._afPath.core + "/base_" + a.env.getResolution() + ".css");
        var g = a.core.getAppConf("theme");
        if (g && g != "base") {
            s.push(a.core._afPath.core + "/" + a.core.getAppConf("theme") + "_" + a.env.getResolution() + ".css")
        }
        if (o && o.modules && o.modules.length) {
            for (var l = 0; l < o.modules.length; l++) {
                alert("[AF core] Load module files for " + o.modules[l].toLowerCase());
                if (b[o.modules[l].toLowerCase()]) {
                    var m = b[o.modules[l].toLowerCase()];
                    if (m.css && m.css.length) {
                        for (var h = 0; h < m.css.length; h++) {
                            s.push(m.css[h])
                        }
                    }
                    if (m.js && m.js.length) {
                        for (var h = 0; h < m.js.length; h++) {
                            r.push(m.js[h])
                        }
                    }
                } else {
                    alert("[AF core] No such a module : " + o.modules[l])
                }
            }
        }
        if (o && o.languages && o.languages.length) {
            r.push("lang/" + f + ".js")
        }
        if (a.scene._isSceneArchUsed()) {
            r.push("app/init.js")
        }
        if (o && o.files && o.files.length) {
            var p = /\.([0-9a-z]+)(?:[\?#]|$)/i;
            for (var l = 0; l < o.files.length; l++) {
                var e = o.files[l].match(p);
                if (e && e.length == 2) {
                    if (e[1].toLowerCase() == "js") {
                        r.push(o.files[l])
                    } else {
                        if (e[1].toLowerCase() == "css") {
                            s.push(o.files[l])
                        }
                    }
                }
            }
        }
        var t = false;
        var n = false;
        a.core.loadCSS(s, function () {
            t = true;
            if (t && n) {
                d()
            }
        });
        a.core.loadJS(r, function () {
            n = true;
            if (t && n) {
                d()
            }
        });
        function d() {
            a.util.init();
            if (a.scene._isSceneArchUsed()) {
                $(document).ready(function () {
                    alert("DOCUMENT READY");
                    var z = [];
                    var G = [];
                    var I = a.core.getAppConf("splashimage");
                    if (I && false) {
                        alert("Insert Splash Image");
                        I.width = I.width || curWidget.width;
                        I.height = I.height || curWidget.height;
                        var A = parseInt((curWidget.width - parseInt(I.width, 10)) / 2, 10);
                        var H = parseInt((curWidget.height - parseInt(I.height, 10)) / 2, 10);
                        var y = document.createElement("div");
                        y.id = "_af_splash";
                        y.style = "position:absolute;left:0px;top:0px;width:" + curWidget.width + "px;height:" + curWidget.height + "px;background-color:#000000;z-index:100;opacity:0.5;";
                        y.innerHTML = "<div style='position:absolute;left:" + A + "px;top:" + H + "px;width:" + I.width + "px;height:" + I.height + "px;'><img src='" + I.url + "'/></div>";
                        document.body.appendChild(y);
                        curWidget.setPreference("ready", "true")
                    } else {
                        I = null
                    }
                    if (o && o.modules && o.modules.length) {
                        for (var C = 0; C < o.modules.length; C++) {
                            alert("[AF core] Load 'After Load' module files for " + o.modules[C].toLowerCase());
                            if (b[o.modules[C].toLowerCase()]) {
                                var D = b[o.modules[C].toLowerCase()];
                                if (D.afterload) {
                                    alert("Module Path : " + D.afterload);
                                    if (D.afterload.css && D.afterload.css.length) {
                                        for (var B = 0; B < D.afterload.css.length; B++) {
                                            G.push(D.afterload.css[B])
                                        }
                                    }
                                    if (D.afterload.js && D.afterload.js.length) {
                                        for (var B = 0; B < D.afterload.js.length; B++) {
                                            z.push(D.afterload.js[B])
                                        }
                                    }
                                }
                            } else {
                                alert("[AF core] No such a module : " + o.modules[C])
                            }
                        }
                    }
                    if ((z && z.length) || (G && G.length)) {
                        alert("There's afterload files for modules");
                        var J = false;
                        var F = false;
                        a.core.loadCSS(G, function () {
                            J = true;
                            if (J && F) {
                                E()
                            }
                        });
                        a.core.loadJS(z, function () {
                            F = true;
                            if (J && F) {
                                E()
                            }
                        })
                    } else {
                        E()
                    }
                    function E() {
                        alert("initializeScene()");
                        a.scene.init(function () {
                            if (typeof onStart == "function") {
                                try {
                                    onStart()
                                } catch (j) {
                                    alert("EXCEPTION(onStart): " + j)
                                }
                            }
                            if (I) {
                                document.body.removeChild(y)
                            } else {
                                if (o && o.backgroundapp) {
                                    alert("'backgroundapp' option enabled. skip sending ready event");
                                    return
                                }
                                curWidget.setPreference("ready", "true")
                            }
                        })
                    }
                })
            } else {
                var v = [];
                if (o && o.modules && o.modules.length) {
                    for (var x = 0; x < o.modules.length; x++) {
                        alert("[AF core] Load 'After Load' module files for " + o.modules[x].toLowerCase());
                        if (b[o.modules[x].toLowerCase()]) {
                            var w = b[o.modules[x].toLowerCase()];
                            if (w.afterload) {
                                if (w.afterload.css && w.afterload.css.length) {
                                    for (var u = 0; u < w.afterload.css.length; u++) {
                                        a.core.loadCSS(w.afterload.css[u])
                                    }
                                }
                                if (w.afterload.js && w.afterload.js.length) {
                                    for (var u = 0; u < w.afterload.js.length; u++) {
                                        v.push(w.afterload.js[u])
                                    }
                                }
                            }
                        } else {
                            alert("[AF core] No such a module : " + o.modules[x])
                        }
                    }
                }
                if (v && v.length) {
                    a.core.loadJS(v, function () {
                        curWidget.setPreference("ready", "true")
                    })
                } else {
                    curWidget.setPreference("ready", "true")
                }
            }
        }

        $(window).unload(function () {
            alert("[AF core] unload handler");
            if (typeof onDestroy == "function") {
                try {
                    onDestroy()
                } catch (w) {
                    alert("EXCEPTION(onDestroy): " + w)
                }
            } else {
                alert("[AF core] onDestroy is not defined..")
            }
            var v = a.core._getPlugin("PLAYER");
            if (v) {
                v.Stop()
            }
            var j = a.core._getPlugin("IMAGEVIEWER");
            if (j) {
                j.Stop()
            }
            var u = a.core._getSEFPlugin("Player");
            if (u) {
                u.Execute("Stop")
            }
            a.core._saveLocalData();
            a.core._restoreSource()
        });
        if (jQuery) {
            jQuery.ajaxSetup({
                type: "GET", timeout: 60000, beforeSend: function (j) {
                    try {
                        a.core.plugin("TVMW").SetWatchDog(a.core.PLR_TRUE)
                    } catch (u) {
                    }
                }, complete: function (u, j) {
                    try {
                        a.core.plugin("TVMW").SetWatchDog(a.core.PLR_FALSE)
                    } catch (v) {
                    }
                }, error: function (u, j, v) {
                }
            })
        }
        window.onHide = q;
        function q() {
            alert("[AF core] onHide handler");
            a.service.PIG.hide()
        }
    }
})(sf);
(function (b) {
    b.key = {
        N1: 101,
        N2: 98,
        N3: 6,
        N4: 8,
        N5: 9,
        N6: 10,
        N7: 12,
        N8: 13,
        N9: 14,
        N0: 17,
        PRECH: 259,
        VOL_UP: 7,
        VOL_DOWN: 11,
        MUTE: 27,
        CH_UP: 68,
        CH_DOWN: 65,
        SOURCE: 222,
        CHLIST: 84,
        TOOLS: 75,
        ENTER: 29443,
        RETURN: 88,
        INFO: 31,
        EXIT: 45,
        UP: 29460,
        DOWN: 29461,
        LEFT: 4,
        RIGHT: 5,
        RED: 108,
        GREEN: 20,
        YELLOW: 21,
        BLUE: 22,
        REW: 69,
        REW_: 1080,
        PAUSE: 74,
        FF: 72,
        FF_: 1078,
        REC: 192,
        PLAY: 71,
        STOP: 70,
        THREE_D: 1219,
        PANEL_CH_UP: 105,
        PANEL_CH_DOWN: 106,
        PANEL_VOL_UP: 203,
        PANEL_VOL_DOWN: 204,
        PANEL_ENTER: 309,
        PANEL_SOURCE: 612,
        PANEL_MENU: 613,
        PANEL_POWER: 614,
        FAMILYSTORY: 2252,
        CAMERA: 2253,
        HISTORY: 246,
        SMARTHUB: 261,
        GESTURE_SCROLL_UP: 40000002,
        GESTURE_SCROLL_DOWN: 40000003,
        GESTURE_SCROLL_LEFT: 40000004,
        GESTURE_SCROLL_RIGHT: 40000005
    };
    b.key.preventDefault = function () {
        alert("[AF Key] preventDefault()");
        if (event && event.preventDefault) {
            event.preventDefault()
        }
    };
    b.key.registerKey = function (g) {
        var f = b.core.plugin("APPCOMMON");
        if (f) {
            alert("[AF core] sf.key.registerKey(" + g + " -> [" + d[g] + "])");
            f.RegisterKey(d[g])
        }
    };
    b.key.unregisterKey = function (g) {
        var f = b.core.plugin("APPCOMMON");
        if (f) {
            alert("[AF core] sf.key.unregisterKey(" + g + " -> [" + d[g] + "])");
            f.UnregisterKey(d[g])
        }
    };
    var c = {
        PL_APPCOMMON_KEY_JOYSTICK_OK: 29443,
        PL_APPCOMMON_KEY_MENU: 262,
        PL_APPCOMMON_KEY_JOYSTICK_UP: 29460,
        PL_APPCOMMON_KEY_JOYSTICK_DOWN: 29461,
        PL_APPCOMMON_KEY_JOYSTICK_LEFT: 4,
        PL_APPCOMMON_KEY_JOYSTICK_RIGHT: 5,
        PL_APPCOMMON_KEY_3: 6,
        PL_APPCOMMON_KEY_VOLUP: 7,
        PL_APPCOMMON_KEY_4: 8,
        PL_APPCOMMON_KEY_5: 9,
        PL_APPCOMMON_KEY_6: 10,
        PL_APPCOMMON_KEY_VOLDOWN: 11,
        PL_APPCOMMON_KEY_7: 12,
        PL_APPCOMMON_KEY_8: 13,
        PL_APPCOMMON_KEY_9: 14,
        PL_APPCOMMON_KEY_MUTE: 27,
        PL_APPCOMMON_KEY_CHDOWN: 65,
        PL_APPCOMMON_KEY_0: 17,
        PL_APPCOMMON_KEY_CHUP: 68,
        PL_APPCOMMON_KEY_PRECH: 259,
        PL_APPCOMMON_KEY_GREEN: 20,
        PL_APPCOMMON_KEY_YELLOW: 21,
        PL_APPCOMMON_KEY_CYAN: 22,
        PL_APPCOMMON_KEY_SOURCE: 222,
        PL_APPCOMMON_KEY_TV: 77,
        PL_APPCOMMON_KEY_INFO: 31,
        PL_APPCOMMON_KEY_EXIT: 45,
        PL_APPCOMMON_KEY_FAVCH: 256,
        PL_APPCOMMON_KEY_REWIND: 69,
        PL_APPCOMMON_KEY_STOP: 70,
        PL_APPCOMMON_KEY_PLAY: 71,
        PL_APPCOMMON_KEY_FF: 72,
        PL_APPCOMMON_KEY_REC: 192,
        PL_APPCOMMON_KEY_PAUSE: 74,
        PL_APPCOMMON_KEY_TOOLS: 115,
        PL_APPCOMMON_KEY_FF_: 1078,
        PL_APPCOMMON_KEY_REWIND_: 1080,
        PL_APPCOMMON_KEY_RETURN: 88,
        PL_APPCOMMON_KEY_2: 98,
        PL_APPCOMMON_KEY_DMA: 1099,
        PL_APPCOMMON_KEY_1: 101,
        PL_APPCOMMON_KEY_CH_LIST: 84,
        PL_APPCOMMON_KEY_RED: 108,
        PL_APPCOMMON_KEY_CONTENTS: 261,
        PL_APPCOMMON_KEY_W_LINK: 115,
        PL_APPCOMMON_KEY_RSS: 147,
        PL_APPCOMMON_KEY_ENTERTAINMENT: 653,
        PL_APPCOMMON_KEY_PANNEL_POWER: 614,
        PL_APPCOMMON_KEY_PANNEL_CHUP: 105,
        PL_APPCOMMON_KEY_PANNEL_CHDOWN: 106,
        PL_APPCOMMON_KEY_PANNEL_VOLUP: 203,
        PL_APPCOMMON_KEY_PANNEL_VOLDOWN: 204,
        PL_APPCOMMON_KEY_PANNEL_ENTER: 309,
        PL_APPCOMMON_KEY_PANNEL_MENU: 613,
        PL_APPCOMMON_KEY_PANNEL_SOURCE: 612,
        PL_APPCOMMON_KEY_3D: 1219,
        PL_APPCOMMON_KEY_FAMILYHUB: 252,
        PL_APPCOMMON_KEY_CAMERA: 253,
        PL_APPCOMMON_KEY_HISTORY: 246
    };
    var d = {};
    d[b.key.N1] = c.PL_APPCOMMON_KEY_1;
    d[b.key.N2] = c.PL_APPCOMMON_KEY_2;
    d[b.key.N3] = c.PL_APPCOMMON_KEY_3;
    d[b.key.N4] = c.PL_APPCOMMON_KEY_4;
    d[b.key.N5] = c.PL_APPCOMMON_KEY_5;
    d[b.key.N6] = c.PL_APPCOMMON_KEY_6;
    d[b.key.N7] = c.PL_APPCOMMON_KEY_7;
    d[b.key.N8] = c.PL_APPCOMMON_KEY_8;
    d[b.key.N9] = c.PL_APPCOMMON_KEY_9;
    d[b.key.N0] = c.PL_APPCOMMON_KEY_0;
    d[b.key.PRECH] = c.PL_APPCOMMON_KEY_PRECH;
    d[b.key.VOL_UP] = c.PL_APPCOMMON_KEY_VOLUP;
    d[b.key.VOL_DOWN] = c.PL_APPCOMMON_KEY_VOLDOWN;
    d[b.key.CH_UP] = c.PL_APPCOMMON_KEY_CHUP;
    d[b.key.CH_DOWN] = c.PL_APPCOMMON_KEY_CHDOWN;
    d[b.key.MUTE] = c.PL_APPCOMMON_KEY_MUTE;
    d[b.key.SOURCE] = c.PL_APPCOMMON_KEY_SOURCE;
    d[b.key.CHLIST] = c.PL_APPCOMMON_KEY_CH_LIST;
    d[b.key.MENU] = c.PL_APPCOMMON_KEY_MENU;
    d[b.key.WLINK] = c.PL_APPCOMMON_KEY_W_LINK;
    d[b.key.ENTER] = c.PL_APPCOMMON_KEY_JOYSTICK_OK;
    d[b.key.RETURN] = c.PL_APPCOMMON_KEY_RETURN;
    d[b.key.INFO] = c.PL_APPCOMMON_KEY_INFO;
    d[b.key.EXIT] = c.PL_APPCOMMON_KEY_EXIT;
    d[b.key.UP] = c.PL_APPCOMMON_KEY_JOYSTICK_UP;
    d[b.key.DOWN] = c.PL_APPCOMMON_KEY_JOYSTICK_DOWN;
    d[b.key.LEFT] = c.PL_APPCOMMON_KEY_JOYSTICK_LEFT;
    d[b.key.RIGHT] = c.PL_APPCOMMON_KEY_JOYSTICK_RIGHT;
    d[b.key.RED] = c.PL_APPCOMMON_KEY_RED;
    d[b.key.GREEN] = c.PL_APPCOMMON_KEY_GREEN;
    d[b.key.YELLOW] = c.PL_APPCOMMON_KEY_YELLOW;
    d[b.key.BLUE] = c.PL_APPCOMMON_KEY_CYAN;
    d[b.key.INFOLINK] = c.PL_APPCOMMON_KEY_RSS;
    d[b.key.DMA] = c.PL_APPCOMMON_KEY_DMA;
    d[b.key.EMODE] = c.PL_APPCOMMON_KEY_ENTERTAINMENT;
    d[b.key.CONTENTS] = c.PL_APPCOMMON_KEY_CONTENTS;
    d[b.key.FAVCH] = c.PL_APPCOMMON_KEY_FAVCH;
    d[b.key.REW] = c.PL_APPCOMMON_KEY_REWIND;
    d[b.key.PAUSE] = c.PL_APPCOMMON_KEY_PAUSE;
    d[b.key.FF] = c.PL_APPCOMMON_KEY_FF;
    d[b.key.REC] = c.PL_APPCOMMON_KEY_REC;
    d[b.key.PLAY] = c.PL_APPCOMMON_KEY_PLAY;
    d[b.key.STOP] = c.PL_APPCOMMON_KEY_STOP;
    d[b.key.PANEL_CH_UP] = c.PL_APPCOMMON_KEY_PANNEL_CHUP;
    d[b.key.PANEL_CH_DOWN] = c.PL_APPCOMMON_KEY_PANNEL_CHDOWN;
    d[b.key.PANEL_VOL_UP] = c.PL_APPCOMMON_KEY_PANNEL_VOLUP;
    d[b.key.PANEL_VOL_DOWN] = c.PL_APPCOMMON_KEY_PANNEL_VOLDOWN;
    d[b.key.PANEL_ENTER] = c.PL_APPCOMMON_KEY_PANNEL_ENTER;
    d[b.key.PANEL_SOURCE] = c.PL_APPCOMMON_KEY_PANNEL_SOURCE;
    d[b.key.PANEL_MENU] = c.PL_APPCOMMON_KEY_PANNEL_MENU;
    d[b.key.PANEL_POWER] = c.PL_APPCOMMON_KEY_PANNEL_POWER;
    d[b.key.THREE_D] = c.PL_APPCOMMON_KEY_3D;
    d[b.key.TOOLS] = c.PL_APPCOMMON_KEY_TOOLS;
    var e = {
        PL_TVMW_KEY_1: 0,
        PL_TVMW_KEY_2: 1,
        PL_TVMW_KEY_3: 2,
        PL_TVMW_KEY_4: 3,
        PL_TVMW_KEY_5: 4,
        PL_TVMW_KEY_6: 5,
        PL_TVMW_KEY_7: 6,
        PL_TVMW_KEY_8: 7,
        PL_TVMW_KEY_9: 8,
        PL_TVMW_KEY_0: 9,
        PL_TVMW_KEY_HYPHEN: 10,
        PL_TVMW_KEY_11: 11,
        PL_TVMW_KEY_CH_UP: 100,
        PL_TVMW_KEY_CH_DOWN: 101,
        PL_TVMW_KEY_CH_PREV: 102,
        PL_TVMW_KEY_CH_FAV: 103,
        PL_TVMW_KEY_CH_LIST: 104,
        PL_TVMW_KEY_CH_PANNEL_UP: 105,
        PL_TVMW_KEY_CH_PANNEL_DOWN: 106,
        PL_TVMW_KEY_VOL_UP: 200,
        PL_TVMW_KEY_VOL_DOWN: 201,
        PL_TVMW_KEY_MUTE: 202,
        PL_TVMW_KEY_VOL_PANNEL_UP: 203,
        PL_TVMW_KEY_VOL_PANNEL_DOWN: 204,
        PL_TVMW_KEY_ENTER: 300,
        PL_TVMW_KEY_RETURN: 301,
        PL_TVMW_KEY_EXIT: 302,
        PL_TVMW_KEY_ARROW_UP: 303,
        PL_TVMW_KEY_ARROW_DOWN: 304,
        PL_TVMW_KEY_ARROW_LEFT: 305,
        PL_TVMW_KEY_ARROW_RIGHT: 306,
        PL_TVMW_KEY_WHEEL_LEFT: 307,
        PL_TVMW_KEY_WHEEL_RIGHT: 308,
        PL_TVMW_KEY_PANNEL_ENTER: 309,
        PL_TVMW_KEY_RED: 400,
        PL_TVMW_KEY_GREEN: 401,
        PL_TVMW_KEY_YELLOW: 402,
        PL_TVMW_KEY_CYAN: 403,
        PL_TVMW_KEY_REWARD: 500,
        PL_TVMW_KEY_PAUSE: 501,
        PL_TVMW_KEY_FOWARD: 502,
        PL_TVMW_KEY_PLAY: 503,
        PL_TVMW_KEY_STOP: 504,
        PL_TVMW_KEY_REC: 505,
        PL_TVMW_KEY_INFO: 600,
        PL_TVMW_KEY_TOOLS: 601,
        PL_TVMW_KEY_INFOLINK: 602,
        PL_TVMW_KEY_EMODE: 603,
        PL_TVMW_KEY_DATA: 604,
        PL_TVMW_KEY_DMA: 605,
        PL_TVMW_KEY_CONTENTS: 606,
        PL_TVMW_KEY_MENU: 607,
        PL_TVMW_KEY_WISELINK: 608,
        PL_TVMW_KEY_SOURCE: 609,
        PL_TVMW_KEY_POWER: 610,
        PL_TVMW_KEY_TV: 611,
        PL_TVMW_KEY_PANNEL_SOURCE: 612,
        PL_TVMW_KEY_PANNEL_MENU: 613,
        PL_TVMW_KEY_PANNEL_POWER: 614,
        PL_TVMW_KEY_TTX_MIX: 650,
        PL_TVMW_KEY_GUIDE: 651,
        PL_TVMW_KEY_SUBTITLE: 652,
        PL_TVMW_KEY_ASPECT: 653,
        PL_TVMW_KEY_DOLBY_SRR: 654,
        PL_TVMW_KEY_MTS: 655,
        PL_TVMW_KEY_REPEAT: 656,
        PL_TVMW_KEY_STEP: 1023,
        PL_TVMW_KEY_PIP_ONOFF: 1032,
        PL_TVMW_KEY_AD: 1039,
        PL_TVMW_KEY_PMODE: 1040,
        PL_TVMW_KEY_SMODE: 1043,
        PL_TVMW_KEY_PIP_CHUP: 1050,
        PL_TVMW_KEY_PIP_CHDOWN: 1051,
        PL_TVMW_KEY_FF_: 1078,
        PL_TVMW_KEY_REWIND_: 1080,
        PL_TVMW_KEY_DISC_MENU: 1086,
        PL_TVMW_KEY_SUB_TITLE: 1089,
        PL_TVMW_KEY_SLEEP: 1097,
        PL_TVMW_KEY_PCMODE: 1105,
        PL_TVMW_KEY_AV1: 1132,
        PL_TVMW_KEY_SVIDEO1: 1133,
        PL_TVMW_KEY_COMPONENT1: 1134,
        PL_TVMW_KEY_COMPONENT2: 1136,
        PL_TVMW_KEY_HDMI: 1139,
        PL_TVMW_KEY_AV2: 1165,
        PL_TVMW_KEY_AV3: 1166,
        PL_TVMW_KEY_SVIDEO2: 1167,
        PL_TVMW_KEY_SVIDEO3: 1168,
        PL_TVMW_KEY_ZOOM2: 1169,
        PL_TVMW_KEY_PANORAMA: 1170,
        PL_TVMW_KEY_4_3: 1171,
        PL_TVMW_KEY_16_9: 1172,
        PL_TVMW_KEY_DYNAMIC: 1173,
        PL_TVMW_KEY_STANDARD: 1174,
        PL_TVMW_KEY_MOVIE1: 1175,
        PL_TVMW_KEY_CUSTOM: 1176,
        PL_TVMW_KEY_HDMI1: 1184,
        PL_TVMW_KEY_HDMI2: 1205,
        PL_TVMW_KEY_HDMI3: 1206,
        PL_TVMW_KEY_HDMI4: 1210,
        PL_TVMW_KEY_TILT: 1217,
        PL_TVMW_KEY_EZ_VIEW: 1218,
        PL_TVMW_KEY_3D: 1219,
        PL_TVMW_KEY_AUTO_ARC_PVR_RECORDING_TEST: 1220,
        PL_TVMW_KEY_AUTO_ARC_PVR_PLAY_TEST: 1221,
        PL_TVMW_KEY_AUTO_ARC_PVR_DELETE_ALL: 1222,
        PL_TVMW_KEY_AUTO_ARC_HOTEL_INTERACTIVE: 1223,
        PL_TVMW_KEY_D_LIST_UP: 1224,
        PL_TVMW_KEY_D_LIST_DOWN: 1225,
        PL_TVMW_KEY_D_ONDEMAND: 1226,
        PL_TVMW_KEY_D_PANNEL_VIRTUAL_ENTER: 1227,
        PL_TVMW_KEY_D_PANNEL_VIRTUAL_SOURCE: 1228,
        PL_TVMW_KEY_D_REC_PAUSE: 1229,
        PL_TVMW_KEY_D_CONTINUED_FF: 1230,
        PL_TVMW_KEY_D_CONTINUED_RW: 1231,
        PL_TVMW_KEY_D_CONTINUED_OFF: 1232,
        PL_TVMW_KEY_D_CANCEL: 1233,
        PL_TVMW_KEY_D_TITLE_MENU: 1234,
        PL_TVMW_KEY_D_REPEAT_AB: 1235,
        PL_TVMW_KEY_D_AUDIO: 1236,
        PL_TVMW_KEY_D_REC_MODE: 1237,
        PL_TVMW_KEY_D_USB: 1238,
        PL_TVMW_KEY_D_HDD: 1239,
        PL_TVMW_KEY_D_DISC: 1240,
        PL_TVMW_KEY_D_TEST: 1241,
        PL_TVMW_KEY_D_COPY: 1242,
        PL_TVMW_KEY_D_FRONT_PLAY: 1243,
        PL_TVMW_KEY_D_FRONT_STOP: 1244,
        PL_TVMW_KEY_D_FRONT_FF: 1245,
        PL_TVMW_KEY_D_FRONT_RW: 1246,
        PL_TVMW_KEY_D_FRONT_REC: 1247,
        PL_TVMW_KEY_D_VERSION_DISPLAY_KEU: 1248,
        PL_TVMW_KEY_D_VIEW_MODE: 1249,
        PL_TVMW_KEY_D_COLD_START: 1250
    };
    var a = {};
    a[b.key.N1] = e.PL_TVMW_KEY_1;
    a[b.key.N2] = e.PL_TVMW_KEY_2;
    a[b.key.N3] = e.PL_TVMW_KEY_3;
    a[b.key.N4] = e.PL_TVMW_KEY_4;
    a[b.key.N5] = e.PL_TVMW_KEY_5;
    a[b.key.N6] = e.PL_TVMW_KEY_6;
    a[b.key.N7] = e.PL_TVMW_KEY_7;
    a[b.key.N8] = e.PL_TVMW_KEY_8;
    a[b.key.N9] = e.PL_TVMW_KEY_9;
    a[b.key.N0] = e.PL_TVMW_KEY_0;
    a[b.key.PRECH] = e.PL_TVMW_KEY_CH_PREV;
    a[b.key.VOL_UP] = e.PL_TVMW_KEY_VOL_UP;
    a[b.key.VOL_DOWN] = e.PL_TVMW_KEY_VOL_DOWN;
    a[b.key.CH_UP] = e.PL_TVMW_KEY_CH_UP;
    a[b.key.CH_DOWN] = e.PL_TVMW_KEY_CH_DOWN;
    a[b.key.MUTE] = e.PL_TVMW_KEY_MUTE;
    a[b.key.SOURCE] = e.PL_TVMW_KEY_SOURCE;
    a[b.key.CHLIST] = e.PL_TVMW_KEY_CH_LIST;
    a[b.key.MENU] = e.PL_TVMW_KEY_MENU;
    a[b.key.WLINK] = e.PL_TVMW_KEY_WISELINK;
    a[b.key.ENTER] = e.PL_TVMW_KEY_ENTER;
    a[b.key.RETURN] = e.PL_TVMW_KEY_RETURN;
    a[b.key.INFO] = e.PL_TVMW_KEY_INFO;
    a[b.key.EXIT] = e.PL_TVMW_KEY_EXIT;
    a[b.key.UP] = e.PL_TVMW_KEY_ARROW_UP;
    a[b.key.DOWN] = e.PL_TVMW_KEY_ARROW_DOWN;
    a[b.key.LEFT] = e.PL_TVMW_KEY_ARROW_LEFT;
    a[b.key.RIGHT] = e.PL_TVMW_KEY_ARROW_RIGHT;
    a[b.key.RED] = e.PL_TVMW_KEY_RED;
    a[b.key.GREEN] = e.PL_TVMW_KEY_GREEN;
    a[b.key.YELLOW] = e.PL_TVMW_KEY_YELLOW;
    a[b.key.BLUE] = e.PL_TVMW_KEY_CYAN;
    a[b.key.INFOLINK] = e.PL_TVMW_KEY_INFOLINK;
    a[b.key.DMA] = e.PL_TVMW_KEY_DMA;
    a[b.key.EMODE] = e.PL_TVMW_KEY_EMODE;
    a[b.key.CONTENTS] = e.PL_TVMW_KEY_CONTENTS;
    a[b.key.FAVCH] = e.PL_TVMW_KEY_CH_FAV;
    a[b.key.REW] = e.PL_TVMW_KEY_REWARD;
    a[b.key.PAUSE] = e.PL_TVMW_KEY_PAUSE;
    a[b.key.FF] = e.PL_TVMW_KEY_FOWARD;
    a[b.key.REC] = e.PL_TVMW_KEY_REC;
    a[b.key.PLAY] = e.PL_TVMW_KEY_PLAY;
    a[b.key.STOP] = e.PL_TVMW_KEY_STOP;
    a[b.key.PANEL_CH_UP] = e.PL_TVMW_KEY_CH_PANNEL_UP;
    a[b.key.PANEL_CH_DOWN] = e.PL_TVMW_KEY_CH_PANNEL_DOWN;
    a[b.key.PANEL_VOL_UP] = e.PL_TVMW_KEY_VOL_PANNEL_UP;
    a[b.key.PANEL_VOL_DOWN] = e.PL_TVMW_KEY_VOL_DOWN;
    a[b.key.PANEL_ENTER] = e.PL_TVMW_KEY_PANNEL_ENTER;
    a[b.key.PANEL_SOURCE] = e.PL_TVMW_KEY_PANNEL_SOURCE;
    a[b.key.PANEL_MENU] = e.PL_TVMW_KEY_PANNEL_MENU;
    a[b.key.PANEL_POWER] = e.PL_TVMW_KEY_PANNEL_POWER;
    a[b.key.THREE_D] = e.PL_TVMW_KEY_3D
})(sf);
(function (b) {
    b.core._PCMode = (b.env.getBrowser() == "chrome" || b.env.getBrowser() == "safari");
    var a = {
        AUDIO: {
            GetPluginInfo: function () {
                return null
            }, CheckExternalOutMode: function () {
                return null
            }, GetExternalOutMode: function () {
                return null
            }, GetOutputDevice: function () {
                return null
            }, GetSystemMute: function () {
                return null
            }, GetUserMute: function () {
                return null
            }, GetVolume: function () {
                return null
            }, IsActiveSourceOnCEC: function () {
                return null
            }, SetExternalOutMode: function () {
                return null
            }, SetSystemMute: function () {
                return null
            }, SetTVSourceOnCEC: function () {
                return null
            }, SetUserMute: function () {
                return null
            }, SetVolumeWithKey: function () {
                return null
            }
        }, APPCOMMON: {
            GetPluginInfo: function () {
                return null
            }, CheckReservedKey: function () {
                return null
            }, IsKeyRegister: function () {
                return null
            }, RegisterAllKey: function () {
                return null
            }, RegisterColorKey: function () {
                return null
            }, RegisterKey: function () {
                return null
            }, RegisterNaviKey: function () {
                return null
            }, RegisterNumKey: function () {
                return null
            }, RegisterPlaybackKey: function () {
                return null
            }, SendEvent_IME: function () {
                return null
            }, SendEvent_IME_Sync: function () {
                return null
            }, SendKeyToTVViewer: function () {
                return null
            }, SubscribeEvent: function () {
                return null
            }, UnregisterAllKey: function () {
                return null
            }, UnregisterColorKey: function () {
                return null
            }, UnregisterKey: function () {
                return null
            }, UnregisterNaviKey: function () {
                return null
            }, UnregisterNumKey: function () {
                return null
            }, UnregisterPlaybackKey: function () {
                return null
            }, UnsubscribeEvent: function () {
                return null
            }, SendDualTVWidgetViewInfo: function () {
                return null
            }
        }, DEVICE: {
            GetPluginInfo: function () {
                return null
            }, GetDisplayPanelType: function () {
                return 0
            }, GetModel: function () {
                return "UNXXD8000_USA"
            }, "GetRealModel ": function () {
                return "UN46D8000_USA"
            }
        }, FRONTPANEL: {
            GetPluginInfo: function () {
                return null
            }, DisplayVFD_Show: function () {
                return null
            }, DisplayVFD_Time: function () {
                return null
            }
        }, IMAGEVIEWER: {
            GetPluginInfo: function () {
                return null
            },
            ClearScreen: function () {
                return null
            },
            GetPlayerVersion: function () {
                return null
            },
            GetVideoHeight: function () {
                return null
            },
            GetVideoWidth: function () {
                return null
            },
            InitPlayer: function () {
                return null
            },
            Play: function () {
                return null
            },
            SetDisplayArea: function () {
                return null
            },
            SetDisplayLock: function () {
                return null
            },
            SetTransitionEffect: function () {
                return null
            },
            ShowImage: function () {
                return null
            },
            Stop: function () {
                return null
            },
            OnBufferingComplete: null,
            OnBufferingStart: null,
            OnConnectionFailed: null,
            OnNetworkDisconnected: null,
            OnRenderError: null,
            OnRenderingComplete: null,
            OnStreamInfoReady: null,
            OnStreamNotFound: null,
        }, NETWORK: {
            GetPluginInfo: function () {
                return null
            }, CheckCableConnection: function () {
                return null
            }, CheckDNS: function () {
                return null
            }, CheckGateway: function () {
                return null
            }, CreatePlugin: function () {
                return null
            }, GetActiveType: function () {
                return null
            }, GetDNS: function () {
                return null
            }, GetGateway: function () {
                return null
            }, GetHostAddr: function () {
                return null
            }, GetHWaddr: function () {
                return null
            }, GetIpType: function () {
                return null
            }, GetNetMask: function () {
                return null
            }, GetStatus: function () {
                return null
            }, HttpTest: function () {
                return null
            }, IPConflictTest: function () {
                return null
            }
        }, NNAVI: {
            GetPluginInfo: function () {
                return null
            }, ActivateReady: function () {
                return null
            }, ActivateWithData: function () {
                return null
            }, ChangeWidgetManager: function () {
                return null
            }, GetAppKey: function () {
                return null
            }, GetDUID: function () {
                return "123456789"
            }, GetFirmware: function () {
                return "T-INFOLINK2012-1000"
            }, GetModelCode: function () {
                return "12_ECHO_P"
            }, GetPath: function () {
                return null
            }, GetRemoconType: function () {
                return null
            }, GetServerType: function () {
                return null
            }, GetSupportPIG: function () {
                return null
            }, GetSystemVersion: function () {
                return null
            }, GetToken: function () {
                return null
            }, NeedThisRemoconKey: function () {
                return null
            }, ResetWidgetData: function () {
                return null
            }, SendEventToDevice: function () {
                return null
            }, SetBannerState: function () {
                return null
            }
        }, PLAYER: {
            GetPluginInfo: function () {
                return null
            },
            ClearScreen: function () {
                return null
            },
            GetAvailableBitrates: function () {
                return null
            },
            GetCurrentBitrates: function () {
                return null
            },
            GetDuration: function () {
                return null
            },
            GetLiveDuration: function () {
                return null
            },
            GetPlayerVersion: function () {
                return null
            },
            GetVideoHeight: function () {
                return null
            },
            GetVideoWidth: function () {
                return null
            },
            InitPlayer: function () {
                return null
            },
            JumpBackward: function () {
                return null
            },
            JumpForward: function () {
                return null
            },
            Pause: function () {
                return null
            },
            Play: function () {
                return null
            },
            Resume: function () {
                return null
            },
            ResumePlay: function () {
                return null
            },
            SetCropArea: function () {
                return null
            },
            SetDisplayArea: function () {
                return null
            },
            SetICT: function () {
                return null
            },
            SetInitialBuffer: function () {
                return null
            },
            SetInitialTimeOut: function () {
                return null
            },
            SetMacrovision: function () {
                return null
            },
            SetPendingBuffer: function () {
                return null
            },
            SetPlaybackSpeed: function () {
                return null
            },
            SetPlayerProperty: function () {
                return null
            },
            SetTotalBufferSize: function () {
                return null
            },
            SetVBIData: function () {
                return null
            },
            StartPlayback: function () {
                return null
            },
            Stop: function () {
                return null
            },
            OnAdEnd: null,
            OnAdStart: null,
            OnAuthenticationFailed: null,
            OnBufferingComplete: null,
            OnBufferingProgress: null,
            OnBufferingStart: null,
            OnConnectionFailed: null,
            OnCurrentPlayTime: null,
            OnNetworkDisconnected: null,
            OnRenderError: null,
            OnRenderingComplete: null,
            OnResolutionChanged: null,
            OnStreamInfoReady: null,
            OnStreamNotFound: null
        }, SCREEN: {
            GetPluginInfo: function () {
                return null
            }, Check3DEffectMode: function () {
                return null
            }, Flag3DEffectSupport: function () {
                return null
            }, Flag3DTVConnect: function () {
                return null
            }, Get3DEffectMode: function () {
                return null
            }, GetOption: function () {
                return null
            }, Set3DEffectMode: function () {
                return null
            }, SetOption: function () {
                return null
            }
        }, TV: {
            GetPluginInfo: function () {
                return null
            }, CheckPIP: function () {
                return null
            }, FlagStreamDST: function () {
                return null
            }, GetBDProductType: function () {
                return null
            }, GetCountry: function () {
                return null
            }, GetDisplayPanelType: function () {
                return null
            }, GetDST: function () {
                return null
            }, GetLanguage: function () {
                return null
            }, GetLanguageSet: function () {
                return null
            }, GetPIP: function () {
                return null
            }, GetPresentProgram_Duration: function () {
                return null
            }, GetPresentProgram_EndTime: function () {
                return null
            }, GetPresentProgram_StartTime: function () {
                return null
            }, GetPresentProgram_Title: function () {
                return null
            }, GetProductCode: function () {
                return null
            }, GetProductType: function () {
                return null
            }, GetProgram_Duration: function () {
                return null
            }, GetProgram_EndTime: function () {
                return null
            }, GetProgram_StartTime: function () {
                return null
            }, GetProgram_Title: function () {
                return null
            }, GetProgramList: function () {
                return null
            }, GetProgramList_Size: function () {
                return null
            }, GetTargetLocation: function () {
                return 0
            }, GetTimeZone: function () {
                return null
            }, GetTimeZone_Offset: function () {
                return null
            }, SetCountry: function () {
                return null
            }, SetDST: function () {
                return null
            }, SetEvent: function () {
                return null
            }, SetLanguage: function () {
                return null
            }, SetPIP: function () {
                return null
            }, SetTimeZone: function () {
                return null
            }, SetWatchDog: function () {
                return null
            }, UnsetEvent: function () {
                return null
            }, OnEvent: null
        }, TVMW: {
            GetPluginInfo: function () {
                return null
            }, CheckReservedKey: function () {
                return null
            }, Deactivate: function () {
                return null
            }, GetActiveApp: function () {
                return null
            }, GetBGApp: function () {
                return null
            }, GetCountry: function () {
                return null
            }, GetLanguage: function () {
                return null
            }, GetProfile: function () {
                return null
            }, GetSource: function () {
                return null
            }, GetTVUseMode: function () {
                return null
            }, IsRegisteredKey: function () {
                return null
            }, RegForBGApp: function () {
                return null
            }, RegisterKey: function () {
                return null
            }, RegisterKeyGroup: function () {
                return null
            }, SendKeyToTVViewer: function () {
                return null
            }, SetProfile: function () {
                return null
            }, SetSource: function () {
                return null
            }, SetMediaSource: function () {
                return null
            }, SetWatchDog: function () {
                return null
            }, UnregForBGApp: function () {
                return null
            }, UnregisterKey: function () {
                return null
            }, UnregisterKeyGroup: function () {
                return null
            }
        }, WINDOW: {
            GetPluginInfo: function () {
                return null
            }, CheckScreenRect_PosSizeMode: function () {
                return null
            }, GetCurrentChannel_Major: function () {
                return null
            }, GetCurrentChannel_Minor: function () {
                return null
            }, GetCurrentChannel_Name: function () {
                return null
            }, GetCurrentChannel_OriginNetID: function () {
                return null
            }, GetCurrentChannel_ProgramNumber: function () {
                return null
            }, GetCurrentChannel_PTC: function () {
                return null
            }, GetCurrentChannel_ServiceName: function () {
                return null
            }, GetCurrentChannel_Type: function () {
                return null
            }, GetResolution: function () {
                return null
            }, GetScreenRect: function () {
                return null
            }, GetScreenRect_PosMode: function () {
                return null
            }, GetScreenRect_SizeMode: function () {
                return null
            }, GetSource: function () {
                return null
            }, GetState_Show: function () {
                return null
            }, SetChannel: function () {
                return null
            }, SetChannel_PTC: function () {
                return null
            }, SetChannel_Seek: function () {
                return null
            }, SetScreenRect: function () {
                return null
            }, SetScreenRect_PosSizeMode: function () {
                return null
            }, SetSource: function () {
                return null
            }, Show: function () {
                return null
            }
        }
    };
    if (b.core._PCMode) {
        b.core.plugin = b.core.sefplugin = function (c) {
            return a[c.toUpperCase()]
        };
        b.key.LEFT = 37;
        b.key.RIGHT = 39;
        b.key.UP = 38;
        b.key.DOWN = 40;
        b.key.ENTER = 13;
        b.key.N0 = 48;
        b.key.N1 = 49;
        b.key.N2 = 50;
        b.key.N3 = 51;
        b.key.N4 = 52;
        b.key.N5 = 53;
        b.key.N6 = 54;
        b.key.N7 = 55;
        b.key.N8 = 56;
        b.key.N9 = 57;
        b.key.RETURN = 27;
        b.key.RED = 112;
        b.key.GREEN = 113;
        b.key.YELLOW = 114;
        b.key.BLUE = 115;
        b.key.SMARTHUB = 116;
        b.key.SOURCE = 117;
        b.key.CHLIST = 118;
        b.key.MUTE = 119;
        b.key.VOL_DOWN = 120;
        b.key.VOL_UP = 121;
        b.key.CH_DOWN = 122;
        b.key.CH_UP = 123;
        b.key.MENU = 91;
        b.key.TOOLS = 93;
        document.body.addEventListener("keydown", function () {
            event.preventDefault()
        })
    }
})(sf);
alert("[AF core] core.js included");
(function (sf) {
    var focusInterval = null;
    var masterAnchorID = "sf_scene_masteranchor";
    var bHandleKeyWithAnchor = false;
    if (navigator.userAgent) {
        alert("navigator.userAgent: " + navigator.userAgent);
        bHandleKeyWithAnchor = (navigator.userAgent.toLowerCase().indexOf("maple") >= 0 && navigator.userAgent.toLowerCase().indexOf("webkit") < 0)
    }
    sf.scene = {
        get: function (key) {
            var retValue = storage.get(key);
            alert("[AF scene] sf.scene.get(" + key + ") returns " + (retValue ? key : null));
            return retValue
        }, show: function (sceneID, data) {
            alert("[AF scene] sf.scene.show(" + sceneID + ")");
            var scene = this.get(sceneID);
            if (!scene) {
                alert("[AF scene] Invalid scene Id : " + sceneID);
                return
            }
            var el = document.getElementById("Scene" + sceneID);
            if (!el) {
                var filePath = "app/htmls/" + sceneID + ".html";
                var sceneHTML = sf.core.readFile(filePath);
                var scenediv = document.createElement("DIV");
                scenediv.id = "Scene" + sceneID;
                scenediv.innerHTML = sceneHTML;
                document.body.appendChild(scenediv);
                scene.initialize();
                el = document.getElementById("Scene" + sceneID)
            }
            el.style.display = "block";
            scene.handleShow(data)
        }, hide: function (sceneID, data) {
            alert("[AF scene] sf.scene.hide(" + sceneID + ")");
            var scene = this.get(sceneID);
            if (!scene) {
                alert("[AF scene] Invalid scene Id : " + sceneID);
                return
            }
            var id = "Scene" + sceneID;
            var el = document.getElementById(id);
            if (el) {
                el.style.display = "none"
            } else {
                alert("[AF scene] cannot find div : " + id)
            }
            scene.handleHide(data)
        }, focus: function (sceneID, data) {
            alert("[AF scene] sf.scene.focus(" + sceneID + ")");
            if (!this.getVisible(sceneID)) {
                alert("\t" + sceneID + ": This scene is not shown yet. Please show this scene first.");
                return
            }
            var scene = this.get(sceneID);
            if (!scene) {
                alert("[AF scene] Invalid scene Id : " + sceneID);
                return
            }
            var oldScene = curFocused;
            if (oldScene) {
                oldScene.handleBlur()
            }
            curFocused = scene;
            scene.handleFocus(data)
        }, init: function (callback) {
            alert("[AF scene] sf.scene.init()");
            sf.scene.loadScenes(function () {
                sf.scene._bindKeyHandler();
                if (bHandleKeyWithAnchor) {
                    sf.scene.returnFocus()
                }
                if (callback && callback instanceof Function) {
                    callback()
                }
            })
        }, loadScenes: function () {
            alert("[AF scene] sf.scene.loadScenes()");
            var scenes, files, callback;
            var conf = sf.core.getAppConf();
            if (arguments.length == 1) {
                scenes = conf.scenes || [];
                callback = arguments[0]
            } else {
                if (arguments.length == 2) {
                    scenes = arguments[0] || [];
                    callback = arguments[1]
                }
            }
            if (!scenes || !scenes.length) {
                setTimeout(function () {
                    callback(false)
                }, 0);
                return false
            }
            var arrFiles = [];
            var resolutions = conf.resolutions;
            var resolutionDir = "";
            alert("[AF scene] current resolution : " + sf.env.getResolution());
            alert("[AF scene] supported resolutions : " + resolutions);
            if (resolutions && resolutions instanceof Array && resolutions.length) {
                if (sf.util.inArray(sf.env.getResolution(), resolutions)) {
                    resolutionDir = sf.env.getResolution() + "/"
                } else {
                    resolutionDir = sf.util.inArray("540p", resolutions) ? "540p/" : sf.util.inArray("720p", resolutions) ? "720p/" : sf.util.inArray("1080p", resolutions) ? "1080p/" : ""
                }
            } else {
                resolutionDir = ""
            }
            alert("[AF scene] applied resolution : " + resolutionDir);
            var aCssPath = [];
            $.each(scenes, function (index, value) {
                arrFiles.push("app/scenes/" + value + ".js");
                aCssPath.push("app/stylesheets/" + resolutionDir + value + ".css")
            });
            var bSceneCSSLoaded = false;
            var bSceneJSLoaded = false;
            var _THIS_ = this;
            sf.core.loadCSS(aCssPath, function () {
                bSceneCSSLoaded = true;
                if (bSceneCSSLoaded && bSceneJSLoaded) {
                    _THIS_.readScenes(scenes);
                    if (typeof callback == "function") {
                        callback()
                    }
                }
            });
            sf.core.loadJS(arrFiles, function () {
                bSceneJSLoaded = true;
                if (bSceneCSSLoaded && bSceneJSLoaded) {
                    _THIS_.readScenes(scenes);
                    if (typeof callback == "function") {
                        callback()
                    }
                }
            })
        }, readScenes: function (scenes) {
            alert("[AF scene] readScenes(" + scenes + ")");
            $.each(scenes, function (index, SceneID) {
                alert("SCENE: " + SceneID);
                var sceneClass = "Scene" + SceneID;
                try {
                    var instance = eval("new " + sceneClass + "()");
                    instance.id = SceneID;
                    storage.set(SceneID, instance)
                } catch (e) {
                    alert("[AF scene] !!!!! cannot create scene instance !!!!!");
                    alert("[AF scene] " + e.toString())
                }
            })
        }, getFocused: function (sceneid) {
            alert("[AF scene] getFocused(" + sceneid + ")");
            if (sceneid) {
                return curFocused.id == sceneid
            } else {
                return curFocused.id
            }
        }, getVisible: function (sceneID) {
            alert("[AF scene] getVisible(" + sceneID + ")");
            if (!sceneID) {
                alert("\treturns false");
                return false
            }
            var el = document.getElementById("Scene" + sceneID);
            var visible = (el && el.style.display == "block");
            alert("\tresult: " + visible);
            return visible ? true : false
        }, getState: function (sceneID) {
            alert("[AF scene] getState(" + sceneID + ")");
            if (this.getFocused(sceneID)) {
                alert("\treturns 'focused'");
                return "focused"
            } else {
                alert("\treturns " + (this.getVisible(sceneID) ? "shown" : "hidden"));
                return this.getVisible(sceneID) ? "shown" : "hidden"
            }
        }, _bindKeyHandler: function () {
            alert("sf.scene._bindKeyHandler()");
            if (bHandleKeyWithAnchor) {
                $("body").append('<a href="javascript:void(0)" id="' + masterAnchorID + '" onkeydown="sf.scene._handleKeyDown();"></a>');
                alert("use anchor for handling key event")
            } else {
                $("body").bind("keydown", function () {
                    alert("[AF scene] body keydown event fired");
                    if (document.activeElement && document.activeElement.tagName && document.activeElement.tagName.toUpperCase() != "BODY") {
                        alert("\tbody is not activated currently... skip! : " + document.activeElement.tagName)
                    } else {
                        sf.scene._handleKeyDown()
                    }
                });
                alert('use "document.activeElement" for handling key event')
            }
        }, returnFocus: function () {
            alert("[AF core] sf.scene.returnFocus()");
            this.clearKeyHandler();
            if (event && event.stopPropagation) {
                event.stopPropagation()
            }
            if (bHandleKeyWithAnchor) {
                alert("Handling key with anchor... focus to master anchor");
                var anchor = document.getElementById(masterAnchorID);
                if (anchor) {
                    anchor.focus()
                }
            } else {
                if (document.activeElement) {
                    alert("current activeElement " + document.activeElement);
                    if (document.activeElement && document.activeElement.tagName && document.activeElement.tagName.toUpperCase() != "BODY") {
                        document.activeElement.blur()
                    }
                }
            }
        }, aKeyHandlers: [], pushKeyHandler: function (eh, opt) {
            alert("[AF scene] pushKeyHandler()");
            var defaultOpt = {context: null, id: (new Date().getTime())};
            opt = $.extend(defaultOpt, opt);
            this.aKeyHandlers.push({handler: eh, context: opt.context || null, id: opt.id});
            alert("handler id: " + opt.id);
            return opt.id
        }, removeKeyHandler: function (id) {
            alert("[AF scene] removeKeyHandler(" + id + ")");
            if (id) {
                for (var i = this.aKeyHandlers.length - 1; i >= 0; i--) {
                    if (this.aKeyHandlers[i].id == id) {
                        this.aKeyHandlers.splice(i, 1);
                        alert("remove index " + i + " handler")
                    }
                }
            }
        }, popKeyHandler: function () {
            alert("[AF scene] popKeyHandler()");
            return this.aKeyHandlers.pop()
        }, clearKeyHandler: function () {
            alert("[AF scene] clearKeyHandler()");
            this.aKeyHandlers = []
        }, getKeyHandler: function () {
            alert("[AF scene] getKeyHandler()");
            if (this.aKeyHandlers && this.aKeyHandlers.length) {
                alert(this.aKeyHandlers.length + " handlers found");
                var eh = this.aKeyHandlers[this.aKeyHandlers.length - 1];
                return (eh || null)
            } else {
                return {handler: this._handleSceneKeyDown, context: this}
            }
        }, _handleKeyDown: function (keyCode) {
            keyCode = keyCode || event.keyCode;
            alert("[AF scene] sf.scene._handleKeyDown(" + keyCode + ")");
            keyCode = sf.core.mapAliasedKeys(keyCode);
            var objHandler = this.getKeyHandler();
            if (objHandler && objHandler.handler && objHandler.handler instanceof Function) {
                objHandler.handler.call(objHandler.context || null, keyCode)
            }
        }, _handleSceneKeyDown: function (keyCode) {
            alert("[AF scene] _handleSceneKeyDown (" + keyCode + ")");
            if (keyCode === undefined) {
                alert("do nothing. keyCode: " + keyCode);
                return
            }
            var scene = curFocused;
            if (scene && typeof scene.handleKeyDown == "function") {
                scene.handleKeyDown(keyCode)
            } else {
                alert("[AF scene] cannot run current focused scene's key handler.");
                alert("[AF scene] scene : " + scene);
                if (scene) {
                    alert("[AF scene] key handler : " + scene.handleKeyDown)
                }
            }
        }, _isSceneArchUsed: function () {
            alert("[AF scene] _isSceneArchUsed()");
            var scenes = sf.core.getAppConf("scenes");
            var scenebased = sf.core.getAppConf("scenebased");
            var used = (scenes && scenes.length || scenebased) ? true : false;
            alert("\treturns: " + used);
            return used
        }
    };
    var oKeyHandler = {};
    var storage = new Storage();
    var curFocused = "";

    function Storage() {
        var data = {};
        this.get = function (key) {
            var retValue = null;
            if (data[key]) {
                retValue = data[key]
            }
            alert("[AF scene] storage.get(" + key + ") returns " + retValue);
            return retValue
        };
        this.set = function (key, value) {
            data[key] = value;
            alert("[AF scene] Storage.set(" + key + ")")
        };
        this.add = function (key, prop, value) {
            if (data[key]) {
                data[key][prop] = value
            } else {
                alert("[AF scene] cannot add the property.")
            }
        };
        this._getData = function () {
            return data
        }
    }
})(sf);
alert("[AF scene] Scene.js included");
sf = sf || {};
(function (d) {
    function a(h) {
        return;
        var g = "";
        for (var f = 0; f < e; f++) {
            g += "\t"
        }
        alert(g + h)
    }

    var e = 0;
    d.util = {
        xml2json: function (g) {
            var f = this.xml2obj(g);
            return this.obj2json(f)
        }, xml2obj: function (m) {
            var l = {};
            var g = true;
            e++;
            a("xml2obj : " + m.tagName + "(" + m.nodeType + ")");
            if (m.nodeType == 9) {
                e--;
                return this.xml2obj(m.documentElement)
            } else {
                if (m.nodeType == 1) {
                    var f = 0;
                    for (var k = m.firstChild; k; k = k.nextSibling) {
                        if ((k.nodeType == 3 && k.nodeValue.match(/[^ \f\n\r\t\v]/)) || k.nodeType == 4) {
                            f++
                        }
                    }
                    a("valueCount = " + f);
                    for (var h = 0; h < m.attributes.length; h++) {
                        a("attribute " + m.attributes[h].nodeName + " = " + m.attributes[h].nodeValue);
                        l[m.attributes[h].nodeName] = m.attributes[h].nodeValue;
                        g = false
                    }
                    for (var k = m.firstChild; k; k = k.nextSibling) {
                        a("Child node : " + k.nodeType);
                        if (k.nodeType == 3 && k.nodeValue.match(/[^ \f\n\r\t\v]/)) {
                            if (f == 1 && m.attributes.length == 0) {
                                l = k.nodeValue
                            } else {
                                l.text = k.nodeValue
                            }
                            g = false
                        } else {
                            if (k.nodeType == 4) {
                                if (f == 1 && m.attributes.length == 0) {
                                    l = k.nodeValue
                                } else {
                                    l.cdata = k.nodeValue
                                }
                                g = false
                            } else {
                                if (k.nodeType != 3) {
                                    var j = this.xml2obj(k);
                                    if (j) {
                                        if (l[k.tagName]) {
                                            if (l[k.tagName] instanceof Array) {
                                                l[k.tagName].push(j)
                                            } else {
                                                l[k.tagName] = [l[k.tagName]];
                                                l[k.tagName].push(j)
                                            }
                                        } else {
                                            l[k.tagName] = j
                                        }
                                        g = false
                                    } else {
                                        a("this is nothing")
                                    }
                                }
                            }
                        }
                    }
                }
            }
            e--;
            return g ? null : l
        }, obj2json: function (j) {
            var k = "";
            if (typeof j == "string") {
                k += '"' + j.replace(/\"/g, '\\"') + '"'
            } else {
                if (typeof j == "number") {
                    if (isFinite(j)) {
                        k += j
                    } else {
                        k += '"' + j + '"'
                    }
                } else {
                    if (typeof j == "boolean") {
                        k += j
                    } else {
                        if (typeof j == "function" || typeof j == "undefined") {
                            k += "null"
                        } else {
                            if (j === null) {
                                k += "null"
                            } else {
                                if (typeof j == "object" && j.constructor) {
                                    if (j.constructor == Object) {
                                        k += "{";
                                        var h = 0;
                                        for (var g in j) {
                                            k += h != 0 ? ", " : "";
                                            k += '"' + g + '" : ' + this.obj2json(j[g]);
                                            h++
                                        }
                                        k += "}"
                                    } else {
                                        if (j.constructor == Array) {
                                            k += "[";
                                            for (var f = 0; f < j.length; f++) {
                                                k += f != 0 ? ", " : "";
                                                k += this.obj2json(j[f])
                                            }
                                            k += "]"
                                        } else {
                                            if (j.constructor == Date) {
                                                if (j.toJSON) {
                                                    k += '"' + j.toJSON() + '"'
                                                } else {
                                                    k += '"' + j + '"'
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    if (j.toString) {
                                        k += j.toString()
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return k
        }, dateFormat: function (g, f) {
            return g.toFormattedString(f || null)
        }, inArray: function (h, g) {
            alert("inArray(" + h + ", " + g + ")");
            for (var f = 0; f < g.length; f++) {
                if (g[f] == h) {
                    return true
                }
            }
            return false
        }, init: function () {
            Date._MonthNames = [d.lang.SID_JANUARY, d.lang.SID_FEBRUARY, d.lang.SID_MARCH, d.lang.SID_APRIL, d.lang.SID_MAY_FULL, d.lang.SID_JUNE, d.lang.SID_JULY, d.lang.SID_AUGUST, d.lang.SID_SEPTEMBER, d.lang.SID_OCTOBER, d.lang.SID_NOVEMBER, d.lang.SID_DECEMBER];
            Date._MonthNames_abbr = [d.lang.SID_JAN, d.lang.SID_FEB, d.lang.SID_MAR, d.lang.SID_APR, d.lang.SID_MAY, d.lang.SID_JUN, d.lang.SID_JUL, d.lang.SID_AUG, d.lang.SID_SEP, d.lang.SID_OCT, d.lang.SID_NOV, d.lang.SID_DEC];
            Date._DayNames = [d.lang.SID_SUNDAY, d.lang.SID_MONDAY, d.lang.SID_TUESDAY, d.lang.SID_WEDNESDAY, d.lang.SID_THURSDAY, d.lang.SID_FRIDAY, d.lang.SID_SATURDAY];
            Date._DayNames_abbr = [d.lang.SID_SUN, d.lang.SID_MON, d.lang.SID_TUE, d.lang.SID_WED, d.lang.SID_THU, d.lang.SID_FRI, d.lang.SID_SAT]
        }
    };
    Date._MonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    Date._MonthNames_abbr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    Date._DayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    Date._DayNames_abbr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    Date.prototype.toFormattedString = function (g) {
        if (!g) {
            g = Date.getLocaleFormatStr()
        }
        if (!g) {
            g = "m/d/Y h:i a"
        }
        var h = this;
        var l = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var k = (g + "").replace(/(d|D|j|l|N|S|w|z|F|m|M|n|t|Y|y|a|A|g|G|h|H|i|s|u|T)/g, function (m) {
            switch (m) {
                case"d":
                    return j(h.getDate(), 2);
                case"D":
                    return Date._DayNames_abbr[h.getDay()];
                case"j":
                    return h.getDate();
                case"l":
                    return Date._DayNames[h.getDay()];
                case"S":
                    return f(h.getDate());
                case"w":
                    return h.getDay();
                case"F":
                    return Date._MonthNames[h.getMonth()];
                case"m":
                    return j(h.getMonth() + 1, 2);
                case"M":
                    return Date._MonthNames_abbr[h.getMonth()];
                case"n":
                    return (h.getMonth() + 1);
                case"t":
                    return l[h.getMonth()] + (h.getFullYear() % 4 == 0 && h.getFullYear() % 100 != 0 || h.getFullYear() % 400 == 0) && h.getMonth() == 1 ? 1 : 0;
                case"Y":
                    return h.getFullYear();
                case"y":
                    return (h.getFullYear() + "").substr(2, 2);
                case"a":
                    return h.getHours() < 12 ? "am" : "pm";
                case"A":
                    return h.getHours() < 12 ? "AM" : "PM";
                case"g":
                    return h.getHours() % 12;
                case"G":
                    return h.getHours();
                case"h":
                    return j((h.getHours() % 12) || 12, 2);
                case"H":
                    return j(h.getHours(), 2);
                case"i":
                    return j(h.getMinutes(), 2);
                case"s":
                    return j(h.getSeconds(), 2);
                case"u":
                    return h.getMilliseconds();
                case"T":
                    var o = h.getTimezoneOffset() / 60;
                    var q = o <= 0 ? "+" : "-";
                    o = Math.abs(o);
                    var p = Math.floor(o);
                    var n = (o - p) * 60;
                    p = (p < 10 ? "0" : "") + p;
                    n = (n < 10 ? "0" : "") + n;
                    return q + p + ":" + n
            }
            return ""
        });
        return k;
        function j(o, n) {
            o += "";
            for (var m = 0; o.length < n; m++) {
                o = "0" + o
            }
            return o
        }

        function f(n) {
            var m = n - parseInt(n / 10, 10) * 10;
            var o = n + "" + (m == 1 ? "st" : m == 2 ? "nd" : m == 3 ? "rd" : "th");
            return o
        }
    };
    var b = {
        1: "Y/m/d a h:i",
        2: "m/d/Y h:i a",
        3: "d/m/Y h:i a",
        4: "d/m/Y H:i",
        5: "d/m/Y h:i a",
        6: "d/m/Y h:i a",
        7: "d/m/Y h:i a",
        8: "d/m/Y H:i",
        9: "d/m/Y h:i a",
        10: "d/m/Y h:i a",
        11: "d/m/Y h:i a",
        12: "d/m/Y h:i a",
        13: "d/m/Y h:i a",
        14: "d/m/Y h:i a",
        15: "d/m/Y h:i a",
        16: "d/m/Y h:i a",
        17: "d/m/Y h:i a",
        0: null,
    };
    var c = null;
    Date.getLocaleFormatStr = function () {
        if (!c) {
            c = d.env.getTargetLocation()
        }
        return b[c] || b[2]
    };
    Number.prototype.addZeros = function (g) {
        var h = this + "";
        for (var f = 0; h.length < g; f++) {
            h = "0" + h
        }
        return h
    };
    Number.prototype.addTh = function () {
        var f = this + "" + (this <= 1 ? "st" : this == 2 ? "nd" : this == 3 ? "rd" : "th");
        return f
    };
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, "")
    }
})(sf);
alert("[AF Util] util.js included");
(function (a) {
    a.service = {
        setVolumeControl: function (b) {
            alert("[AF service] sf.service.setVolumeControl(" + b + ")");
            if (b === true) {
                a.key.unregisterKey(a.key.VOL_UP);
                a.key.unregisterKey(a.key.VOL_DOWN);
                a.key.unregisterKey(a.key.MUTE);
                var c = a.core.plugin("NNAVI");
                if (c) {
                    c.SetBannerState(a.core.PL_NNAVI_STATE_BANNER_VOL)
                }
            } else {
                if (b === false) {
                    a.key.registerKey(a.key.VOL_UP);
                    a.key.registerKey(a.key.VOL_DOWN);
                    a.key.registerKey(a.key.MUTE);
                    var c = a.core.plugin("NNAVI");
                    if (c) {
                        c.SetBannerState(a.core.PL_NNAVI_STATE_BANNER_NONE)
                    }
                } else {
                    alert("[AF service] parameter must be true or false : " + b)
                }
            }
        },
        setChannelControl: function (b) {
            alert("[AF service] sf.service.setChannelControl(" + b + ")");
            if (b === true) {
                a.key.unregisterKey(a.key.CH_UP);
                a.key.unregisterKey(a.key.CH_DOWN);
                var c = a.core.plugin("NNAVI");
                if (c) {
                    c.SetBannerState(a.core.PL_NNAVI_STATE_BANNER_VOL_CH)
                }
            } else {
                if (b === false) {
                    a.key.registerKey(a.key.CH_UP);
                    a.key.registerKey(a.key.CH_DOWN);
                    var c = a.core.plugin("NNAVI");
                    if (c) {
                        c.SetBannerState(a.core.PL_NNAVI_STATE_BANNER_NONE)
                    }
                } else {
                    alert("[AF service] parameter must be true or false : " + b)
                }
            }
        },
        setScreenSaver: function (e, c) {
            alert("[AF service] sf.service.setScreenSaver(" + e + "," + (c ? c : "") + ")");
            var f = a.core.plugin("NNAVI");
            if (!f || f.GetPluginInfo(a.core.PL_CMN_INFO_VERSION) < "NNAVI-0004") {
                alert("[AF service] invalid nnavi plugin version : " + f.GetPluginInfo(a.core.PL_CMN_INFO_VERSION));
                return
            }
            var h = null;
            var d = f.GetFirmware();
            if (typeof d === "string" && d >= "T-INFOLINK2013") {
                h = {0: 5, 1: 10, 2: 20, 3: 30, 4: 40, 5: 60, 6: 120, 7: 240, 8: 480, 9: 600, 10: -1,}
            } else {
                h = {0: 10, 1: 20, 2: 40, 3: 60, 4: 120, 5: 240, 6: 480, 7: 600, 8: -1,}
            }
            if (e === true) {
                if (!c) {
                    var g = a.core.plugin("TVMW");
                    if (!g) {
                        return
                    }
                    var b = g.GetProfile(a.core.PL_PRFID_AUTO_PROTECTION_TIME);
                    if (h && h.hasOwnProperty(parseInt(b))) {
                        if (h[parseInt(b)] > 0) {
                            c = h[parseInt(b)] * 60
                        } else {
                            return
                        }
                    } else {
                        c = 60 * 60
                    }
                }
                alert("[AF service] sf.service.setScreenSaver(" + e + ") -> " + c + " sec");
                f.SendEventToDevice(a.core.EVENT_TO_DEVICE_SCREEN_SAVER_ON, c)
            } else {
                if (e === false) {
                    f.SendEventToDevice(a.core.EVENT_TO_DEVICE_SCREEN_SAVER_OFF, 0)
                } else {
                    alert("[AF service] parameter must be true or false : " + e)
                }
            }
        },
        showSetting: function (f, g) {
            alert("[AF service] sf.service.showSetting(" + f + ")");
            var e = a.core.plugin("NNAVI");
            if (!e || e.GetPluginInfo(a.core.PL_CMN_INFO_VERSION) < "NNAVI-0004") {
                alert("[AF service] invalid nnavi plugin version : " + e.GetPluginInfo(a.core.PL_CMN_INFO_VERSION));
                if (g && g instanceof Function) {
                    setTimeout(function () {
                        g()
                    }, 100)
                }
                return
            }
            var b = a.core.MANAGER_EVT_RETURN_WIDGETID;
            var c = curWidget.id;
            var d = new WidgetEvent(b, c);
            sendWidgetEvent("", d, false);
            deviceapis.widgetevent.setEventListener(b, g);
            if (e.GetPluginInfo(0) == "NNAVI-0015") {
                return e.ActivateWithData(a.core.PL_DTVAPP_TOOL, f, -1) == 1
            } else {
                return e.ActivateWithData(a.core.PL_DTVAPP_TOOL, f) == 1
            }
        },
        hideSetting: function () {
            alert("[AF service] sf.service.hideSetting()");
            var c = a.core.plugin("NNAVI");
            if (!c || c.GetPluginInfo(a.core.PL_CMN_INFO_VERSION) < "NNAVI-0003") {
                alert("[AF service] invalid nnavi plugin version : " + c.GetPluginInfo(a.core.PL_CMN_INFO_VERSION));
                return
            }
            var b = a.core.MANAGER_EVT_RETURN_WIDGETID;
            deviceapis.widgetevent.setEventListener(b, null);
            c.SendEventToDevice(a.core.EVENT_TO_DEVICE_HIDE_TOOLS, 0)
        },
        getSNSAppList: function (e) {
            alert("[AF service] sf.service.getSNSAppList()");
            var b = a.core.MANAGER_EVT_GET_SNS_LIST;
            var c = curWidget.id;
            var d = new WidgetEvent(b, c);
            sendWidgetEvent("", d, false);
            deviceapis.widgetevent.setEventListener(b, e)
        },
        getAvailAppList: function (e) {
            alert("[AF service] sf.service.getAvailAppList()");
            var b = a.core.MANAGER_EVT_GET_APP_ALL_LIST;
            var c = curWidget.id;
            var d = new WidgetEvent(b, c);
            sendWidgetEvent("", d, false);
            deviceapis.widgetevent.setEventListener(b, e)
        },
        checkAppInstalled: function (b, c) {
            if (!b || !c || !(c instanceof Function)) {
                return false
            }
            setTimeout(function () {
                c(window.getWidget(b) ? true : false)
            }, 0)
        },
        PIG: {
            bOn: false,
            sDivID: null,
            elPIG: null,
            bMediaSource: false,
            oWindowPlugin: {},
            nPluginStyle: 0,
            MEDIA_SOURCE: 43,
            SEF_PLUGIN: 10,
            LEGACY_PLUGIN: 11,
            show: function (c) {
                alert("[sf.service.PIG] show()");
                b.apply(this, arguments);
                function b(g) {
                    alert("[sf.service.PIG] PIGOn(" + g + ")");
                    this.elPIG = $("#" + g);
                    if (this.elPIG.length == 0) {
                        alert("[sf.service.PIG.show] Fail to find given " + g + " DIV.");
                        return
                    }
                    if (this.bOn) {
                        this.hide()
                    }
                    this.bOn = true;
                    this.sDivID = g;
                    this.nPluginStyle = this.LEGACY_PLUGIN;
                    this.elPIG.show();
                    var d = this.elPIG.offset().left;
                    var f = this.elPIG.offset().top;
                    var k = this.elPIG.width();
                    var n = this.elPIG.height();
                    alert("PIG Rect : " + d + ", " + f + ", " + k + ", " + n);
                    if (!this.oWindowPlugin[g]) {
                        var o = (new Date()).getTime();
                        var h = "SEF-Window-Plugin-" + o;
                        document.getElementById(g).innerHTML += e.call(this, h);
                        this.oWindowPlugin[g] = document.getElementById(h);
                        if (this.nPluginStyle == this.SEF_PLUGIN) {
                            this.oWindowPlugin[g].Open("Window", "1.000", "Window")
                        }
                    }
                    this.oWindowPlugin[g].style.left = "0px";
                    this.oWindowPlugin[g].style.top = "0px";
                    this.oWindowPlugin[g].style.width = k + "px";
                    this.oWindowPlugin[g].style.height = n + "px";
                    var l = a.core.plugin("TVMW");
                    if (l.GetSource() == this.MEDIA_SOURCE) {
                        this.bMediaSource = true;
                        if (this.nPluginStyle == this.SEF_PLUGIN) {
                            this.oWindowPlugin[g].Execute("SetPreviousSource")
                        } else {
                            this.oWindowPlugin[g].SetPreviousSource()
                        }
                    }
                    a.service.setVolumeControl(true);
                    a.service.setChannelControl(true);
                    var m = j(d, f, k, n);
                    if (this.nPluginStyle == this.SEF_PLUGIN) {
                        this.oWindowPlugin[g].Execute("SetScreenRect", m.left, m.top, m.width, m.height)
                    } else {
                        this.oWindowPlugin[g].SetScreenRect(m.left, m.top, m.width, m.height)
                    }
                    function e(p) {
                        var q = (this.nPluginStyle == this.SEF_PLUGIN) ? "SAMSUNG-INFOLINK-SEF" : "SAMSUNG-INFOLINK-WINDOW";
                        return '<OBJECT id="' + p + '" classid="clsid:' + q + '" style="position:absolute;width:0px;height:0px;display:block;border:0px;"></OBJECT>'
                    }

                    function j(u, t, r, p) {
                        var q = 540 / curWidget.height;
                        var s = (q === parseInt(q) ? true : false);
                        var v = {
                            left: Math.floor(u * q),
                            top: Math.floor(t * q),
                            width: Math.round(r * q) + (s ? 0 : 1),
                            height: Math.round(p * q) + (s ? 0 : 1)
                        };
                        return v
                    }

                    alert("[sf.service.PIG] PIGOn() end")
                }
            },
            hide: function () {
                alert("[sf.service.PIG] hide()");
                b.apply(this, arguments);
                function b() {
                    alert("[sf.service.PIG] PIGOff()");
                    if (!this.bOn) {
                        alert("[sf.service.PIG.hide] No PIG Mode.");
                        return
                    }
                    this.bOn = false;
                    var c = a.core.plugin("TVMW");
                    if (this.oWindowPlugin[this.sDivID]) {
                        if (this.bMediaSource) {
                            c.SetSource(this.MEDIA_SOURCE)
                        }
                        a.service.setVolumeControl(false);
                        a.service.setChannelControl(false);
                        if (this.nPluginStyle == this.SEF_PLUGIN) {
                            this.oWindowPlugin[this.sDivID].Execute("SetScreenRect", -1, 0, 0, 0)
                        } else {
                            this.oWindowPlugin[this.sDivID].SetScreenRect(-1, 0, 0, 0)
                        }
                        this.elPIG.hide()
                    } else {
                        alert("[sf.service.PIG.hide] Plugin is not defined.")
                    }
                    alert("[sf.service.PIG] PIGOff() end");
                    return
                }
            }
        }
    }
})(sf);
alert("[AF Service] service.js included");
(function (h) {
    var n = false;
    var l = null;
    var b = 0;
    var e = false;
    var k = null;
    h.service.AVSetting = {
        show: function (p) {
            alert("[AF service.AVSetting] show()");
            var o = h.core.getEnvValue("product");
            if (o != h.core.PL_TV_PRODUCT_TYPE_TV && o != h.core.PL_TV_PRODUCT_TYPE_MONITOR) {
                alert("[AF service.AVSetting] Only available in TV or Monitor.");
                return false
            }
            if (!n) {
                n = true;
                f()
            }
            l = p;
            if (k) {
                k.show();
                k.move(0)
            }
            j();
            d = false;
            return true
        }, hide: function () {
            alert("[AF service.AVSetting] hide()");
            if (!n) {
                return
            }
            if (e) {
                h.service.hideSetting()
            }
            if (k) {
                k.hide()
            }
            d = false;
            g();
            if (l && l instanceof Function) {
                try {
                    l()
                } catch (o) {
                    alert("EXCEPTION(onReturn callback of AVSetting): " + o)
                }
            }
            m()
        }
    };
    var d = false;
    h.service.AVSetting.handleKeydown = function (o) {
        var p = o || event.keyCode;
        alert("[AF service.AVSetting] handleKeydown()");
        if (d) {
            alert("[AF service.AVSetting] Blocking...");
            h.key.preventDefault();
            return
        }
        j();
        switch (p) {
            case h.key.UP:
            case h.key.DOWN:
                b = (b + 1) % 2;
                k.move(b);
                break;
            case h.key.ENTER:
                k.hide();
                g();
                e = true;
                var q = b == 0 ? h.core.PICTURE_SETTING : h.core.SOUND_SETTING;
                d = true;
                h.service.showSetting(q, function () {
                    d = false;
                    k.show();
                    j();
                    e = false
                });
                break;
            case h.key.RETURN:
            case h.key.EXIT:
                h.key.preventDefault();
                this.hide();
                break
        }
    };
    function a() {
        $('<div id="sf-service-avsetting"></div>').html('<div class="sf-service-avsetting-dim"></div><div class="sf-service-avsetting-bg alpha"><div class="sf-service-avsetting-bg-top"><div class="sf-service-avsetting-bg-top-l"></div><div class="sf-service-avsetting-bg-top-c"></div><div class="sf-service-avsetting-bg-top-r"></div></div><div class="sf-service-avsetting-bg-mid"><div class="sf-service-avsetting-bg-mid-l"></div><div class="sf-service-avsetting-bg-mid-c"></div><div class="sf-service-avsetting-bg-mid-r"></div></div><div class="sf-service-avsetting-bg-btm"><div class="sf-service-avsetting-bg-btm-l"></div><div class="sf-service-avsetting-bg-btm-c"></div><div class="sf-service-avsetting-bg-btm-r"></div></div></div><div class="sf-service-avsetting-bg"><div class="sf-service-avsetting-bg-top"><div class="sf-service-avsetting-bg-top-l"></div><div class="sf-service-avsetting-bg-top-c"></div><div class="sf-service-avsetting-bg-top-r"></div></div><div class="sf-service-avsetting-bg-mid"><div class="sf-service-avsetting-bg-mid-l"></div><div class="sf-service-avsetting-bg-mid-c"></div><div class="sf-service-avsetting-bg-mid-r"></div></div><div class="sf-service-avsetting-bg-btm"><div class="sf-service-avsetting-bg-btm-l"></div><div class="sf-service-avsetting-bg-btm-c"></div><div class="sf-service-avsetting-bg-btm-r"></div></div></div><div id="sf-service-avsetting-title">' + h.lang.SID_TOOLS + '</div><div id="sf-service-avsetting-items"></div><div id="sf-service-avsetting-keyhelp"></div><a href="javascript:void(0)" id="sf-service-avsetting-anchor"></a>').appendTo("body");
        $("#sf-service-avsetting-items").sfList({
            data: [h.lang.SID_PICTURE_SETTING, h.lang.SID_SOUND_SETTING],
            index: 0,
            itemsPerPage: 2
        }).sfList("addCallback", "itemselected", function (q, p) {
            alert("itemselected callback : " + p);
            b = p;
            h.service.AVSetting.handleKeydown(h.key.ENTER)
        });
        $("#sf-service-avsetting-keyhelp").sfKeyHelp({iconset: "WHITE", "return": h.lang.SID_RETURN});
        $("#sf-service-avsetting-anchor").keydown(function () {
            h.service.AVSetting.handleKeydown()
        });
        $("#sf-service-avsetting-anchor").bind("blur", function () {
            alert("onBlur: sf-service-avsetting-anchor");
            if (h.scene._isSceneArchUsed()) {
                alert("Scene architecture is used. Do nothing.")
            } else {
                if (o) {
                    alert("Scene architecture is not used. Return focus to avsetting's anchor.");
                    $("#sf-service-avsetting-anchor").focus()
                } else {
                    alert("AVSetting is not shown. Skip blur operation.")
                }
            }
        });
        $("#sf-service-avsetting").bind("contextmenu", function () {
            alert("AVSetting: ignore contextmenu event and stop propagation");
            if (event && event.stopPropagation) {
                event.stopPropagation()
            }
        });
        var o = false;
        this.show = function () {
            alert("[AF service.AVSetting] view : show()");
            $("#sf-service-avsetting").show();
            $("#sf-service-avsetting-items").sfList("focus");
            this.handlerId = null;
            if (h.scene._isSceneArchUsed()) {
                this.handlerId = h.scene.pushKeyHandler(h.service.AVSetting.handleKeydown, {context: h.service.AVSetting})
            } else {
                $("#sf-service-avsetting-anchor").focus()
            }
            var p = h.env.getPopupOpacity();
            alert("Popup opacity: " + p);
            if (p > 0 && p <= 1) {
                alert("Apply popup opacity: " + p);
                $("#sf-service-avsetting .alpha").css("opacity", p)
            }
            o = true
        };
        this.hide = function (p) {
            alert("[AF service.AVSetting] view : hide()");
            $("#sf-service-avsetting").hide();
            o = false;
            if (this.handlerId) {
                h.scene.removeKeyHandler(this.handlerId);
                this.handlerId = null
            }
        };
        this.move = function (p) {
            alert("[AF service.AVSetting] view : move(" + p + ")");
            $("#sf-service-avsetting-items").sfList("move", p)
        }
    }

    function m() {
        l = null;
        b = 0;
        k.move(b);
        e = false
    }

    function f() {
        alert("[AF service.AVSetting] initialize()");
        k = new a()
    }

    var c = null;

    function j() {
        g();
        c = setTimeout(function () {
            h.service.AVSetting.hide()
        }, 60000)
    }

    function g() {
        if (c) {
            clearTimeout(c);
            c = null
        }
    }
})(sf);
alert("[AF AVSetting] avsetting.js included");
(function (a) {
    a.service.VideoPlayer = new b();
    function b() {
        this.init = function (af) {
            alert("[VideoPlayer] init(" + af + ")");
            s = af || {};
            if (!w) {
                m()
            }
            if (!z) {
                J();
                s.zIndex = g;
                I(s)
            } else {
                I(s)
            }
        };
        this.show = function () {
            alert("[VideoPlayer] show()");
            if (!w) {
                m()
            }
            if (!z) {
                alert("[VideoPlayer] Position is not set or not full-screen.");
                return
            }
            if (S) {
                c.hide();
                L.show()
            } else {
                if (W) {
                    L.hide();
                    c.show()
                }
            }
            O.show()
        };
        this.hide = function () {
            alert("[VideoPlayer] hide()");
            if (!w) {
                m()
            }
            if (!z) {
                alert("[VideoPlayer] Position is not set or not full-screen.");
                return
            }
            c.hide();
            L.hide();
            O.hide()
        };
        this.play = function (ai) {
            alert("[VideoPlayer] play(" + ai + ")");
            if (!w) {
                m()
            }
            if (!z) {
                J();
                I({zIndex: g})
            }
            if (G != a.service.VideoPlayer.STATE_STOPPED) {
                alert('[VideoPlayer] !ERROR! play() should be called on "STATE_STOPPED". Current State : ' + Q[G]);
                return false
            }
            var ah = {liveStream: false, mode3D: deviceapis.avplay.MODE_3D_EFFECT_OFF};
            U = $.extend(ah, ai);
            U = $.extend({skip: U.liveStream ? false : true}, ai);
            U.mode3D = U.is3D ? U.mode3D : deviceapis.avplay.MODE_3D_EFFECT_OFF;
            if (U.skip) {
                l = true
            } else {
                l = false
            }
            if (U.liveStream === true) {
                c.setLiveStreamMode(true);
                L.setLiveStreamMode(true)
            } else {
                c.setLiveStreamMode(false);
                L.setLiveStreamMode(false)
            }
            if (U.timeString === false) {
                c.hideTime();
                L.hideTime()
            } else {
                c.showTime();
                L.showTime()
            }
            if (U.prebuffering) {
                C = true
            }
            if (!C) {
                if (U.fullScreen) {
                    S = true;
                    O.setDisplayRect(new SRect(0, 0, curWidget.width, curWidget.height));
                    c.hide();
                    L.show();
                    L.showBars();
                    this.focus()
                } else {
                    S = false;
                    if (!W) {
                        alert("[VideoPlayer] !ERROR! Position is not set. Do setPosition().");
                        return
                    }
                    O.setDisplayRect(W);
                    L.hide();
                    L.hideBars();
                    c.show()
                }
                c.showLoading();
                L.showLoading();
                this.show()
            } else {
                if (U.url != undefined) {
                    var af = U.url;
                    alert("[preBuffering] temp : " + af);
                    U.url = U.url + "|CONTROL_TYPE=PREBUFFERING";
                    alert("[preBuffering] oCurPlayItem.url : " + U.url)
                }
            }
            y();
            if (U.title) {
                L.refresh("title", U.title)
            }
            if (U.trickPlay) {
                H = true
            }
            if (U.is3D && iCCheck3DEffect.is3DEffectSupport()) {
                if (S) {
                    a.key.unregisterKey(a.key.THREE_D);
                    deviceapis._plugin("Screen", "Set3DEffectFunction", deviceapis._pluginDef.PLR_TRUE);
                    var ag = a.env.getFirmwareVer();
                    if (ag.year <= 2012) {
                        a.service.setVolumeControl(false)
                    } else {
                        a.service.setVolumeControl(true)
                    }
                } else {
                    a.key.registerKey(a.key.THREE_D);
                    deviceapis._plugin("Screen", "Set3DEffectFunction", deviceapis._pluginDef.PLR_FALSE);
                    a.service.setVolumeControl(true)
                }
            } else {
                a.service.setVolumeControl(true)
            }
            if (U.subtitle) {
                if (O.getSubtitleAvailable()) {
                    this.Subtitle._downloadFile(U.subtitle.url, function (ak) {
                        if (ak) {
                            U.subtitle = {path: ak, streamID: 0, sync: 0, callback: aa};
                            if (j) {
                                r.Subtitle.show()
                            }
                        } else {
                            alert('[VideoPlayer] Download failed. "subtitle" option is deleted.');
                            delete U.subtitle
                        }
                        aj()
                    })
                } else {
                    alert('[VideoPlayer] Not Support Subtitle function. "subtitle" option is deleted.');
                    delete U.subtitle;
                    aj()
                }
            } else {
                aj()
            }
            function aj() {
                O.open(U.url, U);
                O.play(e, function (ak) {
                    alert("[VideoPlayer] " + ak);
                    O.stop()
                }, U.startTime || 0)
            }
        };
        this.stop = function () {
            alert("[VideoPlayer] stop()");
            if (!w) {
                m()
            }
            if (!z) {
                alert("[VideoPlayer] Never played.");
                return
            }
            c.refresh("skiptime", "hide");
            L.refresh("skiptime", "hide");
            c.refresh("TRICKSPEED", "hide");
            L.refresh("TRICKSPEED", "hide");
            if (r.Skip.isInProgress() || r.TrickPlay.isInProgress()) {
                if (r.Skip.isInProgress()) {
                    F.cancel()
                } else {
                    ac.setNor();
                    c.refresh("TRICKSPEED", "hide");
                    L.refresh("TRICKSPEED", "hide")
                }
            }
            O.stop();
            X(a.service.VideoPlayer.STATE_STOPPED);
            y();
            a.key.unregisterKey(a.key.THREE_D);
            a.service.setVolumeControl(false);
            if (U) {
                c.setLiveStreamMode(false);
                c.hideTime();
                c.refresh("curtime", new PlayTime(0));
                c.refresh("totaltime", 0);
                c.refresh("TRICKSPEED", "hide");
                c.hideLoading();
                L.setLiveStreamMode(false);
                L.refresh("curtime", new PlayTime(0));
                L.refresh("totaltime", 0);
                L.refresh("TRICKSPEED", "hide");
                L.refresh("title", "");
                L.hideLoading();
                if (U.subtitle) {
                    c.Subtitle.clear();
                    c.Subtitle.hide();
                    L.Subtitle.clear();
                    L.Subtitle.hide()
                }
                if (S) {
                    L.hide();
                    L.hideBars();
                    a.service.AVSetting.hide();
                    if (P) {
                        a.scene.removeKeyHandler(P);
                        P = null
                    } else {
                        a.scene.returnFocus()
                    }
                    if (U.fullScreen === false) {
                        O.setDisplayRect(W);
                        c.show()
                    } else {
                        O.hide()
                    }
                }
                S = false;
                H = false;
                j = true;
                C = false;
                U = null
            }
        };
        this.pause = function () {
            alert("[VideoPlayer] pause()");
            if (!w) {
                m()
            }
            if (!z) {
                alert("[VideoPlayer] Never played.");
                return false
            }
            if (r.Skip.isInProgress()) {
                alert("[VideoPlayer] Skipping now.. pause skipping..");
                F.pause();
                return false
            }
            if (r.TrickPlay.isInProgress()) {
                alert("[VideoPlayer] TrickPlay now.. set NormalSpeed");
                ac.setNor()
            }
            if (G == a.service.VideoPlayer.STATE_PLAYING || G == a.service.VideoPlayer.STATE_FF || G == a.service.VideoPlayer.STATE_REW) {
                var af = O.pause();
                if (af) {
                    X(a.service.VideoPlayer.STATE_PAUSED);
                    return true
                } else {
                    alert("[VideoPlayer] Fail to Pause.");
                    return false
                }
            } else {
                alert('[VideoPlayer] !ERROR! pause() should be called on "STATE_PLAYING". Current State : ' + Q[G]);
                return false
            }
        };
        this.resume = function () {
            alert("[VideoPlayer] resume()");
            if (!w) {
                m()
            }
            if (!z) {
                alert("[VideoPlayer] Never played.");
                return
            }
            if (r.Skip.isInProgress()) {
                alert("[VideoPlayer] Skipping now.. resume skipping..");
                F.resume()
            }
            if (C) {
                if (U.fullScreen) {
                    S = true;
                    O.setDisplayRect(new SRect(0, 0, curWidget.width, curWidget.height));
                    c.hide();
                    L.show();
                    L.showBars();
                    this.focus()
                } else {
                    S = false;
                    if (!W) {
                        alert("[VideoPlayer] !ERROR! Position is not set. Do setPosition().");
                        return
                    }
                    O.setDisplayRect(W);
                    L.hide();
                    L.hideBars();
                    c.show()
                }
                C = false
            } else {
                if (G != a.service.VideoPlayer.STATE_PAUSED) {
                    alert('[VideoPlayer] !ERROR! resume() should be called on "STATE_PAUSED". Current State : ' + Q[G]);
                    return false
                }
            }
            var af = O.resume();
            if (af) {
                X(a.service.VideoPlayer.STATE_PLAYING);
                return true
            } else {
                alert("[VideoPlayer] Fail to Resume.");
                return false
            }
        };
        this.setPosition = function (af) {
            alert("[VideoPlayer] setPosition(" + af + ")");
            if (!w) {
                m()
            }
            W = new SRect(af.left, af.top, af.width, af.height - c.getInfobarHeight());
            if (!z) {
                J();
                I({zIndex: g, displayRect: W})
            } else {
                O.setDisplayRect(W)
            }
            c.setPosition(af);
            c.show()
        };
        this.setFullScreen = function (ag) {
            alert("[VideoPlayer] setFullScreen(" + ag + ")");
            if (!w) {
                m()
            }
            if (!z) {
                J();
                I({zIndex: g})
            }
            if (!ag && !W) {
                alert("[VideoPlayer] No mini mode display area.");
                return
            }
            S = ag;
            if (S) {
                c.hide();
                L.show();
                L.showBars();
                this.focus();
                O.setDisplayRect(new SRect(0, 0, curWidget.width, curWidget.height))
            } else {
                L.hide();
                L.hideBars();
                c.show();
                if (P) {
                    a.scene.removeKeyHandler(P);
                    P = null
                } else {
                    a.scene.returnFocus()
                }
                O.setDisplayRect(W)
            }
            if (U && U.is3D && iCCheck3DEffect.is3DEffectSupport()) {
                if (S) {
                    a.key.unregisterKey(a.key.THREE_D);
                    deviceapis._plugin("Screen", "Set3DEffectFunction", deviceapis._pluginDef.PLR_TRUE);
                    var af = a.env.getFirmwareVer();
                    if (af.year <= 2012) {
                        a.service.setVolumeControl(false)
                    } else {
                        a.service.setVolumeControl(true)
                    }
                } else {
                    a.key.registerKey(a.key.THREE_D);
                    deviceapis._plugin("Screen", "Set3DEffectFunction", deviceapis._pluginDef.PLR_FALSE);
                    a.service.setVolumeControl(true)
                }
            } else {
                a.service.setVolumeControl(true)
            }
        };
        this.focus = function () {
            alert("[VideoPlayer] focus()");
            if (!w) {
                m()
            }
            if (!S) {
                alert("[VideoPlayer] This API works only under FullScreen.");
                return
            }
            if (a.scene._isSceneArchUsed()) {
                if (P) {
                    a.scene.removeKeyHandler(P)
                }
                P = a.scene.pushKeyHandler(function (af) {
                    v(af)
                }, {context: this})
            } else {
                $("#" + K).focus()
            }
        };
        this.setKeyHandler = function (af, ag) {
            alert("[VideoPlayer] setKeyHandler(" + af + "," + (ag ? ag : "") + ")");
            if (!w) {
                m()
            }
            if (typeof af == "object") {
                for (var ah in af) {
                    n[ah] = af[ah]
                }
            } else {
                n[af] = ag
            }
        };
        this.setKeyHelp = function (ah, ai) {
            alert("[VideoPlayer] setKeyHelp(" + ah + "," + (ai ? ai : "") + ")");
            if (!w) {
                m()
            }
            if (typeof ah == "object") {
                for (var aj in ah) {
                    var af = aj.toUpperCase();
                    R[af] = ah[aj]
                }
            } else {
                var ag = ah.toUpperCase();
                R[ag] = ai
            }
            L.refresh("helpbar", A(R))
        };
        this.getZIndex = function () {
            if (!w) {
                m()
            }
            if (!z) {
                J();
                I({zIndex: g})
            }
            alert("[VideoPlayer] getZIndex() returns " + O.zIndex);
            return O.zIndex
        };
        this.setZIndex = function (af) {
            alert("[VideoPlayer] setZIndex(" + af + ")");
            if (!w) {
                m()
            }
            if (!z) {
                J();
                I({zIndex: g})
            }
            O.setZIndex(af);
            c.setZIndex(af + 1);
            L.setZIndex(af + 1)
        };
        this.showKeyHelp = function () {
            L.clearBarHideTimer();
            L.showBars()
        };
        this.hideKeyHelp = function () {
            L.hideBars()
        };
        this.getCurrentPlayTime = function () {
            alert("[VideoPlayer] CurrentPlayTime returns " + Z);
            return Z
        };
        this.getTotalPlayTime = function () {
            alert("[VideoPlayer] TotalPlayTime returns ");
            return O.getDuration()
        };
        this.toggleSubtitleView = function () {
            if (j) {
                r.Subtitle.hide()
            } else {
                r.Subtitle.show()
            }
            return j
        };
        this.showSubtitle = function () {
            r.Subtitle.show();
            j = true;
            return j == true
        };
        this.hideSubtitle = function () {
            r.Subtitle.hide();
            j = false;
            return j == false
        };
        this.isPrebufferingComplete = function () {
            return o
        };
        this.Skip = {};
        this.Skip.start = function (af) {
            alert("[VideoPlayer][Skip] start(" + af + ")");
            if (!w) {
                m()
            }
            if (!l) {
                return false
            }
            if (G == a.service.VideoPlayer.STATE_PLAYING) {
                if (!a.service.VideoPlayer.pause()) {
                    alert("[VideoPlayer][Skip] Fail to pause. Skip.start() canceled.");
                    return false
                }
            }
            if (G != a.service.VideoPlayer.STATE_PAUSED) {
                alert("[VideoPlayer][Skip] VideoPlayer state is not STATE_PAUSED. Skip.start() canceled.");
                return;
                false
            }
            F.start(af)
        };
        this.Skip.stop = function () {
            alert("[VideoPlayer][Skip] stop()");
            if (!w) {
                m()
            }
            if (F.getState() == "NONE") {
                alert("[VideoPlayer][Skip] Skip is not in progress.. Skip.stop() canceled.");
                return
            }
            F.stop()
        };
        this.Skip.cancel = function () {
            alert("[VideoPlayer][Skip] cancel()");
            if (!w) {
                m()
            }
            if (F.getState() == "NONE") {
                alert("[VideoPlayer][Skip] Skip is not in progress.. Skip.cancel() canceled.");
                return
            }
            F.cancel()
        };
        this.Skip.isInProgress = function () {
            if (!w) {
                m()
            }
            var af = F.getState() != "NONE";
            alert("[VideoPlayer][Skip] isInProgress() returns " + af);
            return af
        };
        this.TrickPlay = {};
        this.TrickPlay.FF = function () {
            alert("[VideoPlayer][TrickPlay] FF()");
            if (!w) {
                m()
            }
            if (H) {
                var af = ac.doFF()
            } else {
                alert("[VideoPlayer][TrickPlay] TrickPlay option is false");
                var af = false
            }
            return af
        };
        this.TrickPlay.REW = function () {
            alert("[VideoPlayer][TrickPlay] REW()");
            if (!w) {
                m()
            }
            if (H) {
                var af = ac.doREW()
            } else {
                alert("[VideoPlayer][TrickPlay] TrickPlay option is false");
                var af = false
            }
            return af
        };
        this.TrickPlay.isInProgress = function () {
            if (!w) {
                m()
            }
            var af = ac.getState() != "NOR";
            alert("[VideoPlayer][TrickPlay] isInProgress() returns " + af);
            return af
        };
        var g = 30;
        var K = "sf-service-videoplayer-anchor";
        this.STATE_PLAYING = 1;
        this.STATE_STOPPED = 2;
        this.STATE_PAUSED = 3;
        this.STATE_FF = 4;
        this.STATE_REW = 5;
        this.STATE_BUFFERING = 6;
        this.STATE_SCANNING = 7;
        this.STATE_ERROR = 8;
        var r = this;
        var w = false;
        var z = false;
        var H = false;
        var j = true;
        var C = false;
        var o = false;
        var l = true;
        var c = null;
        var L = null;
        var O = null;
        var F = new t();
        var ac = new p();
        this.Subtitle = null;
        var s = {};
        var U = null;
        var W = null;
        var S = false;
        var G = r.STATE_STOPPED;
        var n = {};
        var R = {};
        var M = null;
        var Z = 0;
        var Q = {};
        Q[r.STATE_PLAYING] = "STATE_PLAYING";
        Q[r.STATE_STOPPED] = "STATE_STOPPED";
        Q[r.STATE_PAUSED] = "STATE_PAUSED";
        Q[r.STATE_FF] = "STATE_FF";
        Q[r.STATE_REW] = "STATE_REW";
        Q[r.STATE_BUFFERING] = "STATE_BUFFERING";
        Q[r.STATE_SCANNING] = "STATE_SCANNING";
        var P = null;
        var E = false;

        function m() {
            $('<a href="javascript:void(0)" id="' + K + '"></a>').appendTo("body");
            setTimeout(function () {
                $("#" + K).keydown(function () {
                    v(a.core.mapAliasedKeys(event.keyCode) || event.keyCode)
                }).bind("blur", T)
            }, 0);
            c = new u();
            c.init({onprogressbarclicked: q});
            c.hideTime();
            c.setZIndex(g + 1);
            L = new Y();
            L.init({onprogressbarclicked: q});
            L.setZIndex(g + 1);
            L.refresh("helpbar", A(R));
            r.Subtitle = new ae();
            w = true
        }

        function q(af) {
            alert("[VideoPlayer] onProgressBarClicked(" + af + ")");
            if (G != r.STATE_PLAYING && G != r.STATE_PAUSED) {
                alert("[VideoPlayer] State is not STATE_PLAYING or STATE_PAUSED. Skip click event.");
                return false
            }
            if (L.isShow()) {
                L.showBars()
            }
            var ag = parseInt(O.duration * af);
            var ah = parseInt((ag - Z) / 1000, 10);
            if (ah > 0) {
                O.jumpForward(ah)
            } else {
                if (ah < 0) {
                    O.jumpBackward(-ah)
                }
            }
            r.resume()
        }

        function J() {
            deviceapis.avplay.getAVPlay(function (af) {
                O = af;
                r.AVPlay = O
            });
            z = true
        }

        function I(af) {
            af.bufferingCallback = {onbufferingstart: d, onbufferingcomplete: h,};
            af.playCallback = {oncurrentplaytime: D, onstreamcompleted: N, onerror: B};
            O.init(af)
        }

        function X(ag) {
            var af = G;
            G = ag;
            c.refresh("state", G);
            L.refresh("state", G);
            if (af != ag) {
                if (typeof s.onstatechange == "function") {
                    s.onstatechange(G)
                }
            }
        }

        function A(ai) {
            var ah = $.extend({}, ai);
            var af = {};
            if (a.env.getProductType() != a.env.PRODUCTTYPE_BD) {
                af.TOOLS = a.lang.SID_TOOLS
            }
            af.RETURN = a.lang.SID_RETURN;
            for (var ag in af) {
                if (ah[ag] === undefined) {
                    ah[ag] = af[ag]
                }
            }
            for (var ag in ah) {
                if (ah[ag] === null) {
                    delete ah[ag]
                }
            }
            return ah
        }

        function f(af) {
            alert("[VideoPlayer] setViewCleaner()");
            M = af
        }

        function y() {
            alert("[VideoPlayer] runViewCleaner()");
            if (typeof M == "function") {
                M();
                M = null
            }
        }

        function x(af) {
            alert("[VideoPlayer] turnVolume(" + af + ")");
            var ag = deviceapis._plugin("Audio", "GetOutputDevice");
            if (ag == deviceapis._pluginDef.PL_AUDIO_OUTPUT_DEVICE_EXTERNAL) {
                alert("[VideoPlayer] Receiver is external..");
                if (P) {
                    a.scene.removeKeyHandler(P);
                    P = null
                } else {
                    a.scene.returnFocus()
                }
                L.showPopup({
                    text: a.lang.SID_NOTAVAILABLE_POPUP, buttons: "OK", callback: function () {
                        r.focus()
                    }
                });
                return
            }
            if (af.toUpperCase() == "UP") {
                deviceapis._plugin("Audio", "SetVolumeWithKey", deviceapis._pluginDef.PL_AUDIO_VOLUME_KEY_UP)
            } else {
                deviceapis._plugin("Audio", "SetVolumeWithKey", deviceapis._pluginDef.PL_AUDIO_VOLUME_KEY_DOWN)
            }
            if (ag == deviceapis._pluginDef.PL_AUDIO_OUTPUT_DEVICE_RECEIVER) {
                alert("[VideoPlayer] Receiver is connected. do nothing..");
                return
            }
            if (deviceapis.audiocontrol.getMute()) {
                L.showVolume(0)
            } else {
                L.showVolume(deviceapis.audiocontrol.getVolume())
            }
        }

        function ab() {
            alert("[VideoPlayer] toggleMute()");
            var ag = deviceapis._plugin("Audio", "GetOutputDevice");
            if (ag == deviceapis._pluginDef.PL_AUDIO_OUTPUT_DEVICE_EXTERNAL) {
                alert("[VideoPlayer] Receiver is external..");
                if (P) {
                    a.scene.removeKeyHandler(P);
                    P = null
                } else {
                    a.scene.returnFocus()
                }
                L.showPopup({
                    text: a.lang.SID_NOTAVAILABLE_POPUP, buttons: "OK", callback: function () {
                        r.focus()
                    }
                });
                return
            }
            var af = deviceapis.audiocontrol.getMute();
            if (af) {
                deviceapis.audiocontrol.setMute(false);
                af = false
            } else {
                deviceapis.audiocontrol.setMute(true);
                af = true
            }
            if (ag == deviceapis._pluginDef.PL_AUDIO_OUTPUT_DEVICE_RECEIVER) {
                alert("[VideoPlayer] Receiver is connected. do nothing..");
                return
            }
            if (af) {
                L.showVolume(0)
            } else {
                L.showVolume(deviceapis.audiocontrol.getVolume())
            }
        }

        function p() {
            var af = 4;
            var al = "NOR";
            var ak = [-16, -8, -4, -2, 1, 2, 4, 8, 16];
            var ag = af;
            var aj = 1;
            var ai = this;

            function ah(am) {
                if (am > 4) {
                    al = "FF"
                } else {
                    if (am < 4) {
                        al = "REW"
                    } else {
                        al = "NOR";
                        L.setBarHideTimer()
                    }
                }
            }

            this.setTrickSpeedInfobar = function () {
                c.refresh("TRICKSPEED", aj);
                L.refresh("TRICKSPEED", aj)
            };
            this.setNor = function () {
                alert("[TrickPlay][setNor]");
                c.showLoading();
                L.showLoading();
                aj = 1;
                ag = af;
                aj = ak[ag];
                var am = O.setSpeed(aj);
                alert("[TrickPlay][setNor]ret : " + am);
                if (am) {
                    ah(ag);
                    ai.setTrickSpeedInfobar();
                    return am
                } else {
                    alert("[TrickPlay][setNor] false!!");
                    c.hideLoading();
                    L.hideLoading();
                    return am
                }
            };
            this.stop = function () {
                aj = 1;
                ag = af;
                O.setSpeed(aj);
                ai.setTrickSpeedInfobar();
                ah(ag)
            };
            this.doREW = function () {
                alert("[TrickPlay][doREW] !!");
                c.showLoading();
                L.showLoading();
                aj = 1;
                ag = (ag > 0) ? ag - 1 : af;
                aj = ak[ag];
                var am = O.setSpeed(aj);
                alert("[TrickPlay][doREW]ret : " + am);
                if (am) {
                    ah(ag);
                    ai.setTrickSpeedInfobar();
                    return am
                } else {
                    alert("[TrickPlay][doREW] false!!");
                    c.hideLoading();
                    L.hideLoading();
                    return am
                }
            };
            this.doFF = function () {
                alert("[TrickPlay][doFF]!!");
                c.showLoading();
                L.showLoading();
                aj = 1;
                ag = (ag < ak.length - 1) ? ag + 1 : af;
                aj = ak[ag];
                var am = O.setSpeed(aj);
                alert("[TrickPlay][doFF]ret : " + am);
                if (am) {
                    ah(ag);
                    ai.setTrickSpeedInfobar();
                    return am
                } else {
                    alert("[TrickPlay][doFF] false!!");
                    c.hideLoading();
                    L.hideLoading();
                    return am
                }
            };
            this.getState = function () {
                alert("[TrickPlay] getState() returns " + al);
                return al
            }
        }

        function t() {
            var ao = this;
            var ag = 300;
            var an = null;
            var af = "NONE";
            var am = 0;
            var ak = {
                one_min: [5000, 10000],
                five_min: [5000, 10000, 30000],
                ten_min: [5000, 30000, 60000],
                "1_hour": [10000, 120000, 300000],
                "2_hour": [10000, 300000, 600000],
            };
            var ap = 0;
            var ah = 0;

            function al() {
                var aq = null;
                var ar = O.getDuration();
                if (ar <= 60000) {
                    aq = "one_min"
                } else {
                    if (ar <= 300000) {
                        aq = "five_min"
                    } else {
                        if (ar <= 6000000) {
                            aq = "ten_min"
                        } else {
                            if (ar <= 3600000) {
                                aq = "1_hour"
                            } else {
                                aq = "2_hour"
                            }
                        }
                    }
                }
                return aq
            }

            function aj() {
                an = setInterval(function () {
                    if (U.liveStream === true) {
                        c.setLiveStreamMode(false);
                        L.setLiveStreamMode(false);
                        var aq = O.getDuration();
                        c.refresh("totaltime", aq);
                        L.refresh("totaltime", aq);
                        c.refresh("curtime", new PlayTime(Z));
                        L.refresh("curtime", new PlayTime(Z))
                    } else {
                    }
                    ah = Number(ah) + Number(ap);
                    if (ah < 0) {
                        ah = 0;
                        clearInterval(an);
                        an = null
                    } else {
                        if (ah > O.duration) {
                            ah = O.duration;
                            clearInterval(an);
                            an = null
                        }
                    }
                    c.refresh("skiptime", new PlayTime(ah));
                    L.refresh("skiptime", new PlayTime(ah))
                }, ag)
            }

            function ai() {
                clearInterval(an);
                an = null
            }

            this.start = function (aq) {
                alert("[Skip] start(" + aq + ")");
                ai();
                if (af == "NONE") {
                    ah = Z
                }
                if (aq > 0) {
                    af = "FF"
                } else {
                    af = "REW"
                }
                ap = aq * 1000;
                aj()
            };
            this.stop = function () {
                alert("[Skip] stop()");
                ai();
                af = "NONE";
                var aq = parseInt((ah - Z) / 1000, 10);
                if (aq > 0) {
                    O.jumpForward(aq)
                } else {
                    if (aq < 0) {
                        O.jumpBackward(-aq)
                    }
                }
                a.service.VideoPlayer.resume();
                setTimeout(function () {
                    c.refresh("skiptime", "hide");
                    L.refresh("skiptime", "hide");
                    if (U.liveStream === true) {
                        c.setLiveStreamMode(true);
                        L.setLiveStreamMode(true)
                    }
                }, 100);
                return ah
            };
            this.pause = function () {
                alert("[Skip] pause()");
                ai();
                af = "PAUSE"
            };
            this.resume = function () {
                alert("[Skip] resume()");
                if (ap > 0) {
                    af = "FF"
                } else {
                    af = "REW"
                }
                aj()
            };
            this.cancel = function () {
                alert("[Skip] cancel()");
                ai();
                af = "NONE";
                ah = 0;
                am = 0;
                c.refresh("skiptime", "hide");
                L.refresh("skiptime", "hide");
                if (U.liveStream === true) {
                    c.setLiveStreamMode(true);
                    L.setLiveStreamMode(true)
                }
                a.service.VideoPlayer.resume()
            };
            this.getState = function () {
                alert("[Skip] getState() returns " + af);
                return af
            };
            this.doREW = function () {
                alert("[Skip] doREW()");
                var aq = al();
                if (af == "PAUSE" || af == "NONE" || af == "FF") {
                    am = 0
                } else {
                    am = (am < ak[aq].length - 1) ? am + 1 : 0
                }
                ap = -ak[aq][am];
                ao.start(parseInt(ap / 1000))
            };
            this.doFF = function () {
                alert("[Skip] doFF()");
                var aq = al();
                if (af == "PAUSE" || af == "NONE" || af == "REW") {
                    am = 0
                } else {
                    am = (am < ak[aq].length - 1) ? am + 1 : 0
                }
                ap = ak[aq][am];
                ao.start(parseInt(ap / 1000))
            }
        }

        function ae() {
            this.VPOS_TOP = 1;
            this.VPOS_BOTTOM = 2;
            var ag = "$TEMP/videoplayer.smi";
            var af = null;
            this.show = function () {
                alert("[Subtitle] show()");
                c.Subtitle.show();
                L.Subtitle.show();
                j = true
            };
            this.hide = function () {
                alert("[Subtitle] hide()");
                c.Subtitle.hide();
                L.Subtitle.hide();
                j = false
            };
            this.setSyncTime = function (ah) {
                alert("[Subtitle] setSyncTime(" + ah + ")");
                O.setSubtitleSync(ah)
            };
            this.setVerticalPosition = function (ah, ai) {
                alert("[Subtitle] setVerticalPosition(" + ah + "," + ai + ")");
                c.Subtitle.setVerticalPosition(ah, ai);
                L.Subtitle.setVerticalPosition(ah, ai)
            };
            this.setFontSize = function (ah) {
                alert("[Subtitle] setFontSize(" + ah + ")");
                c.Subtitle.setFontSize(ah);
                L.Subtitle.setFontSize(ah)
            };
            this.setFontColor = function (ah) {
                alert("[Subtitle] setFontColor(" + ah + ")");
                c.Subtitle.setFontColor(ah);
                L.Subtitle.setFontColor(ah)
            };
            this._downloadFile = function (ah, aj) {
                alert("[Subtitle] _downloadFile(" + ah + "," + aj + ")");
                af = aj;
                var ai = deviceapis._plugin("Download");
                if (navigator.userAgent.toLowerCase().indexOf("applewebkit") < 0 && navigator.userAgent.toLowerCase().indexOf("maple") >= 0) {
                    ai.OnEvent = "sf.service.VideoPlayer.Subtitle._downloadCallback"
                } else {
                    ai.OnEvent = window.sf.service.VideoPlayer.Subtitle._downloadCallback
                }
                deviceapis._plugin(ai, "StartDownFile", ah, ag)
            };
            this._downloadCallback = function (ah, ak, ai) {
                alert("[Subtitle] _downloadCallback(" + ah + "," + ak + "," + ai + ")");
                var aj = ak.split("?");
                switch (aj[0]) {
                    case"1000":
                        if (typeof af == "function") {
                            if (aj[1] == 1) {
                                alert("[Subtitle] Download Success!");
                                if (typeof af == "function") {
                                    af(ag)
                                }
                            } else {
                                alert("[Subtitle] Download Failed!");
                                if (typeof af == "function") {
                                    af(false)
                                }
                            }
                        }
                        break;
                    case"1001":
                        break;
                    case"1002":
                        break;
                    default:
                        break
                }
            }
        }

        function d() {
            if (r.TrickPlay.isInProgress()) {
                var af = ac.getState();
                if (af == "FF") {
                    X(a.service.VideoPlayer.STATE_FF)
                } else {
                    X(a.service.VideoPlayer.STATE_REW)
                }
            } else {
                if (G == a.service.VideoPlayer.STATE_PAUSED) {
                    X(a.service.VideoPlayer.STATE_PAUSED)
                } else {
                    X(a.service.VideoPlayer.STATE_BUFFERING)
                }
            }
            c.showLoading();
            L.showLoading()
        }

        function h() {
            c.hideLoading();
            L.hideLoading();
            if (!o && C == true) {
                if (typeof U.prebuffreingComplete == "function") {
                    o = true;
                    U.prebuffreingComplete()
                }
            }
        }

        function e() {
            Z = 0;
            c.refresh("curtime", new PlayTime(0));
            c.refresh("totaltime", O.duration);
            if (U.timeString === false) {
                c.hideTime()
            } else {
                c.showTime()
            }
            L.refresh("curtime", new PlayTime(0));
            L.refresh("totaltime", O.duration);
            if (H) {
                c.refresh("TRICKSPEED", 1);
                L.refresh("TRICKSPEED", 1)
            }
        }

        function D(ag) {
            var af = O.getDuration();
            Z = ag.millisecond;
            c.refresh("curtime", ag);
            c.refresh("totaltime", af);
            L.refresh("curtime", ag);
            L.refresh("totaltime", af);
            if (r.TrickPlay.isInProgress()) {
                var ai = ac.getState();
                if (ai == "FF") {
                    X(a.service.VideoPlayer.STATE_FF)
                } else {
                    X(a.service.VideoPlayer.STATE_REW)
                }
            } else {
                if (G == a.service.VideoPlayer.STATE_PAUSED) {
                    X(a.service.VideoPlayer.STATE_PAUSED)
                } else {
                    X(a.service.VideoPlayer.STATE_PLAYING)
                }
            }
            try {
                if (typeof s.oncurrenttime == "function") {
                    s.oncurrenttime(ag)
                }
            } catch (ah) {
                alert("EXCEPTION(videoplayer oncurrenttime callback): " + ah)
            }
        }

        function N() {
            r.stop();
            c.refresh("state", a.service.VideoPlayer.STATE_STOPPED);
            L.refresh("state", a.service.VideoPlayer.STATE_STOPPED);
            if (typeof s.onend == "function") {
                s.onend()
            }
        }

        function aa(ag, af) {
            c.Subtitle.setString(af);
            L.Subtitle.setString(af)
        }

        function B(af) {
            alert("[VideoPlayer] onError(" + af.code + ")");
            if (r.TrickPlay.isInProgress()) {
                ac.setNor();
                c.refresh("TRICKSPEED", "hide");
                L.refresh("TRICKSPEED", "hide")
            }
            y();
            c.hideLoading();
            L.hideLoading();
            X(a.service.VideoPlayer.STATE_ERROR);
            switch (Number(af.code)) {
                case af.AVPLAY_UNSUPPORTED_CONTAINER_ERR:
                case af.AVPLAY_CURRUPTED_STREAM_ERR:
                case af.UNKNOWN_ERR:
                    c.showUnablePlay();
                    L.showUnablePlay();
                    f(function () {
                        c.hideUnablePlay();
                        L.hideUnablePlay()
                    });
                    break;
                case af.CUSTOM_ERR:
                    c.showUnablePlay(af.message);
                    L.showUnablePlay(af.message);
                    f(function () {
                        c.hideUnablePlay();
                        L.hideUnablePlay()
                    });
                    break;
                case af.AVPLAY_UNSUPPORTED_AUDIO_FORMAT_ERR:
                case af.AVPLAY_UNSUPPORTED_VIDEO_FORMAT_ERR:
                case af.AVPLAY_UNSUPPORTED_VIDEO_RESOLUTION_ERR:
                case af.AVPLAY_UNSUPPORTED_VIDEO_FRAMERATE_ERR:
                    c.showNotSupport();
                    L.showNotSupport();
                    f(function () {
                        c.hideNotSupport();
                        L.hideNotSupport()
                    });
                    break;
                case af.NOT_FOUND_ERR:
                case af.NETWORK_ERR:
                case af.NETWORK_SLOW_ERR:
                case af.SECURITY_ERR:
                    c.showNetworkError();
                    L.showNetworkError();
                    f(function () {
                        c.hideNetworkError();
                        L.hideNetworkError()
                    });
                    break;
                default:
                    c.showNotSupport();
                    L.showNotSupport();
                    f(function () {
                        c.hideNotSupport();
                        L.hideNotSupport()
                    });
                    break
            }
            if (typeof s.onerror == "function") {
                s.onerror(af)
            }
        }

        function v(ag) {
            ag = ag || event.keyCode;
            alert("[VideoPlayer] handleKeydown(" + ag + ")");
            af(ag);
            function af(ah) {
                if (typeof n[ah] == "function") {
                    if (ah == a.key.RETURN) {
                        a.key.preventDefault();
                        if (r.Skip.isInProgress()) {
                            F.cancel()
                        } else {
                            if (r.TrickPlay.isInProgress()) {
                                ac.setNor();
                                c.refresh("TRICKSPEED", "hide");
                                L.refresh("TRICKSPEED", "hide")
                            }
                            n[ah]()
                        }
                    } else {
                        if (ah == a.key.EXIT) {
                            c.refresh("skiptime", "hide");
                            L.refresh("skiptime", "hide");
                            c.refresh("TRICKSPEED", "hide");
                            L.refresh("TRICKSPEED", "hide");
                            if (r.Skip.isInProgress() || r.TrickPlay.isInProgress()) {
                                if (r.Skip.isInProgress()) {
                                    F.cancel()
                                } else {
                                    ac.setNor();
                                    c.refresh("TRICKSPEED", "hide");
                                    L.refresh("TRICKSPEED", "hide")
                                }
                            }
                            n[ah]()
                        } else {
                            n[ah].call(window, {
                                defaultAction: function () {
                                    k(ah)
                                }, key: ah
                            })
                        }
                    }
                } else {
                    k(ah)
                }
            }
        }

        function k(af) {
            switch (af) {
                case a.key.PLAY:
                    if (r.Skip.isInProgress() || r.TrickPlay.isInProgress()) {
                        if (r.Skip.isInProgress()) {
                            F.stop()
                        } else {
                            ac.setNor()
                        }
                        L.setBarHideTimer()
                    } else {
                        L.showBars();
                        switch (G) {
                            case a.service.VideoPlayer.STATE_PLAYING:
                                break;
                            case a.service.VideoPlayer.STATE_STOPPED:
                                break;
                            case a.service.VideoPlayer.STATE_PAUSED:
                                r.resume();
                                break
                        }
                    }
                    break;
                case a.key.PAUSE:
                    if (r.Skip.isInProgress() || r.TrickPlay.isInProgress()) {
                        r.pause()
                    } else {
                        L.showBars();
                        switch (G) {
                            case a.service.VideoPlayer.STATE_PLAYING:
                            case a.service.VideoPlayer.STATE_FF:
                            case a.service.VideoPlayer.STATE_REW:
                                r.pause();
                                break;
                            case a.service.VideoPlayer.STATE_STOPPED:
                                break;
                            case a.service.VideoPlayer.STATE_PAUSED:
                                break
                        }
                    }
                    break;
                case a.key.ENTER:
                    if (!H && r.Skip.isInProgress()) {
                        F.stop();
                        L.setBarHideTimer()
                    } else {
                        L.showBars();
                        switch (G) {
                            case a.service.VideoPlayer.STATE_PLAYING:
                            case a.service.VideoPlayer.STATE_FF:
                            case a.service.VideoPlayer.STATE_REW:
                                r.pause();
                                break;
                            case a.service.VideoPlayer.STATE_STOPPED:
                                break;
                            case a.service.VideoPlayer.STATE_PAUSED:
                                r.resume();
                                break
                        }
                    }
                    break;
                case a.key.RETURN:
                    a.key.preventDefault();
                    if (r.Skip.isInProgress()) {
                        F.cancel()
                    } else {
                        if (r.TrickPlay.isInProgress()) {
                            ac.setNor();
                            c.refresh("TRICKSPEED", "hide");
                            L.refresh("TRICKSPEED", "hide")
                        }
                    }
                    break;
                case a.key.EXIT:
                    c.refresh("skiptime", "hide");
                    L.refresh("skiptime", "hide");
                    c.refresh("TRICKSPEED", "hide");
                    L.refresh("TRICKSPEED", "hide");
                    if (r.Skip.isInProgress() || r.TrickPlay.isInProgress()) {
                        if (r.Skip.isInProgress()) {
                            F.cancel()
                        } else {
                            ac.setNor();
                            c.refresh("TRICKSPEED", "hide");
                            L.refresh("TRICKSPEED", "hide")
                        }
                    }
                    break;
                case a.key.STOP:
                    r.stop();
                    break;
                case a.key.REW:
                    if (H && G != a.service.VideoPlayer.STATE_STOPPED) {
                        if (G == a.service.VideoPlayer.STATE_PAUSED) {
                            r.resume()
                        }
                        L.showBars();
                        L.clearBarHideTimer();
                        ac.doREW()
                    } else {
                        if (G != a.service.VideoPlayer.STATE_STOPPED) {
                            if (!l) {
                                alert("[VideoPlayer] Skip mode does not supported.");
                                L.showBars();
                                L.clearBarHideTimer();
                                return false
                            }
                            if (G == a.service.VideoPlayer.STATE_PLAYING) {
                                if (!a.service.VideoPlayer.pause()) {
                                    alert("[VideoPlayer] Fail to pause. REW key skipped.");
                                    return false
                                }
                            }
                            L.showBars();
                            L.clearBarHideTimer();
                            F.doREW()
                        }
                    }
                    break;
                case a.key.FF:
                    if (H && G != a.service.VideoPlayer.STATE_STOPPED) {
                        if (G == a.service.VideoPlayer.STATE_PAUSED) {
                            r.resume()
                        }
                        L.showBars();
                        L.clearBarHideTimer();
                        ac.doFF()
                    } else {
                        if (G != a.service.VideoPlayer.STATE_STOPPED) {
                            if (!l) {
                                alert("[VideoPlayer] Skip mode does not supported.");
                                L.showBars();
                                L.clearBarHideTimer();
                                return false
                            }
                            if (G == a.service.VideoPlayer.STATE_PLAYING) {
                                if (!a.service.VideoPlayer.pause()) {
                                    alert("[VideoPlayer] Fail to pause. FF key skipped.");
                                    return false
                                }
                            }
                            L.showBars();
                            L.clearBarHideTimer();
                            F.doFF()
                        }
                    }
                    break;
                case a.key.INFO:
                    if (F.getState() == "NONE") {
                        if (L.isShowBars()) {
                            L.hideBars()
                        } else {
                            L.showBars()
                        }
                    }
                    break;
                case a.key.TOOLS:
                    if (a.env.getProductType() != a.env.PRODUCTTYPE_BD) {
                        E = true;
                        if (P) {
                            a.scene.removeKeyHandler(P);
                            P = null
                        } else {
                            a.scene.returnFocus()
                        }
                        a.service.AVSetting.show(function () {
                            E = false;
                            r.focus()
                        })
                    }
                    break;
                case a.key.VOL_UP:
                    x("up");
                    L.showBars();
                    break;
                case a.key.VOL_DOWN:
                    x("down");
                    L.showBars();
                    break;
                case a.key.MUTE:
                    ab();
                    L.showBars();
                    break;
                default:
                    alert("[VideoPlayer] KeyDown Function is undefined");
                    break
            }
        }

        function T() {
            if (L.isShow() && !E) {
                alert("[VideoPlayer] Not intended blur. VideoPlayer takes focus.");
                $("#" + K).focus()
            } else {
                alert("[VideoPlayer] Intended blur. VideoPlayer does not take focus.")
            }
        }

        function u() {
            var ai = 0;
            this.Subtitle = new aj();
            $('<div id="sf-service-videoplayer-mini"></div>').html(['<div id="sf-service-videoplayer-mini-infobar">', '<div id="sf-service-videoplayer-mini-infobar-state"></div>', '<div id="sf-service-videoplayer-mini-infobar-speed"></div>', '<div id="sf-service-videoplayer-mini-infobar-time">', '<div id="sf-service-videoplayer-mini-infobar-time-0"></div>', '<div id="sf-service-videoplayer-mini-infobar-time-1">/</div>', '<div id="sf-service-videoplayer-mini-infobar-time-2"></div>', "</div>", '<div id="sf-service-videoplayer-mini-infobar-progress-mouse"></div>', '<div id="sf-service-videoplayer-mini-infobar-progress-bg">', '<div id="sf-service-videoplayer-mini-infobar-progress-bg-left"></div>', '<div id="sf-service-videoplayer-mini-infobar-progress-bg-right"></div>', '<div id="sf-service-videoplayer-mini-infobar-progress-bg-middle"></div>', "</div>", '<div id="sf-service-videoplayer-mini-infobar-progress-play">', '<div id="sf-service-videoplayer-mini-infobar-progress-play-left"></div>', '<div id="sf-service-videoplayer-mini-infobar-progress-play-right"></div>', '<div id="sf-service-videoplayer-mini-infobar-progress-play-middle"></div>', "</div>", '<div id="sf-service-videoplayer-mini-infobar-skip">', '<div id="sf-service-videoplayer-mini-infobar-skip-pointer"></div>', '<div id="sf-service-videoplayer-mini-infobar-skip-time"></div>', "</div>", "</div>", '<div id="sf-service-videoplayer-mini-loading"></div>', '<div id="sf-service-videoplayer-mini-neterr-icon"></div>', '<div id="sf-service-videoplayer-mini-neterr-text">' + a.lang.SID_ALERT_NETWORKERROR_MSG + "</div>", '<div id="sf-service-videoplayer-mini-notsup-icon"></div>', '<div id="sf-service-videoplayer-mini-notsup-text">' + a.lang.COM_FILE_FORMAT_NOT_SUPPORTD_MSG + "</div>", '<div id="sf-service-videoplayer-mini-unableplay-icon"></div>', '<div id="sf-service-videoplayer-mini-unableplay-text">' + a.lang.COM_UNABLE_PLAY_FILE_CHECK_MSG + "</div>", '<div id="sf-service-videoplayer-mini-subtitle">', '<table cellpadding="0px" cellspacing="0px">', "<tr>", '<td id="sf-service-videoplayer-mini-subtitle-table-td">', "</td>", "</tr>", "</table>", "</div>",].join("")).appendTo($("body"));
            var ar = [56, 73, 108], ah = [5, 5, 9], ap = [6, 6, 11], af = [20, 29, 44], ag = curWidget.height == 540 ? 0 : (curWidget.height == 720 ? 1 : 2), aq = ar[ag], am = ah[ag], ao = ap[ag], al = af[ag], ak = 0;
            var an = false;
            this.init = function (at) {
                alert("[MiniView] init(" + at + ")");
                this.hide();
                this.refresh("state", a.service.VideoPlayer.STATE_STOPPED);
                this.refresh("speed", "");
                this.refresh("TRICKSPEED", "");
                this.refresh("totaltime", 0);
                this.refresh("curtime", new PlayTime(0));
                $("#sf-service-videoplayer-mini-infobar-progress-mouse").click(function (au) {
                    alert("[MiniView] Progress bar clicked!");
                    at.onprogressbarclicked(au.offsetX / ak)
                });
                $("#sf-service-videoplayer-mini").css({visibility: "visible"})
            };
            this.show = function () {
                alert("[MiniView] show()");
                $("#sf-service-videoplayer-mini").show()
            };
            this.hide = function () {
                alert("[MiniView] hide()");
                $("#sf-service-videoplayer-mini").hide()
            };
            this.showLoading = function () {
                alert("[MiniView] showLoading()");
                $("#sf-service-videoplayer-mini-loading").sfLoading("show")
            };
            this.hideLoading = function () {
                alert("[MiniView] hideLoading()");
                $("#sf-service-videoplayer-mini-loading").sfLoading("hide")
            };
            this.showTime = function () {
                alert("[MiniView] showTime()");
                $("#sf-service-videoplayer-mini-infobar-time").show()
            };
            this.hideTime = function () {
                alert("[MiniView] hideTime()");
                $("#sf-service-videoplayer-mini-infobar-time").hide()
            };
            this.showNetworkError = function () {
                alert("[MiniView] showNetworkError()");
                $("#sf-service-videoplayer-mini-neterr-icon").show();
                $("#sf-service-videoplayer-mini-neterr-text").show()
            };
            this.hideNetworkError = function () {
                alert("[MiniView] hideNetworkError()");
                $("#sf-service-videoplayer-mini-neterr-icon").hide();
                $("#sf-service-videoplayer-mini-neterr-text").hide()
            };
            this.showNotSupport = function () {
                alert("[MiniView] showNotSupport()");
                $("#sf-service-videoplayer-mini-notsup-icon").show();
                $("#sf-service-videoplayer-mini-notsup-text").show()
            };
            this.hideNotSupport = function () {
                alert("[MiniView] hideNotSupport()");
                $("#sf-service-videoplayer-mini-notsup-icon").hide();
                $("#sf-service-videoplayer-mini-notsup-text").hide()
            };
            this.showUnablePlay = function (au) {
                alert("[MiniView] showUnablePlay()");
                $("#sf-service-videoplayer-mini-unableplay-icon").show();
                if (au) {
                    var at = a.lang.COM_UNABLE_PLAY_FILE_CHECK_MSG + "(" + au + ")";
                    $("#sf-service-videoplayer-mini-unableplay-text").html(at)
                }
                $("#sf-service-videoplayer-mini-unableplay-text").show()
            };
            this.hideUnablePlay = function () {
                alert("[MiniView] hideUnablePlay()");
                $("#sf-service-videoplayer-mini-unableplay-icon").hide();
                $("#sf-service-videoplayer-mini-unableplay-text").hide()
            };
            this.setLiveStreamMode = function (at) {
                alert("[MiniView] setLiveStreamMode(" + at + ")");
                an = at;
                if (at) {
                    $("#sf-service-videoplayer-mini-infobar-progress-play").width(ak);
                    $("#sf-service-videoplayer-mini-infobar-time").addClass("livestream")
                } else {
                    $("#sf-service-videoplayer-mini-infobar-time").removeClass("livestream")
                }
            };
            this.setPosition = function (at) {
                alert("[MiniView] setPosition(" + at + ")");
                $("#sf-service-videoplayer-mini").css({left: at.left, top: at.top, width: at.width, height: at.height});
                ak = at.width - al;
                $("#sf-service-videoplayer-mini-infobar-progress-bg").width(ak);
                $("#sf-service-videoplayer-mini-infobar-progress-mouse").width(ak);
                $("#sf-service-videoplayer-mini-subtitle").height(at.height - this.getInfobarHeight())
            };
            this.getInfobarHeight = function () {
                alert("[MiniView] getInfobarHeight() returns " + aq);
                return aq
            };
            this.setZIndex = function (at) {
                alert("[MiniView] setZIndex(" + at + ")");
                $("#sf-service-videoplayer-mini").css("z-index", at)
            };
            this.refresh = function (aE, aD) {
                switch (aE.toUpperCase()) {
                    case"STATE":
                        $("#sf-service-videoplayer-mini-infobar-state").attr("class", "sf-service-videoplayer-mini-infobar-state-" + ad[aD]);
                        break;
                    case"SPEED":
                        $("#sf-service-videoplayer-mini-infobar-speed").html(aD);
                        break;
                    case"CURTIME":
                        $("#sf-service-videoplayer-mini-infobar-time-0").html(aD.timeString);
                        if (!an) {
                            var aw = am;
                            if (ai > 0) {
                                aw = parseInt((ak - am) * aD.millisecond / ai) + am
                            }
                            $("#sf-service-videoplayer-mini-infobar-progress-play").width(aw)
                        }
                        break;
                    case"TOTALTIME":
                        var ay = new PlayTime(aD);
                        $("#sf-service-videoplayer-mini-infobar-time-2").html(ay.timeString);
                        ai = ay.millisecond;
                        break;
                    case"SKIPTIME":
                        var az = $("#sf-service-videoplayer-mini-infobar-skip-pointer");
                        var at = $("#sf-service-videoplayer-mini-infobar-skip-time");
                        var aA = parseFloat(at.css("width"), 10) / 2;
                        var av = ao + ak - (aA * 2);
                        if (aD == "hide") {
                            az.hide();
                            at.hide();
                            at.html("")
                        } else {
                            var aC = ao + parseInt((ak - am) * aD.millisecond / ai);
                            var aB = aC - aA;
                            az.css("left", aC);
                            if (aB > ao && aB <= av) {
                                at.css("left", aB)
                            } else {
                                if (aB > av) {
                                    at.css("left", av)
                                } else {
                                    if (aB < ao) {
                                        at.css("left", ao)
                                    }
                                }
                            }
                            at.html(aD.timeString);
                            if (az.css("display") == "none") {
                                az.show()
                            }
                            if (at.css("display") == "none") {
                                at.show()
                            }
                        }
                        break;
                    case"TRICKSPEED":
                        var au = $("#sf-service-videoplayer-mini-infobar-speed");
                        if (aD == "hide") {
                            var ax = "";
                            au.hide()
                        } else {
                            if (aD > 1) {
                                var ax = "x" + aD
                            } else {
                                if (aD < 0) {
                                    var ax = "x" + Math.abs(aD)
                                } else {
                                    var ax = ""
                                }
                            }
                            au.html(ax);
                            if (au.css("display") == "none") {
                                au.show()
                            }
                        }
                        break;
                    default:
                        break
                }
            };
            function aj() {
                this.show = function () {
                    alert("[MiniView][Subtitle] show()");
                    $("#sf-service-videoplayer-mini-subtitle").show()
                };
                this.hide = function () {
                    alert("[MiniView][Subtitle] hide()");
                    $("#sf-service-videoplayer-mini-subtitle").hide()
                };
                this.clear = function () {
                    alert("[MiniView][Subtitle] clear()");
                    $("#sf-service-videoplayer-mini-subtitle-table-td").html("")
                };
                this.setVerticalPosition = function (at, av) {
                    alert("[MiniView][Subtitle] setVerticalPosition(" + at + "," + av + ")");
                    var au = $("#sf-service-videoplayer-mini-subtitle-table-td");
                    if (at == 1) {
                        au.css({"vertical-align": "top", "padding-top": av, "padding-bottom": 0})
                    } else {
                        if (at == 2) {
                            au.css({"vertical-align": "bottom", "padding-top": 0, "padding-bottom": av})
                        }
                    }
                };
                this.setFontSize = function (at) {
                    alert("[MiniView][Subtitle] setFontSize(" + at + ")");
                    $("#sf-service-videoplayer-mini-subtitle-table-td").css({"font-size": at})
                };
                this.setFontColor = function (at) {
                    alert("[MiniView][Subtitle] setFontColor(" + at + ")");
                    $("#sf-service-videoplayer-mini-subtitle-table-td").css({color: at})
                };
                this.setString = function (at) {
                    alert("[MiniView][Subtitle] setString(" + at + ")");
                    $("#sf-service-videoplayer-mini-subtitle-table-td").html(at)
                }
            }
        }

        function Y() {
            var au = this;
            var ak = 0;
            var aj = null;
            var am = null;
            var ai = 5000;
            var ao = 1000;
            this.Subtitle = new al();
            $('<div id="sf-service-videoplayer-full"></div>').html(['<div id="sf-service-videoplayer-full-infobar">', '<div id="sf-service-videoplayer-full-infobar-bg0"></div>', '<div id="sf-service-videoplayer-full-infobar-bg1"></div>', '<div id="sf-service-videoplayer-full-infobar-state"></div>', '<div id="sf-service-videoplayer-full-infobar-speed"></div>', '<div id="sf-service-videoplayer-full-infobar-time">', '<div id="sf-service-videoplayer-full-infobar-time-0"></div>', '<div id="sf-service-videoplayer-full-infobar-time-1">/</div>', '<div id="sf-service-videoplayer-full-infobar-time-2"></div>', "</div>", '<div id="sf-service-videoplayer-full-infobar-progress-mouse"></div>', '<div id="sf-service-videoplayer-full-infobar-progress-bg">', '<div id="sf-service-videoplayer-full-infobar-progress-bg-left"></div>', '<div id="sf-service-videoplayer-full-infobar-progress-bg-right"></div>', '<div id="sf-service-videoplayer-full-infobar-progress-bg-middle"></div>', "</div>", '<div id="sf-service-videoplayer-full-infobar-progress-play">', '<div id="sf-service-videoplayer-full-infobar-progress-play-left"></div>', '<div id="sf-service-videoplayer-full-infobar-progress-play-right"></div>', '<div id="sf-service-videoplayer-full-infobar-progress-play-middle"></div>', "</div>", '<div id="sf-service-videoplayer-full-infobar-skip">', '<div id="sf-service-videoplayer-full-infobar-skip-pointer"></div>', '<div id="sf-service-videoplayer-full-infobar-skip-time"></div>', "</div>", '<div id="sf-service-videoplayer-full-infobar-title"></div>', '<div id="sf-service-videoplayer-full-infobar-volume">', '<div id="sf-service-videoplayer-full-infobar-volume-icon"></div>', '<div id="sf-service-videoplayer-full-infobar-volume-text"></div>', "</div>", "</div>", '<div id="sf-service-videoplayer-full-helpbar"></div>', '<div id="sf-service-videoplayer-full-loading"></div>', '<div id="sf-service-videoplayer-full-popup"></div>', '<div id="sf-service-videoplayer-full-neterr-icon"></div>', '<div id="sf-service-videoplayer-full-neterr-text">' + a.lang.SID_ALERT_NETWORKERROR_MSG + "</div>", '<div id="sf-service-videoplayer-full-notsup-icon"></div>', '<div id="sf-service-videoplayer-full-notsup-text">' + a.lang.COM_FILE_FORMAT_NOT_SUPPORTD_MSG + "</div>", '<div id="sf-service-videoplayer-full-unableplay-icon"></div>', '<div id="sf-service-videoplayer-full-unableplay-text">' + a.lang.COM_UNABLE_PLAY_FILE_CHECK_MSG + "</div>", '<div id="sf-service-videoplayer-full-mouse"></div>', '<div id="sf-service-videoplayer-full-subtitle">', '<table cellpadding="0px" cellspacing="0px">', "<tr>", '<td id="sf-service-videoplayer-full-subtitle-table-td">', "</td>", "</tr>", "</table>", "</div>",].join("")).appendTo($("body"));
            var ah = [5, 5, 9], ag = [397, 625, 1050], at = [387, 515, 780], af = curWidget.height == 540 ? 0 : (curWidget.height == 720 ? 1 : 2), ap = ah[af], an = ag[af], ar = at[af];
            var aq = false;
            this.init = function (av) {
                alert("[FullView] init(" + av + ")");
                this.hide();
                this.refresh("state", a.service.VideoPlayer.STATE_STOPPED);
                this.refresh("speed", "");
                this.refresh("totaltime", 0);
                this.refresh("curtime", new PlayTime(0));
                this.refresh("title", "");
                $("#sf-service-videoplayer-full-infobar-progress-mouse").click(function (aw) {
                    alert("[FullView] Progress bar clicked!");
                    av.onprogressbarclicked(aw.offsetX / an)
                });
                $("#sf-service-videoplayer-full-mouse").click(function (aw) {
                    alert("[FullView] Clicked!");
                    au.showBars()
                });
                $("#sf-service-videoplayer-full-mouse").bind("contextmenu", function (aw) {
                    alert("[FullView] Mouse right key clicked!");
                    aw.stopPropagation();
                    V(a.key.TOOLS)
                });
                $("#sf-service-videoplayer-full").css({visibility: "visible"})
            };
            this.show = function () {
                alert("[FullView] show()");
                $("#sf-service-videoplayer-full").show();
                au.showBars()
            };
            this.hide = function () {
                alert("[FullView] hide()");
                $("#sf-service-videoplayer-full").hide()
            };
            this.isShow = function () {
                var av = $("#sf-service-videoplayer-full").css("display") != "none";
                alert("[FullView] isShow() returns " + av);
                return av
            };
            this.showBars = function () {
                alert("[FullView] showBars()");
                $("#sf-service-videoplayer-full-infobar").show();
                $("#sf-service-videoplayer-full-helpbar").show();
                au.setBarHideTimer()
            };
            this.hideBars = function () {
                alert("[FullView] hideBars()");
                $("#sf-service-videoplayer-full-infobar").hide();
                $("#sf-service-videoplayer-full-helpbar").hide();
                au.clearBarHideTimer()
            };
            this.isShowBars = function () {
                if (aj != null) {
                    return true
                }
                return false
            };
            this.showPopup = function (av) {
                alert("[FullView] showPopup(" + av + ")");
                $("#sf-service-videoplayer-full-popup").sfPopup(av).sfPopup("show")
            };
            this.showLoading = function () {
                alert("[FullView] showLoading()");
                $("#sf-service-videoplayer-full-loading").sfLoading("show")
            };
            this.hideLoading = function () {
                alert("[FullView] hideLoading()");
                $("#sf-service-videoplayer-full-loading").sfLoading("hide")
            };
            this.showTime = function () {
                alert("[FullView] showTime()");
                $("#sf-service-videoplayer-full-infobar-time").show()
            };
            this.hideTime = function () {
                alert("[FullView] hideTime()");
                $("#sf-service-videoplayer-full-infobar-time").hide()
            };
            this.showNetworkError = function () {
                alert("[FullView] showNetworkError()");
                $("#sf-service-videoplayer-full-neterr-icon").show();
                $("#sf-service-videoplayer-full-neterr-text").show()
            };
            this.hideNetworkError = function () {
                alert("[FullView] hideNetworkError()");
                $("#sf-service-videoplayer-full-neterr-icon").hide();
                $("#sf-service-videoplayer-full-neterr-text").hide()
            };
            this.showNotSupport = function () {
                alert("[FullView] showNotSupport()");
                $("#sf-service-videoplayer-full-notsup-icon").show();
                $("#sf-service-videoplayer-full-notsup-text").show()
            };
            this.hideNotSupport = function () {
                alert("[FullView] hideNotSupport()");
                $("#sf-service-videoplayer-full-notsup-icon").hide();
                $("#sf-service-videoplayer-full-notsup-text").hide()
            };
            this.showUnablePlay = function (aw) {
                alert("[FullView] showUnablePlay()");
                $("#sf-service-videoplayer-full-unableplay-icon").show();
                if (aw) {
                    var av = a.lang.COM_UNABLE_PLAY_FILE_CHECK_MSG + "(" + aw + ")";
                    $("#sf-service-videoplayer-full-unableplay-text").html(av)
                }
                $("#sf-service-videoplayer-full-unableplay-text").show()
            };
            this.hideUnablePlay = function () {
                alert("[FullView] hideUnablePlay()");
                $("#sf-service-videoplayer-full-unableplay-icon").hide();
                $("#sf-service-videoplayer-full-unableplay-text").hide()
            };
            this.setLiveStreamMode = function (av) {
                alert("[FullView] setLiveStreamMode(" + av + ")");
                aq = av;
                if (av) {
                    $("#sf-service-videoplayer-full-infobar-progress-play").width(an);
                    $("#sf-service-videoplayer-full-infobar-time").addClass("livestream")
                } else {
                    $("#sf-service-videoplayer-full-infobar-time").removeClass("livestream")
                }
            };
            this.setBarHideTimer = function () {
                alert("[FullView] setBarHideTimer()");
                au.clearBarHideTimer();
                aj = setTimeout(function () {
                    au.hideBars();
                    aj = null
                }, ai)
            };
            this.clearBarHideTimer = function () {
                alert("[FullView] clearBarHideTimer()");
                if (aj) {
                    clearTimeout(aj);
                    aj = null
                }
            };
            this.showVolume = function (av) {
                alert("[FullView] showVolume(" + av + ")");
                if (av == 0) {
                    $("#sf-service-videoplayer-full-infobar-volume").addClass("sf-service-videoplayer-full-infobar-volume-icon-mute")
                } else {
                    $("#sf-service-videoplayer-full-infobar-volume").removeClass("sf-service-videoplayer-full-infobar-volume-icon-mute");
                    $("#sf-service-videoplayer-full-infobar-volume-text").html(av)
                }
                $("#sf-service-videoplayer-full-infobar-volume").show();
                au.setVolumeHideTimer()
            };
            this.hideVolume = function () {
                alert("[FullView] hideVolume()");
                $("#sf-service-videoplayer-full-infobar-volume").hide()
            };
            this.setVolumeHideTimer = function () {
                alert("[FullView] setVolumeHideTimer()");
                au.clearVolumeHideTimer();
                am = setTimeout(function () {
                    au.hideVolume();
                    am = null
                }, ao)
            };
            this.clearVolumeHideTimer = function () {
                alert("[FullView] clearVolumeHideTimer()");
                if (am) {
                    clearTimeout(am);
                    am = null
                }
            };
            this.setZIndex = function (av) {
                alert("[FullView] setZIndex(" + av + ")");
                $("#sf-service-videoplayer-full").css("z-index", av)
            };
            this.refresh = function (aG, aF) {
                switch (aG.toUpperCase()) {
                    case"STATE":
                        $("#sf-service-videoplayer-full-infobar-state").attr("class", "sf-service-videoplayer-full-infobar-state-" + ad[aF]);
                        break;
                    case"SPEED":
                        $("#sf-service-videoplayer-full-infobar-speed").html(aF);
                        break;
                    case"CURTIME":
                        $("#sf-service-videoplayer-full-infobar-time-0").html(aF.timeString);
                        if (!aq) {
                            var ay = ap;
                            if (ak > 0) {
                                ay = parseInt((an - ap) * aF.millisecond / ak) + ap
                            }
                            $("#sf-service-videoplayer-full-infobar-progress-play").width(ay)
                        }
                        break;
                    case"TOTALTIME":
                        var aA = new PlayTime(aF);
                        $("#sf-service-videoplayer-full-infobar-time-2").html(aA.timeString);
                        ak = aA.millisecond;
                        break;
                    case"SKIPTIME":
                        var aB = $("#sf-service-videoplayer-full-infobar-skip-pointer");
                        var av = $("#sf-service-videoplayer-full-infobar-skip-time");
                        var aC = parseFloat(av.css("width"), 10) / 2;
                        var ax = ar + an - (aC * 2);
                        if (aF == "hide") {
                            aB.hide();
                            av.hide();
                            av.html("")
                        } else {
                            var aE = ar + parseInt((an - ap) * aF.millisecond / ak);
                            var aD = aE - aC;
                            aB.css("left", aE);
                            if (aD > ar && aD <= ax) {
                                av.css("left", aD)
                            } else {
                                if (aD > ax) {
                                    av.css("left", ax)
                                } else {
                                    if (aD < ar) {
                                        av.css("left", ar)
                                    }
                                }
                            }
                            av.html(aF.timeString);
                            if (aB.css("display") == "none") {
                                aB.show()
                            }
                            if (av.css("display") == "none") {
                                av.show()
                            }
                        }
                        break;
                    case"TRICKSPEED":
                        var aw = $("#sf-service-videoplayer-full-infobar-speed");
                        if (aF == "hide") {
                            var az = "";
                            aw.hide()
                        } else {
                            if (aF > 1) {
                                var az = "x" + aF
                            } else {
                                if (aF < 0) {
                                    var az = "x" + Math.abs(aF)
                                } else {
                                    var az = ""
                                }
                            }
                            aw.html(az);
                            if (aw.css("display") == "none") {
                                aw.show()
                            }
                        }
                        break;
                    case"TITLE":
                        $("#sf-service-videoplayer-full-infobar-title").html(aF);
                        break;
                    case"HELPBAR":
                        $("#sf-service-videoplayer-full-helpbar").sfKeyHelp(aF);
                        break;
                    default:
                        break
                }
            };
            function al() {
                this.show = function () {
                    alert("[FullView][Subtitle] show()");
                    $("#sf-service-videoplayer-full-subtitle").show()
                };
                this.hide = function () {
                    alert("[FullView][Subtitle] hide()");
                    $("#sf-service-videoplayer-full-subtitle").hide()
                };
                this.clear = function () {
                    alert("[FullView][Subtitle] clear()");
                    $("#sf-service-videoplayer-full-subtitle-table-td").html("")
                };
                this.setVerticalPosition = function (av, ax) {
                    alert("[FullView][Subtitle] setVerticalPosition(" + av + "," + ax + ")");
                    var aw = $("#sf-service-videoplayer-full-subtitle-table-td");
                    if (av == 1) {
                        aw.css({"vertical-align": "top", "padding-top": ax, "padding-bottom": 0})
                    } else {
                        if (av == 2) {
                            aw.css({"vertical-align": "bottom", "padding-top": 0, "padding-bottom": ax})
                        }
                    }
                };
                this.setFontSize = function (av) {
                    alert("[FullView][Subtitle] setFontSize(" + av + ")");
                    $("#sf-service-videoplayer-full-subtitle-table-td").css({"font-size": av})
                };
                this.setFontColor = function (av) {
                    alert("[FullView][Subtitle] setFontColor(" + av + ")");
                    $("#sf-service-videoplayer-full-subtitle-table-td").css({color: av})
                };
                this.setString = function (av) {
                    alert("[FullView][Subtitle] setString(" + av + ")");
                    var aw = av.replace(/\n/g, "<br>");
                    alert("[FullView][Subtitle] strTemp(" + aw + ")");
                    $("#sf-service-videoplayer-full-subtitle-table-td").html(aw)
                }
            }
        }

        var ad = {};
        ad[r.STATE_PLAYING] = "play";
        ad[r.STATE_PAUSED] = "pause";
        ad[r.STATE_STOPPED] = "stop";
        ad[r.STATE_FF] = "ff";
        ad[r.STATE_REW] = "rew";
        ad[r.STATE_BUFFERING] = "play";
        ad[r.STATE_SCANNING] = "play";
        function V(af) {
            if (document.createEvent) {
                alert("using document.createEvent");
                var ag = document.createEvent("Events");
                ag.initEvent("keydown", true, true);
                ag.keyCode = af;
                alert("document.activeElement = " + document.activeElement);
                document.activeElement.dispatchEvent(ag)
            } else {
                if (document.createEventObject) {
                    alert("using document.createEventObject");
                    var ag = document.createEventObject();
                    ag.keyCode = af;
                    alert("document.activeElement = " + document.activeElement);
                    document.activeElement.fireEvent("onkeydown", ag)
                }
            }
        }
    }
})(sf);
var iCCheck3DEffect = new CCheck3DEffect();
function CCheck3DEffect() {
    var f = "";
    var b = "Check3DEffect";
    var a = "1.0";
    var c = null;
    var d = null;
    var g = false;
    this.is3DEffectSupport = function () {
        alert("Check3DEffectSupport:");
        if (!g) {
            e()
        }
        if (!c || !d) {
            alert("\t" + b + " fail to initialize : can not find plugin object!");
            return 0
        }
        var h = h = d.GetFirmware();
        var n = h.split("-");
        var k = parseInt(n[1].replace("INFOLINK", ""), 10);
        var q = parseInt(n[2], 10);
        var m = -2;
        var p = window.location.search.match("modelid=([^&]+)");
        var o = window.location.search.match("product=([^&]+)");
        var j = (p && p.length == 2) ? p[1] : "";
        var l = (o && o.length == 2) ? parseInt(o[1], 10) : -1;
        alert("\tfirmware year: " + k);
        alert("\tfirmware version: " + q);
        alert("\tmodelid: " + j);
        alert("\tproductType: " + l);
        alert("\tScreen Plugin: " + c);
        alert("\tNNavi Plugin: " + d);
        if (c && c.Flag3DEffectSupport() == 1) {
            if (k == 2010) {
                return 1
            } else {
                if (k == 2011) {
                    if (l == 2) {
                        if (c && c.Flag3DTVConnect() == 1) {
                            alert("\tBD-Flag3DTVConnect: true");
                            m = 1
                        } else {
                            alert("\tBD-Flag3DTVConnect: false - This method can not guarantee the supporting 3D in this case. TV connected to this BD Player may support 3D.");
                            m = 0
                        }
                    } else {
                        if (j.indexOf("X6") >= 0) {
                            if (q < 1003) {
                                m = -1
                            } else {
                                m = 1
                            }
                        } else {
                            if (q < 1001) {
                                m = -1
                            } else {
                                m = 1
                            }
                        }
                    }
                } else {
                    if (k > 2011) {
                        m = 1
                    }
                }
            }
        } else {
            m = 0
        }
        alert("\tCheck3DEffectSupport returns: " + ((m == 1) ? "3D supported" : (m == 0) ? "3D not supported" : (m == -1) ? "Firmware update needed" : "Unknown"));
        return m
    };
    function e() {
        alert(b + " init() version [ " + a + " ]");
        c = document.getElementById("pluginObjectScreen3D");
        d = document.getElementById("pluginObjectNNavi");
        if (!c || !d) {
            var h = "plugin_Object_for_3DEffect";
            var j = document.createElement("div");
            j.id = h;
            j.style.position = "absolute";
            j.style.top = "0px";
            j.style.left = "0px";
            document.body.appendChild(j);
            if (!c) {
                document.getElementById(h).innerHTML += "<object id='pluginObjectScreen3D' border=0 width=0 height =0 classid='clsid:SAMSUNG-INFOLINK-SCREEN' style='opacity:0.0;background:#000000;' ></object>"
            }
            if (!d) {
                document.getElementById(h).innerHTML += "<object id='pluginObjectNNavi' border=0 width=0 height =0 classid='clsid:SAMSUNG-INFOLINK-NNAVI' style='opacity:0.0;background:#000000;' ></object>"
            }
            c = document.getElementById("pluginObjectScreen3D");
            d = document.getElementById("pluginObjectNNavi")
        }
        if (!c || !d) {
            alert(b + " fail to initialize : can not find plugin object!");
            return
        }
        g = true
    }
}
(function (b) {
    b.service.ImageViewer = new a();
    b.service.ImageViewer.NOERROR = 0;
    b.service.ImageViewer.ERR_NETWORK = 1;
    b.service.ImageViewer.ERR_RENDER = 2;
    b.service.ImageViewer.ERR_WEBAPI_NOT_AVAILABLE = 3;
    function a() {
        this.setPosition = function (s) {
            alert("[ImageViewer] setPosition(" + s + ")");
            if (!n) {
                g()
            }
            if (!e) {
                h(new SRect(s.left, s.top, s.width, s.height))
            } else {
                k.setDisplayRect(new SRect(s.left, s.top, s.width, s.height))
            }
            l = s;
            r.setPosition(s)
        };
        this.draw = function (u, s) {
            alert("[ImageViewer] draw(" + u.url + "," + u.width + "," + u.height + ")");
            if (!n) {
                g()
            }
            if (!e) {
                alert("[ImageViewer] Execute setPosition() first.");
                return
            }
            if (!d(u)) {
                alert("[ImageViewer] draw() : Invalid item..");
                return false
            }
            f();
            r.show();
            r.showLoading();
            k.prepare(function () {
                r.hideLoading();
                if (s) {
                    k.draw(s.oncomplete, s.onerror)
                } else {
                    k.draw(null, null)
                }
            }, t, u.url, {width: u.width ? parseInt(u.width) : null, height: u.height ? parseInt(u.height) : null,});
            function t(v) {
                alert("[ImageViewer] onError(" + v + ")");
                r.hideLoading();
                switch (v.code) {
                    case v.NOT_FOUND_ERR:
                    case v.NETWORK_ERR:
                    case v.NETWORK_SLOW_ERR:
                    case v.SECURITY_ERR:
                        j(r.hideNetworkError);
                        r.showNetworkError();
                        if (s && typeof s.onerror == "function") {
                            s.onerror(b.service.ImageViewer.ERR_NETWORK)
                        }
                        break;
                    case v.RENDER_ERR:
                        j(r.hideNotSupport);
                        r.showNotSupport();
                        if (s && typeof s.onerror == "function") {
                            s.onerror(b.service.ImageViewer.ERR_RENDER)
                        }
                        break;
                    default:
                        break
                }
            }
        };
        this.clear = function () {
            alert("[ImageViewer] clear()");
            if (!n) {
                g()
            }
            if (!e) {
                alert("[ImageViewer] !ERROR! Do setPosition() first.");
                return
            }
            k.clear();
            f();
            r.hideLoading()
        };
        this.show = function () {
            alert("[ImageViewer] show()");
            if (!n) {
                g()
            }
            if (!e) {
                alert("[ImageViewer] !ERROR! Do setPosition() first.");
                return
            }
            r.show();
            k.show()
        };
        this.hide = function () {
            alert("[ImageViewer] hide()");
            if (!n) {
                g()
            }
            if (!e) {
                alert("[ImageViewer] !ERROR! Do setPosition() first.");
                return
            }
            this.clear();
            r.hide();
            k.hide()
        };
        this.getZIndex = function () {
            if (!n) {
                g()
            }
            alert("[ImageViewer] getZIndex() returns " + k.zIndex);
            return k.zIndex
        };
        this.setZIndex = function (s) {
            alert("[ImageViewer] setZIndex(" + s + ")");
            if (!n) {
                g()
            }
            k.setZIndex(s);
            r.setZIndex(s + 1)
        };
        this._isShow = function () {
            alert("[ImageViewer] _isShow()");
            if (!n) {
                g()
            }
            return r.isShow()
        };
        this._getPosition = function () {
            alert("[ImageViewer] _getPosition() returns " + l);
            return l
        };
        var o = "sf-service-imageviewer-partial";
        var p = 30;
        var q = this;
        var n = false;
        var e = false;
        var k = null;
        var r = null;
        var m = null;
        var l = null;

        function g() {
            alert("[ImageViewer] initialize()");
            r = new c();
            r.setZIndex(p + 1);
            n = true
        }

        function h(s) {
            alert("[ImageViewer] setImageViewInstance(" + s + ")");
            deviceapis.imageview.getImageView(function (t) {
                k = t;
                q.ImageView = t;
                var u = {zIndex: p, displayRect: new SRect(s.left, s.top, s.width, s.height)};
                k.init(u)
            }, function (u) {
                alert("[ImageViewer] " + u);
                var t = deviceapis.imageview._getAllInstance();
                if (t && t.length > 0) {
                    k = t[0]
                } else {
                    alert("[ImageViewer] Web API is not available!");
                    throw new Error(ERR_WEBAPI_NOT_AVAILABLE)
                }
            });
            e = true
        }

        function d(s) {
            var t = false;
            if (s && s.url) {
                t = true
            }
            alert("[ImageViewer] isValidItem(" + s + ") returns " + t);
            return t
        }

        function j(s) {
            alert("[ImageViewer] setViewCleaner()");
            if (typeof m == "function") {
                m()
            }
            m = s
        }

        function f() {
            alert("[ImageViewer] runViewCleaner()");
            if (typeof m == "function") {
                m();
                m = null
            }
        }

        function c() {
            $('<div id="' + o + '"></div>').html(['<div id="sf-service-imageviewer-partial-neterr-icon"></div>', '<div id="sf-service-imageviewer-partial-neterr-text">' + b.lang.SID_ALERT_NETWORKERROR_MSG + "</div>", '<div id="sf-service-imageviewer-partial-notsup-icon"></div>', '<div id="sf-service-imageviewer-partial-notsup-text">' + b.lang.SID_NOT_SUPPORT_FORMAT + "</div>", '<div id="sf-service-imageviewer-partial-loading"></div>',].join("")).appendTo($("body"));
            this.init = function () {
                alert("[ImageViewer][view] init()")
            };
            this.show = function () {
                alert("[ImageViewer][view] show()");
                $("#" + o).show()
            };
            this.hide = function () {
                alert("[ImageViewer][view] hide()");
                $("#" + o).hide();
                this.hideLoading()
            };
            this.isShow = function () {
                var s = $("#" + o).css("display") != "none";
                alert("[ImageViewer][view] isShow() returns " + s);
                return s
            };
            this.setPosition = function (s) {
                alert("[ImageViewer][view] setPosition(" + s + ")");
                $("#" + o).css({left: s.left, top: s.top, width: s.width, height: s.height})
            };
            this.showNetworkError = function () {
                alert("[ImageViewer][view] showNetworkError()");
                $("#sf-service-imageviewer-partial-neterr-icon").show();
                $("#sf-service-imageviewer-partial-neterr-text").show()
            };
            this.hideNetworkError = function () {
                alert("[ImageViewer][view] hideNetworkError()");
                $("#sf-service-imageviewer-partial-neterr-icon").hide();
                $("#sf-service-imageviewer-partial-neterr-text").hide()
            };
            this.showNotSupport = function () {
                alert("[ImageViewer][view] showNotSupport()");
                $("#sf-service-imageviewer-partial-notsup-icon").show();
                $("#sf-service-imageviewer-partial-notsup-text").show()
            };
            this.hideNotSupport = function () {
                alert("[ImageViewer][view] hideNotSupport()");
                $("#sf-service-imageviewer-partial-notsup-icon").hide();
                $("#sf-service-imageviewer-partial-notsup-text").hide()
            };
            this.showLoading = function () {
                alert("[ImageViewer][view] showLoading()");
                $("#sf-service-imageviewer-partial-loading").sfLoading("show")
            };
            this.hideLoading = function () {
                alert("[ImageViewer][view] hideLoading()");
                $("#sf-service-imageviewer-partial-loading").sfLoading("hide")
            };
            this.setZIndex = function (s) {
                alert("[ImageViewer][view] setZIndex(" + s + ")");
                $("#" + o).css("z-index", s)
            }
        }
    }
})(sf);
(function (b) {
    b.service.ImageViewer.SlideShow = new a();
    function a() {
        this.init = function (ao) {
            alert("[ImageViewer][SlideShow] init()");
            if (ao) {
                if (ao.cyclic !== undefined) {
                    P = ao.cyclic
                }
                if (ao.timegap !== undefined) {
                    an = ao.timegap
                }
                if (ao.onlastitem !== undefined) {
                    T = ao.onlastitem
                }
                if (ao.onerror !== undefined) {
                    o = ao.onerror
                }
                if (ao.onimagechange !== undefined) {
                    cbOnImageChange = ao.onimagechange
                }
            }
            if (!A) {
                q()
            }
        };
        this.start = function (ap) {
            alert("[ImageViewer][SlideShow] start(" + (ap || "") + ")");
            if (!A) {
                q()
            }
            var ao = "play";
            if (ap && ap.state && (ap.state == "play" || ap.state == "pause")) {
                ao = ap.state
            }
            if (M) {
                alert("[ImageViewer][SlideShow] SlideShow is already started.");
                return false
            }
            b.service.ImageViewer.clear();
            if (c) {
                var aq = b.service.ImageViewer._getPosition(), ar = null, at = null;
                if (aq != null) {
                    ar = b.service.ImageViewer._isShow();
                    at = b.service.ImageViewer.getZIndex();
                    aa = function () {
                        alert("[ImageViewer][SlideShow] Restore ImageView.");
                        b.service.ImageViewer.setPosition(aq);
                        if (ar) {
                            b.service.ImageViewer.show()
                        }
                        b.service.ImageViewer.setZIndex(at)
                    }
                }
                p = y();
                p.setZIndex(h);
                p.setDisplayRect(new SRect(0, 0, curWidget.width, curWidget.height))
            }
            ae();
            this.setSpeed(b.core.localData("_imageviewer_speed"));
            v("show");
            v("setSlideShow", true);
            e(O);
            if (ao == "play") {
                N()
            } else {
                ag()
            }
            u.showBars();
            u.show();
            M = true;
            this.focus()
        };
        this.stop = function () {
            alert("[ImageViewer][SlideShow] stop()");
            if (!A) {
                q()
            }
            if (!M) {
                alert("[ImageViewer][SlideShow] SlideShow is not started.");
                return false
            }
            if (W) {
                alert("[ImageViewer][SlideShow] Call alive imageview's setSlideShow first.");
                W.setSlideShow(false)
            }
            v("setSlideShow", false);
            v("clear");
            v("hide");
            B();
            u.hide("LOADING");
            u.hideBars();
            u.hide();
            aj();
            M = false;
            l = "stop";
            if (Z) {
                b.scene.removeKeyHandler(Z);
                Z = null
            } else {
                b.scene.returnFocus()
            }
            if (typeof aa == "function") {
                aa();
                aa = null
            }
        };
        this.pause = function () {
            alert("[ImageViewer][SlideShow] pause()");
            if (!M) {
                alert("[ImageViewer][SlideShow] Slide show is not in progress. Skip.");
                return
            }
            ag()
        };
        this.resume = function () {
            alert("[ImageViewer][SlideShow] resume()");
            if (!M) {
                alert("[ImageViewer][SlideShow] Slide show is not in progress. Skip.");
                return
            }
            N()
        };
        this.focus = function () {
            alert("[ImageViewer][SlideShow] focus()");
            if (!A) {
                q()
            }
            if (!M) {
                alert("[ImageViewer][SlideShow] Slide show is not in progress. Skip.");
                return
            }
            if (b.scene._isSceneArchUsed()) {
                Z = b.scene.pushKeyHandler(function () {
                    x()
                }, {context: this})
            } else {
                $("#" + S).focus()
            }
        };
        this.setKeyHandler = function (ao, ap) {
            alert("[ImageViewer][SlideShow] setKeyHandler(" + ao + "," + typeof ap + ")");
            if (!A) {
                q()
            }
            if (typeof ao == "object") {
                for (var aq in ao) {
                    s[aq] = ao[aq]
                }
            } else {
                s[ao] = ap
            }
        };
        this.setKeyHelp = function (ao, ap) {
            alert("[VideoPlayer] setKeyHelp(" + ao + "," + (ap ? ap : "") + ")");
            if (!A) {
                q()
            }
            if (typeof ao == "object") {
                for (var aq in ao) {
                    ab[aq] = ao[aq]
                }
            } else {
                ab[ao] = ap
            }
            u.refresh("helpbar", C(ab))
        };
        this.setItem = function (ao) {
            alert("[ImageViewer][SlideShow] setItem(" + ao + ")");
            if (!A) {
                q()
            }
            if (L(ao)) {
                if (ao.constructor != Array) {
                    ao = [ao]
                }
                ai = ao;
                if (M) {
                    O = D = 0;
                    d = true;
                    Y = null;
                    if (l == "play") {
                        if (ai.length <= 1) {
                            ag();
                            return true
                        }
                        X();
                        am(D, R)
                    }
                }
                return true
            } else {
                alert('[ImageViewer][SlideShow] setItem - Parameter should be the object that has "url" property, or its Array.');
                return false
            }
        };
        this.addItem = function (ao) {
            alert("[ImageViewer][SlideShow] addItems(" + ao + ")");
            if (!A) {
                q()
            }
            if (L(ao)) {
                if (ao.constructor != Array) {
                    ao = [ao]
                }
                ai = ai.concat(ao);
                return true
            } else {
                alert('[ImageViewer][SlideShow] addItems - Parameter should be the object that has "url" property, or its Array.');
                return false
            }
        };
        this.getItemIdx = function () {
            alert("[ImageViewer][SlideShow] getItemIdx() returns " + O);
            return O
        };
        this.setItemIdx = function (ao) {
            alert("[ImageViewer][SlideShow] setItemIdx(" + ao + ")");
            if (!A) {
                q()
            }
            if (ao >= 0 && ao <= ai.length - 1) {
                O = ao;
                return true
            } else {
                alert("[ImageViewer][SlideShow] invalid index : " + ao);
                return false
            }
        };
        this.getSpeed = function (ao) {
            alert("[ImageViewer][SlideShow] getSpeed() returns " + ak);
            return ak
        };
        this.setSpeed = function (ao) {
            alert("[ImageViewer][SlideShow] setSpeed(" + ao + ")");
            if (ao == null || (ao != "fast" && ao != "normal" && ao != "slow")) {
                alert("[ImageViewer][SlideShow] Invalid value.. Use fast, normal or slow.");
                return false
            }
            ak = ao;
            b.core.localData("_imageviewer_speed", ak);
            if (M) {
                u.refresh("infobar", E({imageView: W}));
                if (l == "play") {
                    X()
                }
            }
            return true
        };
        this.getZIndex = function () {
            if (!A) {
                q()
            }
            alert("[ImageViewer][SlideShow] getZIndex() returns " + J[0].zIndex);
            return J[0].zIndex
        };
        this.setZIndex = function (ao) {
            alert("[ImageViewer][SlideShow] setZIndex(" + ao + ")");
            if (!A) {
                q()
            }
            v("setZIndex", ao);
            u.setZIndex(ao + 1)
        };
        this.getState = function () {
            alert("[ImageViewer][SlideShow] getState() returns " + l);
            return l
        };
        this.getTransitionEffectList = function () {
            alert("[ImageViewer][SlideShow] getTransitionEffectList()");
            if (!A) {
                q()
            }
            return J[0].getTransitionEffectList()
        };
        this.setEffect = function (ao) {
            alert("[ImageViewer][SlideShow] setEffect(" + ao + ")");
            R = ao;
            if (ah) {
                alert("[ImageViewer][SlideShow] Drawing is in progress. Not prepare next.");
                return
            }
            if (l == "play") {
                Y = null;
                X();
                D = K(O);
                am(D, R)
            } else {
                if (l == "pause") {
                    Y = null;
                    D = K(O);
                    am(D, R)
                }
            }
        };
        function x() {
            var ap = event.keyCode;
            alert("[ImageViewer][SlideShow] handleKeydown(" + ap + ")");
            if (H && ap != b.key.RETURN && ap != b.key.EXIT) {
                alert("[ImageViewer][SlideShow] key blocked. transition effect is going on.");
                return
            }
            switch (ap) {
                case b.key.LEFT:
                case b.key.RIGHT:
                    if (ao(ap)) {
                        break
                    }
                    if (ai && ai.length == 1) {
                        return
                    }
                    if (l == "play") {
                        aj();
                        W.stop();
                        p.stop()
                    }
                    var aq = (ap == b.key.LEFT) ? n : K;
                    D = aq(O);
                    e(D);
                    u.refresh("infobar", E());
                    u.showBars();
                    break;
                case b.key.ENTER:
                    if (ao(ap)) {
                        break
                    }
                    if (ai && ai.length == 1) {
                        return
                    }
                    l == "play" ? ag() : N();
                    u.refresh("helpbar", C(ab));
                    u.showBars();
                    break;
                case b.key.RETURN:
                    b.key.preventDefault();
                    if (ao(ap)) {
                        break
                    }
                    break;
                case b.key.EXIT:
                    ao(ap);
                    break;
                case b.key.REW:
                    if (ao(ap)) {
                        break
                    }
                    if (ai && ai.length == 1) {
                        return
                    }
                    if (ak == "fast") {
                        t.setSpeed("normal")
                    } else {
                        if (ak == "normal") {
                            t.setSpeed("slow")
                        }
                    }
                    u.showBars();
                    if (l == "play") {
                        X()
                    }
                    break;
                case b.key.FF:
                    if (ao(ap)) {
                        break
                    }
                    if (ai && ai.length == 1) {
                        return
                    }
                    if (ak == "slow") {
                        t.setSpeed("normal")
                    } else {
                        if (ak == "normal") {
                            t.setSpeed("fast")
                        }
                    }
                    u.showBars();
                    if (l == "play") {
                        X()
                    }
                    break;
                case b.key.INFO:
                    if (ao(ap)) {
                        break
                    }
                    u.toggleBars();
                    break;
                case b.key.PLAY:
                    if (ao(ap)) {
                        break
                    }
                    if (ai && ai.length == 1) {
                        return
                    }
                    N();
                    u.refresh("helpbar", C(ab));
                    u.showBars();
                    break;
                case b.key.PAUSE:
                    if (ao(ap)) {
                        break
                    }
                    if (ai && ai.length == 1) {
                        return
                    }
                    ag();
                    u.refresh("helpbar", C(ab));
                    u.showBars();
                    break;
                default:
                    ao(ap);
                    break
            }
            function ao(ar) {
                if (typeof s[ar] == "function") {
                    s[ar]();
                    return true
                }
                return false
            }
        }

        var V = "sf-service-slideshow";
        var h = 40;
        var S = "sf-service-slideshow-anchor";
        var z = 3;
        var t = this;
        var A = false;
        var u = null;
        var p = null;
        var J = [];
        var ai = null;
        var O = 0;
        var D = 0;
        var o = null;
        var T = null;
        var Q = {slow: "", normal: "", fast: ""};
        var ak = "normal";
        var F = {play: "", pause: ""};
        var l = "stop";
        var P = true;
        var an = {slow: 10000, normal: 5000, fast: 3000};
        var R = deviceapis.imageview.EFFECT_RANDOM;
        var w = null;
        var Z = null;
        var s = {};
        var ab = {};
        var M = false;
        var ah = false;
        var I = false;
        var G = false;
        var H = false;
        var r = null;
        var j = "none";
        var Y = null;
        var U = null;
        var W = null;
        var g = new af(5);
        var c = false;
        var aa = null;
        var d = false;

        function ac() {
            alert("[ImageViewer][SlideShow] onRenderingComplete()");
            H = false;
            g.init();
            W = p;
            if (typeof cbOnImageChange == "function") {
                cbOnImageChange()
            }
            if (typeof T == "function") {
                var ao = ai.length - O;
                if (ao <= z) {
                    T(ao)
                }
            }
            if (l == "play") {
                if (ai.length <= 1 || (!P && O == ai.length - 1)) {
                    ag();
                    return
                }
                Y = null;
                X();
                D = K(O);
                am(D, R)
            }
        }

        function X() {
            alert("[ImageViewer][SlideShow] setShowTimer()");
            aj();
            j = "wait";
            r = setTimeout(function () {
                alert("[ImageViewer][SlideShow] hShowTimer runs.");
                j = "finish";
                r = null;
                if (l != "play") {
                    return
                }
                if (typeof Y == "function") {
                    alert("[ImageViewer][SlideShow] run fnProceed function.");
                    Y();
                    Y = null
                } else {
                    alert("[ImageViewer][SlideShow] set fnProceed function.");
                    Y = k
                }
            }, (an[ak] || an.normal));
            alert("[ImageViewer][SlideShow] Timer is set")
        }

        function aj() {
            alert("[ImageViewer][SlideShow] clearShowTimer()");
            j = "none";
            if (r) {
                clearTimeout(r);
                r = null
            }
        }

        function e(aq) {
            alert("[ImageViewer][SlideShow] drawImage(" + aq + ")");
            B();
            u.show("LOADING");
            O = aq;
            ah = true;
            I = false;
            G = false;
            Y = null;
            p = y();
            p.prepare(function () {
                u.hide("LOADING");
                u.refresh("infobar", E());
                p.draw(function () {
                    ah = false;
                    ac()
                }, ap)
            }, function (at) {
                u.hide("LOADING");
                ah = false;
                ap(at)
            }, ai[aq].url, {
                width: ai[aq].width ? parseInt(ai[aq].width) : null,
                height: ai[aq].height ? parseInt(ai[aq].height) : null,
                effect: deviceapis.imageview.EFFECT_NONE
            });
            function ap(at) {
                alert("[ImageViewer][SlideShow] drawImage() -> onError(" + at + ")");
                switch (at.code) {
                    case at.NOT_FOUND_ERR:
                    case at.NETWORK_ERR:
                    case at.NETWORK_SLOW_ERR:
                    case at.SECURITY_ERR:
                        ao();
                        if (typeof o == "function") {
                            o(b.service.ImageViewer.SlideShow.ERR_NETWORK)
                        }
                        break;
                    case at.RENDER_ERR:
                        ar();
                        if (typeof o == "function") {
                            o(b.service.ImageViewer.SlideShow.ERR_RENDER)
                        }
                        break;
                    default:
                        break
                }
            }

            function ao() {
                alert("[ImageViewer][SlideShow] drawImage() -> onNetworkError()");
                p.clear();
                f(function () {
                    u.hide("NETWORK_ERROR")
                });
                u.show("NETWORK_ERROR");
                u.refresh("helpbar", C(ab));
                if (l == "play") {
                    if (ai.length <= 1 || (!P && O == ai.length - 1)) {
                        ag()
                    } else {
                        Y = null;
                        X();
                        D = K(O);
                        am(D, deviceapis.imageview.EFFECT_NONE)
                    }
                }
            }

            function ar() {
                alert("[ImageViewer][SlideShow] drawImage() -> onRenderError()");
                u.hide("LOADING");
                p.clear();
                f(function () {
                    u.hide("NOT_SUPPORT")
                });
                u.show("NOT_SUPPORT");
                u.refresh("infobar", E());
                if (l == "play") {
                    if (ai.length <= 1 || (!P && O == ai.length - 1)) {
                        ag()
                    } else {
                        Y = null;
                        X();
                        D = K(O);
                        am(D, deviceapis.imageview.EFFECT_NONE)
                    }
                }
            }
        }

        function am(ao, ar) {
            alert("[ImageViewer][SlideShow] prepare(" + ao + "," + ar + ")");
            var au = ai[ao];
            I = true;
            G = false;
            p = y();
            p.prepare(function () {
                I = false;
                G = true;
                aq()
            }, function (aw) {
                I = false;
                G = false;
                at(aw)
            }, au.url, {
                width: au.width ? parseInt(au.width) : null,
                height: au.height ? parseInt(au.height) : null,
                effect: ar
            });
            function aq() {
                alert("[ImageViewer][SlideShow] onDecodingComplete()");
                if (j == "finish" && l == "play") {
                    alert("[ImageViewer][SlideShow] run fnProceed function.");
                    Y();
                    Y = null
                } else {
                    alert("[ImageViewer][SlideShow] set fnProceed function.");
                    Y = k
                }
            }

            function at(aw) {
                alert("[ImageViewer][SlideShow] prepare() -> onError(" + aw + ")");
                switch (aw.code) {
                    case aw.NOT_FOUND_ERR:
                    case aw.NETWORK_ERR:
                    case aw.NETWORK_SLOW_ERR:
                    case aw.SECURITY_ERR:
                        ap();
                        if (typeof o == "function") {
                            o(b.service.ImageViewer.SlideShow.ERR_NETWORK)
                        }
                        break;
                    case aw.RENDER_ERR:
                        av();
                        if (typeof o == "function") {
                            o(b.service.ImageViewer.SlideShow.ERR_RENDER)
                        }
                        break;
                    default:
                        break
                }
            }

            function ap() {
                alert("[ImageViewer][SlideShow] prepare() -> onNetworkError()");
                if (g.inc()) {
                    p.clear();
                    f(function () {
                        u.hide("NETWORK_ERROR")
                    });
                    u.show("NETWORK_ERROR");
                    O = D;
                    u.refresh("helpbar", C(ab));
                    ag()
                } else {
                    if (l == "play") {
                        if (ai.length <= 1 || (!P && O == ai.length - 1)) {
                            ag();
                            return
                        }
                        D = K(D);
                        am(D, R)
                    }
                }
            }

            function av() {
                alert("[ImageViewer][SlideShow] prepare() -> onRenderError()");
                if (l == "play") {
                    if (Y) {
                        alert("[ImageViewer][SlideShow] show Not Support and prepare next.");
                        aw();
                        Y = null
                    } else {
                        alert("[ImageViewer][SlideShow] set fnProceed function. -> show Not Support)");
                        Y = aw
                    }
                }
                function aw() {
                    p.clear();
                    f(function () {
                        u.hide("NOT_SUPPORT")
                    });
                    u.show("NOT_SUPPORT");
                    O = D;
                    u.refresh("infobar", E());
                    if (ai.length <= 1 || (!P && O == ai.length - 1)) {
                        ag();
                        return
                    }
                    Y = null;
                    X();
                    D = K(O);
                    am(D, deviceapis.imageview.EFFECT_NONE)
                }
            }
        }

        function k() {
            alert("[ImageViewer][SlideShow] showPreparedImage()");
            O = D;
            u.refresh("infobar", E());
            B();
            H = true;
            d = false;
            if (W && W != p) {
                W.stop()
            }
            p.draw(function () {
                G = false;
                ac()
            }, null)
        }

        function K(ao) {
            var ap = ao + 1, aq = ai ? ai.length : 0;
            if (ap > aq - 1) {
                ap = 0
            }
            alert("[ImageViewer][SlideShow] getNextItemIdx(" + ao + ") returns " + ap);
            return ap
        }

        function n(ao) {
            var ap = --ao, aq = ai ? ai.length : 0;
            if (ap < 0) {
                ap = aq - 1
            }
            alert("[ImageViewer][SlideShow] getPrevItemIdx(" + ao + ") returns " + ap);
            return ap
        }

        function N() {
            alert("[ImageViewer][SlideShow] playShow()");
            l = "play";
            if (ai.length <= 1) {
                ag();
                return
            }
            if (!ah) {
                X();
                if (u.bShowNetworkError || u.bShowNotSupport) {
                    D = K(O);
                    e(D)
                } else {
                    if (!G && !I) {
                        if (d) {
                            D = O
                        } else {
                            D = K(O)
                        }
                        am(D, R)
                    }
                }
            }
            u.refresh("infobar", E({imageView: W}));
            u.refresh("helpbar", C(ab));
            b.service.setScreenSaver(false)
        }

        function ag() {
            alert("[ImageViewer][SlideShow] pauseShow()");
            l = "pause";
            aj();
            u.refresh("infobar", E({imageView: W}));
            u.refresh("helpbar", C(ab));
            b.service.setScreenSaver(true)
        }

        function C(ar) {
            var aq = $.extend({}, ar);
            var ao = {};
            ao.REWFF = b.lang.SID_SLOW_FAST;
            ao.LEFTRIGHT = b.lang.SID_PREV_NEXT;
            ao.ENTER = l == "play" ? b.lang.SID_STOP_SLIDESHOW : b.lang.SID_START_SLIDESHOW;
            ao.RETURN = b.lang.SID_RETURN;
            for (var ap in ao) {
                if (aq[ap] === undefined) {
                    aq[ap] = ao[ap]
                }
            }
            for (var ap in aq) {
                if (aq[ap] === null) {
                    delete aq[ap]
                }
            }
            return aq
        }

        function E(ap) {
            var ao = {};
            ao.STATE = l;
            ao.SPEED = Q[ak];
            ao.INDEX = (O + 1) + " / " + ai.length;
            var aq = ai[O];
            ao.FILENAME = aq.filename || "";
            if (ap && ap.imageView) {
                ao.RESOLUTION = (ap.imageView.imageWidth && ap.imageView.imageHeight) ? ap.imageView.imageWidth + " x " + ap.imageView.imageHeight : ""
            } else {
                ao.RESOLUTION = (p.imageWidth && p.imageHeight) ? p.imageWidth + " x " + p.imageHeight : ""
            }
            ao.DATE = aq.date || "";
            return ao
        }

        function y() {
            var ao = null;
            if (J.length >= 2) {
                if (W) {
                    for (var ap = 0; ap < J.length; ap++) {
                        if (J[ap].id != W.id) {
                            ao = J[ap];
                            break
                        }
                    }
                } else {
                    ao = J[0]
                }
            } else {
                ao = J[0]
            }
            return ao
        }

        function v(aq, ao) {
            for (var ap = 0; ap < J.length; ap++) {
                J[ap][aq].call(J[ap], (ao === undefined ? null : ao))
            }
        }

        function q() {
            alert("[ImageViewer][SlideShow] initialize()");
            u = new al();
            u.init();
            u.setZIndex(h + 1);
            u.hide();
            $('<a href="javascript:void(0)" id="' + S + '"></a>').appendTo($("body"));
            setTimeout(function () {
                $("#" + S).keydown(x).bind("blur", ad)
            }, 0);
            var ao = {zIndex: h, displayRect: new SRect(0, 0, curWidget.width, curWidget.height)};
            deviceapis.imageview.getImageView(function (ap) {
                J.push(ap);
                ap.init(ao)
            }, function (ap) {
                alert("[ImageViewer][SlideShow] " + ap);
                var aq = deviceapis.imageview._getAllInstance();
                if (aq && aq.length > 0) {
                    J.push(aq[0]);
                    aq[0].init(ao)
                } else {
                    alert("[ImageViewer][SlideShow] Web API is not available!");
                    throw new Error(ERR_WEBAPI_NOT_AVAILABLE)
                }
            });
            deviceapis.imageview.getImageView(function (ap) {
                J.push(ap);
                ap.init(ao);
                c = false
            }, function (ap) {
                alert("[ImageViewer][SlideShow] " + ap);
                alert("[ImageViewer][SlideShow] Second ImageView is not available!");
                c = true
            });
            v("hide");
            m();
            A = true
        }

        function f(ao) {
            alert("[ImageViewer][SlideShow] setViewCleaner()");
            if (typeof U == "function") {
                U()
            }
            U = ao
        }

        function B() {
            alert("[ImageViewer][SlideShow] runViewCleaner()");
            if (typeof U == "function") {
                U();
                U = null
            }
        }

        function ae() {
            alert("[ImageViewer][SlideShow] initEnvVars()");
            M = false;
            ah = false;
            I = false;
            G = false;
            H = false;
            r = null;
            j = "none";
            Y = null;
            U = null
        }

        function m() {
            alert("[ImageViewer][SlideShow] setTextResource()");
            w = {
                FADE1: b.lang.SID_FADE1,
                FADE2: b.lang.SID_FADE2,
                BLIND: b.lang.SID_BLIND,
                SPIRAL: b.lang.SID_SPIRAL,
                CHECKER: b.lang.SID_CHECKER,
                LINEAR: b.lang.SID_LINEAR,
                STAIRS: b.lang.SID_STAIRS,
                WIPE: b.lang.SID_WIPE,
                RANDOM: b.lang.SID_RANDOM,
                NONE: b.lang.SID_NONE
            };
            F = {play: b.lang.SID_PLAY, pause: b.lang.SID_PAUSE};
            Q = {slow: b.lang.SID_SLOW, normal: b.lang.SID_NORMAL, fast: b.lang.SID_FAST}
        }

        function L(aq) {
            var ar = false;
            if (aq.constructor != Array) {
                aq = [aq]
            }
            var ao = aq.length;
            if (ao > 0) {
                ar = true;
                for (var ap = 0; ap < ao; ap++) {
                    if (typeof aq[ap] != "object" || aq[ap].url === undefined) {
                        ar = false;
                        alert("[ImageViewer][SlideShow] !Invalid item! " + ap + "th -> " + printProperties(aq[ap]))
                    }
                }
            } else {
                alert("[ImageViewer][SlideShow] !Invalid item! item is not valid.");
                printProperties(aq)
            }
            alert("[ImageViewer][SlideShow] isValidItem() returns " + ar);
            return ar
        }

        function af(ap) {
            var ao = 0;
            this.inc = function () {
                var aq = false;
                if (++ao >= ap) {
                    aq = true
                }
                alert("[ImageViewer][SlideShow] ErrorCounter.inc() count -> " + ao + ", MAX : " + ap + ", returns " + aq);
                return aq
            };
            this.init = function () {
                ao = 0;
                alert("[ImageViewer][SlideShow] ErrorCounter.init() count -> " + ao + ", MAX : " + ap)
            };
            this.get = function () {
                alert("[ImageViewer][SlideShow] ErrorCounter.get() returns " + ao);
                return ao
            }
        }

        function ad() {
            if (u.isShow()) {
                alert("[ImageViewer] Not intended blur. ImageViewer takes focus.");
                $("#" + S).focus()
            } else {
                alert("[ImageViewer] Intended blur. ImageViewer does not take focus.")
            }
        }

        function al() {
            var ap = this;
            var ao = null;
            var aq = 5000;
            this.bShowNetworkError = false;
            $('<div id="' + V + '" class="sf-service-slideshow"></div>').html(['<div id="sf-service-slideshow-infobar">', '<div id="sf-service-slideshow-infobar-state"></div>', '<div id="sf-service-slideshow-infobar-speed"></div>', '<div id="sf-service-slideshow-infobar-filename"></div>', '<div id="sf-service-slideshow-infobar-resolution"></div>', '<div id="sf-service-slideshow-infobar-date"></div>', '<div id="sf-service-slideshow-infobar-index"></div>', "</div>", '<div id="sf-service-slideshow-helpbar"></div>', '<div id="sf-service-slideshow-mouse"></div>', '<div id="sf-service-slideshow-neterr">', '<div id="sf-service-slideshow-neterr-icon"></div>', '<div id="sf-service-slideshow-neterr-text-0">' + b.lang.SID_ALERT_NETWORKERROR_MSG + "</div>", '<div id="sf-service-slideshow-neterr-text-1"></div>', "</div>", '<div id="sf-service-slideshow-notsup">', '<div id="sf-service-slideshow-notsup-icon"></div>', '<div id="sf-service-slideshow-notsup-text">' + b.lang.SID_NOT_SUPPORT_FORMAT + "</div>", "</div>", '<div id="sf-service-slideshow-loading"></div>', '<div id="sf-service-slideshow-tool"></div>'].join("")).appendTo($("body"));
            $("#sf-service-slideshow-helpbar").sfKeyHelp({"return": b.lang.SID_RETURN});
            this.init = function () {
                alert("[ImageViewer][SlideShow][view] init()");
                $("#sf-service-slideshow-mouse").click(function (au) {
                    alert("[ImageViewer][SlideShow][view] Clicked!");
                    ap.showBars()
                })
            };
            this.show = function (au) {
                alert("[ImageViewer][SlideShow][view] show(" + (au ? au : "") + ")");
                if (typeof au == "undefined") {
                    $("#" + V).show();
                    return
                }
                switch (au.toUpperCase()) {
                    case"INFOBAR":
                        $("#sf-service-slideshow-infobar").show();
                        break;
                    case"HELPBAR":
                        $("#sf-service-slideshow-helpbar").sfKeyHelp("show");
                        break;
                    case"LOADING":
                        $("#sf-service-slideshow-loading").sfLoading("show");
                        break;
                    case"NETWORK_ERROR":
                        $("#sf-service-slideshow-neterr").show();
                        this.bShowNetworkError = true;
                        break;
                    case"NOT_SUPPORT":
                        $("#sf-service-slideshow-notsup").show();
                        this.bShowNotSupport = true;
                        break;
                    default:
                        break
                }
            };
            this.hide = function (au) {
                alert("[ImageViewer][SlideShow][view] hide(" + (au ? au : "") + ")");
                if (typeof au == "undefined") {
                    $("#" + V).hide();
                    return
                }
                switch (au.toUpperCase()) {
                    case"INFOBAR":
                        $("#sf-service-slideshow-infobar").hide();
                        break;
                    case"HELPBAR":
                        $("#sf-service-slideshow-helpbar").sfKeyHelp("hide");
                        break;
                    case"LOADING":
                        $("#sf-service-slideshow-loading").sfLoading("hide");
                        break;
                    case"NETWORK_ERROR":
                        $("#sf-service-slideshow-neterr").hide();
                        this.bShowNetworkError = false;
                        break;
                    case"NOT_SUPPORT":
                        $("#sf-service-slideshow-notsup").hide();
                        this.bShowNotSupport = false;
                        break;
                    default:
                        break
                }
            };
            this.isShow = function () {
                var au = $("#" + V).css("display") != "none";
                alert("[ImageViewer][SlideShow][view] isShow() returns " + au);
                return au
            };
            this.showBars = function () {
                alert("[ImageViewer][SlideShow][view] showBars()");
                this.show("infobar");
                this.show("helpbar");
                ap.setHideTimer()
            };
            this.hideBars = function () {
                alert("[ImageViewer][SlideShow][view] hideBars()");
                this.hide("infobar");
                this.hide("helpbar");
                ap.clearHideTimer()
            };
            this.toggleBars = function () {
                alert("[ImageViewer][SlideShow][view] toggleBars()");
                ao ? this.hideBars() : this.showBars()
            };
            this.setHideTimer = function () {
                alert("[ImageViewer][SlideShow][view] setHideTimer()");
                ap.clearHideTimer();
                ao = setTimeout(function () {
                    ap.hideBars();
                    ao = null
                }, aq)
            };
            this.clearHideTimer = function () {
                alert("[ImageViewer][SlideShow][view] clearHideTimer()");
                if (ao) {
                    clearTimeout(ao);
                    ao = null
                }
            };
            this.setZIndex = function (au) {
                alert("[ImageViewer][SlideShow][view] setZIndex(" + au + ")");
                $("#" + V).css("z-index", au)
            };
            this.refresh = function (au, av) {
                alert("[ImageViewer][SlideShow][view] refresh(" + (au ? au : "") + "," + (av ? av : "") + ")");
                switch (au.toUpperCase()) {
                    case"INFOBAR":
                        $.each(av, function (aw, ay) {
                            switch (aw.toUpperCase()) {
                                case"STATE":
                                    var ax = $("#sf-service-slideshow-infobar-state");
                                    switch (ay.toUpperCase()) {
                                        case"PLAY":
                                            ax.removeClass(at).addClass(ar);
                                            break;
                                        case"PAUSE":
                                            ax.removeClass(ar).addClass(at);
                                            break;
                                        default:
                                            break
                                    }
                                    break;
                                case"SPEED":
                                    $("#sf-service-slideshow-infobar-speed").html(ay);
                                    break;
                                case"FILENAME":
                                    $("#sf-service-slideshow-infobar-filename").html(ay);
                                    break;
                                case"RESOLUTION":
                                    $("#sf-service-slideshow-infobar-resolution").html(ay);
                                    break;
                                case"DATE":
                                    $("#sf-service-slideshow-infobar-date").html(ay);
                                    break;
                                case"INDEX":
                                    $("#sf-service-slideshow-infobar-index").html(ay);
                                    break
                            }
                        });
                        break;
                    case"HELPBAR":
                        $("#sf-service-slideshow-helpbar").sfKeyHelp(av);
                        break;
                    default:
                        break
                }
            };
            var ar = "sf-service-slideshow-infobar-state-play";
            var at = "sf-service-slideshow-infobar-state-pause"
        }
    }
})(sf);
(function (j) {
    var a = {PL_APPCOMMON_MESSAGE_XML_INPUT: 46, pluginAppCommon: null};
    j.service.SmartRemote = {
        init: function (s) {
            a.pluginAppCommon = j.core.plugin("AppCommon");
            a.pluginAppCommon.OnMessage = s;
            a.pluginAppCommon.SubscribeEvent(a.PL_APPCOMMON_MESSAGE_XML_INPUT)
        }, destroy: function () {
            a.pluginAppCommon.UnsubscribeEvent(a.PL_APPCOMMON_MESSAGE_XML_INPUT)
        }, parse: function (u) {
            var t = u.split("/");
            var s = t[1];
            for (i = 2; i < t.length; i++) {
                s = s + "/" + t[i]
            }
            if (window.DOMParser) {
                parser = new DOMParser();
                xmlDoc = parser.parseFromString(s, "text/xml")
            } else {
                xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                xmlDoc.async = "false";
                xmlDoc.loadXML(s)
            }
            return xmlDoc
        }, sendSourceItem: function (s, v) {
            var u = "";
            u = e(u, v);
            if (s.constructor == Array) {
                for (var t = 0; t < s.length; t++) {
                    u = n(u, s[t].type, s[t].typeDefault, s[t].identifier, s[t].title, s[t].description, s[t].image, s[t].onClick, s[t].onTrue, s[t].onFalse, s[t].multiTitles, s[t].multiURLs, s[t].typeVoice, s[t].voiceSelect, s[t].typeItems, s[t].typeMode, s[t].titlelinebreak, s[t].desclinebreak, s[t].multiIcons, s[t].multiTitlesHead, s[t].multiURLsHead, s[t].multiSizeHead, s[t].multiTitlesRow, s[t].multiURLsRow, s[t].multiSizeRow, s[t].multiSelectFlag, s[t].selectType, s[t].selectflag)
                }
            } else {
                u = n(u, s.type, s.typeDefault, s.identifier, s.title, s.description, s.image, s.onClick, s.onTrue, s.onFalse, s.multiTitles, s.multiURLs, s.typeVoice, s.voiceSelect, s.typeItems, s.typeMode, s.titlelinebreak, s.desclinebreak, s.multiIcons, s.multiTitlesHead, s.multiURLsHead, s.multiSizeHead, s.multiTitlesRow, s.multiURLsRow, s.multiSizeRow, s.multiSelectFlag, s.selectType, s.selectflag)
            }
            u = o(u);
            a.pluginAppCommon.SendEvent_XML_Sync(u)
        }, sendMenuItem: function (s) {
            var u = "";
            u = g(u);
            if (s.constructor == Array) {
                for (var t = 0; t < s.length; t++) {
                    u = l(u, s[t].identifier, s[t].type, s[t].title, s[t].name, s[t].icon, s[t].onClick, s[t].onEvent, s[t].onHistory, s[t].multiTitles, s[t].multiURLs, s[t].hiddenTitles, s[t].hiddenURLs)
                }
            } else {
                u = l(u, s.identifier, s.type, s.title, s.name, s.icon, s.onClick, s.onEvent, s.onHistory, s.multiTitles, s.multiURLs, s.hiddenTitles, s.hiddenURLs)
            }
            u = p(u);
            a.pluginAppCommon.SendEvent_XML_Sync(u)
        }, showPopup: function (s) {
            var t = "";
            t = h(t);
            t = f(t, s.title, s.descr, s.buttonNames, s.buttonURLs);
            t = d(t);
            a.pluginAppCommon.SendEvent_XML_Sync(t)
        }, hidePopup: function () {
            var s = "";
            s = h(s);
            s = q(s);
            s = d(s);
            a.pluginAppCommon.SendEvent_XML_Sync(s)
        }, showLoading: function (s) {
            var t = "";
            t = k(t);
            t = c(t, s.title);
            t = r(t);
            a.pluginAppCommon.SendEvent_XML_Sync(t)
        }, hideLoading: function () {
            var s = "";
            s = k(s);
            s = b(s);
            s = r(s);
            a.pluginAppCommon.SendEvent_XML_Sync(s)
        }, readFile: function (t) {
            var u = t;
            var s;
            if (window.XMLHttpRequest) {
                s = new XMLHttpRequest()
            } else {
                s = new ActiveXObject("Microsoft.XMLHTTP")
            }
            s.open("GET", u, false);
            s.send();
            return s.responseText
        }, webControl: function (t) {
            var s = e(s, t.menuId);
            if (t.userId != "") {
                s += "<user_identifier>" + t.userId + "</user_identifier>"
            }
            if (t.backKey != "") {
                s += "<backKey>" + t.backKey + "</backKey>"
            }
            s = o(s);
            s = s + t.webData;
            a.pluginAppCommon.SendEvent_XML_Sync(s)
        }
    };
    function m(s) {
        if (s != null && s != "") {
            s = s.replace(/&/gi, "&amp;");
            s = s.replace(/</gi, "&lt;");
            s = s.replace(/>/gi, "&gt;");
            s = s.replace(/\n/gi, "\r\n");
            s = s.replace(/\f/gi, "");
            s = s.replace(/\r/gi, "");
            s = s.replace(/\t/gi, "");
            s = s.replace(/" "/gi, "");
            s = s.replace(//gi, "")
        }
        return s
    }

    function e(s, t) {
        s = "<source><menuID>" + t + "</menuID>";
        return s
    }

    function n(D, w, N, t, V, K, G, x, L, I, z, C, E, U, u, T, B, H, A, R, O, s, y, F, P, Q, S, v) {
        V = m(V);
        K = m(K);
        G = m(G);
        x = m(x);
        L = m(L);
        I = m(I);
        if (w != "table" && S != null && S != "") {
            D = D + "<select>" + S + "</select>"
        }
        D = D + "<sourceItem>";
        if (w != null && w != "") {
            if (N != null && N != "") {
                D = D + '<type default="' + N + '">' + w + "</type>"
            } else {
                if (w != "table" && v != null && v != "") {
                    D = D + '<type selected="' + v + '">' + w + "</type>"
                } else {
                    if (E != null && E != "") {
                        if (U != null && U != "") {
                            D = D + '<type voice="' + E + '" voice_select="' + U + '">' + w + "</type>"
                        } else {
                            D = D + '<type voice="' + E + '">' + w + "</type>"
                        }
                    } else {
                        if (u != null && u != "") {
                            D = D + '<type items="' + u + '">' + w + "</type>"
                        } else {
                            if (T != null && T != "") {
                                D = D + '<type mode="' + T + '">' + w + "</type>"
                            } else {
                                D = D + "<type>" + w + "</type>"
                            }
                        }
                    }
                }
            }
        }
        if (t != null && t != "") {
            D = D + "<identifier>" + t + "</identifier>"
        }
        if (V != null && V != "") {
            if (B != null && B != "") {
                D = D + '<title linebreak="' + B + '">' + V + "</title>"
            } else {
                D = D + "<title>" + V + "</title>"
            }
        }
        if (K != null && K != "") {
            if (H != null && H != "") {
                D = D + '<description linebreak="' + H + '">' + K + "</description>"
            } else {
                D = D + "<description>" + K + "</description>"
            }
        }
        if (G != null && G != "") {
            D = D + "<image>" + G + "</image>"
        }
        if (x != null && x != "") {
            D = D + "<onClick>" + x + "</onClick>"
        }
        if (L != null && L != "") {
            D = D + "<onTrue>" + L + "</onTrue>"
        }
        if (I != null && I != "") {
            D = D + "<onFalse>" + I + "</onFalse>"
        }
        if (z != null && z.length > 0) {
            D = D + "<multiTitles>";
            for (var M = 0; M < z.length; M++) {
                if (w == "combobox" && A && A[M] != undefined && A[M] != null) {
                    D = D + '<title icon ="' + A[M] + '">' + z[M] + "</title>"
                } else {
                    D = D + "<title>" + z[M] + "</title>"
                }
            }
            D = D + "</multiTitles>"
        }
        if (C != null && C.length > 0) {
            D = D + "<multiURLs>";
            for (var M = 0; M < C.length; M++) {
                D = D + "<url>" + C[M] + "</url>"
            }
            D = D + "</multiURLs>"
        }
        if (w == "table") {
            if (S != null && S != "") {
                D = D + '<table select="' + S + '">'
            } else {
                D = D + "<table>"
            }
            if (R != null && R.length > 0) {
                D = D + "<head>";
                for (var M = 0; M < R.length; M++) {
                    if (s && s[M] != undefined && s[M] != null) {
                        D = D + '<col size="' + s[M] + '">'
                    } else {
                        D = D + "<col>"
                    }
                    if (R && R[M] != undefined && R[M] != null) {
                        R[M] = m(R[M]);
                        D = D + "<title>" + R[M] + "</title>"
                    }
                    if (O && O[M] != undefined && O[M] != null) {
                        D = D + "<url>" + O[M] + "</url>"
                    }
                    D = D + "</col>"
                }
                D = D + "</head>"
            }
            if (y != null && y.length > 0) {
                for (var M = 0; M < y.length; M++) {
                    D = D + "<row>";
                    if (S != null && S != "") {
                        D = D + "<selected>";
                        if (Q && Q[M] != undefined && Q[M] != null) {
                            D = D + Q[M]
                        }
                        D = D + "</selected>"
                    }
                    for (var J = 0; J < y[M].length; J++) {
                        if (P && P[M] != undefined && P[M][J] != null) {
                            D = D + '<col size="' + P[M][J] + '">'
                        } else {
                            D = D + "<col>"
                        }
                        if (y && y[M] != undefined && y[M][J] != null) {
                            y[M][J] = m(y[M][J]);
                            D = D + "<title>" + y[M][J] + "</title>"
                        }
                        if (F && F[M] != undefined && F[M][J] != null) {
                            D = D + "<url>" + F[M][J] + "</url>"
                        }
                        D = D + "</col>"
                    }
                    D = D + "</row>"
                }
            }
            D = D + "</table>"
        }
        D = D + "</sourceItem>";
        return D
    }

    function o(s) {
        s = s + "</source>";
        return s
    }

    function g(s) {
        s = "<menu>";
        return s
    }

    function l(C, w, x, A, s, z, y, B, v, E, u, t, D) {
        A = m(A);
        s = m(s);
        z = m(z);
        y = m(y);
        B = m(B);
        v = m(v);
        C = C + "<menuItem>";
        if (w != null && w != "") {
            C = C + "<identifier>" + w + "</identifier>"
        }
        if (x != null && x != "") {
            C = C + "<type>" + x + "</type>"
        }
        if (A != null && A != "") {
            C = C + "<title>" + A + "</title>"
        }
        if (s != null && s != "") {
            C = C + "<name>" + s + "</name>"
        }
        if (z != null && z != "") {
            C = C + "<icon>" + z + "</icon>"
        }
        if (y != null && y != "") {
            C = C + "<onClick>" + y + "</onClick>"
        }
        if (B != null && B != "") {
            C = C + "<onEvent>" + B + "</onEvent>"
        }
        if (v != null && v != "") {
            C = C + "<onHistory>" + v + "</onHistory>"
        }
        if (E != null && E.length > 0) {
            C = C + "<multiTitles>";
            for (i = 0; i < E.length; i++) {
                C = C + "<title>" + E[i] + "</title>"
            }
            C = C + "</multiTitles>"
        }
        if (u != null && u.length > 0) {
            C = C + "<multiURLs>";
            for (i = 0; i < u.length; i++) {
                C = C + "<url>" + u[i] + "</url>"
            }
            C = C + "</multiURLs>"
        }
        if (t != null && t.length > 0) {
            C = C + "<hiddenTitles>";
            for (i = 0; i < t.length; i++) {
                C = C + "<title>" + t[i] + "</title>"
            }
            C = C + "</hiddenTitles>"
        }
        if (D != null && D.length > 0) {
            C = C + "<hiddenURLs>";
            for (i = 0; i < D.length; i++) {
                C = C + "<url>" + D[i] + "</url>"
            }
            C = C + "</hiddenURLs>"
        }
        C = C + "</menuItem>";
        return C
    }

    function p(s) {
        s = s + "</menu>";
        return s
    }

    function h(s) {
        s = "<message>";
        return s
    }

    function f(u, w, v, s, t) {
        w = m(w);
        v = m(v);
        if (w != null && w != "") {
            u = u + "<title>" + w + "</title>"
        }
        if (v != null && v != "") {
            u = u + "<text>" + v + "</text>"
        }
        if (s != null && s.length > 0) {
            u = u + "<buttonNames>";
            for (i = 0; i < s.length; i++) {
                u = u + "<name>" + s[i] + "</name>"
            }
            u = u + "</buttonNames>"
        }
        if (t != null && t.length > 0) {
            u = u + "<buttonURLs>";
            for (i = 0; i < t.length; i++) {
                u = u + "<onClick>" + t[i] + "</onClick>"
            }
            u = u + "</buttonURLs>"
        }
        return u
    }

    function d(s) {
        s = s + "</message>";
        return s
    }

    function q(s) {
        s = s;
        s = s + "<action>";
        s = s + "close";
        s = s + "</action>";
        return s
    }

    function k(s) {
        s = s + "<loading>";
        return s
    }

    function c(s, t) {
        t = m(t);
        if (t != null && t != "") {
            s = s + "<title>" + t + "</title>";
            s = s + "<type>open</type>"
        } else {
            s = s + "<type>openbg</type>"
        }
        return s
    }

    function r(s) {
        s = s + "</loading>";
        return s
    }

    function b(s) {
        s = s + "<type>";
        s = s + "close";
        s = s + "</type>";
        return s
    }
})(sf);
(function (r) {
    r.service.USB = {
        handleUSBEvent: function (ad) {
            V()
        }, show: function (ae) {
            $.each(ae, function (ag, ah) {
                if (typeof k[ag] == "function") {
                    if (typeof ah == "string") {
                        ah = ah.toLowerCase()
                    }
                    k[ag](ah)
                }
            });
            e();
            var af = {zIndex: 100, fileSelType: "multi",};
            opts = $.extend(af, ae);
            $("#sf-service-usb-bg-dim").css({"z-index": Number(opts.zIndex)});
            $("#sf-service-usb").css({"z-index": Number(opts.zIndex) + 10});
            $("#sf-service-usb-cantSel-popup").css({"z-index": Number(opts.zIndex) + 30});
            if (opts.fileSelType == "single") {
                R = "single"
            } else {
                R = "multi"
            }
            P();
            var ad = deviceapis.application.getPopupOpacity();
            alert("Popup opacity: " + ad);
            if (ad > 0 && ad <= 1) {
                $("#sf-service-usb-bg-up-l-alpha").css({opacity: ad});
                $("#sf-service-usb-bg-up-c-alpha").css({opacity: ad});
                $("#sf-service-usb-bg-up-r-alpha").css({opacity: ad});
                $("#sf-service-usb-bg-mid-l-alpha").css({opacity: ad});
                $("#sf-service-usb-bg-mid-c-alpha").css({opacity: ad});
                $("#sf-service-usb-bg-mid-r-alpha").css({opacity: ad});
                $("#sf-service-usb-bg-bottom-l-alpha").css({opacity: ad});
                $("#sf-service-usb-bg-bottom-c-alpha").css({opacity: ad});
                $("#sf-service-usb-bg-bottom-r-alpha").css({opacity: ad})
            }
            b.show()
        }, hide: function () {
            if (r.scene._isSceneArchUsed() && C) {
                r.scene.removeKeyHandler(C)
            } else {
                r.scene.returnFocus()
            }
            sp.UnsubscribeEvent(ab);
            sp.UnsubscribeEvent(p);
            b.hide();
            J(null)
        }
    };
    var C = null;
    var c = null;
    var J = null;
    var q = null;
    var ac = new Array("png", "jpg", "bmp", "gif");
    var M = new Array("txt", "gul");
    var W = new Array("avi", "wma", "mp4", "wmv");
    var Z = new Array("mp3");
    var ab = 1;
    var p = 0;
    var D = true;
    var v = 5;
    var n = 0;
    var j = 0;
    var a = 0;
    var t = false;
    var s = 1;
    var y = 1;
    var o = 0;
    var L = 0;
    var Q = 0;
    var O = 0;
    var A = false;
    var R = null;
    var G = 0;
    var m = 0;
    var z = {};
    var d = null;
    var T = null;
    var f = null;
    var l = new Array();
    var w = new FileSystem();
    var K = null;
    var H = new Array();
    var x = new Array();
    var aa = new Array();
    var b = null;
    var k = {
        callback: function (ad) {
            if (typeof ad == "function") {
                J = ad
            } else {
                alert("[AF usb] value must be a Function.")
            }
        }, fileType: function (ad) {
            if (typeof ad == "string") {
                if (ad == "image") {
                    c = "image"
                } else {
                    if (ad == "text") {
                        c = "text"
                    } else {
                        if (ad == "video") {
                            c = "video"
                        } else {
                            if (ad == "music") {
                                c = "music"
                            } else {
                                if (ad == "all") {
                                    c = "all"
                                } else {
                                    alert("[AF usb] Not Supported type")
                                }
                            }
                        }
                    }
                }
            } else {
                if (typeof ad == "object") {
                    c = "other";
                    q = ad
                } else {
                    alert("[AF usb] Not Supported string/Array type")
                }
            }
        },
    };

    function e() {
        d = null;
        T = null;
        f = null;
        l = new Array();
        w = new FileSystem();
        K = null;
        H = new Array();
        x = new Array();
        aa = new Array();
        b = new X();
        np = r.core.plugin("NNavi");
        if (np) {
            var ad = np.GetFirmware();
            if ("T-INFOLINK2011-9999" < ad) {
                t = true
            }
        }
        G = r.env.getScreenSize();
        $('<a href="javascript:void(0);" id="' + B + '"></a>').appendTo("body");
        D = true
    }

    function P() {
        sp = r.core.plugin("Storage");
        sp.OnMessage = sfUsbEvent;
        sp.SubscribeEvent(ab);
        sp.SubscribeEvent(p);
        nSize = sp.GetUSBListSize();
        var ag = 0;
        var an = 1;
        var ad = {};
        var ae = 0;
        alert("[AF usb] GetUSBListSize :" + nSize);
        for (var aj = 0; aj < nSize; aj++) {
            var ak = sp.GetUSBDeviceID(aj);
            var al = sp.GetUSBModelName(ak);
            for (var am in ad) {
                if (al == ad[am].deviceName) {
                    an++
                }
            }
            ad[aj] = {deviceName: al, deviceNum: an};
            an = 1
        }
        for (var aj = 0; aj < nSize; aj++) {
            var ak = sp.GetUSBDeviceID(aj);
            var al = sp.GetUSBModelName(ak);
            var af = sp.GetUSBPartitionNum(ak);
            for (var am in ad) {
                if (al == ad[am].deviceName) {
                    ae++
                }
            }
            if (ae > 1) {
                var ai = al + "&nbsp;" + ad[aj].deviceNum
            } else {
                var ai = al
            }
            ae = 0;
            for (var ah = 0; ah < af; ah++) {
                var ao = ah + 1;
                x[ag] = {};
                if (af >= 2) {
                    x[ag].DeviceName = ai + "&nbsp;&nbsp;(" + ao + ")"
                } else {
                    x[ag].DeviceName = ai
                }
                x[ag].mountPath = sp.GetUSBMountPath(ak, ah);
                alert("[AF USB] aUsbNum[" + ag + "].mountPath : " + x[ag].mountPath);
                x[ag].availSize = sp.GetUSBAvailSize(ak, ah);
                x[ag].totalSize = sp.GetUSBTotalSize(ak, ah);
                ag++
            }
        }
        if (nSize <= 0) {
            b.initTextView();
            A = false;
            E = false;
            $("#sf-service-usb-focus").hide();
            $("#sf-service-usb-NoConnected").html("" + r.lang.SID_USB_IS_NOT_CONNECTED);
            $("#sf-service-usb-size").html("");
            $("#sf-service-usb-label").html("");
            $("#sf-service-usb-scroll").hide();
            $("#sf-service-usb-text-arrowUp").hide();
            $("#sf-service-usb-text-arrowDown").hide();
            $("#sf-service-usb-cancelbutton-l").attr("class", "sf-service-usb-button-focus-1");
            $("#sf-service-usb-cancelbutton-c").attr("class", "sf-service-usb-button-focus-c");
            $("#sf-service-usb-cancelbutton-r").attr("class", "sf-service-usb-button-focus-r")
        } else {
            $("#sf-service-usb-NoConnected").html("");
            A = true;
            E = true
        }
    }

    function V() {
        P();
        for (var af = 1; af <= v; af++) {
            $("#sf-service-usb-item" + af).empty()
        }
        if (nSize <= 0) {
            D = true;
            aa = new Array();
            A = false;
            E = false;
            $("#sf-service-usb-focus").hide();
            $("#sf-service-usb-NoConnected").html("" + r.lang.SID_USB_IS_NOT_CONNECTED);
            $("#sf-service-usb-label").html("");
            $("#sf-service-usb-size").html("");
            $("#sf-service-usb-scroll").hide();
            $("#sf-service-usb-text-arrowUp").hide();
            $("#sf-service-usb-text-arrowDown").hide();
            $("#sf-service-usb-cancelbutton-l").attr("class", "sf-service-usb-button-focus-1");
            $("#sf-service-usb-cancelbutton-c").attr("class", "sf-service-usb-button-focus-c");
            $("#sf-service-usb-cancelbutton-r").attr("class", "sf-service-usb-button-focus-r")
        } else {
            $("#sf-service-usb-NoConnected").html("");
            D = true;
            A = true;
            x = new Array();
            aa = new Array();
            P();
            U();
            b.setTextView(y);
            var ad = x[s - 1].totalSize / 1048576;
            var ag = x[s - 1].availSize / 1048576;
            var ae = ad - ag;
            if (t) {
                $("#sf-service-usb-size").html("" + ae.toFixed(2) + "GB / " + ad.toFixed(2) + "GB")
            } else {
                $("#sf-service-usb-size").html("")
            }
            $("#sf-service-usb-okbutton-l").attr("class", "sf-service-usb-button-nor-1");
            $("#sf-service-usb-okbutton-c").attr("class", "sf-service-usb-button-nor-c");
            $("#sf-service-usb-okbutton-r").attr("class", "sf-service-usb-button-nor-r");
            $("#sf-service-usb-cancelbutton-l").attr("class", "sf-service-usb-button-nor-1");
            $("#sf-service-usb-cancelbutton-c").attr("class", "sf-service-usb-button-nor-c");
            $("#sf-service-usb-cancelbutton-r").attr("class", "sf-service-usb-button-nor-r")
        }
    }

    function Y(af) {
        F = 0;
        if (D == true) {
            L = Math.ceil(x.length / v)
        } else {
            alert("[AF usb] Path:" + af);
            var ae = af.join("/");
            K = w.readDir(ae);
            var ad = new Array();
            var ag = 0;
            var ak = 0;
            for (var ah = 0; ah < K.length; ah++) {
                if (K[ah].isDir) {
                    var aj = new I(K[ah], 0);
                    if (ag > 0) {
                        if (H[ag - 1].fileInfo.name != aj.fileInfo.name) {
                            H[ag] = aj;
                            alert("[AF USB] ObjectList[" + ag + "] : " + H[ag].fileInfo.name);
                            ag++
                        }
                    } else {
                        H[ag] = aj;
                        alert("[AF USB] aObjectList[" + ag + "] : " + H[ag].fileInfo.name);
                        ag++
                    }
                }
            }
            ak = ag;
            for (var ah = 0; ah < K.length; ah++) {
                if (!K[ah].isDir) {
                    var aj = new I(K[ah], 0);
                    var ai = 0;
                    if (H[ag - 1].fileInfo.name != aj.fileInfo.name) {
                        if (aj.fileInfo.name != undefined) {
                            var al = aj.fileInfo.name.match(/\.(\w+)$/i);
                            if (al != null) {
                                al = al[1].toLowerCase()
                            }
                            if (c == "image") {
                                ai = $.inArray(al, ac)
                            } else {
                                if (c == "text") {
                                    ai = $.inArray(al, M)
                                } else {
                                    if (c == "video") {
                                        ai = $.inArray(al, W)
                                    } else {
                                        if (c == "music") {
                                            ai = $.inArray(al, Z)
                                        } else {
                                            if (c == "other") {
                                                ai = $.inArray(al, q)
                                            } else {
                                                if (c == "all") {
                                                    ai = 1
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            if (ai >= 0) {
                                H[ak] = aj;
                                alert("[AF USB] aObjectList[" + ak + "] : " + H[ak].fileInfo.name);
                                ak++
                            }
                        }
                    }
                }
            }
            L = Math.ceil((H.length - 1) / v)
        }
    }

    function u(ag) {
        n = parseFloat($("#sf-service-usb-scroll").css("height"), 10);
        var af = parseFloat($("#sf-service-usb-scroll-body-top").css("height"), 10);
        var ad = parseFloat($("#sf-service-usb-scroll-body-bottom").css("height"), 10);
        j = n / ag;
        var ae = j - (af + ad);
        if (ae <= 14) {
            ae = 14
        }
        $("#sf-service-usb-scroll-body-middle").css({height: ae});
        a = (n - (af + ad + ae)) / (ag - 1)
    }

    function I(ae, ad) {
        this.fileInfo = ae
    }

    function h() {
        for (var ad in z) {
            l.push(ad)
        }
    }

    function U() {
        $("#sf-service-usb-focus").hide();
        $("#sf-service-usb-scroll").hide();
        $("#sf-service-usb-text-arrowUp").hide();
        $("#sf-service-usb-text-arrowDown").hide();
        $("#sf-service-usb-focus").removeClass("sf-service-usb-focus-position" + g);
        b.initTextView();
        H = new Array();
        Y(aa);
        s = 1;
        o = 0;
        y = 1;
        N = 1;
        g = 0;
        z = {};
        $("#sf-service-usb-keyhelp").sfKeyHelp("show");
        b.setTextView(y);
        $("#sf-service-usb-item" + (g + 1) + "-label").css({color: "#ffba19"});
        $("#sf-service-usb-focus").addClass("sf-service-usb-focus-position" + g);
        $("#sf-service-usb-focus").show();
        if (L <= 1) {
            $("#sf-service-usb-scroll").hide();
            $("#sf-service-usb-text-arrowUp").hide();
            $("#sf-service-usb-text-arrowDown").hide()
        } else {
            $("#sf-service-usb-scroll").show();
            u(L)
        }
    }

    function X() {
        $('<div id="sf-service-usb"></div>').html(['<div id="sf-service-usb-bg"><div id="sf-service-usb-bg-up-l-alpha"></div><div id="sf-service-usb-bg-up-c-alpha"></div><div id="sf-service-usb-bg-up-r-alpha"></div><div id="sf-service-usb-bg-mid-l-alpha"></div><div id="sf-service-usb-bg-mid-c-alpha"></div><div id="sf-service-usb-bg-mid-r-alpha"></div><div id="sf-service-usb-bg-bottom-l-alpha"></div><div id="sf-service-usb-bg-bottom-c-alpha"></div><div id="sf-service-usb-bg-bottom-r-alpha"></div><div id="sf-service-usb-bg-up-l"></div><div id="sf-service-usb-bg-up-c"></div><div id="sf-service-usb-bg-up-r"></div><div id="sf-service-usb-bg-mid-l"></div><div id="sf-service-usb-bg-mid-c"></div><div id="sf-service-usb-bg-mid-r"></div><div id="sf-service-usb-bg-bottom-l"></div><div id="sf-service-usb-bg-bottom-c"></div><div id="sf-service-usb-bg-bottom-r"></div><div id="sf-service-usb-title">' + r.lang.SID_USB + '</div><div id="sf-service-usb-size"></div><div id="sf-service-usb-label"></div><div id="sf-service-usb-bg-line"></div><div id="sf-service-usb-okbutton"><div id="sf-service-usb-okbutton-l"></div><div id="sf-service-usb-okbutton-c">' + r.lang.SID_OK + '</div><div id="sf-service-usb-okbutton-r"></div></div><div id="sf-service-usb-cancelbutton"><div id="sf-service-usb-cancelbutton-l"></div><div id="sf-service-usb-cancelbutton-c">' + r.lang.SID_CANCEL + '</div><div id="sf-service-usb-cancelbutton-r"></div></div><div id="sf-service-usb-keyhelp"></div><div id="sf-service-usb-text"><div id="sf-service-usb-text-arrowUp"></div><div id="sf-service-usb-text-arrowDown"></div><div id="sf-service-usb-text-top-l"></div><div id="sf-service-usb-text-top-c"></div><div id="sf-service-usb-text-top-r"></div><div id="sf-service-usb-text-mid-l"></div><div id="sf-service-usb-text-mid-c"></div><div id="sf-service-usb-text-mid-r"></div><div id="sf-service-usb-text-bottom-l"></div><div id="sf-service-usb-text-bottom-c"></div><div id="sf-service-usb-text-bottom-r"></div><div id="sf-service-usb-focus"><div id="sf-service-usb-focus-l"></div><div id="sf-service-usb-focus-c"></div><div id="sf-service-usb-focus-r"></div></div><div id="sf-service-usb-item-label-length"></div><div id="sf-service-usb-scroll"><div id="sf-service-usb-scroll-bg"><div id="sf-service-usb-scroll-bg-top"></div><div id="sf-service-usb-scroll-bg-middle"></div><div id="sf-service-usb-scroll-bg-bottom"></div></div><div id="sf-service-usb-scroll-body"><div id="sf-service-usb-scroll-body-top"></div><div id="sf-service-usb-scroll-body-middle"></div><div id="sf-service-usb-scroll-body-bottom"></div></div></div><div id="sf-service-usb-NoConnected"></div></div></div>'].join("")).appendTo("body");
        $('<div id="sf-service-usb-bg-dim"></div>').appendTo("body");
        $('<div id="sf-service-usb-cantSel-popup"></div>').appendTo("body");
        $("#sf-service-usb-item1-checkbox").sfCheckBox();
        $("#sf-service-usb-item2-checkbox").sfCheckBox();
        $("#sf-service-usb-item3-checkbox").sfCheckBox();
        $("#sf-service-usb-item4-checkbox").sfCheckBox();
        $("#sf-service-usb-item5-checkbox").sfCheckBox();
        $("#sf-service-usb-cantSel-popup").hide();
        $("#sf-service-usb-keyhelp").sfKeyHelp({
            iconset: "GRAY",
            move: r.lang.SID_MOVE,
            enter: r.lang.SID_SELECT,
            "return": r.lang.SID_RETURN
        });
        this.show = function () {
            var ad = r.scene._isSceneArchUsed();
            if (r.scene._isSceneArchUsed()) {
                C = r.scene.pushKeyHandler(function (ae) {
                    r.service.USB.handleKeydown(ae)
                }, {context: "sf.service.USB"})
            } else {
                $("#" + B).focus();
                $("#" + B).bind("keydown", function () {
                    r.service.USB.handleKeydown(r.core.mapAliasedKeys(event.keyCode) || event.keyCode)
                }, false)
            }
            $("#sf-service-usb-okbutton").hide();
            S = false;
            if (G.height == 720) {
                m = 264;
                Q = 25;
                O = 48
            } else {
                if (G.height == 1080) {
                    m = 396;
                    Q = 42;
                    O = 67
                } else {
                    if (G.height == 540) {
                        m = 198;
                        Q = 22;
                        O = 36
                    }
                }
            }
            document.getElementById("sf-service-usb-cancelbutton").style.top = m + "px";
            $("#sf-service-usb-item" + (g + 1) + "-label").css({color: "#ffba19"});
            alert("[AF USB] $(window).height() :" + $(document).height());
            $("#sf-service-usb").css({
                top: ($(document).height() - $("#sf-service-usb").height()) / 2 + "px",
                left: ($(document).width() - $("#sf-service-usb").width()) / 2 + "px"
            });
            $("#sf-service-usb-cantSel-popup").css({
                top: ($(window).height() - $("#sf-service-usb-cantSel-popup").height()) / 2 + "px",
                left: ($(window).width() - $("#sf-service-usb-cantSel-popup").width()) / 2 + "px"
            });
            $("#sf-service-usb-okbutton-l").addClass("sf-service-usb-button-nor-1");
            $("#sf-service-usb-okbutton-c").addClass("sf-service-usb-button-nor-c");
            $("#sf-service-usb-okbutton-r").addClass("sf-service-usb-button-nor-r");
            $("#sf-service-usb-cancelbutton-l").addClass("sf-service-usb-button-nor-1");
            $("#sf-service-usb-cancelbutton-c").addClass("sf-service-usb-button-nor-c");
            $("#sf-service-usb-cancelbutton-r").addClass("sf-service-usb-button-nor-r");
            if (A) {
                $("#sf-service-usb-focus").show();
                Y(aa);
                b.setTextView(s);
                U()
            }
            $("#sf-service-usb").show()
        };
        this.hide = function () {
            aa = new Array();
            x = new Array();
            D = true;
            o = 0;
            $("#sf-service-usb-focus").removeClass("sf-service-usb-focus-position" + g);
            $("#sf-service-usb-item" + (g + 1) + "-label").css({color: "#ffffff"});
            $("#sf-service-usb-size").html("");
            $("#sf-service-usb-label").html("");
            $("#sf-service-usb-okbutton-l").removeClass();
            $("#sf-service-usb-okbutton-c").removeClass();
            $("#sf-service-usb-okbutton-r").removeClass();
            $("#sf-service-usb-cancelbutton-l").removeClass();
            $("#sf-service-usb-cancelbutton-c").removeClass();
            $("#sf-service-usb-cancelbutton-r").removeClass();
            z = {};
            $("#sf-service-usb").hide();
            $("#sf-service-usb-bg-dim").remove()
        };
        this.setTextView = function (ah) {
            b.selectedFile();
            var ag = ah + v;
            var ak;
            if (D == true) {
                $("#sf-service-usb-label").html("");
                if (ag > x.length) {
                    ag = x.length + 1
                }
                for (var aj = (ah - 1); aj < ag - 1; aj++) {
                    ak = (aj % v) + 1;
                    $("#sf-service-usb-text").append("<div id='sf-service-usb-item" + ak + "'  class='sf-service-usb-item-style'></div>");
                    $("#sf-service-usb-item" + ak).append("<div id='sf-service-usb-item" + ak + "-icon' class='sf-service-usb-item-icon-style'></div>");
                    $("#sf-service-usb-item" + ak).append("<div id='sf-service-usb-item" + ak + "-label' class='sf-service-usb-item-label-style'></div>");
                    var ae = x[s - 1].totalSize / 1048576;
                    var al = x[s - 1].availSize / 1048576;
                    var ai = ae - al;
                    if (t) {
                        $("#sf-service-usb-size").html("" + ai.toFixed(2) + "GB / " + ae.toFixed(2) + "GB")
                    } else {
                        $("#sf-service-usb-size").html("")
                    }
                    $("#sf-service-usb-label").html("" + x[s - 1].DeviceName);
                    $("#sf-service-usb-item" + ak + "-label").html("" + x[aj].DeviceName);
                    document.getElementById("sf-service-usb-item" + ak).style.top = (Q + (O * (ak - 1))) + "px";
                    $("#sf-service-usb-item" + ak + "-icon").addClass("sf-service-usb-item-icon-usb");
                    $("#sf-service-usb-item" + ak + "-icon").show()
                }
            } else {
                if (ag > H.length) {
                    ag = H.length
                }
                for (var aj = ah; aj < ag; aj++) {
                    ak = aj % v;
                    if (ak == 0) {
                        ak = v
                    }
                    $("#sf-service-usb-text").append("<div id='sf-service-usb-item" + ak + "'  class='sf-service-usb-item-style'></div>");
                    $("#sf-service-usb-item" + ak).append("<div id='sf-service-usb-item" + ak + "-icon' class='sf-service-usb-item-icon-style'></div>");
                    $("#sf-service-usb-item" + ak).append("<div id='sf-service-usb-item" + ak + "-checkbox' class='sf-service-usb-item-checkbox-style'></div>");
                    $("#sf-service-usb-item" + ak).append("<div id='sf-service-usb-item" + ak + "-label' class='sf-service-usb-item-label-style'></div>");
                    if (H[aj].fileInfo.isDir) {
                        $("#sf-service-usb-item" + ak + "-checkbox").sfCheckBox("hide");
                        if (H[aj].fileInfo.name == "..") {
                            $("#sf-service-usb-item" + ak + "-icon").addClass("sf-service-usb-item-icon-upFolder")
                        } else {
                            $("#sf-service-usb-item" + ak + "-icon").addClass("sf-service-usb-item-icon-folder")
                        }
                        $("#sf-service-usb-item" + ak + "-icon").show()
                    } else {
                        if (R == "multi") {
                            var ad = null;
                            var af = aa.join("/");
                            ad = af + "/" + H[aj].fileInfo.name;
                            $("#sf-service-usb-item" + ak + "-checkbox").sfCheckBox("show");
                            if (z[ad] !== undefined) {
                                $("#sf-service-usb-item" + ak + "-checkbox").sfCheckBox("check")
                            } else {
                                $("#sf-service-usb-item" + ak + "-checkbox").sfCheckBox("uncheck")
                            }
                        } else {
                            $("#sf-service-usb-item" + ak + "-checkbox").sfCheckBox("hide")
                        }
                        b.setIcon(ak, H[aj].fileInfo.name);
                        $("#sf-service-usb-item" + ak + "-icon").show()
                    }
                    if (H[aj].fileInfo.name == "..") {
                        $("#sf-service-usb-item" + ak + "-label").html("" + r.lang.SID_UPPER_FOLDER)
                    } else {
                        $("#sf-service-usb-item" + ak + "-label").html("" + H[aj].fileInfo.name)
                    }
                    document.getElementById("sf-service-usb-item" + ak).style.top = (Q + (O * (ak - 1))) + "px";
                    $("#sf-service-usb-item" + ak + "-label").addClass("sf-ui-common-ellipsis")
                }
            }
            if (L == 1) {
                $("#sf-service-usb-text-arrowUp").hide();
                $("#sf-service-usb-text-arrowDown").hide()
            } else {
                if (N == 1 && L != 1) {
                    $("#sf-service-usb-text-arrowUp").hide();
                    $("#sf-service-usb-text-arrowDown").show()
                } else {
                    if (N == L) {
                        $("#sf-service-usb-text-arrowUp").show();
                        $("#sf-service-usb-text-arrowDown").hide()
                    } else {
                        $("#sf-service-usb-text-arrowDown").show();
                        $("#sf-service-usb-text-arrowUp").show()
                    }
                }
            }
        };
        this.moveScroll = function (ad) {
            if (ad == "prev") {
                F = F - a;
                $("#sf-service-usb-scroll-body").css({top: F});
                if (F < 0) {
                    $("#sf-service-usb-scroll-body").css({top: "0"})
                }
            } else {
                if (ad == "next") {
                    F = F + a;
                    $("#sf-service-usb-scroll-body").css({top: F});
                    if (F >= n) {
                        F = F - a
                    }
                }
            }
        };
        this.setIcon = function (af, aj) {
            var ad = aj.match(/\.(\w+)$/i);
            var ai = 0;
            var ah = 0;
            var ae = 0;
            var ag = 0;
            if (ad != null) {
                ad = ad[1].toLowerCase();
                ai = $.inArray(ad, ac);
                ah = $.inArray(ad, M);
                ae = $.inArray(ad, W);
                ag = $.inArray(ad, Z);
                if (ai >= 0) {
                    $("#sf-service-usb-item" + af + "-icon").addClass("sf-service-usb-item-icon-image")
                } else {
                    if (ah >= 0) {
                        $("#sf-service-usb-item" + af + "-icon").addClass("sf-service-usb-item-icon-text")
                    } else {
                        if (ae >= 0) {
                            $("#sf-service-usb-item" + af + "-icon").addClass("sf-service-usb-item-icon-video")
                        } else {
                            if (ag >= 0) {
                                $("#sf-service-usb-item" + af + "-icon").addClass("sf-service-usb-item-icon-music")
                            } else {
                                alert("[AF usb] NOT found!!");
                                $("#sf-service-usb-item" + af + "-icon").addClass("sf-service-usb-item-icon-File")
                            }
                        }
                    }
                }
            } else {
                $("#sf-service-usb-item" + af + "-icon").addClass("sf-service-usb-item-icon-File")
            }
        };
        this.selectedFile = function () {
            o = 0;
            $("#sf-service-usb-label").html("");
            if (R == "multi") {
                for (var ad in z) {
                    o++
                }
                if (o == 0) {
                    $("#sf-service-usb-label").html(r.lang.SID_MIX_FILE_SELECTED.replace(/\<\<A\>\>/g, "0"));
                    $("#sf-service-usb-keyhelp").sfKeyHelp({
                        iconset: "GRAY",
                        move: r.lang.SID_MOVE,
                        enter: r.lang.SID_SELECT,
                        "return": r.lang.SID_RETURN
                    })
                } else {
                    if (o != 0) {
                        $("#sf-service-usb-keyhelp").sfKeyHelp({
                            iconset: "GRAY",
                            red: r.lang.SID_DESELECT_ALL,
                            move: r.lang.SID_MOVE,
                            enter: r.lang.SID_SELECT,
                            "return": r.lang.SID_RETURN
                        });
                        if (o == 1) {
                            $("#sf-service-usb-label").html(r.lang.SID_MIX_FILE_SELECTED.replace(/\<\<A\>\>/g, "1"))
                        } else {
                            $("#sf-service-usb-label").html(r.lang.SID_MIX_FILES_SELECTED_MSG.replace(/\<\<A\>\>/g, o))
                        }
                    }
                }
            }
        };
        this.initTextView = function () {
            E = true;
            if (R == "single") {
                S = false
            } else {
                S = true
            }
            $("#sf-service-usb-scroll-body").css({top: "0"});
            $("#sf-service-usb-label").html("");
            for (var ad = 1; ad <= v; ad++) {
                $("#sf-service-usb-item" + ad).empty()
            }
        };
        this.setCheckbox = function (af) {
            var ae = null;
            var ad = aa.join("/");
            ae = ad + "/" + H[s].fileInfo.name;
            if (z[ae] !== undefined) {
                $("#sf-service-usb-item" + (af + 1) + "-checkbox").sfCheckBox("uncheck");
                delete z[ae]
            } else {
                if (o <= 99) {
                    $("#sf-service-usb-item" + (af + 1) + "-checkbox").sfCheckBox("check");
                    z[ae] = 1
                } else {
                    setTimeout(function () {
                        $("#sf-service-usb-cantSel-popup").sfPopup({
                            text: r.lang.COM_CANT_SELECT_MORE_THAN_100_FILES_MSG,
                            buttons: "OK",
                            callback: function (ag) {
                                alert("show popup")
                            }
                        }).sfPopup("show")
                    }, 100)
                }
            }
        }
    }

    var B = "sf-service-usb";
    var z = {};
    var g = 0;
    var E = true;
    var S = true;
    var N = 1;
    var F = 0;
    r.service.USB.handleKeydown = function (al) {
        al = al || event.keyCode;
        alert("[AF ui] sfPopup keyctl(" + al + ")");
        switch (al) {
            case r.key.LEFT:
                if (A) {
                    if (E == true) {
                        $("#sf-service-usb-focus").hide();
                        $("#sf-service-usb-item" + (g + 1) + "-label").marquee(false);
                        $("#sf-service-usb-item" + (g + 1) + "-label").addClass("sf-ui-common-ellipsis");
                        document.getElementById("sf-service-usb-item" + (g + 1) + "-label").scrollLeft = 0;
                        $("#sf-service-usb-item" + (g + 1) + "-label").css({color: "#ffffff"});
                        if (D) {
                            $("#sf-service-usb-cancelbutton-l").attr("class", "sf-service-usb-button-focus-1");
                            $("#sf-service-usb-cancelbutton-c").attr("class", "sf-service-usb-button-focus-c");
                            $("#sf-service-usb-cancelbutton-r").attr("class", "sf-service-usb-button-focus-r")
                        } else {
                            if (D == false && R == "multi") {
                                $("#sf-service-usb-okbutton-l").attr("class", "sf-service-usb-button-focus-1");
                                $("#sf-service-usb-okbutton-c").attr("class", "sf-service-usb-button-focus-c");
                                $("#sf-service-usb-okbutton-r").attr("class", "sf-service-usb-button-focus-r")
                            } else {
                                if (D == false && R == "single") {
                                    $("#sf-service-usb-cancelbutton-l").attr("class", "sf-service-usb-button-focus-1");
                                    $("#sf-service-usb-cancelbutton-c").attr("class", "sf-service-usb-button-focus-c");
                                    $("#sf-service-usb-cancelbutton-r").attr("class", "sf-service-usb-button-focus-r")
                                }
                            }
                        }
                        E = false
                    } else {
                        if (E == false) {
                            $("#sf-service-usb-okbutton-l").attr("class", "sf-service-usb-button-nor-1");
                            $("#sf-service-usb-okbutton-c").attr("class", "sf-service-usb-button-nor-c");
                            $("#sf-service-usb-okbutton-r").attr("class", "sf-service-usb-button-nor-r");
                            $("#sf-service-usb-cancelbutton-l").attr("class", "sf-service-usb-button-nor-1");
                            $("#sf-service-usb-cancelbutton-c").attr("class", "sf-service-usb-button-nor-c");
                            $("#sf-service-usb-cancelbutton-r").attr("class", "sf-service-usb-button-nor-r");
                            $("#sf-service-usb-focus").show();
                            var ad = document.getElementById("sf-service-usb-item-label-length");
                            var af = ad.offsetWidth;
                            var aj = parseFloat($("#sf-service-usb-item" + (g + 1) + "-label").css("width"), 10);
                            if (af >= aj) {
                                $("#sf-service-usb-item" + (g + 1) + "-label").marquee(true);
                                $("#sf-service-usb-item" + (g + 1) + "-label").removeClass("sf-ui-common-ellipsis")
                            }
                            $("#sf-service-usb-focus").addClass("sf-service-usb-focus-position" + g);
                            $("#sf-service-usb-item" + (g + 1) + "-label").css({color: "#ffba19"});
                            S = true;
                            E = true
                        }
                    }
                }
                break;
            case r.key.RIGHT:
                if (A) {
                    if (E == true) {
                        $("#sf-service-usb-focus").hide();
                        $("#sf-service-usb-item" + (g + 1) + "-label").marquee(false);
                        $("#sf-service-usb-item" + (g + 1) + "-label").addClass("sf-ui-common-ellipsis");
                        document.getElementById("sf-service-usb-item" + (g + 1) + "-label").scrollLeft = 0;
                        $("#sf-service-usb-item" + (g + 1) + "-label").css({color: "#ffffff"});
                        if (D) {
                            $("#sf-service-usb-cancelbutton-l").attr("class", "sf-service-usb-button-focus-1");
                            $("#sf-service-usb-cancelbutton-c").attr("class", "sf-service-usb-button-focus-c");
                            $("#sf-service-usb-cancelbutton-r").attr("class", "sf-service-usb-button-focus-r")
                        } else {
                            if (D == false && R == "multi") {
                                $("#sf-service-usb-okbutton-l").attr("class", "sf-service-usb-button-focus-1");
                                $("#sf-service-usb-okbutton-c").attr("class", "sf-service-usb-button-focus-c");
                                $("#sf-service-usb-okbutton-r").attr("class", "sf-service-usb-button-focus-r")
                            } else {
                                if (D == false && R == "single") {
                                    $("#sf-service-usb-cancelbutton-l").attr("class", "sf-service-usb-button-focus-1");
                                    $("#sf-service-usb-cancelbutton-c").attr("class", "sf-service-usb-button-focus-c");
                                    $("#sf-service-usb-cancelbutton-r").attr("class", "sf-service-usb-button-focus-r")
                                }
                            }
                        }
                        E = false
                    } else {
                        if (E == false) {
                            $("#sf-service-usb-focus").show();
                            var ad = document.getElementById("sf-service-usb-item-label-length");
                            var af = ad.offsetWidth;
                            var aj = parseFloat($("#sf-service-usb-item" + (g + 1) + "-label").css("width"), 10);
                            if (af >= aj) {
                                $("#sf-service-usb-item" + (g + 1) + "-label").marquee(true);
                                $("#sf-service-usb-item" + (g + 1) + "-label").removeClass("sf-ui-common-ellipsis")
                            }
                            $("#sf-service-usb-focus").addClass("sf-service-usb-focus-position" + g);
                            $("#sf-service-usb-item" + (g + 1) + "-label").css({color: "#ffba19"});
                            $("#sf-service-usb-okbutton-l").attr("class", "sf-service-usb-button-nor-1");
                            $("#sf-service-usb-okbutton-c").attr("class", "sf-service-usb-button-nor-c");
                            $("#sf-service-usb-okbutton-r").attr("class", "sf-service-usb-button-nor-r");
                            $("#sf-service-usb-cancelbutton-l").attr("class", "sf-service-usb-button-nor-1");
                            $("#sf-service-usb-cancelbutton-c").attr("class", "sf-service-usb-button-nor-c");
                            $("#sf-service-usb-cancelbutton-r").attr("class", "sf-service-usb-button-nor-r");
                            S = true;
                            E = true
                        }
                    }
                }
                break;
            case r.key.UP:
                if (E == true) {
                    $("#sf-service-usb-focus").removeClass("sf-service-usb-focus-position" + g);
                    $("#sf-service-usb-item" + (g + 1) + "-label").marquee(false);
                    $("#sf-service-usb-item" + (g + 1) + "-label").addClass("sf-ui-common-ellipsis");
                    document.getElementById("sf-service-usb-item" + (g + 1) + "-label").scrollLeft = 0;
                    $("#sf-service-usb-item" + (g + 1) + "-label").css({color: "#ffffff"});
                    s--;
                    if (nSize <= 0) {
                        s = 1;
                        g = 0
                    } else {
                        if (D == true || nSize <= 0) {
                            if (s < 1) {
                                s = 1
                            } else {
                                g--
                            }
                            var ae = x[s - 1].totalSize / 1048576;
                            var ak = x[s - 1].availSize / 1048576;
                            var ah = ae - ak;
                            if (t) {
                                $("#sf-service-usb-size").html("" + ah.toFixed(2) + "GB / " + ae.toFixed(2) + "GB")
                            } else {
                                $("#sf-service-usb-size").html("")
                            }
                            $("#sf-service-usb-label").html("" + x[s - 1].DeviceName);
                            $("#sf-service-usb-item-label-length").html("" + x[s - 1].DeviceName)
                        } else {
                            if (s < 1) {
                                s = 1
                            } else {
                                g--
                            }
                            $("#sf-service-usb-item-label-length").html("" + H[s].fileInfo.name)
                        }
                    }
                    if (g < 0) {
                        y = y - v;
                        if (y < 1) {
                            y = 1
                        }
                        if (N <= 1) {
                            N = 1;
                            g = 0
                        } else {
                            N--;
                            b.initTextView();
                            b.setTextView(y);
                            g = 4
                        }
                        b.moveScroll("prev")
                    }
                    $("#sf-service-usb-focus").addClass("sf-service-usb-focus-position" + g);
                    var ad = document.getElementById("sf-service-usb-item-label-length");
                    var af = ad.offsetWidth;
                    var aj = parseFloat($("#sf-service-usb-item" + (g + 1) + "-label").css("width"), 10);
                    if (af >= aj) {
                        $("#sf-service-usb-item" + (g + 1) + "-label").marquee(true);
                        $("#sf-service-usb-item" + (g + 1) + "-label").removeClass("sf-ui-common-ellipsis")
                    }
                    $("#sf-service-usb-focus").addClass("sf-service-usb-focus-position" + g);
                    $("#sf-service-usb-item" + (g + 1) + "-label").css({color: "#ffba19"})
                } else {
                    if (E == false && R == "multi" && D == false) {
                        if (S == true) {
                            $("#sf-service-usb-okbutton-l").attr("class", "sf-service-usb-button-nor-1");
                            $("#sf-service-usb-okbutton-c").attr("class", "sf-service-usb-button-nor-c");
                            $("#sf-service-usb-okbutton-r").attr("class", "sf-service-usb-button-nor-r");
                            $("#sf-service-usb-cancelbutton-l").attr("class", "sf-service-usb-button-focus-1");
                            $("#sf-service-usb-cancelbutton-c").attr("class", "sf-service-usb-button-focus-c");
                            $("#sf-service-usb-cancelbutton-r").attr("class", "sf-service-usb-button-focus-r");
                            S = false
                        } else {
                            if (S == false) {
                                $("#sf-service-usb-okbutton-l").attr("class", "sf-service-usb-button-focus-1");
                                $("#sf-service-usb-okbutton-c").attr("class", "sf-service-usb-button-focus-c");
                                $("#sf-service-usb-okbutton-r").attr("class", "sf-service-usb-button-focus-r");
                                $("#sf-service-usb-cancelbutton-l").attr("class", "sf-service-usb-button-nor-1");
                                $("#sf-service-usb-cancelbutton-c").attr("class", "sf-service-usb-button-nor-c");
                                $("#sf-service-usb-cancelbutton-r").attr("class", "sf-service-usb-button-nor-r");
                                S = true
                            }
                        }
                    }
                }
                break;
            case r.key.DOWN:
                if (E == true) {
                    $("#sf-service-usb-focus").removeClass("sf-service-usb-focus-position" + g);
                    $("#sf-service-usb-item" + (g + 1) + "-label").marquee(false);
                    $("#sf-service-usb-item" + (g + 1) + "-label").addClass("sf-ui-common-ellipsis");
                    document.getElementById("sf-service-usb-item" + (g + 1) + "-label").scrollLeft = 0;
                    $("#sf-service-usb-item" + (g + 1) + "-label").css({color: "#ffffff"});
                    s++;
                    if (nSize <= 0) {
                        s = 1;
                        g = 0
                    } else {
                        if (D == true) {
                            if (s > x.length) {
                                s = x.length
                            } else {
                                g++
                            }
                            var ae = x[s - 1].totalSize / 1048576;
                            var ak = x[s - 1].availSize / 1048576;
                            var ah = ae - ak;
                            if (t) {
                                $("#sf-service-usb-size").html("" + ah.toFixed(2) + "GB / " + ae.toFixed(2) + "GB")
                            } else {
                                $("#sf-service-usb-size").html("")
                            }
                            $("#sf-service-usb-label").html("" + x[s - 1].DeviceName);
                            $("#sf-service-usb-item-label-length").html("" + x[s - 1].DeviceName)
                        } else {
                            if (s > H.length - 1) {
                                s = H.length - 1
                            } else {
                                g++
                            }
                            $("#sf-service-usb-item-label-length").html("" + H[s].fileInfo.name)
                        }
                    }
                    if (g > 4) {
                        N++;
                        if (N > L) {
                            N = L;
                            g = 4
                        } else {
                            b.initTextView();
                            g = 0;
                            y = y + v;
                            b.setTextView(y)
                        }
                        b.moveScroll("next")
                    }
                    $("#sf-service-usb-focus").addClass("sf-service-usb-focus-position" + g);
                    var ad = document.getElementById("sf-service-usb-item-label-length");
                    var af = ad.offsetWidth;
                    var aj = parseFloat($("#sf-service-usb-item" + (g + 1) + "-label").css("width"), 10);
                    if (af >= aj) {
                        $("#sf-service-usb-item" + (g + 1) + "-label").marquee(true);
                        $("#sf-service-usb-item" + (g + 1) + "-label").removeClass("sf-ui-common-ellipsis")
                    }
                    $("#sf-service-usb-item" + (g + 1) + "-label").css({color: "#ffba19"})
                } else {
                    if (E == false && R == "multi" && D == false) {
                        if (S == true) {
                            $("#sf-service-usb-okbutton-l").attr("class", "sf-service-usb-button-nor-1");
                            $("#sf-service-usb-okbutton-c").attr("class", "sf-service-usb-button-nor-c");
                            $("#sf-service-usb-okbutton-r").attr("class", "sf-service-usb-button-nor-r");
                            $("#sf-service-usb-cancelbutton-l").attr("class", "sf-service-usb-button-focus-1");
                            $("#sf-service-usb-cancelbutton-c").attr("class", "sf-service-usb-button-focus-c");
                            $("#sf-service-usb-cancelbutton-r").attr("class", "sf-service-usb-button-focus-r");
                            S = false
                        } else {
                            if (S == false) {
                                $("#sf-service-usb-okbutton-l").attr("class", "sf-service-usb-button-focus-1");
                                $("#sf-service-usb-okbutton-c").attr("class", "sf-service-usb-button-focus-c");
                                $("#sf-service-usb-okbutton-r").attr("class", "sf-service-usb-button-focus-r");
                                $("#sf-service-usb-cancelbutton-l").attr("class", "sf-service-usb-button-nor-1");
                                $("#sf-service-usb-cancelbutton-c").attr("class", "sf-service-usb-button-nor-c");
                                $("#sf-service-usb-cancelbutton-r").attr("class", "sf-service-usb-button-nor-r");
                                S = true
                            }
                        }
                    }
                }
                break;
            case r.key.ENTER:
                if (E == true) {
                    if (D == true) {
                        if (nSize <= 0) {
                            alert("USB None")
                        } else {
                            alert("USB select");
                            if (G.height == 720) {
                                if (R == "single") {
                                    m = 264
                                } else {
                                    m = 287;
                                    S = true;
                                    $("#sf-service-usb-okbutton").show()
                                }
                            } else {
                                if (G.height == 1080) {
                                    if (R == "single") {
                                        m = 396
                                    } else {
                                        m = 441;
                                        S = true;
                                        $("#sf-service-usb-okbutton").show()
                                    }
                                } else {
                                    if (G.height == 540) {
                                        if (R == "single") {
                                            m = 198
                                        } else {
                                            m = 225;
                                            S = true;
                                            $("#sf-service-usb-okbutton").show()
                                        }
                                    }
                                }
                            }
                            document.getElementById("sf-service-usb-cancelbutton").style.top = m + "px";
                            f = "$USB_DIR/" + x[s - 1].mountPath;
                            var ae = x[s - 1].totalSize / 1048576;
                            var ak = x[s - 1].availSize / 1048576;
                            var ah = ae - ak;
                            if (t) {
                                $("#sf-service-usb-size").html("" + ah.toFixed(2) + "GB / " + ae.toFixed(2) + "GB")
                            } else {
                                $("#sf-service-usb-size").html("")
                            }
                            $("#sf-service-usb-label").html("" + x[s - 1].DeviceName);
                            aa.push(f);
                            D = false;
                            U()
                        }
                    } else {
                        if (H[s].fileInfo.name == "..") {
                            if (aa.join("") == f && H[s].fileInfo.isDir) {
                                if (H[s].fileInfo.isDir) {
                                    if (aa.join("") == f) {
                                        $("#sf-service-usb-okbutton").hide();
                                        S = false;
                                        if (G.height == 720) {
                                            m = 264
                                        } else {
                                            if (G.height == 1080) {
                                                m = 396
                                            } else {
                                                if (G.height == 540) {
                                                    m = 198
                                                }
                                            }
                                        }
                                        document.getElementById("sf-service-usb-cancelbutton").style.top = m + "px";
                                        aa = new Array();
                                        D = true
                                    } else {
                                        aa.push(H[s].fileInfo.name)
                                    }
                                    $("#sf-service-usb-focus").removeClass("sf-service-usb-focus-position" + g);
                                    $("#sf-service-usb-item" + (g + 1) + "-label").css({color: "#ffffff"});
                                    U()
                                }
                            } else {
                                if (H[s].fileInfo.isDir) {
                                    aa.pop();
                                    $("#sf-service-usb-focus").removeClass("sf-service-usb-focus-position" + g);
                                    $("#sf-service-usb-item" + (g + 1) + "-label").css({color: "#ffffff"});
                                    U()
                                }
                            }
                        } else {
                            if (H[s].fileInfo.isDir) {
                                aa.push(H[s].fileInfo.name);
                                $("#sf-service-usb-focus").removeClass("sf-service-usb-focus-position" + g);
                                $("#sf-service-usb-item" + (g + 1) + "-label").css({color: "#ffffff"});
                                U()
                            } else {
                                if (R == "multi") {
                                    b.setCheckbox(g);
                                    b.selectedFile()
                                } else {
                                    l = new Array();
                                    var ag = aa.join("/");
                                    l.push(ag + "/" + H[s].fileInfo.name);
                                    if (r.scene._isSceneArchUsed() && C) {
                                        r.scene.removeKeyHandler(C)
                                    } else {
                                        r.scene.returnFocus()
                                    }
                                    sp.UnsubscribeEvent(ab);
                                    sp.UnsubscribeEvent(p);
                                    b.hide();
                                    J(l)
                                }
                            }
                        }
                    }
                } else {
                    if (E == false) {
                        if (S == true) {
                            h();
                            alert("[AF USB] OnReturn : " + l);
                            alert("[AF USB] OnReturn2 : " + l.length);
                            if (r.scene._isSceneArchUsed() && C) {
                                r.scene.removeKeyHandler(C)
                            } else {
                                r.scene.returnFocus()
                            }
                            sp.UnsubscribeEvent(ab);
                            sp.UnsubscribeEvent(p);
                            b.hide();
                            if (l.length > 0) {
                                J(l)
                            } else {
                                J(null)
                            }
                        } else {
                            if (r.scene._isSceneArchUsed() && C) {
                                r.scene.removeKeyHandler(C)
                            } else {
                                r.scene.returnFocus()
                            }
                            sp.UnsubscribeEvent(ab);
                            sp.UnsubscribeEvent(p);
                            b.hide();
                            J(null)
                        }
                        l = new Array()
                    }
                }
                break;
            case r.key.RED:
                if (o != 0) {
                    z = {};
                    for (var ai = 1; ai <= v; ai++) {
                        $("#sf-service-usb-item" + ai + "-checkbox").sfCheckBox("uncheck")
                    }
                    o = 0;
                    b.selectedFile()
                }
                break;
            case r.key.RETURN:
            case r.key.EXIT:
                if (r.scene._isSceneArchUsed() && C) {
                    r.scene.removeKeyHandler(C)
                } else {
                    r.scene.returnFocus()
                }
                r.key.preventDefault();
                sp.UnsubscribeEvent(ab);
                sp.UnsubscribeEvent(p);
                b.hide();
                J(null);
                break
        }
    }
})(sf);
function sfUsbEvent(a) {
    alert("sfUsbEvent(" + a + ")");
    sf.service.USB.handleUSBEvent(a)
}
(function (aw) {
    aw.service.FileBrowser = {
        show: function (bP) {
            $.each(bP, function (bR, bS) {
                if (typeof ai[bR] == "function") {
                    if (typeof bS == "string") {
                        bS = bS.toLowerCase()
                    }
                    ai[bR](bS)
                }
            });
            bo = aw.core.plugin("NNavi");
            if (bo) {
                var bQ = bo.GetFirmware();
                alert("[AF Filebrowser] FirmwareVersion : " + bQ);
                if ("T-INFOLINK2011-9999" < bQ) {
                    M = true
                }
                if ("T-INFOLINK2012-9999" < bQ) {
                    O = "ThumbnailMgr";
                    deviceapis._plugin(O).OnEvent = d
                } else {
                    O = "ContentsMgr"
                }
                alert("[AF Filebrowser] sThumbnailPlugIn : " + O, 1)
            }
            if (M) {
                bb(bP);
                j();
                ac.initTextView();
                ac.setDeviceListView(q);
                ac.show()
            } else {
                aq = {};
                aw.service.USB.show({
                    callback: function (bZ) {
                        if (bZ != null) {
                            var bS = bZ[0].match(/^.*\//, "");
                            var bV = a4(bS);
                            for (var bT = 0; bT < bZ.length; bT++) {
                                var bR = bZ[bT];
                                var bX = bZ[bT].replace(/^.*\//, "");
                                var bW = 0;
                                if (bX in bV) {
                                    bW = bV[bX]
                                }
                                aq[bR] = {type: bP.fileType, filename: bX, size: bW}
                            }
                            var bU = {};
                            bU.state = "ok";
                            bU.selectedMedia = [];
                            for (var bY in aq) {
                                bU.selectedMedia.push({
                                    filepath: bY,
                                    type: aq[bY].type,
                                    filename: aq[bY].filename,
                                    filesize: aq[bY].size,
                                    source: "USB"
                                })
                            }
                            M = false;
                            p(bU)
                        } else {
                            var bU = {};
                            bU.state = "cancel";
                            M = false;
                            p(bU)
                        }
                    }, fileType: bP.fileType, fileSelType: bP.fileSelType
                })
            }
        }, hide: function () {
            if (M) {
                setTimeout(function () {
                    $("#sf-service-Filebrowser-file-loading").sfLoading("hide")
                }, 100);
                aa = true;
                alert("[AF Filebrowser] bReturnKeyFlag : " + aa);
                var bP = {};
                bP.state = "cancel";
                bj();
                deviceapis._plugin("ContentsMgr", "DestroyContentsMgr");
                if (aw.scene._isSceneArchUsed() && aM) {
                    aw.scene.removeKeyHandler(aM)
                } else {
                    aw.scene.returnFocus()
                }
                ab.hide();
                X = "main";
                ac.hide();
                p(bP)
            } else {
                aw.service.USB.hide()
            }
        }
    };
    var ac = null;
    var ab = null;
    var aM = null;
    var bo = null;
    var ar = null;
    var M = false;
    var bv = false;
    var av = false;
    var bK = false;
    var K = null;
    var ag = null;
    var e = null;
    var Z = null;
    var p = null;
    var aY = null;
    var g = new Array();
    var Y = true;
    var aO = true;
    var al = false;
    var aK = false;
    var bB = true;
    var aI = true;
    var ao = true;
    var br = false;
    var Q = 8;
    var aB = 1099511627776;
    var aH = 1073741824;
    var b = 1048576;
    var F = 1024;
    var bi = 45;
    var D = 35;
    var J = 12;
    var bO = 0;
    var aC = 3;
    var w = 4;
    var R = 11;
    var aW = 7;
    var a6 = 8;
    var an = 99;
    var a5 = 0;
    var y = 1;
    var bA = 3;
    var W = 4;
    var U = 0;
    var H = 0;
    var T = 2;
    var aD = 1;
    var B = 1;
    var aE = 7;
    var by = 1;
    var a1 = 2;
    var am = 0;
    var bI = 0;
    var aV = 1;
    var bt = 2;
    var bM = 3;
    var aX = 153;
    var ap = 165;
    var af = 202;
    var a7 = 170;
    var aS = 0;
    var bE = 0;
    var z = 0;
    var bw = 0;
    var bJ = 0;
    var ak = 0;
    var aR = 0;
    var bH = 0;
    var r = 0;
    var bs = 0;
    var bq = 0;
    var bm = 0;
    var aU = 0;
    var aA = 0;
    var a9 = 0;
    var G = 0;
    var m = new Array();
    var a = new Array();
    var q = 0;
    var at = null;
    var aN = 0;
    var bG = 0;
    var au = null;
    var aG = 1;
    var A = 0;
    var be = 0;
    var aQ = 0;
    var P = 0;
    var bk = 0;
    var bC = 0;
    var aP = 0;
    var s = 0;
    var V = 12;
    var bp = "/dtv/FamilyHub/";
    var f = 0;
    var aL = 0;
    var a0 = 0;
    var bz = 0;
    var I = new Array();
    var bl = 0;
    var v = 0;
    var S = new Array();
    var aF = new Array();
    var bN = true;
    var ad = true;
    var bu = [];
    var l = [];
    var L = 146;
    var E = 107;
    var n = 0;
    var bh = 0;
    var ba = 0;
    var ae = 0;
    var bn = 0;
    var bF = true;
    var aa = false;
    var bx = false;
    var ax = false;
    var O = null;
    var aq = {};
    var N = 0;
    var a8 = "sf-service-Filebrowser";
    var a3 = true;
    var x = 1;
    var a2 = 1;
    var X = "main";
    var bf = {};
    var ai = {
        callback: function (bP) {
            if (typeof bP == "function") {
                p = bP
            } else {
                alert("[AF Filebrowser] value must be a Function.")
            }
        }, fileType: function (bP) {
            if (typeof bP == "string") {
                if (bP == "image") {
                    s = H
                } else {
                    if (bP == "video") {
                        s = T
                    } else {
                        if (bP == "music") {
                            s = aD
                        } else {
                            alert("[AF Filebrowser] Not Supported type")
                        }
                    }
                }
            } else {
                if (typeof bP == "object") {
                    Z = "other"
                } else {
                    alert("[AF Filebrowser] Not Supported string/Array type")
                }
            }
        }
    };

    function bb(bQ) {
        mountPath = null;
        au = null;
        Y = true;
        aI = true;
        m = new Array();
        g = new Array();
        aFilepath = new Array();
        ac = new aZ();
        ab = new bd();
        aa = false;
        bx = false;
        N = 0;
        ar = aw.core.plugin("Storage");
        var bR = deviceapis._plugin("ContentsMgr", "CreateContentsMgr");
        alert("[AF Filebrowser]CreateContentsMgr : " + bR);
        deviceapis._plugin("ContentsMgr").OnEvent = d;
        $('<a href="javascript:void(0);" id="' + a8 + '"></a>').appendTo("body");
        aA = aw.env.getScreenSize();
        if (aA.height == 720) {
            bH = 48;
            L = 146;
            ap = 165;
            af = 202;
            a7 = 170;
            aS = -2;
            bE = -94;
            z = -206;
            bw = aS;
            bJ = -2;
            if (s == T || s == H) {
                aX = 153;
                bO = 53;
                E = 107
            } else {
                if (s == aD) {
                    aX = 192;
                    bO = 73;
                    aR = 23;
                    E = 146
                }
            }
        } else {
            if (aA.height == 1080) {
                bH = 72;
                L = 220;
                ap = 244;
                af = 300;
                a7 = 254;
                aS = -8;
                bE = -142;
                z = -308;
                bw = aS;
                bJ = -7;
                if (s == T || s == H) {
                    aX = 240;
                    bO = 86;
                    E = 160
                } else {
                    if (s == aD) {
                        aX = 300;
                        bO = 116;
                        aR = 40;
                        E = 220
                    }
                }
            } else {
                if (aA.height == 540) {
                    bH = 36;
                    L = 110;
                    ap = 122;
                    af = 148;
                    a7 = 126;
                    aS = -4;
                    bE = -71;
                    z = -154;
                    bw = aS;
                    bJ = -4;
                    if (s == T || s == H) {
                        aX = 120;
                        bO = 43;
                        E = 80
                    } else {
                        if (s == aD) {
                            aX = 150;
                            bO = 58;
                            aR = 20;
                            E = 110
                        }
                    }
                }
            }
        }
        var bS = {title: aw.lang.COM_FILE_BROWSER, zIndex: 100, fileSelType: "multi", deviceMode: "all"};
        ag = $.extend(bS, bQ);
        aY = ag.title;
        if (ag.fileSelType == "single") {
            e = "single"
        } else {
            e = "multi"
        }
        alert("[AF Filebrowser]opts.DeviceMode : " + ag.deviceMode);
        if (ag.deviceMode == "usb") {
            K = "usb"
        } else {
            K = "all"
        }
        if (s == H) {
            Z = "image"
        } else {
            if (s == T) {
                Z = "video"
            } else {
                if (s == aD) {
                    Z = "music"
                }
            }
        }
        $("#sf-sf-service-Filebrowser-main-bg-dim").css({"z-index": Number(ag.zIndex)});
        $("#sf-service-Filebrowser-main").css({"z-index": Number(ag.zIndex) + 10});
        $("#sf-service-Filebrowser-file").css({"z-index": Number(ag.zIndex) + 70});
        $("#sf-service-Filebrowser-main-scroll").css({"z-index": Number(ag.zIndex) + 50});
        $("#sf-service-Filebrowser-file-loading").css({"z-index": Number(ag.zIndex) + 90});
        $("#sf-service-Filebrowser-main-loading").css({"z-index": Number(ag.zIndex) + 60});
        $("#sf-service-Filebrowser-disconnectedDevicePopup").css({"z-index": Number(ag.zIndex) + 150});
        $("#sf-service-Filebrowser-selectAll").css({"z-index": Number(ag.zIndex) + 150});
        var bP = deviceapis.application.getPopupOpacity();
        alert("Popup opacity: " + bP);
        if (bP > 0 && bP <= 1) {
            $("#sf-service-Filebrowser-main-bg-up-l-alpha").css({opacity: bP});
            $("#sf-service-Filebrowser-main-bg-up-c-alpha").css({opacity: bP});
            $("#sf-service-Filebrowser-main-bg-up-r-alpha").css({opacity: bP});
            $("#sf-service-Filebrowser-main-bg-mid-l-alpha").css({opacity: bP});
            $("#sf-service-Filebrowser-main-bg-mid-c-alpha").css({opacity: bP});
            $("#sf-service-Filebrowser-main-bg-mid-r-alpha").css({opacity: bP});
            $("#sf-service-Filebrowser-main-bg-bottom-l-alpha").css({opacity: bP});
            $("#sf-service-Filebrowser-main-bg-bottom-c-alpha").css({opacity: bP});
            $("#sf-service-Filebrowser-main-bg-bottom-r-alpha").css({opacity: bP})
        }
    }

    function j() {
        nSize = ar.GetUSBListSize();
        var bS = 0;
        var b1 = 1;
        var bQ = {};
        var bR = 0;
        alert("[AF Filebrowser] GetUSBListSize :" + nSize);
        var b0 = deviceapis._plugin("ContentsMgr", "GetDeviceListNum");
        alert("[AF Filebrowser] GetDeviceListNum : " + b0);
        if ((nSize < 0 || b0 <= 1) && K == "usb") {
            aO = false;
            $("#sf-service-Filebrowser-main-message").html("" + aw.lang.COM_CONNECT_A_DEVICE_THAT_CONTAINS_FILES_TO_OPEN);
            $("#sf-service-Filebrowser-main-text-NoConnected").html("" + aw.lang.COM_BDP_SID_POPUP_MSG_NO_CONNECTED_DEV_OF_MYCONTENTS_TEXT)
        } else {
            if (b0 > 1) {
                aO = true;
                $("#sf-service-Filebrowser-main-text-NoConnected").html("");
                for (var bV = 1; bV < b0; bV++) {
                    var bY = deviceapis._plugin("ContentsMgr", "GetDeviceName", bV);
                    var bX = deviceapis._plugin("ContentsMgr", "GetDeviceType", bV);
                    if (K == "usb") {
                        if (bX == B) {
                            for (var bZ in bQ) {
                                if (bY == bQ[bZ].deviceName) {
                                    b1++
                                }
                            }
                            bQ[bV] = {deviceName: bY, deviceNum: b1}
                        }
                    } else {
                        for (var bZ in bQ) {
                            if (bY == bQ[bZ].deviceName) {
                                b1++
                            }
                        }
                        bQ[bV] = {deviceName: bY, deviceNum: b1}
                    }
                    b1 = 1
                }
                for (var bV = 1; bV < b0; bV++) {
                    var bY = deviceapis._plugin("ContentsMgr", "GetDeviceName", bV);
                    var bX = deviceapis._plugin("ContentsMgr", "GetDeviceType", bV);
                    var bW = deviceapis._plugin("ContentsMgr", "GetVenderName", bV);
                    var bP = deviceapis._plugin("ContentsMgr", "GetPartitionNum", bV);
                    if (bX == B) {
                        for (var bZ in bQ) {
                            if (bY == bQ[bZ].deviceName) {
                                bR++
                            }
                        }
                        if (bR > 1) {
                            var bU = bY + "&nbsp;" + bQ[bV].deviceNum
                        } else {
                            var bU = bY
                        }
                        bR = 0;
                        for (var bT = 0; bT < bP; bT++) {
                            g[bS] = {};
                            var b2 = bT + 1;
                            if (bP >= 2) {
                                g[bS].DeviceName = bU + "&nbsp;&nbsp;(" + b2 + ")"
                            } else {
                                g[bS].DeviceName = bU
                            }
                            g[bS].mountPath = deviceapis._plugin("ContentsMgr", "GetMountPath", bV, bT);
                            g[bS].partitionkey = deviceapis._plugin("ContentsMgr", "GetPartitionKey", bV, bT);
                            g[bS].deviceType = "USB";
                            alert("[AF Filebrowser] aDeviceNum[" + bS + "].mountPath : " + g[bS].mountPath);
                            alert("[AF Filebrowser] aDeviceNum[" + bS + "].partitionkey :" + g[bS].partitionkey);
                            alert("[AF Filebrowser] aDeviceNum[" + bS + "].DeviceName :" + g[bS].DeviceName);
                            bS++
                        }
                    }
                }
                if (K == "all") {
                    for (var bV = 1; bV < b0; bV++) {
                        var bY = deviceapis._plugin("ContentsMgr", "GetDeviceName", bV);
                        var bX = deviceapis._plugin("ContentsMgr", "GetDeviceType", bV);
                        var bW = deviceapis._plugin("ContentsMgr", "GetVenderName", bV);
                        var bP = deviceapis._plugin("ContentsMgr", "GetPartitionNum", bV);
                        if (bX == aE) {
                            for (var bT = 0; bT < bP; bT++) {
                                g[bS] = {};
                                var b2 = bT + 1;
                                if (bP >= 2) {
                                    g[bS].DeviceName = bY + "&nbsp;&nbsp;(" + b2 + ")"
                                } else {
                                    g[bS].DeviceName = bY
                                }
                                g[bS].mountPath = deviceapis._plugin("ContentsMgr", "GetMountPath", bV, bT);
                                g[bS].partitionkey = deviceapis._plugin("ContentsMgr", "GetPartitionKey", bV, bT);
                                g[bS].deviceType = "DLNA";
                                alert("[AF Filebrowser] aDeviceNum[" + bS + "].mountPath : " + g[bS].mountPath);
                                alert("[AF Filebrowser] aDeviceNum[" + bS + "].partitionkey :" + g[bS].partitionkey);
                                alert("[AF Filebrowser] aDeviceNum[" + bS + "].DeviceName :" + g[bS].DeviceName);
                                bS++
                            }
                        }
                    }
                }
            }
        }
        if (K == "all") {
            if (b0 <= 1) {
                aO = false;
                $("#sf-service-Filebrowser-main-message").html("" + aw.lang.COM_CONNECT_A_DEVICE_THAT_CONTAINS_FILES_TO_OPEN);
                $("#sf-service-Filebrowser-main-text-NoConnected").html("" + aw.lang.COM_BDP_SID_POPUP_MSG_NO_CONNECTED_DEV_OF_MYCONTENTS_TEXT)
            }
        }
        aN = Math.ceil(g.length / Q);
        if (aN <= 1) {
            $("#sf-service-Filebrowser-main-scroll").hide();
            ac.mainArrowView(x)
        } else {
            $("#sf-service-Filebrowser-main-scroll").show();
            ac.mainArrowView(x);
            h(aN)
        }
    }

    function ah(bS, bQ) {
        var bR = $("#sf-service-Filebrowser-file-text-Item").css("overflow");
        alert("[AF Filebrowser] overflow : " + bR);
        var bP = (typeof bS == "string") ? document.getElementById(bS) : bS;
        if (typeof bQ == "string") {
            bP.innerHTML += bQ
        } else {
            bP.appendChild(bQ)
        }
    }

    function C(bQ, bS, bP) {
        var bR = null;
        bR = document.createElement("img");
        bR.style.position = "absolute";
        bR.width = bS;
        bR.height = bP;
        bR.src = bQ;
        bR.style.overflow = "hidden";
        return bR
    }

    function h(bS) {
        bs = parseFloat($("#sf-service-Filebrowser-main-scroll").css("height"), 10);
        var bR = parseFloat($("#sf-service-Filebrowser-main-scroll-body-top").css("height"), 10);
        var bP = parseFloat($("#sf-service-Filebrowser-main-scroll-body-bottom").css("height"), 10);
        bq = bs / bS;
        var bQ = bq - (bR + bP);
        if (bQ <= 14) {
            bQ = 14
        }
        $("#sf-service-Filebrowser-main-scroll-body-middle").css({height: bQ});
        bm = (bs - (bR + bP + bQ)) / (bS - 1)
    }

    function bc() {
        var bR = event.target.id;
        var bT = N;
        var bS = false;
        alert("[AF Filebrowser] setMainOnClickEvent : " + bR);
        switch (bR) {
            case"sf-service-Filebrowser-main-item0-mouse-focus":
                N = 0;
                break;
            case"sf-service-Filebrowser-main-item1-mouse-focus":
                N = 1;
                break;
            case"sf-service-Filebrowser-main-item2-mouse-focus":
                N = 2;
                break;
            case"sf-service-Filebrowser-main-item3-mouse-focus":
                N = 3;
                break;
            case"sf-service-Filebrowser-main-item4-mouse-focus":
                N = 4;
                break;
            case"sf-service-Filebrowser-main-item5-mouse-focus":
                N = 5;
                break;
            case"sf-service-Filebrowser-main-item6-mouse-focus":
                N = 6;
                break;
            case"sf-service-Filebrowser-main-item7-mouse-focus":
                N = 7;
                break
        }
        bFocusBox = true;
        $(".sf-service-Filebrowser-main-cancelbutton-l").removeClass("sf-service-Filebrowser-main-button-focus-1");
        $(".sf-service-Filebrowser-main-cancelbutton-c").removeClass("sf-service-Filebrowser-main-button-focus-c");
        $(".sf-service-Filebrowser-main-cancelbutton-r").removeClass("sf-service-Filebrowser-main-button-focus-r");
        bG = ((x - 1) * Q) + N;
        var bP = -2 + (N * bH);
        $("#sf-service-Filebrowser-main-focus").show();
        document.getElementById("sf-service-Filebrowser-main-focus").style.top = bP + "px";
        for (var bQ = 0; bQ < g.length; bQ++) {
            $("#sf-service-Filebrowser-main-item" + bQ + "-label").css({color: "#ffffff"})
        }
        $("#sf-service-Filebrowser-main-item" + N + "-label").css({color: "#ffba19"});
        if (bT == N) {
            bS = false
        } else {
            bS = true
        }
        $("#sf-service-Filebrowser-main-focus").unbind("webkitTransitionEnd").bind("webkitTransitionEnd", function (bU) {
            switch (bU.type) {
                case"webkitTransitionEnd":
                    setTimeout(function () {
                        bD.main(aw.key.ENTER);
                        $("#sf-service-Filebrowser-main-focus").unbind("webkitTransitionEnd")
                    }, 150);
                    break
            }
        });
        if (!bS) {
            bD.main(aw.key.ENTER);
            $("#sf-service-Filebrowser-main-focus").unbind("webkitTransitionEnd")
        }
    }

    function bL() {
        if (!al) {
            var bQ = event.target.id;
            var bS = P;
            var bR = false;
            alert("[AF Filebrowser] setFileOnClickEvent : " + bQ);
            switch (bQ) {
                case"sf-service-Filebrowser-file-item-mouse0":
                    P = 0;
                    break;
                case"sf-service-Filebrowser-file-item-mouse1":
                    P = 1;
                    break;
                case"sf-service-Filebrowser-file-item-mouse2":
                    P = 2;
                    break;
                case"sf-service-Filebrowser-file-item-mouse3":
                    P = 3;
                    break;
                case"sf-service-Filebrowser-file-item-mouse4":
                    P = 4;
                    break;
                case"sf-service-Filebrowser-file-item-mouse5":
                    P = 5;
                    break;
                case"sf-service-Filebrowser-file-item-mouse6":
                    P = 6;
                    break;
                case"sf-service-Filebrowser-file-item-mouse7":
                    P = 7;
                    break;
                case"sf-service-Filebrowser-file-item-mouse8":
                    P = 8;
                    break;
                case"sf-service-Filebrowser-file-item-mouse9":
                    P = 9;
                    break;
                case"sf-service-Filebrowser-file-item-mouse10":
                    P = 10;
                    break;
                case"sf-service-Filebrowser-file-item-mouse11":
                    P = 11;
                    break
            }
            a3 = true;
            if (bB == true) {
                bC = aV;
                $("#sf-service-Filebrowser-file-button0-l").removeClass();
                $("#sf-service-Filebrowser-file-button0-c").removeClass();
                $("#sf-service-Filebrowser-file-button0-r").removeClass();
                $("#sf-service-Filebrowser-file-button0-l").addClass("sf-service-Filebrowser-file-button-dim-1");
                $("#sf-service-Filebrowser-file-button0-c").addClass("sf-service-Filebrowser-file-button-dim-c");
                $("#sf-service-Filebrowser-file-button0-r").addClass("sf-service-Filebrowser-file-button-dim-r");
                for (var bP = 1; bP < 2; bP++) {
                    $("#sf-service-Filebrowser-file-button" + bP + "-l").removeClass();
                    $("#sf-service-Filebrowser-file-button" + bP + "-c").removeClass();
                    $("#sf-service-Filebrowser-file-button" + bP + "-r").removeClass();
                    $("#sf-service-Filebrowser-file-button" + bP + "-l").addClass("sf-service-Filebrowser-file-button-nor-1");
                    $("#sf-service-Filebrowser-file-button" + bP + "-c").addClass("sf-service-Filebrowser-file-button-nor-c");
                    $("#sf-service-Filebrowser-file-button" + bP + "-r").addClass("sf-service-Filebrowser-file-button-nor-r")
                }
            } else {
                for (var bP = 0; bP < 2; bP++) {
                    $("#sf-service-Filebrowser-file-button" + bP + "-l").removeClass();
                    $("#sf-service-Filebrowser-file-button" + bP + "-c").removeClass();
                    $("#sf-service-Filebrowser-file-button" + bP + "-r").removeClass();
                    $("#sf-service-Filebrowser-file-button" + bP + "-l").addClass("sf-service-Filebrowser-file-button-nor-1");
                    $("#sf-service-Filebrowser-file-button" + bP + "-c").addClass("sf-service-Filebrowser-file-button-nor-c");
                    $("#sf-service-Filebrowser-file-button" + bP + "-r").addClass("sf-service-Filebrowser-file-button-nor-r")
                }
            }
            for (var bP = 0; bP < J; bP++) {
                $("#sf-service-Filebrowser-file-item" + bP + "-label").marquee(false);
                $("#sf-service-Filebrowser-file-item" + bP + "-label").addClass("sf-ui-common-ellipsis");
                $("#sf-service-Filebrowser-file-item" + bP + "-label").scrollLeft(0)
            }
            $("#sf-service-Filebrowser-file-item-Focus").show();
            ab.setFocus(P);
            if (bS == P) {
                bR = false
            } else {
                bR = true
            }
            $("#sf-service-Filebrowser-file-item-Focus").unbind("webkitTransitionEnd").bind("webkitTransitionEnd", function (bT) {
                switch (bT.type) {
                    case"webkitTransitionEnd":
                        if (a[P].isDir == true) {
                            setTimeout(function () {
                                bD.file(aw.key.ENTER);
                                $("#sf-service-Filebrowser-file-item-Focus").unbind("webkitTransitionEnd")
                            }, 150)
                        } else {
                            bD.file(aw.key.ENTER);
                            $("#sf-service-Filebrowser-file-item-Focus").unbind("webkitTransitionEnd")
                        }
                        break
                }
            });
            if (!bR) {
                bD.file(aw.key.ENTER);
                $("#sf-service-Filebrowser-file-item-Focus").unbind("webkitTransitionEnd")
            }
        }
    }

    function u() {
        var bR = event.target.id;
        alert("[AF Filebrowser] setFileButtonOnClickEvent : " + bR);
        switch (bR) {
            case"sf-service-Filebrowser-file-button0-l":
            case"sf-service-Filebrowser-file-button0-c":
            case"sf-service-Filebrowser-file-button0-r":
                bC = bI;
                break;
            case"sf-service-Filebrowser-file-button1-l":
            case"sf-service-Filebrowser-file-button1-c":
            case"sf-service-Filebrowser-file-button1-r":
                bC = aV;
                break
        }
        a3 = false;
        $("#sf-service-Filebrowser-file-item-Focus").hide();
        for (var bQ = 0; bQ < 2; bQ++) {
            $("#sf-service-Filebrowser-file-button" + bQ + "-l").removeClass();
            $("#sf-service-Filebrowser-file-button" + bQ + "-c").removeClass();
            $("#sf-service-Filebrowser-file-button" + bQ + "-r").removeClass();
            $("#sf-service-Filebrowser-file-button" + bQ + "-l").addClass("sf-service-Filebrowser-file-button-nor-1");
            $("#sf-service-Filebrowser-file-button" + bQ + "-c").addClass("sf-service-Filebrowser-file-button-nor-c");
            $("#sf-service-Filebrowser-file-button" + bQ + "-r").addClass("sf-service-Filebrowser-file-button-nor-r")
        }
        if (bB == true) {
            $("#sf-service-Filebrowser-file-button0-l").removeClass();
            $("#sf-service-Filebrowser-file-button0-c").removeClass();
            $("#sf-service-Filebrowser-file-button0-r").removeClass();
            $("#sf-service-Filebrowser-file-button0-l").addClass("sf-service-Filebrowser-file-button-dim-1");
            $("#sf-service-Filebrowser-file-button0-c").addClass("sf-service-Filebrowser-file-button-dim-c");
            $("#sf-service-Filebrowser-file-button0-r").addClass("sf-service-Filebrowser-file-button-dim-r")
        }
        $("#sf-service-Filebrowser-file-button" + bC).show();
        $("#sf-service-Filebrowser-file-button" + bC + "-l").addClass("sf-service-Filebrowser-file-button-focus-1");
        $("#sf-service-Filebrowser-file-button" + bC + "-c").addClass("sf-service-Filebrowser-file-button-focus-c");
        $("#sf-service-Filebrowser-file-button" + bC + "-r").addClass("sf-service-Filebrowser-file-button-focus-r");
        if (bC == aV) {
            setTimeout(function () {
                $("#sf-service-Filebrowser-file-loading").sfLoading("hide")
            }, 100);
            aa = true;
            alert("[AF Filebrowser] bReturnKeyFlag : " + aa);
            var bP = {};
            bP.state = "cancel";
            bj();
            deviceapis._plugin("ContentsMgr", "DestroyContentsMgr");
            if (aw.scene._isSceneArchUsed() && aM) {
                aw.scene.removeKeyHandler(aM)
            } else {
                aw.scene.returnFocus()
            }
            ab.hide();
            X = "main";
            ac.hide();
            p(bP);
            aw.key.preventDefault()
        } else {
            if (bC == bI) {
                bD.file(aw.key.ENTER)
            }
        }
    }

    function bj() {
        Y = true;
        m = new Array();
        aFilepath = new Array();
        aq = {};
        bu = [];
        bC = 0;
        be = 0;
        P = 0;
        aP = 0;
        bk = 0;
        bl = 0;
        bn = 0;
        aQ = 0;
        ae = 0;
        a9 = 0;
        aG = 1;
        a2 = 1;
        a3 = true;
        ao = true;
        av = false;
        br = false;
        au = null;
        bB = true;
        aK = false;
        aI = true;
        bK = false;
        bw = aS;
        $("#sf-service-Filebrowser-file-scroll-body").css({top: "0"});
        for (var bP = 0; bP < J; bP++) {
            $("#sf-service-Filebrowser-file-item" + bP).empty()
        }
        $("#sf-service-Filebrowser-file-item-Focus").empty();
        for (var bP = 0; bP < 4; bP++) {
            $("#sf-service-Filebrowser-file-button" + bP + "-l").removeClass("sf-service-Filebrowser-file-button-focus-1");
            $("#sf-service-Filebrowser-file-button" + bP + "-c").removeClass("sf-service-Filebrowser-file-button-focus-c");
            $("#sf-service-Filebrowser-file-button" + bP + "-r").removeClass("sf-service-Filebrowser-file-button-focus-r")
        }
        $("sf-service-Filebrowser-file-item-Focus").css({left: bJ + "px", top: bw + "px"});
        $("#sf-service-Filebrowser-file-item-Focus").hide()
    }

    function az() {
        N = 0;
        bG = 0;
        q = 0;
        g = new Array();
        j();
        ac.initTextView();
        aU = 0;
        $("#sf-service-Filebrowser-Main-scroll-body").css({top: "0"});
        for (var bP = 0; bP < Q; bP++) {
            $("#sf-service-Filebrowser-main-item" + bP).empty()
        }
        ac.setDeviceListView(q)
    }

    function aj() {
        ab.setInitFileView();
        document.getElementById("sf-service-Filebrowser-file-item-Focus").style.left = bJ + "px";
        document.getElementById("sf-service-Filebrowser-file-item-Focus").style.top = bw + "px";
        for (var bQ = 0; bQ < J; bQ++) {
            $("#sf-service-Filebrowser-file-item" + bQ).empty()
        }
        if (e == "multi") {
            if (bl < aB) {
                if (bl < aH) {
                    if (bl < b) {
                        bk = bl / F;
                        ab.setMultiModeGuideMessage(aP, bk, aw.lang.SID_KB)
                    } else {
                        bk = bl / b;
                        ab.setMultiModeGuideMessage(aP, bk, aw.lang.SID_MB)
                    }
                } else {
                    bk = bl / aH;
                    ab.setMultiModeGuideMessage(aP, bk, aw.lang.SID_GB)
                }
            } else {
                bk = bl / aB;
                ab.setMultiModeGuideMessage(aP, bk, aw.lang.SID_TB)
            }
            bB = true;
            br = false;
            a9 = 0;
            aq = {};
            S = new Array();
            bu = [];
            for (var bP in aq) {
                bB = false
            }
            if (bB == true) {
                document.getElementById("sf-service-Filebrowser-file-button0").onclick = null;
                $("#sf-service-Filebrowser-file-button0").css({cursor: "default"});
                $("#sf-service-Filebrowser-file-button0-l").removeClass();
                $("#sf-service-Filebrowser-file-button0-c").removeClass();
                $("#sf-service-Filebrowser-file-button0-r").removeClass();
                $("#sf-service-Filebrowser-file-button0-l").addClass("sf-service-Filebrowser-file-button-dim-1");
                $("#sf-service-Filebrowser-file-button0-c").addClass("sf-service-Filebrowser-file-button-dim-c");
                $("#sf-service-Filebrowser-file-button0-r").addClass("sf-service-Filebrowser-file-button-dim-r")
            } else {
                document.getElementById("sf-service-Filebrowser-file-button0").onclick = function () {
                    u()
                };
                $("#sf-service-Filebrowser-file-button0").css({cursor: "pointer"});
                $("#sf-service-Filebrowser-file-button0-l").removeClass();
                $("#sf-service-Filebrowser-file-button0-c").removeClass();
                $("#sf-service-Filebrowser-file-button0-r").removeClass();
                $("#sf-service-Filebrowser-file-button0-l").addClass("sf-service-Filebrowser-file-button-nor-1");
                $("#sf-service-Filebrowser-file-button0-c").addClass("sf-service-Filebrowser-file-button-nor-c");
                $("#sf-service-Filebrowser-file-button0-r").addClass("sf-service-Filebrowser-file-button-nor-r")
            }
        } else {
            if (e == "single") {
                $("#sf-service-Filebrowser-file-size-message").html("");
                if (s == H) {
                    $("#sf-service-Filebrowser-file-message").html("" + aw.lang.COM_SELECT_A_PHOTO)
                } else {
                    if (s == T) {
                        $("#sf-service-Filebrowser-file-message").html("" + aw.lang.COM_SELECT_A_VIDEO)
                    } else {
                        if (s == aD) {
                            $("#sf-service-Filebrowser-file-message").html("" + aw.lang.COM_SELECT_A_SONG)
                        }
                    }
                }
            }
        }
        $("#sf-service-Filebrowser-file-scroll-body").css({top: ae});
        if (!aa) {
            ab.showFileList(be);
            ab.setFocus(P);
            c(nMaxPageNum)
        } else {
            bj();
            ab.hide();
            X = "main";
            ac.hide()
        }
    }

    function t(bR) {
        al = true;
        ax = true;
        if (g[bG].deviceType == "DLNA") {
            nMoveToIndex = deviceapis._plugin("ContentsMgr", "MoveToIndex", S[aL].indexNum);
            var bQ = deviceapis._plugin("ContentsMgr", "GetCurrentIndex")
        }
        var bP = deviceapis._plugin(O, "ThumbnailRequest", bR, s, L, E);
        alert("[AF Filebrowser] FirstThumbnailRequest : " + bP)
    }

    function o(bT, bR, bP) {
        var bS = deviceapis._plugin("ContentsMgr", "GetCurrentIndex");
        alert("[AF Filebrowser] ChecklistStartPoint : " + bT);
        var bQ = bT + w;
        setTimeout(function () {
            var bU = aT(bT, bQ, bP);
            if (bU <= an) {
                o(bQ, bR, bU)
            } else {
                ab.setSelectAll(aFilepath);
                al = false;
                ax = false;
                br = true;
                aw.core.plugin("TVMW").SetWatchDog(aw.core.PLR_FALSE)
            }
        }, 100)
    }

    function aT(bP, bS, bU) {
        for (var bR = bP; bR < bS; bR++) {
            var bT = deviceapis._plugin("ContentsMgr", "GetValue", 7);
            if (bT == a1) {
                I[bU] = {
                    filename: null,
                    date: null,
                    isDir: false,
                    thumbnail: null,
                    path: null,
                    size: 0,
                    playTime: null,
                    type: Z
                };
                I[bU].path = deviceapis._plugin("ContentsMgr", "GetValue", 46);
                I[bU].filename = deviceapis._plugin("ContentsMgr", "GetValue", 1);
                I[bU].size = deviceapis._plugin("ContentsMgr", "GetValue", 8);
                alert("[AF Filebrowser] aCheckList[" + bU + "].path :" + I[bU].path);
                bU++
            } else {
                G++
            }
            var bQ = deviceapis._plugin("ContentsMgr", "MoveToNext");
            if (bU > an || bQ == -1) {
                bU = an + 1;
                break
            }
        }
        return bU
    }

    function aJ() {
        aw.core.plugin("TVMW").SetWatchDog(aw.core.PLR_TRUE);
        var bP = deviceapis._plugin("ContentsMgr", "MoveToLast");
        var bS = deviceapis._plugin("ContentsMgr", "GetCurrentIndex");
        alert("[AF Filebrowser] nGetLastIndex : " + bS);
        var bR = deviceapis._plugin("ContentsMgr", "MoveToFirst");
        var bQ = deviceapis._plugin("ContentsMgr", "GetCurrentIndex");
        I = new Array();
        v = 0;
        G = 0;
        o(bQ, bS, v)
    }

    function k(bT, bQ, bS) {
        var bR = deviceapis._plugin("ContentsMgr", "GetCurrentIndex");
        alert("[AF Filebrowser] listStartPoint : " + bT);
        var bP = bT + w;
        setTimeout(function () {
            var bU = ay(bT, bP, bS);
            alert("[AF Filebrowser] listfrom : " + bU);
            alert("[AF Filebrowser] bReturnKeyFlag : " + aa);
            if (bU < bQ && bK == false && aa == false && bx == false) {
                k(bP, bQ, bU)
            } else {
                if (aa == false && bx == false) {
                    if (aFilepath.join("") == au) {
                        var bX = bU - 3
                    } else {
                        var bX = bU - 2
                    }
                    m[bX].lastpoint = true;
                    alert("[AF Filebrowser] bViewNewFolder : " + aI);
                    if (aI) {
                        var bV = deviceapis._plugin("ContentsMgr", "MoveToLast");
                        var bZ = deviceapis._plugin("ContentsMgr", "GetCurrentIndex");
                        var bY = deviceapis._plugin("ContentsMgr", "MoveToFirst");
                        if (aFilepath.join("") == au) {
                            var bW = Math.ceil((bZ + 2) / w);
                            A = Math.ceil((bZ + 2) / w)
                        } else {
                            bW = Math.ceil((bZ + 1) / w);
                            A = Math.ceil((bZ + 1) / w)
                        }
                        if (bW <= 2) {
                            nMaxPageNum = 1;
                            $("#sf-service-Filebrowser-file-scroll").hide();
                            ab.fileArrowView(a2)
                        } else {
                            nMaxPageNum = (bW - 2) + 1;
                            $("#sf-service-Filebrowser-file-scroll").show();
                            ab.fileArrowView(a2)
                        }
                        alert("[AF Filebrowser] bMainPage : " + Y);
                        if (Y == true) {
                            $("#sf-service-Filebrowser-main-button").hide();
                            $("#sf-service-Filebrowser-main-text").hide();
                            $("#sf-service-Filebrowser-main-message").hide();
                            $("#sf-service-Filebrowser-main-keyhelp").hide();
                            $("#sf-service-Filebrowser-main-text-arrowUp").hide();
                            $("#sf-service-Filebrowser-main-text-arrowDown").hide();
                            aK = false;
                            ab.show();
                            X = "file";
                            setTimeout(function () {
                                $("#sf-service-Filebrowser-main-loading").sfLoading("hide")
                            }, 10)
                        }
                        Y = false;
                        aj();
                        aI = false
                    } else {
                        ab.setInitFileView();
                        ab.showFileList(be);
                        if (P >= a.length) {
                            P = a.length - 1
                        }
                        ab.setFocus(P);
                        ab.fileArrowView(a2);
                        ab.moveScroll("next")
                    }
                } else {
                    if (aa == true) {
                        bj();
                        ab.hide();
                        X = "main";
                        ac.hide()
                    } else {
                        if (bx == true) {
                            bj();
                            setTimeout(function () {
                                $("#sf-service-Filebrowser-main-loading").sfLoading("hide");
                                bx = false
                            }, 10)
                        }
                    }
                }
            }
        }, 100)
    }

    function ay(bP, bS, bT) {
        for (var bR = bP; bR < bS; bR++) {
            alert("[AF Filebrowser] bReturnKeyFlag : " + aa);
            if (aa == true || bx == true) {
                break
            } else {
                var bV = deviceapis._plugin("ContentsMgr", "GetValue", 7);
                if (bV == U || bV == by) {
                    m[bT] = {
                        filename: null,
                        isDir: true,
                        thumbnail: null,
                        size: null,
                        path: null,
                        playTime: null,
                        lastpoint: false,
                        indexNum: null,
                        type: Z
                    }
                } else {
                    if (bV == a1) {
                        m[bT] = {
                            filename: null,
                            isDir: false,
                            thumbnail: null,
                            size: 0,
                            path: null,
                            width: null,
                            height: null,
                            playTime: null,
                            lastpoint: false,
                            indexNum: null,
                            type: Z
                        };
                        if (g[bG].deviceType == "DLNA") {
                            m[bT].path = deviceapis._plugin("ContentsMgr", "GetValue", 46);
                            m[bT].thumbnail = deviceapis._plugin("ContentsMgr", "GetValue", 48)
                        }
                        if (s == H) {
                            m[bT].width = deviceapis._plugin("ContentsMgr", "GetValue", 14);
                            m[bT].height = deviceapis._plugin("ContentsMgr", "GetValue", 15)
                        }
                        m[bT].size = deviceapis._plugin("ContentsMgr", "GetValue", 8)
                    }
                }
                var bU = deviceapis._plugin("ContentsMgr", "GetCurrentIndex");
                m[bT].indexNum = bU;
                m[bT].filename = deviceapis._plugin("ContentsMgr", "GetValue", 1);
                alert("[AF Filebrowser] aObjectList[" + bT + "].path : " + m[bT].path);
                bT++;
                var bQ = deviceapis._plugin("ContentsMgr", "MoveToNext");
                var bU = deviceapis._plugin("ContentsMgr", "GetCurrentIndex");
                if (bT > bS || bQ == -1) {
                    bT = bT + 1;
                    if (bQ == -1) {
                        bK = true
                    }
                    break
                }
            }
        }
        return bT
    }

    function bg(bT) {
        alert("[AF Filebrowser] listNum : " + bT);
        if (aFilepath.join("") == au && a2 != 1) {
            var bR = deviceapis._plugin("ContentsMgr", "MoveToIndex", bT - 1)
        } else {
            bR = deviceapis._plugin("ContentsMgr", "MoveToIndex", bT)
        }
        if (bT == 0 || bv == true) {
            var bP = bT + V
        } else {
            var bP = bT + w
        }
        if (aFilepath.join("") == au && a2 == 1) {
            m[bT] = {
                filename: "..",
                date: null,
                isDir: true,
                size: null,
                thumbnail: null,
                path: null,
                playTime: null,
                type: Z
            };
            bT++
        }
        if (bR != -1) {
            k(bT, bP, bT)
        } else {
            var bQ = deviceapis._plugin("ContentsMgr", "MoveToLast");
            var bV = deviceapis._plugin("ContentsMgr", "GetCurrentIndex");
            var bU = deviceapis._plugin("ContentsMgr", "MoveToFirst");
            if (aFilepath.join("") == au) {
                var bS = Math.ceil((bV + 2) / w);
                A = Math.ceil((bV + 2) / w)
            } else {
                bS = Math.ceil((bV + 1) / w);
                A = Math.ceil((bV + 1) / w)
            }
            if (bS <= 2) {
                nMaxPageNum = 1;
                $("#sf-service-Filebrowser-file-scroll").hide();
                ab.fileArrowView(a2)
            } else {
                nMaxPageNum = (bS - 2) + 1;
                $("#sf-service-Filebrowser-file-scroll").show();
                ab.fileArrowView(a2)
            }
            if (bx == true) {
                bj();
                setTimeout(function () {
                    $("#sf-service-Filebrowser-main-loading").sfLoading("hide")
                }, 10);
                bx = false
            } else {
                if (Y == true) {
                    $("#sf-service-Filebrowser-main-button").hide();
                    $("#sf-service-Filebrowser-main-text").hide();
                    $("#sf-service-Filebrowser-main-message").hide();
                    $("#sf-service-Filebrowser-main-keyhelp").hide();
                    $("#sf-service-Filebrowser-main-text-arrowUp").hide();
                    $("#sf-service-Filebrowser-main-text-arrowDown").hide();
                    aK = false;
                    ab.show();
                    X = "file";
                    setTimeout(function () {
                        $("#sf-service-Filebrowser-main-loading").sfLoading("hide")
                    }, 10)
                }
                Y = false;
                aj();
                aI = false
            }
        }
        bv = false;
        alert("[AF Filebrowser] makeFileObjDONE")
    }

    function a4(bU) {
        var bP = new FileSystem();
        var bR = bU.join("/");
        var bQ = bP.readDir(bR);
        var bT = {};
        for (var bS = 0; bS < bQ.length; bS++) {
            bT[bQ[bS].name] = bQ[bS].size
        }
        return bT
    }

    function d(bP, bT, bQ) {
        alert("OnEvent()");
        alert("event : " + bP);
        alert("data1 : " + bT);
        alert("data2 : " + bQ);
        if (bT == "COMPLETE_THUMBNAIL") {
            alert("[AF Filebrowser] COMPLETE_THUMBNAIL!!", 1);
            var bR = deviceapis._plugin(O, "GetThumbnailPath", a0);
            var bX = new Date();
            var bW = bX.getTime();
            aF[aL] = a0 + ".bmp?" + bW;
            alert("[AF Filebrowser] END_COMPLETE_THUMBNAIL!!")
        } else {
            if (bT == "MAKE_THUMBNAIL" || bT == "FAIL_THUMBNAIL") {
                alert("[AF Filebrowser] nThumbnailCategoryNum : " + aL);
                if (g[bG].deviceType == "USB") {
                    if (bu[S[aL]] === undefined || S[aL] == "") {
                        if (bT == "MAKE_THUMBNAIL") {
                            alert("[AF Filebrowser] MAKE_THUMBNAIL !!");
                            bu[S[aL]] = {ThumbnailFileName: aF[aL]};
                            bz = aF[aL];
                            var bU = bp + bz;
                            alert("[AF Filebrowser] sThumbnaileFilePath : " + bU);
                            var bS = null;
                            bS = C(bU, L, E);
                            ah("sf-service-Filebrowser-file-item" + aL + "-image", bS);
                            if (s == aD) {
                                $("#sf-service-Filebrowser-file-item" + aL + "-image").attr("class", "sf-service-Filebrowser-file-item-image-style_Music");
                                $(".sf-service-Filebrowser-file-item-image-style_Music").css({top: aR + "px"})
                            } else {
                                $("#sf-service-Filebrowser-file-item" + aL + "-image").attr("class", "sf-service-Filebrowser-file-item-image-style")
                            }
                            aL++;
                            a0++;
                            bF = true
                        } else {
                            if (bT == "FAIL_THUMBNAIL") {
                                $("#sf-service-Filebrowser-file-loading").sfLoading("show");
                                alert("[AF Filebrowser] FAIL_THUMBNAIL !!");
                                if (bF == true) {
                                    bF = false
                                } else {
                                    bu[S[aL]] = {ThumbnailFileName: "defaultImage"};
                                    if (s == H) {
                                        $("#sf-service-Filebrowser-file-item" + aL + "-image").attr("class", "sf-service-Filebrowser-file-image-defaultImage")
                                    } else {
                                        if (s == T) {
                                            $("#sf-service-Filebrowser-file-item" + aL + "-image").attr("class", "sf-service-Filebrowser-file-image-defaultVideo")
                                        } else {
                                            if (s == aD) {
                                                $("#sf-service-Filebrowser-file-item" + aL + "-image").attr("class", "sf-service-Filebrowser-file-image-defaultMusic");
                                                $(".sf-service-Filebrowser-file-image-defaultMusic").css({top: bO + "px"})
                                            }
                                        }
                                    }
                                    aL++;
                                    a0++;
                                    bF = true;
                                    setTimeout(function () {
                                        $("#sf-service-Filebrowser-file-loading").sfLoading("hide")
                                    }, 200)
                                }
                            }
                        }
                        if (S[aL] != undefined) {
                            alert("[AF Filebrowser] aThumbnailList[" + aL + "] :" + S[aL]);
                            var bV = deviceapis._plugin(O, "ThumbnailRequest", S[aL], s, L, E)
                        } else {
                            setTimeout(function () {
                                $("#sf-service-Filebrowser-file-loading").sfLoading("hide");
                                al = false;
                                ax = false;
                                alert("[AF Filebrowser] bReturnKeyFlag : " + aa);
                                if (aa == true) {
                                    bj();
                                    ab.hide();
                                    X = "main";
                                    ac.hide()
                                }
                            }, 100)
                        }
                    } else {
                        setTimeout(function () {
                            $("#sf-service-Filebrowser-file-loading").sfLoading("hide");
                            al = false;
                            ax = false;
                            alert("[AF Filebrowser] bReturnKeyFlag : " + aa);
                            if (aa == true) {
                                bj();
                                ab.hide();
                                X = "main";
                                ac.hide()
                            }
                        }, 100)
                    }
                    alert("[AF Filebrowser] END_MAKE_THUMBNAIL!!")
                } else {
                    if (g[bG].deviceType == "DLNA") {
                        if (bu[S[aL].path] === undefined || S[aL].thumbnail == "") {
                            if (bT == "MAKE_THUMBNAIL") {
                                alert("[AF Filebrowser] MAKE_THUMBNAIL !!");
                                bu[S[aL].path] = {ThumbnailFileName: aF[aL]};
                                bz = aF[aL];
                                var bU = bp + bz;
                                alert("[AF Filebrowser] sThumbnaileFilePath : " + bU);
                                var bS = null;
                                bS = C(bU, L, E);
                                ah("sf-service-Filebrowser-file-item" + aL + "-image", bS);
                                if (s == aD) {
                                    $("#sf-service-Filebrowser-file-item" + aL + "-image").attr("class", "sf-service-Filebrowser-file-item-image-style_Music")
                                } else {
                                    $("#sf-service-Filebrowser-file-item" + aL + "-image").attr("class", "sf-service-Filebrowser-file-item-image-style")
                                }
                            } else {
                                if (bT == "FAIL_THUMBNAIL") {
                                    alert("[AF Filebrowser] FAIL_THUMBNAIL !!");
                                    if (S[aL].path != undefined) {
                                        bu[S[aL].path] = {ThumbnailFileName: "defaultImage"}
                                    }
                                    if (s == H) {
                                        $("#sf-service-Filebrowser-file-item" + aL + "-image").attr("class", "sf-service-Filebrowser-file-image-defaultImage")
                                    } else {
                                        if (s == T) {
                                            $("#sf-service-Filebrowser-file-item" + aL + "-image").attr("class", "sf-service-Filebrowser-file-image-defaultVideo")
                                        } else {
                                            if (s == aD) {
                                                $(".sf-service-Filebrowser-file-image-defaultMusic").css({top: bO + "px"});
                                                $("#sf-service-Filebrowser-file-item" + aL + "-image").attr("class", "sf-service-Filebrowser-file-image-defaultMusic")
                                            }
                                        }
                                    }
                                }
                            }
                            alert("[AF Filebrowser] lastpoint : " + S[aL].lastpoint);
                            if (S[aL].lastpoint == false) {
                                aL++;
                                nMoveToIndex = deviceapis._plugin("ContentsMgr", "MoveToIndex", S[aL].indexNum);
                                var bV = deviceapis._plugin(O, "ThumbnailRequest", S[aL].thumbnail, s, L, E);
                                a0++
                            } else {
                                if (S[aL].lastpoint == true) {
                                    setTimeout(function () {
                                        $("#sf-service-Filebrowser-file-loading").sfLoading("hide")
                                    }, 100);
                                    al = false;
                                    ax = false;
                                    alert("[AF Filebrowser] bReturnKeyFlag : " + aa);
                                    if (aa == true) {
                                        bj();
                                        ab.hide();
                                        X = "main";
                                        ac.hide()
                                    }
                                }
                            }
                        } else {
                            setTimeout(function () {
                                $("#sf-service-Filebrowser-file-loading").sfLoading("hide")
                            }, 100);
                            al = false;
                            ax = false;
                            alert("[AF Filebrowser] bReturnKeyFlag : " + aa);
                            if (aa == true) {
                                bj();
                                ab.hide();
                                X = "main";
                                ac.hide()
                            }
                        }
                        alert("[AF Filebrowser] END_MAKE_THUMBNAIL")
                    }
                }
            } else {
                if (bT == "ADD_DEVICE" || bT == "REMOVE_DEVICE") {
                    alert("[AF Filebrowser] DEVICE EVENT !!");
                    if (X == "file") {
                        if (g[bG].partitionkey == bP && bT == "REMOVE_DEVICE") {
                            setTimeout(function () {
                                $("#sf-service-Filebrowser-disconnectedDevicePopup").sfPopup({
                                    text: aw.lang.COM_MOVE_LIST_DEVICE_DISCONNECTED_MSG,
                                    buttons: "OK",
                                    callback: function (bY) {
                                        bj();
                                        X = "main";
                                        $("#sf-service-Filebrowser-main-button").show();
                                        $("#sf-service-Filebrowser-main-text").show();
                                        $("#sf-service-Filebrowser-main-message").show();
                                        $("#sf-service-Filebrowser-main-keyhelp").show();
                                        ac.mainArrowView(x);
                                        ab.hide();
                                        az()
                                    }
                                }).sfPopup("show")
                            }, 200)
                        } else {
                            av = true
                        }
                    } else {
                        if (X == "main") {
                            if (bT == "REMOVE_DEVICE") {
                                bx = true
                            }
                            az();
                            setTimeout(function () {
                                $("#sf-service-Filebrowser-main-loading").sfLoading("hide")
                            }, 10)
                        }
                    }
                } else {
                    if (bT == "COMPLETE_CLUSTERING") {
                        bg(bn)
                    }
                }
            }
        }
    }

    function c(bS) {
        n = parseFloat($("#sf-service-Filebrowser-file-scroll").css("height"), 10);
        var bR = parseFloat($("#sf-service-Filebrowser-file-scroll-body-top").css("height"), 10);
        var bP = parseFloat($("#sf-service-Filebrowser-file-scroll-body-bottom").css("height"), 10);
        bh = n / bS;
        var bQ = bh - (bR + bP);
        if (bQ <= 14) {
            bQ = 14
        }
        $("#sf-service-Filebrowser-file-scroll-body-middle").css({height: bQ});
        ba = (n - (bR + bP + bQ)) / (bS - 1)
    }

    function aZ() {
        $('<div id="sf-service-Filebrowser-main"></div>').html(['<div id="sf-service-Filebrowser-main-bg"><div id="sf-service-Filebrowser-main-bg-up-l-alpha"></div><div id="sf-service-Filebrowser-main-bg-up-c-alpha"></div><div id="sf-service-Filebrowser-main-bg-up-r-alpha"></div><div id="sf-service-Filebrowser-main-bg-mid-l-alpha"></div><div id="sf-service-Filebrowser-main-bg-mid-c-alpha"></div><div id="sf-service-Filebrowser-main-bg-mid-r-alpha"></div><div id="sf-service-Filebrowser-main-bg-bottom-l-alpha"></div><div id="sf-service-Filebrowser-main-bg-bottom-c-alpha"></div><div id="sf-service-Filebrowser-main-bg-bottom-r-alpha"></div><div id="sf-service-Filebrowser-main-bg-up-l"></div><div id="sf-service-Filebrowser-main-bg-up-c"></div><div id="sf-service-Filebrowser-main-bg-up-r"></div><div id="sf-service-Filebrowser-main-bg-mid-l"></div><div id="sf-service-Filebrowser-main-bg-mid-c"></div><div id="sf-service-Filebrowser-main-bg-mid-r"></div><div id="sf-service-Filebrowser-main-bg-bottom-l"></div><div id="sf-service-Filebrowser-main-bg-bottom-c"></div><div id="sf-service-Filebrowser-main-bg-bottom-r"></div><div id="sf-service-Filebrowser-main-title"></div><div id="sf-service-Filebrowser-main-message"></div><div id="sf-service-Filebrowser-main-button"><div class="sf-service-Filebrowser-main-cancelbutton-l"></div><div class="sf-service-Filebrowser-main-cancelbutton-c">' + aw.lang.SID_CANCEL + '</div><div class="sf-service-Filebrowser-main-cancelbutton-r"></div></div><div id="sf-service-Filebrowser-main-keyhelp"></div><div id="sf-service-Filebrowser-main-text"><div id="sf-service-Filebrowser-main-text-NoConnected"></div><div id="sf-service-Filebrowser-main-text-arrowUp"></div><div id="sf-service-Filebrowser-main-text-arrowDown"></div><div id="sf-service-Filebrowser-main-text-top-l"></div><div id="sf-service-Filebrowser-main-text-top-c"></div><div id="sf-service-Filebrowser-main-text-top-r"></div><div id="sf-service-Filebrowser-main-text-mid-l"></div><div id="sf-service-Filebrowser-main-text-mid-c"></div><div id="sf-service-Filebrowser-main-text-mid-r"></div><div id="sf-service-Filebrowser-main-text-bottom-l"></div><div id="sf-service-Filebrowser-main-text-bottom-c"></div><div id="sf-service-Filebrowser-main-text-bottom-r"></div><div id="sf-service-Filebrowser-main-focus"><div id="sf-service-Filebrowser-main-focus-l"></div><div id="sf-service-Filebrowser-main-focus-c"></div><div id="sf-service-Filebrowser-main-focus-r"></div></div><div id="sf-service-Filebrowser-main-scroll"><div id="sf-service-Filebrowser-main-scroll-bg"><div id="sf-service-Filebrowser-main-scroll-bg-top"></div><div id="sf-service-Filebrowser-main-scroll-bg-middle"></div><div id="sf-service-Filebrowser-main-scroll-bg-bottom"></div></div><div id="sf-service-Filebrowser-main-scroll-body"><div id="sf-service-Filebrowser-main-scroll-body-top"></div><div id="sf-service-Filebrowser-main-scroll-body-middle"></div><div id="sf-service-Filebrowser-main-scroll-body-bottom"></div></div></div><div id="sf-service-Filebrowser-main-loading"></div></div></div>'].join("")).appendTo("body");
        $('<div id="sf-sf-service-Filebrowser-main-bg-dim"></div>').appendTo("body");
        $("#sf-service-Filebrowser-main-keyhelp").sfKeyHelp({iconset: "GRAY", "return": aw.lang.SID_RETURN});
        this.show = function () {
            $("#sf-service-Filebrowser-main-title").html("" + aY);
            var bP = aw.scene._isSceneArchUsed();
            if (aw.scene._isSceneArchUsed()) {
                aM = aw.scene.pushKeyHandler(function (bQ) {
                    aw.service.FileBrowser.handleKeydown(bQ)
                }, {context: "sf.service.Filebrowser"})
            } else {
                $("#" + a8).focus();
                $("#" + a8).bind("keydown", function () {
                    aw.service.FileBrowser.handleKeydown(aw.core.mapAliasedKeys(event.keyCode) || event.keyCode)
                }, false)
            }
            document.getElementById("sf-service-Filebrowser-main-button").onclick = function () {
                bFocusBox = false;
                $("#sf-service-Filebrowser-main-focus").hide();
                for (var bQ = 0; bQ < g.length; bQ++) {
                    $("#sf-service-Filebrowser-main-item" + bQ + "-label").css({color: "#ffffff"})
                }
                $(".sf-service-Filebrowser-main-cancelbutton-l").addClass("sf-service-Filebrowser-main-button-focus-1");
                $(".sf-service-Filebrowser-main-cancelbutton-c").addClass("sf-service-Filebrowser-main-button-focus-c");
                $(".sf-service-Filebrowser-main-cancelbutton-r").addClass("sf-service-Filebrowser-main-button-focus-r");
                setTimeout(function () {
                    bD.main(aw.key.ENTER)
                }, 100)
            };
            document.getElementById("sf-service-Filebrowser-main-text").onmousewheel = function () {
                if (event.wheelDelta >= 120) {
                    x--;
                    q = q - Q;
                    if (q < 0) {
                        q = 0
                    }
                    if (x < 1) {
                        x = 1
                    } else {
                        ac.initTextView();
                        N = 0;
                        ac.setDeviceListView(q);
                        ac.mainArrowView(x);
                        ac.moveScroll("prev");
                        var bQ = -2 + (N * bH);
                        document.getElementById("sf-service-Filebrowser-main-focus").style.top = bQ + "px";
                        for (var bR = 0; bR < g.length; bR++) {
                            $("#sf-service-Filebrowser-main-item" + bR + "-label").css({color: "#ffffff"})
                        }
                        $("#sf-service-Filebrowser-main-item" + N + "-label").css({color: "#ffba19"})
                    }
                } else {
                    if (event.wheelDelta <= -120) {
                        x++;
                        if (x > aN) {
                            x = aN
                        } else {
                            ac.initTextView();
                            N = 0;
                            q = q + Q;
                            ac.setDeviceListView(q);
                            ac.mainArrowView(x);
                            ac.moveScroll("next");
                            var bQ = -2 + (N * bH);
                            document.getElementById("sf-service-Filebrowser-main-focus").style.top = bQ + "px";
                            for (var bR = 0; bR < g.length; bR++) {
                                $("#sf-service-Filebrowser-main-item" + bR + "-label").css({color: "#ffffff"})
                            }
                            $("#sf-service-Filebrowser-main-item" + N + "-label").css({color: "#ffba19"})
                        }
                    }
                }
            };
            document.getElementById("sf-service-Filebrowser-main-text-arrowUp").onclick = function () {
                x--;
                q = q - Q;
                if (q < 0) {
                    q = 0
                }
                if (x < 1) {
                    x = 1
                } else {
                    ac.initTextView();
                    N = 0;
                    ac.setDeviceListView(q);
                    ac.mainArrowView(x);
                    ac.moveScroll("prev");
                    var bQ = -2 + (N * bH);
                    document.getElementById("sf-service-Filebrowser-main-focus").style.top = bQ + "px";
                    for (var bR = 0; bR < g.length; bR++) {
                        $("#sf-service-Filebrowser-main-item" + bR + "-label").css({color: "#ffffff"})
                    }
                    $("#sf-service-Filebrowser-main-item" + N + "-label").css({color: "#ffba19"})
                }
            };
            document.getElementById("sf-service-Filebrowser-main-text-arrowDown").onclick = function () {
                x++;
                if (x > aN) {
                    x = aN
                } else {
                    ac.initTextView();
                    N = 0;
                    q = q + Q;
                    ac.setDeviceListView(q);
                    ac.mainArrowView(x);
                    ac.moveScroll("next");
                    var bQ = -2 + (N * bH);
                    document.getElementById("sf-service-Filebrowser-main-focus").style.top = bQ + "px";
                    for (var bR = 0; bR < g.length; bR++) {
                        $("#sf-service-Filebrowser-main-item" + bR + "-label").css({color: "#ffffff"})
                    }
                    $("#sf-service-Filebrowser-main-item" + N + "-label").css({color: "#ffba19"})
                }
            };
            $("#sf-service-Filebrowser-main-text-arrowUp").css({"z-index": Number(ag.zIndex) + 120});
            $("#sf-service-Filebrowser-main-text-arrowDown").css({"z-index": Number(ag.zIndex) + 120});
            if (aO) {
                ac.setFocus(N)
            }
            $("#sf-service-Filebrowser-main").css({
                top: ($(window).height() - $("#sf-service-Filebrowser-main").height()) / 2 + "px",
                left: ($(window).width() - $("#sf-service-Filebrowser-main").width()) / 2 + "px"
            });
            $("#sf-service-Filebrowser-main").show();
            $("#sf-service-Filebrowser-main-button").show();
            $("#sf-service-Filebrowser-main-text").show();
            $("#sf-service-Filebrowser-main-message").show();
            $("#sf-service-Filebrowser-main-keyhelp").show()
        };
        this.hide = function () {
            ac.initTextView();
            aFilepath = new Array();
            bFocusBox = true;
            aO = true;
            M = false;
            $("#sf-service-Filebrowser-main-item" + N + "-label").css({color: "#ffffff"});
            N = 0;
            bG = 0;
            q = 0;
            x = 1;
            aU = 0;
            $("#sf-service-Filebrowser-Main-scroll-body").css({top: "0"});
            $("#sf-service-Filebrowser-main-message").html("");
            $(".sf-service-Filebrowser-main-cancelbutton-l").removeClass("sf-service-Filebrowser-main-button-focus-1");
            $(".sf-service-Filebrowser-main-cancelbutton-c").removeClass("sf-service-Filebrowser-main-button-focus-c");
            $(".sf-service-Filebrowser-main-cancelbutton-r").removeClass("sf-service-Filebrowser-main-button-focus-r");
            $("#sf-service-Filebrowser-main").hide();
            $("#sf-sf-service-Filebrowser-main-bg-dim").remove();
            $("#sf-service-Filebrowser-disconnectedDevicePopup").remove();
            $("#sf-service-Filebrowser-selectAll").remove()
        };
        this.setDeviceListView = function (bR) {
            if (aO) {
                var bS = bR + Q;
                var bP = 0;
                $("#sf-service-Filebrowser-main-message").html("" + aw.lang.COM_CHOOSE_A_DEVICE_TO_OPEN_A_FILE);
                if (bS >= g.length) {
                    bS = g.length
                }
                for (var bQ = bR; bQ < bS; bQ++) {
                    bP = (bQ % Q);
                    $("#sf-service-Filebrowser-main-text").append("<div id='sf-service-Filebrowser-main-item" + bP + "'  class='sf-service-Filebrowser-main-item-style'></div>");
                    $("#sf-service-Filebrowser-main-item" + bP).append("<div id='sf-service-Filebrowser-main-item" + bP + "-icon'  class='sf-service-Filebrowser-main-icon-style' ></div>");
                    $("#sf-service-Filebrowser-main-item" + bP).append("<div id='sf-service-Filebrowser-main-item" + bP + "-label'  class='sf-service-Filebrowser-main-item-label-style' ></div>");
                    $("#sf-service-Filebrowser-main-item" + bP).append("<div id='sf-service-Filebrowser-main-item" + bP + "-label-length'  class='sf-service-Filebrowser-main-item-label-length' ></div>");
                    $("#sf-service-Filebrowser-main-item" + bP + "-label").addClass("sf-ui-common-ellipsis");
                    $("#sf-service-Filebrowser-main-item" + bP).append("<div id='sf-service-Filebrowser-main-item" + bP + "-mouse-focus'  class='sf-service-Filebrowser-main-mouse-focus-style' ></div>");
                    $("#sf-service-Filebrowser-main-item" + bP + "-mouse-focus").css({"z-index": Number(ag.zIndex) + 120});
                    $("#sf-service-Filebrowser-main-item" + bP + "-label").html(g[bQ].DeviceName);
                    $("#sf-service-Filebrowser-main-item" + bP + "-label-length").html(g[bQ].DeviceName);
                    $("#sf-service-Filebrowser-main-item" + bP + "-label").css({"z-index": Number(ag.zIndex) + 50});
                    document.getElementById("sf-service-Filebrowser-main-item" + bP + "-mouse-focus").onclick = function () {
                        bc()
                    };
                    $("#sf-service-Filebrowser-main-item" + bP + "-label").show();
                    if (g[bQ].deviceType == "USB") {
                        $("#sf-service-Filebrowser-main-item" + bP + "-icon").attr("class", "sf-service-Filebrowser-main-item-icon-usb")
                    } else {
                        if (g[bQ].deviceType == "DLNA") {
                            $("#sf-service-Filebrowser-main-item" + bP + "-icon").attr("class", "sf-service-Filebrowser-main-item-icon-dlna")
                        }
                    }
                    $("#sf-service-Filebrowser-main-item" + bP + "-icon").show();
                    document.getElementById("sf-service-Filebrowser-main-item" + bP).style.top = (bH * bP) + "px"
                }
                document.getElementById("sf-service-Filebrowser-main-item" + N + "-label").style.color = "#ffba19"
            }
        };
        this.setFocus = function (bT) {
            var bP = -2 + (bT * bH);
            document.getElementById("sf-service-Filebrowser-main-focus").style.top = bP + "px";
            var bS = document.getElementById("sf-service-Filebrowser-main-item" + bT + "-label-length");
            var bQ = bS.offsetWidth;
            var bR = parseFloat($("#sf-service-Filebrowser-main-item" + bT + "-label").css("width"), 10);
            if (bQ >= bR) {
                $("#sf-service-Filebrowser-main-item" + bT + "-label").marquee(true);
                $("#sf-service-Filebrowser-main-item" + bT + "-label").removeClass("sf-ui-common-ellipsis")
            }
            $("#sf-service-Filebrowser-main-item" + bT + "-label").css({color: "#ffba19"})
        };
        this.removeFocus = function (bP) {
            $("#sf-service-Filebrowser-main-item" + bP + "-label").marquee(false);
            $("#sf-service-Filebrowser-main-item" + bP + "-label").addClass("sf-ui-common-ellipsis");
            document.getElementById("sf-service-Filebrowser-main-item" + bP + "-label").scrollLeft = 0;
            $("#sf-service-Filebrowser-main-item" + bP + "-label").css({color: "#ffffff"})
        };
        this.moveScroll = function (bP) {
            if (bP == "prev") {
                aU = aU - bm;
                $("#sf-service-Filebrowser-main-scroll-body").css({top: aU});
                if (aU < 0) {
                    $("#sf-service-Filebrowser-main-scroll-body").css({top: "0"})
                }
            } else {
                if (bP == "next") {
                    aU = aU + bm;
                    $("#sf-service-Filebrowser-main-scroll-body").css({top: aU});
                    if (aU >= bs) {
                        aU = aU - bm
                    }
                }
            }
        };
        this.initTextView = function () {
            X = "main";
            aK = false;
            if (aO) {
                var bP = -2 + (N * bH);
                document.getElementById("sf-service-Filebrowser-main-focus").style.top = bP + "px";
                $("#sf-service-Filebrowser-main-focus").show();
                $(".sf-service-Filebrowser-main-cancelbutton-l").removeClass("sf-service-Filebrowser-main-button-focus-1");
                $(".sf-service-Filebrowser-main-cancelbutton-c").removeClass("sf-service-Filebrowser-main-button-focus-c");
                $(".sf-service-Filebrowser-main-cancelbutton-r").removeClass("sf-service-Filebrowser-main-button-focus-r");
                bFocusBox = true
            } else {
                bFocusBox = false;
                $("#sf-service-Filebrowser-main-focus").hide();
                $(".sf-service-Filebrowser-main-cancelbutton-l").addClass("sf-service-Filebrowser-main-button-focus-1");
                $(".sf-service-Filebrowser-main-cancelbutton-c").addClass("sf-service-Filebrowser-main-button-focus-c");
                $(".sf-service-Filebrowser-main-cancelbutton-r").addClass("sf-service-Filebrowser-main-button-focus-r")
            }
            for (var bQ = 0; bQ < Q; bQ++) {
                $("#sf-service-Filebrowser-main-item" + bQ).empty()
            }
        };
        this.mainArrowView = function (bP) {
            if (aN <= 1) {
                $("#sf-service-Filebrowser-main-text-arrowUp").hide();
                $("#sf-service-Filebrowser-main-text-arrowDown").hide()
            } else {
                if (bP == 1 && aN != 1) {
                    $("#sf-service-Filebrowser-main-text-arrowUp").hide();
                    $("#sf-service-Filebrowser-main-text-arrowDown").show()
                } else {
                    if (bP == aN) {
                        $("#sf-service-Filebrowser-main-text-arrowUp").show();
                        $("#sf-service-Filebrowser-main-text-arrowDown").hide()
                    } else {
                        $("#sf-service-Filebrowser-main-text-arrowDown").show();
                        $("#sf-service-Filebrowser-main-text-arrowUp").show()
                    }
                }
            }
        }
    }

    function bd() {
        $('<div id="sf-service-Filebrowser-file"></div>').html(['<div id="sf-service-Filebrowser-file-message"></div><div id="sf-service-Filebrowser-file-message-length"></div><div id="sf-service-Filebrowser-file-size-message"></div><div id="sf-service-Filebrowser-file-button"><div id="sf-service-Filebrowser-file-button0"><div id="sf-service-Filebrowser-file-button0-l"></div><div id="sf-service-Filebrowser-file-button0-c">' + aw.lang.SID_OK + '</div><div id="sf-service-Filebrowser-file-button0-r"></div></div><div id="sf-service-Filebrowser-file-button1"><div id="sf-service-Filebrowser-file-button1-l"></div><div id="sf-service-Filebrowser-file-button1-c">' + aw.lang.SID_CANCEL + '</div><div id="sf-service-Filebrowser-file-button1-r"></div></div></div><div id="sf-service-Filebrowser-file-keyhelp"></div><div id="sf-service-Filebrowser-file-text"><div id="sf-service-Filebrowser-file-text-arrowUp"></div><div id="sf-service-Filebrowser-file-text-arrowDown"></div><div id="sf-service-Filebrowser-file-text-top-l"></div><div id="sf-service-Filebrowser-file-text-top-c"></div><div id="sf-service-Filebrowser-file-text-top-r"></div><div id="sf-service-Filebrowser-file-text-mid-l"></div><div id="sf-service-Filebrowser-file-text-mid-c"></div><div id="sf-service-Filebrowser-file-text-mid-r"></div><div id="sf-service-Filebrowser-file-text-bottom-l"></div><div id="sf-service-Filebrowser-file-text-bottom-c"></div><div id="sf-service-Filebrowser-file-text-bottom-r"></div><div id="sf-service-Filebrowser-file-scroll"><div id="sf-service-Filebrowser-file-scroll-bg"><div id="sf-service-Filebrowser-file-scroll-bg-top"></div><div id="sf-service-Filebrowser-file-scroll-bg-middle"></div><div id="sf-service-Filebrowser-file-scroll-bg-bottom"></div></div><div id="sf-service-Filebrowser-file-scroll-body"><div id="sf-service-Filebrowser-file-scroll-body-top"></div><div id="sf-service-Filebrowser-file-scroll-body-middle"></div><div id="sf-service-Filebrowser-file-scroll-body-bottom"></div></div></div><div id="sf-service-Filebrowser-file-loading"></div></div><div id="sf-service-Filebrowser-file-text-Item"></div>'].join("")).appendTo("body");
        $("#sf-service-Filebrowser-file-keyhelp").sfKeyHelp({iconset: "GRAY", "return": aw.lang.SID_RETURN});
        $('<div id="sf-service-Filebrowser-disconnectedDevicePopup"></div>').appendTo("body");
        $('<div id="sf-service-Filebrowser-selectAll"></div>').appendTo("body");
        $("#sf-service-Filebrowser-disconnectedDevicePopup").hide();
        $("#sf-service-Filebrowser-selectAll").hide();
        this.show = function () {
            $("#sf-service-Filebrowser-file").css({
                top: ($(window).height() - $("#sf-service-Filebrowser-file").height()) / 2 + "px",
                left: ($(window).width() - $("#sf-service-Filebrowser-file").width()) / 2 + "px"
            });
            $("#sf-service-Filebrowser-disconnectedDevicePopup").css({
                top: ($(window).height() - $("#sf-service-Filebrowser-disconnectedDevicePopup").height()) / 2 + "px",
                left: ($(window).width() - $("#sf-service-Filebrowser-disconnectedDevicePopup").width()) / 2 + "px"
            });
            $("#sf-service-Filebrowser-selectAll").css({
                top: ($(window).height() - $("#sf-service-Filebrowser-selectAll").height()) / 2 + "px",
                left: ($(window).width() - $("#sf-service-Filebrowser-selectAll").width()) / 2 + "px"
            });
            if (aA.height == 720) {
                if (e == "single") {
                    ak = 288
                } else {
                    ak = 326
                }
            } else {
                if (aA.height == 1080) {
                    if (e == "single") {
                        ak = 432
                    } else {
                        ak = 476
                    }
                } else {
                    if (aA.height == 540) {
                        if (e == "single") {
                            ak = 216
                        } else {
                            ak = 238
                        }
                    }
                }
            }
            $("#sf-service-Filebrowser-file-message").css({"z-index": Number(ag.zIndex) + 110});
            $("#sf-service-Filebrowser-file-size-message").css({"z-index": Number(ag.zIndex) + 110});
            document.getElementById("sf-service-Filebrowser-file-button1").style.top = ak + "px";
            $("#sf-service-Filebrowser-file-text-Item").append("<div id='sf-service-Filebrowser-file-item-Focus'  class='sf-service-Filebrowser-file-item-Focus-style'></div>");
            $("#sf-service-Filebrowser-file-item-Focus").append("<div id='sf-service-Filebrowser-file-item-Focus-Top'  class='sf-service-Filebrowser-file-item-Focus-style-Top' > <div class='leftFocusTop'></div><div class='centerFocusTop'></div><div class='rightFocusTop'></div></div>");
            if (s == aD) {
                $("#sf-service-Filebrowser-file-item-Focus").append("<div id='sf-service-Filebrowser-file-item-Focus-Mid'  class='sf-service-Filebrowser-file-item-Focus-style-Mid_Music' > <div class='leftFocusMid_Music'></div><div class='centerFocusMid_Music'></div><div class='rightFocusMid_Music'></div></div>");
                $("#sf-service-Filebrowser-file-item-Focus").append("<div id='sf-service-Filebrowser-file-item-Focus-Btm'  class='sf-service-Filebrowser-file-item-Focus-style-Btm_Music' > <div class='leftFocusBtm_Music'></div><div class='centerFocusBtm_Music'></div><div class='rightFocusBtm_Music'></div></div>")
            } else {
                $("#sf-service-Filebrowser-file-item-Focus").append("<div id='sf-service-Filebrowser-file-item-Focus-Mid'  class='sf-service-Filebrowser-file-item-Focus-style-Mid' > <div class='leftFocusMid'></div><div class='centerFocusMid'></div><div class='rightFocusMid'></div></div>");
                $("#sf-service-Filebrowser-file-item-Focus").append("<div id='sf-service-Filebrowser-file-item-Focus-Btm'  class='sf-service-Filebrowser-file-item-Focus-style-Btm' > <div class='leftFocusBtm'></div><div class='centerFocusBtm'></div><div class='rightFocusBtm'></div></div>")
            }
            $(".sf-service-Filebrowser-file-item-Focus-style").css({height: aX + "px"});
            $(".sf-service-Filebrowser-file-item-Focus-style").css({"z-index": Number(ag.zIndex) + 80});
            document.getElementById("sf-service-Filebrowser-file-item-Focus").style.left = bJ + "px";
            document.getElementById("sf-service-Filebrowser-file-item-Focus").style.top = bw + "px";
            $("#sf-service-Filebrowser-file").show();
            $("#sf-service-Filebrowser-file-item-Focus").show();
            document.getElementById("sf-service-Filebrowser-file-text-Item").onmousewheel = function () {
                if (!al) {
                    if (event.wheelDelta >= 120) {
                        ab.removeFocus(P);
                        P = P - w;
                        alert("[AF Filebrowser] [up]nFocusIndex :" + P);
                        if (ao == true) {
                            aG--;
                            if (aG < 1) {
                                P = P + w;
                                aG = 1
                            }
                            if (be != 0) {
                                $("#sf-service-Filebrowser-file-loading").sfLoading("show");
                                al = true;
                                ax = true;
                                if (P < 0) {
                                    P = P + w
                                }
                                be = be - w;
                                for (var bR = a6; bR <= S.length - 1; bR++) {
                                    var bQ = S[bR];
                                    if (bQ in bu) {
                                        delete bu[bQ]
                                    }
                                }
                                a2--;
                                if (a2 == 1) {
                                    aQ = aQ - V
                                } else {
                                    aQ = aQ - w
                                }
                                bn = bn - w;
                                ab.setInitFileView();
                                ab.fileArrowView(a2);
                                ab.moveScroll("prev");
                                alert("[AF Filebrowser] [up]nPageStartNum :" + be);
                                ab.showFileList(be)
                            }
                        } else {
                            if (ao == false) {
                                bw = aS;
                                aG--;
                                a2--;
                                ab.setInitFileView();
                                ao = true;
                                ab.fileArrowView(a2);
                                ab.moveScroll("prev");
                                ab.showFileList(be)
                            }
                        }
                        alert("[AF Filebrowser] [up]nFocusIndex2 :" + P);
                        ab.setFocus(P)
                    } else {
                        if (event.wheelDelta <= -120) {
                            ab.removeFocus(P);
                            var bS = P % W;
                            P = P + w;
                            alert("[AF Filebrowser] [down]nFocusIndex :" + P);
                            alert("[AF Filebrowser] [down]nMaxPageNum :" + nMaxPageNum);
                            if (a2 < nMaxPageNum) {
                                aG++;
                                if (aG > A) {
                                    P = P - w;
                                    aG = A
                                }
                                if (aG != A) {
                                    $("#sf-service-Filebrowser-file-loading").sfLoading("show");
                                    al = true;
                                    ax = true;
                                    if (s == aD) {
                                        bw = z
                                    } else {
                                        bw = bE
                                    }
                                    if (ao == true) {
                                        if (P >= a.length) {
                                            P = a.length - 1
                                        }
                                        a2++;
                                        ab.setInitFileView();
                                        ao = false;
                                        ab.fileArrowView(a2);
                                        ab.moveScroll("next");
                                        ab.showFileList(be);
                                        alert("[AF Filebrowser] [down]nFocusIndex2 :" + P);
                                        ab.setFocus(P)
                                    } else {
                                        if (ao == false) {
                                            P = P - w;
                                            be = be + w;
                                            alert("[AF Filebrowser] [down]nPageStartNum : " + be);
                                            for (var bR = f; bR <= bA; bR++) {
                                                var bQ = S[bR];
                                                if (bQ in bu) {
                                                    delete bu[bQ]
                                                }
                                            }
                                            if (a2 == 2) {
                                                aQ = aQ + V
                                            } else {
                                                aQ = aQ + w
                                            }
                                            bn = bn + w;
                                            a2++;
                                            bg(aQ)
                                        }
                                    }
                                }
                            } else {
                                P = P - w;
                                alert("[AF Filebrowser] [down]nFocusIndex2 :" + P);
                                ab.setFocus(P)
                            }
                        }
                    }
                }
            };
            if (e == "single") {
                for (var bP = 0; bP < 2; bP++) {
                    $("#sf-service-Filebrowser-file-button" + bP).hide()
                }
                $("#sf-service-Filebrowser-file-button1").show();
                $("#sf-service-Filebrowser-file-button1-l").addClass("sf-service-Filebrowser-file-button-nor-1");
                $("#sf-service-Filebrowser-file-button1-c").addClass("sf-service-Filebrowser-file-button-nor-c");
                $("#sf-service-Filebrowser-file-button1-r").addClass("sf-service-Filebrowser-file-button-nor-r");
                bC = aV;
                document.getElementById("sf-service-Filebrowser-file-button1").onclick = function () {
                    u()
                }
            } else {
                for (var bP = 0; bP < 2; bP++) {
                    $("#sf-service-Filebrowser-file-button" + bP).show();
                    $("#sf-service-Filebrowser-file-button" + bP + "-l").removeClass();
                    $("#sf-service-Filebrowser-file-button" + bP + "-c").removeClass();
                    $("#sf-service-Filebrowser-file-button" + bP + "-r").removeClass();
                    $("#sf-service-Filebrowser-file-button" + bP + "-l").addClass("sf-service-Filebrowser-file-button-nor-1");
                    $("#sf-service-Filebrowser-file-button" + bP + "-c").addClass("sf-service-Filebrowser-file-button-nor-c");
                    $("#sf-service-Filebrowser-file-button" + bP + "-r").addClass("sf-service-Filebrowser-file-button-nor-r");
                    document.getElementById("sf-service-Filebrowser-file-button" + bP).onclick = function () {
                        u()
                    }
                }
                if (bB == true) {
                    bC = aV;
                    $("#sf-service-Filebrowser-file-button0-l").removeClass();
                    $("#sf-service-Filebrowser-file-button0-c").removeClass();
                    $("#sf-service-Filebrowser-file-button0-r").removeClass();
                    $("#sf-service-Filebrowser-file-button0-l").addClass("sf-service-Filebrowser-file-button-dim-1");
                    $("#sf-service-Filebrowser-file-button0-c").addClass("sf-service-Filebrowser-file-button-dim-c");
                    $("#sf-service-Filebrowser-file-button0-r").addClass("sf-service-Filebrowser-file-button-dim-r");
                    document.getElementById("sf-service-Filebrowser-file-button0").onclick = null;
                    $("#sf-service-Filebrowser-file-button0").css({cursor: "default"});
                    document.getElementById("sf-service-Filebrowser-file-button1").onclick = function () {
                        u()
                    }
                }
            }
            document.getElementById("sf-service-Filebrowser-file-text-arrowUp").onclick = function () {
                ab.removeFocus(P);
                P = P - w;
                alert("[AF Filebrowser] [up]nFocusIndex :" + P);
                if (ao == true) {
                    aG--;
                    if (aG < 1) {
                        P = P + w;
                        aG = 1
                    }
                    if (be != 0) {
                        $("#sf-service-Filebrowser-file-loading").sfLoading("show");
                        al = true;
                        ax = true;
                        if (P < 0) {
                            P = P + w
                        }
                        be = be - w;
                        for (var bR = a6; bR <= S.length - 1; bR++) {
                            var bQ = S[bR];
                            if (bQ in bu) {
                                delete bu[bQ]
                            }
                        }
                        a2--;
                        if (a2 == 1) {
                            aQ = aQ - V
                        } else {
                            aQ = aQ - w
                        }
                        bn = bn - w;
                        ab.setInitFileView();
                        ab.fileArrowView(a2);
                        ab.moveScroll("prev");
                        alert("[AF Filebrowser] [up]nPageStartNum :" + be);
                        ab.showFileList(be)
                    }
                } else {
                    if (ao == false) {
                        bw = aS;
                        aG--;
                        a2--;
                        ab.setInitFileView();
                        ao = true;
                        ab.fileArrowView(a2);
                        ab.moveScroll("prev");
                        ab.showFileList(be)
                    }
                }
                alert("[AF Filebrowser] [up]nFocusIndex2 :" + P);
                ab.setFocus(P)
            };
            document.getElementById("sf-service-Filebrowser-file-text-arrowDown").onclick = function () {
                ab.removeFocus(P);
                var bS = P % W;
                P = P + w;
                alert("[AF Filebrowser] [down]nFocusIndex :" + P);
                alert("[AF Filebrowser] [down]nMaxPageNum :" + nMaxPageNum);
                if (a2 < nMaxPageNum) {
                    aG++;
                    if (aG > A) {
                        P = P - w;
                        aG = A
                    }
                    if (aG != A) {
                        $("#sf-service-Filebrowser-file-loading").sfLoading("show");
                        al = true;
                        ax = true;
                        if (s == aD) {
                            bw = z
                        } else {
                            bw = bE
                        }
                        if (ao == true) {
                            if (P >= a.length) {
                                P = a.length - 1
                            }
                            a2++;
                            ab.setInitFileView();
                            ao = false;
                            ab.fileArrowView(a2);
                            ab.moveScroll("next");
                            ab.showFileList(be);
                            alert("[AF Filebrowser] [down]nFocusIndex2 :" + P);
                            ab.setFocus(P)
                        } else {
                            if (ao == false) {
                                P = P - w;
                                be = be + w;
                                alert("[AF Filebrowser] [down]nPageStartNum : " + be);
                                for (var bR = f; bR <= bA; bR++) {
                                    var bQ = S[bR];
                                    if (bQ in bu) {
                                        delete bu[bQ]
                                    }
                                }
                                if (a2 == 2) {
                                    aQ = aQ + V
                                } else {
                                    aQ = aQ + w
                                }
                                bn = bn + w;
                                a2++;
                                bg(aQ)
                            }
                        }
                    }
                } else {
                    P = P - w;
                    alert("[AF Filebrowser] [down]nFocusIndex2 :" + P);
                    ab.setFocus(P)
                }
            };
            $("#sf-service-Filebrowser-file-text-arrowUp").css({"z-index": Number(ag.zIndex) + 110});
            $("#sf-service-Filebrowser-file-text-arrowDown").css({"z-index": Number(ag.zIndex) + 110})
        };
        this.hide = function () {
            $("#sf-service-Filebrowser-file").hide()
        };
        this.showFileList = function (bX) {
            var bY = bX;
            var bR = aFilepath.join("");
            var b0 = null;
            a = new Array();
            ad = true;
            bN = true;
            S = new Array();
            aF = new Array();
            var bS = 0;
            var bU = 0;
            f = 0;
            aL = 0;
            for (var bT = 0; bT < J; bT++) {
                if (m[bY] == undefined) {
                    alert("[AF Filebrowser] Break!!");
                    break
                } else {
                    a[bT] = m[bY];
                    $("#sf-service-Filebrowser-file-text-Item").append("<div id='sf-service-Filebrowser-file-item" + bT + "'  class='sf-service-Filebrowser-file-item-style'></div>");
                    $(".sf-service-Filebrowser-file-item-style").css({height: aX + "px"});
                    $("#sf-service-Filebrowser-file-item" + bT).append("<div id='sf-service-Filebrowser-file-item" + bT + "-Top'  class='sf-service-Filebrowser-file-item-style-Top" + bT + " ' > <div class='sf-service-Filebrowser-file-item-style-Top'><div class='leftTop'></div><div class='centerTop'></div><div class='rightTop'></div></div></div>");
                    if (s == aD) {
                        $("#sf-service-Filebrowser-file-item" + bT).append("<div id='sf-service-Filebrowser-file-item" + bT + "-Mid'  class='sf-service-Filebrowser-file-item-style-Mid" + bT + " ' > <div class='sf-service-Filebrowser-file-item-style-Mid_Music'><div class='leftMid_Music'></div><div class='centerMid_Music'></div><div class='rightMid_Music'></div></div></div>");
                        $("#sf-service-Filebrowser-file-item" + bT).append("<div id='sf-service-Filebrowser-file-item" + bT + "-Btm'  class='sf-service-Filebrowser-file-item-style-Btm" + bT + " ' > <div class='sf-service-Filebrowser-file-item-style-Btm_Music'><div class='leftBtm_Music'></div><div class='centerBtm_Music'></div><div class='rightBtm_Music'></div></div></div>")
                    } else {
                        $("#sf-service-Filebrowser-file-item" + bT).append("<div id='sf-service-Filebrowser-file-item" + bT + "-Mid'  class='sf-service-Filebrowser-file-item-style-Mid" + bT + " ' > <div class='sf-service-Filebrowser-file-item-style-Mid'><div class='leftMid'></div><div class='centerMid'></div><div class='rightMid'></div></div></div>");
                        $("#sf-service-Filebrowser-file-item" + bT).append("<div id='sf-service-Filebrowser-file-item" + bT + "-Btm'  class='sf-service-Filebrowser-file-item-style-Btm" + bT + " ' > <div class='sf-service-Filebrowser-file-item-style-Btm'><div class='leftBtm'></div><div class='centerBtm'></div><div class='rightBtm'></div></div></div>")
                    }
                    $("#sf-service-Filebrowser-file-item" + bT).append("<div id='sf-service-Filebrowser-file-item" + bT + "-label'  class='sf-service-Filebrowser-file-item-label-style' ></div>");
                    $("#sf-service-Filebrowser-file-item" + bT + "-label").addClass("sf-ui-common-ellipsis");
                    $("#sf-service-Filebrowser-file-item" + bT).append("<div id='sf-service-Filebrowser-file-item" + bT + "-label-length'  class='sf-service-Filebrowser-file-item-label-length' ></div>");
                    alert("[AF Filebrowser] aFileList[" + bT + "].filename : " + a[bT].filename);
                    if (a[bT].isDir == true) {
                        if (a[bT].filename == "..") {
                            $("#sf-service-Filebrowser-file-item" + bT).append("<div id='sf-service-Filebrowser-file-item" + bT + "-upper'  class='sf-service-Filebrowser-file-item-upper-style' ></div>");
                            $(".sf-service-Filebrowser-file-item-upper-style").css({top: bO + "px"});
                            if (aFilepath.join("") == au) {
                                $("#sf-service-Filebrowser-file-item" + bT + "-label").html("" + aw.lang.COM_GO_TO_DEVICE_LIST);
                                $("#sf-service-Filebrowser-file-item" + bT + "-label-length").html("" + aw.lang.COM_GO_TO_DEVICE_LIST)
                            } else {
                                $("#sf-service-Filebrowser-file-item" + bT + "-label").html("" + aw.lang.COM_GO_TO_UPPER_FOLDER);
                                $("#sf-service-Filebrowser-file-item" + bT + "-label-length").html("" + aw.lang.COM_GO_TO_UPPER_FOLDER)
                            }
                        } else {
                            $("#sf-service-Filebrowser-file-item" + bT).append("<div id='sf-service-Filebrowser-file-item" + bT + "-folder'  class='sf-service-Filebrowser-file-item-folder-style' ></div>");
                            $(".sf-service-Filebrowser-file-item-folder-style").css({top: bO + "px"});
                            $("#sf-service-Filebrowser-file-item" + bT + "-label").html("" + a[bT].filename);
                            $("#sf-service-Filebrowser-file-item" + bT + "-label-length").html("" + a[bT].filename)
                        }
                    } else {
                        if (s == aD) {
                            $("#sf-service-Filebrowser-file-item" + bT).append("<div id='sf-service-Filebrowser-file-item" + bT + "-image'  class='sf-service-Filebrowser-file-item-image-style_Music' ></div>")
                        } else {
                            $("#sf-service-Filebrowser-file-item" + bT).append("<div id='sf-service-Filebrowser-file-item" + bT + "-image'  class='sf-service-Filebrowser-file-item-image-style' ></div>")
                        }
                        if (s == H) {
                            $("#sf-service-Filebrowser-file-item" + bT + "-image").attr("class", "sf-service-Filebrowser-file-image-defaultImage")
                        } else {
                            if (s == T) {
                                $("#sf-service-Filebrowser-file-item" + bT + "-image").attr("class", "sf-service-Filebrowser-file-image-defaultVideo")
                            } else {
                                if (s == aD) {
                                    $("#sf-service-Filebrowser-file-item" + bT + "-image").attr("class", "sf-service-Filebrowser-file-image-defaultMusic");
                                    $(".sf-service-Filebrowser-file-image-defaultMusic").css({top: bO + "px"})
                                }
                            }
                        }
                        if (g[bG].deviceType == "USB") {
                            b0 = bR + a[bT].filename;
                            S[bT] = b0.replace("$usb_DIR", "/dtv/usb");
                            if (bu[S[bT]] !== undefined) {
                                if (bN == true) {
                                    f = bT;
                                    bN = false
                                }
                                var bZ = S[bT];
                                if (bZ in bu) {
                                    if (bu[bZ].ThumbnailFileName == "defaultImage") {
                                        var bP = bu[bZ].ThumbnailFileName
                                    } else {
                                        var bP = bp + bu[bZ].ThumbnailFileName
                                    }
                                }
                                if (bP == "defaultImage") {
                                    if (s == H) {
                                        $("#sf-service-Filebrowser-file-item" + bT + "-image").attr("class", "sf-service-Filebrowser-file-image-defaultImage")
                                    } else {
                                        if (s == T) {
                                            $("#sf-service-Filebrowser-file-item" + bT + "-image").attr("class", "sf-service-Filebrowser-file-image-defaultVideo")
                                        } else {
                                            if (s == aD) {
                                                $("#sf-service-Filebrowser-file-item" + bT + "-image").attr("class", "sf-service-Filebrowser-file-image-defaultMusic");
                                                $(".sf-service-Filebrowser-file-image-defaultMusic").css({top: bO + "px"})
                                            }
                                        }
                                    }
                                } else {
                                    if (s == aD) {
                                        $("#sf-service-Filebrowser-file-item" + bT + "-image").attr("class", "sf-service-Filebrowser-file-item-image-style_Music");
                                        $(".sf-service-Filebrowser-file-item-image-style_Music").css({top: aR + "px"})
                                    } else {
                                        $("#sf-service-Filebrowser-file-item" + bT + "-image").attr("class", "sf-service-Filebrowser-file-item-image-style")
                                    }
                                    var bW = C(bP, L, E);
                                    ah("sf-service-Filebrowser-file-item" + bT + "-image", bW)
                                }
                            } else {
                                if (ad == true) {
                                    aL = bT;
                                    ad = false
                                }
                            }
                        } else {
                            if (g[bG].deviceType == "DLNA") {
                                S[bT] = a[bT];
                                if (bu[S[bT].path] !== undefined) {
                                    if (bN == true) {
                                        f = bT;
                                        bN = false
                                    }
                                    var bZ = S[bT].path;
                                    if (bZ in bu) {
                                        if (bu[bZ].ThumbnailFileName == "defaultImage") {
                                            var bP = bu[bZ].ThumbnailFileName
                                        } else {
                                            var bP = bp + bu[bZ].ThumbnailFileName
                                        }
                                    }
                                    if (bP == "defaultImage") {
                                        if (s == H) {
                                            $("#sf-service-Filebrowser-file-item" + bT + "-image").attr("class", "sf-service-Filebrowser-file-image-defaultImage")
                                        } else {
                                            if (s == T) {
                                                $("#sf-service-Filebrowser-file-item" + bT + "-image").attr("class", "sf-service-Filebrowser-file-image-defaultVideo")
                                            } else {
                                                if (s == aD) {
                                                    $("#sf-service-Filebrowser-file-item" + bT + "-image").attr("class", "sf-service-Filebrowser-file-image-defaultMusic");
                                                    $(".sf-service-Filebrowser-file-image-defaultMusic").css({top: bO + "px"})
                                                }
                                            }
                                        }
                                    } else {
                                        if (s == aD) {
                                            $("#sf-service-Filebrowser-file-item" + bT + "-image").attr("class", "sf-service-Filebrowser-file-item-image-style_Music")
                                        } else {
                                            $("#sf-service-Filebrowser-file-item" + bT + "-image").attr("class", "sf-service-Filebrowser-file-item-image-style")
                                        }
                                        var bW = C(bP, L, E);
                                        ah("sf-service-Filebrowser-file-item" + bT + "-image", bW)
                                    }
                                } else {
                                    if (ad == true) {
                                        aL = bT;
                                        ad = false
                                    }
                                }
                            }
                        }
                        $("#sf-service-Filebrowser-file-item" + bT + "-label").html("" + a[bT].filename);
                        $("#sf-service-Filebrowser-file-item" + bT + "-label-length").html("" + a[bT].filename);
                        if (e == "multi") {
                            $("#sf-service-Filebrowser-file-item" + bT).append("<div id='sf-service-Filebrowser-file-item" + bT + "-checkbox'  class='sf-service-Filebrowser-file-item-checkbox-style'></div>");
                            $("#sf-service-Filebrowser-file-item" + bT).append("<div id='sf-service-Filebrowser-file-item" + bT + "-check'  class='sf-service-Filebrowser-file-item-check-style' ></div>");
                            ab.showChecked(aFilepath, bT)
                        }
                    }
                    bY++;
                    var bV = bT % W;
                    if (bV >= 3) {
                        if (s == aD) {
                            document.getElementById("sf-service-Filebrowser-file-item" + bT).style.top = (bw + af * bS) + "px"
                        } else {
                            document.getElementById("sf-service-Filebrowser-file-item" + bT).style.top = (bw + ap * bS) + "px"
                        }
                        document.getElementById("sf-service-Filebrowser-file-item" + bT).style.left = (bJ + a7 * bU) + "px";
                        if (bU >= 3) {
                            bU = 0
                        }
                        bS++
                    } else {
                        if (s == aD) {
                            document.getElementById("sf-service-Filebrowser-file-item" + bT).style.top = (bw + af * bS) + "px"
                        } else {
                            document.getElementById("sf-service-Filebrowser-file-item" + bT).style.top = (bw + ap * bS) + "px"
                        }
                        document.getElementById("sf-service-Filebrowser-file-item" + bT).style.left = (bJ + a7 * bU) + "px";
                        bU++
                    }
                }
                $("#sf-service-Filebrowser-file-item" + bT).append("<div id='sf-service-Filebrowser-file-item-mouse" + bT + "'  class='sf-service-Filebrowser-file-item-mouse-focus-style'></div>");
                $(".sf-service-Filebrowser-file-item-mouse-focus-style").css({
                    height: aX + "px",
                    "z-index": Number(ag.zIndex) + 120
                });
                if (ao == true) {
                    if (bT < a6) {
                        document.getElementById("sf-service-Filebrowser-file-item-mouse" + bT).onclick = function () {
                            bL()
                        };
                        document.getElementById("sf-service-Filebrowser-file-item-mouse" + bT).style.cursor = "pointer"
                    } else {
                        document.getElementById("sf-service-Filebrowser-file-item-mouse" + bT).style.cursor = "default"
                    }
                } else {
                    if (ao == false) {
                        if (bT > bA) {
                            document.getElementById("sf-service-Filebrowser-file-item-mouse" + bT).onclick = function () {
                                bL()
                            };
                            document.getElementById("sf-service-Filebrowser-file-item-mouse" + bT).style.cursor = "pointer"
                        } else {
                            document.getElementById("sf-service-Filebrowser-file-item-mouse" + bT).style.cursor = "default"
                        }
                    }
                }
            }
            if (g[bG].deviceType == "USB") {
                var bQ = bo.GetFirmware();
                if (S[aL] != undefined && (s != T || bQ >= "T-INFOLINK2012-1012")) {
                    t(S[aL])
                } else {
                    setTimeout(function () {
                        $("#sf-service-Filebrowser-file-loading").sfLoading("hide");
                        al = false;
                        ax = false;
                        alert("[AF Filebrowser] bReturnKeyFlag : " + aa);
                        if (aa == true) {
                            bj();
                            ab.hide();
                            X = "main";
                            ac.hide()
                        }
                    }, 100)
                }
            }
            if (g[bG].deviceType == "DLNA") {
                var bQ = bo.GetFirmware();
                if (S[aL] != undefined && (s != T || bQ >= "T-INFOLINK2012-1012")) {
                    t(S[aL].thumbnail)
                } else {
                    setTimeout(function () {
                        $("#sf-service-Filebrowser-file-loading").sfLoading("hide");
                        al = false;
                        ax = false;
                        alert("[AF Filebrowser] bReturnKeyFlag : " + aa);
                        if (aa == true) {
                            bj();
                            ab.hide();
                            X = "main";
                            ac.hide()
                        }
                    }, 100)
                }
            }
        };
        this.setFocus = function (bV) {
            if (e == "single") {
                $("#sf-service-Filebrowser-file-size-message").html("");
                if (!a[bV].isDir) {
                    if (a[bV].size < aB) {
                        if (a[bV].size < aH) {
                            if (a[bV].size < b) {
                                var bS = Number(a[bV].size) / F;
                                ab.setSingleModeGuideMessage(a[bV].filename, bS, aw.lang.SID_KB)
                            } else {
                                var bS = Number(a[bV].size) / b;
                                ab.setSingleModeGuideMessage(a[bV].filename, bS, aw.lang.SID_MB)
                            }
                        } else {
                            var bS = Number(a[bV].size) / aH;
                            ab.setSingleModeGuideMessage(a[bV].filename, bS, aw.lang.SID_GB)
                        }
                    } else {
                        var bS = Number(a[bV].size) / aB;
                        ab.setSingleModeGuideMessage(a[bV].filename, bS, aw.lang.SID_TB)
                    }
                } else {
                    if (s == H) {
                        $("#sf-service-Filebrowser-file-message").html("" + aw.lang.COM_SELECT_A_PHOTO)
                    } else {
                        if (s == T) {
                            $("#sf-service-Filebrowser-file-message").html("" + aw.lang.COM_SELECT_A_VIDEO)
                        } else {
                            if (s == aD) {
                                $("#sf-service-Filebrowser-file-message").html("" + aw.lang.COM_SELECT_A_SONG)
                            }
                        }
                    }
                }
            }
            var bU = parseFloat($("#sf-service-Filebrowser-file-item" + bV).css("left"), 10);
            var bP = parseFloat($("#sf-service-Filebrowser-file-item" + bV).css("top"), 10);
            document.getElementById("sf-service-Filebrowser-file-item-Focus").style.left = bU + "px";
            document.getElementById("sf-service-Filebrowser-file-item-Focus").style.top = bP + "px";
            $("#sf-service-Filebrowser-file-item-Focus").show();
            var bT = document.getElementById("sf-service-Filebrowser-file-item" + bV + "-label-length");
            var bQ = bT.offsetWidth;
            var bR = parseFloat($("#sf-service-Filebrowser-file-item" + bV + "-label").css("width"), 10);
            if (bQ >= bR) {
                $("#sf-service-Filebrowser-file-item" + bV + "-label").removeClass("sf-ui-common-ellipsis");
                $("#sf-service-Filebrowser-file-item" + bV + "-label").marquee(true)
            }
            alert("[AF Filebrowser] bReturnKeyFlag : " + aa);
            if (aa == true) {
                bj();
                ab.hide();
                X = "main";
                ac.hide()
            }
        };
        this.removeFocus = function (bP) {
            $("#sf-service-Filebrowser-file-item" + bP + "-label").marquee(false);
            $("#sf-service-Filebrowser-file-item" + bP + "-label").addClass("sf-ui-common-ellipsis");
            document.getElementById("sf-service-Filebrowser-file-item" + bP + "-label").scrollLeft = 0
        };
        this.showChecked = function (bR, bS) {
            var bQ = null;
            if (g[bG].deviceType == "USB") {
                var bP = bR;
                bP = bP.join("");
                bQ = bP.replace("/dtv/usb", "$USB_DIR") + a[bS].filename
            } else {
                if (g[bG].deviceType == "DLNA") {
                    bQ = a[bS].path
                }
            }
            if (aq[bQ] !== undefined) {
                $("#sf-service-Filebrowser-file-item" + bS + "-check").addClass("sf-service-Filebrowser-file-item-checking")
            } else {
                $("#sf-service-Filebrowser-file-item" + bS + "-check").removeClass("sf-service-Filebrowser-file-item-checking")
            }
        };
        this.setMultiModeGuideMessage = function (bP, bY, bW) {
            if (s == H) {
                if (bP == 0) {
                    $("#sf-service-Filebrowser-file-message").html("" + aw.lang.COM_SELECT_PHOTOS);
                    $("#sf-service-Filebrowser-file-message-length").html("" + aw.lang.COM_SELECT_PHOTOS)
                } else {
                    var bQ = aw.lang.COM_MIX_PHOTOS_SELECTED.replace("<<A>>", bP);
                    $("#sf-service-Filebrowser-file-message").html("" + bQ);
                    $("#sf-service-Filebrowser-file-message-length").html("" + bQ)
                }
            } else {
                if (s == T) {
                    if (bP == 0) {
                        $("#sf-service-Filebrowser-file-message").html("" + aw.lang.COM_SELECT_VIDEOS);
                        $("#sf-service-Filebrowser-file-message-length").html("" + aw.lang.COM_SELECT_VIDEOS)
                    } else {
                        var bS = aw.lang.COM_MIX_VIDEOS_SELECTED.replace("<<A>>", bP);
                        $("#sf-service-Filebrowser-file-message").html("" + bS);
                        $("#sf-service-Filebrowser-file-message-length").html("" + bS)
                    }
                } else {
                    if (s == aD) {
                        if (bP == 0) {
                            $("#sf-service-Filebrowser-file-message").html("" + aw.lang.COM_SELECT_SONGS);
                            $("#sf-service-Filebrowser-file-message-length").html("" + aw.lang.COM_SELECT_SONGS)
                        } else {
                            var bT = aw.lang.COM_MIX_SONGS_SELECTED.replace("<<A>>", bP);
                            $("#sf-service-Filebrowser-file-message").html("" + bT);
                            $("#sf-service-Filebrowser-file-message-length").html("" + bT)
                        }
                    }
                }
            }
            var bR = document.getElementById("sf-service-Filebrowser-file-message-length");
            var bU = bR.offsetWidth + bi;
            var bV = parseFloat($("#sf-service-Filebrowser-file-message").css("width"), 10);
            if (bU >= bV) {
                var bX = bV + D;
                document.getElementById("sf-service-Filebrowser-file-size-message").style.left = bX + "px"
            } else {
                var bX = bU + D;
                document.getElementById("sf-service-Filebrowser-file-size-message").style.left = bU + "px"
            }
            $("#sf-service-Filebrowser-file-size-message").html("&nbsp;(" + aw.lang.SID_TOTAL_SIZE_COLON + "&nbsp;" + bY.toFixed(2) + bW + ")")
        };
        this.setSingleModeGuideMessage = function (bQ, bR, bV) {
            $("#sf-service-Filebrowser-file-message").html("" + bQ);
            $("#sf-service-Filebrowser-file-message-length").html("" + bQ);
            var bS = document.getElementById("sf-service-Filebrowser-file-message-length");
            var bU = bS.offsetWidth + bi;
            var bT = parseFloat($("#sf-service-Filebrowser-file-message").css("width"), 10);
            if (bU >= bT) {
                var bP = bT + D;
                document.getElementById("sf-service-Filebrowser-file-size-message").style.left = bP + "px"
            } else {
                var bP = bU + D;
                document.getElementById("sf-service-Filebrowser-file-size-message").style.left = bU + "px"
            }
            $("#sf-service-Filebrowser-file-size-message").html("&nbsp;(" + aw.lang.SID_SIZE_M_FILE_SIZE + ":&nbsp;" + bR.toFixed(2) + bV + ")")
        };
        this.setFileCheck = function (bT, bU) {
            var bS = null;
            if (g[bG].deviceType == "USB") {
                var bQ = bT;
                bQ = bQ.join("");
                bS = bQ.replace("/dtv/usb", "$USB_DIR") + a[bU].filename;
                alert("[AF Filebrowser] selectfilePath :" + bS)
            } else {
                if (g[bG].deviceType == "DLNA") {
                    bS = a[bU].path
                }
            }
            if (e == "multi") {
                if (aq[bS] !== undefined) {
                    var bP = G + an;
                    if (a[bU].indexNum > bP) {
                        a9--
                    }
                    alert("[AF Filebrowser] nFolderNum : " + G);
                    alert("[AF Filebrowser] nSelectFileScope : " + a9);
                    aP--;
                    delete aq[bS];
                    bl = Number(bl) - Number(a[bU].size);
                    if (bl < aB) {
                        if (bl < aH) {
                            if (bl < b) {
                                bk = bl / F;
                                ab.setMultiModeGuideMessage(aP, bk, aw.lang.SID_KB)
                            } else {
                                bk = bl / b;
                                ab.setMultiModeGuideMessage(aP, bk, aw.lang.SID_MB)
                            }
                        } else {
                            bk = bl / aH;
                            ab.setMultiModeGuideMessage(aP, bk, aw.lang.SID_GB)
                        }
                    } else {
                        bk = bl / aB;
                        ab.setMultiModeGuideMessage(aP, bk, aw.lang.SID_TB)
                    }
                    $("#sf-service-Filebrowser-file-item" + bU + "-check").removeClass("sf-service-Filebrowser-file-item-checking")
                } else {
                    if (aP >= 100) {
                        setTimeout(function () {
                            $("#sf-service-Filebrowser-selectAll").sfPopup({
                                text: aw.lang.COM_CANT_SELECT_MORE_THAN_100_FILES_MSG,
                                buttons: "OK",
                                callback: function (bV) {
                                    alert("show popup")
                                }
                            }).sfPopup("show")
                        }, 100)
                    } else {
                        var bP = G + an;
                        if (a[bU].indexNum > bP) {
                            a9++
                        }
                        aP++;
                        aq[bS] = {
                            type: Z,
                            filename: a[bU].filename,
                            size: a[bU].size,
                            width: a[bU].width,
                            height: a[bU].height
                        };
                        bl = Number(bl) + Number(a[bU].size);
                        if (bl < aB) {
                            if (bl < aH) {
                                if (bl < b) {
                                    bk = bl / F;
                                    ab.setMultiModeGuideMessage(aP, bk, aw.lang.SID_KB)
                                } else {
                                    bk = bl / b;
                                    ab.setMultiModeGuideMessage(aP, bk, aw.lang.SID_MB)
                                }
                            } else {
                                bk = bl / aH;
                                ab.setMultiModeGuideMessage(aP, bk, aw.lang.SID_GB)
                            }
                        } else {
                            bk = bl / aB;
                            ab.setMultiModeGuideMessage(aP, bk, aw.lang.SID_TB)
                        }
                        $("#sf-service-Filebrowser-file-item" + bU + "-check").addClass("sf-service-Filebrowser-file-item-checking")
                    }
                }
                bB = true;
                for (var bR in aq) {
                    bB = false
                }
                if (bB == true) {
                    document.getElementById("sf-service-Filebrowser-file-button0").onclick = null;
                    $("#sf-service-Filebrowser-file-button0").css({cursor: "default"});
                    bC = aV;
                    $("#sf-service-Filebrowser-file-button0-l").removeClass();
                    $("#sf-service-Filebrowser-file-button0-c").removeClass();
                    $("#sf-service-Filebrowser-file-button0-r").removeClass();
                    $("#sf-service-Filebrowser-file-button0-l").addClass("sf-service-Filebrowser-file-button-dim-1");
                    $("#sf-service-Filebrowser-file-button0-c").addClass("sf-service-Filebrowser-file-button-dim-c");
                    $("#sf-service-Filebrowser-file-button0-r").addClass("sf-service-Filebrowser-file-button-dim-r")
                } else {
                    document.getElementById("sf-service-Filebrowser-file-button0").onclick = function () {
                        u()
                    };
                    $("#sf-service-Filebrowser-file-button0").css({cursor: "pointer"});
                    bC = bI;
                    $("#sf-service-Filebrowser-file-button0-l").removeClass();
                    $("#sf-service-Filebrowser-file-button0-c").removeClass();
                    $("#sf-service-Filebrowser-file-button0-r").removeClass();
                    $("#sf-service-Filebrowser-file-button0-l").addClass("sf-service-Filebrowser-file-button-nor-1");
                    $("#sf-service-Filebrowser-file-button0-c").addClass("sf-service-Filebrowser-file-button-nor-c");
                    $("#sf-service-Filebrowser-file-button0-r").addClass("sf-service-Filebrowser-file-button-nor-r")
                }
            } else {
                if (e == "single") {
                    aq[bS] = {
                        type: Z,
                        filename: a[bU].filename,
                        size: a[bU].size,
                        width: a[bU].width,
                        height: a[bU].height
                    }
                }
            }
        };
        this.setSelectAll = function (bV) {
            alert("[AF Filebrowser] AllCheck!!");
            bl = 0;
            aP = 0;
            var bQ = I.length - a9;
            var bR = bQ + G;
            if (g[bG].deviceType == "USB") {
                var bP = bV;
                bP = bP.join("");
                for (var bT = 0; bT < bQ; bT++) {
                    if (!I[bT].isDir) {
                        var bU = bP.replace("/dtv/usb", "$USB_DIR") + I[bT].filename;
                        aq[bU] = {type: Z, filename: I[bT].filename, size: I[bT].size}
                    }
                }
            } else {
                if (g[bG].deviceType == "DLNA") {
                    for (var bT = 0; bT < bQ; bT++) {
                        var bU = I[bT].path;
                        aq[bU] = {type: Z, filename: I[bT].filename, size: I[bT].size}
                    }
                }
            }
            for (var bT = 0; bT < a.length; bT++) {
                if (!a[bT].isDir && a[bT].indexNum < bR) {
                    $("#sf-service-Filebrowser-file-item" + bT + "-check").addClass("sf-service-Filebrowser-file-item-checking")
                }
            }
            bB = true;
            for (var bS in aq) {
                bB = false;
                bl = Number(bl) + Number(aq[bS].size);
                aP++
            }
            if (bl < aB) {
                if (bl < aH) {
                    if (bl < b) {
                        bk = bl / F;
                        ab.setMultiModeGuideMessage(aP, bk, aw.lang.SID_KB)
                    } else {
                        bk = bl / b;
                        ab.setMultiModeGuideMessage(aP, bk, aw.lang.SID_MB)
                    }
                } else {
                    bk = bl / aH;
                    ab.setMultiModeGuideMessage(aP, bk, aw.lang.SID_GB)
                }
            } else {
                bk = bl / aB;
                ab.setMultiModeGuideMessage(aP, bk, aw.lang.SID_TB)
            }
            if (bB == true) {
                document.getElementById("sf-service-Filebrowser-file-button0").onclick = null;
                $("#sf-service-Filebrowser-file-button0").css({cursor: "default"});
                $("#sf-service-Filebrowser-file-button0-l").removeClass();
                $("#sf-service-Filebrowser-file-button0-c").removeClass();
                $("#sf-service-Filebrowser-file-button0-r").removeClass();
                $("#sf-service-Filebrowser-file-button0-l").addClass("sf-service-Filebrowser-file-button-dim-1");
                $("#sf-service-Filebrowser-file-button0-c").addClass("sf-service-Filebrowser-file-button-dim-c");
                $("#sf-service-Filebrowser-file-button0-r").addClass("sf-service-Filebrowser-file-button-dim-r")
            } else {
                document.getElementById("sf-service-Filebrowser-file-button0").onclick = function () {
                    u()
                };
                $("#sf-service-Filebrowser-file-button0").css({cursor: "pointer"});
                $("#sf-service-Filebrowser-file-button0-l").removeClass();
                $("#sf-service-Filebrowser-file-button0-c").removeClass();
                $("#sf-service-Filebrowser-file-button0-r").removeClass();
                $("#sf-service-Filebrowser-file-button0-l").addClass("sf-service-Filebrowser-file-button-nor-1");
                $("#sf-service-Filebrowser-file-button0-c").addClass("sf-service-Filebrowser-file-button-nor-c");
                $("#sf-service-Filebrowser-file-button0-r").addClass("sf-service-Filebrowser-file-button-nor-r")
            }
            setTimeout(function () {
                $("#sf-service-Filebrowser-file-loading").sfLoading("hide");
                alert("[AF Filebrowser] bReturnKeyFlag : " + aa);
                if (aa == true) {
                    bj();
                    ab.hide();
                    X = "main";
                    ac.hide()
                }
            }, 100);
            if (I.length >= 100) {
                setTimeout(function () {
                    $("#sf-service-Filebrowser-selectAll").sfPopup({
                        text: aw.lang.COM_CANT_SELECT_MORE_THAN_100_FILES_MSG,
                        buttons: "OK",
                        callback: function (bW) {
                            alert("show popup")
                        }
                    }).sfPopup("show")
                }, 100)
            }
        };
        this.setDeselectAll = function (bR) {
            alert("[AF Filebrowser] DeselectAll!!");
            bl = 0;
            aP = 0;
            a9 = 0;
            aq = {};
            for (var bQ = 0; bQ < a.length; bQ++) {
                if (!a[bQ].isDir) {
                    $("#sf-service-Filebrowser-file-item" + bQ + "-check").removeClass("sf-service-Filebrowser-file-item-checking")
                }
            }
            ab.setMultiModeGuideMessage(aP, bl, aw.lang.SID_KB);
            bB = true;
            for (var bP in aq) {
                bB = false
            }
            if (bB == true) {
                document.getElementById("sf-service-Filebrowser-file-button0").onclick = null;
                $("#sf-service-Filebrowser-file-button0").css({cursor: "default"});
                $("#sf-service-Filebrowser-file-button0-l").removeClass();
                $("#sf-service-Filebrowser-file-button0-c").removeClass();
                $("#sf-service-Filebrowser-file-button0-r").removeClass();
                $("#sf-service-Filebrowser-file-button0-l").addClass("sf-service-Filebrowser-file-button-dim-1");
                $("#sf-service-Filebrowser-file-button0-c").addClass("sf-service-Filebrowser-file-button-dim-c");
                $("#sf-service-Filebrowser-file-button0-r").addClass("sf-service-Filebrowser-file-button-dim-r")
            } else {
                document.getElementById("sf-service-Filebrowser-file-button0").onclick = function () {
                    u()
                };
                $("#sf-service-Filebrowser-file-button0").css({cursor: "pointer"});
                $("#sf-service-Filebrowser-file-button0-l").removeClass();
                $("#sf-service-Filebrowser-file-button0-c").removeClass();
                $("#sf-service-Filebrowser-file-button0-r").removeClass();
                $("#sf-service-Filebrowser-file-button0-l").addClass("sf-service-Filebrowser-file-button-nor-1");
                $("#sf-service-Filebrowser-file-button0-c").addClass("sf-service-Filebrowser-file-button-nor-c");
                $("#sf-service-Filebrowser-file-button0-r").addClass("sf-service-Filebrowser-file-button-nor-r")
            }
            setTimeout(function () {
                $("#sf-service-Filebrowser-file-loading").sfLoading("hide");
                alert("[AF Filebrowser] bReturnKeyFlag : " + aa);
                if (aa == true) {
                    bj();
                    ab.hide();
                    X = "main";
                    ac.hide()
                }
            }, 100);
            al = false;
            ax = false;
            alert("[AF Filebrowser] bReturnKeyFlag : " + aa);
            if (aa == true) {
                bj();
                ab.hide();
                X = "main";
                ac.hide()
            }
        };
        this.setInitFileView = function () {
            for (var bP = 0; bP < J; bP++) {
                $("#sf-service-Filebrowser-file-item" + bP).empty()
            }
            $("#sf-service-Filebrowser-file-item-Focus").hide();
            a0 = 0;
            bz = 0
        };
        this.moveScroll = function (bP) {
            if (bP == "prev") {
                ae = ae - ba;
                $("#sf-service-Filebrowser-file-scroll-body").css({top: ae});
                if (ae < 0) {
                    $("#sf-service-Filebrowser-file-scroll-body").css({top: "0"})
                }
            } else {
                if (bP == "next") {
                    ae = ae + ba;
                    $("#sf-service-Filebrowser-file-scroll-body").css({top: ae});
                    if (ae >= n) {
                        ae = ae - ba
                    }
                }
            }
        };
        this.fileArrowView = function (bP) {
            if (nMaxPageNum == 1) {
                $("#sf-service-Filebrowser-file-text-arrowUp").hide();
                $("#sf-service-Filebrowser-file-text-arrowDown").hide()
            } else {
                if (bP == 1 && nMaxPageNum != 1) {
                    $("#sf-service-Filebrowser-file-text-arrowUp").hide();
                    $("#sf-service-Filebrowser-file-text-arrowDown").show()
                } else {
                    if (bP == nMaxPageNum) {
                        $("#sf-service-Filebrowser-file-text-arrowUp").show();
                        $("#sf-service-Filebrowser-file-text-arrowDown").hide()
                    } else {
                        $("#sf-service-Filebrowser-file-text-arrowDown").show();
                        $("#sf-service-Filebrowser-file-text-arrowUp").show()
                    }
                }
            }
        }
    }

    aw.service.FileBrowser.handleKeydown = function (bP) {
        bP = bP || event.keyCode;
        bD[X](bP)
    };
    var bD = {
        main: function (bT) {
            alert("[AF ui] sfPopup keyctl(" + bT + ")");
            switch (bT) {
                case aw.key.LEFT:
                    if (!aK) {
                        if (aO) {
                            if (bFocusBox == true) {
                                $("#sf-service-Filebrowser-main-focus").hide();
                                ac.removeFocus(N);
                                $(".sf-service-Filebrowser-main-cancelbutton-l").addClass("sf-service-Filebrowser-main-button-focus-1");
                                $(".sf-service-Filebrowser-main-cancelbutton-c").addClass("sf-service-Filebrowser-main-button-focus-c");
                                $(".sf-service-Filebrowser-main-cancelbutton-r").addClass("sf-service-Filebrowser-main-button-focus-r");
                                bFocusBox = false
                            } else {
                                if (bFocusBox == false) {
                                    $("#sf-service-Filebrowser-main-focus").show();
                                    ac.setFocus(N);
                                    $(".sf-service-Filebrowser-main-cancelbutton-l").removeClass("sf-service-Filebrowser-main-button-focus-1");
                                    $(".sf-service-Filebrowser-main-cancelbutton-c").removeClass("sf-service-Filebrowser-main-button-focus-c");
                                    $(".sf-service-Filebrowser-main-cancelbutton-r").removeClass("sf-service-Filebrowser-main-button-focus-r");
                                    bFocusBox = true
                                }
                            }
                        }
                    }
                    break;
                case aw.key.RIGHT:
                    if (!aK) {
                        if (aO) {
                            if (bFocusBox == true) {
                                $("#sf-service-Filebrowser-main-focus").hide();
                                ac.removeFocus(N);
                                $(".sf-service-Filebrowser-main-cancelbutton-l").addClass("sf-service-Filebrowser-main-button-focus-1");
                                $(".sf-service-Filebrowser-main-cancelbutton-c").addClass("sf-service-Filebrowser-main-button-focus-c");
                                $(".sf-service-Filebrowser-main-cancelbutton-r").addClass("sf-service-Filebrowser-main-button-focus-r");
                                bFocusBox = false
                            } else {
                                if (bFocusBox == false) {
                                    $("#sf-service-Filebrowser-main-focus").show();
                                    ac.setFocus(N);
                                    $(".sf-service-Filebrowser-main-cancelbutton-l").removeClass("sf-service-Filebrowser-main-button-focus-1");
                                    $(".sf-service-Filebrowser-main-cancelbutton-c").removeClass("sf-service-Filebrowser-main-button-focus-c");
                                    $(".sf-service-Filebrowser-main-cancelbutton-r").removeClass("sf-service-Filebrowser-main-button-focus-r");
                                    bFocusBox = true
                                }
                            }
                        }
                    }
                    break;
                case aw.key.UP:
                    if (!aK) {
                        if (bFocusBox == true) {
                            ac.removeFocus(N);
                            bG--;
                            if (bG < 0) {
                                bG = 0
                            } else {
                                N--
                            }
                            if (N < 0) {
                                q = q - Q;
                                if (q < 0) {
                                    q = 0
                                }
                                if (x <= 1) {
                                    x = 1;
                                    N = 0
                                } else {
                                    x--;
                                    N = 7;
                                    ac.initTextView();
                                    ac.setDeviceListView(q)
                                }
                                ac.mainArrowView(x);
                                ac.moveScroll("prev")
                            }
                            ac.setFocus(N)
                        }
                    }
                    break;
                case aw.key.DOWN:
                    if (!aK) {
                        if (bFocusBox == true) {
                            ac.removeFocus(N);
                            bG++;
                            if (bG >= g.length) {
                                bG = g.length - 1
                            } else {
                                N++
                            }
                            if (N > Q - 1) {
                                x++;
                                if (x > aN) {
                                    x = aN;
                                    N = Q - 1
                                } else {
                                    ac.initTextView();
                                    N = 0;
                                    q = q + Q;
                                    ac.setDeviceListView(q)
                                }
                                ac.mainArrowView(x);
                                ac.moveScroll("next")
                            }
                            ac.setFocus(N)
                        }
                    }
                    break;
                case aw.key.ENTER:
                    if (!aK) {
                        if (bFocusBox == true) {
                            $("#sf-service-Filebrowser-main-loading").sfLoading("show");
                            au = null;
                            aFilepath = new Array();
                            aK = true;
                            if (g[bG].deviceType == "USB") {
                                var bQ = deviceapis._plugin("ContentsMgr", "CreateBrowser", g[bG].partitionkey, a5, s);
                                alert("[AF Filebrowser] createBrowser :" + bQ);
                                alert("[AF Filebrowser] aDeviceNum[" + bG + "].partitionkey : " + g[bG].partitionkey);
                                alert("[AF Filebrowser] aDeviceNum[" + bG + "].mountPath : " + g[bG].mountPath);
                                au = g[bG].mountPath + "/";
                                aFilepath.push(au);
                                var bS = aFilepath.join("");
                                bx = false;
                                var bR = deviceapis._plugin("ContentsMgr", "DeviceClustering", am, bS);
                                alert("[AF Filebrowser] DeviceClustering :" + bR);
                                if (bR == -1) {
                                    aK = false;
                                    setTimeout(function () {
                                        $("#sf-service-Filebrowser-main-loading").sfLoading("hide")
                                    }, 10)
                                }
                            } else {
                                if (g[bG].deviceType == "DLNA") {
                                    var bQ = deviceapis._plugin("ContentsMgr", "CreateBrowser", g[bG].partitionkey, y, s);
                                    alert("[AF Filebrowser] createBrowser :" + bQ);
                                    alert("[AF Filebrowser] aDeviceNum[" + bG + "].partitionkey : " + g[bG].partitionkey);
                                    alert("[AF Filebrowser] aDeviceNum[" + bG + "].mountPath : " + g[bG].mountPath);
                                    au = "/";
                                    aFilepath.push(au);
                                    var bS = aFilepath.join("");
                                    bx = false;
                                    var bR = deviceapis._plugin("ContentsMgr", "DeviceClustering", am, bS);
                                    alert("[AF Filebrowser] DeviceClustering :" + bR);
                                    if (bR == -1) {
                                        aK = false;
                                        setTimeout(function () {
                                            $("#sf-service-Filebrowser-main-loading").sfLoading("hide")
                                        }, 10)
                                    }
                                }
                            }
                        } else {
                            if (bFocusBox == false) {
                                var bP = {};
                                bP.state = "cancel";
                                deviceapis._plugin("ContentsMgr", "DestroyContentsMgr");
                                if (aw.scene._isSceneArchUsed() && aM) {
                                    aw.scene.removeKeyHandler(aM)
                                } else {
                                    aw.scene.returnFocus()
                                }
                                p(bP);
                                ac.hide()
                            }
                        }
                    }
                    break;
                case aw.key.RETURN:
                case aw.key.EXIT:
                    setTimeout(function () {
                        $("#sf-service-Filebrowser-main-loading").sfLoading("hide")
                    }, 10);
                    aa = true;
                    var bP = {};
                    bP.state = "cancel";
                    deviceapis._plugin("ContentsMgr", "DestroyContentsMgr");
                    if (aw.scene._isSceneArchUsed() && aM) {
                        aw.scene.removeKeyHandler(aM)
                    } else {
                        aw.scene.returnFocus()
                    }
                    X = "main";
                    ac.hide();
                    p(bP);
                    aw.key.preventDefault();
                    break
            }
        }, file: function (bZ) {
            alert("[AF ui] sfPopup keyctl(" + bZ + ")");
            switch (bZ) {
                case aw.key.LEFT:
                    if (!al) {
                        if (a3 == true) {
                            ab.removeFocus(P);
                            P--;
                            if (ao == true) {
                                if (P < 0) {
                                    P = 0
                                }
                            } else {
                                if (ao == false) {
                                    if (P < w) {
                                        P = w
                                    }
                                }
                            }
                            ab.setFocus(P)
                        } else {
                            if (a3 == false) {
                                $("#sf-service-Filebrowser-file-button" + bC + "-l").removeClass();
                                $("#sf-service-Filebrowser-file-button" + bC + "-c").removeClass();
                                $("#sf-service-Filebrowser-file-button" + bC + "-r").removeClass();
                                $("#sf-service-Filebrowser-file-button" + bC + "-l").addClass("sf-service-Filebrowser-file-button-nor-1");
                                $("#sf-service-Filebrowser-file-button" + bC + "-c").addClass("sf-service-Filebrowser-file-button-nor-c");
                                $("#sf-service-Filebrowser-file-button" + bC + "-r").addClass("sf-service-Filebrowser-file-button-nor-r");
                                ab.setFocus(P);
                                $("#sf-service-Filebrowser-file-item-Focus").show();
                                a3 = true
                            }
                        }
                    }
                    break;
                case aw.key.RIGHT:
                    if (!al) {
                        if (a3 == true) {
                            ab.removeFocus(P);
                            var bY = P % W;
                            if (bY == bA || P >= a.length - 1) {
                                if (bB == true && bC == bI) {
                                    bC = aV
                                }
                                $("#sf-service-Filebrowser-file-button" + bC + "-l").removeClass();
                                $("#sf-service-Filebrowser-file-button" + bC + "-c").removeClass();
                                $("#sf-service-Filebrowser-file-button" + bC + "-r").removeClass();
                                $("#sf-service-Filebrowser-file-button" + bC + "-l").addClass("sf-service-Filebrowser-file-button-focus-1");
                                $("#sf-service-Filebrowser-file-button" + bC + "-c").addClass("sf-service-Filebrowser-file-button-focus-c");
                                $("#sf-service-Filebrowser-file-button" + bC + "-r").addClass("sf-service-Filebrowser-file-button-focus-r");
                                $("#sf-service-Filebrowser-file-item-Focus").hide();
                                a3 = false
                            } else {
                                if (P < a.length - 1) {
                                    P++;
                                    ab.setFocus(P)
                                }
                            }
                        } else {
                            if (a3 == false) {
                                $("#sf-service-Filebrowser-file-button" + bC + "-l").removeClass();
                                $("#sf-service-Filebrowser-file-button" + bC + "-c").removeClass();
                                $("#sf-service-Filebrowser-file-button" + bC + "-r").removeClass();
                                $("#sf-service-Filebrowser-file-button" + bC + "-l").addClass("sf-service-Filebrowser-file-button-nor-1");
                                $("#sf-service-Filebrowser-file-button" + bC + "-c").addClass("sf-service-Filebrowser-file-button-nor-c");
                                $("#sf-service-Filebrowser-file-button" + bC + "-r").addClass("sf-service-Filebrowser-file-button-nor-r");
                                ab.setFocus(P);
                                $("#sf-service-Filebrowser-file-item-Focus").show();
                                a3 = true
                            }
                        }
                    }
                    break;
                case aw.key.UP:
                    if (!al) {
                        if (a3 == true) {
                            ab.removeFocus(P);
                            P = P - w;
                            alert("[AF Filebrowser] [up]nFocusIndex :" + P);
                            if (ao == true) {
                                if (P < 0) {
                                    aG--;
                                    if (aG < 1) {
                                        P = P + w;
                                        aG = 1
                                    }
                                    if (be != 0) {
                                        $("#sf-service-Filebrowser-file-loading").sfLoading("show");
                                        al = true;
                                        ax = true;
                                        P = P + w;
                                        be = be - w;
                                        for (var bR = a6; bR <= S.length - 1; bR++) {
                                            var bX = S[bR];
                                            if (bX in bu) {
                                                delete bu[bX]
                                            }
                                        }
                                        a2--;
                                        if (a2 == 1) {
                                            aQ = aQ - V
                                        } else {
                                            aQ = aQ - w
                                        }
                                        bn = bn - w;
                                        ab.setInitFileView();
                                        ab.fileArrowView(a2);
                                        ab.moveScroll("prev");
                                        alert("[AF Filebrowser] [up]nPageStartNum :" + be);
                                        ab.showFileList(be)
                                    }
                                }
                            } else {
                                if (ao == false) {
                                    if (P < w) {
                                        bw = aS;
                                        aG--;
                                        a2--;
                                        ab.setInitFileView();
                                        ao = true;
                                        ab.fileArrowView(a2);
                                        ab.moveScroll("prev");
                                        ab.showFileList(be)
                                    }
                                }
                            }
                            alert("[AF Filebrowser] [up]nFocusIndex2 :" + P);
                            ab.setFocus(P)
                        } else {
                            if (a3 == false && e == "multi") {
                                $("#sf-service-Filebrowser-file-button" + bC + "-l").removeClass();
                                $("#sf-service-Filebrowser-file-button" + bC + "-c").removeClass();
                                $("#sf-service-Filebrowser-file-button" + bC + "-r").removeClass();
                                $("#sf-service-Filebrowser-file-button" + bC + "-l").addClass("sf-service-Filebrowser-file-button-nor-1");
                                $("#sf-service-Filebrowser-file-button" + bC + "-c").addClass("sf-service-Filebrowser-file-button-nor-c");
                                $("#sf-service-Filebrowser-file-button" + bC + "-r").addClass("sf-service-Filebrowser-file-button-nor-r");
                                if (bC != bI) {
                                    if (bC == aV && bB == true) {
                                        bC == aV
                                    } else {
                                        bC--
                                    }
                                }
                                $("#sf-service-Filebrowser-file-button" + bC + "-l").addClass("sf-service-Filebrowser-file-button-focus-1");
                                $("#sf-service-Filebrowser-file-button" + bC + "-c").addClass("sf-service-Filebrowser-file-button-focus-c");
                                $("#sf-service-Filebrowser-file-button" + bC + "-r").addClass("sf-service-Filebrowser-file-button-focus-r")
                            }
                        }
                    }
                    break;
                case aw.key.DOWN:
                    if (!al) {
                        if (a3 == true) {
                            ab.removeFocus(P);
                            var bY = P % W;
                            if (ao == true) {
                                var bV = aW
                            } else {
                                var bV = R
                            }
                            P = P + w;
                            alert("[AF Filebrowser] [down]nFocusIndex :" + P);
                            alert("[AF Filebrowser] [down]nMaxPageNum :" + nMaxPageNum);
                            if (P > bV) {
                                if (P > bV && a2 < nMaxPageNum) {
                                    aG++;
                                    if (aG > A) {
                                        P = P - w;
                                        aG = A
                                    }
                                    if (aG != A) {
                                        $("#sf-service-Filebrowser-file-loading").sfLoading("show");
                                        al = true;
                                        ax = true;
                                        if (s == aD) {
                                            bw = z
                                        } else {
                                            bw = bE
                                        }
                                        if (ao == true) {
                                            if (P >= a.length) {
                                                P = a.length - 1
                                            }
                                            a2++;
                                            ab.setInitFileView();
                                            ao = false;
                                            ab.fileArrowView(a2);
                                            ab.moveScroll("next");
                                            ab.showFileList(be);
                                            alert("[AF Filebrowser] [down]nFocusIndex2 :" + P);
                                            ab.setFocus(P)
                                        } else {
                                            if (ao == false) {
                                                P = P - w;
                                                be = be + w;
                                                alert("[AF Filebrowser] [down]nPageStartNum : " + be);
                                                for (var bR = f; bR <= bA; bR++) {
                                                    var bX = S[bR];
                                                    if (bX in bu) {
                                                        delete bu[bX]
                                                    }
                                                }
                                                if (a2 == 2) {
                                                    aQ = aQ + V
                                                } else {
                                                    aQ = aQ + w
                                                }
                                                bn = bn + w;
                                                a2++;
                                                bg(aQ)
                                            }
                                        }
                                    }
                                } else {
                                    P = P - w;
                                    alert("[AF Filebrowser] [down]nFocusIndex2 :" + P);
                                    ab.setFocus(P)
                                }
                            } else {
                                if (P >= a.length) {
                                    P = a.length - 1
                                }
                                alert("[AF Filebrowser] [down]nFocusIndex2 :" + P);
                                ab.setFocus(P)
                            }
                        } else {
                            if (a3 == false && e == "multi") {
                                $("#sf-service-Filebrowser-file-button" + bC + "-l").removeClass();
                                $("#sf-service-Filebrowser-file-button" + bC + "-c").removeClass();
                                $("#sf-service-Filebrowser-file-button" + bC + "-r").removeClass();
                                $("#sf-service-Filebrowser-file-button" + bC + "-l").addClass("sf-service-Filebrowser-file-button-nor-1");
                                $("#sf-service-Filebrowser-file-button" + bC + "-c").addClass("sf-service-Filebrowser-file-button-nor-c");
                                $("#sf-service-Filebrowser-file-button" + bC + "-r").addClass("sf-service-Filebrowser-file-button-nor-r");
                                if (bC != 1) {
                                    bC++
                                }
                                $("#sf-service-Filebrowser-file-button" + bC + "-l").addClass("sf-service-Filebrowser-file-button-focus-1");
                                $("#sf-service-Filebrowser-file-button" + bC + "-c").addClass("sf-service-Filebrowser-file-button-focus-c");
                                $("#sf-service-Filebrowser-file-button" + bC + "-r").addClass("sf-service-Filebrowser-file-button-focus-r")
                            }
                        }
                    }
                    break;
                case aw.key.ENTER:
                    if (!al) {
                        if (a3 == true) {
                            if (a[P].isDir) {
                                if (aFilepath.join("") == au) {
                                    var bP = ((a2 - 1) * w) + P - 1
                                } else {
                                    var bP = ((a2 - 1) * w) + P
                                }
                                var bU = deviceapis._plugin("ContentsMgr", "MoveToIndex", bP);
                                if (aFilepath.join("") == au && a[P].filename == "..") {
                                    if (av) {
                                        az()
                                    }
                                    bj();
                                    X = "main";
                                    $("#sf-service-Filebrowser-main-message").html("" + aw.lang.COM_CONNECT_A_DEVICE_THAT_CONTAINS_FILES_TO_OPEN);
                                    $("#sf-service-Filebrowser-main-button").show();
                                    $("#sf-service-Filebrowser-main-text").show();
                                    $("#sf-service-Filebrowser-main-message").show();
                                    $("#sf-service-Filebrowser-main-keyhelp").show();
                                    ac.mainArrowView(x);
                                    ab.hide()
                                } else {
                                    if (aFilepath.join("") != au && a[P].filename == "..") {
                                        $("#sf-service-Filebrowser-file-loading").sfLoading("show");
                                        al = true;
                                        ax = true;
                                        var bW = {};
                                        var bW = l.pop();
                                        alert("------------------------------------------------------------------------------");
                                        alert("[AF Filebrowser] olastFolderFocusInfo.pageStartNum : " + bW.pageStartNum);
                                        alert("[AF Filebrowser] olastFolderFocusInfo.focusIndex : " + bW.focusIndex);
                                        alert("[AF Filebrowser] olastFolderFocusInfo.selFileNum : " + bW.selFileNum);
                                        alert("[AF Filebrowser] olastFolderFocusInfo.checkedFileTotalSize : " + bW.checkedFileTotalSize);
                                        alert("[AF Filebrowser] olastFolderFocusInfo.fileListStartNum : " + bW.fileListStartNum);
                                        alert("[AF Filebrowser] olastFolderFocusInfo.fileScrollBodyTop : " + bW.fileScrollBodyTop);
                                        alert("[AF Filebrowser] olastFolderFocusInfo.categoryNum : " + bW.categoryNum);
                                        alert("[AF Filebrowser] olastFolderFocusInfo.pageNum : " + bW.pageNum);
                                        alert("[AF Filebrowser] olastFolderFocusInfo.fileViewStartPoint : " + bW.fileViewStartPoint);
                                        alert("[AF Filebrowser] olastFolderFocusInfo.item_Top_Margin : " + bW.item_Top_Margin);
                                        alert("[AF Filebrowser] olastFolderFocusInfo.lastButtonFlag : " + bW.lastButtonFlag);
                                        alert("[AF Filebrowser] olastFolderFocusInfo.folderNum : " + bW.folderNum);
                                        alert("[AF Filebrowser] olastFolderFocusInfo.viewNewFolder : " + bW.viewNewFolder);
                                        alert("------------------------------------------------------------------------------");
                                        bn = bW.fileViewStartPoint;
                                        P = bW.focusIndex;
                                        aP = 0;
                                        bk = 0;
                                        bl = 0;
                                        aQ = bW.fileListStartNum;
                                        ae = bW.fileScrollBodyTop;
                                        aG = bW.categoryNum;
                                        a2 = bW.pageNum;
                                        be = bW.pageStartNum;
                                        m = bW.objectList;
                                        bw = bW.item_Top_Margin;
                                        ao = bW.lastButtonFlag;
                                        G = bW.folderNum;
                                        aI = true;
                                        bv = true;
                                        bK = false;
                                        aFilepath.pop();
                                        var bS = aFilepath.join("");
                                        var bQ = deviceapis._plugin("ContentsMgr", "DeviceClustering", am, bS);
                                        alert("[AF Filebrowser] DeviceClustering : " + bQ)
                                    } else {
                                        $("#sf-service-Filebrowser-file-loading").sfLoading("show");
                                        al = true;
                                        ax = true;
                                        aFilepath.push(a[P].filename + "/");
                                        var bS = aFilepath.join("");
                                        alert("------------------------------------------------------------------------------");
                                        alert("[AF Filebrowser] nPageStartNum : " + be);
                                        alert("[AF Filebrowser] nFocusIndex : " + P);
                                        alert("[AF Filebrowser] nSelFileNum : " + aP);
                                        alert("[AF Filebrowser] nCheckedFileTotalSize : " + bl);
                                        alert("[AF Filebrowser] nFileListStartNum : " + aQ);
                                        alert("[AF Filebrowser] nFileScrollBodyTop : " + ae);
                                        alert("[AF Filebrowser] nCategoryNum : " + aG);
                                        alert("[AF Filebrowser] nPageNum : " + a2);
                                        alert("[AF Filebrowser] nFileViewStartPoint : " + bn);
                                        alert("[AF Filebrowser] nItem_Top_Margin : " + bw);
                                        alert("[AF Filebrowser] bLastButtonFlag : " + ao);
                                        alert("[AF Filebrowser] nFolderNum : " + G);
                                        alert("[AF Filebrowser] bViewNewFolder : " + aI);
                                        alert("------------------------------------------------------------------------------");
                                        l.push({
                                            pageStartNum: be,
                                            focusIndex: P,
                                            selFileNum: aP,
                                            checkedFileTotalSize: bl,
                                            fileListStartNum: aQ,
                                            fileScrollBodyTop: ae,
                                            categoryNum: aG,
                                            pageNum: a2,
                                            fileViewStartPoint: bn,
                                            objectList: m,
                                            item_Top_Margin: bw,
                                            lastButtonFlag: ao,
                                            folderNum: G,
                                            viewNewFolder: aI
                                        });
                                        bn = 0;
                                        P = 0;
                                        aP = 0;
                                        bk = 0;
                                        bl = 0;
                                        aQ = 0;
                                        ae = 0;
                                        G = 0;
                                        aG = 1;
                                        a2 = 1;
                                        be = 0;
                                        bw = aS;
                                        ao = true;
                                        aI = true;
                                        bK = false;
                                        m = new Array();
                                        var bQ = deviceapis._plugin("ContentsMgr", "DeviceClustering", am, bS);
                                        alert("[AF Filebrowser] DeviceClustering : " + bQ)
                                    }
                                }
                            } else {
                                if (e == "multi") {
                                    ab.setFileCheck(aFilepath, P)
                                } else {
                                    if (e == "single") {
                                        ab.setFileCheck(aFilepath, P);
                                        var bT = {};
                                        bT.state = "ok";
                                        bT.selectedMedia = [];
                                        for (var bX in aq) {
                                            if (s == H) {
                                                bT.selectedMedia.push({
                                                    filepath: bX,
                                                    type: aq[bX].type,
                                                    filename: aq[bX].filename,
                                                    filesize: aq[bX].size,
                                                    source: g[bG].deviceType,
                                                    imagewidth: aq[bX].width,
                                                    imageheight: aq[bX].height
                                                })
                                            } else {
                                                bT.selectedMedia.push({
                                                    filepath: bX,
                                                    type: aq[bX].type,
                                                    filename: aq[bX].filename,
                                                    filesize: aq[bX].size,
                                                    source: g[bG].deviceType,
                                                })
                                            }
                                        }
                                        if (aw.scene._isSceneArchUsed() && aM) {
                                            aw.scene.removeKeyHandler(aM)
                                        } else {
                                            aw.scene.returnFocus()
                                        }
                                        bj();
                                        ab.hide();
                                        deviceapis._plugin("ContentsMgr", "DestroyContentsMgr");
                                        X = "main";
                                        ac.hide();
                                        p(bT);
                                        aw.key.preventDefault()
                                    }
                                }
                            }
                        } else {
                            if (a3 == false) {
                                if (bC == bI) {
                                    var bT = {};
                                    bT.state = "ok";
                                    bT.selectedMedia = [];
                                    for (var bX in aq) {
                                        if (s == H) {
                                            bT.selectedMedia.push({
                                                filepath: bX,
                                                type: aq[bX].type,
                                                filename: aq[bX].filename,
                                                filesize: aq[bX].size,
                                                source: g[bG].deviceType,
                                                imagewidth: aq[bX].width,
                                                imageheight: aq[bX].height
                                            })
                                        } else {
                                            bT.selectedMedia.push({
                                                filepath: bX,
                                                type: aq[bX].type,
                                                filename: aq[bX].filename,
                                                filesize: aq[bX].size,
                                                source: g[bG].deviceType,
                                            })
                                        }
                                    }
                                    if (aw.scene._isSceneArchUsed() && aM) {
                                        aw.scene.removeKeyHandler(aM)
                                    } else {
                                        aw.scene.returnFocus()
                                    }
                                    bj();
                                    ab.hide();
                                    deviceapis._plugin("ContentsMgr", "DestroyContentsMgr");
                                    X = "main";
                                    ac.hide();
                                    p(bT);
                                    aw.key.preventDefault()
                                } else {
                                    if (bC == aV) {
                                        setTimeout(function () {
                                            $("#sf-service-Filebrowser-file-loading").sfLoading("hide")
                                        }, 100);
                                        aa = true;
                                        alert("[AF Filebrowser] bReturnKeyFlag : " + aa);
                                        var bT = {};
                                        bT.state = "cancel";
                                        bj();
                                        deviceapis._plugin("ContentsMgr", "DestroyContentsMgr");
                                        if (aw.scene._isSceneArchUsed() && aM) {
                                            aw.scene.removeKeyHandler(aM)
                                        } else {
                                            aw.scene.returnFocus()
                                        }
                                        ab.hide();
                                        X = "main";
                                        ac.hide();
                                        p(bT);
                                        aw.key.preventDefault()
                                    }
                                }
                            }
                        }
                    }
                    break;
                case aw.key.RETURN:
                case aw.key.EXIT:
                    setTimeout(function () {
                        $("#sf-service-Filebrowser-file-loading").sfLoading("hide")
                    }, 100);
                    aa = true;
                    alert("[AF Filebrowser] bReturnKeyFlag : " + aa);
                    var bT = {};
                    bT.state = "cancel";
                    bj();
                    deviceapis._plugin("ContentsMgr", "DestroyContentsMgr");
                    if (aw.scene._isSceneArchUsed() && aM) {
                        aw.scene.removeKeyHandler(aM)
                    } else {
                        aw.scene.returnFocus()
                    }
                    ab.hide();
                    X = "main";
                    ac.hide();
                    p(bT);
                    aw.key.preventDefault();
                    break;
                case aw.key.GESTURE_SCROLL_UP:
                    if (!al) {
                        ab.removeFocus(P);
                        P = P - w;
                        alert("[AF Filebrowser] [up]nFocusIndex :" + P);
                        if (ao == true) {
                            aG--;
                            if (aG < 1) {
                                P = P + w;
                                aG = 1
                            }
                            if (be != 0) {
                                $("#sf-service-Filebrowser-file-loading").sfLoading("show");
                                al = true;
                                ax = true;
                                if (P < 0) {
                                    P = P + w
                                }
                                be = be - w;
                                for (var bR = a6; bR <= S.length - 1; bR++) {
                                    var bX = S[bR];
                                    if (bX in bu) {
                                        delete bu[bX]
                                    }
                                }
                                a2--;
                                if (a2 == 1) {
                                    aQ = aQ - V
                                } else {
                                    aQ = aQ - w
                                }
                                bn = bn - w;
                                ab.setInitFileView();
                                ab.fileArrowView(a2);
                                ab.moveScroll("prev");
                                alert("[AF Filebrowser] [up]nPageStartNum :" + be);
                                ab.showFileList(be)
                            }
                        } else {
                            if (ao == false) {
                                bw = aS;
                                aG--;
                                a2--;
                                ab.setInitFileView();
                                ao = true;
                                ab.fileArrowView(a2);
                                ab.moveScroll("prev");
                                ab.showFileList(be)
                            }
                        }
                        alert("[AF Filebrowser] [up]nFocusIndex2 :" + P);
                        ab.setFocus(P)
                    }
                    break;
                case aw.key.GESTURE_SCROLL_DOWN:
                    if (!al) {
                        ab.removeFocus(P);
                        var bY = P % W;
                        P = P + w;
                        alert("[AF Filebrowser] [down]nFocusIndex :" + P);
                        alert("[AF Filebrowser] [down]nMaxPageNum :" + nMaxPageNum);
                        if (a2 < nMaxPageNum) {
                            aG++;
                            if (aG > A) {
                                P = P - w;
                                aG = A
                            }
                            if (aG != A) {
                                $("#sf-service-Filebrowser-file-loading").sfLoading("show");
                                al = true;
                                ax = true;
                                if (s == aD) {
                                    bw = z
                                } else {
                                    bw = bE
                                }
                                if (ao == true) {
                                    if (P >= a.length) {
                                        P = a.length - 1
                                    }
                                    a2++;
                                    ab.setInitFileView();
                                    ao = false;
                                    ab.fileArrowView(a2);
                                    ab.moveScroll("next");
                                    ab.showFileList(be);
                                    alert("[AF Filebrowser] [down]nFocusIndex2 :" + P);
                                    ab.setFocus(P)
                                } else {
                                    if (ao == false) {
                                        P = P - w;
                                        be = be + w;
                                        alert("[AF Filebrowser] [down]nPageStartNum : " + be);
                                        for (var bR = f; bR <= bA; bR++) {
                                            var bX = S[bR];
                                            if (bX in bu) {
                                                delete bu[bX]
                                            }
                                        }
                                        if (a2 == 2) {
                                            aQ = aQ + V
                                        } else {
                                            aQ = aQ + w
                                        }
                                        bn = bn + w;
                                        a2++;
                                        bg(aQ)
                                    }
                                }
                            }
                        } else {
                            P = P - w;
                            alert("[AF Filebrowser] [down]nFocusIndex2 :" + P);
                            ab.setFocus(P)
                        }
                    }
                    break
            }
        }
    }
})(sf);
(function (u) {
    u.service.Uploader = {
        ERROR_APIOPENFAILED: 1,
        ERROR_SOCKET_CREATE: 2,
        ERROR_GET_SERVER_IP: 3,
        ERROR_CONNECT: 4,
        ERROR_SEND: 5,
        ERROR_RECIEVE_TIMEOUT: 6,
        ERROR_INTERNAL: 7,
        upload: function (aa) {
            $.each(aa, function (ac, ad) {
                if (typeof h[ac] == "function") {
                    h[ac](ad)
                }
            });
            f();
            var ab = {zIndex: 100};
            opts = $.extend(ab, aa);
            $("#sf-service-Uploader-bg-dim").css({"z-index": Number(opts.zIndex)});
            $("#sf-service-Uploader").css({"z-index": Number(opts.zIndex) + 10});
            $("#sf-service-Uploader-button").css({"z-index": Number(opts.zIndex) + 30});
            $("#sf-service-Uploader-cancelPopup").css({"z-index": Number(opts.zIndex) + 70});
            var Z = deviceapis.application.getPopupOpacity();
            alert("Popup opacity: " + Z);
            if (Z > 0 && Z <= 1) {
                $("#sf-service-Uploader-bg-up-l-alpha").css({opacity: Z});
                $("#sf-service-Uploader-bg-up-c-alpha").css({opacity: Z});
                $("#sf-service-Uploader-bg-up-r-alpha").css({opacity: Z});
                $("#sf-service-Uploader-bg-mid-l-alpha").css({opacity: Z});
                $("#sf-service-Uploader-bg-mid-c-alpha").css({opacity: Z});
                $("#sf-service-Uploader-bg-mid-r-alpha").css({opacity: Z});
                $("#sf-service-Uploader-bg-bottom-l-alpha").css({opacity: Z});
                $("#sf-service-Uploader-bg-bottom-c-alpha").css({opacity: Z});
                $("#sf-service-Uploader-bg-bottom-r-alpha").css({opacity: Z})
            }
            view.show()
        }
    };
    var X = false;
    var x = false;
    var E = null;
    var H = false;
    var d = false;
    var z = true;
    var B = null;
    var A = 200;
    var N = -1;
    var b = -2;
    var M = -3;
    var a = -4;
    var T = -5;
    var K = -6;
    var W = 0;
    var g = 0;
    var I = 0;
    var q = 0;
    var y = 0;
    var j = 0;
    var V = 0;
    var w = false;
    var t = 0;
    var U = 0;
    var S = null;
    var Q = null;
    var p = 0;
    var r = 0;
    var P = new Array();
    var s = new Array();
    var O = new Array();
    var F = 0;
    var L = 0;
    var c = 0;
    var m = 0;
    var n = "";
    var G = 0;
    var C = 0;
    var R = null;
    var h = {
        onevent: function (Z) {
            if (typeof Z == "function") {
                refunction = Z
            } else {
                alert("[AF mediabrowser] value must be a Function.")
            }
        }, severURL: function (Z) {
            if (typeof Z == "string") {
                t = Z;
                alert("[sSeverURL] : " + t)
            }
        }, severPort: function (Z) {
            if (typeof Z == "number") {
                U = Z;
                alert("[nSeverPort] : " + U)
            }
        }, header: function (Z) {
            S = Z;
            alert("[sHeader] : " + S)
        }, body: function (Z) {
            Q = Z;
            alert("[sBody] :" + Q)
        }, ratio: function (Z) {
            if (typeof Z == "number") {
                p = Z;
                alert("[nRatio] : " + p)
            }
        }, serverType: function (Z) {
            if (typeof Z == "number") {
                r = Z;
                if (r == 0) {
                    A = 1
                } else {
                    if (r == 1) {
                        A = 200
                    }
                }
                alert("[nServerType] : " + r)
            }
        }, fileinfo: function (aa) {
            C = aa.length;
            alert("[nTotalFileNum] : " + C);
            if (C == 1) {
                B = "single"
            } else {
                B = "multi"
            }
            for (var Z = 0; Z < C; Z++) {
                P[Z] = aa[Z].path;
                alert("[aFilePath] : " + P[Z]);
                s[Z] = P[Z].replace(/^.*\//, "");
                alert("[aFilename] : " + s[Z])
            }
        }
    };

    function f() {
        deviceapis._plugin("Download").OnEvent = J;
        view = new Y();
        var Z = u.env.getScreenSize();
        if (B == "single") {
            if (Z.height == 720) {
                W = 266;
                g = 124;
                I = 232;
                q = 121;
                y = 147;
                j = 149;
                V = 185
            } else {
                if (Z.height == 1080) {
                    W = 400;
                    g = 186;
                    I = 348;
                    q = 188;
                    y = 218;
                    j = 220;
                    V = 275
                } else {
                    if (Z.height == 540) {
                        W = 200;
                        g = 93;
                        I = 174;
                        q = 94;
                        y = 109;
                        j = 111;
                        V = 140
                    }
                }
            }
            $("#sf-service-Uploader-TotalNum").hide();
            $("#sf-service-Uploader-TotalProgressingPercent").hide()
        } else {
            if (Z.height == 720) {
                W = 306;
                g = 164;
                I = 272;
                q = 161;
                y = 187;
                j = 189;
                V = 225
            } else {
                if (Z.height == 1080) {
                    W = 459;
                    g = 245;
                    I = 407;
                    q = 247;
                    y = 277;
                    j = 279;
                    V = 334
                } else {
                    if (Z.height == 540) {
                        W = 230;
                        g = 123;
                        I = 204;
                        q = 124;
                        y = 139;
                        j = 141;
                        V = 170
                    }
                }
            }
            $("#sf-service-Uploader-TotalNum").html("" + u.lang.TV_SID_TOTAL + "&nbsp;(" + G + "/" + C + ")");
            $("#sf-service-Uploader-TotalNum").show();
            $("#sf-service-Uploader-TotalProgressingPercent").show()
        }
        $("#sf-service-Uploader").css("height", W + "px");
        $("#sf-service-Uploader-bg-mid-l-alpha").css("height", g + "px");
        $("#sf-service-Uploader-bg-mid-c-alpha").css("height", g + "px");
        $("#sf-service-Uploader-bg-mid-r-alpha").css("height", g + "px");
        $("#sf-service-Uploader-bg-bottom-l-alpha").css("top", I + "px");
        $("#sf-service-Uploader-bg-bottom-c-alpha").css("top", I + "px");
        $("#sf-service-Uploader-bg-bottom-r-alpha").css("top", I + "px");
        $("#sf-service-Uploader-bg-mid-l").css("height", g + "px");
        $("#sf-service-Uploader-bg-mid-c").css("height", g + "px");
        $("#sf-service-Uploader-bg-mid-r").css("height", g + "px");
        $("#sf-service-Uploader-bg-bottom-l").css("top", I + "px");
        $("#sf-service-Uploader-bg-bottom-c").css("top", I + "px");
        $("#sf-service-Uploader-bg-bottom-r").css("top", I + "px");
        $("#sf-service-Uploader-FileName").css("top", q + "px");
        $("#sf-service-Uploader-FileProgressingPercent").css("top", y + "px");
        $("#sf-service-Uploader-FileProgress").css("top", j + "px");
        $("#sf-service-Uploader-button").css("top", V + "px")
    }

    function o() {
        var Z = event.target.id;
        alert("[AF Uploader] setMainOnmouseoverEvent : " + Z);
        switch (Z) {
            case"sf-service-Uploader-button-l":
            case"sf-service-Uploader-button-c":
            case"sf-service-Uploader-button-r":
                v.main(u.key.ENTER);
                break
        }
    }

    function D(Z) {
        $("#sf-service-Uploader-FileName").html("" + s[Z])
    }

    function k(aa) {
        if (z) {
            $("#sf-service-Uploader-FileProgress").sfProgressBar({type: "progress", max: 100});
            if (B != "single") {
                $("#sf-service-Uploader-TotalProgress").sfProgressBar({type: "progress", max: 100})
            }
            z = false
        }
        var Z = deviceapis._plugin("Download", "StartUpload", t, U, S, Q, P[aa], p, r);
        alert("[nSetUploadPlugin] : " + Z);
        if (Z != 1) {
            d = true
        }
        D(aa)
    }

    function l() {
        $("#sf-service-Uploader-FileProgress").sfProgressBar("setValue", 0);
        if (B != "single") {
            $("#sf-service-Uploader-TotalProgress").sfProgressBar("setValue", 0)
        }
        L = 0;
        c = 0;
        m = 0;
        G = 0;
        H = false;
        d = false;
        z = true
    }

    function J(ad, Z, ae) {
        alert("OnEvent()");
        alert("event : " + ad);
        alert("data1 : " + Z);
        alert("data2 : " + ae);
        O = new Array();
        O = Z.split("?");
        c = O[0];
        if (c == 2) {
            L = O[1];
            $("#sf-service-Uploader-FileProgress").sfProgressBar("setValue", L);
            $("#sf-service-Uploader-FileProgressingPercent").html("" + L + "&nbsp;%");
            if (L == 100) {
                x = true
            }
        } else {
            if (c == 1) {
                x = false;
                m = O[1];
                n = "";
                for (var ac = 2; ac < O.length; ac++) {
                    n = n + O[ac] + "?"
                }
                alert("[nUploadResult] : " + m);
                alert("UPLOADSUCCESS : " + A);
                if (m == A) {
                    alert("sMode : " + B);
                    if (B == "single") {
                        $("#sf-service-Uploader-FileProgress").sfProgressBar("setValue", 100);
                        $("#sf-service-Uploader-FileProgressingPercent").html("" + 100 + "&nbsp;%");
                        var ab = {};
                        ab.state = "uploaded";
                        ab.uploadFileinfo = {};
                        ab.uploadFileinfo.fileName = s[G];
                        ab.uploadFileinfo.fileIndex = G;
                        ab.uploadFileinfo.fileCount = C - 1;
                        ab.uploadFileinfo.message = n;
                        refunction(ab.state, ab.uploadFileinfo);
                        $("#sf-service-Uploader-MessageBox").html("" + u.lang.COM_UPLOAD_COMPLETE);
                        $("#sf-service-Uploader-button-c").html("" + u.lang.SID_OK);
                        H = true
                    } else {
                        var ab = {};
                        ab.state = "uploaded";
                        ab.uploadFileinfo = {};
                        ab.uploadFileinfo.fileName = s[G];
                        ab.uploadFileinfo.fileIndex = G;
                        ab.uploadFileinfo.fileCount = C - 1;
                        ab.uploadFileinfo.message = n;
                        refunction(ab.state, ab.uploadFileinfo);
                        G++;
                        $("#sf-service-Uploader-TotalNum").html("" + u.lang.TV_SID_TOTAL + "&nbsp;(" + G + "/" + C + ")");
                        var aa = (G / C) * 100;
                        F = Math.round(aa);
                        if (B != "single") {
                            $("#sf-service-Uploader-TotalProgress").sfProgressBar("setValue", F);
                            $("#sf-service-Uploader-TotalProgressingPercent").html("" + F + "&nbsp;%")
                        }
                        if (G >= C) {
                            $("#sf-service-Uploader-FileProgress").sfProgressBar("setValue", 100);
                            $("#sf-service-Uploader-FileProgressingPercent").html("" + 100 + "&nbsp;%");
                            $("#sf-service-Uploader-MessageBox").html("" + u.lang.COM_UPLOAD_COMPLETE);
                            $("#sf-service-Uploader-button-c").html("" + u.lang.SID_OK);
                            H = true
                        } else {
                            $("#sf-service-Uploader-FileProgressingPercent").html("0&nbsp;%");
                            $("#sf-service-Uploader-FileProgress").sfProgressBar("setValue", 0);
                            k(G)
                        }
                    }
                } else {
                    if (m == 0) {
                        setTimeout(function () {
                            n = O[2];
                            $("#sf-service-Uploader-cancelPopup").sfPopup({
                                text: u.lang.TV_SID_UPLOAD_FAILED,
                                buttons: "OK",
                                callback: function (ag) {
                                    var af = {};
                                    af.state = "canceled";
                                    refunction(af.state);
                                    l();
                                    $("#sf-service-Uploader-FileProgressingPercent").html("");
                                    $("#sf-service-Uploader-FileName").html("");
                                    $("#sf-service-Uploader-button-c").html("");
                                    view.hide();
                                    if (u.scene._isSceneArchUsed()) {
                                        u.scene.removeKeyHandler(E)
                                    } else {
                                        u.scene.returnFocus()
                                    }
                                }
                            }).sfPopup("show");
                            alert("[Upload_Canceled]")
                        }, 200)
                    } else {
                        setTimeout(function () {
                            n = O[2];
                            $("#sf-service-Uploader-cancelPopup").sfPopup({
                                text: u.lang.TV_SID_UPLOAD_FAILED,
                                buttons: "OK",
                                callback: function (ag) {
                                    var af = {};
                                    af.state = "failed";
                                    af.uploadFileinfo = {};
                                    af.uploadFileinfo.message = n;
                                    if (m == N) {
                                        af.uploadFileinfo.errorcode = u.service.Uploader.ERROR_SOCKET_CREATE
                                    } else {
                                        if (m == b) {
                                            af.uploadFileinfo.errorcode = u.service.Uploader.ERROR_GET_SERVER_IP
                                        } else {
                                            if (m == M) {
                                                af.uploadFileinfo.errorcode = u.service.Uploader.ERROR_CONNECT
                                            } else {
                                                if (m == a) {
                                                    af.uploadFileinfo.errorcode = u.service.Uploader.ERROR_SEND
                                                } else {
                                                    if (m == T) {
                                                        af.uploadFileinfo.errorcode = u.service.Uploader.ERROR_RECIEVE_TIMEOUT
                                                    } else {
                                                        if (m == K) {
                                                            af.uploadFileinfo.errorcode = u.service.Uploader.ERROR_INTERNAL
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    refunction(af.state, af.uploadFileinfo);
                                    l();
                                    $("#sf-service-Uploader-FileProgressingPercent").html("");
                                    $("#sf-service-Uploader-FileName").html("");
                                    $("#sf-service-Uploader-button-c").html("");
                                    view.hide();
                                    if (u.scene._isSceneArchUsed()) {
                                        u.scene.removeKeyHandler(E)
                                    } else {
                                        u.scene.returnFocus()
                                    }
                                }
                            }).sfPopup("show");
                            alert("[Upload_Failed]")
                        }, 200)
                    }
                }
            }
        }
    }

    function Y() {
        $('<div id="sf-service-Uploader"></div>').html(['<div id="sf-service-Uploader-bg"><div id="sf-service-Uploader-bg-up-l-alpha"></div><div id="sf-service-Uploader-bg-up-c-alpha"></div><div id="sf-service-Uploader-bg-up-r-alpha"></div><div id="sf-service-Uploader-bg-mid-l-alpha"></div><div id="sf-service-Uploader-bg-mid-c-alpha"></div><div id="sf-service-Uploader-bg-mid-r-alpha"></div><div id="sf-service-Uploader-bg-bottom-l-alpha"></div><div id="sf-service-Uploader-bg-bottom-c-alpha"></div><div id="sf-service-Uploader-bg-bottom-r-alpha"></div><div id="sf-service-Uploader-bg-up-l"></div><div id="sf-service-Uploader-bg-up-c"></div><div id="sf-service-Uploader-bg-up-r"></div><div id="sf-service-Uploader-bg-mid-l"></div><div id="sf-service-Uploader-bg-mid-c"></div><div id="sf-service-Uploader-bg-mid-r"></div><div id="sf-service-Uploader-bg-bottom-l"></div><div id="sf-service-Uploader-bg-bottom-c"></div><div id="sf-service-Uploader-bg-bottom-r"></div><div id="sf-service-Uploader-MessageBox">Uploading...</div><div id="sf-service-Uploader-TotalNum">test</div><div id="sf-service-Uploader-FileName"></div><div id="sf-service-Uploader-TotalProgressingPercent"></div><div id="sf-service-Uploader-FileProgressingPercent"></div><div id="sf-service-Uploader-TotalProgress"></div><div id="sf-service-Uploader-FileProgress"></div><div id="sf-service-Uploader-button"><div id="sf-service-Uploader-button-l"></div><div id="sf-service-Uploader-button-c"></div><div id="sf-service-Uploader-button-r"></div></div></div>'].join("")).appendTo("body");
        $('<div id="sf-service-Uploader-cancelPopup"></div>').appendTo("body");
        $("#sf-service-Uploader-cancelPopup").hide();
        $('<div id="sf-service-Uploader-bg-dim"></div>').appendTo("body");
        this.show = function () {
            if (u.scene._isSceneArchUsed()) {
                E = u.scene.pushKeyHandler(function () {
                    u.service.Uploader.handleKeydown()
                }, {context: "sf-service-Uploader"})
            } else {
                $("#sf-service-uploader-anchor").focus()
            }
            $("#sf-service-Uploader").css({
                top: ($(window).height() - $("#sf-service-Uploader").height()) / 2 + "px",
                left: ($(window).width() - $("#sf-service-Uploader").width()) / 2 + "px"
            });
            $("#sf-service-Uploader-cancelPopup").css({
                top: ($(window).height() - $("#sf-service-Uploader-cancelPopup").height()) / 2 + "px",
                left: ($(window).width() - $("#sf-service-Uploader-cancelPopup").width()) / 2 + "px"
            });
            if (B == "single") {
                $("#sf-service-Uploader-TotalProgress").hide()
            } else {
                $("#sf-service-Uploader-TotalProgress").show()
            }
            document.getElementById("sf-service-Uploader-button").onclick = function () {
                o()
            };
            $("#sf-service-Uploader-MessageBox").html("" + u.lang.TV_UPLOADING_PROGRESS);
            $("#sf-service-Uploader-button-c").html("" + u.lang.SID_CANCEL);
            $("#sf-service-Uploader-TotalProgressingPercent").html("0&nbsp;%");
            $("#sf-service-Uploader-FileProgressingPercent").html("0&nbsp;%");
            $("#sf-service-Uploader").show();
            k(G)
        };
        this.hide = function () {
            $("#sf-service-Uploader-FileProgress").sfProgressBar("hide");
            if (B != "single") {
                $("#sf-service-Uploader-TotalProgress").sfProgressBar("hide")
            }
            $("#sf-service-Uploader").hide();
            $("#sf-service-Uploader-bg-dim").remove()
        }
    }

    var e = "main";
    u.service.Uploader.handleKeydown = function () {
        v[e](event.keyCode)
    };
    var v = {
        main: function (ab) {
            switch (ab) {
                case u.key.UP:
                case u.key.DOWN:
                case u.key.LEFT:
                case u.key.RIGHT:
                    u.key.preventDefault();
                    break;
                case u.key.ENTER:
                    if (!d) {
                        if (!x) {
                            if (H) {
                                l();
                                var Z = {};
                                Z.state = "completed";
                                refunction(Z.state);
                                $("#sf-service-Uploader-FileProgressingPercent").html("");
                                $("#sf-service-Uploader-FileName").html("");
                                $("#sf-service-Uploader-button-c").html("");
                                view.hide();
                                if (u.scene._isSceneArchUsed() && E) {
                                    u.scene.removeKeyHandler(E)
                                } else {
                                    u.scene.returnFocus()
                                }
                                alert("[Upload_Completed]");
                                u.key.preventDefault()
                            } else {
                                var aa = deviceapis._plugin("Download", "CancelUpload");
                                alert("[nCancelUploadPlugin] : " + aa)
                            }
                        }
                    } else {
                        l();
                        var Z = {};
                        Z.state = "failed";
                        Z.uploadFileinfo = {};
                        Z.uploadFileinfo.message = "API_Open_failed";
                        Z.uploadFileinfo.errorcode = u.service.Uploader.ERROR_APIOPENFAILED;
                        refunction(Z.state);
                        $("#sf-service-Uploader-FileProgressingPercent").html("");
                        $("#sf-service-Uploader-FileName").html("");
                        $("#sf-service-Uploader-button-c").html("");
                        view.hide();
                        if (u.scene._isSceneArchUsed() && E) {
                            u.scene.removeKeyHandler(E)
                        } else {
                            u.scene.returnFocus()
                        }
                        alert("[Upload_Failed]");
                        u.key.preventDefault()
                    }
                    break;
                case u.key.RETURN:
                case u.key.EXIT:
                    var aa = deviceapis._plugin("Download", "CancelUpload");
                    alert("[nCancelUploadPlugin] : " + aa);
                    u.key.preventDefault();
                    break
            }
        }
    }
})(sf);
(function (r) {
    r.service = r.service || {};
    r.service.AudioPlayer = {
        STATE_PLAYING: 1,
        STATE_STOPPED: 2,
        STATE_PAUSED: 3,
        STATE_BUFFERING: 4,
        STATE_SKIP: 5,
        REPEAT_NO: 0,
        REPEAT_ALL: 1,
        REPEAT_CURRENT: 2,
        SHUFFLE_DISABLE: 0,
        SHUFFLE_ENABLE: 1,
        ERROR_NOERROR: 0,
        ERROR_NOTSUPPORTED: 1,
        ERROR_NETWORK: 2,
        init: function (t) {
            alert("[sf.service.AudioPlayer] init()");
            l.init(t)
        },
        setPlayList: function (t) {
            alert("[sf.service.AudioPlayer] setPlayList()");
            alert("Playlist: " + t);
            if (t && t.length) {
                k = t;
                b = 0;
                return true
            } else {
                return false
            }
        },
        getPlayingItem: function () {
            if (k && k.length > 0) {
                return new this.PlayingItemInfo({index: b, item: k[b]})
            } else {
                return null
            }
        },
        play: function (t) {
            alert("[sf.service.AudioPlayer] play(" + t + ")");
            if (t.length > 0) {
                this.setPlayList([t]);
                b = 0
            } else {
                b = t
            }
            return l.play(b)
        },
        pause: function () {
            alert("[sf.service.AudioPlayer] pause()");
            return l.pause()
        },
        resume: function () {
            alert("[sf.service.AudioPlayer] resume()");
            return l.resume()
        },
        stop: function () {
            alert("[sf.service.AudioPlayer] stop()");
            return l.stop()
        },
        next: function () {
            alert("[sf.service.AudioPlayer] next()");
            return l.nextItem()
        },
        prev: function () {
            alert("[sf.service.AudioPlayer] prev()");
            return l.prevItem()
        },
        setControllerArea: function (t) {
            alert("[sf.service.AudioPlayer] setControllerArea()");
            c.controllerarea = t;
            return o.setControlArea(c.controllerarea)
        },
        getControllerArea: function () {
            alert("[sf.service.AudioPlayer] getControllerArea()");
            return c.controllerarea
        },
        showController: function () {
            alert("[sf.service.AudioPlayer] showController()");
            return o.showController()
        },
        hideController: function () {
            alert("[sf.service.AudioPlayer] hideController()");
            return o.hideController()
        },
        setRepeatMode: function (t) {
            alert("[sf.service.AudioPlayer] setRepeatMode(" + t + ")");
            return l.setRepeatMode(t)
        },
        getRepeatMode: function () {
            alert("[sf.service.AudioPlayer] getRepeatMode()");
            return l.getRepeatMode()
        },
        setShuffleMode: function (t) {
            alert("[sf.service.AudioPlayer] setShuffleMode(" + t + ")");
            return l.setShuffleMode(t)
        },
        getShuffleMode: function () {
            alert("[sf.service.AudioPlayer] getShuffleMode()");
            return l.getShuffleMode()
        },
        getState: function () {
            alert("[sf.service.AudioPlayer] getState()");
            return l.getState()
        },
        setZIndex: function (t) {
            alert("[sf.service.AudioPlayer] setZIndex(" + t + ")");
            return o.setZIndex(t)
        },
        getZIndex: function () {
            alert("[sf.service.AudioPlayer] getZIndex()");
            return o.getZIndex()
        },
        getDuration: function () {
            alert("[sf.service.AudioPlayer] getDuration()");
            return l.getDuration()
        },
        getCurrentTime: function () {
            alert("[sf.service.AudioPlayer] getCurrentTime()");
            return l.getCurrentTime()
        },
        jumpTo: function (t) {
            alert("[sf.service.AudioPlayer] jumpTo(" + t + ")");
            return l.jumpTo(t)
        },
        Skip: {
            start: function (t) {
                alert("[sf.AudioPlayer.Seek] start(" + t + ")");
                return l.startSkip(t)
            }, stop: function () {
                alert("[sf.AudioPlayer.Skip] stop()");
                return l.stopSkip()
            }, cancel: function () {
                alert("[sf.AudioPlayer.Skip] stop()");
                return l.cancelSkip()
            }, isInProgress: function () {
                return l.isSkiping()
            }
        },
        PlayItem: function (u) {
            var t = {URL: "", title: ""};
            u = $.extend(t, u);
            this.className = "PlayItem";
            this.URL = u.URL;
            this.title = u.title;
            this.toString = function () {
                return "[object " + this.className + "] " + (this.title ? this.title + ", " : "") + this.URL
            }
        },
        PlayingItemInfo: function (u) {
            var t = {index: "", item: null};
            u = $.extend(t, u);
            this.className = "PlayingItemInfo";
            this.index = u.index;
            this.item = u.item;
            this.toString = function () {
                return "[object " + this.className + "] index: " + this.index + ", item:" + (this.item)
            }
        },
    };
    var q = "sf-service-audioplayer";
    var e = q + "-controller";
    var n = "";
    n += '<div id="' + e + '">';
    n += '<div class="main">';
    n += '<div class="stateicon"></div>';
    n += '<div class="repeaticon"></div>';
    n += '<div class="shuffleicon"></div>';
    n += '<div class="playbacktimes"><div class="totaltime"></div><div>/</div><div class="currenttime"></div></div>';
    n += '<div class="progressbar">';
    n += '<div class="left"></div><div class="right"></div><div class="center"></div>';
    n += '<div class="body">';
    n += '<div class="left"></div><div class="right"></div><div class="center"></div>';
    n += "</div>";
    n += "</div>";
    n += '<div class="skippointer"><div class="image"></div></div>';
    n += "</div>";
    n += '<div class="titlebar"><div class="title sf-ui-common-ellipsis"></div></div>';
    n += "</div>";
    var a = null;
    var d = null;
    var o = {
        zindex: 15, init: function () {
            alert("[AudioPlayer.View] init()");
            this.zindex = h;
            if (!document.getElementById(e)) {
                $("body").append(n);
                alert("Append controller...");
                a = document.getElementById(e) || null
            }
            this.setZIndex()
        }, showController: function () {
            $(a).show()
        }, hideController: function () {
            $(a).hide()
        }, setControlArea: function (t) {
            alert("[AudioPlayer.View] setControlArea()");
            $(a).css({left: t.left + "px", top: t.top + "px", width: t.width + "px", height: t.height + "px"});
            var v = parseInt($(a).find(".titlebar .title").css("margin-left"), 10);
            var u = parseInt($(a).find(".titlebar .title").css("margin-left"), 10);
            $(a).find(".titlebar .title").width($(a).find(".titlebar").width() - (v + u))
        }, setRepeatMode: function (u) {
            alert("[AudioPlayer.View] setRepeatMode(" + u + ")");
            var t = {};
            t[r.service.AudioPlayer.REPEAT_NO] = "repeaticon no";
            t[r.service.AudioPlayer.REPEAT_ALL] = "repeaticon all";
            t[r.service.AudioPlayer.REPEAT_CURRENT] = "repeaticon current";
            if (t[u]) {
                $(a).find(".repeaticon").attr("className", t[u])
            }
        }, setShuffleMode: function (u) {
            alert("[AudioPlayer.View] setShuffleMode(" + u + ")");
            var t = {};
            t[r.service.AudioPlayer.SHUFFLE_ENABLE] = "shuffleicon";
            t[r.service.AudioPlayer.SHUFFLE_DISABLE] = "shuffleicon disable";
            if (t[u]) {
                $(a).find(".shuffleicon").attr("className", t[u])
            }
        }, setCurrentTime: function (t) {
            alert("[AudioPlayer.View] setCurrentTime(" + t + ")");
            $(a).find(".currenttime").html(j(t))
        }, setDuration: function (t) {
            alert("[AudioPlayer.View] setDuration(" + t + ")");
            $(a).find(".totaltime").html(j(t))
        }, setProgressBar: function (t) {
            alert("[AudioPlayer.View] setProgressBar(" + t + ")");
            $(a).find(".progressbar .body").css("width", (t * 100).toFixed(2) + "%")
        }, setState: function (u) {
            alert("[AudioPlayer.View] setState(" + u + ")");
            var t = {};
            t[r.service.AudioPlayer.STATE_BUFFERING] = "stateicon pause";
            t[r.service.AudioPlayer.STATE_PAUSED] = "stateicon pause";
            t[r.service.AudioPlayer.STATE_PLAYING] = "stateicon play";
            t[r.service.AudioPlayer.STATE_SKIP] = "stateicon pause";
            t[r.service.AudioPlayer.STATE_STOPPED] = "stateicon stop";
            if (t[u]) {
                $(a).find(".stateicon").attr("className", t[u])
            }
        }, setTitle: function (t) {
            alert("[AudioPlayer.View] setTitle(" + t + ")");
            $(a).find(".title").html(t)
        }, setZIndex: function (t) {
            alert("[AudioPlayer.View] setZIndex(" + t + ")");
            this.zindex = t;
            $(a).css("z-index", this.zindex)
        }, getZIndex: function () {
            alert("[AudioPlayer.View] getZIndex()");
            alert("\treturns " + this.zindex);
            return this.zindex
        }, showPointer: function (u) {
            alert("[AudioPlayer.View] showPointer(" + u + ")");
            var v = $(a).find(".progressbar").width();
            var t = parseInt($(a).find(".progressbar").css("margin-left"), 10);
            $(a).find(".skippointer").show().css("left", parseInt(t + v * u, 10) + "px");
            alert("set left : " + parseInt(v * u, 10) + "px")
        }, hidePointer: function () {
            alert("[AudioPlayer.View] hidePointer()");
            $(a).find(".skippointer").hide()
        }
    };
    var h = 15;
    var k = null;
    var b = 0;
    var m = null;
    var g = {
        onstatechanged: null,
        onerror: null,
        onstarted: null,
        onended: null,
        onrepeatmodechanged: null,
        onshufflemodechanged: null,
        controllerarea: {left: 0, top: 300, width: 500, height: 50,},
        shufflemode: r.service.AudioPlayer.SHUFFLE_DISABLE,
        repeatmode: r.service.AudioPlayer.REPEAT_NO
    };
    var c = {};
    var s = r.service.AudioPlayer.STATE_STOPPED;
    var l = {
        init: function (u) {
            alert("[AudioPlayer.Ctrl] init()");
            c = $.extend(g, u);
            var t = this;
            deviceapis.avplay.getAVPlay(function (v) {
                m = v;
                t.AVPlay = m;
                var x = new SRect(0, 0, 0, 0);
                var w = {};
                w.displayRect = x;
                w.zIndex = h;
                w.bufferingCallback = {
                    onbufferingstart: function () {
                        t.AVPlayCallback.onBufferingStart()
                    }, onbufferingcomplete: function () {
                        t.AVPlayCallback.onBufferingComplete()
                    }
                };
                w.playCallback = {
                    oncurrentplaytime: function (y) {
                        t.AVPlayCallback.onCurrentPlayTime(y)
                    }, onstreamcompleted: function () {
                        t.AVPlayCallback.onStreamCompleted()
                    }, onerror: function (y) {
                        t.AVPlayCallback.onError(y)
                    }
                };
                m.init(w)
            });
            o.init();
            o.setState(r.service.AudioPlayer.STATE_STOPPED);
            o.setDuration(0);
            o.setCurrentTime(0);
            o.setProgressBar(0);
            o.setTitle("");
            o.setRepeatMode(c.repeatmode);
            o.setShuffleMode(c.shufflemode)
        }, play: function (t, x) {
            alert("[AudioPlayer.Ctrl] play(" + t + ", " + x + ")");
            if (!k || k.length <= 0) {
                alert("There's no playlist");
                return
            }
            var v = k[t];
            if (t < 0 || t > k.length || !v) {
                alert("There's no item specified");
                return
            }
            b = t;
            alert("Play: " + v);
            if (this.getState() == r.service.AudioPlayer.STATE_PLAYING) {
                this.stop()
            }
            if (v.title) {
                o.setTitle(v.title)
            }
            o.setProgressBar(0);
            o.setCurrentTime(0);
            o.setDuration(0);
            if (c.oncurrenttimeupdated && c.oncurrenttimeupdated instanceof Function) {
                try {
                    c.oncurrenttimeupdated(this.curTime, this.duration)
                } catch (w) {
                    alert("EXCEPTION(AudioPlayer oncurrenttimeupdated): " + w)
                }
            }
            var u = this;
            m.open(v.URL, {});
            m.play(function () {
                l.AVPlayCallback.onStreamInfoReady()
            }, function (y) {
                alert("[AudioPlayer] " + y);
                l.stop()
            }, x || 0);
            r.service.setVolumeControl(true);
            if (c.onstarted && c.onstarted instanceof Function) {
                try {
                    c.onstarted(new r.service.AudioPlayer.PlayingItemInfo({index: t, item: v}))
                } catch (w) {
                    alert("Exception(AudioPlayer onstarted): " + w)
                }
            }
        }, stop: function () {
            alert("[AudioPlayer.Ctrl] stop()");
            var t = m.stop();
            if (t) {
                l.setState(r.service.AudioPlayer.STATE_STOPPED);
                r.service.setVolumeControl(false);
                o.setDuration(0);
                o.setCurrentTime(0);
                o.setProgressBar(0);
                o.setTitle("");
                o.setRepeatMode(c.repeatmode);
                o.setShuffleMode(c.shufflemode);
                if (c.oncurrenttimeupdated && c.oncurrenttimeupdated instanceof Function) {
                    try {
                        c.oncurrenttimeupdated(this.curTime, this.duration)
                    } catch (u) {
                        alert("EXCEPTION(AudioPlayer oncurrenttimeupdated): " + u)
                    }
                }
                return true
            } else {
                alert("[AudioPlayer] Fail to Pause.");
                return false
            }
        }, pause: function () {
            alert("[AudioPlayer.Ctrl] pause()");
            var t = m.pause();
            if (t) {
                l.setState(r.service.AudioPlayer.STATE_PAUSED);
                return true
            } else {
                alert("[AudioPlayer] Fail to Pause.");
                return false
            }
        }, resume: function () {
            alert("[AudioPlayer.Ctrl] pause()");
            var t = m.resume();
            if (t) {
                l.setState(r.service.AudioPlayer.STATE_PLAYING);
                return true
            } else {
                alert("[AudioPlayer] Fail to Resume.");
                return false
            }
        }, getDuration: function () {
            alert("[AudioPlayer.Ctrl] getDuration()");
            alert("\treturns " + this.duration);
            return parseInt(this.duration, 10)
        }, getCurrentTime: function () {
            alert("[AudioPlayer.Ctrl] getCurrentTime()");
            alert("\treturns " + this.curTime);
            return parseInt(this.curTime, 10)
        }, jumpTo: function (t) {
            alert("[AudioPlayer.Ctrl] jumpTo(" + t + ")");
            var u = parseInt((parseInt(t, 10) - this.getCurrentTime()) / 1000, 10);
            if (u > 0) {
                m.jumpForward(u)
            } else {
                if (u < 0) {
                    m.jumpBackward(-u)
                }
            }
            return
        }, setState: function (u) {
            alert("[AudioPlayer.Ctrl] setState(" + u + ")");
            var t = (s != u);
            s = u;
            o.setState(u);
            if (t && c.onstatechanged && c.onstatechanged instanceof Function) {
                try {
                    c.onstatechanged(s)
                } catch (v) {
                    alert("Exception(AudioPlayer onstatechanged): " + v)
                }
            }
        }, setRepeatMode: function (u) {
            alert("[AudioPlayer.Ctrl] setRepeatMode(" + u + ")");
            c.repeatmode = u;
            o.setRepeatMode(c.repeatmode);
            if (c.onrepeatmodechanged && c.onrepeatmodechanged instanceof Function) {
                try {
                    c.onrepeatmodechanged(c.repeatmode)
                } catch (t) {
                    alert("EXCEPTION(AudioPlayer onrepeatmodechanged): " + t)
                }
            }
        }, getRepeatMode: function () {
            alert("[AudioPlayer.Ctrl] getRepeatMode()");
            return c.repeatmode
        }, setShuffleMode: function (t) {
            alert("[AudioPlayer.Ctrl] setShuffleMode(" + t + ")");
            c.shufflemode = t;
            o.setShuffleMode(c.shufflemode);
            if (c.onshufflemodechanged && c.onshufflemodechanged instanceof Function) {
                try {
                    c.onshufflemodechanged(c.shufflemode)
                } catch (u) {
                    alert("EXCEPTION(AudioPlayer onshufflemodechanged): " + u)
                }
            }
        }, getShuffleMode: function () {
            alert("[AudioPlayer.Ctrl] getShuffleMode()");
            return c.shufflemode
        }, getState: function () {
            alert("[AudioPlayer.Ctrl] getState()");
            alert("\treturns " + s);
            return s
        }, nextItem: function () {
            alert("[AudioPlayer.Ctrl] nextItem()");
            if (k && k.length > 0) {
                if (c.shufflemode == r.service.AudioPlayer.SHUFFLE_ENABLE) {
                    b = p(0, k.length - 1, b);
                    this.play(b)
                } else {
                    if (c.repeatmode == r.service.AudioPlayer.REPEAT_CURRENT) {
                        this.play(b)
                    } else {
                        if (c.repeatmode == r.service.AudioPlayer.REPEAT_ALL) {
                            b = (b + 1) % k.length;
                            this.play(b)
                        } else {
                            if (c.repeatmode == r.service.AudioPlayer.REPEAT_NO) {
                                b++;
                                if (b >= k.length) {
                                    b = k.length - 1;
                                    this.stop()
                                } else {
                                    this.play(b)
                                }
                            }
                        }
                    }
                }
            }
        }, prevItem: function () {
            alert("[AudioPlayer.Ctrl] prevItem()");
            if (k && k.length > 0) {
                if (c.shufflemode == r.service.AudioPlayer.SHUFFLE_ENABLE) {
                    b = p(0, k.length - 1, b);
                    this.play(b)
                } else {
                    if (c.repeatmode == r.service.AudioPlayer.REPEAT_CURRENT) {
                        this.play(b)
                    } else {
                        if (c.repeatmode == r.service.AudioPlayer.REPEAT_ALL) {
                            b = (b - 1 + k.length) % k.length;
                            this.play(b)
                        } else {
                            if (c.repeatmode == r.service.AudioPlayer.REPEAT_NO) {
                                b--;
                                if (b < 0) {
                                    b = 0;
                                    this.stop()
                                } else {
                                    this.play(b)
                                }
                            }
                        }
                    }
                }
            }
        }, duration: 0, curTime: 0, AVPlayCallback: {
            onStreamInfoReady: function () {
                alert("[AudioPlayer] AVPlayCallback.onStreamInfoReady();");
                l.duration = m.duration;
                o.setDuration(l.duration);
                l.setState(r.service.AudioPlayer.STATE_PLAYING)
            }, onBufferingStart: function () {
                alert("[AudioPlayer] AVPlayCallback.onBufferingStart();");
                l.setState(r.service.AudioPlayer.STATE_BUFFERING)
            }, onBufferingComplete: function () {
                alert("[AudioPlayer] AVPlayCallback.onBufferingComplete();");
                l.setState(r.service.AudioPlayer.STATE_PLAYING)
            }, onCurrentPlayTime: function (t) {
                alert("[AudioPlayer] AVPlayCallback.onCurrentPlayTime(" + t + ");");
                l.curTime = t.millisecond;
                o.setCurrentTime(l.curTime);
                o.setProgressBar(l.curTime / l.duration);
                if (c.oncurrenttimeupdated && c.oncurrenttimeupdated instanceof Function) {
                    try {
                        c.oncurrenttimeupdated(l.curTime, l.duration)
                    } catch (u) {
                        alert("EXCEPTION(AudioPlayer oncurrenttimeupdated): " + u)
                    }
                }
            }, onStreamCompleted: function () {
                alert("[AudioPlayer] AVPlayCallback.onStreamCompleted();");
                setTimeout(function () {
                    l.nextItem()
                }, 2000);
                l.setState(r.service.AudioPlayer.STATE_STOPPED)
            }, onError: function (t) {
                alert("[AudioPlayer] AVPlayCallback.onError(" + t + ");");
                l.stop();
                l.setState(r.service.AudioPlayer.STATE_STOPPED);
                if (c.onerror && c.onerror instanceof Function) {
                    try {
                        c.onerror(t)
                    } catch (u) {
                        alert("EXCEPTION(AudioPlayer onerror): " + u)
                    }
                }
                l.nextItem()
            }
        }, nSkipStart: 0, nSkipOffset: 0, nSkipInterval: 0, itvSkip: null, startSkip: function (u) {
            alert("[AudioPlayer.Ctrl] startSkip(" + u + ")");
            alert("Duration: " + this.getDuration());
            if (this.getDuration() <= 0) {
                return
            }
            this.nSkipStart = parseInt(this.getCurrentTime(), 10);
            this.nSkipInterval = parseInt(u * 1000, 10);
            if (this.itvSkip) {
                clearInterval(this.itvSkip);
                this.itvSkip = null
            }
            var t = this;
            this.pause();
            this.itvSkip = setInterval(function () {
                t.moveSkipNext()
            }, 300);
            o.showPointer((this.nSkipStart + this.nSkipOffset) / this.getDuration());
            l.setState(r.service.AudioPlayer.STATE_SKIP)
        }, moveSkipNext: function () {
            alert("[AudioPlayer.Ctrl] moveSkipNext()");
            if (this.getDuration() <= 0) {
                return
            }
            alert("Current Offset: " + this.nSkipOffset + ", Interval: " + this.nSkipInterval);
            this.nSkipOffset += parseInt(this.nSkipInterval, 10);
            alert("Current Time: " + (this.nSkipStart + this.nSkipOffset));
            if (this.nSkipStart + this.nSkipOffset > this.getDuration()) {
                this.nSkipOffset = this.getDuration() - this.nSkipStart
            } else {
                if (this.nSkipStart + this.nSkipOffset < 0) {
                    this.nSkipOffset = -this.nSkipStart
                }
            }
            alert("applied Offset: " + this.nSkipOffset);
            o.showPointer((this.nSkipStart + this.nSkipOffset) / this.getDuration())
        }, stopSkip: function () {
            alert("[AudioPlayer.Ctrl] stopSkip()");
            o.hidePointer();
            if (this.itvSkip) {
                clearInterval(this.itvSkip);
                this.itvSkip = null
            }
            this.jumpTo(parseInt(this.nSkipStart + this.nSkipOffset, 10));
            this.resume();
            this.nSkipOffset = 0
        }, cancelSkip: function () {
            alert("[AudioPlayer.Ctrl] cancelSkip()");
            this.nSkipOffset = 0;
            o.hidePointer();
            if (this.itvSkip) {
                clearInterval(this.itvSkip);
                this.itvSkip = null
            }
            this.resume()
        }, isSkiping: function () {
            alert("[AudioPlayer.Ctrl] isSkiping()");
            return this.itvSkip ? true : false
        }
    };

    function p(u, t, w) {
        var v = w;
        while (v == w) {
            v = parseInt(Math.random() * (t + 1), 10) + u
        }
        alert("getRandomDec(" + u + ", " + t + ", " + w + ") returns " + v);
        return v
    }

    function j(v, u) {
        var t = [];
        var x = parseInt(v / 1000, 10);
        if (x >= 3600) {
            t[t.length] = parseInt(x / 3600, 10);
            x -= t[t.length - 1] * 3600
        }
        t[t.length] = parseInt(x / 60, 10);
        x -= t[t.length - 1] * 60;
        t[t.length] = parseInt(x, 10);
        for (var w = 0; w < t.length; w++) {
            if (t[w] < 10) {
                t[w] = "0" + t[w]
            }
        }
        return t.join(":")
    }

    function f(C, y, v, D) {
        C = parseInt(C, 10);
        y = parseInt(y, 10);
        v = parseInt(v, 10);
        D = parseInt(D, 10);
        var B = y / D;
        var t = C / v;
        var z = B < t ? B : t;
        var u = Math.round(v * z, 10);
        var x = Math.round(D * z, 10);
        var w = parseInt((C - u) / 2, 10);
        var A = parseInt((y - x) / 2, 10);
        if (Math.abs(u - C) < 2 || u > C) {
            u = C;
            w = 0
        }
        if (Math.abs(x - y) < 2 || x > y) {
            x = y;
            A = 0
        }
        return {left: w, top: A, width: u, height: x}
    }
})(sf);
(function (c) {
    var d = false, j = /xyz/.test(function () {
        xyz
    }) ? /\b_super\b/ : /.*/, b, g = [null, "__setter", "_extend", "eventNamespace", "widgetName", "baseCssClass", "callbacks", "options", "templates", "view", null].join("|");
    b = function () {
    };
    b.extend = function (o, l) {
        var n = this.prototype, p, e;
        if (!l) {
            l = o;
            o = "_createWidget"
        }
        d = true;
        p = new this();
        for (e in p) {
            if (c.isPlainObject(p[e])) {
                p[e] = c.extend(true, {}, p[e])
            }
        }
        d = false;
        for (e in l) {
            if (c.isFunction(l[e]) && c.isFunction(n[e]) && j.test(l[e])) {
                p[e] = (function (q, r) {
                    return function () {
                        var s = this._super, t;
                        this._super = n[q];
                        t = r.apply(this, arguments);
                        this._super = s;
                        return t
                    }
                }(e, l[e]))
            } else {
                if (c.isPlainObject(l[e])) {
                    p[e] = c.extend(true, {}, p[e], l[e])
                } else {
                    p[e] = l[e]
                }
            }
        }
        function m() {
            if (!d && this[o] && typeof this[o] === "function") {
                this[o].apply(this, arguments)
            }
        }

        m.prototype = p;
        m.constructor = this;
        m.extend = arguments.callee;
        return m
    };
    sf.ui = {
        addSelector: function (e) {
            if (!!e) {
                c.expr[":"][e] = function (l) {
                    return !!c.data(l, e)
                }
            }
        },
        bridge: function (e, l) {
            c.fn[e] = function (o) {
                var m = typeof o === "string", n = Array.prototype.slice.call(arguments, 1), p = this;
                if (!m && n.length) {
                    o = c.extend.apply(null, [true, o].concat(n))
                }
                if (m && o.charAt(0) === "_") {
                    return p
                }
                if (m) {
                    this.each(function () {
                        var q = c.data(this, e) || c.data(this, e, new l({}, this)), r = c.isFunction(q[o]) ? q[o].apply(q, n) : q;
                        if (r !== q) {
                            p = r;
                            return false
                        }
                    })
                } else {
                    this.each(function () {
                        var q = c.data(this, e);
                        if (q) {
                            q.element = c(this);
                            q.option(o || {})._init()
                        } else {
                            c.data(this, e, new l(o || {}, this))
                        }
                    })
                }
                return p
            }
        },
        widgetFactory: function (l, e) {
            if (!e) {
                e = l;
                l = sf.ui.Widget
            }
            if (!e.widgetName) {
                c.error("[sf.ui.widgetFactory] widgetName is required")
            }
            e.eventNamespace = (e.eventNamespace || e.widgetName).toLowerCase();
            return l.extend(e)
        },
        Widget: b.extend({
            baseCssClass: "",
            eventNamespace: "widget",
            widgetName: "Widget",
            __setter: function (m, l, n) {
                var e;
                if (l !== null) {
                    if (typeof l === "string") {
                        m.call(this, l, n)
                    } else {
                        for (e in l) {
                            if (l.hasOwnProperty(e)) {
                                m.call(this, e, l[e])
                            }
                        }
                    }
                }
            },
            _addCallback: function (e, l) {
                this.callbacks[e] = (this.callbacks[e] || []).concat(l)
            },
            _create: function () {
                alert("[sf.ui.Widget] _create()");
                this.widget().addClass(this.baseCssClass).addClass(this.options.themeCssClass)
            },
            _createWidget: function (n, m) {
                alert("[sf.ui.Widget] _createWidget()");
                var l = c.extend({}, n);
                c.data(m, this.widgetName, this);
                this.element = c(m);
                if (l.baseCssClass) {
                    this.baseCssClass = l.baseCssClass;
                    delete l.baseCssClass
                }
                if (l.overrides) {
                    this.extend(l.overrides);
                    delete l.overrides
                }
                this.templates = c.extend(true, {}, this.templates, l.templates);
                delete l.templates;
                this.callbacks = c.extend(true, {}, this.callbacks);
                if (l.callbacks) {
                    this.addCallback(l.callbacks);
                    delete l.callbacks
                }
                this.initialState = {};
                this.view = {};
                this.options = c.extend(true, {}, this.options, l);
                var e = this;
                this.element.bind("destroy." + this.eventNamespace, function () {
                    e.destroy()
                });
                this._create();
                this._trigger("create");
                this._init()
            },
            _destroy: function () {
            },
            _extend: function (e, l) {
                if (g.indexOf("|" + e + "|") === -1) {
                    this[e] = l
                }
            },
            _init: function () {
            },
            _setOption: function (e, l) {
                this.options[e] = l
            },
            _setTemplate: function (e, l) {
                this.templates[e] = l
            },
            _trigger: function (r, l, n) {
                var s = (r + "." + this.eventNamespace).toLowerCase(), q, o, m, e, p = false;
                if (!l) {
                    l = c.Event(s)
                } else {
                    l = c.Event(l);
                    l.type = s
                }
                n = (n == undefined) ? null : n;
                if (l.originalEvent) {
                    for (o = c.event.props.length, e; o;) {
                        o -= 1;
                        e = c.event.props[o];
                        l[e] = l.originalEvent[e]
                    }
                }
                q = this.callbacks[r];
                if (q) {
                    for (o = 0, m = q.length; o < m; o += 1) {
                        if (c.isFunction(q[o])) {
                            p = p || q[o].call(this.element[0], l, n) === false
                        }
                    }
                }
                this.element.trigger(l, n);
                return !(p || l.isDefaultPrevented())
            },
            addCallback: function (e, l) {
                alert("[sf.ui.Widget] addCallback(" + e + ", " + l + ")");
                this.__setter(this._addCallback, e, l);
                return this
            },
            destroy: function () {
                alert("[sf.ui.Widget] destroy()");
                this._destroy();
                this.element.unbind("." + this.eventNamespace).removeData(this.widgetName);
                this.widget().unbind("." + this.eventNamespace).removeClass((this.baseCssClass || "") + " " + (this.options.themeCssClass || ""));
                this.removeAllCallbacks();
                return this
            },
            extend: function (e, l) {
                alert("[sf.ui.Widget] extend(" + e + ", " + l + ")");
                this.__setter(this._extend, e, l);
                return this
            },
            hide: function () {
                alert("[sf.ui.Widget] hide()");
                if (this._trigger("beforehide") !== false) {
                    this.widget().hide();
                    this._trigger("hide")
                }
                return this
            },
            option: function (e, l) {
                alert("[sf.ui.Widget] option(" + e + ", " + l + ")");
                if (arguments.length === 0) {
                    alert("    > get all options");
                    return c.extend({}, this.options)
                }
                if (typeof e === "string") {
                    if (l === undefined) {
                        alert("    > get '" + e + "'");
                        return this.options[e]
                    }
                }
                alert("    > set '" + e + "'");
                this.__setter(this._setOption, e, l);
                return this
            },
            removeAllCallbacks: function () {
                alert("[sf.ui.Widget] removeAllCallbacks()");
                this.callbacks = {};
                return this
            },
            removeCallback: function (e, l) {
                alert("[sf.ui.Widget] removeCallback(" + e + ", " + l + ")");
                var m = this.callbacks[e];
                if (m) {
                    if (l) {
                        this.callbacks[e] = c.grep(m, function (n) {
                            return (n !== l)
                        })
                    } else {
                        delete this.callbacks[e]
                    }
                }
                return this
            },
            show: function () {
                alert("[sf.ui.Widget] show()");
                if (this._trigger("beforeshow") !== false) {
                    this.widget().show();
                    this._trigger("show")
                }
                return this
            },
            widget: function () {
                return this.element
            },
            _beginLayoutSetting: function (l) {
                alert("[sf.ui.Popup] _beginLayoutSetting(" + (l || "") + ")");
                var e = l || this.widget();
                if (e.data("_tmpLayoutSetting")) {
                    alert("\tAlready on setting");
                    return
                }
                e.data("_tmpVisibility", e.css("visibility"));
                e.data("_tmpDisplay", e.css("display"));
                e.data("_tmpLayoutSetting", true);
                e.css({visibility: "hidden", display: "block"})
            },
            _endLayoutSetting: function (l) {
                alert("[sf.ui.Popup] _endLayoutSetting(" + (l || "") + ")");
                var e = l || this.widget();
                if (!e.data("_tmpLayoutSetting")) {
                    alert("\tNot on setting");
                    return
                }
                e.css({visibility: e.data("_tmpVisibility") || "", display: e.data("_tmpDisplay") || ""});
                e.data("_tmpVisibility", null);
                e.data("_tmpDisplay", null);
                e.data("_tmpLayoutSetting", null)
            },
        })
    };
    sf.ui.widget = function (m, q, l) {
        var r, o = c, e, p, n;
        if (!m) {
            c.error("[sf.ui.widget] Plugin name is empty")
        }
        if (!l) {
            l = q;
            q = sf.ui.Widget
        }
        r = m.split(".");
        if (r.length < 2) {
            c.error("[sf.ui.widget] Plugin name without namespace")
        }
        n = r.join("-").toLowerCase();
        e = r.join("");
        c.expr[":"][e] = function (s) {
            return !!c.data(s, e)
        };
        p = r.pop();
        c.each(r, function (s, t) {
            o = o[t] = o[t] || {}
        });
        o[p] = q.extend(c.extend(true, {widgetName: e, eventNamespace: e.toLowerCase(), baseCssClass: n}, l));
        sf.ui.bridge(e, o[p])
    };
    var f = null;
    c.fn.marquee = function (e) {
        if (f === null) {
            f = (sf.env.getBrowser().indexOf("maple") >= 0) ? true : false
        }
        this.each(function () {
            if (e === true || e === undefined) {
                c(this).css("white-space", "nowrap");
                alert("bMaple: " + f + ", bForce: " + e + ", this.scrollWidth: " + this.scrollWidth + ", $(this).innerWidth(): " + c(this).innerWidth());
                if (f === true || e === true || this.scrollWidth > c(this).innerWidth()) {
                    alert("marquee");
                    c(this).addClass("sf-ui-marquee")
                } else {
                    alert("remove marquee");
                    c(this).removeClass("sf-ui-marquee");
                    if (!sf.ui.reverseText) {
                        this.scrollLeft = 0
                    } else {
                        this.scrollLeft = this.scrollWidth - c(this).innerWidth()
                    }
                }
            } else {
                if (e === false) {
                    alert("remove marquee");
                    c(this).removeClass("sf-ui-marquee");
                    if (!sf.ui.reverseText) {
                        this.scrollLeft = 0
                    } else {
                        this.scrollLeft = this.scrollWidth - c(this).innerWidth()
                    }
                }
            }
        });
        return this
    };
    try {
        sf.ui.width = parseInt(curWidget.width, 10)
    } catch (h) {
        sf.ui.width = 960
    }
    try {
        sf.ui.height = parseInt(curWidget.height, 10)
    } catch (h) {
        sf.ui.height = 540
    }
    sf.ui.grid = sf.ui.height / 9;
    if (sf && sf.core) {
        sf.ui.images = sf.core._afPath.images
    } else {
        sf.ui.images = ""
    }
    var k = ["ar", "fa", "he", "ur"];
    sf.ui.reverseText = false;
    sf.ui.init = function () {
        alert("[SF UI] init()");
        this.images = sf.core._afPath.images;
        var e = sf.core.getAppConf();
        var l = sf.env.getLanguageCode();
        if (e && e.languages) {
            if (!sf.util.inArray(l, e.languages)) {
                l = e.languages[0] || "en"
            }
        }
        if (sf.util.inArray(l, k)) {
            sf.ui.reverseText = true
        }
        alert("reverse the text? " + sf.ui.reverseText);
        if (false) {
            document.body.setAttribute("dir", "rtl")
        }
    };
    c.fn.reverseText = function () {
        alert("reverseText()");
        this.each(function () {
            a(this)
        });
        this.find("td,li,span,div").each(function () {
            a(this)
        });
        return this
    };
    function a(e) {
        if (e && e.lastChild != null && e.lastChild.nodeType == 3 && e.innerHTML.indexOf("<input") == -1) {
            if (e.innerHTML.indexOf("</") == -1) {
                e.innerHTML = e.innerHTML.replace(/\&\#8207\;/g, "").replace(/(\]|\))/g, function (l) {
                    alert("Change Symbol: &#8207;" + l);
                    return "&#8207;" + l
                });
                c(e).css({direction: "rtl"})
            }
        }
    }
})(jQuery);
(function () {
    var a = false, b = /xyz/.test(function () {
        xyz
    }) ? /\b_super\b/ : /.*/;
    this.Class = function () {
    };
    Class.extend = function (g) {
        var f = this.prototype;
        a = true;
        var e = new this();
        a = false;
        for (var d in g) {
            e[d] = typeof g[d] == "function" && typeof f[d] == "function" && b.test(g[d]) ? (function (h, j) {
                return function () {
                    var l = this._super;
                    this._super = f[h];
                    var k = j.apply(this, arguments);
                    this._super = l;
                    return k
                }
            })(d, g[d]) : g[d]
        }
        function c() {
            if (!a && this.init) {
                this.init.apply(this, arguments)
            }
        }

        c.prototype = e;
        c.prototype.constructor = c;
        c.extend = arguments.callee;
        return c
    }
})();
alert("[AF UI] ui.js included");
(function (b) {
    var a = "sfButton";
    sf.ui.Button = sf.ui.widgetFactory({
        widgetName: a,
        eventNamespace: "sfbutton",
        baseCssClass: "sf-ui-button",
        options: {
            text: [""],
            leftCssClass: "sf-ui-button-l",
            centerCssClass: "sf-ui-button-c",
            rightCssClass: "sf-ui-button-r",
            widgetFocusCssClass: "sf-ui-button-focus",
            index: 0
        },
        templates: {
            left: '<div class="${leftCssClass}"></div>',
            center: '<div class="${centerCssClass} sf-ui-common-ellipsis">${label}</div>',
            right: '<div class="${rightCssClass}"></div>'
        },
        buttonNum: 0,
        _init: function () {
            alert("[sf.Button] _init()");
            var g = this.options, d = this.view, e = this.templates, f = [];
            this.widget().css("visibility", "hidden");
            if (!g.text) {
                this._destroy()
            }
            if (typeof g.text === "string") {
                g.text = [g.text]
            }
            this.buttonNum = g.text.length;
            b.each(g.text, function (h, j) {
                f.push({centerCssClass: g.centerCssClass, label: j})
            });
            this._clearHtml();
            d.buttons = b.tmpl(e.center, f);
            d.leftSide = b.tmpl(e.left, {leftCssClass: g.leftCssClass || ""});
            d.rightSide = b.tmpl(e.right, {rightCssClass: g.rightCssClass || ""});
            this.blur();
            this._makeButtons();
            this._adjustButtonSpacing();
            if (sf.ui.reverseText) {
                this.widget().reverseText()
            }
            this.widget().css("visibility", "visible");
            var c = this;
            this.widget().find("." + this.options.leftCssClass).bind("click", function () {
                alert("Button clicked: 0");
                c._trigger("clicked", null, 0)
            });
            this.widget().find("." + this.options.centerCssClass).each(function (h, j) {
                b(this).bind("click", (function (l) {
                    var k = l;
                    return function () {
                        alert("Button clicked: " + k);
                        c._trigger("clicked", null, k)
                    }
                })(h))
            });
            this.widget().find("." + this.options.rightCssClass).bind("click", function () {
                alert("Button clicked: " + c.buttonNum - 1);
                c._trigger("clicked", null, c.buttonNum - 1)
            })
        },
        _makeButtons: function () {
            alert("[sf.ui.Button] _makeButtons()");
            var d = this.view, c = this.widget();
            b.each([d.leftSide, d.buttons, d.rightSide], function (e, f) {
                f.appendTo(c)
            })
        },
        _adjustButtonSpacing: function () {
            alert("[sf.ui.Button] _adjustButtonSpacing()");
            var e = this.view, c = this.widget(), f = 0, d = this;
            b.each([e.leftSide, e.rightSide], function (g, h) {
                if (h) {
                    f += parseInt(h.width(), 10)
                }
            });
            if (this.buttonNum === 0) {
                throw"no buttons found"
            }
            e.buttons.width((c.width() - f) / d.buttonNum)
        },
        _clearHtml: function () {
            alert("[sf.ui.Button] _clearHtml()");
            var c = this.view;
            b.each(c, function (d, e) {
                if (e) {
                    e.remove()
                }
            })
        },
        _setOption: function (d, e) {
            alert("[sf.ui.Button] _setOption(" + d + ", " + e + ")");
            var f = this.options, c = this.view;
            switch (d) {
                case"text":
                    f.text = ((typeof e) == "string") ? [e] : e;
                    b.each(f.text, function (g) {
                        c.buttons.eq(g).html(f.text[g])
                    });
                    break;
                case"leftCssClass":
                case"centerCssClass":
                case"rightCssClass":
                    if (e) {
                        b.each(c, function (h, g) {
                            if (g.hasClass(f[d])) {
                                g.removeClass(f[d]).addClass(e)
                            }
                            f[d] = e
                        })
                    }
                    break
            }
        },
        _destroy: function () {
            alert("[sf.ui.adjustButtonSpacing] _destroy()");
            var c = this.widget(), d = this.options;
            c.removeClass(d.widgetFocusCssClass);
            this._clearHtml()
        },
        focus: function (e) {
            alert("[sf.ui.Button] focus(" + e + ")");
            var c = this.widget(), d = this.view, f = this.options;
            c.addClass(f.widgetFocusCssClass);
            if (typeof e == "number" && e >= 0 && e < this.buttonNum) {
                f.index = e
            } else {
                alert("index out of bound. button num : " + this.buttonNum)
            }
            b.each(d, function (g, h) {
                h.removeClass("focus")
            });
            d.buttons.eq(f.index).addClass("focus");
            if (f.index === 0) {
                d.leftSide.addClass("focus")
            }
            if (f.index === this.buttonNum - 1) {
                d.rightSide.addClass("focus")
            }
            return this
        },
        blur: function () {
            alert("[sf.ui.Button] blur()");
            var d = this.options, c = this.widget();
            c.removeClass(d.widgetFocusCssClass);
            return this
        },
        getIndex: function () {
            alert("[sf.ui.Button] getIndex()");
            return this.options.index
        }
    });
    sf.ui.bridge(a, sf.ui.Button);
    sf.ui.addSelector(a)
}(jQuery));
(function (b, c) {
    var a = "sfCheckBox";
    sf.ui.CheckBox = sf.ui.widgetFactory({
        widgetName: a,
        eventNamespace: "sfcheckbox",
        templates: {item: b.template(null, "<div></div>")},
        baseCssClass: "sf-ui-checkbox",
        options: {
            icon: "sf-ui-checkbox",
            checkClass: "sf-ui-checkbox-checked",
            uncheckClass: "sf-ui-checkbox-unchecked",
            focusClass: "sf-ui-checkbox-focused"
        },
        _create: function () {
            alert("[sf.CheckBox] _create()");
            b.tmpl(this.templates.item).appendTo(this.widget());
            this.widget().children().first().addClass(this.options.icon + " " + this.options.uncheckClass)
        },
        focus: function () {
            alert("[sf.CheckBox] focus()");
            this.widget().addClass(this.options.focusClass);
            return this
        },
        blur: function () {
            alert("[sf.CheckBox] blur()");
            this.widget().removeClass(this.options.focusClass || "");
            return this
        },
        check: function () {
            alert("[sf.CheckBox] check()");
            this.widget().children().first().removeClass(this.options.uncheckClass || "").addClass(this.options.checkClass);
            return this
        },
        uncheck: function () {
            alert("[sf.CheckBox] uncheck()");
            this.widget().children().first().removeClass(this.options.checkClass || "").addClass(this.options.uncheckClass);
            return this
        },
        getChecked: function () {
            alert("[sf.CheckBox] getChecked()");
            return this.widget().children().first().hasClass(this.options.checkClass)
        }
    });
    sf.ui.bridge(a, sf.ui.CheckBox);
    sf.ui.addSelector(a)
}(jQuery));
(function (b) {
    var a = "sfImage";
    sf.ui.Image = sf.ui.widgetFactory({
        widgetName: a, baseCssClass: "", options: {src: ""}, _create: function () {
            alert("[sf.sfImage] _create() ");
            this._super();
            this.initialState.src = this.element.attr("src");
            this._updateSrc()
        }, _destroy: function () {
            alert("[sf.sfImage] _destroy()");
            this.element.attr("src", this.initialState.src)
        }, _setOption: function (c, d) {
            alert("[sf.sfImage] _setOption(" + c + ", " + d + ")");
            switch (c) {
                case"src":
                    this.options.src = d;
                    this._updateSrc();
                    break
            }
            return this
        }, _updateSrc: function () {
            if (typeof(this.options.src) === "string") {
                this.element.attr("src", this.options.src)
            }
        }
    });
    sf.ui.bridge(a, sf.ui.Image);
    sf.ui.addSelector(a)
}(jQuery));
(function (d) {
    var c = "sfKeyHelp";
    var a = {
        item: d.template("sfKeyHelpTpl_item", '{{if margin}}<td class="sf-ui-keyhelp-margin-items"></td>{{/if}}<td class="sf-ui-keyhelp-icon ${iconclass}" key="${key}"></td><td class="sf-ui-keyhelp-margin-icon" key="${key}"></td><td class="sf-ui-keyhelp-text" key="${key}">${label}</td>'),
        main: d.template(null, '<table cellpadding="0px" cellspacing="0px" border="0px" valign="middle" style="width:100%;height:100%;"><tr><td class="sf-ui-keyhelp-margin-left"></td>{{if userItem}}<td style="text-align:left;"><div class="sf-ui-keyhelp-userid sf-ui-common-ellipsis"><div class="sf-ui-keyhelp-icon ${userItem.iconclass}" key="${userItem.key}" style="float:left;"></div><div class="sf-ui-keyhelp-margin-icon" key="${userItem.key}" style="float:left;"></div><span class="sf-ui-keyhelp-text" key="${userItem.key}">${userItem.label}</span></div><td style="width:10px;"></td></td>{{/if}}<td style="text-align:right;"><table cellpadding="0px" cellspacing="0px" border="0px" style="table-layout:fixed;" align="right" class="sf-ui-keyhelp-items"><tr>{{tmpl(items) "sfKeyHelpTpl_item"}}</tr></table></td><td class="sf-ui-keyhelp-margin-right"></td></tr></table>'),
        notification: d.template(null, '<div class="notification"><div class="bg"><div class="left"></div><div class="right"></div></div><div class="icons"></div><div class="text sf-ui-common-ellipsis"></div></div>')
    };
    var b = {
        RED: sf.key.RED,
        GREEN: sf.key.GREEN,
        YELLOW: sf.key.YELLOW,
        BLUE: sf.key.BLUE,
        INFO: sf.key.INFO,
        TOOLS: sf.key.TOOLS,
        PLAY: sf.key.PLAY,
        STOP: sf.key.STOP,
        PAUSE: sf.key.PAUSE,
        ENTER: sf.key.ENTER,
        RETURN: sf.key.RETURN,
        REW: sf.key.REW,
        FF: sf.key.FF
    };
    sf.ui.KeyHelp = sf.ui.widgetFactory({
        widgetName: c,
        baseCssClass: "sf-ui-keyhelp",
        options: {theme: "black"},
        themeClasses: {
            WHITE: "sf-ui-keyhelp-white",
            TRANSPARENT: "sf-ui-keyhelp-transparent",
            BLACK: "sf-ui-keyhelp-black"
        },
        themeCssClass: null,
        iconSet: {
            USER: "sf-ui-keyhelp-icon-user",
            USERSSO: "sf-ui-keyhelp-icon-usersso",
            USERDISABLED: "sf-ui-keyhelp-icon-userdisabled",
            USERNOICON: "sf-ui-keyhelp-icon-noicon",
            NUMBER: "sf-ui-keyhelp-icon-number sf-ui-keyhelp-icon-long",
            IME: "sf-ui-keyhelp-icon-ime",
            TOOLS: "sf-ui-keyhelp-icon-tools",
            INFO: "sf-ui-keyhelp-icon-info",
            ENTER: "sf-ui-keyhelp-icon-enter",
            RETURN: "sf-ui-keyhelp-icon-return",
            UPDOWN: "sf-ui-keyhelp-icon-updown",
            LEFTRIGHT: "sf-ui-keyhelp-icon-leftright",
            MOVE: "sf-ui-keyhelp-icon-move",
            REW: "sf-ui-keyhelp-icon-rew",
            REWFF: "sf-ui-keyhelp-icon-rewff sf-ui-keyhelp-icon-long",
            FF: "sf-ui-keyhelp-icon-ff",
            PLAY: "sf-ui-keyhelp-icon-play",
            PAUSE: "sf-ui-keyhelp-icon-pause",
            STOP: "sf-ui-keyhelp-icon-stop",
            RED: "sf-ui-keyhelp-icon-red",
            GREEN: "sf-ui-keyhelp-icon-green",
            YELLOW: "sf-ui-keyhelp-icon-yellow",
            BLUE: "sf-ui-keyhelp-icon-blue"
        },
        _create: function () {
            alert("[sf.ui.KeyHelp] _create() ");
            this._super()
        },
        _init: function () {
            alert("[sf.ui.KeyHelp] _init() ");
            var h = this.options, f = this.widget();
            this._super();
            try {
                if (h.theme) {
                    h.theme = h.theme.toUpperCase();
                    f.removeClass(this.themeCssClass);
                    this.themeCssClass = this.themeClasses[h.theme];
                    f.addClass(this.themeCssClass)
                }
                this._redraw()
            } catch (g) {
                alert("[sf.KeyHelp] _init() Exception:" + g);
                this.destroy()
            }
        },
        _destroy: function () {
            alert("[sf.ui.KeyHelp] _destroy() ");
            var g = this.initialState, f = this.widget(), h = this.data;
            f.empty().removeClass(this.themeCssClass)
        },
        _redraw: function () {
            alert("[sf.ui.KeyHelp] _redraw() ");
            var k = {items: []};
            var f = this.widget(), l = this.options, g = this.view;
            for (var h in l) {
                var j = h.toUpperCase();
                alert(h + " = " + l[h]);
                if (this.iconSet[j]) {
                    if (!k.userItem && (j == "USER" || j == "USERSSO" || j == "USERDISABLED" || j == "USERNOICON")) {
                        k.userItem = {margin: false, iconclass: this.iconSet[j], label: l[h], key: j}
                    } else {
                        k.items.push({margin: k.items.length > 0, iconclass: this.iconSet[j], label: l[h], key: j})
                    }
                    delete l[h]
                }
            }
            if (g.help) {
                g.help.remove();
                g.help = null
            }
            g.help = d.tmpl(a.main, k);
            f.prepend(g.help);
            for (var h in b) {
                h = h.toUpperCase();
                this.widget().find('td[key="' + h + '"]').each(function () {
                    d(this).bind("click", (function (m) {
                        return function () {
                            alert("KeyHelp item pressed: " + m + "(" + b[m] + ")");
                            e(b[m])
                        }
                    })(h)).css("cursor", "pointer")
                })
            }
            if (sf.ui.reverseText) {
                f.reverseText()
            }
        },
        showNotice: function (p) {
            alert("[sf.ui.KeyHelp] showNotice()");
            var k = this.widget(), f = this.options, l = this.view;
            if (!p.icons) {
                p.icons = []
            }
            if (!p.text) {
                p.text = ""
            }
            if (!p.timeout && p.timeout !== 0) {
                p.timeout = 5000
            }
            if (p.onhide && typeof p.onhide == "function") {
                this.onhidenotice = p.onhide
            }
            var j = 0;
            if (p.icons && p.icons.length) {
                for (var g = 0; g < p.icons.length; g++) {
                    if (p.icons[g].toUpperCase() == "MOUSE" && !sf.env.getMouseEventAvailable()) {
                        alert("Mouse is not available now!!! Mouse icon removed...");
                        p.icons[g] = null;
                        j++
                    } else {
                        if (p.icons[g].toUpperCase() == "GESTURE" && !sf.env.getGestureRecogAvailable()) {
                            alert("Gesture is not available now!!! Gesture icon removed...");
                            p.icons[g] = null;
                            j++
                        } else {
                            if (p.icons[g].toUpperCase() == "VOICE" && !sf.env.getVoiceRecogAvailable()) {
                                alert("Voice is not available now!!! Voice icon removed...");
                                p.icons[g] = null;
                                j++
                            }
                        }
                    }
                }
                if (p.icons.length == j) {
                    alert("All icons disabled. Ignore this operation.");
                    return false
                }
            }
            alert(k.find(".notification").get(0));
            if (!k.find(".notification").get(0)) {
                d.tmpl(a.notification, null).appendTo(k);
                l.notification = k.find(".notification")
            }
            l.notification.show().css("opacity", "0.0");
            l.notification.find(".icons").empty();
            for (var g = 0; g < p.icons.length; g++) {
                alert("Icon : " + p.icons[g]);
                if (p.icons[g] && typeof p.icons[g] == "string") {
                    l.notification.find(".icons").append('<div class="' + p.icons[g] + '"></div>')
                }
            }
            var n = 0;
            l.notification.find(".icons div").each(function () {
                n += d(this).outerWidth(true)
            });
            alert("Icons Width : " + n);
            l.notification.find(".icons").width(n);
            n = l.notification.find(".icons").outerWidth(true);
            alert("Text : " + p.text);
            var h = l.notification.find(".bg .left").outerWidth(true);
            l.notification.find(".text").html(p.text).css({left: n + "px", width: (h - n) + "px"});
            var m = this;
            if (this.hideTimeout) {
                clearTimeout(this.hideTimeout);
                this.hideTimeout = null
            }
            l.notification.stop(true).animate({opacity: "1"}, {
                duration: 300, complete: function () {
                    alert("Noti show complete!!!");
                    if (p.timeout > 0) {
                        alert("Sets noti hide timeout: " + p.timeout);
                        m.hideTimeout = setTimeout(function () {
                            m.hideTimeout = null;
                            l.notification.stop(true).animate({opacity: 0}, {
                                duration: 300, complete: function () {
                                    alert("Noti hide complete!!!");
                                    if (m.onhidenotice && typeof m.onhidenotice == "function") {
                                        m.onhidenotice();
                                        m.onhidenotice = null
                                    }
                                }
                            })
                        }, p.timeout)
                    }
                }
            });
            alert("[sf.ui.KeyHelp] showNotice() END");
            return true
        },
        hideNotice: function () {
            alert("[sf.ui.KeyHelp] hideNotice()");
            var f = this.widget();
            if (f.find(".notification").get(0)) {
                f.find(".notification").hide()
            }
            if (this.onhidenotice && typeof this.onhidenotice == "function") {
                this.onhidenotice();
                this.onhidenotice = null
            }
            alert("[sf.ui.KeyHelp] hideNotice() END")
        }
    });
    function e(f) {
        if (document.createEvent) {
            alert("using document.createEvent");
            var g = document.createEvent("Events");
            g.initEvent("keydown", true, true);
            g.keyCode = f;
            alert("document.activeElement = " + document.activeElement);
            document.activeElement.dispatchEvent(g)
        } else {
            if (document.createEventObject) {
                alert("using document.createEventObject");
                var g = document.createEventObject();
                g.keyCode = f;
                alert("document.activeElement = " + document.activeElement);
                document.activeElement.fireEvent("onkeydown", g)
            }
        }
    }

    sf.ui.bridge(c, sf.ui.KeyHelp);
    sf.ui.addSelector(c)
}(jQuery));
(function (b) {
    var a = "sfLabel";
    sf.ui.Label = sf.ui.widgetFactory({
        widgetName: a,
        baseCssClass: "sf-ui-label sf-ui-common-ellipsis",
        options: {text: ""},
        _create: function () {
            alert("[sf.Label] _create()");
            this.initialState.content = this.widget().html();
            this._super()
        },
        _init: function () {
            alert("[sf.Label] _init()");
            this._super();
            this._setText(this.options.text)
        },
        _setOption: function (c, d) {
            alert("[sf.Label] _setOption(" + c + ", " + d + ")");
            if (c === "text") {
                this.options.text = d;
                this._setText(this.options.text)
            }
        },
        _destroy: function () {
            alert("[sf.Label] _destroy()");
            this._setText(this.initialState.content)
        },
        _setText: function (c) {
            alert("[sf.Label] _setText()");
            this.widget().html(c)
        }
    });
    sf.ui.bridge(a, sf.ui.Label);
    sf.ui.addSelector(a)
}(jQuery));
(function (d) {
    var b = "sfList", c = {BLUR: 1, FOCUS: 2, SELECT: 3};
    var a;
    sf.ui.List = sf.ui.widgetFactory({
        baseCssClass: "sf-ui-list",
        eventNamespace: "sflist",
        options: {data: [], index: 0, itemsPerPage: 10, focusOffset: {x: 0, y: -10}},
        templates: {
            item: '<div class="sf-ui-list-item"><div class="left"></div><div class="center sf-ui-common-ellipsis"></div><div class="right"></div></div>',
            focus: '<div class="sf-ui-list-focus"><div class="left"></div><div class="center"></div><div class="right"></div></div>'
        },
        widgetName: b,
        _destroy: function () {
            this.view.items.remove()
        },
        _create: function () {
            alert("[sf.ui.List] _create()");
            this._super();
            this._addItemWrappers()
        },
        _init: function () {
            alert("[sf.ui.List] _init()");
            var e = this.options;
            this._super();
            this._setItems(e.index);
            this.focus(e.index);
            this._blur()
        },
        _addItemWrappers: function () {
            alert("[sf.ui.List] _addItemWrappers()");
            var m = this.options, e = this.widget(), f = this.view;
            this._beginLayoutSetting();
            e.empty();
            var j = e.width();
            alert("List Width : " + j);
            d.tmpl(this.templates.focus, {}).appendTo(e);
            var l = e.find(".sf-ui-list-focus .left").width();
            var h = e.find(".sf-ui-list-focus .right").width();
            e.find(".sf-ui-list-focus .center").width(j - l - h);
            f.focus = e.find(".sf-ui-list-focus");
            e.append('<div class="sf-ui-list-itemarea"></div>');
            alert("itemsPerPage: " + m.itemsPerPage);
            for (var g = 0; g < m.itemsPerPage; g++) {
                d.tmpl(this.templates.item, {item: ""}).appendTo(e.find(".sf-ui-list-itemarea"))
            }
            f.items = e.find(".sf-ui-list-item");
            f.items.each(function (n, o) {
                l = d(o).find(".left").width();
                h = d(o).find(".right").width();
                d(o).find(".center").width(j - l - h)
            });
            var k = e.find(".sf-ui-list-focus .center").eq(0).outerHeight(true);
            this.itemHeight = e.find(".sf-ui-list-item .center").eq(0).outerHeight(true);
            this.focusYOffset = parseInt((this.itemHeight - k) / 2, 10);
            this._endLayoutSetting()
        },
        _setItems: function (k) {
            alert("[sf.ui.List] _setItems(" + k + ")");
            var j = this.options, g = this.view, h = this.templates, e = this._getPage(k) * j.itemsPerPage;
            this._beginLayoutSetting();
            var f = this;
            g.items = this.widget().find(".sf-ui-list-item");
            g.items.each(function (l, m) {
                if (e + l < j.data.length) {
                    d(m).find(".center").html(j.data[e + l]);
                    d(m).click((function (o) {
                        var n = o;
                        return function () {
                            f.move(n);
                            f._trigger("itemselected", null, n)
                        }
                    })(e + l))
                } else {
                    d(m).find(".center").html("")
                }
            });
            if (sf.ui.reverseText) {
                g.items.reverseText()
            }
            this._endLayoutSetting()
        },
        _focus: function (k) {
            alert("[sf.ui.List] _focus(" + k + ")");
            var j = this.view, g = this.widget();
            if (k == undefined) {
                k = this.options.index
            }
            if (k > this.options.data.length - 1) {
                alert("itemindex out of range. item count : " + this.options.data.length);
                return
            }
            g.addClass("focused");
            var f = this._getPage(k) * this.options.itemsPerPage;
            var h = k - f;
            var e = (h * this.itemHeight) + this.focusYOffset;
            if (k != this.options.index) {
                j.items.removeClass("focused");
                j.focus.stop(true).animate({top: e + "px"}, {
                    duration: 100, complete: function () {
                        alert("[sf.ui.List] moving focus complete!");
                        j.items.eq(h).addClass("focused")
                    }
                })
            } else {
                j.focus.css({top: e + "px"});
                j.items.removeClass("focused").eq(h).addClass("focused")
            }
            j.items.each(function (l) {
                if (h == l) {
                    d(this).find(".center").marquee().removeClass("sf-ui-common-ellipsis")
                } else {
                    d(this).find(".center").addClass("sf-ui-common-ellipsis").marquee(false)
                }
            });
            this.options.index = k
        },
        _blur: function () {
            alert("[sf.ui.List] _blur()");
            var f = this.view, e = this.widget();
            e.removeClass("focused");
            f.items.find(".center").addClass("sf-ui-common-ellipsis").marquee(false)
        },
        _getPage: function (e) {
            alert("[sf.ui.List] _getPage(" + e + ")");
            return Math.floor(e / this.options.itemsPerPage)
        },
        _setOption: function (e, f) {
            alert("[sf.ui.List] _setOption(" + e + ", " + f + ")");
            var g = this.options;
            switch (e) {
                case"data":
                    g.data = [].concat(f);
                    g.index = 0;
                    this._init();
                    break;
                case"index":
                    this.move(f);
                    break;
                case"itemsPerPage":
                    f = parseInt(f, 10);
                    if (f > 0) {
                        g.itemsPerPage = f;
                        this._addItemWrappers();
                        this._setItems(f);
                        this._focus(f);
                        if (!this._getFocused()) {
                            this._blur()
                        }
                    }
                    break
            }
        },
        _getFocused: function () {
            return this.widget().hasClass("focused")
        },
        blur: function () {
            alert("[sf.ui.List] blur()");
            this._blur();
            return this
        },
        clear: function () {
            alert("[sf.ui.List] clear()");
            this.blur();
            this._setOption("data", []);
            return this
        },
        focus: function () {
            alert("[sf.ui.List] focus()");
            this._focus();
            return this
        },
        getIndex: function () {
            alert("[sf.ui.List] getIndex()");
            var e = this.option("index");
            alert("\tindex: " + e);
            return e
        },
        getSelectedItem: function () {
            alert("[sf.ui.List] getSelectedItem()");
            var e = this.options;
            return e.data[e.index]
        },
        move: function (e) {
            alert("[sf.ui.List] move(" + e + ")");
            var f = this.options;
            e = parseInt(e, 10);
            if (!isNaN(e) && e >= 0 && e < f.data.length) {
                if (this._getPage(f.index) != this._getPage(e)) {
                    this._setItems(e)
                }
                this._focus(e)
            }
            return this
        },
        next: function () {
            alert("[sf.ui.List] next()");
            this.move((this.options.index + 1) % this.options.data.length);
            return this
        },
        prev: function () {
            alert("[sf.ui.List] prev()");
            this.move((this.options.index - 1 + this.options.data.length) % this.options.data.length);
            return this
        }
    });
    sf.ui.bridge(b, sf.ui.List);
    sf.ui.addSelector(b)
}(jQuery));
(function (b) {
    var a = "sfLoading";
    sf.ui.Loading = sf.ui.widgetFactory({
        widgetName: a,
        eventNamespace: "sfloading",
        baseCssClass: "sf-ui-loading",
        options: {animatedCssClass: "sf-ui-loading-circle", stepIntervalTime: 100, stepTotal: 18},
        templates: {animation: '<div class="${animatedCssClass}"></div>'},
        stepIndex: 0,
        interval: false,
        _create: function () {
            alert("[sf.Loading] _create()");
            this._super();
            this.view.animatedElement = b.tmpl(this.templates.animation, {animatedCssClass: this.options.animatedCssClass});
            this.widget().html(this.view.animatedElement)
        },
        _destroy: function () {
            alert("[sf.Loading] _destroy()");
            this.view.animatedElement.remove()
        },
        _animate: function () {
            alert("[sf.Loading] _animate()");
            var c = this;
            this.interval = setInterval(function () {
                c.animationStep()
            }, this.options.stepIntervalTime)
        },
        animationStep: function () {
            alert("[sf.Loading] animationStep()");
            var d = this.stepIndex, c = (d + 1) % this.options.stepTotal;
            this.view.animatedElement.removeClass(this.options.animatedCssClass + "-" + d.toString()).addClass(this.options.animatedCssClass + "-" + c.toString());
            this.stepIndex = c
        },
        show: function () {
            alert("[sf.Loading] _show()");
            this.widget().show();
            if (this.interval) {
                return this
            }
            this._animate();
            return this
        },
        hide: function () {
            alert("[sf.Loading] _hide()");
            this.widget().hide();
            clearInterval(this.interval);
            this.interval = null;
            return this
        }
    });
    sf.ui.bridge(a, sf.ui.Loading);
    sf.ui.addSelector(a)
}(jQuery));
(function (b) {
    var a = "sfScroll";
    sf.ui.Scroll = sf.ui.widgetFactory({
        baseCssClass: "sf-ui-scroll",
        eventNamespace: "sfscroll",
        options: {pages: 0, currentPage: 0},
        pageHeight: 0,
        scrollSize: 0,
        templates: {
            bg: '<div class="sf-ui-scroll-bg"><div class="sf-ui-scroll-bg-top"></div><div class="sf-ui-scroll-bg-middle"></div><div class="sf-ui-scroll-bg-bottom"></div></div>',
            body: '<div class="sf-ui-scroll-body"><div class="sf-ui-scroll-body-top"></div><div class="sf-ui-scroll-body-middle"></div><div class="sf-ui-scroll-body-bottom"></div></div>'
        },
        totalHeight: 0,
        widgetName: a,
        _create: function () {
            alert("[sf.Scroll] _create()");
            var f = this.options, e = this.templates, d = this.view, c = this.widget();
            this._super();
            this.totalHeight = c.height();
            b.each(["bg", "body"], function (h, g) {
                d[g] = b.tmpl(e[g])
            });
            c.append(d.bg, d.body);
            alert("SCROLL HTML : " + c.html());
            this._updateScroll()
        },
        _destroy: function () {
            var c = this.view;
            b.each(["bg", "body"], function (e, d) {
                c[d].remove()
            })
        },
        _move: function (c) {
            var e = this.options, d = e.currentPage;
            if (c >= 0 && c < e.pages) {
                e.currentPage = c;
                this._updateScrollPosition();
                this._trigger("move", null, {previousPage: d, currentPage: c})
            }
            return this
        },
        _setOption: function (c, d) {
            alert("[sf.Scroll] _setOption(" + c + ", " + d + ")");
            var e = this.options;
            switch (c) {
                case"pages":
                    e.pages = d;
                    if (e.currentPage > e.pages - 1) {
                        e.currentPage = e.pages - 1
                    }
                    this._updateScroll();
                    break;
                case"currentPage":
                    this.move(d);
                    break
            }
        },
        _updateScroll: function () {
            alert("[sf.Scroll] _updateScroll()");
            this._updateScrollSettings();
            this._updateScrollPosition()
        },
        _updateScrollSettings: function () {
            alert("[sf.Scroll] _updateScrollSettings()");
            var g = 30;
            var j = this.options, f = this.view;
            this._beforeLayoutSetting();
            var d = f.bg.find(".sf-ui-scroll-bg-top").height();
            var e = f.bg.find(".sf-ui-scroll-bg-bottom").height();
            alert("BG Top Height: " + d);
            alert("BG Bottom Height: " + e);
            f.bg.find(".sf-ui-scroll-bg-middle").css("height", this.totalHeight - (d + e));
            this.scrollSize = Math.round(this.totalHeight / j.pages);
            if (this.scrollSize < g) {
                this.scrollSize = g
            }
            this.pageHeight = this.totalHeight - this.scrollSize;
            if (j.pages > 1) {
                this.pageHeight /= j.pages - 1
            }
            if (true) {
                var h = f.body.find(".sf-ui-scroll-body-top").height();
                var c = f.body.find(".sf-ui-scroll-body-bottom").height();
                alert("Body Top Height: " + h);
                alert("Body Bottom Height: " + c);
                alert("Set middle of body size to : " + (this.scrollSize - (h + c)));
                f.body.find(".sf-ui-scroll-body-middle").height(this.scrollSize - (h + c))
            }
            this._afterLayoutSetting()
        },
        _beforeLayoutSetting: function () {
            alert("[sf.ui.Scroll] _beforeLayoutSetting()");
            var c = this.widget();
            if (this._bLayoutSetting) {
                alert("\tAlready on setting");
                return
            }
            this._styleVisibility = c.css("visibility");
            this._styleDisplay = c.css("display");
            this._bLayoutSetting = true;
            c.css({visibility: "hidden", display: "block"})
        },
        _afterLayoutSetting: function () {
            alert("[sf.ui.Scroll] _afterLayoutSetting()");
            if (!this._bLayoutSetting) {
                alert("\tNot on setting");
                return
            }
            var c = this.widget();
            c.css({visibility: this._styleVisibility || "", display: this._styleDisplay || ""});
            this._styleVisibility = null;
            this._styleDisplay = null;
            this._bLayoutSetting = false
        },
        _updateScrollPosition: function () {
            alert("[sf.Scroll] _updateScrollPosition()");
            var c = this.view, e = this.options, d;
            d = Math.ceil(this.pageHeight * e.currentPage);
            c.body.css("top", d);
            alert("Move Top to : " + d)
        },
        move: function (c) {
            alert("[sf.Scroll] move(" + c + ")");
            this._move(c);
            return this
        },
        next: function () {
            alert("[sf.Scroll] next()");
            this._move(this.options.currentPage + 1);
            return this
        },
        prev: function () {
            alert("[sf.Scroll] prev()");
            this._move(this.options.currentPage - 1);
            return this
        }
    });
    sf.ui.bridge(a, sf.ui.Scroll);
    sf.ui.addSelector(a)
}(jQuery));
(function (b) {
    var a = "sfHScroll";
    sf.ui.HScroll = sf.ui.widgetFactory({
        baseCssClass: "sf-ui-hscroll",
        eventNamespace: "sfHScroll",
        options: {pages: 0, currentPage: 0},
        pageWidth: 0,
        scrollSize: 0,
        templates: {
            bg: '<div class="sf-ui-hscroll-bg"><div class="sf-ui-hscroll-bg-left"></div><div class="sf-ui-hscroll-bg-center"></div><div class="sf-ui-hscroll-bg-right"></div></div>',
            body: '<div class="sf-ui-hscroll-body"><div class="sf-ui-hscroll-body-left"></div><div class="sf-ui-hscroll-body-center"></div><div class="sf-ui-hscroll-body-right"></div></div>'
        },
        totalWidth: 0,
        widgetName: a,
        _create: function () {
            alert("[sf.HScroll] _create()");
            var f = this.options, e = this.templates, d = this.view, c = this.widget();
            this._super();
            this.totalWidth = c.width();
            alert("totalWidth = " + this.totalWidth);
            b.each(["bg", "body"], function (h, g) {
                d[g] = b.tmpl(e[g])
            });
            c.append(d.bg, d.body);
            this._updateScroll();
            alert("SCROLL HTML : " + c.html())
        },
        _destroy: function () {
            var c = this.view;
            b.each(["bg", "body"], function (e, d) {
                c[d].remove()
            })
        },
        _move: function (c) {
            var e = this.options, d = e.currentPage;
            if (c >= 0 && c < e.pages) {
                e.currentPage = c;
                this._updateScrollPosition();
                this._trigger("move", null, {previousPage: d, currentPage: c})
            }
            return this
        },
        _setOption: function (c, d) {
            alert("[sf.HScroll] _setOption(" + c + ", " + d + ")");
            var e = this.options;
            switch (c) {
                case"pages":
                    e.pages = d;
                    if (e.currentPage > e.pages - 1) {
                        e.currentPage = e.pages - 1
                    }
                    this._updateScroll();
                    break;
                case"currentPage":
                    this.move(d);
                    break
            }
        },
        _updateScroll: function () {
            alert("[sf.HScroll] _updateScroll()");
            this._updateScrollSettings();
            this._updateScrollPosition()
        },
        _updateScrollSettings: function () {
            alert("[sf.HScroll] _updateScrollSettings()");
            var h = 30;
            var j = this.options, f = this.view;
            this._beforeLayoutSetting();
            var c = f.bg.find(".sf-ui-hscroll-bg-left").width();
            var e = f.bg.find(".sf-ui-hscroll-bg-right").width();
            f.bg.find(".sf-ui-hscroll-bg-center").css("width", this.totalWidth - (c + e));
            this.scrollSize = Math.round(this.totalWidth / j.pages);
            if (this.scrollSize < h) {
                this.scrollSize = h
            }
            this.pageWidth = this.totalWidth - this.scrollSize;
            if (j.pages > 1) {
                this.pageWidth /= j.pages - 1
            }
            if (true) {
                var d = f.body.find(".sf-ui-hscroll-body-left").width();
                var g = f.body.find(".sf-ui-hscroll-body-right").width();
                alert("Set middle of body size to : " + (this.scrollSize - (d + g)));
                f.body.find(".sf-ui-hscroll-body-center").width(this.scrollSize - (d + g))
            }
            this._afterLayoutSetting()
        },
        _beforeLayoutSetting: function () {
            alert("[sf.ui.HScroll] _beforeLayoutSetting()");
            var c = this.widget();
            if (this._bLayoutSetting) {
                alert("\tAlready on setting");
                return
            }
            this._styleVisibility = c.css("visibility");
            this._styleDisplay = c.css("display");
            this._bLayoutSetting = true;
            c.css({visibility: "hidden", display: "block"})
        },
        _afterLayoutSetting: function () {
            alert("[sf.ui.HScroll] _afterLayoutSetting()");
            if (!this._bLayoutSetting) {
                alert("\tNot on setting");
                return
            }
            var c = this.widget();
            c.css({visibility: this._styleVisibility || "", display: this._styleDisplay || ""});
            this._styleVisibility = null;
            this._styleDisplay = null;
            this._bLayoutSetting = false
        },
        _updateScrollPosition: function () {
            alert("[sf.HScroll] _updateScrollPosition()");
            var c = this.view, e = this.options, d;
            d = Math.ceil(this.pageWidth * e.currentPage);
            c.body.css("left", d);
            alert("Move Left to : " + d)
        },
        move: function (c) {
            alert("[sf.HScroll] move(" + c + ")");
            this._move(c);
            return this
        },
        next: function () {
            alert("[sf.HScroll] next()");
            this._move(this.options.currentPage + 1);
            return this
        },
        prev: function () {
            alert("[sf.HScroll] prev()");
            this._move(this.options.currentPage - 1);
            return this
        }
    });
    sf.ui.bridge(a, sf.ui.HScroll);
    sf.ui.addSelector(a)
}(jQuery));
(function (b) {
    var a = "sfPopup";
    var d = 0;
    sf.ui.Popup = sf.ui.widgetFactory({
        widgetName: a,
        eventNamespace: "sfpopup",
        baseCssClass: "sf-ui-popup",
        options: {
            text: "",
            buttons: null,
            focus: 0,
            defaultFocus: 0,
            timeout: null,
            callback: null,
            title: "",
            keyhelp: null,
            dim: true,
            actionpopup: false,
            onkeydown: null
        },
        templates: {
            popupTpl: '<div class="dim"></div><div class="bg alpha"><div class="top"><div class="left"></div><div class="center"></div><div class="right"></div></div><div class="mid"><div class="left"></div><div class="center"></div><div class="right"></div></div><div class="bottom"><div class="left"></div><div class="center"></div><div class="right"></div></div></div><div class="bg"><div class="top"><div class="left"></div><div class="center"></div><div class="right"></div></div><div class="mid"><div class="left"></div><div class="center"></div><div class="right"></div></div><div class="bottom"><div class="left"></div><div class="center"></div><div class="right"></div></div></div><div class="title"></div><div class="text"></div><div class="buttons"></div><div class="keyhelp"></div><a href="javascript:void(0);" onkeydown="$(\'#${id}\').sfPopup(\'key\');"></a>',
            buttonItem: '<div class="sf-ui-button"><div class="sf-ui-button-l"></div><div class="sf-ui-button-c">${buttontext}</div><div class="sf-ui-button-r"></div></div>'
        },
        timer: null,
        timeOutSecs: [5, 10, 30],
        popupWidth: 0,
        popupHeight: 0,
        _init: function () {
            alert("[sf.Popup] _init()");
            var h = this.options, f = this.view, e = this.widget();
            this._beginLayoutSetting();
            e.empty().append(b.tmpl(this.templates.popupTpl, {id: e.attr("id")}));
            f.text = e.find(".text");
            if (typeof h.title == "string" && h.title != "") {
                e.addClass("title");
                e.find(".title").html(h.title).show();
                alert("Title Exist")
            } else {
                e.removeClass("title");
                e.find(".title").html("").hide();
                h.title = null
            }
            if (h.keyhelp) {
                e.addClass("keyhelp");
                e.find(".keyhelp").show();
                alert("KeyHelp Exist")
            } else {
                e.removeClass("keyhelp");
                e.find(".keyhelp").hide();
                h.keyhelp = null
            }
            if (h.actionpopup) {
                h.actionpopup = true;
                e.addClass("actionpopup")
            } else {
                h.actionpopup = false;
                e.removeClass("actionpopup")
            }
            if (h.onkeydown && h.onkeydown instanceof Function) {
            } else {
                h.onkeydown = null
            }
            if (h.buttons) {
                if (typeof h.buttons == "string") {
                    h.buttons = [h.buttons]
                }
                alert("popup with " + h.buttons.length + " buttons")
            } else {
                h.buttons = [];
                alert("popup with no button")
            }
            this._createButtons();
            this._setPopupLayout();
            this._centerPopup();
            alert("timeout: " + h.timeout);
            if (!h.timeout && h.timeout != 0) {
                h.timeout = (this.timeOutSecs.length - 1 >= h.buttons.length) ? (this.timeOutSecs[h.buttons.length] * 1000) : (this.timeOutSecs[this.timeOutSecs.length - 1] * 1000);
                alert("timeout : " + h.timeout)
            }
            var g = this;
            e.find("a").bind("keydown", function () {
                g.key(sf.core.mapAliasedKeys(event.keyCode) || event.keyCode)
            }, false);
            if (h.dim) {
                e.find(".dim").show()
            } else {
                e.find(".dim").hide()
            }
            if (sf.ui.reverseText) {
                e.find(".title,.text,.sf-ui-button-c").reverseText()
            }
            this._endLayoutSetting();
            e.hide();
            alert("[sf.Popup] _init() END")
        },
        _createButtons: function () {
            alert("[sf.Popup] _createButtons()");
            var l = this.options, g = this.view, f = this.widget();
            var e = f.find(".buttons");
            if (!e) {
                return
            }
            e.empty();
            g.buttons = null;
            if (l.buttons) {
                g.buttons = [];
                alert(l.buttons.length + " buttons");
                for (var j = 0; j < l.buttons.length; j++) {
                    var h = b.tmpl(this.templates.buttonItem, {buttontext: l.buttons[j]});
                    e.append(h);
                    g.buttons.push(h);
                    var k = this;
                    h.bind("click", (function (m) {
                        return function () {
                            k._handleButtonSelect(m)
                        }
                    })(j))
                }
            }
        },
        _setPopupLayout: function () {
            alert("[sf.Popup] _setPopupLayout()");
            var u = this.options, r = this.view, q = this.widget();
            this.popupWidth = q.width() || 500;
            alert("this.popupWidth: " + this.popupWidth);
            if (u.title) {
                var m = parseInt(q.find(".title").css("left"), 10);
                q.find(".title").width(this.popupWidth - (m * 2))
            }
            if (u.keyhelp) {
                var n = parseInt(q.find(".keyhelp").css("left"), 10);
                q.find(".keyhelp").width(this.popupWidth - (n * 2));
                q.find(".keyhelp").sfKeyHelp(u.keyhelp)
            }
            var k = parseInt(100 / 720 * curWidget.height, 10);
            if (r.buttons && r.buttons.length > 0) {
                q.find(".sf-ui-button-c").each(function (o) {
                    alert(b(this).width());
                    if (b(this).width() < k) {
                        b(this).width(k)
                    }
                })
            }
            var z = q.find(".buttons").width();
            var B = q.find(".mid .left").width();
            var f = q.find(".mid .right").width();
            alert("Center width from popup width : " + (this.popupWidth - (B + f)));
            alert("Center width from button width : " + z);
            var p = Math.max(this.popupWidth - (B + f), z);
            alert("bg center width : " + p);
            q.find(".bg .center").width(p);
            this.popupWidth = p + (B + f);
            alert("update popupWidth : " + this.popupWidth);
            q.css("width", this.popupWidth + "px");
            q.find(".text").css("padding-top", "0px");
            var l = parseInt(r.text.css("left"), 10);
            var h = this.popupWidth - (2 * l);
            alert("text width: " + h);
            r.text.width(h).html(u.text);
            alert("Scroll Width : " + r.text.get(0).scrollWidth);
            if (parseInt(r.text.get(0).scrollWidth, 10) > h) {
                alert("TEXT OVERFLOW");
                r.text.html(c(u.text))
            }
            alert("Text : " + u.text);
            var s = q.find(".text").height();
            alert("textheight: " + s);
            var g = parseInt(r.text.css("top"), 10);
            var x = q.find(".bg .top").height();
            var A = q.find(".bg .bottom").height();
            alert("textTop : " + g);
            alert("bgTopHeight : " + x);
            alert("bgBottomHeight : " + A);
            if (r.buttons && r.buttons.length > 0) {
                q.find(".buttons").css({left: parseInt((this.popupWidth - z) / 2, 10) + "px"}).show();
                var e = q.find(".buttons").outerHeight(true);
                this.popupHeight = g + s + e
            } else {
                q.find(".buttons").hide();
                this.popupHeight = g + s + g;
                if (this.popupHeight < (x + A)) {
                    var t = parseInt(((x + A) - this.popupHeight) / 2, 10);
                    q.find(".text").css("padding-top", t + "px")
                }
            }
            if (this.popupHeight < (x + A)) {
                this.popupHeight = (x + A)
            }
            var y = Math.max(this.popupHeight - (x + A), 0);
            alert("middle height : " + y);
            q.find(".bg .mid").height(y);
            q.find(".bg .mid div").height(y);
            q.height(this.popupHeight);
            var j = sf.env.getPopupOpacity();
            alert("Popup opacity: " + j);
            if (j > 0 && j <= 1) {
                alert("Apply popup opacity");
                q.find(".bg.alpha").css("opacity", j)
            }
        },
        _centerPopup: function () {
            alert("[sf.Popup] _centerPopup()");
            var e = this.widget();
            e.css("left", (b(window).width() - this.popupWidth) / 2);
            e.css("top", (b(window).height() - this.popupHeight) / 2)
        },
        _focus: function (h) {
            alert("[sf.Popup] _focus(" + h + ")");
            var g = this.options, e = this.view;
            for (var f = 0; f < e.buttons.length; f++) {
                if (f == h) {
                    e.buttons[f].addClass("sf-ui-button-focus").find("div").addClass("focus")
                } else {
                    e.buttons[f].removeClass("sf-ui-button-focus").find("div").removeClass("focus")
                }
            }
            g.focus = h;
            alert("[sf.Popup] _focus() END")
        },
        _setTimer: function () {
            alert("[sf.Popup] _setTimer()");
            var e = this, g = e.options, f = g.timeout;
            this._clearTimer();
            if (f && f > 0) {
                this.timer = setTimeout(function () {
                    e.hide(true, "timeout", f)
                }, f)
            }
            alert("\ttimeout: " + f)
        },
        _clearTimer: function () {
            alert("[sf.Popup] _clearTimer()");
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null
            }
        },
        _setOption: function (f, g) {
            alert("[sf.Popup] _setOption(" + f + ", " + g + ")");
            var h = this.options, e = this.widget();
            this._beginLayoutSetting();
            switch (f) {
                case"text":
                    if (g) {
                        h.text = g;
                        this._setPopupLayout();
                        this._centerPopup()
                    }
                    break;
                case"callback":
                    if (g) {
                        h.callback = g
                    }
                    break;
                case"timeout":
                    if (b.isPlainObject(g)) {
                        h.timeout = g
                    } else {
                        alert("[AF ui] sfPopup could not set timeOut. Bad value.")
                    }
                    break;
                case"focus":
                    if (g >= 0 && g < h.buttons.length) {
                        this._focus(g)
                    }
                    break;
                case"buttons":
                    if (typeof g == "string") {
                        h.buttons = [g]
                    } else {
                        if (!g.length) {
                            h.buttons = null
                        } else {
                            h.buttons = g
                        }
                    }
                    this._createButtons();
                    this._setPopupLayout();
                    this._centerPopup();
                    break;
                case"defaultFocus":
                    this.options.defaultFocus = g;
                    break;
                case"title":
                    this.options.title = g;
                    break;
                case"keyhelp":
                    this.options.keyhelp = g;
                    break;
                case"dim":
                    if (g === true || g === false) {
                        this.options.dim = g
                    }
                    break;
                case"actionpopup":
                    if (g === true || g === false) {
                        this.options.actionpopup = g
                    }
                    break;
                case"onkeydown":
                    if (g instanceof Function) {
                        this.options.onkeydown = g
                    }
                    break
            }
            this._endLayoutSetting()
        },
        _destroy: function () {
            var e = this.widget();
            e.empty()
        },
        show: function () {
            alert("[sf.Popup] show()");
            var e = this.widget(), g = this.view, h = this.options;
            h.focus = h.defaultFocus;
            e.show();
            this._setTimer();
            this.handlerId = null;
            if (sf.scene._isSceneArchUsed()) {
                this.handlerId = sf.scene.pushKeyHandler(function (j) {
                    this.key(j || sf.core.mapAliasedKeys(event.keyCode) || event.keyCode)
                }, {context: this})
            } else {
                e.find("a").focus()
            }
            this.bShown = true;
            var f = this;
            e.find("a").bind("blur", function () {
                alert("onBlur: Popup anchor");
                if (sf.scene._isSceneArchUsed()) {
                    alert("Scene architecture is used. Skip...")
                } else {
                    if (f.bShown) {
                        alert("Scene architecture is not used. Return focus to anchor.");
                        f.widget().find("a").focus()
                    } else {
                        alert("Popup is not shown. Skip...")
                    }
                }
            });
            this._focus(h.focus);
            alert("[sf.Popup] show() END");
            return this
        },
        hide: function (j, m, k) {
            alert("[sf.Popup] hide(" + (j || "") + ", " + (m || "") + ", " + (k || "") + ")");
            var f = this.widget(), g = this.view, n = this.options;
            this.bShown = false;
            f.hide();
            this._clearTimer();
            if (this.handlerId) {
                sf.scene.removeKeyHandler(this.handlerId);
                this.handlerId = null
            }
            if (typeof n.callback === "function") {
                var h = null;
                if (m) {
                    h = {closeReason: m};
                    if (h.closeReason == "userclosing") {
                        h.buttonIndex = (typeof k == "number") ? k : -1
                    } else {
                        if (h.closeReason == "canceledbykey") {
                            h.keyCode = (typeof k == "number") ? k : null
                        } else {
                            if (h.closeReason == "timeout") {
                                h.time = (typeof k == "number") ? k : -1
                            }
                        }
                    }
                } else {
                    h = {closeReason: "hidecall"}
                }
                try {
                    n.callback(j ? -1 : (n.buttons && n.buttons.length ? n.focus : -1), h)
                } catch (l) {
                    alert("EXCEPTION(Popup callback): " + l)
                }
            }
            alert("[sf.Popup] hide() END")
        },
        key: function (g) {
            alert("[sf.Popup] key(" + (g || "") + ")");
            g = g || event.keyCode;
            alert("[AF ui] sfPopup keyctl(" + g + ")");
            var h = this.options, f = this.view, e = this.widget();
            this._setTimer();
            if (h.onkeydown && h.onkeydown instanceof Function && g != sf.key.RETURN && g != sf.key.EXIT) {
                if (!h.onkeydown.call(this, g)) {
                    return
                }
            }
            switch (g) {
                case (sf.key.LEFT):
                    if (!h.buttons || h.buttons.length <= 1) {
                        return
                    }
                    if (h.focus > 0) {
                        this._focus(h.focus - 1)
                    }
                    break;
                case (sf.key.RIGHT):
                    if (!h.buttons || h.buttons.length <= 1) {
                        return
                    }
                    if (h.focus < h.buttons.length - 1) {
                        this._focus(h.focus + 1)
                    }
                    break;
                case (sf.key.ENTER):
                    this._handleButtonSelect();
                    break;
                case (sf.key.RETURN):
                case (sf.key.EXIT):
                    sf.key.preventDefault();
                    this.hide(true, "canceledbykey", g);
                    break
            }
        },
        _handleButtonSelect: function (g) {
            alert("[sf.Popup] _handleButtonSelect(" + (g >= 0 || "") + ")");
            var h = this.options, f = this.view, e = this.widget();
            if (typeof g == "number" && g >= 0 && g < h.buttons.length) {
                h.focus = g
            }
            if (0 <= h.focus && h.focus < h.buttons.length) {
                this.hide(false, "userclosing", h.focus)
            } else {
                this.hide(false, "userclosing", -1)
            }
        }
    });
    sf.ui.bridge(a, sf.ui.Popup);
    sf.ui.addSelector(a);
    function c(e) {
        var k = 3;
        var j = "";
        var g = "<wbr/>";
        var h = 0;
        for (var f = 0; f < e.length; f++) {
            if (e.charAt(f) == " ") {
                j += "&nbsp;";
                h = 0
            } else {
                if (e.charAt(f) == "<" || e.charAt(f) == ">") {
                    h = 0
                } else {
                    if (h >= k && f < e.length - 1) {
                        j += g;
                        h = 0
                    }
                    j += e.charAt(f);
                    h++
                }
            }
        }
        return j
    }
}(jQuery));
(function ($) {
    var widgetName = "sfDatepicker";
    var MARGIN_ITEMS = 4;
    var region = null;
    var regionalInputElement = {
        1: ["time_year", "time_month", "time_day", "time_ampm", "time_hour", "time_minute"],
        2: ["time_month", "time_day", "time_year", "time_hour", "time_minute", "time_ampm"],
        3: ["time_day", "time_month", "time_year", "time_hour", "time_minute", "time_ampm"],
        4: ["time_day", "time_month", "time_year", "time_hour24", "time_minute"],
        5: ["time_day", "time_month", "time_year", "time_hour", "time_minute", "time_ampm"],
        6: ["time_day", "time_month", "time_year", "time_hour", "time_minute", "time_ampm"],
        7: ["time_day", "time_month", "time_year", "time_hour", "time_minute", "time_ampm"],
        8: ["time_day", "time_month", "time_year", "time_hour24", "time_minute"],
        9: ["time_day", "time_month", "time_year", "time_hour", "time_minute", "time_ampm"],
        10: ["time_day", "time_month", "time_year", "time_hour", "time_minute", "time_ampm"],
        11: ["time_day", "time_month", "time_year", "time_hour", "time_minute", "time_ampm"],
        12: ["time_day", "time_month", "time_year", "time_hour", "time_minute", "time_ampm"],
        13: ["time_day", "time_month", "time_year", "time_hour", "time_minute", "time_ampm"],
        14: ["time_day", "time_month", "time_year", "time_hour", "time_minute", "time_ampm"],
        15: ["time_day", "time_month", "time_year", "time_hour", "time_minute", "time_ampm"],
        16: ["time_day", "time_month", "time_year", "time_hour", "time_minute", "time_ampm"],
        17: ["time_day", "time_month", "time_year", "time_hour", "time_minute", "time_ampm"],
        0: null,
    };
    sf.ui.Datepicker = sf.ui.widgetFactory({
        baseCssClass: "sf-ui-datepicker",
        widgetName: widgetName,
        region: region,
        dayNormalYear: [31, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        dayLeapYear: [31, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        inputElement: regionalInputElement[2],
        nNumElements: 0,
        options: {title: null, timePicker: false, timeout: 30, format: "yyyy-MM-dd", callback: null, date: new Date()},
        templates: {
            frame: $.template(null, "<div class='dim'></div><div class='bg alpha'><div class='bgTop'><div class='leftTop'></div><div class='centerTop'></div><div class='rightTop'></div></div><div class='bgMid'><div class='leftMid'></div><div class='centerMid'></div><div class='rightMid'></div></div><div class='bgBtm'><div class='leftBtm'></div><div class='centerBtm'></div><div class='rightBtm'></div></div></div><div class='bg'><div class='bgTop'><div class='leftTop'></div><div class='centerTop'></div><div class='rightTop'></div></div><div class='bgMid'><div class='leftMid'></div><div class='centerMid'></div><div class='rightMid'></div></div><div class='bgBtm'><div class='leftBtm'></div><div class='centerBtm'></div><div class='rightBtm'></div></div></div><div class='titletext'>${titletext}</div><div class='keyhelp'></div><div class='time_unit'>{{each unittexts}}<div class='${$index}'>${$value}</div>{{/each}}</div><div class='time_text'></div><a href=\"javascript:void(0);\" onkeydown=\"$('#${id}').sfDatepicker('key');\"></a>"),
            inputCell: $.template(null, "<div class='inputCell ${selectId}'><div class='left'></div><div class='center'>${selectText}</div><div class='right'></div><div class='arrowup'></div><div class='arrowdown'></div></div>")
        },
        tempDate: {year: 0, month: 0, day: 0, ampm: "am", hour: 0, minute: 0},
        dataDefault: {
            focusIndex: 0,
            patternParts: /^(yy(yy)?|M(M(M(M)?)?)?|d(d)?|EEE(E)?|a|H(H)?|h(h)?|m(m)?|s(s)?|S)/,
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        },
        _create: function () {
            alert("[sf.Datepicker] _create()");
            this._super();
            if (!region) {
                region = sf.env.getTargetLocation()
            }
            alert("Selected type: " + region);
            this.inputElement = regionalInputElement[region];
            if (!this.inputElement) {
                region = sf.env.TARGETLOCATION_USA;
                this.inputElement = regionalInputElement[region];
                alert("Alternative type: " + region)
            }
            if (!this.options.title && this.options.title !== "") {
                this.options.title = sf.lang.TV_SID_SETTING
            }
            this.tempDate.ampm = sf.lang.SID_AM;
            this.dataDefault.monthNames = [sf.lang.SID_JANUARY, sf.lang.SID_FEBRUARY, sf.lang.SID_MARCH, sf.lang.SID_APRIL, sf.lang.SID_MAY_FULL, sf.lang.SID_JUNE, sf.lang.SID_JULY, sf.lang.SID_AUGUST, sf.lang.SID_SEPTEMBER, sf.lang.SID_OCTOBER, sf.lang.SID_NOVEMBER, sf.lang.SID_DECEMBER];
            this.dataDefault.monthNamesShort = [sf.lang.SID_JAN, sf.lang.SID_FEB, sf.lang.SID_MAR, sf.lang.SID_APR, sf.lang.SID_MAY, sf.lang.SID_JUN, sf.lang.SID_JUL, sf.lang.SID_AUG, sf.lang.SID_SEP, sf.lang.SID_OCT, sf.lang.SID_NOV, sf.lang.SID_DEC];
            this.dataDefault.dayNames = [sf.lang.SID_SUNDAY, sf.lang.SID_MONDAY, sf.lang.SID_TUESDAY, sf.lang.SID_WEDNESDAY, sf.lang.SID_THURSDAY, sf.lang.SID_FRIDAY, sf.lang.SID_SATURDAY];
            this.dataDefault.dayNamesShort = [sf.lang.SID_SUN, sf.lang.SID_MON, sf.lang.SID_TUE, sf.lang.SID_WED, sf.lang.SID_THU, sf.lang.SID_FRI, sf.lang.SID_SAT]
        },
        _setInputCells: function () {
            alert("[sf.Datepicker] _setInputCells()");
            var inpEle = this.inputElement, td = this.tempDate, dateValue = [];
            for (var i = 0; i < inpEle.length; i++) {
                if (!this.options.timePicker && inpEle[i] != "time_year" && inpEle[i] != "time_month" && inpEle[i] != "time_day") {
                    this.nNumElements = 2;
                    continue
                }
                if (inpEle[i] == "time_hour24") {
                    this.nNumElements = 4
                } else {
                    if (inpEle[i] == "time_hour") {
                        this.nNumElements = 5
                    }
                }
                dateValue.push({selectId: inpEle[i], selectText: ""});
                alert("td." + inpEle[i].toLowerCase().split("_")[1])
            }
            this.widget().find(".time_text").html($.tmpl(this.templates.inputCell, dateValue));
            var self = this;
            this.widget().find(".time_text .inputCell").each(function (index, elmt) {
                $(elmt).find(".center").bind("click", (function (index) {
                    var idx = index;
                    return function () {
                        self._resetCloseTimer();
                        self._setFocus(idx)
                    }
                })(index));
                $(elmt).bind("mouseover", function () {
                    $(elmt).addClass("mouseover")
                });
                $(elmt).bind("mouseout", function () {
                    $(elmt).removeClass("mouseover")
                });
                $(elmt).bind("mousewheel", function () {
                    alert("MouseWheel event: " + event.wheelDelta);
                    if (!$(elmt).hasClass("focused")) {
                        return
                    }
                    self.key(event.wheelDelta > 0 ? sf.key.UP : sf.key.DOWN)
                })
            });
            this.widget().find(".time_text .inputCell .arrowup").each(function (index, elmt) {
                $(elmt).bind("click", function () {
                    self.key(sf.key.UP)
                })
            });
            this.widget().find(".time_text .inputCell .arrowdown").each(function (index, elmt) {
                $(elmt).bind("click", function () {
                    self.key(sf.key.DOWN)
                })
            });
            this._setFocus(this.dataDefault.focusIndex)
        },
        _init: function () {
            alert("[sf.Datepicker] _init()");
            this._createTpl();
            this.widget().hide();
            this._setDate(this.options.date);
            this._setInputCells();
            this._updateTimeHtml()
        },
        _createTpl: function () {
            var leftPx, widthPx, parentId;
            this._beginLayoutSetting();
            if (this.options.timePicker) {
                if (this.inputElement.length == 6) {
                    this.widget().addClass("timepicker")
                } else {
                    if (this.inputElement.length == 5) {
                        this.widget().addClass("timepicker24")
                    }
                }
            } else {
                this.widget().removeClass("timepicker");
                this.widget().removeClass("timepicker24")
            }
            var dataTpl = {id: this.widget().attr("id"), titletext: this.options.title};
            var unittexts = {
                unit_year: sf.lang.SID_YEAR,
                unit_month: sf.lang.SID_MONTH,
                unit_day: sf.lang.SID_DAY,
                unit_ampm: sf.lang.SID_AM_PM,
                unit_hour: sf.lang.SID_HOUR,
                unit_hour24: sf.lang.SID_HOUR,
                unit_minute: sf.lang.SID_MINUTE,
            };
            dataTpl.unittexts = {};
            for (var i = 0; i < this.inputElement.length; i++) {
                var unit = "unit_" + this.inputElement[i].toLowerCase().split("_")[1];
                if (!this.options.timePicker && unit != "unit_year" && unit != "unit_month" && unit != "unit_day") {
                    alert("pass " + unit);
                    continue
                }
                dataTpl.unittexts[unit] = unittexts[unit]
            }
            this.widget().empty().append($.tmpl(this.templates.frame, dataTpl));
            this.widget().css({
                left: ($(window).width() - this.widget().find(".bg").width()) / 2 + "px",
                top: ($(window).height() - this.widget().find(".bg").height()) / 2 + "px"
            });
            this.widget().find(".keyhelp").sfKeyHelp({
                iconset: "WHITE",
                updown: sf.lang.SID_CHANGE_KR_CHANGE,
                enter: sf.lang.SID_SELECT,
                "return": sf.lang.SID_RETURN
            });
            this._endLayoutSetting()
        },
        _setOption: function (name, value) {
            switch (name) {
                case"timePicker":
                    this.options.timePicker = value;
                    this.widget().empty();
                    this._createTpl();
                    this._setInputCells();
                    this._updateTimeHtml();
                    break;
                case"date":
                    this.options.date = value;
                    this._setDate(this.options.date);
                    this._updateTimeHtml();
                    break;
                case"format":
                    this.options.format = value;
                    break;
                case"title":
                    this.options.title = value;
                    break;
                case"timeout":
                    this.options.timeout = value;
                    break;
                case"callback":
                    this.options.callback = value;
                    break
            }
        },
        show: function () {
            alert("[sf.Datepicker] show()");
            this._setDate(this.options.date);
            this._updateTimeHtml();
            this.widget().show();
            this._setFocus(0);
            this._popupTimerProcess();
            this.handlerId = null;
            if (sf.scene._isSceneArchUsed()) {
                this.handlerId = sf.scene.pushKeyHandler(function (keyCode) {
                    this.key(keyCode || sf.core.mapAliasedKeys(event.keyCode) || event.keyCode)
                }, {context: this})
            } else {
                this.widget().find("a").focus()
            }
            this.bShown = true;
            var self = this;
            this.widget().find("a").bind("blur", function () {
                alert("onBlur: Popup anchor");
                if (sf.scene._isSceneArchUsed()) {
                    alert("Scene architecture is used. Skip...")
                } else {
                    if (self.bShown) {
                        alert("Scene architecture is not used. Return focus to anchor.");
                        self.widget().find("a").focus()
                    } else {
                        alert("Popup is not shown. Skip...")
                    }
                }
            });
            return this
        },
        hide: function () {
            alert("[sf.Datepicker] hide()");
            this._closePopup(null)
        },
        _setFocus: function (focusIndex) {
            alert("[sf.Datepicker] _setFocus(" + focusIndex + ")");
            this.dataDefault.focusIndex = focusIndex;
            this.widget().find(".inputCell").removeClass("focused").eq(this.dataDefault.focusIndex).addClass("focused")
        },
        _getDateFormat: function (date, pattern) {
            alert("[sf.Datepicker] _getDateFormat(" + date + "," + pattern + ")");
            var matched, dd = this.dataDefault, result = [];
            while (pattern.length > 0) {
                dd.patternParts.lastIndex = 0;
                matched = dd.patternParts.exec(pattern);
                if (matched) {
                    result.push(this.patternValue[matched[0]].call(this, date));
                    pattern = pattern.slice(matched[0].length)
                } else {
                    result.push(pattern.charAt(0));
                    pattern = pattern.slice(1)
                }
            }
            return result.join("")
        },
        _setDate: function (date) {
            alert("[sf.Datepicker] _setDate(): " + date);
            var ted = this.tempDate;
            if (typeof date === "object") {
                ted.year = date.getFullYear();
                ted.month = this._toFixedWidth(parseInt(date.getMonth(), 10) + 1, 2, "0");
                ted.day = this._toFixedWidth(date.getDate(), 2, "0");
                var hour = date.getHours();
                if (hour >= 0 && date.getHours() <= 11) {
                    ted.ampm = sf.lang.SID_AM;
                    hour = (hour == 0) ? 12 : hour;
                    ted.hour = this._toFixedWidth(hour, 2, "0")
                } else {
                    ted.ampm = sf.lang.SID_PM;
                    ted.hour = (hour == 12 ? hour : this._toFixedWidth(hour - 12, 2, "0"))
                }
                ted.minute = this._toFixedWidth(date.getMinutes(), 2, "0");
                this._setHour24()
            }
        },
        _daysInMonth: function (iYear, iMonth) {
            alert("[sf.Datepicker] _daysInMonth");
            var endDay, isLunar;
            isLunar = (((iYear % 4) === 0) || ((iYear % 4) === 0 && ((iYear % 100) !== 0 || (iYear % 400) === 0)));
            endDay = (isLunar) ? this.dayLeapYear[parseInt(iMonth, 10)] : this.dayNormalYear[parseInt(iMonth, 10)];
            return endDay
        },
        _toFixedWidth: function (value, length, fill) {
            alert("[sf.Datepicker] _toFixedWidth()");
            var n;
            if (!fill) {
                fill = "0"
            }
            var result = value.toString();
            var padding = length - result.length;
            if (padding < 0) {
                result = result.substr(-padding)
            } else {
                for (n = 0; n < padding; n++) {
                    result = fill + result
                }
            }
            return result
        },
        _updateTimeHtml: function () {
            alert("[sf.Datepicker] _updateTimeHtml()");
            var inpEle = this.inputElement, td = this.tempDate, dateValue = [];
            for (var i = 0; i < inpEle.length; i++) {
                if (!this.options.timePicker && inpEle[i] != "time_year" && inpEle[i] != "time_month" && inpEle[i] != "time_day") {
                    continue
                }
                alert("td." + inpEle[i].toLowerCase().split("_")[1]);
                this.widget().find(".inputCell").eq(i).find(".center").html(eval("td." + inpEle[i].toLowerCase().split("_")[1]))
            }
            this._setFocus(this.dataDefault.focusIndex)
        },
        _getDateObject: function (date) {
            alert("[sf.Datepicker] _getDateObject(" + date + ")");
            var year = date.year, month = date.month, day = date.day, hour = parseInt(date.hour, 10);
            var dateString = "";
            var dateobj = null;
            if (this.options.timePicker) {
                if (date.ampm === sf.lang.SID_AM) {
                    hour = (hour == 12) ? 0 : hour
                } else {
                    hour = (hour == 12) ? 12 : hour + 12
                }
                dateobj = new Date(year, month - 1, day, hour, date.minute, 0)
            } else {
                dateobj = new Date(year, month - 1, day)
            }
            alert(dateobj);
            return dateobj
        },
        patternValue: {
            yy: function (date) {
                return this._toFixedWidth(date.getFullYear(), 2)
            }, yyyy: function (date) {
                return date.getFullYear().toString()
            }, MMMM: function (date) {
                return this.dataDefault.monthNames[date.getMonth()]
            }, MMM: function (date) {
                return this.dataDefault.monthNamesShort[date.getMonth()]
            }, MM: function (date) {
                return this._toFixedWidth(date.getMonth() + 1, 2)
            }, M: function (date) {
                return date.getMonth() + 1
            }, dd: function (date) {
                return this._toFixedWidth(date.getDate(), 2)
            }, d: function (date) {
                return date.getDate()
            }, EEEE: function (date) {
                return this.dataDefault.dayNames[date.getDay()]
            }, EEE: function (date) {
                return this.dataDefault.dayNamesShort[date.getDay()]
            }, HH: function (date) {
                return this._toFixedWidth(date.getHours(), 2)
            }, H: function (date) {
                return date.getHours()
            }, hh: function (date) {
                var hours = date.getHours();
                if (hours == 0) {
                    hours = 12
                } else {
                    if (hours > 12) {
                        hours = (hours - 12)
                    } else {
                    }
                }
                return this._toFixedWidth(hours > 12 ? hours - 12 : hours, 2)
            }, h: function (date) {
                var hours = date.getHours();
                if (hours == 0) {
                    hours = 12
                } else {
                    if (hours > 12) {
                        hours = (hours - 12)
                    } else {
                    }
                }
                return hours
            }, mm: function (date) {
                return this._toFixedWidth(date.getMinutes(), 2)
            }, m: function (date) {
                return date.getMinutes()
            }, ss: function (date) {
                return this._toFixedWidth(date.getSeconds(), 2)
            }, s: function (date) {
                return date.getSeconds()
            }, S: function (date) {
                return this._toFixedWidth(date.getMilliseconds(), 3)
            }, a: function (date) {
                return (date.getHours() >= 0 && date.getHours() <= 11) ? sf.lang.SID_AM : sf.lang.SID_PM
            }
        },
        _navigate: function (nav) {
            var next, prev;
            if (nav && this.dataDefault.focusIndex < this.nNumElements) {
                this._setFocus(this.dataDefault.focusIndex + 1)
            } else {
                if (!nav && this.dataDefault.focusIndex > 0) {
                    this._setFocus(this.dataDefault.focusIndex - 1)
                }
            }
            this._numInputBuf = 0;
            this._tempDateBuf = 0;
            this._inputZeroNumFlag = false;
            this._firstInputFlag = true
        },
        key: function (key) {
            alert("[sf.Datepicker] key()");
            var EKC = key || sf.core.mapAliasedKeys(event.keyCode) || event.keyCode, fn = this.inputElement[this.dataDefault.focusIndex].replace("_", ""), ted = this.tempDate;
            this._resetCloseTimer();
            switch (EKC) {
                case sf.key.LEFT:
                    var elmt = fn.replace("time", "");
                    if (ted[elmt] == 0 && elmt != "hour24" && elmt != "minute" && elmt != "year") {
                        ted[elmt] = this._tempDateBuf;
                        this._updateTimeHtml()
                    } else {
                        if (elmt == "year" && ted[elmt] <= 1900) {
                            ted[elmt] = this._tempDateBuf;
                            this._updateTimeHtml()
                        }
                    }
                    this._navigate(false);
                    break;
                case sf.key.RIGHT:
                    var elmt = fn.replace("time", "");
                    if (ted[elmt] == 0 && elmt != "hour24" && elmt != "minute" && elmt != "year") {
                        ted[elmt] = this._tempDateBuf;
                        this._updateTimeHtml()
                    } else {
                        if (elmt == "year" && ted[elmt] <= 1900) {
                            ted[elmt] = this._tempDateBuf;
                            this._updateTimeHtml()
                        }
                    }
                    this._navigate(true);
                    break;
                case sf.key.UP:
                    this._setInput[fn].call(this, true);
                    if (fn == "timeyear" || fn == "timemonth") {
                        var days = this._daysInMonth(this.tempDate.year, this.tempDate.month);
                        if (this.tempDate.day > days) {
                            this.tempDate.day = days
                        }
                    }
                    this._updateTimeHtml();
                    break;
                case sf.key.DOWN:
                    this._setInput[fn].call(this, false);
                    if (fn == "timeyear" || fn == "timemonth") {
                        var days = this._daysInMonth(this.tempDate.year, this.tempDate.month);
                        if (this.tempDate.day > days) {
                            this.tempDate.day = days
                        }
                    }
                    this._updateTimeHtml();
                    break;
                case sf.key.ENTER:
                    var elmt = fn.replace("time", "");
                    if (ted[elmt] == 0 && elmt != "hour24" && elmt != "minute" && elmt != "year") {
                        this._setInput[fn].call(this, true);
                        this._updateTimeHtml()
                    } else {
                        if (elmt == "year" && ted[elmt] <= 1900) {
                            ted[elmt] = 1900;
                            this._updateTimeHtml()
                        }
                    }
                    this.options.date = this._getDateObject(this.tempDate);
                    $.data(this.widget(), "date", this.options.date);
                    alert(this.options.date);
                    this._closePopup(this._getDateFormat(this.options.date, this.options.format), this.options.date);
                    break;
                case sf.key.RETURN:
                case sf.key.EXIT:
                    sf.key.preventDefault();
                    this._closePopup(null);
                    break;
                case sf.key.N0:
                case sf.key.N1:
                case sf.key.N2:
                case sf.key.N3:
                case sf.key.N4:
                case sf.key.N5:
                case sf.key.N6:
                case sf.key.N7:
                case sf.key.N8:
                case sf.key.N9:
                    var num = -1;
                    for (var i = 0; i < 10; i++) {
                        if (eval("sf.key.N" + i) == EKC) {
                            num = i;
                            break
                        }
                    }
                    if (num >= 0) {
                        this._inputNumber(num)
                    }
                    break
            }
        },
        _numInputBuf: 0,
        _tempDateBuf: 0,
        _inputZeroNumFlag: false,
        _firstInputFlag: true,
        _inputNumber: function (num) {
            alert("[sf.Datepicker] _inputNumber(" + num + ")");
            var fn = this.inputElement[this.dataDefault.focusIndex].replace("_", ""), posNum = /[0-9]{2}/, ted = this.tempDate;
            alert("Focused Element : " + fn);
            this._numInputBuf = parseInt(this._numInputBuf * 10 + num, 10);
            var elmt = fn.replace("time", "");
            if (elmt == "year") {
                if (!posNum.test(this._numInputBuf) && ted[elmt] != "0000" && ted[elmt] >= "1900") {
                    this._tempDateBuf = ted[elmt];
                    this._inputZeroNumFlag = false
                } else {
                    if (!posNum.test(this._numInputBuf) && ted[elmt] == "0000") {
                        this._inputZeroNumFlag = true
                    }
                }
            } else {
                if (elmt == "hour24" || elmt == "minute") {
                    if (!posNum.test(this._numInputBuf)) {
                        this._tempDateBuf = ted[elmt];
                        if (ted[elmt] == "00" && this._firstInputFlag == false) {
                            this._inputZeroNumFlag = true
                        } else {
                            this._inputZeroNumFlag = false
                        }
                    }
                } else {
                    if (!posNum.test(this._numInputBuf) && ted[elmt] != "00") {
                        this._tempDateBuf = ted[elmt];
                        this._inputZeroNumFlag = false
                    } else {
                        if (!posNum.test(this._numInputBuf) && ted[elmt] == "00") {
                            this._inputZeroNumFlag = true
                        }
                    }
                }
            }
            alert("Current value : " + this._numInputBuf);
            this._firstInputFlag = false;
            this._setInputNum[fn].call(this, this._numInputBuf);
            if (fn == "timeyear" || fn == "timemonth") {
                var days = this._daysInMonth(this.tempDate.year, this.tempDate.month);
                if (this.tempDate.day > days) {
                    this.tempDate.day = days
                }
            }
            this._updateTimeHtml();
            this._checkPosNum(fn, this._numInputBuf)
        },
        _checkPosNum: function (Index, num) {
            switch (Index) {
                case"timeyear":
                    var posNum = /[0-9]{4}/;
                    if (posNum.test(num)) {
                        this._numInputBuf = 0
                    }
                    break;
                case"timemonth":
                case"timeday":
                case"timehour":
                case"timehour24":
                case"timeminute":
                    var posNum = /[0-9]{2}/;
                    if (posNum.test(num)) {
                        this._numInputBuf = 0;
                        this._firstInputFlag = true
                    }
                    break
            }
        },
        _popupTimerProcess: function () {
            alert("[sf.Datepicker] _popupTimerProcess()");
            this._resetCloseTimer()
        },
        _resetCloseTimer: function () {
            alert("[sf.Datepicker] _resetCloseTimer()");
            var self = this;
            if (this.hideTimer) {
                clearTimeout(this.hideTimer);
                this.hideTimer = null
            }
            this.hideTimer = setTimeout(function () {
                alert("Datepicker timeout");
                self._closePopup(null)
            }, this.options.timeout * 1000)
        },
        _closePopup: function (result, date) {
            alert("[sf.Datepicker] _closePopup(" + result + ", " + date + ")");
            this.widget().hide();
            this.bShown = false;
            if (this.hideTimer) {
                clearTimeout(this.hideTimer);
                this.hideTimer = null
            }
            if (this.handlerId) {
                sf.scene.removeKeyHandler(this.handlerId);
                this.handlerId = null
            }
            if (this.options.callback && this.options.callback instanceof Function) {
                try {
                    this.options.callback(result || null, date || null)
                } catch (e) {
                    alert("EXCEPTION(Datepicker callback) : " + e)
                }
            }
        },
        _setHour24: function () {
            var ted = this.tempDate;
            ted.hour24 = parseInt(ted.hour, 10);
            if (ted.ampm == sf.lang.SID_AM && ted.hour24 == 12) {
                ted.hour24 = 0
            } else {
                if (ted.ampm == sf.lang.SID_PM && ted.hour24 != 12) {
                    ted.hour24 += 12
                }
            }
            ted.hour24 = this._toFixedWidth(ted.hour24, 2, "0")
        },
        _setInput: {
            timeyear: function (action) {
                var ted = this.tempDate;
                if (action) {
                    if (ted.year < 2900) {
                        ted.year++
                    }
                } else {
                    if (ted.year > 1900) {
                        ted.year--
                    }
                }
            }, timemonth: function (action) {
                var ted = this.tempDate;
                if (action) {
                    if (ted.month < 12) {
                        ted.month++;
                        ted.month = this._toFixedWidth(ted.month, 2, "0")
                    } else {
                        ted.month = this._toFixedWidth(1, 2, "0")
                    }
                } else {
                    if (ted.month > 1) {
                        ted.month--;
                        ted.month = this._toFixedWidth(ted.month, 2, "0")
                    } else {
                        ted.month = 12
                    }
                }
            }, timeday: function (action) {
                var ted = this.tempDate;
                if (action) {
                    var endDay = this._daysInMonth(ted.year, ted.month);
                    if (parseInt(this.tempDate.day, 10) < endDay) {
                        ted.day++;
                        ted.day = this._toFixedWidth(ted.day, 2, "0")
                    } else {
                        ted.day = this._toFixedWidth(1, 2, "0")
                    }
                } else {
                    if (parseInt(ted.day, 10) > 1) {
                        ted.day--;
                        ted.day = this._toFixedWidth(ted.day, 2, "0")
                    } else {
                        ted.day = this._daysInMonth(ted.year, ted.month)
                    }
                }
            }, timehour: function (action) {
                var ted = this.tempDate;
                if (action) {
                    if (ted.hour < 12) {
                        ted.hour++;
                        ted.hour = this._toFixedWidth(ted.hour, 2, "0")
                    } else {
                        ted.hour = this._toFixedWidth(1, 2, "0")
                    }
                } else {
                    if (ted.hour > 1) {
                        ted.hour--;
                        ted.hour = this._toFixedWidth(ted.hour, 2, "0")
                    } else {
                        ted.hour = 12
                    }
                }
            }, timehour24: function (action) {
                var ted = this.tempDate;
                if (action) {
                    if (ted.hour < 12) {
                        ted.hour++;
                        if (ted.hour == 12) {
                            ted.ampm = (ted.ampm == sf.lang.SID_AM) ? sf.lang.SID_PM : sf.lang.SID_AM
                        }
                    } else {
                        ted.hour = 1
                    }
                } else {
                    if (ted.hour < 12) {
                        ted.hour--;
                        if (ted.hour == 0) {
                            ted.hour = 12
                        }
                    } else {
                        ted.hour = 11;
                        ted.ampm = (ted.ampm == sf.lang.SID_AM) ? sf.lang.SID_PM : sf.lang.SID_AM
                    }
                }
                ted.hour = this._toFixedWidth(ted.hour, 2, "0");
                this._setHour24()
            }, timeampm: function () {
                this.tempDate.ampm = (this.tempDate.ampm === sf.lang.SID_AM) ? sf.lang.SID_PM : sf.lang.SID_AM
            }, timeminute: function (action) {
                var ted = this.tempDate;
                if (action) {
                    if (ted.minute < 59) {
                        ted.minute++;
                        ted.minute = this._toFixedWidth(ted.minute, 2, "0")
                    } else {
                        ted.minute = this._toFixedWidth(0, 2, "0")
                    }
                } else {
                    if (ted.minute > 0) {
                        ted.minute--;
                        ted.minute = this._toFixedWidth(ted.minute, 2, "0")
                    } else {
                        ted.minute = 59
                    }
                }
            }
        },
        _setInputNum: {
            timeyear: function (num) {
                var posNum = /[0-9]{4}/;
                var ted = this.tempDate;
                if (!posNum.test(num)) {
                    if (this._inputZeroNumFlag) {
                        if (num == 0) {
                            ted.year = this._tempDateBuf;
                            this._numInputBuf = 0
                        } else {
                            ted.year = this._toFixedWidth(num, 4, "0")
                        }
                    } else {
                        ted.year = this._toFixedWidth(num, 4, "0")
                    }
                } else {
                    if (num < 1900) {
                        ted.year = this._tempDateBuf
                    } else {
                        if (num > 2900) {
                            ted.year = this._tempDateBuf
                        } else {
                            ted.year = this._toFixedWidth(num, 4, "0");
                            this._navigate(true)
                        }
                    }
                }
            }, timemonth: function (num) {
                var posNum = /[0-9]{2}/;
                var ted = this.tempDate;
                if (!posNum.test(num)) {
                    if (this._inputZeroNumFlag) {
                        if (num == 0) {
                            ted.month = this._tempDateBuf;
                            this._numInputBuf = 0
                        } else {
                            ted.month = this._toFixedWidth(num, 2, "0");
                            this._navigate(true)
                        }
                    } else {
                        ted.month = this._toFixedWidth(num, 2, "0")
                    }
                } else {
                    if (num > 0 && num <= 12) {
                        ted.month = this._toFixedWidth(num, 2, "0");
                        this._navigate(true)
                    } else {
                        if (num > 12) {
                            ted.month = this._tempDateBuf
                        }
                    }
                }
            }, timeday: function (num) {
                var posNum = /[0-9]{2}/;
                var ted = this.tempDate;
                var endDay = this._daysInMonth(ted.year, ted.month);
                if (!posNum.test(num)) {
                    if (this._inputZeroNumFlag) {
                        if (num == 0) {
                            ted.day = this._tempDateBuf;
                            this._numInputBuf = 0
                        } else {
                            ted.day = this._toFixedWidth(num, 2, "0");
                            this._navigate(true)
                        }
                    } else {
                        ted.day = this._toFixedWidth(num, 2, "0")
                    }
                } else {
                    if (num > 0 && num <= endDay) {
                        ted.day = this._toFixedWidth(num, 2, "0");
                        this._navigate(true)
                    } else {
                        if (num > endDay) {
                            ted.day = this._tempDateBuf
                        }
                    }
                }
            }, timehour: function (num) {
                var posNum = /[0-9]{2}/;
                var ted = this.tempDate;
                if (!posNum.test(num)) {
                    if (this._inputZeroNumFlag) {
                        if (num == 0) {
                            ted.hour = this._tempDateBuf;
                            this._numInputBuf = 0
                        } else {
                            ted.hour = this._toFixedWidth(num, 2, "0");
                            this._navigate(true)
                        }
                    } else {
                        ted.hour = this._toFixedWidth(num, 2, "0")
                    }
                } else {
                    if (num > 0 && num <= 12) {
                        ted.hour = this._toFixedWidth(num, 2, "0");
                        this._navigate(true)
                    } else {
                        if (num > 12) {
                            ted.hour = this._tempDateBuf
                        }
                    }
                }
            }, timehour24: function (num) {
                var posNum = /[0-9]{2}/;
                var ted = this.tempDate;
                if (!posNum.test(num)) {
                    if (this._inputZeroNumFlag) {
                        ted.hour24 = this._toFixedWidth(num, 2, "0");
                        this._numInputBuf = 0;
                        this._navigate(true)
                    } else {
                        ted.hour24 = this._toFixedWidth(num, 2, "0")
                    }
                } else {
                    if (num >= 0 && num <= 23) {
                        ted.hour24 = this._toFixedWidth(num, 2, "0");
                        this._navigate(true)
                    } else {
                        if (num > 23) {
                            ted.hour24 = this._tempDateBuf
                        }
                    }
                }
                if (ted.hour24 <= 11) {
                    if (ted.hour24 == 0) {
                        ted.hour = 12
                    } else {
                        ted.hour = ted.hour24
                    }
                    ted.ampm = sf.lang.SID_AM
                } else {
                    if (ted.hour24 >= 12) {
                        ted.hour = ted.hour24 - 12
                    } else {
                        ted.hour = ted.hour24
                    }
                    ted.ampm = sf.lang.SID_PM
                }
            }, timeampm: null, timeminute: function (num) {
                var posNum = /[0-9]{2}/;
                var ted = this.tempDate;
                if (!posNum.test(num)) {
                    if (this._inputZeroNumFlag) {
                        ted.minute = this._toFixedWidth(num, 2, "0");
                        this._numInputBuf = 0;
                        this._navigate(true)
                    } else {
                        ted.minute = this._toFixedWidth(num, 2, "0")
                    }
                } else {
                    if (num >= 0 && num <= 59) {
                        ted.minute = this._toFixedWidth(num, 2, "0");
                        this._navigate(true)
                    } else {
                        if (num > 59) {
                            ted.minute = this._tempDateBuf
                        }
                    }
                }
            }
        }
    });
    function DateFormat2PickerFormat(str) {
        var map = {
            d: "dd",
            D: "EEE",
            j: "d",
            l: "EEEE",
            F: "MMMM",
            m: "MM",
            M: "MMM",
            n: "M",
            Y: "yyyy",
            y: "yy",
            a: "a",
            A: "a",
            g: "h",
            G: "H",
            h: "hh",
            H: "HH",
            i: "mm"
        };
        str = str.replace(/(d|D|j|l|F|m|M|n|Y|y|a|A|g|G|h|H|i)/gi, function ($1) {
            return map[$1] || $1
        });
        alert(str);
        return str
    }

    sf.ui.Datepicker.getLocaleDateFormat = function () {
        var tmp = Date.getLocaleFormatStr().split(" ")[0];
        return DateFormat2PickerFormat(tmp)
    };
    sf.ui.Datepicker.getLocaleTimeFormat = function () {
        return DateFormat2PickerFormat(Date.getLocaleFormatStr())
    };
    sf.ui.bridge(widgetName, sf.ui.Datepicker);
    sf.ui.addSelector(widgetName)
}(jQuery));
(function (c) {
    var g = "sfMaps";
    var l = sf.core.getEnvValue("country").toUpperCase();
    var e = true;

    function h(n) {
        if (e) {
            alert("[AF ui.maps] " + n)
        }
    }

    function m(n) {
        alert("[AF ui.maps] " + n)
    }

    var k = "/ui.maps";
    var d = {url: k + "/sfmaps_marker.png", anchorpos: [11, 31]};
    var j = {};
    j.google = {
        checkAvailFunc: function () {
            return window.google && window.google.maps
        }, cls: function (n, x) {
            h("[sfMapsGoogle(" + n + ")]create");
            var o = {
                roadmap: google.maps.MapTypeId.ROADMAP,
                hybrid: google.maps.MapTypeId.HYBRID,
                satellite: google.maps.MapTypeId.SATELLITE,
                terrain: google.maps.MapTypeId.TERRAIN
            };
            var q = {};
            for (var s in o) {
                q[o[s]] = s + ""
            }
            h("Country : " + l + a[l]);
            var p = l && a[l] ? a[l] : a["default"];
            this.elmtID = n;
            this.bMoving = false;
            this.size = {width: parseInt(c("#" + n).width(), 10), height: parseInt(c("#" + n).height(), 10)};
            var r = {
                center: [p[0], p[1]],
                zoom: f(this.size.width, this.size.height, p[2]),
                maptype: "roadmap",
                disableDefaultUI: true
            };
            x = c.extend(r, x);
            var u = document.getElementById(this.elmtID);
            this.objMap = new google.maps.Map(u, {
                center: new google.maps.LatLng(x.center[0], x.center[1]),
                zoom: x.zoom,
                mapTypeId: o[x.maptype],
                disableDefaultUI: true
            });
            var w = this;
            google.maps.event.addListener(this.objMap, "idle", function () {
                h("[sfMapsGoogle(" + this.elmtID + ")] EVENT: idle");
                w.bMoving = false
            });
            this.moveTo = function (y) {
                h("[sfMapsGoogle(" + this.elmtID + ")]moveTo");
                if (!y || !y.center) {
                    return
                }
                if (this.bMoving) {
                    h("\tmap is already moving...");
                    return
                }
                this.objMap.panTo(new google.maps.LatLng(y.center[0], y.center[1]));
                this.bMoving = true;
                var z = this
            };
            this.moveBy = function (y) {
                h("[sfMapsGoogle(" + this.elmtID + ")]moveBy");
                if (!y || y.x == undefined || y.y == undefined) {
                    return
                }
                if (this.bMoving) {
                    return
                }
                this.objMap.panBy(y.x, y.y);
                this.bMoving = true
            };
            this.zoomIn = function (y) {
                h("[sfMapsGoogle(" + this.elmtID + ")]zoomIn");
                this.bMoving = true;
                this.objMap.setZoom(this.objMap.getZoom() + 1)
            };
            this.zoomOut = function (y) {
                h("[sfMapsGoogle(" + this.elmtID + ")]zoomOut");
                this.bMoving = true;
                this.objMap.setZoom(this.objMap.getZoom() - 1)
            };
            this.setMapType = function (y) {
                h("[sfMapsGoogle(" + this.elmtID + ")]setMapType");
                if (y.type == undefined) {
                    h("\ttype option is not defined...");
                    return
                }
                if (!o[y.type]) {
                    h("\tthere is no such a type : " + y.type);
                    return
                }
                return this.objMap.setMapTypeId(o[y.type])
            };
            this.getMapType = function (y) {
                h("[sfMapsGoogle(" + this.elmtID + ")]getMapType");
                return q[this.objMap.getMapTypeId()]
            };
            this.setCenter = function (y) {
                h("[sfMapsGoogle(" + this.elmtID + ")]setCenter");
                if (!y.center && !y.center instanceof Array && y.center.length != 2) {
                    return false
                }
                h("\tCenter: " + y.center[0] + ", " + y.center[1]);
                return this.objMap.setCenter(new google.maps.LatLng(y.center[0], y.center[1]))
            };
            this.getCenter = function (z) {
                h("[sfMapsGoogle(" + this.elmtID + ")]getCenter");
                if (!this.objMap) {
                    return null
                }
                var y = this.objMap.getCenter();
                h("\tCenter : " + y.toString());
                return new Array(y.lat(), y.lng())
            };
            this.setZoom = function (y) {
                h("[sfMapsGoogle(" + this.elmtID + ")]setZoom");
                return this.objMap.setZoom(y.zoom)
            };
            this.getZoom = function () {
                var y = this.objMap.getZoom();
                h("[sfMapsGoogle(" + this.elmtID + ")]getZoom returns " + y);
                return y
            };
            this.addMarker = function (y) {
                h("[sfMapsGoogle(" + this.elmtID + ")]addMarker");
                if (!y.image) {
                    y.image = c.extend(d, {})
                }
                if (!y.location || !y.location instanceof Array || y.location.length != 2) {
                    h("\tlocation is not defined");
                    return false
                }
                h("\tlocation: " + y.location[0] + ", " + y.location[1]);
                return new t({
                    location: new google.maps.LatLng(y.location[0], y.location[1]),
                    map: this.objMap,
                    image: y.image
                })
            };
            this.addInfoWindow = function (y) {
                h("[sfMapsGoogle(" + this.elmtID + ")]addInfoWindow");
                if (!y.location || !y.location instanceof Array || y.location.length != 2) {
                    h("\tlocation is not defined");
                    return false
                }
                h("\tlocation: " + y.location[0] + ", " + y.location[1]);
                return new v({
                    location: new google.maps.LatLng(y.location[0], y.location[1]),
                    map: this.objMap,
                    content: y.content || "",
                    fixedwidth: y.fixedwidth || 300,
                })
            };
            function t(y) {
                this.location = y.location;
                this.image = y.image;
                if (this.image && !this.image.anchorpos) {
                    this.image.anchorpos = [0, 0]
                }
                this.map = y.map;
                this.div = null;
                this.setMap(this.map)
            }

            t.prototype = new google.maps.OverlayView();
            t.prototype.onAdd = function () {
                var A = document.createElement("DIV");
                A.style.border = "none";
                A.style.borderWidth = "0px";
                A.style.position = "absolute";
                var y = document.createElement("img");
                y.src = this.image.url;
                A.appendChild(y);
                this.div = A;
                var z = this.getPanes();
                z.overlayLayer.appendChild(A)
            };
            t.prototype.draw = function () {
                var y = this.getProjection();
                h("\tsfMapsGMarker-pos : " + this.location.lat() + ", " + this.location.lng());
                var A = y.fromLatLngToDivPixel(this.location);
                h("\tsfMapsGMarker-projected pos : " + A.x + ", " + A.y);
                var z = this.div;
                z.style.left = (A.x - this.image.anchorpos[0]) + "px";
                z.style.top = (A.y - this.image.anchorpos[1]) + "px"
            };
            t.prototype.onRemove = function () {
                this.div.parentNode.removeChild(this.div);
                this.div = null
            };
            t.prototype.remove = function () {
                this.setMap(null)
            };
            function v(y) {
                this.location = y.location;
                this.map = y.map;
                this.content = y.content || "";
                this.div = null;
                this.setMap(this.map);
                this.id = "sf-ui-maps-infowin-" + (new Date()).getTime()
            }

            v.prototype = new google.maps.OverlayView();
            v.prototype.onAdd = function () {
                var B = document.createElement("DIV");
                B.style.border = "none";
                B.style.borderWidth = "0px";
                B.style.position = "absolute";
                B.id = this.id;
                var y = "";
                y += '<table border="0px" cellpadding="0px" cellspacing="0px" width="230px">';
                y += '<tr height="44px">';
                y += '<td width="44px"><div style="width:44px;height:44px;background: url(' + k + '/tooltip_top_left.png) no-repeat;"></div></td>';
                y += '<td background="' + k + '/tooltip_top_center.png" width="300px"></td>';
                y += '<td width="44px"><div style="width:44px;height:44px;background: url(' + k + '/tooltip_top_right.png) no-repeat;"></div></td>';
                y += "</tr>";
                y += '<tr height="20px">';
                y += '<td background="' + k + '/tooltip_middle_left.png" width="15px"> </td>';
                y += '<td background="' + k + '/tooltip_middle_center.png" width="200px"><div class="sf-ui-maps-infowin-content">' + this.content + "</div></td>";
                y += '<td background="' + k + '/tooltip_middle_right.png" width="15px"> </td>';
                y += "</tr>";
                y += '<tr height="44px">';
                y += '<td width="44px"><div style="width:44px;height:44px;background: url(' + k + '/tooltip_bottom_left.png) no-repeat;"></div></td>';
                y += '<td background="' + k + '/tooltip_bottom_center.png" width="300px" align="center"><div id="sf-ui-maps-infowin-arrow" style="width:44px;height:44px;background: url(' + k + '/tooltip_bottom_arrow.png) no-repeat;"></div></td>';
                y += '<td width="44px"><div style="width:44px;height:44px;background: url(' + k + '/tooltip_bottom_right.png) no-repeat;"></div></td>';
                y += "</tr>";
                y += "</table>";
                B.innerHTML = y;
                this.div = B;
                var z = this.getPanes();
                z.overlayLayer.appendChild(B);
                var A = B.getElementsByClassName("sf-ui-maps-infowin-content")[0];
                this.offsetx = c("#" + this.id).width() / 2;
                this.offsety = c("#" + this.id).height() - 12;
                h("\tOffset : " + this.offsetx + ", " + this.offsety)
            };
            v.prototype.draw = function () {
                var y = this.getProjection();
                h("\tsfMapsGMarker-pos : " + this.location.lat() + ", " + this.location.lng());
                var A = y.fromLatLngToDivPixel(this.location);
                h("\tsfMapsGMarker-projected pos : " + A.x + ", " + A.y);
                var z = this.div;
                z.style.left = (A.x - this.offsetx) + "px";
                z.style.top = (A.y - this.offsety) + "px"
            };
            v.prototype.onRemove = function () {
                this.div.parentNode.removeChild(this.div);
                this.div = null
            };
            v.prototype.remove = function () {
                this.setMap(null)
            };
            this.search = function (z) {
                h("[sfMapsGoogle(" + this.elmtID + ")]search");
                var A = new google.maps.Geocoder();
                if ((!z.address && !z.location) || !z.callback) {
                    h("\t(address and location) or callback is not defined");
                    return false
                }
                var y = {};
                if (z.address) {
                    y.address = z.address
                } else {
                    if (z.location) {
                        y.latLng = new google.maps.LatLng(z.location[0], z.location[1])
                    }
                }
                A.geocode(y, function (C, B) {
                    if (B == google.maps.GeocoderStatus.OK) {
                        z.callback({
                            location: [C[0].geometry.location.lat(), C[0].geometry.location.lng()],
                            address: C[0].formatted_address
                        })
                    } else {
                        z.callback(null)
                    }
                })
            }
        }
    };
    j.daum = {
        checkAvailFunc: function () {
            return window.daum && window.daum.maps
        }, cls: function (p, x) {
            h("[sfMapsDaum(" + p + ")]create");
            this.elmtID = p;
            this.objMap = null;
            this.objRoadView = null;
            this.bMoving = false;
            var o = {
                roadmap: daum.maps.MapTypeId.ROADMAP,
                skyview: daum.maps.MapTypeId.SKYVIEW,
                hybrid: daum.maps.MapTypeId.HYBRID
            };
            var t = {};
            for (var v in o) {
                t[o[v]] = v + ""
            }
            this.size = {width: parseInt(c("#" + p).width(), 10), height: parseInt(c("#" + p).height(), 10)};
            function s(y) {
                return 11 - y
            }

            function r(y) {
                return y - 11
            }

            var u = {center: [37.258848, 127.054205], zoom: 0, maptype: "roadmap"};
            x = c.extend(u, x);
            var w = document.getElementById(this.elmtID);
            this.objMap = new daum.maps.Map(w, {
                center: new daum.maps.LatLng(x.center[0], x.center[1]),
                level: s(x.zoom),
                mapTypeId: o[x.maptype]
            });
            this.moveTo = function (y) {
                h("[sfMapsDaum(" + this.elmtID + ")]moveTo");
                if (!y || !y.center) {
                    return false
                }
                if (this.bMoving) {
                    return false
                }
                this.objMap.panTo(new daum.maps.LatLng(y.center[0], y.center[1]));
                this.bMoving = true;
                var z = this;
                setTimeout(function () {
                    z.bMoving = false
                }, 500)
            };
            this.moveBy = function (H) {
                h("[sfMapsDaum(" + this.elmtID + ")]moveBy");
                if (this.bMoving) {
                    return false
                }
                if (!H || H.x == undefined || H.y == undefined) {
                    return false
                }
                h("\tMove : " + H.x + ", " + H.y);
                var G = this.size;
                var C = this.objMap.getBounds();
                h("\tbound : " + C);
                var D = C.getSouthWest();
                var B = C.getNorthEast();
                var z = (B.getLat() - D.getLat()) / G.height;
                h("\tlatPerPixel : " + z);
                var E = (B.getLng() - D.getLng()) / G.width;
                h("\tlngPerPixel : " + E);
                var y = this.objMap.getCenter();
                h("\tcenter : " + y);
                var A = new daum.maps.LatLng(y.getLat() + (-H.y) * z, y.getLng() + H.x * E);
                h("\tnewCenter : " + A);
                this.objMap.panTo(A);
                this.bMoving = true;
                var F = this;
                setTimeout(function () {
                    F.bMoving = false
                }, 500)
            };
            this.zoomIn = function (y) {
                h("[sfMapsDaum(" + this.elmtID + ")]zoomIn");
                this.objMap.setLevel(this.objMap.getLevel() - 1)
            };
            this.zoomOut = function (y) {
                h("[sfMapsDaum(" + this.elmtID + ")]zoomOut");
                this.objMap.setLevel(this.objMap.getLevel() + 1)
            };
            this.setMapType = function (y) {
                h("[sfMapsDaum(" + this.elmtID + ")]setMapType");
                if (y.type == undefined) {
                    h("\ttype option is not defined...");
                    return
                }
                if (!o[y.type]) {
                    h("\tNo Such a maptype : " + y.type);
                    return
                }
                return this.objMap.setMapTypeId(o[y.type])
            };
            this.getMapType = function (y) {
                h("[sfMapsDaum(" + this.elmtID + ")]getMapType");
                return t[this.objMap.getMapTypeId()]
            };
            this.setZoom = function (y) {
                h("[sfMapsDaum(" + this.elmtID + ")]setZoom");
                if (!y.zoom) {
                    return false
                }
                return this.objMap.setLevel(s(y.zoom))
            };
            this.getZoom = function (y) {
                var z = r(this.objMap.getLevel());
                h("[sfMapsDaum(" + this.elmtID + ")]getZoom returns " + z);
                return z
            };
            this.setCenter = function (y) {
                h("[sfMapsDaum(" + this.elmtID + ")]setCenter");
                if (!y.center && !y.center instanceof Array && y.center.length != 2) {
                    return false
                }
                return this.objMap.setCenter(new daum.maps.LatLng(y.center[0], y.center[1]))
            };
            this.getCenter = function (y) {
                var z = this.objMap.getCenter();
                h("[sfMapsDaum(" + this.elmtID + ")]getCenter returns " + z.getLat() + ", " + z.getLng());
                return new Array(z.getLat(), z.getLng())
            };
            this.addMarker = function (z) {
                h("[sfMapsDaum(" + this.elmtID + ")]addMarker");
                if (!z.image) {
                    z.image = c.extend(d, {})
                }
                if (!z.location || !z.location instanceof Array || z.location.length != 2) {
                    h("\tlocation is not defined");
                    return false
                }
                h("\tlocation: " + z.location[0] + ", " + z.location[1]);
                var y = new n({
                    location: new daum.maps.LatLng(z.location[0], z.location[1]),
                    map: this.objMap,
                    image: z.image
                });
                return y
            };
            this.addInfoWindow = function (y) {
                h("[sfMapsDaum(" + this.elmtID + ")]addInfoWindow");
                if (!y.location || !y.location instanceof Array || y.location.length != 2) {
                    h("\tlocation is not defined");
                    return false
                }
                h("\tlocation: " + y.location[0] + ", " + y.location[1]);
                return new q({
                    location: new daum.maps.LatLng(y.location[0], y.location[1]),
                    map: this.objMap,
                    content: y.content || "",
                    fixedwidth: y.fixedwidth || 300,
                })
            };
            function n(y) {
                this.location = y.location;
                this.image = y.image;
                if (this.image && !this.image.anchorpos) {
                    this.image.anchorpos = [0, 0]
                }
                this.map = y.map;
                this.div = null;
                this.setMap(this.map)
            }

            n.prototype = new daum.maps.AbstractOverlay();
            n.prototype.onAdd = function () {
                var A = document.createElement("DIV");
                A.style.border = "none";
                A.style.borderWidth = "0px";
                A.style.position = "absolute";
                var y = document.createElement("img");
                y.src = this.image.url;
                A.appendChild(y);
                this.div = A;
                var z = this.getPanels();
                z.overlayLayer.appendChild(A)
            };
            n.prototype.draw = function () {
                var y = this.getProjection();
                h("\tsfMapsDMarker-pos : " + this.location.getLat() + ", " + this.location.getLng());
                var A = y.pointFromCoords(this.location);
                h("\tsfMapsDMarker-projected pos : " + A.x + ", " + A.y);
                var z = this.div;
                z.style.left = (A.x - this.image.anchorpos[0]) + "px";
                z.style.top = (A.y - this.image.anchorpos[1]) + "px"
            };
            n.prototype.onRemove = function () {
                this.div.parentNode.removeChild(this.div);
                this.div = null
            };
            n.prototype.remove = function () {
                this.setMap(null)
            };
            function q(y) {
                this.location = y.location;
                this.map = y.map;
                this.content = y.content || "";
                this.div = null;
                this.setMap(this.map);
                this.id = "sf-ui-maps-infowin-" + (new Date()).getTime()
            }

            q.prototype = new daum.maps.AbstractOverlay();
            q.prototype.onAdd = function () {
                var B = document.createElement("DIV");
                B.style.border = "none";
                B.style.borderWidth = "0px";
                B.style.position = "absolute";
                B.id = this.id;
                var y = "";
                y += '<table border="0px" cellpadding="0px" cellspacing="0px" width="230px">';
                y += '<tr height="44px">';
                y += '<td width="44px"><div style="width:44px;height:44px;background: url(' + k + '/tooltip_top_left.png) no-repeat;"></div></td>';
                y += '<td background="' + k + '/tooltip_top_center.png" width="300px"></td>';
                y += '<td width="44px"><div style="width:44px;height:44px;background: url(' + k + '/tooltip_top_right.png) no-repeat;"></div></td>';
                y += "</tr>";
                y += '<tr height="20px">';
                y += '<td background="' + k + '/tooltip_middle_left.png" width="15px"> </td>';
                y += '<td background="' + k + '/tooltip_middle_center.png" width="200px"><div class="sf-ui-maps-infowin-content">' + this.content + "</div></td>";
                y += '<td background="' + k + '/tooltip_middle_right.png" width="15px"> </td>';
                y += "</tr>";
                y += '<tr height="44px">';
                y += '<td width="44px"><div style="width:44px;height:44px;background: url(' + k + '/tooltip_bottom_left.png) no-repeat;"></div></td>';
                y += '<td background="' + k + '/tooltip_bottom_center.png" width="300px" align="center"><div id="sf-ui-maps-infowin-arrow" style="width:44px;height:44px;background: url(' + k + '/tooltip_bottom_arrow.png) no-repeat;"></div></td>';
                y += '<td width="44px"><div style="width:44px;height:44px;background: url(' + k + '/tooltip_bottom_right.png) no-repeat;"></div></td>';
                y += "</tr>";
                y += "</table>";
                B.innerHTML = y;
                this.div = B;
                var z = this.getPanels();
                z.overlayLayer.appendChild(B);
                var A = B.getElementsByClassName("sf-ui-maps-infowin-content")[0];
                this.offsetx = c("#" + this.id).width() / 2;
                this.offsety = c("#" + this.id).height() - 12;
                h("\tOffset : " + this.offsetx + ", " + this.offsety)
            };
            q.prototype.draw = function () {
                var y = this.getProjection();
                h("\tsfMapsDMarker-pos : " + this.location.getLat() + ", " + this.location.getLng());
                var A = y.pointFromCoords(this.location);
                h("\tsfMapsDMarker-projected pos : " + A.x + ", " + A.y);
                h("\tOffset : " + this.offsetx + ", " + this.offsety);
                var z = this.div;
                z.style.left = (A.x - this.offsetx) + "px";
                z.style.top = (A.y - this.offsety) + "px"
            };
            q.prototype.onRemove = function () {
                this.div.parentNode.removeChild(this.div);
                this.div = null
            };
            q.prototype.remove = function () {
                this.setMap(null)
            };
            this.search = function (y) {
                h("[sfMapsDaum(" + this.elmtID + ")]search is not supported in daum map API");
                if (y.callback) {
                    setTimeout(function () {
                        y.callback(null)
                    }, 0)
                }
            }
        }
    };
    var a = {
        "default": [16.29905, 149.41406, 2],
        AD: [42.53486, 1.60057, 11],
        AE: [23.90592, 53.86596, 7],
        AL: [41.15333, 20.16833, 7],
        AM: [40.06909, 45.03818, 7],
        AR: [-38.41609, -63.61667, 4],
        AT: [47.51623, 14.55007, 7],
        AU: [-25.27439, 133.77513, 4],
        AZ: [40.1431, 47.57692, 7],
        BA: [43.91588, 17.67907, 7],
        BB: [13.19388, -59.54319, 11],
        BE: [50.50388, 4.46993, 7],
        BG: [42.73388, 25.48583, 7],
        BH: [26.04691, 50.56045, 10],
        BO: [-16.29015, -63.58865, 5],
        BR: [-14.235, -51.92528, 4],
        BY: [53.7098, 27.95338, 6],
        CA: [56.13036, -106.34677, 4],
        CH: [46.81818, 8.22751, 8],
        CI: [7.53998, -5.54708, 7],
        CL: [-35.67514, -71.54296, 4],
        CN: [35.86166, 104.19539, 4],
        CO: [4.57086, -74.29733, 5],
        CR: [9.74891, -83.75342, 7],
        CY: [35.12641, 33.42985, 9],
        CZ: [49.81749, 15.47296, 7],
        DE: [51.16569, 10.45152, 6],
        DK: [56.26392, 9.50178, 7],
        DM: [15.41499, -61.37097, 10],
        DZ: [28.03388, 1.65962, 5],
        EC: [-1.83123, -78.1834, 6],
        EE: [58.59527, 25.0136, 7],
        EG: [26.82055, 30.80249, 6],
        ES: [40.46366, -3.74922, 6],
        FI: [64.71787, 25.2246, 5],
        FR: [46.22763, 2.21374, 6],
        GB: [53.72271, -3.51562, 6],
        GD: [12.11049, -61.65596, 11],
        GE: [32.15743, -82.90712, 6],
        GF: [3.93388, -53.12578, 7],
        GR: [39.0742, 21.82431, 6],
        GT: [15.78347, -90.23075, 7],
        GY: [4.86041, -58.93018, 6],
        HK: [22.39642, 114.10949, 10],
        HN: [15.19999, -86.2419, 7],
        HR: [45.1, 15.2, 7],
        HU: [47.16249, 19.5033, 7],
        ID: [-0.78927, 113.92132, 5],
        IE: [53.41291, -8.24389, 6],
        IL: [31.04605, 34.85161, 6],
        IN: [20.59368, 78.96288, 5],
        IS: [64.96305, -19.02083, 6],
        IT: [41.87194, 12.56738, 6],
        JM: [18.11191, -77.30804, 9],
        JO: [31.05293, 36.51855, 7],
        KE: [-0.02355, 37.90619, 6],
        KG: [41.20438, 74.76609, 7],
        KR: [35.90775, 127.76692, 6],
        KW: [29.31166, 47.48176, 8],
        KZ: [48.01957, 66.92368, 5],
        LB: [33.85472, 35.86228, 8],
        LT: [55.16943, 23.88127, 7],
        LU: [49.81527, 6.12958, 9],
        LV: [56.87963, 24.60318, 7],
        LY: [26.3351, 17.22833, 5],
        MA: [31.7917, -7.09262, 6],
        MD: [46.91275, 28.36669, 7],
        ME: [42.70867, 19.37439, 8],
        MK: [41.60863, 21.74527, 8],
        MX: [23.6345, -102.55278, 5],
        MY: [4.21048, 101.97576, 5],
        NG: [9.08199, 8.67527, 6],
        NI: [12.86541, -85.20722, 7],
        NL: [52.13263, 5.29126, 7],
        NO: [63.43086, 8.87695, 5],
        NZ: [-40.90055, 174.88597, 5],
        PA: [8.53798, -80.78212, 7],
        PE: [-9.18996, -75.01515, 5],
        PH: [12.87972, 121.77401, 5],
        PK: [30.37532, 69.34511, 5],
        PL: [51.91943, 19.14513, 6],
        PR: [18.22083, -66.59014, 7],
        PT: [39.39987, -8.22445, 6],
        PY: [-23.4425, -58.44383, 6],
        QA: [25.35482, 51.18388, 8],
        RO: [45.94316, 24.96676, 6],
        RS: [44.01652, 21.00585, 7],
        RU: [61.52401, 105.31875, 3],
        SA: [23.88594, 45.07916, 5],
        SE: [61.33353, 16.30371, 5],
        SG: [1.35208, 103.81983, 11],
        SI: [46.15124, 14.99546, 8],
        SK: [48.66902, 19.69902, 7],
        SN: [14.4974, -14.45236, 7],
        SR: [3.9193, -56.02778, 7],
        SV: [13.79418, -88.89653, 9],
        TH: [12.46876, 100.85449, 5],
        TJ: [38.35027, 71.26831, 7],
        TM: [38.96971, 59.55627, 6],
        TN: [33.88691, 9.53749, 6],
        TR: [38.96374, 35.24332, 6],
        TT: [10.6579, -61.20483, 9],
        TW: [23.69781, 120.96051, 7],
        UA: [48.37943, 31.16558, 6],
        US: [37.09024, -95.71289, 4],
        UY: [-32.52277, -55.76583, 7],
        UZ: [41.37749, 64.58526, 6],
        VE: [6.42375, -66.58973, 6],
        VN: [14.05832, 108.27719, 5],
        ZA: [-30.55948, 22.9375, 5]
    };

    function f(n, p, q) {
        h("getProjectedScale(" + n + ", " + p + ", " + q + ")");
        var o = Math.sqrt(n * n + p * p) / Math.sqrt(960 * 960 + 540 * 540);
        if (o - 1 < 0.2 && o - 1 > -0.2) {
            h("\tReturn as the scale is.");
            return q
        }
        if (o - 1 >= 0.2) {
            h("\tReturn increased scale");
            return q + Math.floor(o)
        } else {
            h("\tReturn decreased scale");
            return Math.floor(q - (Math.log(o) / Math.log(2)))
        }
    }

    for (var b in a) {
        a[b][2]
    }
    sf.ui.Maps = sf.ui.widgetFactory({
        widgetName: g,
        baseCssClass: "sf-ui-maps",
        mapObject: null,
        options: {api: "google", center: [0, 0], zoom: 0, maptype: "roadmap"},
        _create: function () {
            alert("[sf.service.Maps] _create()");
            this._super()
        },
        _init: function () {
            alert("[sf.service.Maps] _init()");
            this._super();
            if (navigator.userAgent.toLowerCase().indexOf("applewebkit") < 0) {
                alert("Not Supported browser!! Only available in webkit browser.");
                this.widget().html("Not supported in this browser.");
                return
            }
            var n = this.options;
            k = sf.core._afPath.images + "/ui.maps";
            d.url = k + "/sfmaps_marker.png";
            if (n && n.api) {
                h("Requested API : " + n.api);
                n.api = n.api.toLowerCase();
                if (j[n.api] && j[n.api].checkAvailFunc && typeof j[n.api].checkAvailFunc == "function" && j[n.api].checkAvailFunc() && j[n.api].cls && typeof j[n.api].cls == "function") {
                    if (!this.widget().attr("id")) {
                        this.widget().attr("id", "maps"(new Date()).getTime())
                    }
                    this.mapObject = new j[n.api].cls(this.widget().attr("id"), n);
                    alert("MAP OBJECT: " + this.mapObject)
                } else {
                    h("Can not find suitable maps class!")
                }
            } else {
                h("API is not defined")
            }
        },
        _destroy: function () {
            alert("[sf.service.Maps] _destroy()")
        },
        moveBy: function (n) {
            alert("[sf.service.Maps] moveBy(" + n + ")");
            if (this.mapObject && this.mapObject.moveBy) {
                this.mapObject.moveBy(n)
            } else {
                alert("\tThere's no moveBy function in this map class: " + this.options.api)
            }
            try {
                executeImageGC()
            } catch (o) {
                alert("EXCEPTION: executeImageGC is not supported in this platform!!!")
            }
        },
        zoomIn: function () {
            alert("[sf.service.Maps] zoomIn()");
            if (this.mapObject && this.mapObject.zoomIn) {
                this.mapObject.zoomIn()
            } else {
                alert("\tThere's no zoomIn function in this map class: " + this.options.api)
            }
            try {
                executeImageGC()
            } catch (n) {
                alert("EXCEPTION: executeImageGC is not supported in this platform!!!")
            }
        },
        zoomOut: function () {
            alert("[sf.service.Maps] zoomOut()");
            if (this.mapObject && this.mapObject.zoomOut) {
                this.mapObject.zoomOut()
            } else {
                alert("\tThere's no zoomOut function in this map class: " + this.options.api)
            }
            try {
                executeImageGC()
            } catch (n) {
                alert("EXCEPTION: executeImageGC is not supported in this platform!!!")
            }
        },
        moveTo: function (n) {
            alert("[sf.service.Maps] moveTo(" + n + ")");
            if (this.mapObject && this.mapObject.moveTo) {
                this.mapObject.moveTo(n)
            } else {
                alert("\tThere's no moveTo function in this map class: " + this.options.api)
            }
            try {
                executeImageGC()
            } catch (o) {
                alert("EXCEPTION: executeImageGC is not supported in this platform!!!")
            }
        },
        setMapType: function (n) {
            alert("[sf.service.Maps] setMapType(" + n + ")");
            if (this.mapObject && this.mapObject.setMapType) {
                this.mapObject.setMapType(n)
            } else {
                alert("\tThere's no setMapType function in this map class: " + this.options.api)
            }
            try {
                executeImageGC()
            } catch (o) {
                alert("EXCEPTION: executeImageGC is not supported in this platform!!!")
            }
        },
        getMapType: function (n) {
            alert("[sf.service.Maps] getMapType(" + n + ")");
            if (this.mapObject && this.mapObject.getMapType) {
                return this.mapObject.getMapType(n)
            } else {
                alert("\tThere's no getMapType function in this map class: " + this.options.api)
            }
        },
        setCenter: function (n) {
            alert("[sf.service.Maps] setCenter(" + n + ")");
            if (this.mapObject && this.mapObject.setCenter) {
                this.mapObject.setCenter(n)
            } else {
                alert("\tThere's no setCenter function in this map class: " + this.options.api)
            }
            try {
                executeImageGC()
            } catch (o) {
                alert("EXCEPTION: executeImageGC is not supported in this platform!!!")
            }
        },
        getCenter: function (n) {
            alert("[sf.service.Maps] getCenter(" + n + ")");
            if (this.mapObject && this.mapObject.getCenter) {
                return this.mapObject.getCenter(n)
            } else {
                alert("\tThere's no getCenter function in this map class: " + this.options.api)
            }
        },
        setZoom: function (n) {
            alert("[sf.service.Maps] setZoom(" + n + ")");
            if (this.mapObject && this.mapObject.setZoom) {
                this.mapObject.setZoom(n)
            } else {
                alert("\tThere's no setZoom function in this map class: " + this.options.api)
            }
            try {
                executeImageGC()
            } catch (o) {
                alert("EXCEPTION: executeImageGC is not supported in this platform!!!")
            }
        },
        getZoom: function (n) {
            alert("[sf.service.Maps] getZoom(" + n + ")");
            if (this.mapObject && this.mapObject.getZoom) {
                return this.mapObject.getZoom(n)
            } else {
                alert("\tThere's no getZoom function in this map class: " + this.options.api)
            }
        },
        addMarker: function (n) {
            alert("[sf.service.Maps] addMarker(" + n + ")");
            if (this.mapObject && this.mapObject.addMarker) {
                return this.mapObject.addMarker(n)
            } else {
                alert("\tThere's no addMarker function in this map class: " + this.options.api)
            }
        },
        addInfoWindow: function (n) {
            alert("[sf.service.Maps] addInfoWindow(" + n + ")");
            if (this.mapObject && this.mapObject.addInfoWindow) {
                return this.mapObject.addInfoWindow(n)
            } else {
                alert("\tThere's no addInfoWindow function in this map class: " + this.options.api)
            }
        },
        search: function (n) {
            alert("[sf.service.Maps] search(" + n + ")");
            if (this.mapObject && this.mapObject.search) {
                this.mapObject.search(n)
            } else {
                alert("\tThere's no getZoom function in this map class: " + this.options.api)
            }
            return null
        }
    });
    sf.ui.bridge(g, sf.ui.Maps);
    sf.ui.addSelector(g)
}(jQuery));
(function (b) {
    var a = "sfToggleButton";
    sf.ui.ToggleButton = sf.ui.widgetFactory({
        widgetName: a,
        eventNamespace: "sfToggleButton",
        baseCssClass: "sf-ui-togglebutton",
        options: {text: {on: "On", off: "Off"}, isOn: false, state: "blur", widgetFocusCssClass: "focused"},
        templates: {item: b.template(null, "<div class='bg'><div class='left'></div><div class='center'></div><div class='right'></div></div><div class='light'></div><div class='button'></div>")},
        _init: function () {
            alert("[sf.ToggleButton] _init()");
            var e = this.options, c = this.widget();
            this.widget().css("visibility", "hidden");
            this._setLayout();
            this._setOn(e.isOn, false);
            this.widget().css("visibility", "visible");
            var d = this;
            this.widget().bind("click", function () {
                d.toggle()
            })
        },
        _setLayout: function () {
            alert("[sf.ui.ToggleButton] _setLayout()");
            var c = this.widget(), e = this.templates, h = this.options;
            c.empty();
            b.tmpl(e.item, {}).appendTo(c);
            var g = c.width();
            var f = c.find(".bg .left").width();
            var d = c.find(".bg .right").width();
            c.find(".bg .center").width(g - f - d);
            c.find(".button").sfButton({text: h.isOn ? h.text.on : h.text.off});
            g = c.find(".button").width();
            d = c.find(".button .sf-ui-button-r").width();
            c.find(".light").css("left", (g - d) + "px");
            alert("ToggleButton HTML : " + c.html())
        },
        _setOn: function (c, e) {
            alert("[sf.ui.ToggleButton] _setOn(" + c + ")");
            var d = this.widget(), f = this.templates, h = this.options;
            if (e == undefined) {
                e = true
            }
            h.isOn = c;
            var g = d.width() - d.find(".button").width();
            d.find(".button").sfButton("option", "text", h.isOn ? h.text.on : h.text.off);
            if (!h.isOn) {
                d.find(".light").css("display", "none")
            }
            d.find(".button").animate({left: h.isOn ? "0px" : (g + "px")}, {
                duration: (e ? 200 : 0),
                complete: function () {
                    d.find(".light").css("display", h.isOn ? "block" : "none")
                }
            })
        },
        _setOption: function (d, e) {
            alert("[sf.ui.ToggleButton] _setOption(" + d + ", " + e + ")");
            var f = this.options, c = this.view;
            switch (d) {
                case"text":
                    break
            }
        },
        _destroy: function () {
            alert("[sf.ui.ToggleButton] _destroy()");
            var c = this.widget(), d = this.options;
            c.removeClass(d.widgetFocusCssClass);
            c.empty()
        },
        toggle: function () {
            alert("[sf.ui.ToggleButton] toggle()");
            var c = this.options;
            this._setOn(!c.isOn);
            this._trigger("changed", null, this.options.isOn)
        },
        focus: function () {
            alert("[sf.ui.ToggleButton] focus()");
            var c = this.widget(), d = this.view, e = this.options;
            c.addClass(e.widgetFocusCssClass);
            c.find(".button").sfButton("focus");
            return this
        },
        blur: function () {
            alert("[sf.ui.ToggleButton] blur()");
            var d = this.options, c = this.widget();
            c.removeClass(d.widgetFocusCssClass);
            c.find(".button").sfButton("blur");
            return this
        },
        isOn: function () {
            alert("[sf.ui.ToggleButton] isOn()");
            return this.options.isOn
        }
    });
    sf.ui.bridge(a, sf.ui.ToggleButton);
    sf.ui.addSelector(a)
}(jQuery));
(function (b) {
    var a = "sfTextInput";
    sf.ui.TextInput = sf.ui.widgetFactory({
        widgetName: a,
        baseCssClass: "sf-ui-textinput",
        mapObject: null,
        options: {maxlength: -1, text: "", ontextchanged: null, oncomplete: null, onkeypadchanged: null},
        templates: {
            bg: '<div class="bg"><div class="left"></div><div class="center"></div><div class="right"></div>',
            input: '<div class="input"><input id="${id}" type="" maxlength=""></input></div>'
        },
        objIME: null,
        idIME: null,
        _create: function () {
            alert("[sf.ui.TextInput] _create()");
            this._super();
            var c = this.widget();
            var e = this.options;
            var d = this.view;
            this.idIME = "sf-ui-textinput-" + (new Date()).getTime();
            b.tmpl(this.templates.bg, {}).appendTo(c);
            b.tmpl(this.templates.input, {id: this.idIME}).appendTo(c);
            d.input = c.find(".input input")
        },
        _init: function () {
            alert("[sf.ui.TextInput] _init()");
            this._super();
            this._setLayout();
            this._setIMEObj();
            this._setText();
            this._setMaxLength()
        },
        _setLayout: function () {
            alert("[sf.ui.TextInput] _setLayout()");
            var c = this.widget();
            var d = this.view;
            var e = c.width();
            var f = c.find(".bg .left").width();
            var h = c.find(".bg .right").width();
            c.find(".bg .center").css("width", (e - f - h) + "px");
            var g = parseInt(c.find(".input").css("left"), 10);
            c.find(".input").css("width", (e - g * 2) + "px");
            d.input.css("width", (e - g * 2) + "px")
        },
        _setIMEObj: function () {
            alert("[sf.ui.TextInput] _setIMEObj()");
            var c = this.widget();
            if (!this.objIME) {
                this.objIME = new IMEShell(this.idIME, function () {
                });
                var d = this;
                this.objIME.setKeyFunc(sf.key.RETURN, function () {
                    sf.key.preventDefault();
                    d.blur(false)
                });
                this.objIME.setKeyFunc(sf.key.EXIT, function () {
                    sf.key.preventDefault();
                    d.blur(false)
                });
                if (this.objIME.setEnterFunc) {
                    this.objIME.setEnterFunc(function () {
                        d.blur(true)
                    })
                }
                if (this.objIME.setInputHighlightFunc) {
                    this.objIME.setInputHighlightFunc(function (f, e) {
                        alert("setInputHighlightFunc(" + f + ", " + e + ")");
                        if (f == "qwerty") {
                            if (e == "inputobj") {
                                d._focus()
                            } else {
                                d._blur()
                            }
                        } else {
                            d._focus()
                        }
                    })
                }
                if (this.objIME.setOnCompleteFunc) {
                    this.objIME.setOnCompleteFunc(function () {
                        d._handleTextChanged()
                    })
                }
                if (this.objIME.setKeypadChangeFunc) {
                    this.objIME.setKeypadChangeFunc("12key", function () {
                        d._handleKeypadChanged("12key")
                    });
                    this.objIME.setKeypadChangeFunc("qwerty", function () {
                        d._handleKeypadChanged("qwerty")
                    })
                }
            }
            if (!this._isXT9Included()) {
                this._handleKeypadChanged("12key")
            }
        },
        _isXT9Included: function () {
            alert("[sf.ui.TextInput] _isXT9Included()");
            var c = (this.objIME && this.objIME.IsSupportXT9 && this.objIME.IsSupportXT9.toUpperCase() == "XT9");
            alert("Is XT9? " + c);
            return c ? true : false
        },
        _setText: function (f) {
            alert("[sf.ui.TextInput] _setText(" + (f || "") + ")");
            var c = this.widget();
            var e = this.options;
            var d = this.view;
            if (f && typeof f == "string") {
                e.text = f
            }
            alert(typeof e.text);
            if (this.objIME && typeof e.text == "string") {
                alert("TEXT : " + e.text);
                this.objIME.setString(e.text)
            }
        },
        _setMaxLength: function (d) {
            alert("[sf.ui.TextInput] _setMaxLength(" + d + ")");
            var c = this.widget();
            var f = this.options;
            if (d && typeof d == "number") {
                f.maxlength = d
            }
            if (f.maxlength > 0) {
                c.find(".input input").attr("maxlength", f.maxlength)
            } else {
                c.find(".input input").attr("maxlength", "10000")
            }
            if (this.objIME) {
                this.objIME._setMaxLength();
                var e = this.getText() + "";
                if (e.length > f.maxlength) {
                    this._setText(e.substr(0, f.maxlength))
                }
            }
        },
        _setKeypadPos: function () {
            alert("[sf.ui.TextInput] _setKeypadPos()");
            var c = this.widget();
            var e = c.offset().left;
            var d = c.offset().top;
            this.setKeypadPos(e + c.width(), d)
        },
        _destroy: function () {
            alert("[sf.ui.TextInput] _destroy()")
        },
        _focus: function () {
            alert("[sf.ui.TextInput] _focus()");
            var c = this.widget();
            c.addClass("focused")
        },
        _blur: function () {
            alert("[sf.ui.TextInput] _blur()");
            var c = this.widget();
            c.removeClass("focused")
        },
        _handleTextChanged: function () {
            alert("[sf.ui.TextInput] _handleTextChanged()");
            alert("Current Text: " + this.getText());
            if (this.options.ontextchanged && this.options.ontextchanged instanceof Function) {
                try {
                    this.options.ontextchanged(this.getText() || null)
                } catch (c) {
                    alert("EXCEPTION occured in oncomplete handler")
                }
            }
        },
        _handleKeypadChanged: function (h) {
            alert("[sf.ui.TextInput] _handleKeypadChanged(" + h + ")");
            var c = this.widget();
            if (this.options.onkeypadchanged && this.options.onkeypadchanged instanceof Function) {
                try {
                    this.options.onkeypadchanged(h.toLowerCase())
                } catch (g) {
                    alert("EXCEPTION occured in oncomplete handler")
                }
            } else {
                this._setKeypadPos()
            }
            if (this.objIME.setWordBoxPos) {
                var f = c.offset().left;
                var d = c.offset().top;
                var j = b("#ime_wordselect").height();
                this.objIME.setWordBoxPos(f, d - j)
            }
        },
        _setOption: function (d, e) {
            alert("[sf.ui.TextInput] _setOption(" + d + ", " + e + ")");
            var f = this.options, c = this.widget();
            switch (d) {
                case"maxlength":
                    this._setMaxLength(parseInt(e, 10));
                    break;
                case"text":
                    this._setText(e + "");
                    break;
                case"ontextchanged":
                    if (e && e instanceof Function) {
                        f.ontextchanged = e
                    }
                    break;
                case"oncomplete":
                    if (e && e instanceof Function) {
                        f.oncomplete = e
                    }
                    break;
                case"onkeypadchanged":
                    if (e && e instanceof Function) {
                        f.onkeypadchanged = e
                    }
                    break
            }
        },
        getKeypadType: function () {
            alert("[sf.ui.TextInput] getKeypadType()");
            if (this.objIME) {
                if (this.objIME.getKeySet) {
                    return this.objIME.getKeySet().toLowerCase()
                } else {
                    return ("12key").toLowerCase()
                }
            } else {
                alert("IME object is not initialized yet...");
                return null
            }
        },
        setKeypadPos: function (d, c) {
            alert("[sf.ui.TextInput] setKeypadPos(" + d + ", " + c + ")");
            if (this.objIME) {
                if (this.objIME.setKeypadPos) {
                    this.objIME.setKeypadPos(d, c, 200)
                } else {
                    alert("setKeypadPos is not supported...")
                }
                if (this.objIME.setQWERTYPos) {
                    this.objIME.setQWERTYPos(d, c, 200)
                } else {
                    alert("setQWERTYPos is not supported...")
                }
            } else {
                alert("IME object is not created...")
            }
        },
        focus: function () {
            alert("[sf.ui.TextInput] focus()");
            var c = this.widget();
            if (_g_ime && _g_ime.pluginMouse_use_YN && this.objIME) {
                alert("Focus to IME........");
                this.objIME._focus()
            } else {
                alert("Focus to InputBox........");
                c.find(".input input").focus()
            }
            this._focus();
            return this
        },
        blur: function (f) {
            alert("[sf.ui.TextInput] blur(" + f + ")");
            var d = this.view;
            if (sf.scene._isSceneArchUsed()) {
                if (_g_ime && _g_ime.pluginMouse_use_YN && this.objIME && this.objIME._blur && this.objIME._blur instanceof Function) {
                    var c = this;
                    alert("Calling IME._blur()");
                    c.objIME._blur()
                }
                if (d.input) {
                    d.input.blur();
                    document.body.focus();
                    event.stopPropagation()
                }
            }
            sf.scene.returnFocus();
            if (this.options.oncomplete && this.options.oncomplete instanceof Function) {
                try {
                    this.options.oncomplete(f ? this.getText() : null)
                } catch (g) {
                    alert("EXCEPTION occured in oncomplete handler")
                }
            }
            this._blur();
            return this
        },
        getText: function () {
            alert("[sf.ui.TextInput] getText()");
            var c = this.widget();
            return c.find(".input input").val()
        },
        ime: function () {
            alert("[sf.ui.TextInput] ime(): " + arguments[0]);
            if (this.objIME && this.objIME[arguments[0]]) {
                return this.objIME.call(arguments)
            }
        }
    });
    sf.ui.bridge(a, sf.ui.TextInput);
    sf.ui.addSelector(a)
}(jQuery));
(function (b) {
    var a = "sfProgressBar";
    sf.ui.ProgressBar = sf.ui.widgetFactory({
        baseCssClass: "sf-ui-progressbar",
        eventNamespace: "sfProgressBar",
        options: {value: 0, max: 100, type: "progress",},
        stepWidth: 0,
        templates: {
            bg: '<div class="bg"><div class="left"></div><div class="center"></div><div class="right"></div></div>',
            bar: '<div class="bar"></div>',
            anibar: '<div class="ani"></div>'
        },
        totalWidth: 0,
        widgetName: a,
        _create: function () {
            alert("[sf.ProgressBar] _create()");
            var f = this.options, e = this.templates, d = this.view, c = this.widget();
            this._super();
            this.totalWidth = c.width();
            b.tmpl(e.bg, {}).appendTo(c);
            b.tmpl(e.bar, {}).appendTo(c);
            b.tmpl(e.anibar, {}).appendTo(c);
            d.bar = c.find(".bar");
            d.anibar = c.find(".ani");
            alert(c.html())
        },
        _init: function () {
            alert("[sf.ProgressBar] _init()");
            this._super();
            var g = this.options, d = this.view, c = this.widget();
            var e = c.find(".bg .left").width();
            var f = c.find(".bg .right").width();
            alert("Left : " + e + ", Right : " + f);
            c.find(".bg .center").css("width", (this.totalWidth - e - f) + "px");
            this._setType(g.type);
            this._setValue(g.value);
            this._setAnimation();
            alert(c.html())
        },
        _setType: function (d) {
            alert("[sf.ProgressBar] _setType(" + d + ")");
            var c = this.view;
            switch (d) {
                case"progress":
                    c.bar.show();
                    c.anibar.show();
                    c.anibar.addClass("normal").removeClass("loading");
                    break;
                case"buffering":
                    c.bar.hide();
                    c.anibar.show();
                    c.anibar.addClass("normal").removeClass("loading");
                    break;
                case"loading":
                    c.bar.hide();
                    c.anibar.show();
                    c.anibar.removeClass("normal").addClass("loading");
                    break;
                case"status":
                    c.bar.show();
                    c.anibar.hide();
                    break
            }
        },
        _update: function () {
            alert("[sf.ProgressBar] _update()");
            var f = this.options;
            var d = this.view;
            alert("Range : " + 0 + " ~ " + f.max);
            var e = parseInt(d.bar.css("left"));
            var c = (this.totalWidth - e * 2) * (f.value / f.max);
            d.bar.css("width", parseInt(c, 10) + "px");
            d.anibar.css("width", parseInt(c, 10) + "px")
        },
        _setValue: function (c) {
            alert("[sf.ProgressBar] _setValue(" + c + ")");
            var d = this.options;
            d.value = c;
            d.value = Math.max(d.value, 0);
            d.value = Math.min(d.value, d.max);
            this._update()
        },
        _setMax: function (c) {
            alert("[sf.ProgressBar] _setMax(" + c + ")");
            var e = this.options;
            var d = this.view;
            e.max = c;
            alert("Range : " + 0 + " ~ " + e.max);
            e.max = Math.max(e.max, 0);
            e.value = Math.min(e.value, e.max);
            this._update()
        },
        _setAnimation: function () {
            alert("[sf.ProgressBar] _setAnimation()");
            var c = this.view;
            var d = this;
            this.anistep = 0;
            this.anistepcount = 4;
            this.tmrAnimation = setInterval(function () {
                d._nextAnimation()
            }, 200)
        },
        _nextAnimation: function () {
            var c = this.view;
            c.anibar.removeClass("step" + this.anistep);
            this.anistep = (this.anistep + 1) % this.anistepcount;
            c.anibar.addClass("step" + this.anistep)
        },
        _clearAnimation: function () {
            alert("[sf.ProgressBar] _clearAnimation()");
            if (this.tmrAnimation) {
                clearInterval(this.tmrAnimation);
                this.tmrAnimation = null
            }
        },
        _destroy: function () {
            var c = this.view;
            this._clearAnimation()
        },
        show: function () {
            alert("[sf.ProgressBar] show()");
            this._setAnimation()
        },
        hide: function () {
            alert("[sf.ProgressBar] hide()");
            this._clearAnimation()
        },
        next: function () {
            alert("[sf.ProgressBar] next()");
            var c = this.options;
            alert(c.value);
            this._setValue(c.value + 1)
        },
        prev: function () {
            alert("[sf.ProgressBar] prev()");
            var c = this.options;
            alert(c.value);
            this._setValue(c.value - 1)
        },
        setValue: function (c) {
            alert("[sf.ProgressBar] setValue(" + c + ")");
            this._setValue(c)
        },
        getValue: function () {
            alert("[sf.ProgressBar] getValue(): " + this.options.value);
            return this.option.value
        },
        setMax: function (c) {
            alert("[sf.ProgressBar] setMax(" + c + ")");
            this._setMax(c)
        },
        getMax: function () {
            alert("[sf.ProgressBar] getMax(): " + this.options.max);
            return this.option.max
        },
        _setOption: function (c, d) {
            alert("[sf.ProgressBar] _setOption(" + c + ", " + d + ")");
            var e = this.options;
            switch (c) {
                case"value":
                    e.value = d;
                    this._setValue(e.value);
                    break;
                case"max":
                    e.max = d;
                    this._setValue(e.value);
                    break;
                case"type":
                    e.type = d;
                    this._setType(e.type);
                    break
            }
        },
    });
    sf.ui.bridge(a, sf.ui.ProgressBar);
    sf.ui.addSelector(a)
}(jQuery));
(function (b) {
    var a = "sfPageIndicator";
    sf.ui.PageIndicator = sf.ui.widgetFactory({
        baseCssClass: "sf-ui-pageindicator",
        eventNamespace: "sfPageIndicator",
        options: {index: 0, count: 100},
        templates: {dot: '<div class="dot"></div>'},
        widgetName: a,
        _create: function () {
            alert("[sf.PageIndicator] _create()");
            var f = this.options, e = this.templates, d = this.view, c = this.widget();
            this._super()
        },
        _init: function () {
            alert("[sf.PageIndicator] _init()");
            this._super();
            var h = this.options, f = this.templates, c = this.widget();
            var g = [];
            for (var e = 0; e < h.count; e++) {
                g.push({})
            }
            b.tmpl(f.dot, g).appendTo(c);
            var d = this;
            c.find(".dot").each(function (j, k) {
                b(k).bind("click", function () {
                    d.setIndex(j)
                })
            });
            this._setIndex(h.index);
            alert(c.html())
        },
        _setIndex: function (e) {
            alert("[sf.PageIndicator] _setIndex(" + e + ")");
            var d = this.view, c = this.widget(), f = this.options;
            f.index = e;
            f.index = Math.max(f.index, 0);
            f.index = Math.min(f.index, f.count - 1);
            c.find(".dot").removeClass("selected");
            c.find(".dot").eq(f.index).addClass("selected");
            this._trigger("selected", null, e)
        },
        _destroy: function () {
            var c = this.view
        },
        next: function () {
            alert("[sf.PageIndicator] next()");
            var c = this.options;
            this.setIndex(c.index + 1)
        },
        prev: function () {
            alert("[sf.PageIndicator] prev()");
            var c = this.options;
            this.setIndex(c.index - 1)
        },
        setIndex: function (c) {
            alert("[sf.PageIndicator] setIndex(" + c + ")");
            this._setIndex(c)
        },
        getIndex: function () {
            alert("[sf.PageIndicator] getIndex()");
            return this.options.index
        },
        _setOption: function (c, d) {
            alert("[sf.PageIndicator] _setOption(" + c + ", " + d + ")");
            var e = this.options;
            switch (c) {
                case"index":
                    e.index = d;
                    this._setIndex(e.value);
                    break;
                case"count":
                    e.count = d;
                    this._setIndex(e.value);
                    break
            }
        },
    });
    sf.ui.bridge(a, sf.ui.PageIndicator);
    sf.ui.addSelector(a)
}(jQuery));
(function (b) {
    var a = "sfSlider";
    sf.ui.Slider = sf.ui.widgetFactory({
        widgetName: a,
        baseCssClass: "sf-ui-slider",
        options: {vertical: false, value: 0, max: 100, showtooltip: true, showprogress: true, reverse: false},
        templates: {
            bg: '<div class="bg"><div class="begin"></div><div class="mid"></div><div class="end"></div></div>',
            bar: '<div class="bar"><div class="begin"></div><div class="mid"></div><div class="end"></div></div>',
            thumb: '<div class="thumb"></div>',
            tooltip: '<div class="tooltip"></div>'
        },
        scrollSize: 0,
        _create: function () {
            alert("[sf.ui.Slider] _create()");
            this._super();
            var c = this.widget(), d = this.templates, e = this.options;
            b.tmpl(d.bg, {}).appendTo(c);
            b.tmpl(d.bar, {}).appendTo(c);
            b.tmpl(d.thumb, {}).appendTo(c);
            b.tmpl(d.tooltip, {}).appendTo(c)
        },
        _init: function () {
            alert("[sf.ui.Slider] _init()");
            this._super();
            var c = this.widget(), d = this.templates, e = this.options;
            if (e.vertical && !c.hasClass("vertical")) {
                c.addClass("vertical")
            } else {
                if (!e.vertical && c.hasClass("vertical")) {
                    c.removeClass("vertical")
                }
            }
            this._setLayout();
            this._updateValue()
        },
        _setLayout: function () {
            alert("[sf.ui.Slider] _setLayout()");
            var j = this.widget(), l = this.templates, d = this.options;
            j.find(".tooltip").show();
            if (d.vertical) {
                var k = j.height();
                var m = j.find(".bg .begin").height();
                var f = j.find(".bg .end").height();
                j.find(".bg .mid").css({height: (k - m - f) + "px", width: ""});
                this.scrollSize = k - j.find(".thumb").height();
                var h = j.find(".thumb").width();
                j.find(".tooltip").css("left", h + "px").sfTooltip({text: d.value, orientation: "left"})
            } else {
                var c = j.width();
                var e = j.find(".bg .begin").width();
                var g = j.find(".bg .end").width();
                j.find(".bg .mid").css({width: (c - e - g) + "px", height: ""});
                this.scrollSize = c - j.find(".thumb").width();
                j.find(".tooltip").css("top", "0px").sfTooltip({text: d.value, orientation: "down"})
            }
            if (j.hasClass("focused") && this.options.showtooltip) {
                j.find(".tooltip").show()
            } else {
                j.find(".tooltip").hide()
            }
        },
        _updateValue: function () {
            alert("[sf.ui.Slider] _updateValue()");
            var m = this.widget(), p = this.templates, d = this.options;
            if (this.options.showprogress) {
                m.find(".bar").show()
            } else {
                m.find(".bar").hide()
            }
            m.find(".tooltip").show();
            if (d.vertical) {
                var e = parseInt(this.scrollSize * ((!d.reverse ? d.value : (d.max - d.value)) / d.max), 10);
                m.find(".thumb").css({top: e + "px", left: ""});
                var h = m.find(".thumb").height();
                m.find(".bar").css({top: (!d.reverse ? 0 : parseInt(e + h / 2, 10)) + "px", left: ""});
                var q = m.find(".bar .begin").height();
                var j = m.find(".bar .end").height();
                var n = m.height();
                m.find(".bar .mid").css({
                    height: (!d.reverse ? parseInt(e + h / 2, 10) - (q + j) : (n - parseInt(e + h / 2, 10) - (q + j))) + "px",
                    width: ""
                });
                m.find(".tooltip").css("top", (e + parseInt(h / 2, 10)) + "px").sfTooltip("option", "text", d.value)
            } else {
                var g = parseInt(this.scrollSize * ((d.reverse ? (d.max - d.value) : d.value) / d.max), 10);
                m.find(".thumb").css({left: g + "px", top: ""});
                var l = m.find(".thumb").width();
                m.find(".bar").css({left: (!d.reverse ? 0 : parseInt(g + l / 2, 10)) + "px", top: ""});
                var f = m.find(".bar .begin").width();
                var k = m.find(".bar .end").width();
                var c = m.width();
                m.find(".bar .mid").css({
                    width: (!d.reverse ? parseInt(g + l / 2, 10) - (f + k) : (c - parseInt(g + l / 2, 10) - (f + k))) + "px",
                    height: ""
                });
                m.find(".tooltip").css("left", (g + parseInt(l / 2, 10)) + "px").sfTooltip("option", "text", d.value)
            }
            if (m.hasClass("focused") && this.options.showtooltip) {
                m.find(".tooltip").show()
            } else {
                m.find(".tooltip").hide()
            }
        },
        _setOption: function (c, d) {
            alert("[sf.ui.Slider] _setOption(" + c + ", " + d + ")");
            switch (c) {
                case"vertical":
                    this.setVertical((d === undefined || d == true) ? true : false);
                    break;
                case"value":
                    this.setValue(d);
                    break;
                case"max":
                    this.setMax(d);
                    break;
                case"showtooltip":
                    this.showTooltip((d === undefined || d == true) ? true : false);
                    break;
                case"showprogress":
                    this.showProgress((d === undefined || d == true) ? true : false);
                    break;
                case"reverse":
                    this.setReverse((d === undefined || d == true) ? true : false);
                    break
            }
        },
        _destroy: function () {
            alert("[sf.ui.Slider] _destroy()");
            this.widget().empty()
        },
        focus: function () {
            alert("[sf.ui.Slider] focus()");
            var c = this.widget();
            if (!c.hasClass("focused")) {
                c.addClass("focused")
            }
            if (this.options.showtooltip) {
                c.find(".tooltip").show()
            }
        },
        blur: function () {
            alert("[sf.ui.Slider] blur()");
            var c = this.widget();
            if (c.hasClass("focused")) {
                c.removeClass("focused")
            }
            c.find(".tooltip").hide()
        },
        setVertical: function (d) {
            alert("[sf.ui.Slider] setVertical(" + d + ")");
            var c = this.widget(), e = this.options;
            e.vertical = d ? true : false;
            if (e.vertical && !c.hasClass("vertical")) {
                c.addClass("vertical")
            } else {
                if (!e.vertical && c.hasClass("vertical")) {
                    c.removeClass("vertical")
                }
            }
            this._setLayout();
            this._updateValue()
        },
        isVertical: function () {
            alert("[sf.ui.Slider] isVertical(): " + this.options.vertical);
            return this.options.vertical
        },
        showTooltip: function (d) {
            alert("[sf.ui.Slider] showTooltip(" + d + ")");
            this.options.showtooltip = (d || d === undefined) ? true : false;
            var c = this.widget();
            this._updateValue()
        },
        getTooltipVisible: function (c) {
            alert("[sf.ui.Slider] getTooltipVisible(): " + this.options.showtooltip);
            return this.options.showtooltip
        },
        showProgress: function (d) {
            alert("[sf.ui.Slider] showProgress(" + d + ")");
            this.options.showprogress = (d || d === undefined) ? true : false;
            var c = this.widget();
            this._updateValue()
        },
        getProgressVisible: function () {
            alert("[sf.ui.Slider] getProgressVisible(): " + this.options.showprogress);
            return this.options.showprogress
        },
        setValue: function (c) {
            alert("[sf.ui.Slider] setValue(" + c + ")");
            this.options.value = parseInt(c, 10);
            this.options.value = Math.min(this.options.value, this.options.max);
            this.options.value = Math.max(this.options.value, 0);
            this._updateValue()
        },
        getValue: function () {
            alert("[sf.ui.Slider] getValue(): " + this.options.value);
            return this.options.value
        },
        setMax: function (c) {
            alert("[sf.ui.Slider] setMax(" + c + ")");
            this.options.max = parseInt(c, 10);
            this.options.value = Math.min(this.options.value, this.options.max);
            this._updateValue()
        },
        getMax: function () {
            alert("[sf.ui.Slider] getMax(): " + this.options.max);
            return this.options.max
        },
        setReverse: function (c) {
            alert("[sf.ui.Slider] setReverse()");
            this.options.reverse = (c || c === undefined) ? true : false;
            this._updateValue()
        },
        isReverse: function () {
            alert("[sf.ui.Slider] isReverse(): " + this.options.reverse);
            return this.options.reverse
        }
    });
    sf.ui.bridge(a, sf.ui.Slider);
    sf.ui.addSelector(a)
}(jQuery));
(function (b) {
    var a = "sfTooltip";
    sf.ui.Tooltip = sf.ui.widgetFactory({
        widgetName: a,
        baseCssClass: "sf-ui-tooltip",
        options: {text: "", title: "", orientation: "down"},
        templates: {
            bg: '<div class="bg"><table border="0px" cellpadding="0px" cellspacing="0px"><tr class="top"><td><div class="left"></div></td><td><div class="center"></div></td><td><div class="right"></div></td></tr><tr class="middle"><td><div class="left"></div></td><td><div class="center"><div class="text"></div></div></td><td><div class="right"></div></td></tr><tr class="bottom"><td><div class="left"></div></td><td><div class="center"></div></td><td><div class="right"></div></td></tr></table></div>',
            arrow: '<div class="arrow"></div>'
        },
        arrowSelectors: {
            left: ".bg .middle .left",
            right: ".bg .middle .right",
            up: ".bg .top .center",
            down: ".bg .bottom .center"
        },
        _create: function () {
            alert("[sf.ui.Tooltip] _create()");
            this._super();
            var c = this.widget(), d = this.templates, e = this.options
        },
        _init: function () {
            alert("[sf.ui.Tooltip] _init()");
            this._super();
            var c = this.widget(), d = this.templates, e = this.options;
            this._setLayout()
        },
        _setLayout: function () {
            alert("[sf.ui.Tooltip] _setLayout()");
            var h = this.widget(), l = this.templates, d = this.options;
            b.tmpl(l.bg, {}).appendTo(h.empty());
            for (var k in this.arrowSelectors) {
                if (k == this.options.orientation) {
                    h.find(this.arrowSelectors[k]).html("").append(b.tmpl(l.arrow, {}).addClass("arrow-" + k))
                } else {
                    h.find(this.arrowSelectors[k]).html("")
                }
            }
            h.find(".bg .middle .center .text").html((this.options.title != "" ? '<div class="title">' + this.options.title + "</div>" : "") + this.options.text);
            var m = h.find(".bg .middle .center .text").width();
            var e = h.find(".bg .middle .center .text").height();
            var f = h.find(".arrow").height();
            var g = h.find(".arrow").width();
            if (this.options.orientation == "left" || this.options.orientation == "right") {
                if (e < f) {
                    alert("centerHeight < arrowHeight ? " + e + " < " + f);
                    h.find(".bg .middle .center .text").css("margin-top", parseInt((f - e) / 2, 10) + "px");
                    e = f
                }
                h.find(".arrow").css("margin-top", parseInt((e - f) / 2, 10) + "px")
            } else {
                if (m < g) {
                    m = g
                }
            }
            alert("Text size : " + m + "x" + e);
            h.find(".bg .middle .left").css("height", e + "px");
            h.find(".bg .middle .center").css({width: m + "px", height: e + "px"});
            h.find(".bg .middle .right").css("height", e + "px");
            h.find(".bg .top .center").css("width", m + "px");
            h.find(".bg .bottom .center").css("width", m + "px");
            var c = h.find(".bg").width();
            var j = h.find(".bg").height();
            switch (this.options.orientation) {
                case"left":
                    h.find(".bg").css({left: "0px", top: -parseInt(j / 2, 10) + "px"});
                    break;
                case"right":
                    h.find(".bg").css({left: (-c) + "px", top: -parseInt(j / 2, 10) + "px"});
                    break;
                case"up":
                    h.find(".bg").css({left: -parseInt(c / 2, 10) + "px", top: "0px"});
                    break;
                case"down":
                    h.find(".bg").css({left: -parseInt(c / 2, 10) + "px", top: -j + "px"});
                    break
            }
        },
        _setOption: function (c, d) {
            alert("[sf.ui.Tooltip] _setOption(" + c + ", " + d + ")");
            switch (c) {
                case"orientation":
                    this.setOrientation(d);
                    break;
                case"text":
                    this.setText(d);
                    break;
                case"title":
                    this.setTitle(d);
                    break
            }
        },
        _destroy: function () {
            alert("[sf.ui.Tooltip] _destroy()");
            this.widget().empty()
        },
        setText: function (c) {
            alert("[sf.ui.Tooltip] setText(" + c + ")");
            this.options.text = c;
            this._setLayout()
        },
        setTitle: function (c) {
            alert("[sf.ui.Tooltip] setTitle(" + c + ")");
            this.options.title = c;
            this._setLayout()
        },
        setOrientation: function (d) {
            alert("[sf.ui.Tooltip] setOrientation(" + d + ")");
            var c = this.widget(), e = this.options;
            d = d.toLowerCase();
            if (this.arrowSelectors[d]) {
                this.options.orientation = d
            }
            this._setLayout()
        },
        getOrientation: function () {
            alert("[sf.ui.Tooltip] getOrientation(): " + this.options.orientation);
            return this.options.orientation
        }
    });
    sf.ui.bridge(a, sf.ui.Tooltip);
    sf.ui.addSelector(a)
}(jQuery));
(function (b) {
    var a = "sfArrowButton";
    sf.ui.ArrowButton = sf.ui.widgetFactory({
        widgetName: a,
        eventNamespace: "sfArrowButton",
        baseCssClass: "sf-ui-arrowbutton",
        options: {
            text: "", arrow: "all", onup: function (c) {
                return c
            }, ondown: function (c) {
                return c
            }, onleft: function (c) {
                return c
            }, onright: function (c) {
                return c
            }
        },
        templates: {
            button: '<div class="button"><div class="left"></div><div class="center sf-ui-common-ellipsis"></div><div class="right"></div></div>',
            arrows: '<div class="arrows"><div class="arrowup"></div><div class="arrowdown"></div><div class="arrowleft"></div><div class="arrowright"></div></div>'
        },
        arrowClasses: {all: "all", updown: "updown", leftright: "leftright"},
        _init: function () {
            alert("[sf.ArrowButton] _init()");
            var c = this.widget(), j = this.options, d = this.view, e = this.templates;
            this._beginLayoutSetting();
            c.empty();
            this._setArrowType(null);
            d.button = b.tmpl(e.button, null);
            d.arrows = b.tmpl(e.arrows, null);
            d.button.appendTo(c);
            d.arrows.appendTo(c);
            this.widgetWidth = c.width();
            this.widgetHeight = c.height();
            alert("Widget width : " + this.widgetWidth);
            alert("Widget height : " + this.widgetHeight);
            var g = d.button.find(".left").width();
            var h = d.button.find(".right").width();
            if (this.widgetWidth < (g + h)) {
                this.widgetWidth = (g + h)
            }
            d.button.find(".center").width(this.widgetWidth - (g + h));
            d.button.width(this.widgetWidth).height(this.widgetHeight);
            d.arrows.width(this.widgetWidth).height(this.widgetHeight);
            var f = d.arrows.find(".arrowup").width();
            alert("arrowwidth : " + f);
            d.arrows.find(".arrowup").css("left", parseInt((this.widgetWidth - f) / 2, 10) + "px");
            var f = d.arrows.find(".arrowdown").width();
            alert("arrowwidth : " + f);
            d.arrows.find(".arrowdown").css("left", parseInt((this.widgetWidth - f) / 2, 10) + "px");
            d.arrows.find(".arrowright").css("left", this.widgetWidth + "px");
            this.setText(j.text);
            if (sf.ui.reverseText) {
                this.widget().reverseText()
            }
            this.blur();
            this._setArrowType(j.arrowtype);
            this._endLayoutSetting();
            alert(c.html())
        },
        _setArrowType: function (e) {
            alert("[sf.ui.ArrowButton] _setArrowType(" + e + ")");
            var c = this.widget();
            for (var d in this.arrowClasses) {
                c.removeClass(this.arrowClasses[d])
            }
            if (e && this.arrowClasses[e.toLowerCase()]) {
                c.addClass(this.arrowClasses[e.toLowerCase()])
            } else {
                alert("There's no such a type: " + e)
            }
        },
        _focus: function () {
            alert("[sf.ui.ArrowButton] _focus()");
            this.widget().addClass("focused")
        },
        _blur: function () {
            alert("[sf.ui.ArrowButton] _blur()");
            this.widget().removeClass("focused")
        },
        _setOption: function (d, e) {
            alert("[sf.ui.ArrowButton] _setOption(" + d + ", " + e + ")");
            var f = this.options, c = this.view;
            switch (d) {
                case"text":
                    f.text = e;
                    break;
                case"arrow":
                    f.arrow = e;
                    break;
                case"onup":
                    if (e && e instanceof Function) {
                        f.onup = e
                    }
                    break;
                case"ondown":
                    if (e && e instanceof Function) {
                        f.ondown = e
                    }
                    break;
                case"onleft":
                    if (e && e instanceof Function) {
                        f.onleft = e
                    }
                    break;
                case"onright":
                    if (e && e instanceof Function) {
                        f.onright = e
                    }
                    break
            }
        },
        focus: function () {
            alert("[sf.ui.ArrowButton] focus()");
            this._focus()
        },
        blur: function () {
            alert("[sf.ui.ArrowButton] blur()");
            this._blur()
        },
        up: function () {
            alert("[sf.ui.ArrowButton] up()");
            if (this.options.onup && this.options.onup instanceof Function) {
                var c = this.options.onup(this.options.text);
                alert("onup returns " + c);
                if (c !== undefined) {
                    this.setText(c)
                }
            }
        },
        down: function () {
            alert("[sf.ui.ArrowButton] down()");
            if (this.options.ondown && this.options.ondown instanceof Function) {
                var c = this.options.ondown(this.options.text);
                alert("ondown returns " + c);
                if (c !== undefined) {
                    this.setText(c)
                }
            }
        },
        left: function () {
            alert("[sf.ui.ArrowButton] left()");
            if (this.options.onleft && this.options.onleft instanceof Function) {
                var c = this.options.onleft(this.options.text);
                alert("onleft returns " + c);
                if (c !== undefined) {
                    this.setText(c)
                }
            }
        },
        right: function () {
            alert("[sf.ui.ArrowButton] right()");
            if (this.options.onright && this.options.onright instanceof Function) {
                var c = this.options.onright(this.options.text);
                alert("onright returns " + c);
                if (c !== undefined) {
                    this.setText(c)
                }
            }
        },
        setText: function (d) {
            alert("[sf.ui.ArrowButton] setText(" + d + ")");
            var c = this.view;
            this.options.text = d + "";
            c.button.find(".center").html(d + "")
        },
        getText: function () {
            alert("[sf.ui.ArrowButton] getText()");
            alert("returns " + this.options.text);
            return this.options.text
        }
    });
    sf.ui.bridge(a, sf.ui.ArrowButton);
    sf.ui.addSelector(a)
}(jQuery));
(function (b) {
    var a = "sfBackground";
    sf.ui.Background = sf.ui.widgetFactory({
        baseCssClass: "sf-ui-background",
        options: {light: false, column: null, columnShadow: false, columnSize: 500},
        templates: {
            main: b.template(null, '<div class="sf-ui-background">{{if light}}<div class="sf-ui-background-light" style="left:${lightLeft}px;width:${lightWidth}px;"></div>{{/if}}{{if column == "left"}}{{tmpl(subdata) "sf_background_leftColumn"}}{{/if}}{{if column == "right"}}{{tmpl(subdata) "sf_background_rightColumn"}}{{/if}}{{if column == "bottom"}}{{tmpl(subdata) "sf_background_horizontalColumn"}}{{/if}}</div>'),
            leftColumn: b.template("sf_background_leftColumn", '<div class="sf-ui-background-column-vertical-left" style="width:${columnSize}px;"></div>{{if columnShadow}}<div class="sf-ui-background-column-vertical-shadow-right" style="left:${columnSize}px;"></div>{{else}}<div class="sf-ui-background-column-vertical-parting-line-right" style="left:${columnSize}px;"></div>{{/if}}'),
            rightColumn: b.template("sf_background_rightColumn", '<div class="sf-ui-background-column-vertical-right" style="width:${columnSize}px;"></div>{{if columnShadow}}<div class="sf-ui-background-column-vertical-shadow-left" style="right:${columnSize}px;"></div>{{else}}<div class="sf-ui-background-column-vertical-parting-line-left" style="right:${columnSize}px;"></div>{{/if}}'),
            horizontalColumn: b.template("sf_background_horizontalColumn", '<div class="sf-ui-background-column-horizontal" style="height: ${columnSize}px;"></div>{{if columnShadow}}<div class="sf-ui-background-column-horizontal-shadow-bottom " style="bottom:${columnSize}px;"></div>{{else}}<div class="sf-ui-background-column-horizontal-parting-line-bottom" style="bottom:${columnSize}px;"></div>{{/if}}')
        },
        widgetName: a,
        _create: function () {
            this._super();
            this.view.mainTemplate = this.templates.main
        },
        _init: function () {
            this.data = this._getData();
            this._redraw()
        },
        _destroy: function () {
            this.view.mainTemplate.remove()
        },
        _setOption: function (c, d) {
            alert("[sf.Background] _setOption(" + c + ", " + d + ")");
            switch (c) {
                case"column":
                    this.options.column = d;
                    break;
                case"light":
                    this.options.light = d;
                    break;
                case"columnSize":
                    this.options.columnSize = d;
                    break;
                case"columnShadow":
                    this.options.columnShadow = d;
                    break
            }
            this.data = this._getData();
            this._redraw()
        },
        _redraw: function () {
            this.widget().html(b.tmpl(this.templates.main, this.data))
        },
        _getData: function () {
            var c = this, g = this.options;
            var f = 0;
            var d = sf.ui.width;
            var e;
            if (g.column == "left") {
                d = d - g.columnSize;
                f = g.columnSize
            }
            if (g.column == "right") {
                d = d - g.columnSize
            }
            e = {
                column: g.column,
                light: g.light,
                lightWidth: d,
                lightLeft: f,
                subdata: {columnSize: g.columnSize, columnShadow: g.columnShadow}
            };
            return e
        },
        setColumnType: function (c) {
            alert("[sf.ui.TitleBar] setColumn(" + c + ")");
            if (c == null || c == "left" || c == "right" || c == "bottom") {
                this.options.type = c;
                this.data = this._getData();
                this._redraw()
            } else {
                alert("Not supported type : " + column)
            }
        },
        showLight: function (c) {
            alert("[sf.ui.TitleBar] setColumn(" + c + ")");
            if (c || c === undefined) {
                this.options.light = true
            } else {
                this.options.light = false
            }
            this.data = this._getData();
            this._redraw()
        },
        setColumnSize: function (c) {
            alert("[sf.ui.TitleBar] setColumn(" + c + ")");
            this.options.columnSize = parseInt(c, 10);
            this.data = this._getData();
            this._redraw()
        },
        showColumnShadow: function (c) {
            alert("[sf.ui.TitleBar] setColumn(" + c + ")");
            if (c || c === undefined) {
                this.options.columnShadow = true
            } else {
                this.options.columnShadow = false
            }
            this.data = this._getData();
            this._redraw()
        }
    });
    sf.ui.bridge(a, sf.ui.Background);
    sf.ui.addSelector(a)
}(jQuery));
(function (b) {
    var a = "sfTitleBar";
    sf.ui.TitleBar = sf.ui.widgetFactory({
        widgetName: a,
        baseCssClass: "sf-ui-titlebar",
        options: {title: "Title", subtitle: "", icon: null, showarrow: false},
        templates: {main: b.template(null, '<div class="sf-ui-titlebar-bg">{{if arrow}}<div class="sf-ui-titlebar-arrow-left"></div><div class="sf-ui-titlebar-arrow-right"></div>{{/if}}{{if titletext}}<div class="sf-ui-titlebar-title" {{if subtitle}}style="float:left;"{{/if}} >{{if iconURL}}<img src="${iconURL}" ${iconWidthProp} ${iconHeightProp} valign="middle"/>{{/if}}${titletext}</div>{{/if}}{{if subtitle}}<div class="sf-ui-titlebar-subtitle">${subtitle}</div>{{/if}}</div>')},
        _create: function () {
            alert("[sf.ui.TitleBar] _create()");
            this._super()
        },
        _init: function () {
            alert("[sf.ui.TitleBar] _init()");
            this._redraw()
        },
        _setOption: function (c, d) {
            alert("[sf.ui.TitleBar] _setOption(" + c + ", " + d + ")");
            switch (c) {
                case"title":
                    this.options.title = d;
                    break;
                case"subtitle":
                    this.options.subtitle = d;
                    break;
                case"icon":
                    this.options.icon = d;
                    break;
                case"showarrow":
                    this.options.showarrow = d;
                    break
            }
            this._redraw()
        },
        _redraw: function () {
            alert("[sf.ui.TitleBar] _redraw()");
            var c = this.widget(), f = this.options, d = this.templates;
            var e = {
                titletext: f.title || false,
                subtitle: (f.subtitle && f.subtitle != "") ? f.subtitle : null,
                arrow: f.showarrow ? true : false
            };
            if (f.icon && f.icon.URL) {
                e.iconURL = f.icon.URL;
                if (f.icon.width) {
                    e.iconWidthProp = "width=" + parseInt(f.icon.width, 10) + "px"
                }
                if (f.icon.height) {
                    e.iconHeightProp = "height=" + parseInt(f.icon.height, 10) + "px"
                }
            }
            c.empty().append(b.tmpl(d.main, e))
        },
        setTitle: function (c) {
            alert("[sf.ui.TitleBar] setTitle(" + c + ")");
            this.options.title = c;
            this._redraw()
        },
        setSubTitle: function (c) {
            alert("[sf.ui.TitleBar] setSubTitle(" + c + ")");
            this.options.subtitle = c;
            this._redraw()
        },
        setIcon: function (c) {
            alert("[sf.ui.TitleBar] setTitle(" + c + ")");
            if (c && c.URL) {
                this.options.icon = c
            } else {
                this.options.icon = null
            }
            this._redraw()
        },
        showArrow: function (c) {
            alert("[sf.ui.TitleBar] showArrow(" + c + ")");
            if (c || c === undefined) {
                this.options.showarrow = true
            } else {
                this.options.showarrow = false
            }
            this._redraw()
        }
    });
    sf.ui.bridge(a, sf.ui.TitleBar);
    sf.ui.addSelector(a)
}(jQuery));
(function (b) {
    var a = "sfTextList";
    sf.ui.TextList = sf.ui.widgetFactory({
        widgetName: a,
        baseCssClass: "sf-ui-textlist",
        eventNamespace: "sftextlist",
        options: {
            items: [],
            type: "text1",
            index: 0,
            itemsPerPage: 0,
            selectField: "selected",
            disabledField: "disabled",
            loop: true,
            selectable: null,
            selectionPos: "left",
            selectCssClass: "sf-ui-textlist-select",
            disabledCssClass: "sf-ui-textlist-disabled",
            focusCssClass: "sf-ui-textlist-focus"
        },
        templates: {
            checkbox: "<div></div>",
            column_left: {
                height: [58, 78, 116],
                tmpl: '<div class="${bcc}-wrap"><span class="text">${text}</span></div>'
            },
            column_right: {
                height: [58, 78, 116],
                tmpl: '<div class="${bcc}-wrap"><span class="text">${text}</span></div>'
            },
            comment: {
                height: [76, 102, 152],
                thumb: [60, 80, 120],
                tmpl: '<div class="${bcc}-thumb">${shadow}<div class="${bcc}-thumbcrop"><img src="${thumbnail.url}" style="${thumbstyle}"/></div></div><div class="${bcc}-wrap"><span class="text">${text}</span><span class="subtext">${subtext}</span></div>'
            },
            cursor: {size: [4, 6, 8], tmpl: "<div></div>"},
            line: {
                height: [2, 2, 4],
                tmpl: '<div class="${lineClass}" style="height: ${height}px;"><div class="line-left"></div><div class="line-center"></div><div class="line-right"></div></div>'
            },
            list: "<div></div>",
            radio: "<div></div>",
            shadow: {
                size: [30, 40, 60],
                offset: [10, 17, 20],
                tmpl: '<div class="${bcc}-shadow" style="width: ${shadowSize}px; height: ${shadowSize}px; top: -${shadowOffset}px; left: -${shadowOffset}px;"><div class="${bcc}-shadow-lt"></div><div class="${bcc}-shadow-t" style="width: ${innerSize}px;"></div><div class="${bcc}-shadow-rt"></div><div class="${bcc}-shadow-r" style="height: ${innerSize}px;"></div><div class="${bcc}-shadow-rb"></div><div class="${bcc}-shadow-b"style="width: ${innerSize}px;"></div><div class="${bcc}-shadow-lb"></div><div class="${bcc}-shadow-l" style="height: ${innerSize}px;"></div></div>'
            },
            subtitle: {
                height: [28, 38, 58],
                tmpl: '<span class="text">${text}</span><span class="right">${right}</span>'
            },
            text1: {
                height: [58, 78, 116],
                thumb: [48, 64, 96],
                tmpl: '<div class="${bcc}-wrap"><span class="text">${text}</span><span class="right">${right}</span></div>'
            },
            text2: {
                height: [58, 78, 116],
                thumb: [48, 64, 96],
                tmpl: '<div class="${bcc}-wrap"><span class="text">${text}</span><span class="subtext">${subtext}</span><span class="right">${right}</span></div>'
            },
            text3: {
                height: [73, 98, 146],
                thumb: [60, 80, 120],
                tmpl: '<div class="${bcc}-wrap"><span class="text">${text}</span><span class="subtext">${subtext}</span><span class="bottom">${bottom}</span><span class="right">${right}</span></div>'
            },
            thumbnail: {tmpl: '<div class="${bcc}-thumb">${shadow}<div class="${bcc}-thumbcrop"><img src="${thumbnail.url}" style="${thumbstyle}"/></div></div>'},
            video: {
                height: [78, 102, 152],
                thumb: [60, 80, 120],
                tmpl: '<div class="${bcc}-thumb">${shadow}<div class="${bcc}-thumbcrop"><img src="${thumbnail.url}" style="${thumbstyle}"/></div></div><div class="${bcc}-wrap"><span class="text">${text}</span><span class="subtext">${subtext}</span><span class="bottom">${bottom}</span></div>'
            }
        },
        isFocused: false,
        resolution: 0,
        offset: 0,
        calculatedIPP: 0,
        itemHeight: 0,
        doRefresh: false,
        widgetHeight: 0,
        scrollSingle: false,
        start: 0,
        firstVisible: 0,
        end: 0,
        items: [],
        focusTop: 0,
        addItem: function (e, d) {
            alert("[sf.ui.TextList] addItem()");
            var f = this.options, c = f.items.length - 1;
            if (d && !isNaN(d)) {
                d = d < 0 ? 0 : d > c ? c : d;
                f.items.splice(d, 0, e)
            } else {
                f.items.push(e)
            }
            this._refresh();
            return this
        },
        _blur: function () {
            var c = this.view, d = this.options;
            c.cursor.hide();
            c.focus.hide();
            c.items && c.items.removeClass(d.focusCssClass);
            this.isFocused = false
        },
        blur: function () {
            alert("[sf.ui.TextList] blur()");
            this._blur();
            return this
        },
        _calculateIPP: function () {
            var d = this.options, c;
            c = d.items[0].subtitle ? this.templates.subtitle.height[this.resolution] : this.itemHeight;
            if (d.itemsPerPage > 0) {
                this.calculatedIPP = d.itemsPerPage
            } else {
                this.calculatedIPP = Math.ceil(this.widgetHeight / c);
                this.scrollSingle = true
            }
        },
        _changeState: function (f) {
            var j = this.options, g = j.selectable, e = this.view, h = j.items[f][j.selectField], d = [this.baseCssClass, g, j.selectionPos].join("-"), c = b(e.items[f - this.start]).find("." + d);
            h ? c.addClass(j.selectCssClass) : c.removeClass(j.selectCssClass)
        },
        clear: function () {
            alert("[sf.ui.TextList] clear()");
            this._blur();
            this.view.wrap.empty();
            this.options.items = [];
            return this
        },
        _destroy: function () {
            alert("[sf.ui.TextList] _destroy()");
            this.widget().empty()
        },
        _drawCursor: function (d) {
            var c = this.view, e = b(c.items[d]).position().top;
            c.cursor.css({display: "block", top: e + "px"})
        },
        _drawFocus: function () {
            var c = this.view, f = this.options, e = this.focusTop, d = f.index - this.start;
            c.items.removeClass(f.focusCssClass);
            b(c.items[d]).addClass(f.focusCssClass);
            c.focus.css({display: "block", top: e + "px"})
        },
        _drawItems: function () {
            var d = this.view, f = [], c, e;
            for (e = 0, c = this.items.length; e < c; e++) {
                f[e] = this._makeItem(this.items[e])
            }
            d.wrap.html(f.join(""));
            d.items = d.wrap.find("." + this.baseCssClass + "-item")
        },
        _drawSelect: function (f) {
            var g = this.options, d = this.templates, e = g.selectable, c = [this.baseCssClass, e, g.selectionPos].join("-");
            return '<div class="' + c + (f[g.selectField] ? " " + g.selectCssClass : "") + (f[g.disabledField] ? " " + g.disabledCssClass : "") + '">' + d[e] + "</div>"
        },
        _focus: function (e) {
            var j = this.options, d = this.calculatedIPP, g = this.firstVisible, c = j.items.length - 1, h, f;
            e = this._validateIndex(typeof e === "undefined" ? this.options.index : e);
            this.isFocused = true;
            if (this.scrollSingle) {
                if (e > g + d - 1) {
                    if (e === c && (j.index === 0 || j.index === 1)) {
                        this.end = c + 1;
                        this.start = Math.max(0, this.end - 2 - 2 * d);
                        this.firstVisible = this.end - d;
                        this._setItems();
                        this._drawItems()
                    } else {
                        this._scrollDown()
                    }
                } else {
                    if (e < g) {
                        if ((e === 0 || e === 1) && j.index === c) {
                            this.start = 0;
                            this.firstVisible = 0;
                            this.end = this.start + 2 * d;
                            this._setItems();
                            this._drawItems()
                        } else {
                            this._scrollUp()
                        }
                    }
                }
            } else {
                f = Math.floor(e / d);
                h = Math.floor(j.index / d);
                if (f !== h) {
                    this.start = f * d;
                    this.end = this.start + d;
                    this._setItems();
                    this._drawItems()
                }
            }
            j.index = e;
            this._getTop();
            this._setOffset();
            this._drawFocus();
            this._trigger("changedItem")
        },
        focus: function (c) {
            alert("[sf.ui.TextList] focus()");
            this._focus(c);
            return this
        },
        getIndex: function () {
            alert("[sf.ui.TextList] getIndex()");
            return this.isFocused ? this.options.index : null
        },
        getItem: function (c) {
            alert("[sf.ui.TextList] getItem()");
            var d = this.options;
            c = typeof c !== "undefined" ? c : d.index;
            return d.items[c]
        },
        getSelected: function () {
            alert("[sf.ui.TextList] getSelected()");
            var h = this.options, e = h.selectable, g = [], c = h.items.length, f, d;
            if (e) {
                for (d = 0; d < c; d++) {
                    f = h.items[d];
                    if (f[h.selectField]) {
                        if (e === "checkbox") {
                            g.push(f)
                        } else {
                            if (e === "radio") {
                                return f
                            }
                        }
                    }
                }
                return g
            }
        },
        getSelectedIds: function () {
            alert("[sf.ui.TextList] getSelectedIds()");
            var g = this.options, e = g.selectable, f = [], c = g.items.length, d;
            if (!e) {
                return
            }
            for (d = 0; d < c; d++) {
                if (g.items[d][g.selectField]) {
                    if (e === "checkbox") {
                        f.push(d)
                    } else {
                        if (e === "radio") {
                            return d
                        }
                    }
                }
            }
            return f
        },
        _getTop: function () {
            var g = this.resolution, e = this.templates, c = this.options.index - this.start, j = e.subtitle.height[g], f = e.line.height[g], h = 0, d;
            for (d = 0; d < c; d++) {
                h += (this.items[d].subtitle) ? j : this.itemHeight;
                h += f
            }
            this.focusTop = h
        },
        _init: function () {
            alert("[sf.ui.TextList] _init()");
            var f = this.options, d = this.view, c = this.widget(), e = this.templates;
            c.empty();
            if (!f.items || f.items.length < 1) {
                f.items = []
            }
            if (typeof e[f.type] === "undefined") {
                f.type = "text1"
            }
            if (!f.selectable) {
                f.selectable = null
            }
            f.selectionPos = f.selectionPos === "right" ? "right" : "left";
            this._pickResolution();
            this.itemHeight = e[f.type].height[this.resolution];
            this.widgetHeight = c.height();
            d.list = b(e.list).addClass(this.baseCssClass + "-list " + this.baseCssClass + "-list-" + f.type).width(c.width()).appendTo(c);
            d.focus = b("<img />").attr("src", sf.ui.images + "/ui.textlist/list_highlighted.png").addClass(f.focusCssClass + "-bg").width(c.width()).height(this.itemHeight).hide();
            d.cursor = b(e.cursor.tmpl).addClass(this.baseCssClass + "-cursor").height(this.itemHeight - e.cursor.size[this.resolution]).width(c.width() - e.cursor.size[this.resolution]).hide();
            d.wrap = b("<div></div>").addClass(this.baseCssClass + "-listbox").width(c.width());
            d.list.append(d.focus, d.cursor, d.wrap);
            d.shadow = this._tmpl(e.shadow.tmpl, b.extend({bcc: this.baseCssClass}, this._shadowSize()));
            d.line = this._tmpl(e.line.tmpl, {
                lineClass: this.baseCssClass + "-line",
                height: e.line.height[this.resolution]
            });
            if (f.items.length) {
                this._calculateIPP();
                this.end = this.start + this.calculatedIPP;
                if (this.scrollSingle) {
                    this.end += this.calculatedIPP
                }
                this._setItems();
                this._drawItems()
            } else {
                d.wrap.html("ERROR: No items")
            }
            alert(c.html())
        },
        _isSubtitle: function (c) {
            var d = this.options;
            c = (c > -1) ? c : d.index;
            return d.items[c].subtitle
        },
        _makeItem: function (l) {
            var c = this.options, k = this.view, m = this.templates, e = this.baseCssClass, g = m[c.type].tmpl, h = m.subtitle.tmpl, j, f, d = "";
            f = c.type === "column_left" ? e + "-column-left" : c.type === "column_right" ? e + "-column-right" : "";
            if (typeof l !== "object") {
                return
            }
            l = b.extend({bcc: e}, l);
            if (l.subtitle) {
                d = this._tmpl('<div class="' + e + "-item " + e + '-subtitle" style="height: ' + m.subtitle.height[this.resolution] + 'px;">' + h + "</div>", l)
            } else {
                j = "";
                if (c.selectable) {
                    j += this._drawSelect(l)
                }
                if (l.thumbnail) {
                    l.thumbstyle = this._thumbSize(l.thumbnail);
                    j += "${tmpl.thumbnail}"
                }
                j += g;
                d = this._tmpl('<div class="' + e + "-item " + f + '" style="height: ' + this.itemHeight + 'px;">' + j + "</div>", l.thumbnail ? b.extend({shadow: k.shadow}, l) : l)
            }
            d += k.line;
            return d
        },
        next: function () {
            alert("[sf.ui.TextList] next()");
            this._focus(this.options.index + this.isFocused);
            this._trigger("next");
            return this
        },
        _pickResolution: function () {
            var c = sf.ui.height;
            this.resolution = c === 540 ? 0 : c === 720 ? 1 : c === 1080 ? 2 : 0
        },
        prev: function () {
            alert("[sf.ui.TextList] prev()");
            this._focus(this.options.index - this.isFocused);
            this._trigger("prev");
            return this
        },
        _refresh: function () {
            this._setItems();
            this._drawItems();
            this._getTop();
            this._setOffset();
            this.isFocused && this._drawFocus()
        },
        refresh: function () {
            alert("[sf.ui.TextList] refresh()");
            this._refresh();
            return this
        },
        removeItem: function (c) {
            alert("[sf.ui.TextList] removeItem()");
            var d = this.options;
            c = typeof c !== "undefined" ? c : d.index;
            if (!isNaN(c) && c > -1 && c < d.items.length) {
                d.items.splice(c, 1)
            }
            this._refresh();
            return this
        },
        _repl: function (c, e) {
            var d = c.split(".");
            return typeof e[d[0]] !== "undefined" ? typeof e[d[0]] === "object" ? typeof e[d[0]][d[1]] !== "undefined" ? e[d[0]][d[1]] : "" : e[d[0]] : d[0] === "tmpl" && typeof this.templates[d[1]] !== "undefined" ? this._tmpl(this.templates[d[1]].tmpl, e) : ""
        },
        _scrollDown: function () {
            var h = this.options, d = this.view, f = h.items[this.end], c = this.calculatedIPP, e = this.baseCssClass, g = this.firstVisible;
            if (f) {
                d.wrap.append(this._makeItem(f));
                this.items.push(f);
                this.end += 1
            }
            if (this.start < g - c) {
                this.items.shift();
                b(d.items[0]).remove();
                d.wrap.find("." + e + "-line:first-child").remove();
                this.start += 1
            }
            this.firstVisible += 1;
            d.items = d.wrap.find("." + e + "-item")
        },
        _scrollUp: function () {
            var h = this.options, d = this.view, f = h.items[this.start - 1], c = this.calculatedIPP, e = this.baseCssClass, g = this.firstVisible;
            if (f) {
                d.wrap.prepend(this._makeItem(f));
                this.items.unshift(f);
                this.start -= 1
            }
            if (this.end > g + 2 * c) {
                this.items.pop();
                b(d.items[d.items.length - 1]).remove();
                d.wrap.find("." + e + "-line:last-child").remove();
                this.end -= 1
            }
            this.firstVisible -= 1;
            d.items = d.wrap.find("." + e + "-item")
        },
        selectAll: function () {
            alert("[sf.ui.TextList] selectAll()");
            var f = this.options, c = f.items.length, e, d;
            if (f.selectable === "checkbox") {
                for (d = 0; d < c; d++) {
                    e = f.items[d];
                    if (!e[f.disabledField] && !e[f.selectField]) {
                        e[f.selectField] = true;
                        this._changeState(d)
                    }
                }
            }
            return this
        },
        _selectItem: function (c) {
            var f = this.options, d = f.selectable, e;
            c = typeof c !== "undefined" ? c : f.index;
            e = f.items[c];
            if (e && !e[f.disabledField] && !e[f.selectField] && d) {
                d === "radio" && this._unselectAll();
                e[f.selectField] = true;
                this._changeState(c)
            }
        },
        selectItem: function (c) {
            alert("[sf.ui.TextList] selectItem()");
            this._selectItem(c);
            return this
        },
        _setItems: function () {
            this.items = this.options.items.slice(this.start, this.end)
        },
        _setOffset: function () {
            var g = this.focusTop, j = this.options, e = this.templates.line.height[this.resolution], d = this.widgetHeight, h = this.itemHeight, f = this.offset, c = this.view;
            if (g + h >= d && (d - (g + h + e) <= this.offset)) {
                this.offset = d - (g + h)
            } else {
                if (g < -this.offset && !(j.index === 1 && this._isSubtitle(0))) {
                    this.offset = -g
                } else {
                    if (j.index === 1 && this._isSubtitle(0)) {
                        this.offset = 0
                    }
                }
            }
            if (f !== this.offset) {
                c.list.css("top", this.offset + "px")
            }
        },
        _shadowSize: function () {
            var h = this.options, e = this.templates, g = this.resolution, d = e[h.type].thumb ? e[h.type].thumb[g] : 0, c = g === 2 ? 2 : 1, f = e.shadow;
            return {
                shadowSize: d + 2 * (f.size[g] - f.offset[g]) - 2 * c,
                innerSize: d - 2 * f.offset[g] - 2 * c,
                shadowOffset: f.size[g] - f.offset[g],
                bcc: this.baseCssClass
            }
        },
        _thumbSize: function (c) {
            var e = this.options, l = this.templates, g = l[e.type].thumb ? l[e.type].thumb[this.resolution] : 0, d, k, j = 0, f = 0, h;
            if (c && c.width && c.height) {
                h = c.width / c.height;
                if (h < 1) {
                    d = g;
                    k = Math.round(d / h);
                    j = Math.round((g - k) / 2)
                } else {
                    k = g;
                    d = Math.round(k * h);
                    f = Math.round((g - d) / 2)
                }
                return ["width: ", d, "px; height: ", k, "px;", "top: ", j, "px; left: ", f, "px;"].join("")
            } else {
                return this.resolution === 2 ? "top: -2px; left: -2px;" : "top: -1px; left: -1px;"
            }
        },
        _tmpl: function (c, e) {
            var d = this;
            return typeof c === "string" && typeof e === "object" ? c.replace(/\$\{([a-zA-Z0-9_\.]*)\}/g, function (f, g) {
                return d._repl(g, e)
            }) : ""
        },
        _toggleItem: function (c) {
            var e = this.options, d;
            c = typeof c !== "undefined" ? c : e.index;
            d = e.items[c];
            if (e.selectable === "checkbox" && d && !d[e.disabledField]) {
                d[e.selectField] = !d[e.selectField];
                this._changeState(c)
            }
        },
        toggleItem: function (c) {
            alert("[sf.ui.TextList] toggleItem()");
            var e = this.options, d = e.selectable;
            if (d === "checkbox") {
                this._toggleItem(c)
            } else {
                if (d === "radio") {
                    this._selectItem(c)
                }
            }
            return this
        },
        _unselectAll: function () {
            var g = this.options, d = this.view, c = g.items.length, f, e;
            for (e = 0; e < c; e++) {
                f = g.items[e];
                if (!f[g.disabledField] && f[g.selectField]) {
                    f[g.selectField] = false
                }
            }
            d.items.children("div:not('." + g.disabledCssClass + "')").removeClass(g.selectCssClass)
        },
        unselectAll: function () {
            alert("[sf.ui.TextList] unselectAll()");
            this._unselectAll();
            return this
        },
        unselectItem: function (c) {
            alert("[sf.ui.TextList] unselectItem()");
            var e = this.options, d;
            c = typeof c !== "undefined" ? c : e.index;
            d = e.items[c];
            if (e.selectable === "checkbox" && d && !d[e.disabledField] && d[e.selectField]) {
                d[e.selectField] = false;
                this._changeState(c)
            }
            return this
        },
        _validateIndex: function (d) {
            var e = this.options, c = e.items.length - 1;
            d = e.loop ? (d < 0 ? c : d > c ? 0 : d) : (d < 0 ? 0 : d > c ? c : d);
            if (e.items[d].subtitle) {
                if ((e.index === c && d === 0) || d >= e.index) {
                    return this._validateIndex(d + 1)
                } else {
                    return this._validateIndex(d - 1)
                }
            }
            return d
        }
    });
    sf.ui.bridge(a, sf.ui.TextList);
    sf.ui.addSelector(a)
}(jQuery));
(function (b) {
    var a = "sfWizard";
    sf.ui.Wizard = sf.ui.widgetFactory({
        widgetName: a,
        baseCssClass: "sf-ui-wizard",
        eventNamespace: "sfwizard",
        isFocused: false,
        width: null,
        options: {stepcount: 0, step: 0},
        templates: {step: '<div class="step"><div class="left"></div><div class="right"></div><div class="center"></div></div>'},
        _init: function () {
            alert("[sf.ui.Wizard] _init()");
            var h = this.options, d = this.view, c = this.widget(), f = this.templates;
            this._super();
            if (h.stepcount < 1) {
                alert("[sf.ui.Wizard] ERROR: no scenes defined for Wizard. Exiting.");
                return false
            }
            for (var e = 0; e < h.stepcount; e++) {
                b.tmpl(f.step, null).appendTo(c);
                alert("append step")
            }
            var g = c.width();
            c.find(".step").width(parseInt(g, 10) / h.stepcount);
            this._renderSteps()
        },
        _destroy: function () {
            alert("[sf.ui.Wizard] _destroy()");
            this.widget().empty()
        },
        _renderSteps: function () {
            var f = this.options, c = this.view, e = this.templates;
            for (var d = 0; d < f.stepcount; d++) {
                if (d < f.step) {
                    this._setState(d, "normal")
                } else {
                    if (d == f.step) {
                        this._setState(d, "focused")
                    } else {
                        if (d > f.step) {
                            this._setState(d, "dim")
                        }
                    }
                }
            }
        },
        _setState: function (d, e) {
            var c = this.widget();
            e = e.toLowerCase();
            c.find(".step").eq(d).removeClass("focused").removeClass("dim");
            if (e == "focused" || e == "dim") {
                c.find(".step").eq(d).addClass(e)
            }
        },
        _nextStep: function () {
            if (this.options.step < this.options.stepcount - 1) {
                this.move(this.options.step + 1)
            }
        },
        _previousStep: function () {
            if (this.options.step > 0) {
                this.move(this.options.step - 1)
            }
        },
        move: function (c) {
            if (c >= 0 && c < this.options.stepcount) {
                this.options.step = c;
                this._renderSteps()
            }
        },
        next: function () {
            this._nextStep()
        },
        prev: function () {
            this._previousStep()
        },
        show: function () {
            this.widget().show()
        },
        hide: function () {
            this.widget().hide()
        },
        getStep: function () {
            return this.options.step
        }
    });
    sf.ui.bridge(a, sf.ui.Wizard);
    sf.ui.addSelector(a)
}(jQuery));
(function (f) {
    var g = "sfCoverFlow";
    var h = 0;
    var d = 1;
    sf.ui.CoverFlow = sf.ui.widgetFactory({
        widgetName: g,
        baseCssClass: "sf-ui-coverflow",
        templates: {
            background: '<div class="sf-ui-coverflow-bg"></div>',
            thumblist: '<div class="sf-ui-coverflow-thumblist" style="left:${left}px"></div>',
            thumb: '<div class="sf-ui-coverflow-thumb" style="margin-right: ${margin}px;"><img src="${url}" width="${width}px" height="${height}px"></div>'
        },
        options: {
            aniduration: 500,
            dimbg: true,
            reflection: true,
            items: [],
            thumbnails: {margin: a(30, 1080), scale: 0.6, valign: "bottom", vmargin: a(0, 1080)},
            selected: {index: 0, align: "left", margin: a(120, 1080), vmargin: a(60, 1080)},
            threed: {thumbsrotate: 30, thumbsdistancerate: 0.7, thumbsdepthstep: a(30, 1080)}
        },
        _create: function () {
            alert("[sf.ui.CoverFlow] _create()");
            var n = this.options, l = this.view, k = this.widget();
            this._super();
            var m = this;
            k.bind("mousewheel", function (o) {
                if (o.wheelDelta > 0) {
                    m.prev()
                } else {
                    if (o.wheelDelta < 0) {
                        m.next()
                    }
                }
            })
        },
        _areas: {},
        _init: function () {
            alert("[sf.ui.CoverFlow] _init()");
            var q = this.options, l = this.view, k = this.widget();
            this._beginLayoutSetting();
            this.widget().empty();
            this.view.bgdim = f.tmpl(this.templates.background, {}).appendTo(this.widget());
            if (q.selected) {
                if (!q.selected.align || (q.selected.align.toLowerCase() != "left" && q.selected.align.toLowerCase() != "center" && q.selected.align.toLowerCase() != "right")) {
                    q.selected.align = "left"
                }
                q.selected.align = q.selected.align.toLowerCase();
                if (typeof q.selected.margin != "number") {
                    q.selected.margin = a(120, 1080)
                }
                if (typeof q.selected.vmargin != "number") {
                    q.selected.vmargin = a(60, 1080)
                }
            }
            if (q.thumbnails) {
                if (!q.thumbnails.valign || (q.thumbnails.valign.toLowerCase() != "top" && q.thumbnails.valign.toLowerCase() != "middle" && q.thumbnails.valign.toLowerCase() != "bottom")) {
                    q.thumbnails.valign = "middle"
                }
                q.thumbnails.valign = q.thumbnails.valign.toLowerCase();
                if (!q.thumbnails.scale) {
                    q.thumbnails.scale = 0.6
                }
            }
            if (q.dimbg) {
                l.bgdim.show()
            } else {
                l.bgdim.hide()
            }
            if (q.reflection) {
                k.addClass("reflection")
            } else {
                k.removeClass("reflection")
            }
            this._areas.selected = {};
            this._areas.selected.top = q.selected.vmargin;
            this._areas.selected.left = 0;
            if (q.selected.align == "left") {
                this._areas.selected.left = q.selected.margin
            } else {
                if (q.selected.align == "right") {
                    this._areas.selected.right = k.width() - q.selected.margin
                } else {
                    if (q.selected.align == "center") {
                        this._areas.selected.center = parseInt(k.width() / 2, 10)
                    }
                }
            }
            this._areas.selected.height = k.height() - (this._areas.selected.top * 2);
            this._areas.thumbs = {};
            this._areas.thumbs.height = this._areas.selected.height * q.thumbnails.scale;
            this._areas.thumbs.top = this._areas.selected.top;
            if (q.thumbnails.valign == "top") {
                this._areas.thumbs.top = this._areas.selected.top + q.thumbnails.vmargin
            } else {
                if (q.thumbnails.valign == "bottom") {
                    this._areas.thumbs.top = this._areas.selected.top + this._areas.selected.height - this._areas.thumbs.height - q.thumbnails.vmargin
                } else {
                    if (q.thumbnails.valign == "middle") {
                        this._areas.thumbs.top = this._areas.selected.top + parseInt((this._areas.selected.height - this._areas.thumbs.height) / 2, 10)
                    }
                }
            }
            this._aThumbWidth = [];
            this._aThumbLeft = [];
            var p = 0;
            for (var m = 0; m < q.items.length; m++) {
                var n = parseInt(this._areas.thumbs.height / q.items[m].image.height * q.items[m].image.width, 10) + q.thumbnails.margin;
                this._aThumbWidth.push(n);
                this._aThumbLeft.push(p);
                p += n
            }
            this._setItems();
            this._createSelected();
            if (typeof q.aniduration != "number") {
                q.aniduration = 500
            }
            this._setAnimateDuration(q.aniduration);
            this._calcSelectedArea(q.selected.index);
            this._setIndex(q.selected.index);
            this._endLayoutSetting()
        },
        _destroy: function () {
            alert("[sf.ui.CoverFlow] _destroy()")
        },
        _setOption: function (k, l) {
            alert("[sf.ui.CoverFlow] _setOption(" + k + ", " + l + ")");
            switch (k) {
                case"selected":
                    this.options.selected = f.extend(this.options.selected, l);
                    break;
                case"thumbnails":
                    this.options.thumbnails = f.extend(this.options.thumbnails, l);
                    break
            }
            this._init();
            return this
        },
        _setItems: function () {
            alert("[sf.ui.Coverflow] _setItems()");
            var k = this.widget(), p = this.templates, m = this.view, q = this.options;
            k.find(".sf-ui-coverflow-thumblist").remove();
            m.thumblist = f.tmpl(p.thumblist, {left: this._areas.selected.left});
            k.append(m.thumblist);
            m.thumblist.css({top: this._areas.thumbs.top + "px", height: this._areas.thumbs.height + "px"});
            for (var n = 0; n < q.items.length; n++) {
                var l = f.tmpl(p.thumb, {
                    url: q.items[n].image.url,
                    width: this._aThumbWidth[n] - q.thumbnails.margin,
                    height: this._areas.thumbs.height,
                    margin: q.thumbnails.margin
                });
                m.thumblist.append(l)
            }
        },
        _calcSelectedArea: function (k) {
            var l = this.options.items[k].image;
            this._areas.selected.width = parseInt((this._areas.selected.height / l.height) * l.width, 10)
        },
        _setIndex: function (l) {
            alert("[sf.ui.Coverflow] _setIndex(" + l + ")");
            var k = this.view, n = this.options;
            k.thumblist.find(".sf-ui-coverflow-thumb").css({
                "margin-left": "0px",
                "margin-right": n.thumbnails.margin + "px"
            }).removeClass("selected");
            this._setSelected(n.items[l].image.url, n.items[l].image.width, n.items[l].image.height);
            if (this._areas.selected.left) {
                k.thumblist.css({left: (this._areas.selected.left - this._aThumbLeft[l]) + "px"})
            } else {
                if (this._areas.selected.right) {
                    k.thumblist.css({left: (this._areas.selected.right - this._areas.selected.width - this._aThumbLeft[l]) + "px"})
                } else {
                    if (this._areas.selected.center) {
                        k.thumblist.css({left: (parseInt(this._areas.selected.center - this._areas.selected.width / 2, 10) - this._aThumbLeft[l]) + "px"})
                    }
                }
            }
            var m = parseInt((this._areas.selected.width - (this._aThumbWidth[l] - n.thumbnails.margin)) / 2, 10);
            k.thumblist.find(".sf-ui-coverflow-thumb").eq(l).css({
                "margin-left": m + "px",
                "margin-right": (m + n.thumbnails.margin) + "px"
            }).addClass("selected")
        },
        _selectedType: 0,
        _selected: null,
        _createSelected: function () {
            alert("[sf.ui.CoverFlow] _createSelected()");
            var k = this.widget(), p = this.options, l = this.view, m = this.templates;
            var n = (sf.env && sf.env.getCSS3Supported) ? sf.env.getCSS3Supported() : null;
            this._selectedType = (n && n.boxShadow) ? d : h;
            if (this._selectedType == h) {
                this._selected = new e(this)
            } else {
                if (this._selectedType == d) {
                    this._selected = new c(this)
                }
            }
            k.find(".sf-ui-coverflow-selected").remove();
            this._selected.create()
        },
        _setSelected: function (l, n, k, m) {
            alert("[sf.ui.CoverFlow] _setSelected(" + l + ", " + n + ", " + k + ")");
            this._selected.draw(l, this._areas.selected.width, this._areas.selected.height);
            if (this._areas.selected.left) {
                this._selected.setPosition(this._areas.selected.left, this._areas.selected.top, m)
            } else {
                if (this._areas.selected.right) {
                    this._selected.setPosition(this._areas.selected.right - this._areas.selected.width, this._areas.selected.top, m)
                } else {
                    if (this._areas.selected.center) {
                        this._selected.setPosition(parseInt(this._areas.selected.center - this._areas.selected.width / 2, 10), this._areas.selected.top, m)
                    }
                }
            }
        },
        _setFocus: function (k) {
            if (k || k === undefined) {
                this.widget().addClass("focused")
            } else {
                this.widget().removeClass("focused")
            }
        },
        _setAnimateDuration: function (k) {
            alert("[sf.ui.CoverFlow] _setAnimateDuration(" + k + ")");
            this.widget().find(".sf-ui-coverflow-thumblist").css("-webkit-transition-duration", k + "ms");
            this.widget().find(".sf-ui-coverflow-thumb").css("-webkit-transition-duration", k + "ms");
            this.widget().find(".sf-ui-coverflow-thumb img").css("-webkit-transition-duration", k + "ms")
        },
        focus: function () {
            this._setFocus(true)
        },
        blur: function () {
            this._setFocus(false)
        },
        next: function () {
            alert("[sf.ui.CoverFlow] next()");
            if (this.options.items && this.options.selected.index < this.options.items.length - 1) {
                this.options.selected.index++;
                this._calcSelectedArea(this.options.selected.index);
                this._setIndex(this.options.selected.index)
            }
        },
        prev: function () {
            alert("[sf.ui.CoverFlow] prev()");
            if (this.options.items && this.options.selected.index > 0) {
                this.options.selected.index--;
                this._calcSelectedArea(this.options.selected.index);
                this._setIndex(this.options.selected.index)
            }
        },
        select: function (k) {
            alert("[sf.ui.CoverFlow] select(" + k + ")");
            if (this.options.items && 0 <= k && k < this.options.items.length) {
                this.options.selected.index = k;
                this._calcSelectedArea(this.options.selected.index);
                this._setIndex(this.options.selected.index)
            }
        }
    });
    sf.ui.CoverFlow_3D = sf.ui.widgetFactory(sf.ui.CoverFlow, {
        widgetName: g, _init: function () {
            var k = this.widget();
            k.addClass("threed");
            this._super();
            k.css({"-webkit-perspective": "1000"})
        }, _setItems: function () {
            alert("[sf.ui.Coverflow] _setItems()");
            var k = this.widget(), p = this.templates, m = this.view, q = this.options;
            this._aSelectedWidth = [];
            for (var n = 0; n < q.items.length; n++) {
                this._aSelectedWidth.push(parseInt(this._areas.selected.height / q.items[n].image.height * q.items[n].image.width, 10));
                var l = f.tmpl(p.thumb, {
                    url: q.items[n].image.url,
                    width: this._aSelectedWidth[n],
                    height: this._areas.selected.height
                });
                k.append(l)
            }
        }, _createSelected: function () {
            this._super();
            this._selected.setImageVisibility(false)
        }, _setIndex: function (n) {
            alert("[sf.ui.coverflow_3D] _setIndex(" + n + ")");
            var t = this.widget(), u = this.view, k = this.options;
            var l = k.items[n].image;
            var p = t.find(".sf-ui-coverflow-thumb");
            for (var m = 0; m < k.items.length; m++) {
                var s = m - n;
                var x = (s < 0) ? k.items.length + s : (k.items.length - s);
                p.eq(m).css({"-webkit-transform": this._getThumbTransform(s, m), "z-index": x})
            }
            var r = 0;
            if (this._areas.selected.left) {
                r = parseInt((this._areas.selected.left + (this._areas.selected.width / 2)) / t.width() * 100)
            } else {
                if (this._areas.selected.right) {
                    r = parseInt((this._areas.selected.right - (this._areas.selected.width / 2)) / t.width() * 100)
                } else {
                    if (this._areas.selected.center) {
                        r = parseInt((this._areas.selected.center) / t.width() * 100)
                    }
                }
            }
            var q = parseInt((this._areas.selected.top + (this._areas.selected.height / 2)) / t.height() * 100);
            t.css({"-webkit-perspective-origin": r + "% " + q + "%"});
            this._setSelected("", k.items[n].image.width, k.items[n].image.height, k.items.length)
        }, _getThumbTransform: function (n, p, t) {
            var l = this.options.thumbnails.margin;
            var m = this.options.thumbnails.scale;
            var s = this.options.threed.thumbsrotate;
            var r = parseInt(this._areas.thumbs.top - (this._areas.selected.height * (1 - m) / 2), 10);
            var q = parseInt((this._aSelectedWidth[p]) * (1 - m) / 2, 10);
            var w = [];
            var o = 0;
            if (this._areas.selected.left) {
                o = this._areas.selected.left
            } else {
                if (this._areas.selected.right) {
                    o = this._areas.selected.right - this._areas.selected.width
                } else {
                    if (this._areas.selected.center) {
                        o = parseInt(this._areas.selected.center - this._areas.selected.width / 2, 10)
                    }
                }
            }
            var u = this.options.threed.thumbsdistancerate;
            var v = this.options.threed.thumbsdepthstep;
            if (n == 0) {
                w.push("perspective(0)");
                w.push("translate3d(" + o + "px, " + this._areas.selected.top + "px, 0px)");
                w.push("scale3d(1,1,1)");
                if (this.widget().hasClass("focused")) {
                    w.push("rotateY(0deg)")
                } else {
                    if (this._areas.selected.left) {
                        w.push("rotateY(" + parseInt(s / 2, 10) + "deg)")
                    } else {
                        if (this._areas.selected.right) {
                            w.push("rotateY(-" + parseInt(s / 2, 10) + "deg)")
                        } else {
                            if (this._areas.selected.center) {
                                w.push("rotateY(0deg)")
                            }
                        }
                    }
                }
            } else {
                if (n < 0) {
                    var k = o - (this._aThumbLeft[p - n] - this._aThumbLeft[p + 1] + l) * u - (this._aThumbWidth[p] - l);
                    w.push("perspective(0)");
                    w.push("translate3d(" + (k - q) + "px, " + r + "px, " + (n * v) + "px)");
                    w.push("scale3d(" + m + "," + m + "," + m + ")");
                    w.push("rotateY(" + s + "deg)")
                } else {
                    var k = o + this._areas.selected.width + (this._aThumbLeft[p] - this._aThumbLeft[p - n + 1] + l) * u;
                    w.push("perspective(0)");
                    w.push("translate3d(" + (k - q) + "px, " + r + "px, " + (-n * v) + "px)");
                    w.push("scale3d(" + m + "," + m + "," + m + ")");
                    w.push("rotateY(-" + s + "deg)")
                }
            }
            return w.join(" ")
        }, _setFocus: function () {
            var k = this.widget(), l = this.options;
            this._super.apply(this, arguments);
            k.find(".sf-ui-coverflow-thumb").eq(l.selected.index).css({"-webkit-transform": this._getThumbTransform(0, l.selected.index)})
        }
    });
    var b = Class.extend({
        parent: null, widget: null, template: "", init: function (k) {
            alert("Selected.init(" + k + ")");
            this.parent = k
        }, setImageVisibility: function (k) {
            this.widget.find("img").css("visibility", k ? "visible" : "hidden")
        }
    });
    var e = b.extend({
        parent: null,
        widget: null,
        _selectedHMargin: 0,
        _selectedVMargin: 0,
        template: '<div class="sf-ui-coverflow-selected"><img src="${url}"><div class="highlight"><div class="top"><div class="left"></div><div class="center"></div><div class="right"></div></div><div class="middle"><div class="left"></div><div class="center"></div><div class="right"></div></div><div class="bottom"><div class="left"></div><div class="center"></div><div class="right"></div></div></div></div>',
        create: function () {
            var l = this.parent.widget();
            this.widget = f.tmpl(this.template, null);
            l.append(this.widget);
            var n = parseInt(this.widget.find(".highlight .top").outerHeight(true), 10);
            var k = parseInt(this.widget.find(".highlight .bottom").outerHeight(true), 10);
            this._selectedVMargin = n + k;
            var o = parseInt(this.widget.find(".highlight .top .left").outerWidth(true), 10);
            var m = parseInt(this.widget.find(".highlight .top .right").outerWidth(true), 10);
            this._selectedHMargin = o + m
        },
        setPosition: function (m, l, k) {
            this.widget.css({left: m + "px", top: l + "px", "z-index": k})
        },
        draw: function (l, m, k) {
            this.widget.find(".highlight").width(m).height(k);
            this.widget.find(".highlight .center").width(m - this._selectedHMargin);
            this.widget.find(".highlight .middle").height(k - this._selectedVMargin);
            this.widget.find("img").css({width: m + "px", height: k + "px",}).attr({src: l})
        }
    });
    var c = b.extend({
        parent: null,
        widget: null,
        template: '<div class="sf-ui-coverflow-selected css3"><img src="${url}"></div>',
        create: function () {
            var k = this.parent.widget();
            this.widget = f.tmpl(this.template, null);
            k.append(this.widget)
        },
        setPosition: function (m, l, k) {
            this.widget.css({left: m + "px", top: l + "px", "z-index": k})
        },
        draw: function (l, m, k) {
            this.widget.find("img").css({width: m + "px", height: k + "px",}).attr({src: l})
        }
    });
    var j = (sf.env && sf.env.getCSS3Supported) ? sf.env.getCSS3Supported() : null;
    if (j && j.transform3d) {
        sf.ui.bridge(g, sf.ui.CoverFlow_3D)
    } else {
        sf.ui.bridge(g, sf.ui.CoverFlow)
    }
    sf.ui.addSelector(g);
    function a(l, k) {
        if (k == sf.ui.height) {
            return l
        } else {
            return parseInt(l * (sf.ui.height / k), 10)
        }
    }
}(jQuery));
sf.core.init();
sf.ui.init();