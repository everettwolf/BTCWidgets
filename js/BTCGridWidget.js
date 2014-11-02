(function () {
    //Constants
    var SCRIPT_ID = 'BTCGridWidget';
    var BASE_HREF = 'http://' + document.getElementById(SCRIPT_ID).getAttribute("data-env");
    var GRID_PL = document.getElementById(SCRIPT_ID).getAttribute("data-pl");
    var TITLE = 'New! Cartoon Shorts';
    
    if(!GRID_PL) GRID_PL = '5e543a8d321c414a9743a3103c209d1f';
     //Load Scripts
    var script;
    
    // Load jQuery
    script = document.createElement('SCRIPT');
    script.src = 'http://code.jquery.com/jquery-1.10.2.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);
 
    //Load JYPlayer
    script = document.createElement('SCRIPT');
    script.src = 'http://player.ooyala.com/v3/3a7ee37efcb84a67912ff58f75f2600d?namespace=JYPlayer';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);

    // Poll for jQuery and CryptoJS to come into existence
    var checkReady = function (callback) {
        if (window.jQuery && window.jQuery.fn.jquery === '1.10.2' && window.JYPlayer) {
            callback(window.jQuery && window.jQuery.fn.jquery === '1.10.2' && window.JYPlayer);
        } else {
            window.setTimeout(function () {
                checkReady(callback);
            }, 100);
        }
    };

    // Start polling...
    checkReady(function ($) {
        //jQuery is loaded. Attempt to isolate the jQuery code for BTC
        var $j = jQuery.noConflict();
        var $d = document;
        console.log("BTC Log: You are running jQuery version: " + $j.fn.jquery);
        
        if(!BASE_HREF || !GRID_PL){
			var $j = jQuery.noConflict();
			var $d = document;
		
			var h = 'Missing attributes in widget code.<br>';
			h += 'Usage:  script id=\'BTCGridWidget\' data-env=\'[environment]\' data-pl=\'[gridkey]\' src=\'[source]\'<br>';
			h += '<b>Please request an updated widget string to embed with the proper attributes.</b>';
			var btc_div = $d.createElement('div');
			btc_div.id = 'btc-grid-widget';

			var grid = $d.getElementById(SCRIPT_ID);
			grid.parentNode.insertBefore(btc_div, grid);
			$j("#btc-grid-widget").html(h);
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
        var cssId;
        var head;
        var link;
        cssId = 'BTCSCSS';
        if (!$d.getElementById(cssId)) {
            head = $d.getElementsByTagName('head')[0];
            link = $d.createElement('link');
            link.id = cssId;
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = BASE_HREF + '/css/BTCGridStyle.css';
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
            head.appendChild(link);
        }
        
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
        
        //Load intitial HTML
        var h = '<div id="main-container" class="home"><a href="#edge-top"></a>';
        h += '<div id="edge-top"></div>';
        h += '<div id="film-strip">';
        h += '<div class="dot dot-top"></div>';
        h += '<div class="dot dot-bottom"></div>';
        h += '</div>';
        h += '<div id="main" role="main">';
        h += '<div class="top-header">	';
        h += '<span class="rays"></span><a href="' + BASE_HREF + '/"><img src="' + BASE_HREF + '/img/beyondthecomicslogo.png" class="logo" /></a>';
        h += '<div id="pagetitle">';
        h += '<h1></h1>';
        h += '<h2></h2>';
        h += '<h3></h3>';
        h += '</div>';
        h += '<div id="left-col">';
        h += '<div id="tier-1">';
        h += '<a href="#main-container" class="vid-item"> ';
        h += '<span id="tier-1_img_0"><img width="312" height="185" src="' + BASE_HREF + '/img/trans.png" /></span>';
        h += '<div class="caption">';
        h += '<span class="title"><span id="tier-1_title_0"></span></span>';
        h += '<br>';
        h += '<span class="voice"><span id="tier-1_voice_0"></span></span>';
        h += '<br>';
        h += '<span id="tier-1_playlist_0" style="display:none;font-family:arial;" class="playlist"></span>';
        h += '</div>';
        h += '</a>';
        h += '<a href="#edge-top" class="vid-item"><span id="tier-1_img_1"><img width="312" height="185" src="' + BASE_HREF + '/img/trans.png" /></span>';
        h += '<div class="caption">';
        h += '<span class="title"><span id="tier-1_title_1"></span></span>';
        h += '<br>';
        h += '<span class="voice"><span id="tier-1_voice_1"></span></span>';
        h += '<br>';
        h += '<span id="tier-1_playlist_1" style="display:none;font-family:arial;" class="playlist"></span>';
        h += '</div>';
        h += '</a>';
        h += '</div>';
        h += '<div id="tier-2">';
        h += '<a href="#edge-top" class="vid-item">';
        h += '<span id="tier-2_img_0"><img width="203" height="136" src="' + BASE_HREF + '/img/trans.png" /></span>';
        h += '<div class="caption">';
        h += '<span class="title"><span id="tier-2_title_0"></span></span>';
        h += '<br>';
        h += '<span class="voice"><span id="tier-2_voice_0"></span></span>';
        h += '<br>';
        h += '<span id="tier-2_playlist_0" style="display:none;font-family:arial;" class="playlist"></span>';
        h += '</div>';
        h += '</a>';
        h += '<div class="ad-unit-small">';
        h += '<div class="ad-caption">Advertisement</div>	<a href="http://pinebrothers.com/"><img src="' + BASE_HREF + '/img/PineBros180.jpg" /></a>';
        h += '</div>';
        h += '<a href="#edge-top" class="vid-item"> <span id="tier-2_img_1"><img width="203" height="136" src="' + BASE_HREF + '/img/trans.png" /></span>';
        h += '<div class="caption">';
        h += '<span class="title"><span id="tier-2_title_1"></span></span>';
        h += '<br>';
        h += '<span class="voice"><span id="tier-2_voice_1"></span></span>';
        h += '<br>';
        h += '<span id="tier-2_playlist_1" style="display:none;font-family:arial;" class="playlist"></span>';
        h += '</div>';
        h += '</a>';
        h += '</div>';
        h += '<div id="tier-3">';
        h += '<a href="#edge-top" class="vid-item"> <span id="tier-2_img_2"><img width="203" height="136" src="' + BASE_HREF + '/img/trans.png" /></span>';
        h += '<div class="caption">';
        h += '<span class="title"><span id="tier-2_title_2"></span></span>';
        h += '<br>';
        h += '<span class="voice"><span id="tier-2_voice_2"></span></span>';
        h += '<br>';
        h += '<span id="tier-2_playlist_2" style="display:none;font-family:arial;" class="playlist"></span>';
        h += '</div>';
        h += '</a>';
        h += '<a href="#edge-top" class="vid-item">';
        h += '<span id="tier-2_img_3"><img width="203" height="136" src="' + BASE_HREF + '/img/trans.png" /></span>';
        h += '<div class="caption">';
        h += '<span class="title" style=""><span id="tier-2_title_3"></span></span>';
        h += '<br>';
        h += '<span class="voice"><span id="tier-2_voice_3"></span></span>';
        h += '<br>';
        h += '<span id="tier-2_playlist_3" style="display:none;font-family:arial;" class="playlist"></span>';
        h += '</div>';
        h += '</a>';
        h += '<a href="#edge-top" class="vid-item">';
        h += '<span id="tier-2_img_4"><img width="203" height="136" src="' + BASE_HREF + '/img/trans.png" /></span>';
        h += '<div class="caption">';
        h += '<span class="title"><span id="tier-2_title_4"></span></span>';
        h += '<br>';
        h += '<span class="voice"><span id="tier-2_voice_4"></span></span>';
        h += '<br>';
        h += '<span id="tier-2_playlist_4" style="display:none;font-family:arial;" class="playlist"></span>';
        h += '</div>';
        h += '</a>';
        h += '<a href="#edge-top" class="vid-item">';
        h += '<span id="tier-2_img_5"><img width="203" height="136" src="' + BASE_HREF + '/img/trans.png" /></span>';
        h += '<div class="caption">';
        h += '<span class="title"><span id="tier-2_title_5"></span></span>';
        h += '<br>	';
        h += '<span class="voice"><span id="tier-2_voice_5"></span></span>';
        h += '<br>';
        h += '<span id="tier-2_playlist_5" style="display:none;font-family:arial;" class="playlist"></span>';
        h += '</div>';
        h += '</a>';
        h += '<a href="#edge-top" class="vid-item">';
        h += '<span id="tier-2_img_6"><img width="203" height="136" src="' + BASE_HREF + '/img/trans.png" /></span>';
        h += '<div class="caption">';
        h += '<span class="title"><span id="tier-2_title_6"></span></span>';
        h += '<br>	';
        h += '<span class="voice"><span id="tier-2_voice_6"></span></span>';
        h += '<br>';
        h += '<span id="tier-2_playlist_6" style="display:none;font-family:arial;" class="playlist"></span>';
        h += '</div>';
        h += '</a>';
        h += '<a href="#edge-top" class="vid-item">';
        h += '<span id="tier-2_img_7"><img width="203" height="136" src="' + BASE_HREF + '/img/trans.png" /></span>';
        h += '<div class="caption">';
        h += '<span class="title"><span id="tier-2_title_7"></span></span>';
        h += '<br>';
        h += '<span class="voice"><span id="tier-2_voice_7"></span></span>';
        h += '<br>';
        h += '<span id="tier-2_playlist_7" style="display:none;font-family:arial;" class="playlist"></span>';
        h += '</div>';
        h += '</a>';
        h += '</div>';
        h += '</div>';
        h += '<div id="tier-player">';
        h += '<div id="playerContainer"></div>';
        h += '<div id="playerContainerBottom"><a href="#edge-top" class="moreComicsButton"></a>';
        if(pl!==""){
        	h += '<div id="playerad"><script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><ins class="adsbygoogle" style="display:inline-block;width:336px;height:280px" data-ad-client="ca-pub-5403475582289341" data-ad-slot="8968436119"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>';
        }
        h += '</div>';
        h += '</div>';
        h += '</div>';
        h += '</div>';
        h += '<div id="btc-footer">';
        h += '<div id="footer-container">';
        h += '<div class="footer-nav">';
        h += '</div>';
        h += '<div class="footer-links"><a href="' + BASE_HREF + '/about.php">About B.T.C.</a>';
        h += '<a href="' + BASE_HREF + '/contact.php" class="last">Contact Us</a>';
        h += '</div>';
        h += '</div>';
        h += '<div class="copyright">copyright &copy; 2014 Beyond the Comics</div>';
        h += '</div>';
        h += '<div id="edge-bottom"></div>';
        var btc_div = $d.createElement('div');
        btc_div.id = 'btc-grid-widget';

        var grid = $d.getElementById(SCRIPT_ID);
        grid.parentNode.insertBefore(btc_div, grid);
        $j("#btc-grid-widget").html(h);
        console.log("BTC Log: Loaded default HTML");

        getAssetInfo();

        function getAssetInfo() {
            var AssetInfo = {};
            console.log("BTC Log: Getting Asset Info");
            var url = BASE_HREF + '/php/BTC_Grid.php?pl=' + GRID_PL;
            console.log(url);
            //return;
            $j.ajax({
                url: url,
                dataType: 'json',
                cross_domain: true,
                success: function (xml) {
                    console.log("BTC Log: Retrieved feed for asset info");
                    writeDivs(xml);
                },
                error: function (xml) {
                    console.log("BTC Log: Can't connect to video server to retrieve asset info");
                }
            });
        }

        function writeDivs(assetinfo) {
        	//If a specific playlist is passed via querystring, catch it and assign it
        	//to these variables to force a play on it.
        	var pv_playlistid = pl;
        	var pv = false;
        	var pv_comic = "";
        	var pv_title = "";
        	var pv_talent = "";
        	
            var id = "";
            var i = 0;
            var cnt = 0;
            $j('#pagetitle h3').html(TITLE);
            $j.each(assetinfo, function (key, val) {
            	if(pv_playlistid === val.playlist_id){
            		pv = true;
            		pv_comic = val.comic;
            		pv_talent = val.talent;
            	}
                id = cnt < 2 ? 'tier-1' : 'tier-2';
                i = cnt < 2 ? cnt : cnt - 2;
                cnt++;
                var imgid = "#" + id + "_img_" + i;
                var titleid = "#" + id + "_title_" + i;
                var voiceid = "#" + id + "_voice_" + i;
                var playlistid = "#" + id + "_playlist_" + i;
                //console.log("EC:" + val.embed_code);
                $j(imgid).html("<img src=\"" + val.thumb + "\">").data({
                    comic: val.comic,
                    title: val.title,
                    talent: val.talent,
                    playlist_id: val.playlist_id
                });

                $j(imgid).click(function () {
                    playVideo($j.data(this).comic,$j.data(this).title, $j.data(this).talent, $j.data(this).playlist_id);
                });
                $j(playlistid).click(function () {
                    alert(val.playlist_id);
                });
                $j(titleid).html(val.comic);
                $j(voiceid).html(val.talent);
                $j(playlistid).html(val.playlist_id);
            });

			var location = window.location.pathname;
            if (pv) playVideo(pv_comic, pv_title, pv_talent, pv_playlistid);
            else ga('send','pageview',location);
        }



        function playVideo(comic, title, talent, playlist_id) {
            /*$j(document).ready(function () {
                setTimeout(function () {
                    $j('.oo-thumbnail-caption').css('font-size', 14).show();
                    $j('div.oo-playlists-thumbnails').prepend('<h5>More ' + comic + '</h5>');
                }, 2000);
            });*/
            var pv_playlistid = pl;
            var pv_hash = pv_playlistid===playlist_id?"#" + src + "_" + getInits(comic):"";
            var location = window.location.pathname + pv_hash;
            ga('send','pageview', location);
			ga('send', 'event', src + 'gridplaylist', 'opened', comic);
			if(pv_hash!=="") clickit($j('#main-container').find('a')[0]);
            $j('#tier-1').hide();
            $j('#tier-2').hide();
            $j('#tier-3').hide();
            $j('#tier-4').show();
            $j('#playerContainerBottom').show();
            $j('#pagetitle h3').html('');
            $j('#pagetitle h1').html(comic);
            $j('#pagetitle h2').html('with ' + talent);
            
            var playerConfig = {
                playlistsPlugin: {
                    "data": [playlist_id]
                },
                autoplay: true,
                loop: false,
                height: 500,
                width: 618,
                useFirstVideoFromPlaylist: true
            };
            videoplayerJY = JYPlayer.Player.create('playerContainer', '', playerConfig);
            var playings = 0;
            var playeds = 0;
            var playingtitle = "";
            videoplayerJY.subscribe('playing', 'video', function (eventName) {
            	if(videoplayerJY.getDescription() != playingtitle) {
					playings++;
					playingtitle = videoplayerJY.getDescription();
					var evt_title = comic + ' : #' + playings + ' (' + playingtitle + ')';
					ga('send','event',src + 'gridplaylist','playstarted', evt_title);
            	}
            });
            videoplayerJY.subscribe('played', 'video', function (eventName) {
            	playeds++;
            	var evt_title = comic + ' : #' + playeds + ' (' + playingtitle + ')';
            	ga('send','event',src + 'gridplaylist','played', evt_title);
            });
            videoplayerJY.subscribe('error', 'video', function(eventName, payload) { 
            	ga('send','event',src + 'gridplayerror',eventName + ': ' + payload);
            }); 

            $j('.moreComicsButton').click(function () {
                var location = window.location.pathname;
            	ga('send','pageview',location);
            	ga('send','event',src + 'homebutton','clicked','Back to Grid');
                $j('#tier-1').show();
                $j('#tier-2').show();
                $j('#tier-3').show();
                $j('#tier-4').hide();
                $j('#playerContainerBottom').hide();
                $j('#pagetitle h3').html(TITLE);
                $j('#pagetitle h1').html('');
                $j('#pagetitle h2').html('');
                if (videoplayerJY) {
                    console.log("BTC Log: Destroying video player");
                    videoplayerJY.destroy();

                }
            });
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
		function clickit(elem) {
            if (!elem) {
                window.setTimeout(function () {
                    clickit(elem);
                }, 100);
            } else {
                elem.click();
            }
        }
    });
})();