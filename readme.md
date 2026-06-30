# sass-test-suite

[![Npm Version][package_version_badge]][package_link]
[![MIT License][license_badge]][license_link]
[![Coverage][coverage_badge]][coverage_link]

[coverage_badge]: https://img.shields.io/codecov/c/github/fisker/sass-test-suite.svg?style=flat-square
[coverage_link]: https://app.codecov.io/gh/fisker/sass-test-suite
[license_badge]: https://img.shields.io/npm/l/sass-test-suite.svg?style=flat-square
[license_link]: https://github.com/fisker/sass-test-suite/blob/main/license
[package_version_badge]: https://img.shields.io/npm/v/sass-test-suite.svg?style=flat-square
[package_link]: https://www.npmjs.com/package/sass-test-suite

> Sass Parsing Test Suite.

## Install

```bash
yarn add sass-test-suite
```

## Usage

```js
import sassTestSuite from 'sass-test-suite'

console.log(sassTestSuite)
// =>
// [
//   {
//     name: 'callable/arguments.hrx',
//     files: [
//       {
//         name: 'mixin/_utils.scss',
//         data: ...,
//       },
//       {
//         name: 'mixin/trailing_comma/positional/input.scss',
//         data: ...,
//       },
//     ]
//   },
//   ...,
// ]
```

## Acknowledgments

Test cases comes from [Official Sass Spec Suite](https://github.com/sass/sass-spec) project.
