// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/128_test_nested_extender_with_sibling_selector.hrx

export default [
  {
    name: 'input.scss',
    data: '.baz .foo {a: b}\nfoo + bar {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.baz .foo, .baz foo + bar {\n  a: b;\n}\n',
  },
]
