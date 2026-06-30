// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1822.hrx

export default [
  {
    name: 'input.scss',
    data: '.btn {\n    .open& {\n        color: #000;\n    }\n}\n',
  },
  {
    name: 'error',
    data: 'Error: "&" may only used at the beginning of a compound selector.\n  ,\n2 |     .open& {\n  |          ^\n  \'\n  input.scss 2:10  root stylesheet\n',
  },
]
