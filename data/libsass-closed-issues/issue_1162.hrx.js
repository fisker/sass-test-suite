export default [
  {
    name: 'input.scss',
    data: 'div {\n  content: #{0/0} a;\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  content: 0/0 a;\n}\n',
  },
]
