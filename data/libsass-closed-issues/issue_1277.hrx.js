export default [
  {
    name: 'input.scss',
    data: '$foo: foo;\n$bar: bar;\n\n.foo {\n  foo: foo #{$foo}, bar #{$bar};\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  foo: foo foo, bar bar;\n}\n',
  },
]
