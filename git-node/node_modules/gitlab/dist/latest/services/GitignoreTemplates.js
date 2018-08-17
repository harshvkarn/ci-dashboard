"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _templates = require("../templates");

class GitignoreTemplates extends _templates.ResourceTemplates {
  constructor(options) {
    super('gitignores', options);
  }

}

var _default = GitignoreTemplates;
exports.default = _default;