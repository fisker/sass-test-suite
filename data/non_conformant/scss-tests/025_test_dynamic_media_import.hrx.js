// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/025_test_dynamic_media_import.hrx

export default [
  {
    name: 'input.scss',
    data: '$media: print;\n$key: -webkit-min-device-pixel-ratio;\n$value: 20;\n@import "foo" #{$media} and ($key + "-foo": $value + 5);\n',
  },
  {
    name: 'output.css',
    data: '@import "foo" print and (-webkit-min-device-pixel-ratio-foo: 25);\n',
  },
]
