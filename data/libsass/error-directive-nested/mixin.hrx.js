export default [
  {
    name: 'input.scss',
    data: '@mixin c() {\n  @error test;\n  c: d;\n}\n\na {\n  b: {\n    @include c();\n  }\n}\n',
  },
  {
    name: 'error',
    data: "Error: test\n  ,\n8 |     @include c();\n  |     ^^^^^^^^^^^^\n  '\n  input.scss 8:5  root stylesheet\n",
  },
]
