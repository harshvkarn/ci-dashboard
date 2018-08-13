"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _templates = require("../templates");

class ProjectSnippetNotes extends _templates.ResourceNotes {
  constructor(options) {
    super('projects', 'snippets', options);
  }

}

var _default = ProjectSnippetNotes;
exports.default = _default;