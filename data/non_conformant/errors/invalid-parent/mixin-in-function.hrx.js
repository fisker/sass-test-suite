export default [
  {
    name: 'input.scss',
    data: '@function foo () {\r\n  @mixin bar() {}\r\n}',
  },
  {
    name: 'error',
    data: "Error: This at-rule is not allowed here.\n  ,\n2 |   @mixin bar() {}\n  |   ^^^^^^^^^^^^^\n  '\n  input.scss 2:3  root stylesheet\n",
  },
]
