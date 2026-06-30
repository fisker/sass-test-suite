// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/168_test_combinator_unification_angle_space.hrx

export default [
  {
    name: 'input.scss',
    data: '.a x {a: b}\n.a.b > y {@extend x}\n',
  },
  {
    name: 'output.css',
    data: '.a x, .a.b > y {\n  a: b;\n}\n',
  },
]
