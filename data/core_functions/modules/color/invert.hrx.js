export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {b: color.invert(#abcdef)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: #543210;\n}\n',
  },
]
