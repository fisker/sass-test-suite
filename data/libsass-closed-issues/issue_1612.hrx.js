// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1612.hrx

export default [
  {
    name: 'input.scss',
    data: 'c {\n  b: "foo", bar;\n  b: "foo", bar\n}\n',
  },
  {
    name: 'output.css',
    data: 'c {\n  b: "foo", bar;\n  b: "foo", bar;\n}\n',
  },
]
