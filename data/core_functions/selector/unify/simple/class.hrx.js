export default [
  {
    name: 'same/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c", ".c")}\n',
  },
  {
    name: 'same/output.css',
    data: 'a {\n  b: .c;\n}\n',
  },
  {
    name: 'different/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c", ".d")}\n',
  },
  {
    name: 'different/output.css',
    data: 'a {\n  b: .c.d;\n}\n',
  },
]
