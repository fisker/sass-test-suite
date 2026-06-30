// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/132_test_nested_extender_with_child_selector_merges_with_same_selector.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo > .bar .baz {a: b}\n.foo > .bar .bang {@extend .baz}\n',
  },
  {
    name: 'output.css',
    data: '.foo > .bar .baz, .foo > .bar .bang {\n  a: b;\n}\n',
  },
]
