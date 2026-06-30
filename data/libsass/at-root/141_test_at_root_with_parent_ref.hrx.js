export default [
  {
    name: 'input.scss',
    data: '.foo {\n  @at-root & {\n    a: b;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  a: b;\n}\n',
  },
]
