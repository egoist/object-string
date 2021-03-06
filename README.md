# object-string [![NPM version](https://img.shields.io/npm/v/object-string.svg)](https://npmjs.com/package/object-string) [![NPM downloads](https://img.shields.io/npm/dm/object-string.svg)](https://npmjs.com/package/object-string) [![Build Status](https://img.shields.io/circleci/project/egoist/object-string/master.svg)](https://circleci.com/gh/egoist/object-string)

> Read string as JS object

## Install

```
$ npm install --save object-string
```

## Usage

```js
const objectString = require('object-string')

objectString('foo,bar')
//=> ['foo', 'bar']

objectString('foo:bar')
//=> {foo: 'bar'}

objectString('foo:bar,hoo:yah')
//=> {foo: 'bar', hoo: 'yah'}
```

## License

MIT © [EGOIST](http://github.com/egoist)
