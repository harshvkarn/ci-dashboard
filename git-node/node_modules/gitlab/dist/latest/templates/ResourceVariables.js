"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _infrastructure = require("../infrastructure");

const url = (resourceType, resourceId, resource2Type, resource2Id) => {
  const [rId, r2Id] = [resourceId, resource2Id].map(encodeURIComponent);
  let output = `${resourceType}/${rId}/`;

  if (resource2Id) {
    output += `${resource2Type}/${r2Id}/`;
  }

  output += 'variables';
  return output;
};

class ResourceVariables extends _infrastructure.BaseService {
  constructor(resourceType, resource2Type, ...args) {
    super(...args);
    this.resourceType = resourceType;
    this.resource2Type = resource2Type;
  }

  all(resourceId, resource2Id) {
    return _infrastructure.RequestHelper.get(this, url(this.resourceType, resourceId, this.resource2Type, resource2Id));
  }

  create(resourceId, resource2Id, options) {
    return _infrastructure.RequestHelper.post(this, url(this.resourceType, resourceId, this.resource2Type, resource2Id), options);
  }

  edit(resourceId, resource2Id, keyId, options) {
    const kId = encodeURIComponent(keyId);
    return _infrastructure.RequestHelper.put(this, `${url(this.resourceType, resourceId, this.resource2Type, resource2Id)}/${kId}`, options);
  }

  show(resourceId, resource2Id, keyId) {
    const kId = encodeURIComponent(keyId);
    return _infrastructure.RequestHelper.get(this, `${url(this.resourceType, resourceId, this.resource2Type, resource2Id)}/${kId}`);
  }

  remove(resourceId, resource2Id, keyId) {
    const kId = encodeURIComponent(keyId);
    return _infrastructure.RequestHelper.delete(this, `${url(this.resourceType, resourceId, this.resource2Type, resource2Id)}/${kId}`);
  }

}

var _default = ResourceVariables;
exports.default = _default;