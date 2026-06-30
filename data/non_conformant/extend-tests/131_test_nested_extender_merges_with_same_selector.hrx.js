// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/131_test_nested_extender_merges_with_same_selector.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo {\n.bar {a: b}\n.baz {@extend .bar} }\n',
  },
  {
    name: 'output.css',
    data: '.foo .bar, .foo .baz {\n  a: b;\n}\n',
  },
]
