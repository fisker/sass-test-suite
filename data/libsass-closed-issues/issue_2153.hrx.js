// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2153.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  a: "\\"foo\\"" + "";\n  b: "" + "\\"foo\\"";\n  c: "" + "\\"foo";\n  d: "\\"foo\\"" + "bar";\n}\n',
  },
  {
    name: 'output.css',
    data: "foo {\n  a: '\"foo\"';\n  b: '\"foo\"';\n  c: '\"foo';\n  d: '\"foo\"bar';\n}\n",
  },
]
