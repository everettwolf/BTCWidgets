(function () {
	var pathname = window.location.pathname;
	if(pathname === '/beyondcomics/' || pathname === '/895' || 1===1) {
		return;
	}
    var BASE_HREF = 'http://' + document.getElementById("BTCHomeWidget").getAttribute("data-env");
    var WIDGET_SIZE = document.getElementById("BTCHomeWidget").getAttribute("data-size");
    var OPEN_VAL = document.getElementById("BTCHomeWidget").getAttribute("data-open");

    console.log("BTC Log: Environment: " + BASE_HREF);
    console.log("BTC Log: Widget size: " + WIDGET_SIZE);
    console.log("BTC Log: Widget opens: " + OPEN_VAL);
    //Load Scripts
    var script;
    // Load jQuery
    script = document.createElement("SCRIPT");
    script.src = 'http://code.jquery.com/jquery-1.10.2.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);

    //load CryptoJS
    script = document.createElement("SCRIPT");
    script.src = BASE_HREF + '/js/CryptoJS.js';
    script.type = 'application/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);
    
    //load JYPlayer
    script = document.createElement("SCRIPT");
    script.src = 'http://player.ooyala.com/v3/8429b6a60f6e42c493657dd629122e66?namespace=JYPlayer';
    script.type = 'application/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);

    // Poll for jQuery and CryptoJS to come into existance
    var checkReady = function (callback) {
        if (window.CryptoJS && window.JYPlayer && window.jQuery && window.jQuery.fn.jquery === '1.10.2') {
            callback((window.CryptoJS && window.JYPlayer && window.jQuery && window.jQuery.fn.jquery === '1.10.2'));
        } else {
            window.setTimeout(function () {
                checkReady(callback);
            }, 100);
        }
    };

    // Start polling...
    checkReady(function ($) {
        var $j = jQuery.noConflict();
        console.log("BTC Log: jQuery loaded.  Running version " + $j.fn.jquery);
        var $d = document;

        //Analytics
        (function (i, s, o, g, r, a, m) {
            i.GoogleAnalyticsObject = r;
            i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments);
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m);
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-50041591-1', 'auto');
        ga('send', 'pageview');
        ga('set', '&uid', "BTCHomeWidget");

        //Constants
        var MEDIA_BASE = 'http://api.ooyala.com';
        var MEDIA_PATH_BASE = '/v2/';

        //Globals for media calls
        var m_path;
        var m_params;

        //Credentials for Ooyala (global)
        var api_key = "VmZ3kxOkk4Bm_RPLvXTM3ckfuX_m.JE2G1";
        var secret = "hiPYJoqLqe9Fkwx0Cg5AS04YhGN8T3fdBw0jLk1n";
        var expires = Math.round((new Date().getTime('1/1/1970') / 1000)) + (24 * 60);

        //Load Stylesheets
        var cssId = "";
        var head = "";
        var link = "";
        cssId = 'BTCSCSS';
        if (!$d.getElementById(cssId)) {
            head = $d.getElementsByTagName('head')[0];
            link = $d.createElement('link');
            link.id = cssId;
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = BASE_HREF + '/css/BTCHomeWidgetStyle.css';
            link.media = 'all';
            head.appendChild(link);
        }
        cssId = 'PermMarkCSS';
        if (!$d.getElementById(cssId)) {
            head = $d.getElementsByTagName('head')[0];
            link = $d.createElement('link');
            link.id = cssId;
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'http://fonts.googleapis.com/css?family=Permanent+Marker';
            link.media = 'all';
            //head.appendChild(link);
        }
        //Load Ooyala Script
        //$j.getScript("http://player.ooyala.com/v3/8429b6a60f6e42c493657dd629122e66?namespace=JYPlayer");

        //Start loading content at the location of the supplied script tag.
        var btc_div = $d.createElement('div');
        btc_div.id = 'widget-home-btc';

        var btc = $d.getElementById('BTCHomeWidget');
        btc.parentNode.insertBefore(btc_div, btc);

        //Load the HTML
        $j('#widget-home-btc').append('<div id="blurb"><a href="#blurb">Daily 10 Seconds with Dana Carvey</a></div>');
        $j('#widget-home-btc').append('<div class="btc-widget-left"></div>');
        $j('.btc-widget-left').append('<div class="widget-btc-' + WIDGET_SIZE + '"></div>');
        //menu
        $j('.widget-btc-' + WIDGET_SIZE + '').append('<div class="header-btc" id="widget-header-btc"></div>');
        $j('.widget-btc-' + WIDGET_SIZE + '').append('<span id="watchnow">Watch new comics voiced by Dana Carvey, David Spade, Julianne Moore, Chris Rock and many more!<br><a href="http://www.charlotteobserver.com/beyondcomics"><img src="' + BASE_HREF + '/img/watchnow.png"></img></span>');
        //$j('.widget-btc-' + WIDGET_SIZE + '').append('<div class="suspensor-btc" ></div>');
        //$j('.suspensor-btc').append('<div><img src="' + BASE_HREF + '/img/PineBros' + WIDGET_SIZE + '.png"></img></div>');
        $j('.widget-btc-' + WIDGET_SIZE + '').append('<div class="openB-btc"></div>');
        if (OPEN_VAL) {
            $j(".openB-btc").css(OPEN_VAL, "0");
        }
        //console.log($j(".openB-btc"));
        $j('.widget-btc-' + WIDGET_SIZE + '').append('<div class="playbtn-btc-' + WIDGET_SIZE + '"></div>');
        //float left
        $j('.openB-btc').append('<div class="divL-btc"></div>');
        ///float center
        $j('.openB-btc').append('<div class="divC-btc"></div>');
        $j('.divC-btc').append('<div class="video-btc"></div>');
        $j('.video-btc').append('<div class="top-btc"></div>');
        $j('.top-btc').append('<div class="top-title-btc" id="widget-title-in-btc"></div>');
        $j('.top-btc').append('<div class="top-link-btc" onclick="javascript:window.location.href =\'http://www.charlotteobserver.com/beyondcomics/\'"></div>');
        $j('.video-btc').append('<div class="player-btc" id="video-player-btc">sss</div>');
        $j('#video-player-btc').html("<div id='ooyalaplayer-btc' class='ooyalaplayer-btc'>Loading Video...</div>");
        //float right
        $j('.openB-btc').append('<div class="divR-btc"></div>');
        $j('.divR-btc').append('<div class="close-btc" id="widget-close-btc"></div>');
        $j('.divR-btc').append('<div class="suspensorB-btc"></div>');

        $j("#widget-header-btc, .playbtn-btc-" + WIDGET_SIZE).click(function () {
            $j('.complexListingBox').css('overflow', 'visible');
            $j('.openB-btc').toggle("slow");

            var playerConfiguration = {
                playlistsPlugin: {
                    "data": ["126f89d134914e75bebf965c8472425c"]
                },
                autoplay: true,
                loop: false,
                height: 420,
                width: 472,
                useFirstVideoFromPlaylist: true
            };
            videoplayerJY = JYPlayer.Player.create('ooyalaplayer-btc', '', playerConfiguration);
            videoplayerJY.subscribe('played', 'myPage', function (eventName) {
				if(getUrlParameter('tji') !== 'undefined'){
					//do nothing
            	}else{
					$j('.openB-btc').toggle("slow");
					$j('.complexListingBox').css('overflow', 'hidden');
					$j('.suspensorB-btc').html('');
					videoplayerJY.destroy();
                }
            });
        });

        $j("#widget-close-btc").click(function () {
        	if(getUrlParameter('tji') !== 'undefined'){
				//do nothing
            }else{
				$j('.openB-btc').toggle("slow");
				$j('.complexListingBox').css('overflow', 'hidden');
				$j('.suspensorB-btc').html('');
				videoplayerJY.destroy();
            }
        });

        $j(document).ready(function () {
			if(getUrlParameter('tji') != 'undefined'){
				console.log("BTC Log: Special for marketing");
				$j('#blurb').find('a')[0].click();
				//$j('#widget-header-btc')[0].click();
				
				$j('.complexListingBox').css('overflow', 'visible');
				$j('.openB-btc').css('display','block');
				//$j('.openB-btc').toggle("slow");

				var playerConfiguration = {
					playlistsPlugin: {
						"data": ["126f89d134914e75bebf965c8472425c"]
					},
					autoplay: true,
					loop: false,
					height: 420,
					width: 472,
					useFirstVideoFromPlaylist: true
				};
				videoplayerJY = JYPlayer.Player.create('ooyalaplayer-btc', '', playerConfiguration);
            }
        });

        //Helper methods
        var sortObjectByKey = function (obj) {
            var keys = [];
            var sorted_obj = {};
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    keys.push(key);
                }
            }
            keys.sort();
            $j.each(keys, function (i, key) {
                sorted_obj[key] = obj[key];
            });
            return sorted_obj;
        };
        var genurlandwrite = function (method, path, params, func) {
            params.api_key = api_key;
            params.expires = expires;

            params = sortObjectByKey(params);

            var stringToSign = secret + method + MEDIA_PATH_BASE + path;
            var key;
            for (key in params) {
                stringToSign += key + '=' + params[key];
            }

            var hash = CryptoJS.SHA256(stringToSign);
            var hashBase64 = CryptoJS.enc.Base64.stringify(hash);
            signature = encodeURIComponent(hashBase64.substring(0, 43).replace(/=+$/, ''));
            var url = MEDIA_BASE + MEDIA_PATH_BASE + path + '?';
            params.signature = signature;
            for (key in params) {
                url += "&" + key + '=' + params[key];
            }
            switch (func) {
                case 'getWidgetFeed':
                    getWidgetFeed(url);
                    break;
            }
        };

        //Get widget playlist
        m_path = 'labels/a5c5155ef4d24828bf84f9e9b515d8dd/assets';
        m_params = {};
        //genurlandwrite('GET', m_path, m_params, 'getWidgetFeed');
        constructWidget('Daily 10 Seconds with Dana Carvey', 'http://cf.c.ooyala.com/g4cXl5bjoEKtIjw1jcTvIo6lD3bMw0vS/promo230372342');

        function getWidgetFeed(url) {
            $j.ajax({
                url: url,
                dataType: 'text',
                success: function (xml) {
                    console.log("BTC Log: Retrieved feed");
                    xml = JSON.parse(xml);
                    alert(xml.items[0].preview_image_url);
                    constructWidget(xml);
                },
                error: function (xml) {
                    console.log("BTC Log: Can't connect to video server");
                    //alert("can't connect to video server");
                }
            });
        }

        /*function constructWidget(xml) {
            console.log("BTC Log: Constructing video");
            console.log("BTC Log: " + xml.items[0].asset_type);
            console.log("BTC Log: Title " + xml.items[0].name);
            console.log("BTC Log: Embed " + xml.items[0].embed_code);
            alert(xml.items[0].preview_image_url);
            jQueryitem = xml;
            $j('#widget-header-btc').html("<div class='widget-preview-btc-'" + WIDGET_SIZE + "><img class='widget-preview-btc-img-" + WIDGET_SIZE + "' src='" + xml.items[0].preview_image_url + "'></div>");
            $j('#widget-title-btc').html("" + xml.items[0].name + "");
            $j('#widget-title-in-btc').html("" + xml.items[0].name + "");
        }*/
        function constructWidget(name, imgurl) {
            console.log("BTC Log: Constructing video");
            
            console.log("BTC Log: Title " + name);
            console.log("BTC Log: Embed " + imgurl);
            $j('#widget-header-btc').html("<div class='widget-preview-btc-'" + WIDGET_SIZE + "><img class='widget-preview-btc-img-" + WIDGET_SIZE + "' src='" + imgurl + "'></div>");
            $j('#widget-title-btc').html("" + name + "");
            $j('#widget-title-in-btc').html("" + name + "");
        }
    	function getUrlParameter(sParam)
		{
			var sPageURL = window.location.search.substring(1);
			var sURLVariables = sPageURL.split('&');
			for (var i = 0; i < sURLVariables.length; i++) 
			{
				var sParameterName = sURLVariables[i].split('=');
				if (sParameterName[0] == sParam) 
				{
					return sParameterName[1];
				}
			}
			return 'undefined';
		}  
    });
})();