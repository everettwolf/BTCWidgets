(function () {
console.clear();
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
    script.src = '//code.jquery.com/jquery-1.10.2.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);
 
    //Load JYPlayer
    script = document.createElement('SCRIPT');
    script.src = '//player.ooyala.com/v3/3a7ee37efcb84a67912ff58f75f2600d?namespace=JYPlayer';
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
		
		/*
		//DFP Ad
		var googletag = googletag || {};
		googletag.cmd = googletag.cmd || [];
		(function () {
			var gads = document.createElement('script');
			gads.async = true;
			gads.type = 'text/javascript';
			var useSSL = 'https:' == document.location.protocol;
			gads.src = (useSSL ? 'https:' : 'http:') +
				'//www.googletagservices.com/tag/js/gpt.js';
			var node = document.getElementsByTagName('script')[0];
			node.parentNode.insertBefore(gads, node);
		})();

		googletag.cmd.push(function () {
			googletag.defineSlot('/36913802/gridcenter', [180, 150], 'div-gpt-ad-1415138988463-0').addService(googletag.pubads());
			googletag.pubads().enableSingleRequest();
			googletag.enableServices();
		});
		*/
		
		var gridad = "<script async src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'></script> \
								<!-- Grid Ad --> \
								<ins class='adsbygoogle' \
									 style='display:inline-block;width:180px;height:150px' \
									 data-ad-client='ca-pub-5403475582289341' \
									 data-ad-slot='9264644113'> \
								</ins> \
								<script> \
								(adsbygoogle = window.adsbygoogle || []).push({}); \
					</script>";
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
            link.href = BASE_HREF + '/css/BTCGridStyle2.css';
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
        var html = "<div id='main-container'><a href='#edge-top'></a> \
						<div id='edge-top'></div> \
						<div id='film-strip'> \
							<div class='dot dot-top'></div> \
							<div class='dot dot-bottom'></div> \
						</div> \
						<div id='main'> \
							<div id='top-header'>  \
								<span id='rays'></span> \
								<span id='logo'><a href=''><img src='/img/beyondthecomicslogo.png' alt='logo'/></a></span> \
								<span id='pagetitle'> \
									<span id='pageblurb'>" + TITLE + "</span> \
									<span id='playerinfo'> \
										<span id='comictitle'></span> \
										<span id='comictalent'></span> \
									</span> \
								</span> \
							</div> \
							<div id='content'></div> \
							<div id='player'> \
       							<div id='playerContainer'></div> \
       							<div id='playerad'> \
       								<script async src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'></script> \
       								<ins class='adsbygoogle' style='display:inline-block;width:336px;height:280px' data-ad-client='ca-pub-5403475582289341' data-ad-slot='8968436119'></ins> \
       								<script>(adsbygoogle = window.adsbygoogle || []).push({});</script> \
       							</div> \
    							<div id='playerContainerBottom'><a href='#edge-top' id='moreComicsButton'></a></div> \
							</div> \
							<div id='btc-footer'> \
									<div id='footer-links'><a href='/about.php'>About B.T.C.</a><a href='/contact.php' class='last'>Contact Us</a></div> \
									<div id='copyright'>copyright &copy; 2014 Beyond the Comics</div> \
							</div> \
							<div id='edge-bottom'></div> \
						</div> \
					</div>";
      
        var btc_div = $d.createElement('div');
        btc_div.id = 'btc-grid-widget';

        var grid = $d.getElementById(SCRIPT_ID);
        grid.parentNode.insertBefore(btc_div, grid);
        $j("#btc-grid-widget").html(html);
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
            var rowcnt=0;
            var i = 0;
            var cnt = 0;
            var cols = 0;
            var colcnt = 1;
            var html = "";
            $j.each(assetinfo, function (key, val) {
            	if(pv_playlistid === val.playlist_id){
            		pv = true;
            		pv_comic = val.comic;
            		pv_talent = val.talent;
            	}
                id = cnt < 2 ? 'featured' : 'regular';
                cols = cnt < 2 ? 2 : 3;
                cnt++;
                colcnt = colcnt <= cols ? colcnt : 1;
                if(colcnt === 1) rowcnt++;
                
                var vid ="#vid-item" + cnt;
                var pl = "#playlist" + cnt;

                $j('#content').on('click', vid, function () {
                    playVideo(val.comic,val.title, val.talent, val.playlist_id);
                });
                $j('#content').on('click', pl, function () {
                    alert(val.playlist_id);
                });
                
                //Write the appropriate opening div tag
                if(colcnt === 1) html+= "<div class='"+ id +"'>";
                
                html += "<a href='#main-container' id='vid-item" + cnt + "' class='vid-item'> \
                		<img src='" + val.thumb + "'/> \
                		<div class='caption'> \
                			<span class='title'>" + val.title +"</span> \
                			<span class='voice'>" + val.talent + "</span> \
                			<span id='playlist" + cnt + "' class='playlist'>" + val.playlist_id + "</span> \
                		</div> \
                		</a>";
                		
                //put spacing between each slide
                if(colcnt !== cols) html += "<div class='colspace'></div>";		
                
                //Place the ad on the second row in the second position;
                if(rowcnt === 2 && colcnt ===1) {
					html += "<div class='ad-unit-small'> \
								<div class='ad-caption'>Advertisement</div> \
								<div id='ad-container'>";
					html += gridad;
					html += "</div> \
							</div> \
							<div class='colspace'></div>";
						//DFP Ad	
					/*html += "<div class='ad-unit-small'> \
								<div class='ad-caption'>Advertisement</div> \
								<!-- gridcenter --> \
								<div id='div-gpt-ad-1415138988463-0' style='width:180px; height:150px;'> \
								<script type='text/javascript'> \
								googletag.cmd.push(function() { googletag.display('div-gpt-ad-1415138988463-0'); }); \
								</script> \
								</div> \
							</div> \
							<div class='colspace'></div>";
							*/
							

                	colcnt++;
                }
    
                //Write the ending div tag
                if(colcnt === cols) {
                	html += "</div>";
                	colcnt = 1;
                }else{
                	colcnt++;
                }
                rowdiv = id;
            });
			$j("#content").html(html);
			var location = window.location.pathname;
            if (pv) playVideo(pv_comic, pv_title, pv_talent, pv_playlistid);
            else ga('send','pageview',location); 
        }

        function playVideo(comic, title, talent, playlist_id) {
            var pv_playlistid = pl;
            var pv_hash = pv_playlistid===playlist_id?"#" + src + "_" + getInits(comic):"";
            var location = window.location.pathname + pv_hash;
            ga('send','pageview', location);
			ga('send', 'event', src + 'gridplaylist', 'opened', comic);
			if(pv_hash!=="") clickit($j('#main-container').find('a')[0]);
            $j('#content').hide();
            $j('#pageblurb').hide();
            $j('#ad-container').html('');
            $j('#player').show();
            $j('#playerinfo').show();
            $j('#pagetitle #comictitle').html(comic);
            $j('#pagetitle #comictalent').html('with ' + talent);
            
            var playerConfig = {
                playlistsPlugin: {
                    "data": [playlist_id]
                },
                autoplay: true,
                loop: false,
                width: 620,                
                height: 530,
                useFirstVideoFromPlaylist: true
            };
            videoplayerJY = JYPlayer.Player.create('playerContainer', '', playerConfig);
            var seemore = setInterval(function() {
				var elem = $j('#oo-playlists-playerContainer');
					if(elem.length){
						clearInterval(seemore);
						elem.prepend('<div id="oo-see-more">More ' + comic + '</div>');
					}
			},100);
			console.clear();
			var ht = setInterval(function() {
				var elem = $j('#PlaylistsPlayerWrapper-playerContainer');
					if(elem.length){
						clearInterval(ht);
						console.log($j("#PlaylistsPlayerWrapper-playerContainer").height());
					}
			},100);
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

            $j('#moreComicsButton').click(function () {
                var location = window.location.pathname;
            	ga('send','pageview',location);
            	ga('send','event',src + 'homebutton','clicked','Back to Grid');
                $j('#content').show();
                $j('#pageblurb').show();
                $j('#ad-container').html(gridad);
                $j('#player').hide();
                $j('#playerinfo').hide();
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