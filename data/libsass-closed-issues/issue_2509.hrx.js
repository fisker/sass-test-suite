// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2509.hrx

export default [
  {
    name: 'input.scss',
    data: '[charset i] {\r\n\tdisplay: block;\r\n}\r\n\r\n[charset I] {\r\n\tdisplay: block;\r\n}\r\n\r\n[charset="utf-8" i] {\r\n\tdisplay: block;\r\n}\r\n\r\n[charset="utf-8" I] {\r\n\tdisplay: block;\r\n}',
  },
  {
    name: 'error',
    data: 'Error: Expected "]".\n  ,\n1 | [charset i] {\r\n  |          ^\n  \'\n  input.scss 1:10  root stylesheet\n',
  },
]
