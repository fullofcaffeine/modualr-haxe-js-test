// Package: js.Lib
define(["../js/Boot"],
       function (js_Boot) {

	// Class: js.Lib
	
	var Lib = function() {};
	Lib.prototype = {
	 __class__: Lib
	};
	Lib.__name__ = "js.Lib";
	Lib.alert = function(v) {
		alert(js_Boot.__string_rec(v,""));
	};
	Lib.undefined = null;
	Lib.nativeThis = null;
	Lib.global = null;
	
	
	return Lib;
});

