// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-todo-issues/issue_2051.hrx

export default [
  {
    name: 'input.scss',
    data: ':global(.thing) {\n    color: red;\n}\n\n:global(.thing[disabled]) {\n    @extend .thing;\n    background: blue;\n}',
  },
  {
    name: 'error',
    data: 'Error: The target selector was not found.\nUse "@extend .thing !optional" to avoid this error.\n  ,\n6 |     @extend .thing;\n  |     ^^^^^^^^^^^^^^\n  \'\n  input.scss 6:5  root stylesheet\n',
  },
]
