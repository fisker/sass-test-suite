export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {b: color.change(#abcdef, $red: 10)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: #0acdef;\n}\n',
  },
]
