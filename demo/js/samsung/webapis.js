alert("[webapis.js] loading start");
var webapis = window.webapis || {};
webapis.platform = "Samsung SmartTV";
webapis.ver = "1.2.14";
alert("\t[webapis.js] Version : " + webapis.ver);
var webapis_FeatureArray = new Array();
var webapis_ParamArray = new Array();
webapis_ParamArray.push(null, null);
webapis_FeatureArray.push(new Feature("http://samsungapps.com/api/webapis", false, webapis_ParamArray));
webapis_FeatureArray.push(new Feature("http://samsungapps.com/api/network", false, webapis_ParamArray));
webapis_FeatureArray.push(new Feature("http://samsungapps.com/api/filesystem", false, webapis_ParamArray));
webapis_FeatureArray.push(new Feature("http://samsungapps.com/api/displaycontrol", false, webapis_ParamArray));
webapis_FeatureArray.push(new Feature("http://samsungapps.com/api/audiocontrol", false, webapis_ParamArray));
webapis_FeatureArray.push(new Feature("http://samsungapps.com/api/tv/info", false, webapis_ParamArray));
webapis_FeatureArray.push(new Feature("http://samsungapps.com/api/tv/channel", false, webapis_ParamArray));
webapis_FeatureArray.push(new Feature("http://samsungapps.com/api/tv/window", false, webapis_ParamArray));
webapis_FeatureArray.push(new Feature("http://samsungapps.com/api/avplay", false, webapis_ParamArray));
webapis_FeatureArray.push(new Feature("http://samsungapps.com/api/imageplay", false, webapis_ParamArray));
webapis_FeatureArray.push(new Feature("http://samsungapps.com/api/mediashare.mscp", false, webapis_ParamArray));
webapis_FeatureArray.push(new Feature("http://samsungapps.com/api/smarthome", false, webapis_ParamArray));
webapis.listAvailableFeatures = function () {
    alert("webapis_listAvailableFeatures()");
    return webapis_FeatureArray
};
webapis.listActivatedFeatures = function () {
    return webapis_FeatureArray
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
function ErrorsHelper() {
}
ErrorsHelper.ErrorValue = function (b, d, a, c) {
    this.name = b;
    if (d == null) {
        this.legacyCode = 0
    } else {
        this.legacyCode = d
    }
    if (a == null) {
        this.legacyCodeName = 0
    } else {
        this.legacyCodeName = a
    }
    this.description = c;
    this.show = function () {
        alert("ErrorValue { " + toStringDebug() + "}")
    };
    this.toStringDebug = function () {
        var e = "";
        e += "name:" + this.name;
        e += "   legacyCode:" + this.legacyCode;
        e += "   legacyCodeName:" + this.legacyCodeName;
        e += "   description:" + this.description;
        return e
    }
};
ErrorsHelper.attachReadonlyProperty = function (d, c, b) {
    var a = function () {
        return b
    };
    try {
        d.__defineGetter__(c, a)
    } catch (f) {
        alert("ErrorsHelper.attachReadonlyProperty __defineGetter__ cause exception")
    }
};
ErrorsHelper.errorValuesList = [];
ErrorsHelper.registerErrorValue = function (c, e, b, d) {
    var a = new ErrorsHelper.ErrorValue(c, e, b, d);
    this.errorValuesList.push(a)
};
ErrorsHelper.searchByName = function (c) {
    var a;
    for (idx = 0; idx < this.errorValuesList.length; idx++) {
        var b = this.errorValuesList[idx];
        if (b.name == c) {
            a = b;
            break
        }
    }
    return a
};
ErrorsHelper.searchByLegacyCode = function (c) {
    var a;
    for (idx = 0; idx < this.errorValuesList.length; idx++) {
        var b = this.errorValuesList[idx];
        if (b.legacyCode == c) {
            a = b;
            break
        }
    }
    return a
};
ErrorsHelper.searchByLegacyCodeName = function (c) {
    var a;
    for (idx = 0; idx < this.errorValuesList.length; idx++) {
        var b = this.errorValuesList[idx];
        if (b.legacyCodeName == c) {
            a = b;
            break
        }
    }
    return a
};
ErrorsHelper.registerErrorValue("UnknownError", 0, "UNKNOWN_ERR", "An unknown error has occurred.");
ErrorsHelper.registerErrorValue("InvalidValuesError", 0, "INVALID_VALUES_ERR", "The content of an object does not contain valid values.");
ErrorsHelper.registerErrorValue("IOError", 0, "IO_ERR", "An error occurred in communication with the underlying implementation that meant the requested method could not complete.");
ErrorsHelper.registerErrorValue("OutOfMemoryError", 0, "OUT_OF_MEMORY_ERR", "");
ErrorsHelper.registerErrorValue("NotConnectedServiceError", 0, "NOT_CONNECTED_SERVICE_ERR", "");
ErrorsHelper.registerErrorValue("FailToRequestError", 0, "FAIL_TO_REQUEST_ERR", "");
ErrorsHelper.registerErrorValue("InvalidResponseError", 0, "INVALID_RESPONSE_ERR", "");
ErrorsHelper.registerErrorValue("NoAvailableNetworkError", 0, "NO_AVAILABLE_NETWORK_ERR", "");
ErrorsHelper.registerErrorValue("InvalidDeviceError", 0, "INVALID_DEVICE_ERR", "");
ErrorsHelper.registerErrorValue("NotSupportedFuncitonError", 0, "NOT_SUPPORTED_FUNCTION_ERR", "");
ErrorsHelper.registerErrorValue("NoPermisionError", 0, "NO_PERMISSION_ERR", "");
ErrorsHelper.registerErrorValue("InvalidItemError", 0, "INVALID_ITEM_ERR", "");
ErrorsHelper.registerErrorValue("FailToPlayError", 0, "FAIL_TO_PLAY_ERR", "");
ErrorsHelper.registerErrorValue("ServiceNotAvailableError", 0, "SERVICE_NOT_AVAILABLE_ERR", "");
ErrorsHelper.registerErrorValue("NetworkSlowError", 0, "NETWORK_SLOW_ERR", "");
ErrorsHelper.registerErrorValue("RenderError", 0, "RENDER_ERR", "");
ErrorsHelper.registerErrorValue("AvplayUnsupportedContainerError", 0, "AVPLAY_UNSUPPORTED_CONTAINER_ERR", "");
ErrorsHelper.registerErrorValue("AvplayUnsupportedVideoFormatError", 0, "AVPLAY_UNSUPPORTED_VIDEO_FORMAT_ERR", "");
ErrorsHelper.registerErrorValue("AvplayUnsupportedAudioFormatError", 0, "AVPLAY_UNSUPPORTED_AUDIO_FORMAT_ERR", "");
ErrorsHelper.registerErrorValue("AvplayUnsupportedVideoResolutionError", 0, "AVPLAY_UNSUPPORTED_VIDEO_RESOLUTION_ERR", "");
ErrorsHelper.registerErrorValue("AvplayUnsupportedVideoFramerateError", 0, "AVPLAY_UNSUPPORTED_VIDEO_FRAMERATE_ERR", "");
ErrorsHelper.registerErrorValue("AvplayCurruptedStreamError", 0, "AVPLAY_CURRUPTED_STREAM_ERR", "");
ErrorsHelper.registerErrorValue("IndexSizeError", 1, "INDEX_SIZE_ERR", "The index is not in the allowed range.");
ErrorsHelper.registerErrorValue("historical", 2, "DOMSTRING_SIZE_ERR", "The specified range of text does not fit into a DOMString.");
ErrorsHelper.registerErrorValue("HierarchyRequestError", 3, "HIERARCHY_REQUEST_ERR", "The operation would yield an incorrect node tree.");
ErrorsHelper.registerErrorValue("WrongDocumentError", 4, "WRONG_DOCUMENT_ERR", "The object is in the wrong document.");
ErrorsHelper.registerErrorValue("InvalidCharacterError", 5, "INVALID_CHARACTER_ERR", "The string contains invalid characters.");
ErrorsHelper.registerErrorValue("historical", 6, "NO_DATA_ALLOWED_ERR", "Data is specified for a Node which does not support data.");
ErrorsHelper.registerErrorValue("NoModificationAllowedError", 7, "NO_MODIFICATION_ALLOWED_ERR", "The object can not be modified.");
ErrorsHelper.registerErrorValue("NotFoundError", 8, "NOT_FOUND_ERR", "The object can not be found here.");
ErrorsHelper.registerErrorValue("NotSupportedError", 9, "NOT_SUPPORTED_ERR", "The operation is not supported.");
ErrorsHelper.registerErrorValue("historical", 10, "INUSE_ATTRIBUTE_ERR", "Attempt is made to add an attribute that is already in use elsewhere.");
ErrorsHelper.registerErrorValue("InvalidStateError", 11, "INVALID_STATE_ERR", "The object is in an invalid state.");
ErrorsHelper.registerErrorValue("SyntaxError", 12, "SYNTAX_ERR", "The string did not match the expected pattern.");
ErrorsHelper.registerErrorValue("InvalidModificationError", 13, "INVALID_MODIFICATION_ERR", "The object can not be modified in this way.");
ErrorsHelper.registerErrorValue("NamespaceError", 14, "NAMESPACE_ERR", "The operation is not allowed by Namespaces in XML.");
ErrorsHelper.registerErrorValue("TypeMismatchError", 17, "TYPE_MISMATCH_ERR", "The type of the object does not match the expected type.");
ErrorsHelper.registerErrorValue("SecurityError", 18, "SECURITY_ERR", "The operation is insecure.");
ErrorsHelper.registerErrorValue("NetworkError", 19, "NETWORK_ERR", "A network error occurred.");
ErrorsHelper.registerErrorValue("AbortError", 20, "ABORT_ERR", "The operation was aborted.");
ErrorsHelper.registerErrorValue("URLMismatchError", 21, "URL_MISMATCH_ERR", "The given URL does not match another URL.");
ErrorsHelper.registerErrorValue("QuotaExceededError", 22, "QUOTA_EXCEEDED_ERR", "The quota has been exceeded.");
ErrorsHelper.registerErrorValue("TimeoutError", 23, "TIMEOUT_ERR", "The operation timed out.");
ErrorsHelper.registerErrorValue("InvalidNodeTypeError", 24, "INVALID_NODE_TYPE_ERR", "The supplied node is incorrect or has an incorrect ancestor for this operation.");
ErrorsHelper.registerErrorValue("DataCloneError", 25, "DATA_CLONE_ERR", "The object can not be cloned.");
function WebAPIException() {
}
WebAPIException.UNKNOWN_ERR = 0;
WebAPIException.INDEX_SIZE_ERR = 1;
WebAPIException.DOMSTRING_SIZE_ERR = 2;
WebAPIException.HIERARCHY_REQUEST_ERR = 3;
WebAPIException.WRONG_DOCUMENT_ERR = 4;
WebAPIException.INVALID_CHARACTER_ERR = 5;
WebAPIException.NO_DATA_ALLOWED_ERR = 6;
WebAPIException.NO_MODIFICATION_ALLOWED_ERR = 7;
WebAPIException.NOT_FOUND_ERR = 8;
WebAPIException.NOT_SUPPORTED_ERR = 9;
WebAPIException.INUSE_ATTRIBUTE_ERR = 10;
WebAPIException.INVALID_STATE_ERR = 11;
WebAPIException.SYNTAX_ERR = 12;
WebAPIException.INVALID_MODIFICATION_ERR = 13;
WebAPIException.NAMESPACE_ERR = 14;
WebAPIException.INVALID_ACCESS_ERR = 15;
WebAPIException.VALIDATION_ERR = 16;
WebAPIException.TYPE_MISMATCH_ERR = 17;
WebAPIException.SECURITY_ERR = 18;
WebAPIException.NETWORK_ERR = 19;
WebAPIException.ABORT_ERR = 20;
WebAPIException.URL_MISMATCH_ERR = 21;
WebAPIException.QUOTA_EXCEEDED_ERR = 22;
WebAPIException.TIMEOUT_ERR = 23;
WebAPIException.INVALID_NODE_TYPE_ERR = 24;
WebAPIException.DATA_CLONE_ERR = 25;
ErrorsHelper.initWebAPIException = function () {
    for (idx = 0; idx < this.errorValuesList.length; idx++) {
        var a = this.errorValuesList[idx];
        ErrorsHelper.attachReadonlyProperty(WebAPIException, a.legacyCodeName, a.legacyCode)
    }
};
ErrorsHelper.initWebAPIException();
ErrorsHelper.createWebAPIException = function (b, c) {
    if (c == null) {
        c = ""
    }
    var a = new WebAPIException;
    ErrorsHelper.attachReadonlyProperty(a, "code", 0);
    ErrorsHelper.attachReadonlyProperty(a, "name", b);
    ErrorsHelper.attachReadonlyProperty(a, "message", c);
    return a
};
ErrorsHelper.createWebAPIException_byLegacyCode = function (c) {
    var b = new WebAPIException;
    var a = ErrorsHelper.searchByLegacyCode(c);
    ErrorsHelper.attachReadonlyProperty(b, "code", a.legacyCode);
    ErrorsHelper.attachReadonlyProperty(b, "name", a.name);
    ErrorsHelper.attachReadonlyProperty(b, "message", a.description);
    return b
};
ErrorsHelper.createWebAPIException_byType = function (c) {
    var b = new WebAPIException;
    var a = ErrorsHelper.searchByName(c);
    ErrorsHelper.attachReadonlyProperty(b, "code", a.legacyCode);
    ErrorsHelper.attachReadonlyProperty(b, "name", a.name);
    ErrorsHelper.attachReadonlyProperty(b, "message", a.description);
    return b
};
function WebAPIError() {
}
WebAPIError.UNKNOWN_ERR = 0;
WebAPIError.INDEX_SIZE_ERR = 1;
WebAPIError.DOMSTRING_SIZE_ERR = 2;
WebAPIError.HIERARCHY_REQUEST_ERR = 3;
WebAPIError.WRONG_DOCUMENT_ERR = 4;
WebAPIError.INVALID_CHARACTER_ERR = 5;
WebAPIError.NO_DATA_ALLOWED_ERR = 6;
WebAPIError.NO_MODIFICATION_ALLOWED_ERR = 7;
WebAPIError.NOT_FOUND_ERR = 8;
WebAPIError.NOT_SUPPORTED_ERR = 9;
WebAPIError.INUSE_ATTRIBUTE_ERR = 10;
WebAPIError.INVALID_STATE_ERR = 11;
WebAPIError.SYNTAX_ERR = 12;
WebAPIError.INVALID_MODIFICATION_ERR = 13;
WebAPIError.NAMESPACE_ERR = 14;
WebAPIError.INVALID_ACCESS_ERR = 15;
WebAPIError.VALIDATION_ERR = 16;
WebAPIError.TYPE_MISMATCH_ERR = 17;
WebAPIError.SECURITY_ERR = 18;
WebAPIError.NETWORK_ERR = 19;
WebAPIError.ABORT_ERR = 20;
WebAPIError.URL_MISMATCH_ERR = 21;
WebAPIError.QUOTA_EXCEEDED_ERR = 22;
WebAPIError.TIMEOUT_ERR = 23;
WebAPIError.INVALID_NODE_TYPE_ERR = 24;
WebAPIError.DATA_CLONE_ERR = 25;
ErrorsHelper.createWebAPIError = function (b, c) {
    if (c == null) {
        c = ""
    }
    var a = new WebAPIError;
    ErrorsHelper.attachReadonlyProperty(a, "name", b);
    ErrorsHelper.attachReadonlyProperty(a, "message", c);
    return a
};
ErrorsHelper.createWebAPIError_byLegacyCode = function (c) {
    var b = new WebAPIError;
    alert("ErrorsHelper.createWebAPIError_byLegacyCode 1 , legacyCode:" + c);
    var a = ErrorsHelper.searchByLegacyCode(c);
    ErrorsHelper.attachReadonlyProperty(b, "name", a.name);
    ErrorsHelper.attachReadonlyProperty(b, "message", a.description);
    return b
};
ErrorsHelper.createWebAPIError_byType = function (c) {
    var b = new WebAPIError;
    var a = ErrorsHelper.searchByName(c);
    ErrorsHelper.attachReadonlyProperty(b, "name", a.name);
    ErrorsHelper.attachReadonlyProperty(b, "message", a.description);
    return b
};
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
        alert("[webapis] " + d.length + " onHide functions.");
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
        alert("[webapis] onHide function added.");
        d.push(i)
    });
    var e = [];

    function h() {
        alert("[webapis] " + e.length + " onShow functions.");
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
        alert("[webapis] onShow function added.");
        e.push(i)
    });
    var b = [];

    function a() {
        alert("[webapis] " + b.length + " onPause functions.");
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
        alert("[webapis] onPause function added.");
        b.push(i)
    });
    var g = [];

    function f() {
        alert("[webapis] " + g.length + " onResume functions.");
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
        alert("[webapis] onResume function added.");
        g.push(i)
    })
})();
function _checkNumberType(a) {
    var b = Number(a);
    if (!isFinite(b)) {
        b = 0;
        return b
    } else {
        return b
    }
}
window.curWidget = window.curWidget || {width: (window.screen.width || 0), height: (window.screen.height || 0)};
webapis.audiocontrol = {
    MODE_AUDIO_OUTPUT_PCM: 0,
    MODE_AUDIO_OUTPUT_DOLBY: 1,
    MODE_AUDIO_OUTPUT_DTS: 2,
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
    AUDIO_SOUND_TYPE_OSK_BACKSPACE: 20,
    AUDIO_SOUND_TYPE_OSK_BACKENTER: 21,
    AUDIO_SOUND_TYPE_OSK_KEYPAD: 22,
    AUDIO_SOUND_TYPE_OSK_SPACEBAR: 23,
    AUDIO_SOUND_TYPE_POPUP: 24,
    AUDIO_SOUND_TYPE_MOVE_PANEL: 25,
    AUDIO_SOUND_TYPE_NOKEY: 26,
    setMute: function (b) {
        b = Boolean(b);
        if (b === undefined || typeof b != "boolean") {
            throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
        }
        var a = webapis._plugin("AUDIO", "GetVersion");
        alert("Audio plugin version: " + a.isSEF + ", " + a.ver);
        var c = null;
        if (!a.isSEF) {
            c = webapis._plugin("AUDIO", "SetMute", b ? webapis._pluginDef.PL_AUDIO_MUTE_ON : webapis._pluginDef.PL_AUDIO_MUTE_OFF)
        } else {
            c = webapis._plugin("AUDIO", "SetUserMute", b ? webapis._pluginDef.PLR_TRUE : webapis._pluginDef.PLR_FALSE)
        }
        return c == webapis._pluginDef.PLR_TRUE
    },
    getMute: function () {
        var a = webapis._plugin("AUDIO", "GetVersion");
        var b = null;
        if (!a.isSEF) {
            retvalue = webapis._plugin("AUDIO", "GetMute");
            return retvalue == webapis._pluginDef.PL_AUDIO_MUTE_OFF
        } else {
            retvalue = webapis._plugin("AUDIO", "GetUserMute");
            return retvalue == webapis._pluginDef.PLR_TRUE
        }
    },
    getVolume: function () {
        var a = webapis._plugin("AUDIO", "GetVolume");
        alert("getVolume: " + a);
        return a >= 0 ? a : -1
    },
    setVolume: function (a) {
        a = _checkNumberType(a);
        if (a < 0 || a > 100) {
            throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
        } else {
            alert("Before SetVolume: " + webapis._plugin("AUDIO", "GetVolume"));
            alert("SetVolume with " + a);
            webapis._plugin("AUDIO", "SetVolume", a);
            alert("After SetVolume: " + webapis._plugin("AUDIO", "GetVolume"))
        }
    },
    setVolumeUp: function () {
        var a = webapis._plugin("AUDIO", "GetVersion");
        alert(a.isSEF + " " + a.ver);
        if (!a.isSEF) {
            throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR)
        } else {
            var b = webapis._plugin("AUDIO", "GetVolume");
            if (0 <= b && b < 100) {
                alert("Before SetVolumeUp: " + b);
                webapis._plugin("AUDIO", "SetVolumeWithKey", webapis._pluginDef.PL_AUDIO_VOLUME_KEY_UP);
                b = webapis._plugin("AUDIO", "GetVolume");
                alert("After SetVolumeUp: " + b)
            } else {
                throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
            }
        }
    },
    setVolumeDown: function () {
        var a = webapis._plugin("AUDIO", "GetVersion");
        if (!a.isSEF) {
            throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR)
        } else {
            var b = webapis._plugin("AUDIO", "GetVolume");
            if (0 < b && b <= 100) {
                alert("Before SetVolumeDown: " + b);
                webapis._plugin("AUDIO", "SetVolumeWithKey", webapis._pluginDef.PL_AUDIO_VOLUME_KEY_DOWN);
                b = webapis._plugin("AUDIO", "GetVolume");
                alert("After SetVolumeDown: " + b)
            } else {
                throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
            }
        }
    },
    getOutputMode: function () {
        var a = webapis._plugin("AUDIO", "GetVersion");
        if (!a.isSEF) {
            throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR)
        } else {
            var b = webapis._plugin("AUDIO", "GetExternalOutMode");
            return b
        }
    },
    playSound: function (a) {
        a = _checkNumberType(a);
        if (1 > a || a > 26) {
            throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
        }
        var b = webapis._plugin("NNavi", "GetFirmware");
        alert("Firmware : " + b);
        var d = b.match(/(\d+)-(\d+)/);
        var e = d[1];
        alert("nFirmwareYear == " + e);
        var c = null;
        if (e >= 2012) {
            c = webapis._plugin("AUI", "PlayAudio", a)
        } else {
            throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR)
        }
        if (c > 0) {
            return true
        } else {
            return false
        }
    }
};
webapis.displaycontrol = {
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
        var b = webapis._plugin("NNavi", "GetFirmware");
        var a = webapis._plugin("SCREEN", "GetVersion");
        if (b >= "T-INFOLINK2012" || b < "T-INFOLINK2011") {
            if (!a.isSEF) {
                alert("Not support");
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR)
            } else {
                return webapis._plugin("SCREEN", "Get3DEffectMode")
            }
        } else {
            if (!a.isSEF) {
                alert("Not support");
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR)
            } else {
                return webapis._plugin("SCREEN", "Get3DEffectMode", 1)
            }
        }
    },
    check3DModeEnable: function () {
        var b = webapis._plugin("TV", "GetProductType");
        alert("nProductType : " + b);
        if (b == 0) {
            var a = webapis._plugin("SCREEN", "GetVersion");
            if (!a.isSEF) {
                alert("Not support");
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR)
            } else {
                var c = webapis._plugin("SCREEN", "Flag3DEffectSupport");
                if (c > 0) {
                    return webapis.displaycontrol.MODE_3D_ENABLE_OK
                } else {
                    return webapis.displaycontrol.MODE_3D_NOT_SUPPORTED
                }
            }
        } else {
            if (b == 2) {
                var a = webapis._plugin("SCREEN", "GetVersion");
                if (!a.isSEF) {
                    alert("Not support");
                    throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR)
                } else {
                    var c = webapis._plugin("SCREEN", "Flag3DTVConnect");
                    if (c) {
                        return webapis.displaycontrol.MODE_3D_ENABLE_OK
                    } else {
                        return webapis.displaycontrol.MODE_3D_DEVICE_NOT_CONNECTED
                    }
                }
            } else {
                alert("Device is not TV or BD.");
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR)
            }
        }
    },
    get3DModeSupportList: function (a, c) {
        if (a == null && typeof c == "function") {
            throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR);
            return
        }
        if ((typeof a != "function" && a != null) || (typeof c != "function" && c != null)) {
            throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
        }
        if (a == null && c == null) {
            throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
        }
        var b = webapis._plugin("SCREEN", "GetVersion");
        if (!b.isSEF) {
            alert("Not support");
            if (typeof c == "function") {
                c(new ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR))
            }
            return
        } else {
            var f = new Array();
            Mode3DEffectListSupportLength = 8;
            var e = 0;
            for (var d = 0; d < Mode3DEffectListSupportLength; d++) {
                if (webapis._plugin("SCREEN", "Check3DEffectMode", d)) {
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
                    c(new ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR))
                }
            }
            return
        }
    }
};
webapis.application = {
    getPopupOpacity: function () {
        var c = webapis._plugin("NNavi", "GetFirmware");
        var a = 0;
        alert("[SEC Web API] FirmwareVersion : " + c);
        if ("T-INFOLINK2011-9999" < c) {
            var b = webapis._plugin("TV", "GetCurrentOSDTransparency");
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
    webapis.avplay = {
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
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
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
            var aInstance = webapis.avplay._getAllInstance();
            alert("[AVPlay] _destroyAll() with " + aInstance.length + " instances.");
            for (var i = 0; i < aInstance.length; i++) {
                alert("[AVPlay] Destroy " + i + "th avplay.");
                aInstance[i].destroy()
            }
        },
    };
    var bInit = false, nId = 0, aAVPlayInstance = [], bSupportMultiApplication = false;

    function init() {
        var sServiceConfig = webapis._plugin("NNavi", "GetServiceConfig"), oServiceConfig = null;
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
        var notSupportMultiTasking = webapis._plugin("TaskManager", "CheckSupportMultiTaskingApp", 0);
        var supportValue = webapis._plugin("TaskManager", "CheckSupportMultiTaskingApp", 2);
        if (notSupportMultiTasking == 0 && supportValue == 1) {
            bSupportMultiApplication = true
        }
        alert("[AVPlay] bSupportMultiApplication: " + bSupportMultiApplication);
        window.onHide = webapis.avplay._destroyAll
    }

    function _setDefaultRect() {
        var rect = new SRect(0, 0, curWidget.width, curWidget.height);
        return rect
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
            return iDisplayRect
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
            return webapis.avplay.PLAY_STATE_IDLE
        });
        this.__defineGetter__("authHeader", function () {
            return "basic"
        });
        this.init = function (option) {
            alert("[AVPlay" + id + "] init(" + option + ")");
            if (_isType(option, "object")) {
                if (!_isType(option.containerID, "undefined|string") || !_isType(option.zIndex, "undefined|number") || !_isType(option.bufferingCallback, "undefined|object") || !_isType(option.playCallback, "undefined|object") || !_isType(option.displayRect, "undefined|object") || !_isType(option.autoRatio, "undefined|boolean")) {
                    throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
                }
                if (_isType(option.bufferingCallback, "object")) {
                    if (!_isType(option.bufferingCallback.onbufferingstart, "undefined|function") || !_isType(option.bufferingCallback.onbufferingprogress, "undefined|function") || !_isType(option.bufferingCallback.onbufferingcomplete, "undefined|function")) {
                        throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
                    }
                }
                if (_isType(option.playCallback, "object")) {
                    if (!_isType(option.playCallback.oncurrentplaytime, "undefined|function") || !_isType(option.playCallback.onresolutionchanged, "undefined|function") || !_isType(option.playCallback.onstreamcompleted, "undefined|function") || !_isType(option.playCallback.onerror, "undefined|function")) {
                        throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
                    }
                }
                if (_isType(option.displayRect, "object")) {
                    var top = _checkNumberType(option.displayRect.top);
                    var left = _checkNumberType(option.displayRect.left);
                    var width = _checkNumberType(option.displayRect.width);
                    var height = _checkNumberType(option.displayRect.height);
                    if (!_isType(top, "number") || !_isType(left, "number") || !_isType(width, "number") || !_isType(height, "number")) {
                        throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
                    }
                }
            } else {
                if (!_isType(option, "undefined|null")) {
                    throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
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
                alert("[AVPlay" + id + "] !WARNNING! > You did Not set displayRect.")
            }
            bFrontPanelLock = oInitOption.frontPanelLock || false;
            if (oInitOption.autoRatio !== undefined) {
                bAutoRatio = oInitOption.autoRatio
            }
            if (this.status == webapis.avplay.PLAY_STATE_IDLE) {
                this._setStatus(webapis.avplay.PLAY_STATE_INITIALIZED)
            }
            return true
        };
        this.open = function (url, option) {
            alert("[AVPlay" + id + "] open(" + url + "," + (option ? option : "") + ")");
            var iurl = String(url);
            if (!_isType(iurl, "string") || !_isType(option, "undefined|object|null")) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
            }
            if (_isType(option, "object")) {
                if (!_isType(option.totalBufferSize, "undefined|number") || !_isType(option.pendingBufferSize, "undefined|number") || !_isType(option.initialBufferSize, "undefined|number") || !_isType(option.adaptive, "undefined|object") || !_isType(option.drm, "undefined|object") || !_isType(option.macrovision, "undefined|object") || !_isType(option.subtitle, "undefined|object") || !_isType(option.mode3D, "undefined|number") || !_isType(option.authHeader, "undefined|string")) {
                    throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
                }
                if (_isType(option.adaptive, "object")) {
                    if (!_isType(option.adaptive.type, "string") || !_isType(option.adaptive.bitrates, "undefined|string") || !_isType(option.adaptive.upTimer, "undefined|string") || !_isType(option.adaptive.startBitrate, "undefined|string") || !_isType(option.adaptive.startTime, "undefined|string") || !_isType(option.adaptive.admode, "undefined|string")) {
                        throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
                    }
                }
                if (_isType(option.drm, "object")) {
                    if (!_isType(option.drm.type, "string") || !_isType(option.drm.company, "undefined|string") || !_isType(option.drm.deviceID, "undefined|string") || !_isType(option.drm.deviceType, "undefined|string") || !_isType(option.drm.streamID, "undefined|string") || !_isType(option.drm.drmURL, "undefined|string") || !_isType(option.drm.ackURL, "undefined|string") || !_isType(option.drm.heartbeatPeriod, "undefined|string") || !_isType(option.drm.portal, "undefined|string") || !_isType(option.drm.userData, "undefined|string") || !_isType(option.drm.cookie, "undefined|string")) {
                        throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
                    }
                }
                if (_isType(option.macrovision, "object")) {
                    if (!_isType(option.macrovision.type, "undefined|number") || !_isType(option.macrovision.ict, "undefined|number") || !_isType(option.macrovision.dot, "undefined|number") || !_isType(option.macrovision.vbi, "undefined|number")) {
                        throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
                    }
                }
                if (_isType(option.subtitle, "object")) {
                    if (!_isType(option.subtitle.path, "string") || !_isType(option.subtitle.streamID, "number") || !_isType(option.subtitle.sync, "undefined|number") || !_isType(option.subtitle.callback, "function")) {
                        throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
                    }
                }
            }
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            if (this.status != webapis.avplay.PLAY_STATE_STOPPED && this.status != webapis.avplay.PLAY_STATE_INITIALIZED) {
                alert("[AVPlay" + id + "] !THROW ERROR! WebAPIDOMErrorCode.INVALID_STATE_ERR");
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.INVALID_STATE_ERR)
            }
            oPlayOption = option || {};
            if (oPlayOption.subtitle && !this.getSubtitleAvailable()) {
                delete oPlayOption.subtitle
            }
            iurl = iurl.replace(/&amp;/g, "&");
            this.__defineGetter__("url", function () {
                return iurl
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
                    if (oPlayOption.drm.type && oPlayOption.drm.data) {
                        for (var key in oPlayOption.drm.data) {
                            url += "|" + key + "=" + oPlayOption.drm.data[key]
                        }
                    } else {
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
            }
            var authHeader = (oPlayOption.authHeader == "basic" || oPlayOption.authHeader == "none") ? oPlayOption.authHeader : "basic";
            this.__defineGetter__("authHeader", function () {
                return authHeader
            });
            var retValue = webapis._plugin(ePlayerPlugin, "InitPlayer", url);
            nVolume = 100;
            this._setStatus(webapis.avplay.PLAY_STATE_PREPARED);
            alert("[AVPlay" + id + "] open(" + url + ") returns " + (retValue == 1));
            return retValue == 1
        };
        this.play = function (successCallback, errorCallback, sec) {
            alert("[AVPlay" + id + "] play(" + typeof successCallback + "," + typeof errorCallback + "," + (sec !== undefined ? sec : "") + ")");
            var isec = _checkNumberType(sec);
            if (!_isType(successCallback, "function") || !_isType(errorCallback, "function")) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
            }
            if (isec < 0) {
                if (typeof errorCallback == "function") {
                    errorCallback(ErrorsHelper.createWebAPIException_byType("InvalidValuesError"));
                    this._setStatus(webapis.avplay.PLAY_STATE_STOPPED)
                }
                return
            }
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            if (this.status != webapis.avplay.PLAY_STATE_PREPARED) {
                alert("[AVPlay" + id + "] !THROW ERROR! WebAPIDOMErrorCode.INVALID_STATE_ERR");
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.INVALID_STATE_ERR)
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
            if (oPlayOption.HEVC) {
                alert("oPlayOption.HEVC.customData..................." + oPlayOption.HEVC.customData);
                alert("oPlayOption.HEVC.licenseURL..................." + oPlayOption.HEVC.licenseURL);
                var ret = this.setHEVC(oPlayOption.HEVC.customData, oPlayOption.HEVC.licenseURL);
                if (ret) {
                    alert("[VideoPlayer] setHEVC succeed!!")
                } else {
                    alert("[VideoPlayer] setHEVC failed!!");
                    if (typeof errorCallback == "function") {
                        errorCallback(new ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.AVPLAY_UNSUPPORTED_VIDEO_FORMAT_ERR));
                        this._setStatus(webapis.avplay.PLAY_STATE_STOPPED)
                    }
                    return
                }
            }
            if (this.authHeader == "none") {
                this.setPlayerProperty(this.PROPERTY_TYPE_AUTH_BASIC, 0, 0)
            } else {
            }
            cbOnPlaySuccess = successCallback;
            var retValue = webapis._plugin(ePlayerPlugin, "StartPlayback", (isec !== undefined ? Number(isec) : 0));
            if (retValue == -1) {
                if (typeof errorCallback == "function") {
                    errorCallback(ErrorsHelper.createWebAPIException_byType("UnknownError"));
                    this._setStatus(webapis.avplay.PLAY_STATE_STOPPED)
                }
                return
            }
            if (!bFrontPanelLock && bBDPlayer) {
                iFrontPanel.setState(iFrontPanel.Enum.FRONT_DISPLAY_PLAY)
            }
            this._setStatus(webapis.avplay.PLAY_STATE_STARTED);
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
            var retValue = webapis._plugin(ePlayerPlugin, "Stop");
            if (!bFrontPanelLock && bBDPlayer) {
                iFrontPanel.setState(iFrontPanel.Enum.FRONT_DISPLAY_ONLINE)
            }
            self._setStatus(webapis.avplay.PLAY_STATE_STOPPED);
            setScreenSaver(true);
            return retValue == 1
        };
        this.pause = function () {
            alert("[AVPlay" + id + "] pause()");
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            var retValue = webapis._plugin(ePlayerPlugin, "Pause");
            if (retValue == -1) {
            } else {
                if (!bFrontPanelLock && bBDPlayer) {
                    iFrontPanel.setState(iFrontPanel.Enum.FRONT_DISPLAY_PAUSE)
                }
                this._setStatus(webapis.avplay.PLAY_STATE_PAUSED);
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
            var retValue = webapis._plugin(ePlayerPlugin, "Resume");
            if (retValue == -1) {
            } else {
                if (!bFrontPanelLock && bBDPlayer) {
                    iFrontPanel.setState(iFrontPanel.Enum.FRONT_DISPLAY_PLAY)
                }
                this._setStatus(webapis.avplay.PLAY_STATE_STARTED);
                setScreenSaver(false)
            }
            alert("[AVPlay" + id + "] resume() returns " + (retValue == 1));
            return retValue == 1
        };
        this.jumpForward = function (sec) {
            alert("[AVPlay" + id + "] jumpForward(" + sec + ")");
            var isec = _checkNumberType(sec);
            if (isec < 0) {
                throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
            }
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            var FINISH_OFFSET = 5000;
            if ((Number(iCurrentPlayTime.millisecond) + (isec * 1000)) > (self.duration - FINISH_OFFSET)) {
                alert("[AVPlay" + id + "] The offset is too big! " + isec + " -> " + (isec - (FINISH_OFFSET / 1000)));
                isec = isec - (FINISH_OFFSET / 1000)
            }
            var retValue = webapis._plugin(ePlayerPlugin, "JumpForward", isec);
            alert("[AVPlay" + id + "] jumpForward(" + isec + ") returns " + (retValue == 1));
            return retValue == 1
        };
        this.jumpBackward = function (sec) {
            alert("[AVPlay" + id + "] jumpBackward(" + sec + ")");
            var isec = _checkNumberType(sec);
            if (isec < 0) {
                throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
            }
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            if (iCurrentPlayTime.millisecond - (isec * 1000) < 0) {
                alert("[AVPlay" + id + "] The offset is too big! " + isec + " -> " + parseInt(iCurrentPlayTime.millisecond / 1000));
                isec = parseInt(iCurrentPlayTime.millisecond / 1000)
            }
            var retValue = webapis._plugin(ePlayerPlugin, "JumpBackward", isec);
            alert("[AVPlay" + id + "] jumpBackward(" + isec + ") returns " + (retValue == 1));
            return retValue == 1
        };
        this.setSpeed = function (speed) {
            alert("[AVPlay" + id + "] setSpeed(" + speed + ")");
            var ispeed = _checkNumberType(speed);
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            var retValue = webapis._plugin(ePlayerPlugin, "SetPlaybackSpeed", ispeed);
            if (retValue == -1) {
                alert("[AVPlay" + id + "] setSpeed() returns fail.");
                return false
            }
            this._setStatus(webapis.avplay.PLAY_STATE_STARTED);
            alert("[AVPlay" + id + "] setSpeed(" + ispeed + ") returns " + (retValue == 1));
            return retValue == 1
        };
        this.setAudioStreamID = function (index) {
            alert("[AVPlay" + id + "] setAudioStreamID(" + index + ")");
            var iIndex = _checkNumberType(index);
            if (iIndex < 0) {
                throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
            }
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            var streamType = 1;
            return this.setStreamID(streamType, iIndex)
        };
        this.setSubtitleStreamID = function (index) {
            alert("[AVPlay" + id + "] setSubtitleStreamID(" + index + ")");
            var iIndex = _checkNumberType(index);
            if (iIndex < 0) {
                throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
            }
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            if (!this.getSubtitleAvailable()) {
                return
            }
            var streamType = 5;
            return this.setStreamID(streamType, iIndex)
        };
        this.getCurrentBitrate = function () {
            alert("[AVPlay" + id + "] getCurrentBitrates()");
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            var retValue = webapis._plugin(ePlayerPlugin, "GetCurrentBitrates");
            if (retValue == webapis._pluginDef.PLR_NOT_IMPLEMENT) {
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
            var retValue = webapis._plugin(ePlayerPlugin, "GetAvailableBitrates");
            if (retValue == webapis._pluginDef.PLR_NOT_IMPLEMENT) {
                alert("[AVPlay" + id + "] Not support API : getAvailableBitrates()");
                return false
            } else {
                alert("[AVPlay" + id + "] getAvailableBitrates() returns " + retValue);
                return retValue
            }
        };
        var _bstartSubtitle = false;
        this.startSubtitle = function (option) {
            alert("[AVPlay" + id + "] startSubtitle(" + option + ")");
            if (!_isType(option, "object") || !_isType(option.path, "string") || !_isType(option.streamID, "undefined|number") || !_isType(option.sync, "undefined|number") || !_isType(option.callback, "function")) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
            }
            if (!_isType(option.path, "undefined")) {
                var tempPath = String(option.path);
                option.path = tempPath
            }
            if (!_isType(option.streamID, "undefined")) {
                var tempStrID = Number(option.streamID);
                option.streamID = tempStrID
            }
            if (!_isType(option.sync, "undefined")) {
                var tempSync = Number(option.sync);
                option.sync = tempSync
            }
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            if (!this.getSubtitleAvailable()) {
                return
            }
            alert("[AVPlay" + id + "] Subtitle Path : " + option.path);
            var retValue = webapis._plugin(ePlayerPlugin, "StartSubtitle", option.path);
            if (retValue == webapis._pluginDef.PLR_NOT_IMPLEMENT) {
                _bstartSubtitle = false;
                alert("[AVPlay" + id + "] Not support API : startSubtitle()");
                return false
            } else {
                if (retValue == 1) {
                    bBlockSubtitleEvent = false;
                    cbOnSubtitle = option.callback;
                    this.setSubtitleStreamID(option.streamID || 0);
                    this.setSubtitleSync(option.sync || 0);
                    _bstartSubtitle = true
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
            var imillisec = _checkNumberType(millisec);
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            if (!this.getSubtitleAvailable()) {
                return
            }
            var retValue = webapis._plugin(ePlayerPlugin, "SetSubtitleSync", imillisec);
            if (retValue == webapis._pluginDef.PLR_NOT_IMPLEMENT) {
                alert("[AVPlay" + id + "] Not support API : setSubtitleSync()");
                return false
            } else {
                alert("[AVPlay" + id + "] setSubtitleSync(" + imillisec + ") returns " + (retValue == 1));
                if (retValue == 1) {
                    nSubtitleSyncTime = imillisec
                }
                return retValue == 1
            }
        };
        this.GetStreamLanguageInfo = function (index) {
            var nIdx = _checkNumberType(index);
            if (nIdx < 0) {
                throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
            }
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            if (!this.getSubtitleAvailable()) {
                return
            }
            if (!_bstartSubtitle) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.INVALID_STATE_ERR)
            }
            var retValue = webapis._plugin(ePlayerPlugin, "GetStreamLanguageInfo", 5, nIdx);
            if (retValue == webapis._pluginDef.PLR_NOT_IMPLEMENT) {
                alert("[AVPlay" + id + "] Not support API : GetStreamLanguageInfo()");
                return false
            } else {
                if (retValue != -1) {
                    alert("[AVPlay" + id + "] GetStreamLanguageInfo() returns " + retValue);
                    var val = LanguageNumToStr(retValue);
                    return val
                } else {
                    alert("[AVPlay" + id + "] GetStreamLanguageInfo() false")
                }
            }
        };
        var LanguageNumToStr = function (num) {
            var nHex = num.toString(16);
            var sHex1 = "0x" + nHex.substr(0, 2);
            var sHex2 = "0x" + nHex.substr(2, 2);
            var sHex3 = "0x" + nHex.substr(4, 2);
            var str1 = String.fromCharCode(sHex1);
            var str2 = String.fromCharCode(sHex2);
            var str3 = String.fromCharCode(sHex3);
            var str = str1 + str2 + str3;
            return str
        };
        this.setDisplayRect = function (rect) {
            alert("[AVPlay" + id + "] setDisplayRect(" + rect + ")");
            if (!_isType(rect, "object") || !_isType(rect.top, "number") || !_isType(rect.left, "number") || !_isType(rect.width, "number") || !_isType(rect.height, "number")) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
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
            if (this.status == webapis.avplay.PLAY_STATE_STARTED || this.status == webapis.avplay.PLAY_STATE_PAUSED) {
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
            var retValue = webapis._plugin(ePlayerPlugin, "ClearScreen");
            if (retValue == webapis._pluginDef.PLR_NOT_IMPLEMENT) {
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
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
            }
            document.getElementById(PLAYER_CONTAINER_DIV_ID + id).style.zIndex = zIndex
        };
        this.getVolume = function () {
            alert("[AVPlay" + id + "] getVolume()");
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            if (this.status != webapis.avplay.PLAY_STATE_STARTED && this.status != webapis.avplay.PLAY_STATE_PAUSED) {
                alert("[AVPlay" + id + "] getVolume() is available on PLAY_STATE_STARTED or PLAY_STATE_PAUSED.");
                return false
            }
            alert("[AVPlay" + id + "] getVolume() returns " + nVolume);
            return nVolume
        };
        this.setVolume = function (volume) {
            alert("[AVPlay" + id + "] setVolume(" + volume + ")");
            if (!_isType(volume, "number")) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
            }
            if (!bInitialize) {
                alert("[AVPlay" + id + "] Do init() first..");
                return false
            }
            if (this.status != webapis.avplay.PLAY_STATE_STARTED && this.status != webapis.avplay.PLAY_STATE_PAUSED) {
                alert("[AVPlay" + id + "] setVolume() is available on PLAY_STATE_STARTED or PLAY_STATE_PAUSED.");
                return false
            }
            var retValue = webapis._plugin(ePlayerPlugin, "SetVolume", volume);
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
            var retValue = webapis._plugin(ePlayerPlugin, "SetCropArea", rect.left, rect.top, rect.width, rect.height);
            if (retValue == webapis._pluginDef.PLR_NOT_IMPLEMENT) {
                alert("[AVPlay" + id + "] Not support API : setCropArea()");
                errorCallback(new ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR))
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
            oPlayOption.displayArea = rect;
            var retValue = null;
            if (oPluginVer.isSEF) {
                retValue = webapis._plugin(ePlayerPlugin, "SetDisplayArea", rect.left, rect.top, rect.width, rect.height, curWidget.height)
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
                retValue = webapis._plugin(ePlayerPlugin, "SetDisplayArea", nLeft, nTop, nWidth, nHeight)
            }
            this.__defineGetter__("displayArea", function () {
                return rect
            });
            return retValue
        };
        this.getDuration = function () {
            var retValue = webapis._plugin(ePlayerPlugin, "GetDuration");
            alert("[AVPlay" + id + "] getDuration() returns " + retValue);
            this.__defineGetter__("duration", function () {
                return retValue
            });
            return retValue
        };
        this.getVideoResolution = function () {
            var retValue = null;
            if (oPluginVer.isSEF) {
                retValue = webapis._plugin(ePlayerPlugin, "GetVideoResolution")
            } else {
                retValue = ePlayerPlugin.GetVideoWidth() + "|" + ePlayerPlugin.GetVideoHeight()
            }
            alert("[AVPlay" + id + "] getVideoResolution() returns " + retValue);
            return retValue
        };
        this.getTotalNumOfStreamID = function (streamType) {
            var retValue = webapis._plugin(ePlayerPlugin, "GetTotalNumOfStreamID", streamType);
            if (retValue == webapis._pluginDef.PLR_NOT_IMPLEMENT) {
                alert("[AVPlay" + id + "] Not support API : getTotalNumOfStreamID()")
            } else {
                alert("[AVPlay" + id + "] getTotalNumOfStreamID(" + streamType + ") returns " + retValue);
                return retValue
            }
        };
        this.setStreamID = function (streamType, index) {
            var retValue = webapis._plugin(ePlayerPlugin, "SetStreamID", streamType, index);
            if (retValue == webapis._pluginDef.PLR_NOT_IMPLEMENT) {
                alert("[AVPlay" + id + "] Not support API : setStreamID()")
            } else {
                alert("[AVPlay" + id + "] setStreamID(" + streamType + "," + index + ") returns " + (retValue == 1));
                return retValue == 1
            }
        };
        this.getStreamLanguageInfo = function (streamType, index) {
            var retValue = webapis._plugin(ePlayerPlugin, "GetStreamLanguageInfo", streamType, index);
            if (retValue == webapis._pluginDef.PLR_NOT_IMPLEMENT) {
                alert("[AVPlay" + id + "] Not support API : getStreamLanguageInfo()")
            } else {
                alert("[AVPlay" + id + "] getStreamLanguageInfo(" + streamType + "," + index + ") returns " + retValue);
                return retValue
            }
        };
        this.getStreamExtraData = function (streamType, index) {
            var retValue = webapis._plugin(ePlayerPlugin, "GetStreamExtraData", streamType, index);
            if (retValue == webapis._pluginDef.PLR_NOT_IMPLEMENT) {
                alert("[AVPlay" + id + "] Not support API : getStreamExtraData()")
            } else {
                alert("[AVPlay" + id + "] getStreamExtraData(" + streamType + "," + index + ") returns " + retValue);
                return retValue
            }
        };
        this.setPlayerProperty = function (propertyType, param1, param2) {
            var retValue = webapis._plugin(ePlayerPlugin, "SetPlayerProperty", propertyType, param1, param2);
            if (retValue == webapis._pluginDef.PLR_NOT_IMPLEMENT) {
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
            var retValue = webapis._plugin(ePlayerPlugin, "SetTotalBufferSize", bytes);
            alert("[AVPlay" + id + "] setTotalBufferSize(" + bytes + ") returns " + (retValue == 1));
            return retValue == 1
        };
        this.setInitialBufferSize = function (bytes) {
            this.__defineGetter__("initialBufferSize", function () {
                return bytes
            });
            var retValue = null;
            if (oPluginVer.isSEF) {
                retValue = webapis._plugin(ePlayerPlugin, "SetInitialBufferSize", bytes)
            } else {
                retValue = webapis._plugin(ePlayerPlugin, "SetInitialBuffer", bytes)
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
                retValue = webapis._plugin(ePlayerPlugin, "SetPendingBufferSize", bytes)
            } else {
                retValue = webapis._plugin(ePlayerPlugin, "SetPendingBuffer", bytes)
            }
            alert("[AVPlay" + id + "] setPendingBufferSize(" + bytes + ") returns " + (retValue == 1));
            return retValue == 1
        };
        this.setOutputDOT = function (disable) {
            var retValue = webapis._plugin(ePlayerPlugin, "SetOutputDOT", (disable ? 1 : 0));
            if (retValue == webapis._pluginDef.PLR_NOT_IMPLEMENT) {
                alert("[AVPlay" + id + "] Not support API : setOutputDOT()")
            } else {
                alert("[AVPlay" + id + "] setOutputDOT(" + disable + ") returns " + (retValue == 1));
                return retValue == 1
            }
        };
        this.setMacrovision = function (macrovisionLevel) {
            var retValue = webapis._plugin(ePlayerPlugin, "SetMacrovision", macrovisionLevel);
            alert("[AVPlay" + id + "] setMacrovision(" + macrovisionLevel + ") returns " + (retValue == 1));
            return retValue == 1
        };
        this.setVBIData = function (macrovisionType, cgmsType) {
            var retValue = webapis._plugin(ePlayerPlugin, "SetVBIData", macrovisionType, cgmsType);
            alert("[AVPlay" + id + "] setVBIData(" + macrovisionType + "," + cgmsType + ") returns " + (retValue == 1));
            return retValue == 1
        };
        this.setICT = function (on) {
            var retValue = webapis._plugin(ePlayerPlugin, "SetICT", on);
            alert("[AVPlay" + id + "] setICT(" + on + ") returns " + (retValue == 1));
            return retValue == 1
        };
        this.setHEVC = function (customData, licenseURL) {
            var retValue = webapis._plugin("Device", "SupportHEVC");
            alert("[AVPlay" + id + "] supportHEVC returns " + (retValue == 1));
            if (retValue == 1) {
                var retData = this.setPlayerProperty(this.PROPERTY_TYPE_PLAY_READY_CUSTOM_DATA, customData, customData.length);
                var retLicense = this.setPlayerProperty(this.PROPERTY_TYPE_PLAY_READY_LICENSE_SERVER, licenseURL, licenseURL.length);
                alert("[AVPlay" + id + "] setHEVC returns customData : " + retData + " / licenseURL :" + retLicense);
                return (retData == 1 && retLicense == 1)
            } else {
                alert("[AVPlay" + id + "] This webapi is not supported HEVC!!");
                return false
            }
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
        var iDisplayRect = new _setDefaultRect();
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
        this.Event2String[webapis.avplay.CONNECTION_FAILED] = "CONNECTION_FAILED";
        this.Event2String[webapis.avplay.AUTHENTICATION_FAILED] = "AUTHENTICATION_FAILED";
        this.Event2String[webapis.avplay.STREAM_NOT_FOUND] = "STREAM_NOT_FOUND";
        this.Event2String[webapis.avplay.NETWORK_DISCONNECTED] = "NETWORK_DISCONNECTED";
        this.Event2String[webapis.avplay.NETWORK_SLOW] = "NETWORK_SLOW";
        this.Event2String[webapis.avplay.RENDER_ERROR] = "RENDER_ERROR";
        this.Event2String[webapis.avplay.RENDERING_START] = "RENDERING_START";
        this.Event2String[webapis.avplay.RENDERING_COMPLETE] = "RENDERING_COMPLETE";
        this.Event2String[webapis.avplay.STREAM_INFO_READY] = "STREAM_INFO_READY";
        this.Event2String[webapis.avplay.DECODING_COMPLETE] = "DECODING_COMPLETE";
        this.Event2String[webapis.avplay.BUFFERING_START] = "BUFFERING_START";
        this.Event2String[webapis.avplay.BUFFERING_COMPLETE] = "BUFFERING_COMPLETE";
        this.Event2String[webapis.avplay.BUFFERING_PROGRESS] = "BUFFERING_PROGRESS";
        this.Event2String[webapis.avplay.CURRENT_PLAYBACK_TIME] = "CURRENT_PLAYBACK_TIME";
        this.Event2String[webapis.avplay.AD_START] = "AD_START";
        this.Event2String[webapis.avplay.AD_END] = "AD_END";
        this.Event2String[webapis.avplay.RESOLUTION_CHANGED] = "RESOLUTION_CHANGED";
        this.Event2String[webapis.avplay.BITRATE_CHANGED] = "BITRATE_CHANGED";
        this.Event2String[webapis.avplay.SUBTITLE] = "SUBTITLE";
        this.Event2String[webapis.avplay.CUSTOM] = "CUSTOM";
        this.State2String = {};
        this.State2String[webapis.avplay.PLAY_STATE_IDLE] = "PLAY_STATE_IDLE";
        this.State2String[webapis.avplay.PLAY_STATE_INITIALIZED] = "PLAY_STATE_INITIALIZED";
        this.State2String[webapis.avplay.PLAY_STATE_STOPPED] = "PLAY_STATE_STOPPED";
        this.State2String[webapis.avplay.PLAY_STATE_PREPARED] = "PLAY_STATE_PREPARED";
        this.State2String[webapis.avplay.PLAY_STATE_STARTED] = "PLAY_STATE_STARTED";
        this.State2String[webapis.avplay.PLAY_STATE_PAUSED] = "PLAY_STATE_PAUSED";
        function initialize(containerID, zIndex, pluginObjectID) {
            alert("[AVPlay" + id + "] initialize(" + (containerID || "") + "," + (zIndex || "") + "," + (pluginObjectID || "") + ")");
            var sFirmware = webapis._plugin("NNavi", "GetFirmware");
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
            webapis._plugin("TVMW", "GetVersion");
            iFrontPanel = new FrontPanel();
            bBDPlayer = webapis.tv.info.getProduct() == webapis.tv.info.PRODUCT_TYPE_BD;
            oPluginVer = webapis._plugin(ePlayerPlugin, "GetVersion");
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
                    webapis._plugin(ePluginObject, "Stop");
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
            var bUseSEF = webapis._plugin.getSEFAvailable();
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
            var nNetworkInterface = webapis._plugin("Network", "GetActiveType");
            var sIPAddr = webapis._plugin("Network", "GetIP", nNetworkInterface);
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
        this.onEvent = function (type, data, data2) {
            switch (type) {
                case webapis.avplay.STREAM_INFO_READY:
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
                    var nTotalNumOfVideo = this.getTotalNumOfStreamID(3);
                    var nTotalNumOfAudio = this.getTotalNumOfStreamID(1);
                    var nTotalNumOfSubtitle = this.getTotalNumOfStreamID(5);
                    this.__defineGetter__("totalNumOfVideo", function () {
                        return nTotalNumOfVideo
                    });
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
                case webapis.avplay.BUFFERING_START:
                    if (this.status == webapis.avplay.PLAY_STATE_STOPPED) {
                        alert("[AVPlay" + id + "] This BUFFERING_START event occured after stop() call. skip.");
                        return
                    }
                    this._setStatus(webapis.avplay.PLAY_STATE_STARTED);
                    if (oInitOption.bufferingCallback) {
                        if (typeof oInitOption.bufferingCallback.onbufferingstart == "function") {
                            oInitOption.bufferingCallback.onbufferingstart()
                        }
                    }
                    break;
                case webapis.avplay.BUFFERING_PROGRESS:
                    if (this.status == webapis.avplay.PLAY_STATE_STOPPED) {
                        alert("[AVPlay" + id + "] This BUFFERING_PROGRESS event occured after stop() call. skip.");
                        return
                    }
                    if (oInitOption.bufferingCallback) {
                        if (typeof oInitOption.bufferingCallback.onbufferingprogress == "function") {
                            oInitOption.bufferingCallback.onbufferingprogress(data)
                        }
                    }
                    break;
                case webapis.avplay.BUFFERING_COMPLETE:
                    if (oInitOption.bufferingCallback) {
                        if (typeof oInitOption.bufferingCallback.onbufferingcomplete == "function") {
                            oInitOption.bufferingCallback.onbufferingcomplete()
                        }
                    }
                    break;
                case webapis.avplay.RENDERING_START:
                    if (this.status == webapis.avplay.PLAY_STATE_STOPPED) {
                        alert("[AVPlay" + id + "] This RENDERING_START event occured after stop() call. skip.");
                        return
                    }
                    break;
                case webapis.avplay.CURRENT_PLAYBACK_TIME:
                    if (this.status != webapis.avplay.PLAY_STATE_STARTED) {
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
                case webapis.avplay.RENDERING_COMPLETE:
                    setTimeout(function () {
                        self.stop();
                        if (oInitOption.playCallback) {
                            if (typeof oInitOption.playCallback.onstreamcompleted == "function") {
                                oInitOption.playCallback.onstreamcompleted()
                            }
                        }
                    }, 0);
                    break;
                case webapis.avplay.CONNECTION_FAILED:
                case webapis.avplay.STREAM_NOT_FOUND:
                    this.stop();
                    if (typeof oInitOption.playCallback.onerror == "function") {
                        oInitOption.playCallback.onerror(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_FOUND_ERR))
                    }
                    break;
                case webapis.avplay.AUTHENTICATION_FAILED:
                    this.stop();
                    if (typeof oInitOption.playCallback.onerror == "function") {
                        oInitOption.playCallback.onerror(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.SECURITY_ERR))
                    }
                    break;
                case webapis.avplay.NETWORK_DISCONNECTED:
                    this.stop();
                    if (typeof oInitOption.playCallback.onerror == "function") {
                        oInitOption.playCallback.onerror(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NETWORK_ERR))
                    }
                    break;
                case webapis.avplay.NETWORK_SLOW:
                    this.stop();
                    if (typeof oInitOption.playCallback.onerror == "function") {
                        oInitOption.playCallback.onerror(ErrorsHelper.createWebAPIException_byType("NetworkSlowError"))
                    }
                    break;
                case webapis.avplay.RENDER_ERROR:
                    this.stop();
                    if (oInitOption.playCallback) {
                        if (typeof oInitOption.playCallback.onerror == "function") {
                            switch (Number(data)) {
                                case webapis.avplay.UNKNOWN_ERROR:
                                    oInitOption.playCallback.onerror(ErrorsHelper.createWebAPIException_byType("UnknownError"));
                                    break;
                                case webapis.avplay.UNSUPPORTED_CONTAINER:
                                    oInitOption.playCallback.onerror(ErrorsHelper.createWebAPIException_byType("AvplayUnsupportedContainerError"));
                                    break;
                                case webapis.avplay.UNSUPPORTED_VIDEO_CODEC:
                                    oInitOption.playCallback.onerror(ErrorsHelper.createWebAPIException_byType("AvplayUnsupportedVideoFormatError"));
                                    break;
                                case webapis.avplay.UNSUPPORTED_AUDIO_CODEC:
                                    oInitOption.playCallback.onerror(ErrorsHelper.createWebAPIException_byType("AvplayUnsupportedAudioFormatError"));
                                    break;
                                case webapis.avplay.UNSUPPORTED_VIDEO_RESOLUTION:
                                    oInitOption.playCallback.onerror(ErrorsHelper.createWebAPIException_byType("AvplayUnsupportedVideoResolutionError"));
                                    break;
                                case webapis.avplay.UNSUPPORTED_VIDEO_FRAMERATE:
                                    oInitOption.playCallback.onerror(ErrorsHelper.createWebAPIException_byType("AvplayUnsupportedVideoFramerateError"));
                                    break;
                                case webapis.avplay.CURRUPTED_STREAM:
                                    oInitOption.playCallback.onerror(ErrorsHelper.createWebAPIException_byType("AvplayCurruptedStreamError"));
                                    break;
                                default:
                                    alert("[AVPlay" + id + "] !ERROR! No detail category..");
                                    oInitOption.playCallback.onerror(ErrorsHelper.createWebAPIException_byType("UnknownError"));
                                    break
                            }
                        }
                    }
                    break;
                case webapis.avplay.CUSTOM_ERROR:
                    this.stop();
                    if (typeof oInitOption.playCallback.onerror == "function") {
                        oInitOption.playCallback.onerror(ErrorsHelper.createWebAPIException("CustomError", data))
                    }
                    break;
                case webapis.avplay.RTSP_STATE:
                    if (typeof oInitOption.playCallback.onerror == "function") {
                        oInitOption.playCallback.onerror(ErrorsHelper.createWebAPIException("RTSPState", data))
                    }
                    break;
                case webapis.avplay.AD_START:
                case webapis.avplay.AD_END:
                    break;
                case webapis.avplay.RESOLUTION_CHANGED:
                    if (oInitOption.playCallback) {
                        if (typeof oInitOption.playCallback.onresolutionchanged == "function") {
                            var resolution = this.getVideoResolution().split("|");
                            oInitOption.playCallback.onresolutionchanged(resolution[0], resolution[1])
                        }
                    }
                    break;
                case webapis.avplay.BITRATE_CHANGED:
                case webapis.avplay.CUSTOM:
                    break;
                case webapis.avplay.SUBTITLE:
                    if (bBlockSubtitleEvent) {
                        alert("[AVPlay" + id + "] stopSubtitle() was called. skip this event.");
                        return
                    } else {
                        if (typeof cbOnSubtitle == "function") {
                            cbOnSubtitle(nSubtitleSyncTime, data, data2)
                        }
                    }
                    break;
                default:
                    break
            }
        };
        this.getFitDisplayArea = function (width, height) {
            var FRAME_LEFT = iDisplayRect.left,
                FRAME_TOP = iDisplayRect.top,
                FRAME_WIDTH = iDisplayRect.width,
                FRAME_HEIGHT = iDisplayRect.height,
                nLeft, nTop, nWidth, nHeight, retValue,
                fnRound = Math.round;

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
                webapis._plugin("NNavi", "SendEventToDevice", 3, second)
            } else {
                webapis._plugin("NNavi", "SendEventToDevice", 4, 0)
            }
            function getAutoProtectionTime() {
                var second = 0;
                var profile = webapis._plugin("TVMW", "GetProfile", webapis._pluginDef.PL_PRFID_AUTO_PROTECTION_TIME);
                var duration_min = null;
                var fimwareVer = webapis._plugin("NNavi", "GetFirmware");
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
                webapis._plugin("FrontPanel", "DisplayVFD_Show", state)
            };
            this.setTime = function (playTime) {
                alert("[FrontPanel] setTime(" + playTime + ")");
                var aTime = playTime.timeString.split(":");
                webapis._plugin("FrontPanel", "DisplayVFD_Time", aTime[0], aTime[1], aTime[2])
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
            this.iAVPlay.onEvent(webapis.avplay.BUFFERING_START)
        };
        this.onBufferingComplete = function () {
            alert("[AVPlay" + id + "] PlayerEventListener : onBufferingComplete()");
            this.iAVPlay.onEvent(webapis.avplay.BUFFERING_COMPLETE)
        };
        this.onBufferingProgress = function (percent) {
            alert("[AVPlay" + id + "] PlayerEventListener : onBufferingProgress(" + percent + ")");
            this.iAVPlay.onEvent(webapis.avplay.BUFFERING_PROGRESS, percent)
        };
        this.onStreamInfoReady = function () {
            alert("[AVPlay" + id + "] PlayerEventListener : onStreamInfoReady()");
            this.iAVPlay.onEvent(webapis.avplay.STREAM_INFO_READY)
        };
        this.onCurrentPlayTime = function (ms) {
            alert("[AVPlay" + id + "] PlayerEventListener : onCurrentPlayTime(" + ms + ")");
            this.iAVPlay.onEvent(webapis.avplay.CURRENT_PLAYBACK_TIME, ms)
        };
        this.onRenderingComplete = function () {
            alert("[AVPlay" + id + "] PlayerEventListener : onRenderingComplete()");
            this.iAVPlay.onEvent(webapis.avplay.RENDERING_COMPLETE)
        };
        this.onConnectionFailed = function () {
            alert("[AVPlay" + id + "] PlayerEventListener : onConnectionFailed()");
            this.iAVPlay.onEvent(webapis.avplay.CONNECTION_FAILED)
        };
        this.onAuthenticationFailed = function () {
            alert("[AVPlay" + id + "] PlayerEventListener : onAuthenticationFailed()");
            this.iAVPlay.onEvent(webapis.avplay.AUTHENTICATION_FAILED)
        };
        this.onStreamNotFound = function () {
            alert("[AVPlay" + id + "] PlayerEventListener : onStreamNotFound()");
            this.iAVPlay.onEvent(webapis.avplay.STREAM_NOT_FOUND)
        };
        this.onNetworkDisconnected = function () {
            alert("[AVPlay" + id + "] PlayerEventListener : onNetworkDisconnected()");
            this.iAVPlay.onEvent(webapis.avplay.NETWORK_DISCONNECTED)
        };
        this.onRenderError = function (errorCode) {
            alert("[AVPlay" + id + "] PlayerEventListener : onRenderError(" + errorCode + ")");
            this.iAVPlay.onEvent(webapis.avplay.RENDER_ERROR, errorCode)
        };
        this.onAdStart = function () {
            alert("[AVPlay" + id + "] PlayerEventListener : onAdStart()");
            this.iAVPlay.onEvent(webapis.avplay.AD_START)
        };
        this.onAdEnd = function () {
            alert("[AVPlay" + id + "] PlayerEventListener : onAdEnd()");
            this.iAVPlay.onEvent(webapis.avplay.AD_END)
        };
        this.onResolutionChanged = function () {
            alert("[AVPlay" + id + "] PlayerEventListener : onResolutionChanged()");
            this.iAVPlay.onEvent(webapis.avplay.RESOLUTION_CHANGED)
        };
        this.onEvent = function (type, param, param2) {
            alert("[AVPlay" + id + "] PlayerEventListener : onEvent(" + type + "," + param + "," + param2 + ") -> " + this.iAVPlay.Event2String[type]);
            this.iAVPlay.onEvent(type, param, param2)
        }
    }
})();
(function () {
    webapis.imageview = {
        EFFECT_INIT: -1,
        EFFECT_FADE1: 0,
        EFFECT_FADE_1: 0,
        EFFECT_FADE2: 1,
        EFFECT_FADE_2: 1,
        EFFECT_BLIND: 2,
        EFFECT_SPIRAL: 3,
        EFFECT_CHECKER: 4,
        EFFECT_LINEAR: 5,
        EFFECT_STAIR: 6,
        EFFECT_STAIRS: 6,
        EFFECT_WIPE: 7,
        EFFECT_RANDOM: 8,
        EFFECT_NONE: 9,
        EFFECT_NORMAL: 9,
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
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
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
                        errorCallback(new ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR))
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
                            errorCallback(new ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR))
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
        var sModelCode = webapis.tv.info.getModel(), sServiceConfig = webapis._plugin("NNavi", "GetServiceConfig"), oServiceConfig = null;
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
        var notSupportMultiTasking = webapis._plugin("TaskManager", "CheckSupportMultiTaskingApp", 0);
        var supportValue = webapis._plugin("TaskManager", "CheckSupportMultiTaskingApp", 2);
        alert("notSupportMultiTasking......................" + notSupportMultiTasking);
        alert("supportValue......................" + supportValue);
        if (notSupportMultiTasking == 0 && supportValue == 1) {
            bSupportMultiApplication = true
        }
        alert("[ImageView] bSupportMultiApplication: " + bSupportMultiApplication);
        window.onHide = webapis.imageview._destroyAll;
        bInit = true
    }

    webapis.imageview._bSlideShowMode = false;
    webapis.imageview._bCallSetEffectWithINIT = false;
    webapis.imageview._setSlideShow = function (bSlideShowMode, iImageView) {
        if (webapis.imageview._bSlideShowMode && !bSlideShowMode) {
            webapis.imageview._bCallSetEffectWithINIT = false;
            if (!iImageView.setTransitionEffect(webapis.imageview.EFFECT_INIT)) {
                iImageView.initPlayer("http://for_create_media_instance/");
                iImageView.setTransitionEffect(webapis.imageview.EFFECT_INIT);
                iImageView.stop()
            }
            webapis.imageview._bSlideShowMode = false
        } else {
            if (!(webapis.imageview._bSlideShowMode) && bSlideShowMode) {
                webapis.imageview._bCallSetEffectWithINIT = true;
                webapis.imageview._bSlideShowMode = true
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
            return webapis.imageview.IMAGEVIEW_STATE_IDLE
        });
        this.init = function (option) {
            alert("[ImageView" + id + "] init(" + option + ")");
            option = option || {};
            if (_isType(option, "object")) {
                if (!_isType(option.containerID, "undefined|string") || !_isType(option.zIndex, "undefined|number") || !_isType(option.displayRect, "undefined|object")) {
                    throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
                }
                if (_isType(option.displayRect, "object")) {
                    var top = _checkNumberType(option.displayRect.top);
                    var left = _checkNumberType(option.displayRect.left);
                    var width = _checkNumberType(option.displayRect.width);
                    var height = _checkNumberType(option.displayRect.height);
                    if (!_isType(top, "number") || !_isType(left, "number") || !_isType(width, "number") || !_isType(height, "number")) {
                        throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
                    }
                }
            } else {
                if (!_isType(option, "undefined|null")) {
                    throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
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
                alert("[ImageView" + id + "] !WARNNING! > You did Not set displayRect.")
            }
            if (oInitOption.autoRatio !== undefined) {
                bAutoRatio = oInitOption.autoRatio
            }
            this._setStatus(webapis.imageview.IMAGEVIEW_STATE_INITIALIZED);
            return true
        };
        this.prepare = function (url, successCallback, errorCallback, option) {
            alert("[ImageView" + id + "] prepare(" + typeof successCallback + "," + typeof errorCallback + "," + url + "," + option + ")");
            var iurl = String(url);
            if (!_isType(successCallback, "function") || !_isType(errorCallback, "undefined|function|null") || !_isType(iurl, "string") || !_isType(option, "undefined|object|null")) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
            }
            if (_isType(option, "object")) {
                if (!_isType(option.width, "undefined|number|null") || !_isType(option.height, "undefined|number|null") || !_isType(option.effect, "undefined|number|null")) {
                    throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
                }
            }
            if (!bInitialize) {
                alert("[ImageView" + id + "] Do init() first..");
                return false
            }
            cbOnDecordingComplete = successCallback;
            cbOnPrepareError = errorCallback;
            this.__defineGetter__("url", function () {
                return iurl
            });
            this.stop();
            this.initPlayer(iurl);
            if (bSlideshowMode) {
                if (option && option.effect !== undefined) {
                    this.setTransitionEffect(option.effect);
                    this.__defineGetter__("effect", function () {
                        return option.effect
                    })
                } else {
                    this.setTransitionEffect(webapis.imageview.EFFECT_NONE);
                    this.__defineGetter__("effect", function () {
                        return webapis.imageview.EFFECT_NONE
                    })
                }
            } else {
                this.__defineGetter__("effect", function () {
                    return webapis.imageview.EFFECT_NONE
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
            if (!_isType(successCallback, "function") || !_isType(errorCallback, "function")) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
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
            var bUseSEF = webapis._plugin.getSEFAvailable();
            if (bUseSEF) {
                var retValue = webapis._plugin(eImageViewerPlugin, "ClearScreenForImage")
            } else {
                var retValue = webapis._plugin(eImageViewerPlugin, "ClearScreen")
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
            eInnerContainerDiv.style.visibility = "visible";
            return true
        };
        this.hide = function () {
            alert("[ImageView" + id + "] hide()");
            if (!bInitialize) {
                alert("[ImageView" + id + "] Do init() first..");
                return false
            }
            eInnerContainerDiv.style.visibility = "hidden";
            return true
        };
        this.setDisplayRect = function (rect) {
            alert("[ImageView" + id + "] setDisplayRect(" + rect + ")");
            if (!_isType(rect, "object") || !_isType(rect.top, "number") || !_isType(rect.left, "number") || !_isType(rect.width, "number") || !_isType(rect.height, "number")) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
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
            eImageViewerPlugin.style.height = iDisplayRect.height + "px";
            return true
        };
        this.setSlideShow = function (on) {
            alert("[ImageView" + id + "] setSlideShow(" + on + ")");
            var ion = Boolean(on);
            if (!_isType(ion, "boolean")) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
            }
            if (!bInitialize) {
                alert("[ImageView" + id + "] Do init() first..");
                return false
            }
            if (ion) {
                bSlideshowMode = true;
                webapis.imageview._setSlideShow(true);
                bSetSlideShowStatusOn = true
            } else {
                bSlideshowMode = false;
                webapis.imageview._setSlideShow(false, this);
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
                        if (effectList == webapis._pluginDef.PLR_NOT_IMPLEMENT) {
                            effectList = "NONE"
                        }
                    }
                }
            }
            alert("[AF service.imagecore] Available Effects : " + effectList);
            var aEffectListStr = effectList.split(",");
            var aEffectListEnum = [];
            for (var i = 0; i < aEffectListStr.length; i++) {
                if (webapis.imageview["EFFECT_" + aEffectListStr[i]] !== undefined) {
                    aEffectListEnum.push(webapis.imageview["EFFECT_" + aEffectListStr[i]])
                }
            }
            alert("[AF service.imagecore] getTransitionEffectList() returns " + aEffectListEnum);
            return aEffectListEnum;
            function getTransitionEffectList() {
                var retValue = webapis._plugin(eImageViewerPlugin, "GetTransitionEffectList");
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
            var retValue = webapis._plugin(eImageViewerPlugin, "InitPlayer", url);
            alert("[ImageView" + id + "] initPlayer(" + url + ") returns " + (retValue == 1));
            if (webapis.imageview._bCallSetEffectWithINIT) {
                this.setTransitionEffect(webapis.imageview.EFFECT_INIT);
                webapis.imageview._bCallSetEffectWithINIT = false
            }
            return retValue == 1
        };
        this.showImage = function () {
            if (!bInitialize) {
                initialize()
            }
            var bUseSEF = webapis._plugin.getSEFAvailable();
            if (bUseSEF) {
                var retValue = webapis._plugin(eImageViewerPlugin, "StartPlayback")
            } else {
                var retValue = webapis._plugin(eImageViewerPlugin, "ShowImage")
            }
            alert("[ImageView" + id + "] showImage() returns " + (retValue == 1));
            return retValue == 1
        };
        this.stop = function () {
            var retValue = webapis._plugin(eImageViewerPlugin, "Stop");
            self._setStatus(webapis.imageview.IMAGEVIEW_STATE_STOPPED);
            alert("[ImageView" + id + "] stop() returns " + (retValue == 1));
            return retValue == 1
        };
        this.setTransitionEffect = function (effect) {
            var retValue = webapis._plugin(eImageViewerPlugin, "SetTransitionEffect", effect);
            alert("[ImageView" + id + "] setTransitionEffect(" + effect + ") returns " + (retValue == 1));
            return retValue == 1
        };
        this.setDisplayLock = function (bLock) {
            var retValue = webapis._plugin(eImageViewerPlugin, "SetDisplayLock", bLock == true ? 1 : 0);
            alert("[ImageView" + id + "] setDisplayLock(" + bLock + ") returns " + (retValue == 1));
            return retValue == 1
        };
        this.setDisplayArea = function (rect) {
            var retValue = null;
            var pluginVer = webapis._plugin(eImageViewerPlugin, "GetVersion");
            if (pluginVer.isSEF) {
                retValue = webapis._plugin(eImageViewerPlugin, "SetDisplayArea", rect.left, rect.top, rect.width, rect.height, curWidget.height)
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
                retValue = webapis._plugin(eImageViewerPlugin, "SetDisplayArea", nLeft, nTop, nWidth, nHeight)
            }
            this.__defineGetter__("displayArea", function () {
                return rect
            });
            alert("[ImageView" + id + "] setDisplayArea(" + rect + ") returns " + (retValue == 1));
            return retValue == 1
        };
        this.isTransitionEffectAvailable = function () {
            var retValue = webapis._plugin(eImageViewerPlugin, "IsTransitionEffectAvailable");
            alert("[ImageView" + id + "] isTransitionEffectAvailable() returns " + (retValue == 1));
            return retValue == 1
        };
        this.setSlideShowStatus = function (on) {
            var retValue = webapis._plugin(eImageViewerPlugin, "SetSlideShowStatus", on);
            alert("[ImageView" + id + "] setSlideShowStatus(" + on + ") returns " + retValue);
            return retValue
        };
        this.getVideoResolution = function () {
            var retValue = null;
            var bUseSEF = webapis._plugin.getSEFAvailable();
            if (bUseSEF) {
                retValue = webapis._plugin(eImageViewerPlugin, "GetVideoResolution")
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
        this.Event2String[webapis.imageview.STREAM_INFO_READY] = "STREAM_INFO_READY";
        this.Event2String[webapis.imageview.BUFFERING_START] = "BUFFERING_START";
        this.Event2String[webapis.imageview.BUFFERING_COMPLETE] = "BUFFERING_COMPLETE";
        this.Event2String[webapis.imageview.DECODING_COMPLETE] = "DECODING_COMPLETE";
        this.Event2String[webapis.imageview.RENDERING_COMPLETE] = "RENDERING_COMPLETE";
        this.Event2String[webapis.imageview.CONNECTION_FAILED] = "CONNECTION_FAILED";
        this.Event2String[webapis.imageview.AUTHENTICATION_FAILED] = "AUTHENTICATION_FAILED";
        this.Event2String[webapis.imageview.STREAM_NOT_FOUND] = "STREAM_NOT_FOUND";
        this.Event2String[webapis.imageview.NETWORK_DISCONNECTED] = "NETWORK_DISCONNECTED";
        this.Event2String[webapis.imageview.NETWORK_SLOW] = "NETWORK_SLOW";
        this.Event2String[webapis.imageview.RENDER_ERROR] = "RENDER_ERROR";
        this.State2String = {};
        this.State2String[webapis.imageview.IMAGEVIEW_STATE_IDLE] = "IMAGEVIEW_STATE_IDLE";
        this.State2String[webapis.imageview.IMAGEVIEW_STATE_INITIALIZED] = "IMAGEVIEW_STATE_INITIALIZED";
        this.State2String[webapis.imageview.IMAGEVIEW_STATE_PREPARED] = "IMAGEVIEW_STATE_PREPARED";
        this.State2String[webapis.imageview.IMAGEVIEW_STATE_DRAWN] = "IMAGEVIEW_STATE_DRAWN";
        this.State2String[webapis.imageview.IMAGEVIEW_STATE_STOPPED] = "IMAGEVIEW_STATE_STOPPED";
        function initialize(containerID, zIndex, pluginObjectID) {
            alert("[ImageView" + id + "] initialize(" + (containerID || "") + "," + (zIndex || "") + "," + (pluginObjectID || "") + ")");
            var sFirmware = webapis._plugin("NNavi", "GetFirmware");
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
            webapis._plugin("TVMW", "GetVersion");
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
                    webapis._plugin(ePluginObject, "Stop");
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
            var bUseSEF = webapis._plugin.getSEFAvailable();
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
                case webapis.imageview.STREAM_INFO_READY:
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
                case webapis.imageview.BUFFERING_START:
                    break;
                case webapis.imageview.BUFFERING_COMPLETE:
                    if (bBufferingComplete) {
                        bBufferingComplete = false
                    } else {
                        this._setStatus(webapis.imageview.IMAGEVIEW_STATE_PREPARED);
                        if (typeof cbOnDecordingComplete == "function") {
                            cbOnDecordingComplete()
                        }
                    }
                    break;
                case webapis.imageview.DECODING_COMPLETE:
                    this._setStatus(webapis.imageview.IMAGEVIEW_STATE_PREPARED);
                    if (typeof cbOnDecordingComplete == "function") {
                        cbOnDecordingComplete()
                    }
                    break;
                case webapis.imageview.RENDERING_COMPLETE:
                    if (this.status == webapis.imageview.IMAGEVIEW_STATE_STOPPED) {
                        alert("[ImageView" + id + "] This RENDERING_COMPLETE event occured after stop() call. skip.");
                        break
                    }
                    this._setStatus(webapis.imageview.IMAGEVIEW_STATE_DRAWN);
                    if (typeof cbOnRenderingComplete == "function") {
                        cbOnRenderingComplete()
                    }
                    break;
                case webapis.imageview.CONNECTION_FAILED:
                case webapis.imageview.STREAM_NOT_FOUND:
                    this.stop();
                    if (typeof cbOnPrepareError == "function") {
                        cbOnPrepareError(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_FOUND_ERR))
                    }
                    break;
                case webapis.imageview.AUTHENTICATION_FAILED:
                    this.stop();
                    if (typeof cbOnPrepareError == "function") {
                        cbOnPrepareError(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.SECURITY_ERR))
                    }
                    break;
                case webapis.imageview.NETWORK_DISCONNECTED:
                    this.stop();
                    if (typeof cbOnPrepareError == "function") {
                        cbOnPrepareError(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NETWORK_ERR))
                    }
                    break;
                case webapis.imageview.NETWORK_SLOW:
                    this.stop();
                    if (typeof cbOnPrepareError == "function") {
                        cbOnPrepareError(ErrorsHelper.createWebAPIException_byType("NetworkSlowError"))
                    }
                    break;
                case webapis.imageview.RENDER_ERROR:
                    this.stop();
                    if (typeof cbOnPrepareError == "function") {
                        cbOnPrepareError(ErrorsHelper.createWebAPIException_byType("RenderError"))
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
            this.iImageView.onEvent(webapis.imageview.BUFFERING_START)
        };
        this.onBufferingComplete = function () {
            alert("[ImageView" + id + "] ImageViewerEventListener : onBufferingComplete()");
            this.iImageView.onEvent(webapis.imageview.BUFFERING_COMPLETE)
        };
        this.onStreamInfoReady = function () {
            alert("[ImageView" + id + "] ImageViewerEventListener : onStreamInfoReady()");
            this.iImageView.onEvent(webapis.imageview.STREAM_INFO_READY)
        };
        this.onDecodingComplete = function () {
            alert("[ImageView" + id + "] ImageViewerEventListener : onDecodingComplete()");
            this.iImageView.onEvent(webapis.imageview.DECODING_COMPLETE)
        };
        this.onRenderingComplete = function () {
            alert("[ImageView" + id + "] ImageViewerEventListener : onRenderingComplete()");
            this.iImageView.onEvent(webapis.imageview.RENDERING_COMPLETE)
        };
        this.onConnectionFailed = function () {
            alert("[ImageView" + id + "] ImageViewerEventListener : onConnectionFailed()");
            this.iImageView.onEvent(webapis.imageview.CONNECTION_FAILED)
        };
        this.onAuthenticationFailed = function () {
            alert("[ImageView" + id + "] ImageViewerEventListener : onAuthenticationFailed()");
            this.iImageView.onEvent(webapis.imageview.AUTHENTICATION_FAILED)
        };
        this.onStreamNotFound = function () {
            alert("[ImageView" + id + "] ImageViewerEventListener : onStreamNotFound()");
            this.iImageView.onEvent(webapis.imageview.STREAM_NOT_FOUND)
        };
        this.onNetworkDisconnected = function () {
            alert("[ImageView" + id + "] ImageViewerEventListener : onNetworkDisconnected()");
            this.iImageView.onEvent(webapis.imageview.NETWORK_DISCONNECTED)
        };
        this.onNetworkSlow = function () {
            alert("[ImageView" + id + "] ImageViewerEventListener : onNetworkSlow()");
            this.iImageView.onEvent(webapis.imageview.NETWORK_DISCONNECTED)
        };
        this.onRenderError = function (errorCode) {
            alert("[ImageView" + id + "] ImageViewerEventListener : onRenderError(" + errorCode + ")");
            this.iImageView.onEvent(webapis.imageview.RENDER_ERROR, errorCode)
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
        this.Event2String[webapis.imageview.STREAM_INFO_READY] = "STREAM_INFO_READY";
        this.Event2String[webapis.imageview.BUFFERING_START] = "BUFFERING_START";
        this.Event2String[webapis.imageview.BUFFERING_COMPLETE] = "BUFFERING_COMPLETE";
        this.Event2String[webapis.imageview.DECODING_COMPLETE] = "DECODING_COMPLETE";
        this.Event2String[webapis.imageview.RENDERING_COMPLETE] = "RENDERING_COMPLETE";
        this.Event2String[webapis.imageview.CONNECTION_FAILED] = "CONNECTION_FAILED";
        this.Event2String[webapis.imageview.AUTHENTICATION_FAILED] = "AUTHENTICATION_FAILED";
        this.Event2String[webapis.imageview.STREAM_NOT_FOUND] = "STREAM_NOT_FOUND";
        this.Event2String[webapis.imageview.NETWORK_DISCONNECTED] = "NETWORK_DISCONNECTED";
        this.Event2String[webapis.imageview.NETWORK_SLOW] = "NETWORK_SLOW";
        this.Event2String[webapis.imageview.RENDER_ERROR] = "RENDER_ERROR";
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
                    webapis._plugin(ePluginObject, "Stop");
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
                eventListener += "startDrawLoading = function(){self.onEvent(webapis.imageview.BUFFERING_START);};";
                eventListener += "OnStreamInfoReady = function(){self.onEvent(webapis.imageview.STREAM_INFO_READY);};";
                eventListener += "endDrawLoading = function(){self.onEvent(webapis.imageview.RENDERING_COMPLETE);};";
                eventListener += "onDecoderReady = function(){};";
                eventListener += "onNotSupport = function(){self.onEvent(webapis.imageview.RENDER_ERROR);};";
                eventListener += "popupNetworkErr = function(){self.onEvent(webapis.imageview.STREAM_NOT_FOUND);};";
                eventListener += "onServerError = function(){self.onEvent(webapis.imageview.STREAM_NOT_FOUND);};";
                eventListener += "OnConnectionFailed = function(){self.onEvent(webapis.imageview.CONNECTION_FAILED);};";
                eventListener += "OnAuthenticationFailed = function(){self.onEvent(webapis.imageview.AUTHENTICATION_FAILED);};";
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
                case webapis.imageview.BUFFERING_START:
                    break;
                case webapis.imageview.STREAM_INFO_READY:
                    break;
                case webapis.imageview.RENDERING_COMPLETE:
                    if (typeof cbOnRenderingComplete == "function") {
                        cbOnRenderingComplete()
                    }
                    break;
                case webapis.imageview.CONNECTION_FAILED:
                case webapis.imageview.STREAM_NOT_FOUND:
                    this.stop();
                    if (typeof cbOnPrepareError == "function") {
                        cbOnPrepareError(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_FOUND_ERR))
                    }
                    break;
                case webapis.imageview.AUTHENTICATION_FAILED:
                    this.stop();
                    if (typeof cbOnPrepareError == "function") {
                        cbOnPrepareError(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.SECURITY_ERR))
                    }
                    break;
                case webapis.imageview.NETWORK_DISCONNECTED:
                    this.stop();
                    if (typeof cbOnPrepareError == "function") {
                        cbOnPrepareError(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NETWORK_ERR))
                    }
                    break;
                case webapis.imageview.NETWORK_SLOW:
                    this.stop();
                    if (typeof cbOnPrepareError == "function") {
                        cbOnPrepareError(ErrorsHelper.createWebAPIException_byType("NetworkSlowError"))
                    }
                    break;
                case webapis.imageview.RENDER_ERROR:
                    this.stop();
                    if (typeof cbOnPrepareError == "function") {
                        cbOnPrepareError(ErrorsHelper.createWebAPIException_byType("RenderError"))
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
webapis.mbr = {
    _MBRPlugin: null, ManagerCallBack: null, registerMBRChangeCallback: function (a) {
        var b = null;
        b = webapis._plugin("MBR", "GetVersion").ver;
        b = Number(b);
        if (b >= 2) {
            alert("Entering [registerMBRChangeCallback]");
            this._MBRPlugin = webapis._plugin("MBR");
            if (typeof a == "function") {
                alert("Assigning Manager Call Back");
                this.ManagerCallBack = a
            }
            if (navigator.userAgent.toLowerCase().indexOf("applewebkit") < 0 && navigator.userAgent.toLowerCase().indexOf("maple") >= 0) {
                this._MBRPlugin.OnEvent = "_onMBRCaptionChangedEvent"
            } else {
                this._MBRPlugin.OnEvent = _onMBRCaptionChangedEvent
            }
        } else {
        }
    }, getChannel: function () {
        var a = null;
        a = webapis._plugin("MBR", "GetVersion").ver;
        a = Number(a);
        var b = null;
        if (a >= 2) {
            b = webapis._plugin("MBR", "GetChannelNumberInfo");
            return b
        } else {
            return b
        }
    }, setChannel: function (b, c) {
        var a = null;
        a = webapis._plugin("MBR", "GetVersion").ver;
        a = Number(a);
        if (a >= 2) {
            alert("Entering [SetChannelNumberInfo]");
            if (webapis._pluginDef.PLR_TRUE == webapis._plugin("MBR", "SetChannelNumberInfo", b, c)) {
                alert("[SetChannelNumberInfo] Success");
                return webapis._pluginDef.PLR_TRUE
            } else {
                alert("[SetChannelNumberInfo] Fails!!");
                return webapis._pluginDef.PLR_FALSE
            }
        } else {
            return webapis._pluginDef.PLR_FALSE
        }
    }, flagMBR: function () {
        var a = null;
        a = webapis._plugin("MBR", "GetVersion").ver;
        a = Number(a);
        var b = null;
        if (a >= 2) {
            b = webapis._plugin("MBR", "FlagMBRMode");
            return b
        } else {
            return b
        }
    },
};
function _onMBRCaptionChangedEvent(a, c, b) {
    alert("MBR Caption Changed Event");
    alert("MBR Caption changed Event : " + a + " id: " + c + " data:" + b);
    ManagerCallBack(c)
}
webapis.tv = {
    info: {
        PRODUCT_TYPE_TV: 0,
        PRODUCT_TYPE_BD: 1,
        PRODUCT_TYPE_MONITOR: 2,
        TIMEZONE_USA_NEWFOUNDLAND: 0,
        TIMEZONE_USA_ATLANTIC: 1,
        TIMEZONE_USA_EASTERN: 2,
        TIMEZONE_USA_CENTRAL: 3,
        TIMEZONE_USA_MOUNTAIN: 4,
        TIMEZONE_USA_PACIFIC: 5,
        TIMEZONE_USA_ALASKA: 6,
        TIMEZONE_USA_HAWAII: 7,
        TIMEZONE_KOR_SEOUL: 8,
        TIMEZONE_DVB_REGION_0: 9,
        TIMEZONE_DVB_REGION_1: 10,
        TIMEZONE_DVB_REGION_2: 11,
        TIMEZONE_DVB_REGION_3: 12,
        TIMEZONE_DVB_REGION_4: 13,
        TIMEZONE_DVB_REGION_5: 14,
        TIMEZONE_DVB_REGION_6: 15,
        TIMEZONE_DVB_REGION_7: 16,
        TIMEZONE_DVB_REGION_8: 17,
        TIMEZONE_DST_ON: 1,
        TIMEZONE_DST_OFF: 2,
        TIMEZONE_DST_AUTO: 3,
        getProduct: function () {
            var a = null;
            a = webapis._plugin("TV", "GetProductType");
            return a
        },
        getModel: function () {
            var a = null;
            a = webapis._plugin("NNavi", "GetModelCode");
            return a
        },
        getFirmware: function () {
            var a = null;
            a = webapis._plugin("NNavi", "GetFirmware");
            return a
        },
        getVersion: function () {
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
        },
        getCountry: function () {
            var b = null;
            var a = webapis._plugin("TV", "GetCountry");
            b = webapis._pluginDef.PL_TV_COUNTRY_CODE[a];
            return b
        },
        getLanguage: function () {
            var b = null;
            var a = webapis._plugin("TV", "GetLanguage");
            b = webapis._pluginDef.PL_TV_LANGUAGE_CODE[a];
            return b
        },
        getDeviceID: function () {
            var b = webapis._plugin("Network", "GetMAC", 1);
            alert("sMacAddr == " + b);
            var a = webapis._plugin("NNavi", "GetDUID", b);
            return a
        },
        getESN: function () {
        },
        getTick: function () {
            var b = null;
            b = webapis._plugin("Time", "GetTick");
            var a = webapis._plugin("NNavi", "GetFirmware");
            if (a.substr(10, 4) == "2010") {
                b = parseInt(b)
            }
            return b
        },
        getEpochTime: function () {
            var b = null;
            b = webapis._plugin("Time", "GetEpochTime");
            var a = webapis._plugin("NNavi", "GetFirmware");
            if (a.substr(10, 4) == "2010") {
                b = parseInt(b)
            }
            return b
        },
        convertEpochToTime: function (c) {
            c = _checkNumberType(c);
            if (c <= 0) {
                throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
            }
            var d = null;
            d = webapis._plugin("Time", "ConvertEpochToLocalTime", c);
            if (d < 0) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
            } else {
                if (d) {
                    var b = d.split("/");
                    var a = new Date(b[0], b[1] - 1, b[2], b[3], b[4], b[5]);
                    return a
                } else {
                    throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR)
                }
            }
        },
        convertTimeToEpoch: function (a) {
            if (typeof a != "object" || a === null) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
            }
            var b = null;
            b = parseInt(a.getTime() / 1000);
            return b
        },
        getTimeZone: function () {
            var c = webapis._plugin("TV", "GetTimeZone");
            var b = webapis._plugin("TV", "GetTimeZone_Offset");
            var a = webapis._plugin("TV", "GetDST");
            var d = new this.TimeZone(c, b, a);
            return d
        },
        TimeZone: function (a, b, c) {
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
    closedcaption: {
        PROFILE_CC: 0,
        PROFILE_CC_FCC: 1,
        CAPTION_FONT_SIZE: 0,
        CAPTION_FONT_STYLE: 1,
        CAPTION_FG_COLOR: 2,
        CAPTION_FG_OPACITY: 3,
        CAPTION_BG_COLOR: 4,
        CAPTION_BG_OPACITY: 5,
        CAPTION_LANGUAGE_TYPE: 6,
        CAPTION_EDGE_TYPE: 0,
        CAPTION_EDGE_COLOR: 1,
        CAPTION_SIZE_SMALL: 0,
        CAPTION_SIZE_STANDARD: 1,
        CAPTION_SIZE_LARGE: 2,
        CAPTION_SIZE_EXTRA_LARGE: 3,
        CAPTION_SIZE_DEFAULT: 4,
        CAPTION_FONT_DEFAULT: 0,
        CAPTION_FONT_STYLE0: 1,
        CAPTION_FONT_STYLE1: 2,
        CAPTION_FONT_STYLE2: 3,
        CAPTION_FONT_STYLE3: 4,
        CAPTION_FONT_STYLE4: 5,
        CAPTION_FONT_STYLE5: 6,
        CAPTION_FONT_STYLE6: 7,
        CAPTION_FONT_STYLE7: 8,
        CAPTION_FONT_UNDEFINED: 9,
        CAPTION_COLOR_DEFAULT: 0,
        CAPTION_COLOR_WHITE: 1,
        CAPTION_COLOR_BLACK: 2,
        CAPTION_COLOR_RED: 3,
        CAPTION_COLOR_GREEN: 4,
        CAPTION_COLOR_BLUE: 5,
        CAPTION_COLOR_YELLOW: 6,
        CAPTION_COLOR_MAGENTA: 7,
        CAPTION_COLOR_CYAN: 8,
        CAPTION_OPACITY_SOLID: 0,
        CAPTION_OPACITY_FLASH: 1,
        CAPTION_OPACITY_TRANSLUCENT: 2,
        CAPTION_OPACITY_TRANSPARENT: 3,
        CAPTION_OPACITY_DEFAULT: 4,
        CAPTION_LANGUAGE_AUTO: 0,
        CAPTION_LANGUAGE_JPN: 1,
        CAPTION_LANGUAGE_ENG: 2,
        CAPTION_LANGUAGE_GER: 3,
        CAPTION_LANGUAGE_FRE: 4,
        CAPTION_LANGUAGE_ITA: 5,
        CAPTION_LANGUAGE_RUS: 6,
        CAPTION_LANGUAGE_CHS: 7,
        CAPTION_LANGUAGE_KOR: 8,
        CAPTION_LANGUAGE_SPA: 9,
        CAPTION_LANGUAGE_UNDEFINED: 10,
        CAPTION_EDGE_NONE: 0,
        CAPTION_EDGE_RAISED: 1,
        CAPTION_EDGE_DEPRESSED: 2,
        CAPTION_EDGE_UNIFORM: 3,
        CAPTION_EDGE_DROP_SHADOWED: 4,
        _tvPlugin: null,
        ManagerCallBack: null,
        registerCaptionChangeCallback: function (a) {
            alert("Entering [registerCaptionChangeCallback]");
            this._tvPlugin = webapis._plugin("TV");
            if (typeof a == "function") {
                alert("Assigning Manager Call Back");
                this.ManagerCallBack = a
            }
            this._tvPlugin.OnEvent = _onTVCaptionChangedEvent
        },
        CaptionChangedCallback: function () {
            if (this.ManagerCallBack != null) {
                alert("[SetCaptionChangeInformation] Calling Call Back");
                this.ManagerCallBack()
            }
        },
        setClosedCaptionOption: function (c, a, b) {
            alert("Entering [SetCloseCaptionOption]");
            if (webapis._pluginDef.PLR_TRUE == webapis._plugin("TV", "SetCloseCaptionOption", c, a, b)) {
                alert("[Set CC Option] Success");
                return webapis._pluginDef.PLR_TRUE
            } else {
                alert("[Set CC Option] Fails!!");
                return webapis._pluginDef.PLR_FALSE
            }
        },
        getClosedCaptionOption: function (c, a) {
            alert("GetCloseOption");
            var b = webapis._plugin("TV", "GetCloseCaptionOption", c, a);
            if (b < 0) {
                alert("[Get CC Option] Fails!!");
                b = webapis._pluginDef.PLR_FAIL
            }
            return b
        },
    },
    channel: {
        NAVIGATOR_MODE_ALL: 0,
        NAVIGATOR_MODE_DIGITAL: 1,
        NAVIGATOR_MODE_ANALOG: 2,
        NAVIGATOR_MODE_FAVORITE: 3,
        tune: function (a, c, f, d) {
            var i = _checkNumberType(d);
            if (c == null && typeof f == "function") {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR);
                return
            }
            if ((typeof c != "function") || (typeof f != "function")) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
            }
            if (c == null && f == null) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
            }
            if (typeof a != "object" || a === null) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
            }
            if ((i > 0)) {
                if (typeof f == "function") {
                    f(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR))
                }
                return
            } else {
                if ((i < 0)) {
                    if (typeof f == "function") {
                        f(ErrorsHelper.createWebAPIException_byType("InvalidValuesError"))
                    }
                    return
                }
            }
            a.ptc = _checkNumberType(a.ptc);
            a.major = _checkNumberType(a.major);
            a.minor = _checkNumberType(a.minor);
            a.sourceID = _checkNumberType(a.sourceID);
            a.programNumber = _checkNumberType(a.programNumber);
            a.transportStreamID = _checkNumberType(a.transportStreamID);
            a.originalNetworkID = _checkNumberType(a.originalNetworkID);
            if ((typeof a.tunecallback != "object" && a.tunecallback != null)) {
                if (typeof f == "function") {
                    f(new ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR))
                }
                return
            }
            var b = webapis._plugin("TV", "GetProductType");
            alert("nProductType : " + b);
            if (b == 2) {
                if (typeof f == "function") {
                    f(new ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR))
                }
                return
            }
            var g = webapis._plugin("NNavi", "GetFirmware");
            if (g.substr(10, 4) == "2010") {
                f(new ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR));
                return
            }
            var e = null;
            var h = webapis._plugin("WINDOW");
            if (!h) {
                if (typeof f == "function") {
                    f(new ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR))
                }
                return
            }
            if (a.major) {
                e = webapis._plugin(h, "SetChannel", a.major, a.minor)
            } else {
                if (a.ptc) {
                    e = webapis._plugin(h, "SetChannel_PTC", a.ptc)
                } else {
                    if (typeof f == "function") {
                        f(ErrorsHelper.createWebAPIException_byType("InvalidValuesError"))
                    }
                    return
                }
            }
            if (e <= 0 || e == null) {
                if (typeof f == "function") {
                    f(new ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NO_MODIFICATION_ALLOWED_ERR))
                }
                return
            } else {
                if (typeof c == "function") {
                    c()
                }
                return
            }
        },
        tuneUp: function (b, e, g, c) {
            var i = _checkNumberType(c);
            var j = _checkNumberType(g);
            if (b == null && typeof e == "function") {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR);
                return
            }
            if ((typeof b != "function") || (typeof e != "function")) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
            }
            if (b == null && e == null) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
            }
            if ((j < 0 || j > 3)) {
                if (typeof e == "function") {
                    e(ErrorsHelper.createWebAPIException_byType("InvalidValuesError"))
                }
                return
            }
            if ((i > 0)) {
                if (typeof e == "function") {
                    e(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR))
                }
                return
            } else {
                if ((i < 0)) {
                    if (typeof e == "function") {
                        e(ErrorsHelper.createWebAPIException_byType("InvalidValuesError"))
                    }
                    return
                }
            }
            var a = webapis._plugin("TV", "GetProductType");
            alert("nProductType : " + a);
            if (a == 2) {
                if (typeof e == "function") {
                    e(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR))
                }
                return
            }
            var f = webapis._plugin("NNavi", "GetFirmware");
            if (f.substr(10, 4) == "2010") {
                e(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR));
                return
            }
            var d = null;
            var h = webapis._plugin("WINDOW");
            if (!h) {
                if (typeof e == "function") {
                    e(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR))
                }
                return
            }
            d = webapis._plugin(h, "SetChannel_Seek", webapis._pluginDef.PL_WINDOW_SEEK_UP, j);
            if (d < 0) {
                if (typeof e == "function") {
                    e(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR))
                }
                return
            } else {
                if (typeof b == "function") {
                    b()
                }
                return
            }
        },
        tuneDown: function (b, e, g, c) {
            var i = _checkNumberType(c);
            var j = _checkNumberType(g);
            if (b == null && typeof e == "function") {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR);
                return
            }
            if ((typeof b != "function") || (typeof e != "function")) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
            }
            if (b == null && e == null) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
            }
            if ((j < 0 || j > 3)) {
                if (typeof e == "function") {
                    e(ErrorsHelper.createWebAPIException_byType("InvalidValuesError"))
                }
                return
            }
            if ((i > 0)) {
                if (typeof e == "function") {
                    e(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR))
                }
                return
            } else {
                if ((i < 0)) {
                    if (typeof e == "function") {
                        e(ErrorsHelper.createWebAPIException_byType("InvalidValuesError"))
                    }
                    return
                }
            }
            var a = webapis._plugin("TV", "GetProductType");
            alert("nProductType : " + a);
            if (a == 2) {
                if (typeof e == "function") {
                    e(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR))
                }
                return
            }
            var f = webapis._plugin("NNavi", "GetFirmware");
            if (f.substr(10, 4) == "2010") {
                e(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR));
                return
            }
            var d = null;
            var h = webapis._plugin("WINDOW");
            if (!h) {
                if (typeof e == "function") {
                    e(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR))
                }
                return
            }
            d = webapis._plugin(h, "SetChannel_Seek", webapis._pluginDef.PL_WINDOW_SEEK_DOWN, j);
            if (d < 0) {
                if (typeof e == "function") {
                    e(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR))
                }
                return
            } else {
                if (typeof b == "function") {
                    b()
                }
                return
            }
        },
        getChannelList: function (e, h, q, y, c) {
            var s = _checkNumberType(q);
            var o = _checkNumberType(y);
            var l = _checkNumberType(c);
            if (e == null && typeof h == "function") {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR);
                return
            }
            if ((typeof e != "function" && e != null) || (typeof h != "function" && h != null)) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
            }
            if (e == null && h == null) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
            }
            if ((o < 0 || l < 0)) {
                if (typeof h == "function") {
                    h(ErrorsHelper.createWebAPIException_byType("InvalidValuesError"))
                }
                return
            }
            var p = webapis._plugin("TV", "GetProductType");
            alert("nProductType : " + p);
            if (p == 2) {
                if (typeof h == "function") {
                    h(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR))
                }
                return
            }
            var g, k, v, d, b, t, j, n, x = null;
            var a = webapis._plugin("WINDOW");
            if (!a) {
                if (typeof h == "function") {
                    h(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR))
                }
                return
            }
            var f = webapis._plugin(a, "FindChannel", webapis.tv.channel.NAVIGATOR_MODE_ALL, s);
            alert("FindChannel : " + f);
            var m = webapis._plugin(a, "GetChannel_Size");
            alert("ChannelSize : " + m);
            var r = null;
            if (m > l && l != null) {
                r = l
            } else {
                r = m
            }
            var u = new Array();
            for (var w = 0 + o; w < r; ++w) {
                g = webapis._plugin(a, "GetChannel_Type", w);
                k = webapis._plugin(a, "GetChannel_PTC", w);
                v = webapis._plugin(a, "GetChannel_Major", w);
                d = webapis._plugin(a, "GetChannel_Minor", w);
                b = webapis._plugin(a, "GetChannel_ProgramNumber", w);
                t = webapis._plugin(a, "GetChannel_TransportStreamID", w);
                j = webapis._plugin(a, "GetChannel_OriginNetID", w);
                n = webapis._plugin(a, "GetChannel_ServiceName", w);
                x = webapis._plugin(a, "GetChannel_Name", w);
                u.push(new this.ChannelInfo(k, v, d, null, null, b, t, j, n, x))
            }
            if (m < 0) {
                if (typeof h == "function") {
                    h(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR))
                }
            } else {
                if (typeof e == "function") {
                    e(u)
                }
            }
            return
        },
        getCurrentChannel: function (e) {
            var j = _checkNumberType(e);
            if ((j > 0)) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR)
            } else {
                if ((j < 0)) {
                    throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
                }
            }
            var b = webapis._plugin("TV", "GetProductType");
            alert("nProductType : " + b);
            if (b == 2) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR)
            }
            var i = webapis._plugin("WINDOW");
            if (!i) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR)
            }
            var g = webapis._plugin(i, "GetCurrentChannel_PTC");
            var k = webapis._plugin(i, "GetCurrentChannel_Major");
            var f = webapis._plugin(i, "GetCurrentChannel_Minor");
            var d = webapis._plugin(i, "GetCurrentChannel_Major");
            var a = webapis._plugin(i, "GetCurrentChannel_ProgramNumber");
            var n = webapis._plugin(i, "GetCurrentChannel_ProgramNumber");
            var h = webapis._plugin(i, "GetCurrentChannel_TransportStreamID");
            var m = webapis._plugin(i, "GetCurrentChannel_OriginNetID");
            var l = webapis._plugin(i, "GetCurrentChannel_ServiceName");
            var o = webapis._plugin(i, "GetCurrentChannel_Name");
            var c = new this.ChannelInfo(g, k, f, d, a, n, h, m, l, o);
            return c
        },
        findChannel: function (r, d, e, g) {
            r = _checkNumberType(r);
            d = _checkNumberType(d);
            if ((typeof e != "function") || (typeof g != "function")) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
            }
            var n = webapis._plugin("TV", "GetProductType");
            alert("nProductType : " + n);
            if (n == 2) {
                g(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR));
                return
            }
            var b = webapis._plugin("WINDOW");
            if (!b) {
                g(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR));
                return
            }
            var o = null;
            var f, j, a, l, c, p, h, m, t = null;
            o = webapis._plugin(b, "FindChannel", webapis.tv.channel.NAVIGATOR_MODE_ALL, webapis._pluginDef.PL_WINDOW_TV_MODE_AIR);
            var k = webapis._plugin(b, "GetChannel_Size");
            alert("ChannelSize ===== " + k);
            var q = new Array();
            for (var s = 0; s < k; ++s) {
                a = webapis._plugin(b, "GetChannel_Major", s);
                l = webapis._plugin(b, "GetChannel_Minor", s);
                if (a == r && l == d) {
                    f = webapis._plugin(b, "GetChannel_Type", s);
                    j = webapis._plugin(b, "GetChannel_PTC", s);
                    c = webapis._plugin(b, "GetChannel_ProgramNumber", s);
                    p = webapis._plugin(b, "GetChannel_TransportStreamID", s);
                    h = webapis._plugin(b, "GetChannel_OriginNetID", s);
                    m = webapis._plugin(b, "GetChannel_ServiceName", s);
                    t = webapis._plugin(b, "GetChannel_Name", s);
                    q.push(new this.ChannelInfo(j, r, d, null, null, c, p, h, m, t))
                }
            }
            if (o <= 0) {
                if (typeof g == "function") {
                    g(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR))
                }
                return
            } else {
                if (typeof e == "function") {
                    e(q)
                }
                return
            }
        },
        getCurrentProgram: function (d) {
            var f = _checkNumberType(d);
            var e = isFinite(f);
            if ((f > 0)) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR)
            } else {
                if ((f < 0)) {
                    throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
                }
            }
            var a = webapis._plugin("TV", "GetProductType");
            alert("nProductType : " + a);
            if (a == 2) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR)
            }
            var i = webapis._plugin("TV", "GetPresentProgram_Title");
            var b = webapis._plugin("TV", "GetPresentProgram_Duration");
            var h = webapis._plugin("TV", "GetPresentProgram_StartTime");
            var g = webapis._plugin("Time", "ConvertEpochToLocalTime", h);
            var c = new this.ProgramInfo(i, g, b, null, null, null);
            return c
        },
        getProgramList: function (p, l, b, e, a) {
            l = _checkNumberType(l);
            var h = _checkNumberType(a);
            if (b == null && typeof e == "function") {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR);
                return
            }
            if ((typeof b != "function" && b != null) || (typeof e != "function" && e != null)) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
            }
            if (b == null && e == null) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
            }
            if (typeof p != "object" || p === null) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
            }
            if ((l < 0 || h < 0)) {
                if (typeof e == "function") {
                    e(ErrorsHelper.createWebAPIException_byType("InvalidValuesError"))
                }
                return
            }
            var z = String(p.serviceName);
            var g = String(p.channelName);
            var w = _checkNumberType(p.ptc);
            var k = _checkNumberType(p.major);
            var u = _checkNumberType(p.minor);
            var r = _checkNumberType(p.lcn);
            var y = _checkNumberType(p.sourceID);
            var f = _checkNumberType(p.programNumber);
            var v = _checkNumberType(p.transportStreamID);
            var n = _checkNumberType(p.originalNetworkID);
            if ((typeof p.serviceName != "string" && p.serviceName != null) || (typeof p.channelName != "string" && p.channelName != null)) {
                if (typeof e == "function") {
                    e(new ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR))
                }
                return
            }
            var j = webapis._plugin("TV", "GetProductType");
            alert("nProductType : " + j);
            if (j == 2) {
                if (typeof e == "function") {
                    e(new ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR))
                }
                return
            }
            var m = null;
            var x, t, a, q;
            var o = webapis._plugin("Time", "GetEpochTime");
            m = webapis._plugin("TV", "GetProgramList", o, h);
            var c = webapis._plugin("TV", "GetProgramList_Size");
            alert("listSize : " + c);
            var d = new Array();
            for (var s = 0; s < c; ++s) {
                x = webapis._plugin("TV", "GetProgram_Title", s);
                t = webapis._plugin("TV", "GetProgram_StartTime", s);
                a = webapis._plugin("TV", "GetProgram_Duration", s);
                q = webapis._plugin("TV", "GetProgram_EndTime", s);
                if (t > l) {
                    d.push(new this.ProgramInfo(x, t, a, null, null, null))
                }
            }
            if (m < 0) {
                if (typeof e == "function") {
                    e(new ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR))
                }
            } else {
                if (typeof b == "function") {
                    b(d)
                }
            }
            return
        },
        getNumOfAvailableTuner: function () {
            var a = webapis._plugin("TV", "GetProductType");
            alert("nProductType : " + a);
            if (a == 2) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR)
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
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR);
                return
            }
            if ((typeof a != "function" && a != null) || (typeof b != "function" && b !== undefined)) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
            }
            if (a == null && b == null) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
            }
            var c = 0;
            if (c == -1) {
                if (typeof b == "function") {
                    b(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR))
                }
            } else {
                if (typeof a == "function") {
                    a(c)
                }
            }
            return
        },
        _tvPlugin: null,
        setSource: function (sourceInfo, successCallback, errorCallback, windowID) {
            var ID = _checkNumberType(windowID);
            if (successCallback == null && typeof errorCallback == "function") {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR);
                return
            }
            if ((typeof successCallback != "function" && successCallback != null) || (typeof errorCallback != "function" && errorCallback !== undefined)) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
            }
            if (successCallback == null && errorCallback == null) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
            }
            if (typeof sourceInfo != "object") {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
            }
            if ((ID > 0 || ID < 0)) {
                if (typeof errorCallback == "function") {
                    errorCallback(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR))
                }
                return
            }
            var _THIS_ = this;
            SourceChangedSuccessCallback = function () {
                webapis._plugin(_THIS_._tvPlugin, "UnsetEvent", PL_TV_EVENT_SOURCE_CHANGED);
                webapis._plugin(_THIS_._tvPlugin, "UnsetEvent", PL_TV_EVENT_SOURCE_CONNECTED);
                _THIS_._tvPlugin = null;
                successCallback(sourceInfo, windowID)
            };
            var retValue = null;
            var windowPlugin = webapis._plugin("WINDOW");
            var currentSource = webapis._plugin(windowPlugin, "GetSource");
            _THIS_._tvPlugin = webapis._plugin("TV");
            webapis._plugin(_THIS_._tvPlugin, "SetEvent", PL_TV_EVENT_SOURCE_CHANGED);
            webapis._plugin(_THIS_._tvPlugin, "SetEvent", PL_TV_EVENT_SOURCE_CONNECTED);
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
            if (eval("webapis._pluginDef." + this._sourcePLMap[sourceInfo.type]) || eval("webapis._pluginDef." + this._sourcePLMap[sourceInfo.type]) == 0) {
                if (currentSource == eval("webapis._pluginDef." + this._sourcePLMap[sourceInfo.type])) {
                    if (typeof successCallback == "function") {
                        successCallback(sourceInfo, windowID)
                    }
                    return
                } else {
                    retValue = webapis._plugin(windowPlugin, "SetSource", eval("webapis._pluginDef." + this._sourcePLMap[sourceInfo.type]))
                }
            } else {
                if (eval("webapis._pluginDef." + this._sourcePLMap[sourceInfo.type] + sourceInfo.number) || eval("webapis._pluginDef." + this._sourcePLMap[sourceInfo.type] + sourceInfo.number) == 0) {
                    if (currentSource == eval("webapis._pluginDef." + this._sourcePLMap[sourceInfo.type] + sourceInfo.number)) {
                        if (typeof successCallback == "function") {
                            successCallback(sourceInfo, windowID)
                        }
                        return
                    } else {
                        retValue = webapis._plugin(windowPlugin, "SetSource", eval("webapis._pluginDef." + this._sourcePLMap[sourceInfo.type] + sourceInfo.number))
                    }
                } else {
                    if (typeof errorCallback == "function") {
                        errorCallback(ErrorsHelper.createWebAPIException_byType("InvalidValuesError"))
                    }
                    return
                }
            }
        },
        _sourcePLMap: null,
        getSource: function (b) {
            var a = _checkNumberType(b);
            if ((a > 0)) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR)
            } else {
                if ((a < 0)) {
                    throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
                }
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
            var c = webapis._plugin("WINDOW");
            var d = webapis._plugin(c, "GetSource");
            for (var e in webapis._pluginDef) {
                if (e.indexOf("PL_WINDOW_SOURCE_") == 0 && d == webapis._pluginDef[e]) {
                    if (this._sourceAPIMap[e.substr(0, e.length)] || this._sourceAPIMap[e.substr(0, e.length)] == 0) {
                        alert("this._sourceAPIMap[val.substr(0, val.length)] == " + this._sourceAPIMap[e.substr(0, e.length)]);
                        return new this.SourceInfo(this._sourceAPIMap[e.substr(0, e.length)], null)
                    } else {
                        if (this._sourceAPIMap[e.substr(0, e.length - 1)] || this._sourceAPIMap[e.substr(0, e.length - 1)] == 0) {
                            alert("this._sourceAPIMap[val.substr(0, val.length-1)] == " + this._sourceAPIMap[e.substr(0, e.length - 1)]);
                            return new this.SourceInfo(this._sourceAPIMap[e.substr(0, e.length - 1)], Number(e.substr(e.length - 1, 1)))
                        } else {
                            throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR)
                        }
                    }
                }
            }
            throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR)
        },
        _sourceAPIMap: null,
        _coldSetOnHideFlag: false,
        setRect: function (k, c) {
            var h = _checkNumberType(c);
            if (typeof k != "object" || k == null) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
            }
            if ((h > 0)) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR)
            } else {
                if ((h < 0)) {
                    throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
                }
            }
            var e = null;
            var g = webapis._plugin("WINDOW");
            g.style.left = k.left + "px";
            g.style.top = k.top + "px";
            g.style.width = k.width + "px";
            g.style.height = k.height + "px";
            var i;
            if (curWidget.height == 540) {
                i = 1
            } else {
                if (curWidget.height == 720) {
                    i = 0.75
                } else {
                    if (curWidget.height == 1080) {
                        i = 0.5
                    } else {
                        i = 1
                    }
                }
            }
            var a = Math.round(k.left * i);
            var b = Math.round(k.top * i);
            var f = Math.round(k.width * i);
            var j = Math.round(k.height * i);
            alert("Set Rect == " + k.left + k.top + k.width + k.height);
            e = webapis._plugin(g, "SetScreenRect", a, b, f, j);
            var l = this;
            if (!l._coldSetOnHideFlag) {
                window.onHide = d;
                l._coldSetOnHideFlag = true
            }
            function d() {
                alert("[webapis] docOnHide");
                webapis._plugin(g, "SetScreenRect", -1, 0, 0, 0);
                l._coldSetOnHideFlag = false
            }

            if (e != -1 && e != null) {
                return true
            } else {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR)
            }
        },
        show: function (a) {
            ID = _checkNumberType(a);
            if ((ID > 0)) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR)
            } else {
                if ((ID < 0)) {
                    throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
                }
            }
            var c = null;
            var b = webapis._plugin("WINDOW");
            b.style.visibility = "visible";
            c = b.style.visibility;
            if (c == "visible") {
                return true
            } else {
                return false
            }
        },
        hide: function (a) {
            ID = _checkNumberType(a);
            if ((ID > 0)) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR)
            } else {
                if ((ID < 0)) {
                    throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
                }
            }
            var c = null;
            var b = webapis._plugin("WINDOW");
            b.style.visibility = "hidden";
            c = b.style.visibility;
            if (c == "hidden") {
                return true
            } else {
                return false
            }
        },
        SourceInfo: function (b, a) {
            this.type = b;
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
var PL_TV_EVENT_CAPTION_CHANGED = 612;
function _onTVPluginEvent(b, e, c) {
    alert("TV Plugin Event");
    alert("TVEvent : " + b + " id: " + e + " data:" + c);
    var a = webapis._plugin("NNavi", "GetFirmware");
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
function _onTVCaptionChangedEvent(a, c, b) {
    alert("TV Caption Changed Event");
    alert("TV Caption changed Event : " + a + " id: " + c + " data:" + b);
    switch (parseInt(a)) {
        case PL_TV_EVENT_CAPTION_CHANGED:
            alert("########## PL_TV_EVENT_CAPTION_CHANGED #######");
            webapis.tv.closedcaption.CaptionChangedCallback();
            break
    }
}
webapis.network = new getNetworkList();
var NetworkListLength = 2;
var networkPlugin = null;
function getNetworkList() {
    this.getAvailableNetworks = function (a, b) {
        if (a == null && typeof b == "function") {
            throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR);
            return
        }
        if ((typeof a != "function" && a != null) || (typeof b != "function" && b != null)) {
            throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
        }
        if (a == null && b == null) {
            throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
        }
        var d = new Array();
        for (var c = 0; c < NetworkListLength; c++) {
            d[c] = new _Network(c);
            alert("The available network interface is " + d[c].interfaceType)
        }
        if (!d[0].isActive && !d[1].isActive) {
            if (typeof b == "function") {
                b(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR))
            }
        } else {
            for (var c = 0; c < NetworkListLength; c++) {
                d[c] = new _Network(c);
                alert("The available network interface is " + d[c].interfaceType);
                alert("The available network interface is " + d[c].dnsMode);
                alert("The available network interface is " + d[c].ipMode)
            }
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
                    b = new ConnectonStatus(ConnectonStatus.DISCONNECT, "disconnected");
                    NetworkConnectionStatusChnageCallback.ondisconnect(b)
                } else {
                    if (a == 1) {
                        alert("data1 == 1");
                        b = new ConnectonStatus(ConnectonStatus.CONNECT, "connected");
                        NetworkConnectionStatusChnageCallback.onconnect(b)
                    }
                }
                alert("status.code == " + b + " / " + b.code + " / " + b.message)
            }
            break;
        case 1:
            alert("EVENT_NET_WIRELESS" + a);
            if (_networkID == 0) {
                if (a == 0) {
                    b = new ConnectonStatus(ConnectonStatus.DISCONNECT, "disconnected");
                    NetworkConnectionStatusChnageCallback.ondisconnect(b)
                } else {
                    if (a == 1) {
                        b = new ConnectonStatus(ConnectonStatus.CONNECT, "connected");
                        NetworkConnectionStatusChnageCallback.onconnect(b)
                    }
                }
                alert("status.code == " + b + " / " + b.code + " / " + b.message)
            }
            break;
        case 2:
            alert("EVENT_GATEWAY_STATUS:" + a);
            if (_networkID == 0) {
                if (a == 0) {
                    b = new ConnectonStatus(ConnectonStatus.DISCONNECT, "disconnected");
                    NetworkConnectionStatusChnageCallback.ondisconnect(b)
                } else {
                    if (a == 1) {
                        b = new ConnectonStatus(ConnectonStatus.CONNECT, "connected");
                        NetworkConnectionStatusChnageCallback.onconnect(b)
                    }
                }
                alert("status.code == " + b + " / " + b.code + " / " + b.message)
            }
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
        return webapis._plugin("NETWORK", "GetDNS", this.interfaceType)
    });
    this.__defineGetter__("dnsMode", function () {
        var b = webapis._plugin("NETWORK", "GetDNSMode", this.interfaceType);
        var c = this.toString(b);
        return c
    });
    this.__defineGetter__("gateway", function () {
        return webapis._plugin("NETWORK", "GetGateway", this.interfaceType)
    });
    this.__defineGetter__("subnetMask", function () {
        return webapis._plugin("NETWORK", "GetNetMask", this.interfaceType)
    });
    this.__defineGetter__("ip", function () {
        return webapis._plugin("NETWORK", "GetIP", this.interfaceType)
    });
    this.__defineGetter__("ipMode", function () {
        var b = webapis._plugin("NETWORK", "GetIPMode", this.interfaceType);
        var c = this.toString(b);
        return c
    });
    this.__defineGetter__("mac", function () {
        return webapis._plugin("NETWORK", "GetMAC", this.interfaceType)
    });
    this.isActive = function () {
        if (webapis._plugin("NETWORK", "CheckDNS", this.interfaceType) == 1 && webapis._plugin("NETWORK", "CheckGateway", this.interfaceType) == 1 && webapis._plugin("NETWORK", "CheckHTTP", this.interfaceType) == 1 && webapis._plugin("NETWORK", "CheckPhysicalConnection", this.interfaceType) == 1) {
            return true
        } else {
            return false
        }
    };
    this.setWatchListener = function (b, c) {
        if (b == null && typeof c == "function") {
            throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR);
            return
        }
        if ((typeof b != "object" && b != null) || (typeof c != "function" && c !== undefined)) {
            throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
        }
        if (typeof b == "object") {
            if (typeof b.onconnect != "function" || typeof b.ondisconnect != "function") {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
            }
        }
        _networkID = this.interfaceType;
        networkPlugin = webapis._plugin("NETWORK");
        if (!networkPlugin) {
            if (typeof c == "function") {
                c(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR))
            }
            return
        }
        networkPlugin.OnEvent = _onNetworkPluginEvent;
        NetworkConnectionStatusChnageCallback = b
    };
    this.unsetWatchListener = function () {
        alert("stopWatchConnectionStatus");
        NetworkConnectionStatusChnageCallback = null
    };
    this.toString = function (b) {
        var c = null;
        if (b == 0) {
            c = "Auto"
        } else {
            if (b == 1) {
                c = "Manual"
            } else {
                c = "NotSupported"
            }
        }
        return c
    }
}
Object.freeze = Object.freeze || function () {
};
Object.defineProperties = Object.defineProperties || function () {
};
JSON = JSON || {
    stringify: function () {
        throw"JSON not implemented"
    }, parse: function () {
        throw"JSON not implemented"
    }
};
webapis.filesystem = (function () {
    var a = ["SUCCESS", "INVALID_VALUES_ERR", "IO_ERR", "NOT_SUPPORTED_ERR", "SECURITY_ERR", "UNKNOWN_ERR", "OP_ABORTED", "OP_FAILED"], d = ["Success", "Invalid values", "Input/output error", "Not supported", "Security error", "Unknown error", "Operation aborted", "Operation failed"], m = [], c = 65535, l = (function () {
        function o(p) {
            var r = null, q = null;
            if (!isNaN(Date.parse(p))) {
                return new Date(Date.parse(p))
            }
            if (!p || p.match(/[0-9]{4}(?:-[0-9]{2}){2} [0-9]{2}(?::[0-9]{2}){2}/) === null) {
                return false
            }
            r = p.split(/[ :-]/);
            q = new Date();
            q.setFullYear(r[0], r[1] - 1, r[2]);
            q.setHours(r[3], r[4], r[5]);
            if (q instanceof Date && q.toString() !== "Invalid Date") {
                return q
            }
            return null
        }

        return {
            validate: function (q, p) {
                if (p.name && q.name.match(new RegExp(p.name, "i")) === null) {
                    return false
                }
                if (p.startModified && o(q.modified) < p.startModified) {
                    return false
                }
                if (p.endModified && o(q.modified) > p.endModified) {
                    return false
                }
                if (p.startCreated && o(q.created) < p.startCreated) {
                    return false
                }
                if (p.endCreated && o(q.created) > p.endCreated) {
                    return false
                }
                return true
            }, build: function (q) {
                var p = {};
                if (!q) {
                    return null
                }
                p = {
                    name: q.name && q.name.replace(/\\%/g, "/").replace(/\./, "\\.").replace(/%/g, ".*").replace(/\//g, "%"),
                    startModified: o(q.startModified),
                    endModified: o(q.endModified),
                    startCreated: o(q.startCreated),
                    endCreated: o(q.endCreated)
                };
                if ((p.startModified && p.endModified && p.startModified > p.endModified) || (p.startCreated && p.endCreated && p.startCreated > p.endCreated)) {
                    p = null
                }
                return p
            }
        }
    }()), i = (function () {
        var p = {
            Delete: function (q, s, r) {
                if (r instanceof g) {
                    return i.finalize(s.id, false, [r])
                } else {
                    if (r && r.ErrorNumber) {
                        i.finalize(s.id, false, [(new g("Error: " + r.ErrorDescription, a[r.ErrorNumber]))]);
                        return false
                    } else {
                        if (q) {
                            i.finalize(s.id, false, [(new g("Error: " + d[q], a[q]))]);
                            return false
                        }
                    }
                }
                return i.finalize(s.id, true, [s.path])
            }, ListFiles: function (r, u, v) {
                var s = v && v.ListFiles || [], z = u && u.owner || {}, y = k(z.fullPath)[0], x = k(z.fullPath)[1], q = false, w = [], t = null;
                if (v.ErrorNumber == 2) {
                    return i.finalize(u.id, false, [(ErrorsHelper.createWebAPIException_byType("IOError"))])
                }
                if (r) {
                    return i.finalize(u.id, false, [(new g("Error: " + d[r], a[r]))])
                }
                if (!y) {
                    return i.finalize(u.id, false, [(new g("Error: " + v.ErrorDescription, a[v.ErrorNumber]))])
                }
                if (u.filter) {
                    q = l.build(u.filter)
                }
                t = setInterval(function () {
                    var B = "", A = null, C = null;
                    if (s.length < 1) {
                        clearInterval(t);
                        i.finalize(u.id, true, [w])
                    } else {
                        B = s.shift().ObjName;
                        try {
                            B = decodeURIComponent(escape(B))
                        } catch (D) {
                        }
                        A = i.sendRequest("FileStat", [y, x + "/" + B]);
                        if (A.ErrorNumber) {
                            A = {
                                Created: "virtual",
                                Description: "",
                                ErrorNumber: 0,
                                FileSize: -1,
                                IsDirectory: false,
                                IsFile: true,
                                Length: 0,
                                Modified: "",
                                Name: B,
                                Path: y + x + "/" + B,
                                ReadOnly: true,
                                RealPath: ""
                            }
                        }
                        try {
                            C = new j(A, z, u.mode);
                            if (!q || l.validate(C, q)) {
                                w.push(C)
                            }
                        } catch (D) {
                        }
                    }
                }, 0);
                return true
            }
        }, o = "FSAPI";
        return {
            fsapi: null, list: {}, add: function (s, r, q) {
                if (!q) {
                    s = s || new b();
                    if (!(r instanceof Array) || typeof r[0] !== "function") {
                        throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
                    } else {
                        s.successCB = r[0]
                    }
                    if (r.length > 1 && typeof r[1] === "function") {
                        s.errorCB = r[1]
                    }
                    if (!s.id) {
                        s.id = h()
                    }
                }
                this.list[s.id] = s;
                return s
            }, get: function (q) {
                return this.list[q]
            }, remove: function (q) {
                delete this.list[q]
            }, sendRequest: function (u, t, q) {
                var s = null, v = null;
                if (typeof u === "string" && !q) {
                    q = t;
                    t = u;
                    u = null
                }
                if (!(q instanceof Array)) {
                    q = [q]
                }
                q.unshift(o, t);
                s = webapis._plugin.apply(null, q);
                try {
                    s = JSON.parse(s)
                } catch (r) {
                }
                if (s.OperationId && u instanceof Array) {
                    if (u.length > 1) {
                        v = new b();
                        v.id = s.OperationId;
                        this.add(v, u)
                    } else {
                        if (typeof u[0] !== "function") {
                            v = this.get(u[0]);
                            if (v instanceof b) {
                                this.remove(v.id);
                                v.id = s.OperationId;
                                this.add(v, null, true)
                            } else {
                                throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
                            }
                        } else {
                            throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
                        }
                    }
                    return v
                }
                return s
            }, cancelRequest: function (s) {
                var r = this.get(s), q = null;
                if (isNaN(s)) {
                    q = new g("Operation aborted.", "OP_ABORTED")
                } else {
                    q = webapis._plugin(o, "CancelOperation", r.id)
                }
                return this.finalize(s, false, [q])
            }, init: function () {
                var q = this;
                if (this.fsapi === null) {
                    this.fsapi = webapis._plugin(o);
                    webapis._plugin(o, "SetWgtId", curWidget.id, location.hostname + location.pathname.substring(0, location.pathname.indexOf(curWidget.id)));
                    this.fsapi.OnEvent = function () {
                        q.onEvent.apply(q, arguments)
                    }
                }
            }, finalize: function (t, r, q) {
                var s = this.get(t);
                if (!s) {
                    return false
                }
                if (r === true) {
                    s.successCB.apply(null, q)
                } else {
                    if (s.errorCB !== null && r === false) {
                        s.errorCB.apply(null, q)
                    }
                }
                this.remove(t);
                s.cancel = function () {
                    console.log("Can't cancel, operation finalized.")
                };
                return true
            }, onEvent: function (q, r, s) {
                var u = null;
                u = this.get(r);
                try {
                    s = JSON.parse(s)
                } catch (t) {
                }
                if (u) {
                    if (typeof p[u.action] === "function") {
                        p[u.action](q, u, s)
                    } else {
                        if (q) {
                            this.finalize(u.id, false, [(new g("Error: " + d[q], a[q]))])
                        } else {
                            this.finalize(u.id, true, [])
                        }
                    }
                }
            }
        }
    }()), e = {
        get: function (q, p, r, o) {
            if (!r && !o) {
                return i.add(null, [q, p])
            } else {
                return i.sendRequest([q, p], r, o)
            }
        }
    };

    function h() {
        var o = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", p = "";

        function r() {
            return (0.5 - Math.random())
        }

        function q() {
            return (0.5 < Math.random())
        }

        do {
            p = o.split("").filter(q).sort(r).join("")
        } while (m.indexOf(p) > -1);
        m.push(p);
        return p
    }

    function k(p) {
        var q = (typeof p === "string") && p.replace(/"/g, "");
        var o = (typeof q === "string") && q.split("/") || [""];
        return [o.shift(), ((o.length) ? "/" + o.join("/").replace(/\/$/, "") : "")]
    }

    function b(q) {
        var p = this;
        this.id = q || null;
        this.successCB = null;
        this.errorCB = null;
        this.action = "";
        this.owner = null;
        function o() {
            return i.cancelRequest(p.id)
        }

        this.cancel = function () {
            return o()
        }
    }

    DOMException.INVALID_VALUES_ERR = 97;
    DOMException.IO_ERR = 98;
    DOMException.UNKNOWN_ERR = 99;
    function g(p, o) {
        this.name = "WACError";
        this.message = p || "No info";
        this.code = (isNaN(o)) ? DOMException[o] : o
    }

    g.prototype = new Error();
    g.prototype.constructor = g;
    function f(q, t, o) {
        var v = null, u = "", w = "", p = null, s = 0;
        if (!(q instanceof j) || !q.isFile) {
            throw ErrorsHelper.createWebAPIException_byType("IOError")
        }
        if (!t || t.match(/^[awr]$/i) === null) {
            throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
        }
        if (t.match(/^[aw]$/) && q.readOnly) {
            throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
        }
        t = t.toLowerCase();
        u = k(q.fullPath)[0];
        w = k(q.fullPath)[1];
        v = i.sendRequest("Open", [u, w, t]);
        if (v.ErrorNumber) {
            v.ErrorDescription = v.ErrorDescription || d[v.ErrorNumber] || "unknown error.";
            throw new g("Could not open file: " + v.ErrorDescription, a[v.ErrorNumber])
        } else {
            v = v.FileDescriptor
        }
        this.eof = false;
        this.position = s = 0;
        this.bytesAvailable = q.fileSize;
        if (t === "a") {
            this.position = s = q.fileSize;
            this.bytesAvailable = 0
        }
        function r() {
            var y = Array.prototype.slice.call(arguments), x = y.shift(), C = y.shift(), z = null, A = null, B = {
                seek: function (D) {
                    return i.sendRequest("Seek", [v, D])
                }, close: function () {
                    x.eof = true;
                    return i.sendRequest("Close", [v])
                }, read64: function (E) {
                    var D = null;
                    if (t !== "r") {
                        throw ErrorsHelper.createWebAPIException_byType("IOError")
                    }
                    if (x.eof) {
                        return ""
                    }
                    if (x.bytesAvailable === 0) {
                        x.eof = true;
                        x.bytesAvailable = -1;
                        return ""
                    }
                    if (E > x.bytesAvailable) {
                        E = x.bytesAvailable
                    }
                    D = i.sendRequest("Read64", [v, E]);
                    if (D && !D.ErrorNumber && D.Data) {
                        return D.Data
                    } else {
                        if (D && D.ErrorNumber) {
                            throw new g("Error: " + D.ErrorDescription, a[D.ErrorNumber])
                        }
                    }
                    return D
                }, write64: function (D) {
                    var E = null;
                    if (t.match(/^[aw]$/i) === null) {
                        throw ErrorsHelper.createWebAPIException_byType("IOError")
                    }
                    E = i.sendRequest("Write64", [v, D.length, D]);
                    if (E && !E.ErrorNumber && E.Size) {
                        return E.Size
                    } else {
                        if (E && E.ErrorNumber) {
                            throw new g("Error writing to file: " + E.ErrorDescription, a[E.ErrorNumber])
                        }
                    }
                    return E
                }
            };
            if (typeof C === "string" && typeof B[C] === "function") {
                if (x.position !== s) {
                    B.seek(x.position)
                }
                z = B[C].apply(null, y);
                if (x.eof === true) {
                    return z
                }
                A = i.sendRequest("Tell", [v]);
                if (!A.ErrorNumber) {
                    x.position = s = A.StreamPosition;
                    x.bytesAvailable = (q.fileSize < x.position) ? 0 : q.fileSize - x.position;
                    if (!x.bytesAvailable) {
                        x.bytesAvailable = -1;
                        x.eof = true
                    }
                } else {
                    x.eof = true;
                    x.bytesAvailable = -1;
                    x.position = s = q.fileSize
                }
            }
            return z
        }

        this.close = function () {
            return r(this, "close")
        };
        this.read = function (A) {
            var z = "", x = "", C = A, y = 0;
            do {
                x = r(this, "read64", C);
                try {
                    z += decodeURIComponent(escape(atob(x)));
                    C = A - z.length;
                    y = 0
                } catch (B) {
                    if (y > 5) {
                        throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
                    } else {
                        r(this, "seek", this.position - C);
                        C--;
                        y++
                    }
                }
            } while (C > 0 && this.bytesAvailable > 0);
            return z
        };
        this.readBytes = function (A) {
            var y = "", x = "", B = A;
            do {
                x = r(this, "read64", B);
                try {
                    y += atob(x);
                    B = A - y.length
                } catch (z) {
                    r(this, "seek", this.position - B);
                    B--
                }
            } while (B > 0 && this.bytesAvailable > 0);
            return Array.prototype.map.call(y, function (C) {
                return C.charCodeAt(0)
            })
        };
        this.readBase64 = function (x) {
            return r(this, "read64", (x < this.bytesAvailable ? x : this.bytesAvailable))
        };
        this.write = function (x) {
            return r(this, "write64", btoa(unescape(encodeURIComponent(x))))
        };
        this.writeBytes = function (y) {
            var x = Array.prototype.map.call(y, function (z) {
                if (isNaN(z) || z < 0 || z > 255) {
                    throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
                } else {
                    return String.fromCharCode(z)
                }
            }).join("");
            return r(this, "write64", btoa(x))
        };
        this.writeBase64 = function (x) {
            return r(this, "write64", x)
        }
    }

    var j = (function () {
        function y(B, C, D) {
            if (!B || B.ErrorNumber > 0) {
                throw new g("Error: " + B.ErrorDescription, a[B.ErrorNumber])
            }
            if (!D.match(/^[rw]+$/)) {
                throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
            }
            B.Path = B.Path.replace(/\/\.$/, "");
            B.Name = B.Name.replace(/\//, "");
            this.readOnly = B.ReadOnly || false;
            this.isFile = B.IsFile || false;
            this.isDirectory = B.IsDirectory || false;
            this.created = B.Created || undefined;
            this.modified = B.Modified || undefined;
            this.fileSize = B.FileSize || 0;
            this.length = B.Length || 0;
            this.parent = C || null;
            this.path = (B.Path.lastIndexOf("/") > -1) ? B.Path.substring(0, B.Path.lastIndexOf("/") + 1) : B.Path;
            this.name = (B.Path.lastIndexOf("/") > -1) ? B.Name : "";
            this.fullPath = B.Path || "";
            if (this.isDirectory) {
                this.createDirectory = function (J) {
                    var G = this, I = null, E = null, F = 0, H = s(J);
                    if (D.match(/w/i) === null || this.readOnly) {
                        throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.SECURITY_ERR)
                    }
                    if (!H) {
                        throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
                    }
                    E = H.split("/");
                    if (E.length && E[0].length) {
                        for (F = 0; F < E.length; F++) {
                            I = G.resolve(E[F]);
                            if (!I) {
                                G = r(E[F], "D", G, D)
                            } else {
                                G = I
                            }
                        }
                    }
                    return G
                };
                this.createFile = function (E) {
                    var F = this, G = s(E);
                    if (D.match(/w/i) === null || this.readOnly) {
                        throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.SECURITY_ERR)
                    }
                    if (!G) {
                        throw nErrorsHelper.createWebAPIException_byType("InvalidValuesError")
                    }
                    if (G.lastIndexOf("/") > -1) {
                        F = this.resolve(G.substring(0, G.lastIndexOf("/")))
                    }
                    return r(G.substring(G.lastIndexOf("/")), "F", F, D)
                };
                this.deleteDirectory = function (H, G, E, F) {
                    var J = null, I = this;
                    if (typeof G !== "function" && !F) {
                        F = E;
                        E = G;
                        G = function () {
                        }
                    }
                    J = e.get(H, G);
                    J.action = "Delete";
                    J.owner = this;
                    if (F === undefined) {
                        F = true
                    }
                    setTimeout(function () {
                        u(J, I, D, E, "D", F)
                    }, 0);
                    return J
                };
                this.deleteFile = function (G, F, E) {
                    var I = null, H = this;
                    I = e.get(G, F);
                    I.action = "Delete";
                    I.owner = this;
                    setTimeout(function () {
                        u(I, H, D, E, "F")
                    }, 0);
                    return I
                };
                this.copyTo = function (H, F, J, G, E) {
                    var K = null, I = this;
                    if (typeof F !== "function" && !E) {
                        E = G;
                        G = J;
                        J = F;
                        F = function () {
                        }
                    }
                    K = e.get(H, F);
                    K.action = "CopyTo";
                    K.owner = this;
                    setTimeout(function () {
                        z(K, I, J, G, E, D)
                    }, 0);
                    return K
                };
                this.moveTo = function (H, F, J, G, E) {
                    var K = null, I = this;
                    if (typeof F !== "function" && !E) {
                        E = G;
                        G = J;
                        J = F;
                        F = function () {
                        }
                    }
                    K = e.get(H, F);
                    K.action = "MoveTo";
                    K.owner = this;
                    setTimeout(function () {
                        z(K, I, J, G, E, D)
                    }, 0);
                    return K
                };
                this.resolve = function (G) {
                    var H = this, F = 0, I = null, E = null;
                    G = new String(G);
                    if (G.length === 0) {
                        return null
                    }
                    I = s(G);
                    if (I === false) {
                        alert("Path " + G + " contains illegal characters!");
                        return null
                    }
                    E = I.split("/");
                    if (E.length) {
                        for (F = 0; F < E.length && H; F++) {
                            H = q(E[F], H, D)
                        }
                    }
                    return H
                };
                this.listFiles = function (G, F, H) {
                    var I = null, E = null;
                    if (F && typeof F === "object" && !H) {
                        H = F;
                        F = null
                    }
                    I = e.get(G, F, "ListFiles", [k(this.fullPath)[0], k(this.fullPath)[1]]);
                    if (I instanceof b) {
                        I.action = "ListFiles";
                        I.owner = this;
                        I.filter = H;
                        I.mode = D;
                        return I
                    } else {
                        if (I.ErrorNumber) {
                            E = e.get(G, F);
                            setTimeout(function () {
                                p(I, E)
                            }, 10);
                            return E
                        } else {
                            return null
                        }
                    }
                }
            }
            Object.defineProperties(this, {
                readOnly: {writable: false},
                isFile: {writable: false},
                isDirectory: {writable: false},
                created: {writable: false},
                modified: {writable: false},
                fileSize: {writable: false},
                length: {writable: false},
                parent: {writable: false},
                path: {writable: false},
                name: {writable: false},
                fullPath: {writable: false}
            });
            Object.freeze(this)
        }

        function w(B) {
            return !B.match(/\/\.\.|\.\.\/|\.\/|^\.$|\?|\*/)
        }

        function s(B) {
            if (w(B)) {
                return B.replace(/\/$/, "")
            }
            return false
        }

        function o(B) {
            var C = i.sendRequest("FileStat", [B]);
            if (C && C.RealPath) {
                return C.RealPath.replace(/\/\.$/, "")
            }
            return ""
        }

        function A(B, D) {
            var C = ErrorsHelper.createWebAPIException_byType("IOError");
            if (typeof D === "function") {
                D(C);
                return null
            }
            throw C
        }

        function v() {
            throw ErrorsHelper.createWebAPIException_byType("IOError")
        }

        function p(C, B) {
            return i.finalize(B.id, false, [(new g("Error: " + C.ErrorDescription, a[C.ErrorNumber]))])
        }

        function t(D, C, B) {
            var F = null, I = "", J = 65535, E = null;
            if (B && !B.match(/utf[-]*8|raw/i)) {
                return i.finalize(D.id, false, [(ErrorsHelper.createWebAPIException_byType("InvalidValuesError"))])
            } else {
                if (!B || B.match(/utf-?8/i)) {
                    B = true
                } else {
                    B = false
                }
            }
            function G(K) {
                if (B) {
                    return F.read(K)
                } else {
                    return atob(F.readBase64(K))
                }
            }

            try {
                F = new f(C, "r", B)
            } catch (H) {
                return i.finalize(D.id, false, [H])
            }
            if (F) {
                try {
                    if (C.fileSize < J) {
                        I = G(C.fileSize);
                        F.close();
                        return i.finalize(D.id, true, [I])
                    } else {
                        D.cancel = function () {
                            clearInterval(E);
                            i.finalize(D.id, false, [(new g("Operation aborted.", "OP_ABORTED"))])
                        };
                        E = setInterval(function () {
                            try {
                                I += G(J)
                            } catch (K) {
                                clearInterval(E);
                                F.close();
                                K.message += "; Text read so far: " + I;
                                i.finalize(D.id, false, [K])
                            }
                            if (F.eof) {
                                clearInterval(E);
                                F.close();
                                i.finalize(D.id, true, [I])
                            }
                        }, 0)
                    }
                } catch (H) {
                    H.message += "; Text read so far: " + I;
                    F.close();
                    return i.finalize(D.id, false, [H])
                }
            }
            return false
        }

        function x(G, E, C, D) {
            var B = null;
            try {
                B = new f(E, C, D);
                i.finalize(G.id, true, [B])
            } catch (F) {
                i.finalize(G.id, false, [F])
            }
        }

        function z(F, D, C, L, I, H) {
            var E = [], B = [], J = k(D.fullPath)[1], K = k(D.fullPath)[0], G = null;
            if (H.match(/w/i) === null) {
                return i.finalize(F.id, false, [(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.SECURITY_ERR))])
            }
            if (D.isFile) {
                return i.finalize(F.id, false, [(ErrorsHelper.createWebAPIException_byType("IOError"))])
            }
            if (!w(L)) {
                return i.finalize(F.id, false, [(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_FOUND_ERR))])
            }
            E = k(C);
            B = k(L);
            if (E[0] !== K || E[1].match(new RegExp(J)) === null) {
                return i.finalize(F.id, false, [(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.SECURITY_ERR))])
            }
            if (!I) {
                G = i.sendRequest("FileStat", [B[0], B[1]]);
                if (!G.ErrorNumber) {
                    return i.finalize(F.id, false, [(ErrorsHelper.createWebAPIException_byType("IOError"))])
                }
            }
            G = i.sendRequest([F.id], F.action, [K, E[1], B[0], B[1]]);
            if (G.ErrorNumber) {
                i.onEvent(G.ErrorNumber, F.id, (new g("Error: " + G.ErrorDescription, a[G.ErrorNumber])));
                return false
            }
            return true
        }

        function u(E, C, H, L, K, D) {
            var B = (K === "D") ? "Directory" : "File", G = [], I = k(C.fullPath)[1], J = k(C.fullPath)[0], F = null;
            if (H.match(/w/i) === null || C.readOnly) {
                i.onEvent(true, E.id, (ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.SECURITY_ERR)));
                return false
            }
            if (!w(L)) {
                i.onEvent(true, E.id, (ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_FOUND_ERR)));
                return false
            }
            if (C.isFile) {
                i.onEvent(true, E.id, (ErrorsHelper.createWebAPIException_byType("IOError")));
                return false
            }
            if (K === "D" && !D && C.length) {
                i.onEvent(true, E.id, (ErrorsHelper.createWebAPIException_byType("IOError")));
                return false
            }
            G = k(L);
            if (G[0] !== J || G[1].match(new RegExp(I)) === null) {
                i.onEvent(true, E.id, (ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.SECURITY_ERR)));
                return false
            }
            E.path = L;
            F = i.sendRequest([E.id], "Delete", [J, G[1], K, "force"]);
            if (F.ErrorNumber) {
                i.onEvent(F.ErrorNumber, E.id, F);
                return false
            }
            return true
        }

        y.prototype.createDirectory = v;
        y.prototype.createFile = v;
        y.prototype.deleteDirectory = A;
        y.prototype.deleteFile = A;
        y.prototype.copyTo = A;
        y.prototype.moveTo = A;
        y.prototype.resolve = v;
        y.prototype.listFiles = A;
        y.prototype.openStream = function (D, B, C, F) {
            var G = null, E = this;
            if (typeof B != "function" && !F) {
                F = C;
                C = B;
                B = function () {
                }
            }
            G = e.get(D, B);
            setTimeout(function () {
                x(G, E, C, F)
            }, 0);
            return G
        };
        y.prototype.readAsText = function (C, B, E) {
            var F = null, D = this;
            if (typeof C !== "function" || (E && typeof E !== "string")) {
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
            }
            F = e.get(C, B);
            setTimeout(function () {
                t(F, D, E)
            }, 0);
            return F
        };
        function r(F, C, E, H) {
            var G = null, D = k(E.fullPath)[0], B = k(E.fullPath)[1];
            G = i.sendRequest("Create", [D, B + "/" + F, C]);
            if (!G.ErrorNumber) {
                G = i.sendRequest("FileStat", [D, B + "/" + F]);
                return new y(G, E, H)
            } else {
                throw new g("Error: " + G.ErrorDescription, a[G.ErrorNumber]);
                return false
            }
        }

        function q(C, D, E) {
            var B = i.sendRequest("FileStat", [k(D.fullPath)[0], k(D.fullPath)[1] + "/" + C]);
            if (B.ErrorNumber) {
                alert("Error resolving path " + D.fullPath + "/" + C + ": " + B.ErrorDescription);
                return null
            }
            return new y(B, D, E)
        }

        y.prototype.toURI = function () {
            var C = k(this.fullPath)[0], B = k(this.fullPath)[1].replace(/^\//, ""), D = o(C).replace(/^\//, "");
            if (C === "wgt-package") {
                return B
            }
            if (C.match(/wgt-private|w3/i)) {
                return "RootFS/" + this.fullPath
            }
            return "file:///" + escape(D + "/" + B)
        };
        y.prototype.toString = function () {
            return (this.isFile ? "File " : "Directory ") + this.fullPath + ", " + (this.fileSize ? "size: " + this.fileSize : "length: " + this.length)
        };
        return y
    }());

    function n(q, p, o, r) {
        var s = e.get(q, p);
        setTimeout(function () {
            var v, t;
            if (o === "wgt-package" && r === "rw") {
                i.finalize(s.id, false, [ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.SECURITY_ERR)])
            }
            i.init();
            v = i.sendRequest("FileStat", [o]);
            try {
                t = new j(v, null, r);
                i.finalize(s.id, true, [t])
            } catch (u) {
                i.finalize(s.id, false, [u])
            }
        }, 0);
        return s
    }

    return {
        maxPathLength: c, resolve: function (q, p, o, r) {
            if (typeof q !== "function") {
                throw ErrorsHelper.createWebAPIException_byType("InvalidValuesError")
            }
            if (typeof p === "string" && !r) {
                r = o;
                o = p
            }
            if (!o) {
                p(ErrorsHelper.createWebAPIException_byType("InvalidValuesError"));
                return null
            }
            return n(q, p, o, r)
        }, jasmine: {RequestManager: i, WACError: g, WACFile: j, FileStream: f, PendingOperation: b}
    }
}());
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
webapis.widgetevent = {};
webapis.widgetevent._eventListener = {};
webapis.widgetevent._listener = function (a) {
    alert("[WidgetEvent] Type : " + a.type);
    var b = webapis.widgetevent._eventListener[a.type];
    if (typeof b == "function") {
        b(a.data || null)
    } else {
        alert("[WidgetEvent] No event handler binded with this event : " + a.type)
    }
};
webapis.widgetevent._registerListener = function () {
    curWidget.onWidgetEvent = webapis.widgetevent._listener
};
webapis.widgetevent.setEventListener = function (a, b) {
    alert("[WidgetEvent] setEventListener(" + a + ")");
    webapis.widgetevent._eventListener[a] = b;
    webapis.widgetevent._registerListener()
};
webapis._plugin = function (m) {
    var b = webapis._plugin.getSEFAvailable();
    var j = Array.prototype.slice.call(arguments);
    var k = null;
    alert("[webapis] _plugin(" + j + ")");
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
    if (webapis._plugin.wrappedMethod[a]) {
        return webapis._plugin.wrappedMethod[a](k, b, j)
    }
    if (!b) {
        var f = null;
        if (typeof k[a] == "function") {
            j = j.slice(2);
            f = k[a].apply(k, j)
        } else {
            f = webapis._pluginDef.PLR_NOT_IMPLEMENT
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
        var e = ["TV", "TVMW", "NNavi", "Audio", "AppCommon", "FrontPanel", "ImageViewer", "Player", "AUI", "Storage", "Network", "Download", "Screen", "Time", "Video", "Window", "ExternalWidgetInterface", "FileSystem", "Gamepad", "Michrophone", "CustomDevice", "MIDIDevice", "RECOG", "AllShare"];
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
webapis._plugin.getSEFAvailable = function () {
    alert("webapis._plugin.getSEFAvailable()");
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
webapis._plugin.wrappedMethod = {
    GetVersion: function (c, d, b) {
        alert("[webapis] Wrapped Method GetVersion(" + c + ", " + d + ")");
        if (!d) {
            var a = c.GetPluginInfo(webapis._pluginDef.PL_CMN_INFO_VERSION);
            alert("\tLegacy returns " + a);
            return {isSEF: false, ver: a}
        } else {
            var a = c.Execute("GetVersion");
            alert("\tSEF returns " + a);
            return {isSEF: true, ver: a}
        }
    }
};
webapis._pluginDef = {
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
with (webapis._pluginDef) {
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
webapis.oci = {
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
    addPluginObject: function (g, d) {
        var b = "_plugin_" + d + "_";
        var c = "";
        var a = "_pluginObject" + g + "Container_";
        var f = document.createElement("div");
        f.id = a;
        f.style.position = "absolute";
        f.style.left = "0px";
        f.style.top = "0px";
        document.body.appendChild(f);
        var e = "opacity:0.0;width:0px;height:0px;";
        c = '<OBJECT id="' + b + g + '" classid="clsid:SAMSUNG-INFOLINK-SEF" style="' + e + '"></OBJECT>';
        f.innerHTML += c;
        return document.getElementById(b + g)
    },
    create: function (c, b) {
        var a = 0;
        if (c == null) {
            c = webapis.oci.addPluginObject("SEF", b);
            if (c != null) {
                a = c.Open(b, "1.00", "None");
                if (this.getConnectedDeviceInfo(c, 0) == window.webapis.oci.OCI_ERR) {
                    return window.webapis.oci.OCI_ERR
                }
            } else {
                return window.webapis.oci.OCI_ERR
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
        if (b == window.webapis.oci.OCI_ERR) {
            return null
        } else {
            if (b == 0 || b == 1) {
                return window.webapis.oci.OCI_ERR
            }
        }
        var d = b.split(window.webapis.oci.DELIMITER_FUNC_RESULT);
        var a = new window.webapis.oci.OCIDevInfo();
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
            return window.webapis.oci.OCI_ERR
        }
        return b
    },
    destroyDevice: function (b, a) {
        if (b != null) {
            ret = b.Execute("DestroyDevice", "-1", String(a));
            if (ret != window.webapis.oci.OCI_NO_ERR) {
            }
        }
        return
    },
    parseDeviceEvent: function (a) {
        var c = a.split(window.webapis.oci.DELIMITER_EVENT_PARAM);
        if (c != null) {
            var b = new window.webapis.oci.OCIDevInfo();
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
    setFilePath: function (i) {
        var j = window.location.search.split("modelid=");
        var g = j[1].split("&");
        var b = i.substring(7, i.length);
        var a = i.substring(0, 7);
        a = a.toLowerCase();
        if (a != "file://") {
            if (a == "http://") {
                return i
            } else {
                if (g[0] != "SDK" && a == "usb://s") {
                    b = "/dtv/usb/" + i.substring(6, i.length);
                    return b
                }
            }
            return null
        }
        if (b[0] == "/" || b.search(":") != -1 || b.indexOf("..") != -1) {
            alert("webapis :: absolute filepath is not supported");
            return null
        }
        var f = window.location.pathname;
        var d;
        if (g[0] == "SDK") {
            var h = window.navigator.platform;
            if (h.indexOf("Linux") != -1) {
                d = "Apps/" + curWidget.id
            } else {
                d = "apps/" + curWidget.id
            }
        } else {
            d = curWidget.id
        }
        var c = f.indexOf(d);
        if (c != -1) {
            var e = f.substring(0, c) + d;
            if (g[0] != "SDK") {
                if (webapis._plugin("FileSystem", "IsExistedPath", e + "_img")) {
                    e = e + "_img"
                }
            }
            e = decodeURI(e + "/" + b);
            return e
        }
        return null
    },
    destroy: function (a) {
        if (a != null) {
            a.Close()
        }
    }
};
webapis.gamepad = {
    MGR_EVENT_DEV_CONNECT: webapis.oci.EVENT_DEV_CONNECT,
    MGR_EVENT_DEV_DISCONNECT: webapis.oci.EVENT_DEV_DISCONNECT,
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
    ManagerCallback: null,
    SEFPlugin: null,
    ManagerEvent: function () {
        var c;
        var b;
        var a
    },
    getGamepads: function (a, b) {
        var d = 1;
        var c = webapis.oci.create(this.SEFPlugin, "Gamepad");
        if (this.SEFPlugin == null) {
            d = 2500;
            if (c != webapis.oci.OCI_ERR) {
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
                webapis.oci.getConnectedDevices(webapis.gamepad.SEFPlugin, webapis.gamepad.GamepadArray, webapis.gamepad.GamepadValidArray, a, webapis.gamepad.Gamepad)
            }, d)
        }
    },
    registerManagerCallback: function (a) {
        alert("[gamepad.js : registerManagerCallback]");
        if (typeof a == "function") {
            this.ManagerCallback = a
        }
    },
    callbackGamepads: function (e, c, a) {
        var f = _checkNumberType(e);
        switch (f) {
            case webapis.gamepad.MGR_EVENT_DEV_CONNECT:
            case webapis.gamepad.MGR_EVENT_DEV_DISCONNECT:
                var g = webapis.oci.parseDeviceEvent(c);
                var h = new webapis.gamepad.ManagerEvent();
                h.eventType = g.eventType;
                h.name = g.name;
                h.UID = g.UID;
                if (webapis.gamepad.ManagerCallback != null) {
                    webapis.gamepad.ManagerCallback(h)
                }
                if (f == webapis.gamepad.MGR_EVENT_DEV_DISCONNECT) {
                    webapis.oci.removeSpecificDevice(webapis.gamepad.SEFPlugin, g.UID, webapis.gamepad.GamepadArray, webapis.gamepad.GamepadValidArray)
                }
                return;
            default:
                var b = c.split(webapis.oci.DELIMITER_EVENT_PARAM);
                for (var d = 0; d < webapis.gamepad.GamepadArray.length; d++) {
                    if ((webapis.gamepad.GamepadArray[d].deviceID == Number(b[0])) && (webapis.gamepad.GamepadArray[d].deviceCallback != null)) {
                        webapis.gamepad.GamepadArray[d].gamepadEvent.time = Number(b[1]);
                        webapis.gamepad.GamepadArray[d].gamepadEvent.type = Number(b[2]);
                        webapis.gamepad.GamepadArray[d].gamepadEvent.code = Number(b[3]);
                        webapis.gamepad.GamepadArray[d].gamepadEvent.value = Number(b[4]);
                        webapis.gamepad.GamepadArray[d].deviceCallback(d, webapis.gamepad.GamepadArray[d].gamepadEvent)
                    }
                }
                return
        }
    },
    Gamepad: function (b, c) {
        this.uniqueID = b.UID;
        this.name = b.name;
        this.deviceID = c;
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
        this.GamepadEvent = function () {
            var g;
            var d;
            var e;
            var f
        };
        this.gamepadEvent = new this.GamepadEvent();
        this.gamepadEventArray = new Array(11);
        this.gamepadEventArray[0] = 0;
        for (var a = 1; a < 11; a++) {
            this.gamepadEventArray[a] = new this.GamepadEvent();
            this.gamepadEventArray[a].time = 0;
            this.gamepadEventArray[a].type = 0;
            this.gamepadEventArray[a].code = 0;
            this.gamepadEventArray[a].value = 0
        }
        this.GamepadABSValueRange = function () {
            var e;
            var d
        };
        this.gamepadRange = new this.GamepadABSValueRange();
        this.getInputEvent = function () {
            var e = webapis.gamepad.SEFPlugin.Execute("GetInputEvent", String(this.deviceID));
            if (e == webapis.oci.OCI_ERR || e == webapis.oci.OCI_ERR_INVALID_PARAM) {
                return null
            }
            var d = e.split(webapis.oci.DELIMITER_FUNC_RESULT);
            this.gamepadEvent.time = Number(d[0]);
            this.gamepadEvent.type = Number(d[1]);
            this.gamepadEvent.code = Number(d[2]);
            this.gamepadEvent.value = Number(d[3]);
            return this.gamepadEvent
        };
        this.playForceFeedback = function (f, e) {
            alert("playForceFeedback");
            if (typeof f == "undefined") {
                f = 1
            }
            if (typeof e == "undefined") {
                e = 100
            }
            var d = webapis.gamepad.SEFPlugin.Execute("PlayForceFeedback", String(this.deviceID), String(f), String(e));
            if (d != webapis.oci.OCI_NO_ERR) {
                return false
            }
            return true
        };
        this.stopForceFeedback = function () {
            alert("stopForceFeedback");
            var d = webapis.gamepad.SEFPlugin.Execute("StopForceFeedback", String(this.deviceID));
            if (d != webapis.oci.OCI_NO_ERR) {
                return false
            }
            return true
        };
        this.isForceFeedbackSupported = function () {
            alert("isForceFeedbackSupported");
            var d = webapis.gamepad.SEFPlugin.Execute("IsForceFeedbackSupported", String(this.deviceID));
            if (d == 0) {
                alert("[OCI]: ForceFeedback Not supported.");
                return false
            }
            alert("[OCI]: ForceFeedback Supported.");
            return true
        };
        this.getABSValueRange = function (e) {
            var f = webapis.gamepad.SEFPlugin.Execute("GetABSValueRange", String(this.deviceID), String(e));
            if (f == webapis.oci.OCI_ERR) {
                return null
            }
            var d = f.split(webapis.oci.DELIMITER_FUNC_RESULT);
            this.gamepadRange.maxValue = Number(d[0]);
            this.gamepadRange.minValue = Number(d[1]);
            return this.gamepadRange
        };
        this.setActive = function () {
            alert("setActive");
            var d = webapis.gamepad.SEFPlugin.Execute("SetActive", String(this.deviceID));
            if (d == 0) {
                alert("[OCI]: Can't set to be active.");
                return false
            }
            alert("[OCI]: Set to be active.");
            return true
        };
        this.setInactive = function () {
            alert("setInActive");
            webapis.gamepad.SEFPlugin.Execute("SetInactive", String(this.deviceID));
            return
        };
        this.getInputEventEx = function (e) {
            var g = webapis.gamepad.SEFPlugin.Execute("GetInputEventEx", String(this.deviceID), String(e));
            if (g == webapis.oci.OCI_ERR || g == webapis.oci.OCI_ERR_INVALID_PARAM) {
                return null
            }
            var d = g.split(webapis.oci.DELIMITER_FUNC_RESULT);
            var h = Number(d[0]);
            this.gamepadEventArray[0] = h;
            for (var f = 0; f < h; f++) {
                this.gamepadEventArray[f + 1].time = Number(d[f * 4 + 1]);
                this.gamepadEventArray[f + 1].type = Number(d[f * 4 + 2]);
                this.gamepadEventArray[f + 1].code = Number(d[f * 4 + 3]);
                this.gamepadEventArray[f + 1].value = Number(d[f * 4 + 4])
            }
            return this.gamepadEventArray
        };
        this.registerDeviceCallback = function (d) {
            if (typeof d == "function") {
                this.deviceCallback = d;
                webapis.gamepad.SEFPlugin.Execute("RegisterCallback", String(this.deviceID))
            } else {
                this.deviceCallback = null;
                webapis.gamepad.SEFPlugin.Execute("UnregisterCallback", String(this.deviceID))
            }
            return
        }
    },
    ends: function () {
        for (var a = 0; a < this.GamepadArray.length; a++) {
            this.GamepadValidArray[a] = false
        }
        this.removeGamepads()
    }
};
webapis.customdevice = {
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
    MGR_EVENT_DEV_SEARCHED: 160,
    MGR_EVENT_DEV_SEARCH_FINISHED: 161,
    MGR_EVENT_DEV_CONNECT_FAILED: 162,
    MGR_EVENT_DEV_PIN_REQUESTED: 171,
    DEV_EDU_DEVICE: 5,
    DEV_SMART_DEVICE: 33,
    DEV_BTSPP_DEVICE: 34,
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
    initCustomDevices: function () {
        var g = window.webapis.oci.create(this.SEFPlugin, "CustomDevice");
        if (g != window.webapis.oci.OCI_ERR) {
            if (this.SEFPlugin == null) {
                this.SEFPlugin = g;
                this.SEFPlugin.OnEvent = this.callbackCustomDevice;
                this.SEFPlugin.Execute("RegisterCallback", "-1");
                var c = "_plugin_";
                var d = "";
                var a = "_pluginObjectSEFContainer_";
                var f = document.createElement("div");
                f.id = a;
                f.style.position = "absolute";
                f.style.left = "0px";
                f.style.top = "0px";
                document.body.appendChild(f);
                var b = true;
                var e = b ? "position:absolute;display:block;width:0px;height:0px;" : "opacity:0.0;width:0px;height:0px;";
                d = '<OBJECT id="' + c + this.EduDevicePlugin + '" classid="clsid:SAMSUNG-INFOLINK-SEF" style="' + e + '"></OBJECT>';
                f.innerHTML += d;
                this.DocEduDevice = document.getElementById(c + this.EduDevicePlugin);
                return 1000
            } else {
                return 1
            }
        }
        return window.webapis.oci.OCI_ERR
    },
    getCustomDevices: function (a, b) {
        var c = 1;
        c = webapis.customdevice.initCustomDevices();
        if (typeof b == "undefined") {
            b = null
        }
        if (c == window.webapis.oci.OCI_ERR) {
            if (b != null) {
                b(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_FOUND_ERR))
            }
            return
        }
        if (typeof a != "function") {
            alert("[custom.js : getCustoms] successCallback is not a function type");
            if (b != null) {
            }
        } else {
            window.webapis.oci.getConnectedDevices(window.webapis.customdevice.SEFPlugin, window.webapis.customdevice.CustomDeviceArray, window.webapis.customdevice.CustomDeviceValidArray, a, window.webapis.customdevice.CustomDevice)
        }
    },
    searchDevices: function () {
        if (webapis.customdevice.initCustomDevices() == window.webapis.oci.OCI_ERR) {
            return false
        }
        return webapis.customdevice.SEFPlugin.Execute("SearchDevice", "-1")
    },
    stopSearchDevices: function () {
        if (webapis.customdevice.initCustomDevices() == window.webapis.oci.OCI_ERR) {
            return false
        }
        return webapis.customdevice.SEFPlugin.Execute("StopSearchDevice", "-1")
    },
    connectDevice: function (a) {
        var b = false;
        b = webapis.customdevice.SEFPlugin.Execute("ConnectDevice", "-1", a);
        return b
    },
    disconnectDevice: function (a) {
        var b = false;
        b = webapis.customdevice.SEFPlugin.Execute("DisconnectDevice", "-1", a);
        return b
    },
    setDevicePIN: function (a, c) {
        var b = false;
        b = webapis.customdevice.SEFPlugin.Execute("SetDevicePIN", "-1", a, c);
        return b
    },
    registerManagerCallback: function (a) {
        if (typeof a == "function") {
            CustomDeviceCallback = a
        }
    },
    callbackCustomDevice: function (c, k, h) {
        alert("[callbackCustoms] Event type = " + c);
        var g = Number(c);
        switch (g) {
            case window.webapis.customdevice.MGR_EVENT_DEV_STATUS:
                var n = k.split(",");
                window.webapis.customdevice.DocEduDevice.Open(window.webapis.customdevice.EduDevicePlugin, "1.000", "none");
                window.webapis.customdevice.DocEduDevice.Execute("Command", "Param1", n[2]);
                break;
            case window.webapis.customdevice.MGR_EVENT_DEV_DISCONNECT:
            case window.webapis.customdevice.MGR_EVENT_DEV_CONNECT:
                var l = new window.webapis.customdevice.ManagerEvent();
                var n = k.split(",");
                l.eventType = Number(c);
                l.UID = n[1];
                l.name = n[2];
                l.deviceType = Number(n[5]);
                if (CustomDeviceCallback != null) {
                    CustomDeviceCallback(l)
                }
                if (g == window.webapis.customdevice.MGR_EVENT_DEV_DISCONNECT) {
                    window.webapis.oci.removeSpecificDevice(window.webapis.customdevice.SEFPlugin, String(n[1]), window.webapis.customdevice.CustomDeviceArray, window.webapis.customdevice.CustomDeviceValidArray)
                }
                break;
            case window.webapis.customdevice.MGR_EVENT_DEV_CONNECT_FAILED:
                if (CustomDeviceCallback != null) {
                    var a = window.webapis.oci.parseDeviceEvent(k);
                    var m = new window.webapis.customdevice.ManagerEvent();
                    m.eventType = window.webapis.customdevice.MGR_EVENT_DEV_CONNECT_FAILED;
                    m.name = a.name;
                    m.UID = a.UID;
                    m.deviceType = a.deviceType;
                    CustomDeviceCallback(m)
                }
                break;
            case window.webapis.customdevice.MGR_EVENT_DEV_SEARCHED:
            case window.webapis.customdevice.MGR_EVENT_DEV_PIN_REQUESTED:
                if (CustomDeviceCallback != null) {
                    var a = window.webapis.oci.parseDeviceEvent(k);
                    var m = new window.webapis.customdevice.ManagerEvent();
                    m.eventType = Number(c);
                    m.name = a.name;
                    m.UID = a.UID;
                    m.deviceType = a.deviceType;
                    CustomDeviceCallback(m)
                }
                break;
            case window.webapis.customdevice.MGR_EVENT_DEV_SEARCH_FINISHED:
                if (CustomDeviceCallback != null) {
                    var m = new window.webapis.customdevice.ManagerEvent();
                    m.eventType = Number(c);
                    m.name = null;
                    m.UID = null;
                    m.deviceType = 0;
                    CustomDeviceCallback(m)
                }
                break;
            case window.webapis.customdevice.DEV_EVENT_JOINED_GROUP:
            case window.webapis.customdevice.DEV_EVENT_LEFT_GROUP:
                var j = new window.webapis.customdevice.CustomDeviceInfo();
                var f = new window.webapis.customdevice.CustomDeviceGroupInfo();
                var n = k.split("2ZQ");
                f.groupName = n[1];
                j.infoType = g;
                j.data = f;
                var e = 0;
                for (var e = 0; e < window.webapis.customdevice.CustomDeviceArray.length; e++) {
                    if ((window.webapis.customdevice.CustomDeviceArray[e].deviceID == Number(n[0])) && (window.webapis.customdevice.CustomDeviceArray[e].deviceCallback != null)) {
                        window.webapis.customdevice.CustomDeviceArray[e].deviceCallback(j)
                    }
                }
                break;
            case window.webapis.customdevice.DEV_EVENT_MESSAGE_RECEIVED:
                var j = new window.webapis.customdevice.CustomDeviceInfo();
                var d = new window.webapis.customdevice.CustomDeviceMessageInfo();
                var n = k.split("2ZQ");
                var b = n[0];
                d.message1 = n[1];
                j.infoType = g;
                for (var e = 0; e < window.webapis.customdevice.CustomDeviceArray.length; e++) {
                    if (window.webapis.customdevice.CustomDeviceArray[e].deviceCallback != null) {
                        if (window.webapis.customdevice.CustomDeviceArray[e].deviceID == Number(b)) {
                            if (window.webapis.customdevice.CustomDeviceArray[e].deviceType == window.webapis.customdevice.DEV_SMART_DEVICE) {
                                d.message2 = n[2]
                            } else {
                                if (window.webapis.customdevice.CustomDeviceArray[e].deviceType == window.webapis.customdevice.DEV_BTSPP_DEVICE) {
                                    d.message2 = Number(b)
                                }
                            }
                            j.data = d;
                            window.webapis.customdevice.CustomDeviceArray[e].deviceCallback(j)
                        }
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
            var e = window.webapis.customdevice.SEFPlugin.Execute("ReceiveCPMessage", String(this.deviceID));
            if (e == null || e == window.webapis.customdevice.ERROR_CODE_ERR) {
                return null
            }
            var d = new window.webapis.customdevice.CustomDeviceCustomDataInfo();
            var c = e.split("2ZQ");
            var d = new Array(2);
            d.command = Number(c[0]);
            d.data = String(c[1]);
            return d
        };
        this.sendMessage = function (d) {
            var c = window.webapis.customdevice.SEFPlugin.Execute("SendCPMessage", String(this.deviceID), d);
            if (c != window.webapis.customdevice.ERROR_CODE_NO_ERR) {
                alert("[sendMessage]: ERROR! = " + c);
                return window.webapis.customdevice.ERROR_CODE_ERR
            }
            return window.webapis.customdevice.ERROR_CODE_NO_ERR
        };
        this.broadcastMessage = function (d) {
            var c = window.webapis.customdevice.SEFPlugin.Execute("BroadcastCPMessage", String(this.deviceID), d);
            if (c != window.webapis.customdevice.ERROR_CODE_NO_ERR) {
                alert("[broadcastMessage]: ERROR! = " + c);
                return window.webapis.customdevice.ERROR_CODE_ERR
            }
            return window.webapis.customdevice.ERROR_CODE_NO_ERR
        };
        this.multicastMessage = function (d, e) {
            var c = window.webapis.customdevice.SEFPlugin.Execute("MulticastCPMessage", String(this.deviceID), d, e);
            if (c != window.webapis.customdevice.ERROR_CODE_NO_ERR) {
                alert("[multicastMessage]: ERROR! = " + c);
                return window.webapis.customdevice.ERROR_CODE_ERR
            }
            return window.webapis.customdevice.ERROR_CODE_NO_ERR
        };
        this.disconnectDevice = function () {
            var c = window.webapis.customdevice.SEFPlugin.Execute("DisconnectCPDevice", String(nDeviceID));
            if (c != window.webapis.customdevice.ERROR_CODE_NO_ERR) {
                alert("[disconnectDevice]: ERROR! = " + c);
                return window.webapis.customdevice.ERROR_CODE_ERR
            }
            return window.webapis.customdevice.ERROR_CODE_NO_ERR
        };
        this.registerDeviceCallback = function (c) {
            if (typeof c == "function") {
                this.deviceCallback = c;
                window.webapis.customdevice.SEFPlugin.Execute("RegisterCallback", String(this.deviceID))
            } else {
                this.deviceCallback = null;
                window.webapis.customdevice.SEFPlugin.Execute("UnregisterCallback", String(this.deviceID))
            }
        }
    },
};
webapis.mididevice = {
    MIDIDeviceArray: new Array(),
    MIDIDeviceValidArray: new Array(),
    MIDIDeviceCallback: null,
    SEFPlugin: null,
    MGR_EVENT_DEV_CONNECT: 11,
    MGR_EVENT_DEV_DISCONNECT: 12,
    MIDI_DEVICE_CONTROLLER: 1,
    MIDI_DEVICE_SYNTHESIZER: 2,
    MIDI_DEVICE_FILE: 4,
    MIDI_DEVICE_UNKNOWN: 8,
    MIDI_FILE_PLAY_SET_PARA_TEMPO: 0,
    MIDI_FILE_PLAY_SET_PARA_LOOP: 1,
    MIDI_STREAM_STATUS_FAIL: 0,
    MIDI_STREAM_STATUS_SUCCESS: 1,
    MIDI_STREAM_STATUS_BUSY: 2,
    MIDI_EVENT_NOTE_ON: 6,
    MIDI_EVENT_NOTE_OFF: 7,
    MIDI_EVENT_CONTROL_CHANGE: 10,
    MIDI_EVENT_PROGRAM_CHANGE: 11,
    MIDI_EVENT_CHANNEL_PRESSURE: 12,
    MIDI_EVENT_PITCH_BEND: 13,
    MIDI_CC_BANK_SELECT_MSB: 0,
    MIDI_CC_MODULATION: 1,
    MIDI_CC_MODULATION_MSB: 1,
    MIDI_CC_BREATH_CONTROLLER: 2,
    MIDI_CC_BREATH_CONTROLLER_MSB: 2,
    MIDI_CC_FOOT_CONTROLLER: 4,
    MIDI_CC_FOOT_CONTROLLER_MSB: 4,
    MIDI_CC_PORTAMENTO_TIME: 5,
    MIDI_CC_PORTAMENTO_TIME_MSB: 5,
    MIDI_CC_VOLUME: 7,
    MIDI_CC_CHANNEL_VOLUME_MSB: 7,
    MIDI_CC_BALANCE: 8,
    MIDI_CC_BALANCE_MSB: 8,
    MIDI_CC_PANNING: 10,
    MIDI_CC_PAN_MSB: 10,
    MIDI_CC_EXPRESS: 11,
    MIDI_CC_EXPRESSION_CONTROLLER_MSB: 11,
    MIDI_CC_BANK_SELECT: 32,
    MIDI_CC_BANK_SELECT_LSB: 32,
    MIDI_CC_MODULATION_LSB: 33,
    MIDI_CC_BREATH_CONTROLLER_LSB: 34,
    MIDI_CC_FOOT_CONTROLLER_LSB: 36,
    MIDI_CC_PORTAMENTO_TIME_LSB: 37,
    MIDI_CC_CHANNEL_VOLUME_LSB: 39,
    MIDI_CC_BALANCE_LSB: 40,
    MIDI_CC_PAN_LSB: 42,
    MIDI_CC_EXPRESSION_CONTROLLER_LSB: 43,
    MIDI_CC_SUSTAIN: 64,
    MIDI_CC_PORTAMENTO: 65,
    MIDI_CC_SOSTENUTO: 66,
    MIDI_CC_SOFT_PEDAL: 67,
    MIDI_CC_HOLD_2: 69,
    MIDI_CC_EXTERNAL_EFFECT_DEPTH: 91,
    MIDI_CC_TREMOLO_DEPTH: 92,
    MIDI_CC_CHORUS_DEPTH: 93,
    MIDI_CC_CELESTE_DEPTH: 94,
    MIDI_CC_PHASER_DEPTH: 95,
    MIDI_CC_RESET_CONTROLLER: 121,
    MIDI_CC_ALL_NOTE_OFF: 123,
    ManagerEvent: function () {
        var d;
        var f;
        var a;
        var c;
        var b;
        var e
    },
    MIDIDeviceInfo: function () {
        var a;
        var c;
        var b
    },
    MIDIControlMessage: function () {
        var b;
        var d;
        var c;
        var a
    },
    MIDIVoiceMessage: function () {
        var c;
        var a;
        var b;
        var d
    },
    MIDIDeviceEventInfo: function () {
        var a;
        var c;
        var b
    },
    getMIDIDevices: function (a, b) {
        var d = 1;
        var c = window.webapis.oci.create(this.SEFPlugin, "MIDIDevice");
        if (this.SEFPlugin == null) {
            d = 1000;
            if (c != window.webapis.oci.OCI_ERR) {
                this.SEFPlugin = c;
                this.SEFPlugin.OnEvent = this.callbackMIDIDevice;
                this.SEFPlugin.Execute("RegisterCallback", "-1")
            }
        }
        if (typeof b == "undefined") {
            b = null
        }
        if (typeof a != "function") {
            alert("[midi.js : getMIDIs] successCallback is not a function type");
            if (b != null) {
            }
        } else {
            window.webapis.oci.getConnectedDevices(window.webapis.mididevice.SEFPlugin, window.webapis.mididevice.MIDIDeviceArray, window.webapis.mididevice.MIDIDeviceValidArray, a, window.webapis.mididevice.MIDIDevice)
        }
    },
    startStream: function (c, e) {
        if (c.deviceName == undefined) {
            c.deviceName = ""
        }
        if (e.deviceName == undefined) {
            e.deviceName = ""
        }
        if (c.deviceID == undefined) {
            c.deviceID = 0
        }
        if (e.deviceID == undefined) {
            e.deviceID = 0
        }
        if (c.deviceType == window.webapis.mididevice.MIDI_DEVICE_FILE) {
            c.deviceName = webapis.oci.setFilePath(c.deviceName)
        }
        if (e.deviceType == window.webapis.mididevice.MIDI_DEVICE_FILE) {
            e.deviceName = webapis.oci.setFilePath(e.deviceName)
        }
        var d = String(c.deviceName) + "," + String(c.deviceID) + "," + String(c.deviceType);
        var a = String(e.deviceName) + "," + String(e.deviceID) + "," + String(e.deviceType);
        var b = window.webapis.mididevice.SEFPlugin.Execute("StartStream", String("-1"), d, a);
        return b
    },
    pauseStream: function (c, e) {
        if (c.deviceName == undefined) {
            c.deviceName = ""
        }
        if (e.deviceName == undefined) {
            e.deviceName = ""
        }
        if (c.deviceID == undefined) {
            c.deviceID = 0
        }
        if (e.deviceID == undefined) {
            e.deviceID = 0
        }
        if (c.deviceType == window.webapis.mididevice.MIDI_DEVICE_FILE) {
            c.deviceName = webapis.oci.setFilePath(c.deviceName)
        }
        var d = String(c.deviceName) + "," + String(c.deviceID) + "," + String(c.deviceType);
        var a = String(e.deviceName) + "," + String(e.deviceID) + "," + String(e.deviceType);
        var b = window.webapis.mididevice.SEFPlugin.Execute("PauseStream", String("-1"), d, a);
        return b
    },
    stopStream: function (c, e) {
        var b = true;
        if (c.deviceName == undefined) {
            c.deviceName = ""
        }
        if (e.deviceName == undefined) {
            e.deviceName = ""
        }
        if (c.deviceID == undefined) {
            c.deviceID = 0
        }
        if (e.deviceID == undefined) {
            e.deviceID = 0
        }
        if (c.deviceType == window.webapis.mididevice.MIDI_DEVICE_FILE) {
            c.deviceName = webapis.oci.setFilePath(c.deviceName)
        }
        var d = String(c.deviceName) + "," + String(c.deviceID) + "," + String(c.deviceType);
        var a = String(e.deviceName) + "," + String(e.deviceID) + "," + String(e.deviceType);
        if (window.webapis.mididevice.SEFPlugin.Execute("StopStream", String("-1"), d, a) != 0) {
            b = false
        }
        return b
    },
    pauseStream: function (c, e) {
        var b = true;
        if (c.deviceName == undefined) {
            c.deviceName = ""
        }
        if (e.deviceName == undefined) {
            e.deviceName = ""
        }
        if (c.deviceID == undefined) {
            c.deviceID = 0
        }
        if (e.deviceID == undefined) {
            e.deviceID = 0
        }
        if (c.deviceType == window.webapis.mididevice.MIDI_DEVICE_FILE) {
            c.deviceName = webapis.oci.setFilePath(c.deviceName)
        }
        var d = String(c.deviceName) + "," + String(c.deviceID) + "," + String(c.deviceType);
        var a = String(e.deviceName) + "," + String(e.deviceID) + "," + String(e.deviceType);
        if (window.webapis.mididevice.SEFPlugin.Execute("PauseStream", String("-1"), d, a) != 0) {
            b = false
        }
        return b
    },
    getFilePlayStatus: function () {
        var a = window.webapis.mididevice.SEFPlugin.Execute("GetFilePlayStatus", String("-1"), String(""), String(""));
        return a
    },
    setFilePlayOption: function (b, a) {
        var c = window.webapis.mididevice.SEFPlugin.Execute("SetFilePlayPara", String("-1"), b, a);
        return c
    },
    registerManagerCallback: function (a) {
        if (typeof a == "function") {
            MIDIDeviceCallback = a
        }
    },
    callbackMIDIDevice: function (a, h, g) {
        var f = Number(a);
        switch (f) {
            case window.webapis.mididevice.MGR_EVENT_DEV_DISCONNECT:
            case window.webapis.mididevice.MGR_EVENT_DEV_CONNECT:
                var e = new window.webapis.mididevice.ManagerEvent();
                var m = h.split(",");
                e.eventType = Number(a);
                e.uniqueID = m[1];
                e.UID = m[1];
                e.deviceName = m[2];
                e.name = m[2];
                e.deviceType = Number(m[5]);
                if (MIDIDeviceCallback != null) {
                    MIDIDeviceCallback(e)
                }
                if (f == window.webapis.mididevice.MGR_EVENT_DEV_DISCONNECT) {
                    window.webapis.oci.removeSpecificDevice(window.webapis.mididevice.SEFPlugin, String(m[1]), window.webapis.mididevice.MIDIDeviceArray, window.webapis.mididevice.MIDIDeviceValidArray)
                }
                break;
            case (window.webapis.mididevice.MIDI_EVENT_NOTE_ON + 10):
            case (window.webapis.mididevice.MIDI_EVENT_NOTE_OFF + 10):
                var l = new window.webapis.mididevice.MIDIDeviceEventInfo();
                var k = new window.webapis.mididevice.MIDIVoiceMessage();
                var d = g.split(",");
                k.channel = d[0];
                k.note = d[1];
                k.velocity = d[2];
                k.duration = d[3];
                l.eventType = (f - 10);
                l.eventData = k;
                l.message = k;
                var c = 0;
                for (c = 0; c < window.webapis.mididevice.MIDIDeviceArray.length; c++) {
                    if ((window.webapis.mididevice.MIDIDeviceArray[c].deviceID == Number(h)) && (window.webapis.mididevice.MIDIDeviceArray[c].deviceCallback != null)) {
                        window.webapis.mididevice.MIDIDeviceArray[c].deviceCallback(l)
                    }
                }
                break;
            case (window.webapis.mididevice.MIDI_EVENT_CONTROL_CHANGE + 10):
            case (window.webapis.mididevice.MIDI_EVENT_PITCH_BEND + 10):
            case (window.webapis.mididevice.MIDI_EVENT_PROGRAM_CHANGE + 10):
            case (window.webapis.mididevice.MIDI_EVENT_CHANNEL_PRESSURE + 10):
            case (window.webapis.mididevice.MIDI_EVENT_PITCH_BEND + 10):
                var l = new window.webapis.mididevice.MIDIDeviceEventInfo();
                var b = new window.webapis.mididevice.MIDIControlMessage();
                var j = g.split(",");
                b.channel = j[0];
                b.parameter = j[1];
                b.value = j[2];
                b.extra = j[3];
                l.eventType = (f - 10);
                l.eventData = b;
                l.message = b;
                var c = 0;
                for (c = 0; c < window.webapis.mididevice.MIDIDeviceArray.length; c++) {
                    if ((window.webapis.mididevice.MIDIDeviceArray[c].deviceID == Number(h)) && (window.webapis.mididevice.MIDIDeviceArray[c].deviceCallback != null)) {
                        window.webapis.mididevice.MIDIDeviceArray[c].deviceCallback(l)
                    }
                }
                break;
            default:
                alert("[callbackMIDIDevice] unknown device event");
                break
        }
    },
    MIDIDevice: function (a, b) {
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
        this.getInformation = function (c, d) {
            if (d.extra == undefined) {
                d.extra = ""
            }
            if (d.value == undefined) {
                d.value = 0
            }
            var e = String(d.channel) + "," + String(d.parameter) + "," + String(d.value) + "," + String(d.extra);
            var f = window.webapis.mididevice.SEFPlugin.Execute("GetInformation", String(this.deviceID), String(c), e);
            return f
        };
        this.sendMessage = function (d, e) {
            var f = null;
            if ((d == window.webapis.mididevice.MIDI_EVENT_NOTE_ON) || (d == window.webapis.mididevice.MIDI_EVENT_NOTE_OFF)) {
                if (e.duration == undefined) {
                    e.duration = 0
                }
                f = String(e.channel) + "," + String(e.note) + "," + String(e.velocity) + "," + String(e.duration)
            } else {
                if (e.extra == undefined) {
                    e.extra = ""
                }
                if (e.channel == undefined) {
                    e.channel = 0
                }
                if (e.value == undefined) {
                    e.value = 0
                }
                f = String(e.channel) + "," + String(e.parameter) + "," + String(e.value) + "," + String(e.extra)
            }
            var c = window.webapis.mididevice.SEFPlugin.Execute("SendMessage", String(this.deviceID), String(d), f);
            if (c != false) {
                alert("[sendMessage]: ERROR! = " + c);
                return false
            }
            return true
        };
        this.loadSoundFontFile = function (d) {
            d = webapis.oci.setFilePath(d);
            var c = window.webapis.mididevice.SEFPlugin.Execute("LoadSoundFontFile", String(this.deviceID), String(d), String(0));
            return c
        };
        this.unloadSoundFontFile = function (c) {
            var d = window.webapis.mididevice.SEFPlugin.Execute("UnloadSoundFontFile", String(this.deviceID), String(c), String(0));
            return d
        };
        this.getSoundFontInstruments = function (d, g, f) {
            var e = window.webapis.mididevice.SEFPlugin.Execute("GetSoundFontIntruments", String(this.deviceID), String(d), String(g), String(f));
            if (e != null) {
                var c = e.split(",");
                c.pop();
                return c
            }
            return e
        };
        this.registerDeviceCallback = function (c) {
            if (typeof c == "function") {
                this.deviceCallback = c;
                window.webapis.mididevice.SEFPlugin.Execute("RegisterCallback", String(this.deviceID))
            } else {
                this.deviceCallback = null;
                window.webapis.mididevice.SEFPlugin.Execute("UnregisterCallback", String(this.deviceID))
            }
        }
    },
};
webapis.printerdevice = {
    PRINTER_EVENT_DEV_CONNECT: 11,
    PRINTER_EVENT_DEV_DISCONNECT: 12,
    PRINTER_EVENT_DEV_STATUS: 13,
    PRINTER_EVENT_DEV_SEARCH_BEGINING: 21,
    PRINTER_EVENT_DEV_SEARCH_COMPLETED: 22,
    PRINTER_EVENT_DEV_CONNECT_SUCCESS: 41,
    PRINTER_EVENT_DEV_CONNECT_FAIL: 42,
    PRINTER_EVENT_DEV_CONNECT_CANCELED: 43,
    PRINTER_EVENT_DEV_CONNECT_UNSUPPORTED: 44,
    PRINTER_EVENT_DEV_DISCONNECT_SUCCESS: 51,
    PRINTER_EVENT_DEV_DISCONNECT_FAIL: 52,
    PRINTER_EVENT_PRINTER_STATUS: 500,
    PRINTER_EVENT_PRINTER_MANAGER_SEARCH_DATA: 1000,
    PRINTER_EVENT_PRINTER_MANAGER_SEARCH_END: 1001,
    PRINTER_EVENT_PRINTER_MANAGER_SEARCH_ERR: 1002,
    PRINTER_PAPER_NONE: -1,
    PRINTER_PAPER_MIN: 0,
    PRINTER_PAPER_A4: 0,
    PRINTER_PAPER_LETTER: 1,
    PRINTER_PAPER_LEGAL: 2,
    PRINTER_PAPER_OFICIO: 3,
    PRINTER_PAPER_FOLIO: 4,
    PRINTER_PAPER_B5ENV: 5,
    PRINTER_PAPER_JISB5: 6,
    PRINTER_PAPER_STATEMENT: 7,
    PRINTER_PAPER_EXEC: 8,
    PRINTER_PAPER_A5: 9,
    PRINTER_PAPER_A6: 10,
    PRINTER_PAPER_MONARCH: 11,
    PRINTER_PAPER_COM10: 12,
    PRINTER_PAPER_DL: 13,
    PRINTER_PAPER_C5: 14,
    PRINTER_PAPER_C6ENV: 15,
    PRINTER_PAPER_ENV_NO9: 16,
    PRINTER_PAPER_ENV_PERSONAL: 17,
    PRINTER_PAPER_BOARDERLESS_3_5X5IN: 18,
    PRINTER_PAPER_BOARDERLESS_4X6IN: 19,
    PRINTER_PAPER_BOARDERLESS_5X7IN: 20,
    PRINTER_PAPER_MAX: 21,
    PRINTER_COLORMODE_MONO: 0,
    PRINTER_COLORMODE_COLOR: 1,
    PRINTER_ORIENTATION_PORTRAINT: 0,
    PRINTER_ORIENTATION_LANDSCAPE: 1,
    PRINTER_STATE_NOTREADY: 0,
    PRINTER_STATE_READY: 1,
    PRINTER_PRIORITY_NORMAL: 0,
    PRINTER_PRIORITY_DEFAULT: 1,
    PRINTER_STATUS_PREPARING: 0,
    PRINTER_STATUS_START_JOB: 1,
    PRINTER_STATUS_START_PAGE: 2,
    PRINTER_STATUS_PRINTING_PAGE: 3,
    PRINTER_STATUS_COMPLETED_PAGE: 4,
    PRINTER_STATUS_COMPLETED_JOB: 5,
    PRINTER_STATUS_CANCELED: 6,
    PRINTER_STATUS_ERROR: 7,
    DELIMITER_FUNC_PARAM: "|",
    DELIMITER_FUNC_RESULT: ",",
    DELIMITER_EVENT_PARAM: ",",
    SEFPlugin: null,
    PrinterDeviceCallback: null,
    initPrinter: function () {
        alert("[OCI]: initPrinter()");
        var a = 0;
        this.SEFPlugin = document.getElementById("PluginObjectSEF");
        if (this.SEFPlugin == null) {
            alert("[OCI]: ERROR! gSEF = null.");
            return window.webapis.oci.OCI_ERR
        }
        a = this.SEFPlugin.Open("Printer", "2.00", "None");
        if (a == 0) {
            alert("[OCI]: ERROR! Can't open empPrinter.");
            return window.webapis.oci.OCI_ERR
        }
        this.SEFPlugin.OnEvent = this.callbackPrinterDevice;
        this.SEFPlugin.Execute("RegisterCallback", "-1");
        return window.webapis.oci.OCI_NO_ERR
    },
    finalizePrinter: function () {
        alert("[OCI]: finalizePrinter()");
        if (this.SEFPlugin == null) {
            alert("[OCI]: SEFPlugin = null.");
            return
        }
        unRegisterManagerCallback();
        this.SEFPlugin.Close();
        return
    },
    registerManagerCallback: function (a) {
        if (typeof a == "function") {
            PrinterDeviceCallback = a
        } else {
            PrinterDeviceCallback = null
        }
    },
    unRegisterManagerCallback: function () {
        alert("[OCI]: OCI_UnRegisterManagerCallback()");
        this.SEFPlugin.Execute("UnregisterCallback", "-1");
        return
    },
    getConnectedDeviceInfo: function (a) {
        var b = this.SEFPlugin.Execute("GetConnectedDeviceInfo", "-1", String(a));
        if (b == window.webapis.oci.OCI_ERR) {
            alert("[OCI]: ERROR! ret = window.webapis.oci.OCI_ERR");
            return null
        }
        var c = b.split(this.DELIMITER_FUNC_RESULT);
        return c
    },
    searchPrinterDevice: function (a) {
        alert("[OCI]: OCI_SearchPrinterDevice()");
        this.SEFPlugin.Execute("SearchPrinterDevice", "-1", a);
        return
    },
    stopPrinterDeviceSearch: function () {
        alert("[OCI]: OCI_StopPrinterDeviceSearch()");
        this.SEFPlugin.Execute("StopPrinterDeviceSearch", "-1");
        return
    },
    connectPrinterDevice: function (b, a) {
        alert("[OCI]: OCI_ConnectPrinterDevice()");
        this.SEFPlugin.Execute("ConnectPrinterDevice", "-1", b, a);
        return
    },
    disconnectPrinterDevice: function (a) {
        alert("[OCI]: OCI_DisconnectPrinterDevice()");
        this.SEFPlugin.Execute("DisconnectPrinterDevice", "-1", a);
        return
    },
    setDefaultPrinterDevice: function (a) {
        alert("[OCI]: OCI_SetDefaultPrinterDevice()");
        this.SEFPlugin.Execute("SetDefaultPrinterDevice", "-1", a);
        return
    },
    createDevice: function (a) {
        alert("[OCI]: OCI_CreateDevice()");
        var b = this.SEFPlugin.Execute("CreateDevice", "-1", a);
        if (b < 0) {
            alert("[OCI]: ERROR! nDeviceID = " + b);
            return -1
        }
        return b
    },
    destroyDevice: function (b) {
        alert("[OCI]: OCI_destroyDevice()");
        var a = this.SEFPlugin.Execute("DestroyDevice", "-1", String(b));
        if (a != OCI_NO_ERR) {
            alert("[OCI]: ERROR! destroyDevice(" + b + ") = " + a)
        }
        return
    },
    registerDeviceCallback: function (a) {
        alert("[OCI]: OCI_RegisterDeviceCallback()");
        this.SEFPlugin.Execute("RegisterCallback", a);
        return
    },
    unregisterDeviceCallback: function (a) {
        alert("[OCI]: OCI_UnRegisterDeviceCallback()");
        this.SEFPlugin.Execute("UnregisterCallback", a);
        return
    },
    startPrinting: function (a, b) {
        alert("[OCI]: OCI_StartPrinting()");
        b = webapis.oci.setFilePath(b);
        this.SEFPlugin.Execute("StartPrinting", a, b);
        return
    },
    cancelPrinting: function (a) {
        alert("[OCI]: OCI_CancelPrinting()");
        this.SEFPlugin.Execute("CancelPrinting", a);
        return
    },
    setPrintingOption: function (a, c) {
        alert("[OCI]: OCI_SetPrintingOption() " + c);
        var b = this.SEFPlugin.Execute("SetPrintingOption", a, c);
        alert("[OCI]: OCI_SetPrintingOption ret" + b);
        return
    },
    getPrintingOption: function (a) {
        alert("[OCI]: OCI_GetPrintingOption()");
        var b = this.SEFPlugin.Execute("GetPrintingOption", a);
        if (b == window.webapis.oci.OCI_ERR) {
            alert("[OCI]: ERROR! ret = window.webapis.oci.OCI_ERR");
            return null
        }
        var c = null;
        if (typeof b == "string") {
            var c = b.split(this.DELIMITER_FUNC_RESULT)
        }
        return c
    },
    getPrinterPriority: function (a) {
        alert("[OCI]: OCI_GetPrinterPriority()");
        var b = this.SEFPlugin.Execute("GetPrinterPriority", a);
        return b
    },
    getPrinterState: function (a) {
        alert("[OCI]: OCI_GetPrinterState(): " + a);
        var b = this.SEFPlugin.Execute("GetPrinterState", a);
        return b
    },
    getPaperSizeList: function (a) {
        alert("[OCI]: OCI_GetPaperSizeList()");
        var b = this.SEFPlugin.Execute("GetPaperSizeList", a);
        if (b == window.webapis.oci.OCI_ERR) {
            alert("[OCI]: ERROR! ret = OCI_ERR");
            return null
        }
        var c = [];
        if (typeof b == "string") {
            c = b.split(this.DELIMITER_FUNC_RESULT)
        }
        return c
    },
    callbackPrinterDevice: function (c, b, a) {
        PrinterDeviceCallback(c, b, a)
    }
};
webapis.nservice = {
    NServiceDeviceArray: new Array(),
    NServiceDeviceValidArray: new Array(),
    NServiceDeviceOnlyArray: new Array(),
    NServiceDeviceCallback: null,
    SEFPlugin: null,
    ERROR_CODE_NO_ERR: 0,
    ERROR_CODE_ERR: 9999,
    DEV_EVENT_MESSAGE_RECEIVED: 150,
    DEV_EVENT_JOINED_GROUP: 151,
    DEV_EVENT_LEFT_GROUP: 152,
    MGR_EVENT_DEV_CONNECT: 11,
    MGR_EVENT_DEV_DISCONNECT: 12,
    MGR_EVENT_DEV_STATUS: 13,
    DEV_SMART_DEVICE: 33,
    ManagerEvent: function () {
        var b;
        var d;
        var a;
        var c
    },
    NServiceDeviceEventInfo: function () {
        var a;
        var b
    },
    NServiceDeviceMessageInfo: function () {
        var b;
        var a
    },
    NServiceDeviceGroupInfo: function () {
        var a;
        this.getMembers = function () {
            throw ErrorsHelper.createWebAPIException_byType("NotSupportedError");
            return new Array()
        }, this.leave = function (c, b) {
            throw ErrorsHelper.createWebAPIException_byType("NotSupportedError")
        }
    },
    getNServiceDevices: function (a, b) {
        var d = 1;
        var c = window.webapis.oci.create(this.SEFPlugin, "CustomDevice");
        if (this.SEFPlugin == null) {
            d = 1000;
            if (c != window.webapis.oci.OCI_ERR) {
                this.SEFPlugin = c;
                this.SEFPlugin.OnEvent = this.callbackNServiceDevice;
                this.SEFPlugin.Execute("RegisterCallback", "-1")
            }
        }
        if (typeof b == "undefined") {
            b = null
        }
        if (typeof a != "function") {
            alert("[getNServiceDevices] successCallback is not a function type");
            if (b != null) {
            }
        } else {
            window.webapis.oci.getConnectedDevices(window.webapis.nservice.SEFPlugin, window.webapis.nservice.NServiceDeviceArray, window.webapis.nservice.NServiceDeviceValidArray, window.webapis.nservice.getNServiceDevicesOnly, window.webapis.nservice.NServiceDevice);
            a(window.webapis.nservice.NServiceDeviceOnlyArray)
        }
    },
    getNServiceDevicesOnly: function (c) {
        var b = window.webapis.nservice.NServiceDeviceOnlyArray.length;
        for (var a = 0; a < b; a++) {
            window.webapis.nservice.NServiceDeviceOnlyArray.pop()
        }
        for (var a = 0; a < c.length; a++) {
            if (c[a] != null && c[a].getType() == window.webapis.nservice.DEV_SMART_DEVICE) {
                window.webapis.nservice.NServiceDeviceOnlyArray.push(c[a])
            }
        }
    },
    broadcastMessage: function (b) {
        var c = window.webapis.nservice.ERROR_CODE_NO_ERR;
        var a = 0;
        if (window.webapis.nservice.NServiceDeviceArray.length > 0) {
            if (window.webapis.nservice.NServiceDeviceArray[a].broadcastMessage(b) != window.webapis.nservice.ERROR_CODE_NO_ERR) {
                c = window.webapis.nservice.ERROR_CODE_ERR
            }
        }
        return c
    },
    multicastMessage: function (a, c) {
        var b = 0;
        for (b = 0; b < window.webapis.nservice.NServiceDeviceArray.length; b++) {
            if (window.webapis.nservice.NServiceDeviceArray[b].groupID == a) {
                if (window.webapis.nservice.NServiceDeviceArray[b].multicastMessage(a, c) != window.webapis.nservice.ERROR_CODE_NO_ERR) {
                    return window.webapis.nservice.ERROR_CODE_ERR
                }
                return window.webapis.nservice.ERROR_CODE_NO_ERR
            }
        }
        return window.webapis.nservice.ERROR_CODE_ERR
    },
    registerManagerCallback: function (a) {
        if (typeof a == "function") {
            NServiceDeviceCallback = a
        }
    },
    setOwnDeviceInfo: function (a) {
        throw ErrorsHelper.createWebAPIException_byType("NotSupportedError")
    },
    getOwnDeviceInfo: function () {
        throw ErrorsHelper.createWebAPIException_byType("NotSupportedError")
    },
    connectNServiceHost: function (c, b, a) {
        throw ErrorsHelper.createWebAPIException_byType("NotSupportedError")
    },
    joinGroup: function (c, b, a) {
        throw ErrorsHelper.createWebAPIException_byType("NotSupportedError")
    },
    callbackNServiceDevice: function (b, k, h) {
        var g = Number(b);
        switch (g) {
            case window.webapis.nservice.MGR_EVENT_DEV_STATUS:
                break;
            case window.webapis.nservice.MGR_EVENT_DEV_DISCONNECT:
            case window.webapis.nservice.MGR_EVENT_DEV_CONNECT:
                var d = new window.webapis.nservice.ManagerEvent();
                var l = k.split(",");
                d.eventType = Number(b);
                d.uniqueID = l[1];
                d.deviceName = l[2];
                d.deviceType = Number(l[5]);
                if (g == window.webapis.nservice.MGR_EVENT_DEV_DISCONNECT) {
                    window.webapis.oci.removeSpecificDevice(window.webapis.nservice.SEFPlugin, String(l[1]), window.webapis.nservice.NServiceDeviceArray, window.webapis.nservice.NServiceDeviceValidArray)
                }
                if (NServiceDeviceCallback != null) {
                    NServiceDeviceCallback(d)
                }
                break;
            case window.webapis.nservice.DEV_EVENT_JOINED_GROUP:
            case window.webapis.nservice.DEV_EVENT_LEFT_GROUP:
                var j = new window.webapis.nservice.NServiceDeviceEventInfo();
                var f = new window.webapis.nservice.NServiceDeviceGroupInfo();
                var l = k.split("2ZQ");
                f.groupName = l[1];
                j.eventType = g;
                j.eventData = f;
                var e = 0;
                for (e = 0; e < window.webapis.nservice.NServiceDeviceArray.length; e++) {
                    if ((window.webapis.nservice.NServiceDeviceArray[e].deviceID == Number(l[0])) && (window.webapis.nservice.NServiceDeviceArray[e].deviceCallback != null)) {
                        window.webapis.nservice.NServiceDeviceArray[e].deviceCallback(j);
                        if (window.webapis.nservice.DEV_EVENT_JOINED_GROUP == g) {
                            window.webapis.nservice.NServiceDeviceArray[e].groupID = f.groupName
                        } else {
                            window.webapis.nservice.NServiceDeviceArray[e].groupID = null
                        }
                    }
                }
                break;
            case window.webapis.nservice.DEV_EVENT_MESSAGE_RECEIVED:
                var j = new window.webapis.nservice.NServiceDeviceEventInfo();
                var c = new window.webapis.nservice.NServiceDeviceMessageInfo();
                var l = k.split("2ZQ");
                var a = l[0];
                c.message = l[1];
                c.context = l[2];
                j.eventType = g;
                j.eventData = c;
                var e = 0;
                for (e = 0; e < window.webapis.nservice.NServiceDeviceArray.length; e++) {
                    if ((window.webapis.nservice.NServiceDeviceArray[e].deviceID == Number(a)) && (window.webapis.nservice.NServiceDeviceArray[e].deviceCallback != null)) {
                        window.webapis.nservice.NServiceDeviceArray[e].deviceCallback(j)
                    }
                }
                break;
            default:
                alert("[callbackNServiceDevice] unknown device event");
                break
        }
    },
    NServiceDevice: function (a, b) {
        this.uniqueID = a.UID;
        this.name = a.name;
        this.deviceID = b;
        this.deviceType = a.deviceType;
        this.deviceCallback = null;
        this.groupID = curWidget.id;
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
        this.sendMessage = function (d) {
            var c = window.webapis.nservice.SEFPlugin.Execute("SendCPMessage", String(this.deviceID), d);
            if (c != window.webapis.nservice.ERROR_CODE_NO_ERR) {
                alert("[sendMessage]: ERROR! = " + c);
                return window.webapis.nservice.ERROR_CODE_ERR
            }
            return window.webapis.nservice.ERROR_CODE_NO_ERR
        };
        this.broadcastMessage = function (d) {
            var c = window.webapis.nservice.SEFPlugin.Execute("BroadcastCPMessage", String(this.deviceID), d);
            if (c != window.webapis.nservice.ERROR_CODE_NO_ERR) {
                alert("[broadcastMessage]: ERROR! = " + c);
                return window.webapis.nservice.ERROR_CODE_ERR
            }
            return window.webapis.nservice.ERROR_CODE_NO_ERR
        };
        this.multicastMessage = function (d, e) {
            if (d == this.groupID) {
                var c = window.webapis.nservice.SEFPlugin.Execute("MulticastCPMessage", String(this.deviceID), d, e);
                if (c != window.webapis.nservice.ERROR_CODE_NO_ERR) {
                    alert("[multicastMessage]: ERROR! = " + c);
                    return window.webapis.nservice.ERROR_CODE_ERR
                }
            }
            return window.webapis.nservice.ERROR_CODE_NO_ERR
        };
        this.disconnectDevice = function () {
            alert("This API is depricated");
            return window.webapis.nservice.ERROR_CODE_NO_ERR
        };
        this.registerDeviceCb = function (c) {
            if (typeof c == "function") {
                this.deviceCallback = c;
                window.webapis.nservice.SEFPlugin.Execute("RegisterCallback", String(this.deviceID))
            } else {
                this.deviceCallback = null;
                window.webapis.nservice.SEFPlugin.Execute("UnregisterCallback", String(this.deviceID))
            }
        };
        this.registerDeviceCallback = function (c) {
            this.registerDeviceCb(c)
        };
        this.unregisterDeviceCallback = function () {
            this.registerDeviceCb(null)
        }
    },
};
webapis.healthcaredevice = {
    MGR_EVENT_DEV_CONNECT: webapis.oci.EVENT_DEV_CONNECT,
    MGR_EVENT_DEV_DISCONNECT: webapis.oci.EVENT_DEV_DISCONNECT,
    MGR_EVENT_DEV_SEARCHED: 210,
    MGR_EVENT_DEV_SEARCH_FINISHED: 211,
    MGR_EVENT_DEV_CONNECT_FAILED: 212,
    MGR_EVENT_DEV_PIN_REQUESTED: 221,
    MGR_EVENT_GETDATA: 200,
    MGR_EVENT_DEV_ASSOCIATED: 202,
    MGR_EVENT_DEV_UNASSOCIATED: 203,
    MGR_EVENT_DEV_DISCONNECT_FAILED: 52,
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
    DEV_INFO_SPP_DATA: 6,
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
        var d;
        var c;
        var b;
        var e;
        var a
    },
    initHealthcareDevices: function () {
        var d = window.location.search.split("modelid=");
        var b = d[1].split("&");
        var a = window.navigator.platform;
        if (b[0] == "SDK" && a.indexOf("Linux") == -1) {
            webapis.healthcaredevice.EMULStarted++;
            return 1000
        } else {
            var c = window.webapis.oci.create(this.SEFPlugin, "HealthcareSensor");
            if (c != window.webapis.oci.OCI_ERR) {
                if (this.SEFPlugin == null) {
                    this.SEFPlugin = c;
                    this.SEFPlugin.OnEvent = this.callbackHealthcareDevice;
                    this.SEFPlugin.Execute("RegisterCallback", "-1");
                    return 1000
                } else {
                    return 1
                }
            }
            return window.webapis.oci.OCI_ERR
        }
    },
    getHealthcareDevices: function (a, b) {
        var c = 1;
        c = webapis.healthcaredevice.initHealthcareDevices();
        if (webapis.healthcaredevice.EMULStarted) {
            if (webapis.healthcaredevice.EMULConnected != 1) {
                webapis.healthcaredevice.EMULConnected = 1;
                webapis.healthcaredevice.EMULSetData()
            }
        }
        if (typeof b == "undefined") {
            b = null
        }
        if (c == window.webapis.oci.OCI_ERR) {
            if (b != null) {
                b(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_FOUND_ERR))
            }
            return
        }
        if (typeof a != "function") {
            if (b != null) {
            }
        } else {
            if (webapis.healthcaredevice.EMULStarted) {
                setTimeout(function () {
                    webapis.healthcaredevice.EMULsuccessCallback(webapis.healthcaredevice.HealthcareDeviceArray, a)
                }, c)
            } else {
                setTimeout(function () {
                    webapis.oci.getConnectedDevices(webapis.healthcaredevice.SEFPlugin, webapis.healthcaredevice.HealthcareDeviceArray, webapis.healthcaredevice.HealthcareDeviceValidArray, a, webapis.healthcaredevice.HealthcareDevice)
                }, c)
            }
        }
    },
    searchDevices: function (b) {
        if (webapis.healthcaredevice.initHealthcareDevices() == window.webapis.oci.OCI_ERR) {
            return false
        }
        if (webapis.healthcaredevice.EMULStarted) {
            if (!webapis.healthcaredevice.EMULSearched) {
                for (var c = 0; c < 3; c++) {
                    var a = new window.webapis.oci.OCIDevInfo();
                    switch (c) {
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
                    webapis.healthcaredevice.EMULSearch.push(a)
                }
                webapis.healthcaredevice.EMULSearched = 1
            }
            setTimeout(function () {
                webapis.healthcaredevice.EMULSearchCallback()
            }, 1000);
            return true
        } else {
            if (typeof b != "undefined") {
                return webapis.healthcaredevice.SEFPlugin.Execute("SearchDevice", "-1", b)
            } else {
                return webapis.healthcaredevice.SEFPlugin.Execute("SearchDevice", "-1")
            }
        }
    },
    stopSearchDevices: function () {
        if (webapis.healthcaredevice.initHealthcareDevices() == window.webapis.oci.OCI_ERR) {
            return false
        }
        return webapis.healthcaredevice.SEFPlugin.Execute("StopSearchDevice", "-1")
    },
    connectDevice: function (a) {
        var b = false;
        if (webapis.healthcaredevice.EMULStarted) {
            var d = 0;
            for (d = 0; d < webapis.healthcaredevice.HealthcareDeviceArray.length; d++) {
                if (webapis.healthcaredevice.HealthcareDeviceArray[d].getUniqueID() == a) {
                    return true
                }
            }
            for (var d = 0; d < this.EMULSearch.length; d++) {
                if (webapis.healthcaredevice.EMULSearch[d].UID == a) {
                    var c = new webapis.healthcaredevice.HealthcareDevice(webapis.healthcaredevice.EMULSearch[d], webapis.healthcaredevice.HealthcareDeviceArray.length);
                    webapis.healthcaredevice.HealthcareDeviceArray.push(c);
                    setTimeout(function () {
                        webapis.healthcaredevice.EMULConnectionCallback(c, window.webapis.healthcaredevice.MGR_EVENT_DEV_CONNECT)
                    }, 1000);
                    return true
                }
            }
        } else {
            b = webapis.healthcaredevice.SEFPlugin.Execute("ConnectDevice", "-1", a)
        }
        return b
    },
    disconnectDevice: function (a) {
        var b = false;
        if (this.EMULStarted) {
            var d = 0;
            for (d = 0; d < this.HealthcareDeviceArray.length; d++) {
                if (webapis.healthcaredevice.HealthcareDeviceArray[d].getUniqueID() == a) {
                    var c = webapis.healthcaredevice.HealthcareDeviceArray[d];
                    webapis.healthcaredevice.HealthcareDeviceArray.splice(d, 1);
                    setTimeout(function () {
                        webapis.healthcaredevice.EMULConnectionCallback(c, window.webapis.healthcaredevice.MGR_EVENT_DEV_DISCONNECT)
                    }, 1000);
                    return true
                }
            }
        } else {
            b = webapis.healthcaredevice.SEFPlugin.Execute("DisconnectDevice", "-1", a)
        }
        return b
    },
    setDevicePIN: function (a, c) {
        var b = false;
        if (this.EMULStarted) {
        } else {
            b = webapis.healthcaredevice.SEFPlugin.Execute("SetDevicePIN", "-1", a, c)
        }
        return b
    },
    requestAssociation: function (b) {
        return webapis.healthcaredevice.SEFPlugin.Execute("ConnectChannel", "-1", b)
    },
    sendBluetoothData: function (d, c) {
        return webapis.healthcaredevice.SEFPlugin.Execute("SendBluetoothData", "0", d, c)
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
        var d = new webapis.healthcaredevice.EMULStruct();
        d.name = this.EMULBP2;
        var i = new Array();
        i.push("1,200,2,1,4103,2,80,OMRON HEALTHCARE,81,HEM-7081-IT");
        i.push("1,200,1,0,65,6,2677,18948,3:18949_116:18950_78:18951_90:,3872,2448,-9999,2010-01-01 00:13:15,-9999,2636,18474,58,2720,2448,-9999,2010-01-01 00:13:15,-9999,2636,61458,0,512,2448,-9999,2010-01-01 00:13:15,-9999,");
        i.push("1,200,1,0,65,6,2677,18948,3:18949_112:18950_66:18951_81:,3872,2448,-9999,2011-11-01 10:21:00,-9999,2636,18474,85,2720,2448,-9999,2011-11-01 10:21:00,-9999,2636,61458,0,512,2448,-9999,2011-11-01 10:21:00,-9999,");
        d.data = i;
        webapis.healthcaredevice.EMULData.push(d);
        var c = new webapis.healthcaredevice.EMULStruct();
        c.name = this.EMULBP2;
        var h = new Array();
        h.push("3,200,2,1,4103,2,80,OMRON HEALTHCARE,81,HEM-7081-IT");
        h.push("3,200,1,0,65,6,2677,18948,3:18949_102:18950_67:18951_78:,3872,2448,-9999,2011-10-05 15:47:50,-9999,2636,18474,62,2720,2448,-9999,2011-10-05 15:47:50,-9999,2636,61458,0,512,2448,-9999,2011-10-05 15:47:50,-9999,");
        c.data = h;
        webapis.healthcaredevice.EMULData.push(c);
        var b = new webapis.healthcaredevice.EMULStruct();
        b.name = this.EMULBP2;
        var g = new Array();
        g.push("3,200,2,1,4103,2,80,OMRON HEALTHCARE,81,HEM-7081-IT");
        g.push("3,200,1,0,65,6,2677,18948,3:18949_102:18950_67:18951_78:,3872,2448,-9999,2011-10-05 15:47:50,-9999,2636,18474,62,2720,2448,-9999,2011-10-05 15:47:50,-9999,2636,61458,0,512,2448,-9999,2011-10-05 15:47:50,-9999,");
        g.push("3,200,1,0,65,6,2677,18948,3:18949_105:18950_66:18951_79:,3872,2448,-9999,2011-10-05 15:50:39,-9999,2636,18474,62,2720,2448,-9999,2011-10-05 15:50:39,-9999,2636,61458,0,512,2448,-9999,2011-10-05 15:50:39,-9999,");
        b.data = g;
        webapis.healthcaredevice.EMULData.push(b);
        var a = new webapis.healthcaredevice.EMULStruct();
        a.name = this.EMULWS1;
        var e = new Array();
        e.push("2,200,2,1,4111,2,80,OMRON HEALTHCARE,81,HBF-206IT");
        e.push("2,200,1,0,49,20,2646,57664,74,1731,2448,-9999,2010-01-01 00:00:00,-9999,2646,57668,150,1297,2448,-9999,2010-01-01 00:00:00,-9999,2646,57680,32.9,1952,2448,-9999,2010-01-01 00:00:00,-9999,2646,57676,37.1,544,2448,-9999,2010-01-01 00:00:00,-9999,2646,61441,1.575e+06,6784,2448,-9999,2010-01-01 00:00:00,-9999,2636,61442,27,544,2448,-9999,2010-01-01 00:00:00,-9999,2636,61443,76,2368,2448,-9999,2010-01-01 00:00:00,-9999,2677,61449,4:61450_24:61451_0:61452_0:61453_0:,544,2448,-9999,2010-01-01 00:00:00,-9999,2636,61454,2,512,2448,-9999,2010-01-01 00:00:00,-9999,2677,61455,2:61456_0:61457_70:,512,2448,-9999,2010-01-01 00:00:00,-9999,");
        a.data = e;
        webapis.healthcaredevice.EMULData.push(a);
        var j = new webapis.healthcaredevice.EMULStruct();
        j.name = this.EMULGM1;
        var f = new Array();
        f.push("1,200,2,1,4113,2,80,Allmedicus,81,AP001");
        f.push("0,200,1,0,1,2,2636,29112,311,2130,2448,-9999,2012-04-23 16:31:00,-9999");
        j.data = f;
        webapis.healthcaredevice.EMULData.push(j);
        setTimeout(function () {
            window.webapis.healthcaredevice.EMULDataCallback()
        }, this.EMULRepeatTime)
    },
    EMULDataCallback: function () {
        var b = Math.floor(Math.random() * webapis.healthcaredevice.EMULData.length);
        for (var a = 0; a < webapis.healthcaredevice.HealthcareDeviceArray.length; a++) {
            if (webapis.healthcaredevice.HealthcareDeviceArray[a].getName() == webapis.healthcaredevice.EMULData[b].name) {
                if (webapis.healthcaredevice.HealthcareDeviceArray[a].deviceCallback != null) {
                    for (var d = 0; d < webapis.healthcaredevice.EMULData[b].data.length; d++) {
                        var c = webapis.healthcaredevice.parseCallbackData(webapis.healthcaredevice.EMULData[b].data[d]);
                        webapis.healthcaredevice.HealthcareDeviceArray[a].deviceCallback(c)
                    }
                }
            }
        }
        setTimeout(function () {
            window.webapis.healthcaredevice.EMULDataCallback()
        }, this.EMULRepeatTime)
    },
    EMULSearchCallback: function () {
        if (HealthcareDeviceCallback != null) {
            for (var a = 0; a < webapis.healthcaredevice.EMULSearch.length; a++) {
                var b = new window.webapis.healthcaredevice.ManagerEvent();
                b.eventType = this.MGR_EVENT_DEV_SEARCHED;
                b.name = this.EMULSearch[a].name;
                b.UID = this.EMULSearch[a].UID;
                b.deviceType = this.EMULSearch[a].deviceType;
                HealthcareDeviceCallback(b)
            }
            var b = new window.webapis.healthcaredevice.ManagerEvent();
            b.eventType = this.MGR_EVENT_DEV_SEARCH_FINISHED;
            b.name = null;
            b.UID = null;
            b.deviceType = 0;
            HealthcareDeviceCallback(b)
        }
    },
    EMULConnectionCallback: function (b, a) {
        if (HealthcareDeviceCallback != null) {
            var c = new window.webapis.healthcaredevice.ManagerEvent();
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
            case window.webapis.healthcaredevice.MGR_EVENT_DEV_SEARCHED:
            case window.webapis.healthcaredevice.MGR_EVENT_DEV_ASSOCIATED:
            case window.webapis.healthcaredevice.MGR_EVENT_DEV_UNASSOCIATED:
                if (HealthcareDeviceCallback != null) {
                    var a = window.webapis.oci.parseDeviceEvent(h);
                    var i = new window.webapis.healthcaredevice.ManagerEvent();
                    i.eventType = Number(c);
                    i.name = a.name;
                    i.UID = a.UID;
                    i.deviceType = a.deviceType;
                    HealthcareDeviceCallback(i)
                }
                break;
            case window.webapis.healthcaredevice.MGR_EVENT_DEV_PIN_REQUESTED:
                if (HealthcareDeviceCallback != null) {
                    var a = h.split(window.webapis.oci.DELIMITER_EVENT_PARAM);
                    if (a != null) {
                        var i = new window.webapis.healthcaredevice.ManagerEvent();
                        i.eventType = Number(a[0]);
                        i.UID = String(a[1]);
                        i.name = String(a[2]);
                        i.PIN = a[4];
                        HealthcareDeviceCallback(i)
                    }
                }
                break;
            case window.webapis.healthcaredevice.MGR_EVENT_DEV_SEARCH_FINISHED:
                if (HealthcareDeviceCallback != null) {
                    var i = new window.webapis.healthcaredevice.ManagerEvent();
                    i.eventType = Number(c);
                    i.name = null;
                    i.UID = null;
                    i.deviceType = 0;
                    HealthcareDeviceCallback(i)
                }
                break;
            case window.webapis.healthcaredevice.MGR_EVENT_DEV_CONNECT:
                if (HealthcareDeviceCallback != null) {
                    var a = window.webapis.oci.parseDeviceEvent(h);
                    var i = new window.webapis.healthcaredevice.ManagerEvent();
                    i.eventType = Number(c);
                    i.name = null;
                    i.UID = a.UID;
                    i.deviceType = 0;
                    HealthcareDeviceCallback(i)
                }
                break;
            case window.webapis.healthcaredevice.MGR_EVENT_DEV_CONNECT_FAILED:
                if (HealthcareDeviceCallback != null) {
                    var a = window.webapis.oci.parseDeviceEvent(h);
                    var i = new window.webapis.healthcaredevice.ManagerEvent();
                    i.eventType = window.webapis.healthcaredevice.MGR_EVENT_DEV_CONNECT_FAILED;
                    i.name = a.name;
                    i.UID = a.UID;
                    i.deviceType = a.deviceType;
                    HealthcareDeviceCallback(i)
                }
                break;
            case window.webapis.healthcaredevice.MGR_EVENT_DEV_DISCONNECT_FAILED:
            case window.webapis.healthcaredevice.MGR_EVENT_DEV_DISCONNECT:
                var a = window.webapis.oci.parseDeviceEvent(h);
                if (HealthcareDeviceCallback != null) {
                    var i = new window.webapis.healthcaredevice.ManagerEvent();
                    i.eventType = Number(c);
                    i.name = a.name;
                    i.UID = a.UID;
                    i.deviceType = a.deviceType;
                    HealthcareDeviceCallback(i)
                }
                window.webapis.oci.removeSpecificDevice(window.webapis.healthcaredevice.SEFPlugin, a.UID, window.webapis.healthcaredevice.HealthcareDeviceArray, window.webapis.healthcaredevice.HealthcareDeviceValidArray);
                break;
            case window.webapis.healthcaredevice.MGR_EVENT_GETDATA:
                var e = h.split(window.webapis.oci.DELIMITER_EVENT_PARAM);
                var b = e[0];
                var d = 0;
                for (d = 0; d < window.webapis.healthcaredevice.HealthcareDeviceArray.length; d++) {
                    if ((window.webapis.healthcaredevice.HealthcareDeviceArray[d].deviceID == Number(b)) && (window.webapis.healthcaredevice.HealthcareDeviceArray[d].deviceCallback != null)) {
                        var j = window.webapis.healthcaredevice.parseCallbackData(h);
                        window.webapis.healthcaredevice.HealthcareDeviceArray[d].deviceCallback(j)
                    }
                }
                break;
            default:
                break
        }
    },
    parseSystemInfoData: function (e) {
        var g = new webapis.healthcaredevice.HealthcareDeviceInfo();
        g.infoType = webapis.healthcaredevice.DEV_INFO_SYSTEM_INFO;
        g.deviceType = new Array();
        g.data = new Array();
        var b = webapis.healthcaredevice.GET_DEVICE_TYPE;
        var d = Number(e[b++]);
        for (var c = 0; c < d; c++) {
            g.deviceType.push(Number(e[b++]))
        }
        var a = Number(e[b++]);
        for (var c = 0; c < a; c++) {
            var f = new webapis.healthcaredevice.HealthcareDeviceData();
            f.elementType = Number(e[b++]);
            f.element = e[b++];
            g.data.push(f)
        }
        return g
    },
    parseAbsoluteTimestamp: function (b, i, g, p, a) {
        var f = new webapis.healthcaredevice.HealthcareDeviceData();
        f.elementType = Number(i);
        var h = new webapis.healthcaredevice.HealthcareDeviceDataTimeInfo();
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
                var f = new webapis.healthcaredevice.HealthcareDeviceData();
                var e = l[h + 1].split("_");
                var d = new webapis.healthcaredevice.HealthcareDeviceDataMeasuredInfo();
                var c = 0;
                f.elementType = Number(e[c++]);
                d.value = e[c++];
                d.unit = Number(a);
                f.element = d;
                b.data.push(f)
            }
        } else {
            var f = new webapis.healthcaredevice.HealthcareDeviceData();
            var d = new webapis.healthcaredevice.HealthcareDeviceDataMeasuredInfo();
            f.elementType = Number(g);
            d.value = Number(l[0]);
            d.unit = Number(a);
            f.element = d;
            b.data.push(f)
        }
    },
    parseHealthData: function (h) {
        var c = new webapis.healthcaredevice.HealthcareDeviceInfo();
        c.infoType = webapis.healthcaredevice.DEV_INFO_MEASURE_DATA;
        c.deviceType = new Array();
        c.data = new Array();
        c.deviceType.push(Number(h[webapis.healthcaredevice.GET_DEVICE_TYPE]));
        var g = Number(h[webapis.healthcaredevice.GET_TOTAL_NUM_OF_DATA]);
        var d = webapis.healthcaredevice.GET_START_OF_DATA;
        for (var e = 0; e < g; e++) {
            var f = Number(h[d++]);
            var a = Number(h[d++]);
            var k = h[d++];
            var b = h[d++];
            switch (f) {
                case webapis.healthcaredevice.MEASURE_DATA_ABS_TIMESTAMP:
                    webapis.healthcaredevice.parseAbsoluteTimestamp(c, f, a, k, b);
                    break;
                default:
                    webapis.healthcaredevice.parseDefaultValue(c, f, a, k, b);
                    break
            }
        }
        return c
    },
    parsePmstoreData: function (l) {
        var e = new webapis.healthcaredevice.HealthcareDeviceInfo();
        e.infoType = webapis.healthcaredevice.DEV_INFO_MEASURE_DATA;
        e.deviceType = new Array();
        e.data = new Array();
        e.deviceType.push(Number(l[webapis.healthcaredevice.GET_DEVICE_TYPE]));
        var f = Number(l[webapis.healthcaredevice.GET_PMSTORECOUNT]);
        var i = Number(webapis.healthcaredevice.GET_PMSTORECOUNT) + 1;
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
                            case webapis.healthcaredevice.MEASURE_DATA_ABS_TIMESTAMP:
                                webapis.healthcaredevice.parseAbsoluteTimestamp(e, h, a, m, c);
                                break;
                            default:
                                webapis.healthcaredevice.parseDefaultValue(e, h, a, m, c);
                                break
                        }
                    }
                }
            }
        }
        return e
    },
    parseCallbackData: function (c) {
        var a = c.split(webapis.oci.DELIMITER_EVENT_PARAM);
        var b = Number(a[webapis.healthcaredevice.GET_DATA_SUBTYPE]);
        if (b == webapis.healthcaredevice.DEV_INFO_SYSTEM_INFO) {
            return webapis.healthcaredevice.parseSystemInfoData(a)
        } else {
            if (b == webapis.healthcaredevice.DEV_INFO_MEASURE_DATA) {
                return webapis.healthcaredevice.parseHealthData(a)
            } else {
                if (b == webapis.healthcaredevice.DEV_INFO_PMSTORE_DATA) {
                    return webapis.healthcaredevice.parsePmstoreData(a)
                } else {
                    if (b == webapis.healthcaredevice.DEV_INFO_SPP_DATA) {
                        return c
                    }
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
                if (window.webapis.healthcaredevice.SEFPlugin != null) {
                    window.webapis.healthcaredevice.SEFPlugin.Execute("RegisterCallback", String(this.deviceID))
                }
            } else {
                this.deviceCallback = null;
                if (window.webapis.healthcaredevice.SEFPlugin != null) {
                    window.webapis.healthcaredevice.SEFPlugin.Execute("UnregisterCallback", String(this.deviceID))
                }
            }
        }
    }
};
webapis.microphone = {
    MGR_EVENT_DEV_CONNECT: webapis.oci.EVENT_DEV_CONNECT,
    MGR_EVENT_DEV_DISCONNECT: webapis.oci.EVENT_DEV_DISCONNECT,
    MGR_EVENT_PLAY_FAIL: 400,
    MGR_EVENT_RECORD_FAIL: 402,
    MGR_EVENT_RECORD_STOP: 403,
    MGR_EVENT_FILTER_VOICE_DETECETD: 404,
    MGR_EVENT_FILTER_PLAY_STARTED: 405,
    MGR_EVENT_FILTER_PLAY_STOPPED: 406,
    MGR_EVENT_FILTER_REPEAT_FINISHED: 407,
    MGR_EVENT_BLUETOOTH_BUTTON_PRESSED: 410,
    MGR_EVENT_BLUETOOTH_BUTTON_RELEASED: 411,
    MGR_EVENT_FILTER_PLAY_VOLUME: 450,
    MICROPHONE_FORMAT_SIGNED_16BIT_LITTLE_ENDIAN: 0,
    MICROPHONE_FRAMERATE_48000: 48000,
    MICROPHONE_EFFECT_NONE: 0,
    MICROPHONE_EFFECT_REVERB: 1,
    MICROPHONE_EFFECT_FILTER: 16,
    MICROPHONE_BLUETOOTH_AUTOSTART: 2,
    MICROPHONE_BLUETOOTH_AUTOSTOP: 4,
    OCI_PROFILE_AUDIOINPUT: 16,
    MicrophoneArray: new Array(),
    MicrophoneValidArray: new Array(),
    MicrophoneCallback: null,
    SEFPlugin: null,
    MicrophoneStateStop: 0,
    MicrophoneStatePlay: 1,
    MicrophoneStateRecord: 16,
    MicrophoneStateFilter: 256,
    IsVoiceRecognition: true,
    MicrophonePlayOption: 1,
    MicrophoneRecordOption: 16,
    ManagerEvent: function () {
        var c;
        var b;
        var a;
        var d
    },
    isSupported: function () {
        var c = window.location.search.split("modelid=");
        var a = c[1].split("&");
        if (a[0] == "SDK") {
            return true
        } else {
            var b = window.webapis.tv.info.getProduct();
            if (b == 0) {
                return true
            } else {
                if (b == 2) {
                    if (window.webapis._plugin("Microphone", "IsSupported", "-1") == 1) {
                        return true
                    }
                }
            }
        }
        return false
    },
    getMicrophones: function (a, b) {
        var d = 1;
        var c = window.webapis.oci.create(this.SEFPlugin, "Microphone");
        if (this.SEFPlugin == null) {
            d = 2500;
            if (c != window.webapis.oci.OCI_ERR) {
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
                webapis.oci.getConnectedDevices(webapis.microphone.SEFPlugin, webapis.microphone.MicrophoneArray, webapis.microphone.MicrophoneValidArray, a, webapis.microphone.Microphone)
            }, d)
        }
    },
    registerManagerCallback: function (a) {
        if (typeof a == "function") {
            this.MicrophoneCallback = a
        }
    },
    enableInternalMicrophones: function (a) {
        var b = 1;
        if (a == true) {
            b = 1
        } else {
            b = 0
        }
        this.SEFPlugin.Execute("EnableInternalMicrophone", "-1", "InternalMicrophone", String(b))
    },
    enableBluetoothMicrophones: function (a, c) {
        if (typeof c == "undefined") {
            c = 0
        }
        var b = 16;
        if (a == true) {
            b += c
        } else {
            b = 0
        }
        this.SEFPlugin.Execute("EnableInternalMicrophone", "-1", "BluetoothMicrophone", String(b))
    },
    enableSamsungMicrophones: function (a, c) {
        if (typeof c == "undefined") {
            c = microphone.MICROPHONE_BLUETOOTH_AUTOSTOP
        }
        var b = 17;
        if (a == true) {
            b += c
        } else {
            b = 0
        }
        this.SEFPlugin.Execute("EnableInternalMicrophone", "-1", "SamsungMicrophones", String(b))
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
        switch (f) {
            case window.webapis.microphone.MGR_EVENT_PLAY_FAIL:
                for (b = 0; b < window.webapis.microphone.MicrophoneArray.length; b++) {
                    l = window.webapis.microphone.MicrophoneArray[b];
                    var e = h.split(window.webapis.oci.DELIMITER_EVENT_PARAM);
                    if ((l.getDeviceID() == Number(e[1])) && (window.webapis.microphone.MicrophoneArray[b].deviceCallback != null)) {
                        window.webapis.microphone.MicrophoneArray[b].deviceCallback(f)
                    }
                }
                break;
            case window.webapis.microphone.MGR_EVENT_RECORD_FAIL:
            case window.webapis.microphone.MGR_EVENT_RECORD_STOP:
            case window.webapis.microphone.MGR_EVENT_FILTER_VOICE_DETECETD:
            case window.webapis.microphone.MGR_EVENT_FILTER_PLAY_STARTED:
            case window.webapis.microphone.MGR_EVENT_FILTER_PLAY_STOPPED:
            case window.webapis.microphone.MGR_EVENT_FILTER_PLAY_VOLUME:
            case window.webapis.microphone.MGR_EVENT_FILTER_REPEAT_FINISHED:
            case window.webapis.microphone.MGR_EVENT_BLUETOOTH_BUTTON_PRESSED:
            case window.webapis.microphone.MGR_EVENT_BLUETOOTH_BUTTON_RELEASED:
                for (b = 0; b < window.webapis.microphone.MicrophoneArray.length; b++) {
                    l = window.webapis.microphone.MicrophoneArray[b];
                    if ((l.getDeviceID() == Number(h)) && (webapis.microphone.MicrophoneCallback != null)) {
                        d = new window.webapis.microphone.ManagerEvent();
                        d.eventType = f;
                        d.name = l.getName();
                        d.UID = l.getUniqueID();
                        d.value = Number(g);
                        webapis.microphone.MicrophoneCallback(d)
                    }
                }
                break;
            case window.webapis.microphone.MGR_EVENT_DEV_CONNECT:
                alert("[callbackMicrophones] MGR_EVENT_DEV_CONNECT");
                if (webapis.microphone.MicrophoneCallback != null) {
                    i = window.webapis.oci.parseDeviceEvent(h);
                    d = new window.webapis.microphone.ManagerEvent();
                    d.eventType = i.eventType;
                    d.name = i.name;
                    d.UID = i.UID;
                    webapis.microphone.MicrophoneCallback(d)
                }
                break;
            case window.webapis.microphone.MGR_EVENT_DEV_DISCONNECT:
                alert("[callbackMicrophones] MGR_EVENT_DEV_DISCONNECT");
                i = window.webapis.oci.parseDeviceEvent(h);
                if (webapis.microphone.MicrophoneCallback != null) {
                    d = new window.webapis.microphone.ManagerEvent();
                    d.eventType = i.eventType;
                    d.name = i.name;
                    d.UID = i.UID;
                    webapis.microphone.MicrophoneCallback(d)
                }
                for (b = 0; b < window.webapis.microphone.MicrophoneArray.length; b++) {
                    l = window.webapis.microphone.MicrophoneArray[b];
                    a = l.getUniqueID();
                    if (a == i.UID) {
                        l.stop(window.webapis.microphone.MicrophoneStatePlay | window.webapis.microphone.MicrophoneStateRecord);
                        l.disableDevice()
                    }
                }
                window.webapis.oci.removeSpecificDevice(window.webapis.microphone.SEFPlugin, i.UID, window.webapis.microphone.MicrophoneArray, window.webapis.microphone.MicrophoneValidArray);
                break;
            default:
                break
        }
    },
    Microphone: function (a, b) {
        INTERFACE_COMMAND = "Microphone";
        this.uniqueID = a.UID;
        this.name = a.name;
        this.deviceID = b;
        this.deviceCallback = null;
        this.deviceType = a.deviceType;
        this.getUniqueID = function () {
            return this.uniqueID
        };
        this.getDeviceID = function () {
            return this.deviceID
        };
        this.getName = function () {
            return this.name
        };
        this.enableDevice = function (g, e, d, f) {
            if (typeof d == "undefined") {
                d = 15000
            }
            if (typeof f == "undefined") {
                f = 3
            }
            var c = webapis.microphone.SEFPlugin.Execute("EnableAudioIn", String(this.deviceID), String(g), String(e), String(d) + "," + String(f));
            if (c != webapis.oci.OCI_NO_ERR) {
                alert("[OCI_microphone_enable]: ERROR = " + c);
                return false
            }
            return true
        };
        this.disableDevice = function () {
            var c = webapis.microphone.SEFPlugin.Execute("DisableAudioIn", String(this.deviceID));
            if (c != webapis.oci.OCI_NO_ERR) {
                alert("[OCI_microphone_disable]: ERROR = " + c);
                return false
            }
            return true
        };
        this.playrecord = function (e, f, c) {
            if (typeof e == "undefined") {
                e = webapis.microphone.MicrophoneStatePlay
            }
            if (typeof c == "undefined") {
                c = ""
            }
            if (typeof f == "undefined") {
                f = ""
            }
            var d = false;
            if (webapis.microphone.SEFPlugin.Execute("PlayAudioIn", String(this.deviceID), c, String(e), f) == webapis.oci.OCI_NO_ERR) {
                d = true
            }
            return d
        };
        this.stop = function (d) {
            if (typeof d == "undefined") {
                d = webapis.microphone.MicrophoneStatePlay
            }
            var c = false;
            if (webapis.microphone.SEFPlugin.Execute("StopAudioIn", String(this.deviceID), String(d)) == webapis.oci.OCI_NO_ERR) {
                c = true
            }
            return c
        };
        this.play = function (c, e) {
            if (typeof c == "undefined") {
                c = ""
            }
            if (typeof e == "undefined") {
                e = ""
            } else {
                if (e == true) {
                    e = "USE_MAIN_CHANNEL"
                }
            }
            webapis.microphone.SEFPlugin.Execute("SetMicAppID", "-1", "77", curWidget.id);
            var d = this.playrecord(webapis.microphone.MicrophoneStatePlay, String(e), c);
            if (d == false) {
                alert("play ERROR = " + d)
            }
            return d
        };
        this.stopPlay = function () {
            var c = this.stop(webapis.microphone.MicrophoneStatePlay);
            if (c == false) {
                alert("stopPlay ERROR = " + c)
            }
            return c
        };
        this.record = function (c) {
            var d = false;
            if (typeof c != "undefined") {
                if (Number(webapis.microphone.SEFPlugin.Execute("GetVersion", "", "", "", "")) >= 2) {
                    c = webapis.oci.setFilePath(c);
                    if (c != null) {
                        d = this.playrecord(webapis.microphone.MicrophoneStateRecord, c, "")
                    }
                }
                if (d == false) {
                    alert("record ERROR = " + d)
                }
            }
            return d
        };
        this.stopRecord = function () {
            var c = false;
            if (Number(webapis.microphone.SEFPlugin.Execute("GetVersion", "", "", "", "")) >= 2) {
                c = this.stop(webapis.microphone.MicrophoneStateRecord)
            }
            if (c == false) {
                alert("stopRecord ERROR = " + c)
            }
            return c
        };
        this.getVolumeLevel = function () {
            var c = webapis.microphone.SEFPlugin.Execute("GetAudioInVolumeLevel", String(this.deviceID));
            return c
        };
        this.setVolumeLevel = function (d) {
            var c = webapis.microphone.SEFPlugin.Execute("SetAudioInVolumeLevel", String(this.deviceID), String(d));
            if (c != webapis.oci.OCI_NO_ERR) {
                alert("setVolumeLevel function only work while playing");
                return false
            }
            return true
        };
        this.getSupportedEffects = function () {
            var c = webapis.microphone.SEFPlugin.Execute("GetSupportedAudioInEffects", String(this.deviceID));
            return c
        };
        this.getEnabledEffects = function () {
            var c = webapis.microphone.SEFPlugin.Execute("GetEnabledAudioInEffects", String(this.deviceID));
            return c
        };
        this.setEffect = function (e, d, j, i, g, f) {
            var h = 0;
            if (d == true) {
                h = 1
            } else {
                h = 0
            }
            if (typeof j == "undefined") {
                j = 0
            }
            if (typeof i == "undefined") {
                i = 0
            }
            if (typeof g == "undefined") {
                g = 0
            }
            if (typeof f == "undefined") {
                f = ""
            }
            var c = webapis.microphone.SEFPlugin.Execute("SetAudioInEffect", String(this.deviceID), String(e), String(h), String(j) + "," + String(i) + "," + String(g) + "," + String(f));
            if (c == webapis.oci.OCI_NO_ERR) {
                return true
            }
            alert("[setEffect]: ERROR = " + c);
            return false
        };
        this.registerDeviceCallback = function (c) {
            if (typeof c == "function") {
                this.deviceCallback = c;
                if (window.webapis.microphone.SEFPlugin != null) {
                    window.webapis.microphone.SEFPlugin.Execute("RegisterCallback", String(this.deviceID))
                }
            } else {
                this.deviceCallback = null;
                if (window.webapis.microphone.SEFPlugin != null) {
                    window.webapis.microphone.SEFPlugin.Execute("UnregisterCallback", String(this.deviceID))
                }
            }
        };
        this.getFilterVolume = function () {
            var c = webapis.microphone.SEFPlugin.Execute("GetFilterVolume", String(this.deviceID));
            return c
        }
    }
};
webapis.download = {
    cbDownloadCallback: null, filepath_tmp: null, downloadCallback: function (a, d, b) {
        alert("[Subtitle] _downloadCallback(" + a + "," + d + "," + b + ")");
        var c = d.split("?");
        switch (c[0]) {
            case"1000":
                if (typeof cbDownloadCallback == "function") {
                    if (c[1] == 1) {
                        alert("[Subtitle] Download Success!");
                        if (typeof cbDownloadCallback == "function") {
                            cbDownloadCallback(filepath_tmp)
                        }
                    } else {
                        alert("[Subtitle] Download Failed!");
                        if (typeof cbDownloadCallback == "function") {
                            cbDownloadCallback(false)
                        }
                    }
                }
                break;
            default:
                break
        }
    }, requestDownload: function (e, b, c) {
        var a = 0;
        var d = webapis._plugin("Download");
        filepath_tmp = "$TEMP/" + b;
        cbDownloadCallback = c;
        if (navigator.userAgent.toLowerCase().indexOf("applewebkit") < 0 && navigator.userAgent.toLowerCase().indexOf("maple") >= 0) {
            d.OnEvent = "webapis.download.downloadCallback"
        } else {
            d.OnEvent = window.webapis.download.downloadCallback
        }
        a = webapis._plugin(d, "StartDownFile", e, filepath_tmp);
        return a
    }, removeFile: function (b) {
        var d = "$TEMP/" + b;
        var c = new FileSystem();
        var a = c.deleteCommonFile(d);
        return a
    },
};
webapis.audiorecorder = {
    EVENT_RECORDING_ERROR: 0,
    EVENT_RECORDING_START: 1,
    EVENT_RECORDING_STOP: 2,
    callbackFnc: null,
    SEFPlugin: null,
    isStarted: false,
    FileInfo: function () {
        var e;
        var c;
        var d;
        var b;
        var a
    },
    isAudioRecorderSupported: function () {
        var c = window.location.search.split("modelid=");
        var b = c[1].split("&");
        if (b[0] == "SDK") {
            return false
        } else {
            if (this.SEFPlugin == null) {
                this.SEFPlugin = webapis.oci.addPluginObject("SEF", "AudioRecorder");
                if (this.SEFPlugin != null) {
                    var a = this.SEFPlugin.Open("AudioRecorder", "1.00", "None");
                    if (a == -1) {
                        this.SEFPlugin = null
                    }
                }
            }
            if (this.SEFPlugin != null) {
                alert("Support AudioRecorder");
                return true
            } else {
                alert("Not Support AudioRecorder");
                return false
            }
        }
    },
    record: function (a, d, c) {
        var b = false;
        if (typeof a != "undefined") {
            a = webapis.oci.setFilePath(a);
            if (a != null) {
                if (this.isAudioRecorderSupported() == false) {
                    return false
                }
                if (typeof d == "function") {
                    webapis.audiorecorder.callbackFnc = d
                } else {
                    alert("[AudioRecorder#record]_Error! callback is not a function.")
                }
                if (typeof c == "undefined") {
                    c = ""
                }
                this.SEFPlugin.OnEvent = webapis.audiorecorder.callbackAudioRecorder;
                if (this.SEFPlugin.Execute("Start", a, c) == webapis._pluginDef.PLR_FALSE) {
                    alert("AudioRecorder#record ERROR = " + b);
                    b = false
                } else {
                    b = true
                }
            }
        }
        return b
    },
    stopRecord: function () {
        var a = true;
        if (this.isAudioRecorderSupported() == false) {
            return false
        }
        if (this.SEFPlugin.Execute("Stop") == webapis._pluginDef.PLR_FALSE) {
            alert("AudioRecorder#stopRecord ERROR = " + a);
            a = false
        }
        return true
    },
    callbackAudioRecorder: function (d, b, a) {
        var c = Number(d);
        alert("[callbackAudioRecorder] ***************************");
        alert("[callbackAudioRecorder] type=" + c);
        alert("[callbackAudioRecorder] ***************************");
        switch (c) {
            case webapis.audiorecorder.EVENT_RECORDING_ERROR:
                alert("[callbackAudioRecorder] EVENT_RECORDING_ERROR__");
                if (webapis.audiorecorder.callbackFnc != null) {
                    webapis.audiorecorder.callbackFnc(c)
                }
                webapis.audiorecorder.isStarted = false;
                break;
            case webapis.audiorecorder.EVENT_RECORDING_START:
                alert("[callbackAudioRecorder] EVENT_RECORDING_START__");
                if (webapis.audiorecorder.callbackFnc != null) {
                    webapis.audiorecorder.callbackFnc(c)
                }
                webapis.audiorecorder.isStarted = true;
                break;
            case webapis.audiorecorder.EVENT_RECORDING_STOP:
                alert("[callbackAudioRecorder] EVENT_RECORDING_STOP__");
                if (webapis.audiorecorder.callbackFnc != null) {
                    webapis.audiorecorder.callbackFnc(c)
                }
                webapis.audiorecorder.isStarted = false;
                break;
            default:
                alert("[callbackAudioRecorder] eveType=" + c + "_");
                break
        }
    },
    getRecordedSize: function () {
        var a = -1;
        if ((this.isAudioRecorderSupported() == true) && webapis.audiorecorder.isStarted == true) {
            a = this.SEFPlugin.Execute("GetRecordedSize")
        }
        return a
    },
    getAvailableDiskSpace: function (b) {
        var a = -1;
        if (typeof b == "undefined") {
            b = "file://"
        }
        b = webapis.oci.setFilePath(b);
        if (b != null) {
            if (this.isAudioRecorderSupported() == true) {
                a = this.SEFPlugin.Execute("GetAvailableDiskSpace", b)
            }
        }
        return a
    },
    deleteFile: function (a) {
        if (typeof a != "undefined") {
            a = webapis.oci.setFilePath(a);
            if (a != null) {
                if (this.isAudioRecorderSupported() == true) {
                    this.SEFPlugin.Execute("Delete", a)
                }
            }
        }
        return
    },
    list: function (f) {
        if (typeof f == "undefined") {
            f = "file://"
        }
        f = webapis.oci.setFilePath(f);
        if (f != null) {
            var b = new Array();
            if (this.isAudioRecorderSupported() == true) {
                var e = this.SEFPlugin.Execute("List", f);
                var a = e.split(webapis.oci.DELIMITER_EVENT_PARAM);
                var c = Number(a[0]);
                for (iCount = 0; iCount < c; iCount++) {
                    var d = new webapis.audiorecorder.FileInfo();
                    d.fileName = a[1 + iCount * 5];
                    d.nChannel = Number(a[1 + iCount * 5 + 1]);
                    d.nSamplesPerSec = Number(a[1 + iCount * 5 + 2]);
                    d.nBitsPerSamples = Number(a[1 + iCount * 5 + 3]);
                    d.nSize = Number(a[1 + iCount * 5 + 4]);
                    b.push(d)
                }
            }
        }
        return b
    },
    USBInfo: function () {
        var b;
        var a
    },
    getUSBList: function () {
        var a = new Array();
        var d = webapis._plugin("Storage", "GetUSBListSize");
        for (iCount = 0; iCount < d; iCount++) {
            var c = new webapis.oci.USBInfo();
            var e = webapis._plugin("Storage", "GetUSBDeviceID", iCount);
            c.name = webapis._plugin("Storage", "GetUSBModelName", e);
            var b = webapis._plugin("Storage", "GetUSBDevicePartitionNum", e);
            c.path = webapis._plugin("Storage", "GetUSBMountPath", e, b);
            a.push(c)
        }
        return a
    },
    getPlayer: function (a) {
        var b = document.createElement("audio");
        b.src = window.webapis.oci.setFilePath(a);
        return b
    },
    upload: function (i, a, b, e, f, k, h, c, d) {
        if (typeof d == "undefined") {
            d = "2"
        }
        var j = 0;
        i = window.webapis.oci.setFilePath(i);
        if (i != null) {
            var g = webapis._plugin("Download");
            g.OnEvent = a;
            switch (d) {
                case"1":
                    j = webapis._plugin("Download", "StartUpload", b, c, k, h, i, e, f);
                    break;
                case"2":
                    j = webapis._plugin("Download", "StartUpload2", b, i, e, f, k, h);
                    break;
                default:
                    break
            }
        }
        return j
    }
};
webapis.printer = {
    SCREEN_LAYER_ALL: 0, SCREEN_LAYER_OSD: 1, SEFPlugin: null, isPrintingServiceSupported: function () {
        var b = window.location.search.split("modelid=");
        var a = b[1].split("&");
        if (a[0] == "SDK") {
            return true
        } else {
            if (webapis._plugin("Device", "SupportPrinter") == webapis._pluginDef.PLR_TRUE) {
                alert("SupportPrinter");
                return true
            } else {
                alert("Not SupportPrinter");
                return false
            }
        }
    }, runFilePrinting: function () {
    }, runScreenPrinting: function () {
    },
};
webapis.recognition = {
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
        alert("[webapis.js] recognition.setRetValue() called : " + a);
        if (a == 1) {
            return true
        } else {
            return false
        }
    },
    isSEFSupported: function () {
        alert("[webapis.js] recognition.isSEFSupported() called");
        firmwareVer = webapis._plugin("NNavi", "GetFirmware");
        splitString = firmwareVer.split("-");
        var a = splitString[1];
        alert("[webapis.js] recognition.isSEFSupported() platform : " + a.substr(8, 11));
        var b = parseInt(a.substr(8, 11), 10);
        if (b >= 2012 && webapis._plugin("RECOG") != null) {
            return true
        } else {
            alert("[webapis.js] recognition not supported.");
            return false
        }
    },
    isSDK: function () {
        alert("[webapis.js] recognition.isSDK() called");
        var b = decodeURI(window.location.search);
        splitString = b.split("&");
        var a = splitString[3];
        splitString = a.split("=");
        var c = splitString[1];
        alert("[webapis.js] recognition.isSDK() tmp: " + a + "  modelID: " + c);
        if (c == "SDK") {
            return true
        } else {
            return false
        }
    },
    initialize: function () {
        alert("[webapis.js] recognition.initialize() called");
        webapis.recognition.plRecog = webapis._plugin("RECOG");
        if (webapis.recognition.plRecog == null) {
            alert("[webapis.js] recognition not supported");
            return false
        }
        if (webapis.recognition.blinitialized) {
            return true
        }
        webapis.recognition.blinitialized = true;
        alert("[webapis.js] recognition.initialize() : plRecog = " + webapis.recognition.plRecog);
        webapis.recognition.plRecog.OnEvent = webapis.recognition._handleEvent;
        return true
    },
    setCallback: function (b, a, c) {
        alert("[webapis.js] recognition.setCallback() called");
        webapis.recognition.oCallback[b] = c;
        webapis.recognition.oCallback_name[b] = a
    },
    unsetCallback: function (a) {
        alert("[webapis.js] recognition.unsetCallback() called");
        webapis.recognition.oCallback[a] = null;
        webapis.recognition.oCallback_name[a] = null
    },
    _handleEvent: function (d, f, i) {
        alert("[webapis.js] recognition.handleEvent() called");
        alert("[webapis.js] recognition.handleEvent() " + d + ", " + f + ", " + i);
        var e = null;
        switch (d) {
            case webapis.recognition.MESSAGE_RECOGNITION_VOICE_EMP:
                e = webapis.recognition.PL_RECOGNITION_TYPE_VOICE;
                break;
            case webapis.recognition.MESSAGE_RECOGNITION_GESTURE_EMP:
                e = webapis.recognition.PL_RECOGNITION_TYPE_GESTURE;
                break;
            case webapis.recognition.MESSAGE_RECOGNITION_FACE_EMP:
                e = webapis.recognition.PL_RECOGNITION_TYPE_FACE;
                break;
            default:
                alert("unknown recognition type");
                return false;
                break
        }
        splitString = f.split("-");
        var a = splitString[0];
        var b = splitString[1];
        if (webapis.recognition.oCallback[e] && webapis.recognition.oCallback[e] instanceof Function) {
            if (!webapis.recognition.isSubscribeEvent) {
                var g = {recognitiontype: e, eventtype: a, name: b, result: i};
                webapis.recognition.oCallback[e](g)
            } else {
                if (webapis.recognition.isSubscribeEvent && e == webapis.recognition.PL_RECOGNITION_TYPE_VOICE) {
                    switch (a) {
                        case"EVENT_VOICE_BEGIN_MONITOR":
                        case"EVENT_VOICE_BTSOUND_START":
                            var h = '{"helpbarType":"HELPBAR_TYPE_VOICE_SERVER_GUIDE","guideText":"Say the word or phrase you wish to type"}';
                            webapis._plugin("RECOG", "SetVoiceHelpbarInfo", h);
                            break;
                        case"EVENT_VOICE_RECOG_RESULT":
                            var c = a + "-" + webapis.recognition.oCallback_name[e] + "-" + i;
                            webapis.recognition.oCallback[e](c);
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
        alert("[webapis.js] recognition.SDKTest_GenerateExpectedResult() called");
        if (!webapis.recognition.isSDK() && !webapis.recognition.isSEFSupported()) {
            return false
        }
        splitString = b.split("&&");
        var d = splitString;
        alert("[webapis.js] recognition.SDKTest_GenerateExpectedResult() list: " + d);
        count = 0;
        timer = setInterval("setEvent()", a * 1000);
        setEvent = function () {
            if (count < c) {
                webapis.recognition._handleEvent(webapis.recognition.MESSAGE_RECOGNITION_VOICE_EMP, "EVENT_VOICE_RECOG_RESULT-" + webapis.recognition.oCallback_name[0], d[count]);
                count++
            } else {
                clearInterval(timer)
            }
        };
        return true
    },
    SubscribeEvent: function (c, b, d) {
        alert("[webapis.js] recognition.SubscribeEvent() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        if (webapis.recognition.initialize()) {
            webapis.recognition.is3rd = true;
            webapis.recognition.isSubscribeEvent = true;
            webapis.recognition.setCallback(c, b, d);
            var a = null;
            switch (c) {
                case webapis.recognition.PL_RECOGNITION_TYPE_VOICE:
                    a = "MESSAGE_RECOGNITION_VOICE";
                    break;
                case webapis.recognition.PL_RECOGNITION_TYPE_GESTURE:
                    a = "MESSAGE_RECOGNITION_GESTURE";
                    break;
                case webapis.recognition.PL_RECOGNITION_TYPE_FACE:
                    a = "MESSAGE_RECOGNITION_FACE";
                    break
            }
            return webapis.recognition.setRetValue(webapis._plugin("RECOG", "SubscribeEvent", a, b))
        } else {
            return false
        }
    },
    UnsubscribeEvent: function (c, b) {
        alert("[webapis.js] recognition.UnsubscribeEvent() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        webapis.recognition.is3rd = false;
        webapis.recognition.isSubscribeEvent = false;
        webapis.recognition.unsetCallback(c);
        var a = null;
        switch (c) {
            case webapis.recognition.PL_RECOGNITION_TYPE_VOICE:
                a = "MESSAGE_RECOGNITION_VOICE";
                break;
            case webapis.recognition.PL_RECOGNITION_TYPE_GESTURE:
                a = "MESSAGE_RECOGNITION_GESTURE";
                break;
            case webapis.recognition.PL_RECOGNITION_TYPE_FACE:
                a = "MESSAGE_RECOGNITION_FACE";
                break
        }
        return webapis.recognition.setRetValue(webapis._plugin("RECOG", "UnsubscribeEvent", a, b))
    },
    SubscribeExEvent: function (c, b, d) {
        alert("[webapis.js] recognition.SubscribeExEvent() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        if (webapis.recognition.initialize()) {
            webapis.recognition.is3rd = true;
            webapis.recognition.isSubscribeEvent = false;
            webapis.recognition.setCallback(c, b, d);
            var a = null;
            switch (c) {
                case webapis.recognition.PL_RECOGNITION_TYPE_VOICE:
                    a = "MESSAGE_RECOGNITION_VOICE";
                    break;
                case webapis.recognition.PL_RECOGNITION_TYPE_GESTURE:
                    a = "MESSAGE_RECOGNITION_GESTURE";
                    break;
                case webapis.recognition.PL_RECOGNITION_TYPE_FACE:
                    a = "MESSAGE_RECOGNITION_FACE";
                    break
            }
            return webapis.recognition.setRetValue(webapis._plugin("RECOG", "SubscribeEvent", a, b))
        } else {
            return false
        }
    },
    UnsubscribeExEvent: function (c, b) {
        alert("[webapis.js] recognition.UnsubscribeExEvent() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        webapis.recognition.is3rd = false;
        webapis.recognition.unsetCallback(c);
        var a = null;
        switch (c) {
            case webapis.recognition.PL_RECOGNITION_TYPE_VOICE:
                a = "MESSAGE_RECOGNITION_VOICE";
                break;
            case webapis.recognition.PL_RECOGNITION_TYPE_GESTURE:
                a = "MESSAGE_RECOGNITION_GESTURE";
                break;
            case webapis.recognition.PL_RECOGNITION_TYPE_FACE:
                a = "MESSAGE_RECOGNITION_FACE";
                break
        }
        return webapis.recognition.setRetValue(webapis._plugin("RECOG", "UnsubscribeEvent", a, b))
    },
    IsRecognitionSupported: function () {
        alert("[webapis.js] recognition.IsRecognitionSupported() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        return webapis.recognition.setRetValue(webapis._plugin("RECOG", "RecogEMPUsingStatus"))
    },
    IsRecognitionAppAvailable: function () {
        alert("[webapis.js] recognition.IsRecognitionAppAvailable() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        return webapis.recognition.setRetValue(webapis._plugin("RECOG", "RecogEMPUsingStatus"))
    },
    RegisterRecognition: function (c, b, d) {
        alert("[webapis.js] recognition.RegisterRecognition() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        if (webapis.recognition.initialize()) {
            webapis.recognition.setCallback(c, b, d);
            webapis.recognition.is3rd = false;
            webapis.recognition.isSubscribeEvent = false;
            if (!webapis.recognition.isSDK()) {
                var a = null;
                switch (c) {
                    case webapis.recognition.PL_RECOGNITION_TYPE_VOICE:
                        a = "MESSAGE_RECOGNITION_VOICE";
                        break;
                    case webapis.recognition.PL_RECOGNITION_TYPE_GESTURE:
                        a = "MESSAGE_RECOGNITION_GESTURE";
                        break;
                    case webapis.recognition.PL_RECOGNITION_TYPE_FACE:
                        a = "MESSAGE_RECOGNITION_FACE";
                        break
                }
                return webapis.recognition.setRetValue(webapis._plugin("RECOG", "SubscribeEvent", a, b))
            }
        } else {
            return false
        }
    },
    UnregisterRecognition: function (c, b) {
        alert("[webapis.js] recognition.UnregisterRecognition() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        webapis.recognition.unsetCallback(c);
        if (!webapis.recognition.isSDK()) {
            var a = null;
            switch (c) {
                case webapis.recognition.PL_RECOGNITION_TYPE_VOICE:
                    a = "MESSAGE_RECOGNITION_VOICE";
                    break;
                case webapis.recognition.PL_RECOGNITION_TYPE_GESTURE:
                    a = "MESSAGE_RECOGNITION_GESTURE";
                    break;
                case webapis.recognition.PL_RECOGNITION_TYPE_FACE:
                    a = "MESSAGE_RECOGNITION_FACE";
                    break
            }
            return webapis.recognition.setRetValue(webapis._plugin("RECOG", "UnsubscribeEvent", a, b))
        }
    },
    SetVoiceHelpbarInfo: function (a) {
        alert("[webapis.js] recognition.SetVoiceHelpbarInfo() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        return webapis.recognition.setRetValue(webapis._plugin("RECOG", "SetVoiceHelpbarInfo", a))
    },
    SetVoiceCandidateList: function (a) {
        alert("[webapis.js] recognition.SetVoiceCandidateList() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        if (!webapis.recognition.isSDK()) {
            return webapis.recognition.setRetValue(webapis._plugin("RECOG", "SetVoiceCandidateList", a))
        }
    },
    SetVoiceHelpbarItemsList: function (a) {
        alert("[webapis.js] recognition.SetVoiceHelpbarItemsList() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        if (!webapis.recognition.isSDK()) {
            return webapis.recognition.setRetValue(webapis._plugin("RECOG", "SetVoiceHelpbarItemsList", a))
        }
    },
    SetVoiceHelpbarType: function (c, b, a, d) {
        alert("[webapis.js] recognition.SetVoiceHelpbarType() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        if (!webapis.recognition.isSDK()) {
            return webapis.recognition.setRetValue(webapis._plugin("RECOG", "SetVoiceHelpbarType", c, b, a, d))
        }
    },
    GetCurrentVoiceLanguage: function () {
        alert("[webapis.js] recognition.GetCurrentVoiceLanguage() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        var a = webapis._plugin("RECOG", "GetCurrentVoiceLanguage");
        if (a == "arb") {
            return "ar"
        } else {
            return a
        }
    },
    GetVoiceRecognitionStatus: function () {
        alert("[webapis.js] recognition.GetVoiceRecognitionStatus() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        return webapis._plugin("RECOG", "GetVoiceRecognitionStatus")
    },
    EnableVoiceRecognition: function () {
        alert("[webapis.js] recognition.EnableVoiceRecognition() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        if (!webapis.recognition.isSDK() && !webapis.recognition.is3rd) {
            return webapis.recognition.setRetValue(webapis._plugin("RECOG", "EnableVoiceRecognition"))
        }
    },
    DisableVoiceRecognition: function () {
        alert("[webapis.js] recognition.DisableVoiceRecognition() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        if (!webapis.recognition.isSDK() && !webapis.recognition.is3rd) {
            return webapis.recognition.setRetValue(webapis._plugin("RECOG", "DisableVoiceRecognition"))
        }
    },
    IsVoiceRecognitionEnabled: function () {
        alert("[webapis.js] recognition.IsVoiceRecognitionEnabled() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        return webapis.recognition.setRetValue(webapis._plugin("RECOG", "IsVoiceRecognitionEnabled"))
    },
    StartVoiceRecognition: function () {
        alert("[webapis.js] recognition.StartGestureRecognition() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        if (!webapis.recognition.isSDK()) {
            return webapis.recognition.setRetValue(webapis._plugin("RECOG", "StartGestureRecognition"))
        } else {
            return false
        }
    },
    StopVoiceRecognition: function () {
        alert("[webapis.js] recognition.StopVoiceRecognition() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        if (!webapis.recognition.isSDK()) {
            return webapis.recognition.setRetValue(webapis._plugin("RECOG", "StopVoiceRecognition"))
        } else {
            return false
        }
    },
    SetGestureHelpbarInfo: function (a) {
        alert("[webapis.js] recognition.SetGestureHelpbarInfo() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        return webapis.recognition.setRetValue(webapis._plugin("RECOG", "SetGestureHelpbarInfo", a))
    },
    GetGestureRecognitionStatus: function () {
        alert("[webapis.js] recognition.GetGestureRecognitionStatus() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        if (!webapis.recognition.isSDK()) {
            return webapis._plugin("RECOG", "GetGestureRecognitionStatus")
        } else {
            return false
        }
    },
    EnableGestureRecognition: function () {
        alert("[webapis.js] recognition.EnableGestureRecognition() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        if (!webapis.recognition.isSDK() && !webapis.recognition.is3rd) {
            return webapis.recognition.setRetValue(webapis._plugin("RECOG", "EnableGestureRecognition"))
        } else {
            return false
        }
    },
    DisableGestureRecognition: function () {
        alert("[webapis.js] recognition.DisableGestureRecognition() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        if (!webapis.recognition.isSDK() && !webapis.recognition.is3rd) {
            return webapis.recognition.setRetValue(webapis._plugin("RECOG", "EnableGestureRecognition"))
        } else {
            return false
        }
    },
    IsGestureRecognitionEnabled: function () {
        alert("[webapis.js] recognition.IsGestureRecognitionEnabled() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        return webapis.recognition.setRetValue(webapis._plugin("RECOG", "IsGestureRecognitionEnabled"))
    },
    StartGestureRecognition: function () {
        alert("[webapis.js] recognition.StartGestureRecognition() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        if (!webapis.recognition.isSDK()) {
            return webapis.recognition.setRetValue(webapis._plugin("RECOG", "StartGestureRecognition"))
        } else {
            return false
        }
    },
    StopGestureRecognition: function () {
        alert("[webapis.js] recognition.StopGestureRecognition() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        if (!webapis.recognition.isSDK()) {
            return webapis.recognition.setRetValue(webapis._plugin("RECOG", "StopGestureRecognition"))
        } else {
            return false
        }
    },
    ShowVoiceHelpbar: function () {
        alert("[webapis.js] recognition.ShowVoiceHelpbar() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        return webapis.recognition.setRetValue(webapis._plugin("RECOG", "ShowVoiceHelpbar"))
    },
    HideVoiceHelpbar: function () {
        alert("[webapis.js] recognition.HideVoiceHelpbar() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        return webapis.recognition.setRetValue(webapis._plugin("RECOG", "HideVoiceHelpbar"))
    },
    SetVoiceTimeout: function (a) {
        alert("[webapis.js] recognition.SetVoiceTimeout() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        return webapis.recognition.setRetValue(webapis._plugin("RECOG", "SetVoiceTimeout", a))
    },
    GetVoiceServerLanguage: function () {
        alert("[webapis.js] recognition.GetVoiceServerLanguage() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        if (!webapis.recognition.isSDK()) {
            var a = webapis._plugin("RECOG", "GetCurrentVoiceLanguage");
            if (a == "arb") {
                return "ar"
            } else {
                return a
            }
        }
    },
    IsVoiceServerLanguageSupported: function () {
        alert("[webapis.js] recognition.IsVoiceServerLanguageSupported() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        if (!webapis.recognition.isSDK()) {
            return webapis.recognition.setRetValue(webapis._plugin("RECOG", "IsVoiceServerLanguageSupported"))
        }
    },
    IsActivatedVoiceRecognition: function () {
        alert("[webapis.js] recognition.IsActivatedVoiceRecognition() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        if (!webapis.recognition.isSDK()) {
            return webapis.recognition.setRetValue(webapis._plugin("RECOG", "IsActivatedVoiceRecognition"))
        }
    },
    EnableGestureHint: function () {
        alert("[webapis.js] recognition.EnableGestureHint() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        if (!webapis.recognition.isSDK()) {
            return webapis.recognition.setRetValue(webapis._plugin("RECOG", "EnableGestureHint"))
        } else {
            return false
        }
    },
    DisableGestureHint: function () {
        alert("[webapis.js] recognition.DisableGestureHint() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        if (!webapis.recognition.isSDK()) {
            return webapis.recognition.setRetValue(webapis._plugin("RECOG", "DisableGestureHint"))
        } else {
            return false
        }
    },
    EnableReturnMotion: function () {
        alert("[webapis.js] recognition.EnableReturnMotion() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        if (!webapis.recognition.isSDK()) {
            return webapis.recognition.setRetValue(webapis._plugin("RECOG", "EnableReturnMotion"))
        } else {
            return false
        }
    },
    DisableReturnMotion: function () {
        alert("[webapis.js] recognition.DisableReturnMotion() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        if (!webapis.recognition.isSDK()) {
            return webapis.recognition.setRetValue(webapis._plugin("RECOG", "DisableReturnMotion"))
        } else {
            return false
        }
    },
    EnableNativeTwoCursorTheme: function () {
        alert("[webapis.js] recognition.EnableNativeTwoCursorTheme() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        if (!webapis.recognition.isSDK()) {
            return webapis.recognition.setRetValue(webapis._plugin("RECOG", "EnableNativeTwoCursorTheme"))
        } else {
            return false
        }
    },
    DisableNativeTwoCursorTheme: function () {
        alert("[webapis.js] recognition.DisableNativeTwoCursorTheme() called ");
        if (!webapis.recognition.isSEFSupported()) {
            return false
        }
        if (!webapis.recognition.isSDK()) {
            return webapis.recognition.setRetValue(webapis._plugin("RECOG", "DisableNativeTwoCursorTheme"))
        } else {
            return false
        }
    }
};
webapis.pvr = {
    bPVRPluginInitialiezed: false, plPVR: null, initialize: function (b) {
        alert("[webapis.js] pvr.initialize() called");
        webapis.pvr.bPVRPluginInitialiezed = true;
        webapis.pvr.plPVR = webapis._plugin("PVR");
        var a = webapis._plugin("PVR", "OpenPVRWidget", b);
        return a
    }, registerEventCallback: function (a) {
        alert("[webapis.js] pvr.registerEventCallback() called");
        if (typeof a == "function" && webapis.pvr.bPVRPluginInitialiezed == true) {
            webapis.pvr.plPVR.OnEvent = a
        }
    }, openPVRWidget: function (b) {
        alert("[webapis.js] pvr.openPVRWidget() called");
        var a = webapis._plugin("PVR", "OpenPVRWidget", b);
        return a
    }, closePVRWidget: function (b) {
        alert("[webapis.js] pvr.closePVRWidget() called");
        var a = webapis._plugin("PVR", "ClosePVRWidget", b);
        return a
    }, getMaxRecordNum: function () {
        alert("[webapis.js] pvr.getMaxRecordNum() called");
        var a = webapis._plugin("PVR", "GetMaxRecordNum");
        return a
    }, getHandle: function (a) {
        alert("[webapis.js] pvr.GetHandle() called");
        var b = webapis._plugin("PVR", "GetHandle", a);
        return b
    }, recordStart: function (e, a, b, d) {
        alert("[webapis.js] pvr.recordStart() called");
        var c = webapis._plugin("PVR", "RecordStart", e, a, b, d);
        return c
    }, recordStop: function (b) {
        alert("[webapis.js] pvr.recordStop() called");
        var a = webapis._plugin("PVR", "RecordStop", b);
        return a
    }, timeshiftPlayStart: function (e, a, b, d) {
        alert("[webapis.js] pvr.timeshiftPlayStart() called");
        var c = webapis._plugin("PVR", "TimeshiftPlayStart", e, a, b, d);
        return c
    }, timeshiftPauseStart: function (e, a, b, d) {
        alert("[webapis.js] pvr.timeshiftPauseStart() called");
        var c = webapis._plugin("PVR", "TimeshiftPauseStart", e, a, b, d);
        return c
    }, timeshiftStop: function (b) {
        alert("[webapis.js] pvr.timeshiftStop() called");
        var a = webapis._plugin("PVR", "TimeshiftStop", b);
        return a
    }, playStart: function (c, b) {
        alert("[webapis.js] pvr.playStart() called");
        var a = webapis._plugin("PVR", "PlayStart", c, b);
        return a
    }, playPause: function (c, b) {
        alert("[webapis.js] pvr.playPause() called");
        var a = webapis._plugin("PVR", "PlayPause", c, b);
        return a
    }, playResume: function (b) {
        alert("[webapis.js] pvr.playResume() called");
        var a = webapis._plugin("PVR", "PlayResume", b);
        return a
    }, playForward: function (c, b) {
        alert("[webapis.js] pvr.playForward() called");
        var a = webapis._plugin("PVR", "PlayForward", c, b);
        return a
    }, playRewind: function (d, c, a) {
        alert("[webapis.js] pvr.playRewind() called");
        var b = webapis._plugin("PVR", "PlayRewind", d, c, a);
        return b
    }, playSkip: function (e, d, c, a) {
        alert("[webapis.js] pvr.playSkip() called");
        var b = webapis._plugin("PVR", "PlaySkip", e, d, c, a);
        return b
    }, playStop: function (b) {
        alert("[webapis.js] pvr.playStop() called");
        var a = webapis._plugin("PVR", "PlayStop", b);
        return a
    }, playRecordStop: function (b) {
        alert("[webapis.js] pvr.playRecordStop() called");
        var a = webapis._plugin("PVR", "PlayRecordStop", b);
        return a
    }, getRecordState: function (b) {
        alert("[webapis.js] pvr.getRecordState() called");
        var a = webapis._plugin("PVR", "GetRecordState", b);
        return a
    }, getPlayState: function (b) {
        alert("[webapis.js] pvr.GetPlayState() called");
        var a = webapis._plugin("PVR", "GetPlayState", b);
        return a
    }, getRecordProgress: function (b) {
        alert("[webapis.js] pvr.GetRecordProgress() called");
        var a = webapis._plugin("PVR", "GetRecordProgress", b);
        return a
    }, getPlayProgress: function (b) {
        alert("[webapis.js] pvr.GetPlayProgress() called");
        var a = webapis._plugin("PVR", "GetPlayProgress", b);
        return a
    }, deleteRecoredFile: function (b) {
        alert("[webapis.js] pvr.deleteRecoredFile() called");
        var a = webapis._plugin("PVR", "DeleteRecoredFile", b);
        return a
    }, getRecDevCapacity: function (a, c) {
        alert("[webapis.js] pvr.getRecDevCapacity() called");
        var b = webapis._plugin("PVR", "GetRecDevCapacity", a, c);
        return b
    },
};
function allshare_helper() {
}
allshare_helper.setReadOnlyAttribute = function (c, a, b) {
    c.__defineGetter__(a, function () {
        return b
    })
};
allshare_helper.log = {
    flags: {
        print: true,
        nonimplemented: true,
        trace: false,
        info: false,
        debug: false,
        error: true
    }
};
allshare_helper.log.print = function (a) {
    if (this.flags.print) {
        alert("Print: " + a)
    }
};
allshare_helper.log.nonimplemented = function (a) {
    if (this.flags.nonimplemented) {
        alert("Not implemented: " + a)
    }
};
allshare_helper.log.trace = function (a) {
    if (this.flags.trace) {
        alert("Trace: " + a)
    }
};
allshare_helper.log.info = function (a) {
    if (this.flags.info) {
        alert("Info: " + a)
    }
};
allshare_helper.log.debug = function (a) {
    if (this.flags.debug) {
        alert("Debug: " + a)
    }
};
allshare_helper.log.error = function (a) {
    if (this.flags.error) {
        alert("Error: " + a)
    }
};
allshare_helper.convertStrDurationToSec = function (e) {
    this.isNumberChar = function (h) {
        var g = h.charCodeAt(0);
        if (g >= 48 && g <= 57) {
            return true
        } else {
            return false
        }
    };
    this.getNumber = function (l) {
        var g = 0;
        var j = false;
        for (var h = 0; h < l.length; h++) {
            var k = l.charAt(h);
            if (this.isNumberChar(k)) {
                g *= 10;
                g += parseInt(k);
                j = true
            } else {
                break
            }
        }
        return {rez_num: g, rez_ok: j, rez_str: l.substring(h)}
    };
    this.getDelimiter = function (i, g) {
        var h = {rez_ok: false, rez_str: i};
        if (i.length > 0) {
            if (i.charAt(0) == g) {
                h.rez_ok = true;
                h.rez_str = i.substring(1)
            }
        }
        return h
    };
    var f = this.getNumber(e);
    if (!f.rez_ok) {
        return 0
    }
    var d = this.getDelimiter(f.rez_str, ":");
    if (!d.rez_ok) {
        return 0
    }
    var b = this.getNumber(d.rez_str);
    if (!b.rez_ok) {
        return 0
    }
    var c = this.getDelimiter(b.rez_str, ":");
    if (!c.rez_ok) {
        return 0
    }
    var a = this.getNumber(c.rez_str);
    if (!a.rez_ok) {
        return 0
    }
    if (a.rez_str.length != 0) {
        var d = this.getDelimiter(b.rez_str, ".");
        if (!d.rez_ok) {
            return 0
        }
    }
    return f.rez_num * 3600 + b.rez_num * 60 + a.rez_num
};
allshare_helper.createWebAPIError = function (b, c) {
    var a = {};
    allshare_helper.setReadOnlyAttribute(a, "name", b || "UnknownError");
    allshare_helper.setReadOnlyAttribute(a, "message", c || "An unknown error has occurred");
    return a
};
allshare_helper.createWebAPIException = function (b, d) {
    var a = {};
    var c = 0;
    b = b || "UnknownError";
    d = d || "An unknown error has occurred";
    switch (b) {
        case"IndexSizeError":
            c = 1;
            break;
        case"HierarchyRequestError":
            c = 3;
            break;
        case"WrongDocumentError":
            c = 4;
            break;
        case"InvalidCharacterError":
            c = 5;
            break;
        case"NoModificationAllowedError":
            c = 7;
            break;
        case"NotFoundError":
            c = 8;
            break;
        case"NotSupportedError":
            c = 9;
            break;
        case"InvalidStateError":
            c = 11;
            break;
        case"SyntaxError":
            c = 12;
            break;
        case"InvalidModificationError":
            c = 13;
            break;
        case"NamespaceError":
            c = 14;
            break;
        case"InvalidAccessError":
            c = 15;
            break;
        case"TypeMismatchError":
            c = 17;
            break;
        case"SecurityError":
            c = 18;
            break;
        case"NetworkError":
            c = 19;
            break;
        case"AbortError":
            c = 20;
            break;
        case"URLMismatchError":
            c = 21;
            break;
        case"QuotaExceededError":
            c = 22;
            break;
        case"TimeoutError":
            c = 23;
            break;
        case"InvalidNodeTypeError":
            c = 24;
            break;
        case"DataCloneError":
            c = 25;
            break;
        default:
            break
    }
    allshare_helper.setReadOnlyAttribute(a, "code", c);
    allshare_helper.setReadOnlyAttribute(a, "name", b);
    allshare_helper.setReadOnlyAttribute(a, "message", d);
    return a
};
if (window.webapis == null) {
    allshare_helper.setReadOnlyAttribute(window, "webapis", {});
    allshare_helper.log.debug("added webapis object into window")
}
if (window.webapis.allshare == null) {
    allshare_helper.setReadOnlyAttribute(window.webapis, "allshare", {});
    allshare_helper.log.debug("added allshare object into webapis")
}
window.webapis.allshare.VERSION_ALLSHARE_WEBAPI = "1.3.0.9";
allshare_helper.log.print("AllShare Web API  JS: " + window.webapis.allshare.VERSION_ALLSHARE_WEBAPI);
allshare_helper.RequestsHelper = function () {
};
allshare_helper.RequestsHelper._requestsList = [];
allshare_helper.RequestsHelper._requestCounter = 0;
allshare_helper.RequestsHelper._uniqRequestIdSupported = false;
allshare_helper.RequestsHelper.RequestInfo = function (a) {
    this.id = a
};
allshare_helper.RequestsHelper.registerRequest = function () {
    allshare_helper.log.trace("RequestsHelper.registerRequest() begin");
    var b = "reqId_" + this._requestCounter;
    var a = new allshare_helper.RequestsHelper.RequestInfo(b);
    allshare_helper.log.debug("RequestsHelper.registerRequest() requestCounter: " + this._requestCounter + "  requestId:" + b);
    this._requestCounter++;
    if (this._uniqRequestIdSupported == false) {
        if (this._requestsList.length > 0) {
            return null
        }
    }
    this._requestsList.push(a);
    allshare_helper.log.trace("RequestsHelper.registerRequest() end");
    return a
};
allshare_helper.RequestsHelper.getRequest = function (c) {
    allshare_helper.log.trace("RequestsHelper.getRequest()");
    allshare_helper.log.debug("RequestsHelper.getRequest(requestId:" + c + ")");
    if (this._uniqRequestIdSupported == false) {
        if (this._requestsList.length > 0) {
            return this._requestsList[0]
        } else {
            return null
        }
    }
    for (var b = 0; b < this._requestsList.length; b++) {
        var a = this._requestsList[b];
        if (a.id == c) {
            return a
        }
    }
    allshare_helper.log.debug("RequestsHelper.getRequest() Warning! Can't find search request with id:" + c);
    return null
};
allshare_helper.RequestsHelper.removeRequest = function (c) {
    allshare_helper.log.trace("RequestsHelper.removeRequest() begin");
    allshare_helper.log.debug("RequestsHelper.removeRequest(requestId:" + c + ")");
    if (this._uniqRequestIdSupported == false) {
        if (this._requestsList.length > 0) {
            this._requestsList.splice(0, 1)
        }
        return
    }
    for (var b = 0; b < this._requestsList.length;) {
        var a = this._requestsList[b];
        if (a.id == c) {
            allshare_helper.log.debug("removed requestId:" + c);
            this._requestsList.splice(b, 1);
            continue
        }
        b++
    }
    allshare_helper.log.trace("RequestsHelper.removeRequest() end")
};
allshare_helper.setReadOnlyAttribute(window.webapis.allshare, "serviceconnector", {});
window.webapis.allshare.serviceconnector._ServiceState = {DISABLED: "DISABLED", ENABLED: "ENABLED", UNKNOWN: "UNKNOWN"};
window.webapis.allshare.serviceconnector._serviceProvider = null;
window.webapis.allshare.serviceconnector._ServiceProvider = {};
window.webapis.allshare.serviceconnector._ServiceProvider.getDeviceFinder = function () {
    allshare_helper.log.trace("window.webapis.allshare.serviceconnector._ServiceProvider.getDeviceFinder()");
    return window.webapis.allshare.serviceconnector._DeviceFinder
};
window.webapis.allshare.serviceconnector._ServiceProvider.getServiceState = function () {
    allshare_helper.log.trace("window.webapis.allshare.serviceconnector._ServiceProvider.getServiceState()");
    var b = "UNKNOWN";
    var a = window.webapis.allshare._plugin("AllShare");
    if (a) {
        b = "ENABLED"
    }
    return b
};
window.webapis.allshare.serviceconnector.createServiceProvider = function (a, c) {
    allshare_helper.log.trace("window.webapis.allshare.serviceconnector.createServiceProvider() begin");
    if (typeof a != "function") {
        allshare_helper.log.error("Type of successCallback is not function");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of successCallback is not function")
    }
    if (c != null) {
        if (typeof c != "function") {
            allshare_helper.log.error("Type of errorCallback is not function");
            throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of errorCallback is not function")
        }
    }
    if (this._serviceprovider) {
        allshare_helper.log.error("connection with the allshare service alreday exists");
        throw allshare_helper.createWebAPIException("AlreadyConnectedError", "connection with the allshare service alreday exists")
    } else {
        var b = window.webapis.allshare._plugin("AllShare");
        if (!b) {
            allshare_helper.log.error("AllShare plugin is not exist.");
            throw allshare_helper.createWebAPIException("InvalidStateError", "AllShare plugin is not exist.")
        }
        b.OnEvent = window.webapis.allshare._onAllsharePluginEvent;
        this._serviceprovider = this._ServiceProvider;
        try {
            a(this._serviceprovider)
        } catch (d) {
            allshare_helper.log.error("exception during success callback");
            allshare_helper.log.error("e name:" + (d && (d.name || "")) + "   message:" + (d && (d.message || "")))
        }
    }
    allshare_helper.log.trace("window.webapis.allshare.serviceconnector.createServiceProvider() end")
};
window.webapis.allshare.serviceconnector.deleteServiceProvider = function (b, c) {
    allshare_helper.log.trace("window.webapis.allshare.serviceconnector.deleteServiceProvider() begin");
    if (typeof b != "function") {
        allshare_helper.log.error("Type of successCallback is not function");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of successCallback is not function")
    }
    if (c != null) {
        if (typeof c != "function") {
            allshare_helper.log.error("Type of errorCallback is not function");
            throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of errorCallback is not function")
        }
    }
    if (this._serviceprovider) {
        var g = this._serviceprovider;
        this._serviceprovider = null;
        try {
            b(g)
        } catch (d) {
            allshare_helper.log.error("exception during success callback");
            allshare_helper.log.error("e name:" + (d && (d.name || "")) + "   message:" + (d && (d.message || "")))
        }
    } else {
        try {
            var a = allshare_helper.createWebAPIError("NotFoundError", "serviceProvider does not exist.");
            var f = this._ServiceState.UNKNOWN;
            if (c) {
                c(a, f)
            }
        } catch (d) {
            allshare_helper.log.error("exception during error callback");
            allshare_helper.log.error("e name:" + (d && (d.name || "")) + "   message:" + (d && (d.message || "")))
        }
    }
    allshare_helper.log.trace("window.webapis.allshare.serviceconnector.deleteServiceProvider() end")
};
window.webapis.allshare.serviceconnector.getServiceProvider = function () {
    allshare_helper.log.trace("window.webapis.allshare.serviceconnector.getServiceProvider()");
    return this._serviceprovider
};
window.webapis.allshare.serviceconnector._DeviceFinder = function () {
};
window.webapis.allshare.serviceconnector._DeviceFinder._listeners = [];
window.webapis.allshare.serviceconnector._DeviceFinder._listenersCounter = 0;
window.webapis.allshare.serviceconnector._DeviceFinder._ListenerInfo = function (b, a) {
    allshare_helper.log.debug("DeviceFinder._ListenerInfo(discoveryCallback, listenerId:" + a + ")");
    this.discoveryCallback = b;
    this.listenerId = a
};
window.webapis.allshare.serviceconnector._DeviceFinder._addedDevice = function (b) {
    allshare_helper.log.trace("DeviceFinder._addedDevice() begin");
    allshare_helper.log.debug("DeviceFinder._addedDevice(device.name:" + b.name + ") begin");
    for (var a = 0; a < this._listeners.length; a++) {
        allshare_helper.log.debug("DeviceFinder._addedDevice() call[" + a + "] listener id : " + this._listeners[a].listenerId);
        try {
            this._listeners[a].discoveryCallback.ondeviceadded(b)
        } catch (c) {
            allshare_helper.log.error("exception during ondeviceadded callback");
            allshare_helper.log.error("e name:" + (c && (c.name || "")) + "   message:" + (c && (c.message || "")))
        }
    }
    allshare_helper.log.trace("DeviceFinder._addedDevice() end")
};
window.webapis.allshare.serviceconnector._DeviceFinder._removedDevice = function (b) {
    allshare_helper.log.trace("DeviceFinder._removedDevice() begin");
    allshare_helper.log.debug("DeviceFinder._removedDevice(device.name:" + b.name + ") begin");
    for (var a = 0; a < this._listeners.length; a++) {
        try {
            this._listeners[a].discoveryCallback.ondeviceremoved(b)
        } catch (c) {
            allshare_helper.log.error("exception during ondeviceremoved callback");
            allshare_helper.log.error("e name:" + (c && (c.name || "")) + "   message:" + (c && (c.message || "")))
        }
    }
    allshare_helper.log.trace("DeviceFinder._removedDevice() end")
};
window.webapis.allshare.serviceconnector._DeviceFinder.getDevice = function (deviceType, id) {
    allshare_helper.log.trace("DeviceFinder.getDevice() begin");
    allshare_helper.log.debug("DeviceFinder.getDevice(deviceType:" + deviceType + ", id:" + id + ")");
    if (typeof deviceType != "string") {
        allshare_helper.log.error("Type of deviceType is not string");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of deviceType is not string")
    }
    if (deviceType != "MEDIAPROVIDER") {
        allshare_helper.log.print("Supported only deviceType == 'MEDIAPROVIDER'")
    }
    if (typeof id == "object") {
        if (typeof id.ToString == "function") {
            id = id.ToString()
        } else {
            allshare_helper.log.error("Type casting is not available for id argument");
            throw allshare_helper.createWebAPIException("InvalidValuesError", "Type casting is not available for id argument")
        }
    }
    if (typeof id != "string") {
        allshare_helper.log.error("Type of id is not string");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of id is not string")
    }
    var allsharePlugin = window.webapis.allshare._plugin("AllShare");
    if (!allsharePlugin) {
        allshare_helper.log.error("AllShare plugin is not exist.");
        throw allshare_helper.createWebAPIException("InvalidStateError", "AllShare plugin is not exist.")
    }
    var retValue = null;
    var json = window.webapis.allshare._plugin(allsharePlugin, "GetDeviceList", 0);
    if (json && json != -1) {
        var obj = null;
        try {
            obj = eval("(" + json + ")");
            if (obj && obj.length) {
                for (var i = 0; i < obj.length; i++) {
                    var device = allshare_helper.createDeviceFactory(obj[i]);
                    if (device && ((device.deviceType == deviceType) && (device.id == id))) {
                        retValue = device;
                        break
                    }
                }
            }
        } catch (e) {
            allshare_helper.log.error("eval failed");
            allshare_helper.log.error("exception e.name:" + e.name + "   e.message:" + e.message)
        }
    } else {
        allshare_helper.log.error("allshare plugin return error from GetDeviceList()")
    }
    allshare_helper.log.trace("DeviceFinder.getDevice() end");
    return retValue
};
window.webapis.allshare.serviceconnector._DeviceFinder.getDeviceList = function (deviceType) {
    allshare_helper.log.trace("DeviceFinder.getDeviceList() begin");
    allshare_helper.log.debug("DeviceFinder.getDeviceList(deviceType:" + deviceType + ")");
    if (typeof deviceType != "string") {
        allshare_helper.log.error("Type of deviceType is not string");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of deviceType is not string")
    }
    if (deviceType != "MEDIAPROVIDER") {
        allshare_helper.log.print("Supported only deviceType == 'MEDIAPROVIDER'")
    }
    var allsharePlugin = window.webapis.allshare._plugin("AllShare");
    if (!allsharePlugin) {
        allshare_helper.log.error("AllShare plugin is not exist.");
        throw allshare_helper.createWebAPIException("InvalidStateError", "AllShare plugin is not exist.")
    }
    var retValue = [];
    var json = window.webapis.allshare._plugin(allsharePlugin, "GetDeviceList", 0);
    if (json && json != -1) {
        var obj = null;
        try {
            obj = eval("(" + json + ")");
            if (obj && obj.length) {
                for (var i = 0; i < obj.length; i++) {
                    var device = allshare_helper.createDeviceFactory(obj[i]);
                    if (device && (device.deviceType == deviceType)) {
                        retValue.push(device)
                    }
                }
            }
        } catch (e) {
            allshare_helper.log.error("eval failed");
            allshare_helper.log.error("exception e.name:" + e.name + "   e.message:" + e.message)
        }
    } else {
        allshare_helper.log.error("allshare plugin return error from GetDeviceList()")
    }
    allshare_helper.log.trace("DeviceFinder.getDeviceList() end");
    return retValue
};
window.webapis.allshare.serviceconnector._DeviceFinder.getDeviceListByDomain = function (deviceType, domain) {
    allshare_helper.log.trace("DeviceFinder.getDeviceListByDomain() begin");
    allshare_helper.log.debug("DeviceFinder.getDeviceListByDomain(deviceType:" + deviceType + ", domain: " + domain + ")");
    if (typeof deviceType != "string") {
        allshare_helper.log.error("Type of deviceType is not string");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of deviceType is not string")
    }
    if (deviceType != "MEDIAPROVIDER") {
        allshare_helper.log.print("Supported only deviceType == 'MEDIAPROVIDER'")
    }
    if (typeof domain != "string") {
        allshare_helper.log.error("Type of domain is not string");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of domain is not string")
    }
    var allsharePlugin = window.webapis.allshare._plugin("AllShare");
    if (!allsharePlugin) {
        allshare_helper.log.error("AllShare plugin is not exist.");
        throw allshare_helper.createWebAPIException("InvalidStateError", "AllShare plugin is not exist.")
    }
    var retValue = [];
    var json = window.webapis.allshare._plugin(allsharePlugin, "GetDeviceList", 0);
    if (json && json != -1) {
        var obj = null;
        try {
            obj = eval("(" + json + ")");
            if (obj && obj.length) {
                for (var i = 0; i < obj.length; i++) {
                    var device = allshare_helper.createDeviceFactory(obj[i]);
                    if (device && (device.deviceDomain == domain)) {
                        retValue.push(device)
                    }
                }
            }
        } catch (e) {
            allshare_helper.log.error("eval failed");
            allshare_helper.log.error("exception e.name:" + e.name + "   e.message:" + e.message)
        }
    } else {
        allshare_helper.log.error("allshare plugin return error from GetDeviceList()")
    }
    allshare_helper.log.trace("DeviceFinder.getDeviceListByDomain() end");
    return retValue
};
window.webapis.allshare.serviceconnector._DeviceFinder.getDeviceListByNIC = function (deviceType, nic) {
    allshare_helper.log.trace("DeviceFinder.getDeviceListByNIC() begin");
    allshare_helper.log.debug("DeviceFinder.getDeviceListByNIC(deviceType:" + deviceType + ", nic: " + nic + ")");
    if (typeof deviceType != "string") {
        allshare_helper.log.error("Type of deviceType is not string");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of deviceType is not string")
    }
    if (deviceType != "MEDIAPROVIDER") {
        allshare_helper.log.print("Supported only deviceType == 'MEDIAPROVIDER'")
    }
    if (typeof nic != "string") {
        allshare_helper.log.error("Type of nic is not string");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of nic is not string")
    }
    var allsharePlugin = window.webapis.allshare._plugin("AllShare");
    if (!allsharePlugin) {
        allshare_helper.log.error("AllShare plugin is not exist.");
        throw allshare_helper.createWebAPIException("InvalidStateError", "AllShare plugin is not exist.")
    }
    var retValue = [];
    var json = window.webapis.allshare._plugin(allsharePlugin, "GetDeviceList", 0);
    if (json && json != -1) {
        var obj = null;
        try {
            obj = eval("(" + json + ")");
            if (obj && obj.length) {
                for (var i = 0; i < obj.length; i++) {
                    var device = allshare_helper.createDeviceFactory(obj[i]);
                    if (device && (device.nic == nic)) {
                        retValue.push(device)
                    }
                }
            }
        } catch (e) {
            allshare_helper.log.error("eval failed");
            allshare_helper.log.error("exception e.name:" + e.name + "   e.message:" + e.message)
        }
    } else {
        allshare_helper.log.error("allshare plugin return error from GetDeviceList()")
    }
    allshare_helper.log.trace("DeviceFinder.getDeviceListByNIC() end");
    return retValue
};
window.webapis.allshare.serviceconnector._DeviceFinder.refresh = function () {
    allshare_helper.log.trace("DeviceFinder.refresh()");
    var a = window.webapis.allshare._plugin("AllShare");
    if (!a) {
        allshare_helper.log.error("AllShare plugin is not exist.");
        throw allshare_helper.createWebAPIException("InvalidStateError", "AllShare plugin is not exist.")
    }
    window.webapis.allshare._plugin(a, "RefreshDMS")
};
window.webapis.allshare.serviceconnector._DeviceFinder.addDeviceDiscoveryListener = function (a) {
    allshare_helper.log.trace("DeviceFinder.addDeviceDiscoveryListener() begin");
    if (a == null || (typeof a != "object")) {
        allshare_helper.log.error("Type check for deviceDiscoveryCallback is failed: (deviceDiscoveryCallback == null || (typeof deviceDiscoveryCallback != 'object')");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "Type check for deviceDiscoveryCallback is failed: (deviceDiscoveryCallback == null || (typeof deviceDiscoveryCallback != 'object')")
    }
    if (typeof a.ondeviceadded != "function") {
        allshare_helper.log.error("deviceDiscoveryCallback.ondeviceadded != 'function'");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "deviceDiscoveryCallback.ondeviceadded != 'function'")
    }
    if (typeof a.ondeviceremoved != "function") {
        allshare_helper.log.error("typeof deviceDiscoveryCallback.ondeviceremoved != 'function'");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof deviceDiscoveryCallback.ondeviceremoved != 'function'")
    }
    this._listenersCounter++;
    this._listeners.push(new this._ListenerInfo(a, this._listenersCounter));
    allshare_helper.log.debug("DeviceFinder.addDeviceDiscoveryListener() added listenersId:" + this._listenersCounter);
    allshare_helper.log.trace("DeviceFinder.addDeviceDiscoveryListener() end");
    return this._listenersCounter
};
window.webapis.allshare.serviceconnector._DeviceFinder.removeDeviceDiscoveryListener = function (c) {
    allshare_helper.log.trace("DeviceFinder.removeDeviceDiscoveryListener() begin");
    if (c == null) {
        allshare_helper.log.error("deviceDiscoveryListenerId == null");
        throw allshare_helper.createWebAPIException("InvalidValuesError", "deviceDiscoveryListenerId == null")
    }
    if (typeof c == "boolean") {
        allshare_helper.log.error("typeof deviceDiscoveryListenerId == 'boolean'");
        throw allshare_helper.createWebAPIException("InvalidValuesError", "typeof deviceDiscoveryListenerId != 'boolean'")
    }
    if (typeof c != "number") {
        allshare_helper.log.error("typeof deviceDiscoveryListenerId != 'number'");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof deviceDiscoveryListenerId != 'number'")
    }
    var a = false;
    for (var b = 0; b < this._listeners.length; b++) {
        if (this._listeners[b].listenerId == c) {
            allshare_helper.log.debug("DeviceFinder.removeDeviceDiscoveryListener() remove listenerId:" + this._listeners[b].listenerId);
            this._listeners.splice(b, 1);
            a = true;
            break
        }
    }
    if (!a) {
        allshare_helper.log.error("deviceDiscoveryListenerId:" + c + " unknown");
        throw allshare_helper.createWebAPIException("InvalidValuesError", "deviceDiscoveryListenerId:" + c + " unknown")
    }
    allshare_helper.log.trace("DeviceFinder.removeDeviceDiscoveryListener() end")
};
window.webapis.AbstractFilter = function () {
};
window.webapis.CompositeFilter = function (a, b) {
    this.setType = function (c) {
        if (typeof c != "string") {
            allshare_helper.log.error("Type of 'type' argument is not string");
            throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of 'type' argument is not string")
        }
        switch (c) {
            case"UNION":
                break;
            case"INTERSECTION":
                break;
            default:
                allshare_helper.log.error("Only 'UNION' and 'INTERSECTION' values of 'type' argument is supported");
                throw allshare_helper.createWebAPIException("TypeMismatchError", "Only 'UNION' and 'INTERSECTION' values of 'type' argument is supported");
                break
        }
        this.type_ = c
    };
    this.__defineGetter__("type", function () {
        return this.type_
    });
    this.__defineSetter__("type", function (c) {
        this.setType(c)
    });
    this.setType(a);
    this.filters = b
};
window.webapis.AttributeFilter = function (a, c, b) {
    this.setAttributeName = function (d) {
        if (typeof d != "string") {
            allshare_helper.log.error("Type of 'attributeName' argument is not string");
            throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of 'attributeName' argument is not string")
        }
        this.attributeName_ = d
    };
    this.__defineGetter__("attributeName", function () {
        return this.attributeName_
    });
    this.__defineSetter__("attributeName", function (d) {
        this.setAttributeName(d)
    });
    this.setMatchFlag = function (d) {
        if (d) {
            if (typeof d != "string") {
                allshare_helper.log.error("Type of 'matchFlag' argument is not string");
                throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of 'matchFlag' argument is not string")
            }
            switch (d) {
                case"EXACTLY":
                    break;
                case"FULLSTRING":
                    break;
                case"CONTAINS":
                    break;
                case"STARTSWITH":
                    break;
                case"ENDSWITH":
                    break;
                case"EXISTS":
                    break;
                default:
                    allshare_helper.log.error("Value of 'matchFlag' argument is not supported");
                    throw allshare_helper.createWebAPIException("TypeMismatchError", "Value of 'matchFlag' argument is not supported");
                    break
            }
        } else {
            d = "EXACTLY"
        }
        this.matchFlag_ = d
    };
    this.__defineGetter__("matchFlag", function () {
        return this.matchFlag_
    });
    this.__defineSetter__("matchFlag", function (d) {
        this.setMatchFlag(d)
    });
    this.setAttributeName(a);
    this.setMatchFlag(c);
    this.matchValue = b
};
window.webapis.AttributeRangeFilter = function (c, b, a) {
    this.setAttributeName = function (d) {
        if (typeof d != "string") {
            allshare_helper.log.error("Type of 'attributeName' argument is not string");
            throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of 'attributeName' argument is not string")
        }
        this.attributeName_ = d
    };
    this.__defineGetter__("attributeName", function () {
        return this.attributeName_
    });
    this.__defineSetter__("attributeName", function (d) {
        this.setAttributeName(d)
    });
    this.setAttributeName(c);
    this.initialValue = b;
    this.endValue = a
};
window.webapis.SortMode = function (b, a) {
    this.setAttributeName = function (c) {
        if (typeof c != "string") {
            allshare_helper.log.error("Type of 'attributeName' argument is not string");
            throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of 'attributeName' argument is not string")
        }
        this.attributeName_ = c
    };
    this.setOrder = function (c) {
        if (c != null) {
            if (typeof c != "string") {
                allshare_helper.log.error("Type of 'order' argument is not string");
                throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of 'order' argument is not string")
            }
            switch (c) {
                case"ASC":
                    break;
                case"DESC":
                    break;
                default:
                    allshare_helper.log.error("Value of 'order' argument is not supported, expected ASC or DESC");
                    throw allshare_helper.createWebAPIException("TypeMismatchError", "Value of 'order' argument is not supported, expected ASC or DESC");
                    break
            }
        } else {
            c = "ASC"
        }
        this.order_ = c
    };
    this.__defineGetter__("attributeName", function () {
        return this.attributeName_
    });
    this.__defineSetter__("attributeName", function (c) {
        this.setAttributeName(c)
    });
    this.__defineGetter__("order", function () {
        return this.order_
    });
    this.__defineSetter__("order", function (c) {
        this.setOrder(c)
    });
    this.setAttributeName(b);
    this.setOrder(a)
};
allshare_helper.doCompositeFiltering = function (d, c) {
    allshare_helper.log.trace("doCompositeFiltering()");
    if (c.filters) {
        for (var b = 0; b < c.filters.length; b++) {
            var a = allshare_helper.doFiltering(d, c.filters[b]);
            if (c.type == "UNION") {
                if (a) {
                    return true
                }
            } else {
                if (c.type == "INTERSECTION") {
                    if (!a) {
                        return false
                    }
                } else {
                    allshare_helper.log.error("Value of CompositeFilter 'type' is not supported, expected UNION or INTERSECTION")
                }
            }
        }
        if (c.filters.length > 0) {
            if (c.type == "UNION") {
                return false
            } else {
                if (c.type == "INTERSECTION") {
                    return true
                } else {
                    allshare_helper.log.error("Value of CompositeFilter 'type' is not supported, expected UNION or INTERSECTION")
                }
            }
        }
    }
    return true
};
allshare_helper.doAttributeFiltering = function (d, b) {
    allshare_helper.log.trace("doAttributeFiltering()");
    var a = d[b.attributeName];
    switch (b.matchFlag) {
        case"EXACTLY":
            if (a === b.matchValue) {
                return true
            } else {
                return false
            }
            break;
        case"FULLSTRING":
            if (typeof a == "string" && typeof b.matchValue == "string") {
                if (a.toLowerCase() === b.matchValue.toLowerCase()) {
                    return true
                }
            }
            return false;
            break;
        case"CONTAINS":
            if (typeof a == "string" && typeof b.matchValue == "string") {
                if (a.toLowerCase().indexOf(b.matchValue.toLowerCase()) >= 0) {
                    return true
                }
            }
            return false;
            break;
        case"STARTSWITH":
            if (typeof a == "string" && typeof b.matchValue == "string") {
                if (a.toLowerCase().indexOf(b.matchValue.toLowerCase()) == 0) {
                    return true
                }
            }
            return false;
            break;
        case"ENDSWITH":
            if (typeof a == "string" && typeof b.matchValue == "string") {
                var e = a.toLowerCase();
                var c = b.matchValue.toLowerCase();
                if (e.lastIndexOf(c) == -1) {
                    return false
                }
                if (e.lastIndexOf(c) + c.length == e.length) {
                    return true
                }
            }
            return false;
            break;
        case"EXISTS":
            if (a != null) {
                return true
            }
            break;
        default:
            allshare_helper.log.error("Value of AttributeFilter 'type' is not supported, expected 'EXACTLY', 'FULLSTRING', 'CONTAINS', 'STARTSWITH', 'ENDSWITH', 'EXISTS'");
            break
    }
    return false
};
allshare_helper.doAttributeRangeFiltering = function (c, b) {
    allshare_helper.log.trace("doAttributeRangeFiltering()");
    var a = c[b.attributeName];
    if (a) {
        if (b.initialValue) {
            if (typeof a == "number" && typeof b.initialValue == "number") {
                if (b.initialValue > a) {
                    return false
                }
            } else {
                if (a instanceof Date && b.initialValue instanceof Date) {
                    if (b.initialValue.valueOf() > a.valueOf()) {
                        return false
                    }
                } else {
                    allshare_helper.log.error("AttributeRangeFilter supported only number and Date attribute");
                    return false
                }
            }
        }
        if (b.endValue) {
            if (typeof a == "number" && typeof b.endValue == "number") {
                if (b.endValue <= a) {
                    return false
                }
            } else {
                if (a instanceof Date && b.endValue instanceof Date) {
                    if (b.endValue.valueOf() > a.valueOf()) {
                        return false
                    }
                } else {
                    allshare_helper.log.error("AttributeRangeFilter supported only number and Date attribute");
                    return false
                }
            }
        }
        return true
    }
    return false
};
allshare_helper.doFiltering = function (b, a) {
    allshare_helper.log.trace("doFiltering()");
    if (a == null) {
    } else {
        if (a instanceof window.webapis.CompositeFilter) {
            return allshare_helper.doCompositeFiltering(b, a)
        } else {
            if (a instanceof window.webapis.AttributeFilter) {
                return allshare_helper.doAttributeFiltering(b, a)
            } else {
                if (a instanceof window.webapis.AttributeRangeFilter) {
                    return allshare_helper.doAttributeRangeFiltering(b, a)
                } else {
                    if (a instanceof window.webapis.AbstractFilter) {
                    } else {
                        allshare_helper.log.error("Find filter of unknown type - ignored")
                    }
                }
            }
        }
    }
    return true
};
window.webapis.allshare.Icon = function () {
};
allshare_helper.initIcon = function (b, d) {
    allshare_helper.log.trace("initIcon() begin");
    if (b == null) {
        allshare_helper.log.debug("iconJson == null");
        return null
    }
    if (d == null) {
        allshare_helper.log.debug("icon == null");
        return null
    }
    var g = 0;
    if (typeof b.IconDepth == "number") {
        g = b.IconDepth
    }
    allshare_helper.setReadOnlyAttribute(d, "depth", g);
    allshare_helper.log.info("added icon.depth:" + g);
    var a = 0;
    if (typeof b.IconHeight == "number") {
        a = b.IconHeight
    }
    allshare_helper.setReadOnlyAttribute(d, "height", a);
    allshare_helper.log.info("added icon.height:" + a);
    var c = 0;
    if (typeof b.IconWidth == "number") {
        c = b.IconWidth
    }
    allshare_helper.setReadOnlyAttribute(d, "width", c);
    allshare_helper.log.info("added icon.width:" + c);
    var f = "";
    if (typeof b.IconMimeType == "string") {
        f = b.IconMimeType
    }
    allshare_helper.setReadOnlyAttribute(d, "mimeType", f);
    allshare_helper.log.info("added icon.mimeType:" + f);
    var e = "";
    if (typeof b.IconURL == "string") {
        e = b.IconURL
    }
    allshare_helper.setReadOnlyAttribute(d, "iconUri", e);
    allshare_helper.log.info("added icon.iconUri:" + e);
    allshare_helper.log.trace("initIcon() end");
    return d
};
window.webapis.allshare.Device = function () {
};
allshare_helper.initDevice = function (h, f, e) {
    allshare_helper.log.trace("initDevice() begin");
    if (h == null) {
        allshare_helper.log.debug("deviceJson == null");
        return null
    }
    if (e == null) {
        allshare_helper.log.debug("device == null");
        return null
    }
    var d = null;
    if (typeof h.deviceID == "number") {
        e._deviceID = h.deviceID;
        allshare_helper.log.info("added device._deviceID:" + e._deviceID);
        d = h.UDN || ("" + h.deviceID)
    }
    allshare_helper.setReadOnlyAttribute(e, "id", d);
    allshare_helper.log.info("added device.id:" + d);
    var j = "";
    if (typeof h.Domain == "string") {
        j = h.Domain
    }
    allshare_helper.setReadOnlyAttribute(e, "deviceDomain", j);
    allshare_helper.log.info("added device.deviceDomain:" + j);
    allshare_helper.setReadOnlyAttribute(e, "deviceType", f);
    allshare_helper.log.info("added device.deviceType:" + f);
    var a = [];
    if (h.Icons != null && (typeof h.Icons == "object")) {
        for (var g = 0; g < h.Icons.length; g++) {
            var m = allshare_helper.initIcon(h.Icons[g], new window.webapis.allshare.Icon);
            a.push(m)
        }
    }
    allshare_helper.setReadOnlyAttribute(e, "iconArray", a);
    allshare_helper.log.info("added device.iconArray: number:" + a.length);
    var l = "";
    if (typeof h.IPAddress == "string") {
        l = h.IPAddress
    }
    allshare_helper.setReadOnlyAttribute(e, "ipAddress", l);
    allshare_helper.log.info("added device.ipAddress:" + l);
    var k = "";
    if (typeof h.ModelName == "string") {
        k = h.ModelName
    }
    allshare_helper.setReadOnlyAttribute(e, "modelName", k);
    allshare_helper.log.info("added device.modelName:" + k);
    var c = "";
    if (typeof h.deviceName == "string") {
        c = h.deviceName
    }
    allshare_helper.setReadOnlyAttribute(e, "name", c);
    allshare_helper.log.info("added device.name:" + c);
    var b = h.nic;
    if (typeof b != "string") {
        b = ""
    }
    allshare_helper.setReadOnlyAttribute(e, "nic", b);
    allshare_helper.log.info("added device.nic:" + b);
    allshare_helper.log.trace("initDevice() end");
    return e
};
window.webapis.allshare.MediaProvider = function () {
    allshare_helper.log.trace("function MediaProvider()");
    window.webapis.allshare.Device.call(this)
};
window.webapis.allshare.MediaProvider.prototype = new window.webapis.allshare.Device();
window.webapis.allshare.MediaProvider.prototype.constructor = window.webapis.allshare.MediaProvider;
allshare_helper.initMediaProvider = function (a, c) {
    allshare_helper.log.trace("initMediaProvider() begin");
    if (a == null) {
        allshare_helper.log.debug("mediaProviderJson == null");
        return null
    }
    if (c == null) {
        allshare_helper.log.debug("mediaProvider == null");
        return null
    }
    var d = "MEDIAPROVIDER";
    allshare_helper.initDevice(a, d, c);
    allshare_helper.setReadOnlyAttribute(c, "rootFolder", c.getRootFolder());
    var b = false;
    if (typeof a.isSearchable == "boolean") {
        b = a.isSearchable
    }
    allshare_helper.setReadOnlyAttribute(c, "isSearchable", b);
    allshare_helper.log.info("added mediaProvider.isSearchable:" + b);
    allshare_helper.log.trace("initMediaProvider() end");
    return c
};
allshare_helper.createDeviceFactory = function (a) {
    allshare_helper.log.trace("allshare_helper.createDevices() begin");
    if (a == null) {
        allshare_helper.log.debug("deviceJson == null");
        return null
    }
    var c = "UNKNOWN";
    if (typeof a.deviceType == "string") {
        switch (a.deviceType) {
            case"AllShare":
            case"Network":
                c = "MEDIAPROVIDER";
                break;
            default:
                c = "UNKNOWN";
                break
        }
    }
    var b = null;
    switch (c) {
        case"MEDIAPROVIDER":
            b = allshare_helper.initMediaProvider(a, new window.webapis.allshare.MediaProvider);
            break;
        default:
            break
    }
    allshare_helper.log.trace("allshare_helper.createDevices() end");
    return b
};
window.webapis.allshare.MediaProvider.prototype.getMediaReceiver = function () {
    allshare_helper.log.trace("MediaProvider.prototype.getMediaReceiver()");
    allshare_helper.log.error("This feature is not supported");
    throw allshare_helper.createWebAPIException("NotSupportedError", "This feature is not supported")
};
window.webapis.allshare.MediaProvider.prototype.getRootFolder = function () {
    allshare_helper.log.trace("MediaProvider.prototype.getRootFolder() begin");
    allshare_helper.log.debug("MediaProvider.prototype.getRootFolder() for device id:" + this._deviceID);
    var retValue = null;
    var json = window.webapis.allshare._plugin("AllShare", "GetRootFolder", this._deviceID, 0) || "";
    if (json) {
        var obj = null;
        try {
            obj = eval("(" + json + ")");
            obj.type = "folder";
            retValue = allshare_helper.initItem(obj, new window.webapis.allshare.Item(null, null, obj.title))
        } catch (e) {
            allshare_helper.log.error("eval failed");
            allshare_helper.log.error("exception e.name:" + e.name + "   e.message:" + e.message)
        }
    }
    allshare_helper.log.trace("MediaProvider.prototype.getRootFolder() end");
    return retValue
};
window.webapis.allshare.MediaProvider.prototype.addMediaProviderEventListener = function (a) {
    allshare_helper.log.trace("MediaProvider.prototype.addMediaProviderEventListener()");
    allshare_helper.log.nonimplemented("MediaProvider.prototype.addMediaProviderEventListener()");
    throw allshare_helper.createWebAPIException("NotSupportedError", "this feature is not supported");
    return 0
};
window.webapis.allshare.MediaProvider.prototype.removeMediaProviderEventListener = function (a) {
    allshare_helper.log.trace("MediaProvider.prototype.removeMediaProviderEventListener()");
    allshare_helper.log.nonimplemented("MediaProvider.prototype.removeMediaProviderEventListener()");
    if (typeof a != "number") {
        allshare_helper.log.error("typeof eventCallbackId != 'number'");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof eventCallbackId != 'number'")
    }
    throw allshare_helper.createWebAPIException("NotSupportedError", "this feature is not supported")
};
window.webapis.allshare.MediaProvider.prototype.browse = function (b, j, h, c, g, f, d) {
    allshare_helper.log.trace("MediaProvider.prototype.browse() begin");
    allshare_helper.log.debug("  startIndex:" + j + "   requestCount:" + h);
    if (b == null || (typeof b != "object")) {
        allshare_helper.log.error("Type check for parentFolderItem failed: (parentFolderItem == null || (typeof parentFolderItem != 'object'))");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "Type check for parentFolderItem failed: (parentFolderItem == null || (typeof parentFolderItem != 'object'))")
    }
    if (typeof j != "number") {
        allshare_helper.log.error("typeof startIndex != 'number'");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof startIndex != 'number'")
    }
    if (j < 0) {
        allshare_helper.log.error("startIndex is out of range.");
        throw allshare_helper.createWebAPIException("InvalidValuesError", "startIndex is out of range.")
    }
    if (typeof h != "number") {
        allshare_helper.log.error("typeof requestCount != 'number'");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof requestCount != 'number'")
    }
    if (h < 0) {
        allshare_helper.log.error("requestCount is out of range.");
        throw allshare_helper.createWebAPIException("InvalidValuesError", "requestCount is out of range.")
    }
    if (typeof c != "function") {
        allshare_helper.log.error("typeof successCallback != 'function'");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof successCallback != 'function'")
    }
    if (typeof g != "function") {
        allshare_helper.log.error("typeof errorCallback != 'function'");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof errorCallback != 'function'")
    }
    if (f != null) {
        if (typeof f != "object") {
            allshare_helper.log.error("typeof browseFilter != 'object'");
            throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof browseFilter != 'object'")
        } else {
            allshare_helper.log.error("browseFilter parameter is not supported - ignored")
        }
    }
    if (d != null) {
        if (typeof d != "object") {
            allshare_helper.log.error("typeof sortMode != 'object'");
            throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof sortMode != 'object'")
        }
        if ((d.attributeName == null) || (d.order == null)) {
            allshare_helper.log.error("Contents of sortMode is wrong");
            throw allshare_helper.createWebAPIException("TypeMismatchError", "Contents of sortMode is wrong")
        }
    }
    var e = this._deviceID;
    if (e == null) {
        allshare_helper.log.error("can't found this._deviceID");
        throw allshare_helper.createWebAPIException("InvalidStateError", "can't found this._deviceID")
    }
    var i = window.webapis.allshare._plugin("AllShare");
    if (!i) {
        allshare_helper.log.error("AllShare plugin is not exist.");
        throw allshare_helper.createWebAPIException("InvalidStateError", "AllShare plugin is not exist.")
    }
    var a = allshare_helper.RequestsHelper.registerRequest();
    if (a == null) {
        allshare_helper.log.error("Internal error SEF: request in processing already.");
        throw allshare_helper.createWebAPIException("UnknownError", "Internal error SEF: request in processing already.")
    }
    a.description = "BrowseItems request info";
    a.parentFolderItem = b;
    a.startIndex = j;
    a.requestCount = h;
    a.successCallback = c;
    a.errorCallback = g;
    a.browseFilter = f;
    a.sortMode = d;
    a.provider = this;
    a.callbackHandlers = window.webapis.allshare.MediaProvider.BrowseCallbackHandlers;
    var k;
    if (d) {
        k = window.webapis.allshare._plugin(i, "BrowseItemsTitleSort", "a", e, b._objectID, j, h, a.id)
    } else {
        k = window.webapis.allshare._plugin(i, "BrowseItems2", "a", e, b._objectID, j, h, a.id)
    }
    if (!k) {
        allshare_helper.RequestsHelper.removeRequest(a.id)
    }
    allshare_helper.log.trace("MediaProvider.prototype.browse() end")
};
window.webapis.allshare.MediaProvider.prototype.search = function (f, h, g, b, e, d) {
    allshare_helper.log.trace("MediaProvider.prototype.search() begin");
    allshare_helper.log.debug("  keyword:" + f + "   startIndex:" + h + "   requestCount:" + g);
    if (typeof f != "string") {
        allshare_helper.log.error("typeof keyword != 'string'");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof keyword != 'string'")
    }
    if (typeof h != "number") {
        allshare_helper.log.error("typeof startIndex != 'number'");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof startIndex != 'number'")
    }
    if (h < 0) {
        allshare_helper.log.error("startIndex is out of range.");
        throw allshare_helper.createWebAPIException("InvalidValuesError", "startIndex is out of range.")
    }
    if (typeof g != "number") {
        allshare_helper.log.error("typeof requestCount != 'number'");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof requestCount != 'number'")
    }
    if (g < 0) {
        allshare_helper.log.error("requestCount is out of range.");
        throw allshare_helper.createWebAPIException("InvalidValuesError", "requestCount is out of range.")
    }
    if (typeof b != "function") {
        allshare_helper.log.error("typeof successCallback != 'function'");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof successCallback != 'function'")
    }
    if (typeof e != "function") {
        allshare_helper.log.error("typeof errorCallback != 'function'");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof errorCallback != 'function'")
    }
    if (d != null) {
        if (typeof d != "object") {
            allshare_helper.log.error("typeof searchFilter != 'object'");
            throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof searchFilter != 'object'")
        } else {
            allshare_helper.log.error("searchFilter parameter is not supported - ignored")
        }
    }
    var c = this._deviceID;
    if (c == null) {
        allshare_helper.log.error("can't found this._deviceID");
        throw allshare_helper.createWebAPIException("InvalidStateError", "can't found this._deviceID")
    }
    var i = window.webapis.allshare._plugin("AllShare");
    if (!i) {
        allshare_helper.log.error("AllShare plugin is not exist.");
        throw allshare_helper.createWebAPIException("InvalidStateError", "AllShare plugin is not exist.")
    }
    var a = allshare_helper.RequestsHelper.registerRequest();
    if (a == null) {
        allshare_helper.log.error("Internal error SEF: request in processing already.");
        throw allshare_helper.createWebAPIException("UnknownError", "Internal error SEF: request in processing already.")
    }
    a.description = "SearchItems request info";
    a.keyword = f;
    a.startIndex = h;
    a.requestCount = g;
    a.successCallback = b;
    a.errorCallback = e;
    a.searchFilter = d;
    a.provider = this;
    a.callbackHandlers = window.webapis.allshare.MediaProvider.SearchCallbackHandlers;
    var j = window.webapis.allshare._plugin(i, "SearchItems2", "a", c, f, 3, h, g, a.id);
    if (!j) {
        allshare_helper.RequestsHelper.removeRequest(a.id)
    }
    allshare_helper.log.trace("MediaProvider.prototype.search() end")
};
window.webapis.allshare.MediaProvider.BrowseCallbackHandlers = {};
window.webapis.allshare.MediaProvider.BrowseCallbackHandlers.successCallback = function (c, h) {
    allshare_helper.log.trace("BrowseCallbackHandlers.successCallback() begin");
    var a = [];
    var d = true;
    try {
        allshare_helper.log.debug("obj.deviceID:" + h.deviceID);
        allshare_helper.log.debug("obj.EndOfItem:" + h.EndOfItem);
        if (typeof h.EndOfItem == "boolean") {
            d = h.EndOfItem
        }
        if (h.Items && (h.Items.length > 0)) {
            for (var b = 0; b < h.Items.length; b++) {
                var f = allshare_helper.initItem(h.Items[b], new window.webapis.allshare.Item);
                if (allshare_helper.doFiltering(f, c.browseFilter)) {
                    a.push(f)
                }
            }
        }
        c.successCallback(a, d, c.provider.id)
    } catch (g) {
        allshare_helper.log.error("exception inside browse success callback handler");
        allshare_helper.log.error("e name:" + (g && (g.name || "")) + "   message:" + (g && (g.message || "")))
    }
    allshare_helper.log.trace("BrowseCallbackHandlers.successCallback() end")
};
window.webapis.allshare.MediaProvider.BrowseCallbackHandlers.errorCallback = function (b, a) {
    allshare_helper.log.trace("BrowseCallbackHandlers.errorCallback()");
    try {
        b.errorCallback(a, b.provider.id)
    } catch (c) {
        allshare_helper.log.error("exception during browse error callback");
        allshare_helper.log.error("e name:" + (c && (c.name || "")) + "   message:" + (c && (c.message || "")))
    }
};
window.webapis.allshare.MediaProvider.SearchCallbackHandlers = {};
window.webapis.allshare.MediaProvider.SearchCallbackHandlers.successCallback = function (c, h) {
    allshare_helper.log.trace("SearchCallbackHandlers.successCallback() begin");
    var a = [];
    var d = true;
    try {
        allshare_helper.log.debug("obj.deviceID:" + h.deviceID);
        allshare_helper.log.debug("obj.EndOfItem:" + h.EndOfItem);
        if (typeof h.EndOfItem == "boolean") {
            d = h.EndOfItem
        }
        if (h.Items && (h.Items.length > 0)) {
            for (var b = 0; b < h.Items.length; b++) {
                var f = allshare_helper.initItem(h.Items[b], new window.webapis.allshare.Item);
                if (allshare_helper.doFiltering(f, c.searchFilter)) {
                    a.push(f)
                }
            }
        }
        c.successCallback(a, d, c.provider.id)
    } catch (g) {
        allshare_helper.log.error("exception inside search callback handler");
        allshare_helper.log.error("e name:" + (g && (g.name || "")) + "   message:" + (g && (g.message || "")))
    }
    allshare_helper.log.trace("SearchCallbackHandlers.successCallback() end")
};
window.webapis.allshare.MediaProvider.SearchCallbackHandlers.errorCallback = function (b, a) {
    allshare_helper.log.trace("SearchCallbackHandlers.errorCallback()");
    try {
        b.errorCallback(a, b.provider.id)
    } catch (c) {
        allshare_helper.log.error("exception during search error callback");
        allshare_helper.log.error("e name:" + (c && (c.name || "")) + "   message:" + (c && (c.message || "")))
    }
};
window.webapis.SimpleCoordinates = function (b, a) {
    this.setLatitude(b);
    this.setLongitude(a)
};
window.webapis.SimpleCoordinates.prototype = {
    setLatitude: function (a) {
        if (typeof a != "number") {
            allshare_helper.log.error("typeof latitude != 'number'");
            throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof latitude != 'number'")
        }
        this.latitude_ = a
    }, setLongitude: function (a) {
        if (typeof a != "number") {
            allshare_helper.log.error("typeof longitude != 'number'");
            throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof longitude != 'number'")
        }
        this.longitude_ = a
    }, get latitudefunction() {
        return this.latitude_
    }, set latitudefunction(a) {
        this.setLatitude(a)
    }, get longitudefunction() {
        return this.longitude_
    }, set longitudefunction(a) {
        this.setLongitude(a)
    }
};
window.webapis.allshare.Item = function (a, c, b) {
    allshare_helper.log.trace("Item() begin");
    allshare_helper.setReadOnlyAttribute(this, "itemUri", a);
    allshare_helper.log.info("added item.itemUri:" + a);
    allshare_helper.setReadOnlyAttribute(this, "mimeType", c);
    allshare_helper.log.info("added item.mimeType:" + c);
    allshare_helper.setReadOnlyAttribute(this, "title", b);
    allshare_helper.log.info("added item.title:" + b);
    allshare_helper.log.trace("Item() end")
};
allshare_helper.initItem = function (o, t) {
    allshare_helper.log.trace("allshare_helper.initItem() begin");
    var i = o.type;
    var w = null;
    switch (i) {
        case"folder":
            w = "FOLDER";
            break;
        case"file":
            var m = o.mediaType;
            switch (m) {
                case"audio":
                    w = "AUDIO";
                    break;
                case"video":
                    w = "VIDEO";
                    break;
                case"image":
                    w = "IMAGE";
                    break;
                default:
                    w = "UNKNOWN";
                    break
            }
            break;
        default:
            w = "UNKNOWN";
            break
    }
    allshare_helper.setReadOnlyAttribute(t, "itemType", w);
    allshare_helper.log.info("added item.itemType:" + w);
    var p = undefined;
    if (w == "AUDIO" || w == "VIDEO" || w == "IMAGE" || w == "UNKNOWN") {
        p = o.album
    }
    allshare_helper.setReadOnlyAttribute(t, "albumTitle", p);
    allshare_helper.log.info("added item.albumTitle:" + p);
    var g = undefined;
    if (w == "AUDIO") {
        g = null;
        if (typeof o.artist == "string") {
            g = o.artist
        }
    }
    allshare_helper.setReadOnlyAttribute(t, "artist", g);
    allshare_helper.log.info("added item.artist:" + g);
    var u = undefined;
    if (w == "AUDIO" || w == "VIDEO" || w == "IMAGE" || w == "UNKNOWN") {
        u = o.date;
        if (typeof u == "string") {
            u = new Date(u)
        }
    }
    allshare_helper.setReadOnlyAttribute(t, "date", u);
    allshare_helper.log.info("added item.date:" + u);
    var a = o.totalplaytime;
    if (w != "AUDIO" || w != "VIDEO") {
        if (typeof a == "string") {
            a = allshare_helper.convertStrDurationToSec(a)
        }
    }
    allshare_helper.setReadOnlyAttribute(t, "duration", a);
    allshare_helper.log.info("added item.duration:" + a);
    var k = undefined;
    if (w == "AUDIO" || w == "VIDEO" || w == "IMAGE" || w == "UNKNOWN") {
        k = o.extension
    }
    allshare_helper.setReadOnlyAttribute(t, "extension", k);
    allshare_helper.log.info("added item.extension:" + k);
    var l = undefined;
    if (w == "AUDIO" || w == "VIDEO" || w == "IMAGE" || w == "UNKNOWN") {
        l = o.filesize
    }
    allshare_helper.setReadOnlyAttribute(t, "fileSize", l);
    allshare_helper.log.info("added item.fileSize:" + l);
    var d = undefined;
    if (w == "AUDIO") {
        d = o.genre
    }
    allshare_helper.setReadOnlyAttribute(t, "genre", d);
    allshare_helper.log.info("added item.genre:" + d);
    var b = null;
    if (w == "FOLDER") {
        b = undefined
    }
    allshare_helper.setReadOnlyAttribute(t, "location", b);
    allshare_helper.log.info("added item.location:" + b);
    var h = o.mimeType;
    allshare_helper.setReadOnlyAttribute(t, "mimeType", h);
    allshare_helper.log.info("added item.mimeType:" + h);
    var q = undefined;
    if (w == "IMAGE" || w == "VIDEO") {
        q = o.Width
    }
    allshare_helper.setReadOnlyAttribute(t, "width", q);
    allshare_helper.log.info("added item.width:" + q);
    var n = undefined;
    if (w == "IMAGE" || w == "VIDEO") {
        n = o.Height
    }
    allshare_helper.setReadOnlyAttribute(t, "height", n);
    allshare_helper.log.info("added item.height:" + n);
    var f = undefined;
    if (w == "VIDEO") {
        f = null;
        var c = o.Captions;
        if (c && c.length) {
            f = c[0].subtitle
        }
    }
    allshare_helper.setReadOnlyAttribute(t, "subtitleUri", f);
    allshare_helper.log.info("added item.subtitleUri:" + f);
    var j = o.thumbnail;
    allshare_helper.setReadOnlyAttribute(t, "thumbnailUri", j);
    allshare_helper.log.info("added item.thumbnailUri:" + j);
    var x = o.title;
    allshare_helper.setReadOnlyAttribute(t, "title", x);
    allshare_helper.log.info("added item.title:" + x);
    var e = o.url;
    allshare_helper.setReadOnlyAttribute(t, "itemUri", e);
    allshare_helper.log.info("added item.itemUri:" + e);
    var v = o.objectID;
    t._objectID = v;
    allshare_helper.log.info("added item._objectID:" + t._objectID);
    var r = (v == "0");
    allshare_helper.setReadOnlyAttribute(t, "isRootFolder", r);
    allshare_helper.log.info("added item.isRootFolder:" + r);
    var s = o.contentBuildType;
    if (typeof s != "string") {
        s = "UNKNOWN"
    }
    allshare_helper.setReadOnlyAttribute(t, "contentBuildType", s);
    allshare_helper.log.info("added item.contentBuildType:" + s);
    allshare_helper.log.trace("allshare_helper.initItem() end");
    return t
};
window.webapis.allshare._onAllsharePluginEvent = function (event, data1, data2) {
    allshare_helper.log.trace("window.webapis.allshare._onAllsharePluginEvent() begin");
    var EDMSCP_MSG_BROWSEFOLDER_RESULT = 200;
    var EDMSCP_MSG_SEARCH_RESULT = 201;
    var EDMSCP_MSG_GETITEMINFO_RESULT = 212;
    var DMSCP_UPNP_DEVICEADDED = 0;
    var DMSCP_UPNP_DEVICEDELETE = 1;
    var EDMSCP_MSG_NO_DATA = -9;
    var EDMSCP_MSG_CANCEL = -8;
    var EDMSCP_MSG_UNKNOWN = -1;
    var EDMSCP_MSG_INVALID_SVC = -17;
    allshare_helper.log.print("_onAllsharePluginEvent()");
    allshare_helper.log.print("Event : " + event);
    allshare_helper.log.print("typeof data1:" + (typeof data1));
    allshare_helper.log.print("BT_Retrun : " + data1 + " => " + data2);
    switch (event) {
        case EDMSCP_MSG_BROWSEFOLDER_RESULT:
            var obj = null;
            var requestId = null;
            try {
                obj = eval("(" + data2 + ")");
                allshare_helper.log.debug("obj.UniqueRequestID:" + obj.UniqueRequestID);
                requestId = obj.UniqueRequestID
            } catch (e) {
                allshare_helper.log.error("Eval failed - browse responce return broken JSON");
                allshare_helper.log.error("Exception e.name:" + e.name + "   e.message:" + e.message)
            }
            var requestInfo = allshare_helper.RequestsHelper.getRequest(requestId);
            if (requestInfo) {
                allshare_helper.RequestsHelper.removeRequest(requestId);
                requestInfo.callbackHandlers.successCallback(requestInfo, obj)
            }
            break;
        case EDMSCP_MSG_SEARCH_RESULT:
            var obj = null;
            var requestId = null;
            try {
                obj = eval("(" + data2 + ")");
                allshare_helper.log.debug("obj.UniqueRequestID:" + obj.UniqueRequestID);
                requestId = obj.UniqueRequestID
            } catch (e) {
                allshare_helper.log.error("Eval failed - search responce return broken JSON");
                allshare_helper.log.error("Exception e.name:" + e.name + "   e.message:" + e.message)
            }
            var requestInfo = allshare_helper.RequestsHelper.getRequest(requestId);
            if (requestInfo) {
                allshare_helper.RequestsHelper.removeRequest(requestId);
                requestInfo.callbackHandlers.successCallback(requestInfo, obj)
            }
            break;
        case DMSCP_UPNP_DEVICEADDED:
            allshare_helper.log.debug("DMSCP_UPNP_DEVICEADDED");
            var addedDevice = null;
            if (data2) {
                var deviceJson = null;
                try {
                    deviceJson = eval("(" + data2 + ")")
                } catch (e) {
                    allshare_helper.log.error("eval failed");
                    allshare_helper.log.error("exception e.name:" + e.name + "   e.message:" + e.message)
                }
                if (deviceJson) {
                    var device = allshare_helper.createDeviceFactory(deviceJson);
                    if (device) {
                        window.webapis.allshare.serviceconnector._DeviceFinder._addedDevice(device)
                    }
                }
            }
            break;
        case DMSCP_UPNP_DEVICEDELETE:
            allshare_helper.log.debug("DMSCP_UPNP_DEVICEDELETE");
            var deletedDevice = null;
            if (data2) {
                var deviceJson = null;
                try {
                    deviceJson = eval("(" + data2 + ")")
                } catch (e) {
                    allshare_helper.log.error("eval failed");
                    allshare_helper.log.error("exception e.name:" + e.name + "   e.message:" + e.message)
                }
                if (deviceJson) {
                    var device = allshare_helper.createDeviceFactory(deviceJson);
                    if (device) {
                        window.webapis.allshare.serviceconnector._DeviceFinder._removedDevice(device)
                    }
                }
            }
            break;
        case EDMSCP_MSG_NO_DATA:
            allshare_helper.log.debug("EDMSCP_MSG_NO_DATA");
            var requestId = null;
            try {
                obj = eval("(" + data2 + ")");
                allshare_helper.log.debug("obj.UniqueRequestID:" + obj.UniqueRequestID);
                requestId = obj.UniqueRequestID
            } catch (e) {
                allshare_helper.log.error("Eval failed - responce return broken JSON");
                allshare_helper.log.error("Exception e.name:" + e.name + "   e.message:" + e.message)
            }
            var requestInfo = allshare_helper.RequestsHelper.getRequest(requestId);
            if (requestInfo) {
                allshare_helper.RequestsHelper.removeRequest(requestId);
                var webAPIError = allshare_helper.createWebAPIError("NotFoundError", "No data");
                requestInfo.callbackHandlers.errorCallback(requestInfo, webAPIError)
            }
            break;
        case EDMSCP_MSG_CANCEL:
            allshare_helper.log.debug("EDMSCP_MSG_CANCEL");
            var requestId = null;
            try {
                obj = eval("(" + data2 + ")");
                allshare_helper.log.debug("obj.UniqueRequestID:" + obj.UniqueRequestID);
                requestId = obj.UniqueRequestID
            } catch (e) {
                allshare_helper.log.error("Eval failed - responce return broken JSON");
                allshare_helper.log.error("Exception e.name:" + e.name + "   e.message:" + e.message)
            }
            var requestInfo = allshare_helper.RequestsHelper.getRequest(requestId);
            if (requestInfo) {
                allshare_helper.RequestsHelper.removeRequest(requestId);
                var webAPIError = allshare_helper.createWebAPIError("UnknownError", "EDMSCP_MSG_CANCEL");
                requestInfo.callbackHandlers.errorCallback(requestInfo, webAPIError)
            }
            break;
        case EDMSCP_MSG_UNKNOWN:
            allshare_helper.log.debug("EDMSCP_MSG_UNKNOWN");
            var requestId = null;
            try {
                obj = eval("(" + data2 + ")");
                allshare_helper.log.debug("obj.UniqueRequestID:" + obj.UniqueRequestID);
                requestId = obj.UniqueRequestID
            } catch (e) {
                allshare_helper.log.error("Eval failed - responce return broken JSON");
                allshare_helper.log.error("Exception e.name:" + e.name + "   e.message:" + e.message)
            }
            var requestInfo = allshare_helper.RequestsHelper.getRequest(requestId);
            if (requestInfo) {
                allshare_helper.RequestsHelper.removeRequest(requestId);
                var webAPIError = allshare_helper.createWebAPIError("UnknownError", "EDMSCP_MSG_UNKNOWN");
                requestInfo.callbackHandlers.errorCallback(requestInfo, webAPIError)
            }
            break;
        case EDMSCP_MSG_INVALID_SVC:
            allshare_helper.log.debug("EDMSCP_MSG_INVALID_SVC");
            var requestId = null;
            try {
                obj = eval("(" + data2 + ")");
                allshare_helper.log.debug("obj.UniqueRequestID:" + obj.UniqueRequestID);
                requestId = obj.UniqueRequestID
            } catch (e) {
                allshare_helper.log.error("Eval failed - responce return broken JSON");
                allshare_helper.log.error("Exception e.name:" + e.name + "   e.message:" + e.message)
            }
            var requestInfo = allshare_helper.RequestsHelper.getRequest(requestId);
            if (requestInfo) {
                allshare_helper.RequestsHelper.removeRequest(requestId);
                var webAPIError = allshare_helper.createWebAPIError("NotSupportedError", "The operation is not supported.");
                requestInfo.callbackHandlers.errorCallback(requestInfo, webAPIError)
            }
            break;
        default:
            allshare_helper.log.debug("default");
            var requestId = null;
            try {
                obj = eval("(" + data2 + ")");
                allshare_helper.log.debug("obj.UniqueRequestID:" + obj.UniqueRequestID);
                requestId = obj.UniqueRequestID
            } catch (e) {
                allshare_helper.log.error("Eval failed - responce return broken JSON");
                allshare_helper.log.error("Exception e.name:" + e.name + "   e.message:" + e.message)
            }
            var requestInfo = allshare_helper.RequestsHelper.getRequest(requestId);
            if (requestInfo) {
                allshare_helper.RequestsHelper.removeRequest(requestId);
                var webAPIError = allshare_helper.createWebAPIError("UnknownError", "An unknown error has occurred.");
                requestInfo.callbackHandlers.errorCallback(requestInfo, webAPIError)
            }
            break
    }
    allshare_helper.log.trace("window.webapis.allshare._onAllsharePluginEvent() end")
};
window.webapis.allshare._plugin = function () {
    var a = Array.prototype.slice.call(arguments);
    allshare_helper.log.print("[window.webapis.allshare] _plugin(" + a + ")");
    return webapis._plugin.apply(webapis._plugin, a)
};
webapis.smarthome = {
    CMD_URL_MAP: {
        CMD_MODE: "/mode",
        CMD_OPERATION_POWER: "/operation",
        CMD_AC_WIND_DIRECTION: "/wind",
        CMD_AC_WIND_SPEEDLEVEL: "/wind",
        CMD_AC_TEMPERATURE_DESIRED: "/temperatures",
        CMD_AC_TEMPERATURE_CURRENT: "/temperatures",
        CMD_REF_TEMPERATURE_FREZZE: "/temperatures",
        CMD_REF_TEMPERATURE_FRIDGE: "/temperatures",
        CMD_WASHER_OPERATION_PROGRESS: "/operation",
        CMD_WASHER_OPERATION_STATE: "/operation",
        CMD_WASHER_OPERATION_PROGRESS_PERCENTAGE: "/operation"
    },
    SMART_HOME_CMD: {
        CMD_MODE: "CMD_MODE",
        CMD_OPERATION_POWER: "CMD_OPERATION_POWER",
        CMD_AC_WIND_DIRECTION: "CMD_AC_WIND_DIRECTION",
        CMD_AC_WIND_SPEEDLEVEL: "CMD_AC_WIND_SPEEDLEVEL",
        CMD_AC_TEMPERATURE_DESIRED: "CMD_AC_TEMPERATURE_DESIRED",
        CMD_AC_TEMPERATURE_CURRENT: "CMD_AC_TEMPERATURE_CURRENT",
        CMD_REF_TEMPERATURE_FREZZE: "CMD_REF_TEMPERATURE_FREZZE",
        CMD_REF_TEMPERATURE_FRIDGE: "CMD_REF_TEMPERATURE_FRIDGE",
        CMD_WASHER_OPERATION_PROGRESS: "CMD_WASHER_OPERATION_PROGRESS",
        CMD_WASHER_OPERATION_STATE: "CMD_WASHER_OPERATION_STATE",
        CMD_WASHER_OPERATION_PROGRESS_PERCENTAGE: "CMD_WASHER_OPERATION_PROGRESS_PERCENTAGE"
    },
    MODE_VALUE: {AC_AUTO: "auto", AC_COOL: "cool", AC_DRY: "dry", AC_FAN: "fan", AC_HEAT: "heat"},
    WIND_DIRECTION_VALUE: {
        AC_UNKNOWN: "unknown",
        AC_WIDE: "wide",
        AC_CENTER: "center",
        AC_LEFT: "left",
        AC_RIGHT: "right",
        AC_LONG: "long"
    },
    OPERATION_VALUE: {POWER_ON: "on", POWER_OFF: "off"},
    ERROR_STATUS_CODE: {
        400: WebAPIException.VALIDATION_ERR,
        404: WebAPIException.NOT_FOUND_ERR,
        405: WebAPIException.NO_MODIFICATION_ALLOWED_ERR
    },
    baseUrl: "http://localhost:3113",
    deviceDataList: [],
    isRunOnEmulator: function () {
        var c = window.location.search.split("modelid=");
        alert("smartHubFull : " + c);
        var b = c[1].split("&");
        var a = window.navigator.platform;
        if (b[0] == "SDK") {
            alert("current platform is emulator");
            return true
        } else {
            alert("current platform is real device");
            return false
        }
    },
    bEmulator: false,
    sessionId: null,
    bInit: false,
    init: function () {
        if (webapis.smarthome.isRunOnEmulator()) {
            webapis.smarthome.bInit = true;
            webapis.smarthome.bEmulator = true;
            return true
        }
        if (webapis.smarthome.isSmartHomeSupported() == false) {
            throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR)
        }
        var a = webapis.smarthome.getSessionId();
        webapis.smarthome.bInit = true;
        return true
    },
    destroy: function () {
        deviceDataList = null;
        if (webapis.smarthome.bEmulator) {
            webapis.smarthome.bInit = false;
            return
        }
        webapis.smarthome.deleteSessionId();
        webapis.smarthome.bInit = false
    },
    getDevices: function () {
        alert("Begin get devices.");
        var b = new Array();
        var a = function (c, e) {
            if (c && e) {
                var f = e.Devices;
                if (!webapis.smarthome.deviceDataList) {
                    webapis.smarthome.deviceDataList = []
                }
                for (var d = 0; d < f.length; d++) {
                    webapis.smarthome.deviceDataList.push(f[d]);
                    b.push(f[d].id)
                }
            }
            alert("The device id list is :" + JSON.stringify(b))
        };
        if (webapis.smarthome.bInit) {
            if (webapis.smarthome.bEmulator) {
                a(true, webapis.smarthome.CSHTestData.GetDevices())
            } else {
                webapis.smarthome.queryByUrl("GET", "/devices", null, a, false)
            }
        }
        return b
    },
    getDeviceName: function (b) {
        alert("Begin get device name by id :" + b);
        if (!b) {
            alert("CSHAPI:[GetDeviceName] The deviceId is null : " + b);
            throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.VALIDATION_ERR)
        }
        if (webapis.smarthome.bInit) {
            for (var a = 0; a < webapis.smarthome.deviceDataList.length; a++) {
                if (b == webapis.smarthome.deviceDataList[a].id) {
                    alert("The device name is :" + webapis.smarthome.deviceDataList[a].name);
                    return webapis.smarthome.deviceDataList[a].name
                }
            }
        }
        return null
    },
    getDeviceType: function (b) {
        alert("Begin get device type by id :" + b);
        if (!b) {
            alert("CSHAPI:[GetDeviceType] The deviceId is null : " + b);
            throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.VALIDATION_ERR)
        }
        if (webapis.smarthome.bInit) {
            for (var a = 0; a < webapis.smarthome.deviceDataList.length; a++) {
                if (b == webapis.smarthome.deviceDataList[a].id) {
                    alert("The device type is :" + webapis.smarthome.deviceDataList[a].type);
                    return webapis.smarthome.deviceDataList[a].type
                }
            }
        }
        return null
    },
    getDeviceStatus: function (e, d) {
        alert("Begin get device status by id :" + e);
        if (!e || !d) {
            alert("CSHAPI:[GetDeviceStatus] Get Device Status Failed---cmd or device id may be invalid");
            alert("The device id is :" + e + "cmd is : " + d);
            throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.VALIDATION_ERR)
        }
        var a = "/devices/" + e + webapis.smarthome.CMD_URL_MAP[d];
        var c = null;
        var b = function (f, g) {
            if (f && g) {
                switch (d) {
                    case webapis.smarthome.SMART_HOME_CMD.CMD_MODE:
                        if (g.Mode) {
                            c = g.Mode.modes
                        }
                        break;
                    case webapis.smarthome.SMART_HOME_CMD.CMD_AC_WIND_DIRECTION:
                        if (g.Wind) {
                            c = g.Wind.direction
                        }
                        break;
                    case webapis.smarthome.SMART_HOME_CMD.CMD_AC_WIND_SPEEDLEVEL:
                        if (g.Wind) {
                            c = g.Wind.speedLevel
                        }
                        break;
                    case webapis.smarthome.SMART_HOME_CMD.CMD_AC_TEMPERATURE_CURRENT:
                        if (g.Temperatures) {
                            c = g.Temperatures[0].current
                        }
                        break;
                    case webapis.smarthome.SMART_HOME_CMD.CMD_AC_TEMPERATURE_DESIRED:
                        if (g.Temperatures) {
                            c = g.Temperatures[0].desired
                        }
                        break;
                    case webapis.smarthome.SMART_HOME_CMD.CMD_OPERATION_POWER:
                        if (g.Operation) {
                            c = g.Operation.power
                        }
                        break;
                    case webapis.smarthome.SMART_HOME_CMD.CMD_WASHER_OPERATION_PROGRESS:
                        if (g.Operation) {
                            c = g.Operation.progress
                        }
                        break;
                    case webapis.smarthome.SMART_HOME_CMD.CMD_REF_TEMPERATURE_FRIDGE:
                        if (g.Temperatures) {
                            c = g.Temperatures[0].current
                        }
                        break;
                    case webapis.smarthome.SMART_HOME_CMD.CMD_REF_TEMPERATURE_FREZZE:
                        if (g.Temperatures) {
                            c = g.Temperatures[1].current
                        }
                        break;
                    case webapis.smarthome.SMART_HOME_CMD.CMD_WASHER_OPERATION_STATE:
                        if (g.Operation) {
                            c = g.Operation.state
                        }
                        break;
                    case webapis.smarthome.SMART_HOME_CMD.CMD_WASHER_OPERATION_PROGRESS_PERCENTAGE:
                        if (g.Operation) {
                            c = g.Operation.progressPercentage
                        }
                        break;
                    default:
                        c = null;
                        break
                }
            }
            alert("The Device Status is :" + c)
        };
        if (webapis.smarthome.bInit) {
            if (webapis.smarthome.bEmulator) {
                b(true, webapis.smarthome.CSHTestData.GetDeviceStatus(e, d))
            } else {
                webapis.smarthome.queryByUrl("GET", a, null, b, false)
            }
        }
        return c
    },
    setDeviceStatus: function (d, c, f) {
        alert("Begin set device status");
        alert("the device id is : " + d + " cmd is : " + c + " status info is :" + f);
        if (!c || !d || !f) {
            alert("CSHAPI:[SetDeviceStatus] Set Device Status Failed---cmd or device id or statusInfo may be invalid");
            throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.VALIDATION_ERR)
        }
        for (var e = 0; e < webapis.smarthome.deviceDataList.length; e++) {
            if (d == webapis.smarthome.deviceDataList[e].id) {
                var b = webapis.smarthome.deviceDataList[e];
                if (b.type != "Air_Conditioner") {
                    alert("This API only can be used to Air_Conditioner.");
                    throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.VALIDATION_ERR)
                }
            }
        }
        var a = "/devices/" + d + webapis.smarthome.CMD_URL_MAP[c];
        var j = {};
        switch (c) {
            case webapis.smarthome.SMART_HOME_CMD.CMD_MODE:
                j = {Mode: {modes: f}};
                break;
            case webapis.smarthome.SMART_HOME_CMD.CMD_AC_TEMPERATURE_DESIRED:
                a = a + "/1";
                j = {Temperature: {desired: f}};
                break;
            case webapis.smarthome.SMART_HOME_CMD.CMD_OPERATION_POWER:
                j = {Operation: {power: f}};
                break;
            case webapis.smarthome.SMART_HOME_CMD.CMD_AC_WIND_DIRECTION:
                j = {Wind: {direction: f}};
                break;
            case webapis.smarthome.SMART_HOME_CMD.CMD_AC_WIND_SPEEDLEVEL:
                j = {Wind: {speedLevel: f}};
                break;
            default:
                return false
        }
        var h = false;
        var g = function (i, k) {
            if (k == 204) {
                alert("Set device status successed.And the data is :" + k);
                h = true
            }
            if (i) {
                alert("Set device status successed.");
                h = true
            } else {
                alert("Set device status failed.");
                h = false
            }
        };
        if (webapis.smarthome.bInit) {
            if (webapis.smarthome.bEmulator) {
                g(webapis.smarthome.CSHTestData.SetDeviceStatus(d, c, f))
            } else {
                webapis.smarthome.queryByUrl("PUT", a, j, g, false)
            }
        }
        return h
    },
    getSessionId: function () {
        alert("Begin get session id");
        var f = false;
        var e = {account: "slepsystem", password: "slep2013"};
        var a = {LoginPassword: e};
        var c = function (g, h) {
            if (g && h && h.LoginPassword) {
                webapis.smarthome.sessionId = h.LoginPassword.session_id;
                alert("[CSHAPI:getSessionId] Get session id successed.");
                f = true
            } else {
                alert("[CSHAPI:getSessionId] Get session id failed.");
                webapis.smarthome.sessionId = null;
                f = true
            }
        };
        var d = 1;
        while (true) {
            if (d > 3) {
                break
            }
            if (f) {
                break
            }
            alert("Get session id for the " + d + " times.");
            var b = "/loginpassword";
            webapis.smarthome.queryByUrl("POST", b, a, c, false);
            d++
        }
        return f
    },
    deleteSessionId: function () {
        alert("Begin delete session id");
        var b = function (c, d) {
            if (c) {
                alert("[CSHAPI:m_pSessionLogout] logout successed.");
                return
            } else {
                alert("[CSHAPI:m_pSessionLogout] logout failed.");
                return
            }
        };
        var a = "/logout";
        webapis.smarthome.queryByUrl("DELETE", a, null, b, false)
    },
    queryByUrl: function (h, d, f, g, e) {
        if (h == null || d == null) {
            alert("method or url is null, method[" + h + "],url[" + d + "].");
            throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.VALIDATION_ERR)
        }
        var b = e != undefined ? e : false;
        var c = webapis.smarthome.baseUrl + d;
        var a = "json";
        if ("GET" != h) {
            a = ""
        }
        if (f) {
            f = JSON.stringify(f)
        }
        alert("The request url is :" + h + " " + c);
        alert("The request params is :" + f);
        $.ajax({
            url: c, type: h, data: f, dataType: a, async: b, beforeSend: function (i) {
                if (webapis.smarthome.sessionId) {
                    i.setRequestHeader("X-API-SessionID", webapis.smarthome.sessionId)
                }
            }, success: function (i, k, j) {
                alert("The response is the request of: " + h + " " + c + " and the params is :" + f);
                alert("The return code is : " + j.status);
                alert("The data is : " + JSON.stringify(i));
                if (g) {
                    g(true, i, j.status, d);
                    return
                }
            }, error: function (j, k) {
                alert("The response is the request of: " + h + " " + c + " and the params is :" + f);
                alert("The return code is : " + j.status);
                if (j.status == 204) {
                    g(true);
                    return
                }
                if (j.status) {
                    var i = webapis.smarthome.ERROR_STATUS_CODE[j.status];
                    if (!i) {
                        i = WebAPIException.UNKNOWN_ERR
                    }
                    throw ErrorsHelper.createWebAPIException_byLegacyCode(i)
                }
                throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.UNKNOWN_ERR)
            }
        })
    },
    isSmartHomeSupported: function () {
        alert("isSmartHomeSupported() called");
        firmwareVer = webapis._plugin("NNavi", "GetFirmware");
        splitString = firmwareVer.split("-");
        var a = splitString[1];
        alert("isSmartHomeSupported() platform : " + a.substr(8, 11));
        var b = parseInt(a.substr(8, 11), 10);
        if (b >= 2014) {
            return true
        } else {
            alert("SmartHome not supported.")
        }
        return false
    },
    CSHTestData: {
        deviceData: {
            Devices: [{
                Diagnostic: {
                    ErrorCode: [{code: "filter", description: "clear"}],
                    enabled: true
                },
                InformationLink: {href: "/devices/1d520e69-885b-44a4-866f-22e9fa7fe937/information"},
                Mode: {
                    modes: "cool",
                    supportedModes: ["cool", "dry", "wind", "heat", "coolclean", "dryclean", "heatclean", "auto", "speed", "smart", "sleep", "quiet", "unknown", "notsupported"]
                },
                Operation: {power: "on"},
                Temperatures: [{
                    current: 27,
                    desired: 18,
                    id: "1",
                    increment: 0,
                    name: "air_conditioner",
                    unit: "celsius"
                }],
                Wind: {direction: "center", maxSpeedLevel: 4, speedLevel: 3},
                connected: "Y",
                description: "",
                id: "1d520e69-885b-44a4-866f-22e9fa7fe937",
                name: "MEMORYasdfghjkqwertyuiopzxcvbnm33333333333333333",
                registered: true,
                resources: ["Information", "Operation", "Diagnostic", "Wind", "Temperatures", "Mode"],
                type: "Air_Conditioner",
                uuid: "1d520e69-885b-44a4-866f-22e9fa7fe937"
            }, {
                InformationLink: {href: "/devices/4bd37d06-5837-419b-94e9-ef07a809c74a/information"},
                Mode: {modes: "delicateshandwash"},
                Operation: {
                    power: "on",
                    progress: "wash",
                    progressPercentage: 50,
                    state: "run",
                    remainingTime: "50",
                    supportedProgress: ["delaywash", "weightsensing", "prewash", "wash", "rinse", "spin", "sud", "drying", "airwash", "cooling", "wrinkleprevent", "finish", "waitend"]
                },
                Washer: {supportedWaterTemperature: ["cold", "warm", "hot", "30", "40"]},
                connected: "Y",
                description: "",
                id: "4bd37d06-5837-419b-94e9-ef07a809c74a",
                name: "13K_WM_LCD",
                registered: true,
                resources: ["Information", "Operation", "Diagnostic", "Washer", "Temperatures", "Mode"],
                type: "Washer",
                uuid: "4bd37d06-5837-419b-94e9-ef07a809c74a"
            }, {
                InformationLink: {href: "/devices/637c9308-01fd-474b-b465-812116ce4511/information"},
                connected: "Y",
                description: "",
                id: "637c9308-01fd-474b-b465-812116ce4511",
                name: "REF",
                registered: true,
                resources: ["Information", "Diagnostic", "Temperatures", "Doors"],
                Fridge: {rapidFridge: "on", rapidFreezing: "on"},
                Doors: [{current: 100, id: "1", openState: "open", name: "fridge", unit: "celsius"}, {
                    current: 200,
                    id: "2",
                    increment: 0,
                    openState: "open",
                    unit: "celsius"
                }],
                Temperatures: [{current: 18, id: "1", increment: 0, name: "fridge", unit: "celsius"}, {
                    current: -3,
                    id: "1",
                    increment: 0,
                    name: "freezer",
                    unit: "celsius"
                }],
                type: "Refrigerator",
                uuid: "637c9308-01fd-474b-b465-812116ce4511"
            }, {
                Diagnostic: {ErrorCode: [{code: "filter", description: "clear"}], enabled: true},
                InformationLink: {href: "/devices/1d520e69-885b-44a4-866f-22e9fa7fe93b/information"},
                Mode: {
                    modes: "dry",
                    supportedModes: ["cool", "dry", "wind", "heat", "coolclean", "dryclean", "heatclean", "auto", "speed", "smart", "sleep", "quiet", "unknown", "notsupported"]
                },
                Operation: {power: "off"},
                Temperatures: [{
                    current: 30,
                    desired: 20,
                    id: "1",
                    increment: 0,
                    name: "air_conditioner",
                    unit: "celsius"
                }],
                Wind: {direction: "center", maxSpeedLevel: 5, speedLevel: 3},
                connected: "Y",
                description: "",
                id: "1d520e69-885b-44a4-866f-22e9fa7fe93b",
                name: "MEMORY",
                registered: true,
                resources: ["Information", "Operation", "Diagnostic", "Wind", "Temperatures", "Mode"],
                type: "Air_Conditioner",
                uuid: "1d520e69-885b-44a4-866f-22e9fa7fe93b"
            }, {
                InformationLink: {href: "/devices/4bd37d06-5837-419b-94e9-ef07a809c74e/information"},
                Mode: {modes: "normal"},
                Operation: {
                    power: "off",
                    progress: "wash",
                    progressPercentage: 40,
                    state: "run",
                    remainingTime: "80",
                    supportedProgress: ["delaywash", "weightsensing", "prewash", "wash", "rinse", "spin", "sud", "drying", "airwash", "cooling", "wrinkleprevent", "finish", "waitend"]
                },
                Washer: {supportedWaterTemperature: ["cold", "warm", "hot", "30", "40"]},
                connected: "Y",
                description: "",
                id: "4bd37d06-5837-419b-94e9-ef07a809c74e",
                name: "13K_WM_LCD_TOW",
                registered: true,
                resources: ["Information", "Operation", "Diagnostic", "Washer", "Temperatures", "Mode"],
                type: "Washer",
                uuid: "4bd37d06-5837-419b-94e9-ef07a809c74e"
            }, {
                InformationLink: {href: "/devices/637c9308-01fd-474b-b465-812116ce4519/information"},
                connected: "Y",
                description: "",
                id: "637c9308-01fd-474b-b465-812116ce4519",
                name: "REF_TOW",
                registered: true,
                resources: ["Information", "Diagnostic", "Temperatures", "Doors"],
                Fridge: {rapidFridge: "off", rapidFreezing: "off"},
                Doors: [{current: 100, id: "1", openState: "open", name: "fridge", unit: "celsius"}, {
                    current: 200,
                    id: "2",
                    increment: 0,
                    openState: "open",
                    unit: "celsius"
                }],
                Temperatures: [{current: 20, id: "1", increment: 0, name: "fridge", unit: "celsius"}, {
                    current: -10,
                    id: "1",
                    increment: 0,
                    name: "freezer",
                    unit: "celsius"
                }],
                type: "Refrigerator",
                uuid: "637c9308-01fd-474b-b465-812116ce4519"
            },]
        }, GetDevices: function () {
            return webapis.smarthome.CSHTestData.deviceData
        }, GetDeviceStatus: function (c) {
            var b = null;
            for (var a = 0; a < webapis.smarthome.CSHTestData.deviceData.Devices.length; a++) {
                if (c == webapis.smarthome.CSHTestData.deviceData.Devices[a].id) {
                    b = webapis.smarthome.CSHTestData.deviceData.Devices[a];
                    return b
                }
            }
            return b
        }, SetDeviceStatus: function (e, d, c) {
            var b = null;
            for (var a = 0; a < webapis.smarthome.CSHTestData.deviceData.Devices.length; a++) {
                if (e == webapis.smarthome.CSHTestData.deviceData.Devices[a].id) {
                    b = webapis.smarthome.CSHTestData.deviceData.Devices[a];
                    break
                }
            }
            var f = false;
            switch (d) {
                case webapis.smarthome.SMART_HOME_CMD.CMD_MODE:
                    if (b.Mode) {
                        b.Mode.modes = c;
                        f = true
                    }
                    break;
                case webapis.smarthome.SMART_HOME_CMD.CMD_AC_WIND_DIRECTION:
                    if (b.Wind) {
                        b.Wind.direction = c;
                        f = true
                    }
                    break;
                case webapis.smarthome.SMART_HOME_CMD.CMD_AC_WIND_SPEEDLEVEL:
                    if (b.Wind) {
                        b.Wind.speedLevel = c;
                        f = true
                    }
                    break;
                case webapis.smarthome.SMART_HOME_CMD.CMD_AC_TEMPERATURE_DESIRED:
                    if (b.Temperatures) {
                        b.Temperatures[0].desired = c;
                        f = true
                    }
                    break;
                case webapis.smarthome.SMART_HOME_CMD.CMD_OPERATION_POWER:
                    if (b.Operation) {
                        b.Operation.power = c;
                        f = true
                    }
                    break;
                default:
                    f = false;
                    break
            }
            return f
        }
    }
};
alert("[webapis.js] loading finished");