export default [
  {
    name: 'input.scss',
    data: '@media screen {\n    a {\n        color: red;\n    }\n}\n\n.link {\n    @media (foo: bar) {\n        display: flex;\n    }\n}\n',
  },
  {
    name: 'output.css',
    data: '@media screen {\n  a {\n    color: red;\n  }\n}\n@media (foo: bar) {\n  .link {\n    display: flex;\n  }\n}\n',
  },
]
