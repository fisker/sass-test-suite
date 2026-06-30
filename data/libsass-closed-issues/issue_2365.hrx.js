// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2365.hrx

export default [
  {
    name: 'input.scss',
    data: 'a {\r\n    b {\r\n        color: red;\r\n    },\r\n    c {\r\n        color: blue;\r\n    }\r\n}',
  },
  {
    name: 'error',
    data: "Error: expected selector.\n  ,\n4 |     },\n  |      ^\n  '\n  input.scss 4:6  root stylesheet\n",
  },
]
