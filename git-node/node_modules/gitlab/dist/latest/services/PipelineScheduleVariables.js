"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _templates = require("../templates");

class PipelineScheduleVariables extends _templates.ResourceVariables {
  constructor(options) {
    super('projects', 'pipelines', options);
  }

}

var _default = PipelineScheduleVariables;
exports.default = _default;