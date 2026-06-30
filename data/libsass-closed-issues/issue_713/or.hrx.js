export default [
  {
    name: 'input.scss',
    data: '@function or() {\n  @return "or";\n}\n\ntest {\n  or: or();\n}\n',
  },
  {
    name: 'error',
    data: "Error: Invalid function name.\n  ,\n1 | @function or() {\n  |           ^^\n  '\n  input.scss 1:11  root stylesheet\n",
  },
]
