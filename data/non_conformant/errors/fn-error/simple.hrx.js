// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/errors/fn-error/simple.hrx

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
