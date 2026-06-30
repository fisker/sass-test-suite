// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/use/error/syntax/as_nothing.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "foo" as;\n',
  },
  {
    name: 'error',
    data: 'Error: Expected identifier.\n  ,\n1 | @use "foo" as;\n  |              ^\n  \'\n  input.scss 1:14  root stylesheet\n',
  },
]
