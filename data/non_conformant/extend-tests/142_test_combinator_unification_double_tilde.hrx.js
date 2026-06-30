// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/142_test_combinator_unification_double_tilde.hrx

export default [
  {
    name: 'input.scss',
    data: '.a ~ x {a: b}\n.b ~ y {@extend x}\n',
  },
  {
    name: 'output.css',
    data: '.a ~ x, .a ~ .b ~ y, .b ~ .a ~ y, .a.b ~ y {\n  a: b;\n}\n',
  },
]
