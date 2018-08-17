"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _urlJoin = _interopRequireDefault(require("url-join"));

var _infrastructure = require("../infrastructure");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ResourceIssueBoards extends _infrastructure.BaseService {
  constructor(resourceType, ...args) {
    super(...args);
    this.url = (0, _urlJoin.default)(this.url, resourceType);
  }

  all(resourceId, options) {
    const rId = encodeURIComponent(resourceId);
    return _infrastructure.RequestHelper.get(this, `${rId}/boards`, options);
  }

  create(resourceId, name) {
    const rId = encodeURIComponent(resourceId);
    return _infrastructure.RequestHelper.post(this, `${rId}/boards`, {
      name
    });
  }

  createList(resourceId, boardId, labelId) {
    const [rId, bId] = [resourceId, boardId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.post(this, `${rId}/boards/${bId}/lists`, {
      labelId
    });
  }

  edit(resourceId, boardId, options) {
    const [rId, bId] = [resourceId, boardId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.put(this, `${rId}/boards/${bId}`, options);
  }

  editList(resourceId, boardId, listId, position) {
    const [rId, bId, lId] = [resourceId, boardId, listId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.put(this, `${rId}/boards/${bId}/lists/${lId}`, {
      position
    });
  }

  lists(resourceId, boardId) {
    const [rId, bId] = [resourceId, boardId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.get(this, `${rId}/boards/${bId}/lists`);
  }

  remove(resourceId, boardId) {
    const [rId, bId] = [resourceId, boardId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.delete(this, `${rId}/boards/${bId}`);
  }

  removeList(resourceId, boardId, listId) {
    const [rId, bId, lId] = [resourceId, boardId, listId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.delete(this, `${rId}/boards/${bId}/lists/${lId}`);
  }

  show(resourceId, boardId) {
    const [rId, bId] = [resourceId, boardId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.get(this, `${rId}/boards/${bId}`);
  }

  showList(resourceId, boardId, listId) {
    const [rId, bId, lId] = [resourceId, boardId, listId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.get(this, `${rId}/boards/${bId}/lists/${lId}`);
  }

}

var _default = ResourceIssueBoards;
exports.default = _default;