/*
 important*/
(function(c) {
    var b = function() {};
    b.test = document.createElement("div");
    b.randomiseArray = function(a) {
        var b = [],
            d = [],
            c;
        for (c = 0; c < a; c++) b[c] = c;
        for (c = 0; c < a; c++) {
            var k = Math.round(Math.random() * (b.length - 1));
            d[c] = b[k];
            b.splice(k, 1)
        }
        return d
    };
    b.sortArray = function(a, b) {
        var d, c = a.length,
            g = [];
        for (d = 0; d < c; d++) g[d] = a[b[d]];
        return g
    };
    b.keysrt = function(a, b, d) {
        var c = 1;
        d && (c = -1);
        return a.sort(function(a, d) {
            var g = a[b],
                z = d[b];
            return c * (g < z ? -1 : g > z ? 1 : 0)
        })
    };
    b.keysrt2 = function(a, b, d, c) {
        var g = 1;
        c && (g = -1);
        return a.sort(function(a,
            c) {
            var z = a[b][d],
                k = c[b][d];
            return g * (z < k ? -1 : z > k ? 1 : 0)
        })
    };
    b.isEmpty = function(a) {
        return 0 == a.replace(/^\s+|\s+$/g, "").length
    };
    b.checkKey = function(a) {
        return a.replace(/[^0-9a-zA-Z_-\s(),]/g, "")
    };
    b.stripSlashes = function(a) {
        a = a.replace(/\\/g, "/");
        a = a.replace(/\\'/g, "'");
        a = a.replace(/\\"/g, '"');
        a = a.replace(/\\0/g, "\x00");
        return a = a.replace(/\\\\/g, "\\")
    };
    b.filterAllowedChars = function(a) {
        var b = a.length,
            d = "",
            c;
        for (c = 0; c < b; c++) {
            var k = a.charAt(c).toLowerCase();
            "\\" == k && (k = "/");
            var t = k.charCodeAt(0);
            if (97 <= t &&
                122 >= t || 48 <= t && 57 >= t || 0 <= "_-".indexOf(k)) d += k
        }
        return d
    };
    b.selectText = function(a) {
        var b = document;
        a = b.getElementById(a);
        if (b.body.createTextRange) b = b.body.createTextRange(), b.moveToElementText(a), b.select();
        else if (c.getSelection) {
            var d = c.getSelection();
            b = b.createRange();
            b.selectNodeContents(a);
            d.removeAllRanges();
            d.addRange(b)
        }
    };
    b.getVideoFormat = function() {
        var a = document.createElement("video");
        if (a.canPlayType) {
            if ("probably" == a.canPlayType("video/mp4") || "maybe" == a.canPlayType("video/mp4")) var b = ".mp4";
            else if ("probably" == a.canPlayType("video/ogg") || "maybe" == a.canPlayType("video/ogg")) b = ".ogg";
            else if ("probably" == a.canPlayType("video/webm") || "maybe" == a.canPlayType("video/webm")) b = ".webm";
            return b
        }
    };
    b.videoSupport = function() {
        return !!document.createElement("video").canPlayType
    };
    b.canPlayVorbis = function() {
        var a = document.createElement("video");
        return !(!a.canPlayType || !a.canPlayType('video/ogg; codecs="theora, vorbis"').replace(/no/, ""))
    };
    b.canPlayMp4 = function() {
        var a = document.createElement("video");
        return !(!a.canPlayType || !a.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, ""))
    };
    b.canPlayWebM = function() {
        var a = document.createElement("video");
        return !(!a.canPlayType || !a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, ""))
    };
    b.audioSupport = function() {
        return !!document.createElement("audio").canPlayType
    };
    b.canPlayMp3 = function() {
        var a = document.createElement("audio");
        return !(!a.canPlayType || !a.canPlayType("audio/mpeg;").replace(/no/, ""))
    };
    b.canPlayOgg = function() {
        var a =
            document.createElement("audio");
        return !(!a.canPlayType || !a.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ""))
    };
    b.volumeCanBeSet = function() {
        var a = document.createElement("audio");
        if (!a) return !1;
        a.volume = 0;
        return 0 == a.volume ? !0 : !1
    };
    b.hasPointerEvent = function() {
        return !!c.navigator.msPointerEnabled
    };
    b.isMobile = function() {
        return b.hasPointerEvent && 1 < navigator.msMaxTouchPoints ? !0 : /Android|webOS|iPhone|iPad|iPod|sony|BlackBerry/i.test(navigator.userAgent)
    };
    b.isMac = function() {
        return -1 != navigator.appVersion.toLowerCase().indexOf("mac")
    };
    b.isWin = function() {
        return -1 != navigator.appVersion.toLowerCase().indexOf("win")
    };
    b.isIOS = function() {
        return navigator.userAgent.match(/(iPad|iPhone|iPod)/g)
    };
    b.isAndroid = function() {
        return -1 < navigator.userAgent.indexOf("Android")
    };
    b.isiPad = function() {
        return -1 < navigator.userAgent.indexOf("iPad")
    };
    b.isiPhoneIpod = function() {
        var a = navigator.userAgent;
        return -1 < a.indexOf("iPhone") || -1 < a.indexOf("iPod")
    };
    b.isSafari = function() {
        return 0 < Object.prototype.toString.call(c.HTMLElement).indexOf("Constructor")
    };
    b.isChrome =
        function() {
            var a = navigator.userAgent,
                b = !(0 < Object.prototype.toString.call(c.HTMLElement).indexOf("Constructor")) && "WebkitTransform" in document.documentElement.style;
            (-1 < a.indexOf("iPhone") || -1 < a.indexOf("iPod") || -1 < a.indexOf("iPad")) && a.match("CriOS") && (b = !0);
            return b
        };
    b.isOpera = function() {
        return !(!c.opera || !c.opera.version)
    };
    b.isIE = function() {
        var a = c.navigator.userAgent,
            b = a.indexOf("MSIE ");
        if (0 < b) return parseInt(a.substring(b + 5, a.indexOf(".", b)), 10);
        if (0 < a.indexOf("Trident/")) return b = a.indexOf("rv:"),
            parseInt(a.substring(b + 3, a.indexOf(".", b)), 10);
        b = a.indexOf("Edge/");
        return 0 < b ? parseInt(a.substring(b + 5, a.indexOf(".", b)), 10) : !1
    };
    b.parseXML = function(a) {
        if (c.ActiveXObject && c.GetObject) {
            var b = new ActiveXObject("Microsoft.XMLDOM");
            b.loadXML(a);
            return b
        }
        if (c.DOMParser) return (new DOMParser).parseFromString(a, "text/xml");
        throw Error("No XML parser available");
    };
    b.baseUrl = function() {
        return c.location.href.replace(c.location.hash, "")
    };
    b.protocol = function() {
        return c.location.protocol
    };
    b.qualifyURL = function(a) {
        var b =
            document.createElement("a");
        b.href = a;
        return b.href
    };
    b.hasLocalStorage = function() {
        try {
            return "localStorage" in c && null !== c.localStorage
        } catch (a) {
            return !1
        }
    };
    b.validateEmail = function(a) {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(a) ? !0 : !1
    };
    b.hasDownloadSupport = function(a) {
        return "download" in document.createElement("a")
    };
    b.getScrollOffsets = function() {
        if (null != c.pageXOffset) return {
            x: c.pageXOffset,
            y: c.pageYOffset
        };
        if ("CSS1Compat" == document.compatMode) return {
            x: document.documentElement.scrollLeft,
            y: document.documentElement.scrollTop
        }
    };
    b.getViewportSize = function() {
        return b.hasPointerEvent && 1 < navigator.msMaxTouchPoints ? {
            w: document.documentElement.clientWidth || c.innerWidth,
            h: document.documentElement.clientHeight || c.innerHeight
        } : b.isMobile ? {
            w: c.innerWidth,
            h: c.innerHeight
        } : {
            w: document.documentElement.clientWidth || c.innerWidth,
            h: document.documentElement.clientHeight || c.innerHeight
        }
    };
    b.getViewportMouseCoordinates = function(a) {
        var c = b.getScrollOffsets();
        return a.touches ? {
            screenX: void 0 == a.touches[0] ? a.touches.pageX - c.x : a.touches[0].pageX -
                c.x,
            screenY: void 0 == a.touches[0] ? a.touches.pageY - c.y : a.touches[0].pageY - c.y
        } : {
            screenX: void 0 == a.clientX ? a.pageX - c.x : a.clientX,
            screenY: void 0 == a.clientY ? a.pageY - c.y : a.clientY
        }
    };
    b.supportCalc = function() {
        return checkCalc("-webkit-") || checkCalc("-moz-") || checkCalc()
    };
    checkCalc = function(a) {
        a = a || "";
        var b = document.createElement("div");
        b.style.cssText = a + "width: calc(1px);";
        return !!b.style.length
    };
    b.supportsTransitions = function() {
        var a = document.createElement("p").style;
        return "transition" in a || "WebkitTransition" in
            a || "MozTransition" in a || "msTransition" in a || "OTransition" in a
    };
    b.hasCanvas = function() {
        return !!document.createElement("canvas")
    };
    b.hasFullscreen = function() {
        return b.test.requestFullscreen || b.test.mozRequestFullScreen || b.test.msRequestFullscreen || b.test.oRequestFullscreen || b.test.webkitRequestFullScreen
    };
    b.preventSelect = function(a) {
        jQuery(a).each(function() {
            jQuery(this).attr("unselectable", "on").css({
                "-moz-user-select": "none",
                "-webkit-user-select": "none",
                "user-select": "none"
            }).each(function() {
                this.onselectstart =
                    function() {
                        return !1
                    }
            })
        })
    };
    b.disableSelection = function(a) {
        try {
            a.style.userSelect = "none"
        } catch (g) {}
        try {
            a.style.MozUserSelect = "none"
        } catch (g) {}
        try {
            a.style.webkitUserSelect = "none"
        } catch (g) {}
        try {
            a.style.khtmlUserSelect = "none"
        } catch (g) {}
        try {
            a.style.oUserSelect = "none"
        } catch (g) {}
        try {
            a.style.msUserSelect = "none"
        } catch (g) {}
        try {
            a.msUserSelect = "none"
        } catch (g) {}
        a.onselectstart = function() {
            return !1
        }
    };
    b.counter = function(a) {
        return 9 > a ? "0" + (a + 1) : a + 1
    };
    b.isNumber = function(a) {
        return !isNaN(parseFloat(a)) && isFinite(a)
    };
    b.getRandomInt = function(a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a
    };
    b.formatCurrentTime = function(a) {
        a = Math.round(a);
        minutes = Math.floor(a / 60);
        minutes = 10 <= minutes ? minutes : "" + minutes;
        a = Math.floor(a % 60);
        return minutes + ":" + (10 <= a ? a : "0" + a)
    };
    b.formatDuration = function(a) {
        a = Math.round(a);
        minutes = Math.floor(a / 60);
        minutes = 10 <= minutes ? minutes : "" + minutes;
        a = Math.floor(a % 60);
        return minutes + ":" + (10 <= a ? a : "0" + a)
    };
    b.hmsToSecondsOnly = function(a) {
        a = a.split(":");
        for (var b = 0, d = 1; 0 < a.length;) b += d * parseInt(a.pop()),
            d *= 60;
        return b
    };
    b.checkBoolean = function(a) {
        if ("string" === typeof a) switch (a.toLowerCase()) {
            case "true":
            case "yes":
            case "1":
                return !0;
            case "false":
            case "no":
            case "0":
            case null:
                return !1;
            default:
                return !!a
        } else if ("boolean" === typeof a) return !!a
    };
    c.AWPUtils = b
})(window);
(function(c, b) {
    c.AWPTooltip = function(a) {
        b("body");
        b(document);
        var g = b(c),
            d = a.parent,
            z = !1,
            k;
        this.setData = function() {
            k = 0 < d.find(".awp-tooltip").length ? d.find(".awp-tooltip") : b('<div class="awp-tooltip"><p class="awp-tooltip-inner"></p></div>').appendTo(d).hide()
        };
        this.show = function() {};
        this.hide = function() {
            k.hide()
        };
        this.seekbar = function(a, b, c, v) {
            if (z) return !1;
            k.addClass("awp-tooltip-num").find("p").text(AWPUtils.formatCurrentTime(c) + " / " + AWPUtils.formatDuration(v));
            c = d.offset().left;
            v = d.offset().top;
            b.offset();
            var t = b.offset().top;
            b.outerWidth();
            var C = b.outerHeight(),
                u = k.outerWidth(),
                J = k.outerHeight(),
                w = g.width();
            g.height();
            var y = g.scrollLeft();
            g.scrollTop();
            a = a.pageX;
            var h = a - c;
            if (b.hasClass("awp-tooltip-top")) {
                var K = h - u / 2;
                var N = t - v - J
            } else b.hasClass("awp-tooltip-bottom") && (K = h - u / 2, N = t - v + C + 15);
            K + u + c - y > w && (K = a - c - u);
            0 > K + c - y && (K = a - c);
            K + u + c - y > w && (K = w - u - c + y);
            k.css({
                left: parseInt(K, 10) + "px",
                top: parseInt(N, 10) + "px"
            }).show()
        };
        this.circle = function(a, b, c, v) {
            if (z) return !1;
            k.addClass("awp-tooltip-num").find("p").text(AWPUtils.formatCurrentTime(c) +
                " / " + AWPUtils.formatDuration(v));
            a = d.offset().left;
            c = d.offset().top;
            v = b.offset().left;
            var t = b.offset().top,
                g = b.outerWidth();
            b.outerHeight();
            var C = k.outerWidth(),
                u = k.outerHeight();
            if (b.hasClass("awp-tooltip-top")) {
                var w = v - a + g / 2 - C / 2;
                var y = t - c - u - 10
            }
            k.css({
                left: parseInt(w, 10) + "px",
                top: parseInt(y, 10) + "px"
            }).show()
        };
        this.volume = function(a, b, c) {
            if (z) return !1;
            k.addClass("awp-tooltip-num").find("p").text(c + " %");
            c = d.offset().left;
            var v = d.offset().top,
                g = b.offset().left,
                t = b.offset().top,
                C = b.outerWidth(),
                u =
                b.outerHeight(),
                w = k.outerWidth(),
                y = k.outerHeight(),
                h = a.pageX - c;
            a = a.pageY - v;
            if (b.hasClass("awp-tooltip-top"))
                if (b.hasClass("awp-vertical")) {
                    var K = g - c + C / 2 - w / 2;
                    var N = a - y - 10
                } else K = h - w / 2, N = t - v - y;
            else b.hasClass("awp-tooltip-bottom") ? b.hasClass("awp-vertical") ? (K = g - c + C / 2 - w / 2, N = a + y + 10) : (K = h - w / 2, N = t - v + u + 10) : b.hasClass("awp-tooltip-left") && b.hasClass("awp-vertical") && (K = g - c - w - 5, N = a - y / 2);
            k.css({
                left: parseInt(K, 10) + "px",
                top: parseInt(N, 10) + "px"
            }).show()
        };
        this.controls = function(a, b) {
            if (z) return !1;
            k.removeClass("awp-tooltip-num").find("p").text(b);
            var c = d.offset().left,
                g = d.offset().top,
                t = a.offset().left,
                q = a.offset().top,
                u = a.outerWidth(),
                J = a.outerHeight(),
                w = k.outerWidth(),
                y = k.outerHeight();
            a.hasClass("awp-tooltip-top") ? (c = t - c + u / 2 - w / 2, g = q - g - y) : a.hasClass("awp-tooltip-top-right") ? (c = t - c, g = q - g - y) : a.hasClass("awp-tooltip-top-left") ? (c = t - c + u - w, g = q - g - y) : a.hasClass("awp-tooltip-right") ? (c = t - c + u + 10, g = q - g + J / 2 - y / 2) : a.hasClass("awp-tooltip-bottom") ? (c = t - c + u / 2 - w / 2, g = q - g + J + 10) : a.hasClass("awp-tooltip-bottom-left") ? (c = t - c + u - w, g = q - g + J + 10) : a.hasClass("awp-tooltip-left") ?
                (c = t - c - 10 - w, g = q - g + J / 2 - y / 2) : (c = t - c + u / 2 - w / 2, g = q - g - y);
            k.css({
                left: parseInt(c, 10) + "px",
                top: parseInt(g, 10) + "px"
            }).show()
        };
        this.setValue = function(a) {
            k.find("p").text(a)
        };
        this.setState = function(a) {
            z = a
        };
        this.setData()
    }
})(window, jQuery);
(function(c, b) {
    c.AWPTouchManager = function(a) {
        function g(a) {
            q || b(u).trigger("AWPTouchManager.MOUSE_MOVE", {
                elem: b(a.currentTarget),
                e: a
            })
        }

        function d(a) {
            q || (b(a.currentTarget).off("mousemove", g).off("mouseleave", d), C.off("mouseleave", z), b(u).trigger("AWPTouchManager.MOUSE_LEAVE", {
                elem: b(a.currentTarget),
                e: a
            }))
        }

        function z(a) {
            b(a.currentTarget).off("mousemove", g).off("mouseleave", d);
            C.off("mouseleave", z);
            b(u).trigger("AWPTouchManager.MOUSE_LEAVE", {
                elem: b(a.currentTarget),
                e: a
            })
        }

        function k(a) {
            y && (h = [a.pageX,
                a.pageY
            ]);
            if (!q) {
                var c;
                if ("touchstart" == a.type)
                    if ((c = a.originalEvent.touches) && 0 < c.length) c = c[0];
                    else return !1;
                else c = a.originalEvent, a.preventDefault();
                q = !0;
                C.on(J, function(a) {
                    a: if (!y || a.pageX !== h[0] || a.pageY !== h[1]) {
                        if ("touchmove" == a.type) {
                            if (a.originalEvent.touches && a.originalEvent.touches.length) var c = a.originalEvent.touches;
                            else if (a.originalEvent.changedTouches && a.originalEvent.changedTouches.length) c = a.originalEvent.changedTouches;
                            else break a;
                            if (1 < c.length) break a;
                            c = c[0]
                        } else c = a.originalEvent;
                        a.preventDefault();
                        b(u).trigger("AWPTouchManager.DRAG_MOVE", {
                            elem: E,
                            point: c,
                            e: a
                        })
                    }
                }).on(w, function(a) {
                    t(a)
                });
                E.on(w, function(a) {
                    t(a)
                });
                b(u).trigger("AWPTouchManager.DRAG_START", {
                    elem: E,
                    point: c,
                    e: a
                })
            }
            return !1
        }

        function t(a) {
            if (q) {
                q = !1;
                C.off(J).off(w);
                E.off(w);
                if ("touchend" == a.type) {
                    if (a.originalEvent.touches && a.originalEvent.touches.length) var c = a.originalEvent.touches;
                    else if (a.originalEvent.changedTouches && a.originalEvent.changedTouches.length) c = a.originalEvent.changedTouches;
                    else return !1;
                    if (1 < c.length) return !1;
                    c = c[0]
                } else c = a.originalEvent;
                a.preventDefault();
                v || C.off("mouseleave", z);
                b(u).trigger("AWPTouchManager.DRAG_RELEASE", {
                    name: "DRAG_RELEASE",
                    elem: E,
                    point: c,
                    e: a
                })
            }
            return !1
        }
        var u = this;
        b("body");
        var C = b(document);
        b(c);
        var v = AWPUtils.isMobile(),
            E, q = !1,
            I, J, w, y = AWPUtils.isChrome(),
            h = [];
        this.setData = function() {
            "ontouchstart" in c ? (I = "touchstart.ap mousedown.ap", J = "touchmove.ap mousemove.ap", w = "touchend.ap mouseup.ap") : c.PointerEvent ? (I = "pointerdown.ap", J = "pointermove.ap", w = "pointerup.ap") : (I = "mousedown.ap",
                J = "mousemove.ap", w = "mouseup.ap");
            var h, N = a.length;
            for (h = 0; h < N; h++) a[h].on(I, function(a) {
                a.preventDefault();
                if (q) return !1;
                E = b(this);
                k(a);
                return !1
            });
            if (!v)
                for (h = 0; h < N; h++) a[h].on("mouseenter", function(a) {
                    if (q) return !1;
                    E = b(this).on("mouseleave", d);
                    if (E.data("apmove")) E.on("mousemove", g);
                    C.on("mouseleave", z);
                    b(u).trigger("AWPTouchManager.MOUSE_ENTER", {
                        elem: E,
                        e: a
                    })
                })
        };
        this.isDrag = function() {
            return q
        };
        this.setData()
    }
})(window, jQuery);
(function(c, b) {
    c.AWPDownloadManager = function(a) {
        function g(a, c, g) {
            b.ajax({
                type: "POST",
                url: t + "includes/mail.php",
                data: "mail=" + a + "&title=" + c + "&path=" + g
            }).done(function(a) {
                v = !1
            }).fail(function(a, b, c) {
                console.log("Send email error: " + a.responseText);
                d();
                v = !1
            });
            C.css({
                marginTop: parseInt(-C.height() / 2, 10) + "px",
                display: "block"
            }).stop().animate({
                opacity: 1
            }, {
                duration: 500
            });
            I && clearTimeout(I);
            I = setTimeout(d, 2E3)
        }

        function d() {
            I && clearTimeout(I);
            C.stop().animate({
                opacity: 0
            }, {
                duration: 500,
                complete: function() {
                    C.css("display",
                        "none")
                }
            })
        }
        var z = AWPUtils.isMobile();
        b("body");
        b(document);
        var k = a.parent,
            t = a.settings.sourcePath,
            u, C, v, E, q, I;
        this.setData = function() {
            u = 0 < k.find("iframe.awp-dl-iframe").length ? k.find("iframe.awp-dl-iframe") : b('<iframe class="awp-dl-iframe"/>').css({
                position: "absolute",
                left: "-10000px",
                display: "none"
            }).appendTo(k);
            z && (C = k.find(".awp-download-confirm"))
        };
        this.download = function(a, b) {
            if (v) return !1;
            if ("file:" == c.location.protocol) return console.log("Downloading files locally is not possible! This requires online server connection."),
                !1;
            var d = a;
            var h = b;
            d.indexOf("\\") && (d = d.replace(/\\/g, "/"));
            d.match(/^http([s]?):\/\/.*/) || (d = AWPUtils.qualifyURL(d));
            z || (h = h.replace(/[^A-Z0-9\-\_\.]+/ig, "_"));
            50 < h.length && (h = h.substr(0, 50) + "...");
            z || /\.(mp3)$/i.test(h) || (h += ".mp3");
            if (z) {
                v = !0;
                if (!E) {
                    for (var k = prompt("Please enter your email address where download link will be sent:");
                        (!AWPUtils.validateEmail(k) || AWPUtils.isEmpty(k)) && null != k;) k = prompt("Please enter a valid email address:");
                    (q = k) && (E = !0)
                }
                q ? g(q, h, d) : v = !1
            } else u.attr("src", t + "includes/dl.php?path=" +
                d + "&title=" + h)
        };
        this.setData()
    }
})(window, jQuery);
(function(c, b) {
    c.AWPShareManager = function(a) {
        AWPUtils.isMobile();
        var b = a.settings.facebookAppId,
            d = "https:" == c.location.protocol ? "https:" : "http:";
        this.setData = function() {
            if (AWPUtils.isEmpty(b)) console.log("facebookAppId has not been set in settings!");
            else if (!c.FB && b && !document.body.querySelector("#fb-root")) {
                var a = document.createElement("script");
                a.text = "window.fbAsyncInit=function(){FB.init({appId:'" + b + "',status:true,xfbml:true})};(function(e,t,n){var r,i=e.getElementsByTagName(t)[0];if(e.getElementById(n)){return}r=e.createElement(t);r.id=n;r.src='" + d +
                    "//connect.facebook.net/en_US/all.js';i.parentNode.insertBefore(r,i)})(document,'script','facebook-jssdk')";
                var k = document.createElement("div");
                k.id = "fb-root";
                document.body.appendChild(k);
                document.body.appendChild(a)
            }
        };
        this.share = function(a, b, g) {
            var k = (c.screen.width - 600) / 2,
                z = (c.screen.height - 300) / 2,
                t = b.description || "",
                E = b.thumb ? AWPUtils.qualifyURL(b.thumb) : "";
            b = b.share;
            if ("facebook" == a) {
                var q = d + "//www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(b);
                if (c.FB) {
                    c.FB && FB.ui({
                        method: "feed",
                        name: document.title,
                        link: b,
                        picture: E,
                        caption: g
                    });
                    return
                }
            } else "twitter" == a ? q = d + "//twitter.com/share?url=" + encodeURIComponent(b) + "&text=" + encodeURIComponent(g) : "googleplus" == a ? q = d + "//plus.google.com/share?url=" + encodeURIComponent(b) : "tumblr" == a && (q = d + "//www.tumblr.com/share/link?url=" + encodeURIComponent(b) + "&amp;name=" + encodeURIComponent(g) + "&amp;description=" + encodeURIComponent(t));
            q && c.open(q, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=600,height=300,left=" + k + ",top=" + z + "")
        };
        this.setData()
    }
})(window,
    jQuery);
(function(c, b) {
    c.AWPSoundLoader = function(a) {
        function g() {
            E.length ? (v = E.shift(), I = 0, y = v.limit || 500, d()) : b(u).trigger("AWPSoundLoader.END_LOAD", [q])
        }

        function d() {
            if ("file:" == c.location.protocol) alert("Using " + v.type + " locally is not possible! This requires online server connection!"), g();
            else {
                var a = v.type,
                    d = v.path;
                "podcast" == a ? (a = C + "?url=" + encodeURIComponent(d), b.ajax({
                    url: a,
                    dataType: "json",
                    cache: !1
                }).done(function(a) {
                    var c = AWPUtils.parseXML(a.contents),
                        d, h, k, z = 0;
                    b(c).find("image").length && b(c).find("image").attr("href") ?
                        k = b(c).find("image").attr("href") : b(a.contents).find("itunes\\:image").length && b(a.contents).find("itunes\\:image").attr("href") && (k = b(a.contents).find("itunes\\:image").attr("href"));
                    b(c).find("item").each(function() {
                        if (z == y) return !1;
                        d = b(this);
                        h = b.extend(!0, {}, v);
                        h.type = "audio";
                        h.mp3 = d.find("enclosure").attr("url");
                        "undefined" === typeof h.download && (h.download = h.mp3);
                        !h.title && d.find("title").length && (h.title = d.find("title").text());
                        !h.artist && d.find("author").length && (h.artist = d.find("author").text());
                        !h.description && d.find("description").length && (h.description = d.find("description").text());
                        !h.duration && d.find("duration").length && (h.duration = d.find("duration").text());
                        h.thumb || (d.find("image").length && d.find("image").attr("href") ? h.thumb = d.find("image").attr("href") : k && (h.thumb = k));
                        "undefined" === typeof h.share && d.find("link").length && (h.share = d.find("link").text());
                        q.push(h);
                        z++
                    });
                    g()
                }).fail(function(a, b, c) {
                    console.log(a, b, c);
                    g()
                })) : "soundcloud" == a && (J ? k(d) : z(d))
            }
        }

        function z(a) {
            if (AWPUtils.isEmpty(w)) return alert("soundCloudAppId has not been set!"),
                g(), !1;
            var b = document.createElement("script");
            b.src = "https://connect.soundcloud.com/sdk.js";
            var d = document.getElementsByTagName("script")[0];
            d.parentNode.insertBefore(b, d);
            var h = setInterval(function() {
                c.SC && (h && clearInterval(h), SC.initialize({
                    client_id: w
                }), J = !0, k(a))
            }, 100)
        }

        function k(a) {
            SC.get(a, {
                limit: 200,
                linked_partitioning: 1
            }, function(a, b) {
                var c;
                if (b) console.log("Error getSoundCloudPage: " + b), g();
                else {
                    if ("track" == a.kind) t(a);
                    else if ("playlist" == a.kind) {
                        var d = a.tracks.length;
                        if (q.length + d >= y) {
                            d =
                                y - q.length;
                            var h = !0
                        }
                        for (c = 0; c < d; c++) t(a.tracks[c], !0)
                    } else if (a.collection)
                        for (d = a.collection.length, q.length + d >= y && (d = y - q.length, h = !0), c = 0; c < d; c++) t(a.collection[c], !0);
                    a.next_href && !h ? k(a.next_href) : g()
                }
            })
        }

        function t(a, b) {
            if (a.streamable && a.stream_url) {
                var c = jQuery.extend(!0, {}, v);
                c.deeplink && "undefined" !== typeof b && (c.deeplink += (I + 1).toString(), I++);
                c.type = "audio";
                a.duration && (c.duration = a.duration);
                c.mp3 = a.stream_url + "?client_id=" + w;
                "undefined" === typeof c.download && a.downloadable && a.download_url &&
                    (c.download = c.mp3.replace(/\/stream\\?/, "/download"));
                !c.title && a.title && (c.title = a.title);
                !c.description && a.description && (c.description = a.description);
                !c.thumb && a.artwork_url && (c.thumb = a.artwork_url);
                c.favoritings_count = parseInt(a.favoritings_count ? a.favoritings_count : 0, 10);
                c.playback_count = parseInt(a.playback_count ? a.playback_count : 0, 10);
                c.hotness = c.favoritings_count + c.playback_count;
                "undefined" === typeof c.share && a.permalink_url && (c.share = a.permalink_url);
                q.push(c)
            }
        }
        var u = this,
            C = a.settings.sourcePath +
            "includes/ba-simple-proxy.php",
            v, E = [],
            q = [],
            I, J, w = a.settings.soundCloudAppId;
        b("<div/>");
        var y;
        this.setData = function(a) {
            q = [];
            E = b.extend(!0, [], [a]);
            g()
        }
    }
})(window, jQuery);
(function(c, b) {
    c.AWPPlaylistManager = function(a) {
        function c() {
            3 > d.playlistItems || (d.randomArr = AWPUtils.randomiseArray(d.playlistItems))
        }
        var d = this;
        this.loopingOn = a.loopingOn;
        this.randomPlay = a.randomPlay;
        this.playlistItems;
        this.lastInOrder = !1;
        this.counter = -1;
        this.lastPlayedFromPlaylistClick;
        this.lastRandomCounter;
        this.randomPaused = !1;
        this.randomArr = [];
        this.playlistSelect = !1;
        this.setCounter = function(a, k) {
            "undefined" === typeof k && (k = !0);
            d.counter = k ? d.counter + parseInt(a, 10) : parseInt(a, 10);
            if (isNaN(d.counter)) alert("AWPPlaylistManager message: No active media, counter = " +
                d.counter);
            else if (d.lastInOrder = !1, d.loopingOn) {
                if (d.randomPlay)
                    if (d.counter > d.playlistItems - 1) {
                        d.counter = d.randomArr[d.playlistItems - 1];
                        c();
                        if (d.randomArr[0] == d.counter) {
                            var g = d.randomArr.splice(0, 1);
                            d.randomArr.push(g)
                        }
                        d.counter = 0;
                        b(d).trigger("AWPPlaylistManager.PLAYLIST_END_ALERT")
                    } else 0 > d.counter && (d.counter = d.randomArr[0], c(), d.randomArr[d.playlistItems - 1] == d.counter && (g = d.randomArr.splice(d.playlistItems - 1, 1), d.randomArr.unshift(g)), d.counter = d.playlistItems - 1);
                else d.counter > d.playlistItems -
                    1 ? (d.counter = 0, b(d).trigger("AWPPlaylistManager.PLAYLIST_END_ALERT")) : 0 > d.counter && (d.counter = d.playlistItems - 1);
                b(d).trigger("AWPPlaylistManager.COUNTER_READY")
            } else d.counter > d.playlistItems - 1 ? (d.counter = d.playlistItems - 1, d.lastInOrder = !0) : 0 > d.counter && (d.counter = 0), d.lastInOrder ? b(d).trigger("AWPPlaylistManager.PLAYLIST_END") : b(d).trigger("AWPPlaylistManager.COUNTER_READY")
        };
        this.getCounter = function() {
            return d.randomPlay ? d.playlistSelect ? d.counter : d.randomArr[d.counter] : d.counter
        };
        this.advanceHandler =
            function(a) {
                d.playlistSelect = !1;
                d.randomPaused ? (d.randomPaused = !1, d.lastRandomCounter + a > d.playlistItems - 1 ? (d.counter = d.playlistItems - 1, b(d).trigger("AWPPlaylistManager.COUNTER_READY")) : 0 > d.lastRandomCounter + a ? (d.counter = 0, b(d).trigger("AWPPlaylistManager.COUNTER_READY")) : d.setCounter(d.lastRandomCounter + a, !1)) : d.setCounter(a)
            };
        this.processPlaylistRequest = function(a) {
            d.playlistSelect = !1;
            d.randomPlay && (d.playlistSelect = !0, d.lastPlayedFromPlaylistClick = a, d.randomPaused || (d.lastRandomCounter = d.counter,
                d.randomPaused = !0));
            this.setCounter(a, !1)
        };
        this.setPlaylistItems = function(a, b) {
            "undefined" === typeof b && (b = !0);
            b && (d.counter = -1);
            d.playlistItems = a;
            d.randomPlay && c()
        };
        this.reSetCounter = function(a) {
            "undefined" === typeof a ? d.counter = -1 : (a = parseInt(a, 10), d.playlistItems ? (a > d.playlistItems - 1 ? a = d.playlistItems - 1 : 0 > a && (a = 0), d.counter = a) : d.counter = -1)
        };
        this.setRandom = function(a) {
            d.randomPlay = a;
            d.randomPlay && c();
            if (d.randomPlay) {
                var b = d.randomArr.length;
                for (a = 0; a < b; a++)
                    if (d.randomArr[a] == d.counter) {
                        if (0 == a) break;
                        a = d.randomArr.splice(a, 1);
                        d.randomArr.unshift(parseInt(a, 10));
                        break
                    } d.counter = 0
            } else d.randomPaused ? (d.counter = d.lastPlayedFromPlaylistClick, d.randomPaused = !1) : d.counter = d.randomArr[d.counter]
        };
        this.setLooping = function(a) {
            d.loopingOn = a
        }
    }
})(window, jQuery);
(function(c) {
    c.fn.awp = function(b) {
        function a(a) {
            if (!m) return !1;
            0 < A ? (Pa = A, A = 0) : A = Pa;
            g();
            "undefined" !== typeof a && "undefined" !== typeof Q && void 0 != oa.attr("data-awptooltip") && Q.controls(oa, 0 == A ? "UnMute" : "Mute")
        }

        function g(a) {
            "undefined" !== typeof a && (A = a);
            "undefined" !== typeof A && (p.volume = A, "undefined" !== typeof e && e.setVolume(A));
            pa && (aa ? ib.css("width", A * U + "px") : ib.css("height", A * U + "px"));
            0 == A ? pa && oa.find("i").removeClass("fa-volume-up fa-volume-down").addClass("fa-volume-off") : pa && oa.find("i").removeClass("fa-volume-off fa-volume-down").addClass("fa-volume-up");
            awpVolumeChange(x, D, A)
        }

        function d(a) {
            a.preventDefault();
            if (!m) return !1;
            var f = c(a.currentTarget),
                b = f.attr("data-id");
            if (b == n.getCounter()) return !1;
            Qa = !0;
            n.processPlaylistRequest(b);
            awpPlaylistItemClick(x, D, f, b, a)
        }

        function z(a) {
            a.preventDefault();
            if (!m) return !1;
            a = c(a.currentTarget);
            var f = a.attr("data-id");
            if (f == n.getCounter()) return !1;
            a.removeClass("awp-playlist-non-selected").addClass("awp-playlist-selected");
            awpPlaylistItemRollover(x, D, a, f)
        }

        function k(a) {
            a.preventDefault();
            if (!m) return !1;
            a = c(a.currentTarget);
            var f = a.attr("data-id");
            if (f == n.getCounter()) return !1;
            a.removeClass("awp-playlist-selected").addClass("awp-playlist-non-selected");
            awpPlaylistItemRollout(x, D, a, f)
        }

        function t(f) {
            f.preventDefault();
            if (!m) return !1;
            f = c(f.currentTarget);
            f.hasClass("awp-prev-toggle") ? x.previousMedia() : f.hasClass("awp-playback-toggle") ? x.togglePlayback() : f.hasClass("awp-next-toggle") ? x.nextMedia() : f.hasClass("awp-loop-toggle") ? (R = !R, n.setLooping(R), R ? ia.find("i").removeClass("awp-icon-color").addClass("awp-icon-rollover-color") :
                    ia.find("i").removeClass("awp-icon-rollover-color").addClass("awp-icon-color")) : f.hasClass("awp-player-volume") ? f.hasClass("awp-toggle-mute") && a() : f.hasClass("awp-random-toggle") ? (S = !S, n.setRandom(S), S ? ja.find("i").removeClass("awp-icon-color").addClass("awp-icon-rollover-color") : ja.find("i").removeClass("awp-icon-rollover-color").addClass("awp-icon-color")) : f.hasClass("awp-sort-alpha") ? (x.sort("title", za), (za = !za) ? f.find("i").removeClass("fa-sort-alpha-desc").addClass("fa-sort-alpha-asc") : f.find("i").removeClass("fa-sort-alpha-asc").addClass("fa-sort-alpha-desc")) :
                f.hasClass("awp-share-item") && "undefined" !== typeof jb && l.share && !AWPUtils.isEmpty(l.share) && jb.share(f.attr("data-type").toLowerCase(), l, qa(n.getCounter()))
        }

        function u(a) {
            if (!m) return !1;
            a.preventDefault();
            if ("undefined" !== typeof Ra && Ra.isDrag()) return !1;
            a = c(a.currentTarget);
            var f = a.find("i");
            f.hasClass("awp-icon-color") && f.removeClass("awp-icon-color").addClass("awp-icon-rollover-color");
            "undefined" !== typeof Q && void 0 != a.attr("data-awptooltip") && (f = a.hasClass("awp-player-volume") ? 0 == A ? "UnMute" : "Mute" :
                a.attr("data-awptooltip"), Q.controls(a, f))
        }

        function C(a) {
            if (!m) return !1;
            a.preventDefault();
            a = c(a.currentTarget);
            var f = a.find("i");
            a.hasClass("awp-random-toggle") && S || a.hasClass("awp-loop-toggle") && R || f.hasClass("awp-icon-rollover-color") && f.removeClass("awp-icon-rollover-color").addClass("awp-icon-color");
            "undefined" !== typeof Q && Q.hide()
        }

        function v() {
            if (-1 != n.getCounter()) {
                var a = Z;
                var c = G.children("div.awp-playlist-item[data-id=" + a + "]"),
                    b = c.find(".awp-playlist-non-selected, .awp-playlist-selected");
                c.length && (a = c.attr("data-id"), b.removeClass("awp-playlist-selected").addClass("awp-playlist-non-selected"), "undefined" !== typeof awpPlaylistItemEnabled && awpPlaylistItemEnabled(x, D, c, a))
            }
        }

        function E(a) {
            Aa = c.ajax({
                url: ra + "peaks/peaks.php",
                type: "post",
                data: [{
                    name: "action",
                    value: "awp_read_peaks"
                }, {
                    name: "id",
                    value: a
                }, {
                    name: "path",
                    value: l.peakdir || null
                }],
                dataType: "json"
            }).done(function(a) {
                a.length ? (e.backend.peaks = a, Ba = !0, Sa ? e.drawBuffer() : e.load(l.mp3, e.backend.peaks)) : (e.backend.supportsWebAudio() ? (Ta = !0, l.remote && (sa.css("opacity", 1).html("Loading waveform..."), e.setSkipArrayBuffer(!0), J())) : l.peakImage && (ea = !0, Ua.empty().append('<img src="' + l.peakImage.load + '" alt="load"/>'), ka.empty().append('<img src="' + l.peakImage.progress + '" alt="progress"/>'), T.css("display", "block"), ka.width(T.width()), T.removeClass("awp-hidden").addClass("awp-visible"), Ca()), e.load(l.mp3))
            }).fail(function(a, f, c) {
                console.log(a, f, c)
            })
        }

        function q(a, b) {
            c.ajax({
                url: ra + "peaks/peaks.php",
                type: "post",
                data: [{
                        name: "action",
                        value: "awp_write_peaks"
                    },
                    {
                        name: "peaks",
                        value: a
                    }, {
                        name: "id",
                        value: b
                    }, {
                        name: "path",
                        value: l.peakdir || null
                    }
                ],
                dataType: "json"
            }).done(function(a) {}).fail(function(a, f, c) {
                console.log(a.responseText)
            })
        }

        function I() {
            l.peakData ? (e.backend.peaks = l.peakData, Ba = !0, e.drawBuffer(), Sa ? e.drawBuffer() : e.load(l.mp3, e.backend.peaks)) : l.peakImage ? (ea = !0, Ua.empty().append('<img src="' + l.peakImage.load + '" alt="load"/>'), ka.empty().append('<img src="' + l.peakImage.progress + '" alt="progress"/>'), T.css("display", "block"), ka.width(T.width()), T.removeClass("awp-hidden").addClass("awp-visible"),
                Ca(), e.setSkipArrayBuffer(!0), e.load(l.mp3)) : E(l.title)
        }

        function J() {
            Da = c.ajax({
                url: ra + "peaks/remote_dl.php",
                type: "post",
                data: [{
                    name: "id",
                    value: l.mp3
                }, {
                    name: "title",
                    value: l.title
                }, {
                    name: "path",
                    value: l.peakdir || null
                }],
                dataType: "json"
            }).done(function(a) {
                e._getArrayBuffer(a)
            }).fail(function(a, c, b) {
                console.log(a, c, b)
            })
        }

        function w(a) {
            W = !0;
            kb();
            O && Va();
            var f = Eb.find("#" + a);
            if (0 == f.length) return alert('Failed to select playlist! Check activePlaylist option in settings. Make sure that element: "' + a + '" exist in awp-playlist-list!'),
                Wa.css("display", "none"), W = !1;
            "undefined" !== typeof awpPlaylistStartLoad && awpPlaylistStartLoad(x, D);
            var b, d;
            f.find(".awp-playlist-item").each(function() {
                d = c(this);
                b = y(d);
                X.push(b)
            });
            B = X.length;
            h()
        }

        function y(a) {
            var f = {};
            f.origclasses = a.attr("class");
            f.type = a.attr("data-type");
            "audio" == f.type ? f.mp3 = a.attr("data-mp3") : void 0 == a.attr("data-path") || AWPUtils.isEmpty(a.attr("data-path")) || (f.path = f.id = a.attr("data-path"));
            void 0 == a.attr("data-peak-load") || AWPUtils.isEmpty(a.attr("data-peak-load")) || void 0 ==
                a.attr("data-peak-progress") || AWPUtils.isEmpty(a.attr("data-peak-progress")) || (f.peakImage = {
                    load: a.attr("data-peak-load"),
                    progress: a.attr("data-peak-progress")
                });
            void 0 != a.attr("data-peak-array") && (f.peakData = a.attr("data-peak-array").split(","));
            AWPUtils.isEmpty(a.html()) || (f.content = a.html());
            void 0 != a.attr("data-limit") && !AWPUtils.isEmpty(a.attr("data-limit")) && AWPUtils.isNumber(a.attr("data-limit")) && 0 != Math.abs(parseInt(a.attr("data-limit"), 10)) && (f.limit = Math.abs(parseInt(a.attr("data-limit"),
                10)));
            void 0 == a.attr("data-thumb") || AWPUtils.isEmpty(a.attr("data-thumb")) ? void 0 == a.attr("data-thumb-default") || AWPUtils.isEmpty(a.attr("data-thumb-default")) || (f.thumbDefault = a.attr("data-thumb-default")) : f.thumb = a.attr("data-thumb");
            void 0 == a.attr("data-thumb-quality") || AWPUtils.isEmpty(a.attr("data-thumb-quality")) || (f.thumbQuality = a.attr("data-thumb-quality"));
            void 0 == a.attr("data-title") || AWPUtils.isEmpty(a.attr("data-title")) || (f.title = a.attr("data-title"));
            void 0 == a.attr("data-artist") || AWPUtils.isEmpty(a.attr("data-artist")) ||
                (f.artist = a.attr("data-artist"));
            void 0 == a.attr("data-description") || AWPUtils.isEmpty(a.attr("data-description")) || (f.description = a.attr("data-description"));
            void 0 != a.attr("data-download") && (f.download = a.attr("data-download"));
            void 0 != a.attr("data-id3") && (f.id3 = !0);
            void 0 == a.attr("data-dir-url") || AWPUtils.isEmpty(a.attr("data-dir-url")) || (f.dirurl = a.attr("data-dir-url"));
            void 0 == a.attr("data-peak-dir") || AWPUtils.isEmpty(a.attr("data-peak-dir")) || (f.peakdir = a.attr("data-peak-dir"));
            void 0 != a.attr("data-start") &&
                !AWPUtils.isEmpty(a.attr("data-start")) && AWPUtils.isNumber(a.attr("data-start")) && 0 != a.attr("data-start") && (f.start = Math.abs(a.attr("data-start")));
            void 0 != a.attr("data-end") && !AWPUtils.isEmpty(a.attr("data-end")) && AWPUtils.isNumber(a.attr("data-end")) && 0 != a.attr("data-end") && (f.end = Math.abs(a.attr("data-end")));
            void 0 != a.attr("data-duration") && !AWPUtils.isEmpty(a.attr("data-duration")) && AWPUtils.isNumber(a.attr("data-duration")) && 0 != Math.abs(a.attr("data-duration")) && (f.duration = Math.abs(a.attr("data-duration")));
            void 0 != a.attr("data-playback-rate") && (f.playbackRate = 1, !AWPUtils.isEmpty(a.attr("data-playback-rate")) && AWPUtils.isNumber(a.attr("data-playback-rate")) && 0 != a.attr("data-playback-rate") && (f.playbackRate = Math.abs(a.attr("data-playback-rate"))));
            void 0 == a.attr("data-link") || AWPUtils.isEmpty(a.attr("data-link")) || (f.link = a.attr("data-link"), f.target = "_blank", void 0 == a.attr("data-target") || AWPUtils.isEmpty(a.attr("data-target")) || (f.target = a.attr("data-target")));
            void 0 != a.attr("data-share") && (f.share =
                a.attr("data-share"));
            void 0 != a.attr("data-remote") && (f.remote = !0);
            return f
        }

        function h() {
            ba++;
            if (ba > B - 1) Cb();
            else {
                var a = X[ba],
                    b = X[ba].type;
                /^audio$/.test(b) ? (Y.push(a), h()) : -1 < c.inArray(b, Fb) ? lb.setData(a) : /^folder$/.test(b) ? K(b) : /^gdrive-folder$/.test(b) ? N(b) : (console.log("Wrong data-type in playlist! Type = " + b), h())
            }
        }

        // function K(a) {
        //     if ("file:" == window.location.protocol) return console.log("Reading files from folders locally is not possible! This requires online server connection."), h(), !1;
        //     var f = X[ba],
        //         b = f.path.replace(/\/\//g, "/");
        //     a = ra + "includes/folder_parser.php";
        //     b = {
        //         dir: b,
        //         limit: f.limit || 1E4
        //     };
        //     f.id3 && (mb = ta = Y.length - 1);
        //     c.ajax({
        //         type: "GET",
        //         url: a,
        //         data: b,
        //         dataType: "json"
        //     }).done(function(a) {
        //         AWPUtils.keysrt(a, "filename");
        //         var b, d = a.length;
        //         for (b = 0; b < d; b++) {
        //             var V = a[b];
        //             if (/.mp3/.test(V.basename)) {
        //                 var F = c.extend(!0, {}, f);
        //                 F.type = "audio";
        //                 var e = F.dirurl ? F.dirurl + V.basename : V.fullpath;
        //                 F.mp3 = e;
        //                 "undefined" !== typeof F.download && AWPUtils.isEmpty(F.download) && (F.download = e);
        //                 "undefined" !== typeof F.share && AWPUtils.isEmpty(F.share) &&
        //                     (F.share = e);
        //                 F.thumb || (F.thumb = e.substr(0, e.lastIndexOf(".")) + ".jpg");
        //                 F.title || (F.title = V.filename);
        //                 Y.push(F);
        //                 ta++
        //             }
        //         }
        //         f.id3 ? Na() : h()
        //     }).fail(function(a, f, b) {
        //         console.log("Error processing folder: " + a.responseText);
        //         h()
        //     })
        // }

        function N(a) {
            if ("file:" == window.location.protocol) return console.log("Reading files from folders locally is not possible! This requires online server connection."), h(), !1;
            if (AWPUtils.isEmpty(p.gDriveAppId)) return console.log("gDriveAppId has not been set in settings!"), h(), !1;
            var f = X[ba];
            c.ajax({
                url: "https://www.googleapis.com/drive/v3/files?q='" + f.path + "'+in+parents&key=" + p.gDriveAppId,
                dataType: "jsonp"
            }).done(function(a) {
                var b, d = a.files.length,
                    V = [],
                    F = [];
                for (b = 0; b < d; b++) {
                    var e = a.files[b];
                    /.mp3|mpeg|mpeg3/.test(e.mimeType) ? (F.push(e), AWPUtils.keysrt(F, "name")) : /.jpg|jpeg|png/.test(e.mimeType) && (V.push(e), AWPUtils.keysrt(V, "name"))
                }
                d = F.length;
                for (b = 0; b < d; b++) {
                    e = F[b];
                    a = c.extend(!0, {}, f);
                    a.type = "audio";
                    var g = "https://drive.google.com/uc?export=view&id=" + e.id;
                    a.mp3 = g;
                    console.log(g);
                    "undefined" !==
                    typeof a.download && AWPUtils.isEmpty(a.download) && (a.download = "https://drive.google.com/uc?export=download&id=" + e.id);
                    "undefined" !== typeof a.share && AWPUtils.isEmpty(a.share) && (a.share = "https://drive.google.com/open?id=" + e.id);
                    V.length && !a.thumb && V[b] && (a.thumb = "https://drive.google.com/uc?export=view&id=" + V[b].id);
                    a.title || (a.title = e.name.substr(0, e.name.lastIndexOf(".")));
                    Y.push(a)
                }
                h()
            }).fail(function(a, f, b) {
                console.log("Error processing gdrive folder: " + a.responseText);
                h()
            })
        }

        function Na() {
            var a =
                Y[ta];
            jsmediatags.read(a.mp3, {
                onSuccess: function(f) {
                    var b = f.tags;
                    f = b.picture;
                    b.artist && (a.artist = b.artist);
                    b.title && (a.title = b.title);
                    b.album && (a.album = b.album);
                    if (f) {
                        var b = "",
                            c, d = f.data.length;
                        for (c = 0; c < d; c++) b += String.fromCharCode(f.data[c]);
                        a.thumb = "data:" + f.format + ";base64," + window.btoa(b)
                    }
                    ta--;
                    ta > mb ? Na() : h()
                },
                onError: function(a) {
                    console.log("ID3 error: ", a.type, a.info);
                    Na()
                }
            })
        }

        function Cb() {
            var a, b, e = ca ? M : H.length,
                g = Y.length,
                h = 0;
            for (b = 0; b < g; b++) {
                var m = b + e;
                ca && h++;
                var l = Y[b];
                var q = l.type;
                if (fa) {
                    l.origclasses ||
                        (l.origclasses = "awp-playlist-item");
                    var p = c('<div class="' + l.origclasses + '"/>').attr({
                        "data-type": q
                    });
                    delete l.origclasses;
                    if (ca) {
                        t ? t.after(p) : la ? p.appendTo(G) : G.children("div").eq(M).before(p);
                        var t = p
                    } else p.appendTo(G);
                    var r = c('<a class="awp-playlist-non-selected" href="#"/>').on("click", d).appendTo(p);
                    if (!ua) r.on("mouseenter", z).on("mouseleave", k);
                    if (-1 != c.inArray("thumb", nb) && (a = l.thumb || l.thumbDefault)) {
                        var u = new Image;
                        u.className = "awp-hidden";
                        u.onload = function() {
                            this.className = "awp-visible"
                        };
                        u.src = a;
                        c('<span class="awp-playlist-thumb"></span>').append(u).appendTo(r)
                    } - 1 != c.inArray("title", nb) && c('<span class="awp-playlist-title"></span>').appendTo(r);
                    l.link && (a = c('<a class="awp-link" href="' + l.link + '" target="' + (l.target || "_blank") + '"><i class="fa fa-external-link"></i></a>'), r.after(a));
                    l.download && (a = ob ? c('<a class="awp-download" href="' + l.download + '" download><i class="fa fa-download"></i></a>') : c('<a class="awp-download" href="#" title="download"><i class="fa fa-download"></i></a>'),
                        r.after(a));
                    l.content && (p.append(l.content), delete l.content)
                }
                l.title && (l.title = AWPUtils.checkKey(l.title));
                H.splice(m, 0, {
                    id: m,
                    type: q,
                    data: l
                })
            }
            fa && Db();
            O = G;
            Oa();
            ca || Xa ? (m = n.getCounter(), n.setPlaylistItems(B, !1), M <= m && (la || n.reSetCounter(m + h)), va ? (va = !1, wa && !ua && (ga = !0), n.setCounter(M, !1)) : wa && n.setCounter(M, !1), -1 != n.getCounter() && (Z = n.getCounter())) : n.setPlaylistItems(B);
            pb();
            0 == B && "undefined" !== typeof awpPlaylistEmpty && awpPlaylistEmpty(x, D, G);
            Ea = !0;
            "undefined" !== typeof awpPlaylistEndLoad && awpPlaylistEndLoad(x,
                D, G)
        }

        function Oa() {
            B = H.length;
            if (fa) {
                var a = 0,
                    b, d, e, g;
                Fa = [];
                G.find("div.awp-playlist-item").each(function() {
                    d = c(this).attr("data-id", a);
                    e = d.find(".awp-playlist-non-selected, .awp-playlist-selected").attr("data-id", a);
                    g = e.find(".awp-playlist-title");
                    g.length && (b = qa(a), Ya && (Fa.push(b), H[a].data.title_full = b), qb ? g.html(AWPUtils.counter(a) + rb + b) : g.html(b));
                    H[a].id = a;
                    a++
                });
                Ga && Ha && 0 < B && "h" == Ia.charAt(0) && ha.mCustomScrollbar("update")
            }
        }

        function Db() {
            G.children(".awp-playlist-item").each(function() {
                if (!ob) c(this).find("a[class=awp-download]").off("click").on("click",
                    function(a) {
                        a.preventDefault();
                        "undefined" !== typeof sb && (a = c(this).parent().attr("data-id"), a = H[a].data, "undefined" === typeof a.download || AWPUtils.isEmpty(a.download) || sb.download(a.download, a.title || "media"))
                    })
            })
        }

        function hb(a) {
            var b = "h" == Ia.charAt(0) ? "x" : "y";
            ha.mCustomScrollbar({
                axis: b,
                theme: a || p.playlistScrollTheme,
                scrollInertia: 0,
                mouseWheel: {
                    normalizeDelta: !0,
                    deltaFactor: 50,
                    preventDefault: !0
                },
                keyboard: {
                    enable: !1
                },
                advanced: {
                    autoExpandHorizontalScroll: !0
                }
            });
            Ha = !0
        }

        function pb() {
            ca = Xa = !1;
            Wa.css("display",
                "none");
            W = !1;
            m || (m = !0, fa && !Ha && Ga && hb(), g(A), awpSetupDone(x, D));
            if (!Za && !ca && 0 < B) {
                var a = p.activeItem;
                a > B - 1 && (a = B - 1); - 1 < a && n.setCounter(a, !1);
                Za = !0
            }
        }

        function tb() {
            "undefined" !== typeof awpMediaEnd && awpMediaEnd(x, D, n.getCounter());
            if (Gb) x.nextMedia();
            else {
                var a = l.start || 0;
                "loop" == $a ? e.play(a) : "rewind" == $a ? (e.pause(), e.seekTo(a / e.getDuration())) : "stop" == $a && e.pause()
            }
        }

        function ub() {
            m && "undefined" !== typeof L && (fa && -1 != Z && v(), Ja(), n.reSetCounter())
        }

        function Ja() {
            Da && (Da.abort(), Da = null);
            Aa && (Aa.abort(),
                Aa = null);
            "undefined" !== typeof e && (e.empty(), e.setSkipArrayBuffer(!1));
            sa.css("opacity", 0);
            Ka.removeClass("awp-visible").addClass("awp-hidden");
            ea = !1;
            Ua.empty();
            ka.empty();
            T.css("display", "none").removeClass("awp-visible").addClass("awp-hidden");
            xa.removeClass("awp-visible").addClass("awp-hidden");
            ya.removeClass("awp-visible").addClass("awp-hidden");
            vb && (xa.html("0:00"), ya.html("0:00"));
            Hb.empty();
            wb();
            L = null;
            wa = La = P = !1;
            awpCleanMedia(x, D)
        }

        function Va() {
            L && Ja();
            fa && O.find(".awp-playlist-item").remove();
            ma = O = null;
            Ea = va = ca = !1;
            Z = -1;
            Za = !1;
            B = 0;
            ba = -1;
            H = [];
            Y = [];
            X = [];
            n.reSetCounter();
            Ya && xb.val(ab);
            Ib && (za = !1, bb.find("i").removeClass("fa-sort-alpha-asc").addClass("fa-sort-alpha-desc"));
            awpDestroyPlaylist(x, D, G)
        }

        function Ca() {
            xa.removeClass("awp-hidden").addClass("awp-visible");
            ya.removeClass("awp-hidden").addClass("awp-visible")
        }

        function wb() {
            cb.find("i").removeClass("fa-pause").addClass("fa-play")
        }

        function kb() {
            Wa.css("display", "block")
        }

        function db(a) {
            if ("string" === typeof a) var b = a;
            else "number" === typeof a &&
                (b = qa(a), qb && (b = AWPUtils.counter(a) + rb + b));
            Jb.html(b)
        }

        function qa(a) {
            a = H[a].data;
            var b = "";
            "undefined" === typeof a.artist || AWPUtils.isEmpty(a.artist) || "undefined" === typeof a.title || AWPUtils.isEmpty(a.title) ? "undefined" !== typeof a.artist || "undefined" === typeof a.title || AWPUtils.isEmpty(a.title) ? "undefined" === typeof a.artist || AWPUtils.isEmpty(a.artist) || "undefined" !== typeof a.title || (b = a.artist) : b = a.title : b = a.artist + yb + a.title;
            return b
        }
        var p = c.extend({}, {
                instanceName: "",
                sourcePath: "",
                playlistList: "",
                activePlaylist: "",
                activeItem: 0,
                volume: .5,
                autoPlay: !1,
                randomPlay: !1,
                loopingOn: !0,
                autoAdvanceToNextMedia: !0,
                mediaEndAction: "loop",
                soundCloudAppId: "",
                usePlaylistScroll: !1,
                playlistScrollOrientation: "vertical",
                playlistScrollTheme: "light",
                useKeyboardNavigationForPlayback: !1,
                facebookAppId: "",
                useNumbersInPlaylist: !1,
                numberTitleSeparator: ".  ",
                artistTitleSeparator: " - ",
                playlistItemContent: "title"
            }, b),
            r = c(this).show(),
            Eb = c(p.playlistList).hide(),
            Kb = r.find(".awp-playlist-holder"),
            ha = r.find(".awp-playlist-inner"),
            G = r.find(".awp-playlist-content"),
            eb = r.find(".awp-playlist-filter-msg"),
            bb = r.find(".awp-sort-alpha"),
            Wa = r.find(".awp-preloader");
        r.find(".awp-player-holder");
        var Hb = r.find(".awp-player-thumb"),
            xa = r.find(".awp-media-time-current"),
            ya = r.find(".awp-media-time-total"),
            Jb = r.find(".awp-media-title");
        r.find(".awp-player-controls");
        var cb = r.find(".awp-playback-toggle"),
            ia = r.find(".awp-loop-toggle"),
            oa = r.find(".awp-player-volume"),
            ja = r.find(".awp-random-toggle");
        r.find(".awp-volume-wrapper");
        var na = r.find(".awp-volume-seekbar"),
            da = r.find(".awp-volume-bg"),
            ib = r.find(".awp-volume-level"),
            Ka = r.find(".awp-waveform"),
            sa = r.find(".awp-waveform-preloader"),
            T = r.find(".awp-waveform-img"),
            Ua = r.find(".awp-waveform-img-load"),
            zb = r.find(".awp-waveform-img-progress-wrap"),
            ka = r.find(".awp-waveform-img-progress"),
            ua = AWPUtils.isMobile(),
            ra = p.sourcePath,
            D = AWPUtils.filterAllowedChars(p.instanceName),
            ma = p.activePlaylist,
            ga = p.autoPlay,
            Sa = p.drawWaveWithoutLoad,
            R = p.loopingOn,
            S = p.randomPlay,
            qb = p.useNumbersInPlaylist,
            rb = p.numberTitleSeparator,
            yb = p.artistTitleSeparator,
            A = p.volume,
            Ga = p.usePlaylistScroll,
            Ia = p.playlistScrollOrientation.toLowerCase(),
            Lb = p.useKeyboardNavigationForPlayback,
            Gb = p.autoAdvanceToNextMedia,
            $a = p.mediaEndAction,
            nb = p.playlistItemContent.split(","),
            fa = Kb.length,
            Ya = r.find(".awp-search-filter").length,
            Ib = bb.length,
            vb = xa.length || ya.length,
            pa = na.length,
            m = !1,
            W = !1,
            x = this;
        c("body");
        var Mb = c(window),
            Nb = c(document),
            Ab = AWPUtils.isIE(),
            fb, ob = AWPUtils.hasDownloadSupport(),
            Ta, ea, Ba, Da, Aa, la, M, ca, wa, va, Xa, ba = -1,
            H = [],
            Y = [],
            X = [],
            B = 0,
            Za, Ea = !1,
            O = null,
            Z = -1,
            La = !1,
            L, P = !1,
            l, Qa,
            Ha, za = !1,
            Fa = [],
            ta, mb, Fb = ["podcast", "soundcloud", "soundcloud_query"];
        "undefined" === typeof window.awp_mediaArr && (window.awp_mediaArr = []);
        awp_mediaArr.push({
            inst: x,
            id: D
        });
        ua && (ga = !1);
        if (Ab && 12 > Ab) T.on("click", function(a) {
            if (ea) {
                var b = c(a.currentTarget);
                a = Math.min(Math.max((a.pageX - b.offset().left) / b.width(), 0), 1);
                e.seekTo(a)
            }
        });
        R && ia.find("i").removeClass("awp-icon-color").addClass("awp-icon-rollover-color");
        S && ja.find("i").removeClass("awp-icon-color").addClass("awp-icon-rollover-color");
        if (Ya) {
            var xb =
                r.find(".awp-search-filter").on("focus", function(a) {
                    c(this).val() == ab && c(this).val("")
                }).on("blur", function() {
                    AWPUtils.isEmpty(c(this).val()) && c(this).val(ab)
                }).on("keyup.apfilter", function() {
                    if (0 == Fa.length) return !1;
                    var a = H.length,
                        b = c(this).val(),
                        b = Fa.filter(/./.test.bind(new RegExp(b, "i"))),
                        d, e = 0;
                    for (d = 0; d < a; d++) {
                        var g = qa(d); - 1 < c.inArray(g, b) ? G.children("div.awp-playlist-item").eq(d).show() : (G.children("div.awp-playlist-item").eq(d).hide(), e++)
                    }
                    0 < a && eb.length && (e == a ? eb.show() : eb.hide());
                    Ga && 0 < B &&
                        "h" == Ia.charAt(0) && ha.mCustomScrollbar("update");
                    "undefined" !== typeof awpFilterChange && awpFilterChange(x, D, G)
                });
            var ab = xb.val()
        }
        var Q = new AWPTooltip({
                settings: p,
                parent: r
            }),
            sb = new AWPDownloadManager({
                settings: p,
                parent: r
            }),
            jb = new AWPShareManager({
                settings: p
            }),
            n = new AWPPlaylistManager({
                randomPlay: S,
                loopingOn: R
            });
        c(n).on("AWPPlaylistManager.COUNTER_READY", function() {
            L && Ja();
            if (fa) {
                -1 != Z && v();
                var a = n.getCounter(),
                    b = G.children("div.awp-playlist-item[data-id=" + a + "]"),
                    c = b.find(".awp-playlist-non-selected, .awp-playlist-selected");
                b.length && (Z = a, c.removeClass("awp-playlist-non-selected").addClass("awp-playlist-selected"), Ga && 0 < B && (Qa || ("h" == Ia.charAt(0) ? ha.mCustomScrollbar("scrollTo", parseInt(b.position().left), {
                    scrollInertia: 500
                }) : ha.mCustomScrollbar("scrollTo", parseInt(b.position().top), {
                    scrollInertia: 500
                })), Qa = !1), "undefined" !== typeof awpPlaylistItemDisabled && awpPlaylistItemDisabled(x, D, b, a))
            }
            a = n.getCounter();
            l = H[a].data;
            L = l.type;
            db(a);
            I();
            "undefined" !== typeof awpItemTriggered && awpItemTriggered(x, D, a)
        }).on("AWPPlaylistManager.PLAYLIST_END AWPPlaylistManager.PLAYLIST_END_ALERT",
            function() {
                "undefined" !== typeof awpPlaylistEnd && awpPlaylistEnd(x, D)
            });
        var lb = new AWPSoundLoader({
            settings: p,
            sourcePath: ra
        });
        c(lb).on("AWPSoundLoader.END_LOAD", function(a, b) {
            var c, d = b.length;
            for (c = 0; c < d; c++) {
                var f = b[c];
                Y.push(f)
            }
            h()
        });
        var gb = [];
        pa && (na.data("apmove", !0), gb.push(na));
        if (gb.length) {
            var Ra = new AWPTouchManager(gb);
            c(Ra).on("AWPTouchManager.DRAG_START", function(a, b) {}).on("AWPTouchManager.DRAG_MOVE AWPTouchManager.DRAG_RELEASE", function(a, b) {
                if (!m) return !1;
                var c = b.elem;
                var d = b.point.pageX,
                    f = b.point.pageY;
                if (c.hasClass("awp-volume-seekbar")) {
                    var e = aa ? d : f;
                    aa ? A = Math.max(0, Math.min(1, (e - da.offset().left) / U)) : (A = Math.max(0, Math.min(1, (e - da.offset().top) / U)), A = 1 - A);
                    g();
                    "undefined" !== typeof Q && c.is('[class*="awp-tooltip"]') && (c = aa ? d - da.offset().left : f - da.offset().top, 0 > c ? c = 0 : c > U && (c = U), c = Math.max(0, Math.min(1, c / U)), aa || (c = 1 - c), c = parseInt(100 * c, 10), Q.volume(b.point, na, c))
                }
            }).on("AWPTouchManager.MOUSE_MOVE", function(a, b) {
                if (!m) return !1;
                var c = b.elem;
                a = b.e;
                var d = a.pageX,
                    f = a.pageY;
                c.hasClass("awp-volume-seekbar") &&
                    "undefined" !== typeof Q && c.is('[class*="awp-tooltip"]') && (c = aa ? d - da.offset().left : f - da.offset().top, 0 > c ? c = 0 : c > U && (c = U), c = Math.max(0, Math.min(1, c / U)), aa || (c = 1 - c), c = parseInt(100 * c, 10), Q.volume(a, na, c))
            }).on("AWPTouchManager.MOUSE_LEAVE", function(a, b) {
                if (!m) return !1;
                "undefined" !== typeof Q && Q.hide()
            })
        }
        if (pa) {
            var aa = na.hasClass("awp-vertical") ? !1 : !0;
            var Pa = .5;
            var U = void 0 != p.volumeSize ? p.volumeSize : aa ? da.width() : da.height();
            0 > A ? A = 0 : 1 < A && (A = 1);
            0 != A && (Pa = A)
        }
        if (Lb) Nb.on("keyup.apnav", function(b) {
            if (!m) return !1;
            var d = b.keyCode;
            c(b.target);
            37 == d ? x.previousMedia() : 39 == d ? x.nextMedia() : 32 == d ? x.togglePlayback() : 77 == d && a()
        });
        var Bb = [r.find(".awp-next-toggle"), r.find(".awp-prev-toggle"), r.find(".awp-playlist-toggle"), r.find(".awp-share-item"), bb, oa, cb, ia, ja],
            Ob = Bb.length,
            Ma;
        for (Ma = 0; Ma < Ob; Ma++) {
            var Pb = c(Bb[Ma]).css("cursor", "pointer").on("click", t);
            if (!ua) Pb.on("mouseenter", u).on("mouseleave", C)
        }
        var e = Object.create(WaveSurfer);
        e.init({
            container: Ka[0],
            backend: "MediaElement",
            interact: 1,
            hideScrollbar: !0,
            waveColor: p.wavesurfer.waveColor,
            progressColor: p.wavesurfer.progressColor,
            barWidth: p.wavesurfer.barWidth,
            cursorColor: p.wavesurfer.cursorColor,
            cursorWidth: p.wavesurfer.cursorWidth,
            height: p.wavesurfer.height
        });
        e.on("loading", function(a) {
            a = "Loading... " + a.toString() + "%";
            sa.css("opacity", 1).html(a)
        });
        e.on("finish", function(a) {
            tb()
        });
        e.on("error", function(a) {
            console.log(a)
        });
        e.on("audioprocess", function(a) {
            a = e.getCurrentTime();
            var b = e.getDuration();
            vb && (xa.html(AWPUtils.formatCurrentTime(a)), ya.html(AWPUtils.formatDuration(b)));
            ea && zb.width(T.width() *
                e.backend.getPlayedPercents());
            l.end && a >= l.end && tb()
        });
        e.on("play", function() {
            La || (awpMediaStart(x, D, n.getCounter()), La = !0);
            cb.find("i").removeClass("fa-play").addClass("fa-pause");
            P = !0;
            awpMediaPlay(x, D, n.getCounter())
        });
        e.on("pause", function() {
            wb();
            P = !1;
            awpMediaPause(x, D, n.getCounter())
        });
        e.on("seek", function(a) {
            ea && zb.width(T.width() * a)
        });
        e.on("ready", function() {
            e.setVolume(A);
            var a = l.start || 0;
            if (l.end) var b = l.end;
            l.playbackRate && 1 != l.playbackRate && e.setPlaybackRate(l.playbackRate);
            ga && (b ? e.play(a,
                b) : e.play(a));
            ga = !0
        });
        e.on("waveform_ME_noPeaks", function() {
            if (Ta) {
                var a = e.backend.getPeaks(900);
                a.length && q(a, l.title);
                Ta = !1
            }
            sa.css("opacity", 0);
            Ka.removeClass("awp-hidden").addClass("awp-visible");
            Ca()
        });
        e.on("redraw", function() {
            Ba && (sa.css("opacity", 0), Ka.removeClass("awp-hidden").addClass("awp-visible"), Ca(), Ba = !1)
        });
        this.getTitleFormatted = function(a, b) {
            var c = "",
                d = b || yb;
            "undefined" === typeof a.artist || AWPUtils.isEmpty(a.artist) || "undefined" === typeof a.title || AWPUtils.isEmpty(a.title) ? "undefined" !==
                typeof a.artist || "undefined" === typeof a.title || AWPUtils.isEmpty(a.title) ? "undefined" === typeof a.artist || AWPUtils.isEmpty(a.artist) || "undefined" !== typeof a.title || (c = a.artist) : c = a.title : c = a.artist + d + a.title;
            return c
        };
        Mb.resize(function() {
            if (!m) return !1;
            fb && clearTimeout(fb);
            fb = setTimeout(x.resize, 150);
            ea && ka.width(T.width())
        });
        x.resize = function() {
            e && (e.drawer.containerWidth = e.drawer.container.clientWidth, e.drawBuffer(), P || e.drawer.updateProgress(e.backend.getPlayedPercents()))
        };
        this.loadPlayMedia = function() {
            if (!m ||
                !L || !l) return !1;
            l.mp3 && e.backend.peaks && e.load(l.mp3, e.backend.peaks, !0);
            P = !0
        };
        this.playMedia = function() {
            if (!m || !L || P) return !1;
            "undefined" !== typeof e && e.play();
            P = !0
        };
        this.pauseMedia = function() {
            if (!m || !L || !P) return !1;
            "undefined" !== typeof e && e.pause();
            P = !1
        };
        this.checkMedia = function(a) {
            if (!m || !L) return !1;
            a = a.toLowerCase();
            P && "pause" == a && ("undefined" !== typeof e && e.pause(), P = !1)
        };
        this.togglePlayback = function() {
            if (!m || !L) return !1;
            "undefined" !== typeof e && (!La && Sa && e.backend.peaks ? (ga = !0, x.loadPlayMedia()) :
                e.playPause())
        };
        this.stop = function() {
            if (!m || !L) return !1;
            "undefined" !== typeof e && e.stop();
            P = !1
        };
        this.nextMedia = function() {
            if (!m || !O) return !1;
            n.advanceHandler(1, !0)
        };
        this.previousMedia = function() {
            if (!m || !O) return !1;
            n.advanceHandler(-1, !0)
        };
        this.loadMedia = function(a) {
            if (!m || W || !O) return !1;
            if ("undefined" === typeof a) return alert("loadMedia method requires either a track number or a track title to load. LoadMedia failed."), !1;
            if ("string" === typeof a) {
                var b;
                for (b = 0; b < B; b++)
                    if (a == H[b].data.title) {
                        a = b;
                        var c = !0;
                        break
                    } if (!c) return alert('Track with title "' + a + '" doesnt exist. LoadMedia failed.'), !1
            } else if ("number" === typeof a) {
                if (0 > a || a > B - 1) return alert('Invalid track number. Track number  "' + a + '" doesnt exist. LoadMedia failed.'), !1
            } else return alert("loadMedia method requires either a track number or a track title to load. LoadMedia failed."), !1;
            n.processPlaylistRequest(a)
        };
        this.loadPlaylist = function(a) {
            if (!m || W) return !1;
            if ("undefined" === typeof a || AWPUtils.isEmpty(a)) return alert("loadPlaylist method requires id parameter. loadPlaylist failed."),
                !1;
            if (ma == a) return !1;
            ma = a;
            w(ma)
        };
        this.addTrack = function(a, b, d, e) {
            if (!m || W) return !1;
            if ("undefined" === typeof a) return alert("addTrack method requires format parameter. AddTrack failed."), !1;
            if ("undefined" === typeof b) return alert("addTrack method requires track parameter. AddTrack failed."), !1;
            wa = !1;
            "undefined" !== typeof d && (wa = d);
            d = 1;
            var f = !1;
            if ("string" !== typeof b && "[object Object]" !== Object.prototype.toString.call(b))
                if ("[object Array]" === Object.prototype.toString.call(b)) d = b.length, f = !0;
                else return alert("addTrack method requires track as string, object or array parameter. AddTrack failed."),
                    !1;
            M = e;
            la = !1;
            ca = !0;
            if (O)
                if ("undefined" !== typeof M) {
                    if (0 > M || M > B) return alert('Invalid position to insert track to. Position number "' + e + '" doesnt exist. AddTrack failed.'), !1;
                    M == B && (la = !0)
                } else la = !0, M = B;
            else {
                if ("undefined" !== typeof M) {
                    if (0 != M) return alert('Invalid position to insert track to. Position number "' + e + '" doesnt exist. AddTrack failed.'), !1
                } else M = 0;
                la = !0
            }
            W = !0;
            kb();
            Ea = !1;
            Xa = !0;
            ba = -1;
            Y = [];
            X = [];
            for (e = 0; e < d; e++) {
                var g = f ? b[e] : b;
                if ("html" == a) {
                    g = c(g);
                    var k = c("<div>").append(g.clone()).html();
                    g = document.createElement("div");
                    g.innerHTML = k;
                    g = c(g.firstChild);
                    g = y(g)
                }
                X.push(g)
            }
            B = X.length;
            va = !1;
            O || (va = !0);
            O = G;
            h()
        };
        this.inputAudio = function(a) {
            if (!m || W) return !1;
            if ("undefined" === typeof a) return alert("inputAudio method requires data parameter. inputAudio failed."), !1;
            v();
            n.reSetCounter();
            l = a;
            L = "audio";
            void 0 != l.title && db(x.getTitleFormatted(l));
            ua && (ga = !0);
            I()
        };
        this.removeTrack = function(a) {
            if (!m || W || !O) return !1;
            if ("undefined" === typeof a) return alert("removeTrack method requires id parameter. removeTrack failed."),
                !1;
            if ("string" === typeof a) {
                var b, c = !1;
                for (b = 0; b < B; b++)
                    if (a == H[b].data.title) {
                        a = b;
                        c = !0;
                        break
                    } if (!c) return alert('Track with title "' + a + '" doesnt exist. RemoveTrack failed.'), !1
            } else if ("number" === typeof a) {
                if (a = parseInt(a, 10), 0 > a || a > B - 1) return alert('Invalid id number. Track number  "' + a + '" doesnt exist. RemoveTrack failed.'), !1
            } else return alert("removeTrack method requires either a id number or a track title to remove. removeTrack failed."), !1;
            H[a] ? (G.children(".awp-playlist-item").eq(a).remove(),
                H.splice(a, 1), Oa(), 0 < B ? (b = n.getCounter(), a == b ? (Ja(), n.setPlaylistItems(B)) : (n.setPlaylistItems(B, !1), a < b && n.reSetCounter(n.getCounter() - 1)), -1 != n.getCounter() ? (Z = n.getCounter(), db(Z)) : awpMediaEmpty(x, D)) : Va()) : alert('RemoveTrack with id "' + a + '" failed.')
        };
        this.sort = function(a, b) {
            if (!m || !O) return !1;
            if ("undefined" === typeof a) return console.log("Sort method requires type parameter. Sort method failed."), !1;
            var d = G.children("div.awp-playlist-item");
            var f = d.length;
            var e = a.toLowerCase();
            if (2 > f) return !1;
            if ("title" == e)
                for (AWPUtils.keysrt2(H, "data", "title_full", b || !1), f = [], e = 0; e < B; e++) f.push(H[e].id);
            else if ("random" == e) f = AWPUtils.randomiseArray(f), H = AWPUtils.sortArray(H, f);
            else return console.log("Sort method requires type parameter. Sort method failed."), !1;
            e = n.getCounter();
            G.append(c.map(f, function(a) {
                return d[a]
            })); - 1 != e && (f = G.children("div.awp-playlist-item[data-id='" + e + "']").index(), n.reSetCounter(f), Z = f);
            Oa()
        };
        this.destroyMedia = function() {
            if (!m) return !1;
            ub()
        };
        this.destroyPlaylist = function() {
            if (!m ||
                !O) return !1;
            Va()
        };
        this.destroyPlugin = function() {
            if (!m) return !1;
            ub();
            "undefined" !== typeof e && e.destroy()
        };
        this.setPlaybackRate = function(a) {
            if (!m || "undefined" !== typeof n && -1 == n.getCounter()) return !1;
            "undefined" !== typeof e && e.setPlaybackRate(a)
        };
        this.toggleRandom = function(a) {
            if (!m || "undefined" === typeof n) return !1;
            S = "undefined" !== typeof a ? a : !S;
            n.setRandom(S);
            S ? ja.find("i").removeClass("awp-icon-color").addClass("awp-icon-rollover-color") : ja.find("i").removeClass("awp-icon-rollover-color").addClass("awp-icon-color")
        };
        this.toggleLoop = function(a) {
            if (!m || "undefined" === typeof n) return !1;
            R = "undefined" !== typeof a ? a : !R;
            n.setLooping(R);
            R ? ia.find("i").removeClass("awp-icon-color").addClass("awp-icon-rollover-color") : ia.find("i").removeClass("awp-icon-rollover-color").addClass("awp-icon-color")
        };
        this.setVolume = function(a) {
            if (!m) return !1;
            0 > a ? a = 0 : 1 < a && (a = 1);
            A = a;
            g()
        };
        this.getVolume = function() {
            return m ? A : !1
        };
        this.toggleMute = function() {
            if (!m) return !1;
            a()
        };
        this.seek = function(a) {
            if (!m || !L) return !1;
            "undefined" !== typeof e && e.seekTo(a /
                e.getDuration())
        };
        this.getCurrentTime = function() {
            if (!m || !L) return !1;
            var a;
            "undefined" !== typeof e && (a = e.getCurrentTime());
            return a
        };
        this.getDuration = function() {
            if (!m || !L) return !1;
            var a;
            "undefined" !== typeof e && (a = e.getDuration());
            return a
        };
        this.initPlaylistScroll = function(a) {
            if (!m) return !1;
            hb(a)
        };
        this.destroyPlaylistScroll = function() {
            if (!m) return !1;
            ha.mCustomScrollbar("destroy");
            Ha = !1
        };
        this.updatePlaylistScroll = function() {
            if (!m) return !1;
            ha.mCustomScrollbar("update")
        };
        this.setAutoPlay = function(a) {
            if (!m) return !1;
            ga = a
        };
        this.getSetupDone = function() {
            return m
        };
        this.getPlaylistTransition = function() {
            return W
        };
        this.getPlaylistLoaded = function() {
            return Ea
        };
        this.getMediaPlaying = function() {
            return m ? P : !1
        };
        this.getActiveItemId = function() {
            return m ? "undefined" !== typeof n ? n.getCounter() : null : !1
        };
        this.getPlaylistLength = function() {
            return m ? AWPUtils.isNumber(B) ? B : 0 : !1
        };
        this.getPlaylistItems = function() {
            if (!m) return !1;
            var a = [];
            G.find("div.awp-playlist-item").each(function() {
                a.push(c(this))
            });
            return a
        };
        this.getPlaylistData = function() {
            return H ||
                null
        };
        this.getCurrMediaData = function() {
            return m ? l : !1
        };
        this.getTitle = function(a) {
            return qa(a)
        };
        this.getSettings = function() {
            return m ? p || null : !1
        };
        this.getInstanceName = function() {
            return m ? D : !1
        };
        this.toggleInteraction = function() {
            "undefined" !== typeof e && e.toggleInteraction()
        };
        this.overControls = function(a) {
            u(a)
        };
        this.outControls = function(a) {
            C(a)
        };
        this.showPlayerElements2 = function() {
            showPlayerElements2()
        };
        AWPUtils.isEmpty(ma) ? pb() : w(ma);
        return this
    }
})(jQuery);