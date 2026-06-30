export default [
  {
    name: 'input.scss',
    data: '@media screen {\n@flooblehoof {\n  .foo {a: b}\n  .bar {@extend .foo}\n}\n}\n',
  },
  {
    name: 'output.css',
    data: '@media screen {\n  @flooblehoof {\n    .foo, .bar {\n      a: b;\n    }\n  }\n}\n',
  },
]
