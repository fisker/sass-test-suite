// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/156_test_combinator_unification_double_angle.hrx

export default [
  {
    name: 'input.scss',
    data: '.a.b > x {a: b}\n.b > y {@extend x}\n',
  },
  {
    name: 'output.css',
    data: '.a.b > x, .a.b > y {\n  a: b;\n}\n',
  },
]
