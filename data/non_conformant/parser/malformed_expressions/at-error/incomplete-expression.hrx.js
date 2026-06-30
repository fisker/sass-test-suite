// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/malformed_expressions/at-error/incomplete-expression.hrx

export default [
  {
    name: 'input.scss',
    data: '@error("foo";\n',
  },
  {
    name: 'error',
    data: 'Error: expected ")".\n  ,\n1 | @error("foo";\n  |             ^\n  \'\n  input.scss 1:13  root stylesheet\n',
  },
]
