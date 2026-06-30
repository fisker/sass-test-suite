// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/109_test_selector_interpolation_in_string.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo[val="bar #{"foo" + " bar"} baz"] {a: b}\n',
  },
  {
    name: 'output.css',
    data: 'foo[val="bar foo bar baz"] {\n  a: b;\n}\n',
  },
]
