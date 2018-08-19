"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _infrastructure = require("../infrastructure");

class BroadcastMessages extends _infrastructure.BaseService {
  all(options) {
    return _infrastructure.RequestHelper.get(this, 'broadcast_messages', options);
  }

  create(options) {
    return _infrastructure.RequestHelper.post(this, 'broadcast_messages', options);
  }

  edit(broadcastMessageId, options) {
    const bId = encodeURIComponent(broadcastMessageId);
    return _infrastructure.RequestHelper.put(this, `broadcast_messages/${bId}`, options);
  }

  remove(broadcastMessageId) {
    const bId = encodeURIComponent(broadcastMessageId);
    return _infrastructure.RequestHelper.delete(this, `broadcast_messages/${bId}`);
  }

  show(broadcastMessageId, options) {
    const bId = encodeURIComponent(broadcastMessageId);
    return _infrastructure.RequestHelper.get(this, `broadcast_messages/${bId}`, options);
  }

}

var _default = BroadcastMessages;
exports.default = _default;