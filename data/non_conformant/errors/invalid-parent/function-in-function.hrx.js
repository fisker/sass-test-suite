export default [
  {
    name: 'input.scss',
    data: '@function foo () {\r\n  @function bar() {}\r\n}',
  },
  {
    name: 'error',
    data: "Error: This at-rule is not allowed here.\n  ,\n2 |   @function bar() {}\n  |   ^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:3  root stylesheet\n",
  },
]
