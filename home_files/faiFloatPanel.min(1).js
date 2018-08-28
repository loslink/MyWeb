Site.initFaiFloatPanelIcon = function() {
	var b = [];
	b.push("<div id='faiFloatPanelIconContainer' class='faiFloatPanelIconContainer' location='left' status='1'>");
	b.push("<div class='faiFloatPanelIconBox faiFloatPanelIconBox-first'><a href='javascript:;' id='faiFloatPanel_addNewModule' class='faiFloatPanel_addNewModule' onclick='Site.faiFloatPanel(0);return false;' hidefocus='true'></a></div>");
	b.push("<div class='faiFloatPanelIconBox'><a href='javascript:;' id='faiFloatPanel_setSiteStyle' class='faiFloatPanel_setSiteStyle' onclick='Site.faiFloatPanel(2);return false;' hidefocus='true'></a></div>");
	b.push("</div>");
	Fai.top.$("body").append(b.join(""));
	var a = Fai.top.$("#faiFloatPanelIconContainer");
	var d = "<a href='javascript:;'  id='faiFloatPanel_addNewModule' class='faiFloatPanel_addNewModule' onclick='Site.faiFloatPanel(0);return false;' hidefocus='true'></a>";
	var c = "<a href='javascript:;'  id='faiFloatPanel_setSiteStyle' class='faiFloatPanel_setSiteStyle' onclick='Site.faiFloatPanel(2);return false;' hidefocus='true'></a>";
	Site.refreshFaiFloatPanelIconStyle();
	a.ready(function() {
		var f = 10;
		var e;
		a.draggable({
			containment: "parent",
			cursor: "move",
			scroll: false,
			start: function() {
				a.find("#faiFloatPanel_addNewModule").prop("onclick", null).addClass("draggableIcon");
				a.find("#faiFloatPanel_setSiteStyle").prop("onclick", null).addClass("draggableIcon");
				var g = Fai.top.$("#faiFloatPanel");
				if(typeof g != "undefined" && g.length > 0) {
					g.attr("status", -1)
				}
			},
			drag: function() {
				var g = Fai.top.$(".floatRightTop").offset().left;
				var h = $(this).offset().left + 52 + f;
				if($(this).offset().left < f) {
					$(this).removeClass("faiFloatPanelIconContainer_right").addClass("faiFloatPanelIconContainer_left")
				} else {
					if(h > g) {
						$(this).removeClass("faiFloatPanelIconContainer_left").addClass("faiFloatPanelIconContainer_right")
					} else {
						if($(this).hasClass("faiFloatPanelIconContainer_left")) {
							$(this).removeClass("faiFloatPanelIconContainer_left")
						} else {
							if($(this).hasClass("faiFloatPanelIconContainer_right")) {
								$(this).removeClass("faiFloatPanelIconContainer_right")
							}
						}
					}
				}
				var i = Fai.top.$("#faiFloatPanel");
				if(typeof i != "undefined" && i.length > 0) {
					i.attr("status", -1)
				}
			},
			stop: function(g, k) {
				var l = Fai.top.$(".floatRightTop").offset().left;
				var p = l / 2;
				var n = Fai.top.$(".floatRightTop").offset().top;
				var i = $(this).offset().left;
				var o = i + 52 + f;
				var h = Fai.top.$("#faiFloatPanel");
				if(i < f) {
					$(this).removeClass("faiFloatPanelIconContainer_right").addClass("faiFloatPanelIconContainer_left");
					$(this).animate({
						left: 0
					}, 300)
				} else {
					if(o > l) {
						$(this).removeClass("faiFloatPanelIconContainer_left").addClass("faiFloatPanelIconContainer_right");
						$(this).animate({
							left: (l - 23) + "px"
						}, 500)
					} else {
						if($(this).hasClass("faiFloatPanelIconContainer_left")) {
							$(this).removeClass("faiFloatPanelIconContainer_left")
						} else {
							if($(this).hasClass("faiFloatPanelIconContainer_right")) {
								$(this).removeClass("faiFloatPanelIconContainer_right")
							}
						}
					}
				}
				a.find("#faiFloatPanel_addNewModule").replaceWith(d);
				a.find("#faiFloatPanel_setSiteStyle").replaceWith(c);
				if($(this).offset().top < n) {
					$(this).css({
						top: n + "px"
					})
				}
				var m = "left";
				var j = "";
				if(i < p) {
					$(this).attr("location", "left")
				} else {
					$(this).attr("location", "right");
					m = "right";
					j = "faiFloatPanel_right"
				}
				if(typeof h != "undefined" && h.length > 0) {
					h.attr({
						location: m,
						status: 0
					}).removeClass("faiFloatPanel_right").addClass(j);
					var q = 1 - h.outerWidth();
					if(h.attr("location") == "right") {
						q = l - 1
					}
					h.css({
						left: q + "px"
					})
				}
				$.cookie("faiFloatPanelIcon_left", $(this).offset().left, {
					expires: 365,
					path: "/"
				});
				$.cookie("faiFloatPanelIcon_top", $(this).offset().top, {
					expires: 365,
					path: "/"
				})
			}
		});
		Site.bindGobalEvent("site_hideModule_before", function(h, g) {
			if(!!Fai.top.panelModuleIconClick) {
				return
			}
			if(!g.show) {
				return
			}
			var j = 300;
			var l = Fai.top.$("#faiFloatPanel");
			if(l.length < 1 || l.attr("status") != 1) {
				j = 420;
				Site.faiFloatPanel(1)
			}
			var i = Fai.top.$("#menu_currentSectionModuleContainer");
			if(!i.hasClass("on")) {
				i.children(".menu").trigger("click")
			}
			var k = setInterval(function() {
				if(!!Fai.top.faiFloatPanelReady) {
					setTimeout(function() {
						Site.hideModuleAnimate(g)
					}, j);
					clearInterval(k)
				}
			}, 50)
		})
	});
	Fai.top.faiFloatPanelIconReady = true
};
Site.hideFaiFloatPanelIcon = function() {
	Fai.top.$("#faiFloatPanelIconContainer").attr({
		status: "0"
	}).hide()
};
Site.showFaiFloatPanelIcon = function() {
	var a = Fai.top.$("#faiFloatPanelIconContainer");
	a.attr({
		status: "1"
	}).show();
	Site.refreshFaiFloatPanelIconStyle()
};
Site.refreshFaiFloatPanelIconStyle = function(q) {
	var h = Fai.top.$("#faiFloatPanelIconContainer");
	if(h.length < 1) {
		return
	}
	if(h.attr("status") != 1) {
		return
	}
	var d = $.cookie("faiFloatPanelIcon_left", {
		path: "/"
	});
	var g = $.cookie("faiFloatPanelIcon_top", {
		path: "/"
	});
	var r = false;
	if(typeof d == "string" && typeof g == "string") {
		h.removeClass("faiFloatPanelIconContainer_left faiFloatPanelIconContainer_right");
		h.css({
			left: d + "px",
			top: g + "px"
		});
		var a = 10;
		var o = Fai.top.$(".floatRightTop").offset().left;
		var s = o / 2;
		var e = parseInt(d);
		var m = e + 52 + a;
		var p = e;
		if(e < a) {
			h.addClass("faiFloatPanelIconContainer_left");
			p = 0
		} else {
			if(m > o) {
				h.addClass("faiFloatPanelIconContainer_right");
				p = o - 23
			}
		}
		if(q) {
			h.css({
				left: p + "px"
			})
		} else {
			h.animate({
				left: p + "px"
			}, 500)
		}
		if(e < s) {
			h.attr("location", "left")
		} else {
			h.attr("location", "right")
		}
	} else {
		r = true;
		var i = Fai.top.$("#webContainer");
		var f = Fai.top.$("#guideQuick");
		if(i.length > 0) {
			var l = $(Fai.top).height();
			var b = i.offset().top;
			var j = i.offset().left;
			var n = h.width() + 40;
			var c = 0;
			if(j > n) {
				h.css({
					left: parseInt(j - n) + "px"
				})
			}
			if(l > b && l > parseInt(b + h.height()) && b > c) {}
		}
	}
	var k = Fai.top.$(".floatRightTop").offset().top;
	if(h.offset().top < k) {
		h.css({
			top: k + "px"
		})
	} else {
		if(typeof g != "undefined" && (parseInt(g) < k)) {
			g = k + ""
		}
		if(typeof d == "string" && typeof g == "string") {
			h.css({
				left: p + "px",
				top: g + "px"
			})
		}
	}
	if(r) {
		Site.refreshGuideQuickIconStyle()
	}
};
Site.faiFloatPanel = function(c, g, n) {
	Site.getPanelOptionData();
	Fai.top.draggableDiv_out = false;
	Fai.top.draggableDiv_enable = true;
	var f = c;
	if(typeof f == "undefined") {
		f = 0
	}
	var b = Fai.top.$("#faiFloatPanel");
	var l = Fai.top.$("#faiFloatPanelIconContainer");
	var a = Fai.top.$(".floatLeftTop").offset().top;
	var j = Fai.top.$(".floatLeftBottom").offset().top;
	var e = j - a;
	var k = l.attr("location");
	if(b.length < 1) {
		var d = [];
		d.push("<div id='faiFloatPanel' class='faiFloatPanel' status='0' selectTab='0' location='" + k + "' style='display:none;'>");
		d.push("	<div class='faiFloatPanelNavContainer'>");
		d.push("		<ul id='faiFloatPanelNav' class='faiFloatPanelNav'>");
		d.push("			<li><a href='javascript:;' class='addModule' onclick='Site.showPanelContent(0);return false;' title='添加模块' hidefocus='true'>&nbsp;</a></li>");
		d.push("			<li><a href='javascript:;' class='sectionModule' id='panelSectionModuleTab' onclick='Site.showPanelContent(1);return false;' title='栏目模块' hidefocus='true'>&nbsp;</a></li>");
		d.push("			<li><a href='javascript:;' class='setSiteStyle' onclick='Site.showPanelContent(2);return false;' title='网站样式' hidefocus='true'>&nbsp;</a></li>");
		d.push("		</ul>");
		d.push("		<div class='faiFloatPanel_closeBtnContainer'><a href='javascript:;' title='关闭' id='faiFloatPanel_closeBtn' class='faiFloatPanel_closeBtn' onclick='Site.fixFaiFloatPanelData();Site.hideFaiFloatPanel();return false;' hidefocus='true'></a></div>");
		d.push("	</div>");
		d.push("	<div class='faiFloatPanelContentContainer'>");
		d.push("		<ul id='faiFloatPanelContent' class='faiFloatPanelContent'>");
		d.push("		</ul>");
		d.push("	</div>");
		d.push("	<div id='faiFloatPanelOverLay' class='faiFloatPanelOverLay' style='display:none;'></div>");
		d.push("</div>");
		Fai.top.$("body").append(d.join(""));
		Site.initPanelContent(e);
		Site.updateCurrentSectionModule();
		Site.sectionModuleSelectChange(false);
		top.$(top.document).ready(function() {
			b = Fai.top.$("#faiFloatPanel");
			Site.bindEventToFloatPanel(b)
		})
	} else {
		if(b.attr("status") == 1) {
			Site.showPanelContent(f, n);
			return
		}
	}
	if(Fai.top.$("#panes").is(":visible")) {
		Site.stylePanesHide()
	}
	b.attr("location", k).css({
		opacity: "1"
	});
	var i = Fai.top.$(".floatRightTop").offset().left;
	var m = 1 - b.outerWidth();
	var h = "";
	if(b.attr("location") == "right") {
		h = "faiFloatPanel_right";
		m = i - 1
	}
	b.css({
		left: m + "px"
	}).removeClass("faiFloatPanel_right").addClass(h);
	Site.refreshPanelStyle();
	Site.showFaiFloatPanel(g);
	Site.showPanelContent(f, n);
	Site.hideFaiFloatPanelIcon()
};
Site.hideFaiFloatPanel = function(a) {
	var d = Fai.top.$("#faiFloatPanel");
	if(d.length > 0 && (d.attr("status") == 1)) {
		var c = 1 - d.outerWidth();
		var b = Fai.top.$(".floatRightTop").offset().left;
		if(d.attr("location") == "right") {
			c = b - 1
		}
		Fai.top._appendArea = "";
		if(a) {
			d.attr("status", "0").css({
				left: c + "px"
			}).hide()
		} else {
			d.attr("status", "0").animate({
				left: c + "px"
			}, 300);
			setTimeout(function() {
				d.hide()
			}, 300)
		}
		Site.showFaiFloatPanelIcon()
	}
};
Site.showFaiFloatPanel = function(a) {
	var e = Fai.top.$("#faiFloatPanel");
	var b = 300;
	if(a) {
		b = 1
	}
	if(typeof e == "undefined" || (e.length < 1)) {
		return
	}
	e.show();
	if(e.attr("status") > -1) {
		var c = Fai.top.$(".floatRightTop").offset().left;
		var d = c - e.outerWidth() + 1;
		if(e.attr("location") == "left") {
			e.stop(true).attr({
				status: "1"
			}).animate({
				left: "0px"
			}, b)
		} else {
			e.stop(true).attr({
				status: "1"
			}).animate({
				left: d + "px"
			}, b)
		}
		if(Fai.isIE6()) {
			Fai.top.$("body").css({
				width: "99%"
			}).css({
				width: "auto"
			})
		}
	}
};
Site.switchTabAnimate = function(f, a, e) {
	var b = Fai.top.$("#setSiteStyleContentContainer");
	if(typeof f != "string" || b.length < 1 || e === 0) {
		return
	}
	var c, d;
	b.find(".panelItemContainer").hide();
	b.find(f).next().show();
	if(a) {
		c = b.outerWidth() || 0;
		d = e > 0 ? -c : c;
		b.mCustomScrollbar("scrollTo", "top", {
			scrollInertia: 0
		});
		b.css("left", d).animate({
			left: 0
		}, 150)
	}
};
Site.showPanelContent = function(c, h) {
	Site.panelDisableArea.enableAllTypesettingModule();
	Site.panelDisableArea.removeDisableMask();
	Fai.top.$("#faiFloatPanel").attr({
		selectTab: c
	}).show();
	var b = Fai.top.$("#faiFloatPanelNav").children("li");
	var d = Fai.top.$("#faiFloatPanelContent").children("li");
	if(typeof c == "undefined") {
		c = 0
	}
	var i = parseInt(c);
	if(i == 0) {
		Site.logDog(100078, 0);
		Site.logDog(100079, 0);
		var f = $.cookie("faiFloatPanelPrompt", {
			path: "/"
		});
		if(!!!f) {
			var g = 125;
			var a = Fai.top.$("#faiFloatPanelIconContainer").attr("location");
			if(a == "left") {
				g = Fai.top.$(".floatLeftTop").offset().top + 101
			} else {
				g = Fai.top.$(".floatRightTop").offset().top + 103
			}
			if(Fai.top.$("#addModuleMenuList li").length > 6) {
				g += 35
			}
			tmp = [];
			tmp.push("<div class='popupBg' id='panelAddNewModulePrompt'>");
			tmp.push("		<div class='panelAddNewModulePrompt-div panelAddNewModulePrompt-" + a + "' style='top:" + g + "px;'>");
			tmp.push("			<a href='javascript:;' onclick='Site.faiFloatPanelPrompt();return false;' class='panelAddNewModule-understandPrompt panelAddNewModule-understandPrompt-" + a + "'>&nbsp;</a>");
			tmp.push("		</div>");
			tmp.push("</div>");
			Fai.top.$("body").append(tmp.join(""))
		}
	} else {
		if(i == 1) {
			Site.logDog(100078, 2);
			Site.logDog(100082, 0)
		} else {
			if(i == 2) {
				Site.logDog(100078, 1);
				Site.logDog(100080, 0)
			}
		}
	}
	if(typeof h != "undefined" && h > -1) {
		d.eq(c).find(".panelMenuList li").removeClass("on").eq(h).addClass("on")
	}
	b.removeClass("on").eq(parseInt(c)).addClass("on");
	d.hide().eq(parseInt(c)).show();
	var e = d.eq(c).find(".panelMenuList li.on .menu");
	if(c == 2) {
		Site.switchTabAnimate("#" + e.attr("nav"), false)
	}
	if(Fai.isIE6() || Fai.isIE7()) {
		e[0].click()
	} else {
		setTimeout(function() {
			$(".panelContentContainer").mCustomScrollbar("scrollTo", "#" + e.attr("nav") + "", {
				scrollInertia: 0
			})
		}, 100)
	}
	Site.refreshPanelStyle()
};
Site.refreshPanelStyle = function() {
	var e = Fai.top.$("#faiFloatPanel");
	if(typeof e == "undefined" || e.length < 1) {
		return
	}
	var a = Fai.top.$(".floatLeftTop").offset().top,
		k = Fai.top.$(".floatLeftBottom").offset().top,
		i = k - a,
		l = Fai.top.$(".floatRightTop").offset().left,
		b = Fai.top.$("#addModuleContentContainer"),
		f = Fai.top.$("#setSiteStyleContentContainer"),
		g = Fai.top.$("#sectionModuleContentContainer"),
		j = Fai.top.$("#addModuleMenuList").parent().height(),
		d = Fai.top.$("#sectionModuleMenuList").parent().height(),
		o = Fai.top.$("#setSiteStyleMenuList").parent().height(),
		n = i - 38 - 10,
		h = n - o - 24,
		c = n - j,
		m = n - d - 24,
		p;
	if(e.attr("status") != 0) {
		p = l - e.outerWidth() + 1;
		if(e.attr("location") == "right") {
			e.css({
				left: p + "px"
			})
		}
	}
	e.css({
		top: a + "px",
		height: i + 6 + "px"
	});
	if(Fai.top.$("#panelOemPrompt").length > 0) {
		h -= 30
	}
	if(Fai.top.$("#otherSectionSelecterContainer").is(":visible")) {
		m -= 45
	}
	b.css({
		height: c + "px"
	});
	f.css({
		height: h + "px"
	});
	g.css({
		height: m + "px"
	});
	Site.refreshFillDiv()
};
Site.refreshFillDiv = function() {
	var f = Fai.top.$("#addModuleContentContainer");
	var b = f.find(".splitLine");
	var m = f.find(".panelContentFillDiv");
	var p = f.offset().top;
	var a = f.outerHeight();
	var c = m.offset().top;
	var n = 0;
	var j = (c - p) % a;
	n = a - f.find(".panelItemContainer").last().outerHeight();
	m.css({
		height: n + "px"
	});
	var e = Fai.top.$("#setSiteStyleContentContainer");
	var i = e.find(".splitLine");
	var o = e.find(".panelContentFillDiv");
	var h = e.offset().top;
	var l = e.outerHeight();
	var g = o.offset().top;
	var k = 0;
	var d = (g - h) % l;
	k = l - e.find(".panelItemContainer").last().outerHeight();
	o.css({
		height: k + "px"
	})
};
Site.initPanelContent = function(e) {
	var d = [];
	d = Site.getPanelModuleList();
	var g = [];
	g = Site.getPanelStyleList();
	var h = [];
	h = Site.getPanelSectionModuleList();
	var f = "sectionModuleMenuList";
	var b = "addModuleMenuList";
	var c = Site.initBlockOfPanelContent(b, d, "addModuleContentContainer");
	var i = Site.initBlockOfPanelContent("setSiteStyleMenuList", g, "setSiteStyleContentContainer");
	var a = Site.initBlockOfPanelContent(f, h, "sectionModuleContentContainer");
	Fai.top.$("#faiFloatPanelContent").append(c);
	Fai.top.$("#faiFloatPanelContent").append(a);
	Fai.top.$("#faiFloatPanelContent").append(i);
	Site.addSetSiteStyleContent("setSiteStyleContentContainer", g, e);
	Site.addModuleContent("addModuleContentContainer", d, e);
	Site.addSectionModuleContent("sectionModuleContentContainer", h);
	Site.addCurrentSectionModuleSearch(f, "sectionModuleContentContainer");
	Site.addCurrentSectionModuleSearch(b, "addModuleContentContainer")
};
Site.initBlockOfPanelContent = function(b, f, g) {
	var e = [];
	e.push("<li style='display:none;'>");
	e.push("	<div class='panelMenuContainer'>");
	e.push("		<ul class='panelMenuList' id='" + b + "'>");
	for(var d = 0; d < f.length; d++) {
		var a = f[d].anchor;
		var c = "";
		if(f[d].script) {
			c = f[d].script
		}
		e.push("			<li id='menu_" + a + "'><a href='javascript:;' class='menu' nav='" + a + "' id='" + (b + d) + "' onclick='" + c + "return false;' hidefocus='true'>" + f[d].name + "<span class='panelCorner'></span></a><span class='panelTriangle'></span></li>")
	}
	e.push("		</ul>");
	e.push("	</div>");
	e.push("	<div id='" + g + "TopLine'></div>");
	e.push("	<div class='panelContentContainer " + g + "' id='" + g + "' style='position:relative;'>");
	e.push("	</div>");
	e.push("</li>");
	return e.join("")
};
Site.addSetSiteStyleContent = function(a, p, m) {
	var f = [];
	for(var g = 0; g < p.length; g++) {
		var e = p[g];
		var q = e.name;
		var l = e.list;
		var n = e.anchor;
		var k = e.id;
		f.push("<div class='splitLine' id='" + n + "'></div>");
		f.push("<div class='panelItemContainer' id='" + k + "'>");
		f.push("	<fieldset class='panelItemBox'>");
		if(Fai.top._oem && !Fai.top._panelOptionData.allowedStyle) {
			f.push("		<legend class='panelSiteGroupOMid' title='" + q + "样式为“网站 ”功能'>" + q + "</legend>")
		} else {
			f.push("		<legend>" + q + "</legend>")
		}
		f.push("		<div class='panelItemContent'>");
		f.push("				<ul>");
		for(var c = 0; c < l.length; c++) {
			var o = l[c].title;
			var h = l[c].extclass || "";
			var d = l[c].content;
			var b = "";
			if(l[c].id) {
				b = "panelOptionBox-" + l[c].id
			}
			if(b != "") {
				f.push("					<li class='panelOptionBox " + h + "' id='" + b + "'>")
			} else {
				f.push("					<li class='panelOptionBox " + h + "'>")
			}
			f.push("						<p class='panelOptionTitle'>" + o + "</p>");
			f.push("						<div class='panelOptionContent'>");
			f.push("							\n" + d.join(""));
			f.push("						</div>");
			f.push("					</li>")
		}
		f.push("				</ul>");
		f.push("		</div>");
		f.push("	</fieldset>");
		f.push("</div>")
	}
	f.push("<div class='panelContentFillDiv'></div>");
	Fai.top.$("#" + a).append(f.join(""));
	f = [];
	f.push("<div class='panelFootBtnBox'>");
	f.push("<a href='javascript:;' onclick='Fai.top.panelFunc.resetDefault();return false;' class='panelBtn panelBtn_setSiteStyle'>恢复默认</a>");
	jzUtils.run({
		name: "baseStyleTool.editBtnHtml"
	}, f);
	f.push("</div>");
	Fai.top.$("#" + a).after(f.join(""));
	if(Fai.top._oem && !Fai.top._panelOptionData.allowedStyle) {
		f = [];
		f.push("<div class='panelPromptBox' id='panelOemPrompt'><p class='panelPrompt'>网站样式为<span class='panelSiteGroupOMid2' >&nbsp;</span>中级版功能，选择中级版以上主题可试用</p></div>");
		Fai.top.$("#" + a).prev("#" + a + "TopLine").before(f.join(""))
	}
};
Site.addModuleContent = function(a, k, l) {
	var e = [];
	for(var f = 0; f < k.length; f++) {
		var d = k[f];
		var p = d.name;
		var h = d.list;
		var m = d.anchor;
		var n = d.extclass || "";
		e.push("<div class='splitLine' id='" + m + "'></div>");
		e.push("<div class='panelItemContainer " + n + "'>");
		e.push("	<fieldset class='panelItemBox'>");
		e.push("		<legend>" + p + "</legend>");
		e.push("		<div class='panelItemContent'>");
		e.push("				<ul class='panelModuleIconContainer'>");
		for(var c = 0; c < h.length; c++) {
			var g = h[c].title;
			var o = h[c].className;
			var b = h[c].param;
			e.push("					<li class='panelModuleIconContent panelModuleIcon_" + o + "'  _intab='0' _inmulmcol='0'>");
			e.push("						<a href='javascript:;' class='panelModuleIcon' onclick='Site.bindEventToFloatPanel_addNewModule(\"" + b + "\");return false;'></a>");
			e.push("						<a href='javascript:;' class='panelModuleTitle' onclick='Site.bindEventToFloatPanel_addNewModule(\"" + b + "\");return false;' title='" + g + "'>" + g + "</a>");
			e.push("					</li>")
		}
		e.push("				</ul>");
		e.push("		</div>");
		e.push("	</fieldset>");
		e.push("</div>")
	}
	e.push("<div class='panelContentFillDiv'></div>");
	Fai.top.$("#" + a).append(e.join(""))
};
Site.addSectionModuleContent = function(e, d) {
	var c = [];
	var a = Fai.top._panelOptionData.selectOptionList;
	for(var b = 0; b < d.length; b++) {
		c.push("<div id='" + d[b].id + "' class='" + d[b].id + "' style='display:none;'></div>")
	}
	c.push("<div class='panelContentFillDiv'></div>");
	Fai.top.$("#" + e).append(c.join(""));
	c = [];
	c.push("<div class='panelFootBtnBox'><a href='javascript:;' onclick='Site.popupWindow({title:\"管理模块\", frameSrcUrl:\"manage/moduleManage.jsp?ram=\"+Math.random(), width:\"615\", height:\"725\",version:2});Site.removeAllEditLayer();return false;'  class='panelBtn panelBtn_manageModule'>管理模块</a></div>");
	Fai.top.$("#" + e).after(c.join(""));
	c = [];
	c.push("<div id='otherSectionSelecterContainer' class='otherSectionSelecterContainer' style='display:none;'>");
	c.push("		<label>选择栏目：</label>");
	c.push("		<select onchange='Site.sectionModuleSelectChange(true, true);' id='panelOtherSectionSelecter' class='panelOtherSectionSelecter'>");
	for(var b = 0; b < a.length; b++) {
		c.push(a[b])
	}
	c.push("		</select>");
	c.push("		<div id='otherSectionSelecterPrompt' class='otherSectionSelecterPrompt'><div class='otherSectionSelecterPrompt-tip'></div><p>此为当前栏目，请选择其他栏目<p></div>");
	c.push("</div>");
	Fai.top.$("#" + e).prev("#" + e + "TopLine").before(c.join(""))
};
Site.addCurrentSectionModuleSearch = function(j, a) {
	var c = Fai.top.$("#" + j),
		f = [],
		g;
	if(c.length < 1) {
		return
	}
	f.push("<div class='currentSectionModuleSearchBox J_currentSectionModuleSearchBox'>");
	f.push("<div class='search-outerBox'>");
	f.push("<div class='search-ico J_search-ico'></div>");
	f.push("<div class='search-innerBox J_search-innerBox'>");
	f.push("<div  class='inputContent J_inputContent'><input type='text'  maxlength='255' placeholder='模块名称' class='J_currentSectionModuleSearch'/></div>");
	f.push("<div class='clear-ico J_clear-ico'></div>");
	f.push("</div>");
	f.push("</div>");
	f.push("</div>");
	g = f.join("");
	c.after(g);
	var e = c.siblings(".J_currentSectionModuleSearchBox");
	if(e < 1) {
		return
	}
	var i = e.find(".J_search-innerBox"),
		k = e.find(".J_currentSectionModuleSearch"),
		m = e.find(".J_search-ico"),
		n = e.find(".J_clear-ico"),
		l = document.createElement("input"),
		b = "placeholder" in l,
		d = Fai.top.Fai.isIE(),
		h = Fai.top.Fai.isSafari();
	m.on("click.search", function() {
		i.show();
		k.animate({
			width: 130
		}, 150, function() {
			var o = $(this);
			if(!b && o.siblings(".J_wrap-placeholder").length < 1) {
				Site.placeholder(k)
			}
			if(!(d || h)) {
				o.focus()
			}
		})
	});
	n.on("click.clear", function() {
		k.animate({
			width: 0
		}, 150, function() {
			$(this).attr("value", "");
			k.trigger("keyup");
			i.hide()
		})
	});
	if(a == "sectionModuleContentContainer") {
		k.off("keyup.sectionModule").on("keyup.sectionModule", Site.updateCurrentModuleBySearcher).on("click.focusInput", function() {
			$(this).focus()
		})
	} else {
		if(a == "addModuleContentContainer") {
			k.off("keyup.addModule").on("keyup.addModule", Site.updateAddtModuleBySearcher).on("click.focusInput", function() {
				$(this).focus()
			})
		}
	}
};
Site.updateCurrentModuleBySearcher = function() {
	var d = Fai.top.$("#currentSectionModuleContainer");
	if(d.length < 1) {
		return
	}
	var g = d.find(".J_panelModuleIconContainer"),
		b = g.children("li"),
		k = $(this),
		e = d.find(".J_noFoundTip"),
		f = $.trim(k.val()),
		h = false,
		a = [],
		c, j, i;
	if(e.length > 0) {
		e.hide().remove()
	}
	if(b.length > 0) {
		if(f.length < 1) {
			b.show();
			return
		}
		b.hide();
		b.each(function(l, m) {
			j = $(m);
			i = j.attr("fk_searchKey");
			c = $.trim(j.find(".J_panelModuleTitle").val());
			if(i != "undefined" && i.indexOf(f) > -1 || c.indexOf(f) > -1) {
				j.show();
				h = true
			}
		})
	}
	if(!h) {
		var e = g.siblings(".J_noFoundTip");
		if(e.length > 0) {
			e.show()
		} else {
			g.after("<div class='J_noFoundTip' style='text-align:center;color:#666;margin-top:40px;'>抱歉，搜索不到该模块...</div>")
		}
	}
};
Site.updateAddtModuleBySearcher = function() {
	var a = Fai.top.$("#addModuleContentContainer");
	if(a.length < 1) {
		return
	}
	var d = a.find(".mCSB_container"),
		b = d.children().not("#addModuleCon"),
		k = d.find(".panelModuleIconContainer  li"),
		i = $(this),
		c = d.find(".J_noFoundTip"),
		e = $.trim(i.val()),
		j, h, f = false;
	var g = d.find("#addModuleCon");
	if(g.length == 0) {
		d.append("<div id='addModuleCon' class='addModuleCon'></div>")
	}
	if(c.length > 0) {
		c.remove()
	}
	if(k.length > 0) {
		if(e.length < 1) {
			$("#addModuleCon").hide().remove();
			b.show();
			return
		}
		$("#addModuleCon").empty();
		k.each(function(l, m) {
			j = $(m);
			h = j.find(".panelModuleTitle").text();
			if($.trim(h).indexOf(e) > -1) {
				f = true;
				$("#addModuleCon").append(j.clone());
				$("#addModuleCon").siblings().hide();
				$("#addModuleCon").show()
			}
		});
		Site.faiFloatPanelModuleDraggable()
	}
	if(!f) {
		var c = d.find(".J_noFoundTip");
		b.hide();
		if(c.length > 0) {
			c.show()
		} else {
			d.append("<div class='J_noFoundTip' style='text-align:center;color:#666;margin-top:40px;'>抱歉，搜索不到该模块...</div>")
		}
	}
};
Site.placeholder = function(b) {
	var a = "placeholder" in document.createElement("input");
	if(!a) {
		b.each(function(g, c) {
			var f = $(this),
				d = f.attr("placeholder"),
				j = f.position(),
				e = f.outerHeight(true),
				k = f.outerWidth(true),
				m = f.css("padding-left"),
				l = f.css("padding-top"),
				i = $("<span class='J_wrap-placeholder'></span>").text(d).css({
					display: "inline-block",
					height: e,
					"line-height": e + "px",
					position: "absolute",
					left: j.left,
					top: j.top,
					paddingLeft: 8,
					paddingTop: l,
					color: "#aaa"
				});
			i.appendTo(f.parent());
			f.on("focusin keyup", function() {
				f.val() != "" ? i.hide() : i.show()
			});
			i.on("click", function() {
				f.focus()
			})
		})
	}
};
Site.getModuleDefaultName = function() {
	var a = {
		rich: "图文展示",
		floatImg: "图片",
		photo: "图册展示",
		list_photos: "列表多图",
		carousel_photos: "轮播多图",
		article: "文章列表",
		notice: "滚动公告",
		weather: "天气信息",
		tab: "模块组",
		"tab panelModuleIcon_tab_horizonal": "横向标签",
		"tab panelModuleIcon_tab_tab_vertical": "纵向标签",
		"mulModuleCol-two panelModuleIcon_mulModuleCol": "二列排版",
		"mulModuleCol-three panelModuleIcon_mulModuleCol": "三列排版",
		"mulModuleCol-four panelModuleIcon_mulModuleCol": "四列排版",
		"mulModuleCol-five panelModuleIcon_mulModuleCol": "五列排版",
		"mulModuleCol-multi panelModuleIcon_mulModuleCol": "多列排版",
		fullmeasure: "通栏模块",
		product: "产品展示",
		productGroup: "产品分类",
		productLabel: "产品标签",
		catalog: "产品目录",
		filter: "产品筛选",
		productSearch: "产品搜索",
		productNav: "产品导航",
		memberLogin: "会员登录",
		siteQrCode: "网站二维码",
		siteSearch: "全站搜索",
		shareTo: "分享网站",
		msgSubmit: "留言提交",
		shoppingCart: "购物车",
		vote: "在线投票",
		siteForm: "在线表单",
		mallCoupon: "优惠券",
		photoCard: "魔方图册",
		photoMoreCard: "魔方多图",
		link: "图文链接",
		newsgroup: "文章分类",
		photoGroupNav: "图册导航",
		photoGroup: "图册目录",
		nav: "栏目导航",
		floatBtn: "按钮",
		file: "文件下载",
		flv: "在线视频",
		flash: "Flash",
		map: "在线地图",
		weiboShow: "新浪微博秀",
		date: "当前时间",
		location: "当前位置",
		table: "简易表格",
		indexFavorite: "收藏本站",
		iframe: "嵌入页面",
		code: "插件代码",
		sys: "ui检查",
		cust: "定制",
		media: "本地视频",
		simpleText: "文本",
		productMallGroup: "商城分类",
		pack: "自由容器"
	};
	return a
};
Site.getPanelModuleList = function() {
	var b = [];
	var a = [];
	a.push({
		title: "文本",
		className: "simpleText",
		param: "simpleText"
	});
	a.push({
		title: "图片",
		className: "floatImg",
		param: "floatImg"
	});
	a.push({
		title: "按钮",
		className: "floatBtn",
		param: "floatBtn"
	});
	b.push({
		name: "常用",
		list: a,
		anchor: "commLine"
	});
	a = [];
	a.push({
		title: "图文展示",
		className: "rich",
		param: "rich"
	});
	a.push({
		title: "列表多图",
		className: "list_photos",
		param: "list_photos"
	});
	a.push({
		title: "轮播多图",
		className: "carousel_photos",
		param: "carousel_photos"
	});
	a.push({
		title: "文章列表",
		className: "article",
		param: "article"
	});
	a.push({
		title: "图册目录",
		className: "photoGroup",
		param: "photoGroup"
	});
	a.push({
		title: "天气信息",
		className: "weather",
		param: "weather"
	});
	b.push({
		name: "基础",
		list: a,
		anchor: "basicLine"
	});
	a = [];
	a.push({
		title: "自由容器",
		className: "pack",
		param: "pack"
	});
	a.push({
		title: "横向标签",
		className: "tab panelModuleIcon_tab_horizonal",
		param: "tabHorizonal"
	});
	a.push({
		title: "纵向标签",
		className: "tab panelModuleIcon_tab_tab_vertical",
		param: "tabVertical"
	});
	a.push({
		title: "多列排版",
		className: "mulModuleCol_multi panelModuleIcon_mulModuleCol",
		param: "mulModuleColMulti"
	});
	a.push({
		title: "通栏排版",
		className: "fullmeasure",
		param: "fullmeasure"
	});
	b.push({
		name: "排版",
		list: a,
		anchor: "layoutLine",
		extclass: "J_layoutModule"
	});
	a = [];
	a.push({
		title: "产品展示",
		className: "product",
		param: "product"
	});
	a.push({
		title: "产品搜索",
		className: "productSearch",
		param: "productSearch"
	});
	a.push({
		title: "产品导航",
		className: "productNav",
		param: "productNav"
	});
	a.push({
		title: "商城分类",
		className: "productMallGroup",
		param: "productMallGroup"
	});
	if(Fai.top._panelOptionData.allowCoupon && Fai.top._siteType != 1) {
		a.push({
			title: "优惠券",
			className: "mallCoupon",
			param: "mallCoupon"
		})
	}
	b.push({
		name: "产品",
		list: a,
		anchor: "productLine"
	});
	a = [];

	a.push({
		title: "会员登录",
		className: "memberLogin",
		param: "memberLogin"
	});
	if(Fai.top._openMSite) {
		a.push({
			title: "网站二维码",
			className: "siteQrCode",
			param: "siteQrCode"
		})
	}
	a.push({
		title: "全站搜索",
		className: "siteSearch",
		param: "siteSearch"
	});
	a.push({
		title: "分享网站",
		className: "shareTo",
		param: "shareTo"
	});
	a.push({
		title: "留言提交",
		className: "msgSubmit",
		param: "msgSubmit"
	});
	if(Fai.top._siteType != 1) {
		a.push({
			title: "购物车",
			className: "shoppingCart",
			param: "shoppingCart"
		})
	}
	a.push({
		title: "在线投票",
		className: "vote",
		param: "vote"
	});
	a.push({
		title: "在线表单",
		className: "siteForm",
		param: "siteForm"
	});
	b.push({
		name: "互动",
		list: a,
		anchor: "interactive"
	});
	a = [];
	a.push({
		title: "魔方多图",
		className: "photoMoreCard",
		param: "photoMoreCard"
	});
	a.push({
		title: "文章导航",
		className: "newsgroup",
		param: "newsgroup"
	});
	a.push({
		title: "图册导航",
		className: "photoGroupNav",
		param: "photoGroupNav"
	});
	a.push({
		title: "滚动公告",
		className: "notice",
		param: "notice"
	});
	a.push({
		title: "栏目导航",
		className: "nav",
		param: "nav"
	});
	a.push({
		title: "文件下载",
		className: "file",
		param: "file"
	});
	a.push({
		title: "在线视频",
		className: "media",
		param: "flv"
	});
	a.push({
		title: "Flash",
		className: "flash",
		param: "flash"
	});
	a.push({
		title: "在线地图",
		className: "map",
		param: "map"
	});
	a.push({
		title: "新浪微博秀",
		className: "weiboShow",
		param: "weiboShow"
	});
	a.push({
		title: "当前时间",
		className: "date",
		param: "date"
	});
	a.push({
		title: "当前位置",
		className: "location",
		param: "location"
	});
	a.push({
		title: "收藏本站",
		className: "indexFavorite",
		param: "indexFavorite"
	});
	a.push({
		title: "嵌入页面",
		className: "iframe",
		param: "iframe"
	});
	a.push({
		title: "插件代码",
		className: "code",
		param: "code"
	});
	if(Fai.top._panelOptionData.webDebug) {
		a.push({
			title: "UI检查(dev)",
			className: "cust",
			param: "uicheck"
		})
	}
	if(Fai.top._panelOptionData.schemeCust) {
		a.push({
			title: "定制",
			className: "cust",
			param: "cust"
		})
	}
	b.push({
		name: "高级",
		list: a,
		anchor: "advancedLine"
	});
	a = [];
	a.push({
		title: "产品分类",
		className: "productGroup",
		param: "productGroup"
	});
	a.push({
		title: "产品标签",
		className: "productLabel",
		param: "productLabel"
	});
	a.push({
		title: "产品目录",
		className: "catalog",
		param: "catalog"
	});
	a.push({
		title: "产品筛选",
		className: "filter",
		param: "filter"
	});
	a.push({
		title: "图册展示",
		className: "photo",
		param: "photo"
	});
	if(!Fai.top._oem && Fai.top._aid > 14240000) {
		a.pop()
	}
	b.push({
		name: "即将下架",
		list: a,
		anchor: "willOffline"
	});
	if(Fai.top._debug) {
		a = [];
		a.push({
			title: "简易表格",
			className: "table",
			param: "table"
		});
		a.push({
			title: "魔方图册",
			className: "photoCard",
			param: "photoCard"
		});
		a.push({
			title: "图文链接",
			className: "link",
			param: "link"
		});
		b.push({
			name: "旧模块",
			list: a,
			anchor: "oldLine"
		})
	}
	return b
};
Site.getPanelStyleList = function() {
	var b = [];
	var a = [];
	a = Site.getBackgroundStyleOptionList();
	b.push({
		name: "背景",
		list: a,
		anchor: "bgStyleLine",
		id: "panelItemContainer_bg"
	});
	a = Site.getTopStyleOptionList();
	b.push({
		name: "顶部",
		list: a,
		anchor: "topStyleLine",
		id: "panelItemContainer_top"
	});
	if(!_useBannerVersionTwo) {
		a = Site.getBannerStyleOptionList();
		b.push({
			name: "横幅区",
			list: a,
			anchor: "bannerStyleLine",
			id: "panelItemContainer_banner"
		})
	}
	a = Site.getContentStyleOptionList();
	b.push({
		name: "内容区",
		list: a,
		anchor: "contentStyleLine",
		id: "panelItemContainer_content"
	});
	a = Site.getFootStyleOptionList();
	b.push({
		name: "底部",
		list: a,
		anchor: "footStyleLine",
		id: "panelItemContainer_foot"
	});
	jzUtils.run({
		name: "baseStyleTool.getUIEditHtml"
	}, b);
	jzUtils.run({
		name: "baseStyleTool.getModuleAdditionStyleMenuList"
	}, b);
	return b
};
Site.getBackgroundStyleOptionList = function() {
	var b = [];
	var a = [];
	a.push("<div class='contentFirst'>");
	a.push("	<input id='useSysSiteWidth' type='radio' name='SiteWidth' value='0' onclick='Fai.top.panelFunc.changeSiteWidth(0,true);' /><label for='useSysSiteWidth' class='labelForInput'>默认</label>");
	a.push("	<input id='useCusSiteWidth' type='radio' name='SiteWidth' value='1' onclick='Fai.top.panelFunc.changeSiteWidth(1,true);' /><label for='useCusSiteWidth' class='labelForInput'>自定义</label>");
	a.push("</div>");
	a.push("<div class='contentSecond'>");
	a.push("	<div id='setBackgroundWidth-box' class='optionRow' >");
	a.push("		<div class='labelForLeftTitle'>大小：</div>");
	a.push("		<div class='optionRowOfInput setOperate '>");
	a.push("			<div id='setBackgroundWidth' class='setSliderBar'></div>");
	a.push("			<div id='setBackgroundWidthContainer' class='setSliderLetter'></div>");
	a.push("		</div>");
	a.push("	</div>");
	a.push("</div>");
	b.push({
		title: "宽度",
		content: a
	});
	a = [];
	a.push("<div class='contentFirst'>");
	a.push("	<input id='useSysBackground' type='radio' name='webBg' value='0' onClick='Fai.top.panelFunc.changeWebBg(0);'/><label for='useSysBackground' class='labelForInput'>默认</label>");
	a.push("	<input id='hideBackground' type='radio' name='webBg' value='1' onClick='Fai.top.panelFunc.changeWebBg(1);'/><label for='hideBackground' class='labelForInput'>隐藏</label>");
	a.push("	<input id='useCusBackground' type='radio' name='webBg' value='2' onClick='Fai.top.panelFunc.changeWebBg(2);'/><label for='useCusBackground' class='labelForInput'>自定义</label>");
	a.push("</div>");
	a.push("<div id='cusPanel'class='contentSecond'>");
	a.push("	<div class='optionRow'>");
	a.push("		<label class='labelForLeftTitle'>颜色：</label>");
	a.push("		<div id='colorPicker' class='colorPicker'></div>");
	a.push("	</div>");
	a.push("	<div class='optionRow'>");
	a.push("		<label class='imgLabel labelForLeftTitle'>图片：</label>");
	a.push("		<div><input type='button' id='fileUploadV2' class='left faiButton' value='添加图片'/></div>");
	a.push("		<div id='uploadmsgBg' class='uploadmsg'></div>");
	a.push("	</div>");
	a.push("<div class='J_previewContent optionRow f-previewContent-none'>");
	a.push("<div class='f-previewWrap'>");
	a.push("<div class='f-preview J_preview'>");
	a.push("</div>");
	a.push("</div>");
	a.push("</div>");
	a.push("	<div class='optionRow'>");
	a.push("		<label class='labelForLeftTitle'>显示方式：</label>");
	a.push("		<select id='bgDisplay' class='left optionRowOfSelect' onChange='Fai.top.panelFunc.bgDisplayChange(this);'>");
	a.push("			<option value='-1'>不使用背景图片</option>");
	a.push("			<option value='0'>不平铺（居中）</option>");
	a.push("			<option value='3'>完全平铺</option>");
	a.push("			<option value='4'>拉伸平铺</option>");
	a.push("			<option value='5'>缩放平铺（等比例）</option>");
	a.push("			<option value='21'>纵向平铺（左边对齐）</option>");
	a.push("			<option value='2'>纵向平铺（中间对齐）</option>");
	a.push("			<option value='22'>纵向平铺（右边对齐）</option>");
	a.push("			<option value='11'>横向平铺（顶部对齐）</option>");
	a.push("			<option value='1'>横向平铺（中部对齐）</option>");
	a.push("			<option value='12'>横向平铺（底部对齐）</option>");
	a.push("			<option value='6'>不平铺（左对齐）</option>");
	a.push("			<option value='7'>不平铺（右对齐）</option>");
	a.push("			<option value='8'>不平铺（上对齐）</option>");
	a.push("			<option value='9'>不平铺（下对齐）</option>");
	a.push("			<option value='13'>不平铺（左上对齐）</option>");
	a.push("			<option value='14'>不平铺（右上对齐）</option>");
	a.push("			<option value='15'>不平铺（左下对齐）</option>");
	a.push("			<option value='16'>不平铺（右下对齐）</option>");
	a.push("		</select>");
	a.push("	</div>");
	a.push("	<div id='bgEffect' class='optionRow'>");
	a.push("		<label class='labelForLeftTitle2'>效果：</label>");
	a.push("		<div class='optionRowOfInput2'>");
	a.push("			<input id='scrollEffect' type='radio' name='effect'  value='0' onclick='Fai.top.panelFunc.changeWebBgEffect(0);' /><label for='scrollEffect' class='labelForInput'>默认</label>");
	a.push("			<input id='fixedEffect' type='radio' name='effect'  value='1' onclick='Fai.top.panelFunc.changeWebBgEffect(1);' /><label for='fixedEffect' class='labelForInput'>锁定背景图片</label>");
	a.push("		</div>");
	a.push("	</div>");
	a.push("</div>");
	b.push({
		title: "背景",
		content: a
	});
	return b
};
Site.getTopStyleOptionList = function() {
	var b = [];
	var a = [];
	a.push("<div class='contentFirst optionRow'>");
	a.push("	<div class='left optionRowOfInput'>");
	a.push("		<input id='topStyleDefault' type='radio' name='topStyleHeight' /><label for='topStyleDefault' class='labelForInput'>默认</label>");
	a.push("		<input id='topStyleCustom' type='radio' name='topStyleHeight' /><label for='topStyleCustom' class='labelForInput'>自定义</label>");
	a.push("	</div>");
	a.push("	<div id='settingHeightInputWrap' class='settingHeightInputWrap'>");
	a.push("		<input id='settingHeightInput' class='settingHeightInput' type='text' onKeyUp='Fai.top.panelFunc.refreshHeaderTop()' onChange='Fai.top.panelFunc.refreshHeaderTop()' onkeypress='javascript:return Fai.isNumberKey(event);' maxlength='3' />");
	a.push("	</div>");
	a.push("</div>");
	b.push({
		title: "高度",
		content: a
	});
	a = [];
	a.push("<div class='contentFirst'>");
	a.push("	<input id='headBg0' type='radio' name='headBg' onClick='Fai.top.panelFunc.changeHeadBgType(0);'/><label for='headBg0' class='labelForInput'>默认</label>");
	a.push("	<input class='freeDisable' id='headBg1' type='radio' name='headBg' onClick='Fai.top.panelFunc.changeHeadBgType(1);'/><label for='headBg1' class='labelForInput'>隐藏</label>");
	a.push("	<input class='freeDisable' id='headBg2' type='radio' name='headBg' onClick='Fai.top.panelFunc.changeHeadBgType(2);'/><label for='headBg2' class='labelForInput'>自定义</label>");
	a.push("</div>");
	a.push("<div class='contentSecond' id='headBgCus'>");
	a.push("	<div class='optionRow'>");
	a.push("		<label class='labelForLeftTitle'>颜色：</label>");
	a.push("		<div id='headBgColorPicker' class='colorPicker'></div>");
	a.push("	</div>");
	a.push("	<div class='optionRow'>");
	a.push("		<label class='imgLabel labelForLeftTitle'>图片：</label>");
	a.push("		<div><input type='button' id='headBgFileButton' class='left faiButton' value='添加图片' /></div>");
	a.push("		<div id='uploadmsg' class='uploadmsg'></div>");
	a.push("	</div>");
	a.push("<div class='J_previewContent optionRow f-previewContent-none'>");
	a.push("<div class='f-previewWrap'>");
	a.push("<div class='f-preview J_preview'>");
	a.push("</div>");
	a.push("</div>");
	a.push("</div>");
	a.push("	<div class='optionRow'>");
	a.push("		<label class='labelForLeftTitle'>显示方式：</label>");
	a.push("		<select id='headBgRepeat' class='left optionRowOfSelect' onChange='Fai.top.panelFunc.headBgRepeatChange(this);'>");
	a.push("			<option value='-1'>不使用背景图片</option>");
	a.push("			<option value='0'>不平铺（居中）</option>");
	a.push("			<option value='3'>完全平铺</option>");
	a.push("			<option value='4'>拉伸平铺</option>");
	a.push("			<option value='5'>缩放平铺（等比例）</option>");
	a.push("			<option value='21'>纵向平铺（左边对齐）</option>");
	a.push("			<option value='2'>纵向平铺（中间对齐）</option>");
	a.push("			<option value='22'>纵向平铺（右边对齐）</option>");
	a.push("			<option value='11'>横向平铺（顶部对齐）</option>");
	a.push("			<option value='1'>横向平铺（中部对齐）</option>");
	a.push("			<option value='12'>横向平铺（底部对齐）</option>");
	a.push("			<option value='6'>不平铺（左对齐）</option>");
	a.push("			<option value='7'>不平铺（右对齐）</option>");
	a.push("			<option value='8'>不平铺（上对齐）</option>");
	a.push("			<option value='9'>不平铺（下对齐）</option>");
	a.push("			<option value='13'>不平铺（左上对齐）</option>");
	a.push("			<option value='14'>不平铺（右上对齐）</option>");
	a.push("			<option value='15'>不平铺（左下对齐）</option>");
	a.push("			<option value='16'>不平铺（右下对齐）</option>");
	a.push("		</select>");
	a.push("	</div>");
	a.push("</div>");
	b.push({
		title: "背景",
		content: a
	});
	if(Fai.top._isTemplateVersion2) {
		b.push({
			title: "顶部边框",
			content: Site.buildTopBorderAdditionEditHtml()
		})
	}
	if(Fai.top._uiMode) {
		jzUtils.run({
			name: "baseStyleTool.buildTopHeadMarginEditHtml"
		}, b)
	}
	return b
};
Site.buildTopBorderAdditionEditHtml = function() {
	var b = "",
		c = "Fai.top.panelFunc.changeTopBorderAddition",
		a = "TopBorderAddition";
	b += "<div class='u-tb-content-f J_" + a + "Content'>";
	b += "<div class='optionRow'>";
	b += "<div class='labelForLeftTitle'>下边框：</div>";
	b += "<div class='optionRowOfInput'>";
	b += "<input id='J_" + a + "_sys' type='radio' name='J_" + a + "Style' onclick='" + c + "(1);' /><label for='J_" + a + "_sys' class='labelForInput'>默认</label>";
	b += "<input id='J_" + a + "_hide' type='radio' name='J_" + a + "Style' onclick='" + c + "(1);' /><label for='J_" + a + "_hide' class='labelForInput'>隐藏</label>";
	b += "<input id='J_" + a + "_cus' type='radio' name='J_" + a + "Style' onclick='" + c + "(1);' /><label for='J_" + a + "_cus' class='labelForInput'>自定义</label>";
	b += "</div>";
	b += "</div>";
	b += "<div class='J_borderSet'>";
	b += "<div class='optionRow'>";
	b += "<label class='labelForLeftTitle'>宽度：</label>";
	b += "<input type='text' id='J_topBorderWidth' class='J_width posInput numeric' onkeyup='" + c + "(2);' onchange='" + c + "(2);' onkeypress='javascript:return Fai.isNumberKey(event);' maxlength='2'>";
	b += "</div>";
	b += "<div class='optionRow'>";
	b += "<label class='labelForLeftTitle'>样式：</label>";
	b += "<select class='optionRowOfSelect J_style' onChange='" + c + "(2);'>";
	b += "<option value='0'> 实线 </option>";
	b += "<option value='1'> 虚线 </option>";
	b += "<option value='2'> 点线 </option>";
	b += "</select>";
	b += "</div>";
	b += "<div class='optionRow'>";
	b += "<label class='labelForLeftTitle'> 颜色： </label>";
	b += "<div class='optionRowOfInput2 left'>";
	b += "<input id='J_" + a + "_sysColor' type='radio' name='J_" + a + "ColorStyle' onclick='" + c + "(1);' /><label for='J_" + a + "_sysColor' class='labelForInput'>默认</label>";
	b += "<input id='J_" + a + "_cusColor' type='radio' name='J_" + a + "ColorStyle' onclick='" + c + "(1);' /><label for='J_" + a + "_cusColor' class='labelForInput'>自定义</label>";
	b += "</div>";
	b += "<div class='J_color colorPicker'></div>";
	b += "</div>";
	b += "</div>";
	b += "</div>";
	return [b]
};
Site.getBannerStyleOptionList = function() {
	var b = [],
		a = [];
	a.push("<div class='contentFirst optionRow'>");
	a.push("	<div class='left optionRowOfInput'>");
	a.push("		<input id='topBannerDefault' type='radio' name='topBannerHeight' /><label for='topBannerDefault' class='labelForInput'>默认</label>");
	a.push("		<input id='topBannerCustom' type='radio' name='topBannerHeight' /><label for='topBannerCustom' class='labelForInput'>自定义</label>");
	a.push("	</div>");
	a.push("	<div id='settingBannerHeightInputWrap' class='settingHeightInputWrap'>");
	a.push("		 <input id='settingBannerHeightInput' class='settingHeightInput' type='text' onKeyUp='Fai.top.panelFunc.refreshBannerBgHeight()' onChange='Fai.top.panelFunc.refreshBannerBgHeight()' onkeypress='javascript:return Fai.isNumberKey(event);' maxlength='3' />");
	a.push("	</div>");
	a.push("</div>");
	b.push({
		title: "高度",
		content: a
	});
	a = [];
	a.push("<div class='contentFirst'>");
	a.push("	<input id='useSysBannerWidth' type='radio' name='bannerWidth' value='0' onclick='Fai.top.panelFunc.changeBannerWidth(0);' /><label for='useSysBannerWidth' class='labelForInput'>默认</label>");
	if(Fai.top._isTemplateVersion2 && !Fai.top._wideBanner) {
		a.push("	<input id='wideScreenBannerWidth' type='radio' name='bannerWidth' value='2' onclick='Fai.top.panelFunc.changeBannerWidth(2);' /><label for='wideScreenBannerWidth' class='labelForInput'>宽屏式</label>")
	}
	a.push("	<input id='useCusBannerWidth' type='radio' name='bannerWidth' value='1' onclick='Fai.top.panelFunc.changeBannerWidth(1);' /><label for='useCusBannerWidth' class='labelForInput'>自定义</label>");
	a.push("</div>");
	a.push("<div class='contentSecond'>");
	a.push("	<div id='setBannerWidth-box' class='optionRow' >");
	a.push("		<div class='labelForLeftTitle'>大小：</div>");
	a.push("		<div class='optionRowOfInput setOperate '>");
	a.push("			<div id='setBannerWidth' class='setSliderBar'></div>");
	a.push("			<div id='setBannerWidthContainer' class='setSliderLetter'></div>");
	a.push("		</div>");
	a.push("	</div>");
	a.push("</div>");
	b.push({
		title: "宽度",
		content: a
	});
	a = [];
	a.push("<div class='contentFirst'>");
	a.push("	<input id='bannerScaleDefault' type='radio' name='bannerScale' value='0' onclick='Fai.top.panelFunc.changeBannerScaleType(0);' /><label for='bannerScaleDefault' class='labelForInput'>默认</label>");
	a.push("	<input id='bannerScaleAuto' type='radio' name='bannerScale' value='1' onclick='Fai.top.panelFunc.changeBannerScaleType(1);' /><label for='bannerScaleAuto' class='labelForInput'>缩放</label>");
	a.push("</div>");
	b.push({
		title: "图片缩放",
		content: a
	});
	a = [];
	a.push("<div class='contentFirst'>");
	a.push("	<input id='useSysBannerBg' type='radio' name='bannerBg' value='0' onClick='Fai.top.panelFunc.changeBannerBg(0);'/><label for='useSysBannerBg' class='labelForInput'>默认</label>");
	a.push("	<input id='hideBannerBg' type='radio' name='bannerBg' value='1' onClick='Fai.top.panelFunc.changeBannerBg(1);'/><label for='hideBannerBg' class='labelForInput'>隐藏</label>");
	a.push("	<input id='useCusBannerBg' type='radio' name='bannerBg' value='2' onClick='Fai.top.panelFunc.changeBannerBg(2);'/><label for='useCusBannerBg' class='labelForInput'>自定义</label>");
	a.push("</div>");
	a.push("<div id='cusBannerPanel' class='contentSecond'>");
	a.push("	<div class='optionRow'>");
	a.push("		<label class='labelForLeftTitle'>颜色：</label>");
	a.push("		<div id='bannerColorPicker' class='colorPicker'></div>");
	a.push("	</div>");
	a.push("	<div class='optionRow'>");
	a.push("		<label class='imgLabel labelForLeftTitle'>图片：</label>");
	a.push("		<div><input type='button' id='bannerFileUploadV2' class='left faiButton' value='添加图片'/></div>");
	a.push("		<div id='uploadmsgBannerBg' class='uploadmsg'></div>");
	a.push("	</div>");
	a.push("<div class='J_previewContent optionRow f-previewContent-none'>");
	a.push("<div class='f-previewWrap'>");
	a.push("<div class='f-preview J_preview'>");
	a.push("</div>");
	a.push("</div>");
	a.push("</div>");
	a.push("	<div class='optionRow'>");
	a.push("		<label class='labelForLeftTitle'>显示方式：</label>");
	a.push("		<select id='bannerBgDisplay' class='left optionRowOfSelect' onChange='Fai.top.panelFunc.bannerBgRepeatChange(this);'>");
	a.push("			<option value='-1'>不使用背景图片</option>");
	a.push("			<option value='0'>不平铺（居中）</option>");
	a.push("			<option value='3'>完全平铺</option>");
	a.push("			<option value='4'>拉伸平铺</option>");
	a.push("			<option value='5'>缩放平铺（等比例）</option>");
	a.push("			<option value='21'>纵向平铺（左边对齐）</option>");
	a.push("			<option value='2'>纵向平铺（中间对齐）</option>");
	a.push("			<option value='22'>纵向平铺（右边对齐）</option>");
	a.push("			<option value='11'>横向平铺（顶部对齐）</option>");
	a.push("			<option value='1'>横向平铺（中部对齐）</option>");
	a.push("			<option value='12'>横向平铺（底部对齐）</option>");
	a.push("			<option value='6'>不平铺（左对齐）</option>");
	a.push("			<option value='7'>不平铺（右对齐）</option>");
	a.push("			<option value='8'>不平铺（上对齐）</option>");
	a.push("			<option value='9'>不平铺（下对齐）</option>");
	a.push("			<option value='13'>不平铺（左上对齐）</option>");
	a.push("			<option value='14'>不平铺（右上对齐）</option>");
	a.push("			<option value='15'>不平铺（左下对齐）</option>");
	a.push("			<option value='16'>不平铺（右下对齐）</option>");
	a.push("		</select>");
	a.push("	</div>");
	a.push("</div>");
	b.push({
		title: "背景",
		content: a
	});
	if(Fai.top._uiMode) {
		jzUtils.run({
			name: "baseStyleTool.buildBannerEditHtml"
		}, b);
		jzUtils.run({
			name: "baseStyleTool.buildBannerMarginEditHtml"
		}, b)
	}
	return b
};
Site.getContentStyleOptionList = function() {
	var b = [];
	var a = [];
	a.push("<div class='contentFirst'>");
	a.push("	<input id='useSysContentBg' type='radio' name='contentBg' value='0' onClick='Fai.top.panelFunc.changeContentBg(0)'/><label for='useSysContentBg' class='labelForInput'>默认</label>");
	a.push("	<input id='hideContentBg' type='radio' name='contentBg' value='1' onClick='Fai.top.panelFunc.changeContentBg(1)'/><label for='hideContentBg' class='labelForInput'>隐藏</label>");
	a.push("	<input id='useCusContentBg' type='radio' name='contentBg' value='2' onClick='Fai.top.panelFunc.changeContentBg(2)'/><label for='useCusContentBg' class='labelForInput'>自定义</label>");
	a.push("</div>");
	a.push("<div  id='cusContentPanel' class='contentSecond'>");
	a.push("	<div class='optionRow'>");
	a.push("		<label class='labelForLeftTitle'>颜色：</label>");
	a.push("		<div id='contentColorPicker' class='colorPicker'></div>");
	a.push("	</div>");
	a.push("	<div class='optionRow'>");
	a.push("		<label class='imgLabel labelForLeftTitle'>图片：</label>");
	a.push("		<div><input type='button' id='contentFileUploadV2' class='left faiButton' value='添加图片'/></div>");
	a.push("		<div id='uploadmsgContentBg' class='uploadmsg'></div>");
	a.push("	</div>");
	a.push("<div class='J_previewContent optionRow f-previewContent-none'>");
	a.push("<div class='f-previewWrap'>");
	a.push("<div class='f-preview J_preview'>");
	a.push("</div>");
	a.push("</div>");
	a.push("</div>");
	a.push("	<div class='optionRow'>");
	a.push("		<label class='labelForLeftTitle'>显示方式：</label>");
	a.push("		<select id='contentBgDisplay' class='left optionRowOfSelect' onChange='Fai.top.panelFunc.contentBgRepeatChange(this);'>");
	a.push("			<option value='-1'>不使用背景图片</option>");
	a.push("			<option value='0'>不平铺（居中）</option>");
	a.push("			<option value='3'>完全平铺</option>");
	a.push("			<option value='4'>拉伸平铺</option>");
	a.push("			<option value='5'>缩放平铺（等比例）</option>");
	a.push("			<option value='21'>纵向平铺（左边对齐）</option>");
	a.push("			<option value='2'>纵向平铺（中间对齐）</option>");
	a.push("			<option value='22'>纵向平铺（右边对齐）</option>");
	a.push("			<option value='11'>横向平铺（顶部对齐）</option>");
	a.push("			<option value='1'>横向平铺（中部对齐）</option>");
	a.push("			<option value='12'>横向平铺（底部对齐）</option>");
	a.push("			<option value='6'>不平铺（左对齐）</option>");
	a.push("			<option value='7'>不平铺（右对齐）</option>");
	a.push("			<option value='8'>不平铺（上对齐）</option>");
	a.push("			<option value='9'>不平铺（下对齐）</option>");
	a.push("			<option value='13'>不平铺（左上对齐）</option>");
	a.push("			<option value='14'>不平铺（右上对齐）</option>");
	a.push("			<option value='15'>不平铺（左下对齐）</option>");
	a.push("			<option value='16'>不平铺（右下对齐）</option>");
	a.push("		</select>");
	a.push("	</div>");
	a.push("</div>");
	b.push({
		title: "背景",
		content: a
	});
	a = [];
	a.push("<div class='contentFirst'>");
	a.push("	<input id='useSysContentMiddleBg' type='radio' name='contentMiddleBg' value='0' onClick='Fai.top.panelFunc.changeContentMiddleBg(0)'/><label for='useSysContentMiddleBg' class='labelForInput'>默认</label>");
	a.push("	<input id='hideContentMiddleBg' type='radio' name='contentMiddleBg' value='1' onClick='Fai.top.panelFunc.changeContentMiddleBg(1)'/><label for='hideContentMiddleBg' class='labelForInput'>隐藏</label>");
	a.push("	<input id='useCusContentMiddleBg' type='radio' name='contentMiddleBg' value='2' onClick='Fai.top.panelFunc.changeContentMiddleBg(2)'/><label for='useCusContentMiddleBg' class='labelForInput'>自定义</label>");
	a.push("</div>");
	a.push("<div  id='cusContentMiddlePanel' class='contentSecond'>");
	a.push("	<div class='optionRow'>");
	a.push("		<label class='labelForLeftTitle'>颜色：</label>");
	a.push("		<div id='contentMiddleColorPicker' class='colorPicker'></div>");
	a.push("	</div>");
	a.push("	<div class='optionRow'>");
	a.push("		<label class='imgLabel labelForLeftTitle'>图片：</label>");
	a.push("		<div><input type='button' id='contentMiddleFileUploadV2' class='left faiButton' value='添加图片'/></div>");
	a.push("		<div id='uploadmsgContentMiddleBg' class='uploadmsg'></div>");
	a.push("	</div>");
	a.push("<div class='J_previewContent optionRow f-previewContent-none'>");
	a.push("<div class='f-previewWrap'>");
	a.push("<div class='f-preview J_preview'>");
	a.push("</div>");
	a.push("</div>");
	a.push("</div>");
	a.push("	<div class='optionRow'>");
	a.push("		<label class='labelForLeftTitle'>显示方式：</label>");
	a.push("		<select id='contentMiddleBgDisplay' class='left optionRowOfSelect' onChange='Fai.top.panelFunc.contentMiddleBgRepeatChange(this);'>");
	a.push("			<option value='-1'>不使用背景图片</option>");
	a.push("			<option value='0'>不平铺（居中）</option>");
	a.push("			<option value='3'>完全平铺</option>");
	a.push("			<option value='4'>拉伸平铺</option>");
	a.push("			<option value='5'>缩放平铺（等比例）</option>");
	a.push("			<option value='21'>纵向平铺（左边对齐）</option>");
	a.push("			<option value='2'>纵向平铺（中间对齐）</option>");
	a.push("			<option value='22'>纵向平铺（右边对齐）</option>");
	a.push("			<option value='11'>横向平铺（顶部对齐）</option>");
	a.push("			<option value='1'>横向平铺（中部对齐）</option>");
	a.push("			<option value='12'>横向平铺（底部对齐）</option>");
	a.push("			<option value='6'>不平铺（左对齐）</option>");
	a.push("			<option value='7'>不平铺（右对齐）</option>");
	a.push("			<option value='8'>不平铺（上对齐）</option>");
	a.push("			<option value='9'>不平铺（下对齐）</option>");
	a.push("			<option value='13'>不平铺（左上对齐）</option>");
	a.push("			<option value='14'>不平铺（右上对齐）</option>");
	a.push("			<option value='15'>不平铺（左下对齐）</option>");
	a.push("			<option value='16'>不平铺（右下对齐）</option>");
	a.push("		</select>");
	a.push("	</div>");
	a.push("</div>");
	b.push({
		title: "中间背景",
		content: a
	});
	a = [];
	a.push("<div class='contentFirst'>");
	a.push("	<input id='useSysContentLeftWidth' type='radio' name='contentLeftWidth' value='0' onclick='Fai.top.panelFunc.changeContentLeftWidth(0);' /><label for='useSysContentLeftWidth' class='labelForInput'>默认</label>");
	a.push("	<input id='useCusContentLeftWidth' type='radio' name='contentLeftWidth' value='1' onclick='Fai.top.panelFunc.changeContentLeftWidth(1);' /><label for='useCusContentLeftWidth' class='labelForInput'>自定义</label>");
	a.push("</div>");
	a.push("<div class='contentSecond'>");
	a.push("	<div id='setContentLeftWidth-box' class='optionRow' >");
	a.push("		<div class='labelForLeftTitle'>大小：</div>");
	a.push("		<div class='optionRowOfInput setOperate '>");
	a.push("			<div id='setContentLeftWidth' class='setSliderBar'></div>");
	a.push("			<div id='setContentLeftWidthContainer' class='setSliderLetter'></div>");
	a.push("		</div>");
	a.push("	</div>");
	a.push("</div>");
	b.push({
		title: "左侧栏宽度",
		content: a,
		id: "contentLeftWdith"
	});
	a = [];
	a.push("<div class='contentFirst'>");
	a.push("	<input id='useSysContentRightWidth' type='radio' name='contentRightWidth' value='0' onclick='Fai.top.panelFunc.changeContentRightWidth(0);' /><label for='useSysContentRightWidth' class='labelForInput'>默认</label>");
	a.push("	<input id='useCusContentRightWidth' type='radio' name='contentRightWidth' value='1' onclick='Fai.top.panelFunc.changeContentRightWidth(1);' /><label for='useCusContentRightWidth' class='labelForInput'>自定义</label>");
	a.push("</div>");
	a.push("<div class='contentSecond'>");
	a.push("	<div id='setContentRightWidth-box' class='optionRow' >");
	a.push("		<div class='labelForLeftTitle'>大小：</div>");
	a.push("		<div class='optionRowOfInput setOperate '>");
	a.push("			<div id='setContentRightWidth' class='setSliderBar'></div>");
	a.push("			<div id='setContentRightWidthContainer' class='setSliderLetter'></div>");
	a.push("		</div>");
	a.push("	</div>");
	a.push("</div>");
	b.push({
		title: "右侧栏宽度",
		content: a,
		id: "contentRightWdith"
	});
	if(Fai.top._isTemplateVersion2) {
		a = [];
		a.push("<div class='contentFirst'>");
		a.push("<input id='useSysContentPadding' type='radio' name='contentRightWidth' value='0' onclick='Fai.top.panelFunc.changeContentPaddingType(0);' /><label for='useSysContentPadding' class='labelForInput'>默认</label>");
		a.push("<input id='useCusContentPadding' type='radio' name='contentRightWidth' value='1' onclick='Fai.top.panelFunc.changeContentPaddingType(1);' /><label for='useCusContentPadding' class='labelForInput'>自定义</label>");
		a.push("</div>");
		a.push("<div class='contentSecond J_contentPaddingSet'>");
		a.push("<div class='labelForLeftTitle'>上：</div>");
		a.push("<div class='optionRowOfInput'>");
		a.push("<input type='text' class='J_top  left posInput  numeric' onkeyup='Fai.top.panelFunc.changeContentPaddingValue();' onchange='Fai.top.panelFunc.changeContentPaddingValue();' >");
		a.push("</div>");
		a.push("<div class='labelForLeftTitle' style='width:40px;'>下：</div>");
		a.push("<div class='optionRowOfInput'>");
		a.push("<input type='text' class='J_bottom  left posInput  numeric' onkeyup='Fai.top.panelFunc.changeContentPaddingValue();' onchange='Fai.top.panelFunc.changeContentPaddingValue();' >");
		a.push("</div>");
		a.push("</div>");
		b.push({
			title: "内边距",
			content: a,
			id: "contentPadding"
		})
	}
	if(Fai.top._uiMode) {
		jzUtils.run({
			name: "baseStyleTool.buildContentMarginEditHtml"
		}, b)
	}
	return b
};
Site.getFootStyleOptionList = function() {
	var d = [];
	var b = [];
	b.push("<div class='contentFirst'>");
	b.push("	<input id='footerAlignDefault' type='radio' name='footerAlign' onClick='Fai.top.panelFunc.changeFooterAlign (0)'/><label for='footerAlignDefault' class='labelForInput'>默认</label>");
	b.push("	<input id='footerAlignLeft' type='radio' name='footerAlign' onClick='Fai.top.panelFunc.changeFooterAlign (1)'/><label for='footerAlignLeft' class='labelForInput'>靠左</label>");
	b.push("	<input id='footerAlignCenter' type='radio' name='footerAlign' onClick='Fai.top.panelFunc.changeFooterAlign (2)'/><label for='footerAlignCenter' class='labelForInput'>居中</label>");
	b.push("	<input id='footerAlignRight' type='radio' name='footerAlign' onClick='Fai.top.panelFunc.changeFooterAlign (3)'/><label for='footerAlignRight' class='labelForInput'>靠右</label>");
	b.push("</div>");
	b.push("<div class='contentSecond'>");
	b.push("</div>");
	d.push({
		title: "对齐",
		content: b
	});
	b = [];
	b.push("<div class='contentFirst'>");
	b.push("	<input id='footerEdgeDistance0' type='radio' name='footerEdgeDistance' onClick='Fai.top.panelFunc.changefooterPaddingType(0)'/><label for='footerEdgeDistance0' class='labelForInput'>默认</label>");
	b.push("	<input id='footerEdgeDistance1' type='radio' name='footerEdgeDistance' onClick='Fai.top.panelFunc.changefooterPaddingType(1)'/><label for='footerEdgeDistance1' class='labelForInput'>自定义</label>");
	b.push("</div>");
	b.push("<div class='contentSecond footOptionRow' id='footerPaddingCus'>");
	b.push("<label>上：</label><input id='upFooterPadding' type='text' class='input posInput numeric' onKeyUp='Fai.top.panelFunc.onPaddingChange()' onChange='Fai.top.panelFunc.onPaddingChange()'/>");
	b.push("<label>左：</label><input id='leftFooterPadding' type='text' class='input posInput numeric' onKeyUp='Fai.top.panelFunc.onPaddingChange()' onChange='Fai.top.panelFunc.onPaddingChange()'/>");
	b.push("<label>下：</label><input id='downFooterPadddng' type='text' class='input posInput numeric' onKeyUp='Fai.top.panelFunc.onPaddingChange()' onChange='Fai.top.panelFunc.onPaddingChange()'/>");
	b.push("<label>右：</label><input id='rightFooterPadding' type='text' class='input posInput numeric' onKeyUp='Fai.top.panelFunc.onPaddingChange()' onChange='Fai.top.panelFunc.onPaddingChange()'/>");
	b.push("</div>");
	d.push({
		title: "边距",
		content: b
	});
	b = [];
	b.push("<div class='contentFirst'>");
	b.push("	<input id='regularText1' type='radio' name='regularText' onClick='Fai.top.panelFunc.changeRegularTextType(0)'/><label for='regularText1' class='labelForInput'>默认</label>");
	b.push("	<input id='regularText2' type='radio' name='regularText' onClick='Fai.top.panelFunc.changeRegularTextType(1)'/><label for='regularText2' class='labelForInput'>自定义</label>");
	b.push("</div>");
	b.push("<div class='contentSecond' id='footerRegularTextCus'>");
	b.push("	<div class='optionRow'>");
	b.push("		<label class='labelForLeftTitle'>大小：</label>");
	b.push('		<div id="regularTextSizeBox" class="comboboxSelect"></div>');
	b.push("	</div>");
	if(Fai.top._uiMode) {
		b.push("	<div class='optionRow'>");
		b.push("		<label class='labelForLeftTitle'>加粗：</label>");
		b.push("<input type='checkbox' class='J_footerNormalTextBold_UI uiFontWeight'/>");
		b.push("	</div>")
	}
	b.push("	<div class='optionRow'>");
	b.push("		<label class='labelForLeftTitle'>样式：</label>");
	b.push("		<select id='regularTextFamily' class='left optionRowOfSelect' onChange='Fai.top.panelFunc.regularTextFamilyChange(this);'>");
	for(var c = 0; c < Fai.top._panelOptionData.fontFamilyList.length; c++) {
		var a = Fai.top._panelOptionData.fontFamilyList[c];
		b.push("			<option value='" + a.first + "'>" + a.second + "</option>")
	}
	b.push("		</select>");
	b.push("	</div>");
	b.push("	<div class='optionRow'>");
	b.push("		<label class='labelForLeftTitle'>颜色：</label>");
	b.push("		<div id='regularTextColorPicker' class='colorPicker'></div>");
	b.push("	</div>");
	b.push("</div>");
	d.push({
		title: "文字",
		content: b
	});
	b = [];
	b.push("<div class='contentFirst'>");
	b.push("	<input id='footerNavText0' type='radio' name='footerNavText' onClick='Fai.top.panelFunc.changeFooterNavTextType(0)'/><label for='footerNavText0' class='labelForInput'>默认</label>");
	b.push("	<input id='footerNavText1' type='radio' name='footerNavText' onClick='Fai.top.panelFunc.changeFooterNavTextType(1)'/><label for='footerNavText1' class='labelForInput'>自定义</label>");
	b.push("</div>");
	b.push("<div class='contentSecond' id='footerNavTextCus'>");
	b.push("	<div class='optionRow'>");
	b.push("		<label class='labelForLeftTitle'>大小：</label>");
	b.push('		<div id="footerNavTextSizeBox" class="comboboxSelect"></div>');
	b.push("	</div>");
	b.push("	<div class='optionRow footerNavTextCus'>");
	b.push("		<label>加粗：</label>");
	b.push("		<input id='footerNavTextBold' type='checkbox' onClick='Fai.top.panelFunc.footerNavTextBoldCheck(this);'/>");
	b.push("<input type='checkbox' class='J_footerNavTextBold_UI uiFontWeight'/>");
	b.push("		<label>下划线：</label>");
	b.push("		<input id='footerDecorationCheck' type='checkbox' onClick='Fai.top.panelFunc.footerDecorationCheck(this);'/>");
	b.push("	</div>");
	b.push("	<div class='optionRow'>");
	b.push("		<label class='labelForLeftTitle'>样式：</label>");
	b.push("		<select id='footerNavTextFamily' class='left optionRowOfSelect' onChange='Fai.top.panelFunc.footerNavTextFamilyChange(this);'>");
	for(var c = 0; c < Fai.top._panelOptionData.fontFamilyList.length; c++) {
		var a = Fai.top._panelOptionData.fontFamilyList[c];
		b.push("			<option value='" + a.first + "'>" + a.second + "</option>")
	}
	b.push("		</select>");
	b.push("	</div>");
	b.push("	<div class='optionRow'>");
	b.push("		<label class='labelForLeftTitle'>颜色：</label>");
	b.push("		<div id='footerNavTextColorPicker' class='colorPicker'></div>");
	b.push("	</div>");
	b.push("	<div class='optionRow'>");
	b.push("		<label class='labelForLeftTitle'>选中：</label>");
	b.push("		<div id='footerNavHoverTextColorPicker' class='colorPicker'></div>");
	b.push("	</div>");
	b.push("</div>");
	d.push({
		title: "链接文字",
		content: b
	});
	b = [];
	b.push("<div class='contentFirst'>");
	b.push("	<input id='footerBg0' type='radio' name='footerBg' onclick='Fai.top.panelFunc.changeFooterBgType(0)'/><label for='footerBg0' class='labelForInput'>默认</label>");
	b.push("	<input id='footerBg1' type='radio' name='footerBg' onclick='Fai.top.panelFunc.changeFooterBgType(1)'/><label for='footerBg1' class='labelForInput'>隐藏</label>");
	b.push("	<input class='freeDisable' id='footerBg2' type='radio' name='footerBg' onclick='Fai.top.panelFunc.changeFooterBgType(2)'/><label for='footerBg2' class='labelForInput'>自定义</label>");
	b.push("</div>");
	b.push("<div class='contentSecond' id='footerBgCus'>");
	b.push("	<div class='optionRow'>");
	b.push("		<label class='labelForLeftTitle'>颜色：</label>");
	b.push("		<div id='footerBgColorPicker' class='colorPicker'></div>");
	b.push("	</div>");
	b.push("	<div class='optionRow'>");
	b.push("		<label class='imgLabel labelForLeftTitle'>图片：</label>");
	b.push("		<div><input type='button' id='footerBgFileButton' class='left faiButton' value='添加图片'/></div>");
	b.push("		<div id='uploadmsgFooter' class='uploadmsg'></div>");
	b.push("	</div>");
	b.push("<div class='J_previewContent optionRow f-previewContent-none'>");
	b.push("<div class='f-previewWrap'>");
	b.push("<div class='f-preview J_preview'>");
	b.push("</div>");
	b.push("</div>");
	b.push("</div>");
	b.push("	<div class='optionRow'>");
	b.push("		<label class='labelForLeftTitle'>图片平铺：</label>");
	b.push("		<select id='footerBgRepeat' class='left optionRowOfSelect' onChange='Fai.top.panelFunc.footerBgRepeatChange(this);'>");
	b.push("			<option value='-1'>不使用背景图片</option>");
	b.push("			<option value='0'>不平铺（居中）</option>");
	b.push("			<option value='3'>完全平铺</option>");
	b.push("			<option value='4'>拉伸平铺</option>");
	b.push("			<option value='5'>缩放平铺（等比例）</option>");
	b.push("			<option value='21'>纵向平铺（左边对齐）</option>");
	b.push("			<option value='2'>纵向平铺（中间对齐）</option>");
	b.push("			<option value='22'>纵向平铺（右边对齐）</option>");
	b.push("			<option value='11'>横向平铺（顶部对齐）</option>");
	b.push("			<option value='1'>横向平铺（中部对齐）</option>");
	b.push("			<option value='12'>横向平铺（底部对齐）</option>");
	b.push("			<option value='6'>不平铺（左对齐）</option>");
	b.push("			<option value='7'>不平铺（右对齐）</option>");
	b.push("			<option value='8'>不平铺（上对齐）</option>");
	b.push("			<option value='9'>不平铺（下对齐）</option>");
	b.push("			<option value='13'>不平铺（左上对齐）</option>");
	b.push("			<option value='14'>不平铺（右上对齐）</option>");
	b.push("			<option value='15'>不平铺（左下对齐）</option>");
	b.push("			<option value='16'>不平铺（右下对齐）</option>");
	b.push("		</select>");
	b.push("	</div>");
	b.push("</div>");
	d.push({
		title: "背景",
		content: b
	});
	if(Fai.top._uiMode) {
		jzUtils.run({
			name: "baseStyleTool.buildFooterTriangleEditHtml"
		}, d)
	}
	if(Fai.top._isTemplateVersion2) {
		d.push({
			title: "底部边框",
			content: Site.buildFooterBorderAdditionEditHtml()
		})
	}
	b = [];
	b.push("<div class='contentFirst'>");
	b.push("<ul id='patternChoiceBox' class='patternChoiceBox'>");
	b.push("<li>");
	b.push("<a href='javascript:;' id='patternChoice-normal' class='patternChoice' onclick='Site.normalFooterItemStyle(0);Site.logDog(100088, 0);return false;'><div class='pattern-normal'></div></a>");
	b.push("</li>");
	b.push("<li>");
	b.push("<a href='javascript:;' id='patternChoice-level' class='patternChoice' onclick='Site.levelFooterItemStyle(1);Site.logDog(100088, 1);return false;'><div class='pattern-level'></div></a>");
	b.push("</li>");
	b.push("<li>");
	b.push("<a href='javascript:;' id='patternChoice-vertical' class='patternChoice' onclick='Site.verticalFooterItemStyle(2);Site.logDog(100088, 2);return false;'><div class='pattern-vertical'></div></a>");
	b.push("</li>");
	b.push("</ul>");
	b.push("</div>");
	d.push({
		title: "栏目样式",
		content: b
	});
	b = [];
	b.push("<div class='contentFirst'>");
	b.push("<input id='normalItemPic' type='radio' name='itemPic' onclick='Site.autoFooterItemPic(0);'/><label for='normalItemPic' class='labelForInput'>默认 </label>");
	b.push("<input id='useItemPic' type='radio' name='itemPic' onclick='Site.showFooterItemPic(1);' /><label for='useItemPic' class='labelForInput'>开启 </label>");
	b.push("<input id='noItemPic' type='radio' name='itemPic' onclick='Site.hideFooterItemPic(2);' /><label for='noItemPic' class='labelForInput'>关闭</label> ");
	b.push("</div>");
	d.push({
		title: "栏目图标",
		content: b
	});
	b = [];
	b.push("<div class='contentFirst optionRow'>");
	b.push("<div class='left optionRowOfInput'>");
	b.push("<input id='sysItemWidth' type='radio' onclick='Site.autoFooterItemSectionWidth();' name='itemWidth' /><label for='sysItemWidth' class='labelForInput'>默认 </label>");
	b.push("<input id='cusItemWidth' type='radio' name='itemWidth' onclick='Site.setFooterItemSectionWidth();' /><label for='cusItemWidth' class='labelForInput'>自定义</label>");
	b.push("</div>");
	b.push("<div id='setFooterWidth' class='faiPanelInputWarp'>");
	b.push("<input id='cusItemWidthNum' type='text' value='' maxlength='3' onkeypress='javascript:return Fai.isNumberKey(event);' onkeyup='Site.setFooterItemSectionWidth();' onchange='Site.setFooterItemSectionWidth();' class='input-num' />");
	b.push("</div>");
	b.push("</div>");
	d.push({
		title: "栏目宽度",
		content: b
	});
	b = [];
	b.push("<div class='contentFirst'>");
	b.push("<div class='left optionRowOfInput'>");
	b.push("<input id='sysItemHeight' type='radio' name='itemHeight'  onclick='Site.autoFooterItemSectionHeight();' /><label for='sysItemHeight' class='labelForInput'>默认 </label>");
	b.push("<input id='cusItemHeight' type='radio' name='itemHeight' onclick='Site.setFooterItemSectionHeight();' /><label for='cusItemHeight' class='labelForInput'>自定义</label>");
	b.push("</div>");
	b.push("<div id='setFooterHeight' class='faiPanelInputWarp'>");
	b.push("<input id='cusItemHeightNum' type='text' value='' maxlength='3' onkeypress='javascript:return Fai.isNumberKey(event);' onkeyup='Site.setFooterItemSectionHeight();' onchange='Site.setFooterItemSectionHeight();' class='input-num' />");
	b.push("</div>");
	b.push("</div>");
	d.push({
		title: "栏目高度",
		content: b
	});
	b = [];
	b.push("<div class='contentFirst'>");
	b.push("<input id='sysFirstItemword' type='radio' name='firstItemword' value='' onclick='Site.autoFooterFirstItemFontStyle();' /><label for='sysFirstItemword' class='labelForInput'>默认 </label>");
	b.push("<input id='cusFirstItemword' type='radio' name='firstItemword' value='' onclick='Site.cusFooterFirstItemFontStyle();' /><label for='cusFirstItemword' class='labelForInput'>自定义</label>");
	b.push("</div>");
	b.push("<div class='contentSecond' id='cusFirstItemText'>");
	b.push("<div class='optionRow'>");
	b.push("<label class='labelForLeftTitle'>大小：</label>");
	b.push('		<div id="firstItemTextSizeBox" class="comboboxSelect"></div>');
	b.push("<label for='firstItemTextBold' class='labelforInput2'>加粗：</label>");
	b.push("<input id='firstItemTextBold' type='checkbox' onclick='Site.setFooterFristItemFontWeight(this);' />");
	b.push("<input type='checkbox' class='J_firstItemTextBold_UI uiFontWeight'/>");
	b.push("<label for='firstItemTextUnderline' class='labelforInput2'>下划线：</label>");
	b.push("<input id='firstItemTextUnderline' type='checkbox' onclick='Site.setFooterFristItemUnderline(this);' />");
	b.push("</div>");
	b.push("<div class='optionRow'>");
	b.push("<label class='labelForLeftTitle'>样式：</label>");
	b.push("<select id='firstItemTextfamily' class='left optionRowOfSelect' onchange='Site.setFooterFristItemFontFamily(this);'>");
	for(var c = 0; c < Fai.top._panelOptionData.fontFamilyList.length; c++) {
		var a = Fai.top._panelOptionData.fontFamilyList[c];
		b.push("			<option value='" + a.first + "'>" + a.second + "</option>")
	}
	b.push("</select>");
	b.push("</div>");
	b.push("<div class='optionRow'>");
	b.push("<label class='labelForLeftTitle'>颜色：</label>");
	b.push("<div id='firstItemTextColorPicker' class='colorPicker'></div>");
	b.push("</div>");
	b.push("<div class='optionRow'>");
	b.push("<label class='labelForLeftTitle'>选中：</label>");
	b.push("<div id='firstItemSelectedTextColorPicker' class='colorPicker'></div>");
	b.push("</div>");
	b.push("</div>");
	d.push({
		title: "栏目文字",
		content: b
	});
	b = [];
	b.push("<div class='contentFirst'>");
	b.push("<input id='firstItemNoHref' type='radio' name='firstItemHref' /><label for='firstItemNoHref' class='labelForInput'>默认 </label>");
	b.push("<input id='firstItemHref' type='radio' name='firstItemHref' /><label for='firstItemHref' class='labelForInput'>有下级菜单时不可点击</label>");
	b.push("</div>");
	d.push({
		title: "栏目点击",
		content: b
	});
	b = [];
	b.push("<div class='contentFirst'>");
	b.push("<div class='left optionRowOfInput'>");
	b.push("<input id='normalItemSpacing' type='radio' name='itemSpacing' onclick='Site.autoFooterItemSpacing();' /><label for='normalItemSpacing' class='labelForInput'>默认 </label>");
	b.push("<input id='cusItemSpacing' type='radio' name='itemSpacing' onclick='Site.setFooterItemSpacing();' /><label for='cusItemSpacing' class='labelForInput'>自定义</label>");
	b.push("</div>");
	b.push("<div id='setItemSpaceWidth' class='settingHeightInputWrap'>");
	b.push("<input id='cusItemSpacingWidth' type='text' value='' maxlength='3' onkeypress='javascript:return Fai.isNumberKey(event);' onkeyup='Site.setFooterItemSpacing();' onchange='Site.setFooterItemSpacing();' class='input-num' />");
	b.push("</div>");
	b.push("</div>");
	d.push({
		title: "项间隔宽",
		content: b
	});
	b = [];
	b.push("<div class='contentFirst'>");
	b.push("<input id='sysItemVerticalLine' type='radio' name='verticalLine' value='' checked='checked' onclick='Site.autoFooterVerticalLineStyle();' /><label for='sysItemVerticalLine' class='labelForInput'>默认 </label>");
	b.push("<input id='cusItemVerticalLine' type='radio' name='verticalLine' value='' checked='checked' onclick='Site.cusFooterVerticalLineStyle();' /><label for='cusItemVerticalLine' class='labelForInput'>自定义</label>");
	b.push("</div>");
	b.push("<div class='contentSecond' id='cusItemVerticalLineSetting'>");
	b.push("<div class='optionRow'>");
	b.push("<label class='labelForLeftTitle'>宽度：</label>");
	b.push("<input id='cusItemVerticalLineWidth' type='text' value='' maxlength='3' onkeypress='javascript:return Fai.isNumberKey(event);' onkeyup='Site.setFooterVerticalLineWidth();' onchange='Site.setFooterVerticalLineWidth();' class='input-num' />");
	b.push("</div>");
	b.push("<div class='optionRow'>");
	b.push("<label class='labelForLeftTitle'>颜色：</label>");
	b.push("<div id='cusItemVerticalLineColorPicker' class='colorPicker'></div>");
	b.push("</div>");
	b.push("</div>");
	d.push({
		title: "项间隔线",
		content: b,
		extclass: "J_cusItemVerticalLine"
	});
	b = [];
	b.push("<div class='contentFirst'>");
	b.push("<input id='autoDirection' type='radio' name='direction'  onclick='Site.useAutoStyleForFooterSecondItem();' /><label for='autoDirection' class='labelForInput'>默认</label>");
	b.push("<input id='verticalDirection' type='radio' name='direction'  onclick='Site.useVerticalStyleForFooterSecondItem();' /><label for='verticalDirection' class='labelForInput'>纵向</label>");
	b.push("<input id='levelDirection' type='radio' name='direction' onclick='Site.useLevelStyleForFooterSecondItem();' /><label for='levelDirection' class='labelForInput'>横向</label>");
	b.push("</div>");
	d.push({
		title: "二级栏目展示方式",
		content: b,
		extclass: "J_footerSecondType"
	});
	b = [];
	b.push("<div class='contentFirst'>");
	b.push("<input id='sysSecondItemword' type='radio' name='secondItemword' onclick='Site.autoFooterSecondItemFontStyle();' /><label for='sysSecondItemword' class='labelForInput'>默认</label>");
	b.push("<input id='cusSecondItemword' type='radio' name='secondItemword' onclick='Site.cusFooterSecondItemFontStyle();' /><label for='cusSecondItemword' class='labelForInput'>自定义</label>");
	b.push("</div>");
	b.push("<div class='contentSecond' id='setFooterSecondText'>");
	b.push("<div class='optionRow'>");
	b.push("<label class='labelForLeftTitle'>大小：</label>");
	b.push("<div id='secondItemTextSizeBox' class='comboboxSelect'></div>");
	b.push("<label for='secondItemTextBold' class='labelforInput2'>加粗：</label>");
	b.push("<input id='secondItemTextBold' type='checkbox' onclick='Site.setFooterSecondItemFontWeight(this);' />");
	b.push("<input type='checkbox' class='J_secondItemTextBold_UI uiFontWeight'/>");
	b.push("<label for='secondItemTextUnderline' class='labelforInput2'>下划线：</label>");
	b.push("<input id='secondItemTextUnderline' type='checkbox' onclick='Site.setFooterSecondItemUnderline(this);' />");
	b.push("</div>");
	b.push("<div class='optionRow'>");
	b.push("<label class='labelForLeftTitle'>样式：</label>");
	b.push("<select id='secondItemTextfamily' class='optionOfSelect' onchange='Site.setFooterSecondItemFontFamily(this);'>");
	for(var c = 0; c < Fai.top._panelOptionData.fontFamilyList.length; c++) {
		var a = Fai.top._panelOptionData.fontFamilyList[c];
		b.push("			<option value='" + a.first + "'>" + a.second + "</option>")
	}
	b.push("</select>");
	b.push("</div>");
	b.push("<div class='optionRow'>");
	b.push("<label class='labelForLeftTitle'>颜色：</label>");
	b.push("<div id='secondItemTextColorPicker' class='colorPicker'></div>");
	b.push("</div>");
	b.push("<div class='optionRow'>");
	b.push("<label class='labelForLeftTitle'>选中：</label>");
	b.push("<div id='secondItemSelectedTextColorPicker' class='colorPicker'></div>");
	b.push("</div>");
	b.push("</div>");
	d.push({
		title: "二级栏目文字",
		content: b,
		extclass: "J_footerSecondText footerSecondText"
	});
	return d
};
Site.buildFooterBorderAdditionEditHtml = function() {
	var b = "",
		c = "Fai.top.panelFunc.changeFooterBorderAddition",
		a = "FooterBorderAddition";
	b += "<div class='u-tb-content-f J_" + a + "Content'>";
	b += "<div class='optionRow'>";
	b += "<div class='optionRowOfInput'>";
	b += "<input id='J_" + a + "_sys' type='radio' name='J_" + a + "Style' onclick='" + c + "(1);' /><label for='J_" + a + "_sys' class='labelForInput'>默认</label>";
	b += "<input id='J_" + a + "_hide' type='radio' name='J_" + a + "Style' onclick='" + c + "(1);' /><label for='J_" + a + "_hide' class='labelForInput'>隐藏</label>";
	b += "<input id='J_" + a + "_cus' type='radio' name='J_" + a + "Style' onclick='" + c + "(1);' /><label for='J_" + a + "_cus' class='labelForInput'>自定义</label>";
	b += "</div>";
	b += "</div>";
	b += "<div class='J_borderSet'>";
	b += "<div class='optionRow'>";
	b += "<label class='labelForLeftTitle'>宽度：</label>";
	b += "<input type='text' id='J_footerBorderWidth' class='J_width posInput numeric' onkeyup='" + c + "(2);' onchange='" + c + "(2);' onkeypress='javascript:return Fai.isNumberKey(event);' maxlength='2'>";
	b += "</div>";
	b += "<div class='optionRow'>";
	b += "<label class='labelForLeftTitle'>样式：</label>";
	b += "<select class='optionRowOfSelect J_style' onChange='" + c + "(2);'>";
	b += "<option value='0'> 实线 </option>";
	b += "<option value='1'> 虚线 </option>";
	b += "<option value='2'> 点线 </option>";
	b += "</select>";
	b += "</div>";
	b += "<div class='optionRow'>";
	b += "<label class='labelForLeftTitle'> 颜色： </label>";
	b += "<div class='optionRowOfInput2 left'>";
	b += "<input id='J_" + a + "_sysColor' type='radio' name='J_" + a + "ColorStyle' onclick='" + c + "(1);' /><label for='J_" + a + "_sysColor' class='labelForInput'>默认</label>";
	b += "<input id='J_" + a + "_cusColor' type='radio' name='J_" + a + "ColorStyle' onclick='" + c + "(1);' /><label for='J_" + a + "_cusColor' class='labelForInput'>自定义</label>";
	b += "</div>";
	b += "<div class='J_color colorPicker'></div>";
	b += "</div>";
	b += "<div class='optionRow' style='margin-left:70px;'>";
	b += "<label ><input type='checkbox' onclick='" + c + "(2);' class='J_top'/>  上边框 </label>";
	b += "<label ><input type='checkbox' onclick='" + c + "(2);' class='J_bottom'/>  下边框 </label>";
	if(Fai.top._uiMode) {
		b += "<label ><input type='checkbox' onclick='" + c + "(2);' class='J_left'/>  左 </label>";
		b += "<label ><input type='checkbox' onclick='" + c + "(2);' class='J_right'/>  右 </label>"
	}
	b += "</div>";
	b += "</div>";
	b += "</div>";
	return [b]
};
Site.getPanelSectionModuleList = function() {
	var a = [];
	a.push({
		name: "当前栏目",
		anchor: "currentSectionModuleContainer",
		id: "currentSectionModuleContainer",
		script: "Site.logDog(100082, 10);Site.refreshModuleSearcher(1);Site.refreshOtherSectionSelecter(0);Site.refreshPanelStyle();"
	});
	a.push({
		name: "其他栏目",
		anchor: "otherSectionModuleContainer",
		id: "otherSectionModuleContainer",
		script: "Site.logDog(100082, 20);Site.refreshModuleSearcher(0);Site.refreshOtherSectionSelecter(1);Site.refreshPanelStyle();"
	});
	return a
};
Site.updateCurrentSectionModule = function() {
	var c = Fai.top.$("#faiFloatPanel");
	if(c.length < 1) {
		return
	}
	var b = c.find("#currentSectionModuleContainer");
	$.ajax({
		type: "post",
		url: Site.genAjaxUrl("faiFloatPanel_h.jsp"),
		data: "cmd=currentSection&colId=" + Fai.top._colId + "&extId=" + Fai.top._extId,
		error: function() {
			Fai.ing("系统繁忙，请稍候重试", false)
		},
		success: function(w) {
			var y = $.parseJSON(w);
			Fai.top._panelOptionData.moduleDataList = y;
			var d = $.parseJSON(Fai.top._panelOptionData.moduleStyleList),
				h = $.parseJSON(Fai.top._panelOptionData.moduleTypeList),
				C = $.parseJSON(Fai.top._panelOptionData.siteColList),
				I = [],
				z = [],
				x = c.find(".J_search-innerBox"),
				s = Site.getModuleDefaultName();
			var p = y;
			for(var T = 0; T < y.length; T++) {
				var F = y[T].id;
				if(F == -9) {
					continue
				}
				var D = y[T].name;
				var m = y[T].defaultName;
				var K = y[T].style;
				var H = y[T].valid;
				var v = [];
				if(y[T].inList) {
					v = y[T].inList
				}
				var t = false;
				if(y[T].notdel) {
					t = true
				}
				var E = false;
				if(Fai.top._colId == Fai.top._panelOptionData.sysIndex && K == d.sysLocation) {
					E = true
				}
				var G = 0;
				if(y[T].colNum) {
					G = y[T].colNum
				}
				var U = Site.getModuleIconClass(K, G),
					Q = top.$("#module" + F);
				if(Q.attr("_intab") > 0 && !!!p[T].hasAdd) {
					z.push({
						id: F,
						title: D,
						defaultName: m,
						className: U,
						param: U,
						style: K,
						inList: v,
						notdel: t,
						disabled: E,
						valid: H
					});
					p[T].hasAdd = 1;
					continue
				}
				var r = false;
				for(var P = 0; P < Fai.top._hiddenModuleList.length; P++) {
					var X = Fai.top._hiddenModuleList[P];
					if(F == X.id) {
						r = true
					}
				}
				if(Q.length > 0 && !Q.is(":hidden") && !r && !!!p[T].hasAdd) {
					z.push({
						id: F,
						title: D,
						defaultName: m,
						className: U,
						param: U,
						style: K,
						inList: v,
						notdel: t,
						disabled: E,
						valid: H
					});
					p[T].hasAdd = 1
				}
			}
			for(var T = 0; T < y.length; T++) {
				var F = y[T].id;
				if(F == -9) {
					continue
				}
				var D = y[T].name;
				var m = y[T].defaultName;
				var K = y[T].style;
				var H = y[T].valid;
				var v = [];
				if(y[T].inList) {
					v = y[T].inList
				}
				var t = false;
				if(y[T].notdel) {
					t = true
				}
				var E = false;
				if(Fai.top._colId == Fai.top._panelOptionData.sysIndex && K == d.sysLocation) {
					E = true
				}
				var G = 0;
				if(y[T].colNum) {
					G = y[T].colNum
				}
				var U = Site.getModuleIconClass(K, G);
				if(!y[T].special) {
					continue
				}
				if(!!!p[T].hasAdd) {
					z.push({
						id: F,
						title: D,
						defaultName: m,
						className: U,
						param: U,
						style: K,
						inList: v,
						notdel: t,
						disabled: E,
						valid: H
					});
					p[T].hasAdd = 1
				}
			}
			for(var T = 0; T < y.length; ++T) {
				var F = y[T].id;
				if(F == -9) {
					continue
				}
				var D = y[T].name;
				var m = y[T].defaultName;
				var K = y[T].style;
				var H = y[T].valid;
				var v = [];
				if(y[T].inList) {
					v = y[T].inList
				}
				var t = false;
				if(y[T].notdel) {
					t = true
				}
				var E = false;
				if(Fai.top._colId == Fai.top._panelOptionData.sysIndex && K == d.sysLocation) {
					E = true
				}
				var G = 0;
				if(y[T].colNum) {
					G = y[T].colNum
				}
				var U = Site.getModuleIconClass(K, G);
				if(!y[T].global || $.inArray(F, Fai.top._delModuleIdList) != -1) {
					continue
				}
				if(!!!p[T].hasAdd) {
					z.push({
						id: F,
						title: D,
						defaultName: m,
						className: U,
						param: U,
						style: K,
						inList: v,
						notdel: t,
						disabled: E,
						valid: H
					});
					p[T].hasAdd = 1
				}
			}
			for(var T = 0; T < y.length; ++T) {
				var F = y[T].id;
				if(F == -9) {
					continue
				}
				var D = y[T].name;
				var m = y[T].defaultName;
				var K = y[T].style;
				var H = y[T].valid;
				var v = [];
				if(y[T].inList) {
					v = y[T].inList
				}
				var t = false;
				if(y[T].notdel) {
					t = true
				}
				var E = false;
				if(Fai.top._colId == Fai.top._panelOptionData.sysIndex && K == d.sysLocation) {
					E = true
				}
				var G = 0;
				if(y[T].colNum) {
					G = y[T].colNum
				}
				var U = Site.getModuleIconClass(K, G);
				for(var O = 0; O < Fai.top._hiddenModuleList.length; ++O) {
					if(F == Fai.top._hiddenModuleList[O].id) {
						if(!!!p[T].hasAdd) {
							z.push({
								id: F,
								title: D,
								defaultName: m,
								className: U,
								param: U,
								style: K,
								inList: v,
								notdel: t,
								disabled: E,
								valid: H
							});
							p[T].hasAdd = 1
						}
						break
					}
				}
				var Q = top.$("#module" + F);
				if(Q.length > 0 && !!Q.is(":hidden") && !!!p[T].hasAdd) {
					z.push({
						id: F,
						title: D,
						defaultName: m,
						className: U,
						param: U,
						style: K,
						inList: v,
						notdel: t,
						disabled: E,
						valid: H
					});
					p[T].hasAdd = 1
				}
			}
			for(var T = 0; T < y.length; T++) {
				var F = y[T].id;
				if(F != -9) {
					continue
				}
				var W = y[T].mustModuleList;
				for(var P = 0; P < W.length; P++) {
					var g = Site.getModuleData(W[P]);
					if(g != null) {
						F = g.id;
						var D = g.name;
						var m = g.defaultName;
						var K = g.style;
						var H = g.valid;
						var v = [];
						if(g.inList) {
							v = g.inList
						}
						var t = false;
						if(g.notdel) {
							t = true
						}
						var E = false;
						if(Fai.top._colId == Fai.top._panelOptionData.sysIndex && K == d.sysLocation) {
							E = true
						}
						var G = 0;
						if(y[T].colNum) {
							G = y[T].colNum
						}
						var U = Site.getModuleIconClass(K, G);
						for(var O = 0; O < y.length; O++) {
							if(y[O].id == F) {
								if(!!y[O].hasAdd) {
									break
								} else {
									z.push({
										id: F,
										title: D,
										defaultName: m,
										className: U,
										param: U,
										style: K,
										inList: v,
										notdel: t,
										disabled: E,
										valid: H
									});
									y[O].hasAdd = 1
								}
							}
						}
					}
				}
			}
			I.push("		<div class='panelSectionModuleContent'>");
			I.push("				<ul class='panelModuleIconContainer J_panelModuleIconContainer'>");
			for(var T = 0; T < z.length; T++) {
				var o = z[T].title,
					N = Fai.encodeHtml(o),
					u = z[T].defaultName,
					L = z[T].className,
					n = z[T].param,
					F = z[T].id,
					K = z[T].style,
					v = z[T].inList,
					t = z[T].notdel,
					E = z[T].disabled,
					H = z[T].valid,
					B = "none",
					J = "none",
					e = false,
					A = Fai.top.$("#module" + F),
					l = "",
					V = "",
					S = "Site.panelModuleCheck(" + F + "," + K + ',"panelNowModule");',
					Y = true,
					M = "none",
					q = true,
					R = s[n];
				if(t) {
					Y = false
				}
				if(a(A)) {
					B = "block";
					J = "block";
					e = true
				}
				if(!E) {
					if(e) {
						B = "block";
						J = "block";
						if(u != "" && u != o) {
							V = '点击隐藏"' + N + '"\n此模块为系统模块"' + u + '"'
						} else {
							V = '点击隐藏"' + N + '"'
						}
					} else {
						if(u != "" && u != o) {
							V = '点击使用"' + N + '"\n此模块为系统模块"' + u + '"'
						} else {
							V = '点击使用"' + N + '"'
						}
					}
				} else {
					B = "none";
					J = "none";
					var f = "当前页";
					if(Fai.top._colId == Fai.top._panelOptionData.sysIndex) {
						f = "首页"
					}
					l = "cursor:default;";
					V = f + '不能使用"' + N + '"模块';
					S = "Fai.ing('" + V + "');"
				}
				if(!H && e) {
					if(h.sysMsgBoard == F && Fai.top._colId != C.sysMsgBoard) {} else {
						M = "block";
						B = "none";
						J = "block";
						l = "cursor:default;";
						q = false;
						S = "";
						if(u != "" && u != o) {
							V = '不能隐藏"' + N + '"\n此模块为系统模块"' + u + '"'
						} else {
							V = '不能隐藏"' + N + '"'
						}
					}
				}
				I.push("					<li id='panelNowModule" + F + "' fk_searchKey='" + R + "' class='panelModuleIconContent panelModuleIcon_" + L + " sectionModuleIcon' >");
				I.push("						<a href='javascript:;' class='panelModuleIcon' onclick='" + Fai.encodeHtml(S) + ";return false;' title='" + V + "' _cus='" + Y + "' style='" + l + "'></a>");
				if(!!window.ActiveXObject) {
					I.push("						<a href='javascript:;' class='panelModuleTitleA' onclick='Site.hideAShowInput(" + F + ",true);return false;' title='点击修改模块名称'>" + N + "</a>")
				}
				I.push("						<input class='panelModuleTitleInput J_panelModuleTitle'  href='javascript:;' type='text' maxlength='50' style='display:" + (!!window.ActiveXObject ? "none" : "block") + "'  value='" + N + "' onfocus='this.select();' onblur='Site.editCurrColModuleName(" + F + ",true, -1, " + K + ")' title='点击修改模块名称' _originalName = '" + N + "'/>");
				I.push("						<a id='nowModuleCheck" + F + "' class='panelCheckTip' href='javascript:;' onclick='" + Fai.encodeHtml(S) + ";return false;' style='display:" + B + ";' title='" + V + "'></a>");
				I.push("						<a id='nowModuleDisabled" + F + "' class='panelDisabledTip' href='javascript:;' onclick='return false;' style='display:" + M + ";' title='" + V + "'></a>");
				I.push("						<div class='nowModuleButtonDiv' style='display:none;'>");
				I.push("							<a href='javascript:;' onclick='Site.showThisModule(" + F + ");return false;' class='findButton' title='显示模块所在的位置' style='display:" + J + ";'></a>");
				if(K == 80) {
					I.push("							<a href='javascript:;' onclick='Site.popupWindow({title:\"编辑通栏模块\", frameSrcUrl:\"manage/styleFullmeasure.jsp?id=" + F + "&colId=" + Fai.top._colId + "&extId=" + Fai.top._extId + "&ram=" + Math.random() + "\", width:\"715\", height:\"445\", saveBeforePopup:false});Site.removeAllEditLayer();return false;return false;' class='setButton' title='设置模块样式' style='display:" + J + ";'></a>")
				} else {
					if(K == 82) {
						I.push("							<a href='javascript:;' onclick='Site.popupWindow({title:\"编辑购物车模块\", frameSrcUrl:\"manage/shoppingCartModuleEdit.jsp?id=" + F + "&colId=" + Fai.top._colId + "&extId=" + Fai.top._extId + "&ram=" + Math.random() + "\", width:\"548\", height:\"468\", saveBeforePopup:false});Site.removeAllEditLayer();return false;return false;' class='setButton' title='设置模块样式' style='display:" + J + ";'></a>")
					} else {
						if(K == 86 || K == 79 || K == 87 || K == 97) {} else {
							I.push("							<a href='javascript:;' onclick='Site.faiSettingPanel.init({\"id\":" + F + ', "styleId":' + K + ", \"entrance\":1});return false;' class='setButton' title='设置模块样式' style='display:" + J + ";'></a>")
						}
					}
				}
				if(!t && q) {
					I.push("							<a href='javascript:;' onclick='Site.delModule(" + F + ', "' + Fai.encodeHtmlJs(o) + '", ' + K + ", [" + v + "]);return false;' class='delButton' title='删除模块'></a>")
				}
				I.push("						</div>");
				I.push("					</li>")
			}
			I.push("				</ul>");
			I.push("		</div>");
			c.find("#currentSectionModuleContainer").empty().append(I.join(""));
			if(x.length > 0 && x.is(":visible")) {
				x.find(".J_currentSectionModuleSearch").trigger("keyup")
			}
		}
	});

	function a(d) {
		if(d.length < 1) {
			return false
		}
		if(d.is(":visible")) {
			return true
		}
		if(d.parent().hasClass("hiddenModuleForms")) {
			return false
		}
		var e = Site.checkNestModule(d),
			f;
		if(e.parentId > 0) {
			f = Fai.top.$("#module" + e.parentId);
			return a(f)
		}
		if(typeof e.parentId === "string" && e.parentId.indexOf("fk-inBannerListZone") != -1) {
			return true
		}
		return false
	}
};
Site.updateOtherSectionModule = function(l) {
	var e = Fai.top.$("#faiFloatPanel");
	if(e.length < 1) {
		return
	}
	if(typeof l != "undefined" && l.length > 0) {
		var g = [];
		var q = $.parseJSON(Fai.top._panelOptionData.moduleStyleList);
		g.push("		<div class='panelSectionModuleContent'>");
		g.push("				<ul class='panelModuleIconContainer'>");
		for(var h = 0; h < l.length; h++) {
			var j = l[h].title;
			var o = Fai.encodeHtml(l[h].title);
			var r = l[h].className;
			var f = l[h].param;
			var c = l[h].id;
			var b = l[h].style;
			var a = l[h].valid;
			var n = "none";
			var d = "点击使用模块";
			var p = "Site.panelModuleCheck(" + c + "," + b + ',"panelOtherModule")';
			var k = "";
			if(Fai.top.$("#module" + c).length > 0 && Fai.top.$("#module" + c).is(":visible")) {
				n = "block";
				d = "点击隐藏模块"
			}
			if(Fai.top._colId == Fai.top._panelOptionData.sysIndex && b == q.sysLocation) {
				n = "none";
				var m = "当前页";
				if(Fai.top._colId == Fai.top._panelOptionData.sysIndex) {
					m = "首页"
				}
				k = "cursor:default;";
				d = m + '不能使用"' + o + '"模块';
				p = "Fai.ing('" + d + "');"
			}
			g.push("					<li id='panelOtherModule" + c + "' class='panelModuleIconContent panelModuleIcon_" + r + " sectionModuleIcon' >");
			g.push("						<a href='javascript:;' class='panelModuleIcon' onclick='" + Fai.encodeHtml(p) + ";return false;' title='" + d + "' style='" + k + "'></a>");
			if(!!window.ActiveXObject) {
				g.push("						<a href='javascript:;' class='panelModuleTitleA' onclick='Site.hideAShowInput(" + c + ",false);return false;' title='点击修改模块名称'>" + o + "</a>")
			}
			g.push("						<input class='panelModuleTitleInput J_panelModuleTitle'  href='javascript:;' type='text' maxlength='50' style='display:" + (!!window.ActiveXObject ? "none" : "block") + "'  value='" + o + "' onfocus='this.select();' onblur='Site.editCurrColModuleName(" + c + ",false, " + h + ", " + b + ")' title='点击修改模块名称' _originalName='" + o + "'/>");
			g.push("						<a id='other_nowModuleCheck" + c + "' class='panelCheckTip' href='javascript:;' onclick='" + Fai.encodeHtml(p) + ";return false;' style='display:" + n + ";'></a>");
			g.push("					</li>")
		}
		g.push("				</ul>");
		g.push("		</div>");
		e.find("#otherSectionModuleContainer").empty().append(g.join(""))
	} else {
		Fai.top.$("#otherSectionModuleContainer").empty()
	}
};
Site.refreshOtherSectionSelecter = function(b) {
	var a = Fai.top.$("#faiFloatPanel").find("#otherSectionSelecterContainer");
	if(b == 1) {
		a.show()
	} else {
		a.hide()
	}
};
Site.refreshModuleSearcher = function(a) {
	var b = Fai.top.$("#faiFloatPanel").find(".J_currentSectionModuleSearchBox");
	if(a == 1) {
		b.show()
	} else {
		b.hide()
	}
};
Site.getModuleIconClass = function(e, b) {
	var d = "sys";
	var a = Fai.top._panelOptionData.moduleIconClassList;
	for(var c = 0; c < a.length; c++) {
		if(a[c].style == e) {
			d = a[c].className
		}
	}
	switch(b) {
		case 2:
			d += "-two panelModuleIcon_mulModuleCol";
			break;
		case 3:
			d += "-three panelModuleIcon_mulModuleCol";
			break;
		case 4:
			d += "-four panelModuleIcon_mulModuleCol";
			break;
		case 5:
			d += "-five panelModuleIcon_mulModuleCol";
			break;
		default:
	}
	return d
};
Site.getChoiceSectionModule = function(e, o) {
	var k = [];
	if(e != -9) {
		if(e > 0) {
			$.ajax({
				type: "post",
				url: Site.genAjaxUrl("faiFloatPanel_h.jsp"),
				data: "cmd=appointSection&colId=" + e + "&extId=" + Fai.top._extId,
				error: function() {
					Fai.ing("系统繁忙，请稍候重试", false)
				},
				success: function(x) {
					var u = $.parseJSON(x);
					for(var t = 0; t < u.length; t++) {
						var w = u[t].name;
						var s = u[t].id;
						var q = u[t].style;
						var i = u[t].valid;
						var r = 0;
						if(u[t].colNum) {
							r = u[t].colNum
						}
						var v = Site.getModuleIconClass(q, r);
						if(!!i) {
							k.push({
								id: s,
								title: w,
								className: v,
								param: v,
								style: q,
								valid: i
							})
						}
					}
					Site.updateOtherSectionModule(k)
				}
			})
		} else {
			Site.updateOtherSectionModule(k)
		}
	} else {
		if(typeof o == "undefined") {
			$.ajax({
				type: "post",
				url: Site.genAjaxUrl("faiFloatPanel_h.jsp"),
				data: "cmd=otherSection&colId=" + Fai.top._colId + "&extId=" + Fai.top._extId,
				error: function() {
					Fai.ing("系统繁忙，请稍候重试", false)
				},
				success: function(B) {
					Fai.top._panelOptionData.combinsList = $.parseJSON(B);
					var A = Fai.top._panelOptionData.combinsList;
					for(var w = 0; w < A.length; w++) {
						var u = A[w];
						if(u.id == e) {
							var x = u.moduleList;
							for(var v = 0; v < x.length; v++) {
								var z = x[v].name;
								var t = x[v].id;
								var s = x[v].style;
								var q = x[v].valid;
								var r = 0;
								if(x[v].colNum) {
									r = x[v].colNum
								}
								var y = Site.getModuleIconClass(s, r);
								if(!!q) {
									k.push({
										id: t,
										title: z,
										className: y,
										param: y,
										style: s,
										valid: q
									})
								}
							}
							break
						}
					}
					Site.updateOtherSectionModule(k)
				}
			})
		} else {
			var p = Fai.top._panelOptionData.combinsList;
			if(typeof p == "undefined") {
				$.ajax({
					type: "post",
					url: Site.genAjaxUrl("faiFloatPanel_h.jsp"),
					data: "cmd=otherSection&colId=" + Fai.top._colId + "&extId=" + Fai.top._extId,
					error: function() {
						Fai.ing("系统繁忙，请稍候重试", false)
					},
					success: function(A) {
						Fai.top._panelOptionData.combinsList = $.parseJSON(A);
						p = Fai.top._panelOptionData.combinsList;
						for(var w = 0; w < p.length; w++) {
							var u = p[w];
							if(u.id == e) {
								var x = u.moduleList;
								for(var v = 0; v < x.length; v++) {
									var z = x[v].name;
									var t = x[v].id;
									var s = x[v].style;
									var q = x[v].valid;
									var r = 0;
									if(x[v].colNum) {
										r = x[v].colNum
									}
									var y = Site.getModuleIconClass(s, r);
									if(!!q) {
										k.push({
											id: t,
											title: z,
											className: y,
											param: y,
											style: s,
											valid: q
										})
									}
								}
								break
							}
						}
						Site.updateOtherSectionModule(k)
					}
				})
			} else {
				for(var h = 0; h < p.length; h++) {
					var f = p[h];
					if(f.id == e) {
						var l = f.moduleList;
						for(var g = 0; g < l.length; g++) {
							var n = l[g].name;
							var d = l[g].id;
							var c = l[g].style;
							var a = l[g].valid;
							var b = 0;
							if(l[g].colNum) {
								b = l[g].colNum
							}
							var m = Site.getModuleIconClass(c, b);
							if(!!a) {
								k.push({
									id: d,
									title: n,
									className: m,
									param: m,
									style: c,
									valid: a
								})
							}
						}
						break
					}
				}
				Site.updateOtherSectionModule(k)
			}
		}
	}
};
Site.sectionModuleSelectChange = function(d, b) {
	if(!!d) {
		Site.logDog(100082, 23)
	}
	var a = Fai.top.$("#panelOtherSectionSelecter");
	var c = a.val();
	if(c == Fai.top._colId) {
		Fai.top.$("#otherSectionModuleContainer").empty();
		Fai.top.$("#otherSectionSelecterPrompt").show()
	} else {
		Fai.top.$("#otherSectionSelecterPrompt").hide();
		Site.getChoiceSectionModule(c, b)
	}
};
Site.getModuleData = function(d) {
	var b = null;
	var c = Fai.top._panelOptionData.moduleDataList;
	for(var a = 0; a < c.length; a++) {
		if(c[a].id == d) {
			b = c[a];
			break
		}
	}
	return b
};
Site.showThisModule = function(c) {
	var k = Fai.top.$("#module" + c);
	if(k.length < 1) {
		return
	}
	var m = 0;
	Site.removeOverlay();
	Fai.top.$("#g_main").scrollTop(0);
	var j = k.attr("_inpack");
	var b = j > 0 ? j : c;
	var h = Fai.top.$("#module" + b);
	var e = h.attr("_intab");
	var g = h.attr("_inmulmcol");
	if(e > 0) {
		var a = Fai.top.$("#module" + e);
		if(a.is(":visible")) {
			Fai.top.$("#formTabButton" + b).click()
		}
		b = e;
		h = a
	} else {
		if(g > 0) {
			var l = Fai.top.$("#module" + g);
			b = g;
			h = l
		}
	}
	var f = h.attr("_side");
	if(f == 1) {
		module.trigger("mouseenter");
		Site.removeAllEditLayer();
		m = 300
	}
	if(m != 0) {
		if(typeof Fai.top.snapExpandModuleId != "undefined" && Fai.top.snapExpandModuleId != null && Fai.top.snapExpandModuleId != b) {
			Site.reSetSidePosition(Fai.top.$("#module" + Fai.top.snapExpandModuleId));
			Site.removeMoveFrame("module" + Fai.top.snapExpandModuleId);
			Fai.top.snapExpandModuleId = b
		} else {
			Fai.top.snapExpandModuleId = b
		}
	} else {
		if(typeof Fai.top.snapExpandModuleId != "undefined" && Fai.top.snapExpandModuleId != null) {
			Site.reSetSidePosition(Fai.top.$("#module" + Fai.top.snapExpandModuleId));
			Site.removeMoveFrame("module" + Fai.top.snapExpandModuleId);
			Fai.top.snapExpandModuleId = null
		}
	}
	var i = h.attr("_flutterSwitch");
	var d = h.attr("_side");
	if(d == 2) {
		Site.stopFlutterInterval(h);
		h.attr("_flutterSwitch", true);
		m = 300
	}
	setTimeout(function() {
		Site.scrollToModuleDiv(k);
		Site.triggerGobalEvent("showFindModuleDiv", c);
		Site.displayAddModule()
	}, m)
};
Site.hideAShowInput = function(c, a) {
	var b;
	if(a) {
		b = $("#currentSectionModuleContainer").find("#panelNowModule" + c)
	} else {
		b = $("#otherSectionModuleContainer").find("#panelOtherModule" + c)
	}
	b.find(".panelModuleTitleA").css("display", "none");
	b.find(".panelModuleTitleInput").css("display", "block");
	b.find(".panelModuleTitleInput").focus()
};
Site.editCurrColModuleName = function(d, f, i, b) {
	var h = $("#currentSectionModuleContainer").find("#panelNowModule" + d),
		e = $("#otherSectionModuleContainer").find("#panelOtherModule" + d),
		c = "",
		j = "";
	$editModule = "";
	$editModule = f ? h : e;
	c = $editModule.find(".panelModuleTitleInput").val();
	j = $editModule.find(".panelModuleTitleInput").attr("_originalname");
	g();

	function g() {
		if(c.trim() == "" || c == j) {
			$editModule.find(".panelModuleTitleInput").val(j);
			if(!!window.ActiveXObject) {
				$editModule.find(".panelModuleTitleA").css("display", "block");
				$editModule.find(".panelModuleTitleInput").css("display", "none")
			}
			return
		}
		if(c != j) {
			$.ajax({
				type: "post",
				url: Site.genAjaxUrl("module_h.jsp"),
				data: "cmd=setBack&id=" + d + "&name=" + Fai.encodeUrl(c) + "&colId=" + Fai.top._colId,
				error: function() {
					Fai.ing("系统繁忙，请稍候重试", false)
				},
				success: function(k) {
					var m = $.parseJSON(k);
					if(m.success) {
						if(b == 29 || b == 35 || b == 80 || b == 87) {
							$("#module" + d).find(".titleText" + d).find(".bannerNormalTitle").text(c)
						} else {
							Site.refreshModule(m.id, m.div, c)
						}
						$("#module" + d).find("#module" + d + "SideBtn").find(".g_sideBtn_tl").text(c);
						$editModule.find(".panelModuleTitleA").text(c);
						h.find(".panelModuleTitleInput").val(c);
						h.find(".panelModuleTitleInput").attr("_originalname", c);
						e.find(".panelModuleTitleInput").val(c);
						e.find(".panelModuleTitleInput").attr("_originalname", c);
						if(!!window.ActiveXObject) {
							$editModule.find(".panelModuleTitleA").css("display", "block");
							$editModule.find(".panelModuleTitleInput").css("display", "none")
						}
						var l = $(".faiFloatPanelContentContainer").find(".J_search-innerBox");
						if(l.css("display") == "block") {
							a()
						}
					}
				}
			})
		}
	}

	function a() {
		var m = Fai.top.$("#currentSectionModuleContainer");
		if(m.length < 1) {
			return
		}
		var p = m.find(".J_panelModuleIconContainer"),
			k = p.children("li:visible"),
			t = m.find(".J_currentSectionModuleSearch"),
			n = m.find(".J_noFoundTip"),
			o = $.trim(t.val()),
			q = false,
			l, s, r;
		if(n.length > 0) {
			n.hide()
		}
		if(k.length > 0) {
			if(o.length < 1) {
				k.show();
				return
			}
			k.hide();
			k.each(function(u, v) {
				s = $(v);
				r = s.attr("fk_searchKey");
				l = $.trim(s.find(".J_panelModuleTitle").val());
				if(r != "undefined" && r.indexOf(o) > -1 || l.indexOf(o) > -1) {
					s.show();
					q = true
				}
			})
		}
		if(!q) {
			var n = p.siblings(".J_noFoundTip");
			if(n.length > 0) {
				n.show()
			} else {
				p.after("<div class='J_noFoundTip' style='text-align:center;color:#666;margin-top:40px;'>抱歉，搜索不到该模块...</div>")
			}
		}
	}
};
(function(b, a, c) {
	a.Dom = {};
	a.createDisableMask = function() {
		a.Dom.$layoutModule = a.Dom.$layoutModule || b("#faiFloatPanelContent").find(".J_layoutModule");
		if(a.Dom.$layoutModule.length < 1) {
			return
		}
		a.removeDisableMask();
		var e = "",
			f, d;
		a.Dom.$layoutModuleContent = a.Dom.$layoutModuleContent || a.Dom.$layoutModule.find(".panelItemContent");
		a.Dom.$layoutModuleContent.addClass("fk-panelDisableContent");
		e += "<div id='fk-panelDisableMask' class='fk-panelDisableMask'>";
		e += "<span class='f-maskSpan'>自由容器模块内无法添加排版模块</span>";
		e += "</div>";
		a.Dom.$layoutModuleContent.append(e)
	};
	a.removeDisableMask = function() {
		var d = b("#fk-panelDisableMask"),
			e;
		if(d.length > 0) {
			d.remove();
			if(a.Dom.$layoutModuleContent.length > 0) {
				a.Dom.$layoutModuleContent.removeClass("fk-panelDisableContent")
			}
		}
	};
	a.disableTypesettingModule = function() {
		a.Dom.$layoutModule = a.Dom.$layoutModule || b("#faiFloatPanelContent").find(".J_layoutModule");
		if(a.Dom.$layoutModule.length < 1) {
			return
		}
		a.Dom.$layoutModuleContent = a.Dom.$layoutModuleContent || a.Dom.$layoutModule.find(".panelItemContent");
		a.Dom.$layoutModuleContent.find("li.panelModuleIconContent").not(".panelModuleIcon_pack").hide()
	};
	a.enableAllTypesettingModule = function() {
		a.Dom.$layoutModule = a.Dom.$layoutModule || b("#faiFloatPanelContent").find(".J_layoutModule");
		if(a.Dom.$layoutModule.length < 1) {
			return
		}
		a.Dom.$layoutModuleContent = a.Dom.$layoutModuleContent || a.Dom.$layoutModule.find(".panelItemContent");
		a.Dom.$layoutModuleContent.find("li.panelModuleIconContent").show()
	}
})(jQuery, Site.panelDisableArea || (Site.panelDisableArea = {}));