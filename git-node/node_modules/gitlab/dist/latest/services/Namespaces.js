"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _infrastructure = require("../infrastructure");

class Namespaces extends _infrastructure.BaseService {
  all(options) {
    return _infrastructure.RequestHelper.get(this, 'namespaces', options);
  }

  show(namespaceId) {
    const nId = encodeURIComponent(namespaceId);
    return _infrastructure.RequestHelper.get(this, `namespaces/${nId}`);
  }

}

var _default = Namespaces;
exports.default = _default;