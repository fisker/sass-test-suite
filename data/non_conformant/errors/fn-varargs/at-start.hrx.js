export default [
  {
    name: 'input.scss',
    data: '@function test($rest...,$param) {}',
  },
  {
    name: 'error',
    data: 'Error: expected ")".\n  ,\n1 | @function test($rest...,$param) {}\n  |                         ^\n  \'\n  input.scss 1:25  root stylesheet\n',
  },
]
