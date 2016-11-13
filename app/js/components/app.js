"use strict";
class App {
    constructor() {
        console.error("ERROR 404 AMI NOT FOUND !");
    }
    init() {
        return new Promise((resolve, reject) => {
            try {
                require(['../../css/main.css'], (css) => {
                    try {
                        require(['./../../html/app.html'], (html) => {
                            window.setTimeout(function () {
                                resolve(html);
                            }, 2000);
                        });
                    }
                    catch (e) {
                        reject("HTML load --" + e);
                    }
                });
            }
            catch (e) {
                reject("CSS load --" + e);
            }
        });
    }
}
exports.App = App;
