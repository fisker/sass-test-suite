export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {b: color.complement(#abcdef)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: #efcdab;\n}\n',
  },
]
