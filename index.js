'use strict';

var bufferStream = require('simple-bufferstream');
var File = require('vinyl');
var smallestJpeg = require('smallest-jpeg');

module.exports = function smallestJpegVinyl(option) {
  option = option || {};
  var contents;
  if (option.buffer !== false) {
    contents = smallestJpeg();
  } else {
    contents = bufferStream(smallestJpeg());
  }

  return new File({contents: contents});
};
