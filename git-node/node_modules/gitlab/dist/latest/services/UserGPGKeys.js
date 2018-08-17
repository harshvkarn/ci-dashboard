"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _infrastructure = require("../infrastructure");

const url = userId => userId ? `users/${encodeURIComponent(userId)}/gpg_keys` : 'users/gpg_keys';

class UserGPGKeys extends _infrastructure.BaseService {
  all({
    userId
  } = {}) {
    return _infrastructure.RequestHelper.get(this, url(userId));
  }

  add(title, key, {
    userId
  } = {}) {
    return _infrastructure.RequestHelper.post(this, url(userId), {
      title,
      key
    });
  }

  show(keyId, {
    userId
  } = {}) {
    const kId = encodeURIComponent(keyId);
    return _infrastructure.RequestHelper.get(this, `${url(userId)}/${kId}`);
  }

  remove(keyId, {
    userId
  } = {}) {
    const kId = encodeURIComponent(keyId);
    return _infrastructure.RequestHelper.delete(this, `${url(userId)}/${kId}`);
  }

}

var _default = UserGPGKeys;
exports.default = _default;