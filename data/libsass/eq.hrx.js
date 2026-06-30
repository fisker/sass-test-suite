export default [
  {
    name: 'input.scss',
    data: 'div {\n  foo: center == "center";\n  foo: (a b c) == (a b c);\n  foo: a b c == a b c;\n}\n',
  },
  {
    name: 'output.css',
    data: 'div {\n  foo: true;\n  foo: true;\n  foo: a b false b c;\n}\n',
  },
]
