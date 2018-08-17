"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _urlJoin = _interopRequireDefault(require("url-join"));

var _infrastructure = require("../infrastructure");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ResourceDiscussions extends _infrastructure.BaseService {
  constructor(resourceType, resource2Type, ...args) {
    super(...args);
    this.url = (0, _urlJoin.default)(this.url, resourceType);
    this.resource2Type = resource2Type;
  }

  addNote(resourceId, resource2Id, discussiodId, noteId, options) {
    if (!options.body) throw new Error('Missing required property: body');
    const [rId, r2Id, dId, nId] = [resourceId, resource2Id, discussiodId, noteId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.put(this, `${rId}/${this.resource2Type}/${r2Id}/discussions/${dId}/notes/${nId}`, options);
  }

  all(resourceId, resource2Id, options) {
    const [rId, r2Id] = [resourceId, resource2Id].map(encodeURIComponent);
    return _infrastructure.RequestHelper.get(this, `${rId}/${this.resource2Type}/${r2Id}/discussions`, options);
  }

  create(resourceId, resource2Id, options) {
    if (!options.body) throw new Error('Missing required property: body');
    const [rId, r2Id] = [resourceId, resource2Id].map(encodeURIComponent);
    return _infrastructure.RequestHelper.post(this, `${rId}/${this.resource2Type}/${r2Id}/discussions`, options);
  }

  editNote(resourceId, resource2Id, discussiodId, noteId, body) {
    const [rId, r2Id, dId, nId] = [resourceId, resource2Id, discussiodId, noteId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.put(this, `${rId}/${this.resource2Type}/${r2Id}/discussions/${dId}/notes/${nId}`, {
      body
    });
  }

  removeNote(resourceId, resource2Id, discussiodId, noteId) {
    const [rId, r2Id, dId, nId] = [resourceId, resource2Id, discussiodId, noteId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.delete(this, `${rId}/${this.resource2Type}/${r2Id}/discussions/${dId}/notes/${nId}`);
  }

  show(resourceId, resource2Id, discussiodId) {
    const [rId, r2Id, dId] = [resourceId, resource2Id, discussiodId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.get(this, `${rId}/${this.resource2Type}/${r2Id}/discussions/${dId}`);
  }

}

var _default = ResourceDiscussions;
exports.default = _default;