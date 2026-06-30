export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {b: color.scale(#abcdef, $red: 10%)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: rgb(179.4, 205, 239);\n}\n',
  },
]
