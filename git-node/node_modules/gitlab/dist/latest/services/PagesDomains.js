"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _infrastructure = require("../infrastructure");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class PagesDomains extends _infrastructure.BaseService {
  all({
    projectId
  } = {}) {
    const url = projectId ? `projects/${encodeURIComponent(projectId)}/` : '';
    return _infrastructure.RequestHelper.get(this, `${url}page/domains`);
  }

  create(projectId, domain, options) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/pages/domains`, _objectSpread({
      domain
    }, options));
  }

  edit(projectId, domain, options) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.put(this, `projects/${pId}/pages/domains/${domain}`, options);
  }

  show(projectId, domain) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/pages/domains/${domain}`);
  }

  remove(projectId, domain) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.delete(this, `projects/${pId}/pages/domains/${domain}`);
  }

}

var _default = PagesDomains;
exports.default = _default;