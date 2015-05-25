(function(){

    var widgetAPI;
    var playerVideo = null;
    var x, y;

    function includePlatformLibrary() {
        log('include');
        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', '$MANAGER_WIDGET/Common/API/Widget.js');
        document.head.appendChild( script );
        log('include end');

        script.onload = function () {
            log('lib load success', this.src);
        };

        script.onerror = function () {
            console.error('lib load error', this.src);
        };
    }

    includePlatformLibrary();

    window.onload = function () {
        log('window.onload');
        start();
    };

    //window.onerror = function (error) {
    //    log('window.onerror', error);
    //};

    function samsungStart(){
        if(typeof Common !== 'undefined'){
            widgetAPI = new Common.API.Widget();
            widgetAPI.sendReadyEvent();
        } else {
            log('not samsung');
        }
    }

    function start() {
        samsungStart();

        log('app start');
        log('location', location.href);

        var playerVideo = new VideoPlayer('samsung', {
            url: 'http://cdp.look1.ru/trailer/e9350309-194b-4e0d-b967-ccd4647baeb4.mp4',
            containerId: 'playerContainer',
            drm: {
                url: 'https://drm.look1.ru/lic',
                heartbeatUrl: 'https://drm.look1.ru/hb',
                portal: 'moreruswv'
            },
            width: 470,
            height: 280
        });

        //var xhttp=new XMLHttpRequest();
        //xhttp.open("GET","$MANAGER_WIDGET/Common/webapi/1.0/webapis.js",false);
        //xhttp.send("");
        //var xmlDoc = xhttp.responseText;
        //log(xmlDoc);

        var duration = 0;

        playerVideo.on('currentTime', function (seconds) {

            document.getElementById('currentTime').innerText = playerVideo.getCurrentTime();
            document.getElementById('progressbar').style.width = (seconds / (duration / 100)) + '%';

        });


        playerVideo.on('info', function (info) {

            log('duration', info.duration);
            info.duration = Math.floor( info.duration / 1000 );
            duration = info.duration;
            document.getElementById('duration').innerText = info.duration;

        });

        /*

        DRM video
        var token = 'ip:89.17.48.13,streamid:54a61799-122b-4101-97f3-a3f962aa9e21,' + getDUID() + ',optdata:e00b4441-f08e-426e-9146-38445e14bc50;54a61799-122b-4101-97f3-a3f962aa9e21;2db6c2ed-7b1e-4927-ad65-0eb36c48f6c5;1428918120964;USE7oEv6ASvy11rKhkdt38YO0LJZI8nW3rCI95Vl6wA=';
        var videoOptions = token.split(',').map(function (item) {
            return item.split(':')[1];
        });

        playerVideo.setVideo({
            esn: getESN(),
            duid: getDUID(),
            streamId: videoOptions[1],
            ip: videoOptions[0],
            userData: encodeURIComponent(videoOptions[3])
        });

        */

        window.videoPlayer = playerVideo;
    }


    function dumpObject(object, name){

        if(typeof name === 'undefined'){
            name = 'unnnamed';
        }

        for(var param in object){
            log( name,  '[', typeof object[param], ']', param, object[param] );
            if(typeof object[param] === 'object' ){
                dumpObject(object[param], param);
            }
        }
    }


    function getESN() {
        var deviceId = null;
        var externalPlugin = document.getElementById('externalPlugin');

        try {
            var deviceId = externalPlugin.GetESN('WIDEVINE');
            if ( !deviceId ) {
                throw new Exception('GetESN is not supported. Please reboot the device and call to Samsung service center if the issue happens again.');
            }
            if ((deviceId+'').substr(0, Math.min(deviceId.length, 2)) != 'SS') {
                throw new Exception('deviceId is not valid. Please reboot the device and call to Samsung service center if the issue happens again .');
            }
        }
        catch (e) {
            log("EXCEPTION(getESN): " + e);
            return null;
        }
        return deviceId;
    }

    function getDUID() {
        document.getElementById('pluginNetwork');
        var pluginNetwork = document.getElementById('pluginNetwork');
        var pluginNnavi = document.getElementById('pluginNnavi');
        var duid;
        if(typeof pluginNetwork.GetMac !== 'undefined'){
            var mac = document.getElementById('pluginNetwork').GetMAC();
            duid = document.getElementById('pluginNnavi').GetDUID( mac );
        }

        return duid;
    }
})();