"use strict";

var Event = require("./event");

/**
 * @param type
 * @param customData
 * @param target
 */
function CustomEvent(type, customData, target) {
    this.initEvent(type, false, false, target);
    this.detail = customData.detail || null;
}

CustomEvent.prototype = new Event();

CustomEvent.prototype.constructor = CustomEvent;

module.exports = CustomEvent;
