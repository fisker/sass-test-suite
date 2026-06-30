// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/use/error/with/not_default.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "other" with ($a: b);\n',
  },
  {
    name: '_other.scss',
    data: '$a: c;\n',
  },
  {
    name: 'error',
    data: 'Error: This variable was not declared with !default in the @used module.\n  ,\n1 | @use "other" with ($a: b);\n  |                    ^^^^^\n  \'\n  input.scss 1:20  root stylesheet\n',
  },
]
