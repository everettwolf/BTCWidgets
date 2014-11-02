(function () {
    var pathname = window.location.pathname;
    if (pathname === '/beyondcomics/' || pathname === '/895' ) {
        return;
    }
    if(window.location.hostname==='www.charlotteobserver.com' || window.location.hostname==='charlotteobserver.com'){
    	console.log("BTC Log: Suppressing Widget");
    	return;
    }
    var SCRIPT_ID = 'BTCHomeWidget';
    var BASE_HREF = 'http://' + document.getElementById(SCRIPT_ID).getAttribute("data-env");
    var WIDGET_WIDTH = document.getElementById(SCRIPT_ID).getAttribute("data-width");
    var WIDGET_HEIGHT = document.getElementById(SCRIPT_ID).getAttribute("data-height");
    var OPEN_VAL = document.getElementById(SCRIPT_ID).getAttribute("data-open");
    var HOME_PL = document.getElementById(SCRIPT_ID).getAttribute("data-pl");
    var GRID_URL = document.getElementById(SCRIPT_ID).getAttribute("data-grid");
    var SHOW_ADS = document.getElementById(SCRIPT_ID).getAttribute("data-ads");

    if(!SHOW_ADS) SHOW_ADS = "false";
    SHOW_ADS = SHOW_ADS==="true"?true:false;

    WIDGET_WIDTH = 300;
    WIDGET_HEIGHT = 285;
    if(!OPEN_VAL) OPEN_VAL = 'left';
    if(!HOME_PL) HOME_PL = '1370fdbbe1ef4483b54a83354c37f922';
    if(!GRID_URL) GRID_URL = '/beyondcomics/';

    console.log("BTC Log: Environment: " + BASE_HREF);
    console.log("BTC Log: Widget Width: " + WIDGET_WIDTH);
    console.log("BTC Log: Widget Height: " + WIDGET_HEIGHT);
    console.log("BTC Log: Widget opens: " + OPEN_VAL);
    //Load Scripts
    var script;
    // Load jQuery
    script = document.createElement("SCRIPT");
    script.src = 'http://code.jquery.com/jquery-1.10.2.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);

    //load JYPlayer
    script = document.createElement("SCRIPT");
	script.src = 'http://player.ooyala.com/v3/3a7ee37efcb84a67912ff58f75f2600d?namespace=JYPlayer';
    
    
    
    script.type = 'application/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);

    // Poll for jQuery and CryptoJS to come into existence
    var checkReady = function (callback) {
        if (window.JYPlayer && window.jQuery && window.jQuery.fn.jquery === '1.10.2') {
            callback(window.JYPlayer && window.jQuery && window.jQuery.fn.jquery === '1.10.2');
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
        var btc_div;
        var OO;
        //see if the source is Marketing, Facebook or Twitter
        var pl = "";
        var src = "";
        var param = "";
        if(getUrlParameter('UTM') !== "undefined") {
        	pl = getUrlParameter('UTM');
        	src = 'jg';
        	param = 'UTM';
        }else if(getUrlParameter('FB') !== "undefined"){
        	pl = getUrlParameter('FB');
        	src = 'fb';
        	param = 'FB';
        }else if(getUrlParameter('TTR') !== "undefined"){
        	pl = getUrlParameter('TTR');
        	src = 'ttr';
        	param = 'TTR'
        }
        //to determine if a tutorial should be shown
        var t = getUrlParameter('t');
        //number of seconds to delay before an open/redirect
        var s = getUrlParameter('s');

        var mktg = pl === '' ? false : true;
        t = t === 'true' ? true : false;
        s = s === 'undefined'?1000:s*1000;

        if (!BASE_HREF || !WIDGET_WIDTH || !WIDGET_HEIGHT || !OPEN_VAL || !HOME_PL || !GRID_URL) {
            var h = 'Missing attributes in widget code.<br>';
            h += 'Usage:  script id=\'BTCHomeWidget\' data-env=\'[environment]\' data-open=\'[openval]\' data-width=\'[widgetwidth]\' data-height=\'[widgetheight]\'  data-pl=\'[videokey]\' data-grid=\'[gridurl]\' src=\'[source]\'<br>';
            h += '<b>Please request an updated widget string to embed with the proper attributes.</b>';
            btc_div = $d.createElement('div');
            btc_div.id = 'btc-home-widget';

            var grid = $d.getElementById(SCRIPT_ID);
            grid.parentNode.insertBefore(btc_div, grid);
            $j("#btc-home-widget").html(h);
            return;
        }

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

        //Load Stylesheets
        var cssId = "";
        var head = "";
        var link = "";
        cssId = 'BTCcss';
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
        //Start loading content at the location of the supplied script tag.
        btc_div = $d.createElement('div');
        btc_div.id = 'btc-widget-home';

        var btc = $d.getElementById(SCRIPT_ID);
        btc.parentNode.insertBefore(btc_div, btc);

        //Load the HTML

        //$j('#btc-widget-home').append('<div class="btc-widget-left"></div>');
        $j('#btc-widget-home').append('<div id="btc-widget-bground"></div>');
        $j('#btc-widget-bground').css('width', WIDGET_WIDTH);
        $j('#btc-widget-bground').css('height', WIDGET_HEIGHT);
        $j('#btc-widget-bground').append('<a href="#btc-widget-bground"></a>');
        $j('#btc-widget-bground').append('<div id="btc-widget-header"></div>');
        $j('#btc-widget-bground').append('<div id="btc-widget-title"></div>');
        $j('#btc-widget-bground').append('<div id="btc-widget-blurb">Watch Dana do the news as Tom Rathkite.  You can also see a slew of animated cartoons voiced by David Spade, Chris Rock, Julianne Moore, Kevin Nealon + more...  <span>Watch Now &#187;</span></div>');

		if(mktg || SHOW_ADS){
        	//Advertisement below widget
        	$j('#btc-widget-home').append('<div id="btc-widget-ad-imp" ></div>');
        	$j('#btc-widget-ad-imp').append('<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><ins class="adsbygoogle" style="display:inline-block;width:300px;height:50px" data-ad-client="ca-pub-5403475582289341" data-ad-slot="3892434911"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>');
        }

        $j('#btc-widget-bground').append('<div id="btc-widget-playbtn"></div>');
        $j('#btc-widget-bground').append('<div id="btc-widget-open-bground"></div>');
        if(mktg || SHOW_ADS){
        	var imgURL = BASE_HREF + '/img/bottomBG.jpg';
        	//We need to make the open widget wide enough to show advertising
        	$j("#btc-widget-open-bground").css("background-image", "url(" + imgURL + ")");
        	$j("#btc-widget-open-bground").css("width","950px");
        }

        //Forces the widget to open to the left or to the right.
        if (OPEN_VAL) {
            OPEN_VAL = OPEN_VAL === 'right' ? 'left' : 'right';
            $j("#btc-widget-open-bground").css(OPEN_VAL, "0");
        }

        $j('#btc-widget-open-bground').append('<div id="btc-widget-open-divL"></div>');
        $j('#btc-widget-open-bground').append('<div id="btc-widget-open-divC"></div>');
        if(mktg || SHOW_ADS){
        	//moves the center div to the right to align the right div for the close button
            $j("#btc-widget-open-divC").css("width","790px");
        }
        $j('#btc-widget-open-bground').append('<div id="btc-widget-open-divR"></div>');
        $j('#btc-widget-open-divC').append('<div id="btc-widget-open-slide"></div>');
        if(mktg || SHOW_ADS){
        	//AdSense Ad
        	$j('#btc-widget-open-divC').append('<div id="btc-widget-open-ad"><script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-5403475582289341" data-ad-slot="4950365717"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>');
        }
        $j('#btc-widget-open-slide').append('<div id="btc-widget-open-more-btn"></div>');
        $j('#btc-widget-open-slide').append('<div id="btc-widget-open-title"></div>');
        $j('#btc-widget-open-slide').append('<div id="btc-widget-open-player"></div>');
        $j('#btc-widget-open-divR').append('<div id="btc-widget-open-close-btn"></div>');

        $j('#btc-widget-header, #btc-widget-playbtn, #btc-widget-title').click(function () {
            openWidget();
        });

        $j('#btc-widget-open-more-btn, #btc-widget-blurb span').click(function () {
            redirectToGrid(GRID_URL);
        });

        $j("#btc-widget-open-close-btn").click(function () {
            if (!mktg) {
                ga('send', 'event', src + 'widget', 'click', 'closed');
                $j('#btc-widget-open-bground').toggle("slow");
                OO.destroy();
            }
        });

        function redirectToGrid(url) {
            window.location.href = url;
        }

        function openWidget() {
            ga('send', 'event', src + 'widget', 'click', 'opened');
            $j('#btc-widget-open-bground').toggle("slow");
    		
			var playerConfiguration = {
				playlistsPlugin: {
					"data": [HOME_PL]
				},
				autoplay: true,
				loop: false,
				height: 419,
				width: 474,
				useFirstVideoFromPlaylist: true
			};
			OO = JYPlayer.Player.create('btc-widget-open-player', '', playerConfiguration);

            ga('send', 'event', src + 'widgetplaylist', 'created', $j('#btc-widget-title').html());
            var playings = 0;
            var playeds = 0;
            var playingtitle = "";
            var comic = "";
            OO.subscribe('playing', 'video', function (eventName) {
                if (OO.getDescription() != playingtitle) {
                    playings++;
                    playingtitle = OO.getDescription();
                    comic = OO.getTitle();
                    var evt_title = comic + ' : #' + playings + ' (' + playingtitle + ')';
                    ga('send', 'event', src + 'widgetplaylist', 'playstarted', evt_title);
                }
            });
            OO.subscribe('played', 'video', function (eventName) {
                playeds++;
                var evt_title = comic + ' : #' + playeds + ' (' + playingtitle + ')';
                ga('send', 'event', src + 'widgetplaylist', 'played', evt_title);
                if (!mktg) {
                    ga('send', 'event', src + 'widget', 'closed', 'auto-closed');
                    $j('#btc-widget-open-bground').toggle("slow");
                    OO.destroy();
                }
            });
            OO.subscribe('error', 'video', function (eventName, payload) {
                ga('send', 'event', src + 'widgetplayerror', eventName + ': ' + payload);
            });
        }


        getWidgetInfo();

        if (mktg) {
            //Move widget to top of page
            clickit($j('#btc-widget-bground').find('a')[0]);

            //Automatically open widget
            window.setTimeout(function () {
                openWidget();
                //If playlist sent is not for this page, redirect to the grid
                window.setTimeout(function () {
                    if (pl !== HOME_PL) {
                        var url = GRID_URL + '?' + param + '=' + pl;
                        console.log('BTC Log: Redirected to ' + url);
                        redirectToGrid(url);
                    }
                }, 2000);
            }, 2000);
        }

        function getWidgetInfo() {
            var url = BASE_HREF + '/php/BTC_Home.php?pl=' + HOME_PL;
            $j.ajax({
                url: url,
                dataType: 'json',
                crossDomain: true,
                success: function (xml) {
                    console.log("BTC Log: Retrieved feed");
                    constructWidget(xml);
                },
                error: function (xml) {
                    console.log("BTC Log: Can't connect to video server");
                }
            });
        }

        function constructWidget(xml) {
            console.log("BTC Log: Constructing video");
            var pv_hash = "";
            if(pl===HOME_PL) pv_hash = "#" + src + "_" + getInits(xml.comic);
            else if(pl!=="") pv_hash = "#" + src + "_" + getInits(xml.comic) + "_redir";
            var location = window.location.pathname + pv_hash;
        	ga('send', 'pageview', location);
            $j('#btc-widget-header').html("<div id='btc-widget-preview'><img id='btc-widget-thumb' src='" + xml.thumb + "'></div>");
            $j('#btc-widget-title').html(xml.comic);
            $j('#btc-widget-open-title').html(xml.comic);
        }

        function getUrlParameter(sParam) {
            var sPageURL = window.location.search.substring(1);
            var sURLVariables = sPageURL.split('&');
            for (var i = 0; i < sURLVariables.length; i++) {
                var sParameterName = sURLVariables[i].split('=');
                if (sParameterName[0] == sParam) {
                    return sParameterName[1];
                }
            }
            return 'undefined';
        }

        function clickit(elem) {
            if (!elem) { 
                window.setTimeout(function () {
                    clickit(elem);
                }, 100);
            } else {
                elem.click();
            }
        }
        
        function getInits(s){
			var re = /\b[A-Za-z]/g; 
			var m;
			var ret = "";
			while ((m = re.exec(s)) != null) {
				ret += m;
				if (m.index === re.lastIndex) {
					re.lastIndex++;
				}
			}
			return ret.toLowerCase();
		}
    });
})();