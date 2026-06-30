export default [
  {
    name: 'input.scss',
    data: '.foo {\n  @media screen {\n    @extend %bar;\n  }\n}\n\n@media screen {\n  %bar {\n    a: b;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '@media screen {\n  .foo {\n    a: b;\n  }\n}\n',
  },
]
