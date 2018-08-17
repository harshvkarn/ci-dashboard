"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _infrastructure = require("../infrastructure");

class Licence extends _infrastructure.BaseService {
  all() {
    return _infrastructure.RequestHelper.get(this, 'licence');
  }

  create() {
    return _infrastructure.RequestHelper.post(this, 'licence');
  }

}

var _default = Licence;
exports.default = _default;