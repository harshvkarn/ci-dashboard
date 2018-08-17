"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _infrastructure = require("../infrastructure");

class FeatureFlags extends _infrastructure.BaseService {
  all(options) {
    return _infrastructure.RequestHelper.get(this, 'features', options);
  }

  set(name, options) {
    const encodedName = encodeURIComponent(name);
    return _infrastructure.RequestHelper.post(this, `features/${encodedName}`, options);
  }

}

var _default = FeatureFlags;
exports.default = _default;