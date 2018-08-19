"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _templates = require("../templates");

class GroupIssueBoards extends _templates.ResourceIssueBoards {
  constructor(options) {
    super('groups', options);
  }

}

var _default = GroupIssueBoards;
exports.default = _default;