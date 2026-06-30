export default [
  {
    name: 'input.scss',
    data: '.foo {a: b}\n.bar {@extend #{".foo"}}\n',
  },
  {
    name: 'output.css',
    data: '.foo, .bar {\n  a: b;\n}\n',
  },
]
