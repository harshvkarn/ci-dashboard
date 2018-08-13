"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _templates = require("../templates");

class IssueNotes extends _templates.ResourceNotes {
  constructor(options) {
    super('projects', 'issues', options);
  }

}

var _default = IssueNotes;
exports.default = _default;