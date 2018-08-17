"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _templates = require("../templates");

class ProjectSnippetDiscussions extends _templates.ResourceDiscussions {
  constructor(options) {
    super('projects', 'snippets', options);
  }

}

var _default = ProjectSnippetDiscussions;
exports.default = _default;