// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_948.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo { bar: 10 * 5#{px}; }',
  },
  {
    name: 'output.css',
    data: 'foo {\n  bar: 50 px;\n}\n',
  },
]
