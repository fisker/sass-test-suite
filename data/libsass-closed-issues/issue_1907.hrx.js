export default [
  {
    name: 'input.scss',
    data: "foo {\n  bar: 'test' + '1 #{2} 3';\n}",
  },
  {
    name: 'output.css',
    data: 'foo {\n  bar: "test1 2 3";\n}\n',
  },
]
