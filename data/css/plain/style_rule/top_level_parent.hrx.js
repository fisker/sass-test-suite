export default [
  {
    name: 'input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'plain.css',
    data: '& {a: b}\n',
  },
  {
    name: 'output.css',
    data: '& {\n  a: b;\n}\n',
  },
]
