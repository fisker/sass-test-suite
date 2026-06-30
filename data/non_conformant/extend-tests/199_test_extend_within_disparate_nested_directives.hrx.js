export default [
  {
    name: 'input.scss',
    data: '@media screen {@flooblehoof {.foo {a: b}}}\n@media screen {@flooblehoof {.bar {@extend .foo}}}\n',
  },
  {
    name: 'output.css',
    data: '@media screen {\n  @flooblehoof {\n    .foo, .bar {\n      a: b;\n    }\n  }\n}\n@media screen {\n  @flooblehoof {}\n}\n',
  },
]
