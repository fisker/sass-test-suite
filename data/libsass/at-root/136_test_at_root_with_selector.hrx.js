export default [
  {
    name: 'input.scss',
    data: '.foo {\n  @at-root .bar {a: b}\n}\n',
  },
  {
    name: 'output.css',
    data: '.bar {\n  a: b;\n}\n',
  },
]
