"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _urlJoin = _interopRequireDefault(require("url-join"));

var _infrastructure = require("../infrastructure");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ResourceCustomAttributes extends _infrastructure.BaseService {
  constructor(resourceType, ...args) {
    super(...args);
    this.url = (0, _urlJoin.default)(this.url, resourceType);
  }

  all(resourceId) {
    const rId = encodeURIComponent(resourceId);
    return _infrastructure.RequestHelper.get(this, `${rId}/custom_attributes`);
  }

  set(resourceId, customAttributeId, value) {
    const [rId, cId] = [resourceId, customAttributeId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.put(this, `${rId}/custom_attributes/${cId}`, {
      value
    });
  }

  remove(resourceId, customAttributeId) {
    const [rId, cId] = [resourceId, customAttributeId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.delete(this, `${rId}/custom_attributes/${cId}`);
  }

  show(resourceId, customAttributeId) {
    const [rId, cId] = [resourceId, customAttributeId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.get(this, `${rId}/custom_attributes/${cId}`);
  }

}

var _default = ResourceCustomAttributes;
exports.default = _default;