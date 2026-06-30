// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/115_test_selector_interpolation_at_attr_end.hrx

export default [
  {
    name: 'input.scss',
    data: '$zzz: zzz;\n[foo=#{$zzz}] { a: b; }\n',
  },
  {
    name: 'output.css',
    data: '[foo=zzz] {\n  a: b;\n}\n',
  },
]
