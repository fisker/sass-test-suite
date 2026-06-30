export default [
  {
    name: 'input.scss',
    data: 'ruleset {\r\n  @return 42;\r\n}',
  },
  {
    name: 'error',
    data: "Error: This at-rule is not allowed here.\n  ,\n2 |   @return 42;\n  |   ^^^^^^^^^^\n  '\n  input.scss 2:3  root stylesheet\n",
  },
]
