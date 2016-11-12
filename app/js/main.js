"use strict";
var app_1 = require("./components/app");
var Main = (function () {
    function Main() {
        this.bootstrap = new app_1.App();
        this.bootstrap.init().then(function (html) {
            $('#loading').remove();
            $('#app').append(html);
        }).catch(function (e) {
            console.error(e);
        });
    }
    return Main;
}());
new Main();
