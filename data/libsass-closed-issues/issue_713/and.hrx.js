// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_713/and.hrx

export default [
  {
    name: 'input.scss',
    data: '@function and() {\n  @return "and";\n}\n\ntest {\n  and: and();\n}\n',
  },
  {
    name: 'error',
    data: "Error: Invalid function name.\n  ,\n1 | @function and() {\n  |           ^^^\n  '\n  input.scss 1:11  root stylesheet\n",
  },
]
