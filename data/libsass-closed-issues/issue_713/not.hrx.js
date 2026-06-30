// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_713/not.hrx

export default [
  {
    name: 'input.scss',
    data: '@function not() {\n  @return "not";\n}\n\ntest {\n  not: not();\n}\n',
  },
  {
    name: 'error',
    data: "Error: Invalid function name.\n  ,\n1 | @function not() {\n  |           ^^^\n  '\n  input.scss 1:11  root stylesheet\n",
  },
]
