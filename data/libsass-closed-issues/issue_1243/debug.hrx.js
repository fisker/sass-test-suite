// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1243/debug.hrx

export default [
  {
    name: 'input.scss',
    data: '@debug("foo")\n',
  },
  {
    name: 'output.css',
    data: '',
  },
  {
    name: 'warning',
    data: 'input.scss:1 DEBUG: foo\n',
  },
]
