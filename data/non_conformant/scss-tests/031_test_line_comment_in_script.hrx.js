export default [
  {
    name: 'input.scss',
    data: 'foo {a: 1 + // flang }\n  blang }\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  a: 1blang;\n}\n',
  },
]
