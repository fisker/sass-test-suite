// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1732/valid/directive.hrx

export default [
  {
    name: 'input.scss',
    data: '@media all {\n  .foo {\n\tcolor: red;\n  }\n}',
  },
  {
    name: 'output.css',
    data: '@media all {\n  .foo {\n    color: red;\n  }\n}\n',
  },
]
