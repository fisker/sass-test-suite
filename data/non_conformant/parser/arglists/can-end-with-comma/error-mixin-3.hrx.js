// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/arglists/can-end-with-comma/error-mixin-3.hrx

export default [
  {
    name: 'input.scss',
    data: '// incorectly terminated\n@mixin missing-paren-error($a,$b, {\n}\n',
  },
  {
    name: 'error',
    data: 'Error: expected ")".\n  ,\n2 | @mixin missing-paren-error($a,$b, {\n  |                                   ^\n  \'\n  input.scss 2:35  root stylesheet\n',
  },
]
