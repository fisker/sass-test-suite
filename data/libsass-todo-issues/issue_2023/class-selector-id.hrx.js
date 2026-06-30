// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-todo-issues/issue_2023/class-selector-id.hrx

export default [
  {
    name: 'input.scss',
    data: '.3c {\r\n    color: red;\r\n}\r\n',
  },
  {
    name: 'error',
    data: "Error: Expected identifier.\n  ,\n1 | .3c {\r\n  |  ^\n  '\n  input.scss 1:2  root stylesheet\n",
  },
]
