"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _infrastructure = require("../infrastructure");

class Lint extends _infrastructure.BaseService {
  lint(content) {
    return _infrastructure.RequestHelper.post(this, 'lint', {
      content
    });
  }

}

var _default = Lint;
exports.default = _default;