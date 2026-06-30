// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1629.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  background: url(...) 2rem 3rem / auto 2rem;\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  background: url(...) 2rem 3rem/auto 2rem;\n}\n',
  },
]
