// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/164_test_combinator_unification_angle_space.hrx

export default [
  {
    name: 'input.scss',
    data: '.a.b > x {a: b}\n.a y {@extend x}\n',
  },
  {
    name: 'output.css',
    data: '.a.b > x, .a.b > y {\n  a: b;\n}\n',
  },
]
