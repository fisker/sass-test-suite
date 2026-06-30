export default [
  {
    name: 'input.scss',
    data: '@function element() {\n  @return null;\n}\n',
  },
  {
    name: 'error',
    data: "Error: Invalid function name.\n  ,\n1 | @function element() {\n  |           ^^^^^^^\n  '\n  input.scss 1:11  root stylesheet\n",
  },
]
