export default [
  {
    name: 'input.scss',
    data: '.foo {\n  @at-root & {\n    .bar {\n      @at-root & {\n        a: b;\n      }\n    }\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo .bar {\n  a: b;\n}\n',
  },
]
