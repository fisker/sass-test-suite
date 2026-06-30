// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2156/debug.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:string";\n@debug "\\"foo\\"" + "";\r\n@debug "" + "\\"foo\\"";\r\n@debug "" + "\\"foo";\r\n@debug "\\"foo\\"" + "bar";\r\n@debug string.unquote("\\"foo\\" and \\"bar\\"");\r\n',
  },
  {
    name: 'output.css',
    data: '',
  },
  {
    name: 'warning',
    data: 'input.scss:2 DEBUG: "foo"\ninput.scss:3 DEBUG: "foo"\ninput.scss:4 DEBUG: "foo\ninput.scss:5 DEBUG: "foo"bar\ninput.scss:6 DEBUG: "foo" and "bar"\n',
  },
]
