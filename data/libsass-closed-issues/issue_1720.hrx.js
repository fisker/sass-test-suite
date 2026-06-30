// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1720.hrx

export default [
  {
    name: 'input.scss',
    data: '.test {\n    a: a#{b//}c;\n}\n',
  },
  {
    name: 'error',
    data: 'Error: expected "}".\n  ,\n3 | }\n  |  ^\n  \'\n  input.scss 3:2  root stylesheet\n',
  },
]
