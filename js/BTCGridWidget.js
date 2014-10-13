(function () {
    //Constants
    var BASE_HREF = 'http://' + document.getElementById("BTCGridWidget").getAttribute("data-env");
    var TITLE = 'New! Cartoon Shorts';
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
    script.src = '//player.ooyala.com/v3/8429b6a60f6e42c493657dd629122e66?namespace=JYPlayer';
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
        //jQuery is loaded. Attempt to isolate the jQuery code for BTC
        var $j = jQuery.noConflict();
        var $d = document;
        console.log("BTC Log: You are running jQuery version: " + $j.fn.jquery);
        
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
        ga('set', '&uid', "BTCGridWidget");

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
        /* //Call HTML page
        var url = BASE_HREF + "/BTCGrid.php";
        $j.ajax({
            url: url,
            dataType: "html",
            success: function (h) {
                var btc_div = $d.createElement('div');
                btc_div.id = 'btc-grid-widget';

                var grid = $d.getElementById('BTCGridWidget');
                grid.parentNode.insertBefore(btc_div, grid);

                $j("#btc-grid-widget").html(h);
            }
        });*/
        var h = '<div id="main-container" class="home">';
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
        h += '</div>';
        h += '</a>';
        h += '<a href="#edge-top" class="vid-item"><span id="tier-1_img_1"><img width="312" height="185" src="' + BASE_HREF + '/img/trans.png" /></span>';
        h += '<div class="caption">';
        h += '<span class="title"><span id="tier-1_title_1"></span></span>';
        h += '<br>';
        h += '<span class="voice"><span id="tier-1_voice_1"></span></span>';
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
        h += '</div>';
        h += '</a>';
        h += '</div>';
        h += '<div id="tier-3">';
        h += '<a href="#edge-top" class="vid-item"> <span id="tier-2_img_2"><img width="203" height="136" src="' + BASE_HREF + '/img/trans.png" /></span>';
        h += '<div class="caption">';
        h += '<span class="title"><span id="tier-2_title_2"></span></span>';
        h += '<br>';
        h += '<span class="voice"><span id="tier-2_voice_2"></span></span>';
        h += '</div>';
        h += '</a>';
        h += '<a href="#edge-top" class="vid-item">';
        h += '<span id="tier-2_img_3"><img width="203" height="136" src="' + BASE_HREF + '/img/trans.png" /></span>';
        h += '<div class="caption">';
        h += '<span class="title" style=""><span id="tier-2_title_3"></span></span>';
        h += '<br>';
        h += '<span class="voice"><span id="tier-2_voice_3"></span></span>';
        h += '</div>';
        h += '</a>';
        h += '<a href="#edge-top" class="vid-item">';
        h += '<span id="tier-2_img_4"><img width="203" height="136" src="' + BASE_HREF + '/img/trans.png" /></span>';
        h += '<div class="caption">';
        h += '<span class="title"><span id="tier-2_title_4"></span></span>';
        h += '<br>';
        h += '<span class="voice"><span id="tier-2_voice_4"></span></span>';
        h += '</div>';
        h += '</a>';
        h += '<a href="#edge-top" class="vid-item">';
        h += '<span id="tier-2_img_5"><img width="203" height="136" src="' + BASE_HREF + '/img/trans.png" /></span>';
        h += '<div class="caption">';
        h += '<span class="title"><span id="tier-2_title_5"></span></span>';
        h += '<br>	';
        h += '<span class="voice"><span id="tier-2_voice_5"></span></span>';
        h += '</div>';
        h += '</a>';
        h += '<a href="#edge-top" class="vid-item">';
        h += '<span id="tier-2_img_6"><img width="203" height="136" src="' + BASE_HREF + '/img/trans.png" /></span>';
        h += '<div class="caption">';
        h += '<span class="title"><span id="tier-2_title_6"></span></span>';
        h += '<br>	';
        h += '<span class="voice"><span id="tier-2_voice_6"></span></span>';
        h += '</div>';
        h += '</a>';
        h += '<a href="#edge-top" class="vid-item">';
        h += '<span id="tier-2_img_7"><img width="203" height="136" src="' + BASE_HREF + '/img/trans.png" /></span>';
        h += '<div class="caption">';
        h += '<span class="title"><span id="tier-2_title_7"></span></span>';
        h += '<br>';
        h += '<span class="voice"><span id="tier-2_voice_7"></span></span>';
        h += '</div>';
        h += '</a>';
        h += '</div>';
        h += '</div>';
        h += '<div id="tier-player">';
        h += '<div id="playerContainer"></div>';
        h += '<div id="playerContainerBottom"><a href="#edge-top" class="moreComicsButton"></a></div>';
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

        var grid = $d.getElementById('BTCGridWidget');
        grid.parentNode.insertBefore(btc_div, grid);
        $j("#btc-grid-widget").html(h);
        console.log("BTC Log: Loaded default HTML");

        //Get the ooyala script for the player
        //$j.getScript("http://player.ooyala.com/v3/8429b6a60f6e42c493657dd629122e66?namespace=JYPlayer");
        //Global playlists object.  We have to get playlists separately from assets
        //and then crossreference the two until Oolala provides a querystring scheme to cross the two
        var playlists = {};

        //Credentials for Ooyala
        var api_key = "VmZ3kxOkk4Bm_RPLvXTM3ckfuX_m.JE2G1";
        var secret = "hiPYJoqLqe9Fkwx0Cg5AS04YhGN8T3fdBw0jLk1n";
        var expires = Math.round((new Date().getTime('1/1/1970') / 1000)) + (24 * 60);

        //Featured video ids
        var feat_vids = "05f9ae450a8145cab498ff2402c8275b";
        //Other grid videos id
        var grid_vids = "1eaa81bc75694f46898e25a65e2923b8";


        var pl_stringToSign = secret + 'GET' + '/v2/playlistsapi_key=' + api_key + 'expires=' + expires;
        var fv_stringToSign = secret + 'GET' + '/v2/labels/' + feat_vids + '/assetsapi_key=' + api_key + 'expires=' + expires + 'include=metadata';
        var nfv_stringToSign = secret + 'GET' + '/v2/labels/' + grid_vids + '/assetsapi_key=' + api_key + 'expires=' + expires + 'include=metadata';
        var pl_hash = CryptoJS.SHA256(pl_stringToSign);
        var fv_hash = CryptoJS.SHA256(fv_stringToSign);
        var nfv_hash = CryptoJS.SHA256(nfv_stringToSign);

        var pl_hashBase64 = CryptoJS.enc.Base64.stringify(pl_hash);
        var fv_hashBase64 = CryptoJS.enc.Base64.stringify(fv_hash);
        var nfv_hashBase64 = CryptoJS.enc.Base64.stringify(nfv_hash);
        pl_signature = encodeURIComponent(pl_hashBase64.substring(0, 43).replace(/=+$/, ''));
        fv_signature = encodeURIComponent(fv_hashBase64.substring(0, 43).replace(/=+$/, ''));
        nfv_signature = encodeURIComponent(nfv_hashBase64.substring(0, 43).replace(/=+$/, ''));
        getPlaylists(pl_signature);
        getVideos(fv_signature, feat_vids, 'tier-1');
        getVideos(nfv_signature, grid_vids, 'tier-2');


        function getPlaylists(signature) {
            var url = "";
            //Call Ooyala to retrieve playlists
            console.log("BTC Log: Getting playlists");
            url = 'http://api.ooyala.com/v2/playlists?api_key=' + api_key + '&signature=' + signature + '&expires=' + expires;

            $j.ajax({
                url: url,
                dataType: 'text',
                success: function (xml) {
                    console.log("BTC Log: Retrieved feed for playlists");
                    xml = JSON.parse(xml);
                    $j.each(xml.items, function (key, data) {
                        if (data.name.substring(0, 2) === 'MT') {
                            playlists[data.name.toLowerCase()] = data.id;
                        }
                    });
                },
                error: function (xml) {
                    console.log("BTC Log: Can't connect to video server to retrieve playlists");
                    //alert("can't connect to video server to retrieve playlists");
                }
            });
        }
        //Call Ooyala to retrieve featured videos
        function getVideos(signature, key, tier) {
            var url = 'http://api.ooyala.com/v2/labels/' + key + '/assets?include=metadata&api_key=' + api_key + '&signature=' + signature + '&expires=' + expires;
            $j.ajax({
                url: url,
                dataType: 'text',
                success: function (xml) {
                    console.log("BTC Log: Retrieved feed for " + tier + " featured Videos");
                    xml = JSON.parse(xml);
                    //console.log("need to replicate: " + JSON.stringify(xml));
                    writeDiv(xml, tier);
                },
                error: function (xml) {
                    console.log("BTC Log: Can't connect to video server to retrieve " + tier + " videos");
                    //alert("can't connect to video server");
                }
            });
        }


         function writeDiv(xml, id) {
            //console.log(JSON.stringify(xml));
            if(getUrlParameter('cl') =='true' || getUrlParameter('nts') == 'true' || getUrlParameter('dt') == 'true'
            || getUrlParameter('tmts') =='true' || getUrlParameter('ww') =='true' || getUrlParameter('ht') =='true' 
            || getUrlParameter('cic') =='true' || getUrlParameter('dar') =='true' || getUrlParameter('sc') =='true' 
            || getUrlParameter('dip') =='true' || getUrlParameter('ih') =='true' || getUrlParameter('ppc') =='true'
            || getUrlParameter('tjig') =='true'|| getUrlParameter('lfk') =='true'){
                console.log('BTC Log: Hiding Grid for direct video play');
				$j('#tier-1').hide();
				$j('#tier-2').hide();
				$j('#tier-3').hide();
				$j('#tier-4').show();
			}
            $j('#pagetitle h3').html(TITLE);
            $j.each(xml.items, function (i, item) {
                var imgid = "#" + id + "_img_" + i;
                var titleid = "#" + id + "_title_" + i;
                var voiceid = "#" + id + "_voice_" + i;
                $j(imgid).html("<img src=\"" + item.preview_image_url + "\">").data({
                    name: item.name,
                    voice: item.metadata.voice,
                    embed_code: item.embed_code
                });

                $j(imgid).click(function () {
                    playVideo($j.data(this).name, $j.data(this).voice, $j.data(this).embed_code);
                });
                $j(titleid).html(item.name);
                $j(voiceid).html(item.metadata.voice);
            });
            if(getUrlParameter('cl') == 'true'){
            	console.log('BTC Log: diverting to Church Lady');
                playVideo('Church Lady', 'Dana Carvey', '78e61e85e7e24006a530a7e9ecae1138');
			}
			if(getUrlParameter('nts') == 'true'){
            	console.log('BTC Log: diverting to Note To Self');
                playVideo('Note to Self', 'Julianne Moore', '3c6959a4501048ec89e5cb6e8bdc1077');
			}
			if(getUrlParameter('dt') == 'true'){
            	console.log('BTC Log: diverting to Deep Thoughts');
                playVideo('Deep Thoughts', 'Jack Handey', '2a6cf260e9974037aa07da50b6c19d95');
			}
            if(getUrlParameter('tmts') == 'true'){
            	console.log('BTC Log: diverting to 2 Minute Talk Show');
                playVideo('2 Minute Talk Show', 'Dana Carvey', 'd9e4490dd2d49bd99f396eba77d691e');
			}
            if(getUrlParameter('ww') == 'true'){
            	console.log('BTC Log: diverting to Wonder Why Your Relationship Ended?');
                playVideo('Wonder Why Your Relationship Ended?', 'David Spade', '335f8d10ef854716869baf5d7eebf278');
			}
            if(getUrlParameter('ht') == 'true'){
            	console.log('BTC Log: diverting to Hypochondriac Thoughts for the Day');
                playVideo('Hypochondriac Thoughts for the Day', 'Kevin Nealon', 'b65ba58e527440c2af8a76f5802d3e89');
			}
            if(getUrlParameter('cic') == 'true'){
            	console.log('BTC Log: diverting to Cursing Into A Cellphone');
                playVideo('Cursing Into A Cellphone', 'Ana Faris', '3a1e66d904f7474b838ab535814b8900');
			}
            if(getUrlParameter('dar') == 'true'){
            	console.log('BTC Log: diverting to Dude and Rockstar');
                playVideo('Dude and Rockstar', 'David Spade and Colin Quinn', '1d147af5985a49a4b103f0ebca9d1147');
			}
            if(getUrlParameter('sc') == 'true'){
            	console.log('BTC Log: diverting to Sketchy Coffee');
                playVideo('Sketchy Coffee', 'Sarah Silverman', 'd68814b9b148430cb677ae0290f229af');
			}
            if(getUrlParameter('dip') == 'true'){
            	console.log('BTC Log: diverting to Dog In Purse');
                playVideo('Dog In Purse', 'David Spade', 'cca9d0ef42e043eea2f20ee880ed8806');
			}
            if(getUrlParameter('ih') == 'true'){
            	console.log('BTC Log: diverting to I, Hippie');
                playVideo('I, Hippie', 'Dana Carvey', '3c49534a6462437883a9d029ed5cffcd');
			}
            if(getUrlParameter('ppc') == 'true'){
            	console.log('BTC Log: diverting to Presidential Phone Calls');
                playVideo('Presidential Phone Calls', 'Dana Carvey', '6a655b58bc8349d69df33ef644f9f4d5');
			}
			if(getUrlParameter('tjig') == 'true'){
            	console.log('BTC Log: diverting to Daily 10 Seconds with Dana Carvey');
                playVideo('Daily 10 Seconds with Dana Carvey', 'Dana Carvey', '60b2225e790046d6ad7eef04b59a2432');
			}
			if(getUrlParameter('lfk') == 'true'){
            	console.log('BTC Log: diverting to Letters From Kids');
                playVideo('Letters From Kids', 'Sara Wolf', '87ef677dfc0844d1b44961ac58a405ae');
			}
			
        }

        /*function writeArchiveList(xml) {
            $j.each(xml.items, function (i, item) {
                var archid = "#archid_" + i;
                var footarchid = "#footarchid_" + i;
                if (item.parent_id == archive_id) {
                    console.log("ARCHIE: " + item.name + ", " + item.id);
                    $j("#archive-list").append("<li id=\"archid_" + i + "\"></li>");
                    $j("#footer-archive-list").append("<li id=\"footarchid_" + i + "\"></li>");
                    $j(archid).html("<a href=\"#\">" + item.name + "</a>").data({
                        name: item.name,
                        id: item.id
                    });
                    $j(footarchid).html("<a href=\"#\">" + item.name + "</a>").data({
                        name: item.name,
                        id: item.id
                    });
                    $j(archid).click(function () {
                        console.log($j.data(this).name);
                        playVideo($j.data(this).name, $j.data(this).id);
                    });
                    $j(footarchid).click(function () {
                        console.log($j.data(this).name);
                        playVideo($j.data(this).name, $j.data(this).id);
                    });
                }
            });
        }*/
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
        function playVideo(name, voice, embed_code) {
            //In order to embed a playlist, the name of the comic needs to have a matching name with
            //a playlist, until Oolala provides an interface to intersect the two.
            //In the meantime, the publisher will need to ensure that there is a one-to-one
            //relationship between the two.  If there's a playlist, then a video playlist
            //will be embedded.  If not, only a single comic will be available.
            $j(document).ready(function () {
                setTimeout(function () {
                    //$j('.oo-thumbnail-caption').css('font-size', 14).show();
                    //$j('div.oo-playlists-thumbnails').prepend('<h5>More ' + name + '</h5>');
                }, 2000);
            });

            $j('#tier-1').hide();
            $j('#tier-2').hide();
            $j('#tier-3').hide();
            $j('#tier-4').show();
            $j('#pagetitle h3').html('');
            $j('#pagetitle h1').html(name);
            $j('#pagetitle h2').html('with ' + voice);
            var playlist;
            if(embed_code == '78e61e85e7e24006a530a7e9ecae1138' || embed_code == '3c6959a4501048ec89e5cb6e8bdc1077' 
            || embed_code == '2a6cf260e9974037aa07da50b6c19d95' || embed_code == 'd9e4490dd2d49bd99f396eba77d691e'
            || embed_code == '335f8d10ef854716869baf5d7eebf278' || embed_code == 'b65ba58e527440c2af8a76f5802d3e89'
            || embed_code == '3a1e66d904f7474b838ab535814b8900' || embed_code == '1d147af5985a49a4b103f0ebca9d1147'
            || embed_code == 'd68814b9b148430cb677ae0290f229af' || embed_code == 'cca9d0ef42e043eea2f20ee880ed8806' 
            || embed_code == '3c49534a6462437883a9d029ed5cffcd' || embed_code == '6a655b58bc8349d69df33ef644f9f4d5'
            || embed_code == '60b2225e790046d6ad7eef04b59a2432' || embed_code == '87ef677dfc0844d1b44961ac58a405ae'){
            	console.log('BTC Log: guaranteeing CL or NTS Playlist');
               playlist = embed_code;
			}else{
				playlist = playlists['mt ' + name.toLowerCase()];
			}
            var playerConfig;
            if (playlist) {
                console.log("BTC Log: Got playlist");
                playerConfig = {
                    playlistsPlugin: {
                        "data": [playlist]
                    },
                    autoplay: true,
                    loop: false,
                    height: 500,
                    width: 618,
                    useFirstVideoFromPlaylist: true
                };
                videoplayerJY = JYPlayer.Player.create('playerContainer', '', playerConfig);
            } else {
                console.log("BTC Log: Couldn't find playlist; playing individual video");
                playerConfig = {
                    autoplay: true,
                    loop: false,
                    height: 348,
                    width: 618,
                    useFirstVideoFromPlaylist: true
                };
                videoplayerJY = JYPlayer.Player.create('playerContainer', embed_code, playerConfig);
            }
            $j('.oo-thumbnail-caption').css('font-size', 14).show();
            $j('.oo-playlists-thumbnails').prepend('<h5>More ' + name + '</h5>');
            $j('.moreComicsButton').click(function () {
                $j('#tier-1').show();
                $j('#tier-2').show();
                $j('#tier-3').show();
                $j('#tier-4').hide();
                $j('#pagetitle h3').html(TITLE);
                $j('#pagetitle h1').html('');
                $j('#pagetitle h2').html('');
                if (videoplayerJY) {
                    console.log("BTC Log: Destroying video player");
                    videoplayerJY.destroy();

                }
            });
        }
    });
})();