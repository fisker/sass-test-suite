export default [
  {
    name: 'input.scss',
    data: '@media (min-width: 100px) {\n  .parent > %child {\n    color: blue;\n  }\n}\n\n.foo {\n  @extend %child;\n}\n',
  },
  {
    name: 'output.css',
    data: '@media (min-width: 100px) {\n  .parent > .foo {\n    color: blue;\n  }\n}\n',
  },
]
