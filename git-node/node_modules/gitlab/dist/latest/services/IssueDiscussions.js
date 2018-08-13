"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _templates = require("../templates");

class IssueDiscussions extends _templates.ResourceDiscussions {
  constructor(options) {
    super('projects', 'issues', options);
  }

}

var _default = IssueDiscussions;
exports.default = _default;