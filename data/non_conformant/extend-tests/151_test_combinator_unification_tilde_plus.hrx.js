// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/151_test_combinator_unification_tilde_plus.hrx

export default [
  {
    name: 'input.scss',
    data: 'a.a ~ x {a: b}\nb.b + y {@extend x}\n',
  },
  {
    name: 'output.css',
    data: 'a.a ~ x, a.a ~ b.b + y {\n  a: b;\n}\n',
  },
]
