export default [
  {
    name: 'input.scss',
    data: '.mango {\n  color: red;\n}\n\ntype {\n  &__else {\n    @extend .mango;\n  }\n}\n\n.qualified {\n  &__else {\n    @extend .mango;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '.mango, .qualified__else, type__else {\n  color: red;\n}\n',
  },
]
