"use strict";
class Ami {
    constructor(msg) {
        this.msg = [];
        this.msgContainer = $('.input-container');
        this.bodyShell = $('.body-shell');
        this.input = $('.input');
        this.inputPrefix = "<p class='input'>";
        this.inputSuffix = "</p>";
        this.ping = "<span class='ping'></span>";
        this.printMsg(msg);
        this.printMsg(msg);
    }
    printMsg(msg) {
        let basePx = 60;
        if ($('.ping')) {
            $('.ping').remove();
        }
        this.msg = _.concat(this.msg, msg[0].split(""), msg[1]);
        this.msgContainer.append(this.inputPrefix + this.ping + this.inputSuffix);
        let tl = new TimelineMax();
        for (let input of this.msg) {
            tl.to($('.input'), 0.1, {
                opacity: 1,
                ease: Linear.easeOut,
                onComplete: function () {
                    $('.ping').before(input);
                }
            });
        }
        this.bodyShell.scrollTop(basePx + this.msgContainer.children().height());
    }
}
exports.Ami = Ami;
