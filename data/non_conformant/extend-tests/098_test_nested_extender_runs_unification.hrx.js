// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/098_test_nested_extender_runs_unification.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo.bar {a: b}\nfoo bar {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.foo.bar, foo bar.bar {\n  a: b;\n}\n',
  },
]
