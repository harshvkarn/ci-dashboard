"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _infrastructure = require("../infrastructure");

const url = userId => userId ? `users/${encodeURIComponent(userId)}/emails` : 'user/emails';

class UserEmails extends _infrastructure.BaseService {
  all({
    userId
  } = {}) {
    return _infrastructure.RequestHelper.get(this, url(userId));
  }

  add(email, {
    userId
  } = {}) {
    return _infrastructure.RequestHelper.post(this, url(userId), {
      email
    });
  }

  show(emailId) {
    const eId = encodeURIComponent(emailId);
    return _infrastructure.RequestHelper.get(this, `user/emails/${eId}`);
  }

  remove(emailId, {
    userId
  } = {}) {
    const eId = encodeURIComponent(emailId);
    return _infrastructure.RequestHelper.delete(this, `${url(userId)}/${eId}`);
  }

}

var _default = UserEmails;
exports.default = _default;