// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-todo-issues/issue_2023/type-selector-nr.hrx

export default [
  {
    name: 'input.scss',
    data: '1 {\r\n    color: red;\r\n}\r\n',
  },
  {
    name: 'error',
    data: "Error: expected selector.\n  ,\n1 | 1 {\r\n  | ^\n  '\n  input.scss 1:1  root stylesheet\n",
  },
]
