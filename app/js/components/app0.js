"use strict";
class App {
    constructor() {
        let t0 = performance.now();
        require(['../../css/main.css'], (css) => {
            let t3 = performance.now();
            console.log("css", t0, t3);
            require(['./../../html/app.html'], (html) => {
                let t4 = performance.now();
                console.log("html", t0, t4);
                $('#loading').remove();
                $('#app').append(html);
            });
        });
        let t1 = performance.now();
        console.log("entre css", t0, t1);
        let t2 = performance.now();
        console.log("entre html", t0, t2);
        console.log("ERROR 404 AMI NOT FOUND !");
    }
}
exports.App = App;
