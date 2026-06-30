// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2023/pseudo-selector-id.hrx

export default [
  {
    name: 'input.scss',
    data: '#4d {\r\n    color: red;\r\n}\r\n',
  },
  {
    name: 'error',
    data: "Error: Expected identifier.\n  ,\n1 | #4d {\r\n  |  ^\n  '\n  input.scss 1:2  root stylesheet\n",
  },
]
