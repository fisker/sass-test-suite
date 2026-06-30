// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1153.hrx

export default [
  {
    name: 'input.scss',
    data: '/* precision: 0 */\n$foo: 123px;\nfoo {\n  bar: $foo;\n}',
  },
  {
    name: 'output.css',
    data: '/* precision: 0 */\nfoo {\n  bar: 123px;\n}\n',
  },
]
