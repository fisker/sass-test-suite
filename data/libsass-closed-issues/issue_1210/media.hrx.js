// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1210/media.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  @at-root {\n    @media print {\n      bar {\n        color: red;\n      }\n    }\n\n    baz {\n      @media speech {\n        color: blue;\n      }\n    }\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '@media print {\n  bar {\n    color: red;\n  }\n}\n@media speech {\n  baz {\n    color: blue;\n  }\n}\n',
  },
]
