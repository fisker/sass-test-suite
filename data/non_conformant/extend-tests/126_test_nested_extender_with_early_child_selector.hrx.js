// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/126_test_nested_extender_with_early_child_selector.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo + .bar {a: b}\n.bip > .baz {@extend .bar}\n',
  },
  {
    name: 'output.css',
    data: '.foo + .bar, .bip > .foo + .baz {\n  a: b;\n}\n',
  },
]
