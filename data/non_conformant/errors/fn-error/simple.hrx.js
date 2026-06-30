export default [
  {
    name: 'input.scss',
    data: '@error "error";',
  },
  {
    name: 'error',
    data: 'Error: "error"\n  ,\n1 | @error "error";\n  | ^^^^^^^^^^^^^^\n  \'\n  input.scss 1:1  root stylesheet\n',
  },
]
