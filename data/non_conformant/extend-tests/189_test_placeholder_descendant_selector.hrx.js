export default [
  {
    name: 'input.scss',
    data: '#context %foo a {a: b}\n.bar {@extend %foo}\n',
  },
  {
    name: 'output.css',
    data: '#context .bar a {\n  a: b;\n}\n',
  },
]
