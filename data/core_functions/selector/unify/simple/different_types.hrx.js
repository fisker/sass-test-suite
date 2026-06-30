export default [
  {
    name: 'input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("c", "#d")}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: c#d;\n}\n',
  },
]
