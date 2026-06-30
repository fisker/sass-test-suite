export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\n.selector {\n  color: color.invert(transparent);\n}',
  },
  {
    name: 'output.css',
    data: '.selector {\n  color: rgba(255, 255, 255, 0);\n}\n',
  },
]
