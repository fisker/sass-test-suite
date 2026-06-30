export default [
  {
    name: 'input.scss',
    data: "@use \"sass:selector\";\n.simple {\n  a: selector.replace('foo.bar', 'foo', 'foo[baz]');\n}\n",
  },
  {
    name: 'output.css',
    data: '.simple {\n  a: foo.bar[baz];\n}\n',
  },
]
