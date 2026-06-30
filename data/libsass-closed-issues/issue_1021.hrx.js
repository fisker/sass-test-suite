// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1021.hrx

export default [
  {
    name: 'input.scss',
    data: 'div {\r\n    top: 10px - 2 * 5px /* arrow size */;\r\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  top: 0px;\n}\n',
  },
]
