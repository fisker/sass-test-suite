// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2023/pseudo-selector-nr.hrx

export default [
  {
    name: 'input.scss',
    data: '#4 {\r\n    color: red;\r\n}\r\n',
  },
  {
    name: 'error',
    data: "Error: Expected identifier.\n  ,\n1 | #4 {\r\n  |  ^\n  '\n  input.scss 1:2  root stylesheet\n",
  },
]
