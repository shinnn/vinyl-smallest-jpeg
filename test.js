'use strict';

var test = require('tape');
var vinylSmallestJpeg = require('require-main')();

test('vinylSmallestJpeg()', function(t) {
  t.plan(2);

  t.ok(
    vinylSmallestJpeg().isBuffer(),
    'should create a vinyl object with buffer.'
  );

  t.ok(
    vinylSmallestJpeg({buffer: false}).isStream(),
    'should create a vinyl object with stream.'
  );
});
