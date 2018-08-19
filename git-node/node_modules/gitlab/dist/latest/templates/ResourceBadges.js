"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _urlJoin = _interopRequireDefault(require("url-join"));

var _infrastructure = require("../infrastructure");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ResourceBadges extends _infrastructure.BaseService {
  constructor(resourceType, ...args) {
    super(...args);
    this.url = (0, _urlJoin.default)(this.url, resourceType);
  }

  add(resourceId, options) {
    const rId = encodeURIComponent(resourceId);
    return _infrastructure.RequestHelper.post(this, `${rId}/badges`, options);
  }

  all(resourceId, options) {
    const rId = encodeURIComponent(resourceId);
    return _infrastructure.RequestHelper.get(this, `${rId}/badges`, options);
  }

  edit(resourceId, badgeId, options) {
    const [rId, bId] = [resourceId, badgeId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.put(this, `${rId}/badges/${bId}`, options);
  }

  preview(resourceId, linkUrl, imageUrl) {
    const rId = encodeURIComponent(resourceId);
    return _infrastructure.RequestHelper.get(this, `${rId}/badges/render`, {
      linkUrl,
      imageUrl
    });
  }

  remove(resourceId, badgeId) {
    const [rId, bId] = [resourceId, badgeId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.delete(this, `${rId}/badges/${bId}`);
  }

  show(resourceId, badgeId) {
    const [rId, bId] = [resourceId, badgeId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.get(this, `${rId}/badges/${bId}`);
  }

}

var _default = ResourceBadges;
exports.default = _default;