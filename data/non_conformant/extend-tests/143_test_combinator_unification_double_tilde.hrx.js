// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/143_test_combinator_unification_double_tilde.hrx

export default [
  {
    name: 'input.scss',
    data: 'a.a ~ x {a: b}\nb.b ~ y {@extend x}\n',
  },
  {
    name: 'output.css',
    data: 'a.a ~ x, a.a ~ b.b ~ y, b.b ~ a.a ~ y {\n  a: b;\n}\n',
  },
]
