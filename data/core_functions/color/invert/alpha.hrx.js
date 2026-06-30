export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {b: color.invert(rgba(turquoise, 0.4))}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: rgba(191, 31, 47, 0.4);\n}\n',
  },
]
