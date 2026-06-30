export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {b: color.adjust(#abcdef, $red: 10)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: #b5cdef;\n}\n',
  },
]
