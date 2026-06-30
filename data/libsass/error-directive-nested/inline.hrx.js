export default [
  {
    name: 'input.scss',
    data: 'a {\n  b: {\n    @error test;\n    c: d;\n  }\n}\n',
  },
  {
    name: 'error',
    data: "Error: test\n  ,\n3 |     @error test;\n  |     ^^^^^^^^^^^\n  '\n  input.scss 3:5  root stylesheet\n",
  },
]
