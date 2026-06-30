export default [
  {
    name: 'input.scss',
    data: '@mixin parent {\n  @function nested() {\n    @return foo;\n  }\n\n  foo: nested();\n}\n\n\ntest {\n  @include parent;\n}\n',
  },
  {
    name: 'error',
    data: "Error: Mixins may not contain function declarations.\n  ,\n2 |   @function nested() {\n  |   ^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:3  root stylesheet\n",
  },
]
