"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _templates = require("../templates");

class GitLabCIYMLTemplates extends _templates.ResourceTemplates {
  constructor(options) {
    super('gitlab_ci_ymls', options);
  }

}

var _default = GitLabCIYMLTemplates;
exports.default = _default;