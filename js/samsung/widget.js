if (this.Common == null) {
    this.Common = new Object()
}
if (this.Common.API == null) {
    this.Common.API = new Object()
}
Common.API.EVENT_ENUM = {
    GET_SEARCH_WIDGET_LIST: "01",
    RUN_SEARCH_WIDGET: "02",
    GET_CHANNEL_WIDGET_LIST: "03",
    RUN_SHOP_DEMO: "04",
    WIDGET_READY: "10",
    WIDGET_EXIT: "11",
    WIDGET_RETURN: "12",
    KEY_REGIST: "20",
    KEY_UNREGIST: "21",
    KEY_IME_MODE: "22",
    KEY_REGIST_ALL: "23",
    KEY_UNREGIST_ALL: "24",
    KEY_REGIST_FULL_WIDGET: "25",
    KEY_REGIST_PART_WIDGET: "26",
    ADD_LOG: "30",
    SET_TOKEN: "31",
    GET_SNS_LIST: "32",
    GET_APP_PATH: "33",
    MOVE_APP_INFO: "34",
    SET_REMOTE_TYPE: "35",
    GET_APP_ALL_LIST: "36",
    SET_ORIG_SOURCE: "37",
    DIRECT_LOGIN_HOTEL: "38",
    RUN_TV_CHANNEL: "39",
    GET_TOKEN: "40",
    GET_INSTALLED_APP_LIST: "41",
    GET_CATEGORY_APP_LIST: "42",
    GET_GALLERY_INFO: "43",
    DOWNLOAD_WIDGET: "44",
    DELETE_WIDGET: "45",
    HIDE_CURRENT_TICKER: "46",
    LOSE_HIGHTLIGHT: "47",
    GET_HIGHTLIGHT: "48",
    MOVE_DOWNLOAD_RATE: "49",
    SSO_SET_LOGIN: "50",
    SSO_SET_LOGOUT: "51",
    SSO_STORE_ACCOUNT_CHECK: "53",
    SSO_CHECK_LOGIN: "54",
    SSO_GET_LOGIN_FAILURE: "55",
    SSO_REQUEST_OAUTH: "56",
    SSO_EXECUTE_BROWSER: "57",
    SSO_INIT_USER_INFO: "59",
    SSO_GET_USER_INFO: "60",
    SSO_SET_USER_INFO: "61",
    SSO_SET_TOKEN: "62",
    SSO_GET_TOKEN: "63",
    SSO_LOAD_ACCOUNT_LIST: "64",
    SSO_SAVE_ACCOUNT_LIST: "65",
    SSO_GET_WIDGET_LIST_NEW: "66",
    SSO_GET_YOSEMITE_ACCESS_DATA: "67",
    SSO_GET_AUTHENTICATION: "68",
    SSO_STORE_ACCOUNT_CHECK_NEW: "69",
    INAPP_INIT: "70",
    INAPP_ITEM_LIST: "71",
    INAPP_SUBSCRIPTION_LIST: "72",
    INAPP_PURCHASED_ITEM_LIST: "73",
    INAPP_PURCHASED_SUBSCRIPTION_LIST: "74",
    INAPP_SUBSCRIPTION_CANCELIATION: "75",
    INAPP_DOWNLOAD: "76",
    INAPP_CHECK_PASSWORD: "77",
    INAPP_BUY_ITEM: "78",
    INAPP_REMAIN_CASH: "79",
    INAPP_ORDER_HISTORY: "80",
    INAPP_PAYMENT_METHOD_LIST: "81",
    GET_DOWNLOAD_LIST: "82",
    SEND_DATA_TO_EVENTLISTENER: "83",
    PNS_CHECK_TICKET: "90",
    PNS_REQUEST_TICKET: "91",
    PNS_SEND_PAYLOAD: "92",
    SET_SIGNATURE_DATA: "93",
    SET_ORIG_IPTV_SOURCE: "94",
    SET_ACCESS_DATA: "95",
    GET_AGREEMENT_DATA: "96",
    GET_AGREEMENT_STATE: "97",
    SET_AGREEMENT_STATE: "98"
};
Common.API.Widget = function () {
    var a = this;
    this.sendReadyEvent = function () {
        curWidget.setPreference("ready", "true")
    };
    this.sendExitEvent = function () {
        curWidget.setPreference("exit", "true")
    };
    this.sendReturnEvent = function () {
        curWidget.setPreference("return", "true")
    };
    this.blockNavigation = function (b) {
        b.preventDefault()
    };
    this.putInnerHTML = function (b, c) {
        if (b != null) {
            while (b.firstChild) {
                if (b.deleteChild) {
                    b.deleteChild(b.firstChild)
                } else {
                    b.removeChild(b.firstChild)
                }
            }
            b.innerHTML = c
        }
    };
    this.getSearchWidgetListPath = function () {
        var b = Common.API.EVENT_ENUM.GET_SEARCH_WIDGET_LIST;
        var c = curWidget.id;
        var d = new WidgetEvent(b, c);
        sendWidgetEvent("", d, true);
        return "file://localhost/mtd_down/common/WidgetMgr/searchWidgetList.xml"
    };
    this.runSearchWidget = function (d, f) {
        var b = Common.API.EVENT_ENUM.RUN_SEARCH_WIDGET;
        var c = curWidget.id + "?" + d + "?" + f;
        var e = new WidgetEvent(b, c);
        sendWidgetEvent("", e, false)
    };
    this.getChannelWidgetListPath = function () {
        var b = Common.API.EVENT_ENUM.GET_CHANNEL_WIDGET_LIST;
        var c = curWidget.id;
        var d = new WidgetEvent(b, c);
        sendWidgetEvent("", d, true);
        return "file://localhost/mtd_down/common/WidgetMgr/channelWidgetList.xml"
    };
    this.addLog = function (b, f) {
        var c = Common.API.EVENT_ENUM.ADD_LOG;
        var d = b + "?" + btoa(f);
        var e = new WidgetEvent(c, d);
        sendWidgetEvent("", e, false)
    };
    this.setToken = function (e) {
        var b = Common.API.EVENT_ENUM.SET_TOKEN;
        var c = curWidget.id + "?" + e;
        var d = new WidgetEvent(b, c);
        sendWidgetEvent("", d, false)
    };
    this.sendDataToEventListener = function (c) {
        var b = Common.API.EVENT_ENUM.SEND_DATA_TO_EVENTLISTENER;
        var d = curWidget.id + "?" + c;
        var e = new WidgetEvent(b, d);
        sendWidgetEvent("", e, false)
    };
    this.getSNSWidgetList = function () {
        var b = Common.API.EVENT_ENUM.GET_SNS_LIST;
        var c = curWidget.id;
        var d = new WidgetEvent(b, c);
        sendWidgetEvent("", d, false)
    };
    this.getAllWidgetList = function () {
        var b = Common.API.EVENT_ENUM.GET_APP_ALL_LIST;
        var c = curWidget.id;
        var d = new WidgetEvent(b, c);
        sendWidgetEvent("", d, false)
    };
    this.getAppPath = function (b) {
        var c = Common.API.EVENT_ENUM.GET_APP_PATH;
        var d = curWidget.id + "?" + b;
        var e = new WidgetEvent(c, d);
        sendWidgetEvent("", e, false)
    };
    this.moveAppInfo = function (c) {
        var d = Common.API.EVENT_ENUM.MOVE_APP_INFO;
        var h = new Object();
        h.id = c.widgetid;
        h.category = c.category;
        var f = "false";
        var b = "null";
        if (c.moveto == "y") {
            f = "true"
        }
        if (c.contentid) {
            b = c.contentid
        }
        var e = curWidget.id + "?" + c.widgetid + "?" + c.category + "?" + f + "?" + b;
        var g = new WidgetEvent(d, e);
        sendWidgetEvent("", g, false)
    };
    this.setRemoteType = function (b) {
        var c = Common.API.EVENT_ENUM.SET_REMOTE_TYPE;
        var d = b;
        var e = new WidgetEvent(c, d);
        sendWidgetEvent("", e, false)
    };
    this.checkSapTicket = function () {
        var b = Common.API.EVENT_ENUM.PNS_CHECK_TICKET;
        var c = curWidget.id;
        var d = new WidgetEvent(b, c);
        sendWidgetEvent("", d, false)
    };
    this.requestSapTicket = function () {
        var b = Common.API.EVENT_ENUM.PNS_REQUEST_TICKET;
        var c = curWidget.id;
        var d = new WidgetEvent(b, c);
        sendWidgetEvent("", d, false)
    };
    this.runShopDemo = function (b, c) {
        var d = Common.API.EVENT_ENUM.RUN_SHOP_DEMO;
        var e = curWidget.id + "?" + b + "?" + c;
        var f = new WidgetEvent(d, e);
        sendWidgetEvent("", f, false)
    };
    this.setTVSource = function () {
        var b = Common.API.EVENT_ENUM.SET_ORIG_SOURCE;
        var c = curWidget.id;
        var d = new WidgetEvent(b, c);
        sendWidgetEvent("", d, false)
    };
    this.setIPTVSource = function () {
        var b = Common.API.EVENT_ENUM.SET_ORIG_IPTV_SOURCE;
        var c = curWidget.id;
        var d = new WidgetEvent(b, c);
        sendWidgetEvent("", d, false)
    };
    this.directLoginHotel = function () {
        var b = Common.API.EVENT_ENUM.DIRECT_LOGIN_HOTEL;
        var c = curWidget.id;
        var d = new WidgetEvent(b, c);
        sendWidgetEvent("", d, false)
    };
    this.runTVChannel = function () {
        var b = Common.API.EVENT_ENUM.RUN_TV_CHANNEL;
        var c = curWidget.id;
        var d = new WidgetEvent(b, c);
        sendWidgetEvent("", d, false)
    };
    this.getHubToken = function () {
        var b = Common.API.EVENT_ENUM.GET_TOKEN;
        var c = curWidget.id;
        var d = new WidgetEvent(b, c);
        sendWidgetEvent("", d, false)
    };
    this.getInstalledWidgetList = function () {
        var b = Common.API.EVENT_ENUM.GET_INSTALLED_APP_LIST;
        var c = curWidget.id;
        var d = new WidgetEvent(b, c);
        sendWidgetEvent("", d, false)
    };
    this.getDownloadList = function () {
        var b = Common.API.EVENT_ENUM.GET_DOWNLOAD_LIST;
        var c = curWidget.id;
        var d = new WidgetEvent(b, c);
        sendWidgetEvent("", d, false)
    };
    this.DownloadWidget = function (c) {
        var b = Common.API.EVENT_ENUM.DOWNLOAD_WIDGET;
        var d = new WidgetEvent(b, c);
        sendWidgetEvent("", d, false)
    };
    this.DeleteWidget = function (c) {
        var b = Common.API.EVENT_ENUM.DELETE_WIDGET;
        var d = new WidgetEvent(b, c);
        sendWidgetEvent("", d, false)
    };
    this.hideCurTicker = function () {
        var b = Common.API.EVENT_ENUM.HIDE_CURRENT_TICKER;
        var c = curWidget.id;
        var d = new WidgetEvent(b, c);
        sendWidgetEvent("", d, false)
    };
    this.getCategoryWidgetList = function () {
        var b = Common.API.EVENT_ENUM.GET_CATEGORY_APP_LIST;
        var c = curWidget.id;
        var d = new WidgetEvent(b, c);
        sendWidgetEvent("", d, false)
    };
    this.getGalleryInfo = function () {
        var b = Common.API.EVENT_ENUM.GET_GALLERY_INFO;
        var c = curWidget.id;
        var d = new WidgetEvent(b, c);
        sendWidgetEvent("", d, false)
    };
    this.setSignatureData = function (b, c) {
        var d = Common.API.EVENT_ENUM.SET_SIGNATURE_DATA;
        var e = curWidget.id + "?" + b + "?" + c;
        var f = new WidgetEvent(d, e);
        sendWidgetEvent("", f, false)
    };
    this.setAccessData = function (e, d) {
        var b = Common.API.EVENT_ENUM.SET_ACCESS_DATA;
        var c = curWidget.id + "?" + e + "?" + d;
        var f = new WidgetEvent(b, c);
        sendWidgetEvent("", f, false)
    };
    this.getAgreementData = function (b) {
        var c = Common.API.EVENT_ENUM.GET_AGREEMENT_DATA;
        var d = curWidget.id + "?" + b;
        var e = new WidgetEvent(c, d);
        sendWidgetEvent("", e, false)
    };
    this.getAgreementState = function (b) {
        var c = Common.API.EVENT_ENUM.GET_AGREEMENT_STATE;
        var d = curWidget.id + "?" + b;
        var e = new WidgetEvent(c, d);
        sendWidgetEvent("", e, false)
    };
    this.setAgreementState = function (b, d) {
        var c = Common.API.EVENT_ENUM.SET_AGREEMENT_STATE;
        var e = curWidget.id + "?" + b + "?" + d;
        var f = new WidgetEvent(c, e);
        sendWidgetEvent("", f, false)
    };
    this.inAppInit = function (c) {
        var b = Common.API.EVENT_ENUM.INAPP_INIT;
        var d = curWidget.id;
        curWidget.onWidgetEvent = c;
        var e = new WidgetEvent(b, d);
        sendWidgetEvent("", e, false)
    };
    this.getInAppItemList = function (d, h, l, k, j, f, i, b, c) {
        var g = Common.API.EVENT_ENUM.INAPP_ITEM_LIST;
        var e = curWidget.id + "?" + d + "?" + h + "?" + l + "?" + k + "?" + j + "?" + f + "?" + i + "?" + b;
        curWidget.onWidgetEvent = c;
        var m = new WidgetEvent(g, e);
        sendWidgetEvent("", m, false)
    };
    this.getSubscriptionList = function (b, d) {
        var c = Common.API.EVENT_ENUM.INAPP_SUBSCRIPTION_LIST;
        var e = curWidget.id + "?" + b;
        curWidget.onWidgetEvent = d;
        var f = new WidgetEvent(c, e);
        sendWidgetEvent("", f, false)
    };
    this.getPurchasedInAppItemList = function (c, d, b, f) {
        var e = Common.API.EVENT_ENUM.INAPP_PURCHASED_ITEM_LIST;
        var g = curWidget.id + "?" + c + "?" + d + "?" + b;
        curWidget.onWidgetEvent = f;
        var h = new WidgetEvent(e, g);
        sendWidgetEvent("", h, false)
    };
    this.getPurchasedSubscriptionList = function (c, d, b, f) {
        var e = Common.API.EVENT_ENUM.INAPP_PURCHASED_SUBSCRIPTION_LIST;
        var g = curWidget.id + "?" + c + "?" + d + "?" + b;
        curWidget.onWidgetEvent = f;
        var h = new WidgetEvent(e, g);
        sendWidgetEvent("", h, false)
    };
    this.terminateSubscription = function (c, b, e) {
        var d = Common.API.EVENT_ENUM.INAPP_SUBSCRIPTION_CANCELIATION;
        var f = curWidget.id + "?" + c + "?" + b;
        curWidget.onWidgetEvent = e;
        var g = new WidgetEvent(d, f);
        sendWidgetEvent("", g, false)
    };
    this.executeItem = function (c, b, e) {
        var d = Common.API.EVENT_ENUM.INAPP_DOWNLOAD;
        var f = curWidget.id + "?" + c + "?" + b;
        curWidget.onWidgetEvent = e;
        var g = new WidgetEvent(d, f);
        sendWidgetEvent("", g, false)
    };
    this.checkPassword = function (d, c) {
        var b = Common.API.EVENT_ENUM.INAPP_CHECK_PASSWORD;
        var e = curWidget.id + "?" + d;
        curWidget.onWidgetEvent = c;
        var f = new WidgetEvent(b, e);
        sendWidgetEvent("", f, false)
    };
    this.requestBuyItem = function (d, c, b, f) {
        var e = Common.API.EVENT_ENUM.INAPP_BUY_ITEM;
        var g = curWidget.id + "?" + d + "?" + c + "?" + b;
        curWidget.onWidgetEvent = f;
        var h = new WidgetEvent(e, g);
        sendWidgetEvent("", h, false)
    };
    this.getPaymentMethodList = function (c) {
        var b = Common.API.EVENT_ENUM.INAPP_PAYMENT_METHOD_LIST;
        var d = curWidget.id;
        curWidget.onWidgetEvent = c;
        var e = new WidgetEvent(b, d);
        sendWidgetEvent("", e, false)
    };
    this.requestRemainCash = function (c) {
        var b = Common.API.EVENT_ENUM.INAPP_REMAIN_CASH;
        var d = curWidget.id;
        curWidget.onWidgetEvent = c;
        var e = new WidgetEvent(b, d);
        sendWidgetEvent("", e, false)
    }
};
Node.appendChild = function (b) {
    if (!b) {
        return null
    }
    this.insertBefore(b, this.lastChild ? this.lastChild.nextSibling : this.lastChild);
    if (b.nodeType == 3 && this.nodeType == 1 && this.prototype != HTMLScriptElement && this.prototype != HTMLStyleElement) {
        var a = document.createElement("childNodes");
        this.insertBefore(a, this.firstChild);
        this.removeChild(a)
    }
    return b
};
