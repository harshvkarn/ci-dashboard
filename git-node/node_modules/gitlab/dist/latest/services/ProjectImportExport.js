"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _infrastructure = require("../infrastructure");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ProjectImportExport extends _infrastructure.BaseService {
  download(projectId) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/export/download`);
  }

  exportStatus(projectId) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/export`);
  }

  import(file, path, options) {
    return _infrastructure.RequestHelper.post(this, 'projects/import', _objectSpread({
      file,
      path
    }, options));
  }

  importStatus(projectId) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/import`);
  }

  schedule(projectId, options) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/export`, options);
  }

}

var _default = ProjectImportExport;
exports.default = _default;