// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1803/shallow.hrx

export default [
  {
    name: 'input.scss',
    data: 'a {\n  display: block\n\n  b {\n    foo: bar;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  display: block b;\n  display-foo: bar;\n}\n',
  },
]
