// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/malformed_expressions/at-debug/incomplete-expression.hrx

export default [
  {
    name: 'input.scss',
    data: '@debug("foo";\n',
  },
  {
    name: 'error',
    data: 'Error: expected ")".\n  ,\n1 | @debug("foo";\n  |             ^\n  \'\n  input.scss 1:13  root stylesheet\n',
  },
]
