if (this.Common == null) {
    this.Common = new Object()
}
if (this.Common.API == null) {
    this.Common.API = new Object()
}
Common.API.EVENT_RETURN_WIDGETID = "100";
Common.API.EVENT_RETURN_TO_WIDGET = "101";
Common.API.EVENT_IDLE_ON = "102";
Common.API.EVENT_IDLE_OFF = "103";
Common.API.RUN_START_CHECK = "200";
Common.API.RUN_DISCONNECT_CEC = "201";
Common.API.RUN_UPDATE = "202";
Common.API.RUN_CHANGE_MSG = "203";
Common.API.RUN_NOT_ENOUGH_FLASH = "204";
Common.API.Plugin = function () {
    var a = this;
    var r = true;
    var q = null;
    var k = 0;
    var s = 1;
    var i = 0;
    var d = 0;
    var n = 18;
    var l = 41;
    var j = 43;
    var g = 3;
    var h = 4;
    var t = 5;
    var f = 6;
    var e = 13;
    var b = {
        TVMW: {nEnum: 0, Object: null, strVersion: null},
        VIDEO: {nEnum: 1, Object: null, strVersion: null},
        NNAVI: {nEnum: 2, Object: null, strVersion: null},
        APPCOMMON: {nEnum: 3, Object: null, strVersion: null}
    };
    var o = {
        PL_TVMW_KEY_GRP_ALL: 0,
        PL_TVMW_KEY_GRP_NUMBER: 1,
        PL_TVMW_KEY_GRP_NAVI: 4,
        PL_TVMW_KEY_GRP_COLOR: 5,
        PL_TVMW_KEY_GRP_PLAYBACK: 6,
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
        PL_TVMW_KEY_WHEEL_LEFT: 307,
        PL_TVMW_KEY_WHEEL_RIGHT: 308,
        PL_TVMW_KEY_PANNEL_ENTER: 309,
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
        PL_TVMW_KEY_PANNEL_SOURCE: 612,
        PL_TVMW_KEY_PANNEL_MENU: 613,
        PL_TVMW_KEY_TTX_MIX: 650,
        PL_TVMW_KEY_GUIDE: 651,
        PL_TVMW_KEY_SUBTITLE: 652,
        PL_TVMW_KEY_ASPECT: 653,
        PL_TVMW_KEY_DOLBY_SRR: 654,
        PL_TVMW_KEY_MTS: 655,
        PL_TVMW_KEY_REPEAT: 656,
        PL_TVMW_KEY_12: 1057,
        PL_TVMW_KEY_DISC_MENU: 1086,
        PL_TVMW_KEY_GREEN: 401,
        PL_TVMW_KEY_CYAN: 403,
        PL_TVMW_KEY_3D: 1219,
        PL_TVMW_KEY_PIP_ONOFF: 1032,
        PL_TVMW_KEY_AD: 1039,
        PL_TVMW_KEY_PMODE: 1040,
        PL_TVMW_KEY_SMODE: 1043,
        PL_TVMW_KEY_PIP_CHUP: 1050,
        PL_TVMW_KEY_PIP_CHDOWN: 1051,
        PL_TVMW_KEY_FF_: 1078,
        PL_TVMW_KEY_REWIND_: 1080,
        PL_TVMW_KEY_SUB_TITLE: 1089,
        PL_TVMW_KEY_SLEEP: 1097,
        PL_TVMW_KEY_D_AUDIO: 1236,
        PL_TVMW_KEY_D_VIEW_MODE: 1249,
        PL_TVMW_KEY_STEP: 1023,
        PL_TVMW_KEY_CALLER_ID: 1128,
        PL_TVMW_KEY_ZOOM1: 1083,
        PL_TVMW_KEY_ANTENA: 1054,
        PL_TVMW_KEY_HDMI: 1139,
        PL_APPCOMMON_KEY_DVR: 1114,
        PL_APPCOMMON_KEY_HOME: 1118,
        PL_APPCOMMON_KEY_PANDORA: 1124,
        PL_APPCOMMON_KEY_DIGITAL_LOCKER: 1137,
        PL_APPCOMMON_KEY_TV_SNS: 1251,
        PL_APPCOMMON_KEY_SEARCH: 1252,
        PL_APPCOMMON_KEY_PIP_SCAN: 1049,
        PL_APPCOMMON_KEY_DEVICE_CONNECT: 1052,
        PL_APPCOMMON_KEY_DOTCOM: 1253,
        PL_APPCOMMON_KEY_BT_NUMBER: 247,
        PL_APPCOMMON_KEY_BT_HOTKEY: 248,
        PL_APPCOMMON_KEY_EMANUAL: 1063,
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
        PL_APPCOMMON_KEY_MBR_SETUP: 2200,
        PL_APPCOMMON_KEY_MBR_SETUP_CONFIRM: 2204,
        PL_APPCOMMON_KEY_MBR_SETUP_FAILURE: 2192,
    };

    function c(u) {
        var v = false;
        switch (u) {
            case b.TVMW.nEnum:
                if (b.TVMW.Object) {
                    v = true
                }
                break;
            case b.VIDEO.nEnum:
                if (b.VIDEO.Object) {
                    v = true
                }
                break;
            case b.NNAVI.nEnum:
                if (b.NNAVI.Object) {
                    v = true
                }
                break;
            case b.APPCOMMON.nEnum:
                if (b.APPCOMMON.Object) {
                    v = true
                }
            default:
                break
        }
        if (!v) {
            v = p(u)
        }
        return v
    }

    function p(u) {
        var v = true;
        switch (u) {
            case b.TVMW.nEnum:
                b.TVMW.Object = document.getElementById("pluginObjectTVMW");
                if (!b.TVMW.Object) {
                    v = false
                } else {
                    b.TVMW.strVersion = b.TVMW.Object.GetPluginInfo(d)
                }
                break;
            case b.VIDEO.nEnum:
                b.VIDEO.Object = document.getElementById("pluginObjectVideo");
                if (!b.VIDEO.Object) {
                    v = false
                } else {
                    b.VIDEO.strVersion = b.VIDEO.Object.GetPluginInfo(d)
                }
                break;
            case b.NNAVI.nEnum:
                b.NNAVI.Object = document.getElementById("pluginObjectNNavi");
                if (!b.NNAVI.Object) {
                    v = false
                } else {
                    b.NNAVI.strVersion = b.NNAVI.Object.GetPluginInfo(d)
                }
                break;
            case b.APPCOMMON.nEnum:
                b.APPCOMMON.Object = document.getElementById("pluginObjectAppCommon");
                if (!b.APPCOMMON.Object) {
                    v = false
                } else {
                    b.APPCOMMON.strVersion = b.APPCOMMON.Object.GetPluginInfo(d)
                }
                break;
            default:
                break
        }
        if (!v) {
            alert("Common.API.PlugIn >> Plugin is not embeded yet. Check out index.html", 0)
        }
        return v
    }

    function m(v) {
        var u = 0;
        if (!q) {
            q = new Common.API.TVKeyValue()
        }
        switch (v) {
            case q.KEY_TOOLS:
                u = o.PL_TVMW_KEY_TOOLS;
                break;
            case q.KEY_MUTE:
                u = o.PL_TVMW_KEY_MUTE;
                break;
            case q.KEY_RETURN:
                u = o.PL_TVMW_KEY_RETURN;
                break;
            case q.KEY_UP:
                u = o.PL_TVMW_KEY_ARROW_UP;
                break;
            case q.KEY_DOWN:
                u = o.PL_TVMW_KEY_ARROW_DOWN;
                break;
            case q.KEY_LEFT:
                u = o.PL_TVMW_KEY_ARROW_LEFT;
                break;
            case q.KEY_RIGHT:
                u = o.PL_TVMW_KEY_ARROW_RIGHT;
                break;
            case q.KEY_WHEELDOWN:
                u = o.PL_TVMW_KEY_WHEEL_RIGHT;
                break;
            case q.KEY_WHEELUP:
                u = o.PL_TVMW_KEY_WHEEL_LEFT;
                break;
            case q.KEY_ENTER:
                u = o.PL_TVMW_KEY_ENTER;
                break;
            case q.KEY_INFO:
                u = o.PL_TVMW_KEY_INFO;
                break;
            case q.KEY_EXIT:
                u = o.PL_TVMW_KEY_EXIT;
                break;
            case q.KEY_RED:
                u = o.PL_TVMW_KEY_RED;
                break;
            case q.KEY_GREEN:
                u = o.PL_TVMW_KEY_GREEN;
                break;
            case q.KEY_YELLOW:
                u = o.PL_TVMW_KEY_YELLOW;
                break;
            case q.KEY_BLUE:
                u = o.PL_TVMW_KEY_CYAN;
                break;
            case q.KEY_INFOLINK:
                u = o.PL_TVMW_KEY_INFOLINK;
                break;
            case q.KEY_RW:
                u = o.PL_TVMW_KEY_REWARD;
                break;
            case q.KEY_PAUSE:
                u = o.PL_TVMW_KEY_PAUSE;
                break;
            case q.KEY_FF:
                u = o.PL_TVMW_KEY_FOWARD;
                break;
            case q.KEY_PLAY:
                u = o.PL_TVMW_KEY_PLAY;
                break;
            case q.KEY_STOP:
                u = o.PL_TVMW_KEY_STOP;
                break;
            case q.KEY_1:
                u = o.PL_TVMW_KEY_1;
                break;
            case q.KEY_2:
                u = o.PL_TVMW_KEY_2;
                break;
            case q.KEY_3:
                u = o.PL_TVMW_KEY_3;
                break;
            case q.KEY_4:
                u = o.PL_TVMW_KEY_4;
                break;
            case q.KEY_5:
                u = o.PL_TVMW_KEY_5;
                break;
            case q.KEY_6:
                u = o.PL_TVMW_KEY_6;
                break;
            case q.KEY_7:
                u = o.PL_TVMW_KEY_7;
                break;
            case q.KEY_8:
                u = o.PL_TVMW_KEY_8;
                break;
            case q.KEY_9:
                u = o.PL_TVMW_KEY_9;
                break;
            case q.KEY_0:
                u = o.PL_TVMW_KEY_0;
                break;
            case q.KEY_EMPTY:
                u = o.PL_TVMW_KEY_HYPHEN;
                break;
            case q.KEY_PRECH:
                u = o.PL_TVMW_KEY_CH_PREV;
                break;
            case q.KEY_SOURCE:
                u = o.PL_TVMW_KEY_SOURCE;
                break;
            case q.KEY_CHLIST:
                u = o.PL_TVMW_KEY_CH_LIST;
                break;
            case q.KEY_MENU:
                u = o.PL_TVMW_KEY_MENU;
                break;
            case q.KEY_WLINK:
                u = o.PL_TVMW_KEY_WISELINK;
                break;
            case q.KEY_CC:
                u = 1;
                break;
            case q.KEY_CONTENT:
                u = o.PL_TVMW_KEY_CONTENTS;
                break;
            case q.KEY_FAVCH:
                u = o.PL_TVMW_KEY_CH_FAV;
                break;
            case q.KEY_REC:
                u = o.PL_TVMW_KEY_REC;
                break;
            case q.KEY_EMODE:
                u = o.PL_TVMW_KEY_EMODE;
                break;
            case q.KEY_DMA:
                u = o.PL_TVMW_KEY_DMA;
                break;
            case q.KEY_PANEL_CH_UP:
                u = o.PL_TVMW_KEY_CH_PANNEL_UP;
                break;
            case q.KEY_PANEL_CH_DOWN:
                u = o.PL_TVMW_KEY_CH_PANNEL_DOWN;
                break;
            case q.KEY_PANEL_VOL_UP:
                u = o.PL_TVMW_KEY_VOL_PANNEL_UP;
                break;
            case q.KEY_PANEL_VOL_DOWN:
                u = o.PL_TVMW_KEY_VOL_PANNEL_DOWN;
                break;
            case q.KEY_PANEL_ENTER:
                u = o.PL_TVMW_KEY_PANNEL_ENTER;
                break;
            case q.KEY_PANEL_SOURCE:
                u = o.PL_TVMW_KEY_PANNEL_SOURCE;
                break;
            case q.KEY_PANEL_MENU:
                u = o.PL_TVMW_KEY_PANNEL_MENU;
                break;
            case q.KEY_PANEL_POWER:
                u = o.PL_TVMW_KEY_PANNEL_POWER;
                break;
            case q.KEY_TTX_MIX:
                u = o.PL_TVMW_KEY_TTX_MIX;
                break;
            case q.KEY_GUIDE:
                u = o.PL_TVMW_KEY_GUIDE;
                break;
            case q.KEY_SUBTITLE:
                u = o.PL_TVMW_KEY_SUBTITLE;
                break;
            case q.KEY_SUB_TITLE:
                u = o.PL_TVMW_KEY_SUB_TITLE;
                break;
            case q.KEY_ASPECT:
                u = o.PL_TVMW_KEY_ASPECT;
                break;
            case q.KEY_DOLBY_SRR:
                u = o.PL_TVMW_KEY_DOLBY_SRR;
                break;
            case q.KEY_MTS:
                u = o.PL_TVMW_KEY_MTS;
                break;
            case q.KEY_POWER:
                u = o.PL_TVMW_KEY_POWER;
                break;
            case q.KEY_VOL_UP:
                u = o.PL_TVMW_KEY_VOL_UP;
                break;
            case q.KEY_VOL_DOWN:
                u = o.PL_TVMW_KEY_VOL_DOWN;
                break;
            case q.KEY_12:
                u = o.PL_TVMW_KEY_12;
                break;
            case q.KEY_DISC_MENU:
                u = o.PL_TVMW_KEY_DISC_MENU;
                break;
            case q.KEY_TTX_MIX:
                u = o.PL_TVMW_KEY_TTX_MIX;
                break;
            case q.KEY_3D:
                u = o.PL_TVMW_KEY_3D;
                break;
            case q.KEY_PIP_ONOFF:
                u = o.PL_TVMW_KEY_PIP_ONOFF;
                break;
            case q.KEY_AD:
                u = o.PL_TVMW_KEY_AD;
                break;
            case q.KEY_PMODE:
                u = o.PL_TVMW_KEY_PMODE;
                break;
            case q.KEY_SMODE:
                u = o.PL_TVMW_KEY_SMODE;
                break;
            case q.KEY_PIP_CHUP:
                u = o.PL_TVMW_KEY_PIP_CHUP;
                break;
            case q.KEY_PIP_CHDOWN:
                u = o.PL_TVMW_KEY_PIP_CHDOWN;
                break;
            case q.KEY_D_AUDIO:
                u = o.PL_TVMW_KEY_D_AUDIO;
                break;
            case q.KEY_D_VIEW_MODE:
                u = o.PL_TVMW_KEY_D_VIEW_MODE;
                break;
            case q.KEY_FF_:
                u = o.PL_TVMW_KEY_FF_;
                break;
            case q.KEY_REWIND_:
                u = o.PL_TVMW_KEY_REWIND_;
                break;
            case q.KEY_SLEEP:
                u = o.PL_TVMW_KEY_SLEEP;
                break;
            case q.KEY_STEP:
                u = o.PL_TVMW_KEY_STEP;
                break;
            case q.KEY_CALLER_ID:
                u = o.PL_TVMW_KEY_CALLER_ID;
                break;
            case q.KEY_ZOOM1:
                u = o.PL_TVMW_KEY_ZOOM1;
                break;
            case q.KEY_DVR:
                u = o.PL_APPCOMMON_KEY_DVR;
                break;
            case q.KEY_HDMI:
                u = o.PL_TVMW_KEY_HDMI;
                break;
            case q.KEY_CH_UP:
                u = o.PL_TVMW_KEY_CH_UP;
                break;
            case q.KEY_CH_DOWN:
                u = o.PL_TVMW_KEY_CH_DOWN;
                break;
            case q.KEY_HOME:
                u = o.PL_APPCOMMON_KEY_HOME;
                break;
            case q.KEY_TV_SNS:
                u = o.PL_APPCOMMON_KEY_TV_SNS;
                break;
            case q.KEY_SEARCH:
                u = o.PL_APPCOMMON_KEY_SEARCH;
                break;
            case q.KEY_VTUNER:
                u = o.PL_APPCOMMON_KEY_PIP_SCAN;
                break;
            case q.KEY_NETFLIX:
                u = o.PL_APPCOMMON_KEY_DEVICE_CONNECT;
                break;
            case q.KEY_DOTCOM:
                u = o.PL_APPCOMMON_KEY_DOTCOM;
                break;
            case q.KEY_BT_NUMBER:
                u = o.PL_APPCOMMON_KEY_BT_NUMBER;
                break;
            case q.KEY_BT_HOTKEY:
                u = o.PL_APPCOMMON_KEY_BT_HOTKEY;
                break;
            case q.KEY_PANDORA:
                u = o.PL_APPCOMMON_KEY_PANDORA;
                break;
            case q.KEY_DIGITAL_LOCKER:
                u = o.PL_APPCOMMON_KEY_DIGITAL_LOCKER;
                break;
            default:
                u = -1;
                break
        }
        return u
    }

    this.setOnWatchDog = function () {
        if (!c(b.TVMW.nEnum)) {
            return
        }
        alert("Common.API.PlugIn >> setOnWatchDog");
        if (!r) {
            b.TVMW.Object.SetWatchDog(i)
        }
        r = true
    };
    this.setOffWatchDog = function () {
        if (!c(b.TVMW.nEnum)) {
            return
        }
        alert("Common.API.PlugIn >> setOffWatchDog");
        if (r) {
            b.TVMW.Object.SetWatchDog(s)
        }
        r = false
    };
    this.registKey = function (u) {
        var v = m(u);
        if (v != -1) {
            switch (v) {
                case o.PL_APPCOMMON_KEY_DVR:
                case o.PL_APPCOMMON_KEY_HOME:
                case o.PL_APPCOMMON_KEY_TV_SNS:
                case o.PL_APPCOMMON_KEY_SEARCH:
                case o.PL_APPCOMMON_KEY_PIP_SCAN:
                case o.PL_APPCOMMON_KEY_DEVICE_CONNECT:
                case o.PL_APPCOMMON_KEY_DOTCOM:
                    if (!c(b.APPCOMMON.nEnum)) {
                        return
                    }
                    b.APPCOMMON.Object.RegisterKey(v);
                    break;
                default:
                    if (!c(b.TVMW.nEnum)) {
                        return
                    }
                    b.TVMW.Object.RegisterKey(v);
                    break
            }
            alert("Common.API.PlugIn[REGIST KEY] >> Regist Key : " + v)
        } else {
            alert("Common.API.PlugIn[REGIST KEY] >> Invalid Key code : " + v)
        }
    };
    this.unregistKey = function (u) {
        var v = m(u);
        if (v != -1) {
            switch (v) {
                case o.PL_APPCOMMON_KEY_DVR:
                case o.PL_APPCOMMON_KEY_HOME:
                case o.PL_APPCOMMON_KEY_TV_SNS:
                case o.PL_APPCOMMON_KEY_SEARCH:
                case o.PL_APPCOMMON_KEY_PIP_SCAN:
                case o.PL_APPCOMMON_KEY_DEVICE_CONNECT:
                case o.PL_APPCOMMON_KEY_DOTCOM:
                    if (!c(b.APPCOMMON.nEnum)) {
                        return
                    }
                    b.APPCOMMON.Object.UnregisterKey(v);
                    break;
                default:
                    if (!c(b.TVMW.nEnum)) {
                        return
                    }
                    b.TVMW.Object.UnregisterKey(v);
                    break
            }
            alert("Common.API.PlugIn[UNREGIST KEY] >> Unregister Key : " + v)
        } else {
            alert("Common.API.PlugIn[UNREGIST KEY] >> Invalid Key code : " + v)
        }
    };
    this.registIMEKey = function () {
        if (!c(b.TVMW.nEnum)) {
            return
        }
        b.TVMW.Object.RegisterKeyGroup(o.PL_TVMW_KEY_GRP_NUMBER);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_HYPHEN);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_CH_PREV);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_12);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_DISC_MENU);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_TTX_MIX);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_GREEN);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_CYAN);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_TOOLS);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_D_AUDIO);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_D_VIEW_MODE);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_SUBTITLE);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_SUB_TITLE);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_REPEAT);
        alert("Common.API.PlugIn[REGIST IME KEY] >> Register IME Key")
    };
    this.unregistIMEKey = function () {
        if (!c(b.TVMW.nEnum)) {
            return
        }
        b.TVMW.Object.UnregisterKeyGroup(o.PL_TVMW_KEY_GRP_NUMBER);
        b.TVMW.Object.UnregisterKey(o.PL_TVMW_KEY_HYPHEN);
        b.TVMW.Object.UnregisterKey(o.PL_TVMW_KEY_CH_PREV);
        b.TVMW.Object.UnregisterKey(o.PL_TVMW_KEY_12);
        b.TVMW.Object.UnregisterKey(o.PL_TVMW_KEY_DISC_MENU);
        b.TVMW.Object.UnregisterKey(o.PL_TVMW_KEY_TTX_MIX);
        alert("Common.API.PlugIn[UNREGIST IME KEY] >> Unregister IME Key")
    };
    this.registAllKey = function () {
        if (!c(b.TVMW.nEnum)) {
            return
        }
        b.TVMW.Object.RegisterKeyGroup(o.PL_TVMW_KEY_GRP_ALL);
        alert("Common.API.PlugIn[REGIST ALL KEY] >> Register ALL Key")
    };
    this.unregistAllKey = function () {
        if (!c(b.TVMW.nEnum)) {
            return
        }
        b.TVMW.Object.UnregisterKeyGroup(o.PL_TVMW_KEY_GRP_ALL);
        alert("Common.API.PlugIn[UNREGIST ALL KEY] >> Unregister ALL Key")
    };
    this.registFullWidgetKey = function () {
        if (!c(b.TVMW.nEnum)) {
            return
        }
        a.registManagerWidgetKey();
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_VOL_UP);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_VOL_DOWN);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_MUTE);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_TOOLS);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_INFO);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_EMODE);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_DMA);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_CH_PREV);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_CH_FAV);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_CH_LIST);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_DATA);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_DMA);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_TTX_MIX);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_GUIDE);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_ASPECT);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_DOLBY_SRR);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_MTS);
        a.registIMEKey();
        alert("Common.API.PlugIn[REGIST FULL WIDGET KEY] >> Register FULL WIDGET Key")
    };
    this.registPartWidgetKey = function () {
        if (!c(b.TVMW.nEnum)) {
            return
        }
        a.registManagerWidgetKey();
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_ENTER);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_RETURN);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_INFOLINK);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_CONTENTS);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_WISELINK);
        b.TVMW.Object.UnregisterKey(o.PL_TVMW_KEY_CH_PANNEL_UP);
        b.TVMW.Object.UnregisterKey(o.PL_TVMW_KEY_CH_PANNEL_DOWN);
        b.TVMW.Object.UnregisterKey(o.PL_TVMW_KEY_VOL_PANNEL_UP);
        b.TVMW.Object.UnregisterKey(o.PL_TVMW_KEY_VOL_PANNEL_DOWN);
        b.TVMW.Object.UnregisterKey(o.PL_TVMW_KEY_PANNEL_SOURCE);
        b.TVMW.Object.UnregisterKey(o.PL_TVMW_KEY_PANNEL_ENTER);
        alert("Common.API.PlugIn[REGIST PART WIDGET KEY] >> Register PART WIDGET Key")
    };
    this.registManagerWidgetKey = function () {
        b.TVMW.Object.UnregisterKeyGroup(o.PL_TVMW_KEY_GRP_ALL);
        b.TVMW.Object.RegisterKeyGroup(o.PL_TVMW_KEY_GRP_PLAYBACK);
        b.TVMW.Object.RegisterKeyGroup(o.PL_TVMW_KEY_GRP_NAVI);
        b.TVMW.Object.RegisterKeyGroup(o.PL_TVMW_KEY_GRP_COLOR);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_ENTER);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_RETURN);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_INFOLINK);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_CONTENTS);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_WISELINK);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_EXIT);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_WHEEL_LEFT);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_WHEEL_RIGHT);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_CH_PANNEL_UP);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_CH_PANNEL_DOWN);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_VOL_PANNEL_UP);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_VOL_PANNEL_DOWN);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_PANNEL_SOURCE);
        b.TVMW.Object.RegisterKey(o.PL_TVMW_KEY_PANNEL_ENTER)
    };
    this.setOnOSDState = function (z, y, x, u) {
        if (!c(b.VIDEO.nEnum)) {
            return
        }
        var v = "$" + z + y + x + u + "$";
        if (this.SetOSDStateHandler.check(v, s)) {
            var w = this.SetOSDStateHandler.getHandler(v);
            alert("Common.API.PlugIn >> setOnOSDState - nHandler : " + w + ", SetOSDState : " + z + ", " + y + ", " + x + ", " + u);
            b.VIDEO.Object.SetOSDState(w, z, y, x, u, s)
        }
    };
    this.setOffOSDState = function (z, y, x, u) {
        if (!c(b.VIDEO.nEnum)) {
            return
        }
        var v = "$" + z + y + x + u + "$";
        if (this.SetOSDStateHandler.check(v, i)) {
            var w = this.SetOSDStateHandler.getHandler(v);
            alert("Common.API.PlugIn >> setOffOSDState - nHandler : " + w + ", SetOSDState : " + z + ", " + y + ", " + x + ", " + u);
            b.VIDEO.Object.SetOSDState(w, z, y, x, u, i);
            this.SetOSDStateHandler.removeHandler(v)
        }
    };
    this.SetOSDStateHandler = {
        handlerPool: new Array(1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20),
        pool: new Object(),
        getHandler: function (v) {
            var u = this.pool[v];
            if (u != null) {
                return u
            } else {
                return 0
            }
        },
        removeHandler: function (u) {
            var v = this.pool[u];
            this.handlerPool.push(v);
            delete this.pool[u]
        },
        check: function (u, w) {
            var x = null;
            switch (w) {
                case s:
                    var v = this.handlerPool.pop();
                    if (this.pool[u] == null) {
                        this.pool[u] = (v != null) ? v : 0;
                        x = true
                    } else {
                        x = false
                    }
                    break;
                case i:
                    if (this.pool[u] == null) {
                        x = false
                    } else {
                        x = true
                    }
                    break;
                default:
                    alert("SetOSDStateHandler > option is invalid");
                    x = false;
                    break
            }
            return x
        }
    };
    this.ShowTools = function (v) {
        if (!c(b.NNAVI.nEnum)) {
            return
        }
        var u = Common.API.EVENT_RETURN_WIDGETID;
        var w = curWidget.id;
        var x = new WidgetEvent(u, w);
        sendWidgetEvent("", x, false);
        if (b.NNAVI.strVersion > "NNAVI-0014") {
            b.NNAVI.Object.ActivateWithData(n, v, -1)
        } else {
            b.NNAVI.Object.ActivateWithData(n, v)
        }
    };
    this.HideTools = function () {
        alert("Common.API.Plugin.HideTools() id: " + curWidget.id);
        if (!c(b.NNAVI.nEnum)) {
            return
        }
        b.NNAVI.Object.SendEventToDevice(f, 0)
    };
    this.showPrinterManager = function (u) {
        alert("Common.API.Plugin.showPrinterManager() url: " + u);
        if (!c(b.NNAVI.nEnum)) {
            return
        }
        if (b.NNAVI.strVersion > "NNAVI-0014") {
            b.NNAVI.Object.ActivateWithData(l, u, -1)
        } else {
            b.NNAVI.Object.ActivateWithData(l, u)
        }
    };
    this.SetBannerState = function (u) {
        if (!c(b.NNAVI.nEnum)) {
            return
        }
        b.NNAVI.Object.SetBannerState(u)
    };
    this.setOnIdleEvent = function () {
        alert("Common.API.Plugin.setOnIdleEvent()");
        var u = Common.API.EVENT_IDLE_ON;
        var v = curWidget.id;
        var w = new WidgetEvent(u, v);
        sendWidgetEvent("", w, false)
    };
    this.setOffIdleEvent = function () {
        alert("Common.API.Plugin.setOffIdleEvent() id: " + curWidget.id);
        var u = Common.API.EVENT_IDLE_OFF;
        var v = curWidget.id;
        var w = new WidgetEvent(u, v);
        sendWidgetEvent("", w, false)
    };
    this.setOnScreenSaver = function (w) {
        alert("Common.API.Plugin.setOnScreenSaver() id: " + curWidget.id);
        alert("pSecond: " + w);
        if (!c(b.NNAVI.nEnum)) {
            return
        }
        if (!c(b.TVMW.nEnum)) {
            return
        }
        if (w == null || w == undefined) {
            var u = b.TVMW.Object.GetProfile(e);
            var v = 0;
            alert("PL_PRFID_AUTO_PROTECTION_TIME: " + u);
            switch (parseInt(u)) {
                case 0:
                    v = 10 * 60;
                    break;
                case 1:
                    v = 20 * 60;
                    break;
                case 2:
                    v = 40 * 60;
                    break;
                case 3:
                    v = 1 * 60 * 60;
                    break;
                case 4:
                    v = 2 * 60 * 60;
                    break;
                case 5:
                    v = 4 * 60 * 60;
                    break;
                case 6:
                    v = 8 * 60 * 60;
                    break;
                case 7:
                    v = 10 * 60 * 60;
                    break;
                case 8:
                    alert("PROFILE_DURATION_ALWAYS is set. do nothing..");
                    return;
                default:
                    v = 1 * 60 * 60;
                    break
            }
            w = v
        }
        alert("screen saver time(sec) : " + w);
        b.NNAVI.Object.SendEventToDevice(g, w)
    };
    this.setOffScreenSaver = function () {
        alert("Common.API.Plugin.setOffScreenSaver() id: " + curWidget.id);
        if (!c(b.NNAVI.nEnum)) {
            return
        }
        b.NNAVI.Object.SendEventToDevice(h, 0)
    };
    this.isViewerKey = function (u) {
        alert("Common.API.Plugin.isViewerKey() id: " + curWidget.id);
        if (!c(b.APPCOMMON.nEnum)) {
            return
        }
        var v = false;
        if (b.APPCOMMON.strVersion > "APPCOMMON-0009" && 1 == b.APPCOMMON.Object.CheckReservedKey(u)) {
            b.APPCOMMON.Object.SendKeyToTVViewer(u);
            v = true
        }
        return v
    };
    this.setOnFullScreen = function () {
        alert("Common.API.Plugin.setOnFullScreen()");
        if (!c(b.TVMW.nEnum)) {
            return
        }
        var u = new FileSystem();
        var y = "WidgetMgr/Widget2Widget.txt";
        if (u.isValidCommonPath(y) != 0) {
            alert("File is existed.. skip setOnFullScreen()");
            var w = u.openCommonFile(y, "r");
            if (w) {
                var v = w.readAll();
                alert("contents: " + v);
                k = parseInt(v);
                alert("prevSource : " + k);
                u.closeFile(w)
            }
            return
        }
        var x = b.TVMW.Object.GetSource();
        k = x;
        alert("prevSource : " + k);
        if (j == x) {
            alert("[Ignore] need not change source");
            return
        } else {
            b.TVMW.Object.SetMediaSource()
        }
        alert("Common.API.Plugin.setOnFullScreen() End")
    };
    this.setOffFullScreen = function () {
        alert("Common.API.Plugin.setOffFullScreen() id: " + curWidget.id);
        if (!c(b.TVMW.nEnum)) {
            return
        }
        var u = new FileSystem();
        var w = "WidgetMgr/Widget2Widget.txt";
        if (u.isValidCommonPath(w) != 0) {
            alert("File is existed.. skip setOffFullScreen()");
            return
        }
        alert("prevSource : " + k);
        var v = b.TVMW.Object.GetSource();
        alert("current Source : " + v);
        if (v == k) {
            alert("[Ignore] need not change source")
        } else {
            b.TVMW.Object.SetSource(k)
        }
        alert("Common.API.Plugin.setOffFullScreen() End")
    };
    this.setCaptionState = function (u) {
        alert("Common.API.Plugin.setCaptionState()  state: " + u);
        if (!c(b.NNAVI.nEnum)) {
            return
        }
        if (typeof b.NNAVI.Object.SetCaptionState == "function") {
            b.NNAVI.Object.SetCaptionState(u)
        } else {
            alert("[Ignore] SetCaptionState is not a function.")
        }
    }
};