export default [
  {
    name: 'input.scss',
    data: 'a {\n  @at-root (with: rule) {\n    b: c;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: c;\n}\n',
  },
]
