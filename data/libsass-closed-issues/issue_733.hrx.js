// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_733.hrx

export default [
  {
    name: 'input.scss',
    data: '@function getter() {\n  @return 42px;\n}\n\ntest {\n  content: getter()-1;\n  content: getter()- 1;\n  content: getter() -1;\n}\n',
  },
  {
    name: 'output.css',
    data: 'test {\n  content: 41px;\n  content: 41px;\n  content: 42px -1;\n}\n',
  },
]
