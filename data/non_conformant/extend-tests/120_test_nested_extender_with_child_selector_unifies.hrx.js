// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/120_test_nested_extender_with_child_selector_unifies.hrx

export default [
  {
    name: 'input.scss',
    data: '.baz.foo {a: b}\nfoo > bar {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.baz.foo, foo > bar.baz {\n  a: b;\n}\n',
  },
]
