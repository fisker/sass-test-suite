// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1061.hrx

export default [
  {
    name: 'input.scss',
    data: 'a {\n  &.div,\n  &.span {\n    display: block;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: 'a.div, a.span {\n  display: block;\n}\n',
  },
]
