// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2156/warn.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:string";\n@warn "\\"foo\\"" + "";\r\n@warn "" + "\\"foo\\"";\r\n@warn "" + "\\"foo";\r\n@warn "\\"foo\\"" + "bar";\r\n@warn string.unquote("\\"foo\\" and \\"bar\\"");\r\n',
  },
  {
    name: 'output.css',
    data: '',
  },
  {
    name: 'warning',
    data: 'WARNING: "foo"\n    input.scss 2:1  root stylesheet\n\nWARNING: "foo"\n    input.scss 3:1  root stylesheet\n\nWARNING: "foo\n    input.scss 4:1  root stylesheet\n\nWARNING: "foo"bar\n    input.scss 5:1  root stylesheet\n\nWARNING: "foo" and "bar"\n    input.scss 6:1  root stylesheet\n',
  },
]
