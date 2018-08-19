"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _infrastructure = require("../infrastructure");

class SidekiqMetrics extends _infrastructure.BaseService {
  queueMetrics() {
    return _infrastructure.RequestHelper.get(this, 'sidekiq/queue_metrics');
  }

  processMetrics() {
    return _infrastructure.RequestHelper.get(this, 'sidekiq/process_metrics');
  }

  jobStats() {
    return _infrastructure.RequestHelper.get(this, 'sidekiq/job_stats');
  }

  compoundMetrics() {
    return _infrastructure.RequestHelper.get(this, 'sidekiq/compound_metrics');
  }

}

var _default = SidekiqMetrics;
exports.default = _default;