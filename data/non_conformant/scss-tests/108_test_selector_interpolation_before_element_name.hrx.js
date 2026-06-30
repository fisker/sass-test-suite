// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/108_test_selector_interpolation_before_element_name.hrx

export default [
  {
    name: 'input.scss',
    data: '#{"foo" + " bar"}baz {a: b}\n',
  },
  {
    name: 'output.css',
    data: 'foo barbaz {\n  a: b;\n}\n',
  },
]
