export default [
  {
    name: 'input.scss',
    data: '// line-endings in this file must be CRLF\r\n@import url("foo\\\r\nbar");\r\n@import url("foo\r\nbar");\r\n@import url(foo\r\nbar);\r\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING on line 4, column 13 of input.scss:\nUnescaped multiline strings are deprecated and will be removed in a future version of Sass.\nTo include a newline in a string, use "\\a" or "\\a " as in CSS.\n',
  },
  {
    name: 'error',
    data: 'Error: Expected ".\n  ,\n4 | @import url("foo\n  |                 ^\n  \'\n  input.scss 4:17  root stylesheet\n',
  },
]
