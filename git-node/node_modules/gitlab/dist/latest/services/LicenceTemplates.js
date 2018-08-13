"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _templates = require("../templates");

class LicenceTemplates extends _templates.ResourceTemplates {
  constructor(options) {
    super('licences', options);
  }

}

var _default = LicenceTemplates;
exports.default = _default;