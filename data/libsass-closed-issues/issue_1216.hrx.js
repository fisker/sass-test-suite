// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1216.hrx

export default [
  {
    name: 'input.scss',
    data: 'a {\n  width: 4.0px;\n  height: 3.00px;\n  opacity: 1.0;\n}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  width: 4px;\n  height: 3px;\n  opacity: 1;\n}\n',
  },
]
