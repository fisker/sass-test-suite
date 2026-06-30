export default [
  {
    name: 'input.scss',
    data: '@customAtRule;\r\ntest {\r\n  content: bar\r\n}',
  },
  {
    name: 'output.css',
    data: '@customAtRule;\ntest {\n  content: bar;\n}\n',
  },
]
