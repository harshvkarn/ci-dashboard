"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _infrastructure = require("../infrastructure");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Epics extends _infrastructure.BaseService {
  all(groupId) {
    const gId = encodeURIComponent(groupId);
    return _infrastructure.RequestHelper.get(this, `groups/${gId}/epics`);
  }

  create(groupId, title, options) {
    const gId = encodeURIComponent(groupId);
    return _infrastructure.RequestHelper.post(this, `groups/${gId}/epics`, _objectSpread({
      title
    }, options));
  }

  edit(groupId, epicId, options) {
    const [gId, eId] = [groupId, epicId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.put(this, `groups/${gId}/epics/${eId}`, options);
  }

  remove(groupId, epicId) {
    const [gId, eId] = [groupId, epicId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.delete(this, `groups/${gId}/epics/${eId}`);
  }

  show(groupId, epicId) {
    const [gId, eId] = [groupId, epicId].map(encodeURIComponent);
    return _infrastructure.RequestHelper.get(this, `groups/${gId}/epics/${eId}`);
  }

}

var _default = Epics;
exports.default = _default;