export default [
  {
    name: 'input.scss',
    data: '#{&}post {\r\n  foo {\r\n    bar: baz;\r\n  }\r\n}\r\n',
  },
  {
    name: 'output.css',
    data: 'post foo {\n  bar: baz;\n}\n',
  },
]
