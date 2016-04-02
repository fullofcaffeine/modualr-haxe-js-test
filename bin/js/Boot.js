// Package: js.Boot
define([],
       function () {

	// Class: js.Boot
	
	var Boot = function() {};
	Boot.prototype = {
	 __class__: Boot
	};
	Boot.__name__ = "js.Boot";
	Boot.__string_rec = function(o,s) {
		if(o == null) return "null";
		if(s.length >= 5) return "<...>";
		var t = typeof(o);
		if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
		switch(t) {
		case "object":
			if(o instanceof Array) {
				if(o.__enum__) {
					if(o.length == 2) return o[0];
					var str2 = o[0] + "(";
					s += "\t";
					var _g1 = 2;
					var _g = o.length;
					while(_g1 < _g) {
						var i1 = _g1++;
						if(i1 != 2) str2 += "," + Boot.__string_rec(o[i1],s); else str2 += Boot.__string_rec(o[i1],s);
					}
					return str2 + ")";
				}
				var l = o.length;
				var i;
				var str1 = "[";
				s += "\t";
				var _g2 = 0;
				while(_g2 < l) {
					var i2 = _g2++;
					str1 += (i2 > 0?",":"") + Boot.__string_rec(o[i2],s);
				}
				str1 += "]";
				return str1;
			}
			var tostr;
			try {
				tostr = o.toString;
			} catch( e ) {
				return "???";
			}
			if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
				var s2 = o.toString();
				if(s2 != "[object Object]") return s2;
			}
			var k = null;
			var str = "{\n";
			s += "\t";
			var hasp = o.hasOwnProperty != null;
			for( var k in o ) {
			if(hasp && !o.hasOwnProperty(k)) {
				continue;
			}
			if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
				continue;
			}
			if(str.length != 2) str += ", \n";
			str += s + k + " : " + Boot.__string_rec(o[k],s);
			}
			s = s.substring(1);
			str += "\n" + s + "}";
			return str;
		case "function":
			return "<function>";
		case "string":
			return o;
		default:
			return String(o);
		}
	};
	
	
	return Boot;
});

