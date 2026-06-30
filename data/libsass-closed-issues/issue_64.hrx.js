// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_64.hrx

export default [
  {
    name: 'input.scss',
    data: '$var: 10px;\r\np {\r\n\twidth: -$var;\r\n}',
  },
  {
    name: 'output.css',
    data: 'p {\n  width: -10px;\n}\n',
  },
]
