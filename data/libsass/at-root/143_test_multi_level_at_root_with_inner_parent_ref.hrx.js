export default [
  {
    name: 'input.scss',
    data: '.foo {\n  @at-root .bar {\n    @at-root & {\n      a: b;\n    }\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '.bar {\n  a: b;\n}\n',
  },
]
