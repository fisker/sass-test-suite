// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/errors/fn-error/ruleset.hrx

export default [
  {
    name: 'input.scss',
    data: 'a {\r\n  @error "error";\r\n  foo: bar;\r\n}',
  },
  {
    name: 'error',
    data: 'Error: "error"\n  ,\n2 |   @error "error";\n  |   ^^^^^^^^^^^^^^\n  \'\n  input.scss 2:3  root stylesheet\n',
  },
]
