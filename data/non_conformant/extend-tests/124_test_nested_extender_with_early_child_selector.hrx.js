// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/124_test_nested_extender_with_early_child_selector.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo {\n.bip .bar {a: b}\n> .baz {@extend .bar}\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo .bip .bar, .foo .bip .foo > .baz {\n  a: b;\n}\n',
  },
]
