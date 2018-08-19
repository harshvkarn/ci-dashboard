"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _urlJoin = _interopRequireDefault(require("url-join"));

var _infrastructure = require("../infrastructure");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function url(projectId, resourceType, resourceId, noteId) {
  const [pId, rId] = [projectId, resourceId].map(encodeURIComponent);
  let output = `${pId}/${resourceType}/${rId}/`;

  if (noteId) {
    output += `notes/${encodeURIComponent(noteId)}/`;
  }

  output += 'award_emoji';
  return output;
}

class ResourceAwardsEmojis extends _infrastructure.BaseService {
  constructor(resourceType, ...args) {
    super(...args);
    this.url = (0, _urlJoin.default)(this.url, 'projects');
    this.resourceType = resourceType;
  }

  all(projectId, resourceId, options, noteId) {
    return _infrastructure.RequestHelper.get(this, url(projectId, this.resourceType, resourceId, noteId), options);
  }

  award(projectId, resourceId, name, noteId) {
    return _infrastructure.RequestHelper.post(this, url(projectId, this.resourceType, resourceId, noteId), {
      name
    });
  }

  remove(projectId, resourceId, awardId, noteId) {
    return _infrastructure.RequestHelper.delete(this, url(projectId, this.resourceType, resourceId, noteId));
  }

  show(projectId, resourceId, awardId, noteId) {
    return _infrastructure.RequestHelper.get(this, url(projectId, this.resourceType, resourceId, noteId));
  }

}

var _default = ResourceAwardsEmojis;
exports.default = _default;