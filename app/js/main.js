"use strict";
require("../scss/components/loading.scss");
const app_1 = require("./components/app");
class Main {
    constructor() {
        this.bootstrap = new app_1.App();
        this.bootstrap.init().then((html) => {
            $('#app').append(html);
            let tl = new TimelineMax()
                .to($('#loading'), 0.3, {
                opacity: 0,
                ease: Power0.easeOut,
                onComplete: function () {
                    $('#loading').remove();
                }
            });
        }).catch((e) => {
            console.error(e);
        });
    }
}
new Main();
