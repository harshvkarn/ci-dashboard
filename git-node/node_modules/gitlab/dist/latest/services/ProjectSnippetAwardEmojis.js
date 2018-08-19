"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _templates = require("../templates");

class ProjectSnippetAwardEmojis extends _templates.ResourceAwardEmojis {
  constructor(options) {
    super('issues', options);
  }

}

var _default = ProjectSnippetAwardEmojis;
exports.default = _default;