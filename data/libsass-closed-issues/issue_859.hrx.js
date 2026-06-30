// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_859.hrx

export default [
  {
    name: 'input.scss',
    data: '@media screen {\n  .two {\n    @at-root .one {\n      background: blue;\n      .three {\n        color: red;\n      }\n    }\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '@media screen {\n  .one {\n    background: blue;\n  }\n  .one .three {\n    color: red;\n  }\n}\n',
  },
]
