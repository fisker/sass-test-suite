export default [
  {
    name: 'input.scss',
    data: '@flooblehoof {.foo {a: b}}\n@flooblehoof {.bar {@extend .foo}}\n',
  },
  {
    name: 'output.css',
    data: '@flooblehoof {\n  .foo, .bar {\n    a: b;\n  }\n}\n@flooblehoof {}\n',
  },
]
