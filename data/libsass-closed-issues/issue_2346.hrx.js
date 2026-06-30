export default [
  {
    name: 'input.scss',
    data: '$items: 3;\r\nli {\r\n  &:nth-child(#{$items}n - #{$items}) {\r\n    color: red;\r\n  }\r\n}',
  },
  {
    name: 'output.css',
    data: 'li:nth-child(3n-3) {\n  color: red;\n}\n',
  },
]
