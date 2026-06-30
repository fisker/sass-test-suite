// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_131.hrx

export default [
  {
    name: 'input.scss',
    data: '$foo: bar;\r\n\r\ndiv {\r\n    content: "foo #{$foo}"\r\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  content: "foo bar";\n}\n',
  },
]
