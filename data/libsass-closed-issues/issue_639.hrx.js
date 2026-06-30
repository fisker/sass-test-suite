export default [
  {
    name: 'input.scss',
    data: '$quoted_list: "foo", "bar", "baz";\n$unquoted_list: foo, bar, baz;\n\nfoo {\n  foo: #{foo, bar, baz};\n  foo: #{"foo", "bar", "baz"};\n  foo: #{$quoted_list};\n  foo: #{$unquoted_list};\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  foo: foo, bar, baz;\n  foo: foo, bar, baz;\n  foo: foo, bar, baz;\n  foo: foo, bar, baz;\n}\n',
  },
]
