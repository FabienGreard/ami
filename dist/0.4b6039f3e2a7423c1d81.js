webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	var app_1 = __webpack_require__(7);
	var Main = (function () {
	    function Main() {
	        this.app = new app_1.App();
	        console.error(this.app.getLog());
	        $('#loading').remove();
	        $('#app').append(this.app.getHtml());
	    }
	    return Main;
	}());
	new Main();
	/*
	var css = require('./../css/main.css');
	
	require(['./components/temp.js'], function(res){
	  $('#loading').remove();
	  $('#app').append(res.html);
	  console.error(res.log);
	});
	*/


/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var App = (function () {
	    function App() {
	        this.html = __webpack_require__(8);
	        this.log = "ERROR 404 AMI NOT FOUND !";
	    }
	    App.prototype.getLog = function () {
	        return this.log;
	    };
	    App.prototype.getHtml = function () {
	        return this.html;
	    };
	    return App;
	}());
	exports.App = App;
	/*
	var html = require('./../../html/temp.html');
	var log = "ERROR 404 AMI NOT FOUND !";
	
	module.exports = {
	  html,
	  log
	};
	*/


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"container\">\r\n  <div id=\"shell-container\">\r\n    <div class=\"header-shell\">\r\n      <img class=\"cli-img\" src=\"" + __webpack_require__(9) + "\" alt=\"windows_cli.png\" />\r\n      <p class=\"shell-title\">C:\\\\Windows\\system32\\ami.exe</p>\r\n      <span onclick=\"console.error('Did you really think it would minimize it ?');\" class=\"minimize\"></span>\r\n      <span onclick=\"console.error('HuU');\" class=\"maximize\"></span>\r\n      <span onclick=\"console.error('IT IS A FAKE WINDOW SHELL !');\" class=\"close\"></span>\r\n    </div>\r\n    <div class=\"body-shell\">\r\n    <p class=\"microsoft-label\">Ami is Coming [version 1.0.0]</p>\r\n    <p class=\"microsoft-label\">(c) 2016 Fabien Greard. All rights reserved.</p>\r\n      <p class=\"input\">C:\\Users\\Ami> I am not finished yet ! However you can find any informations about my creator on<a class=\"link\" href=\"https://www.linkedin.com/in/fabiengreard\">linkedin</a><span class=\"ping\"></span>\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "asset/7d4fd50de8159b6687adb58e96456e4b.png";

/***/ }
]);
//# sourceMappingURL=0.4b6039f3e2a7423c1d81.js.map