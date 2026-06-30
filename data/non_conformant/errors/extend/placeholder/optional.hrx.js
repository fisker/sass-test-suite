export default [
  {
    name: 'input.scss',
    data: '.baz {\r\n  @extend %foo !optional;\r\n  color: green;\r\n}\r\n',
  },
  {
    name: 'output.css',
    data: '.baz {\n  color: green;\n}\n',
  },
]
