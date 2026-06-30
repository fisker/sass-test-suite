// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1415/direct.hrx

export default [
  {
    name: 'input.scss',
    data: '@if & {\n  foo {\n    foo: bar;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '',
  },
]
