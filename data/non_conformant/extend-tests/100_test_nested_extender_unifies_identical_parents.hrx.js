// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/100_test_nested_extender_unifies_identical_parents.hrx

export default [
  {
    name: 'input.scss',
    data: '.baz .bip .foo {a: b}\n.baz .bip bar {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.baz .bip .foo, .baz .bip bar {\n  a: b;\n}\n',
  },
]
