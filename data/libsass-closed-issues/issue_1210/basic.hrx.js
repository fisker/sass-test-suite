// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1210/basic.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  color: blue;\n\n  @at-root {\n    bar {\n      color: red;\n    }\n  }\n}\n\nfoo {\n  color: blue;\n\n  @at-root bar {\n    color: red;\n  }\n}\n\nfoo {\n  color: blue;\n\n  @at-root bar {\n    baz {\n      color: red;\n    }\n  }\n}\n\nfoo {\n  color: blue;\n\n  @at-root {\n    bar {\n      baz {\n        color: red;\n      }\n    }\n  }\n}\n\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  color: blue;\n}\nbar {\n  color: red;\n}\n\nfoo {\n  color: blue;\n}\nbar {\n  color: red;\n}\n\nfoo {\n  color: blue;\n}\nbar baz {\n  color: red;\n}\n\nfoo {\n  color: blue;\n}\nbar baz {\n  color: red;\n}\n',
  },
]
