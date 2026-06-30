// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/malformed_expressions/at-error/no-argument.hrx

export default [
  {
    name: 'input.scss',
    data: '@error;\n',
  },
  {
    name: 'error',
    data: "Error: Expected expression.\n  ,\n1 | @error;\n  |       ^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
]
