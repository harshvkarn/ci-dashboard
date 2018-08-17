"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _infrastructure = require("../infrastructure");

class Pipelines extends _infrastructure.BaseService {
  all(projectId, options = {}) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/pipelines`, options);
  }

  create(projectId, ref) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/pipeline`, {
      ref
    });
  }

  show(projectId, pipelineId) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/pipelines/${pipelineId}`);
  }

  retry(projectId, pipelineId) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/pipelines/${pipelineId}/retry`);
  }

  cancel(projectId, pipelineId) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.post(this, `projects/${pId}/pipelines/${pipelineId}/cancel`);
  }

  showJobs(projectId, pipelineId, options) {
    const pId = encodeURIComponent(projectId);
    return _infrastructure.RequestHelper.get(this, `projects/${pId}/pipelines/${pipelineId}/jobs`, options);
  }

}

var _default = Pipelines;
exports.default = _default;