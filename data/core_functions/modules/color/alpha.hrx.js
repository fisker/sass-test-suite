export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {b: color.alpha(#abcdef)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: 1;\n}\n',
  },
]
