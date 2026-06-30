// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/096_test_long_extender_runs_unification.hrx

export default [
  {
    name: 'input.scss',
    data: 'ns|*.foo.bar {a: b}\na.baz {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: 'ns|*.foo.bar {\n  a: b;\n}\n',
  },
]
