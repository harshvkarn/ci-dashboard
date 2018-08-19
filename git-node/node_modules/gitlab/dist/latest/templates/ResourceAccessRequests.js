"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ACCESS_LEVELS = void 0;

var _urlJoin = _interopRequireDefault(require("url-join"));

var _infrastructure = require("../infrastructure");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ACCESS_LEVELS = {
  GUEST: 10,
  REPORTER: 20,
  DEVELOPER: 30,
  MASTER: 40,
  OWNER: 50
};
exports.ACCESS_LEVELS = ACCESS_LEVELS;

class ResourceAccessRequests extends _infrastructure.BaseService {
  constructor(resourceType, ...args) {
    super(...args);
    this.url = (0, _urlJoin.default)(this.url, resourceType);
    this.ACCESS_LEVELS = ACCESS_LEVELS;
  }

  all(resourceId) {
    const rId = encodeURIComponent(resourceId);
    return _infrastructure.RequestHelper.get(this, `${rId}/access_requests`);
  }

  request(resourceId) {
    const rId = encodeURIComponent(resourceId);
    return _infrastructure.RequestHelper.post(this, `${rId}/access_requests`);
  }

  approve(resourceId, userId, {
    accessLevel = 30
  }) {
    const [rId, uId] = [resourceId, userId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.post(this, `${rId}/access_requests/${uId}/approve`, {
      accessLevel
    });
  }

  deny(resourceId, userId) {
    const [rId, uId] = [resourceId, userId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.delete(this, `${rId}/access_requests/${uId}`);
  }

}

var _default = ResourceAccessRequests;
exports.default = _default;