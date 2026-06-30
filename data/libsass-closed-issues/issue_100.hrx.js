export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\n$endColor: red;\r\ntest {\r\n  background-color: color.adjust($endColor, $lightness: -10%) \\9;\r\n}',
  },
  {
    name: 'output.css',
    data: 'test {\n  background-color: #cc0000 \\9 ;\n}\n',
  },
]
