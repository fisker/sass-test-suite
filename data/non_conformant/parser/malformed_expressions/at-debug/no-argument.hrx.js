// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/malformed_expressions/at-debug/no-argument.hrx

export default [
  {
    name: 'input.scss',
    data: '@debug;\n',
  },
  {
    name: 'error',
    data: "Error: Expected expression.\n  ,\n1 | @debug;\n  |       ^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
]
