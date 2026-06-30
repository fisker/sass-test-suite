export default [
  {
    name: 'input.scss',
    data: '@mixin mix() {\r\n  @mixin foo() {}\r\n}\r\nfoo {\r\n  bar: include mix();\r\n}',
  },
  {
    name: 'error',
    data: "Error: Mixins may not contain mixin declarations.\n  ,\n2 |   @mixin foo() {}\n  |   ^^^^^^^^^^^^\n  '\n  input.scss 2:3  root stylesheet\n",
  },
]
