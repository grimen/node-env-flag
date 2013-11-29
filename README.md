# NODE-ENV-FLAG [![Build Status](https://secure.travis-ci.org/grimen/node-env-flag.png)](http://travis-ci.org/grimen/node-env-flag)

Little util function for simpler extracting `Boolean` values from `ENV` variables in Node.js, i.e. `true` values (`true`, `TRUE`, `1`) vs. `false` values (`false`, `FALSE`, `0`).


## Example

```javascript
  var DEFAULT_FOO = 1;

  var flag = require('node-env-flag');

  var yep = flag(process.env.FOO, DEFAULT_FOO);

  if (yep) {
    console.log("Foo!")
  }
```


## API

* `(value)`

    ```javascript
    flag(process.env.FOO);
    ```

* `(value, default)`

    ```javascript
    flag(process.env.FOO, 1);
    ```


## Installation

```shell
  $ npm install node-env-flag
```


## Test

**Local tests:**

```shell
  $ make test
```


## License

Released under the MIT license.

Copyright (c) [Jonas Grimfelt](http://github.com/grimen)


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/grimen/node-env-flag/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

