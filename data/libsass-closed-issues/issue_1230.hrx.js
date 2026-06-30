// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1230.hrx

export default [
  {
    name: 'input.scss',
    data: 'div {\n  transition-property:\n    border-color,\n    box-shadow,\n    color;\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  transition-property: border-color, box-shadow, color;\n}\n',
  },
]
