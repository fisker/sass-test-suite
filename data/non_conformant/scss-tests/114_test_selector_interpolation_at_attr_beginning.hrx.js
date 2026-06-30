// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/114_test_selector_interpolation_at_attr_beginning.hrx

export default [
  {
    name: 'input.scss',
    data: '$zzz: zzz;\n[#{$zzz}=foo] { a: b; }\n',
  },
  {
    name: 'output.css',
    data: '[zzz=foo] {\n  a: b;\n}\n',
  },
]
