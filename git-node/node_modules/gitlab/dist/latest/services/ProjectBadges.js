"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _templates = require("../templates");

class ProjectBadges extends _templates.ResourceBadges {
  constructor(options) {
    super('projects', options);
  }

}

var _default = ProjectBadges;
exports.default = _default;