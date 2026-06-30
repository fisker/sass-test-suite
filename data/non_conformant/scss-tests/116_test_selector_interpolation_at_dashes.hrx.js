// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/116_test_selector_interpolation_at_dashes.hrx

export default [
  {
    name: 'input.scss',
    data: '$a : a;\n$b : b;\ndiv { -foo-#{$a}-#{$b}-foo: foo }\n',
  },
  {
    name: 'output.css',
    data: 'div {\n  -foo-a-b-foo: foo;\n}\n',
  },
]
