(function(){

    document.getElementById('rate_backward').addEventListener('click', function () {
        videoPlayer.setPlaybackSpeed(-2);
    });
    
    document.getElementById('step_backward').addEventListener('click', function () {
        videoPlayer.stepBackward(10000);
    });
    
    document.getElementById('stop').addEventListener('click', function () {
        videoPlayer.stop();
    });

    document.getElementById('pause').addEventListener('click', function () {
        videoPlayer.pause();
    });

    document.getElementById('play').addEventListener('click', function () {
        videoPlayer.play();
    });

    document.getElementById('step_forward').addEventListener('click', function () {
        videoPlayer.stepForward(10000);
    });

    document.getElementById('rate_forward').addEventListener('click', function () {
        videoPlayer.setPlaybackSpeed(2);
    });

    document.getElementById('rate_reset').addEventListener('click', function () {
        videoPlayer.setPlaybackSpeed(1);
    });

    document.getElementById('step_to').addEventListener('click', function () {
        videoPlayer.setCurrentTime(65000);
    });

    document.getElementById('fullscreen_exit').addEventListener('click', function () {
        videoPlayer.exitFullscreen();
    });

    document.getElementById('fullscreen').addEventListener('click', function () {
        videoPlayer.requestFullscreen();
    });

    document.getElementById('getinfo').addEventListener('click', function () {
        videoPlayer.getInfo();
    });

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

        var playerType = 'html5';

        var playerVideo = new VideoPlayer(playerType, {
            url: 'http://msk1cdp.look1.ru/trailer/e9350309-194b-4e0d-b967-ccd4647baeb4.mp4',
            containerId: 'playerContainer',
            esn: getESN(),
            duid: getDUID(),
            drm: {
                url: 'https://drm.look1.ru/lic',
                heartbeatUrl: 'https://drm.look1.ru/hb',
                portal: 'moreruswv'
            },
            width: 470,
            height: 280
        });

        var duration = 0;

        playerVideo.on('timeupdate', function (seconds) {
            document.getElementById('currentTime').innerText = seconds;
            document.getElementById('progressbar').style.width = (seconds / (duration / 100)) + '%';
        });

        playerVideo.on('info', function (info) {
            console.log('info', info);
            document.getElementById('duration').innerText = info.duration;
        });

        playerVideo.on('statechange', function (stateName) {
            console.log('stateName', stateName);
        });

        playerVideo.on('ended', function () {
            console.log('ended');
        });

        //playerVideo.on('info', function (info) {
        //    log('duration', info.duration);
        //    info.duration = Math.floor( info.duration );
        //    duration = info.duration;
        //    document.getElementById('duration').innerText = info.duration;
        //});

        /*

        DRM video
        var token = 'ip:89.17.48.13,streamid:54a61799-122b-4101-97f3-a3f962aa9e21,' + getDUID() + ',optdata:e00b4441-f08e-426e-9146-38445e14bc50;54a61799-122b-4101-97f3-a3f962aa9e21;2db6c2ed-7b1e-4927-ad65-0eb36c48f6c5;1428918120964;USE7oEv6ASvy11rKhkdt38YO0LJZI8nW3rCI95Vl6wA=';
        var videoOptions = token.split(',').map(function (item) {
            return item.split(':')[1];
        });

        playerVideo.setVideo(url, {
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
                throw new Error('GetESN is not supported. Please reboot the device and call to Samsung service center if the issue happens again.');
            }
            if ((deviceId+'').substr(0, Math.min(deviceId.length, 2)) != 'SS') {
                throw new Error('deviceId is not valid. Please reboot the device and call to Samsung service center if the issue happens again .');
            }
        }
        catch (e) {
            log("Error: " + e.stack);
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