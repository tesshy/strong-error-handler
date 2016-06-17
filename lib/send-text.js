// Copyright IBM Corp. 2016. All Rights Reserved.
// Node module: strong-error-handler
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

var util = require('util');

module.exports = function sendJson(res, data) {
  var content = toText(data);
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end(content, 'utf-8');
};

function toText(data) {
  var body = util.format('%s: %s', data.name, data.message);
  for (var i in data) {
    if (['message', 'name'].indexOf(i) == -1)
      body += util.format(' %s: %s; ', i, data[i]);
  }
  return body;
}
