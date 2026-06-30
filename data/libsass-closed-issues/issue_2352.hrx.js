// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2352.hrx

export default [
  {
    name: 'input.scss',
    data: '$theme: (red: #D700EE);\r\n\r\n@function test($args...) {\r\n\t@return #000;\r\n}\r\n\r\n.test {\r\n\tcolor: test($theme...);\r\n}',
  },
  {
    name: 'error',
    data: "Error: Variable keyword argument map must have string keys.\nred is not a string in (red: #D700EE).\n  ,\n8 |     color: test($theme...);\n  |                 ^^^^^^\n  '\n  input.scss 8:14  root stylesheet\n",
  },
]
