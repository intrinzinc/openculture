var globals = require('/ui/common/globals');
var css = require('/ui/common/css');

function fn(type,cnt) {
	
	var preview = function(identifier,cnt,typ) {
		var winClass = require("/ui/common/PlayWindowV2");
		var preview_win = new winClass(identifier,cnt,typ);
	}

	var click = function(e) {
		preview.call(this,e.source.xindent,e.source.xcnt,e.source.xtyp);
	}
	
	if (type == 2) {
		var self = Titanium.UI.createView({
			left:20,top:20,
			width:350, height:190,backgroundColor : "transparent", borderColor : css.DARKBACKGROUND, borderWidth:0
		})
		function clearthisA(e) {
			try {
				self.remove(self.children[0]);
			} catch (e) {}
		}
		
		function lazyA(e) {
			try {
				if (!self.children || self.children.length == 0 ) return;
				
				var s = self.rect;
				var p = self.getParent().rect;
				
				var x1 = p.x+s.x;
				var y1 = p.y+s.y;

				var x2 = p.x+s.x+s.width;
				var y2 = p.y+s.y+s.height;
				
				var inview = true;
				if (x2 < e.x ) inview = false;
				if (x1 > e.x+e.w ) inview = false;
				if (y2 < e.y ) inview = false;
				if (y1 > e.y+e.h ) inview = false;
				
				if (inview == true) {
//					self.borderWidth = 2;					
//					self.borderColor = "#ff0000";	
					self.fireEvent("onscreen",{});				
				} else {
//					self.borderWidth = 2;					
//					self.borderColor = "#00ff00";					
					self.fireEvent("offscreen",{});				
				}

				
//				Ti.API.debug("S ex"+e.x + " ey"+e.y + " eh"+e.h + " ew"+e.w + " sx"+ s.x + " sy"+s.y + " sh"+s.height + " sw"+s.width);
//				Ti.API.debug("P ex"+e.x + " ey"+e.y + " eh"+e.h + " ew"+e.w + " sx"+ s.x + " sy"+s.y + " sh"+s.height + " sw"+s.width);
			} catch (E) {}
		}

		function loadthisA(e) {
			var item = e.item;
			try {
				self.remove(self.children[0]);
			} catch (e) {}


			self.ximage = require("/etc/config").timthumb+"?w=350&h=250&a=t&q=20&src="+item.enclosure;
			self.ximage_backup = item.enclosure;
			self.xinview = 0;

			var img = Titanium.UI.createImageView({
				left:0,top:0,
				width:350,
				height:250,
				xinview : 0,
//				image: item.enclosure,
				image : '/images/10x10.gif',
				defaultImage :  '/images/10x10.gif',
				xcnt : cnt,
				xguid : item.guid,
				xindent: item.id,
				xtyp: item.type,
				borderColor:css.LIGHTCOLOUR ,borderWidth:0
			})
			var offscreen = function() {
				if (img.xinview == 1) {
					img.image = "/images/10x10.gif";
					self.borderWidth = 0;
					self.backgroundColor = css.DARKBACKGROUND;
				}
				img.xinview = 0;
			}
			var onscreen = function() {
				if (img.xinview == 0) {
					img.image = self.ximage;
					self.borderWidth = 1;
					self.borderColor = "#333333";
					self.backgroundColor = "#222222";
				}
				img.xinview = 1;
			}
			self.addEventListener("offscreen",offscreen);
			self.addEventListener("onscreen",onscreen);


			img.addEventListener("click",click);
			img.addEventListener("error", function(E) {
				Ti.API.info(self.ximage_backup);
				self.ximage = self.ximage_backup;
				img.image = self.ximage_backup;
			});
			img.addEventListener("load", function(E) {
				self.borderWidth = 0;
				self.backgroundColor = css.DARKBACKGROUND;
			});

			
			var rt = Titanium.UI.createView({
				right:0,top:0,
				width:100, height:200,
				//backgroundColor : "#666"
				backgroundColor : css.DARKBACKGROUND
			})
		
			
			var txt = Titanium.UI.createScrollView({
				left:0,bottom:0,
			    contentWidth:'auto',
			    contentHeight:'auto',
				width:350, height:50,
				//backgroundColor:"#ddd",
				backgroundColor:css.DARKBACKGROUND,
				opacity:0.7
			})
		
			var txt1 = Titanium.UI.createLabel({
				height:Ti.UI.SIZE,
				width : 300,
				left:20,
				color : css.VERYLIGHTCOLOUR,
				//text : "A"+item.title,
				text : item.title,
				font : {
					fontFamily : "arial"
				}
			});
			
			var self2 = Titanium.UI.createView({
				left:0,right:0,width:350, height:190,backgroundColor : css.DARKBACKGROUND
			})			
			self2.add(img);
//			self2.add(rt);
			self2.add(txt);
			txt.add(txt1);
			self.add(self2);
			
		}
		Titanium.App.addEventListener("load-"+cnt,loadthisA);
		Titanium.App.addEventListener("clearall",clearthisA);
		Titanium.App.addEventListener("app-endscroll",lazyA);
		
		return self;
	} else {
		var self = Titanium.UI.createView({
			left:20,top:20,
			width:250, height:120,backgroundColor : "transparent", borderColor : css.DARKBACKGROUND, borderWidth:0
		})
		function clearthisB(e) {
			try {
				self.remove(self.children[0]);
			} catch (e) {}
		}
		
		function lazyB(e) {
			try {
				if (!self.children || self.children.length == 0 ) return;
				
				var s = self.rect;
				var p = self.getParent().rect;
				
				var x1 = p.x+s.x;
				var y1 = p.y+s.y;

				var x2 = p.x+s.x+s.width;
				var y2 = p.y+s.y+s.height;
				
				var inview = true;
				if (x2 < e.x ) inview = false;
				if (x1 > e.x+e.w ) inview = false;
				if (y2 < e.y ) inview = false;
				if (y1 > e.y+e.h ) inview = false;
				
				if (inview == true) {
//					self.borderWidth = 2;					
//					self.borderColor = "#ff0000";	
					self.fireEvent("onscreen",{});				
				} else {
//					self.borderWidth = 2;					
//					self.borderColor = "#00ff00";					
					self.fireEvent("offscreen",{});				
				}

				
//				Ti.API.debug("S ex"+e.x + " ey"+e.y + " eh"+e.h + " ew"+e.w + " sx"+ s.x + " sy"+s.y + " sh"+s.height + " sw"+s.width);
//				Ti.API.debug("P ex"+e.x + " ey"+e.y + " eh"+e.h + " ew"+e.w + " sx"+ s.x + " sy"+s.y + " sh"+s.height + " sw"+s.width);
			} catch (E) {}
		}
				
		function loadthisB(e) {
			var item = e.item;
			try {
				self.remove(self.children[0]);
			} catch (e) {}
			
			self.ximage = require("/etc/config").timthumb+"?w=250&h=250&a=t&q=20&src="+item.enclosure;
			self.ximage_backup = item.enclosure;
			self.xinview = 0;
			
			var img = Titanium.UI.createImageView({
				left:0,top:0,
				width:250,
				height:250,
				xinview : 0,
				//backgroundColor : "#eee",
				backgroundColor : css.DARKBACKGROUND,
				image : '/images/10x10.gif',
				defaultImage :  '/images/10x10.gif',
//				image: item.enclosure,
				xcnt : cnt,
				xguid : item.guid,
				xindent: item.id,
				xtyp: item.type,
				xguid : item.guid,
				borderColor:css.DARKBACKGROUND,borderWidth:0
			});
			var offscreen = function() {
//				img.borderWidth = 1;
				if (img.xinview == 1) {
					img.image = "/images/10x10.gif";
					self.borderWidth = 0;
					self.backgroundColor = css.DARKBACKGROUND;
//					img.borderWidth = 3;
				}
//				img.borderColor = "#ff0000";
				img.xinview = 0;
			}
			var onscreen = function() {
//				img.borderWidth = 1;
				if (img.xinview == 0) {
					img.image = self.ximage;
					self.borderWidth = 1;
					self.borderColor = "#333333";
					self.backgroundColor = "#222222";
//					img.borderWidth = 3;
				}
//				img.borderColor = "#00ff00";
				img.xinview = 1;
			}
			self.addEventListener("offscreen",offscreen);
			self.addEventListener("onscreen",onscreen);
			img.addEventListener("error", function(E) {
				Ti.API.info(self.ximage_backup);
				self.ximage = self.ximage_backup;
				img.image = self.ximage_backup;
			});
			img.addEventListener("load", function(E) {
				self.borderWidth = 0;
				self.backgroundColor = css.DARKBACKGROUND;
			});

			
			img.addEventListener("click",click);
			
			var txt = Titanium.UI.createScrollView({
				left:0,bottom:0,
			    contentWidth:'auto',
			    contentHeight:'auto',
				width:250, height:50,
				///backgroundColor:"#ddd",
				backgroundColor:css.DARKBACKGROUND,
//				opacity:0.9
				opacity:0.7
			})
		
			var txt1 = Titanium.UI.createLabel({
				height:Ti.UI.SIZE,
				width : 200,
				color : css.VERYLIGHTCOLOUR,
				text : item.title,
				font : {
					fontFamily : "arial"
				}
			});
			
			var self2 = Titanium.UI.createView({
				left:0,right:0,top:0,bottom:0,backgroundColor : css.DARKBACKGROUND, opacity:0
			})			
			self2.add(img);
			self2.add(txt);
			txt.add(txt1);
			self.add(self2);
			self2.animate({opacity:1,duration:1500}, function() {});
		}
		Titanium.App.addEventListener("load-"+cnt,loadthisB);
		Titanium.App.addEventListener("clearall",clearthisB);
		Titanium.App.addEventListener("app-endscroll",lazyB);

		return self;
		
	}
	
}

module.exports = fn;


