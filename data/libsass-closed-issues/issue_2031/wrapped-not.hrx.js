export default [
  {
    name: 'input.scss',
    data: ':not(.asd, .qwe) {\r\n  content: test;\r\n}',
  },
  {
    name: 'output.css',
    data: ':not(.asd, .qwe) {\n  content: test;\n}\n',
  },
]
