// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/123_test_nested_extender_with_early_child_selector.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo {\n.bar {a: b}\n.bip > .baz {@extend .bar}\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo .bar, .foo .bip > .baz {\n  a: b;\n}\n',
  },
]
