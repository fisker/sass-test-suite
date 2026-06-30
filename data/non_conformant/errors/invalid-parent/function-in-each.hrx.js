export default [
  {
    name: 'input.scss',
    data: '@each $item in (a, b) {\r\n  @function foo() {}\r\n}',
  },
  {
    name: 'error',
    data: "Error: Functions may not be declared in control directives.\n  ,\n2 |   @function foo() {}\n  |   ^^^^^^^^^^^^^^^\n  '\n  input.scss 2:3  root stylesheet\n",
  },
]
