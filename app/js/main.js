"use strict";
require("../scss/components/loading.scss");
const app_1 = require("./components/app");
const ami_1 = require("./components/ami");
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
                    this.ami = new ami_1.Ami(["C:\\Users\\Ami> I am not finished yet ! However you can find any informations about my creator on", "<a class='link' href='https://www.linkedin.com/in/fabiengreard'>linkedin</a>"]);
                }
            });
        }).catch((e) => {
            console.error(e);
        });
    }
}
new Main();
