// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1765.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  bar: 20px /* height */ + 2*5px /* padding */ + 2*1px /*border*/;\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  bar: 32px;\n}\n',
  },
]
