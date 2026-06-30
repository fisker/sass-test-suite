export default [
  {
    name: 'input.scss',
    data: '.foo {\n  @media screen {\n    @at-root .bar {a: b}\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '@media screen {\n  .bar {\n    a: b;\n  }\n}\n',
  },
]
