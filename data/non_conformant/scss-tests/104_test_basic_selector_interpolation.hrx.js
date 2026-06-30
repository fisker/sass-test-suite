// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/104_test_basic_selector_interpolation.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo#{1 + 2} baz {a: b}\n',
  },
  {
    name: 'output.css',
    data: 'foo3 baz {\n  a: b;\n}\n',
  },
]
