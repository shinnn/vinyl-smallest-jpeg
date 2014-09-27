# vinyl-smallest-jpeg

[![NPM version](https://badge.fury.io/js/vinyl-smallest-jpeg.svg)](https://www.npmjs.org/package/vinyl-smallest-jpeg)
[![Build Status](https://travis-ci.org/shinnn/vinyl-smallest-jpeg.svg?branch=master)](https://travis-ci.org/shinnn/vinyl-smallest-jpeg)
[![Build status](https://ci.appveyor.com/api/projects/status/7oo29nnmf4f2exiq)](https://ci.appveyor.com/project/ShinnosukeWatanabe/vinyl-smallest-jpeg)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/vinyl-smallest-jpeg.svg)](https://coveralls.io/r/shinnn/vinyl-smallest-jpeg)
[![devDependency Status](https://david-dm.org/shinnn/vinyl-smallest-jpeg/dev-status.svg)](https://david-dm.org/shinnn/vinyl-smallest-jpeg#info=devDependencies)

Create a [vinyl](https://github.com/wearefractal/vinyl) file object of [theoretically smallest JPEG](https://github.com/mathiasbynens/small/blob/master/jpeg.jpg)

```javascript
var vinylSmallestJpeg = require('vinyl-smallest-jpeg');

var fixture = vinylSmallestJpeg();
fixture.contents; //=> <Buffer ff d8 ff e0 00 10 4a 46 49 ...>
fixture.contents.length; //=> 125
```

It is useful to test image-related [gulp](http://gulpjs.com/) plugins.

## Installation

[Install with npm](https://www.npmjs.org/doc/cli/npm-install.html).

```
npm install vinyl-smallest-jpeg
```

## API

```javascript
var vinylSmallestJpeg = require('vinyl-smallest-jpeg');
```

### vinylSmallestJpeg([*option*])

*option*: `Object`  
Return: `Object` ([vinyl file object](https://github.com/wearefractal/vinyl#file))

It creates a vinyl object whose [`contents`][contents] property is a buffer of smallest JPEG (125 bytes).

#### option

##### buffer

Type: `Boolean`  
Default: `true`

If you set this option `false`, [`contents`][contents] property becomes a [Readable Stream](http://nodejs.org/api/stream.html#stream_class_stream_readable) which emits a JPEG chunk.

```javascript
var vinylSmallestJpeg = require('vinyl-smallest-jpeg');

vinylSmallestJpeg().isBuffer(); //=> true
vinylSmallestJpeg({buffer: false}).isStream(); //=> true
```

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).

[contents]: https://github.com/wearefractal/vinyl#optionscontents
