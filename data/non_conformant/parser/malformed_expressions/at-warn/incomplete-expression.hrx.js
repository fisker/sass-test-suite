// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/malformed_expressions/at-warn/incomplete-expression.hrx

export default [
  {
    name: 'input.scss',
    data: '@warn("foo";\n',
  },
  {
    name: 'error',
    data: 'Error: expected ")".\n  ,\n1 | @warn("foo";\n  |            ^\n  \'\n  input.scss 1:12  root stylesheet\n',
  },
]
