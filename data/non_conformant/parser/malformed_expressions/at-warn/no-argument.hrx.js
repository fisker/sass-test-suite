// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/malformed_expressions/at-warn/no-argument.hrx

export default [
  {
    name: 'input.scss',
    data: '@warn;\n',
  },
  {
    name: 'error',
    data: "Error: Expected expression.\n  ,\n1 | @warn;\n  |      ^\n  '\n  input.scss 1:6  root stylesheet\n",
  },
]
