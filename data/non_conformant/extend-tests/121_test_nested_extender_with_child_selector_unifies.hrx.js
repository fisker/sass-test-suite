// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/121_test_nested_extender_with_child_selector_unifies.hrx

export default [
  {
    name: 'input.scss',
    data: '.baz > {\n.foo {a: b}\n.bar {@extend .foo}\n}\n',
  },
  {
    name: 'output.css',
    data: '.baz > .foo, .baz > .bar {\n  a: b;\n}\n',
  },
]
