// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2156/error.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:string";\n@error string.unquote("\\"foo\\" and \\"bar\\"");\n',
  },
  {
    name: 'error',
    data: 'Error: "foo" and "bar"\n  ,\n2 | @error string.unquote("\\"foo\\" and \\"bar\\"");\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
]
