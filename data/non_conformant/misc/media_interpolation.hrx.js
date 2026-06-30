export default [
  {
    name: 'input.scss',
    data: '$baz: 12;\n@media bar#{$baz} {a {b: c}}\n',
  },
  {
    name: 'output.css',
    data: '@media bar12 {\n  a {\n    b: c;\n  }\n}\n',
  },
]
