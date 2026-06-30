// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1243/warning.hrx

export default [
  {
    name: 'input.scss',
    data: '@warning "foo"\n',
  },
  {
    name: 'output.css',
    data: '@warning "foo";\n',
  },
]
