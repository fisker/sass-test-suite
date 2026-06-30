// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/183_test_multiple_extender_merges_with_superset_selector.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo {@extend .bar; @extend .baz}\na.bar.baz {a: b}\n',
  },
  {
    name: 'output.css',
    data: 'a.bar.baz, a.foo {\n  a: b;\n}\n',
  },
]
