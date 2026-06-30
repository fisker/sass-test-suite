// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1243/import.hrx

export default [
  {
    name: 'input.scss',
    data: '@import "http://foo"\n',
  },
  {
    name: 'output.css',
    data: '@import "http://foo";\n',
  },
]
