"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _infrastructure = require("../infrastructure");

class Deployments extends _infrastructure.BaseService {
  all(projectId, options) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/deployments`, options);
  }

  show(projectId, deploymentId) {
    const [pId, dId] = [projectId, deploymentId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/deployments/${dId}`);
  }

}

var _default = Deployments;
exports.default = _default;