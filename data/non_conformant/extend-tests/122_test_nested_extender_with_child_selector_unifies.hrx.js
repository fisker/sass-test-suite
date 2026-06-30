// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/122_test_nested_extender_with_child_selector_unifies.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo {\n.bar {a: b}\n> .baz {@extend .bar}\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo .bar, .foo > .baz {\n  a: b;\n}\n',
  },
]
