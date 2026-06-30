export default [
  {
    name: 'input.scss',
    data: "@use 'plain'\n",
  },
  {
    name: 'plain.css',
    data: '// silent\n',
  },
  {
    name: 'error',
    data: "Error: Silent comments aren't allowed in plain CSS.\n  ,\n1 | // silent\n  | ^^^^^^^^^\n  '\n  plain.css 1:1   @use\n  input.scss 1:1  root stylesheet\n",
  },
]
