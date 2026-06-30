// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/155_test_combinator_unification_angle_sibling.hrx

export default [
  {
    name: 'input.scss',
    data: '.a + x {a: b}\n.b > y {@extend x}\n',
  },
  {
    name: 'output.css',
    data: '.a + x, .b > .a + y {\n  a: b;\n}\n',
  },
]
