export default [
  {
    name: 'input.scss',
    data: 'pre#{&} {\r\n  foo {\r\n    bar: baz;\r\n  }\r\n}\r\n',
  },
  {
    name: 'output.css',
    data: 'pre foo {\n  bar: baz;\n}\n',
  },
]
