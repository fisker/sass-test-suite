// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_883.hrx

export default [
  {
    name: 'input.scss',
    data: 'div {\n  @foo {\n    font: a;\n  }\n  @bar {\n    color: b;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '@foo {\n  div {\n    font: a;\n  }\n}\n@bar {\n  div {\n    color: b;\n  }\n}\n',
  },
]
