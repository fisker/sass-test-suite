// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/099_test_nested_extender_alternates_parents.hrx

export default [
  {
    name: 'input.scss',
    data: '.baz .bip .foo {a: b}\nfoo .grank bar {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.baz .bip .foo, .baz .bip foo .grank bar, foo .grank .baz .bip bar {\n  a: b;\n}\n',
  },
]
