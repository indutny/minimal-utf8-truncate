# minimal-utf8-truncate
[![Build Status](https://secure.travis-ci.org/indutny/minimal-utf8-truncate.svg)](http://travis-ci.org/indutny/minimal-utf8-truncate)

Truncate input strings so that their binary utf-8 encoding would not exceed
specific limit.

_The main pros of using this library is that it is self-sufficient, and does not
depend on either C++ code, or Buffer implementation._

## Install

```bash
npm install minimal-utf8-truncate
```

## Usage

```js
const truncate = require('minimal-utf8-truncate');

truncate('abcd', 2);  // 'ab'
truncate('слово', 4);  // 'сл'
truncate('слово', 5);  // 'сл', because 'о' takes two bytes
truncate('❤️❤️', 4);  // '❤️', because '❤️' takes three bytes
```

## LICENSE

This software is licensed under the MIT License.

Copyright Fedor Indutny, 2018.

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
USE OR OTHER DEALINGS IN THE SOFTWARE.

[0]: https://en.wikipedia.org/wiki/Montgomery_modular_multiplication
[1]: https://en.wikipedia.org/wiki/Mersenne_prime
