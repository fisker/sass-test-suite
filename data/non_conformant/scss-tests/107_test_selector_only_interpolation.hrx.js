// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/107_test_selector_only_interpolation.hrx

export default [
  {
    name: 'input.scss',
    data: '#{"foo" + " bar"} {a: b}\n',
  },
  {
    name: 'output.css',
    data: 'foo bar {\n  a: b;\n}\n',
  },
]
