"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _infrastructure = require("../infrastructure");

class EpicIssues extends _infrastructure.BaseService {
  all(groupId, epicId) {
    const [gId, eId] = [groupId, epicId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.get(this, `groups/${gId}/epics/${eId}/issues`);
  }

  assign(groupId, epicId, issueId) {
    const [gId, eId, iId] = [groupId, epicId, issueId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.put(this, `groups/${gId}/epics/${eId}/issues/${iId}`);
  }

  edit(groupId, epicId, issueId, options) {
    const [gId, eId, iId] = [groupId, epicId, issueId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.delete(this, `groups/${gId}/epics/${eId}/issues/${iId}`, options);
  }

  remove(groupId, epicId, issueId) {
    const [gId, eId, iId] = [groupId, epicId, issueId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.delete(this, `groups/${gId}/epics/${eId}/issues/${iId}`);
  }

}

var _default = EpicIssues;
exports.default = _default;