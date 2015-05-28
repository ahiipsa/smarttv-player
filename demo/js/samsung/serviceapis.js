var serviceapis = window.serviceapis || {};
alert("[serviceapis.js] loaded");
serviceapis.platform = "Samsung SmartTV";
serviceapis.ver = "1.002";
alert("\t[serviceapis.js] Version : " + serviceapis.ver);
var FeatureArray = new Array();
var ParamArray = new Array();
ParamArray.push(null, null);
FeatureArray.push(new Feature("http://samsungapps.com/api/serviceapis", false, ParamArray));
FeatureArray.push(new Feature("http://samsungapps.com/api/mediashare.mscp", false, ParamArray));
serviceapis.listAvailableFeatures = function () {
    alert("listAvailableFeatures()");
    return FeatureArray
};
serviceapis.listActivatedFeatures = function () {
    return FeatureArray
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
function ServiceAPIError(b, a) {
    this.__defineGetter__("code", function () {
        return b
    });
    this.__defineGetter__("message", function () {
        return a
    })
}
ServiceAPIError.prototype.toString = function () {
    return "[serviceapis error(" + this.code + ")] : " + this.message
};
ServiceAPIError.prototype.UNKNOWN_ERR = 0;
ServiceAPIError.prototype.INDEX_SIZE_ERR = 1;
ServiceAPIError.prototype.DOMSTRING_SIZE_ERR = 2;
ServiceAPIError.prototype.HIERARCHY_REQUEST_ERR = 3;
ServiceAPIError.prototype.WRONG_DOCUMENT_ERR = 4;
ServiceAPIError.prototype.INVALID_CHARACTER_ERR = 5;
ServiceAPIError.prototype.NO_DATA_ALLOWED_ERR = 6;
ServiceAPIError.prototype.NO_MODIFICATION_ALLOWED_ERR = 7;
ServiceAPIError.prototype.NOT_FOUND_ERR = 8;
ServiceAPIError.prototype.NOT_SUPPORTED_ERR = 9;
ServiceAPIError.prototype.INUSE_ATTRIBUTE_ERR = 10;
ServiceAPIError.prototype.INVALID_STATE_ERR = 11;
ServiceAPIError.prototype.SYNTAX_ERR = 12;
ServiceAPIError.prototype.INVALID_MODIFICATION_ERR = 13;
ServiceAPIError.prototype.NAMESPACE_ERR = 14;
ServiceAPIError.prototype.INVALID_ACCESS_ERR = 15;
ServiceAPIError.prototype.VALIDATION_ERR = 16;
ServiceAPIError.prototype.TYPE_MISMATCH_ERR = 17;
ServiceAPIError.prototype.SECURITY_ERR = 18;
ServiceAPIError.prototype.NETWORK_ERR = 19;
ServiceAPIError.prototype.ABORT_ERR = 20;
ServiceAPIError.prototype.TIMEOUT_ERR = 21;
ServiceAPIError.prototype.INVALID_VALUES_ERR = 22;
ServiceAPIError.prototype.OUT_OF_MEMORY_ERR = 101;
ServiceAPIError.prototype.NOT_CONNECTED_SERVICE_ERR = 102;
ServiceAPIError.prototype.FAIL_TO_REQUEST_ERR = 103;
ServiceAPIError.prototype.INVALID_RESPONSE_ERR = 104;
ServiceAPIError.prototype.NO_AVAILABLE_NETWORK_ERR = 105;
ServiceAPIError.prototype.INVALID_DEVICE_ERR = 106;
ServiceAPIError.prototype.NOT_SUPPORTED_FUNCTION_ERR = 107;
ServiceAPIError.prototype.NO_PERMISSION_ERR = 108;
ServiceAPIError.prototype.INVALID_ITEM_ERR = 109;
ServiceAPIError.prototype.FAIL_TO_PLAY_ERR = 110;
serviceapis.mediasharing = {
    mediaproviderfinder: {
        getMediaProviders: function () {
            alert("getMediaProviders()");
            var retValue = null;
            var allsharePlugin = serviceapis._plugin("AllShare");
            if (!allsharePlugin) {
                alert("allsharePlugin is not exist.");
                return false
            }
            var json = serviceapis._plugin(allsharePlugin, "GetDeviceList", 0);
            if (json && json != -1) {
                var obj = eval(json);
                if (obj && obj.length) {
                    retValue = [];
                    for (var i = 0; i < obj.length; i++) {
                        retValue.push(new MediaProvider(obj[i]))
                    }
                }
            }
            return retValue
        }, getMediaProvider: function (ID) {
            alert("getDevice()");
            if (typeof ID != "number") {
                throw new ServiceAPIError(ServiceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            var retValue = null;
            var allsharePlugin = serviceapis._plugin("AllShare");
            if (!allsharePlugin) {
                alert("allsharePlugin is not exist.");
                return false
            }
            var json = serviceapis._plugin(allsharePlugin, "GetDevice", ID);
            if (json && json != -1) {
                var obj = eval("(" + json + ")");
                retValue = new MediaProvider(obj)
            }
            return retValue
        }, setMediaProviderFinderCallback: function (a) {
            alert("setMediaProviderFinderCallback");
            if (typeof a != "object" || a === null) {
                throw new ServiceAPIError(ServiceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            var b = serviceapis._plugin("AllShare");
            if (!b) {
                alert("allsharePlugin is not exist.");
                return
            }
            if (a.onmediaprovideradded) {
                if (typeof a.onmediaprovideradded == "function") {
                    alert("successCallback.onmediaprovideradded instanceof Function");
                    serviceapis.mediasharing.MediaProviderDiscoveryCallback.onmediaprovideradded = a.onmediaprovideradded
                } else {
                    if (a.onmediaprovideradded === null) {
                        serviceapis.mediasharing.MediaProviderDiscoveryCallback.onmediaprovideradded = null
                    } else {
                        throw new ServiceAPIError(ServiceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
                    }
                }
            } else {
                throw new ServiceAPIError(ServiceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
            if (a.onmediaproviderremoved) {
                if (typeof a.onmediaproviderremoved == "function") {
                    serviceapis.mediasharing.MediaProviderDiscoveryCallback.onmediaproviderremoved = a.onmediaproviderremoved
                } else {
                    if (a.onmediaproviderremoved == null) {
                        serviceapis.mediasharing.MediaProviderDiscoveryCallback.onmediaproviderremoved = null
                    } else {
                        throw new ServiceAPIError(ServiceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
                    }
                }
            } else {
                throw new ServiceAPIError(ServiceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
            }
        }
    }, MediaProviderDiscoveryCallback: {
        onmediaprovideradded: function (a) {
            alert("ADDED Provider : " + a.getName())
        }, onmediaproviderremoved: function (a) {
            alert("REMOVED Provider : " + a.getName())
        }
    }
};
function Device(a) {
    alert("Device (device)");
    if (a) {
        this._id = a.deviceID;
        this._name = a.deviceName;
        this._type = a.deviceType
    }
}
Device.prototype.getIcon = function () {
    return null
};
Device.prototype.getID = function () {
    return this._id
};
Device.prototype.getName = function () {
    return this._name
};
function MediaProvider(a) {
    alert("MediaProvider (device)");
    Device.call(this, a)
}
MediaProvider.prototype = new Device();
MediaProvider.prototype.constructor = MediaProvider;
MediaProvider.prototype.getRootFolder = function () {
    alert("MediaProvider.prototype.getRootFolder");
    var retValue = null;
    var json = serviceapis._plugin("AllShare", "GetRootFolder", this._id, 0) || "";
    _ItemDeviceID = this._id;
    if (json) {
        var obj = eval("(" + json + ")");
        obj.type = "folder";
        retValue = new FolderItem(obj);
        alert(retValue.type)
    }
    return retValue
};
EDMSCP_MSG_BROWSEFOLDER_RESULT = 200;
EDMSCP_MSG_SEARCH_RESULT = 201;
EDMSCP_MSG_GETITEMINFO_RESULT = 212;
DMSCP_UPNP_DEVICEADDED = 0;
DMSCP_UPNP_DEVICEDELETE = 1;
EDMSCP_MSG_NO_DATA = -9;
EDMSCP_MSG_CANCEL = -8;
EDMSCP_MSG_UNKNOWN = -1;
EDMSCP_MSG_INVALID_SVC = -17;
_browseitemCallback = null;
_browseitemerrorCallback = null;
browse_startIndex = null;
browse_folderItem = null;
browse_endofItem = true;
browse_provider = null;
_ItemDeviceID = null;
_errorFlag = 0;
MediaProvider.prototype.browseItems = function (a, e, b, g, d) {
    alert("MediaProvider.prototype.browseItems()");
    if (a == null && typeof e == "function") {
        e(new SDeviceAPIError(SDeviceAPIError.prototype.INVALID_VALUES_ERR, "INVALID_VALUES_ERR"));
        return
    }
    if ((typeof a != "function" && a != null) || (typeof e != "function" && e != null)) {
        throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
    }
    if (a == null && e == null) {
        throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
    }
    if (typeof b != "object" || typeof g != "number" || typeof d != "number") {
        throw new ServiceAPIError(ServiceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
    }
    if (g < 0 || d < 0) {
        if (typeof e == "function") {
            e(new ServiceAPIError(ServiceAPIError.prototype.INVALID_VALUES_ERR, "INVALID_VALUES_ERR"))
        }
        return
    }
    var f = null;
    var c = serviceapis._plugin("AllShare");
    if (!c) {
        alert("allsharePlugin is not exist.");
        if (typeof e == "function") {
            e(new ServiceAPIError(ServiceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"))
        }
        return
    }
    _errorFlag = 0;
    browse_startIndex = g;
    browse_folderItem = b;
    browse_provider = this;
    if (browse_provider) {
        _ItemDeviceID = browse_provider.getID();
        _browseitemCallback = a;
        _browseitemerrorCallback = e;
        f = serviceapis._plugin(c, "BrowseItems", "a", browse_provider.getID(), b._objectID, g, d)
    } else {
        if (typeof e == "function") {
            e(new ServiceAPIError(ServiceAPIError.prototype.INVALID_STATE_ERR, "INVALID_STATE_ERR"))
        }
        return
    }
};
function _bindAllshareEventHandler() {
    alert("_bindAllshareEventHandler");
    var a = serviceapis._plugin("AllShare");
    a.OnEvent = _onAllsharePluginEvent
}
function _onAllsharePluginEvent(event, data1, data2) {
    alert("Event : " + event);
    alert("BT_Retrun : " + data1 + " => " + data2);
    switch (event) {
        case EDMSCP_MSG_BROWSEFOLDER_RESULT:
            MediaProviderBrowseItemsSuccessCallback(data2);
            break;
        case EDMSCP_MSG_SEARCH_RESULT:
            MediaProviderSearchItemsSuccessCallback(data2);
            break;
        case DMSCP_UPNP_DEVICEADDED:
            alert("DMSCP_UPNP_DEVICEADDED");
            var addedDevice = null;
            if (data2) {
                var obj = eval("(" + data2 + ")");
                addedDevice = new MediaProvider(obj);
                serviceapis.mediasharing.MediaProviderDiscoveryCallback.onmediaprovideradded(addedDevice)
            }
            break;
        case DMSCP_UPNP_DEVICEDELETE:
            alert("DMSCP_UPNP_DEVICEDELETE");
            var deletedDevice = null;
            if (data2) {
                var obj = eval("(" + data2 + ")");
                deletedDevice = new MediaProvider(obj);
                serviceapis.mediasharing.MediaProviderDiscoveryCallback.onmediaproviderremoved(deletedDevice)
            }
            break;
        case EDMSCP_MSG_NO_DATA:
            if (_errorFlag == 0) {
                MediaProviderBrowseItemsErrorCallback(ServiceAPIError.prototype.INVALID_ITEM_ERR, "INVALID_ITEM_ERR")
            } else {
                if (_errorFlag == 1) {
                    MediaProviderSearchItemsErrorCallback(ServiceAPIError.prototype.INVALID_ITEM_ERR, "INVALID_ITEM_ERR")
                }
            }
            break;
        case EDMSCP_MSG_CANCEL:
            if (_errorFlag == 0) {
                MediaProviderBrowseItemsErrorCallback(ServiceAPIError.prototype.UNKNOWN_ERR, "UNKNOWN_ERR")
            } else {
                if (_errorFlag == 1) {
                    MediaProviderSearchItemsErrorCallback(ServiceAPIError.prototype.UNKNOWN_ERR, "UNKNOWN_ERR")
                }
            }
            break;
        case EDMSCP_MSG_UNKNOWN:
            if (_errorFlag == 0) {
                MediaProviderBrowseItemsErrorCallback(ServiceAPIError.prototype.UNKNOWN_ERR, "UNKNOWN_ERR")
            } else {
                if (_errorFlag == 1) {
                    MediaProviderSearchItemsErrorCallback(ServiceAPIError.prototype.UNKNOWN_ERR, "UNKNOWN_ERR")
                }
            }
            break;
        case EDMSCP_MSG_INVALID_SVC:
            if (_errorFlag == 0) {
                MediaProviderBrowseItemsErrorCallback(ServiceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR")
            } else {
                if (_errorFlag == 1) {
                    MediaProviderSearchItemsErrorCallback(ServiceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR")
                }
            }
            break;
        default:
            if (_errorFlag == 0) {
                MediaProviderBrowseItemsErrorCallback(ServiceAPIError.prototype.UNKNOWN_ERR, "UNKNOWN_ERR")
            } else {
                if (_errorFlag == 1) {
                    MediaProviderSearchItemsErrorCallback(ServiceAPIError.prototype.UNKNOWN_ERR, "UNKNOWN_ERR")
                }
            }
            break
    }
}
function MediaProviderBrowseItemsSuccessCallback(data) {
    alert("MediaProviderBrowseItemsSuccessCallback");
    var itemList = null;
    if (data) {
        var obj = eval(data);
        if (obj && obj.length) {
            itemList = [];
            for (var i = 0; i < obj.length; i++) {
                if (obj[i].type == "folder") {
                    itemList.push(new FolderItem(obj[i]))
                } else {
                    if (obj[i].type == "file") {
                        if (obj[i].mediaType == "video") {
                            itemList.push(new VideoItem(obj[i]))
                        } else {
                            if (obj[i].mediaType == "audio") {
                                itemList.push(new AudioItem(obj[i]))
                            } else {
                                if (obj[i].mediaType == "image") {
                                    itemList.push(new ImageItem(obj[i]))
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    _browseitemCallback(itemList, browse_startIndex, browse_folderItem, browse_endofItem, browse_provider)
}
function MediaProviderBrowseItemsErrorCallback(a, b) {
    alert("MediaProviderBrowseItemsErrorCallback");
    _browseitemerrorCallback(new ServiceAPIError(a, b))
}
MediaProvider.prototype.isSearchable = function () {
};
_searchitemCallback = null;
_searchitemerrorCallback = null;
search_startIndex = null;
search_keyword = null;
search_endOfItems = true;
search_provider = null;
MediaProvider.prototype.searchItems = function (a, e, d, g, c) {
    alert("MediaProvider.prototype.searchItems()");
    if (a == null && typeof e == "function") {
        e(new SDeviceAPIError(SDeviceAPIError.prototype.INVALID_VALUES_ERR, "INVALID_VALUES_ERR"));
        return
    }
    if ((typeof a != "function" && a != null) || (typeof e != "function" && e != null)) {
        throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
    }
    if (a == null && e == null) {
        throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
    }
    if (typeof a != "function" || typeof e != "function") {
        throw new ServiceAPIError(ServiceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
    }
    if (typeof d != "string" || typeof g != "number" || typeof c != "number") {
        throw new ServiceAPIError(ServiceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
    }
    if (g < 0 || c < 0) {
        if (typeof e == "function") {
            e(new ServiceAPIError(ServiceAPIError.prototype.INVALID_VALUES_ERR, "INVALID_VALUES_ERR"))
        }
        return
    }
    var f = null;
    var b = serviceapis._plugin("AllShare");
    if (!b) {
        alert("allsharePlugin is not exist.");
        if (typeof e == "function") {
            e(new ServiceAPIError(ServiceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"))
        }
        return
    }
    _errorFlag = 1;
    search_startIndex = g;
    search_keyword = d;
    search_provider = this;
    if (search_provider) {
        _ItemDeviceID = search_provider.getID();
        _searchitemCallback = a;
        _searchitemerrorCallback = e;
        f = serviceapis._plugin(b, "SearchItems", "a", search_provider.getID(), d, 3, g, c)
    } else {
        if (typeof e == "function") {
            e(new ServiceAPIError(ServiceAPIError.prototype.INVALID_STATE_ERR, "INVALID_STATE_ERR"))
        }
        return
    }
};
function MediaProviderSearchItemsSuccessCallback(data) {
    alert("MediaProviderSearchItemsSuccessCallback");
    var itemList = null;
    if (data) {
        var obj = eval(data);
        if (obj && obj.length) {
            itemList = [];
            for (var i = 0; i < obj.length; i++) {
                if (obj[i].type == "folder") {
                    itemList.push(new FolderItem(obj[i]))
                } else {
                    if (obj[i].type == "file") {
                        if (obj[i].mediaType == "video") {
                            itemList.push(new VideoItem(obj[i]))
                        } else {
                            if (obj[i].mediaType == "audio") {
                                itemList.push(new AudioItem(obj[i]))
                            } else {
                                if (obj[i].mediaType == "image") {
                                    itemList.push(new ImageItem(obj[i]))
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    _searchitemCallback(itemList, search_startIndex, search_keyword, search_endOfItems, search_provider)
}
function MediaProviderSearchItemsErrorCallback(a, b) {
    alert("MediaProviderSearchItemsErrorCallback");
    _searchitemerrorCallback(new ServiceAPIError(a, b))
}
function MediaProviderType(a) {
    alert("MediaProviderType (type)");
    this.__defineGetter__("type", function () {
        return a
    })
}
MediaProviderType.DLNA_MEDIA_SERVER = 0;
MediaProvider.prototype.getMediaProviderType = function () {
    alert("getMediaProviderType");
    return new MediaProviderType(MediaProviderType.DLNA_MEDIA_SERVER)
};
function ItemType(a) {
    alert("ItemType (type)");
    this.__defineGetter__("type", function () {
        return a
    })
}
ItemType.prototype.ITEM_FOLDER = 0;
ItemType.prototype.ITEM_AUDIO = 1;
ItemType.prototype.ITEM_IMAGE = 2;
ItemType.prototype.ITEM_VIDEO = 3;
ItemType.prototype.ITEM_UNKNOWN = 9999;
function Item(a) {
    alert("Item(item)");
    if (a) {
        this._title = a.title;
        this._date = a.date;
        if (a.url) {
            this._uri = a.url
        }
        this._type = a.type;
        this._objectID = a.objectID;
        this._parentID = a.parentID;
        if (this._type == "file") {
            this._mediaType = a.mediaType
        }
    }
}
Item.prototype.getTitle = function () {
    return this._title
};
Item.prototype.getDate = function () {
    return this._date
};
Item.prototype.getURI = function () {
    if (this._uri) {
        return this._uri
    } else {
        return null
    }
};
Item.prototype.getType = function () {
    alert("getType");
    if (this._type == "folder") {
        return new ItemType(ItemType.prototype.ITEM_FOLDER)
    } else {
        if (this._type == "file") {
            if (this._mediaType == "video") {
                return new ItemType(ItemType.prototype.ITEM_VIDEO)
            } else {
                if (this._mediaType == "audio") {
                    return new ItemType(ItemType.prototype.ITEM_AUDIO)
                } else {
                    if (this._mediaType == "image") {
                        return new ItemType(ItemType.prototype.ITEM_IMAGE)
                    }
                }
            }
        } else {
            return new ItemType(ItemType.prototype.ITEM_UNKNOWN)
        }
    }
};
function FolderItem(a) {
    alert("FolderItem (item)");
    Item.call(this, a)
}
FolderItem.prototype = new Item();
FolderItem.prototype.constructor = FolderItem;
FolderItem.prototype.isRootFolder = function () {
    alert("isRootFolder");
    var rootFolder = null;
    var json = serviceapis._plugin("AllShare", "GetRootFolder", _ItemDeviceID, 0) || "";
    if (json) {
        var obj = eval("(" + json + ")");
        rootFolder = new FolderItem(obj)
    }
    if (rootFolder) {
        if (rootFolder._objectID == this._objectID) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
};
function AudioItem(a) {
    alert("AudioItem (item)");
    Item.call(this, a);
    if (a) {
        this._albumart = a.thumbnail;
        this._albumtitle = a.album;
        this._artist = a.artist;
        this._duration = a.totalplaytime
    }
}
AudioItem.prototype = new Item();
AudioItem.prototype.constructor = AudioItem;
AudioItem.prototype.getAlbumArt = function () {
    return this._albumart
};
AudioItem.prototype.getAlbumTitle = function () {
    return this._albumtitle
};
AudioItem.prototype.getArtist = function () {
    return this._artist
};
AudioItem.prototype.getDuration = function () {
    return this._duration
};
function ImageItem(a) {
    alert("ImageItem (item)");
    Item.call(this, a);
    if (a) {
        this._thumbnail = a.thumbnail;
        this._resolution = a.resolution;
        this._longitude = null;
        this._latitude = null
    }
}
ImageItem.prototype = new Item();
ImageItem.prototype.constructor = ImageItem;
ImageItem.prototype.getThumbnail = function () {
    return this._thumbnail
};
ImageItem.prototype.getResolution = function () {
    return this._resolution
};
ImageItem.prototype.getLongitude = function () {
    return this._longitude
};
ImageItem.prototype.getLatitude = function () {
    return this._latitude
};
function VideoItem(a) {
    alert("VideoItem (item)");
    Item.call(this, a);
    if (a) {
        this._thumbnail = a.thumbnail;
        this._resolution = a.resolution;
        this._duration = a.totalplaytime
    }
}
VideoItem.prototype = new Item();
VideoItem.prototype.constructor = VideoItem;
VideoItem.prototype.getThumbnail = function () {
    return this._thumbnail
};
VideoItem.prototype.getResolution = function () {
    return this._resolution
};
VideoItem.prototype.getDuration = function () {
    return this._duration
};
serviceapis._plugin = function () {
    var b = serviceapis._plugin.getSEFAvailable();
    var h = Array.prototype.slice.call(arguments);
    var i = null;
    alert("[serviceapis] _plugin(" + h + ")");
    if (typeof arguments[0] == "string") {
        var g = c(arguments[0]);
        if (!g) {
            alert("Plugin name is not defined : " + arguments[0]);
            return null
        }
        var d = "_plugin_";
        i = document.getElementById(d + g);
        if (!i) {
            i = f(g, b);
            _bindAllshareEventHandler()
        }
    } else {
        i = arguments[0]
    }
    if (!i) {
        alert("CANNOT get the plugin object (" + g + ")");
        return null
    }
    if (h.length == 1 && typeof arguments[0] == "string") {
        alert("Getting Plugin Object: " + i);
        return i
    }
    var a = arguments[1];
    if (serviceapis._plugin.wrappedMethod[a]) {
        return serviceapis._plugin.wrappedMethod[a](i, b, h)
    }
    if (!b) {
        var e = null;
        if (typeof i[a] == "function") {
            h = h.slice(2);
            e = i[a].apply(i, h)
        } else {
            e = serviceapis._pluginDef.PLR_NOT_IMPLEMENT
        }
        alert("\treturns " + e);
        return e
    } else {
        var e = null;
        h = h.slice(1);
        e = i.Execute.apply(i, h);
        alert("\treturns " + e);
        return e
    }
    function c(l) {
        alert("getPluginName(" + l + ")");
        var k = ["AllShare"];
        for (var m = 0; m < k.length; m++) {
            if (k[m].toUpperCase() == l.toUpperCase()) {
                alert("\treturn " + k[m]);
                return k[m]
            }
        }
        alert("\treturn(as it is) " + l);
        return l
    }

    function f(q, m) {
        alert("addPluginObject(" + q + "," + m + ")");
        var n = "";
        var k = "_pluginObject" + q + "Container_";
        var p = document.createElement("div");
        p.id = k;
        p.style.position = "absolute";
        p.style.left = "0px";
        p.style.top = "0px";
        document.body.appendChild(p);
        var l = j(q);
        var o = l ? "display:block;position:absolute;width:960px;height:540px;" : "display:block;position:absolute;width:0px;height:0px;";
        if (!m) {
            n = '<OBJECT id="' + d + q + '" classid="clsid:SAMSUNG-INFOLINK-' + q + '" style="' + o + '"></OBJECT>';
            alert("Create " + q + " Plugin : " + n);
            p.innerHTML += n
        } else {
            n = '<OBJECT id="' + d + q + '" classid="clsid:SAMSUNG-INFOLINK-SEF" style="' + o + '"></OBJECT>';
            alert("Create SEF Plugin for " + q + ": " + n);
            p.innerHTML += n;
            document.getElementById(d + q).Open(q, "1.000", q)
        }
        return document.getElementById(d + q)
    }

    function j(k) {
        k = k.toUpperCase();
        return (k == "PLAYER" || k == "IMAGEVIEWER")
    }
};
serviceapis._plugin.getSEFAvailable = function () {
    alert("serviceapis._plugin.getSEFAvailable()");
    var b = navigator.appVersion.toLowerCase();
    if (b.indexOf("applewebkit") >= 0) {
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
serviceapis._plugin.wrappedMethod = {
    GetVersion: function (c, d, b) {
        alert("[serviceapis] Wrapped Method GetVersion(" + c + ", " + d + ")");
        if (!d) {
            var a = c.GetPluginInfo(serviceapis._pluginDef.PL_CMN_INFO_VERSION);
            alert("\tLegacy returns " + a);
            return {isSEF: false, ver: a}
        } else {
            var a = c.Execute("GetVersion");
            alert("\tSEF returns " + a);
            return {isSEF: true, ver: a}
        }
    }
};
serviceapis._pluginDef = {
    PLR_TRUE: 1,
    PLR_FALSE: 0,
    PLR_FAIL: -1,
    PLR_NOT_IMPLEMENT: -2,
    PLR_NULL_ARG: -3,
    PLR_INVALID_ARG: -4,
    PLR_CANNOT_OPEN_FILE: -5,
    PLR_OUT_OF_RANGE: -6,
    PL_CMN_INFO_VERSION: 0,
    PL_CMN_INFO_UNKNWON: 999
};