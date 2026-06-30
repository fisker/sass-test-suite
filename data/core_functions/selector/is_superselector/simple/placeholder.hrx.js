export default [
  {
    name: 'equal/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("%c", "%c")}\n',
  },
  {
    name: 'equal/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'unequal/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("%c", "%d")}\n',
  },
  {
    name: 'unequal/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
]
