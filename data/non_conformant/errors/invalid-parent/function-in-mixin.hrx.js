export default [
  {
    name: 'input.scss',
    data: '@mixin mix() {\r\n  @function foo() {}\r\n}\r\nfoo {\r\n  bar: include mix();\r\n}',
  },
  {
    name: 'error',
    data: "Error: Mixins may not contain function declarations.\n  ,\n2 |   @function foo() {}\n  |   ^^^^^^^^^^^^^^^\n  '\n  input.scss 2:3  root stylesheet\n",
  },
]
