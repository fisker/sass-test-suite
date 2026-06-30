// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1297.hrx

export default [
  {
    name: 'input.scss',
    data: '.test .testa {\n  @at-root #{"%foo"} {\n    color: red;\n  }\n  @extend %foo;\n}\n',
  },
  {
    name: 'output.css',
    data: '.test .testa {\n  color: red;\n}\n',
  },
]
