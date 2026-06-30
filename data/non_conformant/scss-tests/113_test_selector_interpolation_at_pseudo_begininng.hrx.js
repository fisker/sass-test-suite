// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/113_test_selector_interpolation_at_pseudo_begininng.hrx

export default [
  {
    name: 'input.scss',
    data: '$zzz: zzz;\n:#{$zzz}::#{$zzz} { a: b; }\n',
  },
  {
    name: 'output.css',
    data: ':zzz::zzz {\n  a: b;\n}\n',
  },
]
