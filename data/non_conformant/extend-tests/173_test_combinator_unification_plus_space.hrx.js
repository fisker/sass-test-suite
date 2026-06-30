// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/173_test_combinator_unification_plus_space.hrx

export default [
  {
    name: 'input.scss',
    data: '.a.b x {a: b}\n.a + y {@extend x}\n',
  },
  {
    name: 'output.css',
    data: '.a.b x, .a.b .a + y {\n  a: b;\n}\n',
  },
]
