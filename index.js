'use strict';

function isTrailSurrogate(code) {
  return (code & 0xfc00) === 0xdc00;
}

function isLeadSurrogate(code) {
  // TODO(indutny): it might be not possible to have just a trail surrogate
  // in ECMAScript
  // No previous character
  if (code === -1) return false;
  return (code & 0xfc00) === 0xd800;
}

function truncate(string, limit) {
  // UTF-16 codepoint can't be longer than 4 bytes
  if (string.length * 4 < limit)
    return string;

  var len = 0;
  var previous = -1;
  for (var i = 0; i < string.length; i++) {
    // NOTE: 0 <= code <= 0xffff
    var code = string.charCodeAt(i);
    if (code <= 0x7f) {
      len++;
    } else if (code <= 0x7ff) {
      len += 2;
    } else {
      if (isTrailSurrogate(code) && isLeadSurrogate(previous))
        len += 1;
      else
        len += 3;
    }

    if (len > limit) {
      if (isTrailSurrogate(code) && isLeadSurrogate(previous))
        return string.slice(0, i - 1);

      return string.slice(0, i);
    }

    previous = code;
  }

  return string;
}
module.exports = truncate;
