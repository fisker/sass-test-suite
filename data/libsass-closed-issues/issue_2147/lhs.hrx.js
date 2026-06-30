// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2147/lhs.hrx

export default [
  {
    name: 'input.scss',
    data: '$map: (a:b,c:d) + 1;\r\n',
  },
  {
    name: 'error',
    data: "Error: (a: b, c: d) isn't a valid CSS value.\n  ,\n1 | $map: (a:b,c:d) + 1;\n  |       ^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
]
