export default [
  {
    name: 'input.scss',
    data: '.foo {\n  @at-root {\n    .bar {a: b}\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '.bar {\n  a: b;\n}\n',
  },
]
