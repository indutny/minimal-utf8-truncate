'use strict';
/* global describe it */

const assert = require('assert');
const Buffer = require('buffer').Buffer;

const truncate = require('../');

describe('minimal-utf8-truncate', () => {
  it('should not truncate short strings', () => {
    assert.strictEqual(truncate('hello', 1000), 'hello');
  });

  it('should truncate ASCII strings', () => {
    assert.strictEqual(truncate('hello', 1), 'h');
  });

  it('should not truncate at the boundary utf-8 strings', () => {
    assert.strictEqual(truncate('привет', 12), 'привет');
  });

  it('should truncate utf-8 strings', () => {
    const res = truncate('привет', 5);
    assert.strictEqual(res, 'пр');
    assert(Buffer.byteLength(res) <= 5);
  });

  it('should truncate utf-8 strings with pairs', () => {
    // Emoji input
    const res = truncate(
      Buffer.from('f09f94a5', 'hex').toString().repeat(10),
      5);
    assert.strictEqual(Buffer.from(res).toString('hex'), 'f09f94a5');
    assert(Buffer.byteLength(res) <= 5);
  });

  it('should not cut on surrogate pair boundary if needed', () => {
    // Emoji input
    const res = truncate(
      Buffer.from('f09f94a5', 'hex').toString().repeat(10),
      7);
    assert.strictEqual(Buffer.from(res).toString('hex'), 'f09f94a5');
    assert(Buffer.byteLength(res) <= 7);
  });
});
