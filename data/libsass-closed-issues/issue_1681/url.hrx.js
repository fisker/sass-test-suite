export default [
  {
    name: 'input.scss',
    data: '@function url() {\n  @return null;\n}\n',
  },
  {
    name: 'error',
    data: "Error: Invalid function name.\n  ,\n1 | @function url() {\n  |           ^^^\n  '\n  input.scss 1:11  root stylesheet\n",
  },
]
