// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/172_test_combinator_unification_plus_space.hrx

export default [
  {
    name: 'input.scss',
    data: '.a + x {a: b}\n.b y {@extend x}\n',
  },
  {
    name: 'output.css',
    data: '.a + x, .b .a + y {\n  a: b;\n}\n',
  },
]
