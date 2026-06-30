// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1570.hrx

export default [
  {
    name: 'input.scss',
    data: 'a {\n    font: 12px/normal serif;\n}\n\nb {\n    font: normal 12px/normal serif;\n}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  font: 12px/normal serif;\n}\n\nb {\n  font: normal 12px/normal serif;\n}\n',
  },
]
