export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\nb {\n    color: color.adjust(Crimson, $lightness: 10%);\n}\n',
  },
  {
    name: 'output.css',
    data: 'b {\n  color: rgb(236.75, 54.25, 90.75);\n}\n',
  },
]
