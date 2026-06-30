// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1243/at-rule.hrx

export default [
  {
    name: 'input.scss',
    data: '@foo bar\n',
  },
  {
    name: 'output.css',
    data: '@foo bar;\n',
  },
]
