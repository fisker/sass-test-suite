// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/use/error/syntax/empty.hrx

export default [
  {
    name: 'input.scss',
    data: '@use;\n',
  },
  {
    name: 'error',
    data: "Error: Expected string.\n  ,\n1 | @use;\n  |     ^\n  '\n  input.scss 1:5  root stylesheet\n",
  },
]
