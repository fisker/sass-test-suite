// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-todo-issues/issue_2235/empty.hrx

export default [
  {
    name: 'input.scss',
    data: '@media all and (min-width: 100px) {\n  @import "https://example.org";\n}\n',
  },
  {
    name: 'output.css',
    data: '@media all and (min-width: 100px) {\n  @import "https://example.org";\n}\n',
  },
]
