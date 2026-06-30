// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/159_test_combinator_unification_double_angle.hrx

export default [
  {
    name: 'input.scss',
    data: 'a.a > x {a: b}\nb.b > y {@extend x}\n',
  },
  {
    name: 'output.css',
    data: 'a.a > x {\n  a: b;\n}\n',
  },
]
