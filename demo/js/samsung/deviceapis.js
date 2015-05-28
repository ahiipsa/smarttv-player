var deviceapis = window.deviceapis || {};
alert("[deviceapis.js] loaded");
deviceapis.platform = "Samsung SmartTV";
deviceapis.ver = "1.014";
alert("\t[deviceapis.js] Version : " + deviceapis.ver);
var deviceapis_FeatureArray = new Array();
var deviceapis_ParamArray = new Array();
deviceapis_ParamArray.push(null, null);
deviceapis_FeatureArray.push(new Feature("http://samsungapps.com/api/deviceapis", false, deviceapis_ParamArray));
deviceapis_FeatureArray.push(new Feature("http://samsungapps.com/api/network", false, deviceapis_ParamArray));
deviceapis_FeatureArray.push(new Feature("http://samsungapps.com/api/filesystem", false, deviceapis_ParamArray));
deviceapis_FeatureArray.push(new Feature("http://samsungapps.com/api/displaycontrol", false, deviceapis_ParamArray));
deviceapis_FeatureArray.push(new Feature("http://samsungapps.com/api/audiocontrol", false, deviceapis_ParamArray));
deviceapis_FeatureArray.push(new Feature("http://samsungapps.com/api/tv/info", false, deviceapis_ParamArray));
deviceapis_FeatureArray.push(new Feature("http://samsungapps.com/api/tv/channel", false, deviceapis_ParamArray));
deviceapis_FeatureArray.push(new Feature("http://samsungapps.com/api/tv/window", false, deviceapis_ParamArray));
deviceapis_FeatureArray.push(new Feature("http://samsungapps.com/api/avplay", false, deviceapis_ParamArray));
deviceapis_FeatureArray.push(new Feature("http://samsungapps.com/api/imageplay", false, deviceapis_ParamArray));
deviceapis.listAvailableFeatures = function () {
    alert("deviceapis_listAvailableFeatures()");
    return deviceapis_FeatureArray
};
deviceapis.listActivatedFeatures = function () {
    return deviceapis_FeatureArray
};
function Feature(a, c, b) {
    this.uri = a;
    this.required = c;
    this.params = b
}
function Param(a, b) {
    this.name = a;
    this.value = b
}
function SDeviceAPIError(b, a) {
    this.__defineGetter__("code", function () {
        return b
    });
    this.__defineGetter__("message", function () {
        return a
    })
}
SDeviceAPIError.prototype.toString = function () {
    return "[deviceapis error(" + this.code + ")] : " + this.message
};
SDeviceAPIError.prototype.UNKNOWN_ERR = 0;
SDeviceAPIError.prototype.INDEX_SIZE_ERR = 1;
SDeviceAPIError.prototype.DOMSTRING_SIZE_ERR = 2;
SDeviceAPIError.prototype.HIERARCHY_REQUEST_ERR = 3;
SDeviceAPIError.prototype.WRONG_DOCUMENT_ERR = 4;
SDeviceAPIError.prototype.INVALID_CHARACTER_ERR = 5;
SDeviceAPIError.prototype.NO_DATA_ALLOWED_ERR = 6;
SDeviceAPIError.prototype.NO_MODIFICATION_ALLOWED_ERR = 7;
SDeviceAPIError.prototype.NOT_FOUND_ERR = 8;
SDeviceAPIError.prototype.NOT_SUPPORTED_ERR = 9;
SDeviceAPIError.prototype.INUSE_ATTRIBUTE_ERR = 10;
SDeviceAPIError.prototype.INVALID_STATE_ERR = 11;
SDeviceAPIError.prototype.SYNTAX_ERR = 12;
SDeviceAPIError.prototype.INVALID_MODIFICATION_ERR = 13;
SDeviceAPIError.prototype.NAMESPACE_ERR = 14;
SDeviceAPIError.prototype.INVALID_ACCESS_ERR = 15;
SDeviceAPIError.prototype.VALIDATION_ERR = 16;
SDeviceAPIError.prototype.TYPE_MISMATCH_ERR = 17;
SDeviceAPIError.prototype.SECURITY_ERR = 18;
SDeviceAPIError.prototype.NETWORK_ERR = 19;
SDeviceAPIError.prototype.ABORT_ERR = 20;
SDeviceAPIError.prototype.TIMEOUT_ERR = 21;
SDeviceAPIError.prototype.INVALID_VALUES_ERR = 22;
SDeviceAPIError.prototype.NETWORK_SLOW_ERR = 10000;
SDeviceAPIError.prototype.RENDER_ERR = 10001;
SDeviceAPIError.prototype.CUSTOM_ERR = 100;
SDeviceAPIError.prototype.RTSP_STATE = 95;
SDeviceAPIError.prototype.AVPLAY_UNSUPPORTED_CONTAINER_ERR = 10100;
SDeviceAPIError.prototype.AVPLAY_UNSUPPORTED_VIDEO_FORMAT_ERR = 10101;
SDeviceAPIError.prototype.AVPLAY_UNSUPPORTED_AUDIO_FORMAT_ERR = 10102;
SDeviceAPIError.prototype.AVPLAY_UNSUPPORTED_VIDEO_RESOLUTION_ERR = 10103;
SDeviceAPIError.prototype.AVPLAY_UNSUPPORTED_VIDEO_FRAMERATE_ERR = 10104;
SDeviceAPIError.prototype.AVPLAY_CURRUPTED_STREAM_ERR = 10105;
function SRect(d, c, b, a) {
    this.left = d;
    this.top = c;
    this.width = b;
    this.height = a
}
SRect.prototype.toString = function () {
    return "SRect(left:" + this.left + ", top:" + this.top + ", width:" + this.width + ", height:" + this.height + ")"
};
function PlayTime(b) {
    this.millisecond = b;
    var a = parseInt(b / (3600 * 1000), 10);
    b -= a * (3600 * 1000);
    var c = parseInt(b / (60 * 1000), 10);
    b -= c * (60 * 1000);
    var d = parseInt(b / (1000), 10);
    this.timeString = (a > 9 ? a : "0" + a) + ":" + (c > 9 ? c : "0" + c) + ":" + (d > 9 ? d : "0" + d)
}
PlayTime.prototype.toString = function () {
    return this.timeString
};
(function () {
    var d = [];

    function c() {
        alert("[deviceapis] " + d.length + " onHide functions.");
        for (var j = 0; j < d.length; j++) {
            if (typeof d[j] == "function") {
                d[j]()
            }
        }
    }

    if (typeof window.onHide == "function") {
        d.push(window.onHide)
    }
    window.__defineGetter__("onHide", function () {
        return c
    });
    window.__defineSetter__("onHide", function (i) {
        alert("[deviceapis] onHide function added.");
        d.push(i)
    });
    var e = [];

    function h() {
        alert("[deviceapis] " + e.length + " onShow functions.");
        for (var j = 0; j < e.length; j++) {
            if (typeof e[j] == "function") {
                e[j].apply(window, arguments)
            }
        }
    }

    if (typeof window.onShow == "function") {
        e.push(window.onShow)
    }
    window.__defineGetter__("onShow", function () {
        return h
    });
    window.__defineSetter__("onShow", function (i) {
        alert("[deviceapis] onShow function added.");
        e.push(i)
    });
    var b = [];

    function a() {
        alert("[deviceapis] " + b.length + " onPause functions.");
        for (var j = 0; j < b.length; j++) {
            if (typeof b[j] == "function") {
                b[j].apply(window, arguments)
            }
        }
    }

    if (typeof window.onPause == "function") {
        b.push(window.onPause)
    }
    window.__defineGetter__("onPause", function () {
        return a
    });
    window.__defineSetter__("onPause", function (i) {
        alert("[deviceapis] onPause function added.");
        b.push(i)
    });
    var g = [];

    function f() {
        alert("[deviceapis] " + g.length + " onResume functions.");
        for (var j = 0; j < g.length; j++) {
            if (typeof g[j] == "function") {
                g[j].apply(window, arguments)
            }
        }
    }

    if (typeof window.onResume == "function") {
        g.push(window.onResume)
    }
    window.__defineGetter__("onResume", function () {
        return f
    });
    window.__defineSetter__("onResume", function (i) {
        alert("[deviceapis] onResume function added.");
        g.push(i)
    })
})();
deviceapis.audiocontrol = {
    AUDIO_MODE_PCM: 0,
    AUDIO_MODE_DOLBY: 1,
    AUDIO_MODE_DTS: 2,
    AUDIO_SOUND_TYPE_UP: 1,
    AUDIO_SOUND_TYPE_DOWN: 2,
    AUDIO_SOUND_TYPE_LEFT: 3,
    AUDIO_SOUND_TYPE_RIGHT: 4,
    AUDIO_SOUND_TYPE_PAGE_LEFT: 5,
    AUDIO_SOUND_TYPE_PAGE_RIGHT: 6,
    AUDIO_SOUND_TYPE_BACK: 7,
    AUDIO_SOUND_TYPE_SELECT: 8,
    AUDIO_SOUND_TYPE_CANCEL: 9,
    AUDIO_SOUND_TYPE_WARNING: 10,
    AUDIO_SOUND_TYPE_KEYPAD: 11,
    AUDIO_SOUND_TYPE_KEYPAD_ENTER: 12,
    AUDIO_SOUND_TYPE_KEYPAD_DEL: 13,
    AUDIO_SOUND_TYPE_SMARTCONTROL_MOVE: 14,
    AUDIO_SOUND_TYPE_SMARTCONTROL_SELECT: 15,
    AUDIO_SOUND_TYPE_MOVE: 16,
    AUDIO_SOUND_TYPE_PREPARING: 17,
    AUDIO_SOUND_TYPE_SHUTTER_PICTURE: 18,
    AUDIO_SOUND_TYPE_SHUTTER_VIDEO: 19,
    setMute: function (b) {
        if (b === undefined || typeof b != "boolean") {
            throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
        }
        var a = deviceapis._plugin("AUDIO", "GetVersion");
        alert("Audio plugin version: " + a.isSEF + ", " + a.ver);
        var c = null;
        if (!a.isSEF && a.ver <= "AUDIO-0004") {
            c = deviceapis._plugin("AUDIO", "SetMute", b ? deviceapis._pluginDef.PL_AUDIO_MUTE_ON : deviceapis._pluginDef.PL_AUDIO_MUTE_OFF)
        } else {
            c = deviceapis._plugin("AUDIO", "SetUserMute", b ? deviceapis._pluginDef.PLR_TRUE : deviceapis._pluginDef.PLR_FALSE)
        }
        return c == deviceapis._pluginDef.PLR_TRUE
    },
    getMute: function () {
        var a = deviceapis._plugin("AUDIO", "GetVersion");
        var b = null;
        if (!a.isSEF && a.ver <= "AUDIO-0004") {
            retvalue = deviceapis._plugin("AUDIO", "GetMute");
            return retvalue == deviceapis._pluginDef.PL_AUDIO_MUTE_OFF
        } else {
            retvalue = deviceapis._plugin("AUDIO", "GetUserMute");
            return retvalue == deviceapis._pluginDef.PLR_TRUE
        }
    },
    getVolume: function () {
        var a = deviceapis._plugin("AUDIO", "GetVolume");
        alert("getVolume: " + a);
        return a >= 0 ? a : -1
    },
    setVolume: function (a) {
        if (a === undefined || typeof a != "number") {
            throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
        } else {
            if (a < 0 || a > 100) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.INVALID_VALUES_ERR, "INVALID_VALUES_ERR")
            } else {
                alert("Before SetVolume: " + deviceapis._plugin("AUDIO", "GetVolume"));
                alert("SetVolume with " + a);
                deviceapis._plugin("AUDIO", "SetVolume", a);
                alert("After SetVolume: " + deviceapis._plugin("AUDIO", "GetVolume"))
            }
        }
    },
    setVolumeUp: function () {
        var a = deviceapis._plugin("AUDIO", "GetVersion");
        if (!a.isSEF && a.ver <= "AUDIO-0001") {
            throw new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR")
        } else {
            var b = deviceapis._plugin("AUDIO", "GetVolume");
            if (0 <= b && b < 100) {
                alert("Before SetVolumeUp: " + b);
                deviceapis._plugin("AUDIO", "SetVolumeWithKey", deviceapis._pluginDef.PL_AUDIO_VOLUME_KEY_UP);
                b = deviceapis._plugin("AUDIO", "GetVolume");
                alert("After SetVolumeUp: " + b)
            } else {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.INVALID_STATE_ERR, "INVALID_STATE_ERR")
            }
        }
    },
    setVolumeDown: function () {
        var a = deviceapis._plugin("AUDIO", "GetVersion");
        if (!a.isSEF && a.ver <= "AUDIO-0001") {
            throw new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR")
        } else {
            var b = deviceapis._plugin("AUDIO", "GetVolume");
            if (0 < b && b <= 100) {
                alert("Before SetVolumeDown: " + b);
                deviceapis._plugin("AUDIO", "SetVolumeWithKey", deviceapis._pluginDef.PL_AUDIO_VOLUME_KEY_DOWN);
                b = deviceapis._plugin("AUDIO", "GetVolume");
                alert("After SetVolumeDown: " + b)
            } else {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.INVALID_STATE_ERR, "INVALID_STATE_ERR")
            }
        }
    },
    getOutputMode: function () {
        var a = deviceapis._plugin("AUDIO", "GetVersion");
        if (!a.isSEF && a.ver <= "AUDIO-0010") {
            throw new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR")
        } else {
            var b = deviceapis._plugin("AUDIO", "GetExternalOutMode");
            return b
        }
    },
    playSound: function (a) {
        if (typeof a != "number") {
            throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
        }
        if (1 > a || a > 19) {
            throw new SDeviceAPIError(SDeviceAPIError.prototype.INVALID_VALUES_ERR, "INVALID_VALUES_ERR")
        }
        var b = deviceapis._plugin("NNavi", "GetFirmware");
        alert("Firmware : " + b);
        var d = b.match(/(\d+)-(\d+)/);
        var e = d[1];
        alert("nFirmwareYear == " + e);
        var c = null;
        if (e >= 2012) {
            c = deviceapis._plugin("AUI", "PlayAudio", a)
        } else {
            throw new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR")
        }
        if (c > 0) {
            return true
        } else {
            return false
        }
    }
};
deviceapis.displaycontrol = {
    MODE_3D_EFFECT_OFF: 0,
    MODE_3D_EFFECT_TOP_BOTTOM: 1,
    MODE_3D_EFFECT_SIDE_BY_SIDE: 2,
    MODE_3D_EFFECT_LINE_BY_LINE: 3,
    MODE_3D_EFFECT_VERTICAL_STRIPE: 4,
    MODE_3D_EFFECT_FRAME_SEQUENCE: 5,
    MODE_3D_EFFECT_CHECKER_BD: 6,
    MODE_3D_EFFECT_FROM_2D_TO_3D: 7,
    MODE_3D_DEVICE_NOT_CONNECTED: -1,
    MODE_3D_NOT_SUPPORTED: 0,
    MODE_3D_ENABLE_OK: 1,
    get3DEffectMode: function () {
        var b = deviceapis._plugin("NNavi", "GetFirmware");
        var a = deviceapis._plugin("SCREEN", "GetVersion");
        if (b >= "T-INFOLINK2012" || b < "T-INFOLINK2011") {
            if (!a.isSEF && a.ver <= "SCREEN-0001") {
                alert("Not support");
                throw new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR")
            } else {
                return deviceapis._plugin("SCREEN", "Get3DEffectMode")
            }
        } else {
            if (!a.isSEF && a.ver <= "SCREEN-0001") {
                alert("Not support");
                throw new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR")
            } else {
                return deviceapis._plugin("SCREEN", "Get3DEffectMode", 1)
            }
        }
    },
    check3DModeEnable: function () {
        var b = deviceapis._plugin("TV", "GetProductType");
        alert("nProductType : " + b);
        if (b == 0) {
            var a = deviceapis._plugin("SCREEN", "GetVersion");
            if (!a.isSEF && a.ver <= "SCREEN-0001") {
                alert("Not support");
                throw new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR")
            } else {
                var c = deviceapis._plugin("SCREEN", "Flag3DEffectSupport");
                if (c > 0) {
                    return deviceapis.displaycontrol.MODE_3D_ENABLE_OK
                } else {
                    return deviceapis.displaycontrol.MODE_3D_NOT_SUPPORTED
                }
            }
        } else {
            if (b == 2) {
                var a = deviceapis._plugin("SCREEN", "GetVersion");
                if (!a.isSEF && a.ver <= "SCREEN-0004") {
                    alert("Not support");
                    throw new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR")
                } else {
                    var c = deviceapis._plugin("SCREEN", "Flag3DTVConnect");
                    if (c) {
                        return deviceapis.displaycontrol.MODE_3D_ENABLE_OK
                    } else {
                        return deviceapis.displaycontrol.MODE_3D_DEVICE_NOT_CONNECTED
                    }
                }
            } else {
                alert("Device is not TV or BD.");
                throw new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR")
            }
        }
    },
    get3DModeSupportList: function (a, c) {
        if (a == null && typeof c == "function") {
            c(new SDeviceAPIError(SDeviceAPIError.prototype.INVALID_VALUES_ERR, "INVALID_VALUES_ERR"));
            return
        }
        if ((typeof a != "function" && a != null) || (typeof c != "function" && c != null)) {
            throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
        }
        if (a == null && c == null) {
            throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
        }
        var b = deviceapis._plugin("SCREEN", "GetVersion");
        if (!b.isSEF && b.ver <= "SCREEN-0001") {
            alert("Not support");
            if (typeof c == "function") {
                c(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"))
            }
            return
        } else {
            var f = new Array();
            Mode3DEffectListSupportLength = 8;
            var e = 0;
            for (var d = 0; d < Mode3DEffectListSupportLength; d++) {
                if (deviceapis._plugin("SCREEN", "Check3DEffectMode", d)) {
                    f[d] = 1;
                    e++
                } else {
                    f[d] = 0
                }
            }
            if (e) {
                if (typeof a == "function") {
                    a(f)
                }
            } else {
                if (typeof c == "function") {
                    c(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"))
                }
            }
            return
        }
    }
};
deviceapis.application = {
    getPopupOpacity: function () {
        var c = deviceapis._plugin("NNavi", "GetFirmware");
        var a = 0;
        alert("[SEC Web API] FirmwareVersion : " + c);
        if (typeof c == "string" && "T-INFOLINK2012" <= c) {
            var b = deviceapis._plugin("TV", "GetCurrentOSDTransparency");
            a = (Number(b) / 255).toFixed(2);
            alert(b + " -> " + a)
        } else {
            a = 0.8
        }
        alert("[SEC Web API] getPopupOpacity() returns " + a);
        return a
    }
};
function _isType(c, a) {
    var b = "";
    if (c === null) {
        b = "null"
    } else {
        b = typeof c
    }
    return a.indexOf(b) != -1
}
(function () {
    deviceapis.avplay = {
        CONNECTION_FAILED: 1,
        AUTHENTICATION_FAILED: 2,
        STREAM_NOT_FOUND: 3,
        NETWORK_DISCONNECTED: 4,
        NETWORK_SLOW: 5,
        RENDER_ERROR: 6,
        RENDERING_START: 7,
        RENDERING_COMPLETE: 8,
        STREAM_INFO_READY: 9,
        DECODING_COMPLETE: 10,
        BUFFERING_START: 11,
        BUFFERING_COMPLETE: 12,
        BUFFERING_PROGRESS: 13,
        CURRENT_DISPLAY_TIME: 14,
        CURRENT_PLAYBACK_TIME: 14,
        AD_START: 15,
        AD_END: 16,
        RESOLUTION_CHANGED: 17,
        BITRATE_CHANGED: 18,
        SUBTITLE: 19,
        CUSTOM: 20,
        UNKNOWN_ERROR: 0,
        UNSUPPORTED_CONTAINER: 1,
        UNSUPPORTED_VIDEO_CODEC: 2,
        UNSUPPORTED_AUDIO_CODEC: 3,
        UNSUPPORTED_VIDEO_RESOLUTION: 4,
        UNSUPPORTED_VIDEO_FRAMERATE: 5,
        CURRUPTED_STREAM: 6,
        CUSTOM_ERROR: 100,
        RTSP_STATE: 95,
        PLAY_STATE_IDLE: 0,
        PLAY_STATE_INITIALIZED: 1,
        PLAY_STATE_STOPPED: 2,
        PLAY_STATE_PREPARED: 3,
        PLAY_STATE_STARTED: 4,
        PLAY_STATE_PAUSED: 5,
        MODE_3D_EFFECT_OFF: 0,
        MODE_3D_EFFECT_SIDE_BY_SIDE: 1,
        MODE_3D_EFFECT_TOP_BOTTOM: 2,
        MODE_3D_EFFECT_FRAME_PACKING: 3,
        MODE_3D_EFFECT_FROM_2D_TO_3D: 4,
        MODE_3D_EFFECT_CHECKER_BD: 5,
        MODE_3D_EFFECT_LINE_BY_LINE: 6,
        MODE_3D_EFFECT_VERTICAL_STRIPE: 7,
        MODE_3D_EFFECT_FRAME_SEQUENCE: 8,
        MODE_3D_EFFECT_UNI_3D_MODE_INIT: 9,
        getAVPlay: function (successCallback, errorCallback) {
            if (!_isType(successCallback, "function") || !_isType(errorCallback, "undefined|function|null")) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (!bInit) {
                init()
            }
            var iAVPlay = new _AVPlay(nId);
            alert("[AVPlay] getAVPlay() succeeded. -> " + nId + "th " + iAVPlay);
            aAVPlayInstance[nId] = iAVPlay;
            nId++;
            successCallback(iAVPlay)
        },
        _getAllInstance: function () {
            return aAVPlayInstance
        },
        _destroyAll: function () {
            var aInstance = deviceapis.avplay._getAllInstance();
            alert("[AVPlay] _destroyAll() with " + aInstance.length + " instances.");
            for (var i = 0; i < aInstance.length; i++) {
                alert("[AVPlay] Destroy " + i + "th avplay.");
                aInstance[i].destroy()
            }
        },
    };
    var bInit = false, nId = 0, aAVPlayInstance = [], bSupportMultiApplication = false;

    function init() {
        var sServiceConfig = deviceapis._plugin("NNavi", "GetServiceConfig"), oServiceConfig = null;
        alert("[AVPlay] sServiceConfig: " + sServiceConfig);
        alert(typeof sServiceConfig);
        if (sServiceConfig) {
            try {
                oServiceConfig = eval("(" + sServiceConfig + ")")
            } catch (e) {
                alert("[AVPlay] " + e)
            }
        }
        bSupportMultiApplication = false;
        var notSupportMultiTasking = deviceapis._plugin("TaskManager", "CheckSupportMultiTaskingApp", 0);
        var supportValue = deviceapis._plugin("TaskManager", "CheckSupportMultiTaskingApp", 2);
        if (notSupportMultiTasking == 0 && supportValue == 1) {
            bSupportMultiApplication = true
        }
        alert("[AVPlay] bSupportMultiApplication: " + bSupportMultiApplication);
        window.onHide = deviceapis.avplay._destroyAll
    }

    function _AVPlay(id) {
        var sName = "AVPlay" + id;
        var sVersion = "3.0";
        this.__defineGetter__("id", function () {
            return id
        });
        this.__defineGetter__("url", function () {
            return null
        });
        this.__defineGetter__("duration", function () {
            return null
        });
        this.__defineGetter__("videoWidth", function () {
            return null
        });
        this.__defineGetter__("videoHeight", function () {
            return null
        });
        this.__defineGetter__("displayRect", function () {
            return null
        });
        this.__defineGetter__("displayArea", function () {
            return null
        });
        this.__defineGetter__("containerID", function () {
            return null
        });
        this.__defineGetter__("zIndex", function () {
            return null
        });
        this.__defineGetter__("cropArea", function () {
            return null
        });
        this.__defineGetter__("totalNumOfVideo", function () {
            return null
        });
        this.__defineGetter__("totalNumOfAudio", function () {
            return null
        });
        this.__defineGetter__("totalNumOfSubtitle", function () {
            return null
        });
        this.__defineGetter__("totalBufferSize", function () {
            return -1
        });
        this.__defineGetter__("pendingBufferSize", function () {
            return -1
        });
        this.__defineGetter__("initialBufferSize", function () {
            return -1
        });
        this.__defineGetter__("macrovision", function () {
            return false
        });
        this.__defineGetter__("status", function () {
            return deviceapis.avplay.PLAY_STATE_IDLE
        });
        this.__defineGetter__("authHeader", function () {
            return "basic"
        });
        this.init = function (option) {
            alert("[AVPlay" + id + "] init(" + option + ")");
            if (_isType(option, "object")) {
                if (!_isType(option.containerID, "undefined|string") || !_isType(option.zIndex, "undefined|number") || !_isType(option.bufferingCallback, "undefined|object") || !_isType(option.playCallback, "undefined|object") || !_isType(option.displayRect, "undefined|object") || !_isType(option.autoRatio, "undefined|boolean")) {
                    throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
                }
                if (_isType(option.bufferingCallback, "object")) {
                    if (!_isType(option.bufferingCallback.onbufferingstart, "undefined|function") || !_isType(option.bufferingCallback.onbufferingprogress, "undefined|function") || !_isType(option.bufferingCallback.onbufferingcomplete, "undefined|function")) {
                        throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
                    }
                }
                if (_isType(option.playCallback, "object")) {
                    if (!_isType(option.playCallback.oncurrentplaytime, "undefined|function") || !_isType(option.playCallback.onresolutionchanged, "undefined|function") || !_isType(option.playCallback.onstreamcompleted, "undefined|function") || !_isType(option.playCallback.onerror, "undefined|function")) {
                        throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
                    }
                }
                if (_isType(option.displayRect, "object")) {
                    if (!_isType(option.displayRect.top, "number") || !_isType(option.displayRect.left, "number") || !_isType(option.displayRect.width, "number") || !_isType(option.displayRect.height, "number")) {
                        throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
                    }
                }
            } else {
                if (!_isType(option, "undefined|null")) {
                    throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
                }
            }
            oInitOption = option || {};
            initializeEnv();
            if (!bInitialize) {
                initialize(oInitOption.containerID || null, oInitOption.zIndex || null, PLAYER_OBJECT_ID + id)
            } else {
                if (oInitOption.containerID) {
                    this.setPlayerPluginObject(oInitOption.containerID, oInitOption.zIndex || null, PLAYER_OBJECT_ID + id)
                }
            }
            if (oInitOption.displayRect) {
                this.setDisplayRect(oInitOption.displayRect)
            } else {
                alert("[AVPlay" + id + "] !WARNNING! > You did Not set displayRect")
            }
            bFrontPanelLock = oInitOption.frontPanelLock || false;
            if (oInitOption.autoRatio !== undefined) {
                bAutoRatio = oInitOption.autoRatio
            }
            if (this.status == deviceapis.avplay.PLAY_STATE_IDLE) {
                this._setStatus(deviceapis.avplay.PLAY_STATE_INITIALIZED)
            }
            return true
        };
        this.open = function (url, option) {
            alert("[AVPlay" + id + "] open(" + url + "," + (option ? option : "") + ")");
            if (!_isType(url, "string") || !_isType(option, "undefined|object|null")) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (_isType(option, "object")) {
                if (!_isType(option.totalBufferSize, "undefined|number") || !_isType(option.pendingBufferSize, "undefined|number") || !_isType(option.initialBufferSize, "undefined|number") || !_isType(option.adaptive, "undefined|object") || !_isType(option.drm, "undefined|object") || !_isType(option.macrovision, "undefined|object") || !_isType(option.subtitle, "undefined|object") || !_isType(option.mode3D, "undefined|number") || !_isType(option.authHeader, "undefined|string")) {
                    throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
                }
                if (_isType(option.adaptive, "object")) {
                    if (!_isType(option.adaptive.type, "string") || !_isType(option.adaptive.bitrates, "undefined|string") || !_isType(option.adaptive.upTimer, "undefined|string") || !_isType(option.adaptive.startBitrate, "undefined|string") || !_isType(option.adaptive.startTime, "undefined|string") || !_isType(option.adaptive.admode, "undefined|string")) {
                        throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
                    }
                }
                if (_isType(option.drm, "object")) {
                    if (!_isType(option.drm.type, "string") || !_isType(option.drm.company, "undefined|string") || !_isType(option.drm.deviceID, "undefined|string") || !_isType(option.drm.deviceType, "undefined|string") || !_isType(option.drm.streamID, "undefined|string") || !_isType(option.drm.drmURL, "undefined|string") || !_isType(option.drm.ackURL, "undefined|string") || !_isType(option.drm.heartbeatPeriod, "undefined|string") || !_isType(option.drm.portal, "undefined|string") || !_isType(option.drm.userData, "undefined|string") || !_isType(option.drm.cookie, "undefined|string")) {
                        throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
                    }
                }
                if (_isType(option.macrovision, "object")) {
                    if (!_isType(option.macrovision.type, "undefined|number") || !_isType(option.macrovision.ict, "undefined|number") || !_isType(option.macrovision.dot, "undefined|number") || !_isType(option.macrovision.vbi, "undefined|number")) {
                        throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
                    }
                }
                if (_isType(option.subtitle, "object")) {
                    if (!_isType(option.subtitle.path, "string") || !_isType(option.subtitle.streamID, "number") || !_isType(option.subtitle.sync, "undefined|number") || !_isType(option.subtitle.callback, "function")) {
                        throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
                    }
                }
            }
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            if (this.status != deviceapis.avplay.PLAY_STATE_STOPPED && this.status != deviceapis.avplay.PLAY_STATE_INITIALIZED) {
                alert("[AVPlay" + id + "] !THROW ERROR! SDeviceAPIError.prototype.INVALID_STATE_ERR");
                throw new SDeviceAPIError(SDeviceAPIError.prototype.INVALID_STATE_ERR, "INVALID_STATE_ERR")
            }
            oPlayOption = option || {};
            if (oPlayOption.subtitle && !this.getSubtitleAvailable()) {
                delete oPlayOption.subtitle
            }
            url = url.replace(/&amp;/g, "&");
            this.__defineGetter__("url", function () {
                return url
            });
            if (oPlayOption.adaptive) {
                if (oPlayOption.adaptive.bitrates) {
                    url += "|BITRATES=" + oPlayOption.adaptive.bitrates
                }
                if (oPlayOption.adaptive.upTimer) {
                    url += "|UPTIMER=" + oPlayOption.adaptive.upTimer
                }
                if (oPlayOption.adaptive.startBitrate) {
                    url += "|STARTBITRATE=" + oPlayOption.adaptive.startBitrate
                }
                if (oPlayOption.adaptive.startTime) {
                    url += "|STARTTIME=" + oPlayOption.adaptive.startTime
                }
                if (oPlayOption.adaptive.admode) {
                    url += "|ADMODE=" + oPlayOption.adaptive.admode
                }
                if (oPlayOption.adaptive.type) {
                    url += "|COMPONENT=" + oPlayOption.adaptive.type
                }
            } else {
                if (oPlayOption.drm) {
                    if (oPlayOption.drm.type == "WV") {
                        url += "|DEVICE_ID=" + oPlayOption.drm.deviceID || "";
                        url += "|DEVICET_TYPE_ID=" + oPlayOption.drm.deviceType || "";
                        url += "|STREAM_ID=" + oPlayOption.drm.streamID || "";
                        url += "|IP_ADDR=" + getIPAddr();
                        url += "|DRM_URL=" + oPlayOption.drm.drmURL || "";
                        url += "|ACK_URL=" + oPlayOption.drm.ackURL || "";
                        url += "|HEARTBEAT_URL=" + oPlayOption.drm.heartbeatURL || "";
                        url += "|HEARTBEAT_PERIOD=" + oPlayOption.drm.heartbeatPeriod || "";
                        url += "|PORTAL=" + oPlayOption.drm.portal || "";
                        url += "|USER_DATA=" + oPlayOption.drm.userData || "";
                        url += "|COMPONENT=" + oPlayOption.drm.type || ""
                    }
                }
            }
            var authHeader = (oPlayOption.authHeader == "basic" || oPlayOption.authHeader == "none") ? oPlayOption.authHeader : "basic";
            this.__defineGetter__("authHeader", function () {
                return authHeader
            });
            var retValue = deviceapis._plugin(ePlayerPlugin, "InitPlayer", url);
            nVolume = 100;
            this._setStatus(deviceapis.avplay.PLAY_STATE_PREPARED);
            alert("[AVPlay" + id + "] open(" + url + ") returns " + (retValue == 1));
            return retValue == 1
        };
        this.play = function (successCallback, errorCallback, sec) {
            alert("[AVPlay" + id + "] play(" + typeof successCallback + "," + typeof errorCallback + "," + (sec !== undefined ? sec : "") + ")");
            if (!_isType(successCallback, "undefined|function|null") || !_isType(errorCallback, "undefined|function|null") || !_isType(sec, "undefined|number")) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            if (this.status != deviceapis.avplay.PLAY_STATE_PREPARED) {
                alert("[AVPlay" + id + "] !THROW ERROR! SDeviceAPIError.prototype.INVALID_STATE_ERR");
                throw new SDeviceAPIError(SDeviceAPIError.prototype.INVALID_STATE_ERR, "INVALID_STATE_ERR")
            }
            if (oPlayOption.totalBufferSize) {
                this.setTotalBufferSize(oPlayOption.totalBufferSize)
            }
            if (oPlayOption.pendingBufferSize) {
                this.setPendingBufferSize(oPlayOption.pendingBufferSize)
            }
            if (oPlayOption.initialBufferSize) {
                this.setInitialBufferSize(oPlayOption.initialBufferSize)
            }
            if (oPlayOption.mode3D) {
                this.setPlayerProperty(this.PROPERTY_TYPE_3D, 3, oPlayOption.mode3D)
            }
            if (oPlayOption.drm && oPlayOption.drm.cookie) {
                this.setPlayerProperty(this.PROPERTY_TYPE_COOKIE, oPlayOption.drm.cookie, oPlayOption.drm.cookie.length)
            }
            if (oPlayOption.macrovision && oPlayOption.macrovision.dot !== undefined) {
                this.setOutputDOT(oPlayOption.macrovision.dot)
            }
            if (this.authHeader == "none") {
                this.setPlayerProperty(this.PROPERTY_TYPE_AUTH_BASIC, 0, 0)
            } else {
            }
            cbOnPlaySuccess = successCallback;
            var retValue = deviceapis._plugin(ePlayerPlugin, "StartPlayback", (sec !== undefined ? Number(sec) : 0));
            if (retValue == -1) {
                if (typeof errorCallback == "function") {
                    errorCallback(new SDeviceAPIError(SDeviceAPIError.prototype.UNKNOWN_ERR, "UNKNOWN_ERR"));
                    this._setStatus(deviceapis.avplay.PLAY_STATE_STOPPED)
                }
                return
            }
            if (!bFrontPanelLock && bBDPlayer) {
                iFrontPanel.setState(iFrontPanel.Enum.FRONT_DISPLAY_PLAY)
            }
            this._setStatus(deviceapis.avplay.PLAY_STATE_STARTED);
            setScreenSaver(false);
            return retValue == 1
        };
        this.stop = function () {
            alert("[AVPlay" + id + "] stop()");
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            if (self.macrovision) {
                self.setMacrovision(self.APS_ALL_OFF)
            }
            var retValue = deviceapis._plugin(ePlayerPlugin, "Stop");
            if (!bFrontPanelLock && bBDPlayer) {
                iFrontPanel.setState(iFrontPanel.Enum.FRONT_DISPLAY_ONLINE)
            }
            self._setStatus(deviceapis.avplay.PLAY_STATE_STOPPED);
            setScreenSaver(true);
            return retValue == 1
        };
        this.pause = function () {
            alert("[AVPlay" + id + "] pause()");
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            var retValue = deviceapis._plugin(ePlayerPlugin, "Pause");
            if (retValue == -1) {
            } else {
                if (!bFrontPanelLock && bBDPlayer) {
                    iFrontPanel.setState(iFrontPanel.Enum.FRONT_DISPLAY_PAUSE)
                }
                this._setStatus(deviceapis.avplay.PLAY_STATE_PAUSED);
                setScreenSaver(true)
            }
            alert("[AVPlay" + id + "] pause() returns " + (retValue == 1));
            return retValue == 1
        };
        this.resume = function () {
            alert("[AVPlay" + id + "] resume()");
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            var retValue = deviceapis._plugin(ePlayerPlugin, "Resume");
            if (retValue == -1) {
            } else {
                if (!bFrontPanelLock && bBDPlayer) {
                    iFrontPanel.setState(iFrontPanel.Enum.FRONT_DISPLAY_PLAY)
                }
                this._setStatus(deviceapis.avplay.PLAY_STATE_STARTED);
                setScreenSaver(false)
            }
            alert("[AVPlay" + id + "] resume() returns " + (retValue == 1));
            return retValue == 1
        };
        this.jumpForward = function (sec) {
            alert("[AVPlay" + id + "] jumpForward(" + sec + ")");
            if (!_isType(sec, "number")) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            var FINISH_OFFSET = 5000;
            if ((Number(iCurrentPlayTime.millisecond) + (sec * 1000)) > (self.duration - FINISH_OFFSET)) {
                alert("[AVPlay" + id + "] The offset is too big! " + sec + " -> " + (sec - (FINISH_OFFSET / 1000)));
                sec = sec - (FINISH_OFFSET / 1000)
            }
            var retValue = deviceapis._plugin(ePlayerPlugin, "JumpForward", sec);
            alert("[AVPlay" + id + "] jumpForward(" + sec + ") returns " + (retValue == 1));
            return retValue == 1
        };
        this.jumpBackward = function (sec) {
            alert("[AVPlay" + id + "] jumpBackward(" + sec + ")");
            if (!_isType(sec, "number")) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            if (iCurrentPlayTime.millisecond - (sec * 1000) < 0) {
                alert("[AVPlay" + id + "] The offset is too big! " + sec + " -> " + parseInt(iCurrentPlayTime.millisecond / 1000));
                sec = parseInt(iCurrentPlayTime.millisecond / 1000)
            }
            var retValue = deviceapis._plugin(ePlayerPlugin, "JumpBackward", sec);
            alert("[AVPlay" + id + "] jumpBackward(" + sec + ") returns " + (retValue == 1));
            return retValue == 1
        };
        this.setSpeed = function (speed) {
            alert("[AVPlay" + id + "] setSpeed(" + speed + ")");
            if (!_isType(speed, "number")) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            var retValue = deviceapis._plugin(ePlayerPlugin, "SetPlaybackSpeed", speed);
            if (retValue == -1) {
                alert("[AVPlay" + id + "] setSpeed() returns fail.");
                return false
            }
            this._setStatus(deviceapis.avplay.PLAY_STATE_STARTED);
            alert("[AVPlay" + id + "] setSpeed(" + speed + ") returns " + (retValue == 1));
            return retValue == 1
        };
        this.setAudioStreamID = function (index) {
            alert("[AVPlay" + id + "] setAudioStreamID(" + index + ")");
            if (!_isType(index, "number")) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            var streamType = 1;
            return this.setStreamID(streamType, index)
        };
        this.setSubtitleStreamID = function (index) {
            alert("[AVPlay" + id + "] setSubtitleStreamID(" + index + ")");
            if (!_isType(index, "number")) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            if (!this.getSubtitleAvailable()) {
                return
            }
            var streamType = 5;
            return this.setStreamID(streamType, index)
        };
        this.getCurrentBitrates = function () {
            alert("[AVPlay" + id + "] getCurrentBitrates()");
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            var retValue = deviceapis._plugin(ePlayerPlugin, "GetCurrentBitrates");
            if (retValue == deviceapis._pluginDef.PLR_NOT_IMPLEMENT) {
                alert("[AVPlay" + id + "] Not support API : getCurrentBitrates()");
                return false
            } else {
                alert("[AVPlay" + id + "] getCurrentBitrates() returns " + retValue);
                return retValue
            }
        };
        this.getAvailableBitrates = function () {
            alert("[AVPlay" + id + "] getAvailableBitrates()");
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            var retValue = deviceapis._plugin(ePlayerPlugin, "GetAvailableBitrates");
            if (retValue == deviceapis._pluginDef.PLR_NOT_IMPLEMENT) {
                alert("[AVPlay" + id + "] Not support API : getAvailableBitrates()");
                return false
            } else {
                alert("[AVPlay" + id + "] getAvailableBitrates() returns " + retValue);
                return retValue
            }
        };
        this.startSubtitle = function (option) {
            alert("[AVPlay" + id + "] startSubtitle(" + option + ")");
            if (!_isType(option, "object") || !_isType(option.path, "string") || !_isType(option.streamID, "undefined|number") || !_isType(option.sync, "undefined|number") || !_isType(option.callback, "function")) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            if (!this.getSubtitleAvailable()) {
                return
            }
            alert("[AVPlay" + id + "] Subtitle Path : " + option.path);
            var retValue = deviceapis._plugin(ePlayerPlugin, "StartSubtitle", option.path);
            if (retValue == deviceapis._pluginDef.PLR_NOT_IMPLEMENT) {
                alert("[AVPlay" + id + "] Not support API : startSubtitle()");
                return false
            } else {
                if (retValue == 1) {
                    bBlockSubtitleEvent = false;
                    cbOnSubtitle = option.callback;
                    this.setSubtitleStreamID(option.streamID || 0);
                    this.setSubtitleSync(option.sync || 0)
                }
                alert("[AVPlay" + id + "] startSubtitle() returns " + (retValue == 1));
                return retValue == 1
            }
        };
        this.stopSubtitle = function () {
            alert("[AVPlay" + id + "] stopSubtitle()");
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            if (!this.getSubtitleAvailable()) {
                return
            }
            bBlockSubtitleEvent = true
        };
        this.setSubtitleSync = function (millisec) {
            alert("[AVPlay" + id + "] setSubtitleSync(" + millisec + ")");
            if (!_isType(millisec, "number")) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            if (!this.getSubtitleAvailable()) {
                return
            }
            var retValue = deviceapis._plugin(ePlayerPlugin, "SetSubtitleSync", millisec);
            if (retValue == deviceapis._pluginDef.PLR_NOT_IMPLEMENT) {
                alert("[AVPlay" + id + "] Not support API : setSubtitleSync()");
                return false
            } else {
                alert("[AVPlay" + id + "] setSubtitleSync(" + millisec + ") returns " + (retValue == 1));
                if (retValue == 1) {
                    nSubtitleSyncTime = millisec
                }
                return retValue == 1
            }
        };
        this.setDisplayRect = function (rect) {
            alert("[AVPlay" + id + "] setDisplayRect(" + rect + ")");
            if (!_isType(rect, "object") || !_isType(rect.top, "number") || !_isType(rect.left, "number") || !_isType(rect.width, "number") || !_isType(rect.height, "number")) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            if (!rect) {
                alert("[AVPlay" + id + "] No rect parameter. Set DisplayRect to Full screen..");
                rect = new SRect(0, 0, curWidget.width, curWidget.height)
            }
            iDisplayRect = rect;
            this.__defineGetter__("displayRect", function () {
                return rect
            });
            eInnerContainerDiv.style.left = iDisplayRect.left + "px";
            eInnerContainerDiv.style.top = iDisplayRect.top + "px";
            eInnerContainerDiv.style.width = iDisplayRect.width + "px";
            eInnerContainerDiv.style.height = iDisplayRect.height + "px";
            ePlayerPlugin.style.width = iDisplayRect.width + "px";
            ePlayerPlugin.style.height = iDisplayRect.height + "px";
            if (this.status == deviceapis.avplay.PLAY_STATE_STARTED || this.status == deviceapis.avplay.PLAY_STATE_PAUSED) {
                var fitDisplayArea = this.getFitDisplayArea(this.videoWidth, this.videoHeight);
                this.setDisplayArea(fitDisplayArea)
            }
        };
        this.clear = function () {
            alert("[AVPlay" + id + "] clear()");
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            var retValue = deviceapis._plugin(ePlayerPlugin, "ClearScreen");
            if (retValue == deviceapis._pluginDef.PLR_NOT_IMPLEMENT) {
                alert("[AVPlay" + id + "] Not support API : ClearScreen()");
                return false
            } else {
                alert("[AVPlay" + id + "] clear() returns " + (retValue == 1));
                return retValue == 1
            }
        };
        this.show = function () {
            alert("[AVPlay" + id + "] show()");
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            eInnerContainerDiv.style.visibility = "visible"
        };
        this.hide = function () {
            alert("[AVPlay" + id + "] hide()");
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            eInnerContainerDiv.style.visibility = "hidden"
        };
        this.getZIndex = function () {
            alert("[AVPlay" + id + "] getZIndex()");
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            alert("[AVPlay" + id + "] getZIndex() returns " + this.zIndex);
            return this.zIndex
        };
        this.setZIndex = function (zIndex) {
            alert("[AVPlay" + id + "] setZIndex(" + zIndex + ")");
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            if (!_isType(zIndex, "number")) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            document.getElementById(PLAYER_CONTAINER_DIV_ID + id).style.zIndex = zIndex
        };
        this.getVolume = function () {
            alert("[AVPlay" + id + "] getVolume()");
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            if (this.status != deviceapis.avplay.PLAY_STATE_STARTED && this.status != deviceapis.avplay.PLAY_STATE_PAUSED) {
                alert("[AVPlay" + id + "] getVolume() is available on PLAY_STATE_STARTED or PLAY_STATE_PAUSED.");
                return false
            }
            alert("[AVPlay" + id + "] getVolume() returns " + nVolume);
            return nVolume
        };
        this.setVolume = function (volume) {
            alert("[AVPlay" + id + "] setVolume(" + volume + ")");
            if (!_isType(volume, "number")) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            if (this.status != deviceapis.avplay.PLAY_STATE_STARTED && this.status != deviceapis.avplay.PLAY_STATE_PAUSED) {
                alert("[AVPlay" + id + "] setVolume() is available on PLAY_STATE_STARTED or PLAY_STATE_PAUSED.");
                return false
            }
            var retValue = deviceapis._plugin(ePlayerPlugin, "SetVolume", volume);
            if (retValue == 1) {
                nVolume = volume
            }
            alert("[AVPlay" + id + "] setVolume(" + volume + ") returns " + (retValue == 1));
            return retValue == 1
        };
        this.setCropArea = function (successCallback, errorCallback, rect) {
            alert("[AVPlay" + id + "] setCropArea(" + typeof successCallback + "," + typeof errorCallback + "," + rect + ")");
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            var retValue = deviceapis._plugin(ePlayerPlugin, "SetCropArea", rect.left, rect.top, rect.width, rect.height);
            if (retValue == deviceapis._pluginDef.PLR_NOT_IMPLEMENT) {
                alert("[AVPlay" + id + "] Not support API : setCropArea()");
                errorCallback(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"))
            } else {
                alert("[AVPlay" + id + "] setCropArea(" + rect + ") returns " + (retValue == 1));
                this.__defineGetter__("cropArea", function () {
                    return rect
                });
                successCallback()
            }
            alert("[AVPlay" + id + "] setCropArea() returns " + (retValue == 1));
            return retValue == 1
        };
        this.setDisplayArea = function (rect) {
            alert("[AVPlay" + id + "] setDisplayArea(" + rect + ")");
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            var retValue = null;
            if (oPluginVer.isSEF) {
                retValue = deviceapis._plugin(ePlayerPlugin, "SetDisplayArea", rect.left, rect.top, rect.width, rect.height, curWidget.height)
            } else {
                var resolutionConstant;
                if (curWidget.height == 540) {
                    resolutionConstant = 1
                } else {
                    if (curWidget.height == 720) {
                        resolutionConstant = 0.75
                    } else {
                        if (curWidget.height == 1080) {
                            resolutionConstant = 0.5
                        } else {
                            resolutionConstant = 1
                        }
                    }
                }
                var nLeft = Math.round(rect.left * resolutionConstant);
                var nTop = Math.round(rect.top * resolutionConstant);
                var nWidth = Math.round(rect.width * resolutionConstant);
                var nHeight = Math.round(rect.height * resolutionConstant);
                retValue = deviceapis._plugin(ePlayerPlugin, "SetDisplayArea", nLeft, nTop, nWidth, nHeight)
            }
            this.__defineGetter__("displayArea", function () {
                return rect
            });
            return retValue
        };
        this.getDuration = function () {
            var retValue = deviceapis._plugin(ePlayerPlugin, "GetDuration");
            alert("[AVPlay" + id + "] getDuration() returns " + retValue);
            this.__defineGetter__("duration", function () {
                return retValue
            });
            return retValue
        };
        this.getVideoResolution = function () {
            var retValue = null;
            if (oPluginVer.isSEF) {
                retValue = deviceapis._plugin(ePlayerPlugin, "GetVideoResolution")
            } else {
                retValue = ePlayerPlugin.GetVideoWidth() + "|" + ePlayerPlugin.GetVideoHeight()
            }
            alert("[AVPlay" + id + "] getVideoResolution() returns " + retValue);
            return retValue
        };
        this.getTotalNumOfStreamID = function (streamType) {
            var retValue = deviceapis._plugin(ePlayerPlugin, "GetTotalNumOfStreamID", streamType);
            if (retValue == deviceapis._pluginDef.PLR_NOT_IMPLEMENT) {
                alert("[AVPlay" + id + "] Not support API : getTotalNumOfStreamID()")
            } else {
                alert("[AVPlay" + id + "] getTotalNumOfStreamID(" + streamType + ") returns " + retValue);
                return retValue
            }
        };
        this.setStreamID = function (streamType, index) {
            var retValue = deviceapis._plugin(ePlayerPlugin, "SetStreamID", streamType, index);
            if (retValue == deviceapis._pluginDef.PLR_NOT_IMPLEMENT) {
                alert("[AVPlay" + id + "] Not support API : setStreamID()")
            } else {
                alert("[AVPlay" + id + "] setStreamID(" + streamType + "," + index + ") returns " + (retValue == 1));
                return retValue == 1
            }
        };
        this.getStreamLanguageInfo = function (streamType, index) {
            var retValue = deviceapis._plugin(ePlayerPlugin, "GetStreamLanguageInfo", streamType, index);
            if (retValue == deviceapis._pluginDef.PLR_NOT_IMPLEMENT) {
                alert("[AVPlay" + id + "] Not support API : getStreamLanguageInfo()")
            } else {
                alert("[AVPlay" + id + "] getStreamLanguageInfo(" + streamType + "," + index + ") returns " + retValue);
                return retValue
            }
        };
        this.getStreamExtraData = function (streamType, index) {
            var retValue = deviceapis._plugin(ePlayerPlugin, "GetStreamExtraData", streamType, index);
            if (retValue == deviceapis._pluginDef.PLR_NOT_IMPLEMENT) {
                alert("[AVPlay" + id + "] Not support API : getStreamExtraData()")
            } else {
                alert("[AVPlay" + id + "] getStreamExtraData(" + streamType + "," + index + ") returns " + retValue);
                return retValue
            }
        };
        this.setPlayerProperty = function (propertyType, param1, param2) {
            var retValue = deviceapis._plugin(ePlayerPlugin, "SetPlayerProperty", propertyType, param1, param2);
            if (retValue == deviceapis._pluginDef.PLR_NOT_IMPLEMENT) {
                alert("[AVPlay" + id + "] Not support API : setPlayerProperty()")
            } else {
                alert("[AVPlay" + id + "] setPlayerProperty(" + propertyType + "," + param1 + "," + param2 + ") returns " + (retValue == 1));
                return retValue == 1
            }
        };
        this.setTotalBufferSize = function (bytes) {
            this.__defineGetter__("totalBufferSize", function () {
                return bytes
            });
            var retValue = deviceapis._plugin(ePlayerPlugin, "SetTotalBufferSize", bytes);
            alert("[AVPlay" + id + "] setTotalBufferSize(" + bytes + ") returns " + (retValue == 1));
            return retValue == 1
        };
        this.setInitialBufferSize = function (bytes) {
            this.__defineGetter__("initialBufferSize", function () {
                return bytes
            });
            var retValue = null;
            if (oPluginVer.isSEF) {
                retValue = deviceapis._plugin(ePlayerPlugin, "SetInitialBufferSize", bytes)
            } else {
                retValue = deviceapis._plugin(ePlayerPlugin, "SetInitialBuffer", bytes)
            }
            alert("[AVPlay" + id + "] setInitialBufferSize(" + bytes + ") returns " + (retValue == 1));
            return retValue == 1
        };
        this.setPendingBufferSize = function (bytes) {
            this.__defineGetter__("pendingBufferSize", function () {
                return bytes
            });
            var retValue = null;
            if (oPluginVer.isSEF) {
                retValue = deviceapis._plugin(ePlayerPlugin, "SetPendingBufferSize", bytes)
            } else {
                retValue = deviceapis._plugin(ePlayerPlugin, "SetPendingBuffer", bytes)
            }
            alert("[AVPlay" + id + "] setPendingBufferSize(" + bytes + ") returns " + (retValue == 1));
            return retValue == 1
        };
        this.setOutputDOT = function (disable) {
            var retValue = deviceapis._plugin(ePlayerPlugin, "SetOutputDOT", (disable ? 1 : 0));
            if (retValue == deviceapis._pluginDef.PLR_NOT_IMPLEMENT) {
                alert("[AVPlay" + id + "] Not support API : setOutputDOT()")
            } else {
                alert("[AVPlay" + id + "] setOutputDOT(" + disable + ") returns " + (retValue == 1));
                return retValue == 1
            }
        };
        this.setMacrovision = function (macrovisionLevel) {
            var retValue = deviceapis._plugin(ePlayerPlugin, "SetMacrovision", macrovisionLevel);
            alert("[AVPlay" + id + "] setMacrovision(" + macrovisionLevel + ") returns " + (retValue == 1));
            return retValue == 1
        };
        this.setVBIData = function (macrovisionType, cgmsType) {
            var retValue = deviceapis._plugin(ePlayerPlugin, "SetVBIData", macrovisionType, cgmsType);
            alert("[AVPlay" + id + "] setVBIData(" + macrovisionType + "," + cgmsType + ") returns " + (retValue == 1));
            return retValue == 1
        };
        this.setICT = function (on) {
            var retValue = deviceapis._plugin(ePlayerPlugin, "SetICT", on);
            alert("[AVPlay" + id + "] setICT(" + on + ") returns " + (retValue == 1));
            return retValue == 1
        };
        this.PROPERTY_TYPE_COOKIE = 1;
        this.PROPERTY_TYPE_3D = 2;
        this.PROPERTY_TYPE_PLAY_READY_CUSTOM_DATA = 3;
        this.PROPERTY_TYPE_PLAY_READY_LICENSE_SERVER = 4;
        this.PROPERTY_TYPE_MP3_LIVE_STREAM = 5;
        this.PROPERTY_TYPE_AUTH_BASIC = 7;
        this.APS_ALL_OFF = 0;
        this.APS_AGC_ON_ONLY = 1;
        this.APS_AGC_ON_CS_2L = 2;
        this.APS_AGC_ON_CS_4L = 3;
        this.CGMS_COPY_FREE = 0;
        this.CGMS_COPY_NO_MORE = 1;
        this.CGMS_COPY_ONCE = 2;
        this.CGMS_COPY_NEVER = 3;
        this.ICT_OFF = 0;
        this.ICT_ON = 1;
        var PLAYER_OBJECT_ID = "_plugin_Player_";
        var PLAYER_OBJECT_Z_INDEX = 10;
        var PLAYER_CONTAINER_DIV_ID = "_pluginObjectPlayerContainer_";
        var PLAYER_CONTAINER_DIV_Z_INDEX = 10;
        var self = this;
        var ePlayerPlugin = null;
        var eInnerContainerDiv = null;
        var bInitialize = false;
        var iDisplayRect = null;
        var bAutoRatio = true;
        var bFrontPanelLock = false;
        var cbOnSubtitle = null;
        var bBlockSubtitleEvent = false;
        var cbOnPlaySuccess = null;
        var oInitOption = {};
        var oPlayOption = {};
        var nSubtitleSyncTime = 0;
        var bSubtitleAvailable = null;
        var nFirmwareYear = null;
        var nFirmwareVer = null;
        var oPluginVer = null;
        var iFrontPanel = null;
        var bBDPlayer = null;
        var iCurrentPlayTime = null;
        var nVolume = 100;
        this.Event2String = {};
        this.Event2String[deviceapis.avplay.CONNECTION_FAILED] = "CONNECTION_FAILED";
        this.Event2String[deviceapis.avplay.AUTHENTICATION_FAILED] = "AUTHENTICATION_FAILED";
        this.Event2String[deviceapis.avplay.STREAM_NOT_FOUND] = "STREAM_NOT_FOUND";
        this.Event2String[deviceapis.avplay.NETWORK_DISCONNECTED] = "NETWORK_DISCONNECTED";
        this.Event2String[deviceapis.avplay.NETWORK_SLOW] = "NETWORK_SLOW";
        this.Event2String[deviceapis.avplay.RENDER_ERROR] = "RENDER_ERROR";
        this.Event2String[deviceapis.avplay.RENDERING_START] = "RENDERING_START";
        this.Event2String[deviceapis.avplay.RENDERING_COMPLETE] = "RENDERING_COMPLETE";
        this.Event2String[deviceapis.avplay.STREAM_INFO_READY] = "STREAM_INFO_READY";
        this.Event2String[deviceapis.avplay.DECODING_COMPLETE] = "DECODING_COMPLETE";
        this.Event2String[deviceapis.avplay.BUFFERING_START] = "BUFFERING_START";
        this.Event2String[deviceapis.avplay.BUFFERING_COMPLETE] = "BUFFERING_COMPLETE";
        this.Event2String[deviceapis.avplay.BUFFERING_PROGRESS] = "BUFFERING_PROGRESS";
        this.Event2String[deviceapis.avplay.CURRENT_PLAYBACK_TIME] = "CURRENT_PLAYBACK_TIME";
        this.Event2String[deviceapis.avplay.AD_START] = "AD_START";
        this.Event2String[deviceapis.avplay.AD_END] = "AD_END";
        this.Event2String[deviceapis.avplay.RESOLUTION_CHANGED] = "RESOLUTION_CHANGED";
        this.Event2String[deviceapis.avplay.BITRATE_CHANGED] = "BITRATE_CHANGED";
        this.Event2String[deviceapis.avplay.SUBTITLE] = "SUBTITLE";
        this.Event2String[deviceapis.avplay.CUSTOM] = "CUSTOM";
        this.State2String = {};
        this.State2String[deviceapis.avplay.PLAY_STATE_IDLE] = "PLAY_STATE_IDLE";
        this.State2String[deviceapis.avplay.PLAY_STATE_INITIALIZED] = "PLAY_STATE_INITIALIZED";
        this.State2String[deviceapis.avplay.PLAY_STATE_STOPPED] = "PLAY_STATE_STOPPED";
        this.State2String[deviceapis.avplay.PLAY_STATE_PREPARED] = "PLAY_STATE_PREPARED";
        this.State2String[deviceapis.avplay.PLAY_STATE_STARTED] = "PLAY_STATE_STARTED";
        this.State2String[deviceapis.avplay.PLAY_STATE_PAUSED] = "PLAY_STATE_PAUSED";
        function initialize(containerID, zIndex, pluginObjectID) {
            alert("[AVPlay" + id + "] initialize(" + (containerID || "") + "," + (zIndex || "") + "," + (pluginObjectID || "") + ")");
            var sFirmware = deviceapis._plugin("NNavi", "GetFirmware");
            alert("[AVPlay" + id + "] Firmware : " + sFirmware);
            var aResult = sFirmware.match(/(\d+)-(\d+)/);
            nFirmwareYear = aResult[1];
            nFirmwareVer = aResult[2];
            self.setPlayerPluginObject(containerID, zIndex, pluginObjectID);
            if (nFirmwareYear >= 2012) {
                window.addEventListener("unload", function () {
                    alert("[AVPlay" + id + "] !!!WINDOW UNLOAD!!!");
                    self.destroy()
                })
            } else {
                document.getElementsByTagName("body")[0].addEventListener("unload", self.destroy)
            }
            deviceapis._plugin("TVMW", "GetVersion");
            iFrontPanel = new FrontPanel();
            bBDPlayer = deviceapis.tv.info.getProduct() == deviceapis.tv.info.PRODUCT_TYPE_BD;
            oPluginVer = deviceapis._plugin(ePlayerPlugin, "GetVersion");
            bInitialize = true
        }

        function initializeEnv() {
            bBlockSubtitleEvent = false;
            this.__defineGetter__("url", function () {
                return null
            });
            this.__defineGetter__("duration", function () {
                return null
            });
            this.__defineGetter__("videoWidth", function () {
                return null
            });
            this.__defineGetter__("videoHeight", function () {
                return null
            });
            this.__defineGetter__("displayArea", function () {
                return null
            });
            this.__defineGetter__("cropArea", function () {
                return null
            });
            this.__defineGetter__("totalNumOfVideo", function () {
                return null
            });
            this.__defineGetter__("totalNumOfAudio", function () {
                return null
            });
            this.__defineGetter__("totalNumOfSubtitle", function () {
                return null
            });
            this.__defineGetter__("totalBufferSize", function () {
                return -1
            });
            this.__defineGetter__("pendingBufferSize", function () {
                return -1
            });
            this.__defineGetter__("initialBufferSize", function () {
                return -1
            });
            this.__defineGetter__("macrovision", function () {
                return false
            })
        }

        this.destroy = function () {
            alert("[AVPlay" + id + "] destroy()");
            self.stop()
        };
        this._setStatus = function (status) {
            alert("[AVPlay" + id + "] _setStatus(" + status + ") -> " + this.State2String[status]);
            this.__defineGetter__("status", function () {
                return status
            })
        };
        this.setPlayerPluginObject = function (containerID, zIndex, pluginObjectID) {
            alert("[AVPlay" + id + "] setPlayerPluginObject(" + (containerID ? containerID : "") + "," + (zIndex ? zIndex : "") + "," + (pluginObjectID ? pluginObjectID : "") + ")");
            alert("[AVPlay" + id + "] old ePlayerPlugin : " + ePlayerPlugin);
            if (ePlayerPlugin) {
                this.stop();
                ePlayerPlugin.parentNode.removeChild(ePlayerPlugin);
                ePlayerPlugin = null
            }
            if (pluginObjectID) {
                var ePluginObject = document.getElementById(pluginObjectID);
                if (ePluginObject) {
                    deviceapis._plugin(ePluginObject, "Stop");
                    ePluginObject.parentNode.removeChild(ePluginObject)
                }
            }
            var innerContainer = document.createElement("div");
            innerContainer.id = PLAYER_CONTAINER_DIV_ID + id;
            innerContainer.style.position = "absolute";
            innerContainer.style.left = "0px";
            innerContainer.style.top = "0px";
            innerContainer.style.width = "0px";
            innerContainer.style.height = "0px";
            innerContainer.style.zIndex = (zIndex !== undefined && zIndex !== null) ? zIndex : PLAYER_CONTAINER_DIV_Z_INDEX;
            if (containerID) {
                var eContainerDiv = document.getElementById(containerID);
                if (eContainerDiv) {
                    eContainerDiv.appendChild(innerContainer);
                    this.__defineGetter__("containerID", function () {
                        return containerID
                    })
                } else {
                    alert("[AVPlay" + id + "] !ERROR! cannot get " + containerID + " element.");
                    ePlayerPlugin = null;
                    return
                }
            } else {
                document.body.appendChild(innerContainer);
                this.__defineGetter__("containerID", function () {
                    return innerContainer.id
                })
            }
            var bUseSEF = deviceapis._plugin.getSEFAvailable();
            var sPluginObjectId = pluginObjectID || PLAYER_OBJECT_ID;
            var sZIndex = "z-index:" + PLAYER_OBJECT_Z_INDEX + ";";
            eInnerContainerDiv = document.getElementById(PLAYER_CONTAINER_DIV_ID + id);
            eInnerContainerDiv.innerHTML = getPluginObjectHTML(bUseSEF, sPluginObjectId, sZIndex);
            ePlayerPlugin = document.getElementById(sPluginObjectId);
            this.__defineGetter__("zIndex", function () {
                return innerContainer.style.zIndex
            });
            if (ePlayerPlugin) {
                var evtListener = window["PlayerEventListener" + id] = new _PlayerEventListener(id, this);
                if (bUseSEF) {
                    ePlayerPlugin.Open("Player", "1.000", "Player");
                    if (typeof nFirmwareYear != "null" && nFirmwareYear <= 2011) {
                        alert("register event handler by string");
                        ePlayerPlugin.OnEvent = "PlayerEventListener" + id + ".onEvent"
                    } else {
                        alert("register event handler by function");
                        ePlayerPlugin.OnEvent = function () {
                            evtListener.onEvent.apply(evtListener, arguments)
                        }
                    }
                } else {
                    if (typeof nFirmwareYear != "null" && nFirmwareYear <= 2011) {
                        ePlayerPlugin.OnBufferingStart = "PlayerEventListener" + id + ".onBufferingStart";
                        ePlayerPlugin.OnBufferingComplete = "PlayerEventListener" + id + ".onBufferingComplete";
                        ePlayerPlugin.OnBufferingProgress = "PlayerEventListener" + id + ".onBufferingProgress";
                        ePlayerPlugin.OnRenderingComplete = "PlayerEventListener" + id + ".onRenderingComplete";
                        ePlayerPlugin.OnStreamInfoReady = "PlayerEventListener" + id + ".onStreamInfoReady";
                        ePlayerPlugin.OnCurrentPlayTime = "PlayerEventListener" + id + ".onCurrentPlayTime";
                        ePlayerPlugin.OnRenderError = "PlayerEventListener" + id + ".onRenderError";
                        ePlayerPlugin.OnNetworkDisconnected = "PlayerEventListener" + id + ".onNetworkDisconnected";
                        ePlayerPlugin.OnConnectionFailed = "PlayerEventListener" + id + ".onConnectionFailed";
                        ePlayerPlugin.OnStreamNotFound = "PlayerEventListener" + id + ".onStreamNotFound";
                        ePlayerPlugin.OnAuthenticationFailed = "PlayerEventListener" + id + ".onAuthenticationFailed";
                        ePlayerPlugin.OnResolutionChanged = "PlayerEventListener" + id + ".onResolutionChanged";
                        ePlayerPlugin.OnAdStart = "PlayerEventListener" + id + ".onAdStart";
                        ePlayerPlugin.OnAdEnd = "PlayerEventListener" + id + ".onAdEnd"
                    } else {
                        ePlayerPlugin.onBufferingStart = function () {
                            evtListener.onBufferingStart.apply(evtListener, arguments)
                        };
                        ePlayerPlugin.OnBufferingComplete = function () {
                            evtListener.onBufferingComplete.apply(evtListener, arguments)
                        };
                        ePlayerPlugin.OnBufferingProgress = function () {
                            evtListener.onBufferingProgress.apply(evtListener, arguments)
                        };
                        ePlayerPlugin.OnRenderingComplete = function () {
                            evtListener.onRenderingComplete.apply(evtListener, arguments)
                        };
                        ePlayerPlugin.OnStreamInfoReady = function () {
                            evtListener.onStreamInfoReady.apply(evtListener, arguments)
                        };
                        ePlayerPlugin.OnCurrentPlayTime = function () {
                            evtListener.onCurrentPlayTime.apply(evtListener, arguments)
                        };
                        ePlayerPlugin.OnRenderError = function () {
                            evtListener.onRenderError.apply(evtListener, arguments)
                        };
                        ePlayerPlugin.OnNetworkDisconnected = function () {
                            evtListener.onNetworkDisconnected.apply(evtListener, arguments)
                        };
                        ePlayerPlugin.OnConnectionFailed = function () {
                            evtListener.onConnectionFailed.apply(evtListener, arguments)
                        };
                        ePlayerPlugin.OnStreamNotFound = function () {
                            evtListener.onStreamNotFound.apply(evtListener, arguments)
                        };
                        ePlayerPlugin.OnAuthenticationFailed = function () {
                            evtListener.onAuthenticationFailed.apply(evtListener, arguments)
                        };
                        ePlayerPlugin.OnResolutionChanged = function () {
                            evtListener.onResolutionChanged.apply(evtListener, arguments)
                        };
                        ePlayerPlugin.OnAdStart = function () {
                            evtListener.onAdStart.apply(evtListener, arguments)
                        };
                        ePlayerPlugin.OnAdEnd = function () {
                            evtListener.onAdEnd.apply(evtListener, arguments)
                        }
                    }
                }
            } else {
                alert("[AVPlay" + id + "] ! ERROR ! Fail to set Player plugin object.")
            }
            return ePlayerPlugin;
            function getPluginObjectHTML(useSEF, pluginObjectID, zIndex) {
                var sPluginObjectHTML = "";
                if (useSEF) {
                    sPluginObjectHTML = '<OBJECT id="' + pluginObjectID + '" classid="clsid:SAMSUNG-INFOLINK-SEF" style="position:absolute;left:0px;top:0px;width:0px;height:0px;' + zIndex + 'display:block;"></OBJECT>'
                } else {
                    sPluginObjectHTML = '<OBJECT id="' + pluginObjectID + '" classid="clsid:SAMSUNG-INFOLINK-PLAYER" style="position:absolute;left:0px;top:0px;width:0px;height:0px;' + zIndex + 'display:block;"></OBJECT>'
                }
                alert("[AVPlay" + id + "] getPluginObjectHTML(" + pluginObjectID + "," + zIndex + ") returns " + sPluginObjectHTML);
                return sPluginObjectHTML
            }
        };
        function getIPAddr() {
            var nNetworkInterface = deviceapis._plugin("Network", "GetActiveType");
            var sIPAddr = deviceapis._plugin("Network", "GetIP", nNetworkInterface);
            alert("getIPAddr() returns " + sIPAddr);
            return sIPAddr
        }

        this.getSubtitleAvailable = function () {
            if (bSubtitleAvailable === null) {
                if (nFirmwareYear >= 2012 || (nFirmwareYear == 2011 && nFirmwareVer >= 1006)) {
                    bSubtitleAvailable = true
                } else {
                    bSubtitleAvailable = false
                }
            }
            if (!bSubtitleAvailable) {
                alert("[AVPlay" + id + '] Not Support Subtitle function! It is available with "T-INFOLINK2011-1006" or later.')
            }
            alert("[AVPlay" + id + "] getSubtitleAvailable() returns " + bSubtitleAvailable);
            return bSubtitleAvailable
        };
        this.onEvent = function (type, data) {
            switch (type) {
                case deviceapis.avplay.STREAM_INFO_READY:
                    var resolution = this.getVideoResolution();
                    if (typeof resolution == "string") {
                        resolution = resolution.split("|");
                        if (oPlayOption.displayArea) {
                            this.setDisplayArea(oPlayOption.displayArea)
                        } else {
                            if (bAutoRatio) {
                                var fitDisplayArea = this.getFitDisplayArea(resolution[0], resolution[1]);
                                this.setDisplayArea(fitDisplayArea)
                            }
                        }
                        this.__defineGetter__("videoWidth", function () {
                            return resolution[0]
                        });
                        this.__defineGetter__("videoHeight", function () {
                            return resolution[1]
                        })
                    } else {
                        this.__defineGetter__("videoWidth", function () {
                            return null
                        });
                        this.__defineGetter__("videoHeight", function () {
                            return null
                        })
                    }
                    var nDuration = this.getDuration();
                    var nTotalNumOfAudio = this.getTotalNumOfStreamID(1);
                    var nTotalNumOfSubtitle = this.getTotalNumOfStreamID(5);
                    this.__defineGetter__("totalNumOfAudio", function () {
                        return nTotalNumOfAudio
                    });
                    this.__defineGetter__("totalNumOfSubtitle", function () {
                        return nTotalNumOfSubtitle
                    });
                    if (oPlayOption.macrovision && oPlayOption.macrovision.type !== undefined && oPlayOption.macrovision.ict !== undefined && oPlayOption.macrovision.vbi !== undefined) {
                        this.setMacrovision(oPlayOption.macrovision.type);
                        this.setVBIData(oPlayOption.macrovision.type, oPlayOption.macrovision.vbi);
                        this.setICT(oPlayOption.macrovision.ict);
                        this.__defineGetter__("macrovision", function () {
                            return true
                        })
                    } else {
                        this.__defineGetter__("macrovision", function () {
                            return false
                        })
                    }
                    if (oPlayOption.subtitle) {
                        this.startSubtitle(oPlayOption.subtitle)
                    }
                    if (typeof cbOnPlaySuccess == "function") {
                        cbOnPlaySuccess()
                    }
                    break;
                case deviceapis.avplay.BUFFERING_START:
                    if (this.status == deviceapis.avplay.PLAY_STATE_STOPPED) {
                        alert("[AVPlay" + id + "] This BUFFERING_START event occured after stop() call. skip.");
                        return
                    }
                    this._setStatus(deviceapis.avplay.PLAY_STATE_STARTED);
                    if (oInitOption.bufferingCallback) {
                        if (typeof oInitOption.bufferingCallback.onbufferingstart == "function") {
                            oInitOption.bufferingCallback.onbufferingstart()
                        }
                    }
                    break;
                case deviceapis.avplay.BUFFERING_PROGRESS:
                    if (this.status == deviceapis.avplay.PLAY_STATE_STOPPED) {
                        alert("[AVPlay" + id + "] This BUFFERING_PROGRESS event occured after stop() call. skip.");
                        return
                    }
                    if (oInitOption.bufferingCallback) {
                        if (typeof oInitOption.bufferingCallback.onbufferingprogress == "function") {
                            oInitOption.bufferingCallback.onbufferingprogress(data)
                        }
                    }
                    break;
                case deviceapis.avplay.BUFFERING_COMPLETE:
                    if (oInitOption.bufferingCallback) {
                        if (typeof oInitOption.bufferingCallback.onbufferingcomplete == "function") {
                            oInitOption.bufferingCallback.onbufferingcomplete()
                        }
                    }
                    break;
                case deviceapis.avplay.RENDERING_START:
                    if (this.status == deviceapis.avplay.PLAY_STATE_STOPPED) {
                        alert("[AVPlay" + id + "] This RENDERING_START event occured after stop() call. skip.");
                        return
                    }
                    break;
                case deviceapis.avplay.CURRENT_PLAYBACK_TIME:
                    if (this.status != deviceapis.avplay.PLAY_STATE_STARTED) {
                        alert("[AVPlay" + id + '] This CURRENT_PLAYBACK_TIME event is not occured on "PLAY_STATE_STARTED". skip..');
                        return
                    }
                    iCurrentPlayTime = new PlayTime(data);
                    if (!bFrontPanelLock && bBDPlayer) {
                        iFrontPanel.setTime(iCurrentPlayTime)
                    }
                    if (oInitOption.playCallback) {
                        if (typeof oInitOption.playCallback.oncurrentplaytime == "function") {
                            oInitOption.playCallback.oncurrentplaytime(iCurrentPlayTime)
                        }
                    }
                    break;
                case deviceapis.avplay.RENDERING_COMPLETE:
                    setTimeout(function () {
                        self.stop();
                        if (oInitOption.playCallback) {
                            if (typeof oInitOption.playCallback.onstreamcompleted == "function") {
                                oInitOption.playCallback.onstreamcompleted()
                            }
                        }
                    }, 0);
                    break;
                case deviceapis.avplay.CONNECTION_FAILED:
                case deviceapis.avplay.STREAM_NOT_FOUND:
                    this.stop();
                    if (typeof oInitOption.playCallback.onerror == "function") {
                        oInitOption.playCallback.onerror(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_FOUND_ERR, "NOT_FOUND_ERR"))
                    }
                    break;
                case deviceapis.avplay.AUTHENTICATION_FAILED:
                    this.stop();
                    if (typeof oInitOption.playCallback.onerror == "function") {
                        oInitOption.playCallback.onerror(new SDeviceAPIError(SDeviceAPIError.prototype.SECURITY_ERR, "SECURITY_ERR"))
                    }
                    break;
                case deviceapis.avplay.NETWORK_DISCONNECTED:
                    this.stop();
                    if (typeof oInitOption.playCallback.onerror == "function") {
                        oInitOption.playCallback.onerror(new SDeviceAPIError(SDeviceAPIError.prototype.NETWORK_ERR, "NETWORK_ERR"))
                    }
                    break;
                case deviceapis.avplay.NETWORK_SLOW:
                    this.stop();
                    if (typeof oInitOption.playCallback.onerror == "function") {
                        oInitOption.playCallback.onerror(new SDeviceAPIError(SDeviceAPIError.prototype.NETWORK_SLOW_ERR, "NETWORK_SLOW_ERR"))
                    }
                    break;
                case deviceapis.avplay.RENDER_ERROR:
                    this.stop();
                    if (oInitOption.playCallback) {
                        if (typeof oInitOption.playCallback.onerror == "function") {
                            switch (Number(data)) {
                                case deviceapis.avplay.UNKNOWN_ERROR:
                                    oInitOption.playCallback.onerror(new SDeviceAPIError(SDeviceAPIError.prototype.UNKNOWN_ERR, "UNKNOWN_ERR"));
                                    break;
                                case deviceapis.avplay.UNSUPPORTED_CONTAINER:
                                    oInitOption.playCallback.onerror(new SDeviceAPIError(SDeviceAPIError.prototype.AVPLAY_UNSUPPORTED_CONTAINER_ERR, "AVPLAY_UNSUPPORTED_CONTAINER_ERR"));
                                    break;
                                case deviceapis.avplay.UNSUPPORTED_VIDEO_CODEC:
                                    oInitOption.playCallback.onerror(new SDeviceAPIError(SDeviceAPIError.prototype.AVPLAY_UNSUPPORTED_VIDEO_FORMAT_ERR, "AVPLAY_UNSUPPORTED_VIDEO_FORMAT_ERR"));
                                    break;
                                case deviceapis.avplay.UNSUPPORTED_AUDIO_CODEC:
                                    oInitOption.playCallback.onerror(new SDeviceAPIError(SDeviceAPIError.prototype.AVPLAY_UNSUPPORTED_AUDIO_FORMAT_ERR, "AVPLAY_UNSUPPORTED_AUDIO_FORMAT_ERR"));
                                    break;
                                case deviceapis.avplay.UNSUPPORTED_VIDEO_RESOLUTION:
                                    oInitOption.playCallback.onerror(new SDeviceAPIError(SDeviceAPIError.prototype.AVPLAY_UNSUPPORTED_VIDEO_RESOLUTION_ERR, "AVPLAY_UNSUPPORTED_VIDEO_RESOLUTION_ERR"));
                                    break;
                                case deviceapis.avplay.UNSUPPORTED_VIDEO_FRAMERATE:
                                    oInitOption.playCallback.onerror(new SDeviceAPIError(SDeviceAPIError.prototype.AVPLAY_UNSUPPORTED_VIDEO_FRAMERATE_ERR, "AVPLAY_UNSUPPORTED_VIDEO_FRAMERATE_ERR"));
                                    break;
                                case deviceapis.avplay.CURRUPTED_STREAM:
                                    oInitOption.playCallback.onerror(new SDeviceAPIError(SDeviceAPIError.prototype.AVPLAY_CURRUPTED_STREAM_ERR, "AVPLAY_CURRUPTED_STREAM_ERR"));
                                    break;
                                default:
                                    alert("[AVPlay" + id + "] !ERROR! No detail category..");
                                    oInitOption.playCallback.onerror(new SDeviceAPIError(SDeviceAPIError.prototype.UNKNOWN_ERR, "UNKNOWN_ERR"));
                                    break
                            }
                        }
                    }
                    break;
                case deviceapis.avplay.CUSTOM_ERROR:
                    this.stop();
                    if (typeof oInitOption.playCallback.onerror == "function") {
                        oInitOption.playCallback.onerror(new SDeviceAPIError(SDeviceAPIError.prototype.CUSTOM_ERR, data))
                    }
                    break;
                case deviceapis.avplay.RTSP_STATE:
                    if (typeof oInitOption.playCallback.onerror == "function") {
                        oInitOption.playCallback.onerror(new SDeviceAPIError(SDeviceAPIError.prototype.RTSP_STATE, data))
                    }
                    break;
                case deviceapis.avplay.AD_START:
                case deviceapis.avplay.AD_END:
                    break;
                case deviceapis.avplay.RESOLUTION_CHANGED:
                    if (oInitOption.playCallback) {
                        if (typeof oInitOption.playCallback.onresolutionchanged == "function") {
                            var resolution = this.getVideoResolution().split("|");
                            oInitOption.playCallback.onresolutionchanged(resolution[0], resolution[1])
                        }
                    }
                    break;
                case deviceapis.avplay.BITRATE_CHANGED:
                case deviceapis.avplay.CUSTOM:
                    break;
                case deviceapis.avplay.SUBTITLE:
                    if (bBlockSubtitleEvent) {
                        alert("[AVPlay" + id + "] stopSubtitle() was called. skip this event.");
                        return
                    } else {
                        if (typeof cbOnSubtitle == "function") {
                            cbOnSubtitle(nSubtitleSyncTime, data)
                        }
                    }
                    break;
                default:
                    break
            }
        };
        this.getFitDisplayArea = function (width, height) {
            var FRAME_LEFT = iDisplayRect.left, FRAME_TOP = iDisplayRect.top, FRAME_WIDTH = iDisplayRect.width, FRAME_HEIGHT = iDisplayRect.height, nLeft, nTop, nWidth, nHeight, retValue, fnRound = Math.round;
            if (width / height > FRAME_WIDTH / FRAME_HEIGHT) {
                nHeight = fnRound((FRAME_WIDTH * height) / width);
                nWidth = FRAME_WIDTH
            } else {
                nWidth = fnRound((FRAME_HEIGHT * width) / height);
                nHeight = FRAME_HEIGHT
            }
            nLeft = FRAME_LEFT + fnRound((FRAME_WIDTH - nWidth) / 2);
            nTop = FRAME_TOP + fnRound((FRAME_HEIGHT - nHeight) / 2);
            retValue = new SRect(nLeft, nTop, nWidth, nHeight);
            alert("[AVPlay" + id + "] getFitDisplayArea(" + width + "," + height + ") returns " + retValue);
            return retValue
        };
        function setScreenSaver(on, second) {
            alert("[AVPlay" + id + "] setScreenSaver(" + on + "," + (second ? second : "") + ")");
            if (on) {
                if (!second) {
                    second = getAutoProtectionTime()
                }
                deviceapis._plugin("NNavi", "SendEventToDevice", 3, second)
            } else {
                deviceapis._plugin("NNavi", "SendEventToDevice", 4, 0)
            }
            function getAutoProtectionTime() {
                var second = 0;
                var profile = deviceapis._plugin("TVMW", "GetProfile", deviceapis._pluginDef.PL_PRFID_AUTO_PROTECTION_TIME);
                var duration_min = null;
                var fimwareVer = deviceapis._plugin("NNavi", "GetFirmware");
                if (typeof fimwareVer === "string" && fimwareVer >= "T-INFOLINK2013") {
                    duration_min = {0: 5, 1: 10, 2: 20, 3: 30, 4: 40, 5: 60, 6: 120, 7: 240, 8: 480, 9: 600, 10: -1,}
                } else {
                    duration_min = {0: 10, 1: 20, 2: 40, 3: 60, 4: 120, 5: 240, 6: 480, 7: 600, 8: -1,}
                }
                if (duration_min && duration_min.hasOwnProperty(parseInt(profile))) {
                    if (duration_min[parseInt(profile)] > 0) {
                        second = duration_min[parseInt(profile)] * 60
                    } else {
                        return
                    }
                } else {
                    second = 60 * 60
                }
                return second
            }
        }

        function FrontPanel() {
            this.Enum = {
                FRONT_DISPLAY_PLAY: 100,
                FRONT_DISPLAY_STOP: 101,
                FRONT_DISPLAY_PAUSE: 102,
                FRONT_DISPLAY_ONLINE: 200
            };
            this.setState = function (state) {
                alert("[FrontPanel] setState(" + state + ")");
                deviceapis._plugin("FrontPanel", "DisplayVFD_Show", state)
            };
            this.setTime = function (playTime) {
                alert("[FrontPanel] setTime(" + playTime + ")");
                var aTime = playTime.timeString.split(":");
                deviceapis._plugin("FrontPanel", "DisplayVFD_Time", aTime[0], aTime[1], aTime[2])
            }
        }
    }

    function _PlayerEventListener(id, avPlay) {
        var sName = "AVPlay" + id;
        this.iAVPlay = avPlay;
        this.setMasterObject = function (avPlay) {
            this.iAVPlay = avPlay
        };
        this.onBufferingStart = function () {
            alert("[AVPlay" + id + "] PlayerEventListener : onBufferingStart()");
            this.iAVPlay.onEvent(deviceapis.avplay.BUFFERING_START)
        };
        this.onBufferingComplete = function () {
            alert("[AVPlay" + id + "] PlayerEventListener : onBufferingComplete()");
            this.iAVPlay.onEvent(deviceapis.avplay.BUFFERING_COMPLETE)
        };
        this.onBufferingProgress = function (percent) {
            alert("[AVPlay" + id + "] PlayerEventListener : onBufferingProgress(" + percent + ")");
            this.iAVPlay.onEvent(deviceapis.avplay.BUFFERING_PROGRESS, percent)
        };
        this.onStreamInfoReady = function () {
            alert("[AVPlay" + id + "] PlayerEventListener : onStreamInfoReady()");
            this.iAVPlay.onEvent(deviceapis.avplay.STREAM_INFO_READY)
        };
        this.onCurrentPlayTime = function (ms) {
            alert("[AVPlay" + id + "] PlayerEventListener : onCurrentPlayTime(" + ms + ")");
            this.iAVPlay.onEvent(deviceapis.avplay.CURRENT_PLAYBACK_TIME, ms)
        };
        this.onRenderingComplete = function () {
            alert("[AVPlay" + id + "] PlayerEventListener : onRenderingComplete()");
            this.iAVPlay.onEvent(deviceapis.avplay.RENDERING_COMPLETE)
        };
        this.onConnectionFailed = function () {
            alert("[AVPlay" + id + "] PlayerEventListener : onConnectionFailed()");
            this.iAVPlay.onEvent(deviceapis.avplay.CONNECTION_FAILED)
        };
        this.onAuthenticationFailed = function () {
            alert("[AVPlay" + id + "] PlayerEventListener : onAuthenticationFailed()");
            this.iAVPlay.onEvent(deviceapis.avplay.AUTHENTICATION_FAILED)
        };
        this.onStreamNotFound = function () {
            alert("[AVPlay" + id + "] PlayerEventListener : onStreamNotFound()");
            this.iAVPlay.onEvent(deviceapis.avplay.STREAM_NOT_FOUND)
        };
        this.onNetworkDisconnected = function () {
            alert("[AVPlay" + id + "] PlayerEventListener : onNetworkDisconnected()");
            this.iAVPlay.onEvent(deviceapis.avplay.NETWORK_DISCONNECTED)
        };
        this.onRenderError = function (errorCode) {
            alert("[AVPlay" + id + "] PlayerEventListener : onRenderError(" + errorCode + ")");
            this.iAVPlay.onEvent(deviceapis.avplay.RENDER_ERROR, errorCode)
        };
        this.onAdStart = function () {
            alert("[AVPlay" + id + "] PlayerEventListener : onAdStart()");
            this.iAVPlay.onEvent(deviceapis.avplay.AD_START)
        };
        this.onAdEnd = function () {
            alert("[AVPlay" + id + "] PlayerEventListener : onAdEnd()");
            this.iAVPlay.onEvent(deviceapis.avplay.AD_END)
        };
        this.onResolutionChanged = function () {
            alert("[AVPlay" + id + "] PlayerEventListener : onResolutionChanged()");
            this.iAVPlay.onEvent(deviceapis.avplay.RESOLUTION_CHANGED)
        };
        this.onEvent = function (type, param) {
            alert("[AVPlay" + id + "] PlayerEventListener : onEvent(" + type + "," + param + ") -> " + this.iAVPlay.Event2String[type]);
            this.iAVPlay.onEvent(type, param)
        }
    }
})();
(function () {
    deviceapis.imageview = {
        EFFECT_INIT: -1,
        EFFECT_FADE1: 0,
        EFFECT_FADE2: 1,
        EFFECT_BLIND: 2,
        EFFECT_SPIRAL: 3,
        EFFECT_CHECKER: 4,
        EFFECT_LINEAR: 5,
        EFFECT_STAIR: 6,
        EFFECT_WIPE: 7,
        EFFECT_RANDOM: 8,
        EFFECT_NONE: 9,
        CONNECTION_FAILED: 1,
        AUTHENTICATION_FAILED: 2,
        STREAM_NOT_FOUND: 3,
        NETWORK_DISCONNECTED: 4,
        NETWORK_SLOW: 5,
        RENDER_ERROR: 6,
        RENDERING_START: 7,
        RENDERING_COMPLETE: 8,
        STREAM_INFO_READY: 9,
        DECODING_COMPLETE: 10,
        BUFFERING_START: 11,
        BUFFERING_COMPLETE: 12,
        BUFFERING_PROGRESS: 13,
        CURRENT_DISPLAY_TIME: 14,
        AD_START: 15,
        AD_END: 16,
        RESOLUTION_CHANGED: 17,
        BITRATE_CHANGED: 18,
        SUBTITLE: 19,
        CUSTOM: 100,
        IMAGEVIEW_STATE_IDLE: 0,
        IMAGEVIEW_STATE_INITIALIZED: 1,
        IMAGEVIEW_STATE_PREPARED: 3,
        IMAGEVIEW_STATE_DRAWN: 4,
        IMAGEVIEW_STATE_STOPPED: 5,
        getImageView: function (successCallback, errorCallback) {
            if (!_isType(successCallback, "function") || !_isType(errorCallback, "undefined|function|null")) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (!bInit) {
                init()
            }
            var iImageView = null;
            if (nDevice == DEVICE_BROADCOM2010) {
                if (nId == 0) {
                    iImageView = new _ImageView_Broadcom2010(nId)
                } else {
                    alert("[ImageView] 2010 Broadcom can use only one ImageView instance.");
                    if (typeof errorCallback == "function") {
                        errorCallback(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"))
                    }
                    return
                }
            } else {
                if (nDevice == DEVICE_2010 || nDevice == DEVICE_2011) {
                    if (nId == 0) {
                        iImageView = new _ImageView(nId)
                    } else {
                        alert("[ImageView] 2010, 2011 device can use only one ImageView instance.");
                        if (typeof errorCallback == "function") {
                            errorCallback(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"))
                        }
                        return
                    }
                } else {
                    iImageView = new _ImageView(nId)
                }
            }
            alert("[ImageView] getImageView() succeeded. -> " + nId + "th " + iImageView);
            aImageViewInstance[nId] = iImageView;
            nId += 1;
            successCallback(iImageView)
        },
        _getAllInstance: function () {
            return aImageViewInstance
        },
        _destroyAll: function () {
            alert("[ImageView] _destroyAll() with " + aImageViewInstance.length + " instances.");
            for (var i = 0; i < aImageViewInstance.length; i++) {
                alert("[ImageView] Destroy " + i + "th imageview.");
                aImageViewInstance[i].destroy()
            }
        },
    };
    var bInit = false, aBroadcom2010ModelCode = ["BD-C5500_US", "BD-C6500_US", "Broadcom_BD_2010_3D"], DEVICE_BROADCOM2010 = 1, DEVICE_2010 = 2, DEVICE_2011 = 3, DEVICE_2012 = 4, nDevice = DEVICE_2012, nId = 0, aImageViewInstance = [], bSupportMultiApplication = false;

    function init() {
        var sModelCode = deviceapis.tv.info.getModel(), sServiceConfig = deviceapis._plugin("NNavi", "GetServiceConfig"), oServiceConfig = null;
        if (aBroadcom2010ModelCode.join(",").indexOf(sModelCode) != -1) {
            nDevice = DEVICE_BROADCOM2010;
            alert("[ImageView] DEVICE_BROADCOM2010")
        } else {
            if (navigator.userAgent.toLowerCase().indexOf("applewebkit") >= 0 && window.curWidget) {
                nDevice = DEVICE_2012;
                alert("[ImageView] DEVICE_2012")
            } else {
                var browserVersion = navigator.appVersion.toLowerCase();
                if (parseInt(browserVersion.split("(")[0], 10) < 6) {
                    nDevice = DEVICE_2010;
                    alert("[ImageView] DEVICE_2010")
                } else {
                    nDevice = DEVICE_2011;
                    alert("[ImageView] DEVICE_2011")
                }
            }
        }
        alert("[ImageView] sServiceConfig: " + sServiceConfig);
        if (sServiceConfig) {
            try {
                oServiceConfig = eval("(" + sServiceConfig + ")")
            } catch (e) {
                alert("[ImageView] " + e)
            }
        }
        bSupportMultiApplication = false;
        var notSupportMultiTasking = deviceapis._plugin("TaskManager", "CheckSupportMultiTaskingApp", 0);
        var supportValue = deviceapis._plugin("TaskManager", "CheckSupportMultiTaskingApp", 2);
        alert("notSupportMultiTasking......................" + notSupportMultiTasking);
        alert("supportValue......................" + supportValue);
        if (notSupportMultiTasking == 0 && supportValue == 1) {
            bSupportMultiApplication = true
        }
        alert("[ImageView] bSupportMultiApplication: " + bSupportMultiApplication);
        window.onHide = deviceapis.imageview._destroyAll;
        bInit = true
    }

    deviceapis.imageview._bSlideShowMode = false;
    deviceapis.imageview._bCallSetEffectWithINIT = false;
    deviceapis.imageview._setSlideShow = function (bSlideShowMode, iImageView) {
        if (deviceapis.imageview._bSlideShowMode && !bSlideShowMode) {
            deviceapis.imageview._bCallSetEffectWithINIT = false;
            if (!iImageView.setTransitionEffect(deviceapis.imageview.EFFECT_INIT)) {
                iImageView.initPlayer("http://for_create_media_instance/");
                iImageView.setTransitionEffect(deviceapis.imageview.EFFECT_INIT);
                iImageView.stop()
            }
            deviceapis.imageview._bSlideShowMode = false
        } else {
            if (!(deviceapis.imageview._bSlideShowMode) && bSlideShowMode) {
                deviceapis.imageview._bCallSetEffectWithINIT = true;
                deviceapis.imageview._bSlideShowMode = true
            }
        }
    };
    function _ImageView(id) {
        var sName = "ImageView" + id;
        var sVersion = "3.0";
        this.__defineGetter__("id", function () {
            return id
        });
        this.__defineGetter__("url", function () {
            return null
        });
        this.__defineGetter__("imageWidth", function () {
            return null
        });
        this.__defineGetter__("imageHeight", function () {
            return null
        });
        this.__defineGetter__("displayRect", function () {
            return null
        });
        this.__defineGetter__("displayArea", function () {
            return null
        });
        this.__defineGetter__("containerID", function () {
            return null
        });
        this.__defineGetter__("zIndex", function () {
            return null
        });
        this.__defineGetter__("effect", function () {
            return null
        });
        this.__defineGetter__("status", function () {
            return deviceapis.imageview.IMAGEVIEW_STATE_IDLE
        });
        this.init = function (option) {
            alert("[ImageView" + id + "] init(" + option + ")");
            option = option || {};
            if (!_isType(option.containerID, "undefined|string") || !_isType(option.zIndex, "undefined|number") || !_isType(option.displayRect, "undefined|object")) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (_isType(option.displayRect, "object")) {
                if (!_isType(option.displayRect.top, "number") || !_isType(option.displayRect.left, "number") || !_isType(option.displayRect.width, "number") || !_isType(option.displayRect.height, "number")) {
                    throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
                }
            }
            oInitOption = option || {};
            initializeEnv();
            if (!bInitialize) {
                initialize(oInitOption.containerID || null, oInitOption.zIndex || null, IMAGEVIEWER_OBJECT_ID + id)
            } else {
                if (oInitOption.containerID) {
                    this.setImageViewerPluginObject(oInitOption.containerID, oInitOption.zIndex || null, IMAGEVIEWER_OBJECT_ID + id)
                }
            }
            if (oInitOption.displayRect) {
                this.setDisplayRect(oInitOption.displayRect)
            } else {
                alert("[ImageView" + id + "] !WARNNING! > You did Not set displayRect. set displayRect is full size")
            }
            if (oInitOption.autoRatio !== undefined) {
                bAutoRatio = oInitOption.autoRatio
            }
            this._setStatus(deviceapis.imageview.IMAGEVIEW_STATE_INITIALIZED);
            return true
        };
        this.prepare = function (successCallback, errorCallback, url, option) {
            alert("[ImageView" + id + "] prepare(" + typeof successCallback + "," + typeof errorCallback + "," + url + "," + option + ")");
            if (!_isType(successCallback, "undefined|function|null") || !_isType(errorCallback, "undefined|function|null") || !_isType(url, "string") || !_isType(option, "undefined|object|null")) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (_isType(option, "object")) {
                if (!_isType(option.width, "undefined|number|null") || !_isType(option.height, "undefined|number|null") || !_isType(option.effect, "undefined|number|null")) {
                    throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
                }
            }
            if (!bInitialize) {
                alert("[ImageView" + id + "] Do init() first..");
                return false
            }
            cbOnDecordingComplete = successCallback;
            cbOnPrepareError = errorCallback;
            this.__defineGetter__("url", function () {
                return url
            });
            this.stop();
            this.initPlayer(url);
            if (bSlideshowMode) {
                if (option && option.effect !== undefined) {
                    this.setTransitionEffect(option.effect);
                    this.__defineGetter__("effect", function () {
                        return option.effect
                    })
                } else {
                    this.setTransitionEffect(deviceapis.imageview.EFFECT_NONE);
                    this.__defineGetter__("effect", function () {
                        return deviceapis.imageview.EFFECT_NONE
                    })
                }
            } else {
                this.__defineGetter__("effect", function () {
                    return deviceapis.imageview.EFFECT_NONE
                })
            }
            this.setDisplayLock(true);
            if (!bSlideshowMode) {
                if (option && option.width && option.height) {
                    var fitDisplayArea = this.getFitDisplayArea(option.width, option.height);
                    this.setDisplayArea(fitDisplayArea)
                } else {
                    this.setDisplayArea(iDisplayRect)
                }
            }
            this.__defineGetter__("imageWidth", function () {
                return 0
            });
            this.__defineGetter__("imageHeight", function () {
                return 0
            });
            this.showImage()
        };
        this.draw = function (successCallback, errorCallback) {
            alert("[ImageView" + id + "] draw(" + typeof successCallback + "," + typeof errorCallback + ")");
            if (!_isType(successCallback, "undefined|function|null") || !_isType(errorCallback, "undefined|function|null")) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (!bInitialize) {
                alert("[ImageView" + id + "] Do init() first..");
                return false
            }
            cbOnRenderingComplete = successCallback;
            cbOnDrawError = errorCallback;
            this.setDisplayLock(false)
        };
        this.clear = function () {
            alert("[ImageView" + id + "] clear()");
            if (!bInitialize) {
                alert("[ImageView" + id + "] Do init() first..");
                return false
            }
            this.stop();
            var bUseSEF = deviceapis._plugin.getSEFAvailable();
            if (bUseSEF) {
                var retValue = deviceapis._plugin(eImageViewerPlugin, "ClearScreenForImage")
            } else {
                var retValue = deviceapis._plugin(eImageViewerPlugin, "ClearScreen")
            }
            alert("[ImageView" + id + "] clear() returns " + (retValue == 1));
            return retValue == 1
        };
        this.show = function () {
            alert("[ImageView" + id + "] show()");
            if (!bInitialize) {
                alert("[ImageView" + id + "] Do init() first..");
                return false
            }
            eInnerContainerDiv.style.visibility = "visible"
        };
        this.hide = function () {
            alert("[ImageView" + id + "] hide()");
            if (!bInitialize) {
                alert("[ImageView" + id + "] Do init() first..");
                return false
            }
            eInnerContainerDiv.style.visibility = "hidden"
        };
        this.setDisplayRect = function (rect) {
            alert("[ImageView" + id + "] setDisplayRect(" + rect + ")");
            if (!_isType(rect, "object") || !_isType(rect.top, "number") || !_isType(rect.left, "number") || !_isType(rect.width, "number") || !_isType(rect.height, "number")) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (!bInitialize) {
                alert("[ImageView" + id + "] Do init() first..");
                return false
            }
            if (!rect) {
                alert("[ImageView" + id + "] No rect parameter. Set DisplayRect to Full screen..");
                rect = new SRect(0, 0, curWidget.width, curWidget.height)
            }
            iDisplayRect = rect;
            this.__defineGetter__("displayRect", function () {
                return rect
            });
            eInnerContainerDiv.style.left = iDisplayRect.left + "px";
            eInnerContainerDiv.style.top = iDisplayRect.top + "px";
            eInnerContainerDiv.style.width = iDisplayRect.width + "px";
            eInnerContainerDiv.style.height = iDisplayRect.height + "px";
            eImageViewerPlugin.style.width = iDisplayRect.width + "px";
            eImageViewerPlugin.style.height = iDisplayRect.height + "px"
        };
        this.setSlideShow = function (on) {
            alert("[ImageView" + id + "] setSlideShow(" + on + ")");
            if (!_isType(on, "boolean")) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (!bInitialize) {
                alert("[ImageView" + id + "] Do init() first..");
                return false
            }
            if (on) {
                bSlideshowMode = true;
                deviceapis.imageview._setSlideShow(true);
                bSetSlideShowStatusOn = true
            } else {
                bSlideshowMode = false;
                deviceapis.imageview._setSlideShow(false, this);
                this.setSlideShowStatus(false)
            }
            return true
        };
        this.getTransitionEffectList = function () {
            if (!bInitialize) {
                alert("[ImageView" + id + "] Do init() first..");
                return false
            }
            var bEffectAvailable = this.isTransitionEffectAvailable();
            var effectList = "";
            alert("nFirmwareYear : " + nFirmwareYear + ", bEffectAvailable : " + bEffectAvailable);
            if (nFirmwareYear >= 2011) {
                if (bEffectAvailable) {
                    effectList = getTransitionEffectList()
                } else {
                    effectList = "NONE"
                }
            } else {
                if (nFirmwareYear == 2010) {
                    if (bEffectAvailable) {
                        effectList = "FADE1,FADE2,BLIND,SPIRAL,CHECKER,LINEAR,STAIR,WIPE,RANDOM,NONE"
                    } else {
                        effectList = "NONE"
                    }
                } else {
                    if (nFirmwareYear == -1) {
                        effectList = "NONE"
                    } else {
                        effectList = getTransitionEffectList();
                        if (effectList == deviceapis._pluginDef.PLR_NOT_IMPLEMENT) {
                            effectList = "NONE"
                        }
                    }
                }
            }
            alert("[AF service.imagecore] Available Effects : " + effectList);
            var aEffectListStr = effectList.split(",");
            var aEffectListEnum = [];
            for (var i = 0; i < aEffectListStr.length; i++) {
                if (deviceapis.imageview["EFFECT_" + aEffectListStr[i]] !== undefined) {
                    aEffectListEnum.push(deviceapis.imageview["EFFECT_" + aEffectListStr[i]])
                }
            }
            alert("[AF service.imagecore] getTransitionEffectList() returns " + aEffectListEnum);
            return aEffectListEnum;
            function getTransitionEffectList() {
                var retValue = deviceapis._plugin(eImageViewerPlugin, "GetTransitionEffectList");
                alert("[ImageView" + id + "] getTransitionEffectList() returns " + retValue);
                return retValue
            }
        };
        this.getZIndex = function () {
            if (!bInitialize) {
                alert("[ImageView" + id + "] Do init() first..");
                return false
            }
            alert("[ImageView" + id + "] getZIndex() returns " + this.zIndex);
            return this.zIndex
        };
        this.setZIndex = function (zIndex) {
            alert("[ImageView" + id + "] setZIndex(" + zIndex + ")");
            if (!bInitialize) {
                alert("[ImageView" + id + "] Do init() first..");
                return false
            }
            document.getElementById(IMAGEVIEWER_CONTAINER_DIV_ID + id).style.zIndex = zIndex
        };
        this.initPlayer = function (url) {
            if (!bInitialize) {
                initialize()
            }
            url = url.replace(/&amp;/g, "&");
            var retValue = deviceapis._plugin(eImageViewerPlugin, "InitPlayer", url);
            alert("[ImageView" + id + "] initPlayer(" + url + ") returns " + (retValue == 1));
            if (deviceapis.imageview._bCallSetEffectWithINIT) {
                this.setTransitionEffect(deviceapis.imageview.EFFECT_INIT);
                deviceapis.imageview._bCallSetEffectWithINIT = false
            }
            return retValue == 1
        };
        this.showImage = function () {
            if (!bInitialize) {
                initialize()
            }
            var bUseSEF = deviceapis._plugin.getSEFAvailable();
            if (bUseSEF) {
                var retValue = deviceapis._plugin(eImageViewerPlugin, "StartPlayback")
            } else {
                var retValue = deviceapis._plugin(eImageViewerPlugin, "ShowImage")
            }
            alert("[ImageView" + id + "] showImage() returns " + (retValue == 1));
            return retValue == 1
        };
        this.stop = function () {
            var retValue = deviceapis._plugin(eImageViewerPlugin, "Stop");
            self._setStatus(deviceapis.imageview.IMAGEVIEW_STATE_STOPPED);
            alert("[ImageView" + id + "] stop() returns " + (retValue == 1));
            return retValue == 1
        };
        this.setTransitionEffect = function (effect) {
            var retValue = deviceapis._plugin(eImageViewerPlugin, "SetTransitionEffect", effect);
            alert("[ImageView" + id + "] setTransitionEffect(" + effect + ") returns " + (retValue == 1));
            return retValue == 1
        };
        this.setDisplayLock = function (bLock) {
            var retValue = deviceapis._plugin(eImageViewerPlugin, "SetDisplayLock", bLock == true ? 1 : 0);
            alert("[ImageView" + id + "] setDisplayLock(" + bLock + ") returns " + (retValue == 1));
            return retValue == 1
        };
        this.setDisplayArea = function (rect) {
            var retValue = null;
            var pluginVer = deviceapis._plugin(eImageViewerPlugin, "GetVersion");
            if (pluginVer.isSEF) {
                retValue = deviceapis._plugin(eImageViewerPlugin, "SetDisplayArea", rect.left, rect.top, rect.width, rect.height, curWidget.height)
            } else {
                var resolutionConstant;
                if (curWidget.height == 540) {
                    resolutionConstant = 1
                } else {
                    if (curWidget.height == 720) {
                        resolutionConstant = 0.75
                    } else {
                        if (curWidget.height == 1080) {
                            resolutionConstant = 0.5
                        } else {
                            resolutionConstant = 1
                        }
                    }
                }
                var nLeft = Math.round(rect.left * resolutionConstant);
                var nTop = Math.round(rect.top * resolutionConstant);
                var nWidth = Math.round(rect.width * resolutionConstant);
                var nHeight = Math.round(rect.height * resolutionConstant);
                retValue = deviceapis._plugin(eImageViewerPlugin, "SetDisplayArea", nLeft, nTop, nWidth, nHeight)
            }
            this.__defineGetter__("displayArea", function () {
                return rect
            });
            alert("[ImageView" + id + "] setDisplayArea(" + rect + ") returns " + (retValue == 1));
            return retValue == 1
        };
        this.isTransitionEffectAvailable = function () {
            var retValue = deviceapis._plugin(eImageViewerPlugin, "IsTransitionEffectAvailable");
            alert("[ImageView" + id + "] isTransitionEffectAvailable() returns " + (retValue == 1));
            return retValue == 1
        };
        this.setSlideShowStatus = function (on) {
            var retValue = deviceapis._plugin(eImageViewerPlugin, "SetSlideShowStatus", on);
            alert("[ImageView" + id + "] setSlideShowStatus(" + on + ") returns " + retValue);
            return retValue
        };
        this.getVideoResolution = function () {
            var retValue = null;
            var bUseSEF = deviceapis._plugin.getSEFAvailable();
            if (bUseSEF) {
                retValue = deviceapis._plugin(eImageViewerPlugin, "GetVideoResolution")
            } else {
                retValue = eImageViewerPlugin.GetVideoWidth() + "|" + eImageViewerPlugin.GetVideoHeight()
            }
            alert("[ImageView" + id + "] getVideoResolution() returns " + retValue);
            return retValue
        };
        var IMAGEVIEWER_OBJECT_ID = "_plugin_imageviewer_";
        var IMAGEVIEWER_OBJECT_Z_INDEX = 10;
        var IMAGEVIEWER_CONTAINER_DIV_ID = "_pluginObjectImageviewerContainer_";
        var IMAGEVIEWER_CONTAINER_DIV_Z_INDEX = 10;
        var self = this;
        var eImageViewerPlugin = null;
        var eInnerContainerDiv = null;
        var bInitialize = false;
        var iDisplayRect = null;
        var bAutoRatio = false;
        var bSlideshowMode = false;
        var bSetSlideShowStatusOn = false;
        var oInitOption = {};
        var cbOnDecordingComplete = null;
        var cbOnPrepareError = null;
        var cbOnRenderingComplete = null;
        var cbOnDrawError = null;
        var nFirmwareYear = null;
        var nFirmwareVer = null;
        var bBufferingComplete = true;
        this.Event2String = {};
        this.Event2String[deviceapis.imageview.STREAM_INFO_READY] = "STREAM_INFO_READY";
        this.Event2String[deviceapis.imageview.BUFFERING_START] = "BUFFERING_START";
        this.Event2String[deviceapis.imageview.BUFFERING_COMPLETE] = "BUFFERING_COMPLETE";
        this.Event2String[deviceapis.imageview.DECODING_COMPLETE] = "DECODING_COMPLETE";
        this.Event2String[deviceapis.imageview.RENDERING_COMPLETE] = "RENDERING_COMPLETE";
        this.Event2String[deviceapis.imageview.CONNECTION_FAILED] = "CONNECTION_FAILED";
        this.Event2String[deviceapis.imageview.AUTHENTICATION_FAILED] = "AUTHENTICATION_FAILED";
        this.Event2String[deviceapis.imageview.STREAM_NOT_FOUND] = "STREAM_NOT_FOUND";
        this.Event2String[deviceapis.imageview.NETWORK_DISCONNECTED] = "NETWORK_DISCONNECTED";
        this.Event2String[deviceapis.imageview.NETWORK_SLOW] = "NETWORK_SLOW";
        this.Event2String[deviceapis.imageview.RENDER_ERROR] = "RENDER_ERROR";
        this.State2String = {};
        this.State2String[deviceapis.imageview.IMAGEVIEW_STATE_IDLE] = "IMAGEVIEW_STATE_IDLE";
        this.State2String[deviceapis.imageview.IMAGEVIEW_STATE_INITIALIZED] = "IMAGEVIEW_STATE_INITIALIZED";
        this.State2String[deviceapis.imageview.IMAGEVIEW_STATE_PREPARED] = "IMAGEVIEW_STATE_PREPARED";
        this.State2String[deviceapis.imageview.IMAGEVIEW_STATE_DRAWN] = "IMAGEVIEW_STATE_DRAWN";
        this.State2String[deviceapis.imageview.IMAGEVIEW_STATE_STOPPED] = "IMAGEVIEW_STATE_STOPPED";
        function initialize(containerID, zIndex, pluginObjectID) {
            alert("[ImageView" + id + "] initialize(" + (containerID || "") + "," + (zIndex || "") + "," + (pluginObjectID || "") + ")");
            var sFirmware = deviceapis._plugin("NNavi", "GetFirmware");
            alert("[ImageView" + id + "] Firmware : " + sFirmware);
            var aResult = sFirmware.match(/(\d+)-(\d+)/);
            nFirmwareYear = aResult[1];
            nFirmwareVer = aResult[2];
            self.setImageViewerPluginObject(containerID, zIndex, pluginObjectID);
            if (nFirmwareYear >= 2012) {
                window.addEventListener("unload", function () {
                    alert("[ImageView" + id + "] !!!WINDOW UNLOAD!!!");
                    self.destroy()
                })
            } else {
                document.getElementsByTagName("body")[0].addEventListener("unload", self.destroy)
            }
            deviceapis._plugin("TVMW", "GetVersion");
            bInitialize = true
        }

        function initializeEnv() {
            self.__defineGetter__("url", function () {
                return null
            });
            self.__defineGetter__("imageWidth", function () {
                return null
            });
            self.__defineGetter__("imageHeight", function () {
                return null
            });
            self.__defineGetter__("displayArea", function () {
                return null
            });
            self.__defineGetter__("effect", function () {
                return null
            })
        }

        this.destroy = function () {
            alert("[ImageView" + id + "] destroy()");
            if (bSlideshowMode) {
                self.setSlideShow(false);
                self.stop();
                self.clear()
            } else {
                self.stop()
            }
        };
        this._setStatus = function (status) {
            alert("[ImageView" + id + "] _setStatus(" + status + ") -> " + this.State2String[status]);
            this.__defineGetter__("status", function () {
                return status
            })
        };
        this.setImageViewerPluginObject = function (containerID, zIndex, pluginObjectID) {
            alert("[ImageView" + id + "] setImageViewerPluginObject(" + (containerID ? containerID : "") + "," + (zIndex ? zIndex : "") + "," + (pluginObjectID ? pluginObjectID : "") + ")");
            alert("[ImageView" + id + "] old eImageViewerPlugin : " + eImageViewerPlugin);
            if (eImageViewerPlugin) {
                this.stop();
                eImageViewerPlugin.parentNode.removeChild(eImageViewerPlugin);
                eImageViewerPlugin = null
            }
            if (pluginObjectID) {
                var ePluginObject = document.getElementById(pluginObjectID);
                if (ePluginObject) {
                    deviceapis._plugin(ePluginObject, "Stop");
                    ePluginObject.parentNode.removeChild(ePluginObject)
                }
            }
            var eOldInnerContainer = document.getElementById(IMAGEVIEWER_CONTAINER_DIV_ID + id);
            if (eOldInnerContainer) {
                eOldInnerContainer.parentNode.removeChild(eOldInnerContainer)
            }
            var innerContainer = document.createElement("div");
            innerContainer.id = IMAGEVIEWER_CONTAINER_DIV_ID + id;
            innerContainer.style.position = "absolute";
            innerContainer.style.left = "0px";
            innerContainer.style.top = "0px";
            innerContainer.style.width = "0px";
            innerContainer.style.height = "0px";
            innerContainer.style.zIndex = (zIndex !== undefined && zIndex !== null) ? zIndex : IMAGEVIEWER_CONTAINER_DIV_Z_INDEX;
            if (containerID) {
                var eContainerDiv = document.getElementById(containerID);
                if (eContainerDiv) {
                    eContainerDiv.appendChild(innerContainer);
                    this.__defineGetter__("containerID", function () {
                        return containerID
                    })
                } else {
                    alert("[" + sName + "] !ERROR! cannot get " + containerID + " element.");
                    eImageViewerPlugin = null;
                    return
                }
            } else {
                document.body.appendChild(innerContainer);
                this.__defineGetter__("containerID", function () {
                    return innerContainer.id
                })
            }
            var bUseSEF = deviceapis._plugin.getSEFAvailable();
            var sPluginObjectId = pluginObjectID || IMAGEVIEWER_OBJECT_ID;
            var sZIndex = "z-index:" + IMAGEVIEWER_OBJECT_Z_INDEX + ";";
            eInnerContainerDiv = document.getElementById(IMAGEVIEWER_CONTAINER_DIV_ID + id);
            eInnerContainerDiv.innerHTML = getPluginObjectHTML(bUseSEF, sPluginObjectId, sZIndex);
            eImageViewerPlugin = document.getElementById(sPluginObjectId);
            this.__defineGetter__("zIndex", function () {
                return innerContainer.style.zIndex
            });
            if (eImageViewerPlugin) {
                var strEval = "window.ImageViewerEventListener" + id + " = new _ImageViewerEventListener(" + id + ", this)";
                eval(strEval);
                if (bUseSEF) {
                    eImageViewerPlugin.Open("Player", "1.000", "Player");
                    eImageViewerPlugin.OnEvent = "ImageViewerEventListener" + id + ".onEvent"
                } else {
                    eImageViewerPlugin.OnBufferingStart = "ImageViewerEventListener" + id + ".onBufferingStart";
                    eImageViewerPlugin.OnBufferingComplete = "ImageViewerEventListener" + id + ".onBufferingComplete";
                    eImageViewerPlugin.OnStreamInfoReady = "ImageViewerEventListener" + id + ".onStreamInfoReady";
                    eImageViewerPlugin.OnDecodingComplete = "ImageViewerEventListener" + id + ".onDecodingComplete";
                    eImageViewerPlugin.OnRenderingComplete = "ImageViewerEventListener" + id + ".onRenderingComplete";
                    eImageViewerPlugin.OnConnectionFailed = "ImageViewerEventListener" + id + ".onConnectionFailed";
                    eImageViewerPlugin.OnAuthenticationFailed = "ImageViewerEventListener" + id + ".onAuthenticationFailed";
                    eImageViewerPlugin.OnStreamNotFound = "ImageViewerEventListener" + id + ".onStreamNotFound";
                    eImageViewerPlugin.OnNetworkDisconnected = "ImageViewerEventListener" + id + ".onNetworkDisconnected";
                    eImageViewerPlugin.OnNetworkSlow = "ImageViewerEventListener" + id + ".onNetworkSlow";
                    eImageViewerPlugin.OnRenderError = "ImageViewerEventListener" + id + ".onRenderError"
                }
            } else {
                alert("[ImageView" + id + "] ! ERROR ! Fail to set ImageViewer plugin object.")
            }
            return eImageViewerPlugin;
            function getPluginObjectHTML(useSEF, pluginObjectID, zIndex) {
                var sPluginObjectHTML = "";
                if (useSEF) {
                    sPluginObjectHTML = '<OBJECT id="' + pluginObjectID + '" classid="clsid:SAMSUNG-INFOLINK-SEF" style="position:absolute;left:0px;top:0px;width:0px;height:0px;' + zIndex + 'display:block;"></OBJECT>'
                } else {
                    sPluginObjectHTML = '<OBJECT id="' + pluginObjectID + '" classid="clsid:SAMSUNG-INFOLINK-IMAGEVIEWER" style="position:absolute;left:0px;top:0px;width:0px;height:0px;' + zIndex + 'display:block;"></OBJECT>'
                }
                alert("[ImageView" + id + "] getPluginObjectHTML(" + useSEF + "," + pluginObjectID + "," + zIndex + ") returns " + sPluginObjectHTML);
                return sPluginObjectHTML
            }
        };
        this.onEvent = function (type, data) {
            switch (type) {
                case deviceapis.imageview.STREAM_INFO_READY:
                    bBufferingComplete = true;
                    var resolution = this.getVideoResolution();
                    if (typeof resolution == "string") {
                        resolution = resolution.split("|");
                        this.__defineGetter__("imageWidth", function () {
                            return resolution[0]
                        });
                        this.__defineGetter__("imageHeight", function () {
                            return resolution[1]
                        });
                        if (nDevice == DEVICE_2010 && !bSlideshowMode) {
                            alert("[ImageView" + id + "] DEVICE_2010. Set displayArea.");
                            var resolution = this.getVideoResolution().split("|"), fitDisplayArea = this.getFitDisplayArea(resolution[0], resolution[1]);
                            this.setDisplayArea(fitDisplayArea)
                        }
                    } else {
                        this.__defineGetter__("imageWidth", function () {
                            return null
                        });
                        this.__defineGetter__("imageHeight", function () {
                            return null
                        })
                    }
                    if (bSetSlideShowStatusOn) {
                        this.setSlideShowStatus(true);
                        bSetSlideShowStatusOn = false
                    }
                    break;
                case deviceapis.imageview.BUFFERING_START:
                    break;
                case deviceapis.imageview.BUFFERING_COMPLETE:
                    if (bBufferingComplete) {
                        bBufferingComplete = false
                    } else {
                        this._setStatus(deviceapis.imageview.IMAGEVIEW_STATE_PREPARED);
                        if (typeof cbOnDecordingComplete == "function") {
                            cbOnDecordingComplete()
                        }
                    }
                    break;
                case deviceapis.imageview.DECODING_COMPLETE:
                    this._setStatus(deviceapis.imageview.IMAGEVIEW_STATE_PREPARED);
                    if (typeof cbOnDecordingComplete == "function") {
                        cbOnDecordingComplete()
                    }
                    break;
                case deviceapis.imageview.RENDERING_COMPLETE:
                    if (this.status == deviceapis.imageview.IMAGEVIEW_STATE_STOPPED) {
                        alert("[ImageView" + id + "] This RENDERING_COMPLETE event occured after stop() call. skip.");
                        break
                    }
                    this._setStatus(deviceapis.imageview.IMAGEVIEW_STATE_DRAWN);
                    if (typeof cbOnRenderingComplete == "function") {
                        cbOnRenderingComplete()
                    }
                    break;
                case deviceapis.imageview.CONNECTION_FAILED:
                case deviceapis.imageview.STREAM_NOT_FOUND:
                    this.stop();
                    if (typeof cbOnPrepareError == "function") {
                        cbOnPrepareError(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_FOUND_ERR, "NOT_FOUND_ERR"))
                    }
                    break;
                case deviceapis.imageview.AUTHENTICATION_FAILED:
                    this.stop();
                    if (typeof cbOnPrepareError == "function") {
                        cbOnPrepareError(new SDeviceAPIError(SDeviceAPIError.prototype.SECURITY_ERR, "SECURITY_ERR"))
                    }
                    break;
                case deviceapis.imageview.NETWORK_DISCONNECTED:
                    this.stop();
                    if (typeof cbOnPrepareError == "function") {
                        cbOnPrepareError(new SDeviceAPIError(SDeviceAPIError.prototype.NETWORK_ERR, "NETWORK_ERR"))
                    }
                    break;
                case deviceapis.imageview.NETWORK_SLOW:
                    this.stop();
                    if (typeof cbOnPrepareError == "function") {
                        cbOnPrepareError(new SDeviceAPIError(SDeviceAPIError.prototype.NETWORK_SLOW_ERR, "NETWORK_SLOW_ERR"))
                    }
                    break;
                case deviceapis.imageview.RENDER_ERROR:
                    this.stop();
                    if (typeof cbOnPrepareError == "function") {
                        cbOnPrepareError(new SDeviceAPIError(SDeviceAPIError.prototype.RENDER_ERR, "RENDER_ERR"))
                    }
                    break;
                default:
                    break
            }
        };
        this.getFitDisplayArea = function (width, height) {
            var FRAME_LEFT = iDisplayRect.left;
            var FRAME_TOP = iDisplayRect.top;
            var FRAME_WIDTH = iDisplayRect.width;
            var FRAME_HEIGHT = iDisplayRect.height;
            var nLeft, nTop, nWidth, nHeight;
            if (width / height > FRAME_WIDTH / FRAME_HEIGHT) {
                nHeight = Math.round((FRAME_WIDTH * height) / width);
                nWidth = FRAME_WIDTH
            } else {
                nWidth = Math.round((FRAME_HEIGHT * width) / height);
                nHeight = FRAME_HEIGHT
            }
            nLeft = FRAME_LEFT + Math.round((FRAME_WIDTH - nWidth) / 2);
            nTop = FRAME_TOP + Math.round((FRAME_HEIGHT - nHeight) / 2);
            var retValue = new SRect(nLeft, nTop, nWidth, nHeight);
            alert("[ImageView" + id + "] getFitDisplayArea(" + width + "," + height + ") returns " + retValue);
            return retValue
        }
    }

    function _ImageViewerEventListener(id, imageView) {
        var sName = "ImageView" + id;
        this.iImageView = imageView;
        this.setMasterObject = function (imageView) {
            this.iImageView = imageView
        };
        this.onBufferingStart = function () {
            alert("[ImageView" + id + "] ImageViewerEventListener : onBufferingStart()");
            this.iImageView.onEvent(deviceapis.imageview.BUFFERING_START)
        };
        this.onBufferingComplete = function () {
            alert("[ImageView" + id + "] ImageViewerEventListener : onBufferingComplete()");
            this.iImageView.onEvent(deviceapis.imageview.BUFFERING_COMPLETE)
        };
        this.onStreamInfoReady = function () {
            alert("[ImageView" + id + "] ImageViewerEventListener : onStreamInfoReady()");
            this.iImageView.onEvent(deviceapis.imageview.STREAM_INFO_READY)
        };
        this.onDecodingComplete = function () {
            alert("[ImageView" + id + "] ImageViewerEventListener : onDecodingComplete()");
            this.iImageView.onEvent(deviceapis.imageview.DECODING_COMPLETE)
        };
        this.onRenderingComplete = function () {
            alert("[ImageView" + id + "] ImageViewerEventListener : onRenderingComplete()");
            this.iImageView.onEvent(deviceapis.imageview.RENDERING_COMPLETE)
        };
        this.onConnectionFailed = function () {
            alert("[ImageView" + id + "] ImageViewerEventListener : onConnectionFailed()");
            this.iImageView.onEvent(deviceapis.imageview.CONNECTION_FAILED)
        };
        this.onAuthenticationFailed = function () {
            alert("[ImageView" + id + "] ImageViewerEventListener : onAuthenticationFailed()");
            this.iImageView.onEvent(deviceapis.imageview.AUTHENTICATION_FAILED)
        };
        this.onStreamNotFound = function () {
            alert("[ImageView" + id + "] ImageViewerEventListener : onStreamNotFound()");
            this.iImageView.onEvent(deviceapis.imageview.STREAM_NOT_FOUND)
        };
        this.onNetworkDisconnected = function () {
            alert("[ImageView" + id + "] ImageViewerEventListener : onNetworkDisconnected()");
            this.iImageView.onEvent(deviceapis.imageview.NETWORK_DISCONNECTED)
        };
        this.onNetworkSlow = function () {
            alert("[ImageView" + id + "] ImageViewerEventListener : onNetworkSlow()");
            this.iImageView.onEvent(deviceapis.imageview.NETWORK_DISCONNECTED)
        };
        this.onRenderError = function (errorCode) {
            alert("[ImageView" + id + "] ImageViewerEventListener : onRenderError(" + errorCode + ")");
            this.iImageView.onEvent(deviceapis.imageview.RENDER_ERROR, errorCode)
        };
        this.onEvent = function (type, param) {
            alert("[ImageView" + id + "] ImageViewerEventListener : onEvent(" + type + "," + param + ") -> " + this.iImageView.Event2String[type]);
            this.iImageView.onEvent(type, param)
        }
    }

    function _ImageView_Broadcom2010(id) {
        var sName = "ImageView" + id;
        var sVersion = "1.0";
        this.init = function (option) {
            alert("[ImageView_BRCM2010" + id + "] init(" + option + ")");
            oInitOption = option || {};
            initializeEnv();
            this.setImageViewerPluginObject(oInitOption.containerID, oInitOption.zIndex, IMAGEVIEWER_OBJECT_ID + id);
            if (oInitOption.displayRect) {
                this.setDisplayRect(oInitOption.displayRect)
            }
            if (!bInitialize) {
                initialize()
            }
        };
        this.show = function () {
            alert("[ImageView_BRCM2010" + id + "] show()");
            if (!bInitialize) {
                initialize()
            }
            eImageViewerPlugin.style.display = "block"
        };
        this.hide = function () {
            alert("[ImageView_BRCM2010" + id + "] hide()");
            if (!bInitialize) {
                initialize()
            }
            eImageViewerPlugin.style.display = "none"
        };
        this.prepare = function (successCallback, errorCallback, url, option) {
            alert("[ImageView_BRCM2010" + id + "] prepare(" + typeof successCallback + "," + typeof errorCallback + "," + url + "," + option + ")");
            if (!bInitialize) {
                initialize()
            }
            cbOnDecordingComplete = successCallback;
            cbOnPrepareError = errorCallback;
            oImageInfo = {url: url, width: option.width, height: option.height};
            if (typeof cbOnDecordingComplete == "function") {
                cbOnDecordingComplete()
            }
        };
        this.draw = function (successCallback, errorCallback) {
            alert("[ImageView_BRCM2010" + id + "] draw(" + typeof successCallback + "," + typeof errorCallback + ")");
            if (!bInitialize) {
                initialize()
            }
            cbOnRenderingComplete = successCallback;
            cbOnDrawError = errorCallback;
            var fitDisplayArea = this.getFitDisplayArea(oImageInfo.width, oImageInfo.height);
            this.setDisplayArea(fitDisplayArea);
            var retValue = eImageViewerPlugin.Play(oImageInfo.url);
            if (retValue == 0) {
                alert("Play() returns 0 -> Fail -> Generate error..");
                onServerError()
            }
        };
        this.clear = function () {
            alert("[ImageView_BRCM2010" + id + "] clear()");
            if (!bInitialize) {
                initialize()
            }
            var retValue = this.stop();
            alert("[ImageView_BRCM2010" + id + "] clear() returns " + (retValue == 1));
            return retValue == 1
        };
        this.getDisplayRect = function () {
            alert("[ImageView_BRCM2010" + id + "] getDisplayRect() returns " + iDisplayRect);
            return iDisplayRect
        };
        this.setDisplayRect = function (rect) {
            alert("[ImageView_BRCM2010" + id + "] setDisplayRect(" + rect + ")");
            iDisplayRect = rect;
            if (!bInitialize) {
                initialize()
            }
            eImageViewerPlugin.style.left = iDisplayRect.left + "px";
            eImageViewerPlugin.style.top = iDisplayRect.top + "px";
            eImageViewerPlugin.style.width = iDisplayRect.width + "px";
            eImageViewerPlugin.style.height = iDisplayRect.height + "px"
        };
        this.setSlideShow = function (start) {
            alert("[ImageView_BRCM2010" + id + "] setSlideShow(" + start + ") Not support..")
        };
        this.getTransitionEffectList = function () {
            alert("[ImageView_BRCM2010" + id + "] getTransitionEffectList() Not support..")
        };
        this.stop = function () {
            var retValue = eImageViewerPlugin.Stop();
            alert("[ImageView_BRCM2010" + id + "] stop() returns " + (retValue == 1));
            return retValue == 1
        };
        this.setDisplayArea = function (rect) {
            var resolutionConstant;
            if (curWidget.height == 540) {
                resolutionConstant = 1
            } else {
                if (curWidget.height == 720) {
                    resolutionConstant = 0.75
                } else {
                    if (curWidget.height == 1080) {
                        resolutionConstant = 0.5
                    } else {
                        resolutionConstant = 1
                    }
                }
            }
            var nLeft = Math.round(rect.left * resolutionConstant);
            var nTop = Math.round(rect.top * resolutionConstant);
            var nWidth = Math.round(rect.width * resolutionConstant);
            var nHeight = Math.round(rect.height * resolutionConstant);
            eImageViewerPlugin.SetImagePos(nLeft, nTop, nWidth, nHeight)
        };
        this.getVideoResolution = function () {
            var retValue = eImageViewerPlugin.GetVideoW() + "|" + eImageViewerPlugin.GetVideoH();
            alert("[ImageView_BRCM2010" + id + "] getVideoResolution() returns " + retValue);
            return retValue
        };
        var IMAGEVIEWER_OBJECT_ID = "_plugin_imageviewer_";
        var IMAGEVIEWER_OBJECT_Z_INDEX = 10;
        var IMAGEVIEWER_CONTAINER_DIV_ID = "_pluginObjectImageviewerContainer_";
        var IMAGEVIEWER_CONTAINER_DIV_Z_INDEX = 10;
        var self = this;
        var eImageViewerPlugin = null;
        var bInitialize = false;
        var iDisplayRect = null;
        var oImageInfo = {};
        var oInitOption = {};
        var cbOnDecordingComplete = null;
        var cbOnPrepareError = null;
        var cbOnRenderingComplete = null;
        var cbOnDrawError = null;
        this.Event2String = {};
        this.Event2String[deviceapis.imageview.STREAM_INFO_READY] = "STREAM_INFO_READY";
        this.Event2String[deviceapis.imageview.BUFFERING_START] = "BUFFERING_START";
        this.Event2String[deviceapis.imageview.BUFFERING_COMPLETE] = "BUFFERING_COMPLETE";
        this.Event2String[deviceapis.imageview.DECODING_COMPLETE] = "DECODING_COMPLETE";
        this.Event2String[deviceapis.imageview.RENDERING_COMPLETE] = "RENDERING_COMPLETE";
        this.Event2String[deviceapis.imageview.CONNECTION_FAILED] = "CONNECTION_FAILED";
        this.Event2String[deviceapis.imageview.AUTHENTICATION_FAILED] = "AUTHENTICATION_FAILED";
        this.Event2String[deviceapis.imageview.STREAM_NOT_FOUND] = "STREAM_NOT_FOUND";
        this.Event2String[deviceapis.imageview.NETWORK_DISCONNECTED] = "NETWORK_DISCONNECTED";
        this.Event2String[deviceapis.imageview.NETWORK_SLOW] = "NETWORK_SLOW";
        this.Event2String[deviceapis.imageview.RENDER_ERROR] = "RENDER_ERROR";
        function initialize() {
            if (!eImageViewerPlugin) {
                self.setImageViewerPluginObject(null, null, IMAGEVIEWER_OBJECT_ID + id)
            }
            if (!iDisplayRect) {
                self.setDisplayRect(new SRect(0, 0, curWidget.width, curWidget.height))
            }
            document.getElementsByTagName("body")[0].addEventListener("unload", self.destroy);
            bInitialize = true
        }

        function initializeEnv() {
        }

        this.destroy = function () {
            alert("[ImageView_BRCM2010" + id + "] destroy()");
            self.stop()
        };
        this._setStatus = function (status) {
            this.status = status
        };
        this.setImageViewerPluginObject = function (containerID, zIndex, pluginObjectID) {
            alert("[ImageView_BRCM2010" + id + "] setImageViewerPluginObject(" + (containerID ? containerID : "") + "," + (zIndex ? zIndex : "") + "," + (pluginObjectID ? pluginObjectID : "") + ")");
            alert("[ImageView_BRCM2010" + id + "] old eImageViewerPlugin : " + eImageViewerPlugin);
            if (eImageViewerPlugin) {
                this.stop();
                eImageViewerPlugin.parentNode.removeChild(eImageViewerPlugin);
                eImageViewerPlugin = null
            }
            if (pluginObjectID) {
                var ePluginObject = document.getElementById(pluginObjectID);
                if (ePluginObject) {
                    deviceapis._plugin(ePluginObject, "Stop");
                    ePluginObject.parentNode.removeChild(ePluginObject)
                }
            }
            if (containerID) {
                var eContainerDiv = document.getElementById(containerID);
                if (eContainerDiv) {
                    var sPluginObjectId = pluginObjectID || IMAGEVIEWER_OBJECT_ID;
                    var sZIndex = "z-index:" + ((zIndex !== undefined && zIndex !== null) ? zIndex : IMAGEVIEWER_CONTAINER_DIV_Z_INDEX) + ";";
                    eContainerDiv.innerHTML += getPluginObjectHTML(sPluginObjectId, sZIndex);
                    eImageViewerPlugin = document.getElementById(sPluginObjectId)
                } else {
                    alert("[ImageView_BRCM2010" + id + "] cannot get " + containerID + " element.");
                    eImageViewerPlugin = null
                }
            } else {
                if (!document.getElementById(IMAGEVIEWER_CONTAINER_DIV_ID + id)) {
                    var divNode = document.createElement("div");
                    divNode.id = IMAGEVIEWER_CONTAINER_DIV_ID + id;
                    divNode.style.position = "absolute";
                    divNode.style.left = "0px";
                    divNode.style.top = "0px";
                    divNode.style.zIndex = (zIndex !== undefined) ? zIndex : IMAGEVIEWER_CONTAINER_DIV_Z_INDEX;
                    document.body.appendChild(divNode)
                }
                var sPluginObjectId = pluginObjectID || IMAGEVIEWER_OBJECT_ID;
                var sZIndex = "z-index:" + IMAGEVIEWER_OBJECT_Z_INDEX + ";";
                document.getElementById(IMAGEVIEWER_CONTAINER_DIV_ID + id).innerHTML = getPluginObjectHTML(sPluginObjectId, sZIndex);
                eImageViewerPlugin = document.getElementById(sPluginObjectId)
            }
            if (eImageViewerPlugin) {
                var eventListener = "";
                eventListener += "startDrawLoading = function(){self.onEvent(deviceapis.imageview.BUFFERING_START);};";
                eventListener += "OnStreamInfoReady = function(){self.onEvent(deviceapis.imageview.STREAM_INFO_READY);};";
                eventListener += "endDrawLoading = function(){self.onEvent(deviceapis.imageview.RENDERING_COMPLETE);};";
                eventListener += "onDecoderReady = function(){};";
                eventListener += "onNotSupport = function(){self.onEvent(deviceapis.imageview.RENDER_ERROR);};";
                eventListener += "popupNetworkErr = function(){self.onEvent(deviceapis.imageview.STREAM_NOT_FOUND);};";
                eventListener += "onServerError = function(){self.onEvent(deviceapis.imageview.STREAM_NOT_FOUND);};";
                eventListener += "OnConnectionFailed = function(){self.onEvent(deviceapis.imageview.CONNECTION_FAILED);};";
                eventListener += "OnAuthenticationFailed = function(){self.onEvent(deviceapis.imageview.AUTHENTICATION_FAILED);};";
                eventListener += "stopPlayer = function(){};";
                eval(eventListener)
            } else {
                alert("[ImageView_BRCM2010" + id + "] ! ERROR ! Fail to set ImageViewer plugin object.")
            }
            return eImageViewerPlugin;
            function getPluginObjectHTML(pluginObjectID, zIndex) {
                var sPluginObjectHTML = "";
                sPluginObjectHTML = '<OBJECT id="' + pluginObjectID + '" classid="clsid:D27CDB6E-444553540000" style="position:absolute;width:0px;height:0px;' + zIndex + 'opacity:0.0;background-color:#000000;"></OBJECT>';
                alert("[ImageView_BRCM2010" + id + "] getPluginObjectHTML(" + pluginObjectID + "," + zIndex + ") returns " + sPluginObjectHTML);
                return sPluginObjectHTML
            }
        };
        this.onEvent = function (type, data) {
            alert("[ImageView_BRCM2010" + id + "] onEvent(" + type + "," + (data || "") + ") -> " + this.Event2String[type]);
            switch (type) {
                case deviceapis.imageview.BUFFERING_START:
                    break;
                case deviceapis.imageview.STREAM_INFO_READY:
                    break;
                case deviceapis.imageview.RENDERING_COMPLETE:
                    if (typeof cbOnRenderingComplete == "function") {
                        cbOnRenderingComplete()
                    }
                    break;
                case deviceapis.imageview.CONNECTION_FAILED:
                case deviceapis.imageview.STREAM_NOT_FOUND:
                    this.stop();
                    if (typeof cbOnPrepareError == "function") {
                        cbOnPrepareError(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_FOUND_ERR, "NOT_FOUND_ERR"))
                    }
                    break;
                case deviceapis.imageview.AUTHENTICATION_FAILED:
                    this.stop();
                    if (typeof cbOnPrepareError == "function") {
                        cbOnPrepareError(new SDeviceAPIError(SDeviceAPIError.prototype.SECURITY_ERR, "SECURITY_ERR"))
                    }
                    break;
                case deviceapis.imageview.NETWORK_DISCONNECTED:
                    this.stop();
                    if (typeof cbOnPrepareError == "function") {
                        cbOnPrepareError(new SDeviceAPIError(SDeviceAPIError.prototype.NETWORK_ERR, "NETWORK_ERR"))
                    }
                    break;
                case deviceapis.imageview.NETWORK_SLOW:
                    this.stop();
                    if (typeof cbOnPrepareError == "function") {
                        cbOnPrepareError(new SDeviceAPIError(SDeviceAPIError.prototype.NETWORK_SLOW_ERR, "NETWORK_SLOW_ERR"))
                    }
                    break;
                case deviceapis.imageview.RENDER_ERROR:
                    this.stop();
                    if (typeof cbOnPrepareError == "function") {
                        cbOnPrepareError(new SDeviceAPIError(SDeviceAPIError.prototype.RENDER_ERR, "RENDER_ERROR"))
                    }
                    break;
                default:
                    break
            }
        };
        this.getFitDisplayArea = function (width, height) {
            var FRAME_LEFT = iDisplayRect.left;
            var FRAME_TOP = iDisplayRect.top;
            var FRAME_WIDTH = iDisplayRect.width;
            var FRAME_HEIGHT = iDisplayRect.height;
            var nLeft, nTop, nWidth, nHeight;
            if (width / height > FRAME_WIDTH / FRAME_HEIGHT) {
                nHeight = Math.round((FRAME_WIDTH * height) / width);
                nWidth = FRAME_WIDTH
            } else {
                nWidth = Math.round((FRAME_HEIGHT * width) / height);
                nHeight = FRAME_HEIGHT
            }
            nLeft = FRAME_LEFT + Math.round((FRAME_WIDTH - nWidth) / 2);
            nTop = FRAME_TOP + Math.round((FRAME_HEIGHT - nHeight) / 2);
            var retValue = new SRect(nLeft, nTop, nWidth, nHeight);
            alert("[ImageView_BRCM2010" + id + "] getFitDisplayArea(" + width + "," + height + ") returns " + retValue);
            return retValue
        }
    }
})();
deviceapis.tv = {
    info: {
        PRODUCT_TYPE_TV: 0, PRODUCT_TYPE_BD: 1, PRODUCT_TYPE_MONITOR: 2, getProduct: function () {
            var a = null;
            a = deviceapis._plugin("TV", "GetProductType");
            return a
        }, getModel: function () {
            var a = null;
            a = deviceapis._plugin("NNavi", "GetModelCode");
            return a
        }, getFirmware: function () {
            var a = null;
            a = deviceapis._plugin("NNavi", "GetFirmware");
            return a
        }, getVersion: function () {
            var d = null;
            var b = window.location.search;
            if (b) {
                var c = b.split("mgrver=")
            }
            if (c[1]) {
                var a = c[1].split("&");
                if (a[0]) {
                    d = a[0];
                    alert("smartHubVer[0] : " + a[0]);
                    return d
                }
            }
            return false
        }, getCountry: function () {
            var b = null;
            var a = deviceapis._plugin("TV", "GetCountry");
            b = deviceapis._pluginDef.PL_TV_COUNTRY_CODE[a];
            return b
        }, getLanguage: function () {
            var b = null;
            var a = deviceapis._plugin("TV", "GetLanguage");
            b = deviceapis._pluginDef.PL_TV_LANGUAGE_CODE[a];
            return b
        }, getDeviceID: function () {
            var b = deviceapis._plugin("Network", "GetMAC", 1);
            alert("sMacAddr == " + b);
            var a = deviceapis._plugin("NNavi", "GetDUID", b);
            return a
        }, getESN: function (f) {
            if (typeof f != "string") {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            var e = null;
            var g = deviceapis._pluginDef.PL_TV_LOCATION_CODE[deviceapis._plugin("TV", "GetTargetLocation")];
            var d = deviceapis._plugin("NNavi", "GetFirmware");
            alert("sFirmware ==== " + d);
            alert("sFirmware.substr(10,4) === " + d.substr(10, 4));
            if (f == "WIDEVINE") {
                if (g != "USA") {
                    if (d.substr(10, 4) >= "2011") {
                        e = c(f)
                    } else {
                        var b = deviceapis._plugin("TV", "GetProductType");
                        if (b == deviceapis._pluginDef.PL_TV_PRODUCT_TYPE_TV) {
                            e = a()
                        } else {
                            if (b == deviceapis._pluginDef.PL_TV_PRODUCT_TYPE_BD) {
                                e = c(f)
                            } else {
                                alert("Device is not TV or BD.");
                                throw new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR")
                            }
                        }
                    }
                } else {
                    if (d.substr(10, 4) >= "2011") {
                        e = c(f)
                    } else {
                        throw new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR")
                    }
                }
            } else {
                e = c(f)
            }
            alert("getESN() returns " + e);
            return e;
            function c(i) {
                var h = null;
                h = deviceapis._plugin("EXTERNALWIDGETINTERFACE", "GetESN", i);
                return h
            }

            function a() {
                var h = deviceapis._plugin("Network", "GetActiveType");
                var j = deviceapis._plugin("Network", "GetMAC", 1);
                var i = deviceapis._plugin("NNavi", "GetDUID", j);
                return i
            }
        }, getTick: function () {
            var b = null;
            b = deviceapis._plugin("Time", "GetTick");
            var a = deviceapis._plugin("NNavi", "GetFirmware");
            if (a.substr(10, 4) == "2010") {
                b = parseInt(b)
            }
            return b
        }, getEpochTime: function () {
            var b = null;
            b = deviceapis._plugin("Time", "GetEpochTime");
            var a = deviceapis._plugin("NNavi", "GetFirmware");
            if (a.substr(10, 4) == "2010") {
                b = parseInt(b)
            }
            return b
        }, convertEpochToTime: function (c) {
            if (typeof c != "number" || c === null) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            var d = null;
            d = deviceapis._plugin("Time", "ConvertEpochToLocalTime", c);
            if (d < 0) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR")
            } else {
                if (d) {
                    var b = d.split("/");
                    var a = new Date(b[0], b[1] - 1, b[2], b[3], b[4], b[5]);
                    return a
                } else {
                    throw new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR")
                }
            }
        }, convertTimeToEpoch: function (a) {
            if (typeof a != "object" || a === null) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            var b = null;
            b = parseInt(a.getTime() / 1000);
            return b
        }, getTimeZone: function () {
            var c = deviceapis._plugin("TV", "GetTimeZone");
            var b = deviceapis._plugin("TV", "GetTimeZone_Offset");
            var a = deviceapis._plugin("TV", "GetDST");
            var d = new this.TimeZone(c, b, a);
            return d
        }, TimeZone: function (a, b, c) {
            this.__defineGetter__("timezone", function () {
                return a
            });
            this.__defineGetter__("offset", function () {
                return b
            });
            this.__defineGetter__("dst", function () {
                return c
            })
        }
    },
    channel: {
        NAVIGATOR_MODE_ALL: 0,
        NAVIGATOR_MODE_DIGITAL: 1,
        NAVIGATOR_MODE_ANALOG: 2,
        NAVIGATOR_MODE_FAVORITE: 3,
        tune: function (a, d, h, b) {
            if (a == null && typeof d == "function") {
                d(new SDeviceAPIError(SDeviceAPIError.prototype.INVALID_VALUES_ERR, "INVALID_VALUES_ERR"));
                return
            }
            if ((typeof a != "function" && a != null) || (typeof d != "function" && d != null)) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (a == null && d == null) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (typeof h != "object" || h === null) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (typeof b != "number" && b != undefined) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (b > 0 || b < 0) {
                if (typeof d == "function") {
                    d(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"))
                }
                return
            }
            if ((typeof h.ptc != "number" && h.ptc != null) || (typeof h.major != "number" && h.major != null) || (typeof h.minor != "number" && h.minor != null) || (typeof h.sourceID != "number" && h.sourceID != null) || (typeof h.programNumber != "number" && h.programNumber != null) || (typeof h.transportStreamID != "number" && h.transportStreamID != null) || (typeof h.originalNetworkID != "number" && h.originalNetworkID != null) || (typeof h.tunecallback != "object" && h.tunecallback != null)) {
                if (typeof d == "function") {
                    d(new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR"))
                }
                return
            }
            var c = deviceapis._plugin("TV", "GetProductType");
            alert("nProductType : " + c);
            if (c == 2) {
                if (typeof d == "function") {
                    d(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"))
                }
                return
            }
            var e = deviceapis._plugin("NNavi", "GetFirmware");
            if (e.substr(10, 4) == "2010") {
                d(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"));
                return
            }
            var g = null;
            var f = deviceapis._plugin("WINDOW");
            if (!f) {
                if (typeof d == "function") {
                    d(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"))
                }
                return
            }
            if (h.major) {
                g = deviceapis._plugin(f, "SetChannel", h.major, h.minor)
            } else {
                if (h.ptc) {
                    g = deviceapis._plugin(f, "SetChannel_PTC", h.ptc)
                } else {
                    if (typeof d == "function") {
                        d(new SDeviceAPIError(SDeviceAPIError.prototype.INVALID_VALUES_ERR, "INVALID_VALUES_ERR"))
                    }
                    return
                }
            }
            if (g <= 0 || g == null) {
                if (d instanceof Function) {
                    d(new SDeviceAPIError(SDeviceAPIError.prototype.INVALID_VALUES_ERR, "INVALID_VALUES_ERR"))
                }
                return
            } else {
                if (a instanceof Function) {
                    a()
                }
                return
            }
        },
        tuneUp: function (b, e, a, c) {
            if (b == null && typeof e == "function") {
                e(new SDeviceAPIError(SDeviceAPIError.prototype.INVALID_VALUES_ERR, "INVALID_VALUES_ERR"));
                return
            }
            if ((typeof b != "function" && b != null) || (typeof e != "function" && e != null)) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (b == null && e == null) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (typeof a != "number" && a != undefined) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (typeof c != "number" && c != undefined) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (c > 0 || c < 0) {
                if (typeof e == "function") {
                    e(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"))
                }
                return
            }
            var d = deviceapis._plugin("TV", "GetProductType");
            alert("nProductType : " + d);
            if (d == 2) {
                if (typeof e == "function") {
                    e(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"))
                }
                return
            }
            var f = deviceapis._plugin("NNavi", "GetFirmware");
            if (f.substr(10, 4) == "2010") {
                e(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"));
                return
            }
            var h = null;
            var g = deviceapis._plugin("WINDOW");
            if (!g) {
                if (typeof e == "function") {
                    e(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"))
                }
                return
            }
            h = deviceapis._plugin(g, "SetChannel_Seek", deviceapis._pluginDef.PL_WINDOW_SEEK_UP, a);
            if (h < 0) {
                if (typeof e == "function") {
                    e(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"))
                }
                return
            } else {
                if (typeof b == "function") {
                    b()
                }
                return
            }
        },
        tuneDown: function (b, e, a, c) {
            if (b == null && typeof e == "function") {
                e(new SDeviceAPIError(SDeviceAPIError.prototype.INVALID_VALUES_ERR, "INVALID_VALUES_ERR"));
                return
            }
            if ((typeof b != "function" && b != null) || (typeof e != "function" && e != null)) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (b == null && e == null) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (typeof a != "number" && a != undefined) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (typeof c != "number" && c != undefined) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (c > 0 || c < 0) {
                if (typeof e == "function") {
                    e(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"))
                }
                return
            }
            var d = deviceapis._plugin("TV", "GetProductType");
            alert("nProductType : " + d);
            if (d == 2) {
                if (typeof e == "function") {
                    e(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"))
                }
                return
            }
            var f = deviceapis._plugin("NNavi", "GetFirmware");
            if (f.substr(10, 4) == "2010") {
                e(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"));
                return
            }
            var h = null;
            var g = deviceapis._plugin("WINDOW");
            if (!g) {
                if (typeof e == "function") {
                    e(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"))
                }
                return
            }
            h = deviceapis._plugin(g, "SetChannel_Seek", deviceapis._pluginDef.PL_WINDOW_SEEK_DOWN, a);
            if (h < 0) {
                if (typeof e == "function") {
                    e(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"))
                }
                return
            } else {
                if (typeof b == "function") {
                    b()
                }
                return
            }
        },
        getChannelList: function (e, h, o, v, c) {
            if (e == null && typeof h == "function") {
                h(new SDeviceAPIError(SDeviceAPIError.prototype.INVALID_VALUES_ERR, "INVALID_VALUES_ERR"));
                return
            }
            if ((typeof e != "function" && e != null) || (typeof h != "function" && h != null)) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (e == null && h == null) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (typeof o != "number" && o != undefined) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (typeof v != "number" && v != undefined) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (typeof c != "number" && c != undefined) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (v < 0 || c < 0) {
                if (typeof h == "function") {
                    h(new SDeviceAPIError(SDeviceAPIError.prototype.INVALID_VALUES_ERR, "INVALID_VALUES_ERR"))
                }
                return
            }
            var n = deviceapis._plugin("TV", "GetProductType");
            alert("nProductType : " + n);
            if (n == 2) {
                if (typeof h == "function") {
                    h(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"))
                }
                return
            }
            var g, k, s, d, b, q, j, m, u = null;
            var a = deviceapis._plugin("WINDOW");
            if (!a) {
                if (typeof h == "function") {
                    h(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"))
                }
                return
            }
            var f = deviceapis._plugin(a, "FindChannel", deviceapis.tv.channel.NAVIGATOR_MODE_ALL, o);
            alert("FindChannel : " + f);
            var l = deviceapis._plugin(a, "GetChannel_Size");
            alert("ChannelSize : " + l);
            var p = null;
            if (l > c && c != null) {
                p = c
            } else {
                p = l
            }
            var r = new Array();
            for (var t = 0 + v; t < p; ++t) {
                g = deviceapis._plugin(a, "GetChannel_Type", t);
                k = deviceapis._plugin(a, "GetChannel_PTC", t);
                s = deviceapis._plugin(a, "GetChannel_Major", t);
                d = deviceapis._plugin(a, "GetChannel_Minor", t);
                b = deviceapis._plugin(a, "GetChannel_ProgramNumber", t);
                q = deviceapis._plugin(a, "GetChannel_TransportStreamID", t);
                j = deviceapis._plugin(a, "GetChannel_OriginNetID", t);
                m = deviceapis._plugin(a, "GetChannel_ServiceName", t);
                u = deviceapis._plugin(a, "GetChannel_Name", t);
                r.push(new this.ChannelInfo(k, s, d, null, null, b, q, j, m, u))
            }
            if (l < 0) {
                if (typeof h == "function") {
                    h(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"))
                }
            } else {
                if (typeof e == "function") {
                    e(r)
                }
            }
            return
        },
        getCurrentChannel: function (e) {
            if (typeof e != "number" && e != undefined) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (e > 0 || e < 0) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR")
            }
            var b = deviceapis._plugin("TV", "GetProductType");
            alert("nProductType : " + b);
            if (b == 2) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR")
            }
            var i = deviceapis._plugin("WINDOW");
            if (!i) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR")
            }
            var g = deviceapis._plugin(i, "GetCurrentChannel_PTC");
            var j = deviceapis._plugin(i, "GetCurrentChannel_Major");
            var f = deviceapis._plugin(i, "GetCurrentChannel_Minor");
            var d = null;
            var a = null;
            var m = deviceapis._plugin(i, "GetCurrentChannel_ProgramNumber");
            var h = deviceapis._plugin(i, "GetCurrentChannel_TransportStreamID");
            var l = deviceapis._plugin(i, "GetCurrentChannel_OriginNetID");
            var k = deviceapis._plugin(i, "GetCurrentChannel_ServiceName");
            var n = deviceapis._plugin(i, "GetCurrentChannel_Name");
            var c = new this.ChannelInfo(g, j, f, d, a, m, h, l, k, n);
            return c
        },
        findChannel: function (e, g, r, d) {
            if (e == null && typeof g == "function") {
                g(new SDeviceAPIError(SDeviceAPIError.prototype.INVALID_VALUES_ERR, "INVALID_VALUES_ERR"));
                return
            }
            if ((typeof e != "function" && e != null) || (typeof g != "function" && g != null)) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (e == null && g == null) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (typeof r != "number" || typeof d != "number") {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            var n = deviceapis._plugin("TV", "GetProductType");
            alert("nProductType : " + n);
            if (n == 2) {
                g(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"));
                return
            }
            var b = deviceapis._plugin("WINDOW");
            if (!b) {
                g(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"));
                return
            }
            var o = null;
            var f, j, a, l, c, p, h, m, t = null;
            o = deviceapis._plugin(b, "FindChannel", deviceapis.tv.channel.NAVIGATOR_MODE_ALL, deviceapis._pluginDef.PL_WINDOW_TV_MODE_AIR);
            var k = deviceapis._plugin(b, "GetChannel_Size");
            alert("ChannelSize ===== " + k);
            var q = new Array();
            for (var s = 0; s < k; ++s) {
                a = deviceapis._plugin(b, "GetChannel_Major", s);
                l = deviceapis._plugin(b, "GetChannel_Minor", s);
                if (a == r && l == d) {
                    f = deviceapis._plugin(b, "GetChannel_Type", s);
                    j = deviceapis._plugin(b, "GetChannel_PTC", s);
                    c = deviceapis._plugin(b, "GetChannel_ProgramNumber", s);
                    p = deviceapis._plugin(b, "GetChannel_TransportStreamID", s);
                    h = deviceapis._plugin(b, "GetChannel_OriginNetID", s);
                    m = deviceapis._plugin(b, "GetChannel_ServiceName", s);
                    t = deviceapis._plugin(b, "GetChannel_Name", s);
                    q.push(new this.ChannelInfo(j, r, d, null, null, c, p, h, m, t))
                }
            }
            if (o <= 0) {
                if (typeof g == "function") {
                    g(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"))
                }
                return
            } else {
                if (typeof e == "function") {
                    e(q)
                }
                return
            }
        },
        getCurrentProgram: function (a) {
            if (typeof a != "number" && a != undefined) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (a > 0 || a < 0) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR")
            }
            var b = deviceapis._plugin("TV", "GetProductType");
            alert("nProductType : " + b);
            if (b == 2) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR")
            }
            var e = deviceapis._plugin("TV", "GetPresentProgram_Title");
            var d = deviceapis._plugin("TV", "GetPresentProgram_Duration");
            var g = deviceapis._plugin("TV", "GetPresentProgram_StartTime");
            var c = deviceapis._plugin("Time", "ConvertEpochToLocalTime", g);
            var f = new this.ProgramInfo(e, c, d, null, null, null);
            return f
        },
        getProgramList: function (e, k, o, d, f) {
            if (e == null && typeof k == "function") {
                k(new SDeviceAPIError(SDeviceAPIError.prototype.INVALID_VALUES_ERR, "INVALID_VALUES_ERR"));
                return
            }
            if ((typeof e != "function" && e != null) || (typeof k != "function" && k != null)) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (e == null && k == null) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (typeof o != "object" || o === null) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (typeof d != "number" || d === null) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (typeof f != "number" && f != null) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (d < 0 || f < 0) {
                if (typeof k == "function") {
                    k(new SDeviceAPIError(SDeviceAPIError.prototype.INVALID_VALUES_ERR, "INVALID_VALUES_ERR"))
                }
                return
            }
            if ((typeof o.ptc != "number" && o.ptc != null) || (typeof o.major != "number" && o.major != null) || (typeof o.minor != "number" && o.minor != null) || (typeof o.lcn != "number" && o.lcn != null) || (typeof o.sourceID != "number" && o.sourceID != null) || (typeof o.programNumber != "number" && o.programNumber != null) || (typeof o.transportStreamID != "number" && o.transportStreamID != null) || (typeof o.originalNetworkID != "number" && o.originalNetworkID != null) || (typeof o.serviceName != "string" && o.serviceName != null) || (typeof o.channelName != "string" && o.channelName != null)) {
                if (typeof k == "function") {
                    k(new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR"))
                }
                return
            }
            var b = deviceapis._plugin("TV", "GetProductType");
            alert("nProductType : " + b);
            if (b == 2) {
                if (typeof k == "function") {
                    k(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"))
                }
                return
            }
            var h = null;
            var l, n, f, j;
            var m = deviceapis._plugin("Time", "GetEpochTime");
            h = deviceapis._plugin("TV", "GetProgramList", m, f);
            var a = deviceapis._plugin("TV", "GetProgramList_Size");
            alert("listSize : " + a);
            var c = new Array();
            for (var g = 0; g < a; ++g) {
                l = deviceapis._plugin("TV", "GetProgram_Title", g);
                n = deviceapis._plugin("TV", "GetProgram_StartTime", g);
                f = deviceapis._plugin("TV", "GetProgram_Duration", g);
                j = deviceapis._plugin("TV", "GetProgram_EndTime", g);
                if (n > d) {
                    c.push(new this.ProgramInfo(l, n, f, null, null, null))
                }
            }
            if (h < 0) {
                if (typeof k == "function") {
                    k(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"))
                }
            } else {
                if (typeof e == "function") {
                    e(c)
                }
            }
            return
        },
        getNumOfAvailableTuner: function () {
            var a = deviceapis._plugin("TV", "GetProductType");
            alert("nProductType : " + a);
            if (a == 2) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR")
            }
            return 1
        },
        TuneCallback: function (c, b, a, d) {
            this.onsuccess = null;
            this.onnosignal = null;
            this.onresolutionchanged = null;
            this.onaudiomodechanged = null
        },
        ChannelListSuccuessCallback: function (a) {
            this.onsuccess = a
        },
        ProgramListSuccuessCallback: function (a) {
            this.onsuccess = a
        },
        TuneOption: function (b, a, e, d, c, h, g, f) {
            this.ptc = b;
            this.major = a;
            this.minor = e;
            this.sourceID = d;
            this.programNumber = c;
            this.transportStreamID = h;
            this.originalNetworkID = g;
            this.tunecallback = f
        },
        ChannelInfo: function (h, i, f, b, c, d, a, e, g, j) {
            this.ptc = h;
            this.major = i;
            this.minor = f;
            this.__defineGetter__("lcn", function () {
                return b
            });
            this.__defineGetter__("sourceID", function () {
                return c
            });
            this.__defineGetter__("programNumber", function () {
                return d
            });
            this.__defineGetter__("transportStreamID", function () {
                return a
            });
            this.__defineGetter__("originalNetworkID", function () {
                return e
            });
            this.__defineGetter__("serviceName", function () {
                return g
            });
            this.__defineGetter__("channelName", function () {
                return j
            })
        },
        ProgramInfo: function (e, b, d, c, f, a) {
            this.__defineGetter__("title", function () {
                return e
            });
            this.__defineGetter__("startTime", function () {
                return b
            });
            this.__defineGetter__("duration", function () {
                return d
            });
            this.__defineGetter__("detailedDescription", function () {
                return c
            });
            this.__defineGetter__("language", function () {
                return f
            });
            this.__defineGetter__("rating", function () {
                return a
            })
        }
    },
    window: {
        SOURCE_MODE_TV: 0,
        SOURCE_MODE_AV: 1,
        SOURCE_MODE_SVIDEO: 2,
        SOURCE_MODE_COMP: 3,
        SOURCE_MODE_PC: 4,
        SOURCE_MODE_HDMI: 5,
        SOURCE_MODE_SCART: 6,
        SOURCE_MODE_DVI: 7,
        SOURCE_MODE_MEDIA: 8,
        SOURCE_MODE_IPTV: 9,
        SOURCE_MODE_RVU: 10,
        SOURCE_MODE_RUI: 11,
        SOURCE_MODE_ISP: 12,
        getAvailableWindow: function (a, b) {
            if (a == null && typeof b == "function") {
                b(new SDeviceAPIError(SDeviceAPIError.prototype.INVALID_VALUES_ERR, "INVALID_VALUES_ERR"));
                return
            }
            if ((typeof a != "function" && a != null) || (typeof b != "function" && b != null)) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (a == null && b == null) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            var c = 0;
            if (c == -1) {
                if (typeof b == "function") {
                    b(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"))
                }
            } else {
                if (typeof a == "function") {
                    a(c)
                }
            }
            return
        },
        _tvPlugin: null,
        setSource: function (successCallback, errorCallback, sourceInfo, windowID) {
            if (successCallback == null && typeof errorCallback == "function") {
                errorCallback(new SDeviceAPIError(SDeviceAPIError.prototype.INVALID_VALUES_ERR, "INVALID_VALUES_ERR"));
                return
            }
            if ((typeof successCallback != "function" && successCallback != null) || (typeof errorCallback != "function" && errorCallback != null)) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (successCallback == null && errorCallback == null) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (typeof sourceInfo != "object") {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (typeof windowID != "number" && windowID != undefined) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (windowID > 0 || windowID < 0) {
                if (typeof errorCallback == "function") {
                    errorCallback(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"))
                }
                return
            }
            var _THIS_ = this;
            SourceChangedSuccessCallback = function () {
                deviceapis._plugin(_THIS_._tvPlugin, "UnsetEvent", PL_TV_EVENT_SOURCE_CHANGED);
                deviceapis._plugin(_THIS_._tvPlugin, "UnsetEvent", PL_TV_EVENT_SOURCE_CONNECTED);
                _THIS_._tvPlugin = null;
                successCallback(sourceInfo, windowID)
            };
            var retValue = null;
            var windowPlugin = deviceapis._plugin("WINDOW");
            var currentSource = deviceapis._plugin(windowPlugin, "GetSource");
            _THIS_._tvPlugin = deviceapis._plugin("TV");
            deviceapis._plugin(_THIS_._tvPlugin, "SetEvent", PL_TV_EVENT_SOURCE_CHANGED);
            deviceapis._plugin(_THIS_._tvPlugin, "SetEvent", PL_TV_EVENT_SOURCE_CONNECTED);
            _THIS_._tvPlugin.OnEvent = _onTVPluginEvent;
            if (!this._sourcePLMap) {
                this._sourcePLMap = {};
                this._sourcePLMap[this.SOURCE_MODE_TV] = "PL_WINDOW_SOURCE_TV";
                this._sourcePLMap[this.SOURCE_MODE_AV] = "PL_WINDOW_SOURCE_AV";
                this._sourcePLMap[this.SOURCE_MODE_SVIDEO] = "PL_WINDOW_SOURCE_SVIDEO";
                this._sourcePLMap[this.SOURCE_MODE_COMP] = "PL_WINDOW_SOURCE_COMP";
                this._sourcePLMap[this.SOURCE_MODE_PC] = "PL_WINDOW_SOURCE_PC";
                this._sourcePLMap[this.SOURCE_MODE_HDMI] = "PL_WINDOW_SOURCE_HDMI";
                this._sourcePLMap[this.SOURCE_MODE_SCART] = "PL_WINDOW_SOURCE_SCART";
                this._sourcePLMap[this.SOURCE_MODE_DVI] = "PL_WINDOW_SOURCE_DVI";
                this._sourcePLMap[this.SOURCE_MODE_MEDIA] = "PL_WINDOW_SOURCE_MEDIA";
                this._sourcePLMap[this.SOURCE_MODE_IPTV] = "PL_WINDOW_SOURCE_IPTV";
                this._sourcePLMap[this.SOURCE_MODE_RVU] = "PL_WINDOW_SOURCE_RVU";
                this._sourcePLMap[this.SOURCE_MODE_RUI] = "PL_WINDOW_SOURCE_RUI";
                this._sourcePLMap[this.SOURCE_MODE_ISP] = "PL_WINDOW_SOURCE_ISP"
            }
            if (eval("deviceapis._pluginDef." + this._sourcePLMap[sourceInfo.mode]) || eval("deviceapis._pluginDef." + this._sourcePLMap[sourceInfo.mode]) == 0) {
                if (currentSource == eval("deviceapis._pluginDef." + this._sourcePLMap[sourceInfo.mode])) {
                    return
                } else {
                    retValue = deviceapis._plugin(windowPlugin, "SetSource", eval("deviceapis._pluginDef." + this._sourcePLMap[sourceInfo.mode]))
                }
            } else {
                if (eval("deviceapis._pluginDef." + this._sourcePLMap[sourceInfo.mode] + sourceInfo.number) || eval("deviceapis._pluginDef." + this._sourcePLMap[sourceInfo.mode] + sourceInfo.number) == 0) {
                    if (currentSource == eval("deviceapis._pluginDef." + this._sourcePLMap[sourceInfo.mode] + sourceInfo.number)) {
                        return
                    } else {
                        retValue = deviceapis._plugin(windowPlugin, "SetSource", eval("deviceapis._pluginDef." + this._sourcePLMap[sourceInfo.mode] + sourceInfo.number))
                    }
                } else {
                    if (typeof errorCallback == "function") {
                        errorCallback(new SDeviceAPIError(SDeviceAPIError.prototype.INVALID_VALUES_ERR, "INVALID_VALUES_ERR"))
                    }
                    return
                }
            }
        },
        _sourcePLMap: null,
        getSource: function (a) {
            if (typeof a != "number" && a != undefined) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (a > 0 || a < 0) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR")
            }
            if (!this._sourceAPIMap) {
                this._sourceAPIMap = {};
                this._sourceAPIMap.PL_WINDOW_SOURCE_TV = this.SOURCE_MODE_TV;
                this._sourceAPIMap.PL_WINDOW_SOURCE_AV = this.SOURCE_MODE_AV;
                this._sourceAPIMap.PL_WINDOW_SOURCE_SVIDEO = this.SOURCE_MODE_SVIDEO;
                this._sourceAPIMap.PL_WINDOW_SOURCE_COMP = this.SOURCE_MODE_COMP;
                this._sourceAPIMap.PL_WINDOW_SOURCE_PC = this.SOURCE_MODE_PC;
                this._sourceAPIMap.PL_WINDOW_SOURCE_HDMI = this.SOURCE_MODE_HDMI;
                this._sourceAPIMap.PL_WINDOW_SOURCE_SCART = this.SOURCE_MODE_SCART;
                this._sourceAPIMap.PL_WINDOW_SOURCE_DVI = this.SOURCE_MODE_DVI;
                this._sourceAPIMap.PL_WINDOW_SOURCE_MEDIA = this.SOURCE_MODE_MEDIA;
                this._sourceAPIMap.PL_WINDOW_SOURCE_IPTV = this.SOURCE_MODE_IPTV;
                this._sourceAPIMap.PL_WINDOW_SOURCE_RVU = this.SOURCE_MODE_RVU;
                this._sourceAPIMap.PL_WINDOW_SOURCE_RUI = this.SOURCE_MODE_RUI;
                this._sourceAPIMap.PL_WINDOW_SOURCE_ISP = this.SOURCE_MODE_ISP
            }
            var b = deviceapis._plugin("WINDOW");
            var c = deviceapis._plugin(b, "GetSource");
            for (var d in deviceapis._pluginDef) {
                if (d.indexOf("PL_WINDOW_SOURCE_") == 0 && c == deviceapis._pluginDef[d]) {
                    if (this._sourceAPIMap[d.substr(0, d.length)] || this._sourceAPIMap[d.substr(0, d.length)] == 0) {
                        alert("this._sourceAPIMap[val.substr(0, val.length)] == " + this._sourceAPIMap[d.substr(0, d.length)]);
                        return new this.SourceInfo(this._sourceAPIMap[d.substr(0, d.length)], null)
                    } else {
                        if (this._sourceAPIMap[d.substr(0, d.length - 1)] || this._sourceAPIMap[d.substr(0, d.length - 1)] == 0) {
                            alert("this._sourceAPIMap[val.substr(0, val.length-1)] == " + this._sourceAPIMap[d.substr(0, d.length - 1)]);
                            return new this.SourceInfo(this._sourceAPIMap[d.substr(0, d.length - 1)], Number(d.substr(d.length - 1, 1)))
                        } else {
                            throw new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR")
                        }
                    }
                }
            }
            throw new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR")
        },
        _sourceAPIMap: null,
        _coldSetOnHideFlag: false,
        setRect: function (j, c) {
            if (typeof j != "object") {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (typeof c != "number" && c != undefined) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (c > 0 || c < 0) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR")
            }
            var e = null;
            var f = deviceapis._plugin("WINDOW");
            f.style.left = j.left + "px";
            f.style.top = j.top + "px";
            f.style.width = j.width + "px";
            f.style.height = j.height + "px";
            var h;
            if (curWidget.height == 540) {
                h = 1
            } else {
                if (curWidget.height == 720) {
                    h = 0.75
                } else {
                    if (curWidget.height == 1080) {
                        h = 0.5
                    } else {
                        h = 1
                    }
                }
            }
            var a = Math.round(j.left * h);
            var b = Math.round(j.top * h);
            var g = Math.round(j.width * h);
            var i = Math.round(j.height * h);
            alert("Set Rect == " + j.left + j.top + j.width + j.height);
            e = deviceapis._plugin(f, "SetScreenRect", a, b, g, i);
            var k = this;
            if (!k._coldSetOnHideFlag) {
                window.onHide = d;
                k._coldSetOnHideFlag = true
            }
            function d() {
                alert("[deviceapis] docOnHide");
                deviceapis._plugin(f, "SetScreenRect", -1, 0, 0, 0);
                k._coldSetOnHideFlag = false
            }

            if (e != -1 && e != null) {
                return true
            } else {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR")
            }
        },
        show: function (a) {
            if (typeof a != "number" && a != undefined) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (a > 0 || a < 0) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR")
            }
            var c = null;
            var b = deviceapis._plugin("WINDOW");
            b.style.visibility = "visible";
            c = b.style.visibility;
            if (c == "visible") {
                return true
            } else {
                return false
            }
        },
        hide: function (a) {
            if (typeof a != "number" && a != undefined) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (a > 0 || a < 0) {
                throw new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR")
            }
            var c = null;
            var b = deviceapis._plugin("WINDOW");
            b.style.visibility = "hidden";
            c = b.style.visibility;
            if (c == "hidden") {
                return true
            } else {
                return false
            }
        },
        SourceInfo: function (b, a) {
            this.mode = b;
            this.number = a
        },
        SubWindow: function (a) {
            this.prototype.id = a;
            this.prototype.show = function () {
            };
            this.prototype.hide = function () {
            };
            this.prototype.setRect = function (b, c) {
            };
            this.prototype.setSource = function (c, b) {
            };
            this.prototype.getSource = function () {
            }
        },
        SuccessSubWindowArrayCallback: function () {
        }
    }
};
var SourceChangedSuccessCallback = null;
var PL_TV_EVENT_SOURCE_CHANGED = 114;
var PL_TV_EVENT_SOURCE_CONNECTED = 126;
function _onTVPluginEvent(b, e, c) {
    alert("TV Plugin Event");
    alert("TVEvent : " + b + " id: " + e + " data:" + c);
    var a = deviceapis._plugin("NNavi", "GetFirmware");
    alert("Firmware : " + a);
    var d = a.match(/(\d+)-(\d+)/);
    var f = d[1];
    alert("nFirmwareYear == " + f);
    switch (parseInt(e)) {
        case PL_TV_EVENT_SOURCE_CONNECTED:
            alert("########## PL_TV_EVENT_SOURCE_CONNECTED #######");
            if (f >= 2012) {
                alert("<2012>");
                SourceChangedSuccessCallback()
            }
            break;
        case PL_TV_EVENT_SOURCE_CHANGED:
            alert("########## PL_TV_EVENT_SOURCE_CHANGED ########");
            if (f == 2011) {
                alert("<2011>");
                SourceChangedSuccessCallback()
            }
            break
    }
}
deviceapis.tv.info.TimeZone.TIMEZONE_USA_NEWFOUNDLAND = 0;
deviceapis.tv.info.TimeZone.TIMEZONE_USA_ATLANTIC = 1;
deviceapis.tv.info.TimeZone.TIMEZONE_USA_EASTERN = 2;
deviceapis.tv.info.TimeZone.TIMEZONE_USA_CENTRAL = 3;
deviceapis.tv.info.TimeZone.TIMEZONE_USA_MOUNTAIN = 4;
deviceapis.tv.info.TimeZone.TIMEZONE_USA_PACIFIC = 5;
deviceapis.tv.info.TimeZone.TIMEZONE_USA_ALASKA = 6;
deviceapis.tv.info.TimeZone.TIMEZONE_USA_HAWAII = 7;
deviceapis.tv.info.TimeZone.TIMEZONE_KOR_SEOUL = 8;
deviceapis.tv.info.TimeZone.TIMEZONE_DVB_REGION_0 = 9;
deviceapis.tv.info.TimeZone.TIMEZONE_DVB_REGION_1 = 10;
deviceapis.tv.info.TimeZone.TIMEZONE_DVB_REGION_2 = 11;
deviceapis.tv.info.TimeZone.TIMEZONE_DVB_REGION_3 = 12;
deviceapis.tv.info.TimeZone.TIMEZONE_DVB_REGION_4 = 13;
deviceapis.tv.info.TimeZone.TIMEZONE_DVB_REGION_5 = 14;
deviceapis.tv.info.TimeZone.TIMEZONE_DVB_REGION_6 = 15;
deviceapis.tv.info.TimeZone.TIMEZONE_DVB_REGION_7 = 16;
deviceapis.tv.info.TimeZone.TIMEZONE_DVB_REGION_8 = 17;
deviceapis.tv.info.TimeZone.TIMEZONE_DST_ON = 1;
deviceapis.tv.info.TimeZone.TIMEZONE_DST_OFF = 2;
deviceapis.tv.info.TimeZone.TIMEZONE_DST_AUTO = 3;
deviceapis.network = new getNetworkList();
var NetworkListLength = 2;
var networkPlugin = null;
function getNetworkList() {
    this.getAvailableNetworks = function (a, b) {
        if (a == null && typeof b == "function") {
            b(new SDeviceAPIError(SDeviceAPIError.prototype.INVALID_VALUES_ERR, "INVALID_VALUES_ERR"));
            return
        }
        if ((typeof a != "function" && a != null) || (typeof b != "function" && b != null)) {
            throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
        }
        if (a == null && b == null) {
            throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
        }
        var d = new Array();
        for (var c = 0; c < NetworkListLength; c++) {
            d[c] = new _Network(c);
            alert("The available network interface is " + d[c].interfaceType)
        }
        if (!d[0].isActive && !d[1].isActive) {
            if (typeof b == "function") {
                b(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"))
            }
        } else {
            if (typeof a == "function") {
                a(d)
            }
        }
        return
    }
}
NetworkConnectionStatusChnageCallback = null;
_networkID = null;
function _onNetworkPluginEvent(c, a, d) {
    alert("Network Plugin Event");
    alert("event = [" + c + "]");
    alert("data1 = [" + a + "]");
    alert("data2 = [" + d + "]");
    var b = null;
    switch (c) {
        case 0:
            alert("EVENT_NET_CABLE" + a);
            if (_networkID == 1) {
                if (a == 0) {
                    alert("data1 == 0");
                    b = new ConnectonStatus(ConnectonStatus.DISCONNECT, "disconnected")
                } else {
                    if (a == 1) {
                        alert("data1 == 1");
                        b = new ConnectonStatus(ConnectonStatus.CONNECT, "connected")
                    }
                }
                alert("status.code == " + b + " / " + b.code + " / " + b.message);
                NetworkConnectionStatusChnageCallback(b)
            }
            break;
        case 1:
            alert("EVENT_NET_WIRELESS" + a);
            if (_networkID == 0) {
                if (a == 0) {
                    b = new ConnectonStatus(ConnectonStatus.DISCONNECT, "disconnected")
                } else {
                    if (a == 1) {
                        b = new ConnectonStatus(ConnectonStatus.CONNECT, "connected")
                    }
                }
                NetworkConnectionStatusChnageCallback(b)
            }
            break;
        case 2:
            alert("EVENT_NET_STATUS_GATEWAY_CONNECTED" + a);
            break;
        default:
            break
    }
}
function ConnectonStatus(b, a) {
    this.__defineGetter__("code", function () {
        return b
    });
    this.__defineGetter__("message", function () {
        return a
    })
}
ConnectonStatus.prototype.toString = function () {
    return "(" + this.code + ") " + this.message
};
ConnectonStatus.DISCONNECT = 0;
ConnectonStatus.CONNECT = 1;
function _Network(a) {
    this.__defineGetter__("interfaceType", function () {
        return a
    });
    this.__defineGetter__("dns", function () {
        return deviceapis._plugin("NETWORK", "GetDNS", this.interfaceType)
    });
    this.__defineGetter__("dnsMode", function () {
        return deviceapis._plugin("NETWORK", "GetDNSMode", this.interfaceType)
    });
    this.__defineGetter__("gateway", function () {
        return deviceapis._plugin("NETWORK", "GetGateway", this.interfaceType)
    });
    this.__defineGetter__("subnetMask", function () {
        return deviceapis._plugin("NETWORK", "GetNetMask", this.interfaceType)
    });
    this.__defineGetter__("ip", function () {
        return deviceapis._plugin("NETWORK", "GetIP", this.interfaceType)
    });
    this.__defineGetter__("ipMode", function () {
        return deviceapis._plugin("NETWORK", "GetIPMode", this.interfaceType)
    });
    this.__defineGetter__("mac", function () {
        return deviceapis._plugin("NETWORK", "GetMAC", this.interfaceType)
    });
    this.isActive = function () {
        if (deviceapis._plugin("NETWORK", "CheckDNS", this.interfaceType) == 1 && deviceapis._plugin("NETWORK", "CheckGateway", this.interfaceType) == 1 && deviceapis._plugin("NETWORK", "CheckHTTP", this.interfaceType) == 1 && deviceapis._plugin("NETWORK", "CheckPhysicalConnection", this.interfaceType) == 1) {
            return true
        } else {
            return false
        }
    };
    this.watchConnectionStatus = function (b, c) {
        if (b == null && typeof c == "function") {
            c(new SDeviceAPIError(SDeviceAPIError.prototype.INVALID_VALUES_ERR, "INVALID_VALUES_ERR"));
            return
        }
        if ((typeof b != "function" && b != null) || (typeof c != "function" && c != null)) {
            throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
        }
        if (b == null && c == null) {
            throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
        }
        _networkID = this.interfaceType;
        networkPlugin = deviceapis._plugin("NETWORK");
        if (!networkPlugin) {
            if (typeof c == "function") {
                c(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"))
            }
            return
        }
        networkPlugin.OnEvent = _onNetworkPluginEvent;
        NetworkConnectionStatusChnageCallback = b
    };
    this.stopWatchConnectionStatus = function () {
        alert("stopWatchConnectionStatus");
        NetworkConnectionStatusChnageCallback = null
    }
}
deviceapis.filesystem = {
    util: {
        totalSpaceSize: function () {
            return deviceapis._plugin("FILESYSTEM", "GetTotalSize")
        }, freeSpaceSize: function () {
            return deviceapis._plugin("FILESYSTEM", "GetFreeSize")
        }, getFolderSize: function (a, c, d) {
            var b = deviceapis._plugin("FILESYSTEM", "GetVersion");
            alert("FILESYSTEM plugin version: " + b.isSEF + ", " + b.ver);
            if (!b.isSEF && b.ver <= "FILESYSTEM-0004") {
                alert("Not Supported");
                return false
            } else {
                return deviceapis._plugin("FILESYSTEM", "GetFolderSize", a, true, true)
            }
        }
    }, file: {
        createDirectory: function (c) {
            alert("pDirPath : " + c);
            var a = new FileSystem();
            if (c.slice(0, 7) == "$COMMON") {
                var b = c.slice(8);
                alert("path : " + b);
                if (a.isValidCommonPath(b) == false) {
                    a.createCommonDir(b);
                    return true
                } else {
                    alert("Directory is already exist.");
                    return true
                }
            } else {
                alert("Not supported currently.");
                return false
            }
        }, deleteDirectory: function (b, d, c, e) {
            var a = new FileSystem();
            if (c.slice(0, 7) == "$COMMON") {
                var f = c.slice(8);
                alert("path : " + f);
                if (a.isValidCommonPath(f) == false) {
                    alert("Directory is not exist. No need to delete.");
                    d(new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, ""))
                } else {
                    a.deleteCommonDir(f);
                    alert("If directory is empty diresctory is deleted.");
                    b(true)
                }
            } else {
                alert("Not supported currently.");
                return false
            }
        }, copyTo: function (a, b, e, c) {
            var d = deviceapis._plugin("FILESYSTEM", "Copy", e, c);
            alert("retVal : " + d);
            if (d) {
                a(d)
            } else {
                b(new SDeviceAPIError(SDeviceAPIError.prototype.INVALID_VALUES_ERR, ""))
            }
        }, moveTo: function (a, b, f, d, c) {
            var e = deviceapis._plugin("FILESYSTEM", "Move", f, d);
            alert("retVal : " + e);
            if (e) {
                a(e)
            } else {
                b(new SDeviceAPIError(SDeviceAPIError.prototype.INVALID_VALUES_ERR, ""))
            }
        }, createFile: function (e) {
            var a = new FileSystem();
            if (e.slice(0, 7) == "$COMMON") {
                var f = e.slice(8);
                var g = getDirPath(f);
                var d = getFilePath(f);
                if (g) {
                    var c = g.toString() + "/" + d.toString()
                } else {
                    var c = d.toString()
                }
                if (g) {
                    if (a.isValidCommonPath(g) == false) {
                        a.createCommonDir(g);
                        var b = a.openCommonFile(c, "w");
                        a.closeCommonFile(b);
                        return true
                    } else {
                        var b = a.openCommonFile(c, "w");
                        a.closeCommonFile(b);
                        return true
                    }
                } else {
                    a.createCommonDir(g);
                    var b = a.openCommonFile(c, "w");
                    a.closeFile(b);
                    return true
                }
            } else {
                alert("Not supported currently.");
                return false
            }
        }, deleteFile: function (b, c, d) {
            if (d.slice(0, 7) == "$COMMON") {
                var e = d.slice(8);
                var a = new FileSystem();
                a.deleteCommonFile(e)
            } else {
                alert("Not supported currently.");
                return false
            }
        }, getProperty: function (b) {
            alert("path : " + b);
            var a = deviceapis._plugin("FILESYSTEM", "GetProperty", b);
            alert("!!!@@@ getProperty retVal : " + a);
            return a
        }
    }, resolve: function (a, b, d, e) {
        alert("resolve(" + d + ", " + e + ")");
        var c = new CFILE(d, e);
        if (c) {
            a(c)
        } else {
            b()
        }
    }, fileStream: {
        readAsText: function (a) {
            errorCallback(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, ""))
        }, close: function () {
            return false
        }, read: function () {
            return false
        }, readBytes: function (a) {
            return false
        }, write: function (a) {
            return false
        }, writeBytes: function (a) {
            return false
        }, readBase64: function (a) {
            return false
        }, writeBase64: function (a) {
            return false
        }
    }
};
function CFILE(c, e) {
    var a = new FileSystem();
    var b = null;
    alert("path : " + c + ", mode : " + e);
    if (e == "w") {
        if (c.slice(0, 7) == "$COMMON") {
            var d = c.slice(8);
            var b = a.openCommonFile(d, "w")
        } else {
            alert("Not supported currently.");
            return false
        }
    } else {
        if (c.slice(0, 7) == "$COMMON") {
            var d = c.slice(8);
            var b = a.openCommonFile(d, "r")
        } else {
            alert("Not supported currently.");
            return false
        }
    }
    alert("CFILE fp : " + b);
    if (!b) {
        return false
    }
    this.readAsText = function () {
        alert("readAsText");
        alert("fp : " + b);
        var f = b.readAll();
        alert("strResult : " + f);
        return f.toString()
    };
    this.readAll = function () {
        return b.readAll()
    };
    this.readBytes = function () {
        return b.readLine()
    };
    this.writeAll = function (f) {
        alert("writeAll : " + f);
        b.writeAll(f);
        a.closeCommonFile(b);
        return true
    };
    this.writeBytes = function (f) {
        alert("writeBytes : " + f);
        b.writeLine(f);
        a.closeCommonFile(b);
        return true
    }
}
function getDirPath(b) {
    alert("getDirPath(" + b + ")");
    if (b.indexOf("/") == 0) {
        var c = b.slice(1);
        var a = c.lastIndexOf("/");
        if (a >= 0) {
            var d = c.slice(0, a);
            alert("dirPath : " + d);
            return d
        } else {
            return false
        }
    } else {
        var a = b.lastIndexOf("/");
        if (a >= 0) {
            var d = b.slice(0, a);
            alert("dirPath : " + d);
            return d
        } else {
            return false
        }
    }
}
function getFilePath(c) {
    alert("getFilePath(" + c + ")");
    var a = c.lastIndexOf("/");
    if (a >= 0) {
        var b = c.slice(a + 1);
        alert("filePath : " + b);
        return b
    } else {
        return c
    }
}
deviceapis.widgetevent = {};
deviceapis.widgetevent._eventListener = {};
deviceapis.widgetevent._listener = function (a) {
    alert("[WidgetEvent] Type : " + a.type);
    var b = deviceapis.widgetevent._eventListener[a.type];
    if (typeof b == "function") {
        b(a.data || null)
    } else {
        alert("[WidgetEvent] No event handler binded with this event : " + a.type)
    }
};
deviceapis.widgetevent._registerListener = function () {
    curWidget.onWidgetEvent = deviceapis.widgetevent._listener
};
deviceapis.widgetevent.setEventListener = function (a, b) {
    alert("[WidgetEvent] setEventListener(" + a + ")");
    deviceapis.widgetevent._eventListener[a] = b;
    deviceapis.widgetevent._registerListener()
};
deviceapis._plugin = function (m) {
    var b = deviceapis._plugin.getSEFAvailable();
    var j = Array.prototype.slice.call(arguments);
    var k = null;
    alert("[deviceapis] _plugin(" + j + ")");
    if (typeof arguments[0] == "string") {
        var h = c(arguments[0]);
        if (!h) {
            alert("Plugin name is not defined : " + arguments[0]);
            return null
        }
        var d = "_plugin_";
        k = document.getElementById(d + h);
        if (!k) {
            k = g(h, b)
        }
    } else {
        k = arguments[0]
    }
    if (!k) {
        alert("CANNOT get the plugin object (" + h + ")");
        return null
    }
    if (j.length == 1 && typeof arguments[0] == "string") {
        alert("Getting Plugin Object: " + k);
        return k
    }
    var a = arguments[1];
    if (deviceapis._plugin.wrappedMethod[a]) {
        return deviceapis._plugin.wrappedMethod[a](k, b, j)
    }
    if (!b) {
        var f = null;
        if (typeof k[a] == "function") {
            j = j.slice(2);
            f = k[a].apply(k, j)
        } else {
            f = deviceapis._pluginDef.PLR_NOT_IMPLEMENT
        }
        alert("\treturns " + f);
        return f
    } else {
        var f = null;
        j = j.slice(1);
        try {
            f = k.Execute.apply(k, j)
        } catch (i) {
            alert("EXCEPTION(Execute.apply): " + i)
        }
        alert("\treturns " + f);
        return f
    }
    function c(n) {
        alert("getPluginName(" + n + ")");
        var e = ["TV", "TVMW", "NNavi", "Audio", "AppCommon", "FrontPanel", "ImageViewer", "Player", "AUI", "Storage", "Network", "Download", "Screen", "Time", "Video", "Window", "ExternalWidgetInterface", "FileSystem", "Gamepad", "Michrophone", "CustomDevice", "RECOG"];
        for (var o = 0; o < e.length; o++) {
            if (e[o].toUpperCase() == n.toUpperCase()) {
                alert("\treturn " + e[o]);
                return e[o]
            }
        }
        alert("\treturn(as it is) " + n);
        return n
    }

    function g(s, o) {
        alert("addPluginObject(" + s + "," + o + ")");
        var p = "";
        var e = "_pluginObject" + s + "Container_";
        var r = document.createElement("div");
        r.id = e;
        r.style.position = "absolute";
        r.style.left = "0px";
        r.style.top = "0px";
        document.body.appendChild(r);
        var n = l(s);
        var q = n ? "display:block;position:absolute;width:960px;height:540px;" : "display:block;position:absolute;width:0px;height:0px;";
        if (!o) {
            p = '<OBJECT id="' + d + s + '" classid="clsid:SAMSUNG-INFOLINK-' + s + '" style="' + q + '"></OBJECT>';
            alert("Create " + s + " Plugin : " + p);
            r.innerHTML += p;
            return document.getElementById(d + s)
        } else {
            p = '<OBJECT id="' + d + s + '" classid="clsid:SAMSUNG-INFOLINK-SEF" style="' + q + '"></OBJECT>';
            alert("Create SEF Plugin for " + s + ": " + p);
            r.innerHTML += p;
            var t = document.getElementById(d + s).Open(s, "1.000", s);
            alert("SEF Open Returns " + t);
            if (parseInt(t, 10) == 1) {
                alert("SEF Open Succeded!!!");
                return document.getElementById(d + s)
            } else {
                alert("SEF Open Failed!!!");
                return null
            }
        }
    }

    function l(e) {
        e = e.toUpperCase();
        return (e == "PLAYER" || e == "IMAGEVIEWER")
    }
};
deviceapis._plugin.getSEFAvailable = function () {
    alert("deviceapis._plugin.getSEFAvailable()");
    var b = navigator.appVersion.toLowerCase();
    if (navigator.userAgent.toLowerCase().indexOf("applewebkit") >= 0 && window.curWidget) {
        alert("2012's Webkit platform");
        return true
    } else {
        var a = new Array();
        a = b.split("(");
        if (parseInt(a[0], 10) < 6) {
            alert("2010's or earlier platform");
            return false
        } else {
            alert("2011's platform");
            return true
        }
    }
};
deviceapis._plugin.wrappedMethod = {
    GetVersion: function (c, d, b) {
        alert("[deviceapis] Wrapped Method GetVersion(" + c + ", " + d + ")");
        if (!d) {
            var a = c.GetPluginInfo(deviceapis._pluginDef.PL_CMN_INFO_VERSION);
            alert("\tLegacy returns " + a);
            return {isSEF: false, ver: a}
        } else {
            var a = c.Execute("GetVersion");
            alert("\tSEF returns " + a);
            return {isSEF: true, ver: a}
        }
    }
};
deviceapis._pluginDef = {
    PL_VIDEO_AUTO_MOTION_OFF: 1,
    PL_VIDEO_AUTO_MOTION_WEAK: 2,
    PL_VIDEO_AUTO_MOTION_MEDIUM: 3,
    PL_VIDEO_AUTO_MOTION_STRONG: 4,
    PL_VIDEO_AUTO_MOTION_CUSTOM: 5,
    PL_VIDEO_AUTO_MOTION_DEMO: 6,
    PL_VIDEO_AUTO_MOTION_RESET: 7,
    PL_VIDEO_AUTO_MOTION_CHECK: 8,
    PL_VIDEO_AUTO_MOTION_SUPPORT: 9,
    PL_DEVICE_DPT_LCD: 0,
    PL_DEVICE_DPT_PDP: 1,
    PL_DEVICE_DPT_DLP: 2,
    PL_DEVICE_DPT_LED: 3,
    PL_DEVICE_DPT_LED_EDGE: 4,
    PL_DEVICE_DPT_LED_DIRECT: 5,
    PL_DEVICE_DPT_CRT: 6,
    PL_DEVICE_DPT_UNKNOWN: 999,
    PL_DEVICE_DPT_MAX: 1000,
    PL_NT_WIRED: 0,
    PL_NT_WIRELESS: 1,
    PL_NT_UNKNOWN: 2,
    PL_ST_SERVICE: 0,
    PL_ST_DEVELOPMENT: 1,
    PL_ST_DEVELOPING: 2,
    PL_ST_UNKNOWN: 3,
    PL_TVUT_HOME: 0,
    PL_TVUT_SHOP: 1,
    PL_TVUT_UNKNOWN: 2,
    PL_PRFID_TICKER_ID: 0,
    PL_PRFID_CHILDLOCK_PIN: 1,
    PL_PRFID_HUB_TVID: 2,
    PL_PRFID_TICKER_AUTOBOOT: 3,
    PL_PRFID_TICKER_DURATION: 4,
    PL_PRFID_WIDGET_DPTIME: 5,
    PL_PRFID_CONTRACT: 6,
    PL_PRFID_TICKER_SAFE: 7,
    PL_PRFID_RESET: 8,
    PL_PRFID_PASSWD_RESET: 9,
    PL_PRFID_GEOIP_STATUS: 10,
    PL_PRFID_COUNTRY_CODE: 11,
    PL_PRFID_WLAN_DEFAULT_NETWORK: 12,
    PL_PRFID_AUTO_PROTECTION_TIME: 13,
    PL_PRFID_CHANNEL_BOUND_EXECUTE: 14,
    PL_PRFID_PASSWORD: 15,
    PL_PRFID_SOURCE_BOUND_WIDGET_ID: 16,
    PL_PRFID_SOURCE_BOUND_SOURCE_ID: 17,
    PL_PRFID_AUTOBOOT: 18,
    PL_PRFID_UNKNOWN: 19,
    PL_PRFID_MAX: 20,
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
    PL_TVMW_KEY_LOCK: 1119,
    PL_TVMW_KEY_HDMI: 1139,
    PL_TVMW_KEY_GRP_ALL: 0,
    PL_TVMW_KEY_GRP_NUMBER: 1,
    PL_TVMW_KEY_GRP_CHANNEL: 2,
    PL_TVMW_KEY_GRP_VOLUME: 3,
    PL_TVMW_KEY_GRP_NAVI: 4,
    PL_TVMW_KEY_GRP_COLOR: 5,
    PL_TVMW_KEY_GRP_PLAYBACK: 6,
    PL_TVMW_KEY_GRP_ETC: 7,
    PL_TVMW_KEY_TTX_MIX: 650,
    PL_TVMW_KEY_GUIDE: 651,
    PL_TVMW_KEY_SUBTITLE: 652,
    PL_TVMW_KEY_ASPECT: 653,
    PL_TVMW_KEY_DOLBY_SRR: 654,
    PL_TVMW_KEY_MTS: 655,
    PL_TVMW_KEY_11: 11,
    PL_TVMW_KEY_REPEAT: 656,
    PL_TVMW_KEY_DISC_MENU: 1086,
    PL_TVMW_KEY_12: 1057,
    PL_TVMW_KEY_STEP: 1023,
    PL_TVMW_KEY_CALLER_ID: 1128,
    PL_TVMW_KEY_3D: 1219,
    PL_TVMW_KEY_ZOOM1: 1083,
    PL_TVMW_KEY_ANTENA: 1054,
    PL_APPCOMMON_KEY_DVR: 1114,
    PL_APPCOMMON_KEY_HOME: 1118,
    PL_APPCOMMON_KEY_TV_SNS: 1251,
    PL_APPCOMMON_KEY_SEARCH: 1252,
    PL_APPCOMMON_KEY_PIP_SCAN: 1049,
    PL_APPCOMMON_KEY_DEVICE_CONNECT: 1052,
    PL_APPCOMMON_KEY_DOTCOM: 1253,
    PL_TVMW_COUNTRY_USA: 0,
    PL_TVMW_COUNTRY_KOR: 1,
    PL_TVMW_COUNTRY_SPA: 2,
    PL_TVMW_COUNTRY_FRA: 3,
    PL_TVMW_COUNTRY_JPN: 4,
    PL_TVMW_COUNTRY_EU: 5,
    PL_TVMW_COUNTRY_UK: 6,
    PL_TVMW_COUNTRY_GERMANY: 7,
    PL_TVMW_COUNTRY_ITALY: 8,
    PL_TVMW_COUNTRY_SWEDEN: 9,
    PL_TVMW_COUNTRY_BULGARIA: 10,
    PL_TVMW_COUNTRY_CROATIA: 11,
    PL_TVMW_COUNTRY_CZECH: 12,
    PL_TVMW_COUNTRY_NETHERLANDS: 13,
    PL_TVMW_COUNTRY_GREECE: 14,
    PL_TVMW_COUNTRY_HUNGARY: 15,
    PL_TVMW_COUNTRY_POLAND: 16,
    PL_TVMW_COUNTRY_PORTUGAL: 17,
    PL_TVMW_COUNTRY_ROMANIA: 18,
    PL_TVMW_COUNTRY_RUSSIA: 19,
    PL_TVMW_COUNTRY_SWITZERLAND: 20,
    PL_TVMW_COUNTRY_TURKEY: 21,
    PL_TVMW_COUNTRY_AUSTRALIA: 22,
    PL_TVMW_COUNTRY_AUSTRIA: 23,
    PL_TVMW_COUNTRY_BELGIUM: 24,
    PL_TVMW_COUNTRY_DENMARK: 25,
    PL_TVMW_COUNTRY_FINLAND: 26,
    PL_TVMW_COUNTRY_NORWAY: 27,
    PL_TVMW_COUNTRY_CHINA: 28,
    PL_TVMW_COUNTRY_IRELAND: 29,
    PL_TVMW_COUNTRY_SERBIA: 30,
    PL_TVMW_COUNTRY_SAN_MARINO: 31,
    PL_TVMW_COUNTRY_MONACO: 32,
    PL_TVMW_COUNTRY_BRAZIL: 33,
    PL_TVMW_COUNTRY_HONGKONG: 34,
    PL_TVMW_COUNTRY_TAIWAN: 35,
    PL_TVMW_COUNTRY_NEWZEALAND: 36,
    PL_TVMW_COUNTRY_SLOVAKIA: 37,
    PL_TVMW_COUNTRY_SINGAPORE: 38,
    PL_TVMW_COUNTRY_GENERALCABLE: 39,
    PL_TVMW_COUNTRY_OTHER: 40,
    PL_TVMW_COUNTRY_ASIAWEUROPE_ANALOG: 41,
    PL_TVMW_COUNTRY_HONGKONG_UK_ANALOG: 42,
    PL_TVMW_COUNTRY_NZL_INDONESIA_ANALOG: 43,
    PL_TVMW_COUNTRY_SOUTH_AFRICA_ANALOG: 44,
    PL_TVMW_COUNTRY_AMERICA_ANALOG: 45,
    PL_TVMW_COUNTRY_CHINA_ANALOG: 46,
    PL_TV_COUNTRY_USA: 0,
    PL_TV_COUNTRY_KOR: 1,
    PL_TV_COUNTRY_SPA: 2,
    PL_TV_COUNTRY_FRA: 3,
    PL_TV_COUNTRY_JPN: 4,
    PL_TV_COUNTRY_EU: 5,
    PL_TV_COUNTRY_UK: 6,
    PL_TV_COUNTRY_GERMANY: 7,
    PL_TV_COUNTRY_ITALY: 8,
    PL_TV_COUNTRY_SWEDEN: 9,
    PL_TV_COUNTRY_BULGARIA: 10,
    PL_TV_COUNTRY_CROATIA: 11,
    PL_TV_COUNTRY_CZECH: 12,
    PL_TV_COUNTRY_NETHERLANDS: 13,
    PL_TV_COUNTRY_GREECE: 14,
    PL_TV_COUNTRY_HUNGARY: 15,
    PL_TV_COUNTRY_POLAND: 16,
    PL_TV_COUNTRY_PORTUGAL: 17,
    PL_TV_COUNTRY_ROMANIA: 18,
    PL_TV_COUNTRY_RUSSIA: 19,
    PL_TV_COUNTRY_SWITZERLAND: 20,
    PL_TV_COUNTRY_TURKEY: 21,
    PL_TV_COUNTRY_AUSTRALIA: 22,
    PL_TV_COUNTRY_AUSTRIA: 23,
    PL_TV_COUNTRY_BELGIUM: 24,
    PL_TV_COUNTRY_DENMARK: 25,
    PL_TV_COUNTRY_FINLAND: 26,
    PL_TV_COUNTRY_NORWAY: 27,
    PL_TV_COUNTRY_CHINA: 28,
    PL_TV_COUNTRY_IRELAND: 29,
    PL_TV_COUNTRY_SERBIA: 30,
    PL_TV_COUNTRY_SAN_MARINO: 31,
    PL_TV_COUNTRY_MONACO: 32,
    PL_TV_COUNTRY_BRAZIL: 33,
    PL_TV_COUNTRY_HONGKONG: 34,
    PL_TV_COUNTRY_TAIWAN: 35,
    PL_TV_COUNTRY_NEWZEALAND: 36,
    PL_TV_COUNTRY_SLOVAKIA: 37,
    PL_TV_COUNTRY_SINGAPORE: 38,
    PL_TV_COUNTRY_GENERALCABLE: 39,
    PL_TV_COUNTRY_NORTH_AFRICA: 40,
    PL_TV_COUNTRY_BELGIUM_FRENCH: 41,
    PL_TV_COUNTRY_BELGIUM_DUTCH: 42,
    PL_TV_COUNTRY_SOUTH_AFRICA: 43,
    PL_TV_COUNTRY_OTHER: 44,
    PL_TV_COUNTRY_ASIAWEUROPE_ANALOG: 45,
    PL_TV_COUNTRY_HONGKONG_UK_ANALOG: 46,
    PL_TV_COUNTRY_NZL_INDONESIA_ANALOG: 47,
    PL_TV_COUNTRY_SOUTH_AFRICA_ANALOG: 48,
    PL_TV_COUNTRY_AMERICA_ANALOG: 49,
    PL_TV_COUNTRY_CHINA_ANALOG: 50,
    PL_TV_COUNTRY_EASTEUROPE_ANALOG: 51,
    PL_TV_COUNTRY_CODE: new Array(),
    PL_TVMW_LANGUAGE_KOR: 0,
    PL_TVMW_LANGUAGE_ENG_US: 1,
    PL_TVMW_LANGUAGE_SPA_US: 2,
    PL_TVMW_LANGUAGE_FRA_US: 3,
    PL_TVMW_LANGUAGE_POR_US: 4,
    PL_TVMW_LANGUAGE_BUL: 5,
    PL_TVMW_LANGUAGE_CRO: 6,
    PL_TVMW_LANGUAGE_CZE: 7,
    PL_TVMW_LANGUAGE_DAN: 8,
    PL_TVMW_LANGUAGE_DUT: 9,
    PL_TVMW_LANGUAGE_FIN: 10,
    PL_TVMW_LANGUAGE_FRA: 11,
    PL_TVMW_LANGUAGE_DEU: 12,
    PL_TVMW_LANGUAGE_GRE: 13,
    PL_TVMW_LANGUAGE_HUN: 14,
    PL_TVMW_LANGUAGE_ITA: 15,
    PL_TVMW_LANGUAGE_NOR: 16,
    PL_TVMW_LANGUAGE_ENG: 17,
    PL_TVMW_LANGUAGE_POL: 18,
    PL_TVMW_LANGUAGE_POR: 19,
    PL_TVMW_LANGUAGE_ROM: 20,
    PL_TVMW_LANGUAGE_RUS: 21,
    PL_TVMW_LANGUAGE_SER: 22,
    PL_TVMW_LANGUAGE_SLK: 23,
    PL_TVMW_LANGUAGE_SPA: 24,
    PL_TVMW_LANGUAGE_SWE: 25,
    PL_TVMW_LANGUAGE_TUR: 26,
    PL_TVMW_LANGUAGE_CHI: 27,
    PL_TVMW_LANGUAGE_HKG: 28,
    PL_TVMW_LANGUAGE_TPE: 29,
    PL_TVMW_LANGUAGE_JPN: 30,
    PL_TVMW_LANGUAGE_MAO: 31,
    PL_TVMW_LANGUAGE_CMN: 32,
    PL_TVMW_LANGUAGE_YUE: 33,
    PL_TVMW_LANGUAGE_HIN: 34,
    PL_TVMW_LANGUAGE_EST: 35,
    PL_TVMW_LANGUAGE_LAT: 36,
    PL_TVMW_LANGUAGE_LTU: 37,
    PL_TVMW_LANGUAGE_ARA: 38,
    PL_TVMW_LANGUAGE_PER: 39,
    PL_TVMW_LANGUAGE_QAA: 40,
    PL_TVMW_LANGUAGE_AD: 41,
    PL_TVMW_LANGUAGE_CAT: 42,
    PL_TVMW_LANGUAGE_VAL: 43,
    PL_TVMW_LANGUAGE_HEB: 44,
    PL_TVMW_LANGUAGE_OTHER: 45,
    PL_TVMW_LANGUAGE_THA: 46,
    PL_TV_LANGUAGE_KOR: 0,
    PL_TV_LANGUAGE_ENG_US: 1,
    PL_TV_LANGUAGE_SPA_US: 2,
    PL_TV_LANGUAGE_FRA_US: 3,
    PL_TV_LANGUAGE_POR_US: 4,
    PL_TV_LANGUAGE_BUL: 5,
    PL_TV_LANGUAGE_CRO: 6,
    PL_TV_LANGUAGE_CZE: 7,
    PL_TV_LANGUAGE_DAN: 8,
    PL_TV_LANGUAGE_DUT: 9,
    PL_TV_LANGUAGE_FIN: 10,
    PL_TV_LANGUAGE_FRA: 11,
    PL_TV_LANGUAGE_DEU: 12,
    PL_TV_LANGUAGE_GRE: 13,
    PL_TV_LANGUAGE_HUN: 14,
    PL_TV_LANGUAGE_ITA: 15,
    PL_TV_LANGUAGE_NOR: 16,
    PL_TV_LANGUAGE_ENG: 17,
    PL_TV_LANGUAGE_POL: 18,
    PL_TV_LANGUAGE_POR: 19,
    PL_TV_LANGUAGE_ROM: 20,
    PL_TV_LANGUAGE_RUS: 21,
    PL_TV_LANGUAGE_SER: 22,
    PL_TV_LANGUAGE_SLK: 23,
    PL_TV_LANGUAGE_SPA: 24,
    PL_TV_LANGUAGE_SWE: 25,
    PL_TV_LANGUAGE_TUR: 26,
    PL_TV_LANGUAGE_CHI: 27,
    PL_TV_LANGUAGE_HKG: 28,
    PL_TV_LANGUAGE_TPE: 29,
    PL_TV_LANGUAGE_JPN: 30,
    PL_TV_LANGUAGE_MAO: 31,
    PL_TV_LANGUAGE_CMN: 32,
    PL_TV_LANGUAGE_YUE: 33,
    PL_TV_LANGUAGE_HIN: 34,
    PL_TV_LANGUAGE_EST: 35,
    PL_TV_LANGUAGE_LAT: 36,
    PL_TV_LANGUAGE_LTU: 37,
    PL_TV_LANGUAGE_ARA: 38,
    PL_TV_LANGUAGE_PER: 39,
    PL_TV_LANGUAGE_QAA: 40,
    PL_TV_LANGUAGE_AD: 41,
    PL_TV_LANGUAGE_CAT: 42,
    PL_TV_LANGUAGE_VAL: 43,
    PL_TV_LANGUAGE_THA: 44,
    PL_TV_LANGUAGE_HEB: 45,
    PL_TV_LANGUAGE_IND: 46,
    PL_TV_LANGUAGE_VIE: 47,
    PL_TV_LANGUAGE_URD: 48,
    PL_TV_LANGUAGE_AFR: 49,
    PL_TV_LANGUAGE_ZUL: 50,
    PL_TV_LANGUAGE_XHO: 51,
    PL_TV_LANGUAGE_YOR: 52,
    PL_TV_LANGUAGE_IGB: 53,
    PL_TV_LANGUAGE_HAU: 54,
    PL_TV_LANGUAGE_SWA: 55,
    PL_TV_LANGUAGE_AMH: 56,
    PL_TV_LANGUAGE_OTHER: 57,
    PL_TV_LANGUAGE_TAM: 58,
    PL_TV_LANGUAGE_IRA: 59,
    PL_TV_LANGUAGE_FIL: 60,
    PL_TV_LANGUAGE_LIT: 61,
    PL_TV_LANGUAGE_LAV: 62,
    PL_TV_LANGUAGE_SLV: 63,
    PL_TV_LANGUAGE_ALB: 64,
    PL_TV_LANGUAGE_UKR: 65,
    PL_TV_LANGUAGE_KAZ: 66,
    PL_TV_LANGUAGE_MKD: 67,
    PL_TV_LANGUAGE_MAY: 68,
    PL_TV_LANGUAGE_WEL: 69,
    PL_TV_LANGUAGE_GLA: 70,
    PL_TV_LANGUAGE_IRI: 71,
    PL_TV_LANGUAGE_MAX: 72,
    PL_TV_LANGUAGE_CODE: new Array(),
    PL_TVMW_TVUT_HOME: 0,
    PL_TVMW_TVUT_SHOP: 1,
    PL_TVMW_TVUT_UNKNOWN: 2,
    PL_TVMW_PRFID_TICKER_ID: 0,
    PL_TVMW_PRFID_CHILDLOCK_PIN: 1,
    PL_TVMW_PRFID_HUB_TVID: 2,
    PL_TVMW_PRFID_TICKER_AUTOBOOT: 3,
    PL_TVMW_PRFID_TICKER_DURATION: 4,
    PL_TVMW_PRFID_WIDGET_DPTIME: 5,
    PL_TVMW_PRFID_CONTRACT: 6,
    PL_TVMW_PRFID_TICKER_SAFE: 7,
    PL_TVMW_PRFID_RESET: 8,
    PL_TVMW_PRFID_PASSWD_RESET: 9,
    PL_TVMW_PRFID_GEOIP_STATUS: 10,
    PL_TVMW_PRFID_COUNTRY_CODE: 11,
    PL_TVMW_PRFID_WLAN_DEFAULT_NETWORK: 12,
    PL_TVMW_PRFID_AUTO_PROTECTION_TIME: 13,
    PL_TVMW_PROFILE_TYPE_STRING: 0,
    PL_TVMW_PROFILE_TYPE_INT: 1,
    PL_TVMW_PROFILE_TYPE_UNKNOWN: 999,
    PL_TVMW_PROFILE_TYPE_MAX: 1000,
    PL_TVMW_DTVAPP_NONE: 0,
    PL_TVMW_DTVAPP_TVVIEWER: 1,
    PL_TVMW_DTVAPP_INFOLINK: 2,
    PL_TVMW_DTVAPP_MENU: 3,
    PL_TVMW_DTVAPP_UNKNOWN: 4,
    CH_DTVAPP_WIDGET: 11,
    CH_DTVAPP_FLASH: 12,
    CH_DTVAPP_GALLERY: 13,
    CH_DTVAPP_GAME: 14,
    CH_DTVAPP_YAHOO: 15,
    CH_DTVAPP_MOIP: 16,
    CH_DTVAPP_PHAROS: 17,
    CH_DTVAPP_TOOL: 18,
    CH_DTVAPP_CLMOVIEPLAYER: 19,
    CH_DTVAPP_FULLBROWSER: 20,
    CH_DTVAPP_MAPBROWSER: 21,
    CH_DTVAPP_MMPLAYER: 22,
    CH_DTVAPP_PVR: 23,
    CH_DTVAPP_RCVIEWER: 24,
    CH_DTVAPP_FAVORITE: 25,
    CH_DTVAPP_CHANNEL: 26,
    CH_DTVAPP_GUIDE: 27,
    CH_DTVAPP_PVR_BROWSER: 28,
    CH_DTVAPP_BASIC_FULLBROWSER: 29,
    CH_DTVAPP_VIDEOS: 30,
    CH_DTVAPP_PHOTOS: 31,
    CH_DTVAPP_MUSIC: 32,
    CH_DTVAPP_SCHEDULE: 33,
    CH_DTVAPP_SOURCE: 34,
    CH_DTVAPP_SHOP_DEMO: 35,
    CH_DTVAPP_ALLSHARE: 36,
    CH_DTVAPP_NETWORK_SETUP: 37,
    CH_DTVAPP_CALENDAR: 38,
    PL_TVMW_SOURCE_TV: 0,
    PL_TVMW_SOURCE_ATV: 1,
    PL_TVMW_SOURCE_DTV: 2,
    PL_TVMW_SOURCE_CATV: 3,
    PL_TVMW_SOURCE_CDTV: 4,
    PL_TVMW_SOURCE_PATV: 5,
    PL_TVMW_SOURCE_PDTV: 6,
    PL_TVMW_SOURCE_SDTV: 7,
    PL_TVMW_SOURCE_BSDTV: 8,
    PL_TVMW_SOURCE_CS1DTV: 9,
    PL_TVMW_SOURCE_CS2DTV: 10,
    PL_TVMW_SOURCE_ATV1: 11,
    PL_TVMW_SOURCE_ATV2: 12,
    PL_TVMW_SOURCE_DTV1: 13,
    PL_TVMW_SOURCE_DTV2: 14,
    PL_TVMW_SOURCE_AV1: 15,
    PL_TVMW_SOURCE_AV2: 16,
    PL_TVMW_SOURCE_AV3: 17,
    PL_TVMW_SOURCE_AV4: 18,
    PL_TVMW_SOURCE_SVIDEO1: 19,
    PL_TVMW_SOURCE_SVIDEO2: 20,
    PL_TVMW_SOURCE_SVIDEO3: 21,
    PL_TVMW_SOURCE_SVIDEO4: 22,
    PL_TVMW_SOURCE_COMP1: 23,
    PL_TVMW_SOURCE_COMP2: 24,
    PL_TVMW_SOURCE_COMP3: 25,
    PL_TVMW_SOURCE_COMP4: 26,
    PL_TVMW_SOURCE_PC1: 27,
    PL_TVMW_SOURCE_PC2: 28,
    PL_TVMW_SOURCE_PC3: 29,
    PL_TVMW_SOURCE_PC4: 30,
    PL_TVMW_SOURCE_HDMI1: 31,
    PL_TVMW_SOURCE_HDMI2: 32,
    PL_TVMW_SOURCE_HDMI3: 33,
    PL_TVMW_SOURCE_HDMI4: 34,
    PL_TVMW_SOURCE_SCART1: 35,
    PL_TVMW_SOURCE_SCART2: 36,
    PL_TVMW_SOURCE_SCART3: 37,
    PL_TVMW_SOURCE_SCART4: 38,
    PL_TVMW_SOURCE_DVI1: 39,
    PL_TVMW_SOURCE_DVI2: 40,
    PL_TVMW_SOURCE_DVI3: 41,
    PL_TVMW_SOURCE_DVI4: 42,
    PL_TVMW_SOURCE_MEDIA: 43,
    PL_TVMW_SOURCE_HOMING: 44,
    PL_TVMW_SOURCE_NONE: 45,
    PL_TVMW_SOURCE_UNKNWON: 1000,
    PL_TVMW_SOURCE_MAX: 1001,
    PL_WINDOW_SOURCE_TV: 0,
    PL_WINDOW_SOURCE_ATV: 1,
    PL_WINDOW_SOURCE_DTV: 2,
    PL_WINDOW_SOURCE_CATV: 3,
    PL_WINDOW_SOURCE_CDTV: 4,
    PL_WINDOW_SOURCE_PATV: 5,
    PL_WINDOW_SOURCE_PDTV: 6,
    PL_WINDOW_SOURCE_SDTV: 7,
    PL_WINDOW_SOURCE_ATV1: 11,
    PL_WINDOW_SOURCE_ATV2: 12,
    PL_WINDOW_SOURCE_DTV1: 13,
    PL_WINDOW_SOURCE_DTV2: 14,
    PL_WINDOW_SOURCE_AV1: 15,
    PL_WINDOW_SOURCE_AV2: 16,
    PL_WINDOW_SOURCE_AV3: 17,
    PL_WINDOW_SOURCE_AV4: 18,
    PL_WINDOW_SOURCE_SVIDEO1: 19,
    PL_WINDOW_SOURCE_SVIDEO2: 20,
    PL_WINDOW_SOURCE_SVIDEO3: 21,
    PL_WINDOW_SOURCE_SVIDEO4: 22,
    PL_WINDOW_SOURCE_COMP1: 23,
    PL_WINDOW_SOURCE_COMP2: 24,
    PL_WINDOW_SOURCE_COMP3: 25,
    PL_WINDOW_SOURCE_COMP4: 26,
    PL_WINDOW_SOURCE_PC1: 27,
    PL_WINDOW_SOURCE_PC2: 28,
    PL_WINDOW_SOURCE_PC3: 29,
    PL_WINDOW_SOURCE_PC4: 30,
    PL_WINDOW_SOURCE_HDMI1: 31,
    PL_WINDOW_SOURCE_HDMI2: 32,
    PL_WINDOW_SOURCE_HDMI3: 33,
    PL_WINDOW_SOURCE_HDMI4: 34,
    PL_WINDOW_SOURCE_SCART1: 35,
    PL_WINDOW_SOURCE_SCART2: 36,
    PL_WINDOW_SOURCE_SCART3: 37,
    PL_WINDOW_SOURCE_SCART4: 38,
    PL_WINDOW_SOURCE_DVI1: 39,
    PL_WINDOW_SOURCE_DVI2: 40,
    PL_WINDOW_SOURCE_DVI3: 41,
    PL_WINDOW_SOURCE_DVI4: 42,
    PL_WINDOW_SOURCE_MEDIA: 43,
    PL_WINDOW_SOURCE_HOMING: 44,
    PL_WINDOW_SOURCE_IPTV: 45,
    PL_WINDOW_SOURCE_RVU: 46,
    PL_WINDOW_SOURCE_RUI: 47,
    PL_WINDOW_SOURCE_ISP: 48,
    PL_WINDOW_SOURCE_NONE: 100,
    PL_WINDOW_CHANNEL_TYPE_UNKNOWN: 0,
    PL_WINDOW_CHANNEL_TYPE_TV: 1,
    PL_WINDOW_CHANNEL_TYPE_ATV: 2,
    PL_WINDOW_CHANNEL_TYPE_DTV: 3,
    PL_WINDOW_CHANNEL_TYPE_CATV: 4,
    PL_WINDOW_CHANNEL_TYPE_CDTV: 5,
    PL_WINDOW_TV_MODE_AIR: 1,
    PL_WINDOW_TV_MODE_CABLE: 2,
    PL_AUDIO_MUTE_ON: 0,
    PL_AUDIO_MUTE_OFF: 1,
    PL_AUDIO_INTERNAL_MUTE_ON: 2,
    PL_AUDIO_INTERNAL_MUTE_OFF: 3,
    PL_AUDIO_RECEIVER_CONNECTED: 4,
    PL_AUDIO_MUTE_UNKNOWN: 999,
    PL_AUDIO_MUTE_MAX: 1000,
    PL_AUDIO_SET_MUTE_ON: 0,
    PL_AUDIO_SET_MUTE_OFF: 1,
    PL_AUDIO_SET_MUTE_TOGGLE: 2,
    PL_AUDIO_SET_MUTE_INTERNAL_ON: 3,
    PL_AUDIO_SET_MUTE_INTERNAL_OFF: 4,
    PL_AUDIO_SET_MUTE_UNKNOWN: 999,
    PL_AUDIO_SET_MUTE_MAX: 1000,
    PL_AUDIO_OUTPUT_DEVICE_MAIN_SPEAKER: 0,
    PL_AUDIO_OUTPUT_DEVICE_EARPHONE: 1,
    PL_AUDIO_OUTPUT_DEVICE_SUBWOOFER: 2,
    PL_AUDIO_OUTPUT_DEVICE_EXTERNAL: 3,
    PL_AUDIO_OUTPUT_DEVICE_RECEIVER: 4,
    PL_AUDIO_OUTPUT_DEVICE_UNKNOWN: 999,
    PL_AUDIO_OUTPUT_DEVICE_MAX: 1000,
    PL_AUDIO_VOLUME_KEY_UP: 0,
    PL_AUDIO_VOLUME_KEY_DOWN: 1,
    PL_AUDIO_VOLUME_KEY_UNKNOWN: 999,
    PL_AUDIO_VOLUME_KEY_MAX: 1000,
    PL_NT_WIRED: 0,
    PL_NT_WIRELESS: 1,
    PL_NT_UNKNOWN: 2,
    PL_VIDEO_WIDGET_MODE_FULL: 0,
    PL_VIDEO_WIDGET_MODE_PART: 1,
    PL_VIDEO_WIDGET_MODE_UNKNOWN: 999,
    PL_VIDEO_WIDGET_MODE_MAX: 1000,
    PL_VIDEO_SET_MUTE_ON: 0,
    PL_VIDEO_SET_MUTE_OFF: 1,
    PL_VIDEO_SET_MUTE_TOGGLE: 2,
    PL_VIDEO_SET_MUTE_UNKNOWN: 999,
    PL_VIDEO_SET_MUTE_MAX: 1000,
    PL_NNAVI_PATH_WIDGET_MANAGER: 0,
    PL_NNAVI_PATH_WIDGET_NORMAL: 1,
    PL_NNAVI_PATH_UNKNOWN: 999,
    PL_NNAVI_SYSTEM_VERSION_LEEUM: 0,
    PL_NNAVI_SYSTEM_VERSION_COMP: 1,
    PL_NNAVI_SYSTEM_UNKNOWN: 999,
    PL_NNAVI_STATE_BANNER_NONE: 0,
    PL_NNAVI_STATE_BANNER_VOL: 1,
    PL_NNAVI_STATE_BANNER_VOL_CH: 2,
    PLR_TRUE: 1,
    PLR_FALSE: 0,
    PLR_FAIL: -1,
    PLR_NOT_IMPLEMENT: -2,
    PLR_NULL_ARG: -3,
    PLR_INVALID_ARG: -4,
    PLR_CANNOT_OPEN_FILE: -5,
    PLR_OUT_OF_RANGE: -6,
    PL_CMN_INFO_VERSION: 0,
    PL_CMN_INFO_UNKNWON: 999,
    DN_RES_ERR_UNKNOWN: 0,
    DN_RES_OK_FILE_DOWNLOADED: 1,
    DN_RES_OK_FILE_DOWN_CANCELED: 2,
    DN_RES_ERR_INVALID_URL: 3,
    DN_RES_ERR_NORMAL_SOCKET: 4,
    DN_RES_ERR_SSL_SOCKET: 5,
    DN_RES_ERR_HOST: 6,
    DN_RES_ERR_PERMISSION_DENY: 7,
    DN_RES_ERR_NOT_ENOUGH_STORAGE: 8,
    DN_RES_ERR_INVALID_DATA: 9,
    DN_RES_ERR_URL_HAS_NO_FILE: 10,
    PL_TV_EVENT_NO_SIGNAL: 101,
    PL_TV_EVENT_TUNE_SUCCESS: 103,
    PL_TV_EVENT_CHANNEL_CHANGED: 113,
    PL_TV_EVENT_SOURCE_CHANGED: 114,
    PL_TV_EVENT_PROGRAM_CHANGED: 204,
    PL_TV_EVENT_RESOLUTION_CHANGED: 117,
    PL_WINDOW_RESOLUTION_NOTSUPPORT: 0,
    PL_WINDOW_RESOLUTION_NOSIGNAL: 1,
    PL_WINDOW_RESOLUTION_NT: 2,
    PL_WINDOW_RESOLUTION_NT_N: 3,
    PL_WINDOW_RESOLUTION_PC: 4,
    PL_WINDOW_RESOLUTION_1080I: 5,
    PL_WINDOW_RESOLUTION_1080P: 6,
    PL_WINDOW_RESOLUTION_720P: 7,
    PL_WINDOW_RESOLUTION_480P: 8,
    PL_WINDOW_RESOLUTION_480I: 9,
    PL_WINDOW_RESOLUTION_640X480P: 10,
    PL_WINDOW_RESOLUTION_1440x480I: 11,
    PL_WINDOW_RESOLUTION_576P: 12,
    PL_WINDOW_RESOLUTION_576I: 13,
    PL_WINDOW_RESOLUTION_PAL: 14,
    PL_WINDOW_RESOLUTION_PAL_M: 15,
    PL_WINDOW_RESOLUTION_PAL_N: 16,
    PL_WINDOW_RESOLUTION_SECAM: 17,
    PL_WINDOW_RESOLUTION_YC_SECAM: 18,
    PL_WINDOW_RESOLUTION_NOVIDEO: 19,
    PL_WINDOW_RESOLUTION_UNKNOWN: 20,
    PL_WINDOW_RESOLUTION_UNSTABLE: 21,
    PL_WINDOW_RESOLUTION_288I: 22,
    PL_WINDOW_RESOLUTION_MAX: 23,
    PL_APPCOMMON_MESSAGE_INPUT_OCCUR: 23,
    PL_WINDOW_POSITION_MODE_TOPLEFT: 0,
    PL_WINDOW_POSITION_MODE_TOPRIGHT: 1,
    PL_WINDOW_POSITION_MODE_TOPCENTER: 2,
    PL_WINDOW_POSITION_MODE_BOTTOMRIGHT: 3,
    PL_WINDOW_POSITION_MODE_BOTTOMLEFT: 4,
    PL_WINDOW_POSITION_MODE_MIDDLELEFT: 5,
    PL_WINDOW_POSITION_MODE_MIDDLECENTER: 6,
    PL_WINDOW_POSITION_MODE_CUSTOM: 7,
    PL_WINDOW_POSITION_MODE_DEFAULT: 8,
    PL_WINDOW_POSITION_MODE_MAX: 9,
    PL_WINDOW_RECT_SIZE_PIP_SMALL: 0,
    PL_WINDOW_RECT_SIZE_PIP_LARGE: 1,
    PL_WINDOW_RECT_SIZE_PIP_DOUBLE_SMALL: 2,
    PL_WINDOW_RECT_SIZE_PIP_DOUBLE_LARGE: 3,
    PL_WINDOW_RECT_SIZE_PIG: 4,
    PL_WINDOW_RECT_SIZE_DEFALUT: 5,
    PL_WINDOW_RECT_SIZE_CUSTOM: 6,
    PL_WINDOW_RECT_SIZE_WIDEPC: 7,
    PL_WINDOW_RECT_SIZE_PC_4_3: 8,
    PL_WINDOW_RECT_SIZE_MODE_MAX: 9,
    PL_WINDOW_SEEK_UNKNOWN: 0,
    PL_WINDOW_SEEK_FAVORITE: 1,
    PL_WINDOW_SEEK_CURRENT: 2,
    PL_WINDOW_SEEK_UP: 3,
    PL_WINDOW_SEEK_DOWN: 4,
    PL_WINDOW_SEEK_FIRST: 5,
    PL_WINDOW_SEEK_LAST: 6,
    PL_WINDOW_SEEK_NEXT: 7,
    PL_WINDOW_SEEK_PREV: 8,
    PL_WINDOW_SEEK_BACK: 9,
    PL_WINDOW_SEEK_EXE: 10,
    PL_WINDOW_SEEK_DIRECT: 11,
    PL_WINDOW_SEEK_TEMPORAL: 12,
    PL_TV_PIP_ON: 1,
    PL_TV_PIP_OFF: 0,
    PL_TASKMANAGER_DTV_APP_NONE: 0,
    PL_TASKMANAGER_DTV_APP_TASKMANAGER: 1,
    PL_TASKMANAGER_DTV_APP_TVVIEWER: 2,
    PL_TASKMANAGER_DTV_APP_MENU: 3,
    PL_TASKMANAGER_DTV_APP_EPG: 4,
    PL_TASKMANAGER_DTV_APP_CM: 5,
    PL_TASKMANAGER_DTV_APP_CC: 6,
    PL_TASKMANAGER_DTV_APP_FAC: 7,
    PL_TASKMANAGER_DTV_APP_CHANNELSEARCH: 8,
    PL_TASKMANAGER_DTV_APP_ADDDEL: 9,
    PL_TASKMANAGER_DTV_APP_REMINDER: 10,
    PL_TASKMANAGER_DTV_APP_SOURCE: 11,
    PL_TASKMANAGER_DTV_APP_TVTOOLS: 12,
    PL_TASKMANAGER_DTV_APP_INTERTEST: 13,
    PL_TASKMANAGER_DTV_APP_INTERNALTEST: 14,
    PL_TASKMANAGER_DTV_APP_HOTEL: 15,
    PL_TASKMANAGER_DTV_APP_MINIFAVCH: 16,
    PL_TASKMANAGER_DTV_APP_EAS: 17,
    PL_TASKMANAGER_DTV_APP_DV: 18,
    PL_TASKMANAGER_DTV_APP_HTML: 19,
    PL_TASKMANAGER_DTV_APP_APPLIST: 20,
    PL_TASKMANAGER_DTV_APP_JAVAMW: 21,
    PL_TASKMANAGER_DTV_APP_COMDOWNLOAD: 22,
    PL_TASKMANAGER_DTV_APP_TTX: 23,
    PL_TASKMANAGER_DTV_APP_SBT: 24,
    PL_TASKMANAGER_DTV_APP_CI: 25,
    PL_TASKMANAGER_DTV_APP_MHEG: 26,
    PL_TASKMANAGER_DTV_APP_RETURN_CHANNEL: 27,
    PL_TASKMANAGER_DTV_APP_CU: 28,
    PL_TASKMANAGER_DTV_APP_FAVCHLIST: 29,
    PL_TASKMANAGER_DTV_APP_LOGOMANAGER: 30,
    PL_TASKMANAGER_DTV_APP_GEMSTAR: 31,
    PL_TASKMANAGER_DTV_APP_FMRADIO: 32,
    PL_TASKMANAGER_DTV_APP_HOME_MENU: 33,
    PL_TASKMANAGER_DTV_APP_WISELINK: 34,
    PL_TASKMANAGER_DTV_APP_MMBROWSER: 35,
    PL_TASKMANAGER_DTV_APP_MMPLAYER: 36,
    PL_TASKMANAGER_DTV_APP_MOVIE_PLAYER: 37,
    PL_TASKMANAGER_DTV_APP_MINT: 38,
    PL_TASKMANAGER_DTV_APP_WPRO: 39,
    PL_TASKMANAGER_DTV_APP_DLNA: 40,
    PL_TASKMANAGER_DTV_APP_DLNACENTER: 41,
    PL_TASKMANAGER_DTV_APP_DMR: 42,
    PL_TASKMANAGER_DTV_APP_PMR: 43,
    PL_TASKMANAGER_DTV_APP_RUIS: 44,
    PL_TASKMANAGER_DTV_APP_RUIC: 45,
    PL_TASKMANAGER_DTV_APP_USBLIST: 46,
    PL_TASKMANAGER_DTV_APP_STORY: 47,
    PL_TASKMANAGER_DTV_APP_PVR: 48,
    PL_TASKMANAGER_DTV_APP_PVR_EDIT: 49,
    PL_TASKMANAGER_DTV_APP_PVR_BROWSER: 50,
    PL_TASKMANAGER_DTV_APP_CEC: 51,
    PL_TASKMANAGER_DTV_APP_CEC_DEVICE: 52,
    PL_TASKMANAGER_DTV_APP_BLUETOOTH: 53,
    PL_TASKMANAGER_DTV_APP_SWUPGRADE: 54,
    PL_TASKMANAGER_DTV_APP_OTA: 55,
    PL_TASKMANAGER_DTV_APP_SWUPGRADE_AIR: 56,
    PL_TASKMANAGER_DTV_APP_OAD: 57,
    PL_TASKMANAGER_DTV_APP_OAD_SAT: 58,
    PL_TASKMANAGER_DTV_APP_OTN: 59,
    PL_TASKMANAGER_DTV_APP_SWUCOMMON: 60,
    PL_TASKMANAGER_DTV_APP_USB_HOTEL_LOGOCLONE: 61,
    PL_TASKMANAGER_DTV_APP_CHMAP_TRANSFER: 62,
    PL_TASKMANAGER_DTV_APP_RSS: 63,
    PL_TASKMANAGER_DTV_APP_INFOLINK2: 64,
    PL_TASKMANAGER_DTV_APP_MEDIALINK: 65,
    PL_TASKMANAGER_DTV_APP_CONTENTSHOME: 66,
    PL_TASKMANAGER_DTV_APP_GPLAYER: 67,
    PL_TASKMANAGER_DTV_APP_FLASHPLAYER: 68,
    PL_TASKMANAGER_DTV_APP_TLIBBROWSER: 69,
    PL_TASKMANAGER_DTV_APP_PRODUCTGUIDE: 70,
    PL_TASKMANAGER_DTV_APP_USERMANUAL: 71,
    PL_TASKMANAGER_DTV_APP_GALLERYPLAYER: 72,
    PL_TASKMANAGER_DTV_APP_CLMOVIEPLAYER: 73,
    PL_TASKMANAGER_DTV_APP_CLPOP: 74,
    PL_TASKMANAGER_DTV_APP_WLAN: 75,
    PL_TASKMANAGER_DTV_APP_YAHOO: 76,
    PL_TASKMANAGER_DTV_APP_SHOPDEMO: 77,
    PL_TASKMANAGER_DTV_APP_MAINTVUPNPSERVER: 78,
    PL_TASKMANAGER_DTV_APP_DUALTV_READY: 79,
    PL_TASKMANAGER_DTV_APP_MOIP: 80,
    PL_TASKMANAGER_DTV_APP_DNET: 81,
    PL_TASKMANAGER_DTV_APP_POP: 82,
    PL_TASKMANAGER_DTV_APP_FRONTRUNNER: 83,
    PL_TASKMANAGER_DTV_APP_HOTEL_IPTV: 84,
    PL_TASKMANAGER_DTV_APP_IPTV_BROWSER: 85,
    PL_TASKMANAGER_DTV_APP_PHAROS_AGENT: 86,
    PL_TASKMANAGER_DTV_APP_FRONT_DISPLAY: 87,
    PL_TASKMANAGER_DTV_APP_BDP_TOOLS: 88,
    PL_TASKMANAGER_DTV_APP_BDHTS: 89,
    PL_TASKMANAGER_DTV_APP_FULLBROWSER: 90,
    PL_TASKMANAGER_DTV_APP_REMOTE: 91,
    PL_TASKMANAGER_DTV_APP_REMOTE_MSG: 92,
    PL_TASKMANAGER_DTV_APP_DLNADMS: 93,
    PL_TASKMANAGER_DTV_APP_DOCOMO_BROWSER: 94,
    PL_TASKMANAGER_DTV_APP_BML_BROWSER: 95,
    PL_TASKMANAGER_DTV_APP_RCT: 96,
    PL_TASKMANAGER_DTV_APP_DOWNLOAD_PLAYER: 97,
    PL_TASKMANAGER_DTV_APP_PSA: 98,
    PL_TASKMANAGER_DTV_APP_CALENDAR: 99,
    PL_TASKMANAGER_DTV_APP_BD_PLAYER: 100,
    PL_TASKMANAGER_DTV_APP_DVD_PLAYER: 101,
    PL_TASKMANAGER_DTV_APP_CDDA_PLAYER: 102,
    PL_TASKMANAGER_DTV_APP_BDRE_PLAYER: 103,
    PL_TASKMANAGER_DTV_APP_VCD_PLAYER: 104,
    PL_TASKMANAGER_DTV_APP_IPOD_PLAYER: 105,
    PL_TASKMANAGER_DTV_APP_BDP_SETTINGS: 106,
    PL_TASKMANAGER_DTV_APP_BDP_INITSET: 107,
    PL_TASKMANAGER_DTV_APP_HTS_FUNCTION_MODE: 108,
    PL_TASKMANAGER_DTV_APP_BDP_TEST_MODE: 109,
    PL_TASKMANAGER_DTV_APP_ATSC_MH: 110,
    PL_TASKMANAGER_DTV_APP_HBBTV: 111,
    PL_TASKMANAGER_DTV_TR_APP_RCVIEWER: 112,
    PL_TASKMANAGER_DTV_TR_APP_MYTV: 113,
    PL_TASKMANAGER_DTV_TR_APP_SETTINGS: 114,
    PL_TASKMANAGER_DTV_TR_APP_CHLIST: 115,
    PL_TASKMANAGER_DTV_TR_APP_ACTIVITY: 116,
    PL_TASKMANAGER_DTV_TR_APP_MBR: 117,
    PL_TASKMANAGER_DTV_TR_APP_SOURCELIST: 118,
    PL_TASKMANAGER_DTV_TR_APP_ALLSHARE: 119,
    PL_TASKMANAGER_DTV_TR_APP_FTU: 120,
    PL_TASKMANAGER_DTV_TR_APP_FACTORY: 121,
    PL_TASKMANAGER_DTV_TR_APP_PERSONALLISTENING: 122,
    PL_TASKMANAGER_DTV_TR_APP_FAVORITE: 123,
    PL_TASKMANAGER_DTV_TR_APP_SCHEDULEMANAGER: 124,
    PL_TASKMANAGER_DTV_TR_APP_VOIP: 125,
    PL_TASKMANAGER_DTV_TR_APP_OSK: 126,
    PL_TASKMANAGER_DTV_TR_APP_BROWSERCONTROL: 127,
    PL_TASKMANAGER_DTV_APP_MAP_BROWSER: 128,
    PL_TASKMANAGER_DTV_APP_MAX: 129,
    PL_TV_TARGET_LOCATION_UNKNOWN: 0,
    PL_TV_TARGET_LOCATION_KOR: 1,
    PL_TV_TARGET_LOCATION_USA: 2,
    PL_TV_TARGET_LOCATION_BRA: 3,
    PL_TV_TARGET_LOCATION_PANEURO: 4,
    PL_TV_TARGET_LOCATION_CHI: 5,
    PL_TV_TARGET_LOCATION_HKG: 6,
    PL_TV_TARGET_LOCATION_ARB: 7,
    PL_TV_TARGET_LOCATION_PANNORDIG: 8,
    PL_TV_TARGET_LOCATION_SOUTHEASTASIA: 9,
    PL_TV_TARGET_LOCATION_ASIA_ATV: 10,
    PL_TV_TARGET_LOCATION_ASIA_DTV: 11,
    PL_TV_TARGET_LOCATION_TW: 12,
    PL_TV_TARGET_LOCATION_NORTHAFRICA: 13,
    PL_TV_TARGET_LOCATION_EA_DTV: 14,
    PL_TV_TARGET_LOCATION_CIS: 15,
    PL_TV_TARGET_LOCATION_PHI: 16,
    PL_TV_TARGET_LOCATION_S_AFR_DTV: 17,
    PL_TV_LOCATION_CODE: new Array(),
    PL_SCREEN_OPTION_BRIGHTNESS_SENSOR: 41,
    PL_TV_PRODUCT_TYPE_TV: 0,
    PL_TV_PRODUCT_TYPE_MONITOR: 1,
    PL_TV_PRODUCT_TYPE_BD: 2,
    PL_TV_FACTORY_LANGUAGE_UNKNOWN: 0,
    PL_TV_FACTORY_LANGUAGE_EAST_ASIA: 1,
    PL_TV_FACTORY_LANGUAGE_IRAN: 2,
    PL_TV_FACTORY_LANGUAGE_ISRAEL: 3,
    PL_TV_FACTORY_LANGUAGE_MIDDLE_ASIA: 4,
    PL_TV_FACTORY_LANGUAGE_SOUTH_AMERICA: 5,
    PL_TV_FACTORY_LANGUAGE_TAIWAN: 6,
    PL_TV_FACTORY_LANGUAGE_AFRICA: 7,
    PL_TV_FACTORY_LANGUAGE_NORTH_AFRICA: 8,
    PL_TV_FACTORY_LANGUAGE_WEST_ASIA: 9,
    PL_TV_REMOTE_DEFAULT_TYPE: 0,
    PL_TV_REMOTE_4DIRECTION_TYPE: 1,
    PL_TV_REMOTE_NUMERIC_TYPE: 2,
    PL_TV_REMOTE_PLAYBACK_TYPE: 3,
    PL_TV_REMOTE_YAHOO_TYPE: 4,
    PL_TV_REMOTE_PSIZE_TYPE: 5,
    PL_TV_REMOTE_FULLBROWSER_TYPE: 6,
    PL_TV_REMOTE_INTERNET_TYPE: 7,
    PL_TV_REMOTE_DATASERVICE_TYPE: 8,
    PL_TV_REMOTE_ROOMEQ_TYPE: 9,
    PL_TV_REMOTE_TTX_TYPE: 10,
    PL_TV_REMOTE_MHP_TYPE: 11,
    PL_TV_REMOTE_FULLBROWSER2_TYPE: 12,
    PL_TV_REMOTE_FULLBROWSER3_TYPE: 13,
    PL_TV_REMOTE_FULLBROWSER4_TYPE: 14,
    PL_TV_REMOTE_FULLBROWSER5_TYPE: 15,
    PL_TV_REMOTE_FULLBROWSER6_TYPE: 16,
    PL_TV_REMOTE_FULLBROWSER7_TYPE: 17,
    PL_TV_REMOTE_FULLBROWSER8_TYPE: 18,
    PL_TV_REMOTE_HDMICEC_TYPE: 19,
    PL_TV_REMOTE_USBDLNA_TYPE: 20,
    PL_TV_REMOTE_INTERNET_4DIRECTION_TYPE: 21,
    PL_TV_REMOTE_COLOR_TYPE: 22,
    PL_TV_REMOTE_IR_TYPE: 23
};
with (deviceapis._pluginDef) {
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_KOR] = "ko";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_ENG_US] = "en";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_SPA_US] = "es-US";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_FRA_US] = "fr-US";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_POR_US] = "pt-US";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_BUL] = "bg";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_CRO] = "hr";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_CZE] = "cs";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_DAN] = "da";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_DUT] = "nl";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_FIN] = "fi";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_FRA] = "fr";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_DEU] = "de";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_GRE] = "el";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_HUN] = "hu";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_ITA] = "it";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_NOR] = "no";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_ENG] = "en-GB";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_POL] = "pl";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_POR] = "pt";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_ROM] = "ro";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_RUS] = "ru";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_SER] = "sr";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_SLK] = "sk";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_SPA] = "es";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_SWE] = "sv";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_TUR] = "tr";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_CHI] = "zh-CN";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_HKG] = "zh-HK";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_TPE] = "zh-TW";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_JPN] = null;
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_MAO] = null;
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_CMN] = null;
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_YUE] = null;
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_HIN] = "hi";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_EST] = "et";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_LAT] = "lv";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_LTU] = "lt";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_ARA] = "ar";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_PER] = "fa";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_QAA] = null;
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_AD] = null;
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_CAT] = null;
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_VAL] = null;
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_THA] = "th";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_HEB] = "he";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_IND] = "id";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_VIE] = "vi";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_URD] = "ur";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_AFR] = "af";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_ZUL] = "zu";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_XHO] = "xh";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_YOR] = "yo";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_IGB] = "ig";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_HAU] = "ha";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_SWA] = "sw";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_AMH] = "am";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_OTHER] = null;
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_TAM] = "ta";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_IRA] = null;
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_FIL] = null;
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_LIT] = "lt";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_LAV] = "lv";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_SLV] = "sl";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_ALB] = "sq";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_UKR] = "uk";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_KAZ] = "kk";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_MKD] = "mk";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_MAY] = "ms";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_WEL] = "cy";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_GLA] = "gd";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_IRI] = "ga";
    PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_MAX] = null;
    PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_UNKNOWN] = "USA";
    PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_KOR] = "KOR";
    PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_USA] = "USA";
    PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_BRA] = "BRA";
    PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_PANEURO] = "PANEURO";
    PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_CHI] = "CHI";
    PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_HKG] = "HKG";
    PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_ARB] = "ARB";
    PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_PANNORDIG] = "PANNORDIG";
    PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_SOUTHEASTASIA] = "SOUTHEASTASIA";
    PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_ASIA_ATV] = "ASIA_ATV";
    PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_ASIA_DTV] = "ASIA_DTV";
    PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_TW] = "TW";
    PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_NORTHAFRICA] = "NORTHAFRICA";
    PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_EA_DTV] = "EA_DTV";
    PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_CIS] = "CIS";
    PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_PHI] = "PHI";
    PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_S_AFR_DTV] = "S_AFR_DTV";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_USA] = "USA";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_KOR] = "KOR";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_SPA] = "SPA";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_FRA] = "FRA";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_JPN] = "JPN";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_EU] = "EU";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_UK] = "UK";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_GERMANY] = "GERMANY";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_ITALY] = "ITALY";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_SWEDEN] = "SWEDEN";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_BULGARIA] = "BULGARIA";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_CROATIA] = "CROATIA";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_CZECH] = "CZECH";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_NETHERLANDS] = "NETHERLANDS";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_GREECE] = "GREECE";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_HUNGARY] = "HUNGARY";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_POLAND] = "POLAND";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_PORTUGAL] = "PORTUGAL";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_ROMANIA] = "ROMANIA";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_RUSSIA] = "RUSSIA";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_SWITZERLAND] = "SWITZERLAND";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_TURKEY] = "TURKEY";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_AUSTRALIA] = "AUSTRALIA";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_AUSTRIA] = "AUSTRIA";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_BELGIUM] = "BELGIUM";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_DENMARK] = "DENMARK";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_FINLAND] = "FINLAND";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_NORWAY] = "NORWAY";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_CHINA] = "CHINA";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_IRELAND] = "IRELAND";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_SERBIA] = "SERBIA";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_SAN_MARINO] = "SAN_MARINO";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_MONACO] = "MONACO";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_BRAZIL] = "BRAZIL";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_HONGKONG] = "HONGKONG";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_TAIWAN] = "TAIWAN";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_NEWZEALAND] = "NEWZEALAND";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_SLOVAKIA] = "SLOVAKIA";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_SINGAPORE] = "SINGAPORE";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_GENERALCABLE] = "GENERALCABLE";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_NORTH_AFRICA] = "NORTH_AFRICA";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_BELGIUM_FRENCH] = "BELGIUM_FRENCH";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_BELGIUM_DUTCH] = "BELGIUM_DUTCH";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_SOUTH_AFRICA] = "SOUTH_AFRICA";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_OTHER] = "OTHER";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_ASIAWEUROPE_ANALOG] = "ASIAWEUROPE_ANALOG";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_HONGKONG_UK_ANALOG] = "HONGKONG_UK_ANALOG";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_NZL_INDONESIA_ANALOG] = "NZL_INDONESIA_ANALOG";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_SOUTH_AFRICA_ANALOG] = "SOUTH_AFRICA_ANALOG";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_AMERICA_ANALOG] = "AMERICA_ANALOG";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_CHINA_ANALOG] = "CHINA_ANALOG";
    PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_EASTEUROPE_ANALOG] = "EASTEUROPE_ANALOG"
}
deviceapis.oci = {
    EVENT_DEV_CONNECT: 11,
    EVENT_DEV_CONNECT_SUCCESS: 41,
    EVENT_DEV_CONNECT_FAIL: 42,
    EVENT_DEV_DISCONNECT: 12,
    EVENT_DEV_STATUS: 13,
    OCI_OK: 0,
    OCI_NO_ERR: 0,
    OCI_ERR_INVALID_PARAM: 9901,
    OCI_ERR: 9999,
    OCI_EVENT_NOTHING: 0,
    DELIMITER_FUNC_PARAM: "|",
    DELIMITER_FUNC_RESULT: ",",
    DELIMITER_EVENT_PARAM: ",",
    COMMAND_OCI: "ExecuteOCI",
    OCI_PROFILE_PRINTER: 32,
    OCIDevInfo: function () {
        var a;
        var b;
        var c;
        var d;
        var e
    },
    addPluginObject: function (h, c) {
        var d = "_plugin_";
        var e = "";
        var a = "_pluginObject" + h + "Container_";
        var g = document.createElement("div");
        g.id = a;
        g.style.position = "absolute";
        g.style.left = "0px";
        g.style.top = "0px";
        document.body.appendChild(g);
        var b = false;
        var f = b ? "position:absolute;display:block;left:0px;top:0px;width:0px;height:0px;" : "opacity:0.0;width:0px;height:0px;";
        if (!c) {
            e = '<OBJECT id="' + d + h + '" classid="clsid:SAMSUNG-INFOLINK-' + h + '" style="' + f + '"></OBJECT>';
            g.innerHTML += e
        } else {
            e = '<OBJECT id="' + d + h + '" classid="clsid:SAMSUNG-INFOLINK-SEF" style="' + f + '"></OBJECT>';
            g.innerHTML += e
        }
        return document.getElementById(d + h)
    },
    create: function (c, b) {
        var a = 0;
        if (c == null) {
            c = deviceapis.oci.addPluginObject("SEF", true);
            if (c != null) {
                a = c.Open(b, "1.00", "None");
                if (this.getConnectedDeviceInfo(c, 0) == window.deviceapis.oci.OCI_ERR) {
                    return window.deviceapis.oci.OCI_ERR
                }
            } else {
                return window.deviceapis.oci.OCI_ERR
            }
        }
        return c
    },
    isConnected: function (c, b) {
        var a = c.Execute("IsConnected", "-1", b);
        if (a == 0) {
            return false
        }
        return true
    },
    getConnectedDeviceInfo: function (e, c) {
        if (e == null || c < 0) {
            return null
        }
        var b = e.Execute("GetConnectedDeviceInfo", "-1", String(c));
        if (b == window.deviceapis.oci.OCI_ERR) {
            return null
        } else {
            if (b == 0) {
                return window.deviceapis.oci.OCI_ERR
            }
        }
        var d = b.split(window.deviceapis.oci.DELIMITER_FUNC_RESULT);
        var a = new window.deviceapis.oci.OCIDevInfo();
        a.UID = d[0];
        a.name = d[1];
        a.deviceType = Number(d[2]);
        a.eventType = this.OCI_EVENT_NOTHING;
        a.isFree = d[3];
        return a
    },
    createDevice: function (c, a) {
        var b = c.Execute("CreateDevice", "-1", a);
        if (b < 0) {
            return window.deviceapis.oci.OCI_ERR
        }
        return b
    },
    destroyDevice: function (b, a) {
        if (b != null) {
            ret = b.Execute("DestroyDevice", "-1", String(a));
            if (ret != window.deviceapis.oci.OCI_NO_ERR) {
            }
        }
        return
    },
    parseDeviceEvent: function (a) {
        var c = a.split(window.deviceapis.oci.DELIMITER_EVENT_PARAM);
        if (c != null) {
            var b = new window.deviceapis.oci.OCIDevInfo();
            b.eventType = Number(c[0]);
            b.UID = String(c[1]);
            b.name = String(c[2]);
            b.deviceType = Number(c[5]);
            return b
        }
        return null
    },
    isAvailable: function (c, d, b) {
        for (var a = 0; a < d.length; a++) {
            if (d[a].getUniqueID() == c) {
                b[a] = true;
                return a
            }
        }
        return null
    },
    removeSpecificDevice: function (e, d, f, b) {
        var a = this.isAvailable(d, f, b);
        if (a != null) {
            var c = f[a].getDeviceID();
            delete f[a];
            this.destroyDevice(e, c);
            f.splice(a, 1);
            b.splice(a, 1)
        }
    },
    removeDevices: function (c, d, a) {
        if (a.length) {
            for (var b = a.length - 1; b >= 0; b--) {
                if (a[b] == false) {
                    this.destroyDevice(c, d[b].getDeviceID());
                    d.splice(b, 1);
                    a.splice(b, 1)
                }
            }
        }
    },
    getConnectedDevices: function (a, f, e, c, g) {
        for (var i = 0; i < f.length; i++) {
            e[i] = false
        }
        var b = 0;
        while (1) {
            var h = null;
            h = this.getConnectedDeviceInfo(a, b++);
            if (h == null) {
                break
            }
            if (this.isAvailable(h.UID, f, e) == null) {
                var j = this.createDevice(a, h.UID);
                if (j != this.OCI_ERR) {
                    var d = new g(h, j);
                    f.push(d)
                }
            }
        }
        this.removeDevices(a, f, e);
        c(f)
    },
    destroy: function (a) {
        if (a != null) {
            a.Close()
        }
    }
};
deviceapis.gamepad = {
    MGR_EVENT_DEV_CONNECT: deviceapis.oci.EVENT_DEV_CONNECT,
    MGR_EVENT_DEV_DISCONNECT: deviceapis.oci.EVENT_DEV_DISCONNECT,
    EV_KEY: 1,
    EV_ABS: 3,
    ABS_X: 0,
    ABS_Y: 1,
    ABS_Z: 2,
    ABS_RX: 3,
    ABS_RY: 4,
    ABS_RZ: 5,
    ABS_THROTTLE: 6,
    ABS_RUDDER: 7,
    ABS_WHEEL: 8,
    ABS_GAS: 9,
    ABS_BRAKE: 10,
    ABS_HAT0X: 16,
    ABS_HAT0Y: 17,
    ABS_HAT1X: 18,
    ABS_HAT1Y: 19,
    ABS_HAT2X: 20,
    ABS_HAT2Y: 21,
    ABS_HAT3X: 22,
    ABS_HAT3Y: 23,
    BTN_1: 0,
    BTN_2: 1,
    BTN_3: 2,
    BTN_4: 3,
    BTN_5: 4,
    BTN_6: 5,
    BTN_7: 6,
    BTN_8: 7,
    BTN_9: 8,
    BTN_10: 9,
    BTN_11: 10,
    BTN_12: 11,
    BTN_13: 12,
    BTN_14: 13,
    BTN_15: 14,
    BTN_16: 15,
    MAX_ABS_VALUE: 255,
    MIN_ABS_VALUE: 0,
    XINPUT_MAX_ABS_VALUE: 32767,
    XINPUT_MIN_ABS_VALUE: -32768,
    KEY_PRESSED: 1,
    KEY_RELEASED: 0,
    KEY_REPEATED: 2,
    GamepadArray: new Array(),
    GamepadValidArray: new Array(),
    GamepadManagerCallback: null,
    SEFPlugin: null,
    ManagerEvent: function () {
        var c;
        var b;
        var a
    },
    getGamepads: function (a, b) {
        var d = 1;
        var c = deviceapis.oci.create(this.SEFPlugin, "Gamepad");
        if (this.SEFPlugin == null) {
            d = 2500;
            if (c != deviceapis.oci.OCI_ERR) {
                this.SEFPlugin = c;
                this.SEFPlugin.OnEvent = this.callbackGamepads;
                this.SEFPlugin.Execute("RegisterCallback", "-1")
            }
        }
        if (typeof b == "undefined") {
            b = null
        }
        if (typeof a != "function") {
            alert("[gamepad.js : getGamepads] successCallback is not a function type");
            if (b != null) {
            }
        } else {
            setTimeout(function () {
                deviceapis.oci.getConnectedDevices(deviceapis.gamepad.SEFPlugin, deviceapis.gamepad.GamepadArray, deviceapis.gamepad.GamepadValidArray, a, deviceapis.gamepad.Gamepad)
            }, d)
        }
    },
    registerManagerCallback: function (a) {
        alert("[gamepad.js : registerManagerCallback]");
        if (typeof a == "function") {
            this.GamepadManagerCallback = a
        }
    },
    callbackGamepads: function (c, b, a) {
        var d = Number(c);
        var e = deviceapis.oci.parseDeviceEvent(b);
        var f = new deviceapis.gamepad.ManagerEvent();
        f.eventType = e.eventType;
        f.name = e.name;
        f.UID = e.UID;
        if (deviceapis.gamepad.GamepadManagerCallback != null) {
            deviceapis.gamepad.GamepadManagerCallback(f)
        }
        switch (d) {
            case deviceapis.oci.EVENT_DEV_DISCONNECT:
                deviceapis.oci.removeSpecificDevice(deviceapis.gamepad.SEFPlugin, e.UID, deviceapis.gamepad.GamepadArray, deviceapis.gamepad.GamepadValidArray);
                break;
            default:
                break
        }
    },
    Gamepad: function (a, b) {
        this.uniqueID = a.UID;
        this.name = a.name;
        this.deviceID = b;
        this.getUniqueID = function () {
            return this.uniqueID
        };
        this.getDeviceID = function () {
            return this.deviceID
        };
        this.getName = function () {
            return this.name
        };
        this.GamepadEvent = function () {
            var f;
            var c;
            var d;
            var e
        };
        this.gamepadEvent = new this.GamepadEvent();
        this.GamepadABSValueRange = function () {
            var d;
            var c
        };
        this.gamepadRange = new this.GamepadABSValueRange();
        this.getInputEvent = function () {
            var d = deviceapis.gamepad.SEFPlugin.Execute("GetInputEvent", String(this.deviceID));
            if (d == deviceapis.oci.OCI_ERR || d == deviceapis.oci.OCI_ERR_INVALID_PARAM) {
                return null
            }
            var c = d.split(deviceapis.oci.DELIMITER_FUNC_RESULT);
            this.gamepadEvent.time = Number(c[0]);
            this.gamepadEvent.type = Number(c[1]);
            this.gamepadEvent.code = Number(c[2]);
            this.gamepadEvent.value = Number(c[3]);
            return this.gamepadEvent
        };
        this.playForceFeedback = function (e, d) {
            alert("playForceFeedback");
            if (typeof e == "undefined") {
                e = 1
            }
            if (typeof d == "undefined") {
                d = 100
            }
            var c = deviceapis.gamepad.SEFPlugin.Execute("PlayForceFeedback", String(this.deviceID), String(e), String(d));
            if (c != deviceapis.oci.OCI_NO_ERR) {
                return false
            }
            return true
        };
        this.stopForceFeedback = function () {
            alert("stopForceFeedback");
            var c = deviceapis.gamepad.SEFPlugin.Execute("StopForceFeedback", String(this.deviceID));
            if (c != deviceapis.oci.OCI_NO_ERR) {
                return false
            }
            return true
        };
        this.isForceFeedbackSupported = function () {
            alert("isForceFeedbackSupported");
            var c = deviceapis.gamepad.SEFPlugin.Execute("IsForceFeedbackSupported", String(this.deviceID));
            if (c == 0) {
                alert("[OCI]: ForceFeedback Not supported.");
                return false
            }
            alert("[OCI]: ForceFeedback Supported.");
            return true
        };
        this.getABSValueRange = function (d) {
            var e = deviceapis.gamepad.SEFPlugin.Execute("GetABSValueRange", String(this.deviceID), String(d));
            if (e == deviceapis.oci.OCI_ERR) {
                return null
            }
            var c = e.split(deviceapis.oci.DELIMITER_FUNC_RESULT);
            this.gamepadRange.maxValue = Number(c[0]);
            this.gamepadRange.minValue = Number(c[1]);
            return this.gamepadRange
        }
    },
    ends: function () {
        for (var a = 0; a < this.GamepadArray.length; a++) {
            this.GamepadValidArray[a] = false
        }
        this.removeGamepads()
    }
};
deviceapis.customdevice = {
    CustomDeviceArray: new Array(),
    CustomDeviceValidArray: new Array(),
    CustomDeviceCallback: null,
    SEFPlugin: null,
    DocEduDevice: null,
    EduDevicePlugin: "EduDevice",
    ERROR_CODE_NO_ERR: 0,
    ERROR_CODE_ERR: 9999,
    DEV_EVENT_MESSAGE_RECEIVED: 150,
    DEV_EVENT_JOINED_GROUP: 151,
    DEV_EVENT_LEFT_GROUP: 152,
    MGR_EVENT_DEV_CONNECT: 11,
    MGR_EVENT_DEV_DISCONNECT: 12,
    MGR_EVENT_DEV_STATUS: 13,
    DEV_EDU_DEVICE: 5,
    DEV_SMART_DEVICE: 33,
    ManagerEvent: function () {
        var c;
        var a;
        var b;
        var d
    },
    CustomDeviceInfo: function () {
        var a;
        var b
    },
    CustomDeviceMessageInfo: function () {
        var b;
        var a
    },
    CustomDeviceCustomDataInfo: function () {
        var b;
        var a
    },
    CustomDeviceGroupInfo: function () {
        var a
    },
    getCustomDevices: function (c, h) {
        var i = 1;
        var b = window.deviceapis.oci.create(this.SEFPlugin, "CustomDevice");
        if (this.SEFPlugin == null) {
            i = 1000;
            if (b != window.deviceapis.oci.OCI_ERR) {
                this.SEFPlugin = b;
                this.SEFPlugin.OnEvent = this.callbackCustomDevice;
                this.SEFPlugin.Execute("RegisterCallback", "-1");
                var f = "_plugin_";
                var g = "";
                var j = "_pluginObjectSEFContainer_";
                var e = document.createElement("div");
                e.id = j;
                e.style.position = "absolute";
                e.style.left = "0px";
                e.style.top = "0px";
                document.body.appendChild(e);
                var d = true;
                var a = d ? "position:absolute;display:block;width:0px;height:0px;" : "opacity:0.0;width:0px;height:0px;";
                g = '<OBJECT id="' + f + this.EduDevicePlugin + '" classid="clsid:SAMSUNG-INFOLINK-SEF" style="' + a + '"></OBJECT>';
                e.innerHTML += g;
                this.DocEduDevice = document.getElementById(f + this.EduDevicePlugin)
            }
        }
        if (typeof h == "undefined") {
            h = null
        }
        if (typeof c != "function") {
            alert("[custom.js : getCustoms] successCallback is not a function type");
            if (h != null) {
            }
        } else {
            window.deviceapis.oci.getConnectedDevices(window.deviceapis.customdevice.SEFPlugin, window.deviceapis.customdevice.CustomDeviceArray, window.deviceapis.customdevice.CustomDeviceValidArray, c, window.deviceapis.customdevice.CustomDevice)
        }
    },
    registerManagerCallback: function (a) {
        if (typeof a == "function") {
            CustomDeviceCallback = a
        }
    },
    callbackCustomDevice: function (b, h, g) {
        alert("[callbackCustoms] Event type = " + b);
        var f = Number(b);
        switch (f) {
            case window.deviceapis.customdevice.MGR_EVENT_DEV_STATUS:
                var l = h.split(",");
                window.deviceapis.customdevice.DocEduDevice.Open(window.deviceapis.customdevice.EduDevicePlugin, "1.000", "none");
                window.deviceapis.customdevice.DocEduDevice.Execute("Command", "Param1", l[2]);
                break;
            case window.deviceapis.customdevice.MGR_EVENT_DEV_DISCONNECT:
            case window.deviceapis.customdevice.MGR_EVENT_DEV_CONNECT:
                var k = new window.deviceapis.customdevice.ManagerEvent();
                var l = h.split(",");
                k.eventType = Number(b);
                k.UID = l[1];
                k.name = l[2];
                k.deviceType = Number(l[5]);
                if (CustomDeviceCallback != null) {
                    CustomDeviceCallback(k)
                }
                if (f == window.deviceapis.customdevice.MGR_EVENT_DEV_DISCONNECT) {
                    window.deviceapis.oci.removeSpecificDevice(window.deviceapis.customdevice.SEFPlugin, String(l[1]), window.deviceapis.customdevice.CustomDeviceArray, window.deviceapis.customdevice.CustomDeviceValidArray)
                }
                break;
            case window.deviceapis.customdevice.DEV_EVENT_JOINED_GROUP:
            case window.deviceapis.customdevice.DEV_EVENT_LEFT_GROUP:
                var j = new window.deviceapis.customdevice.CustomDeviceInfo();
                var e = new window.deviceapis.customdevice.CustomDeviceGroupInfo();
                var l = h.split("2ZQ");
                e.groupName = l[1];
                j.infoType = f;
                j.data = e;
                var d = 0;
                for (var d = 0; d < window.deviceapis.customdevice.CustomDeviceArray.length; d++) {
                    if ((window.deviceapis.customdevice.CustomDeviceArray[d].deviceID == Number(l[0])) && (window.deviceapis.customdevice.CustomDeviceArray[d].deviceCallback != null)) {
                        window.deviceapis.customdevice.CustomDeviceArray[d].deviceCallback(j)
                    }
                }
                break;
            case window.deviceapis.customdevice.DEV_EVENT_MESSAGE_RECEIVED:
                var j = new window.deviceapis.customdevice.CustomDeviceInfo();
                var c = new window.deviceapis.customdevice.CustomDeviceMessageInfo();
                var l = h.split("2ZQ");
                var a = l[0];
                c.message1 = l[1];
                c.message2 = l[2];
                j.infoType = f;
                j.data = c;
                var d = 0;
                for (d = 0; d < window.deviceapis.customdevice.CustomDeviceArray.length; d++) {
                    if ((window.deviceapis.customdevice.CustomDeviceArray[d].deviceID == Number(a)) && (window.deviceapis.customdevice.CustomDeviceArray[d].deviceCallback != null)) {
                        window.deviceapis.customdevice.CustomDeviceArray[d].deviceCallback(j)
                    }
                }
                break;
            default:
                break
        }
    },
    CustomDevice: function (a, b) {
        this.uniqueID = a.UID;
        this.name = a.name;
        this.deviceID = b;
        this.deviceType = a.deviceType;
        this.deviceCallback = null;
        this.getUniqueID = function () {
            return this.uniqueID
        };
        this.getDeviceID = function () {
            return this.deviceID
        };
        this.getName = function () {
            return this.name
        };
        this.getType = function () {
            return this.deviceType
        };
        this.receiveMessage = function () {
            var e = window.deviceapis.customdevice.SEFPlugin.Execute("ReceiveCPMessage", String(this.deviceID));
            if (e == null || e == window.deviceapis.customdevice.ERROR_CODE_ERR) {
                return null
            }
            var d = new window.deviceapis.customdevice.CustomDeviceCustomDataInfo();
            var c = e.split("2ZQ");
            var d = new Array(2);
            d.command = Number(c[0]);
            d.data = String(c[1]);
            return d
        };
        this.sendMessage = function (d) {
            var c = window.deviceapis.customdevice.SEFPlugin.Execute("SendCPMessage", String(this.deviceID), d);
            if (c != window.deviceapis.customdevice.ERROR_CODE_NO_ERR) {
                alert("[sendMessage]: ERROR! = " + c);
                return window.deviceapis.customdevice.ERROR_CODE_ERR
            }
            return window.deviceapis.customdevice.ERROR_CODE_NO_ERR
        };
        this.broadcastMessage = function (d) {
            var c = window.deviceapis.customdevice.SEFPlugin.Execute("BroadcastCPMessage", String(this.deviceID), d);
            if (c != window.deviceapis.customdevice.ERROR_CODE_NO_ERR) {
                alert("[broadcastMessage]: ERROR! = " + c);
                return window.deviceapis.customdevice.ERROR_CODE_ERR
            }
            return window.deviceapis.customdevice.ERROR_CODE_NO_ERR
        };
        this.multicastMessage = function (d, e) {
            var c = window.deviceapis.customdevice.SEFPlugin.Execute("MulticastCPMessage", String(this.deviceID), d, e);
            if (c != window.deviceapis.customdevice.ERROR_CODE_NO_ERR) {
                alert("[multicastMessage]: ERROR! = " + c);
                return window.deviceapis.customdevice.ERROR_CODE_ERR
            }
            return window.deviceapis.customdevice.ERROR_CODE_NO_ERR
        };
        this.disconnectDevice = function () {
            var c = window.deviceapis.customdevice.SEFPlugin.Execute("DisconnectCPDevice", String(nDeviceID));
            if (c != window.deviceapis.customdevice.ERROR_CODE_NO_ERR) {
                alert("[disconnectDevice]: ERROR! = " + c);
                return window.deviceapis.customdevice.ERROR_CODE_ERR
            }
            return window.deviceapis.customdevice.ERROR_CODE_NO_ERR
        };
        this.registerDeviceCallback = function (c) {
            if (typeof c == "function") {
                this.deviceCallback = c;
                window.deviceapis.customdevice.SEFPlugin.Execute("RegisterCallback", String(this.deviceID))
            } else {
                this.deviceCallback = null;
                window.deviceapis.customdevice.SEFPlugin.Execute("UnregisterCallback", String(this.deviceID))
            }
        }
    },
};
deviceapis.healthcaredevice = {
    MGR_EVENT_DEV_CONNECT: deviceapis.oci.EVENT_DEV_CONNECT,
    MGR_EVENT_DEV_DISCONNECT: deviceapis.oci.EVENT_DEV_DISCONNECT,
    MGR_EVENT_DEV_SEARCHED: 210,
    MGR_EVENT_DEV_SEARCH_FINISHED: 211,
    MGR_EVENT_DEV_CONNECT_FAILED: 212,
    MGR_EVENT_DEV_PIN_REQUESTED: 221,
    MGR_EVENT_GETDATA: 200,
    DEV_PULSE_OXIMETER: 4100,
    DEV_BLOOD_PRESSURE_MONITOR: 4103,
    DEV_TEMPERATURE: 4104,
    DEV_WEIGHING_SCALE: 4111,
    DEV_GLUCOSE_METER: 4113,
    DEV_CARDIOVASCULAR: 4137,
    DEV_PEDOMETER: 14113,
    SPEC_PROFILE_HF_STRENGTH: 4138,
    SPEC_PROFILE_AI_ACTIVITY_HUB: 4167,
    SPEC_PROFILE_AI_MED_MINDER: 4168,
    DEV_INFO_MEASURE_DATA: 1,
    DEV_INFO_SYSTEM_INFO: 2,
    DEV_INFO_PMSTORE_DATA: 5,
    DEV_INFO_UNKNOWN: 0,
    DEV_MANUFACTURER: 80,
    DEV_MODEL_NUMBER: 81,
    MEASURE_DATA_ABS_TIMESTAMP: 2448,
    MEASURE_DATA_BODY_WEIGHT: 57664,
    MEASURE_DATA_BODY_HEIGHT: 57668,
    MEASURE_DATA_BODY_MASS: 57680,
    MEASURE_DATA_BODY_FAT: 57676,
    MEASURE_DATA_PULSE_RATE: 18474,
    MEASURE_DATA_NIBP: 18948,
    MEASURE_DATA_SYSTOLIC: 18949,
    MEASURE_DATA_DIASTOLIC: 18950,
    MEASURE_DATA_MAP: 18951,
    MEASURE_DATA_DISTANCE: 103,
    MEASURE_DATA_ENERGY: 119,
    MEASURE_DATA_UNKNOWN: 0,
    MEASURE_DATA_CAPILLARY_WHOLEBLOOD: 29112,
    DEV_UNIT_DIMENSIONLESS: 512,
    DEV_UNIT_PERCENT: 544,
    DEV_UNIT_BPM: 2720,
    DEV_UNIT_KPA: 3843,
    DEV_UNIT_MMHG: 3872,
    DEV_UNIT_KG: 1731,
    DEV_UNIT_CM: 1297,
    DEV_UNIT_IN: 1376,
    DEV_UNIT_LB: 1760,
    DEV_UNIT_KGPM_SQ: 1952,
    DEV_UNIT_STEP: 6656,
    DEV_UNIT_CAL: 6784,
    DEV_UNIT_M: 1280,
    DEV_UNIT_G: 1728,
    DEV_UNIT_MGPDL: 2130,
    DEV_UNIT_UNKNOWN: 0,
    GET_PROFILE_ID: 0,
    GET_EVENT_TYPE: 1,
    GET_DATA_SUBTYPE: 2,
    GET_DEVICE_TYPE: 3,
    GET_PERSONID: 4,
    GET_TOTAL_NUM_OF_DATA: 5,
    GET_START_OF_DATA: 6,
    GET_PMSTORECOUNT: 4,
    GET_PMSEGMENTCOUNT: 5,
    OCI_PROFILE_HEALTHCARE: 2,
    HealthcareDeviceArray: new Array(),
    HealthcareDeviceValidArray: new Array(),
    HealthcareDeviceCallback: null,
    SEFPlugin: null,
    EMULStarted: 0,
    EMULSearched: 0,
    EMULConnected: 0,
    EMULData: new Array(),
    EMULSearch: new Array(),
    EMULBP1: "AND BP",
    EMULBP2: "HEM-7081-IT",
    EMULWS1: "HBF-206IT",
    EMULGM1: "AGM-3000",
    EMULRepeatTime: 5000,
    HealthcareDeviceInfo: function () {
        var b;
        var a;
        var c
    },
    HealthcareDeviceData: function () {
        var a;
        var b
    },
    HealthcareDeviceDataTimeInfo: function () {
        var c;
        var e;
        var a;
        var d;
        var f;
        var b
    },
    HealthcareDeviceDataMeasuredInfo: function () {
        var b;
        var a
    },
    ManagerEvent: function () {
        var c;
        var b;
        var a;
        var d
    },
    initHealthcareDevices: function () {
        var c = window.location.search.split("modelid=");
        var a = c[1].split("&");
        if (a[0] == "SDK") {
            deviceapis.healthcaredevice.EMULStarted++;
            return 1000
        } else {
            var b = window.deviceapis.oci.create(this.SEFPlugin, "HealthcareDevice");
            if (b != window.deviceapis.oci.OCI_ERR) {
                if (this.SEFPlugin == null) {
                    this.SEFPlugin = b;
                    this.SEFPlugin.OnEvent = this.callbackHealthcareDevice;
                    this.SEFPlugin.Execute("RegisterCallback", "-1");
                    return 1000
                } else {
                    return 1
                }
            }
            return window.deviceapis.oci.OCI_ERR
        }
    },
    getHealthcareDevices: function (a, b) {
        var c = 1;
        c = deviceapis.healthcaredevice.initHealthcareDevices();
        if (deviceapis.healthcaredevice.EMULStarted) {
            if (deviceapis.healthcaredevice.EMULConnected != 1) {
                deviceapis.healthcaredevice.EMULConnected = 1;
                deviceapis.healthcaredevice.EMULSetData()
            }
        }
        if (typeof b == "undefined") {
            b = null
        }
        if (c == window.deviceapis.oci.OCI_ERR) {
            if (b != null) {
                b(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_FOUND_ERR, "EMP not found"))
            }
            return
        }
        if (typeof a != "function") {
            if (b != null) {
            }
        } else {
            if (deviceapis.healthcaredevice.EMULStarted) {
                setTimeout(function () {
                    deviceapis.healthcaredevice.EMULsuccessCallback(deviceapis.healthcaredevice.HealthcareDeviceArray, a)
                }, c)
            } else {
                setTimeout(function () {
                    deviceapis.oci.getConnectedDevices(deviceapis.healthcaredevice.SEFPlugin, deviceapis.healthcaredevice.HealthcareDeviceArray, deviceapis.healthcaredevice.HealthcareDeviceValidArray, a, deviceapis.healthcaredevice.HealthcareDevice)
                }, c)
            }
        }
    },
    searchDevices: function () {
        if (deviceapis.healthcaredevice.initHealthcareDevices() == window.deviceapis.oci.OCI_ERR) {
            return false
        }
        if (deviceapis.healthcaredevice.EMULStarted) {
            if (!deviceapis.healthcaredevice.EMULSearched) {
                for (var b = 0; b < 3; b++) {
                    var a = new window.deviceapis.oci.OCIDevInfo();
                    switch (b) {
                        case 0:
                            a.UID = "00348F76B3C2";
                            a.name = this.EMULBP2;
                            a.deviceType = this.DEV_BLOOD_PRESSURE_MONITOR;
                            break;
                        case 1:
                            a.UID = "2F425EBD6622";
                            a.name = this.EMULWS1;
                            a.deviceType = this.DEV_WEIGHING_SCALE;
                            break;
                        case 2:
                            a.UID = "FF76F876F77F";
                            a.name = this.EMULGM1;
                            a.deviceType = this.DEV_GLUCOSE_METER;
                            break
                    }
                    deviceapis.healthcaredevice.EMULSearch.push(a)
                }
                deviceapis.healthcaredevice.EMULSearched = 1
            }
            setTimeout(function () {
                deviceapis.healthcaredevice.EMULSearchCallback()
            }, 1000);
            return true
        } else {
            return deviceapis.healthcaredevice.SEFPlugin.Execute("SearchDevice", "-1")
        }
    },
    connectDevice: function (a) {
        var b = false;
        if (deviceapis.healthcaredevice.EMULStarted) {
            var d = 0;
            for (d = 0; d < deviceapis.healthcaredevice.HealthcareDeviceArray.length; d++) {
                if (deviceapis.healthcaredevice.HealthcareDeviceArray[d].getUniqueID() == a) {
                    return true
                }
            }
            for (var d = 0; d < this.EMULSearch.length; d++) {
                if (deviceapis.healthcaredevice.EMULSearch[d].UID == a) {
                    var c = new deviceapis.healthcaredevice.HealthcareDevice(deviceapis.healthcaredevice.EMULSearch[d], deviceapis.healthcaredevice.HealthcareDeviceArray.length);
                    deviceapis.healthcaredevice.HealthcareDeviceArray.push(c);
                    setTimeout(function () {
                        deviceapis.healthcaredevice.EMULConnectionCallback(c, window.deviceapis.healthcaredevice.MGR_EVENT_DEV_CONNECT)
                    }, 1000);
                    return true
                }
            }
        } else {
            b = deviceapis.healthcaredevice.SEFPlugin.Execute("ConnectDevice", "-1", a)
        }
        return b
    },
    disconnectDevice: function (a) {
        var b = false;
        if (this.EMULStarted) {
            var d = 0;
            for (d = 0; d < this.HealthcareDeviceArray.length; d++) {
                if (deviceapis.healthcaredevice.HealthcareDeviceArray[d].getUniqueID() == a) {
                    var c = deviceapis.healthcaredevice.HealthcareDeviceArray[d];
                    deviceapis.healthcaredevice.HealthcareDeviceArray.splice(d, 1);
                    setTimeout(function () {
                        deviceapis.healthcaredevice.EMULConnectionCallback(c, window.deviceapis.healthcaredevice.MGR_EVENT_DEV_DISCONNECT)
                    }, 1000);
                    return true
                }
            }
        } else {
            b = deviceapis.healthcaredevice.SEFPlugin.Execute("DisconnectDevice", "-1", a)
        }
        return b
    },
    setDevicePIN: function (a, c) {
        var b = false;
        if (this.EMULStarted) {
        } else {
            b = deviceapis.healthcaredevice.SEFPlugin.Execute("SetDevicePIN", "-1", a, c)
        }
        return b
    },
    registerManagerCallback: function (a) {
        if (typeof a == "function") {
            HealthcareDeviceCallback = a
        } else {
            HealthcareDeviceCallback = null
        }
    },
    EMULsuccessCallback: function (b, a) {
        a(b)
    },
    EMULStruct: function () {
        var a;
        var b
    },
    EMULSetData: function () {
        var d = new deviceapis.healthcaredevice.EMULStruct();
        d.name = this.EMULBP2;
        var i = new Array();
        i.push("1,200,2,1,4103,2,80,OMRON HEALTHCARE,81,HEM-7081-IT");
        i.push("1,200,1,0,65,6,2677,18948,3:18949_116:18950_78:18951_90:,3872,2448,-9999,2010-01-01 00:13:15,-9999,2636,18474,58,2720,2448,-9999,2010-01-01 00:13:15,-9999,2636,61458,0,512,2448,-9999,2010-01-01 00:13:15,-9999,");
        i.push("1,200,1,0,65,6,2677,18948,3:18949_112:18950_66:18951_81:,3872,2448,-9999,2011-11-01 10:21:00,-9999,2636,18474,85,2720,2448,-9999,2011-11-01 10:21:00,-9999,2636,61458,0,512,2448,-9999,2011-11-01 10:21:00,-9999,");
        d.data = i;
        deviceapis.healthcaredevice.EMULData.push(d);
        var c = new deviceapis.healthcaredevice.EMULStruct();
        c.name = this.EMULBP2;
        var h = new Array();
        h.push("3,200,2,1,4103,2,80,OMRON HEALTHCARE,81,HEM-7081-IT");
        h.push("3,200,1,0,65,6,2677,18948,3:18949_102:18950_67:18951_78:,3872,2448,-9999,2011-10-05 15:47:50,-9999,2636,18474,62,2720,2448,-9999,2011-10-05 15:47:50,-9999,2636,61458,0,512,2448,-9999,2011-10-05 15:47:50,-9999,");
        c.data = h;
        deviceapis.healthcaredevice.EMULData.push(c);
        var b = new deviceapis.healthcaredevice.EMULStruct();
        b.name = this.EMULBP2;
        var g = new Array();
        g.push("3,200,2,1,4103,2,80,OMRON HEALTHCARE,81,HEM-7081-IT");
        g.push("3,200,1,0,65,6,2677,18948,3:18949_102:18950_67:18951_78:,3872,2448,-9999,2011-10-05 15:47:50,-9999,2636,18474,62,2720,2448,-9999,2011-10-05 15:47:50,-9999,2636,61458,0,512,2448,-9999,2011-10-05 15:47:50,-9999,");
        g.push("3,200,1,0,65,6,2677,18948,3:18949_105:18950_66:18951_79:,3872,2448,-9999,2011-10-05 15:50:39,-9999,2636,18474,62,2720,2448,-9999,2011-10-05 15:50:39,-9999,2636,61458,0,512,2448,-9999,2011-10-05 15:50:39,-9999,");
        b.data = g;
        deviceapis.healthcaredevice.EMULData.push(b);
        var a = new deviceapis.healthcaredevice.EMULStruct();
        a.name = this.EMULWS1;
        var e = new Array();
        e.push("2,200,2,1,4111,2,80,OMRON HEALTHCARE,81,HBF-206IT");
        e.push("2,200,1,0,49,20,2646,57664,74,1731,2448,-9999,2010-01-01 00:00:00,-9999,2646,57668,150,1297,2448,-9999,2010-01-01 00:00:00,-9999,2646,57680,32.9,1952,2448,-9999,2010-01-01 00:00:00,-9999,2646,57676,37.1,544,2448,-9999,2010-01-01 00:00:00,-9999,2646,61441,1.575e+06,6784,2448,-9999,2010-01-01 00:00:00,-9999,2636,61442,27,544,2448,-9999,2010-01-01 00:00:00,-9999,2636,61443,76,2368,2448,-9999,2010-01-01 00:00:00,-9999,2677,61449,4:61450_24:61451_0:61452_0:61453_0:,544,2448,-9999,2010-01-01 00:00:00,-9999,2636,61454,2,512,2448,-9999,2010-01-01 00:00:00,-9999,2677,61455,2:61456_0:61457_70:,512,2448,-9999,2010-01-01 00:00:00,-9999,");
        a.data = e;
        deviceapis.healthcaredevice.EMULData.push(a);
        var j = new deviceapis.healthcaredevice.EMULStruct();
        j.name = this.EMULGM1;
        var f = new Array();
        f.push("1,200,2,1,4113,2,80,Allmedicus,81,AP001");
        f.push("0,200,1,0,1,2,2636,29112,311,2130,2448,-9999,2012-04-23 16:31:00,-9999");
        j.data = f;
        deviceapis.healthcaredevice.EMULData.push(j);
        setTimeout(function () {
            window.deviceapis.healthcaredevice.EMULDataCallback()
        }, this.EMULRepeatTime)
    },
    EMULDataCallback: function () {
        var b = Math.floor(Math.random() * deviceapis.healthcaredevice.EMULData.length);
        for (var a = 0; a < deviceapis.healthcaredevice.HealthcareDeviceArray.length; a++) {
            if (deviceapis.healthcaredevice.HealthcareDeviceArray[a].getName() == deviceapis.healthcaredevice.EMULData[b].name) {
                if (deviceapis.healthcaredevice.HealthcareDeviceArray[a].deviceCallback != null) {
                    for (var d = 0; d < deviceapis.healthcaredevice.EMULData[b].data.length; d++) {
                        var c = deviceapis.healthcaredevice.parseCallbackData(deviceapis.healthcaredevice.EMULData[b].data[d]);
                        deviceapis.healthcaredevice.HealthcareDeviceArray[a].deviceCallback(c)
                    }
                }
            }
        }
        setTimeout(function () {
            window.deviceapis.healthcaredevice.EMULDataCallback()
        }, this.EMULRepeatTime)
    },
    EMULSearchCallback: function () {
        if (HealthcareDeviceCallback != null) {
            for (var a = 0; a < deviceapis.healthcaredevice.EMULSearch.length; a++) {
                var b = new window.deviceapis.healthcaredevice.ManagerEvent();
                b.eventType = this.MGR_EVENT_DEV_SEARCHED;
                b.name = this.EMULSearch[a].name;
                b.UID = this.EMULSearch[a].UID;
                b.deviceType = this.EMULSearch[a].deviceType;
                HealthcareDeviceCallback(b)
            }
            var b = new window.deviceapis.healthcaredevice.ManagerEvent();
            b.eventType = this.MGR_EVENT_DEV_SEARCH_FINISHED;
            b.name = null;
            b.UID = null;
            b.deviceType = 0;
            HealthcareDeviceCallback(b)
        }
    },
    EMULConnectionCallback: function (b, a) {
        if (HealthcareDeviceCallback != null) {
            var c = new window.deviceapis.healthcaredevice.ManagerEvent();
            c.eventType = a;
            c.name = b.getName();
            c.UID = b.getUniqueID();
            c.deviceType = b.getType();
            HealthcareDeviceCallback(c)
        }
    },
    callbackHealthcareDevice: function (c, h, g) {
        var f = Number(c);
        switch (f) {
            case window.deviceapis.healthcaredevice.MGR_EVENT_DEV_SEARCHED:
            case window.deviceapis.healthcaredevice.MGR_EVENT_DEV_PIN_REQUESTED:
                if (HealthcareDeviceCallback != null) {
                    var a = window.deviceapis.oci.parseDeviceEvent(h);
                    var i = new window.deviceapis.healthcaredevice.ManagerEvent();
                    i.eventType = Number(c);
                    i.name = a.name;
                    i.UID = a.UID;
                    i.deviceType = a.deviceType;
                    HealthcareDeviceCallback(i)
                }
                break;
            case window.deviceapis.healthcaredevice.MGR_EVENT_DEV_SEARCH_FINISHED:
                if (HealthcareDeviceCallback != null) {
                    var i = new window.deviceapis.healthcaredevice.ManagerEvent();
                    i.eventType = Number(c);
                    i.name = null;
                    i.UID = null;
                    i.deviceType = 0;
                    HealthcareDeviceCallback(i)
                }
                break;
            case window.deviceapis.healthcaredevice.MGR_EVENT_DEV_CONNECT:
                if (HealthcareDeviceCallback != null) {
                    var a = window.deviceapis.oci.parseDeviceEvent(h);
                    var i = new window.deviceapis.healthcaredevice.ManagerEvent();
                    i.eventType = Number(c);
                    i.name = null;
                    i.UID = a.UID;
                    i.deviceType = 0;
                    HealthcareDeviceCallback(i)
                }
                break;
            case window.deviceapis.healthcaredevice.MGR_EVENT_DEV_CONNECT_FAILED:
                if (HealthcareDeviceCallback != null) {
                    var a = window.deviceapis.oci.parseDeviceEvent(h);
                    var i = new window.deviceapis.healthcaredevice.ManagerEvent();
                    i.eventType = window.deviceapis.healthcaredevice.MGR_EVENT_DEV_CONNECT_FAILED;
                    i.name = a.name;
                    i.UID = a.UID;
                    i.deviceType = a.deviceType;
                    HealthcareDeviceCallback(i)
                }
                break;
            case window.deviceapis.healthcaredevice.MGR_EVENT_DEV_DISCONNECT:
                var a = window.deviceapis.oci.parseDeviceEvent(h);
                if (HealthcareDeviceCallback != null) {
                    var i = new window.deviceapis.healthcaredevice.ManagerEvent();
                    i.eventType = Number(c);
                    i.name = a.name;
                    i.UID = a.UID;
                    i.deviceType = a.deviceType;
                    HealthcareDeviceCallback(i)
                }
                window.deviceapis.oci.removeSpecificDevice(window.deviceapis.healthcaredevice.SEFPlugin, a.UID, window.deviceapis.healthcaredevice.HealthcareDeviceArray, window.deviceapis.healthcaredevice.HealthcareDeviceValidArray);
                break;
            case window.deviceapis.healthcaredevice.MGR_EVENT_GETDATA:
                var e = h.split(window.deviceapis.oci.DELIMITER_EVENT_PARAM);
                var b = e[0];
                var d = 0;
                for (d = 0; d < window.deviceapis.healthcaredevice.HealthcareDeviceArray.length; d++) {
                    if ((window.deviceapis.healthcaredevice.HealthcareDeviceArray[d].deviceID == Number(b)) && (window.deviceapis.healthcaredevice.HealthcareDeviceArray[d].deviceCallback != null)) {
                        var j = window.deviceapis.healthcaredevice.parseCallbackData(h);
                        window.deviceapis.healthcaredevice.HealthcareDeviceArray[d].deviceCallback(j)
                    }
                }
                break;
            default:
                break
        }
    },
    parseSystemInfoData: function (e) {
        var g = new deviceapis.healthcaredevice.HealthcareDeviceInfo();
        g.infoType = deviceapis.healthcaredevice.DEV_INFO_SYSTEM_INFO;
        g.deviceType = new Array();
        g.data = new Array();
        var b = deviceapis.healthcaredevice.GET_DEVICE_TYPE;
        var d = Number(e[b++]);
        for (var c = 0; c < d; c++) {
            g.deviceType.push(Number(e[b++]))
        }
        var a = Number(e[b++]);
        for (var c = 0; c < a; c++) {
            var f = new deviceapis.healthcaredevice.HealthcareDeviceData();
            f.elementType = Number(e[b++]);
            f.element = e[b++];
            g.data.push(f)
        }
        return g
    },
    parseAbsoluteTimestamp: function (b, i, g, p, a) {
        var f = new deviceapis.healthcaredevice.HealthcareDeviceData();
        f.elementType = Number(i);
        var h = new deviceapis.healthcaredevice.HealthcareDeviceDataTimeInfo();
        var e = 0;
        var d = 0;
        var c = 0;
        var o = p.split("-");
        h.year = o[e++];
        h.month = o[e++];
        var n = o[e++].split(" ");
        h.day = n[d++];
        var m = n[d++].split(":");
        h.time = m[c++];
        h.minute = m[c++];
        h.second = m[c++];
        f.element = h;
        b.data.push(f)
    },
    parseDefaultValue: function (b, k, g, m, a) {
        var l = m.split(":");
        if (l[1] != undefined) {
            for (var h = 0; h < Number(l[0]); h++) {
                var f = new deviceapis.healthcaredevice.HealthcareDeviceData();
                var e = l[h + 1].split("_");
                var d = new deviceapis.healthcaredevice.HealthcareDeviceDataMeasuredInfo();
                var c = 0;
                f.elementType = Number(e[c++]);
                d.value = e[c++];
                d.unit = Number(a);
                f.element = d;
                b.data.push(f)
            }
        } else {
            var f = new deviceapis.healthcaredevice.HealthcareDeviceData();
            var d = new deviceapis.healthcaredevice.HealthcareDeviceDataMeasuredInfo();
            f.elementType = Number(g);
            d.value = Number(l[0]);
            d.unit = Number(a);
            f.element = d;
            b.data.push(f)
        }
    },
    parseHealthData: function (h) {
        var c = new deviceapis.healthcaredevice.HealthcareDeviceInfo();
        c.infoType = deviceapis.healthcaredevice.DEV_INFO_MEASURE_DATA;
        c.deviceType = new Array();
        c.data = new Array();
        c.deviceType.push(Number(h[deviceapis.healthcaredevice.GET_DEVICE_TYPE]));
        var g = Number(h[deviceapis.healthcaredevice.GET_TOTAL_NUM_OF_DATA]);
        var d = deviceapis.healthcaredevice.GET_START_OF_DATA;
        for (var e = 0; e < g; e++) {
            var f = Number(h[d++]);
            var a = Number(h[d++]);
            var k = h[d++];
            var b = h[d++];
            switch (f) {
                case deviceapis.healthcaredevice.MEASURE_DATA_ABS_TIMESTAMP:
                    deviceapis.healthcaredevice.parseAbsoluteTimestamp(c, f, a, k, b);
                    break;
                default:
                    deviceapis.healthcaredevice.parseDefaultValue(c, f, a, k, b);
                    break
            }
        }
        return c
    },
    parsePmstoreData: function (l) {
        var e = new deviceapis.healthcaredevice.HealthcareDeviceInfo();
        e.infoType = deviceapis.healthcaredevice.DEV_INFO_MEASURE_DATA;
        e.deviceType = new Array();
        e.data = new Array();
        e.deviceType.push(Number(l[deviceapis.healthcaredevice.GET_DEVICE_TYPE]));
        var f = Number(l[deviceapis.healthcaredevice.GET_PMSTORECOUNT]);
        var i = Number(deviceapis.healthcaredevice.GET_PMSTORECOUNT) + 1;
        for (var k = 0; k < f; k++) {
            var g = Number(l[i++]);
            for (var b = 0; b < g; b++) {
                var n = Number(l[i++]);
                var d = Number(l[i++]);
                for (var j = 0; j < d; j++) {
                    l[i++];
                    l[i++];
                    dataCount = Number(l[i++]);
                    for (iCount = 0; iCount < dataCount; iCount++) {
                        var h = Number(l[i++]);
                        var a = Number(l[i++]);
                        var m = l[i++];
                        var c = l[i++];
                        switch (h) {
                            case deviceapis.healthcaredevice.MEASURE_DATA_ABS_TIMESTAMP:
                                deviceapis.healthcaredevice.parseAbsoluteTimestamp(e, h, a, m, c);
                                break;
                            default:
                                deviceapis.healthcaredevice.parseDefaultValue(e, h, a, m, c);
                                break
                        }
                    }
                }
            }
        }
        return e
    },
    parseCallbackData: function (c) {
        var a = c.split(deviceapis.oci.DELIMITER_EVENT_PARAM);
        var b = Number(a[deviceapis.healthcaredevice.GET_DATA_SUBTYPE]);
        if (b == deviceapis.healthcaredevice.DEV_INFO_SYSTEM_INFO) {
            return deviceapis.healthcaredevice.parseSystemInfoData(a)
        } else {
            if (b == deviceapis.healthcaredevice.DEV_INFO_MEASURE_DATA) {
                return deviceapis.healthcaredevice.parseHealthData(a)
            } else {
                if (b == deviceapis.healthcaredevice.DEV_INFO_PMSTORE_DATA) {
                    return deviceapis.healthcaredevice.parsePmstoreData(a)
                }
            }
        }
    },
    HealthcareDevice: function (a, b) {
        this.uniqueID = a.UID;
        this.name = a.name;
        this.deviceID = b;
        this.deviceType = a.deviceType;
        this.callback = null;
        this.getUniqueID = function () {
            return this.uniqueID
        };
        this.getDeviceID = function () {
            return this.deviceID
        };
        this.getName = function () {
            return this.name
        };
        this.getType = function () {
            return this.deviceType
        };
        this.registerDeviceCallback = function (c) {
            if (typeof c == "function") {
                this.deviceCallback = c;
                if (window.deviceapis.healthcaredevice.SEFPlugin != null) {
                    window.deviceapis.healthcaredevice.SEFPlugin.Execute("RegisterCallback", String(this.deviceID))
                }
            } else {
                this.deviceCallback = null;
                if (window.deviceapis.healthcaredevice.SEFPlugin != null) {
                    window.deviceapis.healthcaredevice.SEFPlugin.Execute("UnregisterCallback", String(this.deviceID))
                }
            }
        }
    }
};
deviceapis.microphone = {
    MGR_EVENT_DEV_CONNECT: deviceapis.oci.EVENT_DEV_CONNECT,
    MGR_EVENT_DEV_DISCONNECT: deviceapis.oci.EVENT_DEV_DISCONNECT,
    MGR_EVENT_PLAY_FAIL: 400,
    MICROPHONE_FORMAT_SIGNED_16BIT_LITTLE_ENDIAN: 0,
    MICROPHONE_FRAMERATE_48000: 48000,
    MICROPHONE_EFFECT_REVERB: 1,
    OCI_PROFILE_AUDIOINPUT: 16,
    MicrophoneArray: new Array(),
    MicrophoneValidArray: new Array(),
    MicrophoneCallback: null,
    SEFPlugin: null,
    ManagerEvent: function () {
        var c;
        var b;
        var a
    },
    isSupported: function () {
        if (smartHubModel[0] == "SDK") {
            return true
        } else {
            var a = window.deviceapis.tv.info.getProduct();
            if (a == 0) {
                return true
            } else {
                if (a == 2) {
                    if (window.deviceapis._plugin("Microphone", "IsSupported", "-1") == 1) {
                        return true
                    }
                }
            }
        }
        return false
    },
    getMicrophones: function (a, b) {
        var d = 1;
        var c = window.deviceapis.oci.create(this.SEFPlugin, "Microphone");
        if (this.SEFPlugin == null) {
            d = 2500;
            if (c != window.deviceapis.oci.OCI_ERR) {
                this.SEFPlugin = c;
                this.SEFPlugin.OnEvent = this.callbackMicrophones;
                this.SEFPlugin.Execute("RegisterCallback", "-1")
            }
        }
        if (typeof b == "undefined") {
            b = null
        }
        if (typeof a != "function") {
            alert("[microphone.js : getMicrophones] successCallback is not a function type");
            if (b != null) {
            }
        } else {
            setTimeout(function () {
                deviceapis.oci.getConnectedDevices(deviceapis.microphone.SEFPlugin, deviceapis.microphone.MicrophoneArray, deviceapis.microphone.MicrophoneValidArray, a, deviceapis.microphone.Microphone)
            }, d)
        }
    },
    registerManagerCallback: function (a) {
        if (typeof a == "function") {
            this.MicrophoneCallback = a
        }
    },
    callbackMicrophones: function (c, h, g) {
        var b;
        var l;
        var a;
        var f = Number(c);
        var j;
        var k;
        var i;
        var d;
        alert("[callbackMicrophones] ***************************");
        alert("[callbackMicrophones] type=" + f);
        alert("[callbackMicrophones] ***************************");
        switch (f) {
            case window.deviceapis.microphone.MGR_EVENT_PLAY_FAIL:
                alert("[callbackMicrophones] MGR_EVENT_PLAY_FAIL");
                for (b = 0; b < window.deviceapis.microphone.MicrophoneArray.length; b++) {
                    l = window.deviceapis.microphone.MicrophoneArray[b];
                    alert(" MGR_EVENT_PLAY_FAIL :existed_device_id=" + l.getDeviceID());
                    var e = h.split(window.deviceapis.oci.DELIMITER_EVENT_PARAM);
                    alert(" MGR_EVENT_PLAY_FAIL :event_device_id=" + Number(e[1]));
                    if ((l.getDeviceID() == Number(e[1])) && (window.deviceapis.microphone.MicrophoneArray[b].deviceCallback != null)) {
                        window.deviceapis.microphone.MicrophoneArray[b].deviceCallback(f)
                    }
                }
                break;
            case window.deviceapis.microphone.MGR_EVENT_DEV_CONNECT:
                alert("[callbackMicrophones] MGR_EVENT_DEV_CONNECT");
                if (deviceapis.microphone.MicrophoneCallback != null) {
                    i = window.deviceapis.oci.parseDeviceEvent(h);
                    d = new window.deviceapis.microphone.ManagerEvent();
                    d.eventType = i.eventType;
                    d.name = i.name;
                    d.UID = i.UID;
                    deviceapis.microphone.MicrophoneCallback(d)
                }
                break;
            case window.deviceapis.microphone.MGR_EVENT_DEV_DISCONNECT:
                alert("[callbackMicrophones] MGR_EVENT_DEV_DISCONNECT");
                i = window.deviceapis.oci.parseDeviceEvent(h);
                if (deviceapis.microphone.MicrophoneCallback != null) {
                    d = new window.deviceapis.microphone.ManagerEvent();
                    d.eventType = i.eventType;
                    d.name = i.name;
                    d.UID = i.UID;
                    deviceapis.microphone.MicrophoneCallback(d)
                }
                for (b = 0; b < window.deviceapis.microphone.MicrophoneArray.length; b++) {
                    l = window.deviceapis.microphone.MicrophoneArray[b];
                    a = l.getUniqueID();
                    alert("callbackMicrophones[disconnect] : uniqueID = " + a);
                    if (a == i.UID) {
                        l.stop();
                        l.disableDevice()
                    }
                }
                window.deviceapis.oci.removeSpecificDevice(window.deviceapis.microphone.SEFPlugin, i.UID, window.deviceapis.microphone.MicrophoneArray, window.deviceapis.microphone.MicrophoneValidArray);
                break;
            default:
                alert("[callbackMicrophones] eveType=" + f + "_");
                break
        }
    },
    Microphone: function (a, b) {
        INTERFACE_COMMAND = "Microphone";
        this.uniqueID = a.UID;
        this.name = a.name;
        this.deviceID = b;
        this.deviceCallback = null;
        this.getUniqueID = function () {
            return this.uniqueID
        };
        this.getDeviceID = function () {
            return this.deviceID
        };
        this.getName = function () {
            return this.name
        };
        this.enableDevice = function (e, d) {
            alert("Mic enableDevice");
            var c = deviceapis.microphone.SEFPlugin.Execute("EnableAudioIn", String(this.deviceID), String(e), String(d));
            if (c != deviceapis.oci.OCI_NO_ERR) {
                alert("[OCI_microphone_enable]: ERROR = " + c);
                return false
            }
            return true
        };
        this.disableDevice = function () {
            alert("Mic disableDevice");
            var c = deviceapis.microphone.SEFPlugin.Execute("DisableAudioIn", String(this.deviceID));
            if (c != deviceapis.oci.OCI_NO_ERR) {
                alert("[OCI_microphone_disable]: ERROR = " + c);
                return false
            }
            return true
        };
        this.play = function () {
            alert("Mic play");
            var c = deviceapis.microphone.SEFPlugin.Execute("PlayAudioIn", String(this.deviceID));
            if (c != deviceapis.oci.OCI_NO_ERR) {
                alert("[OCI_microphone_play]: ERROR = " + c);
                return false
            }
            return true
        };
        this.stop = function () {
            alert("Mic stop");
            var c = deviceapis.microphone.SEFPlugin.Execute("StopAudioIn", String(this.deviceID));
            if (c != deviceapis.oci.OCI_NO_ERR) {
                alert("[OCI_microphone_stop]: ERROR = " + c);
                return false
            }
            return true
        };
        this.getVolumeLevel = function () {
            var c = deviceapis.microphone.SEFPlugin.Execute("GetAudioInVolumeLevel", String(this.deviceID));
            return c
        };
        this.setVolumeLevel = function (d) {
            var c = deviceapis.microphone.SEFPlugin.Execute("SetAudioInVolumeLevel", String(this.deviceID), String(d));
            if (c != deviceapis.oci.OCI_NO_ERR) {
                alert("setVolumeLevel function only work while playing");
                return false
            }
            return true
        };
        this.getSupportedEffects = function () {
            var c = deviceapis.microphone.SEFPlugin.Execute("GetSupportedAudioInEffects", String(this.deviceID));
            return c
        };
        this.getEnabledEffects = function () {
            var c = deviceapis.microphone.SEFPlugin.Execute("GetEnabledAudioInEffects", String(this.deviceID));
            return c
        };
        this.setEffect = function (e, d) {
            var f = 0;
            if (d == true) {
                f = 1
            } else {
                f = 0
            }
            var c = deviceapis.microphone.SEFPlugin.Execute("SetAudioInEffect", String(this.deviceID), String(e), String(f));
            if (c != deviceapis.oci.OCI_NO_ERR) {
                alert("[OCI_microphone_setEffect]: ERROR = " + c);
                return false
            }
            return true
        };
        this.registerDeviceCallback = function (c) {
            if (typeof c == "function") {
                this.deviceCallback = c;
                if (window.deviceapis.microphone.SEFPlugin != null) {
                    window.deviceapis.microphone.SEFPlugin.Execute("RegisterCallback", String(this.deviceID))
                }
            } else {
                this.deviceCallback = null;
                if (window.deviceapis.microphone.SEFPlugin != null) {
                    window.deviceapis.microphone.SEFPlugin.Execute("UnregisterCallback", String(this.deviceID))
                }
            }
        }
    }
};
deviceapis.printer = {
    SCREEN_LAYER_ALL: 0,
    SCREEN_LAYER_OSD: 1,
    SEFPlugin: null,
    isPrintingServiceSupported: function () {
        var b = window.location.search.split("modelid=");
        var a = b[1].split("&");
        if (a[0] == "SDK") {
            return true
        } else {
            if (deviceapis._plugin("Device", "SupportPrinter") == deviceapis._pluginDef.PLR_TRUE) {
                alert("SupportPrinter");
                return true
            } else {
                alert("Not SupportPrinter");
                return false
            }
        }
    },
    runFilePrinting: function (b) {
        var d = window.location.search.split("modelid=");
        var a = d[1].split("&");
        if (a[0] == "SDK") {
            var c = deviceapis.oci.create(this.SEFPlugin, "Printer");
            if (this.SEFPlugin == null) {
                if (c != deviceapis.oci.OCI_ERR) {
                    this.SEFPlugin = c
                }
            }
            window.deviceapis.printer.SEFPlugin.Execute("RunFilePrinting", 0, b);
            alert(b + " is printed!")
        } else {
            deviceapis._plugin("NNavi", "ActivateWithData", "41", b, "", "", "")
        }
    },
    runScreenPrinting: function (i, g) {
        var j = window.location.search.split("modelid=");
        var h = j[1].split("&");
        if (g == null) {
            g = new SRect(0, 0, curWidget.width, curWidget.height)
        }
        if (h[0] == "SDK") {
            var b = deviceapis.oci.create(this.SEFPlugin, "Printer");
            if (this.SEFPlugin == null) {
                if (b != deviceapis.oci.OCI_ERR) {
                    this.SEFPlugin = b
                }
            }
            window.deviceapis.printer.SEFPlugin.Execute("RunScreenPrinting", 0, "./capturePrinter.jpg");
            alert("_ captured screen: " + g.left + "," + g.top + "," + g.width + "," + g.height);
            alert("_ captured screen is printed!")
        } else {
            var a = g.left;
            var c = g.top;
            var d = g.left + g.width;
            var f = g.top + g.height;
            var e = null;
            if (i == window.deviceapis.printer.SCREEN_LAYER_ALL) {
                e = "ALL"
            } else {
                if (i == window.deviceapis.printer.SCREEN_LAYER_OSD) {
                    e = "OSD"
                } else {
                    alert("Error!, Undefined screen type.");
                    return
                }
            }
            deviceapis._plugin("NNavi", "ActivateWithData", 41, "screen://" + e + "," + a + "," + c + "," + d + "," + f + "," + curWidget.width + "," + curWidget.height, "", "", "")
        }
    },
};
deviceapis.recognition = {
    PL_RECOGNITION_TYPE_VOICE: 0,
    PL_RECOGNITION_TYPE_GESTURE: 1,
    PL_RECOGNITION_TYPE_FACE: 2,
    MESSAGE_RECOGNITION_VOICE_EMP: 6510,
    MESSAGE_RECOGNITION_GESTURE_EMP: 6511,
    MESSAGE_RECOGNITION_FACE_EMP: 6512,
    oCallback: [],
    oCallback_name: [],
    blinitialized: false,
    plRecog: null,
    is3rd: false,
    isSubscribeEvent: false,
    setRetValue: function (a) {
        alert("[deviceapis.js] recognition.setRetValue() called : " + a);
        if (a == 1) {
            return true
        } else {
            return false
        }
    },
    isSEFSupported: function () {
        alert("[deviceapis.js] recognition.isSEFSupported() called");
        firmwareVer = deviceapis._plugin("NNavi", "GetFirmware");
        splitString = firmwareVer.split("-");
        var a = splitString[1];
        alert("[deviceapis.js] recognition.isSEFSupported() platform : " + a.substr(8, 11));
        var b = parseInt(a.substr(8, 11), 10);
        if (b >= 2012 && deviceapis._plugin("RECOG") != null) {
            return true
        } else {
            alert("[deviceapis.js] recognition not supported.");
            return false
        }
    },
    isSDK: function () {
        alert("[deviceapis.js] recognition.isSDK() called");
        var b = decodeURI(window.location.search);
        splitString = b.split("&");
        var a = splitString[3];
        splitString = a.split("=");
        var c = splitString[1];
        alert("[deviceapis.js] recognition.isSDK() tmp: " + a + "  modelID: " + c);
        if (c == "SDK") {
            return true
        } else {
            return false
        }
    },
    initialize: function () {
        alert("[deviceapis.js] recognition.initialize() called");
        deviceapis.recognition.plRecog = deviceapis._plugin("RECOG");
        if (deviceapis.recognition.plRecog == null) {
            alert("[deviceapis.js] recognition not supported");
            return false
        }
        if (deviceapis.recognition.blinitialized) {
            return true
        }
        deviceapis.recognition.blinitialized = true;
        alert("[deviceapis.js] recognition.initialize() : plRecog = " + deviceapis.recognition.plRecog);
        deviceapis.recognition.plRecog.OnEvent = deviceapis.recognition._handleEvent;
        return true
    },
    setCallback: function (b, a, c) {
        alert("[deviceapis.js] recognition.setCallback() called");
        deviceapis.recognition.oCallback[b] = c;
        deviceapis.recognition.oCallback_name[b] = a
    },
    unsetCallback: function (a) {
        alert("[deviceapis.js] recognition.unsetCallback() called");
        deviceapis.recognition.oCallback[a] = null;
        deviceapis.recognition.oCallback_name[a] = null
    },
    _handleEvent: function (d, f, i) {
        alert("[deviceapis.js] recognition.handleEvent() called");
        alert("[deviceapis.js] recognition.handleEvent() " + d + ", " + f + ", " + i);
        var e = null;
        switch (d) {
            case deviceapis.recognition.MESSAGE_RECOGNITION_VOICE_EMP:
                e = deviceapis.recognition.PL_RECOGNITION_TYPE_VOICE;
                break;
            case deviceapis.recognition.MESSAGE_RECOGNITION_GESTURE_EMP:
                e = deviceapis.recognition.PL_RECOGNITION_TYPE_GESTURE;
                break;
            case deviceapis.recognition.MESSAGE_RECOGNITION_FACE_EMP:
                e = deviceapis.recognition.PL_RECOGNITION_TYPE_FACE;
                break;
            default:
                alert("unknown recognition type");
                return false;
                break
        }
        splitString = f.split("-");
        var a = splitString[0];
        var b = splitString[1];
        if (deviceapis.recognition.oCallback[e] && deviceapis.recognition.oCallback[e] instanceof Function) {
            if (!deviceapis.recognition.isSubscribeEvent) {
                var g = {recognitiontype: e, eventtype: a, name: b, result: i};
                deviceapis.recognition.oCallback[e](g)
            } else {
                if (deviceapis.recognition.isSubscribeEvent && e == deviceapis.recognition.PL_RECOGNITION_TYPE_VOICE) {
                    switch (a) {
                        case"EVENT_VOICE_BEGIN_MONITOR":
                        case"EVENT_VOICE_BTSOUND_START":
                            var h = '{"helpbarType":"HELPBAR_TYPE_VOICE_SERVER_GUIDE","guideText":"Say the word or phrase you wish to type"}';
                            deviceapis._plugin("RECOG", "SetVoiceHelpbarInfo", h);
                            break;
                        case"EVENT_VOICE_RECOG_RESULT":
                            var c = a + "-" + deviceapis.recognition.oCallback_name[e] + "-" + i;
                            deviceapis.recognition.oCallback[e](c);
                            break;
                        case"EVENT_VOICE_LANGUAGE_CHANGED":
                            break;
                        default:
                            break
                    }
                }
            }
        }
    },
    SDKTest_GenerateExpectedResult: function (c, b, a) {
        alert("[deviceapis.js] recognition.SDKTest_GenerateExpectedResult() called");
        if (!deviceapis.recognition.isSDK() && !deviceapis.recognition.isSEFSupported()) {
            return false
        }
        splitString = b.split("&&");
        var d = splitString;
        alert("[deviceapis.js] recognition.SDKTest_GenerateExpectedResult() list: " + d);
        count = 0;
        timer = setInterval("setEvent()", a * 1000);
        setEvent = function () {
            if (count < c) {
                deviceapis.recognition._handleEvent(deviceapis.recognition.MESSAGE_RECOGNITION_VOICE_EMP, "EVENT_VOICE_RECOG_RESULT-" + deviceapis.recognition.oCallback_name[0], d[count]);
                count++
            } else {
                clearInterval(timer)
            }
        };
        return true
    },
    SubscribeEvent: function (c, b, d) {
        alert("[deviceapis.js] recognition.SubscribeEvent() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        if (deviceapis.recognition.initialize()) {
            deviceapis.recognition.is3rd = true;
            deviceapis.recognition.isSubscribeEvent = true;
            deviceapis.recognition.setCallback(c, b, d);
            var a = null;
            switch (c) {
                case deviceapis.recognition.PL_RECOGNITION_TYPE_VOICE:
                    a = "MESSAGE_RECOGNITION_VOICE";
                    break;
                case deviceapis.recognition.PL_RECOGNITION_TYPE_GESTURE:
                    a = "MESSAGE_RECOGNITION_GESTURE";
                    break;
                case deviceapis.recognition.PL_RECOGNITION_TYPE_FACE:
                    a = "MESSAGE_RECOGNITION_FACE";
                    break
            }
            return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "SubscribeEvent", a, b))
        } else {
            return false
        }
    },
    UnsubscribeEvent: function (c, b) {
        alert("[deviceapis.js] recognition.UnsubscribeEvent() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        deviceapis.recognition.is3rd = false;
        deviceapis.recognition.isSubscribeEvent = false;
        deviceapis.recognition.unsetCallback(c);
        var a = null;
        switch (c) {
            case deviceapis.recognition.PL_RECOGNITION_TYPE_VOICE:
                a = "MESSAGE_RECOGNITION_VOICE";
                break;
            case deviceapis.recognition.PL_RECOGNITION_TYPE_GESTURE:
                a = "MESSAGE_RECOGNITION_GESTURE";
                break;
            case deviceapis.recognition.PL_RECOGNITION_TYPE_FACE:
                a = "MESSAGE_RECOGNITION_FACE";
                break
        }
        return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "UnsubscribeEvent", a, b))
    },
    SubscribeExEvent: function (c, b, d) {
        alert("[deviceapis.js] recognition.SubscribeExEvent() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        if (deviceapis.recognition.initialize()) {
            deviceapis.recognition.is3rd = true;
            deviceapis.recognition.isSubscribeEvent = false;
            deviceapis.recognition.setCallback(c, b, d);
            var a = null;
            switch (c) {
                case deviceapis.recognition.PL_RECOGNITION_TYPE_VOICE:
                    a = "MESSAGE_RECOGNITION_VOICE";
                    break;
                case deviceapis.recognition.PL_RECOGNITION_TYPE_GESTURE:
                    a = "MESSAGE_RECOGNITION_GESTURE";
                    break;
                case deviceapis.recognition.PL_RECOGNITION_TYPE_FACE:
                    a = "MESSAGE_RECOGNITION_FACE";
                    break
            }
            return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "SubscribeEvent", a, b))
        } else {
            return false
        }
    },
    UnsubscribeExEvent: function (c, b) {
        alert("[deviceapis.js] recognition.UnsubscribeExEvent() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        deviceapis.recognition.is3rd = false;
        deviceapis.recognition.unsetCallback(c);
        var a = null;
        switch (c) {
            case deviceapis.recognition.PL_RECOGNITION_TYPE_VOICE:
                a = "MESSAGE_RECOGNITION_VOICE";
                break;
            case deviceapis.recognition.PL_RECOGNITION_TYPE_GESTURE:
                a = "MESSAGE_RECOGNITION_GESTURE";
                break;
            case deviceapis.recognition.PL_RECOGNITION_TYPE_FACE:
                a = "MESSAGE_RECOGNITION_FACE";
                break
        }
        return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "UnsubscribeEvent", a, b))
    },
    IsRecognitionSupported: function () {
        alert("[deviceapis.js] recognition.IsRecognitionSupported() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "RecogEMPUsingStatus"))
    },
    IsRecognitionAppAvailable: function () {
        alert("[deviceapis.js] recognition.IsRecognitionAppAvailable() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "RecogEMPUsingStatus"))
    },
    RegisterRecognition: function (c, b, d) {
        alert("[deviceapis.js] recognition.RegisterRecognition() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        if (deviceapis.recognition.initialize()) {
            deviceapis.recognition.setCallback(c, b, d);
            deviceapis.recognition.is3rd = false;
            deviceapis.recognition.isSubscribeEvent = false;
            if (!deviceapis.recognition.isSDK()) {
                var a = null;
                switch (c) {
                    case deviceapis.recognition.PL_RECOGNITION_TYPE_VOICE:
                        a = "MESSAGE_RECOGNITION_VOICE";
                        break;
                    case deviceapis.recognition.PL_RECOGNITION_TYPE_GESTURE:
                        a = "MESSAGE_RECOGNITION_GESTURE";
                        break;
                    case deviceapis.recognition.PL_RECOGNITION_TYPE_FACE:
                        a = "MESSAGE_RECOGNITION_FACE";
                        break
                }
                return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "SubscribeEvent", a, b))
            }
        } else {
            return false
        }
    },
    UnregisterRecognition: function (c, b) {
        alert("[deviceapis.js] recognition.UnregisterRecognition() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        deviceapis.recognition.unsetCallback(c);
        if (!deviceapis.recognition.isSDK()) {
            var a = null;
            switch (c) {
                case deviceapis.recognition.PL_RECOGNITION_TYPE_VOICE:
                    a = "MESSAGE_RECOGNITION_VOICE";
                    break;
                case deviceapis.recognition.PL_RECOGNITION_TYPE_GESTURE:
                    a = "MESSAGE_RECOGNITION_GESTURE";
                    break;
                case deviceapis.recognition.PL_RECOGNITION_TYPE_FACE:
                    a = "MESSAGE_RECOGNITION_FACE";
                    break
            }
            return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "UnsubscribeEvent", a, b))
        }
    },
    SetVoiceHelpbarInfo: function (a) {
        alert("[deviceapis.js] recognition.SetVoiceHelpbarInfo() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "SetVoiceHelpbarInfo", a))
    },
    SetVoiceCandidateList: function (a) {
        alert("[deviceapis.js] recognition.SetVoiceCandidateList() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        if (!deviceapis.recognition.isSDK()) {
            return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "SetVoiceCandidateList", a))
        }
    },
    SetVoiceHelpbarItemsList: function (a) {
        alert("[deviceapis.js] recognition.SetVoiceHelpbarItemsList() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        if (!deviceapis.recognition.isSDK()) {
            return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "SetVoiceHelpbarItemsList", a))
        }
    },
    SetVoiceHelpbarType: function (c, b, a, d) {
        alert("[deviceapis.js] recognition.SetVoiceHelpbarType() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        if (!deviceapis.recognition.isSDK()) {
            return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "SetVoiceHelpbarType", c, b, a, d))
        }
    },
    GetCurrentVoiceLanguage: function () {
        alert("[deviceapis.js] recognition.GetCurrentVoiceLanguage() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        var a = deviceapis._plugin("RECOG", "GetCurrentVoiceLanguage");
        if (a == "arb") {
            return "ar"
        } else {
            return a
        }
    },
    GetVoiceRecognitionStatus: function () {
        alert("[deviceapis.js] recognition.GetVoiceRecognitionStatus() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        return deviceapis._plugin("RECOG", "GetVoiceRecognitionStatus")
    },
    EnableVoiceRecognition: function () {
        alert("[deviceapis.js] recognition.EnableVoiceRecognition() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        if (!deviceapis.recognition.isSDK() && !deviceapis.recognition.is3rd) {
            return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "EnableVoiceRecognition"))
        }
    },
    DisableVoiceRecognition: function () {
        alert("[deviceapis.js] recognition.DisableVoiceRecognition() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        if (!deviceapis.recognition.isSDK() && !deviceapis.recognition.is3rd) {
            return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "DisableVoiceRecognition"))
        }
    },
    IsVoiceRecognitionEnabled: function () {
        alert("[deviceapis.js] recognition.IsVoiceRecognitionEnabled() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "IsVoiceRecognitionEnabled"))
    },
    StartVoiceRecognition: function () {
        alert("[deviceapis.js] recognition.StartGestureRecognition() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        if (!deviceapis.recognition.isSDK()) {
            return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "StartGestureRecognition"))
        } else {
            return false
        }
    },
    StopVoiceRecognition: function () {
        alert("[deviceapis.js] recognition.StopVoiceRecognition() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        if (!deviceapis.recognition.isSDK()) {
            return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "StopVoiceRecognition"))
        } else {
            return false
        }
    },
    SetGestureHelpbarInfo: function (a) {
        alert("[deviceapis.js] recognition.SetGestureHelpbarInfo() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "SetGestureHelpbarInfo", a))
    },
    GetGestureRecognitionStatus: function () {
        alert("[deviceapis.js] recognition.GetGestureRecognitionStatus() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        if (!deviceapis.recognition.isSDK()) {
            return deviceapis._plugin("RECOG", "GetGestureRecognitionStatus")
        } else {
            return false
        }
    },
    EnableGestureRecognition: function () {
        alert("[deviceapis.js] recognition.EnableGestureRecognition() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        if (!deviceapis.recognition.isSDK() && !deviceapis.recognition.is3rd) {
            return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "EnableGestureRecognition"))
        } else {
            return false
        }
    },
    DisableGestureRecognition: function () {
        alert("[deviceapis.js] recognition.DisableGestureRecognition() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        if (!deviceapis.recognition.isSDK() && !deviceapis.recognition.is3rd) {
            return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "DisableGestureRecognition"))
        } else {
            return false
        }
    },
    IsGestureRecognitionEnabled: function () {
        alert("[deviceapis.js] recognition.IsGestureRecognitionEnabled() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "IsGestureRecognitionEnabled"))
    },
    StartGestureRecognition: function () {
        alert("[deviceapis.js] recognition.StartGestureRecognition() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        if (!deviceapis.recognition.isSDK()) {
            return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "StartGestureRecognition"))
        } else {
            return false
        }
    },
    StopGestureRecognition: function () {
        alert("[deviceapis.js] recognition.StopGestureRecognition() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        if (!deviceapis.recognition.isSDK()) {
            return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "StopGestureRecognition"))
        } else {
            return false
        }
    },
    ShowVoiceHelpbar: function () {
        alert("[deviceapis.js] recognition.ShowVoiceHelpbar() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "ShowVoiceHelpbar"))
    },
    HideVoiceHelpbar: function () {
        alert("[deviceapis.js] recognition.HideVoiceHelpbar() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "HideVoiceHelpbar"))
    },
    SetVoiceTimeout: function (a) {
        alert("[deviceapis.js] recognition.SetVoiceTimeout() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "SetVoiceTimeout", a))
    },
    GetVoiceServerLanguage: function () {
        alert("[deviceapis.js] recognition.GetVoiceServerLanguage() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        if (!deviceapis.recognition.isSDK()) {
            var a = deviceapis._plugin("RECOG", "GetCurrentVoiceLanguage");
            if (a == "arb") {
                return "ar"
            } else {
                return a
            }
        }
    },
    IsVoiceServerLanguageSupported: function () {
        alert("[deviceapis.js] recognition.IsVoiceServerLanguageSupported() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        if (!deviceapis.recognition.isSDK()) {
            return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "IsVoiceServerLanguageSupported"))
        }
    },
    IsActivatedVoiceRecognition: function () {
        alert("[deviceapis.js] recognition.IsActivatedVoiceRecognition() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        if (!deviceapis.recognition.isSDK()) {
            return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "IsActivatedVoiceRecognition"))
        }
    },
    EnableGestureHint: function () {
        alert("[deviceapis.js] recognition.EnableGestureHint() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        if (!deviceapis.recognition.isSDK()) {
            return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "EnableGestureHint"))
        } else {
            return false
        }
    },
    DisableGestureHint: function () {
        alert("[deviceapis.js] recognition.DisableGestureHint() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        if (!deviceapis.recognition.isSDK()) {
            return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "DisableGestureHint"))
        } else {
            return false
        }
    },
    EnableReturnMotion: function () {
        alert("[deviceapis.js] recognition.EnableReturnMotion() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        if (!deviceapis.recognition.isSDK()) {
            return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "EnableReturnMotion"))
        } else {
            return false
        }
    },
    DisableReturnMotion: function () {
        alert("[deviceapis.js] recognition.DisableReturnMotion() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        if (!deviceapis.recognition.isSDK()) {
            return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "DisableReturnMotion"))
        } else {
            return false
        }
    },
    EnableNativeTwoCursorTheme: function () {
        alert("[deviceapis.js] recognition.EnableNativeTwoCursorTheme() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        if (!deviceapis.recognition.isSDK()) {
            return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "EnableNativeTwoCursorTheme"))
        } else {
            return false
        }
    },
    DisableNativeTwoCursorTheme: function () {
        alert("[deviceapis.js] recognition.DisableNativeTwoCursorTheme() called ");
        if (!deviceapis.recognition.isSEFSupported()) {
            return false
        }
        if (!deviceapis.recognition.isSDK()) {
            return deviceapis.recognition.setRetValue(deviceapis._plugin("RECOG", "DisableNativeTwoCursorTheme"))
        } else {
            return false
        }
    }
};
deviceapis.camera = {
    PL_CAMERA_EVENT_DISCONNECTED: 0,
    PL_CAMERA_EVENT_CONNECTING: 1,
    PL_CAMERA_EVENT_CONNECTED: 2,
    PL_CAMERA_STATE_DISCONNECTED: 0,
    PL_CAMERA_STATE_CONNECTING: 1,
    PL_CAMERA_STATE_READY: 2,
    PL_CAMERA_STATE_PLAYING: 3,
    PL_CAMERA_QUALITY_LOW: 0,
    PL_CAMERA_QUALITY_MID: 1,
    PL_CAMERA_QUALITY_HIGH: 2,
    PL_CAMERA_RESOLUTION_VGA: 0,
    PL_CAMERA_RESOLUTION_HD: 1,
    oCameraPluginCallback: null,
    bCameraPluginInitialiezed: false,
    bCameraStarted: false,
    plCamera: null,
    isSEFSupported: function () {
        alert("[deviceapis.js] camera.isSEFSupported() called");
        firmwareVer = deviceapis._plugin("NNavi", "GetFirmware");
        splitString = firmwareVer.split("-");
        var a = splitString[1];
        alert("[deviceapis.js] camera.isSEFSupported() platform : " + a.substr(8, 11));
        var b = parseInt(a.substr(8, 11), 10);
        if (b >= 2012 && deviceapis._plugin("Camera") != null) {
            return true
        } else {
            alert("[deviceapis.js] camera not supported.");
            return false
        }
    },
    isSDK: function () {
        alert("[deviceapis.js] camera.isSDK() called");
        var b = decodeURI(window.location.search);
        splitString = b.split("&");
        var a = splitString[3];
        splitString = a.split("=");
        var c = splitString[1];
        alert("[deviceapis.js] camera.isSDK() tmp: " + a + "  modelID: " + c);
        if (c == "SDK") {
            return true
        } else {
            return false
        }
    },
    initialize: function () {
        if (deviceapis.camera.bCameraPluginInitialiezed) {
            return
        }
        alert("[deviceapis.js] camera.initialize() called");
        deviceapis.camera.bCameraPluginInitialiezed = true;
        deviceapis.camera.plCamera = deviceapis._plugin("Camera");
        deviceapis.camera.plCamera.OnEvent = deviceapis.camera._handleEvent
    },
    _handleEvent: function (b, a, c) {
        alert("[deviceapis.js] camera.handleEvent() called");
        alert("[deviceapis.js] camera.handleEvent() " + b + ", " + a + ", " + c);
        if (deviceapis.camera.oCameraPluginCallback != null) {
            deviceapis.camera.oCameraPluginCallback(b)
        }
    },
    RegisterEventCallback: function (a) {
        if (!deviceapis.camera.isSEFSupported()) {
            return false
        }
        deviceapis.camera.initialize();
        alert("[deviceapis.js] camera.setCallback() called");
        deviceapis.camera.oCameraPluginCallback = a
    },
    UnregisterEventCallback: function () {
        if (!deviceapis.camera.isSEFSupported()) {
            return false
        }
        deviceapis.camera.initialize();
        alert("[deviceapis.js] camera.unsetCallback() called");
        deviceapis.camera.oCameraPluginCallback = null
    },
    GetCameraState: function () {
        if (!deviceapis.camera.isSEFSupported()) {
            return false
        }
        deviceapis.camera.initialize();
        alert("[deviceapis.js] camera.GetCameraState() called ");
        if (deviceapis.camera.isSDK()) {
            return deviceapis._plugin("Camera", "GetCameraState")
        } else {
            return parseInt(deviceapis._plugin("Camera", "GetCameraState"))
        }
    },
    StartCamVideo: function (g, f, j, b, a, k) {
        if (!deviceapis.camera.isSEFSupported()) {
            return false
        }
        deviceapis.camera.initialize();
        alert("[deviceapis.js] camera.StartCamVideo() called ");
        alert("[deviceapis.js] x:" + g + " y:" + f + " w:" + j + " h:" + b + " res:" + a + " q:" + k);
        if (deviceapis.camera.bCameraStarted) {
            alert("[deviceapis.js] camera.StartCamVideo() already camera started");
            return
        }
        var d = "5000000";
        var e = deviceapis.camera.PL_CAMERA_RESOLUTION_HD;
        var i = deviceapis.camera.PL_CAMERA_QUALITY_HIGH;
        if (a) {
            e = a
        }
        if (k) {
            i = k
        }
        deviceapis._plugin("Camera", "SetUsecase", "1");
        deviceapis._plugin("Camera", "SetCamVideoDisplaySize", String(g), String(f), String(j), String(b));
        switch (e) {
            case deviceapis.camera.PL_CAMERA_RESOLUTION_VGA:
                deviceapis._plugin("Camera", "SetCamProperty", "3", "640", "480");
                switch (i) {
                    case deviceapis.camera.PL_CAMERA_QUALITY_LOW:
                        d = "100000";
                        break;
                    case deviceapis.camera.PL_CAMERA_QUALITY_MID:
                        d = "500000";
                        break;
                    case deviceapis.camera.PL_CAMERA_QUALITY_HIGH:
                    default:
                        d = "2000000";
                        break
                }
                break;
            case deviceapis.camera.PL_CAMERA_RESOLUTION_HD:
            default:
                deviceapis._plugin("Camera", "SetCamProperty", "3", "1280", "720");
                switch (i) {
                    case deviceapis.camera.PL_CAMERA_QUALITY_LOW:
                        d = "1000000";
                        break;
                    case deviceapis.camera.PL_CAMERA_QUALITY_MID:
                        d = "2000000";
                        break;
                    case deviceapis.camera.PL_CAMERA_QUALITY_HIGH:
                    default:
                        d = "5000000";
                        break
                }
                break
        }
        deviceapis._plugin("Camera", "SetCamProperty", "0", d);
        deviceapis._plugin("Camera", "SetCamProperty", "1", "30");
        var c = deviceapis._plugin("Camera", "StartCamVideo", "1", "2");
        deviceapis._plugin("Camera", "SetCamProperty", "2", "1");
        deviceapis.camera.bCameraStarted = true;
        return c
    },
    StopCamVideo: function () {
        if (!deviceapis.camera.isSEFSupported()) {
            return false
        }
        deviceapis.camera.initialize();
        alert("[deviceapis.js] camera.StopCamVideo() called ");
        var a;
        a = deviceapis._plugin("Camera", "StopCamVideo");
        deviceapis.camera.bCameraStarted = false;
        return a
    }
};