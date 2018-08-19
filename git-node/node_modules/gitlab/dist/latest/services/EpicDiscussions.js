"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _templates = require("../templates");

class EpicDiscussions extends _templates.ResourceDiscussions {
  constructor(options) {
    super('groups', 'epics', options);
  }

}

var _default = EpicDiscussions;
exports.default = _default;