"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _infrastructure = require("../infrastructure");

class Keys extends _infrastructure.BaseService {
  show(keyId) {
    const kId = encodeURIComponent(keyId);
    return _infrastructure.RequestHelper.get(this, `keys/${kId}`);
  }

}

var _default = Keys;
exports.default = _default;