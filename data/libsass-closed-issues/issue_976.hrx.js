// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_976.hrx

export default [
  {
    name: 'input.scss',
    data: '.debug {\n  @debug-this {\n    foo: bar;\n  }\n}',
  },
  {
    name: 'output.css',
    data: '@debug-this {\n  .debug {\n    foo: bar;\n  }\n}\n',
  },
]
