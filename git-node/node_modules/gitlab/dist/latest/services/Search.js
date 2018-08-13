"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _infrastructure = require("../infrastructure");

class Search extends _infrastructure.BaseService {
  all(scope, search, {
    projectId,
    groupId
  } = {}) {
    let url = '';

    if (projectId) {
      url += `projects/${encodeURIComponent(projectId)}/`;
    } else if (groupId) {
      url += `groups/${encodeURIComponent(groupId)}/`;
    }

    return _infrastructure.RequestHelper.get(this, `${url}search`, {
      scope,
      search
    });
  }

}

var _default = Search;
exports.default = _default;