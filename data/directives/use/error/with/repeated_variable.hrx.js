// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/use/error/with/repeated_variable.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "other" with ($a: b, $a: c);\n',
  },
  {
    name: 'error',
    data: 'Error: The same variable may only be configured once.\n  ,\n1 | @use "other" with ($a: b, $a: c);\n  |                           ^^^^^\n  \'\n  input.scss 1:27  root stylesheet\n',
  },
]
