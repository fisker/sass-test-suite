export default [
  {
    name: 'input.scss',
    data: 'test {\r\n  &post {\r\n    foo {\r\n      bar: baz;\r\n    }\r\n  }\r\n}',
  },
  {
    name: 'output.css',
    data: 'testpost foo {\n  bar: baz;\n}\n',
  },
]
