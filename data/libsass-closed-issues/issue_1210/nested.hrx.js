// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1210/nested.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  color: blue;\n\n  baz {\n    color: purple;\n\n    @at-root {\n      bar {\n        color: red;\n      }\n    }\n  }\n}\n\nfoo {\n  color: blue;\n\n  baz {\n    color: purple;\n\n    @at-root bar {\n      color: red;\n    }\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  color: blue;\n}\nfoo baz {\n  color: purple;\n}\nbar {\n  color: red;\n}\n\nfoo {\n  color: blue;\n}\nfoo baz {\n  color: purple;\n}\nbar {\n  color: red;\n}\n',
  },
]
