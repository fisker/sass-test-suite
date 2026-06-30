// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/errors/fn-error/property.hrx

export default [
  {
    name: 'input.scss',
    data: 'a {\r\n  b: {\r\n    @error "error";\r\n    foo: bar;\r\n  }\r\n}',
  },
  {
    name: 'error',
    data: 'Error: "error"\n  ,\n3 |     @error "error";\n  |     ^^^^^^^^^^^^^^\n  \'\n  input.scss 3:5  root stylesheet\n',
  },
]
