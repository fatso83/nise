"use strict";

var Event = require("./event");

/**
 * @param type
 * @param progressEventRaw
 * @param target
 */
function ProgressEvent(type, progressEventRaw, target) {
    this.initEvent(type, false, false, target);
    this.loaded =
        typeof progressEventRaw.loaded === "number"
            ? progressEventRaw.loaded
            : null;
    this.total =
        typeof progressEventRaw.total === "number"
            ? progressEventRaw.total
            : null;
    this.lengthComputable = Boolean(progressEventRaw.total);
}

ProgressEvent.prototype = new Event();

ProgressEvent.prototype.constructor = ProgressEvent;

module.exports = ProgressEvent;
