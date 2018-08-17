"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _infrastructure = require("../infrastructure");

class GeoNodes extends _infrastructure.BaseService {
  all(options) {
    return _infrastructure.RequestHelper.get(this, 'geo_nodes', options);
  }

  create(geonodeId, options) {
    const gId = encodeURIComponent(geonodeId);
    return _infrastructure.RequestHelper.post(this, `geo_nodes/${gId}`, options);
  }

  edit(geonodeId, options) {
    const gId = encodeURIComponent(geonodeId);
    return _infrastructure.RequestHelper.put(this, `geo_nodes/${gId}`, options);
  }

  failures(options) {
    return _infrastructure.RequestHelper.post(this, 'geo_nodes/current/failures', options);
  }

  repair(geonodeId, options) {
    const gId = encodeURIComponent(geonodeId);
    return _infrastructure.RequestHelper.delete(this, `geo_nodes/${gId}`, options);
  }

  show(geonodeId, options) {
    const gId = encodeURIComponent(geonodeId);
    return _infrastructure.RequestHelper.get(this, `geo_nodes/${gId}`, options);
  }

  status(geonodeId, options) {
    const gId = encodeURIComponent(geonodeId);
    return _infrastructure.RequestHelper.get(this, `geo_nodes/${gId}/status`, options);
  }

  statuses(options) {
    return _infrastructure.RequestHelper.get(this, 'geo_nodes/statuses', options);
  }

}

var _default = GeoNodes;
exports.default = _default;