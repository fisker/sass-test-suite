// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_823.hrx

export default [
  {
    name: 'input.scss',
    data: '%test {\n  > {\n    .red {\n      color: #F00;\n    }\n  }\n}\n\np {\n  @extend %test;\n\n  > {\n    a {\n      @extend %test;\n    }\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: 'p > a > .red, p > .red {\n  color: #F00;\n}\n',
  },
]
