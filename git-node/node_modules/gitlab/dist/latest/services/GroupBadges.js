"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _templates = require("../templates");

class GroupBadges extends _templates.ResourceBadges {
  constructor(options) {
    super('groups', options);
  }

}

var _default = GroupBadges;
exports.default = _default;