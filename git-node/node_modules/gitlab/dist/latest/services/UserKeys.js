"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _infrastructure = require("../infrastructure");

const url = userId => userId ? `users/${encodeURIComponent(userId)}/keys` : 'user/keys';

class UserKeys extends _infrastructure.BaseService {
  all({
    userId
  }) {
    return _infrastructure.RequestHelper.get(this, url(userId));
  }

  create(title, key, {
    userId
  } = {}) {
    return _infrastructure.RequestHelper.post(this, url(userId), {
      title,
      key
    });
  }

  show(keyId) {
    const kId = encodeURIComponent(keyId);
    return _infrastructure.RequestHelper.get(this, `user/keys/${kId}`);
  }

  remove(keyId, {
    userId
  } = {}) {
    const kId = encodeURIComponent(keyId);
    return _infrastructure.RequestHelper.delete(this, `${url(userId)}/${kId}`);
  }

}

var _default = UserKeys;
exports.default = _default;