// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-todo-issues/issue_2295/error/basic.hrx

export default [
  {
    name: 'input.scss',
    data: ".my-scope {\r\n  @import 'include.scss';\r\n}",
  },
  {
    name: 'include.scss',
    data: 'display: none;\r\n',
  },
  {
    name: 'error',
    data: "DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 |   @import 'include.scss';\r\n  |           ^^^^^^^^^^^^^^\n  '\n    input.scss 2:11  root stylesheet\n\nError: expected \"{\".\n  ,\n1 | display: none;\r\n  |              ^\n  '\n  include.scss 1:14  @import\n  input.scss 2:11    root stylesheet\n",
  },
]
