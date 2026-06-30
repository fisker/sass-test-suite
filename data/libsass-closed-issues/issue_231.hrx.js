export default [
  {
    name: 'input.scss',
    data: '// test.scss:\r\na {\r\n  background-image: url(fn("s"));\r\n}',
  },
  {
    name: 'output.css',
    data: 'a {\n  background-image: url(fn("s"));\n}\n',
  },
]
