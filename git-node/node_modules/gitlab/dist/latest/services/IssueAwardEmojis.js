"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _templates = require("../templates");

class IssueAwardEmojis extends _templates.ResourceAwardEmojis {
  constructor(options) {
    super('issues', options);
  }

}

var _default = IssueAwardEmojis;
exports.default = _default;