export default [
  {
    name: 'input.scss',
    data: '$baz: 12;\n@foo bar#{$baz} qux {a: b}\n',
  },
  {
    name: 'output.css',
    data: '@foo bar12 qux {\n  a: b;\n}\n',
  },
]
