"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _infrastructure = require("../infrastructure");

class ApplicationSettings extends _infrastructure.BaseService {
  all() {
    return _infrastructure.RequestHelper.get(this, 'application/settings');
  }

  edit(options) {
    return _infrastructure.RequestHelper.post(this, 'application/settings', options);
  }

}

var _default = ApplicationSettings;
exports.default = _default;